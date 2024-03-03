import { Schema, model, models } from 'mongoose';

import { Document } from 'mongoose';

interface IImage extends Document {
  title: string;
  TransformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object;
  Transformationurl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstname: string;
    lastname: string;
  };
  createAt?: Date;
  updateAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  TransformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  Transformationurl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;
