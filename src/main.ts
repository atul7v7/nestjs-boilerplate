import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvService } from './modules/env/env.service';
import { AppConfig } from './config/env/app.config';
import { swaggerSetup } from './config/swagger/swagger.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const envService = app.get(EnvService);
  const port = envService.getEnvValue<AppConfig>('appConfig').port;

  // swaggerSteup
  swaggerSetup(app);

  await app.listen(port);
}
bootstrap();
