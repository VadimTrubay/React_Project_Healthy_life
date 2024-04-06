import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerDiary = styled.div`
  width: 300px;
  @media screen and (min-width: 834px) {
    width: 558px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 16px;
  align-items: center;
`;

export const Title = styled.h2`
  color: var(--primary-color-white);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;
export const StyledLink = styled(Link)`
  color: var(--primary-color-grey);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`;

export const FoodBlocks = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  @media screen and (min-width: 834px) {
    gap: 28px;
  }
`;
