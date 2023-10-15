import { Controller, Get } from '@nestjs/common';
import { KitchenService } from './kitchen.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';

@Controller()
export class KitchenController {
  constructor(
    private readonly kitchenService: KitchenService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.kitchenService.getHello();
  }

  @EventPattern('order_created')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(data);
    this.kitchenService.createRecipe(data);
    this.rmqService.ack(context);
  }
}
