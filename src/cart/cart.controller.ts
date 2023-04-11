import { Body, Controller, Get, Post } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { ApiOperation, ApiTags } from '@nestjs/swagger/dist';
import { Cart } from "./entities/cart.entity";
import { Param } from "@nestjs/common/decorators";

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService){}

  @Get()
  @ApiOperation({
    summary: 'List all open cart'
  })
  findAll(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find a specific cart'
  })
  findOne(@Param('id') id: string): Promise<Cart> {
    return this.cartService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create new cart'
  })
  create(@Body() createCartDto: CreateCartDto): Promise<Cart>{
    return this.cartService.create(createCartDto);
  }
}
