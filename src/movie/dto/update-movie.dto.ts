import {
  Equals, IsArray,
  IsBoolean, IsDateString,
  IsDefined, IsDivisibleBy,
  IsEmpty, IsEnum,
  IsIn, IsInt, IsNegative,
  IsNotEmpty,
  IsNotIn, IsNumber,
  IsOptional, IsPositive, IsString, Max, Min,
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
  // @IsDateString()
  // @IsDivisibleBy(5)
  // @IsPositive() //양수인가?
  // @IsNegative()
  // @Min(100)
  // @Max(1000)

  test: string;
}
