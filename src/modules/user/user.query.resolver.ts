import { Args, Int, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

import { UserService } from './user.service';
import { FollowPagination } from './vo/follow-pagination.vo';
import { Me } from './vo/me.vo';
import { User } from './vo/user.vo';

@Resolver(() => User)
export class UserQueryResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => Me, { description: '로그인한 유저의 개인 정보' })
  me(): Me {
    return this.userService.getMe();
  }

  @Query(() => User, { description: '유저 상세 정보' })
  user(@Args({ name: 'id', type: () => Int }) id: number): User {
    return this.userService.getUser(id);
  }

  @Query(() => FollowPagination, { description: '팔로워 목록' })
  followerList(
    @Args({ name: 'limit', type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args({ name: 'offset', type: () => Int, nullable: true, defaultValue: 0 })
    offset: number,
  ): FollowPagination {
    return this.userService.getFollowerList(limit, offset);
  }

  @Query(() => FollowPagination, { description: '팔로잉 목록' })
  followingList(
    @Args({ name: 'limit', type: () => Int, nullable: true, defaultValue: 10 })
    limit: number,
    @Args({ name: 'offset', type: () => Int, nullable: true, defaultValue: 0 })
    offset: number,
  ): FollowPagination {
    return this.userService.getFollowingList(limit, offset);
  }
}
