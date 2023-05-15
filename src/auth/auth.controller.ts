import {
	BadRequestException,
	Body,
	Controller,
	HttpCode,
	Inject,
	Injectable,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';

@Injectable()
@Controller('auth')
export class AuthController {
	constructor(
		@Inject(AuthService.name) private readonly authService: AuthService,
	) {}
	@UsePipes(new ValidationPipe())
	@Post('register')
	async register(@Body() dto: AuthDto) {
		const oldUser = await this.authService.findUser(dto.login);
		if (oldUser) throw new BadRequestException(ALREADY_REGISTERED_ERROR);
		return this.authService.createUser(dto);
	}

	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {}
}
