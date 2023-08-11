import { DataType, Sequelize } from 'sequelize-typescript';

const dotenv = require('dotenv');
import { UserModal } from '../auth/user.modal';
dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
      });
      sequelize.addModels([UserModal]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
