const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const commendCtrl = require('../controllers/commendController');
// get commend
router.get('/:commendId', checkAuth, commendCtrl.get)
// save commend
router.post('/save/:boardId', checkAuth, commendCtrl.save)
// update commend
router.post('/update/:commedId', checkAuth, commendCtrl.update)
// delete commend
router.post('/delete/:commendId', checkAuth, commendCtrl.delete)

module.exports = router;