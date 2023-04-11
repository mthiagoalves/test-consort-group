import { Injectable } from "@nestjs/common/decorators";
import { CreateCartDto } from "./dto/create-cart.dto";
import { Cart } from "./entities/cart.entity";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CartService {

  constructor(private readonly prisma: PrismaService){}

  findAll() {
    return this.prisma.cart.findMany();
  }

  create(dto: CreateCartDto) {
    const data: Cart = {...dto}

    return this.prisma.cart.create({ data });
  }
}
