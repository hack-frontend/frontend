import UserContext from "./user-context";

import { useState } from "react";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);

  const userContext = {
    user,
    posts,
    setUser,
    setPosts,
  };

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
