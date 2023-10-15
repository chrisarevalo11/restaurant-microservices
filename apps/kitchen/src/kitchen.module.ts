import { Module } from '@nestjs/common';
import { KitchenController } from './kitchen.controller';
import { KitchenService } from './kitchen.service';
import { DatabaseModule, RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { OrdersRepository } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from '@app/common/schemas/order.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_KITCHEN_QUEUE: Joi.string().required(),
      }),
    }),
    RmqModule,
    DatabaseModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [KitchenController],
  providers: [KitchenService, OrdersRepository],
})
export class KitchenModule {}
