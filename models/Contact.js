import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  summary: { type: String }, // AI-generated summary
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
