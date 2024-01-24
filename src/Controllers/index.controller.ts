import { Body, Controller, Get, Post } from '@nestjs/common';
import { indexModel } from 'src/Models';

@Controller('index')
export class IndexController {
  @Get()
  getAll(): string {
    return 'Teste API ';
  }

  @Post()
  save(@Body() newIndex: indexModel): indexModel {
    return newIndex;
  }
}
