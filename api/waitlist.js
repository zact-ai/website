import { LoopsClient } from 'loops';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, company, role, source, timestamp } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Initialize Loops client
    const loops = new LoopsClient(process.env.LOOPS_API_KEY);

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

    if (response.success) {
      console.log('Contact created successfully:', response.id);
      return res.status(200).json({ 
        success: true, 
        message: 'Contact created successfully',
        id: response.id 
      });
    } else {
      console.log('Contact creation failed:', response);
      return res.status(400).json({ 
        success: false, 
        message: response.message || 'Failed to create contact' 
      });
    }

  } catch (error) {
    console.error('Server error:', error);
    
    // Handle rate limiting
    if (error.name === 'RateLimitExceededError') {
      return res.status(429).json({ 
        error: 'Rate limit exceeded',
        limit: error.limit,
        remaining: error.remaining
      });
    }

    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
} 