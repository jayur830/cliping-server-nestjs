import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';

import { UserService } from './user.service';
import { UpdateProfileInput } from './vo/update-profile-input.vo';
import { UpdateProfilePayload } from './vo/update-profile-payload.vo';
import { User } from './vo/user.vo';

@Resolver()
export class UserMutationResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User, {
    description: '유저 팔로우',
  })
  User_follow(
    @Args({ name: 'id', type: () => Int, description: '유저 ID (PK)' })
    id: number,
    @Args({
      name: 'follow',
      type: () => Boolean,
      description: 'true: 팔로우, false: 언팔',
    })
    follow: boolean,
  ) {
    return this.userService.updateUserFollow(id, follow);
  }

  @Mutation(() => UpdateProfilePayload, {
    description: '프로필 상세 정보 수정',
  })
  Profile_update(
    @Args({ name: 'input', type: () => UpdateProfileInput })
    input: UpdateProfileInput,
  ): UpdateProfilePayload {
    return this.userService.updateProfile(input);
  }
}
