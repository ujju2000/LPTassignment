import React from 'react'
import {MdAdd} from 'react-icons/md';
const backgroundStyle = {'background': 'linear-gradient(135deg, #83D8CE 0%, #C0E3FC 100%)'};
const boxShadow = {'box-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'};

export default function Doubts() {
  return (
    <div style = {backgroundStyle} className = 'py-10 '>
        <h2 className='my-10 text-[40px] text-center'>Let's clear your Doubts!</h2>

        <div>
            <div style = {boxShadow} className = 'px-4 m-2 text-[34px] w-[60%] mx-auto bg-white flex items-center justify-between p-4'>
                <h3>
                   What is the approval criteria to be a Mentor?  
                </h3>
                <span><MdAdd /> </span>
            </div>

            <div style = {boxShadow} className = 'px-4 m-2 text-[34px] w-[60%] mx-auto bg-white flex items-center justify-between p-4'>
                <h3>
                   What is the approval criteria to be a Mentor?  
                </h3>
                <span><MdAdd /> </span>
            </div>

            <div style = {boxShadow} className = 'px-4 m-2 text-[34px] w-[60%] mx-auto bg-white flex items-center justify-between p-4'>
                <h3>
                   How does mentor bridge works for mentor?  
                </h3>
                <span><MdAdd /> </span>
            </div>

            <div style = {boxShadow} className = 'px-4 m-2 text-[34px] w-[60%] mx-auto bg-white flex items-center justify-between p-4'>
                <h3>
                   Can i charge fees of my choice ?
                </h3>
                <span><MdAdd /> </span>
            </div>
            <div style = {boxShadow} className = 'px-4 m-2 text-[34px] w-[60%] mx-auto bg-white flex items-center justify-between p-4'>
                <h3>
                   Can i get guidance of how to be a mentor   
                </h3>
                <span><MdAdd /> </span>
            </div>
        </div>
    </div>
  )
}
