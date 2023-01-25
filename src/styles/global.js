import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.COLORS.BACKGROUND_500};

    button:hover {
      opacity: 0.5;
    }
  }

`;