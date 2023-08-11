import { Inject, Injectable } from '@nestjs/common';
import { UserModal } from './user.modal';
import { AuthModule } from './auth.module';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_REPOSITORY')
    private readonly authRepository: typeof UserModal,
  ) {}

  public async getUsers(): Promise<UserModal[]> {
    return await this.authRepository.findAll();
  }
  public async craeteUser(email: string, password: string): Promise<UserModal> {
    try {
      const userExsists = await this.authRepository.findOne({
        where: { email: email },
      });
      if (userExsists) {
        throw Error('user alerady exsists');
      }
      return await this.authRepository.create({ email, password });
    } catch (err) {
      throw err;
    }
  }
}
