import { Injectable } from '@nestjs/common';

import { AuthProvider } from '@/enums/auth-provider.enum';

@Injectable()
export class AuthService {
  signIn(provider: AuthProvider): boolean {
    return true;
  }

  signOut(): boolean {
    return true;
  }
}
