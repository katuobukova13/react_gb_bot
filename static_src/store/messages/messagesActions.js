import { ADD_MESSAGE } from "./messagesTypes";
import { blinkChat } from "../chats/chatsActions";
import { AUTHORS } from "../../utils/constants";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: { chatId, message },
});

export const messageBotMiddleware = (chatId, message) => async (
  dispatch,
  getState
) => {
  dispatch(addMessage(chatId, message));
  try {
    if (message.author !== AUTHORS.BOT) {
      setTimeout(() => {
        dispatch(blinkChat(chatId, true));
      }, 200);
      const res = await fetch(
        `        https://www.botlibre.com/rest/api/form-chat?&application=2018377623918143740&instance=165&message="${message.text}"`
      );
      if (!res.ok) {
        throw new Error("Проверьте URL");
      }
      const response = await res.text();
      const answer = response.substring(
        response.lastIndexOf("<message>") + 9,
        response.lastIndexOf("</message>")
      );
      dispatch(
        addMessage(chatId, {
          text: answer,
          author: AUTHORS.BOT,
          id: `${chatId}-${getState().messages.messages[chatId]?.length + 1}`,
        })
      );
      setTimeout(() => {
        dispatch(blinkChat(chatId, false));
      }, 2500);
    }
  } catch (error) {
    alert(`Возникла проблема с вашим fetch запросом: ${error.message}`);
  }
};
