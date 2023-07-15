
import React from 'react'
import {FaLinkedin} from 'react-icons/fa';
import {BsUpload} from 'react-icons/bs';
import {BsFillCaretDownFill} from 'react-icons/bs';

const inputStyle = 'w-full h-[50px] border-none outline-none mt-2 p-2';
const btnBackground = {background: 'linear-gradient(180deg, #27EDD5 0%, #047E70 100%)'}
const divStyle = 'w-full flex justify-between h-[70px] rounded-[14px] m-2 p-2 items-center border-[1px] border-[#949090]';


export default function Sign2(props) {
  return (
    <div className=' w-full flex justify-around items-center '>
      <div className = 'basis-1/2 flex flex-col  justify-around'>
        <button className = 'ml-[20%] w-[210px] h-[45px] border-2 border-[#047E70] p-2 flex justify-around items-center '>Fetch it from <FaLinkedin size= {25}/></button>
        <span className = 'ml-[30%] my-6'>or</span>
        <div className = 'ml-[15%] flex justify-between items-center '>
          <div className='mr-2 h-[100px] w-[100px] rounded-full bg-[#D9D9D9]'>
            <img src="" />
          </div>
          
          <button className = 'mr-[50%] w-[210px] h-[45px] border-2 border-[#047E70] p-2 flex justify-around items-center '><BsUpload/> Upload Photo</button>
        </div>

        <form action="" className = 'w-full  relative w-full text-[20px]'>
                <div className = 'my-5 flex flex-col justify-between  '>
                    <label htmlFor="" className  =' '>
                        Job Title
                    </label>
                     <div className= {divStyle}>
                      <input type="text" name="" id="" placeholder='Eg: Graphic design, Product design' className = {inputStyle}/>
                        <BsFillCaretDownFill />
                    </div>
                </div>
                <div className = 'my-5 flex flex-col justify-between'>
                    <label htmlFor="">Company</label>
                    {/* <input type="email" name="" id="" className = {inputStyle} placeholder = 'Eg: Amazon,Meta'/> */}
                    <div className= {divStyle}>
                      <input type="text" name="" id="" placeholder='Eg: Amazon,Meta' className = {inputStyle}/>
                        <BsFillCaretDownFill />
                    </div>
                </div>

                <div className = 'my-5 flex flex-col justify-between '>
                    <label htmlFor="">Experience</label>
                    {/* <input type="password" name="" id="" className = {inputStyle}/> */}
                    <div className = 'flex items-center '>
                    <div className= {`${divStyle} w-[25%]`}>
                      <input type="text" name="" id="" placeholder='Y' className = {`${inputStyle}`}/>
                        <BsFillCaretDownFill />
                    </div>
                    <div className= {`${divStyle} w-[25%] `}>
                      <input type="text" name="" id="" placeholder='M' className = {inputStyle}/>
                      <BsFillCaretDownFill />
                    </div>
                    </div>
                </div>
                <div className = 'my-5 flex flex-col justify-between'>
                    <label htmlFor="">Bio</label>
                    <textarea cols={20} rows={10} className = {`border-[1px] border-[#949090] rounded-[14px] p-7 overflow-hidden leading-6 `} placeholder = 'Write Briefly about you'></textarea>
                </div>
            <button onClick = {() => props.handleClick()} style = {btnBackground} className='w-[170px] h-[70px] rounded-[23px] text-white text-[30px] float-right'>
                Next
            </button>
            </form>
      </div>
      <div style = {{background : 'url("assets/sign2.png")', 
                    backgroundPosition: 'center' , 
                    backgroundRepeat :'no-repeat' }}
                    className = 'bg-blue-300 h-[500px] w-[500px] '>

        </div>
    </div> 
  )
}

