export enum role {
  User,
  Admin,
  Boss
}

export interface User {
  username: string;
  password: string;
  roles: Array<role>;
}

// mock data
export const Users: Array<User> = [
  {
    username: 'Balazs',
    password: 'passw123',
    roles: [role.User, role.Admin]
  },
  {
    username: 'Feri',
    password: 'passw1',
    roles: [role.User]
  },
  {
    username: 'dobii',
    password: 'password2',
    roles: [role.User, role.Admin, role.Boss]
  }
];
