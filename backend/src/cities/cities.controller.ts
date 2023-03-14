import { Controller, Get } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  @Get()
  findAll(): string {
    return 'All cities are returned';
  }
}
