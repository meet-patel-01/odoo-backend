import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './schema/booking.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private readonly _room: Model<Booking>,
  ) {}

  create(payload: CreateBookingDto) {
    return this._room.create(payload);
  }

  findAll() {
    return `This action returns all booking`;
  }

  findOne(id: string) {
    return this._room.find({
      room_id: id,
    });
  }

  update(id: number, payload: UpdateBookingDto) {
    return this._room.findByIdAndUpdate(id, payload);
  }

  remove(id: number) {
    return this._room.findByIdAndDelete(id);
  }
}
