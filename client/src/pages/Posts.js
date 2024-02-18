import { useContext, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import PostInput from "../Posts/PostInput";
import UserContext from "../store/user-context";
import { useNavigate } from "react-router-dom";
function Posts() {
  const { posts, user } = useContext(UserContext);
  const navigate = useNavigate();
  const userPosts = posts.filter((post) => user.uid === post.uid);
  const dateToday = new Date(new Date().toDateString()).toISOString();
  const hasPostedToday = userPosts.length
    ? userPosts[0].date === dateToday
    : false;
  useEffect(() => {
    if (hasPostedToday) navigate("/allposts");
  }, [hasPostedToday, navigate]);
  return (
    <Box
      bgImage="linear-gradient(0deg, rgba(154, 230, 180, 0.4), rgba(154, 230, 180, 0.4)),url('https://images.unsplash.com/photo-1665194653214-671daebe6dc0?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      bgSize="cover"
    >
      <PostInput />
    </Box>
  );
}

export default Posts;
// bgImage="linear-gradient(0deg, rgba(154, 230, 180, 0.4), rgba(154, 230, 180, 0.4)),url('https://i.gifer.com/6O2V.gif')"
