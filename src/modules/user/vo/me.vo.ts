import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '로그인한 유저의 개인 정보' })
export class Me {
  @Field(() => String, { description: '이름' })
  name: string;

  @Field(() => String, { description: '이메일' })
  email: string;

  @Field(() => Int, { description: '유저 ID (PK)' })
  userId: number;
}
