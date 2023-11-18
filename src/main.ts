import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvService } from './modules/env/env.service';
import { AppConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const envService = app.get(EnvService);
  const port = envService.getEnvValue<AppConfig>('appConfig').port;
  await app.listen(port);
}
bootstrap();
