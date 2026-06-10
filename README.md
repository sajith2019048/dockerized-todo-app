\# Dockerized Todo Application



A simple RESTful Todo API built with Node.js and Express.js, containerized using Docker.



\## Features



\- View todo list

\- Add new todo

\- Delete todo

\- Dockerized application

\- Runs inside a Linux-based Node.js container



\## Technologies Used



\- Node.js

\- Express.js

\- Docker

\- Git

\- GitHub

\- REST API



\## API Endpoints



GET /

Returns application status.



GET /todos

Returns all todo items.



POST /todos

Adds a new todo item.



Example JSON:

{

&#x20; "task": "Learn DevOps"

}



DELETE /todos/:id

Deletes a todo item by ID.



\## Run Locally



```bash

npm install

npm start

