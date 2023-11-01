import { Field, ObjectType } from '@nestjs/graphql';

import { Profile } from './profile.vo';

@ObjectType()
export class UpdateProfilePayload extends Profile {
  @Field(() => String, { description: '닉네임' })
  nickName: string;
}
