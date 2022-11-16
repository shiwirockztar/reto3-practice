var express = require('express');
var router = express.Router();
const patientsController = require('../controllers/patientsController');

/**
 * @swagger
 * components:
 *  responses:
 *    Unauthorized:
 *      description: (Unauthorized) No hay autorizacion para llamar al servicio
 *    BadRequest:
 *      description: (Bad Request) Los datos enviados son incorrectos o hay datos obligatorios no enviados
 *    NotFound:
 *      description: (NotFound) No se encuentra informacion
 *    ServerError:
 *        description: Error en el servidor
 *  schemas:
 *      Patient:
 *        type: object
 *        properties:
 *          patient:
 *            type: string
 *            description: nombre del paciente
 *          documentType:
 *            type: string
 *            description: tipo de documento
 *          document:
 *            type: string
 *            description: numero de documento
 *          email:
 *            type: string
 *            description: correo
 *          address:
 *            type: string
 *            description: direccion
 *          dentist:
 *            type: string
 *            description: dentista
 *          bloodType:
 *            type: string
 *            description: tipo de sangre
 *          treatment:
 *            type: string
 *            description: tratamiento
 *          price:
 *            type: number
 *            description: precio de la consulta
 *          state:
 *            type: number
 *            description: estado
 *        required:
 *          - patient
 *          - documentType
 *          - document
 *          - dentist
 *          - bloodType
 *          - treatment
 *          - state
 *          - price
 *        example:
 *          patient: Nicolas tesla
 *          documentType: cc
 *          document: 1034.013.321
 *          email: Shiwirockztar
 *          address: cll 72 36-89
 *          dentist: emilio
 *          bloodType: O+
 *          treatment: endodoncia
 *          price: 100000
 *          state: 7980
 * tags:
 *  name: pacientes
 *  description: Maneja la informacion de los pacientes
 */

// create user direct
const patientSchema = require("../models/patient");
router.post ("/patient", (req, res) =>{
  const patient = patientSchema(req.body);
  patient
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

/**
 * @swagger
 * /api/create:
 *  post:
 *    summary: crear paciente
 *    tags: [pacientes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Patient'
 *    responses:
 *      200:
 *        description: Informacion insertada exitosamente!
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      500:
 *        $ref: '#/components/responses/ServerError'
 */
router.post('/create', patientsController.create );

/**
 * @swagger
 * /api/read:
 *  get:
 *    summary: leer pacientes
 *    tags: [pacientes]
 *    responses:
 *      200:
 *        description: Obtencion de los datos!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Patient'
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      500:
 *        $ref: '#/components/responses/ServerError'
 */
router.get('/read', patientsController.read );

/**
 * @swagger
 * /api/find/{id}:
 *  get:
 *    summary: filtrar paciente por id
 *    tags: [pacientes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del paciente
 *    responses:
 *      200:
 *        description: Obtencion del paciente por id!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Patient'
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      500:
 *        $ref: '#/components/responses/ServerError'
 */
router.get('/find/:id', patientsController.find );

/**
 * @swagger
 * /api/update/{id}:
 *  put:
 *    summary: actualizar datos del paciente por id
 *    tags: [pacientes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del paciente
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Patient'
 *    responses:
 *      200:
 *        description: Informacion insertada exitosamente!
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      500:
 *        $ref: '#/components/responses/ServerError'
 */
router.put('/update/:id', patientsController.update );

/**
 * @swagger
 * /api/delete/{id}:
 *  delete:
 *    summary: borrar paciente por id
 *    tags: [pacientes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del paciente
 *    responses:
 *      200:
 *        description: Borrado!
 *      400:
 *        $ref: '#/components/responses/BadRequest'
 *      401:
 *        $ref: '#/components/responses/Unauthorized'
 *      404:
 *        $ref: '#/components/responses/NotFound'
 *      500:
 *        $ref: '#/components/responses/ServerError'
 */
router.delete('/delete/:id', patientsController.delete );

module.exports = router;
