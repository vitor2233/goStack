import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Vitão cantor' }));

export default routes;
