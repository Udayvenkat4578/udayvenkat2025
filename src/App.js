import React from 'react'
import Main from './Gcomponents/Main'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Skills from './components/Skills'
import Work from './components/Work'
import Follow from './components/Follow'
import Error from './components/Error'
import Smallcontact from './components/Smallcontact'
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
        <HelmetProvider>
              <div>

      <div className='bg-[#142444] inset-0 '>
        <BrowserRouter>
<div className='z-10 '>
    </div>

        <Routes className='' >
          <Route path='/' element={<Main/>}/>
          <Route path="/follow" element={<Follow/>} />

        <Route path="skills" element={<Skills />}/>
        <Route path='/smallcontact' element={<Smallcontact/>}/>



          <Route path='/work' element={<Work/>}/>
          <Route path="*" element={<Error/>}/>

        </Routes>
        </BrowserRouter>
      </div>
    </div>
    </HelmetProvider>
  )
}

export default App