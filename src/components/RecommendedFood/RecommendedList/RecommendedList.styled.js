import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';

// MAIN PAGE RECOMMENDED

export const RecForMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`;

export const RecListTitle = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.4;
  }
`;

export const RecLink = styled(NavLink)`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--primary-color-grey);
  &:hover,
  &:focus {
    color: var(--primary-color-green-lite);
  }
`;

export const Image = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
  align-items: center;

  &:hover,
  &:focus {
    fill: var(--primary-color-green-lite);
  }
`;
export const RecLinkWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 3px;

  transition: color, var(--transition-dur-and-func);
  transition: fill, var(--transition-dur-and-func);
`;

// RECOMMENDED PAGE

// export const ListWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media screen and (min-width: 1440px) {
//     max-width: 680px;
//   }
/* @media screen and (min-width: 1440px) {
    max-width: 680px;
    max-height: 510px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 4px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: var(--primary-color-black-one);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--primary-color-grey);
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color-green-lite);
    }
    &::-webkit-scrollbar-thumb:active {
      background: var(--primary-color-green-lite);
    }
  } */
// `;

export const RecList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
    max-height: 510px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 4px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: var(--primary-color-black-one);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--primary-color-grey);
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color-green-lite);
    }
    &::-webkit-scrollbar-thumb:active {
      background: var(--primary-color-green-lite);
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 680px;
  }
`;

// export const SeeMoreBtn = styled.button`
//   background-color: var(--primary-color-green-lite);
//   color: var(--primary-color-black-two);
//   padding: 8px 10px;
//   border-radius: 12px;
//   border: none;
//   width: 122px;
//   height: 36px;
//   text-align: center;
//   font-weight: 500;
//   transition: background-color, var(--transition-dur-and-func);

//   &:hover {
//     background-color: var(--secondary-color-yellow);
//   }

//   @media screen and (min-width: 834px) {
//     width: 212px;
//   }
// `;

// export const BtnWrapper = styled.div`
//   margin: 0 auto;
//   padding: 30px 0;

//   @media screen and (min-width: 1440px) {
//     /* display: none; */
//   }
// `;
