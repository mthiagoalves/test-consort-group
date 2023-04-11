import { Body, Controller, Get, Post } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService){}

  @Get()
  findAll() {

    return this.cartService.findAll();
  }

  @Post()
  create(@Body() createCartDto: CreateCartDto){
    return this.cartService.create(createCartDto);
  }
}
