import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)``;

export const BackIcon = styled.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  rotate: 180deg;
  fill: var(--primary-color-grey);

  &:hover {
    fill: var(--primary-color-green-lite);
  }

  @media screen and (min-width: 834px) {
    width: 24px;
    height: 24px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    width: 780px;
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;
export const Container = styled.div`
  width: 300px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
