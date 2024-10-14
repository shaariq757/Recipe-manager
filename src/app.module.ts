import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeService } from './recipe/recipe.service';

@Module({
  imports: [ RecipeModule],
  controllers: [AppController,RecipeController],
  providers: [AppService,RecipeService],
})
export class AppModule {}
