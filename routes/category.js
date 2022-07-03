const express = require('express');
const respond_after_query = require('../db/respond_after_query');

// 외부로 보낼 라우터(router) 정의
let router = express.Router();

router.get('/', (req, res, next) => {
    res.redirect("/api/category/master");
});

router.get('/master', (req, res) => {
    const request_query = `SELECT cat_mst_cd, cat_mst_nm FROM cat_mst ORDER BY cat_mst_nm`;
    
    respond_after_query(res, request_query);
});

router.get('/detail', (req, res) => {
    const request_query = `SELECT cat_mst_cd, cat_dtl_cd, cat_dtl_nm FROM cat_dtl order by cat_dtl_nm`;

    respond_after_query(res, request_query);
});

module.exports = router;