import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: "Título",
    example: "Alex123",
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: "Imagem do perfil",
    example: "https://avatars.githubusercontent.com/u/83733881?v=4",
  })
  imageURL: string;
}
