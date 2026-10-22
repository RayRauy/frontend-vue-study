export interface RoleConfig {
  label: string;
  color: string;
}

export const roleConfig: Record<string, RoleConfig> = {
  SUPER_ADMIN: {
    label: "Super Admin",
    color: "purple",
  },

  ADMIN: {
    label: "Admin",
    color: "red",
  },

  CASHIER: {
    label: "Cashier",
    color: "blue",
  },

  TEACHER: {
    label: "Teacher",
    color: "green",
  },
};

export const getRoleConfig = (role: string): RoleConfig => {
  return (
    roleConfig[role] ?? {
      label: normalizeRoleName(role),
      color: "grey",
    }
  );
};

export const normalizeRoleName = (role: string): string => {
  return role
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
