import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { handleError } from 'src/utils/handle-error.utils';

@Injectable()
export class PurchaseService {
  constructor (private readonly prisma: PrismaService){}

  create(createPurchaseDto: CreatePurchaseDto) {
    const data: Prisma.PurchaseCreateInput = {
      user: {
        connect: {
          id: createPurchaseDto.userId,
        },
      },
      cart: {
        connectOrCreate: {
          create: {
            number: createPurchaseDto.cartNumber
          },
          where: {
            number: createPurchaseDto.cartNumber
          }
        }
      },
      products: {
        connect: createPurchaseDto.products.map(productId => ({
          id: productId
        }))
      }
    };

    return this.prisma.purchase.create({
      data,
      select: {
        id: true,
        cart: {
          select: {
            number: true
          }
        },
        user: {
          select: {
            name: true
          }
        },
        products: {
          select: {
            name: true
          }
        }
      }
    }).catch(handleError)
  }

  findAll() {
    return `This action returns all purchase`;
  }

  findOne(id: string) {
    return `This action returns a #${id} purchase`;
  }


}
