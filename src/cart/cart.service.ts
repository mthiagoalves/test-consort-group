import { Injectable } from "@nestjs/common/decorators";
import { CreateCartDto } from "./dto/create-cart.dto";
import { Cart } from "./entities/cart.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateCartDto } from "./dto/update-cart.dto";

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService){}

  findAll() {
    return this.prisma.cart.findMany();
  }

  findOne(id: string): Promise<Cart> {
    return this.prisma.cart.findUnique({ where: { id } })
  }

  create(dto: CreateCartDto) {
    const data: Cart = {...dto}

    return this.prisma.cart.create({ data });
  }

  update(id: string, dto: UpdateCartDto): Promise<Cart> {
    const data: Partial<Cart> = {...dto};

    return this.prisma.cart.update({
      where: { id },
      data,
    })
  }
}
