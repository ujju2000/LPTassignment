
import React from 'react'
import {FcGoogle} from 'react-icons/fc';
import {FaLinkedin} from 'react-icons/fa';

const btnStyle = 'flex items-center justify-around border-[#949090] border-2 rounded-[14px] py-[21px] px-[17px] w-[275px] h-[70px]';
const inputStyle = 'w-full h-[70px] rounded-[14px] border-[1px] outline-none border-[#949090] mt-2 p-4';

const btnBackground = {background: 'linear-gradient(180deg, #27EDD5 0%, #047E70 100%)'}

export default function Sign1(props) {  
  return (
    <div className='flex justify-around items-center'>
        <div className = 'basis-1/2 flex justify-start flex-col'>      
            <div className="btns flex items-center justify-betwen">
                <button className = {btnStyle}> 
                    <FcGoogle/>Continue with Google
                </button>
                <span className = 'mx-10 text-[17px]'>or</span>
                <button className = {btnStyle}>
                    <FaLinkedin size = {30} /> Continue with Linkedin
                </button>
            </div>

            <form action="" className = 'relative w-full text-[20px]'>
                <div className = 'my-5 flex flex-col justify-between  '>

                    <label htmlFor="" className  =' '>
                        Full Name
                    </label>
                    <input 
                    type="text" 
                    name = "name"
                    className = {inputStyle}
                    />
                </div>
                <div className = 'my-5 flex flex-col justify-between  '>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" className = {inputStyle}/>
                </div>

                <div className = 'my-5 flex flex-col justify-between '>
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" className = {inputStyle}/>
                </div>
            <button onClick = {() => props.handleClick()} style = {btnBackground} className='w-[170px] h-[70px] rounded-[23px] text-white text-[30px] float-right'>
                Next
            </button>
            </form>

        </div>
        <div style = {{background : 'url("assets/sign1.png")', 
                    backgroundPosition: 'center' , 
                    backgroundRepeat :'no-repeat' }}
                    className = 'bg-blue-300 h-[500px] w-[500px] '>

        </div>
    </div>
  )
}



