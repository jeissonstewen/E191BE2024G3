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

module.exports = router;
