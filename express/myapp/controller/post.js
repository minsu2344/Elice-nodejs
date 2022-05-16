const BookSchema = require('../models/book'); // BookSchema 들어가니까 가져오기

const getbookinfo = (req, res) => {
  const authorname = req.params.id;
  // BookSchema.findOne({author: authorname}, (err, result) => {
  //   if(result) {
  //     return res.json(result);
  //   } else {
  //     return res.send('No author');
  //   }
  // })

  BookSchema.find({author: authorname})
    .then(result => {
      res.json(result);
    })
    .catch( err => {
      console.log(err);
    })
}

const addbook = (req, res) => {
  const bookname = req.body.bookname;
  const author = req.body.author;
  const price = req.body.price;
  const date = req.body.date;

  let bookData = new BookSchema({
    bookname: bookname,
    author: author,
    price: price,
    publish: date,
  });

  bookData.save();
  res.redirect('/expost');
}

module.exports = {
  getbookinfo,
  addbook,
}