import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthModelDocument = HydratedDocument<AuthModel>;

@Schema({ timestamps: true })
export class AuthModel {
	@Prop({ unique: true })
	email: string;

	@Prop()
	passwordHash: string;

	@Prop()
	createdAt?: Date;
}

export const AuthModelSchema = SchemaFactory.createForClass(AuthModel);
