# Rick And Morty Application
Project implemented using Angular 11, Node.js, Express and MongoDB.
This project use the [Rick and Morty API](https://rickandmortyapi.com/) for filter characters by their ID and storing them in a database.


## RUNNING THE BACKEND
In you console run `cd rick-and-morty-back` and run `npm install` in order to install all the dependencies.

Now you need to have running you MongoDB. For this run `mongod`, if you have not configured the path for mongo, you need to navigate where you have installed mongo and run `mongod`.

Finally run `node server.js` in order to run the server.

## RUNNING THE FRONTEND 
Once downloaded the project you need to install all the dependencies running `npm install`.

Run `npm start` for a dev server and navigate to `http://localhost:4200/` to see the app running.

NOTE: We use `npm start` instead of `ng serve` in order to solve a CORS problem.

### Running the frontend using Docker - Optional
If you want to run the app usin Docker it is possible, because the frontend was configured to create a container in Docker through the command `docker build -t rick-morty .` (rick-morty is the name thtat will hace your container)

Run `docker images` to list your images created where you will see the container created.

Run `docker run -d -it -p 4200:80` for run the container in background.

If you run `docker ps -a` you will see the app running.


