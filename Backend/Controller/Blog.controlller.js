const { Router } = require("express");
const BlogModel = require("../Model/Blog.model");

const BlogController = Router();

BlogController.get("/", async (req, res) => {
  const { page, limit } = req.query;

  const allblogs = await BlogModel.find({})
    .limit(limit)
    .skip((page - 1) * limit);

  if (allblogs.length == 0) {
    return res.status(404).send({ message: "no data found" });
  } else {
    return res.status(200).send({ allblogs });
  }
});

BlogController.get("/:postId", async (req, res) => {
  const { postId } = req.params;
  const blog = await BlogModel.findOne({ _id: postId });
  const words = blog.body.split(" ").filter((item) => (item[0] === "a" || item[0] === "A")
    
  );

  return res.status(200).send({  words, blog });
});

BlogController.patch("/:id", async (req, res) => {
    // console.log(req.params)
  const postId = req.params.id;
  const blog = await BlogModel.findOne({ _id: postId });

// logic to change last 3 character to '*'

  const words = blog.body.split(" ").map((item) => {
    if (item[0] === "a" || item[0] === "A") {
      let letters = item.split("");
      const n = letters.length;
      letters[n - 1] = "*";
      letters[n - 2] = "*";
      letters[n - 3] = "*";

      return letters.join("");
    } else {
      return item;
    }

  });

  
  const updatedWords = words.join(" ");
  const updatedBlog = await BlogModel.findOneAndUpdate({_id: postId}, {body : updatedWords}, {new : true})
  // console.log(updatedBlog)
  return res.status(200).send({ updatedBlog });
});

BlogController.post("/create", async (req, res) => {

    // console.log(req.body)
  const { title, body, category } = req.body;
  
  const newBlog = new BlogModel({
    title,
    body,
    category,
  });
  await newBlog.save();

  return res.status(200).send({ message: "data saved successfully", newBlog });
});

module.exports = BlogController;
