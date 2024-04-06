import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 196px;
  }

  @media screen and (min-width: 1440px) {
    gap: 126px;
  }
`;

export const MealContainer = styled.div`
  display: flex;
  gap: 12px;
  min-width: 148px;
`;

export const MealTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const MealImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const MealSubscription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 834px) {
    /* width: 100%; */
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    /* display: flex; */
    /* align-items: center; */
  
  }
`;

export const MealSubTextMain = styled.div`
display: flex;
gap: 4px;
  @media screen and (min-width: 834px) {
    /* margin-top: 0px;
    width: 154px; */
  }
`;

export const Carbo = styled.p`
/* width: 100%; */
  @media screen and (min-width: 834px) {
/* width: 126px; */
  }
`;

export const MealSubText = styled.div`
display: flex;
gap: 4px;
  @media screen and (min-width: 834px) {
  
    /* margin-top: 0px; */
  }
`;

export const Protein = styled.p`
/* width: 100%; */
  @media screen and (min-width: 834px) {
/* width: 54px; */
  }
`;

export const MealSubTextFat = styled.div`
display: flex;
gap: 4px;
  @media screen and (min-width: 834px) {
    /* margin-top: 0px; */
  }
`;

export const Fat = styled.p`
/* width: 100%; */
  @media screen and (min-width: 834px) {
/* width: 26px; */
  }
`;

export const Amount = styled.span`
  color: var(--primary-color-grey);
  width: 36px;
  font-weight: 500;
  line-height: 1.42;
`;

export const MealDashbord = styled.div`
  margin-top: 12px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 12px;
  height: 232px;
  background-color: var(--primary-color-black-two);
  border-radius: 13px;
  width: 300px;
  position: relative;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 32px 14px;
    gap: 32px;
    margin-top: 6px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 240px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 20px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color-grey-one);
  }
  &::-webkit-scrollbar-thumb:active {
    background: var(--secondary-color-grey-one);
  }
`;

export const SubNutrition = styled.span`
  color: var(--primary-color-grey);
  font-weight: 400;
  line-height: 1.42;
  margin-right: 6px;

  @media screen and (min-width: 834px) {
    display: none;
  }
`;

export const MealSubWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Numeration = styled.span`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
  margin-right: 16px;
`;

export const RecordMealBlock = styled.div`
  /* max-width: 780px; */

  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`;

export const RenderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  column-gap: 12px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }
`;

export const RenderContainerItemName = styled.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const RenderItemText = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: 834px) {
    font-size: 14px;
  }
`;

export const RenderList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-left: 24px;

  @media screen and (min-width: 834px) {
    position: absolute;
    right: 60px;
    gap: 32px;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    right: 34px;
  }
`;

export const RenderContainerItem = styled.li`
  color: var(--primary-color-white);
  line-height: 1.42;
  max-height: 25px;
  width: 70px;

  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: flex-start;
    width: 80px;
    position: relative;
  }
`;

export const EditWrapper = styled.button`
  display: flex;
  gap: 6px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const EditIcon = styled.svg`
  width: 16px;
  height: 16px;
   &:hover {
    stroke: var(--primary-color-green-lite);
  }
`;

export const DeleteIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const AddMoreButton = styled.button`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  max-height: 20px;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  padding: 0;
`;

export const AddMoreIcon = styled.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  fill: var(--primary-color-green-lite);
`;

// export const IconBox = styled.div`
//   display: flex;
//   gap: 12px;

//   @media screen and (min-width: 834px) {
   
//   }
// `;
