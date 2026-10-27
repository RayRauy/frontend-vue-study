<script setup lang="ts">
import { onMounted, ref, watch, reactive } from "vue";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  setUserEnabled,
  setAccountNonLocked,
  setAccountNonExpired,
  setCredentialsNonExpired,
  uploadProfileImage,
} from "@/api/user";

import { getAllRoles } from "@/api/role";
import type { UserModel, UserRequest } from "@/model/user.model";
import type { RoleModel } from "@/model/role.model";
import { getRoleConfig } from "@/util/role-config";
import type { ElFormItem, UploadFile } from "element-plus";

const users = ref<UserModel[]>([]);
const roles = ref<RoleModel[]>([]);

const saving = ref(false);
const deleting = ref(false);
const loading = ref(false);

const profileImage = ref<File | null>(null);
const error = ref("");
const search = ref("");
const page = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(0);

const handleProfileImage = (uploadFile: UploadFile) => {
  if (uploadFile.raw) {
    profileImage.value = uploadFile.raw;
  }
};

const loadUsers = async () => {
  loading.value = true;
  error.value = "";

  try {
    const response = await getUsers(
      page.value - 1,
      itemsPerPage.value,
      search.value.trim(),
    );

    users.value = response.data;
    totalItems.value = response.pagination?.totalElements ?? 0;
  } catch (err) {
    console.error(err);
    error.value = "Failed to load users.";
  } finally {
    loading.value = false;
  }
};

/* -----------------------------
   CREATE / EDIT
----------------------------- */

const formDialog = ref(false);

const editingUser = ref<UserModel | null>(null);

const form = reactive<UserRequest & { enabled: boolean }>({
  name: "",
  email: "",
  password: "",
  profile: null,
  roleIds: [],
  enabled: true,
});

/* -----------------------------
   DELETE
----------------------------- */

const deleteDialog = ref(false);
const selectedUser = ref<UserModel | null>(null);

/* -----------------------------
   SECURITY
----------------------------- */

const securityDialog = ref(false);

const securityUser = ref<UserModel | null>(null);
/* -----------------------------
   LOAD ROLES
----------------------------- */

const loadRoles = async () => {
  try {
    const response = await getAllRoles();
    roles.value = response.data;
  } catch (err) {
    console.error(err);
    error.value = "Failed to load roles.";
  }
};

/* -----------------------------
   CREATE
----------------------------- */

const openCreateDialog = () => {
  editingUser.value = null;

  form.name = "";
  form.email = "";
  form.password = "";
  form.profile = null;
  form.roleIds = [];
  form.enabled = true;
  formDialog.value = true;
};

/* -----------------------------
   EDIT
----------------------------- */

const openEditDialog = (user: UserModel) => {
  editingUser.value = user;

  form.name = user.name;
  form.email = user.email;
  form.password = "";
  form.profile = user.profile;

  // Convert role names from UserResponse
  // into role IDs for the select
  form.roleIds = roles.value
    .filter((role) => user.roles.includes(role.name))
    .map((role) => role.id);
  form.enabled = user.enabled;
  formDialog.value = true;
};

/* -----------------------------
   SAVE
----------------------------- */

const saveUser = async () => {
  saving.value = true;
  error.value = "";

  try {
    const request: UserRequest = {
      name: form.name.trim(),
      email: form.email.trim(),
      profile: form.profile,
      roleIds: form.roleIds,
    };

    if (form.password?.trim()) {
      request.password = form.password;
    }

    let userId: number;

    if (editingUser.value) {
      // 1. Update user
      const response = await updateUser(editingUser.value.id, request);

      userId = response.data.id;

      // 2. Update enabled status
      await setUserEnabled(userId, form.enabled);
    } else {
      // Password required when creating
      if (!form.password?.trim()) {
        error.value = "Password is required.";
        return;
      }

      // 1. Create user
      const response = await createUser(request);

      userId = response.data.id;

      // 2. Set enabled status
      await setUserEnabled(userId, form.enabled);
    }

    // 3. Upload profile image if selected
    if (profileImage.value) {
      await uploadProfileImage(userId, profileImage.value);
    }

    formDialog.value = false;
    profileImage.value = null;

    await loadUsers();
  } catch (err) {
    console.error(err);
    error.value = "Failed to save user.";
  } finally {
    saving.value = false;
  }
};

/* -----------------------------
   DELETE
----------------------------- */

const openDeleteDialog = (user: UserModel) => {
  selectedUser.value = user;
  deleteDialog.value = true;
};

const confirmDelete = async () => {
  if (!selectedUser.value) return;

  deleting.value = true;
  error.value = "";

  try {
    await deleteUser(selectedUser.value.id);

    deleteDialog.value = false;
    selectedUser.value = null;

    await loadUsers();
  } catch (err) {
    console.error(err);
    error.value = "Failed to delete user.";
  } finally {
    deleting.value = false;
  }
};

/* -----------------------------
   SECURITY
----------------------------- */

const openSecurityDialog = (user: UserModel) => {
  securityUser.value = user;
  securityDialog.value = true;
};

const updateEnabled = async (value: boolean) => {
  if (!securityUser.value) return;

  try {
    await setUserEnabled(securityUser.value.id, value);
    securityUser.value.enabled = value;

    await loadUsers();
  } catch (err) {
    console.error(err);
    error.value = "Failed to update user status.";
  }
};

const updateAccountLocked = async (value: boolean) => {
  if (!securityUser.value) return;

  try {
    await setAccountNonLocked(securityUser.value.id, value);

    securityUser.value.accountNotLocked = value;
  } catch (err) {
    console.error(err);
    error.value = "Failed to update account lock status.";
  }
};

const updateAccountExpired = async (value: boolean) => {
  if (!securityUser.value) return;

  try {
    await setAccountNonExpired(securityUser.value.id, value);

    securityUser.value.accountNotExpired = value;
  } catch (err) {
    console.error(err);
    error.value = "Failed to update account expiry.";
  }
};

const updateCredentialsExpired = async (value: boolean) => {
  if (!securityUser.value) return;

  try {
    await setCredentialsNonExpired(securityUser.value.id, value);

    securityUser.value.credentialsNotExpired = value;
  } catch (err) {
    console.error(err);
    error.value = "Failed to update credential expiry.";
  }
};

let searchTimeout: ReturnType<typeof setTimeout>;

watch(search, () => {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    if (page.value !== 1) {
      page.value = 1;
    } else {
      loadUsers();
    }
  }, 400);
});

watch(page, () => {
  loadUsers();
});

watch(itemsPerPage, () => {
  if (page.value !== 1) {
    page.value = 1;
  } else {
    loadUsers();
  }
});

onMounted(() => {
  loadUsers();
  loadRoles();
});
</script>

<template>
  <div class="user-page">
    <!-- Page Header -->
    <div class="page-header">
      <div>
        <h1>Users</h1>
        <p>Manage system users and their access status.</p>
      </div>

      <el-button type="primary" @click="openCreateDialog"> Add User </el-button>
    </div>

    <!-- Error -->
    <el-alert
      v-if="error"
      :title="error"
      type="error"
      show-icon
      :closable="false"
      class="error-alert"
    />

    <!-- User Card -->
    <el-card shadow="never">
      <!-- Table Header -->
      <div class="table-header">
        <div>
          <div class="table-title">User List</div>
          <div class="table-subtitle">{{ totalItems }} users</div>
        </div>

        <el-input
          v-model="search"
          placeholder="Search users..."
          clearable
          class="search-input"
        />
      </div>

      <!-- Table -->
      <el-table v-loading="loading" :data="users" stripe style="width: 100%">
        <el-table-column prop="id" label="#" width="80" />
        <el-table-column prop="name" label="Name" min-width="150" />
        <el-table-column prop="email" label="Email" min-width="220" />
        <el-table-column prop="profile" label="Profile" min-width="150">
          <template #default="{ row }">
            {{ row.profile || "-" }}
          </template>
        </el-table-column>

        <!-- Roles -->
        <el-table-column label="Roles" min-width="200">
          <template #default="{ row }">
            <div class="roles">
              <el-tag
                v-for="role in row.roles"
                :key="role"
                effect="light"
                size="small"
              >
                {{ getRoleConfig(role).label }}
              </el-tag>
            </div>
          </template>
        </el-table-column>

        <!-- Status -->
        <el-table-column label="Status" width="120">
          <template #default="{ row }">
            <el-tag
              :type="row.enabled ? 'success' : 'danger'"
              effect="light"
              size="small"
            >
              {{ row.enabled ? "Active" : "Disabled" }}
            </el-tag>
          </template>
        </el-table-column>

        <!-- Actions -->
        <el-table-column label="Actions" width="230" align="center">
          <template #default="{ row }">
            <el-button size="small" @click="openEditDialog(row)">
              Edit
            </el-button>

            <el-button
              size="small"
              type="warning"
              plain
              @click="openSecurityDialog(row)"
            >
              Security
            </el-button>

            <el-button
              size="small"
              type="danger"
              plain
              @click="openDeleteDialog(row)"
            >
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- Pagination -->
      <div class="pagination-container">
        <el-pagination
          v-model:current-page="page"
          v-model:page-size="itemsPerPage"
          :page-sizes="[10, 20, 50]"
          :total="totalItems"
          layout="total, sizes, prev, pager, next"
          background
        />
      </div>
    </el-card>

    <!-- Create / Edit User -->
    <el-dialog
      v-model="formDialog"
      :title="editingUser ? 'Edit User' : 'Add User'"
      width="520px"
    >
      <el-form label-position="top">
        <el-form-item label="Name">
          <el-input v-model="form.name" placeholder="Enter name" />
        </el-form-item>

        <el-form-item label="Email">
          <el-input
            v-model="form.email"
            type="email"
            placeholder="Enter email"
          />
        </el-form-item>

        <el-form-item :label="editingUser ? 'New Password' : 'Password'">
          <el-input
            v-model="form.password"
            type="password"
            show-password
            :placeholder="
              editingUser
                ? 'Leave blank to keep current password'
                : 'Enter password'
            "
          />
        </el-form-item>

        <el-form-item label="Roles">
          <el-select
            v-model="form.roleIds"
            multiple
            placeholder="Select roles"
            style="width: 100%"
          >
            <el-option
              v-for="role in roles"
              :key="role.id"
              :label="getRoleConfig(role.name).label"
              :value="role.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Enabled">
          <el-switch v-model="form.enabled" />
        </el-form-item>

        <el-form-item label="Profile Image">
          <el-upload
            :auto-upload="false"
            :show-file-list="true"
            :limit="1"
            accept="image/*"
            :on-change="handleProfileImage"
          >
            <el-button>Select Image</el-button>
          </el-upload>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button @click="formDialog = false"> Cancel </el-button>

        <el-button type="primary" :loading="saving" @click="saveUser">
          {{ editingUser ? "Update" : "Create" }}
        </el-button>
      </template>
    </el-dialog>

    <!-- Delete Confirmation -->
    <el-dialog v-model="deleteDialog" title="Delete User" width="420px">
      <p>
        Are you sure you want to delete
        <strong>{{ selectedUser?.name }}</strong
        >?
      </p>

      <template #footer>
        <el-button @click="deleteDialog = false"> Cancel </el-button>

        <el-button type="danger" :loading="deleting" @click="confirmDelete">
          Delete
        </el-button>
      </template>
    </el-dialog>

    <!-- Security Settings -->
    <el-dialog v-model="securityDialog" title="Account Security" width="500px">
      <div v-if="securityUser">
        <div class="security-user">
          <strong>{{ securityUser.name }}</strong>
          <span>{{ securityUser.email }}</span>
        </div>

        <div class="security-option">
          <div>
            <div class="security-title">Account Not Locked</div>

            <div class="security-description">
              Allow the account to authenticate.
            </div>
          </div>

          <el-switch
            :model-value="securityUser.accountNotLocked"
            @change="updateAccountLocked"
          />
        </div>

        <div class="security-option">
          <div>
            <div class="security-title">Account Not Expired</div>

            <div class="security-description">
              The user account has not expired.
            </div>
          </div>

          <el-switch
            :model-value="securityUser.accountNotExpired"
            @change="updateAccountExpired"
          />
        </div>

        <div class="security-option">
          <div>
            <div class="security-title">Credentials Not Expired</div>

            <div class="security-description">
              The user's credentials are still valid.
            </div>
          </div>

          <el-switch
            :model-value="securityUser.credentialsNotExpired"
            @change="updateCredentialsExpired"
          />
        </div>
      </div>

      <template #footer>
        <el-button @click="securityDialog = false"> Close </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.security-user {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 16px;
  margin-bottom: 4px;
  border-bottom: 1px solid #ebeef5;
}

.security-user span {
  color: #909399;
  font-size: 13px;
}

.security-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid #ebeef5;
}

.security-title {
  font-weight: 500;
}

.security-description {
  margin-top: 4px;
  color: #909399;
  font-size: 13px;
}
.user-page {
  padding: 24px;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.page-header h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.page-header p {
  margin: 6px 0 0;
  color: #6c757d;
  font-size: 14px;
}

.error-alert {
  margin-bottom: 16px;
}

.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.table-title {
  font-size: 18px;
  font-weight: 600;
}

.table-subtitle {
  margin-top: 4px;
  color: #909399;
  font-size: 14px;
}

.search-input {
  width: 280px;
}

.roles {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
}
</style>
