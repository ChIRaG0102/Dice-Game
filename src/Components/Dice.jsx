import { useState } from "react";
import Rules from "./Rules";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'

const lenis = new Lenis()
lenis.on('scroll', (e) => {
//   console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf);

const Dice = ({ setSelectedNum, selectedNum, setError, setTotalScore, setClickedNumber }) => {

  const [randomNum, setRandomNum] = useState(1);
  const [rulesOpen, setRulesOpen] = useState(false);
  
  let randomNumber ;
  const randomNumGenrator = (max,min) => {
    randomNumber =  (Math.floor(Math.random() * (max - min + 1)) + min);
    setRandomNum(randomNumber);
  };

  const diceClick = () => {
    if (!selectedNum) {
        setError("You have not selected any number");
        return;
    }

    randomNumGenrator(1,7);
    if (selectedNum === randomNumber) {
        setTotalScore((prev) => prev + selectedNum );
    }
    else{
        setTotalScore((prev)=> prev - 2);
    }    
    setSelectedNum("");
    setClickedNumber("")
  }

  return (
    <>
      <section className="h-full w-[250px] flex flex-col gap-4 items-center">
        <div className="cube h-[250px] w-[250px] relative">
          <img
            className="h-full w-full absolute cursor-pointer"
            src={`./images/dice_${randomNum}.png`}
            alt="dice no."
            onClick={() => {
              diceClick();
            }}
          />
        </div>
        <h2 className="font-medium">Click on Dice to roll</h2>
        <button className="w-[220px] h-[44px] bg-white text-black font-medium text-[1.1rem] rounded-md border-solid border-[1px] border-black" onClick={()=>{setTotalScore(0)}}>
          Reset Score
        </button>
        <button className="w-[220px] h-[44px] bg-black text-white font-medium text-[1.1rem] rounded-md border-solid border-[1px] border-black" onClick={()=>{setRulesOpen((prev)=>!prev)}}>
          {rulesOpen ? "Hide Rules" : "Show Rules"}
        </button>
        {rulesOpen && <Rules />}
      </section>
    </>
  );
};

export default Dice;
