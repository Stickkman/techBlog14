const { Post } = require('../models');

const postdata = [
    {
        title: 'Object-Relational Mapping',
        description: 'This is really confusing, can you help me understand this better?',
        user_id: 1
    },
    {
        title: 'I love Jquery',
        description: 'Jquery is the best, thanks to Alberts explanation earlier I will be using it all the time, kudos',
        user_id: 2
    },
    {
        title: 'Why MVC important',
        description: 'Because it helps tremendously with separation of concerns',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;