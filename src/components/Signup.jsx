
import React, {useState} from 'react'
import Sign1 from './multiFormComponents/Sign1';
import Sign2 from './multiFormComponents/Sign2';
import Sign3 from './multiFormComponents/Sign3';

const stateDone = 'h-[42px] w-[42px] bg-[#D9D9D9] rounded-full flex items-center justify-center text-[20px]';
const stateActive = 'h-[42px] w-[42px] bg-[#047E70] text-white rounded-full flex items-center justify-center text-[20px]';


export default function Signup() {
    const [currentPage, setCurrentPage] = useState(0);
    const handleClick = () => {
        
        setCurrentPage((currentPage +1) % 3);
    }

  return (
    <div className = 'w-full p-[30px]'>
        <div className = 'w-[45%] flex flex-col items-center justify-between'>
         <h3 className = 'text-[30px] my-8'>Great choice to help people!</h3>
         <p className = 'text-[25px]'>Tell us few details about you & your expertise...</p>
            <div class = 'states my-10 flex items-center '>
               <CurrentPageNum num = '1' currentPage = {currentPage} />
               <hr className='h-[2px] w-[200px] bg-black'/>
               <CurrentPageNum num = '2' currentPage = {currentPage}/>
               <hr className='h-[2px] w-[200px] bg-black'/>
               <CurrentPageNum num = '3' currentPage = {currentPage}/>
            </div>
        </div>
        <div className = 'w-full'>
            
            {currentPage === 0 && <Sign1 handleClick = {handleClick} />}
            {currentPage === 1 && <Sign2 handleClick = {handleClick} />}
            {currentPage === 2 && <Sign3 handleClick = {handleClick} />}
        
        </div>
    </div>
  )
}


function CurrentPageNum (props){
    return (
    <div className= {Number(props.num) -1 == props.currentPage ? stateActive : stateDone} >{props.num}</div>
    )
} 