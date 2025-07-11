import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: Date, required: true },
  link: { type: String },
  image: { type: String },
}, { timestamps: true });

export default mongoose.model('Certification', certificationSchema);
