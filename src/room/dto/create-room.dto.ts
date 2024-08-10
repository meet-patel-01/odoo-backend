import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  seatCapacity: number;

  @IsArray()
  @IsNotEmpty()
  facilities: string[];
}
