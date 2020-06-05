This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## 20200528

### Mongoose connecting

- schemas, creating a model
- schema types
- validators
- collection names
- actions : [get, post, update, delete]

### refactor and modulization the code

Before:
server [models, routes, server.js]
models [userModel.js]
routes[authentication.js, index.js]

server.js: run express server to receive request & get mongoose to deal with the data
index.js: actual REST API methods specified
userModel.js: mongoose schema defined

### Connecting with the App

- creating the login form with Link - to
- create post button with sign up
  \*cors error occurred: from server, added cors but still error? calling the api, added http protocol and solved

## 20200529

### Token

- from the server, tokenize password. (JWT, oAuth, cookie, session) -> go with JWT
  a. create auth routes & controller to create jwt token and check the token file

conflicts?
currently based on url, I am creating user however, create method should be separated? -> go with controller

- creating methods and call them requires some basic understandings of javascript including static, methods, and promises and prototypes
  Issue: unhandledPromise: can't set headers after they are sent to the client
  fix: at then end, I was calling res.send while we already ended and sent the response

## 20200530

register: POST /api/auth/register
login: POST /api/auth/login

### jsonwebtoken?

- module that uses jwt

### how to use?

- jwt.sign(payload, secret, options, [callback])//if call back exists, asynchronously work with params(error, token) and fn returns string

- before, we need to set secret key from app with app.set in server.js

- set it to jwt-secret and its value is pretty much a string that we set. e can go to https://jwt.io to decode it and check the payloads, header and everything.

- set payload(login info), secret(secret key from app), option(expires and etc), and callback(error handling function)

### check?

check: GET /api/auth/check

checks the token to get the information

## 20200601

### continuoing on middlewares of authMiddleware

GET /api/user/list

### scripting the password

- we need to save scripted password
- first encrypted variable in create of usermodel
- second decrypted variable in verify of userModel

now need to connect with Login!
Before, we need to save the token into cookie or web storage

### saving the tokens(connecting with frontend)

1. signup

- after registering succesfully, need to redirect to login => using history. (history.push(url u want to go to)) You can use history in side of Route and if not, you can use withRouter from react-router-dom

2. login

- after login successfully, save the token to the local storage

### Now the token is done what next?

- using the token, get the info from backend server. However, is this really efficient?
  => lets just build from what I know and should comeback

## 20200602

### using profile component, allow login access from the user

- first we need authRoute to specify if this is valid route
- with bunch of api calls, we can receive user data but first need to modulize those api calls separated in each component

- ex) webTokens functions, backend call apis

- with use Effect and getLoginInfo, I was able to see the current userData in homepage. Maybe add authenticated as a state to pass around authenticated variable to accessible state. \*Also, move the header to the home page is one thing we should do so from there, we can go anywhere

### Now profile works with authenticated

- need to fix the header
- add colleges to user's favorite colleges

problem: currently, I am redirecting to / which is home component. However, in doing so, the login check login in app.js doesn't work because i automatically redirect. Therefore, I need contextAPI and redux to fix that.

### Redux or Context API integration

- context API. problem is in App.js still, the auth is saved as false even when we change it...

- call Context within the component and fixed the problem. Based on that, need to change Headers.

- Context done and need to fix small things such as password and session or cookies for saving password

## 20200604

### Several Fixes

- input password(fixed)
- localstorage to sessions or cookies(fixed)

## 20200604

### adding like functionalities for colleges when user True

- using context, if like button clicked, then add it to database
- if liked, then add delete
