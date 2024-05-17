import React from "react"
import { headingDatabase } from "./components/database"
import Header from "./components/Header"


function App() {

  return (
    <>
      {
        headingDatabase.map((heading,index) => <Header key ={index}  {...heading}/>)
      }
    </>
  )
}

export default App
