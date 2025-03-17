import {
  Contains,
  Equals, IsAlphanumeric, IsArray,
  IsBoolean, IsCreditCard, IsDateString,
  IsDefined, IsDivisibleBy,
  IsEmpty, IsEnum, IsHexColor,
  IsIn, IsInt, IsLatLong, IsNegative,
  IsNotEmpty,
  IsNotIn, IsNumber,
  IsOptional, IsPositive, IsString, IsUUID, Max, MaxLength, Min, MinLength, NotContains,
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
  // @Contains('sumin')
  // @NotContains('s umin')
  // @IsAlphanumeric()
  // @IsCreditCard()
  // @IsHexColor()
  // @MaxLength(5)
  // @MinLength(2)
  // @IsUUID()
  @IsLatLong() //위도 경도
  test: string;
}
