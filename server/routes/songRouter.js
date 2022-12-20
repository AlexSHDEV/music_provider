const Router = require('express');
const router = new Router();
const songController = require('../controllers/songController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), songController.create);
router.post('/:playlistid/:songid', songController.pull);
router.get('/:id', songController.getAll);
router.get('/playlist/:id', songController.getPlaylist);

module.exports = router;
