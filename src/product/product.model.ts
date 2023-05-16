import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductModelDocument = HydratedDocument<ProductModel>;

@Schema({ _id: false })
export class ProductCharacteristics {
	@Prop()
	name: string;

	@Prop()
	value: string;
}

@Schema()
export class ProductModel {
	@Prop()
	image: string;

	@Prop()
	title: string;

	@Prop()
	price: number;

	@Prop()
	oldPrice?: number;

	@Prop()
	credit: number;

	@Prop()
	description: string;

	@Prop()
	advantages: string;

	@Prop()
	disAdvantages: string;

	@Prop([String])
	categories: string[];

	@Prop([String])
	tags: string[];

	@Prop([ProductCharacteristics])
	characteristics: ProductCharacteristics[];

	@Prop()
	createdAt?: Date;
}

export const ProductModelSchema = SchemaFactory.createForClass(ProductModel);
