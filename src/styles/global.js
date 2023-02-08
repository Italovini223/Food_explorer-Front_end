import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({theme}) => theme.COLORS.BACKGROUND_500};

    button:hover {
      opacity: 0.5;
    }
  }

  body::-webkit-scrollbar {
    width: 1px;               /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
  }

  body::-webkit-scrollbar-thumb {

  }

`;