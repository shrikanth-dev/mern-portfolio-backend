import Testimonial from '../models/Testimonial.js';

export const createTestimonial = async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    console.error('❌ Error creating testimonial:', error);
    res.status(500).json({ message: 'Server error creating testimonial' });
  }
};

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    console.error('❌ Error fetching testimonials:', error);
    res.status(500).json({ message: 'Server error fetching testimonials' });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: 'Testimonial deleted' });
  } catch (error) {
    console.error('❌ Error deleting testimonial:', error);
    res.status(500).json({ message: 'Server error deleting testimonial' });
  }
};
