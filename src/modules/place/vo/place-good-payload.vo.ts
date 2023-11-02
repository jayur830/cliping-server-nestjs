import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '장소 좋아요 정보' })
export class PlaceLikePayload {
  @Field(() => String, { description: '장소 ID' })
  placeId: string;

  @Field(() => Boolean, { description: '좋아요' })
  like: boolean;
}
