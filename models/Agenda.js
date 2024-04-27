const mongoose = require('../DB/ConectionDB');

const Agenda = mongoose.Schema(
    {
        "tipoAgenda": {
            "type": "string",
            "required": true
        },
        "estadoAgenda": {
            "type": "string",
            "required": true
        },
        "fechaAgenda": {
            "type": "date",
            "required": true
        },
        "horaInicio": {
            "type": "string",
            "required": true
        },
        "horaFin": {
            "type": "string",
            "required": true
        },
        "medico": {
            "idMedico": {
                "type": "String",
                "unique": true,
                "required": true
            },
            "nombreMedico": {
                "type": "string",
                "required": true
            },
            "apellidoMedico": {
                "type": "string",
                "required": true
            },
            "especialidad": {
                "idEspecialidad": {
                    "type": "String",
                    "unique": true,
                    "required": true
                },
                "nombreEspecialidad": {
                    "type": "string",
                    "required": true
                },
                "codigoEspecialidad": {
                    "type": "string",
                    "required": true
                }
            }
        },
        "consultorio": {
            "idConsultorio": {
                "type": "String",
                "unique": true,
                "required": true
            },
            "sede": {
                "idSede": {
                    "type": "string",
                    "unique": true,
                    "required": true
                },
                "nombreSede": {
                    "type": "string",
                    "required": true
                },
                "direccionSede": {
                    "type": "string",
                    "required": true
                },
                "ubicacion": {
                    "idUbicacion": {
                        "type": "String",
                        "required": true
                    },
                    "nombreUbicacion": {
                        "type": "string",
                        "required": true
                    }
                }
            }
        }
    },
    {
        collection: "Agendas",
        versionKey: false
    }
);

module.exports = mongoose.model("Agenda", Agenda);