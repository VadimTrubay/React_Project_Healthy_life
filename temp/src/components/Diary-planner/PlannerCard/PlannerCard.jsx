import {
  MealContainer,
  MealDashbord,
  MealImage,
  MealSubscription,
  MealSubText,
  MealTitle,
  Numeration,
  RecordMealBlock,
  RenderContainer,
  RenderList,
  RenderContainerItem,
  RenderContainerItemName,
  Wrapper,
  EditWrapper,
  EditIcon,
  MealSubTextMain,
  MealSubWrapper,
  Amount,
  SubNutrition,
  AddMoreButton,
  AddMoreIcon,
  RenderItemText,
  DeleteIcon,
  MealSubTextFat,
  Carbo,
  Protein,
  Fat,
} from './PlannerCard.styled';

import { AddMore } from '../../ReacordMealPopUp/Reacord.styled';
import { useDispatch } from 'react-redux';
import { openHandler } from '../../../redux/dailyFoodStatistics/foodSlice';
import sprite from '../../../assets/images/sprite.svg';
import { MealPopUpModal } from '../../ReacordMealPopUp/MealPopUpModal';
import { useState } from 'react';
import { deleteOneProduct } from '../../../redux/dailyFoodStatistics/foodOperations';

export const PlannerCard = ({
  title,
  meal,
  setFoodType,
  typefood,
  totalCarbs,
  totalProtein,
  totalFat,
  setProductId,
  setName,
  setCalories,
  setCarbogidrate,
  setProtein,
  setFat,
  src,
}) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onOpenEditHandler = (e) => {
    const id = e.currentTarget.dataset.set;
    const selectedMeal = meal.find((item) => item._id === id);
    setName(selectedMeal.name);
    setCalories(selectedMeal.calories);
    setCarbogidrate(selectedMeal.nutrition.carbogidrate);
    setProtein(selectedMeal.nutrition.protein);
    setFat(selectedMeal.nutrition.fat);
    setProductId(id);
    setFoodType(`${typefood.toLowerCase()}`);
    dispatch(openHandler(true));
  };
  return (
    <RecordMealBlock>
      <Wrapper>
        <MealContainer>
          <MealImage src={src} />
          <MealTitle>{`${title}`}</MealTitle>
        </MealContainer>
        <MealSubscription>
          <MealSubTextMain>
            <Carbo>Carbonohidrates: </Carbo>
            <Amount> {!totalCarbs ? 0 : totalCarbs} </Amount>
          </MealSubTextMain>
          <MealSubWrapper>
            <MealSubText>
              <Protein>Protein: </Protein>
              <Amount> {!totalProtein ? 0 : totalProtein} </Amount>
            </MealSubText>
            <MealSubTextFat>
              <Fat>Fat: </Fat>
              <Amount>{!totalFat ? 0 : totalFat}</Amount>
            </MealSubTextFat>
          </MealSubWrapper>
        </MealSubscription>
      </Wrapper>

      <MealDashbord>
        {meal?.length > 0 ? (
          meal.map((item, index) => {
            return (
              <div key={item._id} style={{ position: 'relative' }}>
                <RenderContainer>
                  <RenderContainerItemName>
                    <Numeration>{index + 1}</Numeration>
                    {item.name}
                  </RenderContainerItemName>
                  <RenderList>
                    <RenderContainerItem>
                      <RenderItemText>
                        <SubNutrition> Carb. </SubNutrition>
                        {item.nutrition.carbogidrate}
                      </RenderItemText>
                    </RenderContainerItem>
                    <RenderContainerItem>
                      <RenderItemText>
                        <SubNutrition> Prot. </SubNutrition>
                        {item.nutrition.protein}
                      </RenderItemText>
                    </RenderContainerItem>
                    <RenderContainerItem>
                      <RenderItemText>
                        <SubNutrition> Fat. </SubNutrition>
                        {item.nutrition.fat}
                      </RenderItemText>
                    </RenderContainerItem>
                  </RenderList>
                </RenderContainer>

                <EditWrapper>
                  <EditIcon data-set={item._id} onClick={onOpenEditHandler}>
                    <use href={`${sprite}#icon-edit-3`}></use>
                  </EditIcon>

                  <DeleteIcon
                    data-set={item._id}
                    onClick={() =>
                      dispatch(
                        deleteOneProduct({ id: item._id, foodType: typefood })
                      )
                    }
                  >
                    <use href={`${sprite}#trash-delete`}></use>
                  </DeleteIcon>
                </EditWrapper>
              </div>
            );
          })
        ) : (
          <AddMoreButton onClick={openModal}>
            <AddMore>Record your meal</AddMore>
            <AddMoreIcon>
              <use href={`${sprite}#icon-add-converted`}></use>
            </AddMoreIcon>
          </AddMoreButton>
        )}

        {meal?.length > 0 ? (
          <div style={{ display: 'flex' }}>
            <Numeration>{meal.length + 1}</Numeration>
            <AddMoreButton onClick={openModal}>
              <AddMore>Record your meal</AddMore>
              <AddMoreIcon>
                <use href={`${sprite}#icon-add-converted`}></use>
              </AddMoreIcon>
            </AddMoreButton>
          </div>
        ) : null}
        <MealPopUpModal
          closeModal={closeModal}
          stateModal={isModalOpen}
          typefood={typefood}
        />
      </MealDashbord>
    </RecordMealBlock>
  );
};
