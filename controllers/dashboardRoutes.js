const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth'); // used for authenticaiton


router.get('/', withAuth, async (req, res) => { // used withAuth then proceed
  try {
    const dbPostData = await Post.findAll({
      where: { user_id: req.session.user_id },
      attributes: ['id', 'title', 'description', 'created_at'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true })); //serialize data for template
    console.log(posts);
    res.render('dashboard', { posts, loggedIn: true });
  } catch (err) { // catch errors
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      attributes: ['id', 'title', 'description', 'created_at'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (!dbPostData) {
      return res.status(404).end();
    }

    const post = dbPostData.get({ plain: true });

    res.render('editPost', { post, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


