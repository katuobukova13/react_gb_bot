import { ADD_CHAT, REMOVE_CHAT, BLINK_CHAT } from "./chatsTypes";

export const addChat = (newName) => ({
  type: ADD_CHAT,
  payload: newName,
});

export const blinkChat = (chatId, unreadMessage) => ({
  type: BLINK_CHAT,
  payload: { chatId, unreadMessage },
});

export const removeChats = (chatId) => ({
  type: REMOVE_CHAT,
  payload: chatId,
});
