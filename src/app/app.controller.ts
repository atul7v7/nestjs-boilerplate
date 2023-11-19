import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateResourceDto } from './dtos/create-resource.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('/boilerplate/nestjs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   *Adding endpoint description
   */
  @Get()
  getResource(): string {
    return this.appService.sayHello();
  }

  @Post()
  @ApiBody({
    description:
      'In this way we can add body descriptions, below type is neccessary fro schema',
    type: CreateResourceDto,
  })
  createResource(
    @Body()
    createResourceDto: CreateResourceDto,
  ): CreateResourceDto {
    return createResourceDto;
  }

  @Post('upload')
  uploadFile() {
    return 'file uploaded successfully';
  }
}
