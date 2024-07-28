import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envVars, ORDER_SERVICE } from 'src/config';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          // host: envVars.ORDERS_MICROSERVICE_HOST,
          // port: envVars.ORDERS_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class OrdersModule {}
