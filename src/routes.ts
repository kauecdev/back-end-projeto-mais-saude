import { Router } from 'express';
import PacientesController from './controllers/PacientesController';

const routes = Router();

routes.post('/cadastro-paciente', PacientesController.create);

export default routes;