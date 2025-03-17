import {
  Equals, IsArray,
  IsBoolean, IsDateString,
  IsDefined,
  IsEmpty, IsEnum,
  IsIn, IsInt,
  IsNotEmpty,
  IsNotIn, IsNumber,
  IsOptional, IsString,
  NotEquals,
} from 'class-validator';

enum MovieGenre {
  Fantasy = 'fantasy',
  Action = 'action',
}

export class UpdateMovieDto {
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsNotEmpty()
  @IsOptional()
  genre?: string;

  // @IsDefined() // null || undefined
  // @IsOptional() //
  // @Equals('sumin')
  // @NotEquals('sumin')
  // @IsEmpty() // null || undefined || ''
  // @IsNotEmpty()
  // @IsIn(['action', 'fantasy']) // Array 테스
  // @IsNotIn(['action', 'fantasy'])
  // @IsBoolean() //Is = 질문같은 거임 boolean이야?
  // @IsString()
  // @IsNumber()
  // @IsInt()
  // @IsArray()
  // @IsEnum(MovieGenre)
  @IsDateString()
  test: string;
}
