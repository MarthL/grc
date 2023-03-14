import { Cities } from './cities.entity';

export const citiesProviders = [
  {
    provide: 'cities_repository',
    useValue: Cities,
  },
];
