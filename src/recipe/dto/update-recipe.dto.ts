import { PartialType } from '@nestjs/swagger';
import { CreateRecipeDto } from './create-recipe.dto';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
    title:string
    description: string;
    ingredients: string;
    instructions: string;
}
