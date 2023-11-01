import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AuthModule } from '@/modules/auth/auth.module';
import { PlaceModule } from '@/modules/place/place.module';
import { ReviewModule } from '@/modules/review/review.module';
import { UserModule } from '@/modules/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      path: '/api/graphql',
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      playground: true,
    }),
    AuthModule,
    PlaceModule,
    ReviewModule,
    UserModule,
  ],
})
export class AppModule {}
