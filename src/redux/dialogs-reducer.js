const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "John" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Varvara" },
    { id: 4, name: "Vova" },
    { id: 5, name: "Sonya" },
    { id: 6, name: "Slava" },
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageText) => {
  return { type: SEND_MESSAGE, newMessageText };
};

export default dialogsReducer;
