const express = require('express');
const respond_after_query = require('../db/respond_after_query');

// 외부로 보낼 라우터(router) 정의
let router = express.Router();

// 데이터 조회
router.get('/:region_cd', (req, res) => {
    const request_query = `
        SELECT
            items.item_cd,
            items.region_cd,
            items.nation_cd,
            items.cat_mst_cd,
            cat_mst.cat_mst_nm,
            items.cat_dtl_cd,
            cat_dtl.cat_dtl_nm,
            items.item_nm,
            items.company_nm,
            items.imported_from,
            items.quantity,
            items.is_banned
        FROM items
        LEFT JOIN cat_mst ON
            cat_mst.cat_mst_cd = items.cat_mst_cd
        LEFT JOIN cat_dtl ON
            cat_dtl.cat_mst_cd = items.cat_mst_cd
            AND cat_dtl.cat_dtl_cd = items.cat_dtl_cd
        WHERE
            items.region_cd = '${req.params.region_cd}'
    `;

    respond_after_query(res, request_query);
});

// 데이터 생성
router.post('/:region_cd', (req, res) => {
    const request_query = `
        INSERT INTO items (
            region_cd,
            nation_cd,
            cat_mst_cd,
            cat_dtl_cd,
            item_nm,
            company_nm,
            imported_from,
            quantity,
            is_banned
        ) VALUES (
            '${req.params.region_cd}',
            '${req.body.nation_cd}',
            '${req.body.cat_mst_cd}',
            '${req.body.cat_dtl_cd}',
            '${req.body.item_nm}',
            '${req.body.company_nm}',
            '${req.body.imported_from}',
            ${req.body.quantity},
            ${req.body.is_banned}
        )
    `;

    respond_after_query(res, request_query);
});

// 데이터 수정
router.put('/:region_cd', (req, res) => {
    const request_query = `
        UPDATE
            items
        SET
            nation_cd = '${req.body.nation_cd}',
            cat_mst_cd = '${req.body.cat_mst_cd}',
            cat_dtl_cd = '${req.body.cat_dtl_cd}',
            item_nm = '${req.body.item_nm}',
            company_nm = '${req.body.company_nm}',
            imported_from = '${req.body.imported_from}',
            quantity = ${req.body.quantity},
            is_banned = ${req.body.is_banned}
        WHERE
            item_cd = ${req.body.item_cd}
            AND region_cd = '${req.params.region_cd}'
    `;

    respond_after_query(res, request_query);
});

// 데이터 삭제
router.delete('/:region_cd', (req, res) => {
    const request_query = `
        DELETE FROM items WHERE item_cd = ${req.body.item_cd} AND region_cd = '${req.params.region_cd}'
    `;

    respond_after_query(res, request_query);
});


module.exports = router;