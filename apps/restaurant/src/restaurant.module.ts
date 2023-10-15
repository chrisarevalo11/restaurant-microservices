import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { DatabaseModule, RmqModule } from '@app/common';
import { OrdersRepository } from '../../../libs/common/src/database/restaurant.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from '@app/common/schemas/order.schema';
import { KITCHEN_SERVICE } from './constants/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/restaurant/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    RmqModule.register({
      name: KITCHEN_SERVICE,
    }),
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService, OrdersRepository],
})
export class RestaurantModule {}
