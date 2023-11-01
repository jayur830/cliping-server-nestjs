import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ReviewPlacePayload } from './review-place-payload.vo';

@ObjectType()
export class CreateReviewPayload {
  @Field(() => String, { description: '리뷰 제목' })
  title: string;

  @Field(() => String, { description: '리뷰 내용' })
  content: string;

  @Field(() => String, { description: '첨부 이미지', nullable: true })
  imageUrl: string | null;

  @Field(() => Int, { description: '평점' })
  rating: number;

  @Field(() => String, { description: '인스타그램 업로드 URL', nullable: true })
  instagramPostUrl: string | null;

  @Field(() => ReviewPlacePayload, { description: '리뷰 장소', nullable: true })
  place: ReviewPlacePayload | null;
}
