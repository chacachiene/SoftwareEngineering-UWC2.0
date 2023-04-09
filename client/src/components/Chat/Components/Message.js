import React, { useEffect, useRef } from "react";

import cum from "../../../constants/images/cum.jpg";

const Message = ({ message }) => {
    const user = JSON.parse(localStorage.getItem('user'))

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    // Static data instead of fetching from a server
    const isUser = message.sender._id === user._id
    return (
        <div
            ref={ref}
            className={`message ${isUser && "owner"}`}
        >
            <div className="messageInfo">
                <img src={message.sender.avatar ? message.sender.avatar : cum} alt="" />
            </div>
            <div className="messageContent">
                <p>{message.content}</p>
                {message.img && <img src={message.img} alt="" />}
            </div>
        </div>
    );
};

export default Message;
