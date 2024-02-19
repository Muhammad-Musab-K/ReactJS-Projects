import React from 'react'
import "./App.css"
import TenantsPro from './components/LandedPage'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import FourthPage from './components/FourthPage'
import FifthPage from './components/FifthPage'
import SixthPage from './components/SixthPage'
import LastPage from './components/LastPage'

function App() {
  return (
    <>
    <div className='mx-2 md:mx-4 lg:mx-6 xl:14 overflow-x-hidden'>
      <TenantsPro />
      <SecondPage />
       <ThirdPage />
      <FifthPage />
      <FourthPage />
      <SixthPage />
      </div>
      <div className='overflow-x-hidden'>
      <LastPage />
      </div>
    </>
  )
}

export default App
