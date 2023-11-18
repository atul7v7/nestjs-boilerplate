import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/boilerplate/nestjs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sayHello(): string {
    return this.appService.sayHello();
  }
}
