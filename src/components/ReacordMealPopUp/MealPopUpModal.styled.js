import { Field } from 'formik';
import { styled } from 'styled-components';

export const RecordInputName = styled(Field)`
  width: 270px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  @media screen and (min-width: 834px) {
    width: 255px;
  }
`;

export const RecordInputCarbo = styled(Field)`
  width: 270px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 100px;
  }
`;

export const RecordInputProtein = styled(Field)`
  width: 270px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 86px;
  }
`;

export const RecordInputFat = styled(Field)`
  width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 61px;
  }
`;

export const RecordInputCalories = styled(Field)`
  width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 78px;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`;

export const AddIcon = styled.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 6px;
  border: none;
  color: var(--primary-color-green-lite);
  font-family: 'Poppins400', sans-serif;
  margin-top: 40px;
  width: 150px;
  height: 20px;

  &:hover,
  &:focus {
    color: var(secondary-color-yellow);
  }
`;

export const ButtonDelete = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
`;

export const CancelButton = styled.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const ContentBlock = styled.div`
  position: relative;
  width: 276px;
  height: 514px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    width: 684px;
    height: 408px;
    padding: 12px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Wrapper = styled.div`
  max-height: 270px;
  margin: 15px 0 0 0;
  overflow: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b6b6b6;
    border-radius: 8px;
    border: 1px solid #0f0f0f;
  }

  @media screen and (min-width: 834px) {
    max-height: 200px;
  }
`;
