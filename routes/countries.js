const express = require('express');
const respond_after_query = require('../db/respond_after_query');

// 외부로 보낼 라우터(router) 정의
let router = express.Router();

router.get('/', (req, res) => {
    const request_query = `SELECT nation_cd, nation_nm, phone_cd FROM countries ORDER BY nation_nm`;

    respond_after_query(res, request_query);
});

module.exports = router;