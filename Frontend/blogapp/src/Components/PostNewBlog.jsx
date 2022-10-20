import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Button,
  Box,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import styles from "../Styled/card.module.css";

const PostNewBlog = () => {
  const [newBlog, setnewBlog] = useState({
    title: "",
    category: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setnewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:5000/blog/create", newBlog);

      alert("your data posted successfully");
      setnewBlog({...newBlog,
         title : '',
         category : '',
         body : ''
         })
    } catch (error) {
      console.log(error);
      alert("Error in posting");
    }
  };

  return (
    <Box className={styles.PostBlog_container}>
      <Heading size="md">Post New Blog</Heading>
      <Stack>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>

          <Input
            type="text"
            placeholder="enter Blog Title.."
            name="title"
            value={newBlog.title}
            onChange={handleChange}
            required={true}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Category</FormLabel>

          <Input
            type="text"
            placeholder="enter Blog Category.."
            name="category"
            value={newBlog.category}
            onChange={handleChange}
            required={true}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Blog body</FormLabel>

          <Textarea
            type="text"
            placeholder="enter Blog Category.."
            name="body"
            value={newBlog.body}
            onChange={handleChange}
            required={true}
          />
        </FormControl>

        <Button
          onClick={handleSubmit}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default PostNewBlog;
