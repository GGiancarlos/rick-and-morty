module.exports = app => {
  const characters = require("../controllers/character.controller.js");

  var router = require("express").Router();

  // Create a new Character
  router.post("/", characters.create);

  // Retrieve all Characters
  router.get("/", characters.findAll);

  // Retrieve all recent Characters created
  router.get("/recent", characters.findAllRecents);


  app.use('/api/characters', router);
};