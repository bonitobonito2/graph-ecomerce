// user.interface.ts
import { Model } from 'sequelize-typescript';

export interface UserModel extends Model {
  id: number;
  email: string;
  password: string;
  // Add other fields and methods if needed
}
