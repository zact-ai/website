import express from 'express';
import cors from 'cors';
import { LoopsClient } from 'loops';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Loops client
const loops = new LoopsClient(process.env.LOOPS_API_KEY);

// Waitlist API endpoint
app.post('/api/waitlist', async (req, res) => {
  try {
    const { email, company, role, source, timestamp } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Create contact in Loops.so
    const response = await loops.createContact(email, {
      firstName: company ? company.split(' ')[0] : '',
      lastName: company ? company.split(' ').slice(1).join(' ') : '',
      properties: {
        company,
        role,
        source,
        timestamp
      }
    });

    console.log('Contact created successfully:', response.id);
    return res.status(200).json({ 
      success: true, 
      message: 'Contact created successfully',
      id: response.id 
    });

  } catch (error) {
    console.error('Server error:', error, JSON.stringify(error));
    
    // Handle rate limiting
    if (error.name === 'RateLimitExceededError') {
      return res.status(429).json({ 
        error: 'Rate limit exceeded',
        limit: error.limit,
        remaining: error.remaining
      });
    }

    // Handle "email already on list" as success (LoopsClient APIError)
    if (
      (error.message && (error.message.includes('already on list') || error.message.includes('409')))
      || (error.json && error.json.message && error.json.message.includes('already on list'))
    ) {
      console.log('Email already on list - treating as success');
      return res.status(200).json({ 
        success: true, 
        message: 'Email already on list',
        id: 'existing'
      });
    }

    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 