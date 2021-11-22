import { Permission } from './permission';

export interface AccessInfo {
  username: string;
  userFullName: string;
  rol: string;
  authToken: string;
  permissions: Array<Permission>;
}
