import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //frontend runs on a different port that time we can use this
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
