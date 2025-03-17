import { Equals, IsDefined, IsEmpty, IsIn, IsNotEmpty, IsNotIn, IsOptional, NotEquals } from 'class-validator';

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
  test: string;
}
