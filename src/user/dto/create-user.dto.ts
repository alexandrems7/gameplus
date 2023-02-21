/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: "Nome do usuário",
    example: "AlexandreMS",
  })
  nickname: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "Senha muito fraca"
  })
  @ApiProperty({
    description: "Senha para login",
    example: "Abcd@1234",
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: "A confirmação da senha deve ser igual a senha.",
    example: "Abcd@1234",
  })
  confirmPassword: string;

  @IsNumber()
  @ApiProperty({
    description: "CPF do usuário",
    example: 12345678910,
  })
  cpf: number;
  
  @IsBoolean()
  @ApiProperty({
    description: "Verifica se o usuário é adm ou não.",
    example: true,
  })
  isAdmin: boolean;
}
