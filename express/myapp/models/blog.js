const mongoose = require('mongoose');
const blogSchema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

// 블로그 글 제목 & 내용
// auto-increment
autoIncrement.initialize(mongoose); // 몽구스와 함께 초기화 필수

const blog = new blogSchema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  no: Number,
},
{
  timestamps: true,
})

blog.plugin(autoIncrement.plugin, { // plugin은 가져와서 활용한다는 것
  model: 'blog', // 모델 이름
  field: 'no', // 위 title content no 중 하나를 선택
  startAt: 7, // 내가 번호 없이 6개 만들어놔서 7부터 시작
  increment: 1,
})

const blogModel = mongoose.model('blog', blog);
module.exports = blogModel;