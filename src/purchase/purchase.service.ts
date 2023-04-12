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
        createMany: {
          data: createPurchaseDto.products.map((createPurchaseProductDto) => ({
            productId: createPurchaseProductDto.productId,
            quantity: createPurchaseProductDto.quantity,
            comments: createPurchaseProductDto.comments,

          }))
        }
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
            quantity: true,
            product: {
              select: {
                name: true,
              }
            },
            comments: true,
          }
        }
      }
    }).catch(handleError)
  }

  findAll() {
    return this.prisma.purchase.findMany({
      select: {
        id: true,
        user: {
          select: {
            name: true,
            username: true,
          }
        },
        cart: {
          select: {
            number: true
          }
        },
        _count: {
          select: {
            products: true
          }
        }
      },
    });
  }

  findOne(id: string) {
    return this.prisma.purchase.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
            username: true,
          },
        },
        cart: {
          select: {
            number: true
          }
        },
        products: {
          select: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
              }
            }
          }
        }
      },
    });
  }


}
