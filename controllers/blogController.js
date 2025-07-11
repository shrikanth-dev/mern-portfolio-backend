import Blog from '../models/Blog.js';
import openai from '../utils/openai.js';

export const createBlog = async (req, res) => {
  try {
    const { title, content, image, tags } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }

    let summary;
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-preview',
        messages: [
          { role: 'system', content: 'You are a summarizer that returns concise summaries in 1-2 lines.' },
          { role: 'user', content: `Summarize this blog:\n\n${content}` }
        ]
      });
      summary = completion.choices[0].message.content;
    } catch (error) {
      console.error("OpenAI summarization failed:", error.message);
      summary = "AI summarization unavailable currently.";
    }

    const newBlog = await Blog.create({
      title,
      content,
      image,
      tags,
      summary,
    });

    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'Server error while creating blog.' });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Server error while fetching blogs.' });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found.' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Server error while fetching the blog.' });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { title, content, image, tags } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, image, tags },
      { new: true }
    );
    if (!updatedBlog) return res.status(404).json({ error: 'Blog not found.' });
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Server error while updating the blog.' });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ error: 'Blog not found.' });
    res.json({ message: 'Blog deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Server error while deleting the blog.' });
  }
};
