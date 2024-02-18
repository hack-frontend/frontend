import {
  Textarea,
  Center,
  FormControl,
  FormLabel,
  Button,
  Container,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import UserContext from "../store/user-context";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { useNavigate } from "react-router-dom";

export default function PostInput() {
  const toast = useToast();
  const { user, setPosts } = useContext(UserContext);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const dateToday = new Date(new Date().toDateString()).toISOString();
  const postCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const onSubmitPost = async (e) => {
    e.preventDefault();
    if (!text)
      return toast({
        title: "Input Error",
        description:
          "Please enter valid input at least more than 5 characters.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    try {
      setLoading(true);
      await addDoc(postCollectionRef, {
        uid: user.uid,
        text,
        date: dateToday,
        name: user.name,
      });
      toast({
        title: "Great!",
        description: "Your gratitude journal entry has been recorded! ",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setPosts((posts) => [
        {
          uid: user.uid,
          text,
          date: dateToday,
          name: user.name,
        },
        ...posts,
      ]);
      setLoading(false);
      navigate("/allposts");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Center minH="100vh">
      <Container>
        <FormControl
          as="form"
          onSubmit={onSubmitPost}
          display="flex"
          justifyContent="center"
          flexDir="column"
          alignItems="flex-start"
          gap="1.4rem"
        >
          <FormLabel
            htmlFor="email"
            m="0 auto"
            color="white"
            fontSize="1.8rem"
            textShadow="1px 1px rgba(0,0,0,0.2)"
          >
            What are you grateful for?
          </FormLabel>
          <Textarea
            name="email"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="10"
            bgColor="white"
          />
          <Button type="submit" m="0 auto">
            {!loading ? "Post" : <Spinner />}
          </Button>
        </FormControl>
      </Container>
    </Center>
  );
}
