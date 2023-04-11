import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsNumber, IsPositive } from "class-validator";

export class CreateCartDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'The cart number',
    example: 1
  })
  number: number;
}
