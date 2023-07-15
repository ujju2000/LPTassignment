import React from 'react'
import {BsFillCaretDownFill} from 'react-icons/bs';
import {GrFormAdd} from 'react-icons/gr';
const btnBackground = {background: 'linear-gradient(180deg, #27EDD5 0%, #047E70 100%)'}
const inputStyle = 'w-[80%] h-[20px] rounded-[14px]  border-none outline-none mt-2 p-4';
const divStyle = 'w-full flex justify-between h-[70px] rounded-[14px] m-2 p-2 items-center border-[1px] border-[#949090]';

export default function Sign3(props) {
  return (
    <div className = 'w-full flex items-center justify-around'>
      <form action="" className = 'basis-1/2'>
        <label htmlFor="">Primary Expertise</label>
        <div className = {divStyle}>
          <input type="text" name="" id="" placeholder = 'Eg: Design, Product design' className = {inputStyle}/>
          <BsFillCaretDownFill />
        </div>
        <div className = {`w-full flex items-center justify-center h-[50px] rounded-[14px] m-2 p-2 items-center border-[1px] border-[#949090]`}>
            <GrFormAdd size = {30} className = 'mr-[10px]'/>
            <span>Add Secondary Expertise</span>
        </div>
        <div>
          <label htmlFor="" className = 'm-2 '>
            Relevant disciplines
          </label>
          <div className= {divStyle}>
            <input type="text" name="" id="" placeholder='Eg: Graphic design, Product design' className = {inputStyle}/>
            <BsFillCaretDownFill />
          </div>
        </div>

        <div>
          <label htmlFor="">
            Tools you have experienced with 
          </label>
          <div className = {divStyle}>
            <input type="text" name="" id="" placeholder='Eg: Figma , React, Postman' className = {inputStyle}/>
            <BsFillCaretDownFill />
          </div>
        </div>
        <div>
          <label htmlFor="">
            Skills you have experienced in
          </label>
          <div className = {divStyle}>
            <input type="text" name="" id="" placeholder='Eg: Leadership , Communication, Empathy' className = {inputStyle}/>
            <BsFillCaretDownFill />
          </div>
        </div>
        <div>
          <label htmlFor="">
            You Target Mentees
          </label>
          <div className = {divStyle}>
            <input type="text" name="" id="" placeholder='Eg: No Preferences, Fresher' className = {inputStyle}/>
            <BsFillCaretDownFill />
          </div>
        </div>

        <button onClick = {() => props.handleClick()} style = {btnBackground} className='w-[170px] h-[70px] rounded-[23px] text-white text-[30px] ml-[40%] my-[20px]'>
                Compelete
            </button>
      </form>

      <div style = {{background : 'url("assets/sign3.png")', 
                    backgroundPosition: 'center' , 
                    backgroundRepeat :'no-repeat' }}
                    className = 'bg-blue-300 h-[500px] w-[500px] '>

        </div>
    </div>
  )
}
