<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import { getUsers } from "@/api/user";
import type { UserModel } from "@/model/user.model";
import { getRoleConfig } from "@/util/role-config";

const users = ref<UserModel[]>([]);
const loading = ref(false);
const error = ref("");
const search = ref("");
const page = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(0);

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

onMounted(loadUsers);
</script>

<template>
  <div class="user-page">
    <!-- Page Header -->
    <div class="page-header">
      <div>
        <h1>Users</h1>
        <p>Manage system users and their access status.</p>
      </div>

      <el-button type="primary"> Add User </el-button>
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
        <el-table-column label="Actions" width="170" align="center">
          <template #default="{ row }">
            <el-button size="small" @click="console.log('Edit', row)">
              Edit
            </el-button>

            <el-button
              size="small"
              type="danger"
              plain
              @click="console.log('Delete', row)"
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
  </div>
</template>

<style scoped>
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
