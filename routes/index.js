var express = require('express');
var router = express.Router();
var http = require('http'),
    fs = require('fs'),
    ccav = require('../module/ccavutil.js'),
    qs = require('querystring'),
    ccavReqHandler = require('../module/ccavRequestHandler'),
    ccavResHandler = require('../module/ccavResponseHandler');

/* GET home page. */
router.get('/pay', function(req, res, next) {
  res.render('pay', { title: 'Express' });
});

router.post('/ccavRequestHandler', function (request, response){
	ccavReqHandler.postReq(request, response);
});


router.post('/ccavResponseHandler', function (request, response){
        ccavResHandler.postRes(request, response);
});

module.exports = router;
