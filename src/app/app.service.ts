import { Injectable } from '@nestjs/common';

import { AppConfig } from '@src/config/env/app.config';
import { EnvService } from '@modules/env/env.service';

@Injectable()
export class AppService {
  constructor(private readonly envService: EnvService) {}
  sayHello(): string {
    console.log('**********************');
    const appConfig = this.envService.getEnvValue<AppConfig>('appConfig');
    return `Hello at port welcome yes  ${appConfig.port}`;
  }
}
