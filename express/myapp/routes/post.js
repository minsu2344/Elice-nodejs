const express = require('express');
const { redirect } = require('express/lib/response');
const BookSchema = require('../models/book') // controller에 작성했으면 지워도 됨
const router = express.Router();
const bookController = require('../controller/post');

router.get('/', (req, res) => {
  res.render('post')
})

router.get('/del', (req, res) => {
  res.render('delete');
})

router.get('/bookinfo/:id', bookController.getbookinfo);

// router.get('/bookinfo/:id', (req, res) => {
//   const authorname = req.params.id;
//   // BookSchema.findOne({author: authorname}, (err, result) => {
//   //   if(result) {
//   //     return res.json(result);
//   //   } else {
//   //     return res.send('No author');
//   //   }
//   // })

//   BookSchema.find({author: authorname})
//     .then(result => {
//       res.json(result);
//     })
//     .catch( err => {
//       console.log(err);
//     })
// })

router.delete('/del/:id', (req, res) => {
  const bookname = req.params.id;

  BookSchema.findOneAndDelete({bookname: bookname})
    .then(result => {
      res.json({redirect: '/expost'})
    })
    .catch(err => {
      console.log(err);
    })
})

router.post('/', (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const date = req.body.date;
  // 웹 통신은 1요청 1응답
  // 1요청 1응답 시 통신 종료 정상
  // next 이후 redirect를 하고 싶으면 res.json과 next 주석해야함
  // 대신 json이 안 뜸
  res.json({name: name, phone: phone, date: date});
  next();
});


router.get('/addbook', bookController.addbook);
// router.post('/addbook', (req, res, next) => {
//   const bookname = req.body.bookname;
//   const author = req.body.author;
//   const price = req.body.price;
//   const date = req.body.date;

//   let bookData = new BookSchema({
//     bookname: bookname,
//     author: author,
//     price: price,
//     publish: date,
//   });

//   bookData.save();
//   res.redirect('/expost');
// });

// router.post('/', (req, res) => {
//   // res.redirect ==> 호출한 경로로 재 접근
//   res.redirect('/expost');
// });

// bookinfo에 있는 정보를 다 가져오는 코드
// expost/getlist
router.get('/getlist', async (req, res) => {
  const result = await BookSchema.find({}).exec();
  return res.status(200).json(result);
  // const result = await BookSchema.find({}, (req, res) => {
    // }) // exec()가 더 간단함
})

// error 핸들링

router.get('/users', (req, res) => {
  res.render('user');
})

module.exports = router;