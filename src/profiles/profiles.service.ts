/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { Profiles } from "./entities/profile.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { handleError } from "utils/handle-error.util";

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Profiles[]> {
    return this.prisma.profiles.findMany();
  }

  async findById(id: string): Promise<Profiles> {
    const record = await this.prisma.profiles.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Jogo com ID ${id} não encontrado.`);
    }
    return record;
  }

  async findOne(id: string): Promise<Profiles> {
    return this.findById(id);
  }

  create(dto: CreateProfileDto): Promise<Profiles> {
    const data: Profiles = { ...dto };

    return this.prisma.profiles.create({ data }).catch(handleError);
  }

  async update(id: string, dto: UpdateProfileDto): Promise<Profiles> {
    await this.findById(id);
    const data: Partial<Profiles> = { ...dto };

    return this.prisma.profiles
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.profiles.delete({ where: { id } });
  }
}
