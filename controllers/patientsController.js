const patientSchema = require("../models/patient");

/**
 * creamos el paciente en la base de datos
 *
 * @version 1.0.0 2022-11-13
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
module.exports.create = async (req,res)=>{
    const patient = patientSchema(req.body);
    patient
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

/**
 * Leemos los pacientes en la base de datos
 *
 * @version 1.0.0 2022-11-13
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
module.exports.read = async (req,res)=>{
    patientSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

/**
 * Encontreamos un paciente por id
 *
 * @version 1.0.0 2022-11-13
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
module.exports.find = async (req,res)=>{
    const {id} = req.params;
    patientSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

/**
 * Encontreamos un paciente por id
 *
 * @version 1.0.0 2022-11-13
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
module.exports.update = async (req,res)=>{
    const {id} = req.params;
    const {patient, documentType, document, email, address, dentist, bloodType, treatment, price, state} = req.body;
    patientSchema
        .updateOne({ _id: id}, { $set: {patient, documentType, document, email, address, dentist, bloodType, treatment, price, state} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};

/**
 * Encontreamos un paciente por id
 *
 * @version 1.0.0 2022-07-31
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
module.exports.delete = async (req,res)=>{
    const {id} = req.params;
    patientSchema
        .remove({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};