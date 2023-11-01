import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthProvider } from '@/enums/auth-provider.enum';

@Resolver()
export class AuthResolver {
  @Mutation(() => Boolean, { description: '로그인' })
  signIn(
    @Args({ name: 'provider', type: () => AuthProvider })
    provider: AuthProvider,
  ): boolean {
    return true;
  }

  @Mutation(() => Boolean, { description: '로그아웃' })
  signOut(): boolean {
    return true;
  }
}
