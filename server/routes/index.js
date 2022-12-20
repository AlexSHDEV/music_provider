const Router = require('express');
const router = new Router();
const albumRouter = require('./albumRouter');
const userRouter = require('./userRouter');
const bandRouter = require('./bandRouter');
const songRouter = require('./songRouter');


router.use('/user', userRouter);
router.use('/album', albumRouter);
router.use('/band', bandRouter);
router.use('/song', songRouter);

module.exports = router;
