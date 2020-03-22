import { User } from "./user";
export interface UserGrant {
  id: string;
  userId: string;
  recordId: string;
  tableName: string;
  canView: boolean;
  canInsert: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  user: User;
}
