module.exports = mongoose => {
  const Character = mongoose.model(
    "character",
    mongoose.Schema(
      {
        id: Number,
        name: String,
        status: String,
        species: String,
        gender: String,
        image: String,
        dbStatus: Boolean
      },
      { timestamps: true }
    )
  );

  return Character;
};


// module.exports = mongoose => {
//   var schema = mongoose.Schema(
//     {
//       title: String,
//       description: String,
//       published: Boolean
//     },
//     { timestamps: true }
//   );

//   schema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
//   });

//   const Tutorial = mongoose.model("tutorial", schema);
//   return Tutorial;
// };