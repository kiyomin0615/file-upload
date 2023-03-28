const express = require('express');
const multer = require("multer"); // multer 패키지 함수(객체)

// multer(옵션객체)
// 1. 미들웨어 함수를 갖고 있는 객체 리턴
const upload = multer({});
const router = express.Router();

router.get('/', function(req, res) {
  res.render('profiles');
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

// 미들웨어 함수 추가
// upload.single("form 데이터 name");
// 1. 파일 1개 분석
// upload.array();
// 2. 파일 여러개 분석
router.post("/profiles", upload.single("image"), function(req, res) {
  // req.file
  // 1. 요청에 포함된 파일 데이터
  // req.body
  // 2. 요청에 포함된 form 데이터(파일 데이터 제외)
  const file = req.file;
  const data = req.body;
})

module.exports = router;