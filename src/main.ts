import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envVars } from './config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCustomExceptionFilter } from './common';

async function bootstrap() {
  const logger = new Logger('Main-Gateway');
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new RpcCustomExceptionFilter());

  await app.listen(envVars.PORT);
  console.log('Hola mundo segundo cambio');

  logger.log(`Gateway running on PORT ${envVars.PORT}`);
}
bootstrap();
