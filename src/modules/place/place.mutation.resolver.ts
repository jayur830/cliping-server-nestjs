import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { PlaceLikePayload } from './vo/place-good-payload.vo';

@Resolver()
export class PlaceMutationResolver {
  @Mutation(() => PlaceLikePayload, { description: '장소 좋아요 누르기' })
  Place_like(
    @Args({ name: 'placeId', type: () => String }) placeId: string,
    @Args({ name: 'like', type: () => Boolean }) like: boolean,
  ) {
    return {
      placeId,
      like,
    };
  }
}
