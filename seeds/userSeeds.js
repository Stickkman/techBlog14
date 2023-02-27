const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'dionsanders',
        email: 'mvpofnfl@yahoo.com',
        password: 'password123'
    },
    {
        username: 'ojbrown',
        email: 'brownsoj@gmail.com',
        password: 'password1234'
    },
    {
        username: 'FranktheTank',
        email: 'frankstanks@hotmail.com',
        password: 'password1235'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;