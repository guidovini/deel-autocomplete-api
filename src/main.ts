import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { AppModule } from './app.module';

ConfigModule.forRoot();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      process.env.DEV_CLIENT,
      process.env.DEV_PROD_CLIENT,
      process.env.PROD_CLIENT,
    ], // Specific allowed origin
    methods: 'GET', // Allowed methods
    credentials: true, // Allow sending of cookies, if needed for authentication
  });
  await app.listen(3000);
}
bootstrap();
