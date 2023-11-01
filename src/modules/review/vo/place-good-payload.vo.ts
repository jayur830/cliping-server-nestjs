import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReviewGoodPayload {
  @Field(() => Int, { description: '리뷰 ID (PK)' })
  id: number;

  @Field(() => Boolean, { description: '좋아요' })
  good: boolean;
}
