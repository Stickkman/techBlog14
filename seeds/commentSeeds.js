const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'That is a great idea!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Clever use of async!',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Thanks for the help!',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;