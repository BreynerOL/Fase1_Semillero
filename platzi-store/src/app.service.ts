import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASK') private task: any[],
  ) {}
  getHello(): string {
    console.log(this.task);
    return `Hello world! ${this.apiKey}`;
  }
}
