/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Nickname do usuário",
    example: "AlexandreMS",
  })
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "senha do usuário",
    example: "Abcd@1234",
  })
  password: string;
}
