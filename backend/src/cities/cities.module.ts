import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { citiesProviders } from './cities.provider';

@Module({
  providers: [CitiesService, ...citiesProviders],
  controllers: [CitiesController],
  imports: [],
  exports: [CitiesService],
})
export class CitiesModule {}
