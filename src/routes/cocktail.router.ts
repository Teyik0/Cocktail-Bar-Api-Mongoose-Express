import { Router } from 'express';
import {
  createCocktail,
  deleteCocktail,
  getAllCocktails,
  getCocktailById,
  updateCocktail,
} from '../controllers/cocktail.controller';

const cocktailRouter = Router();

cocktailRouter.get('/', getAllCocktails);
cocktailRouter.get('/:id', getCocktailById);
cocktailRouter.post('/', createCocktail);
cocktailRouter.put('/:id', updateCocktail);
cocktailRouter.delete('/:id', deleteCocktail);

export default cocktailRouter;
