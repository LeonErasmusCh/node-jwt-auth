const { index, login, private } = require("../controllers/main.controller");
const auth = require('../middlewares/auth')

const router = require('express').Router();

router.get('/', index)
router.post('/login', login)
router.get('/private', auth, private)


module.exports = router