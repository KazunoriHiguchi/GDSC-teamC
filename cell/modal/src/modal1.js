import './modal1.css'
import React, { useState } from 'react'


      function ModalFirst({
        show,
        setShow,
        title,
        setTitle,
        teacher,
        setTeacher,
        time,
        setTime,
        room,
        setRoom,
        memo,
        setMemo,
      }) {
        const closeModal = () => {
          setShow(false) 
        }
       
       
       
        
        
        // 以下記入欄
        const titleChange = (event) => {
          setTitle(event.target.value)
        }
        const text1 = (
          <div class="inputContainer">
            <div>
              <label for="title">授業名</label>
              <input type="text" onChange={titleChange} className="inputItem"></input>
            </div>
            <p>{title}</p>
          </div>
        )

        const teacherChange = (event) => {
          setTeacher(event.target.value)
        }
        const text2 = (
          <div class="inputContainer">
            <div>
              <label for="teacher">先生名</label>
              <input
                type="text"
                onChange={teacherChange}
                className="inputItem"
              ></input>
            </div>
            <p>{teacher}</p>
          </div>
        )

        const timeChange = (event) => {
          setTime(event.target.value)
        }
        const text3 = (
          <div class="inputContainer">
            <div>
              <label for="time">授業形式</label>
              <input type="text" onChange={timeChange} className="inputItem"></input>
            </div>
            <p>{time}</p>
          </div>
        )

        const roomChange = (event) => {
          setRoom(event.target.value)
        }
        const text4 = (
          <div class="inputContainer">
            <div>
              <label for="room">教室名</label>
              <input type="text" onChange={roomChange} className="inputItem"></input>
            </div>
            <p>{room}</p>
          </div>
        )

        const memoChange = (event) => {
          setMemo(event.target.value)
        }
        const text5 = (
          <div class="inputContainer">
            <div>
              <label for="memo">メモ</label>
              <input type="text" onChange={memoChange} className="inputItem"></input>
            </div>
            <p>{memo}</p>
          </div>
        )

        // ここまで記入欄
          

        if (show) {
          return (
            <div className="overlay" onClick={closeModal}>
              <div className="content" onClick={(e) => e.stopPropagation()}>
                <p>{text3}</p>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text4}</p>
                <p>{text5}</p>
                
                
                <button onClick={closeModal} class="Close">Close</button>
              </div>
            </div>
          )
        } else {
          return null
        }
      }
      

      function ModalApp1() {
        const [show, setShow] = useState(false)
        const openModal = () => {
          setShow(true)
        }
        const [title, setTitle] = useState('')
        const [teacher, setTeacher] = useState('')
        const [time, setTime] = useState('')
        const [room, setRoom] = useState('')
        const [memo, setMemo] = useState('')
        return (
          <>
            <button onClick={openModal} class="open" id="a">{[time, setTime]}<br/>{[title, setTitle]}<br/>{[teacher, setTeacher]}<br/>{[room, setRoom]}<br/>{[memo,setMemo]}</button>
            

            <ModalFirst
              show={show}
              setShow={setShow}
              title={title}
              setTitle={setTitle}
              teacher={teacher}
              setTeacher={setTeacher}
              time={time}
              setTime={setTime}
              room={room}
              setRoom={setRoom}
              memo={memo}
              setMemo={setMemo}
            />
          </>
        )
      }

export default ModalApp1;
