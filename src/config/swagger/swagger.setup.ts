import { INestApplication } from '@nestjs/common';
import { SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { createSwaggerDocument } from './swagger.document';

const swaggerCustomerOption: SwaggerCustomOptions = {
  customSiteTitle: 'NestJs Boilerplate',
  customfavIcon:
    'https://media.licdn.com/dms/image/C560BAQEgOil_8sLTAA/company-logo_100_100/0/1667873121695/translense_private_limited_logo?e=2147483647&v=beta&t=aoMhGOadwe8RCtjwOLUo9EUg8zLUUpegXeo5LSpfXWY   ',
};

export function swaggerSetup(app: INestApplication) {
  const swaggerDocument = createSwaggerDocument(app);
  SwaggerModule.setup('swagger', app, swaggerDocument, swaggerCustomerOption);
}
