import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UserModel } from './user.model';
import { genSaltSync } from 'bcryptjs';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(UserModel.name) private readonly userModel: UserModel,
	) {}

	async createUser(dto: AuthDto) {
		const salt = genSaltSync(10);
	}

	async findUser(email: string) {}
}
