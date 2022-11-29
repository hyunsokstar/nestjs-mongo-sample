    import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
    import { Document, SchemaOptions } from 'mongoose';
    import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

    const options: SchemaOptions = {
    timestamps: true,
    };

    @Schema(options)
    export class Cat extends Document {
    @IsEmail()
    @IsNotEmpty()
    @Prop({
    required: true,
    unique: true,
    })
    email: string;

    @IsString()
    @Prop({
    required: true,
    })
    name: string;

    @Prop()
    password: string;

    @Prop()
    imgUrl: string;
    }

    export const CatsSchema = SchemaFactory.createForClass(Cat);
