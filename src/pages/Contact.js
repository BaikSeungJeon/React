import { useEffect, useState } from 'react'
import styled from 'styled-components'

let Modal = styled.div`
  background : #000;
  color: #fff;
  margin: 0 auto;
  text-align : center;
  width: 500px;
  height: 300px;
`

function Contact() {

  let [alert, setAlert] = useState(true)
  
  useEffect(() => {
    setTimeout(()=>{setAlert(false)}, 2000)
  })

  return (
    <div>
        {
          alert == true
          ? <Modal>
              2초 후 사라지는 모달
            </Modal>
          : null
        }
        <img src='img/contact.png' style={{width: '40%'}}/>
    </div>
  )
}

export default Contact