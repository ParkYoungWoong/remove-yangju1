const user1 = {
  name: "Neo",
  email: "neo@gmail.com",
};
const user2 = {
  name: "Evan",
  age: 22,
};
const user3 = Object.assign({}, user1, user2);
const user4 = {
  name: "Evan",
  age: 22,
  email: "neo@gmail.com",
};
