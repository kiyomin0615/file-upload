const path = require('path');

const express = require('express');

const userRoutes = require('./routes/users');
const db = require('./data/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
// 요청의 경로에서 "/images"가 필터링되고 제거된다
app.use("/images", express.static("images"));

app.use(userRoutes);

db.connectDB().then(function () {
  app.listen(3000);
});
