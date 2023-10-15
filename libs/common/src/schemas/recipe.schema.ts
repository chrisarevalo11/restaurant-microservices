import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class Recipe extends AbstractDocument {
  @Prop()
  name: string

  @Prop()
  prepTime: number

  @Prop()
  ingredients: string[]
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe)