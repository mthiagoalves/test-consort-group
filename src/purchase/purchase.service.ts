import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PurchaseService {
  constructor (private readonly prisma: PrismaService){}
  
  create(createPurchaseDto: CreatePurchaseDto) {
    return 'This action adds a new purchase';
  }

  findAll() {
    return `This action returns all purchase`;
  }

  findOne(id: string) {
    return `This action returns a #${id} purchase`;
  }


}
