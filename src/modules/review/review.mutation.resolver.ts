import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { faker } from '@faker-js/faker';

import { CreateReviewInput } from './vo/create-review-input.vo';
import { CreateReviewPayload } from './vo/create-review-payload.vo';
import { ReviewGoodPayload } from './vo/place-good-payload.vo';

@Resolver()
export class ReviewMutationResolver {
  @Mutation(() => CreateReviewPayload, { description: '리뷰 등록' })
  Review_create(
    @Args({ name: 'input', type: () => CreateReviewInput })
    input: CreateReviewInput,
  ): CreateReviewPayload {
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

  @Mutation(() => ReviewGoodPayload, { description: '리뷰 좋아요 누르기' })
  Review_good(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args({ name: 'good', type: () => Boolean }) good: boolean,
  ): ReviewGoodPayload {
    return {
      id,
      good,
    };
  }
}
