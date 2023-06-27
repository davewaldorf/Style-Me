const router = require('express').Router();
const userController = require('../controllers/user');
const lookController = require('../controllers/look');
const wardrobeController = require('../controllers/wardrobe');
const {uploadFile, upload} = require('../utils/storage');

router.post('/register', userController.register);
router.post('/login', userController.login, (req, res) => {
  res.send({ message: 'User logged in' });
});
// router.get('/logout', userController.logout);

// User routes
router.get('/profile/:id', userController.getProfile);
router.put('/profile/:id', userController.updateProfile);
router.delete('/profile/:id', userController.deleteProfile);
router.post('/wardrobe/:id', userController.addToWardrobe);
router.get('/logout', userController.logout);

// Look routes
router.get('/looks/:id/likes', lookController.getLikesByUser);
router.get('/looks', lookController.getAllLooks);
router.post('/looks/:id', lookController.addLook);
router.put('/looks/:lookId/:userId', lookController.handleLike);

// Upload routes
router.post('/upload', upload.single('file'), uploadFile);

// Wardrobe routes
router.post('/wardrobe/:id', wardrobeController.addToWardrobe);




module.exports = router;

