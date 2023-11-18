import { Injectable } from '@nestjs/common';
import { AppConfig } from 'src/config/app.config';
import { EnvService } from 'src/modules/env/env.service';

@Injectable()
export class AppService {
  constructor(private readonly envService: EnvService) {}
  sayHello(): string {
    const appConfig = this.envService.getEnvValue<AppConfig>('appConfig');
    return `Hello at port ${appConfig.port}`;
  }
}
