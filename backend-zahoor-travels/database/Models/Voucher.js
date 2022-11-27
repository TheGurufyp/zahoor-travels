const mongoose = require("mongoose");
var BookSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

// compile schema to model
var Book = mongoose.model("Book", BookSchema, "bookstore");
module.exports = mongoose.model("Book", BookSchema);

// a document instance
var book1 = new Book({
  name: "Introduction to Mongoose",
  price: 10,
  quantity: 25,
});

// save model to database
book1.save(function (err, book) {
  if (err) return console.error(err);
  console.log(book.name + " saved to bookstore collection.");
});
