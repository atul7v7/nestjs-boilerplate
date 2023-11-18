import { join } from 'path';
import { readFileSync } from 'fs';
import { EnvConfig } from './env.config';
import { ConfigFactory, registerAs } from '@nestjs/config';
import { AppConfig } from './app.config';

function loadConfigFile(): EnvConfig {
  const ENVIRONMENT: string = process.env.ENVIRONMENT || 'development';
  const envFilePath = join('src', 'config', `.env.${ENVIRONMENT}.json`);
  return JSON.parse(readFileSync(envFilePath, 'utf-8'));
}

export const setupConfig = (): [ConfigFactory<AppConfig>] => {
  const envVariables = loadConfigFile();
  const appConfig = registerAs<AppConfig>(
    'appConfig',
    () => envVariables.appConfig,
  );
  return [appConfig];
};
