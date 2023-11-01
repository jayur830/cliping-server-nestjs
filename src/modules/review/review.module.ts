import { Module } from '@nestjs/common';

import { ReviewMutationResolver } from './review.mutation.resolver';
import { ReviewQueryResolver } from './review.query.resolver';
import { ReviewService } from './review.service';

@Module({
  providers: [ReviewQueryResolver, ReviewMutationResolver, ReviewService],
})
export class ReviewModule {}
