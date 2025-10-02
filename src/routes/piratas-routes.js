const { getPiratas, getPirataById, createPirata, updatePirata, deletePirata } = require ('../controllers/piratas-controller')
const router = require('express').Router();
router.get('/piratas', getPiratas)
router.get('/piratas/:id', getPirataById)
router.post('/piratas', createPirata)
router.delete('/piratas/:id', deletePirata)

module.exports = router