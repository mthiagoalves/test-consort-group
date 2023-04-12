import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService,
    private readonly jwtSerice: JwtService) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const {username, password} = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { username }
    })

    if(!user) {
      throw new UnauthorizedException('Username or password invalid!');
    }

    const isHashValid = await bcrypt.compare(password, user.password);

    if(!isHashValid){
      throw new UnauthorizedException('Username or password invalid!');
    }

    delete user.password;

    return {
      token: this.jwtSerice.sign({
        username
      }),
      user
    }
  }
}
