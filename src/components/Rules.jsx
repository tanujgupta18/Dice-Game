import React from 'react'

const Rules = () => {
  return (
    <div className='w-[790px] h-[180px] mx-auto mt-10 p-5 bg-pink-50'>
      <h2 className='text-2xl font-extrabold'>How to play dice game</h2>
      <div className=''>
        <p className='mt-5 font-medium'>Select any number</p>
        <p className='font-medium'>Click on dice image</p>
        <p className='font-medium'>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p className='font-medium'>if you get wrong guess then 2 point will be deducted.</p>
      </div>
    </div>
  )
}

export default Rules