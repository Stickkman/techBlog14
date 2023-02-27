const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// gets all posts for use in homepage using try/catches
router.get('/', async (req, res) => {
    try {
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
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) { // if error
        console.log(err);
        res.status(500).json(err);
    }
});

// get single post by id
router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findOne({
            where: {
                id: req.params.id
            },
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
        if (!dbPostData) { // if not postdata display message
            res.status(404).json({ message: 'No post found' });
            return;
        }
        const post = dbPostData.get({ plain: true });
        res.render('singlePost', {
            post,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) { // if logged in then proceed, if not redirect to login page
        res.redirect('/');
        return;
    }
    res.render('login');
});

// get signup page if not logged in, otherwise proceed
router.get('/signup', (req, res) => {
    if (!req.session.loggedIn) { // if error
        res.render('signup');
    } else {
        res.redirect('/');
    }
});

module.exports = router;
