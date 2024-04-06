import { styled } from 'styled-components';

export const ContentBlock = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const FoodBlock = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-wrap: nowrap;
    gap: 20px;
  }
`;

export const MealOptions = styled.p`
  width: 160px;
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 4px;
  @media screen and (min-width: 834px) {
    width: auto;
  }
`;
export const MealOptionsSecond = styled.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  align-items: center;
  display: flex;
  gap: 4px;
  @media screen and (min-width: 834px) {
    /* min-width: 88px; */
  }
`;

export const MealTitle = styled.h3`
  min-width: 100px;
  color: var(--primary-color-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const TitleBlock = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`;

export const DeleteIcon = styled.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: var(--primary-color-green-lite);
  cursor: pointer;
`;

export const AddIcon = styled.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  fill: var(--primary-color-green-lite);
`;

export const AddMealWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  max-height: 20px;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  padding: 0;
  cursor: pointer;
`;

export const Amount = styled.span`
  color: var(--primary-color-grey);
  font-weight: 500;
`;
