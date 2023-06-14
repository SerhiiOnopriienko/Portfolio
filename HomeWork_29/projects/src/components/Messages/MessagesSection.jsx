import React, { useState } from "react";
import messagesArray from "../../data/messages.json";
import MessageBoxes from "./MessageBoxes";

export default function MessagesSection(){
    let [messages, setMessages] = useState(messagesArray);
    let [messageClass, setmessageClass] = useState('messages-section');
  function showMessages(){
    setmessageClass('messages-section show');
  }
  function closeMessages(){
    setmessageClass('messages-section')
  }
    return (
        <>
        <button onClick={showMessages} className="messages-btn">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-message-circle"
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
            />
          </svg>
        </button>
    <div className={messageClass}>
        <button onClick={closeMessages} className="messages-close">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x-circle"
              >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
        </button>
        <div className="projects-section-header">
            <p>Client Messages</p>
        </div>
        <div className="messages">
            <MessageBoxes messages={messages}/>
        </div>        
    </div>
        </>
        
    )
}