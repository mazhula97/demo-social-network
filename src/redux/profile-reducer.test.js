const { default: profileReducer, addPost, deletePost } = require("./profile-reducer");

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 15 },
    { id: 2, message: "It is my first post", likeCount: 40 },
  ],
};

test("length should be incremented", () => {
  let action = addPost("New Post Text");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

test("Text message should be correct", () => {
  let action = addPost("New Post Text");

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe("New Post Text");
});

test("Like count should be 0", () => {
  let action = addPost("New Post Text");

  let newState = profileReducer(state, action);

  expect(newState.posts[2].likeCount).toBe(0);
});

test("length after deleting should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});

test(" after deleting shouldn't be decement if id is incorrect", () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});
