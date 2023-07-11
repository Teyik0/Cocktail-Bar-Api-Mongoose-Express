import * as mongoose from 'mongoose';

const barSchema = new mongoose.Schema({
  location: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
  },
  adresse: { type: String, required: true },
  cocktails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cocktail' }],
});

export const Bar = mongoose.model('Bar', barSchema);
