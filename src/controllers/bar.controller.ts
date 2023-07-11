import { Request, Response } from 'express';
import { Bar } from '../models/bar.model';

export const getAllBars = async (req: Request, res: Response) => {
  try {
    const bars = await Bar.find();
    res.status(200).json(bars);
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la récupération des bars',
    });
  }
};

export const getBarById = async (req: Request, res: Response) => {
  try {
    const bar = await Bar.findById(req.params.id).populate('cocktails');
    res.status(200).json(bar);
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la récupération du bar',
    });
  }
};

export const createBar = async (req: Request, res: Response) => {
  try {
    const bar = new Bar(req.body);
    await bar.save();
    res.status(201).json(bar);
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la création du bar',
    });
  }
};

export const updateBar = async (req: Request, res: Response) => {
  try {
    const bar = await Bar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(bar);
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la modification du cocktail',
    });
  }
};

export const deleteBar = async (req: Request, res: Response) => {
  try {
    await Bar.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Le bar a bien été supprimé',
    });
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la suppression du bar',
    });
  }
};

export const barHasMyCocktail = async (req: Request, res: Response) => {
  try {
    const cocktailId = req.params.id;
    const bar = await Bar.find({ cocktails: cocktailId });
    res.status(200).json(bar);
  } catch (error) {
    res.status(400).json({
      error: 'Une erreur est survenue lors de la recherche du cocktail',
    });
  }
};

export const nearestBar = async (req: Request, res: Response) => {
  try {
    const userLat = parseFloat(req.query.lat as string);
    const userLon = parseFloat(req.query.lon as string);

    const bars = await Bar.find();

    let nearestBar;
    let shortestDistance = Infinity;

    bars.forEach((bar) => {
      const barLat = bar.location!.lat;
      const barLon = bar.location!.lon;

      // Calcul de la distance entre l'utilisateur et le bar (utilisation de la formule de la distance euclidienne)
      const distance = Math.sqrt(
        Math.pow(userLat - barLat, 2) + Math.pow(userLon - barLon, 2)
      );

      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestBar = bar;
      }
    });

    res.status(200).json(nearestBar);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error:
        'Une erreur est survenue lors de la recherche du bar le plus proche',
    });
  }
};
