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
  HttpStatus,
} from "@nestjs/common";
import { ProfileService } from "./profiles.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("profiles")
@Controller("profiles")
export class ProfilesController {
  constructor(private readonly profilesService: ProfileService) {}

  @Post()
  @ApiOperation({
    summary: "Criar um perfil",
  })
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  @ApiOperation({
    summary: "Ver todos os perfis",
  })
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(":id")
  @ApiOperation({
    summary: "Procurar perfil por ID",
  })
  findOne(@Param("id") id: string) {
    return this.profilesService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({
    summary: "Editar perfil",
  })
  update(@Param("id") id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(id, updateProfileDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: "Apagar perfil",
  })
  delete(@Param("id") id: string) {
     this.profilesService.delete(id);
  }
}
