import { Module } from '@nestjs/common';

import { PlaceMutationResolver } from './place.mutation.resolver';
import { PlaceQueryResolver } from './place.query.resolver';
import { PlaceService } from './place.service';

@Module({
  providers: [PlaceQueryResolver, PlaceMutationResolver, PlaceService],
})
export class PlaceModule {}
