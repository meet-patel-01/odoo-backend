import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Booking {
  @Prop({ isRequired: true })
  room_id: string;

  @Prop({ isRequired: true })
  booking_time: string;

  @Prop({ isRequired: true })
  booking_date: string;
}

export class BookingDocument {
  room_id: string;
  booking_time: string;
  booking_date: string;
}

export const roomSchema = SchemaFactory.createForClass(Booking);
