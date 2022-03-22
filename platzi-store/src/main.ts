import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //Validacion para que no metan mas datos de los permitidos, solo los borra y coloca datos que si sean
      whitelist: true,
      //validacion para mandar error por los datos no permitidos
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
