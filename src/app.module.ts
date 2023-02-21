/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { ProfilesModule } from './profiles/profiles.module';
import { GenresModule } from './genres/genres.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ PrismaModule, GameModule, UserModule, ProfilesModule, GenresModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
