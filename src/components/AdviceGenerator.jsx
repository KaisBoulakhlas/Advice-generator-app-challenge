import React, { useEffect, useState } from 'react'
import { Advice, AdviceText, Container, Dice, Separator, Title, Toggle } from './AdviceGeneratorStyles'
import dice from "../assets/icon-dice.svg";
import { getRandomAdvice } from '../services/AdviceServices';
import axios from "axios";

export default function  AdviceGenerator() {
  const [randomAdvice, setRandomAdvice] = useState({});

  const getRandomAdvice =  async ()  => {

    try{
        const response = await axios.get('https://api.adviceslip.com/advice');
        setRandomAdvice(response.data.slip);
    }catch(error) {
        console.log(error)
    }
    
}

  const displayRandomAdvice = async () => {
    return await getRandomAdvice();
  }

  useEffect(() => {
    getRandomAdvice();
  }, [])

  return (
    <Container>
        <Title>Advice #{randomAdvice.id}</Title>
        <Advice>
            <AdviceText>{randomAdvice.advice}</AdviceText>
        </Advice>
        <Separator />
        <Toggle onClick={displayRandomAdvice}>
            <Dice src={dice}  alt="dice"/>
        </Toggle>
    </Container>
  )
}
