import { Args, Int, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import * as dayjs from 'dayjs';
import { faker } from '@faker-js/faker';

import { FollowPagination } from './vo/follow-pagination.vo';
import { Me } from './vo/me.vo';
import { User } from './vo/user.vo';

@Resolver(() => User)
export class UserQueryResolver {
  @Query(() => Me, { description: '로그인한 유저의 개인 정보' })
  me(): Me {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      userId: faker.number.int({ min: 10000000, max: 99999999 }),
    };
  }

  @Query(() => User, { description: '유저 상세 정보' })
  user(@Args({ name: 'id', type: () => Int }) id: number): User {
    return {
      id,
      nickName: faker.person.fullName(),
      createdAt: dayjs(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
      profile: {
        description: faker.lorem.paragraph(8),
        subTitle: faker.lorem.lines(1),
        backgroundImageUrl: faker.image.url(),
        profileImageUrl: faker.image.url(),
        instagramUrl: faker.internet.url(),
      },
      followerCount: faker.number.int({ max: 999 }),
      followingCount: faker.number.int({ max: 999 }),
      reviewCount: faker.number.int({ max: 999 }),
    };
  }

  @Query(() => FollowPagination, { description: '팔로워 목록' })
  followerList(
    @Args({ name: 'limit', type: () => Int, nullable: true, defaultValue: 10 })
    limit: number = 10,
    @Args({ name: 'offset', type: () => Int, nullable: true, defaultValue: 0 })
    offset: number = 0,
  ): FollowPagination {
    return {
      limit: 10,
      offset: 0,
      total: faker.number.int(),
      list: Array(faker.number.int({ max: 10 }))
        .fill(1)
        .map(() => ({
          id: faker.number.int({ min: 10000000, max: 99999999 }),
          nickName: faker.person.fullName(),
          profileImageUrl: faker.image.url(),
        })),
    };
  }

  @Query(() => FollowPagination, { description: '팔로잉 목록' })
  followingList(
    @Args({ name: 'limit', type: () => Int, nullable: true, defaultValue: 10 })
    limit: number = 10,
    @Args({ name: 'offset', type: () => Int, nullable: true, defaultValue: 0 })
    offset: number = 0,
  ): FollowPagination {
    return {
      limit: 10,
      offset: 0,
      total: faker.number.int(),
      list: Array(faker.number.int({ max: 10 }))
        .fill(1)
        .map(() => ({
          id: faker.number.int({ min: 10000000, max: 99999999 }),
          nickName: faker.person.fullName(),
          profileImageUrl: faker.image.url(),
        })),
    };
  }
}
