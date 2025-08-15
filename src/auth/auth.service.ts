import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  validateUser(username: string, pass: string): UserDocument | null {
    // Hard-coded
    const hardcodedUsername = 'dulmikaushalya02@gmail.com';
    const hardcodedPassword = '1234';

    if (username !== hardcodedUsername) {
      throw new UnauthorizedException('Invalid username');
    }
    if (pass !== hardcodedPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      _id: 'test-id',
      username: hardcodedUsername,
      password: hardcodedPassword,
    } as UserDocument;
  }

  login(username: string, password: string) {
    const user = this.validateUser(username, password);
    if (!user) throw new UnauthorizedException('User not found');
    const payload = {
      username: user.username,
      sub: user._id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
