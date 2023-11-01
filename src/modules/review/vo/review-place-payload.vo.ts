import { Field, ObjectType } from '@nestjs/graphql';

import { ReviewPlace } from './review-place.vo';

@ObjectType()
export class ReviewPlacePayload implements ReviewPlace {
  @Field(() => String, { description: '장소 ID' })
  id: string;

  @Field(() => String, { description: '장소 이름' })
  name: string;

  @Field(() => String, { description: '주소' })
  address: string;
}
