import { Field, InputType } from '@nestjs/graphql';

import { ReviewPlace } from './review-place.vo';

@InputType()
export class ReviewPlaceInput implements ReviewPlace {
  @Field(() => String, { description: '장소 ID' })
  id: string;

  @Field(() => String, { description: '장소 이름' })
  name: string;

  @Field(() => String, { description: '주소', nullable: true })
  address: string | null;
}
