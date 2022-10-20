import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../Styled/card.module.css";

const Homepage = () => {
  const [allblogs, setAllBlogs] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const getallBlogs = async (page) => {
    try {
      let res = await axios.get(
        `https://immense-crag-14304.herokuapp.com/blog?page=${page}&limit=${2}`
      );

    //   console.log(res);
      setAllBlogs(res.data.allblogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallBlogs(page);
  }, [page]);
  return (
    <Box>
      <Heading size="md">All Blogs</Heading>
      <HStack>
        <Button
          bg={"blue.400"}
          ml='10'
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Text>{page}</Text>
        <Button
          disabled={page > allblogs.length}
          onClick={() => setPage((prev) => prev + 1)}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          next
        </Button>
      </HStack>
      <Box className={styles.main_cont}>
        {allblogs?.map((item) => {
          return (
            <Box
              className={styles.card_cont}
              key={item._id}
              onClick={() => navigate(`/blog/${item._id}`)}
            >
              <Heading size={"md"} mt="4">
                {item.title}
              </Heading>
              <HStack p={"4"}>
                <Heading size={"sm"}>Category</Heading>
                <Button>{item.category}</Button>
              </HStack>

              <Box>{item.body}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Homepage;
