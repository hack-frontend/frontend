import {
  Textarea,
  Box,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import UserContext from "../store/user-context";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";
export default function PostInput() {
  const { user } = useContext(UserContext);
  const [text, setText] = useState("");
  const postCollectionRef = collection(db, "posts");
  console.log(user?.uid);
  const onSubmitPost = async (e) => {
    console.log("hi");
    e.preventDefault();
    try {
      await addDoc(postCollectionRef, {
        uid: user.uid,
        text,
        date: new Date(new Date().toDateString()).toISOString(),
      });
      console.log("success");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box>
      <FormControl as="form" onSubmit={onSubmitPost}>
        <FormLabel htmlFor="email">What are you grateful for?</FormLabel>
        <Textarea
          name="email"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </FormControl>
    </Box>
  );
}
