import React from 'react'

// eslint-disable-next-line react/prop-types
const TestimonialsCard = ({ image, quote, author, age, occupation }) => {
  return (
    <div className="border w-[300px] h-[300px] m-5 rounded-lg shadow-md shadow-white ">
      <div className='flex flex-row justify-evenly mt-10'>
        <div className=" bg-gray-500 rounded-full w-20 h-20">
          <img className="rounded-full w-full h-full" src={image} alt='person' />
        </div>
        <div className="">
          <h4 className='font-semibold'>{author}</h4>
          <h2 className='text-gray-300'>{occupation}</h2>
          <p className='text-gray-300'>{age}</p>
        </div>
      </div>
      <div className="text-center p-8">
        <p className="">{quote}</p>
      </div>
    </div>
  )
}

export default TestimonialsCard