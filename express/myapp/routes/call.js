const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res, next) => {
  // console.log('test express');
  res.send('hello express');
  // next(); // 현재의 미들웨어의 기능을 다음 미들웨어로 연결해준다.
})

// router.get('/', (req, res, next) => {
//   console.log('2nd express');
// })

router.get('/member', (req, res) => {
  res.send('call member');
})

// /member/:id/name 이런식으로 뒤에 더 붙이는 것도 가능
router.get('/member/:id', (req, res) => {
  const member = req.params.id; // /:id 라서 .id가 찍히는 것 :xxx 면 .xxx
  console.log(member);
  res.send(`${member}`)
})

// API 문서

module.exports = router;