import axios from "axios";

export const getRandomAdvice =  async ()  => {

    try{
        const response = await axios.get('https://api.adviceslip.com/advice').then(res => res.data.slip);
        return response;
    }catch(error) {
        console.log(error)
    }
    
}

