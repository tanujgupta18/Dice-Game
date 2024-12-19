import React from 'react'

const TotalScore = ({score}) => {
  return (  
    <main>
      <div className='max-w-52 text-center'>
        <h1 className='text-7xl font-bold'>{score}</h1>
        <p className='text-xl font-medium'>Total Score</p>
      </div>
    </main>
  )
}


export default TotalScore