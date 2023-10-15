import { IsNotEmpty, IsString } from "class-validator"

export class CreateOrderRequest {
  @IsString()
  @IsNotEmpty()
  recipe: string

  @IsString()
  @IsNotEmpty()
  status: string
}