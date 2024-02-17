import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "",
    photoURL: "",
    uid: "",
  },
  posts: [],
  setUser: (user) => {},
  setPosts: (posts) => {},
});

export default UserContext;
