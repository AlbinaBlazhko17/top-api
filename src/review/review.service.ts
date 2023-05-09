import { Injectable } from '@nestjs/common';
import { ReviewModel } from './review.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(ReviewModel.name) private reviewModel: Model<ReviewModel>,
	) {}

	async create(dto: CreateReviewDto): Promise<ReviewModel> {
		const createdReview = new this.reviewModel(dto);
		return createdReview.save();
	}

	async delete(id: string): Promise<ReviewModel | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: string): Promise<ReviewModel[]> {
		return this.reviewModel
			.find({ productId: new Types.ObjectId(productId) })
			.exec();
	}

	async deleteByProductId(productId: string): Promise<number | any> {
		return this.reviewModel
			.deleteMany({
				productId: new Types.ObjectId(productId),
			})
			.exec();
	}
}
