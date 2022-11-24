import recipes from './recipes.json';
import { RecipeList } from './RecipeList/RecipeList';
import { Button } from './Button/Button';
import {
  HiArchive,
  HiArrowCircleUp,
  HiBriefcase,
  HiFingerPrint,
} from 'react-icons/hi';
import { Box } from '../Box';

export const App = () => {
  return (
    <>
      <RecipeList recipes={recipes} />
      <Box as="section" mt={6}>
        <Button icon={HiArchive}>Search</Button>
        <Button icon={HiArrowCircleUp}>Filter</Button>
        <Button icon={HiBriefcase}>Show Modal</Button>
        <Button icon={HiFingerPrint} type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
};
