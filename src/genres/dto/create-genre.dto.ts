import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateGenreDto {
  @IsString()
  @ApiProperty({
    description: "Gênero do jogo",
    example: "Ação",
  })
  name: string;
}
