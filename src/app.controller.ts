import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:id/:name')
  getHello2(
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string; name: string },
  ): string {
    console.log('body log는 생략 !!');
    console.log('req 도 생략 !!');
    console.log('param : ', param);
    return this.appService.getHello();
  }

  // @Get('helloCat')
  // helloAllCat() {
  //   return this.catsService.helloCatWorld();
  // }
  
}
  