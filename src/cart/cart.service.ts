import { Injectable } from "@nestjs/common/decorators";
import { CreateCartDto } from "./dto/create-cart.dto";
import { Cart } from "./entities/cart.entity";

@Injectable()
export class CartService {
  carts: Cart[] = [];

  findAll() {
    return this.carts;
  }

  create(createCartDto: CreateCartDto) {
    const cart: Cart = {id: 'random_id', ...createCartDto}

    this.carts.push(cart);

    return cart;
  }
}
