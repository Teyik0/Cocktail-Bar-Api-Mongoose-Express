import { Request, Response } from 'express';
import { Cocktail } from '../models/cocktail.model';

export const getAllCocktails = async (req: Request, res: Response) => {
  try {
    const cocktails = await Cocktail.find();
    res.status(200).json(cocktails);
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la récupération des cocktails',
    });
  }
};

export const getCocktailById = async (req: Request, res: Response) => {
  try {
    const cocktail = await Cocktail.findById(req.params.id);
    res.status(200).json(cocktail);
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la récupération du cocktail',
    });
  }
};

export const createCocktail = async (req: Request, res: Response) => {
  try {
    const cocktail = new Cocktail(req.body);
    await cocktail.save();
    res.status(201).json(cocktail);
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la création du cocktail',
    });
  }
};

export const updateCocktail = async (req: Request, res: Response) => {
  try {
    const cocktail = await Cocktail.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(cocktail);
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la modification du cocktail',
    });
  }
};

export const deleteCocktail = async (req: Request, res: Response) => {
  try {
    await Cocktail.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Le cocktail a bien été supprimé',
    });
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la suppression du cocktail',
    });
  }
};
