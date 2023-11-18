import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  constructor(private configService: ConfigService) {}

  getEnvValue<T>(namespaceKey: string): T {
    return this.configService.getOrThrow(namespaceKey);
  }
}
