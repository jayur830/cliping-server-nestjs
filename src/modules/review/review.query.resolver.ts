import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import * as dayjs from 'dayjs';
import { faker } from '@faker-js/faker';

import { Review } from './vo/review.vo';
import { ReviewFilter } from './vo/review-filter.vo';
import { ReviewPagination } from './vo/review-pagination.vo';

@Resolver()
export class ReviewQueryResolver {
  @Query(() => ReviewPagination, { description: '리뷰 목록 조회' })
  reviewList(
    @Args({
      name: 'limit',
      type: () => Int,
      nullable: true,
      description: 'limit',
    })
    limit: number,
    @Args({
      name: 'offset',
      type: () => Int,
      nullable: true,
      description: 'offset',
    })
    offset: number,
    @Args({
      name: 'filter',
      type: () => ReviewFilter,
      nullable: true,
      description: '검색 필터 (placeId: 장소 ID, keyword: 검색어)',
    })
    filter: ReviewFilter,
  ): ReviewPagination {
    return {
      limit: limit ?? 10,
      offset: offset ?? 0,
      total: faker.number.int({ max: 9999 }),
      list: Array(faker.number.int({ max: limit ?? 9999 }))
        .fill(1)
        .map(() => ({
          id: faker.number.int({ min: 10000000, max: 99999999 }),
          place: {
            id: faker.string.alphanumeric({ length: 10 }),
            name: faker.person.fullName(),
            address: faker.location.streetAddress(),
          },
          user: {
            id: faker.number.int({ min: 10000000, max: 99999999 }),
            profileImageUrl: faker.image.url(),
          },
          title: faker.lorem.lines(1),
          content: faker.lorem.paragraph(8),
          imageUrl: faker.image.url(),
          like: faker.number.int({ max: 1000 }),
          rating: faker.number.int({ max: 5 }),
          instagramPostUrl: faker.internet.url(),
          createdAt: dayjs(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: dayjs(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
        })),
    };
  }

  @Query(() => Review, { description: '리뷰 조회' })
  review(
    @Args({ name: 'id', type: () => Int, description: '리뷰 ID (PK)' })
    id: number,
  ): Review {
    return {
      id,
      place: {
        id: faker.string.alphanumeric({ length: 10 }),
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
      },
      user: {
        id: faker.number.int({ min: 10000000, max: 99999999 }),
        profileImageUrl: faker.image.url(),
      },
      title: faker.lorem.lines(1),
      content: faker.lorem.paragraph(8),
      imageUrl: faker.image.url(),
      like: faker.number.int({ max: 1000 }),
      rating: faker.number.int({ max: 5 }),
      instagramPostUrl: faker.internet.url(),
      createdAt: dayjs(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: dayjs(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
    };
  }
}
