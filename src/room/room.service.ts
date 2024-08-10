import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './schema/room.schema';
import { Model } from 'mongoose';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private readonly _room: Model<Room>) {}

  create(payload: CreateRoomDto) {
    return this._room.create(payload);
  }

  findAll() {
    return this._room.find();
  }

  findByName(name: string) {
    return this._room.find({
      name: { $regex: name },
    });
  }

  update(id: number, _payload: UpdateRoomDto) {
    return this._room.findByIdAndUpdate(id, _payload);
  }

  remove(id: number) {
    return this._room.findByIdAndDelete(id);
  }
}
