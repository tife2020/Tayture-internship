import React from 'react'

function RightSideCont({children}) {
  return (
    <div className ='flex flex-col justify-center items-center w-3/4 h-screen gap-5 pl-10 pr-60 '>
        {children}
    </div>
  )
}

export default RightSideCont