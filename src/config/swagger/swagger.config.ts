import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Nest JS Boilerplate developed by Translense Private Limited')
  .setDescription('Comprehensive refernce for API development in NestJs')
  .setVersion('1.0.0')
  .build();
