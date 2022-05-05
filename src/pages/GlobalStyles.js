import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
  
  :root{
    --fw-800: 800;
    --fs-body: 28px;
    --ff-body:'Manrope', sans-serif;
    --color-primary-light-cyan: hsl(193, 38%, 86%);
    --color-primary-neon-green: hsl(150, 100%, 66%);
    --color-neutral-grayish-blue: hsl(217, 19%, 38%);
    --color-neutral-dark-grayish-blue: hsl(217, 19%, 24%);
    --color-neutral-dark-blue: hsl(218, 23%, 16%);
    --bg-body:var(--color-neutral-dark-blue);
}

  *, *::after, *::before{
    margin: 0;
    padding: 0;
    font-family: var(--ff-body); 
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-neutral-dark-blue);
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img{
      width:100;
      height:auto;
      display: block;
  }
`;

export default GlobalStyle;