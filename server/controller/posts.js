import Post from "../models/Post.js";
import User from "../models/User.js";
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    // 409 indicate the requested have or would create a conflict within the resource or e request could not be processed because of conflict in the request, such as the requested resource is not in the expected state,
    res.status(409).json({ message: err.message });
  }
};
