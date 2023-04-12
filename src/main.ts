import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ProjectConsortGroup')
    .setDescription('Project test to Consort Group')
    .setVersion('1.0.0')
    .addTag('Status')
    .addTag('Product')  
    .addTag('Cart')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3454);
}
bootstrap();
