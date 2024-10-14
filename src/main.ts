import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppDataSource } from './data-source';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('Recipes API').setDescription('A recipes API').addTag('recipe').setVersion('1.0').build()

  const doc = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,doc)

  AppDataSource.initialize().then(async ()=>console.log('Database connected successfully')).catch((error)=>console.log(error))

  await app.listen(3000);
}
bootstrap();
