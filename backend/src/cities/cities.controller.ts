import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async findAll(): Promise<object> {
    const cities = await this.citiesService.findAll();
    return { cities };
  }
  catch(error) {
    console.error(error);
    throw error;
  }
}
