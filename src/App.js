
import React from 'react'
import Login from './components/Login'
import SampleLanding from './components/SampleLanding'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sample' element={<SampleLanding/>}/>
      </Routes>
    </div>
  )
}

export default App