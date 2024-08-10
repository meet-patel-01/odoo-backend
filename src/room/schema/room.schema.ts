import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Room {
  @Prop({ isRequired: true })
  name: string;

  @Prop({ isRequired: true, isInteger: true })
  seatCapacity: number;

  @Prop()
  facilities: string[];
}

export class RoomDocument {
  name: string;
  seatCapacity: number;
  facilities: string[];
}

export const roomSchema = SchemaFactory.createForClass(Room);
