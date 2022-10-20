import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Styled/card.module.css";

const Blogpage = () => {
  const [words, setWords] = useState([]);
  const [blog, setblog] = useState({});

  const params = useParams();
  // console.log(params);

  const get_all_words_with_A = async () => {
    try {
      const res = await axios.get(`https://immense-crag-14304.herokuapp.com/blog/${params.id}`);
      // console.log(res);
      setWords(res.data.words);
      setblog(res.data.blog);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReplace = async()=>{
      try {
        const res = await axios.patch(`https://immense-crag-14304.herokuapp.com/blog/${params.id}`);
        get_all_words_with_A()
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
    get_all_words_with_A();
  }, []);
  return (
    <Box className={styles.flexCont}>
      <Box className={styles.BlogCard}>
        <Heading mt={'4'} size={"md"}>{blog.title}</Heading>
        <HStack p={"4"}>
          <Heading size={"sm"}>Category</Heading>
          <Button>{blog.category}</Button>
        </HStack>

        <Box>{blog.body}</Box>
      </Box>
      <Box className={styles.list_box}>
        <Heading size={"md"} p="4">
          List of Words starting with 'a' or 'A'
        </Heading>
        <ul>
          {words?.map((item, index) => {
            return (
              <li className={styles.word} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </Box>

      <Box>
        <Text size={'md'}>To replace Last 3 character of all these words with '*' click on replace button</Text>
          <Button onClick={handleReplace}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Replace
          </Button>
      </Box>
    </Box>
  );
};

export default Blogpage;
