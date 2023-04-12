import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PurchaseService } from './purchase.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Purchase')
@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new purchase'
  })
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchaseService.create(createPurchaseDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all purchases'
  })
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find one specific purchase'
  })
  findOne(@Param('id') id: string) {
    return this.purchaseService.findOne(id);
  }

}
