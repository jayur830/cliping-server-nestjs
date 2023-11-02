import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { PlaceService } from './place.service';
import { PlaceLikePayload } from './vo/place-good-payload.vo';

@Resolver()
export class PlaceMutationResolver {
  constructor(private readonly placeService: PlaceService) {}

  @Mutation(() => PlaceLikePayload, { description: '장소 좋아요 누르기' })
  Place_like(
    @Args({ name: 'placeId', type: () => String }) placeId: string,
    @Args({ name: 'like', type: () => Boolean }) like: boolean,
  ): PlaceLikePayload {
    return this.placeService.updatePlaceLike(placeId, like);
  }
}
