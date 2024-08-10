import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, roomSchema } from './schema/room.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: roomSchema, name: Room.name }]),
  ],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
