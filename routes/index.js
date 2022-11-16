var express = require('express');
const patientSchema = require("../models/patient");
var router = express.Router();

// Url de la api para su consumo de sus endPoints
const url  = "http://localhost:9000/api"
const axios = require('axios');

/**
 * Pagina de Home
 * renderizamos la pagina con los pacientes leidos, mediante el consumo de api(/api/read)
 *
 * @version 1.0.0 2022-11-13
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
router.get('/', async(req, res, next) => {
  await axios.get(`${url}/read`)
      .then((result) =>{res.render('index', { data: result.data });})
      .catch((error) => res.json({ message: error }));
});

/**
 * Pagina del formulario
 *
 * @version 1.0.0 2022-11-13
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
router.get('/create', function(req, res, next) {
  res.render('create',{ user: 'register' });
});

/**
 * Accion submit del formulario
 *
 * @version 1.0.0 2022-11-13
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
router.post('/read', async(req, res)=>{
    const {name,surName,email,address,blood,Type,dentist,treatment,document,documentType,price,state} = req.body;
    const BODY ={patient: name+" "+surName,email,address,bloodType:blood+""+Type,dentist,treatment,document,documentType,price,state};
    await axios.post(`${url}/create`,BODY)
        .then(res.redirect("/"))
        .catch((error) => res.json({ message: error }));
});

/**
 * Pagina del formulario Actualizar
 *
 * @version 1.0.0 2022-11-13
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
router.get('/update/:id', async(req, res, next) =>{
    const {id} = req.params;
    await axios.get(`${url}/find/${id}`)
        .then((data) => {
            res.render('create', {user: data.data});
        })
        .catch((error) => res.json({ message: error }));
    });

/**
 * Accion submit para formulario Actualizar
 *
 * @version 1.0.0 2022-11-13
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
router.post('/update', async(req, res)=>{
    const {id,name,surName,email,address,blood,Type,dentist,treatment,document,documentType,price,state} = req.body;
    const BODY ={patient: name+" "+surName,email,address,bloodType:blood+""+Type,dentist,treatment,document,documentType,price,state};
    await axios.put(`${url}/update/${id}`,BODY)
        .then(res.redirect("/"))
        .catch((error) => res.json({ message: error }));
});



/**
 * Home renderizado mediante sin consumo de api
 *
 * @version 1.0.0 2022-11-13
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
router.get('/a', function(req, res, next) {
  patientSchema
      .find()
      .then((data) =>res.render('index', { data: data }))
      .catch((error) => res.json({ message: error }));
});


module.exports = router;