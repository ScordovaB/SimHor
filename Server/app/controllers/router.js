const express = require('express');
const router = express.Router();

const Horario = require('../routes/horario');
const courseRouter = require('../routes/courses');
const Users = require('../routes/usuarios');

router.get('/', (req, res) => {
    res.send('Proyecto Simulador de Horario');
});
router.use('/courses',courseRouter);
router.use('/schedule', Horario);
router.use('/users', Users);
// rutas /profes y /admin



const path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'..', 'index.html'));
  });


module.exports = router;
