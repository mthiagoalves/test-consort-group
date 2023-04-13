import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PurchaseService } from './purchase.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Purchase')
@UseGuards(AuthGuard())
@ApiBearerAuth()
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
