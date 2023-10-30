import React, { useState } from 'react'
import './Nav.css'
import { useEffect } from 'react'
function Nav() {
    const [show,setshow]=useState()
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
          if(window.scrollY>600){
            setshow(true)
          }
          else{
            setshow(false)
          }
        })
    })
  return (
    <div className={`${show && `nav-bg`} navbar`}>
        <img src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" width={'150px'}/>
    </div>
  )
}

export default Nav