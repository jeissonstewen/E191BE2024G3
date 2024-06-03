const express = require('express');
const router = express.Router();
const Agenda = require('../models/Agenda');

router.get('/GetAll', (req, res) => {
    Agenda.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error obteniendo agenda', error: err });
        });
});

router.post('/Create', (req, res) => {
    const agenda = new Agenda({
        tipoAgenda: req.body.tipoAgenda,
        estadoAgenda: req.body.estadoAgenda,
        fechaAgenda: req.body.fechaAgenda,
        horaInicio: req.body.horaInicio,
        horaFin: req.body.horaFin,
        medico: req.body.medico,
        consultorio: req.body.consultorio,
    });

    agenda
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: "Error al guardar agenda", error: err });
        });
});

router.delete('/Delete/:id', (req, res) => {
    Agenda.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error en borrarndo agenda', error: err });
        });
});

router.patch('/Update/:id', (req, res) => {
    const agenda = {
        tipoAgenda: req.body.tipoAgenda,
        estadoAgenda: req.body.estadoAgenda,
        fechaAgenda: req.body.fechaAgenda,
        horaInicio: req.body.horaInicio,
        horaFin: req.body.horaFin,
        medico: req.body.medico,
        consultorio: req.body.consultorio,
    };

    Agenda.updateOne({ _id: req.params.id }, 
        {
            $set: agenda
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error en actualizar agenda', error: err });
        });
});

router.get('/GetById/:id', (req, res) => {
    Agenda.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error obteniendo agenda', error: err });
        });
});

router.get('/GetByIdMedico/:idMedico', (req, res) => {
    Agenda.find({ 'medico.idMedico': req.params.idMedico })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error obteniendo agenda por medico', error: err });
        });
});

router.get('/GetByIdConsultorio/:idConsultorio', (req, res) => {
    Agenda.find({ 'consultorio.idConsultorio': req.params.idConsultorio })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error obteniendo agenda por consultorio', error: err });
        });
});

router.get('/GetByDate/:date', (req, res) => {
    const date = req.params.date;
    Agenda.find({ fechaAgenda: date })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error obteniendo agenda por fecha', error: err });
        });
});

router.get('/GetByDateHour/:date/:hour', (req, res) => {
    const date = req.params.date;
    const hour = req.params.hour;
    Agenda.find({ fechaAgenda: date, horaInicio: hour })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error obteniendo agenda por fecha y hora', error: err });
        });
});

router.put('/UpdateStatus/:id', (req, res) => {
    const agendaId = req.params.id;
    const newStatus = req.body.estadoAgenda; // El nuevo estado se enviará en el cuerpo de la solicitud

    Agenda.findByIdAndUpdate(
        agendaId,
        { estadoAgenda: newStatus },
        { new: true } // Esta opción devuelve el documento actualizado
    )
    .then((updatedAgenda) => {
        if (!updatedAgenda) {
            return res.status(404).json({ message: 'Agenda no encontrada' });
        }
        res.json(updatedAgenda);
    })
    .catch((err) => {
        res.status(500).json({ message: 'Error actualizando la agenda', error: err });
    });
});

router.get('/GetByMedico/:nombreMedico', (req, res) => {
    const nombreMedico = req.params.nombreMedico;
    Agenda.find({ 'medico.nombres': nombreMedico })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error obteniendo agenda por nombre de medico', error: err });
        });
});


module.exports = router;
