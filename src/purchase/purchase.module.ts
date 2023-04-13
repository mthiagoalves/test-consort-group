import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({
    defaultStrategy: 'jwt'
  }),],
  controllers: [PurchaseController],
  providers: [PurchaseService]
})
export class PurchaseModule {}
