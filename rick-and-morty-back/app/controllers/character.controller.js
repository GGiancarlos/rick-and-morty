
const db = require("../models");
const Character = db.characters;

// Create and Save a new Character
exports.create = (req, res) => {

  // Validate request
  if (!req.body.id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Character
  const character = new Character({
    id: req.body.id,
    name: req.body.name,
    status: req.body.status,
    species: req.body.species,
    gender: req.body.gender,
    image: req.body.image,
    dbStatus: req.body.dbStatus ? req.body.dbStatus : true
  });

  // Save Character in the database
  character
    .save(character)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Character."
      });
    });

};

// Retrieve all Characters from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Character.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving characters."
      });
    });

};

// Find a single Character with an id
exports.findOne = (req, res) => {

};

// Find all recent Characters
exports.findAllRecents = (req, res) => {
  Character.find({ dbStatus: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};