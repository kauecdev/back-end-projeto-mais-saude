import express from 'express';

const PORT = process.env.PORT || 8091;

const api = express();

api.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));