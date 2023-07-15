import React from 'react'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa';
const background = {background : 'url("assets/messangericon.png")',
                    backgroundRepeat : "no-repeat", 
                    backgroundPosition : "center",
                  backgroundSize : 'cover'};

export default function ClientReviews() {
  return (
    <div className = 'w-full flex flex-col p-10 '>
        <h1 className = 'text-[40px] text-center '>What our clients says about us</h1>
        <div className = 'flex items-center justify-between'>
            <FaChevronLeft className = 'w-[30px] 'size = {30}/>
            <div className = ' w-[90%] flex items-center justify-between'>
                <div style = {background} className = 'w-[400px] h-[300px] relative'>
                  
                  <p className = 'font-normal text-white text-[15px] w-[250px] absolute top-[16%] left-[30%] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas est, ad incidunt praesentium amet voluptatem quam hic quia autem deleniti!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae.</p>
                  <span className = 'absolute text-white bottom-10 right-[30%] text-[22px]'>Alisa</span>
                  <img src="assets/user1.png" alt=""  className = ' absolute bottom-0 right-[1%] h-[108px] w-[109px] object-contain'/>

                <h4 className = 'absolute bottom-[-5%] left-[20%] text-[#3D7196] text-[22px] capitalize'>Founder,XOXO</h4>
                </div>

                <div style = {background} className = ' w-[400px] h-[300px] relative'>
                  
                  <p className = 'font-normal text-white text-[15px] w-[250px] absolute top-[16%] left-[30%] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas est, ad incidunt praesentium amet voluptatem quam hic quia autem deleniti!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae.</p>
                  <span className = 'absolute text-white bottom-10 right-[30%] text-[22px]'>Micheal</span>
                  <img src="assets/user2.png" alt=""  className = ' absolute bottom-0 right-[1%] h-[108px] w-[109px] object-contain'/>

                <h4 className = 'absolute bottom-[-5%] left-[20%] text-[#3D7196] text-[22px] capitalize'>Manager,QWERTY</h4>
                </div>

                <div style = {background} className = ' w-[400px] h-[300px] relative'>
                  
                  <p className = 'font-normal text-white text-[15px] w-[250px] absolute top-[16%] left-[30%] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas est, ad incidunt praesentium amet voluptatem quam hic quia autem deleniti!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quae.</p>
                  <span className = 'absolute text-white bottom-10 right-[30%] text-[22px]'>Lee Cooper</span>
                  <img src="assets/user3.png" alt=""  className = ' absolute bottom-0 right-[1%] h-[108px] w-[109px] object-contain'/>

                <h4 className = 'absolute bottom-[-5%] left-[20%] text-[#3D7196] text-[22px] capitalize'>HR Director,Meta</h4>
                </div>
            </div>
            <FaChevronRight size = {30}/>
        </div>
    </div>
  )
}
