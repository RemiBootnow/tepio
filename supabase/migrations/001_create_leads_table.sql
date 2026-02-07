-- Create leads table for storing form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Form data
  service TEXT NOT NULL,
  housing_type TEXT NOT NULL,
  house_age TEXT NOT NULL,
  ownership_type TEXT NOT NULL,
  heating_type TEXT NOT NULL,
  heating_budget TEXT NOT NULL,

  -- Contact information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  city TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT false,

  -- Lead management
  status TEXT NOT NULL DEFAULT 'new',

  -- Tracking / Attribution
  source_url TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_service ON leads(service);
CREATE INDEX IF NOT EXISTS idx_leads_postal_code ON leads(postal_code);

-- Enable Row Level Security (for future client access)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insert from anonymous users (for form submission)
CREATE POLICY "Allow anonymous insert" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Only authenticated users can read (for future admin/client access)
CREATE POLICY "Allow authenticated read" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Comment on table
COMMENT ON TABLE leads IS 'Stores lead form submissions from the estimation forms';
