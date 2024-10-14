import {  Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { AppDataSource } from '../data-source';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipeService {
   async create(createRecipeDto: CreateRecipeDto) {
     return  AppDataSource.createQueryBuilder().insert().into('recipe').values(createRecipeDto).execute().then(()=>createRecipeDto);
  }

  findAll() {
    return AppDataSource.getRepository(Recipe).createQueryBuilder('recipe').getMany()
  }

  async findOne(id: number) {
    return AppDataSource.getRepository(Recipe).createQueryBuilder('recipe').where(`id=${id}`).getOne();
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return AppDataSource.createQueryBuilder().update(Recipe,updateRecipeDto).where(`id=${id}`).execute().then(()=>updateRecipeDto);
  }

  remove(id: number) {
    return AppDataSource.createQueryBuilder().delete().from('recipe').where(`id=${id}`).execute();
  }
}
