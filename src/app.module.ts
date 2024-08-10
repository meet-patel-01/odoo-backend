import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { RoomModule } from './room/room.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    RoomModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
      }),
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      useFactory(_config: ConfigService) {
        return {
          uri: _config.get<string>('MONGO_URI'),
          dbName: 'odoo',
        };
      },
      inject: [ConfigService],
    }),
    BookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
