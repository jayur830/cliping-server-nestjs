import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthProvider } from '@/enums/auth-provider.enum';

@Resolver()
export class AuthResolver {
  @Mutation(() => Boolean)
  signIn(
    @Args({ name: 'provider', type: () => AuthProvider })
    provider: AuthProvider,
  ): boolean {
    return true;
  }

  @Mutation(() => Boolean)
  signOut(): boolean {
    return true;
  }
}
