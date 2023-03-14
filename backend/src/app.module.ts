import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { Sequelize } from 'sequelize-typescript';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cities } from './cities/cities.entity';
import { databaseProviders } from './provider/database.provider';
import { CitiesController } from './cities/cities.controller';

@Module({
  imports: [CitiesModule],
  controllers: [],
  providers: [AppService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
