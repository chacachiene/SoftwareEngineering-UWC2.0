import React from "react";
import { useSelector } from "react-redux";

import Message from "./Message";


const Messages = () => {
    const { messages } = useSelector(state => state.chat);

    return (
        <div className="messages">
            {messages?.map((m) => (
                <Message message={m} key={m._id} />
            ))}
        </div>
    );
};

export default Messages;
