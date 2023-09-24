import React from 'react'



const Card = (props) => {
  
    let review = props.review;
    return (
      <div className='flex flex-col md:relative'>
          <div  className='absolute top-[-7rem] z-[10] m-auto'>
              <img 
               className  ="aspect-square rounded-full w-[140px] h-[140px] "   src={review.image} alt="" />
          </div>
          <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[12px]'></div>
          <div className='text-center mt-7'>
              <p  className='font-bold text-2xl capitalize '>{review.name}</p>
          </div>
          <div className='text-center mt-3'>
              <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
          </div>
          {/* <div className='text-violet-400 mx-auto text-center mt-5'>
              <FaQuoteLeft></FaQuoteLeft>
          </div> */}
          <div className='text-center mt-4'>
              {review.text}
          </div>
          {/* <div className='text-violet-400 mx-auto text-center mt-5'>
              <FaQuoteRight></FaQuoteRight>
          </div> */}
     </div>
    )
}

export default Card