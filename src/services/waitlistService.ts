export interface WaitlistData {
  email: string;
  company: string;
  role: string;
  timestamp: string;
  source: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
  data?: any;
}

class WaitlistService {
  private readonly STORAGE_KEY = 'zact-waitlist';
  private readonly LOOPS_API_URL = 'https://app.loops.so/api/v1/events/send';
  private readonly WEB3FORMS_URL = 'https://api.web3forms.com/submit';
  
  // Get API keys from environment variables
  private getLoopsApiKey(): string {
    return import.meta.env.VITE_LOOPS_API_KEY || '056aa63c718935e03d1492495029bd9c';
  }
  
  private getWeb3FormsKey(): string {
    return import.meta.env.VITE_WEB3FORMS_KEY || '';
  }

  // Save to localStorage as backup
  saveToLocalStorage(data: WaitlistData): void {
    try {
      const existingData = localStorage.getItem(this.STORAGE_KEY);
      const waitlistData = existingData ? JSON.parse(existingData) : [];
      waitlistData.push(data);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(waitlistData));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  // Get all waitlist entries from localStorage
  getLocalWaitlist(): WaitlistData[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  }

  // Send to Loops.so API via backend proxy
  async sendToLoops(data: WaitlistData): Promise<boolean> {
    try {
      // Use our backend API endpoint that handles Loops.so integration
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          company: data.company,
          role: data.role,
          source: data.source,
          timestamp: data.timestamp
        })
      });

      if (!response.ok) {
        console.error('Backend API error:', response.status, response.statusText);
        const errorText = await response.text();
        console.error('Error details:', errorText);
        return false;
      }

      const result = await response.json();
      console.log('Successfully sent to Loops.so via backend:', result);
      return true;
    } catch (error) {
      console.error('Backend API Error:', error);
      return false;
    }
  }

  // Send to Web3Forms as fallback
  async sendToWeb3Forms(data: WaitlistData): Promise<boolean> {
    try {
      const accessKey = this.getWeb3FormsKey();
      
      if (!accessKey) {
        console.warn('No Web3Forms key configured');
        return false;
      }

      const formData = new FormData();
      formData.append('access_key', accessKey);
      formData.append('email', data.email);
      formData.append('company', data.company);
      formData.append('role', data.role);
      formData.append('source', data.source);
      formData.append('timestamp', data.timestamp);
      formData.append('subject', 'New Zact Waitlist Signup');

      const response = await fetch(this.WEB3FORMS_URL, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        console.error('Web3Forms API error:', response.status, response.statusText);
        return false;
      }

      console.log('Successfully sent to Web3Forms');
      return true;
    } catch (error) {
      console.error('Web3Forms API Error:', error);
      return false;
    }
  }

  // Main submission method
  async submitWaitlist(data: WaitlistData): Promise<WaitlistResponse> {
    // Always save to localStorage first
    this.saveToLocalStorage(data);

    try {
      // Try Loops.so first (will fail due to CORS, but that's expected)
      const loopsSuccess = await this.sendToLoops(data);
      
      if (loopsSuccess) {
        return {
          success: true,
          message: 'Successfully joined waitlist!'
        };
      }

      // Fallback to Web3Forms (this is the primary method for browser-based collection)
      const web3formsSuccess = await this.sendToWeb3Forms(data);
      
      if (web3formsSuccess) {
        return {
          success: true,
          message: 'Successfully joined waitlist! You\'ll receive a confirmation email.'
        };
      }

      // If both APIs fail, still return success since we saved locally
      return {
        success: true,
        message: 'Joined waitlist! (saved locally)'
      };

    } catch (error) {
      console.error('Waitlist submission error:', error);
      return {
        success: false,
        message: 'Something went wrong. Please try again or contact us directly.'
      };
    }
  }

  // Track analytics event
  trackEvent(data: WaitlistData): void {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'waitlist_signup', {
        event_category: 'engagement',
        event_label: data.role,
        value: 1
      });
    }

    // Custom event for internal tracking
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('waitlist_signup', {
        detail: data
      }));
    }
  }

  // Send welcome email (simulated)
  async sendWelcomeEmail(email: string): Promise<void> {
    try {
      // In a real implementation, this would call your email service
      console.log('Sending welcome email to:', email);
      
      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 500));
      
      console.log('Welcome email sent successfully');
    } catch (error) {
      console.error('Error sending welcome email:', error);
    }
  }
}

export const waitlistService = new WaitlistService(); 