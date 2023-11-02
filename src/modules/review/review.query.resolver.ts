import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { ReviewService } from './review.service';
import { Review } from './vo/review.vo';
import { ReviewFilter } from './vo/review-filter.vo';
import { ReviewPagination } from './vo/review-pagination.vo';

@Resolver()
export class ReviewQueryResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => ReviewPagination, { description: '리뷰 목록 조회' })
  reviewList(
    @Args({
      name: 'limit',
      type: () => Int,
      nullable: true,
      description: 'limit',
      defaultValue: 10,
    })
    limit: number,
    @Args({
      name: 'offset',
      type: () => Int,
      nullable: true,
      description: 'offset',
      defaultValue: 0,
    })
    offset: number,
    @Args({
      name: 'filter',
      type: () => ReviewFilter,
      nullable: true,
      description: '검색 필터 (placeId: 장소 ID, keyword: 검색어)',
      defaultValue: {
        placeId: null,
        keyword: null,
      },
    })
    filter: ReviewFilter,
  ): ReviewPagination {
    return this.reviewService.getReviewList(limit, offset, filter);
  }

  @Query(() => Review, { description: '리뷰 조회' })
  review(
    @Args({ name: 'id', type: () => Int, description: '리뷰 ID (PK)' })
    id: number,
  ): Review {
    return this.reviewService.getReview(id);
  }
}
