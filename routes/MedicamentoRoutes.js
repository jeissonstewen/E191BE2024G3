const express = require('express');
const router = express.Router();
const Medicamento = require('../models/Medicamento');

router.get('/GetAll', (req, res) => {
    Medicamento.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error obteniendo medicamento', error: err });
        });
});

router.post('/Create', (req, res) => {
    const medicamento = new Medicamento({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        laboratorio: req.body.laboratorio,
        componenteActivo: req.body.componenteActivo,        
        descripcionMedicamento: req.body.descripcionMedicamento
    };

    medicamento
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: "Error al guardar medicamento", error: err });
        });
});

router.delete('/DeleteById/:id', (req, res) => {
    Medicamento.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error en borrarndo medicamento', error: err });
        });
});

router.patch('/UpdateById/:id', (req, res) => {
    const medicamento = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        laboratorio: req.body.laboratorio,
        componenteActivo: req.body.componenteActivo,        
        descripcionMedicamento: req.body.descripcionMedicamento
    };

    Medicamento.updateOne({ _id: req.params.id }, 
        {
            $set: medicamento
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error en actualizando medicamento', error: err });
        });
});

router.get('/GetById/:id', (req, res) => {
    Medicamento.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error obteniendo medicamento', error: err });
        });
});

router.get('/GetNombre/:nombre', (req, res) => {
    const nombreMedicamento = req.params.nombre;
    Medicamento.find({ nombre: { $regex: new RegExp(nombreMedicamento, 'i') } })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ messsage: 'error obteniendo medicamento por nombre', error: err });
        });
});


module.exports = router;
