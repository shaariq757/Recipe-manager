import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('recipe')
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @ApiBody({type:CreateRecipeDto})
  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  @Get()
   findAll() {
    const res =  this.recipeService.findAll();
    if(!res){
      throw new HttpException('No recipe saved',HttpStatus.NOT_FOUND)
    }
    return res
  }

  @ApiParam({name:'id',type:'number'})
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const res = await this.recipeService.findOne(id);
    if(!res){
      throw new HttpException('Recipe not found',HttpStatus.NOT_FOUND)
    }
    return res
  }

  @ApiBody({type:UpdateRecipeDto})
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(id, updateRecipeDto);
  }

  @ApiParam({name:'id',type:'number'})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.recipeService.remove(id);
  }
}
