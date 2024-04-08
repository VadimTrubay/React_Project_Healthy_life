import styled from 'styled-components';

export const IconMenu = styled.svg`
  @media screen and (min-width: 320px) {
    width: 16px;
    height: 16px;
    fill: var(--primary-color-grey);

    &:hover {
      stroke: var(--primary-color-green-lite);
    }
  }

  @media screen and (min-width: 834px) {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonClose = styled.button`
  background: 0 0;
  border: none;
  padding: 0px 0px;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const IconClose = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-grey);
  &:hover {
    stroke: var(--primary-color-green-lite);
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  width: 300px;
  height: auto;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    top: 245px;
    left: 190px;
    width: 326px;
    height: 286px;
    padding: 58px 40px;
  }
`;

export const DivLogo = styled.div`
  display: flex;
`;

export const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;

  @media screen and (min-width: 834px) {
    width: 834px;
  }
`;

export const DivMenu = styled.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 40px;
    width: 346px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 65px;
`;
