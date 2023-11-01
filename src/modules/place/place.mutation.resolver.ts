import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { PlaceGoodPayload } from './vo/place-good-payload.vo';

@Resolver()
export class PlaceMutationResolver {
  @Mutation(() => PlaceGoodPayload, { description: '장소 좋아요 누르기' })
  Place_good(
    @Args({ name: 'placeId', type: () => String }) placeId: string,
    @Args({ name: 'good', type: () => Boolean }) good: boolean,
  ) {
    return {
      placeId,
      good,
    };
  }
}
