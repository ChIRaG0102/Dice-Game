import { useState } from 'react'
import Dice from './Dice'

const GamePage = () => {

    const [selectedNum, setSelectedNum] = useState();
    const [error, setError] = useState();
    const [totalScore, setTotalScore] = useState(0);
    const [clickedNumber, setClickedNumber] = useState();

    const selectNumber = (value) => {
        setSelectedNum(value);
        setClickedNumber(value);
        setError("");
    }

  return (
    <>
        <main className='min-h-screen w-full px-12 pt-10'>
            <div className="upper h-[131px] w-full flex justify-between">
                <div className="left h-full w-[135px] flex flex-col justify-end items-center">
                    <h1 className=' font-semibold text-[4.8rem]'>{totalScore}</h1>
                    <h2 className='font-medium text-[1.2rem]'>Total Score</h2>
                </div>
                <div className="right h-full w-[552px] flex flex-col justify-between items-end">
                    <h2 className='font-medium text-red-700'>{error}</h2>
                    <div className="numUpper h-[72px] w-[552px] flex justify-between">
                        {[1,2,3,4,5,6].map((id,value)=>(
                            <div key={id} className={`numBox h-[72px] w-[72px] flex justify-center items-center font-semibold text-[2rem] border-solid border-[1px] border-black 
                            ${clickedNumber === value + 1 ? "bg-black text-white": ""} cursor-pointer rounded-sm`} onClick={()=>{selectNumber(value + 1)}}>{value + 1}</div>
                        ))}
                    </div>
                    <h2 className='font-medium text-[1.2rem]'>Select Number</h2>
                </div>
            </div>
            <div className="lower w-full min-h-[420px] flex flex-col justify-center items-center">
                <Dice setSelectedNum={setSelectedNum} selectedNum={selectedNum} setError={setError} setTotalScore={setTotalScore} setClickedNumber={setClickedNumber} />
            </div>
        </main>
    </>
  )
}

export default GamePage