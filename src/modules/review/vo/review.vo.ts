import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ReviewPlacePayload } from './review-place-payload.vo';
import { ReviewUser } from './review-user.vo';

@ObjectType({ description: '리뷰 상세 정보' })
export class Review {
  @Field(() => Int, { description: '리뷰 ID (PK)' })
  id: number;

  @Field(() => ReviewPlacePayload, { description: '리뷰 장소' })
  place: ReviewPlacePayload;

  @Field(() => ReviewUser, { description: '리뷰 작성 유저' })
  user: ReviewUser;

  @Field(() => String, { description: '리뷰 제목' })
  title: string;

  @Field(() => String, { description: '리뷰 내용' })
  content: string;

  @Field(() => String, { description: '첨부 이미지' })
  imageUrl: string;

  @Field(() => Int, { description: '좋아요 수' })
  like: number;

  @Field(() => Int, { description: '평점' })
  rating: number;

  @Field(() => String, { description: '인스타그램 업로드 URL' })
  instagramPostUrl: string;

  @Field(() => String, { description: '리뷰 생성일자' })
  createdAt: string;

  @Field(() => String, { description: '리뷰 수정일자' })
  updatedAt: string;
}
