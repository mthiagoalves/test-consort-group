import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [CartModule, PrismaModule, ProductModule, UserModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
