import postModel from "../models/post.model.js";
export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find({});
    res.status(200).json({ success: true, content: posts });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error in get all posts controller" });
  }
};
export const getPostById = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await postModel.findById({ slug });
    res.status(200).json({ success: true, content: post });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error in get post by id controller" });
  }
};
export const createPost = async (req, res) => {
  try {
    const { user, title, slug, content } = req.body;
    const newPost = await postModel.create({ user, title, slug, content });
    res.status(200).json({ success: true, content: newPost });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Error in create post controller" });
  }
};
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await postModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "post deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Error in get delete post controller" });
  }
};
