import { Controller, Get, Req } from '@nestjs/common';
import { Request } from "express";
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'View operation status'
  })
  getAppStatus(@Req() req: Request) {
    const baseUrl = req.protocol + '://' + req.get('host')
    return this.appService.getAppStatus(baseUrl);
  }
}
