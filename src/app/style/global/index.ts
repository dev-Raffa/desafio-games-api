'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
html {
  font-size: 62.5%;
}
body {
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 98vw;
}

body::-webkit-scrollbar {
  width: 10px;
  border-left: #FFFFFF solid 1px;
  padding-left: 2px;
}

body::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.secundary};
}

body::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
}

input:-internal-autofill-selected {
  background-color: transparent;
}
@media screen and (max-width: 1199px) {
    #section-cards{
      grid-template-columns: 1fr 1fr;
    }
  }

@media screen and (max-width: 899px) {
    #section-cards{
      grid-template-columns: 1fr;
    }
  }

@media screen and (max-width: 768px) {
    html{
      font-size:50%;
    }
  }

`;

export default GlobalStyle;
