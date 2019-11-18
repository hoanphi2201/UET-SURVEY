export interface Role {
  id: string;
  name: string;
  roleAcp: boolean;
  createdAt: Date;
  updatedAt: Date;
  defaultSignUp?: boolean;
}
