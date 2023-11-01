import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import * as dayjs from 'dayjs';
import { faker } from '@faker-js/faker';

import { UpdateProfileInput } from './vo/update-profile-input.vo';
import { UpdateProfilePayload } from './vo/update-profile-payload.vo';
import { User } from './vo/user.vo';

@Resolver()
export class UserMutationResolver {
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
    return {
      id: faker.number.int({ min: 10000000, max: 99999999 }),
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
      followerList: {
        limit: 10,
        offset: 0,
        total: faker.number.int(),
        list: Array(faker.number.int({ max: 10 }))
          .fill(1)
          .map(() => ({
            id: faker.number.int({ min: 10000000, max: 99999999 }),
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
            followerList: {
              limit: 10,
              offset: 0,
              total: 0,
              list: [],
            },
            followingList: {
              limit: 10,
              offset: 0,
              total: 0,
              list: [],
            },
          })),
      },
      followingList: {
        limit: 10,
        offset: 0,
        total: faker.number.int(),
        list: Array(faker.number.int({ max: 10 }))
          .fill(1)
          .map(() => ({
            id: faker.number.int({ min: 10000000, max: 99999999 }),
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
            followerList: {
              limit: 10,
              offset: 0,
              total: 0,
              list: [],
            },
            followingList: {
              limit: 10,
              offset: 0,
              total: 0,
              list: [],
            },
          })),
      },
    };
  }

  @Mutation(() => UpdateProfilePayload, {
    description: '프로필 상세 정보 수정',
  })
  Profile_update(
    @Args({ name: 'input', type: () => UpdateProfileInput })
    input: UpdateProfileInput,
  ): UpdateProfilePayload {
    return {
      nickName: faker.person.fullName(),
      description: faker.lorem.paragraph(8),
      subTitle: faker.lorem.lines(1),
      backgroundImageUrl: faker.image.url(),
      profileImageUrl: faker.image.url(),
      instagramUrl: faker.internet.url(),
    };
  }
}
