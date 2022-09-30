import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../../src/recipes.json';

export const App = () => {
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};
