# MongoDB Express React NodeJS (MERN) Reference Implementation

This is an example implementation of a restaurant review application using the Express, Node.JS, React and MongoDB (MERN) stack.

The following technologies are used:

* MongoDB Atlas for the database
* Express and Node.JS for the backend API
* React for the client

## Prerequisites

The following are required:

* MongoDB Atlas account with the sample dataset loaded onto a cluster (includes database sample_restaurants)
* Node.JS (tested with v12.18.0)

The backend and frontend are setup with npm and npx

### Backend

Create with ```npm```

```
$ mkdir backend
$ npm init -y
```

The following modules can then be installed

```
$ npm install express cors mongodb dotenv
$ npm install -g nodemon
```

### Frontend

Create with ```npx```

```
$ npx create-react-app frontend
```

## Running this Implementation

### Start the NodeJS and Express Backend

1. Run

```
$ nodemon server
```

Nodemon will listen for file changes and automatically update the application without needing to restart.