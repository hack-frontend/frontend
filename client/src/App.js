import Auth from "./Auth/Auth";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "./config/firebase.config";
import Button from "./pages/Button";
import Posts from "./pages/Posts";
import AllPosts from "./pages/AllPosts";
import UserContext from "./store/user-context";
import { useContext } from "react";
import Layout from "./components/Layout";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./config/firebase.config";
import Loader from "./pages/Loader";

function App() {
  const { setIsLoggedIn, setPosts, setUser, isLoggedIn } =
    useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setIsLoading(false);
        return unsubscribe;
      }
      setUser({
        name: user.displayName.split(" ")[0],
        photoURL: user.photoURL,
        uid: user.uid,
      });
      setIsLoggedIn(true);
      setIsLoading(false);
    });
    return unsubscribe;
  }, [setUser, setIsLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) return;
    const postsCollection = collection(db, "posts");
    const getPostsList = async () => {
      try {
        const { docs } = await getDocs(postsCollection);
        setPosts(
          docs
            .map((doc) => ({ ...doc.data(), id: doc.id }))
            .sort((a, b) => {
              if (b.date > a.date) return 1;
              else if (a.date > b.date) return -1;
              else return 0;
            })
        );
      } catch (err) {
        console.log(err);
      }
    };
    getPostsList();
  }, [isLoggedIn, setPosts]);
  return (
    <Layout>
      {!isLoading ? (
        <Routes>
          <Route path="/" exact element={<Button />} />
          <Route path="/posts" exact element={<Posts />} />
          <Route path="/allposts" exact element={<AllPosts />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      ) : (
        <Loader />
      )}
    </Layout>
  );
}

export default App;
