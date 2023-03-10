/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { handleError } from "utils/handle-error.util";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {



  constructor(private readonly prisma: PrismaService) {}

   findAll(): Promise<User[]> {

    return this.prisma.user.findMany();
  }
  

 async  findById(id: string): Promise<User>{
    const record = await this.prisma.user.findUnique({ where: { id } });

    if (!record){
      throw new NotFoundException(`Jogo com ID ${id} não encontrado.`)
    }
    return record;
  }

  async  findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  create(dto: CreateUserDto): Promise<User> {
    delete dto.confirmPassword;
    
    const data: User = { ...dto };

    return this.prisma.user.create({ data }).catch(handleError);

  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    

    await this.findById(id)

    delete dto.confirmPassword;
    const data: Partial<User> = {...dto};

    return this.prisma.user.update({
      where: {id},
      data,
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id)
    await this.prisma.user.delete({ where: {id}})
  }



 
}
;