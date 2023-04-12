import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsUUID, ValidateNested } from "class-validator";
import { CreatePurchaseProductDto } from "./create-purchase-product.dto";
import { Type } from "class-transformer";

export class CreatePurchaseDto {

  @IsUUID()
  @ApiProperty({
    description: 'User id that is created for purchase',
    example: '9d093c09-7987-442d-a9b0-e00642e540cd'
  })
  userId: string;

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
