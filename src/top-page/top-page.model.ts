import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export class HhData {
	@Prop()
	count: number;

	@Prop()
	juniorSalary: number;

	@Prop()
	middleSalary: number;

	@Prop()
	seniorSalary: number;
}

export class TopPageAdvantage {
	@Prop()
	title: string;

	@Prop()
	description: string;
}

export type TopPageModelDocument = HydratedDocument<TopPageModel>;

@Schema()
export class TopPageModel {
	@Prop({ enum: TopLevelCategory })
	firstCategory: TopLevelCategory;

	@Prop()
	secondCategory: string;

	@Prop()
	title: string;

	@Prop({ unique: true })
	alias: string;

	@Prop()
	category: string;

	@Prop(HhData)
	hh?: HhData;

	@Prop([TopPageAdvantage])
	advantages: TopPageAdvantage[];

	@Prop()
	seoText: string;

	@Prop()
	tagsTitle: string;

	@Prop([String])
	tags: string[];

	@Prop()
	createdAt?: Date;

	@Prop()
	updatedAt?: Date;
}

export const TopPageModelSchema = SchemaFactory.createForClass(TopPageModel);

TopPageModelSchema.index({ title: 'text', seoText: 'text' });
