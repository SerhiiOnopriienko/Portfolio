import React from 'react';
import MessageCard from './MessageCard';

export default function MessageBoxes({ messages }){
    return messages.map(message => {
        return <MessageCard message={message}/>
    }) 
}