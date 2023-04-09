import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


import { chooseChat, sendMessage, deleteChat } from "../../../actions/chatAction"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import ChatForm from './ChatForm';
import Messages from "./Messages";
import Input from "./Input";

import { Typography, Stack, Button, ButtonGroup } from "@mui/material";

import io from "socket.io-client";
let socket
const MainChat = () => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))
    const { currChat } = useSelector(state => state.chat)

    useEffect(() => {
        socket = io('http://localhost:5000')
        socket.emit("setup", user);
        socket.on('connected', () => {
            console.log('socket connected')
        })
    }, [user]);

    useEffect(() => {
        socket?.on("message received", () => {
            dispatch(chooseChat(currChat));
        })
    })

    const handleSend = (content) => {
        dispatch(sendMessage(currChat, content))
        socket.emit("new message", currChat);
    }

    return (
        <div className="chat">
            <div className="chatInfo">
                <Stack>
                    <Typography variant="h5">{currChat?.name}</Typography>
                    <Typography variant="subtitle1">{currChat?.admin?.available ? "Online" : "Offline"}</Typography>
                </Stack>
                {currChat && <>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => setOpen(true)}><BorderColorIcon /></Button>
                        <Button color='error' onClick={() => dispatch(deleteChat(currChat._id))}><DeleteOutlineIcon /></Button>
                    </ButtonGroup>
                    <ChatForm open={open} onClose={() => setOpen(false)} currChat={currChat}></ChatForm>
                </>}
            </div>
            <Messages />
            <Input handleSend={handleSend} />
        </div>
    );
};

export default MainChat;