import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Name the user',
    example: 'Thiago Alves'
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Username (is unique)',
    example: 'mthiagoalves'
  })
  username: string;

  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is very weak',
  })
  @ApiProperty({
    description: 'Password',
    example: 'Abcd@1234'
  })
  password: string;

  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is very weak',
  })
  @ApiProperty({
    description: 'Password confirmation, this password needs to be equal to Password',
    example: 'Abcd@1234'
  })
  confirmPassword: string;
}
