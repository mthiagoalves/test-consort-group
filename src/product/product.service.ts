import { Injectable } from "@nestjs/common/decorators";
import { NotFoundException } from "@nestjs/common/exceptions";
import { PrismaService } from "src/prisma/prisma.service";
import { handleError } from "src/utils/handle-error.utils";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";

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

    return this.prisma.product.create({ data }).catch(handleError);
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    await this.findById(id);

    const data: Partial<Product> = {...dto};

    return this.prisma.product.update({
      where: { id },
      data,
    })
    .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.product.delete({ where: { id } })

  }
}
