import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserModelSchema } from '../auth/user.model';

@Module({
	controllers: [TopPageController],
	imports: [
		MongooseModule.forFeature([
			{ name: UserModel.name, schema: UserModelSchema },
		]),
	],
})
export class TopPageModule {}
