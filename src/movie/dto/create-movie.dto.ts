import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty({message: '제목은 비어있으면 안 됩니다.'})
  title: string;

  @IsNotEmpty({message: '제목은 비어있으면 안 됩니다.'})
  genre: string;

  @IsNotEmpty()
  detail: string;
}