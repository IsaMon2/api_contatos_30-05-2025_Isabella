const express = require('express');
const dotenv = require('dotenv');
const conectarbanco = require('./config/db');
const contatoRoutes = require('./routes/contatoRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/contatos', contatoRoutes);

app.get("/", (req, res) => {
  res.send("API da Isabella está funcionando! 💖");
});

conectarbanco();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
