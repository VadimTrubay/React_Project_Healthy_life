import { createGlobalStyle } from 'styled-components';

export const CalendarGlobalStyles = createGlobalStyle`
  .MuiPaper-root.MuiMenu-paper {
    background-color: #0F0F0F;
    border-radius: 12px;
    overflow-y: scroll;
    box-shadow: 0px 4px 14px 0px  rgba(227, 255, 168, 0.2);
    
&::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #202020;
    border-radius: 8px;
    border: 1px solid #202020;
  };
}
  .MuiList-root {
     padding-top: 10px;
     padding-bottom: 10px;
     width: 212px;
     height: 144px;
  }

   .MuiMenu-list {
    background-color: #0F0F0F;
  }

  .MuiButtonBase-root.MuiMenuItem-root{
    min-height: 1px;
  }
`;
