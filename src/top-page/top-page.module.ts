import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModel, AuthModelSchema } from '../auth/user.model';

@Module({
	controllers: [TopPageController],
	imports: [
		MongooseModule.forFeature([
			{ name: AuthModel.name, schema: AuthModelSchema },
		]),
	],
})
export class TopPageModule {}
