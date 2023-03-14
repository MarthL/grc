import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
// import { Sequelize } from 'sequelize-typescript';

@Module({
  imports: [CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
