const express = require('express');
let router = express.Router();
let api = require('./posts_api');

router.get('/', api.index);
module.exports = router;