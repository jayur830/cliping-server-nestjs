import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PlaceGoodPayload {
  @Field(() => String, { description: '장소 ID' })
  placeId: string;

  @Field(() => Boolean, { description: '좋아요' })
  good: boolean;
}
