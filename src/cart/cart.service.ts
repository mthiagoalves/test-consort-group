import { Injectable } from "@nestjs/common/decorators";
import { NotFoundException, UnprocessableEntityException } from "@nestjs/common/exceptions";
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

    return this.prisma.cart.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateCartDto): Promise<Cart> {
    await this.findById(id);

    const data: Partial<Cart> = {...dto};

    return this.prisma.cart.update({
      where: { id },
      data,
    })
    .catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.cart.delete({ where: { id } })

  }

  handleError(error: Error): undefined {
    const errorLines = error.message.split('\n');
    const lastErrorLine = errorLines[errorLines.length -1].trim();
    throw new UnprocessableEntityException(lastErrorLine || 'Any error was find in operation');
  }
}
