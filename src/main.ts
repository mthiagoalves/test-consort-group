import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: [
        'http://localhost:8080',
        'http://localhost:8081'
        // url with access, defined for me!
      ]
    }
  });

  app.set('trust proxy', 1);

  const config = new DocumentBuilder()
    .setTitle('ProjectConsortGroup')
    .setDescription('Project test to Consort Group')
    .setVersion('1.0.0')
    .addTag('Status')
    .addTag('Auth')
    .addTag('Purchase')
    .addTag('Cart')
    .addTag('User')
    .addTag('Product')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.POST || 3454);
}
bootstrap();
