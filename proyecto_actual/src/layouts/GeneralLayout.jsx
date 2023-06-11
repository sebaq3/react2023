import React from 'react'
import Navbar from '../components/Navbar/Navbar'


const GeneralLayout = ({children}) => {
  return (
    <div><Navbar>
        </Navbar>
        
        {children}
    </div>
  )
}

export default GeneralLayout