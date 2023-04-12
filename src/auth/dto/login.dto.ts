import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Username of the user',
    example: 'mthiagoalves'
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User password',
    example: 'Abcd@1234'
  })
  password: string;
}
