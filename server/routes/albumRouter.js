const Router = require('express');
const router = new Router();
const albumController = require('../controllers/albumController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), albumController.create);
router.get('/band/:id', albumController.getAll);
router.get('/:id', albumController.getOne);
router.get('/name/:name', albumController.getId);

module.exports = router;
