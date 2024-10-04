import React from 'react'

const Start = ({open}) => {
  return (
    <>
        <main className='h-screen w-full flex justify-center items-center'>
            <div className="container w-[1177px] h-[522px] flex">
                <div className="imgBox h-[522px] w-[649px] relative">
                    <img className='h-full w-full absolute' src="./images/dices.png" alt="dices" />
                </div>
                <div className="tagBox w-[528px] h-[522px] flex items-center">
                    <div className="tag h-[188px] w-full flex flex-col items-end justify-center">
                        <h1 className='font-sans font-bold text-[3.7rem] text-center'>DICE GAME</h1>
                        <button className='w-[140px] py-[10px] px-[18px] bg-black text-white hover:bg-white hover:text-black border-solid border-[1px] border-black rounded-md' onClick={open}>Play Now</button>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Start