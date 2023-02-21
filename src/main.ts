/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle("GamePlus")
    .setDescription("Aplicação para gestão de cards de jogos")
    .setVersion("1.0.0")
    .addTag("status")
    .addTag("auth")
    .addTag("game")
    .addTag("user")
    .addTag("profiles")
    .addTag("genres")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3334);
}
bootstrap();
