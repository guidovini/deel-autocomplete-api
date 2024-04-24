import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://deel-autocomplete.onrender.com'], // Specific allowed origin
    methods: 'GET', // Allowed methods
    credentials: true, // Allow sending of cookies, if needed for authentication
  });
  await app.listen(3000);
}
bootstrap();
