import { Injectable, Inject } from '@nestjs/common';
// TODO import { CreateCatDto } from './dto/create-cities.dto';
import { Cities } from './cities.entity';

@Injectable()
export class CitiesService {
  constructor(
    @Inject('cities_repository')
    private citiesRepository: typeof Cities,
  ) {}

  async findAll(): Promise<Cities[]> {
    return this.citiesRepository.findAll<Cities>();
  }
}
