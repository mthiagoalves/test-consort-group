import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [CartModule, PrismaModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
