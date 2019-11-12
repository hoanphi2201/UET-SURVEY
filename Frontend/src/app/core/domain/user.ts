import { Role } from './role';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  role: Role;
  confirmPassword?: string;
  jobRole?: string;
  jobLevel?: string;
  organization?: Organization;
  accountComplete: boolean;
}
export interface Organization {
  organizationType?: string;
  industry?: string;
  location?: string;
  size?: string;
}
