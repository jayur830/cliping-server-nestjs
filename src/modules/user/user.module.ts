import { Module } from '@nestjs/common';

import { UserMutationResolver } from './user.mutation.resolver';
import { UserQueryResolver } from './user.query.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserQueryResolver, UserMutationResolver, UserService],
})
export class UserModule {}
