import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "",
    photoURL: "",
    uid: "",
  },
  isLoggedIn: false,
  posts: [],
  setUser: (user) => {},
  setPosts: (posts) => {},
  setIsLoggedIn: (bool) => {},
});

export default UserContext;
