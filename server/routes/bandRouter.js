const Router = require('express');
const router = new Router();
const bandController = require('../controllers/bandController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), bandController.create);
//router.get('/', bandController.getAll);
router.get('/:id', bandController.getOne);
router.get('/name/:name', bandController.getId);

module.exports = router;
