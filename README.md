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
$ cd backend
$ npm init -y
```

The following modules can then be installed

```
$ npm install express cors mongodb dotenv
$ npm install -g nodemon
```

Configure the ```.env``` file with the MongoDB Atlas connection URL. This should point to the example ```sample_restaurants``` database that is available to install when a cluster is setup.

```
RESTREVIEWS_DB_URI=mongodb+srv://[username]:[password]@[cluster]/sample_restaurants?retryWrites=true&w=majority
RESTREVIEWS_NS=sample_restaurants
PORT=5000
```

### Frontend

Create with ```npx``` and ```npm```

```
$ npx create-react-app frontend
$ npm install bootstrap
$ npm install react-router-dom
$ npm install axios
```

## Running this Implementation

### Start the NodeJS and Express Backend

Run

```
$ nodemon server
```

Nodemon will listen for file changes and automatically update the application without needing to restart. The server starts on port 5000.

### Start the React Frontend

Run

```
$ npm start
```

File changes will be picked automatically without the need to restart. The application starts on port 3000. 

Visit ```http://localhost:3000```.