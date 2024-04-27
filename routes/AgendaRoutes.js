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
        idAgenda: req.body.idAgenda,
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
        idAgenda: req.params.id,
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

module.exports = router;