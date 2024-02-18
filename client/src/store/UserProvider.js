import UserContext from "./user-context";

import { useState } from "react";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userContext = {
    user,
    posts,
    isLoggedIn,
    setUser,
    setPosts,
    setIsLoggedIn,
  };

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
