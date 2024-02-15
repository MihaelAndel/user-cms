export enum PermissionType {
  SUPER_ADMIN,
  ADMIN,
  EMPLOYEE,
}

export enum UserRole {
  SUPER_ADMIN = 'Super Admin',
  ADMIN = 'Admin',
  HR_ADMIN = 'HR Admin',
  EMPLOYEE = 'Employee'
}

export interface Permission {
  type: PermissionType
  read: boolean
  write: boolean
  delete: boolean
}

export interface User {
  userID: string
  name: string
  surname: string
  role: UserRole
  createDate?: string
  email: string
  persmissions?: Permission[]
  password: string
  phone: string
  username: string
}