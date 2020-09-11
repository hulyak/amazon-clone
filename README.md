# Amazon Clone with React Hooks, Redux and Firebase 

[See the live app](https://ch-71634.web.app/)

App uses React & Redux & Context Api to create the front-end, Back end is with Firebase Cloud Functions, users can make purchase with Stripe Api.

## Features

- Add and remove products from the basket
- User authentication
- Stripe checkout 
- Data persistency with Firebase
- Firebase Hosting
- Firebase Cloud Functions
- Users purchase history with Cloud Firestore 
- Carousel with React-Bootstrap


## Build/Run

**Requirements**

- Node.js
- NPM

```
/* First, Install the needed packages */
npm install

/* Then start both Node and React */
npm start

/* If you make changes to project */
npm run build

/* and deploy with firebase */
firebase deploy --only hosting
``` 

To deploy the back end, sign up for Firebase Blaze account.

