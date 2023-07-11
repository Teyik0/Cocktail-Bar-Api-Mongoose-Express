import { Router } from 'express';

import {
  barHasMyCocktail,
  createBar,
  deleteBar,
  getAllBars,
  getBarById,
  updateBar,
} from '../controllers/bar.controller';

const barRouter = Router();

barRouter.get('/', getAllBars);
barRouter.get('/:id', getBarById);
barRouter.post('/', createBar);
barRouter.put('/:id', updateBar);
barRouter.delete('/:id', deleteBar);
barRouter.get('/cocktail/:id', barHasMyCocktail);

export default barRouter;
