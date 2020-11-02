import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likeCount: 15 },
        { id: 2, message: "It is my first post", likeCount: 40 },
      ],
      newPostText: "New Post",
    },
    dialogsPage: {
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
      newMessageText: "",
    },
    sidebar: {},
  },
  _callSubsriber() {
    console.log("State was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubsriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubsriber(this._state);
  },
};

// export default store;

