import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  room_id: string;

  @IsString()
  @IsNotEmpty()
  booking_time: string;

  @IsString()
  @IsNotEmpty()
  booking_date: string;
}
