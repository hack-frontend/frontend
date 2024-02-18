import { Center, Text } from "@chakra-ui/react";
import Btn from "../components/Btn";
import Timer from "../components/Timer";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../store/user-context";

function BtnPage() {
  const [btnPresent, setBtnPresent] = useState(true);
  const [textAppear, setTextAppear] = useState(false);
  const [timerAppear, setTimerAppear] = useState(false);
  const { user, posts, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const userPosts = posts.filter((post) => user.uid === post.uid);
  const dateToday = new Date(new Date().toDateString()).toISOString();
  const hasPostedToday = userPosts.length
    ? userPosts[0].date === dateToday
    : false;

  const onButtonClick = () => {
    setBtnPresent(false);
    setTimeout(() => {
      setTextAppear(true);
    }, 2000);
  };
  console.log(isLoggedIn);
  useEffect(() => {
    if (hasPostedToday) navigate("/allposts");
  }, [hasPostedToday, navigate]);

  useEffect(() => {
    let timeout;
    if (textAppear)
      timeout = setTimeout(() => {
        setTextAppear(false);
        setTimeout(() => {
          setTimerAppear(true);
        }, 2000);
      }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [textAppear]);

  return (
    <Center minH={"100vh"}>
      <Btn
        btnPresent={btnPresent}
        onButtonClick={onButtonClick}
        textAppear={textAppear}
        timerAppear={timerAppear}
      />
      <Text
        opacity={textAppear ? "1" : "0"}
        visibility={textAppear ? "visible" : "hidden"}
        position={textAppear ? "relative" : "fixed"}
        transition="all 1.4s"
        color="white"
        fontSize="1.7rem"
      >
        Close your eyes. Take some deep breathes and be present.
      </Text>
      <Timer timerAppear={timerAppear} />
    </Center>
  );
}

export default BtnPage;
