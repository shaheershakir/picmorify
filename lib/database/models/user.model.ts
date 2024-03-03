import { Schema, model, models } from 'mongoose';

import { Document } from 'mongoose';

interface IUser extends Document {
  clerkId: string;
  email: string;
  userName: string;
  photo: string;
  firstname: string;
  lastname: string;
  planId?: string;
  creditBalance?: number;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  planId: { type: String, default: '1' },
  creditBalance: { type: Number, default: 10 }
});

const User = models?.User || model('User', UserSchema);

export default User;
