import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument, Types, Schema as MSchema } from 'mongoose';
import { ProductModel } from 'src/product/product.model';

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
	productId: ProductModel;
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);
