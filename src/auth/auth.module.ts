import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModal } from './user.modal';
import { authProvider } from './auth.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [], // Use an array, even for a single model
  providers: [AuthService, AuthResolver, ...authProvider],
})
export class AuthModule {}
