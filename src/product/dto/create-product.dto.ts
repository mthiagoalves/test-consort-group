import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {

  @IsString()
  @ApiProperty({
    description: 'Product name',
    example: 'Elden Ring'
  })
  name: string;

  @IsNumber({
    maxDecimalPlaces: 2
  })
  @ApiProperty({
    description: 'Product price',
    example: 299.89
  })
  price: number;

}
