import { UserModal } from './user.modal';
export const authProvider = [
  {
    provide: 'AUTH_REPOSITORY',
    useValue: UserModal,
  },
];
