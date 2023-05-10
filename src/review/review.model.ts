import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument, Types, Schema as MSchema } from 'mongoose';
import { ProductModel } from '../product/product.model';

export type ReviewModelDocument = HydratedDocument<ReviewModel>;

@Schema()
export class ReviewModel {
	@Prop()
	name: string;

	@Prop()
	title: string;

	@Prop()
	description: string;

	@Prop()
	rating: number;

	@Prop()
	createdAt?: Date;

	@Prop({ type: MSchema.Types.ObjectId, ref: ProductModel.name })
	productId: Types.ObjectId;
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);
