const express = require('express');
const { createTag, getTags, getAllTags } = require('../controllers/tagController');
const { verifyToken } = require('../middlewares/verfiyToken');

const router = express.Router();

router.post("/tag/create", verifyToken, createTag);
router.get("/tags", verifyToken, getTags);
router.get("/tags/all", verifyToken, getAllTags);

module.exports = router;