import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class Order extends AbstractDocument {
  @Prop()
  recipe: string

  @Prop()
  status: string
}

export const OrderSchema = SchemaFactory.createForClass(Order)