const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Modelo de paciente .
 * @type
 */
const patientSchema = new Schema({

    patient: {
        type: String,
        required: [true, 'Nombre del paciente requerido']
    },
    documentType: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: "Sin correo"
    },
    address: {
        type: String,
        default: "Desconocido"
    },
    dentist: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    state: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Patient', patientSchema);

