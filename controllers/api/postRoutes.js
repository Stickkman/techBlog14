// import dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to get all posts
router.get('/', async (req, res) => {
  try {
    // Find all posts, including their comments and associated user data
    const dbPostData = await Post.findAll({
      attributes: [
        'id',
        'title',
        'description',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    // Return the response with the posts data in JSON format
    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route to get a single post by id
router.get('/:id', async (req, res) => {
  try {
    // Find the post with the given id, including its comments and associated user data
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'description',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    // If the post isn't found, return an error response
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found' });
      return;
    }
      res.json(dbPostData);
  } catch (err) {
    // error catch
    console.log(err);
    res.status(500).json(err);
  }
});

// Route to create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    // Create a new post with the given title, description, and user id
    const dbPostData = await Post.create({
      title: req.body.title,
      description: req.body.description,
      user_id: req.session.user_id
    });

    // Return the response with the new post data in JSON format
    res.json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route to update an existing post by id
router.put('/:id', withAuth, async (req, res) => {
  try {
    // Update the post with the given id with the new title and description values
    const dbPostData = await Post.update(
      {
        title: req.body.title,
        description: req.body.description
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!dbPostData) {
        res.status(404).json({ message: 'No post found' });
        return;
      }
        res.json(dbPostData);
    } catch (err) {
      // error catch
      console.log(err);
      res.status(500).json(err);
    }
  });

  // DELETE a post by ID
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const deletedPost = await Post.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!deletedPost) {
        res.status(404).json({ message: 'No post found' });
        return;
      }
      res.status(200).json(deletedPost);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;