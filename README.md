# techBlog
CMS style blog site where devs can publish posts and comment on others posts as well.

![License Type](https://shields.io/badge/license-MIT-blue)
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Screenshots-Videos](#screenshots-videos)
* [Deployment-Links](#deployment-links)


## Description
This app was created to make a space where devs can publish their blog posts and comment on other devs posts as well.  It uses follows the MVC paradigm and uses handlebars, sequelize, and express-session among other packages.  It uses bcrypt and authenticates individual users sessions.  Certain content is withheld until the user is logged in.

## Screenshots-Videos

ScreenShots Below

![Application Demo Screenshot1](https://github.com/Stickkman/techBlog14/blob/main/assets/screenshot01.jpg?raw=true)

![Application Demo Screenshot2](https://github.com/Stickkman/techBlog14/blob/main/assets/screenshot02.jpg?raw=true)

![Application Demo Screenshot3](https://github.com/Stickkman/techBlog14/blob/main/assets/screenshot03.jpg?raw=true)

## Installation
For local server:
1. Use 'npm install' from your preferred CLI to install dependencies. 
2. If you need to change database logins, users, etc, edit the .env file after install.
3. Open up the CLI and type 'mysql -u root -p' to login to mysql.
4. Type 'source./db/schema.sql' to create the database.
6. To automatically seed the database with sample data type 'npm run seeds'
7. Type 'npm start' to start the server.

For Heroku Live Server
1. Simply goto https://morning-hollows-44055.herokuapp.com/

## Usage

This app can be run locally by following the above installation instructions OR
by going to the HEROKU link found below.  Also for testing purposes for logins, 
you can use 'dionsanders' for username, and 'password123' for the password, or
simply look in the 'userSeeds.js'. You also have the option to create a new user
within the program.

## License
This license is covered under the MIT
 for more information visit https://mit-license.org/

## Contributing
If you would like to contribute please send me an email.

## Tests
For test login without creating a user use the following creds:
username - dionsanders
password - password123

Or look in local seeds file

## Questions
Any questions regarding this repo can be sent to me directly at Stickkman@gmail.com

Github Username: Stickkman

Github Profile Link: (https://github.com/Stickkman)

## Deployment-Links

Heroku Link: https://morning-hollows-44055.herokuapp.com/

GitHub Link: https://github.com/Stickkman/techBlog14






