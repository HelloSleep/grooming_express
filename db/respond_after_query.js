const dbpool = require('./dbpool');

// response 타입: Response<any, Record<string, any>, number>
const respond_after_query = (response, request_query) => {
    dbpool.query(request_query, (err, data, fields) => {
        if (err) {
            console.log('[ERROR] Please check out the error information below.', err);
            response.send({ok: false, message: err});
        } else {
            console.log('[SUCCESS] Successful query request!');
            //console.log(">>>", {ok: true, data: data});
            response.send({ok: true, data: data});
        }
    });
};

module.exports = respond_after_query;