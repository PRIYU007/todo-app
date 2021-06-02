import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(to right, #05e8ba, #087ee1);
}
h1{
    font-size:4rem;
    font-weight:lighter;
}
h2{
    font-size: 2.5rem;
}
h3{
    font-size:2rem;
}
/* width */
::-webkit-scrollbar {
  width: 1rem;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom,#05e8ba,#333);
  border-radius: 1rem
}
`;

export default GlobalStyle;
