-- Initial migration: Create all tables for Ability Avenues
-- This migration assumes this is the first creation of all tables

-- Create table for form submissions
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_name TEXT NOT NULL,
  child_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  insurance TEXT NOT NULL,
  insurance_other TEXT,
  sms_updates BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit forms"
ON public.form_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Create referral_submissions table for clinician/referral source submissions
CREATE TABLE public.referral_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  -- Provider Information
  provider_name TEXT NOT NULL,
  provider_title TEXT NOT NULL,
  clinic_name TEXT NOT NULL,
  provider_phone TEXT NOT NULL,
  provider_email TEXT NOT NULL,
  provider_fax TEXT,
  best_contact_method TEXT NOT NULL,
  -- Client Information
  child_full_name TEXT NOT NULL,
  child_age TEXT,
  parent_name TEXT NOT NULL,
  parent_phone TEXT NOT NULL,
  parent_email TEXT,
  zip_code TEXT NOT NULL,
  primary_language TEXT,
  -- Service Details
  reason_for_referral TEXT NOT NULL,
  services_requested TEXT[] NOT NULL,
  current_therapies TEXT[],
  preferred_contact_person TEXT NOT NULL,
  -- Insurance Information
  insurance_provider TEXT NOT NULL,
  insurance_other TEXT,
  -- Additional Information
  notes TEXT,
  consent_confirmed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.referral_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to submit referrals
CREATE POLICY "Anyone can submit referrals" 
ON public.referral_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', false);

-- Create RLS policies for resumes bucket
CREATE POLICY "Anyone can upload resumes"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Anyone can view their own resume"
ON storage.objects
FOR SELECT
USING (bucket_id = 'resumes');

-- Create career_applications table
CREATE TABLE public.career_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  over_18_confirmed BOOLEAN NOT NULL DEFAULT false,
  
  -- Position Details
  position TEXT NOT NULL,
  days_available TEXT[] NOT NULL,
  times_available TEXT[] NOT NULL,
  employment_type TEXT NOT NULL,
  
  -- Resume
  resume_url TEXT NOT NULL,
  resume_filename TEXT NOT NULL,
  
  -- Additional Information
  how_heard_about TEXT,
  gender TEXT,
  race_ethnicity TEXT,
  
  -- Legal
  info_accurate_confirmed BOOLEAN NOT NULL DEFAULT false
);

-- Enable RLS
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to submit applications
CREATE POLICY "Anyone can submit career applications"
ON public.career_applications
FOR INSERT
WITH CHECK (true);
