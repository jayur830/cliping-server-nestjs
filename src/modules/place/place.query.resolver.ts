import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { faker } from '@faker-js/faker';

@Resolver()
export class PlaceQueryResolver {
  @Query(() => Int, { description: '장소에 대한 좋아요 수' })
  placeLikeCount(
    @Args({ name: 'placeId', type: () => String, description: '장소 ID' })
    placeId: string,
  ): number {
    return faker.number.int({ max: 9999 });
  }
}
