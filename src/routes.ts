import { Router, Request, Response } from 'express';
import PacientesController from './controllers/PacientesController';
import MedicosController from './controllers/MedicosController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({
    success: "v1 API - Mais Saúde"
  })
});

routes.post('/cadastro-paciente', PacientesController.create);
routes.post('/cadastro-medico', MedicosController.create)

export default routes;