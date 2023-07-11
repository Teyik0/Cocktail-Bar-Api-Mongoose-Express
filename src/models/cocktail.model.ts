import mongoose, { Model, Schema } from 'mongoose';

const cocktailSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  price: { type: Number, required: true },
  alcool: { type: Boolean, required: true },
  ingredients: { type: String, required: true },
  description: { type: String, required: true },
});

export const Cocktail = mongoose.model('Cocktail', cocktailSchema);
