import { Field, InputType, Int } from '@nestjs/graphql';

import { ReviewPlaceInput } from './review-place-input.vo';

@InputType()
export class CreateReviewInput {
  @Field(() => String, { description: '리뷰 제목' })
  title: string;

  @Field(() => String, { description: '리뷰 내용' })
  content: string;

  @Field(() => String, { description: '첨부 이미지', nullable: true })
  imageUrl: string | null;

  @Field(() => Int, { description: '평점', nullable: true, defaultValue: 0 })
  rating: number | null;

  @Field(() => String, { description: '인스타그램 업로드 URL', nullable: true })
  instagramPostUrl: string | null;

  @Field(() => ReviewPlaceInput, { description: '리뷰 장소', nullable: true })
  place: ReviewPlaceInput | null;
}
