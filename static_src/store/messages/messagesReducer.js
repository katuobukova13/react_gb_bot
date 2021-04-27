import { ADD_MESSAGE } from "./messagesTypes";
import { AUTHORS } from "../../utils/constants";

const initialMessages = {
  messages: {
    id1: [{ text: "Привет", author: AUTHORS.ME, id: "id1-1" }],
    id2: [{ text: "Хаха", author: AUTHORS.ME, id: "id2-1" }],
    id3: [{ text: "Уиии", author: AUTHORS.ME, id: "id3-1" }],
    id4: [{ text: "ДА", author: AUTHORS.ME, id: "id4-1" }],
  },
};

const messagesReducer = (state = initialMessages, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: [
            ...(state.messages[action.payload.chatId] || []),
            action.payload.message,
          ],
        },
      };
    }
    default:
      return state;
  }
};

export default messagesReducer;
