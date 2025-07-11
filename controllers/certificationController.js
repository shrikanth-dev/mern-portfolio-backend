import Certification from '../models/Certification.js';

export const createCertification = async (req, res) => {
  try {
    const cert = new Certification(req.body);
    await cert.save();
    res.status(201).json(cert);
  } catch (error) {
    console.error('❌ Error creating certification:', error);
    res.status(500).json({ message: 'Server error creating certification' });
  }
};

export const getCertifications = async (req, res) => {
  try {
    const certs = await Certification.find().sort({ date: -1 });
    res.json(certs);
  } catch (error) {
    console.error('❌ Error fetching certifications:', error);
    res.status(500).json({ message: 'Server error fetching certifications' });
  }
};

export const deleteCertification = async (req, res) => {
  try {
    await Certification.findByIdAndDelete(req.params.id);
    res.json({ message: 'Certification deleted' });
  } catch (error) {
    console.error('❌ Error deleting certification:', error);
    res.status(500).json({ message: 'Server error deleting certification' });
  }
};
