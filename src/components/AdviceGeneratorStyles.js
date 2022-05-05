import styled from 'styled-components'
import patternDividerDesktop from "../assets/pattern-divider-desktop.svg";
import patternDividerMobile from "../assets/pattern-divider-mobile.svg";
import { mobile } from "../responsive";

export const Container = styled.div`
    background-color: var(--color-neutral-dark-grayish-blue);
    box-shadow: 0px 0px 9px -5px rgb(0 0 0 / 50%);
    border-radius: 0.5rem;
    text-align:center;
    position:relative;
    width: 400px;
    display: flex;    
    padding: 2rem;
    align-items: center;
    flex-direction: column;
    height:auto;
    ${mobile({ width: "350px" })}
`;

export const Title = styled.h3`
    color:var(--color-primary-neon-green);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.75rem;
`;

export const Advice = styled.blockquote`
     width:100%;
     margin:1rem 2rem 1rem 2rem;
`

export const AdviceText = styled.p`
    color:var(--color-primary-light-cyan);
    &:before{
        content: open-quote;
    }

    &:after{
        content: close-quote;
    }

    font-size:1.5rem;
`;

export const Separator = styled.div`
    background-image: url(${patternDividerDesktop});
    width: 100%;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    ${mobile({ backgroundImage: `url(${patternDividerMobile})` })}
`;

export const SeparatorIcon = styled.img``;

export const Toggle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border:0;
    position: absolute;
    top: 90%;
    outline:0;
    cursor: pointer;
    width:40px;
    height:40px;
    background-color: var(--color-primary-neon-green);
    transition: box-shadow 0.2s ease-in-out;

&:hover{
    box-shadow: 0px 0px 20px 10px hsla(150, 100%, 66%, 0.4);
}

`;


export const Dice = styled.img`
    max-width:15px;
`;

