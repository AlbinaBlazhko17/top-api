import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { AuthDto } from '../src/auth/dto/auth.dto';
import { disconnect } from 'mongoose';

const loginDto: AuthDto = {
	login: 'a1@a.com',
	password: '1',
};

describe('AppController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/auth/login (LOGIN) - success', () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send(loginDto)
			.expect(200);
	});

	it('/auth/login (LOGIN) - fail', () => {
		return request(app.getHttpServer())
			.post('/auth/login')
			.send({ ...loginDto, password: '12' })
			.expect(401);
	});

	afterAll(() => {
		disconnect();
	});
});
