import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT created for login',
    example: 'TOKEN_CREATED'
  })
  token: string;

  @ApiProperty({
    description: 'Data user authenticated',
  })
  user: User;
}
