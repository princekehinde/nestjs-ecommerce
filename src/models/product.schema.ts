import * as mongoose from 'mongoose';

export const ProuctSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  description: String,
  image: String,
  created: {
    type: Date,
    default: Date.now,
  },
});
