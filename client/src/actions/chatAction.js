import * as api from '../api/index.js';

export const getChats = () => async (dispatch) => {
    try {
        const { data } = await api.getChats();

        dispatch({ type: "GET_CHATS", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const chooseChat = (chat) => async (dispatch) => {
    try {
        const { data } = await api.getMessages(id);

        dispatch({ type: "CHOOSE_CHAT", payload: { chat: chat, messages: data } });
    } catch (error) {
        console.log(error);
    }
}

export const sendMessage = (chat, content) => async (dispatch) => {
    try {
        const { data } = await api.sendMessage(chat._id, content);

        dispatch({ type: 'SEND_MESSAGE', payload: {chat: {...chat, latestMessage: json.result}, message: data} })
    } catch (error) {
        console.log(error);
    }
};

export const createChat = (form) => async (dispatch) => {
    try {
        const { data } = await api.createChat(form);

        dispatch({ type: "CREATE_CHAT", payload: data });
    } catch (error) {
        console.log(error);
    }
};


export const updateChat = (id, form) => async (dispatch) => {
    try {
        const { data } = await api.updateChat(id, form);

        dispatch({ type: "UPDATE_CHAT", payload: data });
    } catch (error) {
        console.log(error);
    }
};


export const deleteChat = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteChat(id);

        dispatch({ type: "DELETE_CHAT", payload: data });
    } catch (error) {
        console.log(error);
    }
};
