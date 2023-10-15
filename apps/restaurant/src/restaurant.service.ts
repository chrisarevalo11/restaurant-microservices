import { Injectable, Inject } from '@nestjs/common';
import { OrdersRepository } from '../../../libs/common/src/database/restaurant.repository';
import { KITCHEN_SERVICE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RestaurantService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
    @Inject(KITCHEN_SERVICE) private kitchenClient: ClientProxy,
  ) {}

  async createOrder() {
    this.kitchenClient.emit('order_created', {
      recipe: 'test',
      status: 'pendant',
    });
    return 'OK';
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }
}
