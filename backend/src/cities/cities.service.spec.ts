import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';
import { citiesProviders } from './cities.provider';
import { CitiesController } from './cities.controller';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitiesService, ...citiesProviders],
      controllers: [CitiesController],
      imports: [],
      exports: [CitiesService],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
