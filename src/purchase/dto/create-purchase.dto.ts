import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsUUID, ValidateNested } from "class-validator";
import { CreatePurchaseProductDto } from "./create-purchase-product.dto";
import { Type } from "class-transformer";

export class CreatePurchaseDto {

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Cart number that make the purchase',
    example: 1
  })
  cartNumber: number;

  @ValidateNested({
    each: true
  })
  @Type(() => CreatePurchaseProductDto)
  @ApiProperty({
    description: 'List of products of the purchase',
    type: [CreatePurchaseProductDto],
  })
  products: CreatePurchaseProductDto[];
}
