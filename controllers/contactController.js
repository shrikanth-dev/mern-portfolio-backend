import Contact from '../models/Contact.js';
import openai from '../utils/openai.js';

export const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    console.log('🪐 Received contact form submission:', { name, email, message });

    let summary;
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-preview',
        messages: [
          { role: 'system', content: 'You are a summarizer that returns concise summaries in 1-2 lines.' },
          { role: 'user', content: `Summarize this message:\n\n${message}` }
        ]
      });
      summary = completion.choices[0].message.content;
    } catch (error) {
      console.error("❌ OpenAI summarization failed:", error.message);
      summary = "AI summarization unavailable currently.";
    }

    console.log('✅ AI Summary (or fallback):', summary);

    const newMessage = await Contact.create({
      name,
      email,
      message,
      summary,
    });

    console.log('✅ Message saved to MongoDB:', newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('❌ Error in createMessage:', error);
    res.status(500).json({
      error: error.message || 'Server error while processing contact form.',
    });
  }
};

  
