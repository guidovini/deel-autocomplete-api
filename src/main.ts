import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Specific allowed origin
    methods: 'GET', // Allowed methods
    credentials: true, // Allow sending of cookies, if needed for authentication
  });
  await app.listen(3000);
}
bootstrap();
