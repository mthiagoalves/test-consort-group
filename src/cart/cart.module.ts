import { Module } from "@nestjs/common";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { PassportModule } from "@nestjs/passport";


@Module({
  imports: [PrismaModule, PassportModule.register({
    defaultStrategy: 'jwt'
  }),],
  controllers: [CartController],
  providers: [CartService],
})

export class CartModule {}
