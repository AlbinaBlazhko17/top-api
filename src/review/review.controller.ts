import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { ReviewModel } from './review.model';
import { REVIEW_NOT_FOUND } from './review.constants';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { IdValidationPipe } from '../pipe/id-validation.pipe';
import { TelegramService } from 'src/telegram/telegram.service';

@Controller('review')
export class ReviewController {
	constructor(
		private readonly reviewService: ReviewService,
		private readonly telegramService: TelegramService,
	) {}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateReviewDto): Promise<ReviewModel> {
		return this.reviewService.create(dto);
	}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async notify(@Body() dto: CreateReviewDto): Promise<void> {
		const message =
			`Name: ${dto.name}\n` +
			`Title: ${dto.title}` +
			`Description: ${dto.description}` +
			`Rating: ${dto.rating}` +
			`Product ID: ${dto.productId}`;
		return this.telegramService.sendMessage(message);
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string): Promise<void> {
		const deletedDoc = this.reviewService.delete(id);
		if (!deletedDoc)
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
	}

	@UseGuards(JwtAuthGuard)
	@Get('byProduct/:productId')
	async getByProduct(
		@Param('productId', IdValidationPipe) poductId: string,
	): Promise<ReviewModel[]> {
		return this.reviewService.findByProductId(poductId);
	}
}
