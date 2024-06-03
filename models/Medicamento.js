const mongoose = require('../DB/ConectionDB');

const MedicamentoSchema = new mongoose.Schema(
    {
        codigo: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        laboratorio: {
            type: String,
            required: true
        },
        componenteActivo: {
            type: String,
            required: true
        },
        descripcionMedicamento: {
            type: String,
            required: true
        }
    },
    {
        collection: "Medicamentos",
        versionKey: false
    }
);

module.exports = mongoose.model("Medicamento", MedicamentoSchema);
