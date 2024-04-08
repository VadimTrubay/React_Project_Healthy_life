import { useDispatch } from 'react-redux';
import { deleteFood } from '../../../redux/dailyFoodStatistics/foodOperations';
import { MealImage } from '../../Diary-planner/PlannerCard/PlannerCard.styled';
import { AddMore } from '../../ReacordMealPopUp/Reacord.styled';
import {
  ContentBlock,
  FoodBlock,
  MealOptions,
  MealTitle,
  TitleBlock,
  DeleteIcon,
  AddIcon,
  AddMealWrap,
  MealOptionsSecond,
  Amount,
} from './DiaryMainCard.styled';
import sprite from '../../../assets/images/sprite.svg';
import { useState } from 'react';
import { MealPopUpModal } from '../../ReacordMealPopUp/MealPopUpModal';
import { capitalize } from '@mui/material';

export const DiaryMainCard = ({
  meal,
  title,
  totalCarbs,
  totalProtein,
  totalFat,
  typefood,
  src,
}) => {
  const dispatch = useDispatch();
  const deleteMealHandler = (title) => {
    dispatch(deleteFood({ userFood: {}, typeFood: title }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <ContentBlock>
      <MealPopUpModal
        closeModal={closeModal}
        stateModal={isModalOpen}
        typefood={typefood}
      />
      <TitleBlock>
        <MealImage src={src} />
        <MealTitle>{capitalize(title)}</MealTitle>
      </TitleBlock>
      <FoodBlock>
        {meal?.length > 0 ? (
          <>
            <MealOptions>
              Carbonohidrates: <Amount> {totalCarbs}</Amount>
            </MealOptions>
            <MealOptionsSecond>
              Protein: <Amount>{totalProtein}</Amount>
            </MealOptionsSecond>
            <MealOptionsSecond>
              Fat: <Amount>{totalFat}</Amount>
            </MealOptionsSecond>
            <DeleteIcon onClick={() => deleteMealHandler(title.toLowerCase())}>
              <use href={`${sprite}#trash-delete`}></use>
            </DeleteIcon>
          </>
        ) : (
          <AddMealWrap id={typefood} data-site={typefood} onClick={openModal}>
            <AddMore>Record your meal</AddMore>
            <AddIcon>
              <use href={`${sprite}#icon-add-converted`}></use>
            </AddIcon>
          </AddMealWrap>
        )}
      </FoodBlock>
    </ContentBlock>
  );
};
