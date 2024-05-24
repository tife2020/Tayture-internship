import React from 'react'

function TimerChallenge({title,targetTime}) {
  return (
    <section className='challenge'>
    <h2>{title}</h2>
    <p className='challenge-time'>{targetTime} second{targetTime > 1? 's':''}</p>
    <button>Start Challenge</button>
    <p>Time is running... / Timer inactive</p>
    </section>
  )
}

export default TimerChallenge