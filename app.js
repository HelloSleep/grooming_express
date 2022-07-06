const express = require('express');
var cors = require('cors');
require('dotenv').config();

const index = require('./routes/index');

const app = express();
const port = process.env.DOCKER_INTERNAL_PORT;

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
    console.log("\n------------------------------[INFO]------------------------------");
    console.log(`DOCKER_INTERNAL_PORT : ${process.env.DOCKER_INTERNAL_PORT}`);
    console.log(`DB_HOST : ${process.env.DB_HOST}`);
    console.log(`REGION : ${process.env.REGION}`);
    console.log(`AVAILABILITY_ZONE : ${process.env.AVAILABILITY_ZONE}`);
    console.log("------------------------------------------------------------------\n");
});