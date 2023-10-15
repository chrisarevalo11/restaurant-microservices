import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class Ingredient extends AbstractDocument {
  @Prop()
  name: string

  @Prop()
  catidad: number
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient)