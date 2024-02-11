import { Controller, Get, Param } from '@nestjs/common';
import { RxjsService } from './rxjs.service';
import { IntParamText } from 'src/books/interfaces/text-param';

@Controller('rxjs')
export class RxjsController {
    constructor(private rxjsService: RxjsService) {}


    @Get('repositories/:text')
    async repositories(@Param() {text}: IntParamText) {
        return await this.rxjsService.searchRepositories(text);
    }
}
