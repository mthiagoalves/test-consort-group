import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsUUID } from "class-validator";

export class CreatePurchaseProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID of product',
    example: 1
  })
  productId: string;

  @IsInt()
  @ApiProperty({
    description: 'Quantity items in the purchase',
    example: 1
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Observations of purchase',
    example: 'Send to address: xxx,xxx'
  })
  comments: string;
}
