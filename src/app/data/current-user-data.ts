import { User, UserRole } from "../models/user.model";

export default {
  userID: 'lekanO',
  name: 'Lekan',
  surname: 'Okeowa',
  role: UserRole.ADMIN,
  createDate: 'today',
  email: 'test@test.test',
  password: 'test',
  phone: '123534',
  username: 'test',
} satisfies User