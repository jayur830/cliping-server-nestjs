import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

import { PlaceLikePayload } from './vo/place-good-payload.vo';

@Injectable()
export class PlaceService {
  placeLikeCount(placeId: string): number {
    return faker.number.int({ max: 9999 });
  }

  updatePlaceLike(placeId: string, like: boolean): PlaceLikePayload {
    return {
      placeId,
      like,
    };
  }
}
