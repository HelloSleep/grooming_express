const express = require('express');
var cors = require('cors');
require('dotenv').config();

const index = require('./routes/index');

const app = express();
const port = process.env.NODE_DOCKER_PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// 라우터 추가
app.use("/api", index);

// 에러 처리
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ok: false, message: err.stack});
});

// Health Check 전송
app.get("/health-check", (req, res, next) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`App is now listening on port ${port}`);
});