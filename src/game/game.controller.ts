/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus
} from "@nestjs/common";
import { GameService } from "./game.service";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("game")
@Controller("game")
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @ApiOperation({
    summary: "Criar um game",
  })
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  @ApiOperation({
    summary: "Listar todos os games",
  })
  findAll() {
    return this.gameService.findAll();
  }

  @Get(":id")
  @ApiOperation({
    summary: "Buscar um jogo",
  })
  findOne(@Param("id") id: string) {
    return this.gameService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({
    summary: "Editar um game",
  })
  update(@Param("id") id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(id, updateGameDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: "Deletar um game por ID",
  })
  delete(@Param("id") id: string) {
    return this.gameService.delete(id);
  }
}
