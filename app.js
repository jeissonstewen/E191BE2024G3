const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const rutaAgenda = require('./routes/AgendaRoutes');
const rutaMedicamento = require('./routes/MedicamentoRoutes');

app.use(cors());
app.use(bodyParser.json());


app.use("/agenda", rutaAgenda);
app.use('/medicamento', rutaMedicamento);


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT}`);
});