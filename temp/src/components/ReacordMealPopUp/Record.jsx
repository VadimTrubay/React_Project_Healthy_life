import { useDispatch } from 'react-redux';
import { updateFood } from '../../redux/dailyFoodStatistics/foodOperations';
import { openHandler } from '../../redux/dailyFoodStatistics/foodSlice';
import {
  MealContainer,
  MealImage,
  MealTitle,
} from '../Diary-planner/PlannerCard/PlannerCard.styled';
import {
  BackDrop,
  Button,
  ButtonBlock,
  ContentBlock,
  InputBlock,
  SubInputBlock,
  Title,
  CancelButton,
  RecordInputName,
  RecordInputCarbo,
  RecordInputProtein,
  RecordInputFat,
  RecordInputCalories,
} from './Reacord.styled';
import breakfast from '../../assets/images/Breakfast.png';
import dinner from '../../assets/images/Dinner.png';
import lunch from '../../assets/images/Lunch.png';
import snack from '../../assets/images/Snack.png';
import { capitalize } from '@mui/material';

export const Record = ({
  type,
  name,
  calories,
  carbogidrate,
  protein,
  fat,
  productId,
  setName,
  setCalories,
  setCarbogidrate,
  setProtein,
  setFat,
}) => {
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(openHandler(false));
  };

  const arr = {
    typeFood: type,
    userFood: {
      name,
      calories,
      nutrition: { carbogidrate, protein, fat },
    },
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(updateFood({ id: productId, food: arr }));
    onCloseHandler();
  };

  const img = (type) => {
    if (type === 'breakfast') {
      return breakfast;
    } else if (type === 'dinner') {
      return dinner;
    } else if (type === 'lunch') {
      return lunch;
    } else if (type === 'snack') {
      return snack;
    }
  };

  return (
    <BackDrop onClick={onCloseHandler}>
      <ContentBlock onClick={(e) => e.stopPropagation()}>
        <Title>Record your meal</Title>
        <MealContainer
          style={{
            marginTop: '24px',
          }}
        >
          <MealImage src={img(type)} />
          <MealTitle>{capitalize(type)}</MealTitle>
        </MealContainer>
        <form onSubmit={formHandler}>
          <InputBlock>
            <RecordInputName
              value={name}
              type={'string'}
              placeholder="The name of the product or dish"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <RecordInputCarbo
              min={0}
              max={200}
              type={'number'}
              onChange={(e) => {
                setCarbogidrate(e.target.value);
              }}
              value={carbogidrate}
              placeholder="Carbonoh"
            />
            <RecordInputProtein
              min={0}
              max={200}
              type={'number'}
              onChange={(e) => {
                setProtein(e.target.value);
              }}
              value={protein}
              placeholder="Protein"
            />
            <SubInputBlock>
              <RecordInputFat
                min={0}
                max={200}
                type={'number'}
                onChange={(e) => {
                  setFat(e.target.value);
                }}
                value={fat}
                placeholder="Fat"
              />
              <RecordInputCalories
                min={0}
                max={3000}
                type={'number'}
                onChange={(e) => {
                  setCalories(e.target.value);
                }}
                value={calories}
                placeholder="Calories"
              />
            </SubInputBlock>
          </InputBlock>
          <ButtonBlock>
            <Button type="submit">Confirm</Button>
            <CancelButton onClick={onCloseHandler} type="button">
              Cancel
            </CancelButton>
          </ButtonBlock>
        </form>
      </ContentBlock>
    </BackDrop>
  );
};
