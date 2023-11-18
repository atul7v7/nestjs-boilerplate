import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { setupConfig } from 'src/config/setup.config';
import { UtilModule } from 'src/modules/env/util.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: setupConfig(),
    }),
    UtilModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
