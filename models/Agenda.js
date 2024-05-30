const mongoose = require('../DB/ConectionDB');

const AgendaSchema = new mongoose.Schema(
    {
        tipoAgenda: {
            type: String,
            required: true
        },
        estadoAgenda: {
            type: String,
            required: true
        },
        fechaAgenda: {
            type: Date,
            required: true
        },
        horaInicio: {
            type: String,
            required: true,
            // validate: {
            //     validator: function(v) {
            //         // Validate time format HH:MM
            //         return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
            //     },
            //     message: props => `${props.value} is not a valid time format!`
            // }
        },
        horaFin: {
            type: String,
            required: true,
            // validate: {
            //     validator: function(v) {
            //         // Validate time format HH:MM
            //         return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
            //     },
            //     message: props => `${props.value} is not a valid time format!`
            // }
        },
        medico: {
            idMedico: {
                type: String,
                required: true
            },
            codigo: {
                type: String,
                required: true
            },
            nombres: {
                type: String,
                required: true
            },
            apellidos: {
                type: String,
                required: true
            },
            tipoDocumento: {
                type: String,
                required: true
            },
            documento: {
                type: Number,
                required: true
            },
            estado: {
                type: String,
                required: true
            },
            especialidad: {
                type: String,
                required: true
            }
        },
        consultorio: {
            idConsultorio: {
                type: String,
                required: true
            },
            codigoConsultorio: {
                type: String,
                required: true
            },
            descripcionConsultorio: {
                type: String,
                required: true
            },
            sede: {
                idSede: {
                    type: String,
                    required: true
                },
                nombreSede: {
                    type: String,
                    required: true
                },
                direccionSede: {
                    type: String,
                    required: true
                },
                departamento: {
                    type: String,
                    required: true
                },
                municipio: {
                    type: String,
                    required: true
                },
                codigoUbicacion: {
                    type: String,
                    required: true
                }
            }
        }
    },
    {
        collection: 'Agendas',
        versionKey: false
    }
);

module.exports = mongoose.model('Agenda', AgendaSchema);
