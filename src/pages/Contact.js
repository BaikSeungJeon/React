import { useEffect, useState } from 'react'
import styled from 'styled-components'

function Contact() {

  let [alert, setAlert] = useState(true)
  
  useEffect(() => {
    setTimeout(()=>{
    }, 2000)
  })

  return (
    <div>
        <div className='container'>
          {
            alert == true
            ? <div className='alert alert-warning'>
                2초 후 사라지는 모달
              </div>
            : null
          }
          
        </div>
        <img src='img/contact.png'/>
    </div>
  )
}

export default Contact