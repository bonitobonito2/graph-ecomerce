import { UserModal } from './user.modal';
import { AuthService } from './auth.service';
import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver((of) => UserModal)
export class AuthResolver {
  constructor(@Inject(AuthService) private authService: AuthService) {}
  @Query((returns) => Array.of(UserModal))
  public async getUser(): Promise<UserModal[]> {
    const data = await this.authService.getUsers();

    console.log(data[0]);
    return data;
  }

  @Mutation((returns) => UserModal)
  public async registration(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<UserModal> {
    return await this.authService.craeteUser(email, password);
  }
  //   @ResolveField((returns) => [InvoiceModel])
  //   async invoices(@Parent() customer) {
  //     const { id } = customer;
  //     console.log(customer);
  //     return this.invoiceService.findByCustomer(id);
  //   }

  //   @Query((returns) => [CustomerModel])
  //   async customers(): Promise<CustomerModel[]> {
  //     return await this.customerService.findAll();
  //   }

  //   @Mutation((returns) => CustomerModel)
  //   async createCustomer(
  //     @Args('name') name: string,
  //     @Args('email') email: string,
  //     @Args('phone', { nullable: true }) phone: string,
  //     @Args('address', { nullable: true }) address: string,
  //   ): Promise<CustomerModel> {
  //     return await this.customerService.create({ name, email, phone, address });
  //   }
}
