import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { faker } from '@faker-js/faker';

import { FollowPagination } from './vo/follow-pagination.vo';
import { Me } from './vo/me.vo';
import { UpdateProfileInput } from './vo/update-profile-input.vo';
import { UpdateProfilePayload } from './vo/update-profile-payload.vo';
import { User } from './vo/user.vo';

@Injectable()
export class UserService {
  getMe(): Me {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      userId: faker.number.int({ min: 10000000, max: 99999999 }),
    };
  }

  getUser(id: number): User {
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

  getFollowerList(limit: number, offset: number): FollowPagination {
    return {
      limit,
      offset,
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

  getFollowingList(limit: number, offset: number): FollowPagination {
    return {
      limit,
      offset,
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

  updateUserFollow(id: number, follow: boolean) {
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
    };
  }

  updateProfile(input: UpdateProfileInput): UpdateProfilePayload {
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
