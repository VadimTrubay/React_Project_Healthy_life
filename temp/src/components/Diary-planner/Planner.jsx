import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getFood } from '../../redux/dailyFoodStatistics/foodOperations';
import { Record } from '../ReacordMealPopUp/Record';
import {
  Container,
  DesktopContainer,
  Title,
  StyledLink,
  TitleWrap,
  BackIcon,
} from './Planner.styled';
import { PlannerCard } from './PlannerCard/PlannerCard';
import sprite from '../../assets/images/sprite.svg';
import {
  selectBreakfast,
  selectDinner,
  selectLunch,
  selectOpen,
  selectSnack,
} from '../../redux/dailyFoodStatistics/foodSelectors';

import Breakfast from '../../assets/images/Breakfast.png';
import Dinner from '../../assets/images/Dinner.png';
import Lunch from '../../assets/images/Lunch.png';
import Snack from '../../assets/images/Snack.png';
import { openHandler } from '../../redux/dailyFoodStatistics/foodSlice';

export const Planner = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [foodType, setFoodType] = useState('');
  const breakfast = useSelector(selectBreakfast);
  const lunch = useSelector(selectLunch);
  const dinner = useSelector(selectDinner);
  const snack = useSelector(selectSnack);

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [carbogidrate, setCarbogidrate] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [productId, setProductId] = useState('');
  const dispatch = useDispatch();

  const totalFatBreakfast = breakfast?.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );
  const totalFatDinner = dinner?.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );
  const totalFatLunch = lunch?.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );
  const totalFatSnack = snack?.reduce(
    (sum, item) => sum + item.nutrition?.fat,
    0
  );

  const totalProteinBreakfast = breakfast?.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );
  const totalProteinDinner = dinner?.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );
  const totalProteinLunch = lunch?.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );
  const totalProteinSnack = snack?.reduce(
    (sum, item) => sum + item.nutrition?.protein,
    0
  );

  const totalCarbsBreakfast = breakfast?.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalCarbsDinner = dinner?.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalCarbsLunch = lunch?.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );
  const totalCarbsSnack = snack?.reduce(
    (sum, item) => sum + item.nutrition?.carbogidrate,
    0
  );

  const isOpen = useSelector(selectOpen);

useEffect(() => {
        const handleEsc = (e) => {
          if (e.code === 'Escape') {
            
            dispatch(openHandler(false))

            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'unset';

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, dispatch]);


  useEffect(() => {
    dispatch(getFood());
  }, [dispatch]);
  return (
    <Container>
      <TitleWrap>
        <StyledLink to={backLinkLocationRef.current}>
          <BackIcon>
            <use href={`${sprite}#icon-arrowright`}></use>
          </BackIcon>
        </StyledLink>
        <Title>Diary</Title>
      </TitleWrap>

      {isOpen ? (
        <Record
          type={foodType}
          name={name}
          calories={calories}
          carbogidrate={carbogidrate}
          protein={protein}
          fat={fat}
          productId={productId}
          setName={setName}
          setCalories={setCalories}
          setCarbogidrate={setCarbogidrate}
          setProtein={setProtein}
          setFat={setFat}
        />
      ) : null}
      <DesktopContainer>
        <PlannerCard
          totalCarbs={totalCarbsBreakfast}
          totalProtein={totalProteinBreakfast}
          totalFat={totalFatBreakfast}
          meal={breakfast}
          title={'Breakfast'}
          typefood={'breakfast'}
          setFoodType={setFoodType}
          setName={setName}
          setCalories={setCalories}
          setCarbogidrate={setCarbogidrate}
          setProtein={setProtein}
          setFat={setFat}
          setProductId={setProductId}
          src={Breakfast}
        />
        <PlannerCard
          totalCarbs={totalCarbsLunch}
          totalProtein={totalProteinLunch}
          totalFat={totalFatLunch}
          meal={lunch}
          title={'Lunch'}
          typefood={'lunch'}
          setFoodType={setFoodType}
          setName={setName}
          setCalories={setCalories}
          setCarbogidrate={setCarbogidrate}
          setProtein={setProtein}
          setFat={setFat}
          setProductId={setProductId}
          src={Lunch}
        />
        <PlannerCard
          totalCarbs={totalCarbsDinner}
          totalProtein={totalProteinDinner}
          totalFat={totalFatDinner}
          meal={dinner}
          title={'Dinner'}
          typefood={'dinner'}
          setFoodType={setFoodType}
          setName={setName}
          setCalories={setCalories}
          setCarbogidrate={setCarbogidrate}
          setProtein={setProtein}
          setFat={setFat}
          setProductId={setProductId}
          src={Dinner}
        />
        <PlannerCard
          totalCarbs={totalCarbsSnack}
          totalProtein={totalProteinSnack}
          totalFat={totalFatSnack}
          meal={snack}
          title={'Snack'}
          typefood={'snack'}
          setFoodType={setFoodType}
          setName={setName}
          setCalories={setCalories}
          setCarbogidrate={setCarbogidrate}
          setProtein={setProtein}
          setFat={setFat}
          setProductId={setProductId}
          src={Snack}
        />
      </DesktopContainer>
    </Container>
  );
};
