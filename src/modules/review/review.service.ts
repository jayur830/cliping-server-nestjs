import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { faker } from '@faker-js/faker';

import { CreateReviewInput } from './vo/create-review-input.vo';
import { CreateReviewPayload } from './vo/create-review-payload.vo';
import { Review } from './vo/review.vo';
import { ReviewFilter } from './vo/review-filter.vo';
import { ReviewLikePayload } from './vo/review-like-payload.vo';
import { ReviewPagination } from './vo/review-pagination.vo';

@Injectable()
export class ReviewService {
  getReviewList(
    limit: number,
    offset: number,
    filter: ReviewFilter,
  ): ReviewPagination {
    console.log(filter);

    return {
      limit,
      offset,
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

  getReview(id: number): Review {
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

  createReview(input: CreateReviewInput): CreateReviewPayload {
    return {
      title: faker.lorem.lines(1),
      content: faker.lorem.paragraph(8),
      imageUrl: faker.image.url(),
      rating: faker.number.int({ max: 5 }),
      instagramPostUrl: faker.internet.url(),
      place: {
        id: faker.string.alphanumeric({ length: 10 }),
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
      },
    };
  }

  updateReviewLike(id: number, like: boolean): ReviewLikePayload {
    return {
      id,
      like,
    };
  }
}
