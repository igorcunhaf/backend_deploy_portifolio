import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para ambiente de produção e dev
  app.enableCors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Corrigido: escutar em 0.0.0.0 para funcionar no Railway
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
