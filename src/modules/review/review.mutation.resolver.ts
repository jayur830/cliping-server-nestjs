import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';

import { ReviewService } from './review.service';
import { CreateReviewInput } from './vo/create-review-input.vo';
import { CreateReviewPayload } from './vo/create-review-payload.vo';
import { ReviewLikePayload } from './vo/review-like-payload.vo';

@Resolver()
export class ReviewMutationResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Mutation(() => CreateReviewPayload, { description: '리뷰 등록' })
  Review_create(
    @Args({ name: 'input', type: () => CreateReviewInput })
    input: CreateReviewInput,
  ): CreateReviewPayload {
    return this.reviewService.createReview(input);
  }

  @Mutation(() => ReviewLikePayload, { description: '리뷰 좋아요 누르기' })
  Review_like(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args({ name: 'like', type: () => Boolean }) like: boolean,
  ): ReviewLikePayload {
    return this.reviewService.updateReviewLike(id, like);
  }
}
