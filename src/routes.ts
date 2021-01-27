import { Router } from 'express';
import PacientesController from './controllers/PacientesController';

const routes = Router();

routes.get('/', PacientesController.index);
routes.post('/cadastro-paciente', PacientesController.create);

export default routes;