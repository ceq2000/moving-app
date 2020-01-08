# M.E.R.N Stack Seed Project with JWT Auth

M.E.R.N: Mongo, Express, React, Node Stack

This is a single page application (SPA) GUI and Node Express API server.

The server and GUI are coded to authenticate users with username and password.

Authentication info is stored in a JSON Web Token.  The server is session free.

The app currently supports:
* New User sign up with a username and password
* Login
* Logout
* Auto log out if refresh token is expired when request to protected URL is made
* Auto creation of new auth token if refresh token is still valid (so if a user is using the app they will not be logged out if they have not made a protected api call within `AUTH_TOKEN_DURATION`)

Missing from app:
* Auto logout due to inactivity
* Profile page with Change password screen
* Profile page with Change username screen
* Profile Picture/avatar upload
* Delete account page


App can be run locally by running (from project root directory):

```
npm i
npm start
```

or can be used on heroku at:
https://booklist-cnr.herokuapp.com/

Signup with your own account on the sign up page: https://booklist-cnr.herokuapp.com/signup
or login with

username: `demo1`   

password: `12345678`


When running locally, user and book data can be seeded by running:

```
npm run seed
```

## Dependency Doc Links

### Client
* SPA Framework
  * https://reactjs.org/
* CSS
  * https://bootswatch.com/
* Component Framework
  * https://react-bootstrap.github.io/
  * https://getbootstrap.com/
* Forms
  * https://jaredpalmer.com/formik/
  * Validation: https://www.npmjs.com/package/yup
* JWT (JSON Web Token) handling
  * Client
    * https://github.com/eezing/jwt-jot
    * https://www.npmjs.com/package/jwt-jot
  * Server
    * jsonwebtoken: https://github.com/auth0/node-jsonwebtoken#readme
  * JWT testing: https://jwt.io/
* AJAX
  * https://www.npmjs.com/package/axios
* Routing
  * https://reacttraining.com/react-router/

### Server
* Auth
  * http://www.passportjs.org/
  * http://www.passportjs.org/docs/configure/
  * http://www.passportjs.org/packages/passport-jwt/
  * https://www.npmjs.com/package/bcrypt
* Data
  * https://www.mongodb.com/
  * https://mongoosejs.com/
* Server
  * https://expressjs.com/