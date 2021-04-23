# Rick And Morty Backend using Node.js
This is the backend implemented for the Rick and Morty App created in Angular.

## Installation
Run `npm install` for install all the packages.

## Running the server
Run `node server.js` for run the server on port 8080.

## Using Docker - optional
Run `docker build -t rick-morty-back .`
Run `docker run -d -it -p 8080:8080`

# API's
Mainly 2 endpoints were generated
- Create Characters - POST
- List All Characters - GET

## Create Characters
Used in order to create or store the characters filtered in the database using the URL: `http://localhost:8080/api/characters`.
Making a POST to the previous URL and with a body like this:
    {
        "id": 17,
        "name": "Annie",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg"            
    }
will create a new Character.

## List All Characters
Used in order to list all the characters stored in the database: `http://localhost:8080/api/characters`.

Using this endpoint with a GET, will result like next:
    [
        {
            "_id": "6081aa7662b94537a49c4a25",
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "dbStatus": true,
            "createdAt": "2021-04-22T16:55:18.630Z",
            "updatedAt": "2021-04-22T16:55:18.630Z",
            "__v": 0,
            "id": 1
        },
        {
            "_id": "6081aad362b94537a49c4a26",
            "name": "Adjudicator Rick",
            "status": "Dead",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            "dbStatus": true,
            "createdAt": "2021-04-22T16:56:51.673Z",
            "updatedAt": "2021-04-22T16:56:51.673Z",
            "__v": 0,
            "id": 8
        }    
    ]