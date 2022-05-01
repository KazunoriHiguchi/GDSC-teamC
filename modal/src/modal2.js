import './modal2.css';
import React, { useState } from 'react'


function ModalSecond({show, setShow, content}) {
  const closeModal = () => {
    setShow(false)
  }
  if (show) {
    return (
      <div className="overlay" onClick={closeModal}>
        <div className="content" onClick={(e)=>e.stopPropagation()}>
          <p>{content}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

function ModalApp2() {
  const [show, setShow] = useState(false)
  const contents = ''
  return (
    <div>
      <ModalSecond show={show} setShow={setShow} 
      content={contents}/>
    </div>
  )
}

export default ModalApp2