import { ADD_CHAT } from "./chatsTypes";
import { BLINK_CHAT } from "./chatsTypes";
import { REMOVE_CHAT } from "./chatsTypes";

const initialChats = {
  chats: [
    {
      id: "id1",
      name: "Rachel",
      unreadMessage: false,
    },
    {
      id: "id2",
      name: "Eve",
      unreadMessage: false,
    },
    {
      id: "id3",
      name: "Max",
      unreadMessage: false,
    },
    {
      id: "id4",
      name: "Sam",
      unreadMessage: false,
    },
  ],
};

const chatsReducer = (state = initialChats, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        chats: [
          ...state.chats,
          {
            name: action.payload,
            /*             id: `id${state.chats.length + 1}`, */
            id: `id${Date.now()}`,
            unreadMessage: false,
          },
        ],
      };
    }
    case BLINK_CHAT: {
      return {
        ...state,
        chats: state.chats.map((chat) =>
          chat.id === action.payload.chatId
            ? { ...chat, unreadMessage: !chat.unreadMessage }
            : chat
        ),
      };
    }
    case REMOVE_CHAT: {
      return {
        ...state,
        chats: state.chats.filter((chat) => chat.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default chatsReducer;
