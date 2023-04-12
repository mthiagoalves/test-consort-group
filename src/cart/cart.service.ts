import { Injectable } from "@nestjs/common/decorators";
import { NotFoundException } from "@nestjs/common/exceptions";
import { PrismaService } from "src/prisma/prisma.service";
import { handleError } from "src/utils/handle-error.utils";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./entities/cart.entity";

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService){}

  findAll() {
    return this.prisma.cart.findMany();
  }

  async findById(id: string): Promise<Cart> {
    const record = await this.prisma.cart.findUnique({ where: { id } });

    if(!record) {
      throw new NotFoundException(`This id: '${id}', is not found`)
    }

    return record;
  }

  async findOne(id: string): Promise<Cart> {
    return this.findById(id);
  }

  create(dto: CreateCartDto) {
    const data: Cart = {...dto}

    return this.prisma.cart.create({ data }).catch(handleError);
  }

  async update(id: string, dto: UpdateCartDto): Promise<Cart> {
    await this.findById(id);

    const data: Partial<Cart> = {...dto};

    return this.prisma.cart.update({
      where: { id },
      data,
    })
    .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.cart.delete({ where: { id } })

  }

}
