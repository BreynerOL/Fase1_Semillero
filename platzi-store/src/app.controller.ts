import { Controller, Get, UseGuards, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';

import { Public } from './auth/decorators/public.decorator'

import { ApiKeyGuard } from './auth/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ruta')
  //@SetMetadata('isPublic', true)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  @Public()
  newEndpoint() {
    return 'Yo soy nuevo';
  }

  @Get('tasks')
  tasks() {
    return this.appService.getTasks();
  }
}
