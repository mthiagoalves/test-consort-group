import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsUUID } from "class-validator";

export class CreatePurchaseDto {

  @IsUUID()
  @ApiProperty({
    description: 'User id that is created for purchase',
    example: '6e4ae391-363a-4a63-bdf3-7986318b547d'
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Cart number that make the purchase',
    example: 1
  })
  cartNumber: number;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'List of products of the purchase',
    example: '["1a77afb5-c7ce-42fa-8b79-b8d9a29bf702", "419ff5f5-b740-4dd4-90f0-315c86128823"]'
  })
  products: string[];
}
