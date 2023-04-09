export default (state = { chats: [], messages: [], currChat: null }, action) => {
    switch (action.type) {
        case 'GET_CHATS':
            return { ...state, chats: action.payload.result }
        case 'CHOOSE_CHAT':
            return { ...state, currChat: action.payload.chat, messages: action.payload.messages.result }
        case 'CREATE_CHAT':
            return { ...state, chats: [...state.chats, action.payload.result] }
        case 'SEND_MESSAGE':

            return {
                currChat: action.payload.chat,
                chats: state.chats.map(chat => chat._id === action.payload.chat._id ? action.payload.chat : chat),
                messages: [...state.messages, action.payload.message.result]
            }
        case 'CREATE_CHAT':
            return {
                ...state,
                chats: [...state.chats, action.payload.result]
            }
        case 'UPDATE_CHAT':
            return {
                ...state,
                currChat: action.payload.result,
                chats: state.chats.map((chat) => chat._id === action.payload.result._id ? action.payload.result : chat),
            }
        case 'DELETE_CHAT':
            
            return {
                currChat: null,
                chats: state.chats.filter((chat) => chat._id !== action.payload.result._id),
                messages: []
            }
        default:
            return state
    }
}