import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: "Nome do game",
    example: "GTA V",
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: "Imagem do game",
    example: "https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png",
  })
  coverImageUrl: string;
 

  @IsString()
  @ApiProperty({
    description: "Descrição do game",
    example:
      "Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.",
  })
  description: string;

  @IsNumber()
  @ApiProperty({
    description: "Data de lançamento do game",
    example: 2013,
  })
  year: number;

  @IsNumber()
  @ApiProperty({
    description: "Score do Game",
    example: 5,
  })
  imdbScore: number;

  @IsString()
  @ApiProperty({
    description: "Trailer do game no YouTube.",
    example: "https://youtu.be/QkkoHAzjnUs",
  })
  trailerYouTubeUrl: string;

  @IsString()
  @ApiProperty({
    description: "GamePlay no Youtube",
    example: "https://www.youtube.com/watch?v=I6-Ar6J_5bg",
  })
  gameplayYouTubeUrl: string;
}
