import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Booking, roomSchema } from './schema/booking.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: roomSchema, name: Booking.name }]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
