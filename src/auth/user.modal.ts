import { ObjectType, Field } from '@nestjs/graphql';
import { Column, DataType, Table, Model } from 'sequelize-typescript';
@Table
@ObjectType()
export class UserModal extends Model {
  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field()
  password: string;
}
