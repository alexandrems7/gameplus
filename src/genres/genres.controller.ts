/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { GenresService } from "./genres.service";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("genres")
@Controller("genres")
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  @ApiOperation({
    summary: "Cria o gênero de um game",
  })
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @Get()
  @ApiOperation({
    summary: "Pesquisa por todos os gêneros existentes",
  })
  findAll() {
    return this.genresService.findAll();
  }

  @Get(":id")
  @ApiOperation({
    summary: "Procura um gênero pelo seu ID",
  })
  findOne(@Param("id") id: string) {
    return this.genresService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({
    summary: "Edita um gênero",
  })
  update(@Param("id") id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.update(id, updateGenreDto);
  }

  @Delete(":id")
  @ApiOperation({
    summary: "Deleta um gênero",
  })
  delete(@Param("id") id: string) {
    this.genresService.delete(id);
  }
}
