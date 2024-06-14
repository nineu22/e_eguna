import React from "react";
import { useState, useRef } from 'react';


function ChatRoom(props) {

    
    const dummy = useRef();
  
  
    const messages = [
      {
        createdAt: 1,
        text: 'Hello!',
        uid: '123',
        photoURL: 'https://cdn4.iconfinder.com/data/icons/flat-pro-business-set-1/32/people-customer-unknown-512.png',
      },
      {
        createdAt: 2,
        text: 'Hi!',
        uid: '456',
        photoURL: 'https://cdn4.iconfinder.com/data/icons/flat-pro-business-set-1/32/people-customer-unknown-512.png',
      }
    ];
  
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      
      <main>
  
        {messages && messages.map(msg => <ChatMessage message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
      
      <form className='sendMessage' onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  
      </form>
    </>)
  }
  

  
  function ChatMessage(props) {

    const deleteMessage = async (props) => {

    }

    const currentUserUid = "";
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === currentUserUid ? 'sent' : 'received';
  
    return (
      <div className={`message ${messageClass}`}>
        <img alt="Profile" src={photoURL || 'https://cdn4.iconfinder.com/data/icons/flat-pro-business-set-1/32/people-customer-unknown-512.png'} />
        <p>{text}</p>       
          <button id="delete_message" onClick={() => deleteMessage(props)}>
            <span role="img" aria-label="delete">🗑️</span>
          </button>
      </div>
    )
  }

export default ChatRoom;