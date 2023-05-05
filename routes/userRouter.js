const userData = require('../controller/userController');
const validateUser = require('../controller/userValidator');

const router = require('express').Router();

router.get('/msg', userData.getMsg);
router.get('/getdata', userData.getData);
// router.post('/adddata',validateUser,userData.create);
router.get('/getbyid/:id', userData.getById);
router.put('/update/:id', userData.updateData);
router.delete('/delete/:id', userData.deleteData);

module.exports = router;