import {
  Container,
  Heading,
  Center,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import UserContext from "../store/user-context";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";
function AllPosts() {
  const { posts, setIsLoggedIn, setUser, user } = useContext(UserContext);
  const [isMyPost, setIsMyPost] = useState(false);
  const filteredPosts = isMyPost
    ? posts.filter((post) => post.uid === user.uid)
    : [...posts];
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setUser(null);
      navigate("/auth");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container maxW="60%" p="1">
      <Center>
        <Heading
          mt="2rem"
          mb="1.5rem"
          color="white"
          textShadow="1px 1px rgba(0,0,0,0.3)"
        >
          Gratitude Posts
        </Heading>
        <Menu>
          <MenuButton as={Button} position="fixed" top="2rem" right="2rem">
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setIsMyPost((isPost) => !isPost)}>
              {isMyPost ? "All posts" : "My posts"}
            </MenuItem>
            <MenuItem onClick={logOut}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Center>
      <Flex gap="3rem" flexWrap="wrap" justifyContent="center">
        {!!filteredPosts.length &&
          filteredPosts.map((el) => (
            <Flex
              key={el.id}
              bgColor="yellow.50"
              p="1rem 1.3rem"
              minH="14rem"
              w="25%"
              borderRadius="25px"
              flexDir="column"
              boxShadow="xl"
              color="gray.600"
            >
              <Text flex="1">"{el.text}"</Text>
              <Text>- {el.name}</Text>
            </Flex>
          ))}
      </Flex>
    </Container>
  );
}

export default AllPosts;
