import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import {getChats, chooseChat} from "../../../actions/chatAction"

import cum from '../../../constants/images/cum.jpg';
import { Typography, Stack } from "@mui/material";

const Chats = () => {
    const activeChat = "1";
    const dispatch = useDispatch();
    const { chats } = useSelector(state => state.chat);
    console.log(chats)
    useEffect(() => {
        dispatch(getChats());
    }, []);

    const styles = {
        activeChat: {
            backgroundColor: "#f0f0f0",
        },
    };
    return (
        <div className="chats">
            {chats?.map((chat, index) => (
                <div
                    className={`userChat ${activeChat === chat._id ? "activeChat" : ""}`}
                    key={chat._id}
                    onClick={() => dispatch(chooseChat(chat))}
                    style={
                        activeChat === chat._id
                            ? { ...styles.activeChat, borderBottom: "1px solid white" }
                            : { borderBottom: "1px solid white" }
                    }
                >
                    <img src={chat.groupAdmin.avatar ? chat.groupAdmin.avatar : cum} alt="" />
                    <Stack >
                        <Typography color="#cef3fe" fontSize={20}>{chat.name}</Typography>
                        <Typography color="text.secondary">{chat.latestMessage?.content}</Typography>
                    </Stack>
                </div>
            ))}
        </div>
    );
};

export default Chats;