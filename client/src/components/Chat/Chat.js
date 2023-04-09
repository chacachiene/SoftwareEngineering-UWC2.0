import React from 'react'
import Sidebar from './Components/Sidebar.js'
import MainChat from './Components/MainChat.js'
import "./Chat.scss";

function Chat() {
    return (
        <div className="container">
            <Sidebar />
            <MainChat />
        </div>

    )
}

export default Chat;