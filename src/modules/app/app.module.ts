import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloModule } from '@/modules/hello/hello.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      path: '/api/graphql',
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      playground: true,
    }),
    HelloModule,
  ],
})
export class AppModule {}
