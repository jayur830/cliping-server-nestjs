import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthProvider } from '@/enums/auth-provider.enum';

import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Boolean, { description: '로그인' })
  signIn(
    @Args({ name: 'provider', type: () => AuthProvider })
    provider: AuthProvider,
  ): boolean {
    return this.authService.signIn(provider);
  }

  @Mutation(() => Boolean, { description: '로그아웃' })
  signOut(): boolean {
    return this.authService.signOut();
  }
}
