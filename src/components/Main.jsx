
import React from 'react'
const backgroundStyle = {'background': 'linear-gradient(180deg, #C0E3FC 0%, rgba(123, 226, 195, 0.80) 100%)'}
const btnStyle = 'w-[380px] h-[97px] rounded-[34px] bg-[#358279] text-[30px] text-white'
export default function Main() {
  return (
    <div style = {backgroundStyle} className = 'w-full flex p-10 justify-around'>
        <div className='flex flex-col items-center '>
            <img src="assets/blue rocket.png" alt="" className = 'w-[70px] h-[100px]'/>
            <h1 className = 'text-[70px]'>Grow Fast Together </h1>
            <h3 className = 'text-[45px] text-center '>Find the mentor or lead the path for someone It's a win win!</h3>
            {/* <h3>It's a win win!</h3> */}

            <div className = 'w-full mt-10 flex justify-between items-center '>
                <button  className = {btnStyle}>
                    Find a mentor
                </button>
                <button className = {btnStyle}>
                    Become a mentor
                </button>
            </div>
        </div>
        <div>
            <img src="assets/Hero.png" alt="" />
        </div>
    </div>
  )
}
