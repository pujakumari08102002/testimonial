import React, { useState } from 'react'
import Card from './Card';
import {FaQuoteRight,FaQuoteLeft} from 'react-icons/fa'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
const Testimonial = (props) => {
    let reviews = props.reviews;
    const[index,setIndex] = useState(0);

    function leftShiftHandler()
    {
        if(index-1 < 0)
        {
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler()
    {
        if(index+1 >=reviews.length)
        {
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseShiftHandler()
    {
        let randomIndex= Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }
    return (
      <div className='w-[85vw] md:w-[700px] bg-gray-100
      
       flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200
       hover:shadow-xl'>
      <Card review = {reviews[index]}></Card>
      <div className='flex text-3xl mt-5 gap-3 font-bold text-violet-400 justify-center'>
              <button onClick={leftShiftHandler}
              className='cursor-pointer  hover:text-violet-500'>
                  <FiChevronLeft></FiChevronLeft>
              </button>
              <button onClick={rightShiftHandler}
              className='cursor-pointer  hover:text-violet-500'>
                  <FiChevronRight></FiChevronRight>
              </button>
          </div>
          <div >
             <button  onClick={surpriseShiftHandler}
             className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
             cursor-pointer px-5 py-2 rounded-md font-bold mt-3 text-white text-lg'>Surprise me</button> 
          </div>
      </div>
    )
}

export default Testimonial