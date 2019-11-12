import { Role } from './role';

export interface RoleGrant {
  id: string;
  tableName: string;
  canViewAll: boolean;
  canSelfView: boolean;
  canInsert: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  role: Role;
}
