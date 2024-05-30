const mongoose = require('../DB/ConectionDB');

const Medicamento = mongoose.Schema(
    {
        "codigoMedicamento": {
            "type": "string",
            "required": true
        },
        "nombreMedicamento": {
            "type": "string",
            "required": true
        },
        "descripcionMedicamento": {
            "type": "string",
            "required": true
        }
    },
    {
        collection: "Medicamentos",
        versionKey: false
    }
);
