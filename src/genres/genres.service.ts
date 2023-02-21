/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { Genre } from "./entities/genre.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { handleError } from "utils/handle-error.util";

@Injectable()
export class GenresService {



  constructor(private readonly prisma: PrismaService) {}

   findAll(): Promise<Genre[]> {

    return this.prisma.genres.findMany();
  }
  

 async  findById(id: string): Promise<Genre>{
    const record = await this.prisma.genres.findUnique({ where: { id } });

    if (!record){
      throw new NotFoundException(`Jogo com ID ${id} não encontrado.`)
    }
    return record;
  } 

  async  findOne(id: string): Promise<Genre> {
    return this.findById(id);
  }

  create(dto: CreateGenreDto): Promise<Genre> {
    
    const data: Genre = { ...dto };
    return this.prisma.genres.create({ data }).catch(handleError);

  }

  async update(id: string, dto: UpdateGenreDto): Promise<Genre> {

    await this.findById(id)
    const data: Partial<Genre> = {...dto};

    return this.prisma.genres.update({
      where: {id},
      data,
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id)
    await this.prisma.genres.delete({ where: {id}})
  }


}
;