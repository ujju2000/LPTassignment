
import React from 'react'
const imgStyle = 'w-[399px] h-[90px] rounded-md'
export default function Expertise() {
  return (
    <div className = 'w-full bg-[#C0E3FC] flex flex-col px-10 py-4 items-center '>
        <h3 className = 'text-[40px] '>Find the expertise from</h3>
        <div className = 'my-10 w-full flex items-center justify-between'>
            <img src="assets/amazon.png" alt="" className  = {imgStyle}/>
            <img src="assets/spotify.png" alt="" className  = {imgStyle}/>
            <img src="assets/meta.png" alt="" className  = {imgStyle}/>
        </div>
        <h3 className = 'text-[40px] '>Make your career growth in</h3>
        <div className = 'my-[40px] w-full flex items-center justify-between'>
            <div className = 'relative '>
                <img src="assets/uiux.png" alt="" className = 'w-[260px] h-[145px] rounded-[16px]'/>
                <span className = 'text-white text-[25px] absolute top-1/4 left-1/4'>UX/UI Design</span>
            </div>
            <div className = 'relative'>
                <img src="assets/dataScience.png" alt="" className = 'w-[260px] h-[145px] rounded-[16px]'/>
                <span className = 'text-white text-[25px] absolute top-1/4 left-1/4'>Data Science</span>
            </div> 
            <div className = 'relative'>
                <img src="assets/marketing.png" alt="" className = 'w-[260px] h-[145px] rounded-[16px]'/>
                <span className = 'text-white text-[25px] absolute top-1/4 left-1/4'>Marketing</span>
            </div> 
            <div className = 'relative'>
                <img src="assets/prdmanage.png" alt="" className = 'w-[260px] h-[145px] rounded-[16px]'/>
                <span className = 'text-white text-[25px] absolute top-1/4 left-1/4'>Product Management</span>
            </div>
            <div className = 'relative'>
                <img src="assets/teaching.png" alt="" className = 'w-[260px] h-[145px] rounded-[16px]'/>
                <span className = 'text-white text-[25px] absolute top-1/4 left-1/4'>Teaching</span>
            </div>
            
        </div>
    </div>
  )
}
