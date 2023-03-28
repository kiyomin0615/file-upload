const express = require('express');
const multer = require("multer"); // multer 패키지 함수(객체)

const db = require("../data/database");

// multer.diskStorage(옵션객체);
// 1. 스토리지 객체 리턴
// 2. 파일 저장 경로 및 이름 설정
const storageOption = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "images"); // 파일 저장 경로 설정
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // 파일 이름 설정
  },
})

// multer(옵션객체)
// 1. 미들웨어 함수를 갖고 있는 객체 리턴
const upload = multer({ storage: storageOption }); // 파일 저장 경로와 파일 이름 설정
const router = express.Router();

router.get('/', async function(req, res) {
  const users = await db.getDB().collection("users").find().toArray();
  
  res.render('profiles', { users: users });
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

// 미들웨어 함수 추가
// upload.single("form 데이터 name");
// 1. 파일 1개 분석
// upload.array();
// 2. 파일 여러개 분석
router.post("/profiles", upload.single("image"), async function(req, res) {
  // req.file
  // 1. 요청에 포함된 파일 데이터
  // req.body
  // 2. 요청에 포함된 form 데이터(파일 데이터 제외)
  const file = req.file;
  const data = req.body;
  
  await db.getDB().collection("users").insertOne({
    name: data.username,
    imagePath: file.path,
  })

  res.redirect("/");
})

module.exports = router;