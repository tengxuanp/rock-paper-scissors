import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react'
import Oldman from './Oldman'

const Game = () => {

  const choices = ['rock','paper','scissors']
  const [playerChoice, setPlayerChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [winCount,setWinCount] = useState(0);

  const generateRandomNumber = () => {
    const randomNumber = choices[Math.floor(Math.random() * choices.length)];
    (setOpponentChoice(randomNumber));
}

  const checkResult = () => {
    // eslint-disable-next-line default-case
    switch (playerChoice+opponentChoice){ 
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
        setResult('You win!');
        setWinCount(winCount + 1);
        break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
        setResult('You lose!');
        break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
        setResult('Draw!');
        break;    
    } 
  }

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const handleClick = async (val) => {
    setPlayerChoice(null);
    setOpponentChoice(null);
    setResult(null);
    await delay(100);

    setPlayerChoice(val);
    generateRandomNumber();
  }

  const reset = () => {
    setPlayerChoice(null);
    setOpponentChoice(null);
    setResult(null);
    setWinCount(0);
  }

  useEffect(()=>{
    checkResult();
  },[opponentChoice, playerChoice])


  const variants = {
    normal: {opacity:1, y:0},
    drop: {opacity:0, y:100},
  }

  return (
    <div>
      <motion.div 
        className="absolute flex self-center mt-2 p-2 top-0 left-[50%] translate-x-[-50%] text-5xl border-2 border-black bg-white rounded-lg"
        animate={result ? {y:0,x:-70}:{y:-100,x:-70}}
        >
        <h1 className="inline-block whitespace-nowrap">{result}</h1>
        { winCount === 5 ? 
          <div className="text-xl"><button className="p-2 bg-yellow-200 rounded-lg hover:bg-yellow-400" onClick={()=>reset()}> Reset</button></div> : ''}
      </motion.div>

      <Oldman opponentChoice={opponentChoice} result={result} winCount={winCount} />

      <div className="p-2 flex justify-center self-center text-4xl bg-[#E6E0DC] border-2 border-black translate-y-[-1rem]">
          {choices.map((choice)=>
              <button onClick={()=>handleClick(choice)} disabled={winCount===5}>
                <motion.div
                  animate={winCount === 5 ? 'drop' : 'normal'}
                  variants={variants}
                  className="ml-2 p-2 capitalize bg-white rounded-lg border-black border-t-2 border-l-2 border-b-4 border-r-4
                  hover:bg-red-400 active:bg-red-500 active:border-b-2 active:border-r-2"
                  >
                  {choice}</motion.div></button>
          )}
      </div>

      <div className="flex justify-center self-center text-3xl">
        Win: {winCount} / 5
      </div>

    </div>
  )
}

export default Game