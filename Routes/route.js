const express = require('express')
const router = express.Router();
const {
    getApp 
} = require('../Controllers/tasks');
router.route('/').get(getApp);
module.exports = router;