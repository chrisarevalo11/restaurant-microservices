import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('create_order')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  async createOrder() {
    return this.restaurantService.createOrder();
  }

  @Get('/all')
  async getOrders() {
    return this.restaurantService.getOrders();
  }
}
