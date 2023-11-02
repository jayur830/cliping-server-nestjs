import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '리뷰 좋아요 정보' })
export class ReviewLikePayload {
  @Field(() => Int, { description: '리뷰 ID (PK)' })
  id: number;

  @Field(() => Boolean, { description: '좋아요' })
  like: boolean;
}
