/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GenresController],
  providers: [GenresService]
})
export class GenresModule {}
