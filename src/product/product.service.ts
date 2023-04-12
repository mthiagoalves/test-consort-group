import { Injectable } from "@nestjs/common/decorators";
import { NotFoundException, UnprocessableEntityException } from "@nestjs/common/exceptions";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./entities/product.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService){}

  findAll() {
    return this.prisma.product.findMany();
  }

  async findById(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({ where: { id } });

    if(!record) {
      throw new NotFoundException(`This id: '${id}', is not found`)
    }

    return record;
  }

  async findOne(id: string): Promise<Product> {
    return this.findById(id);
  }

  create(dto: CreateProductDto) {
    const data: Product = {...dto}

    return this.prisma.product.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    await this.findById(id);

    const data: Partial<Product> = {...dto};

    return this.prisma.product.update({
      where: { id },
      data,
    })
    .catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.product.delete({ where: { id } })

  }

  handleError(error: Error): undefined {
    const errorLines = error.message.split('\n');
    const lastErrorLine = errorLines[errorLines.length -1].trim();
    throw new UnprocessableEntityException(lastErrorLine || 'Any error was find in operation');
  }
}
