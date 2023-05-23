import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserModelSchema } from '../auth/user.model';
import { TopPageService } from './top-page.service';

@Module({
	controllers: [TopPageController],
	imports: [
		MongooseModule.forFeature([
			{ name: UserModel.name, schema: UserModelSchema },
		]),
	],
	providers: [TopPageService],
})
export class TopPageModule {}
