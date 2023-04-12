import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT created for login',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im10aGlhZ29hbHZlcyIsImlhdCI6MTY4MTM0MjQyNCwiZXhwIjoxNjgxMzg1NjI0fQ.t5vEiY0OcKAKHY_QpWuGLVEg1W4vJDw9spaco6cfTFg'
  })
  token: string;

  @ApiProperty({
    description: 'Data user authenticated',
  })
  user: User;
}
