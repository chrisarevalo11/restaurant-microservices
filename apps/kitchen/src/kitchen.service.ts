import { Injectable, Logger } from '@nestjs/common';
import { CreateOrderRequest } from '@app/common/database/dto/create-order.request';
import { OrdersRepository } from '@app/common';

@Injectable()
export class KitchenService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  private readonly logger = new Logger(KitchenService.name);

  getHello(): string {
    return 'Hello World!';
  }

  async createRecipe(data: CreateOrderRequest) {
    const session = await this.ordersRepository.startTransaction();

    try {
      const order = await this.ordersRepository.create(data, { session });
      this.logger.log(data);
      await session.commitTransaction();
      return order;
    } catch (err) {
      await session.abortTransaction();
    }
  }
}
