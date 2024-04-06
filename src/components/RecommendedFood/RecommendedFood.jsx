import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RecommendedPageList } from './RecommendedList/RecommendedList';
import { fetchRecFoods } from '../../redux/recomendedFoods/recOperations';

import image from '../../assets/images/recommendedPage.png';
import sprite from '../../assets/images/sprite.svg';
import {
  RecImage,
  RecPageContentWrapper,
  TitleWrap,
  RecPageWrapper,
  Title,
  BackIcon,
} from './RecommendedFood.styled';

export const RecommendedFood = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    dispatch(fetchRecFoods());
  }, [dispatch]);

  return (
    <RecPageContentWrapper>
      <TitleWrap>
        <Link to={backLinkLocationRef.current}>
          <BackIcon>
            <use href={`${sprite}#icon-arrowright`}></use>
          </BackIcon>
        </Link>
        <Title>Recommended food</Title>
      </TitleWrap>

      <RecPageWrapper>
        <RecImage src={image} alt="Page image" />
        <RecommendedPageList />
      </RecPageWrapper>
    </RecPageContentWrapper>
  );
};
