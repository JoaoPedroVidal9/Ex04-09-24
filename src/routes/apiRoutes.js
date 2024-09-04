//Importa o módulo Router do express
//Router será utilizado para definir rotas específicas da aplicação
const router = require('express').Router();

//Importa a controller onde contém a lógica relacionada a professores
const teacherController = require('../controllers/teacherController');

//Rota POST para '/teacher'
router.post('/teacher/', teacherController.postTeacher);

module.exports = router;

// //Rota GET para '/teacher'
router.get('/teacher/',teacherController.getTeacher);

const controllerNumbers = require('../controllers/controllerNumbers');

//Rota POST dos pares para '/par/'
router.post('/par/',controllerNumbers.checkPar);

//Rota POST dos primos para '/primo/'
router.post('/primo/',controllerNumbers.checkPrimo);