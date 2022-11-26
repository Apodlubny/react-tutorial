import PropTypes from 'prop-types';
import { HiChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';

import {
  Card,
  InfoContainer,
  RecipeName,
  InfoBlock,
  Label,
} from './Recipe.styled';
export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <Card>
      <RecipeName>{name}</RecipeName>
      <InfoContainer>
        <InfoBlock>
          <HiChartBar size={24} />
          <Label>{time} min</Label>
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartPie size={24} />
          <Label>{servings} servings</Label>
        </InfoBlock>
        <InfoBlock>
          <BsAlarm size={24} />
          <Label>{calories} calories</Label>
        </InfoBlock>
      </InfoContainer>
    </Card>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }),
};
