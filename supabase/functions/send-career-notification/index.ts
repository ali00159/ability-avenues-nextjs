import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CareerFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zipCode: string;
  over18Confirmed: boolean;
  position: string;
  daysAvailable: string[];
  timesAvailable: string[];
  employmentType: string;
  howHeardAbout?: string;
  gender?: string;
  raceEthnicity?: string;
  resumePath: string;
  resumeFilename: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: CareerFormData = await req.json();

    console.log("Sending career application notification for:", formData.email);

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: #0EA5E9;
      background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%);
      color: white;
      padding: 30px;
      border-radius: 12px 12px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
    }
    .content {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 0 0 12px 12px;
    }
    .section {
      background: white;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      border-left: 4px solid #0EA5E9;
    }
    .section h2 {
      color: #0EA5E9;
      font-size: 18px;
      margin: 0 0 15px 0;
      border-bottom: 2px solid #0EA5E9;
      padding-bottom: 8px;
    }
    .field {
      margin-bottom: 12px;
      padding: 8px 0;
    }
    .field-label {
      font-weight: 600;
      color: #4b5563;
      display: inline-block;
      min-width: 180px;
    }
    .field-value {
      color: #1f2937;
    }
    ul {
      margin: 10px 0;
      padding-left: 20px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎉 New Career Application</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.95;">Ability Avenues</p>
  </div>
  
  <div class="content">
    <div class="section">
      <h2>👤 Personal Information</h2>
      <div class="field">
        <span class="field-label">Name:</span>
        <span class="field-value">${formData.firstName} ${formData.lastName}</span>
      </div>
      <div class="field">
        <span class="field-label">Email:</span>
        <span class="field-value">${formData.email}</span>
      </div>
      <div class="field">
        <span class="field-label">Phone:</span>
        <span class="field-value">${formData.phone}</span>
      </div>
      <div class="field">
        <span class="field-label">ZIP Code:</span>
        <span class="field-value">${formData.zipCode}</span>
      </div>
      <div class="field">
        <span class="field-label">Over 18:</span>
        <span class="field-value">${formData.over18Confirmed ? "✓ Yes" : "No"}</span>
      </div>
    </div>

    <div class="section">
      <h2>💼 Position Details</h2>
      <div class="field">
        <span class="field-label">Position:</span>
        <span class="field-value">${formData.position}</span>
      </div>
      <div class="field">
        <span class="field-label">Days Available:</span>
        <ul style="margin-top: 5px;">
          ${formData.daysAvailable.map(day => `<li>${day}</li>`).join('')}
        </ul>
      </div>
      <div class="field">
        <span class="field-label">Times Available:</span>
        <ul style="margin-top: 5px;">
          ${formData.timesAvailable.map(time => `<li>${time}</li>`).join('')}
        </ul>
      </div>
      <div class="field">
        <span class="field-label">Employment Type:</span>
        <span class="field-value">${formData.employmentType}</span>
      </div>
    </div>

    ${formData.howHeardAbout || formData.gender || formData.raceEthnicity ? `
    <div class="section">
      <h2>ℹ️ Additional Information</h2>
      ${formData.howHeardAbout ? `
      <div class="field">
        <span class="field-label">How They Heard:</span>
        <span class="field-value">${formData.howHeardAbout}</span>
      </div>
      ` : ''}
      ${formData.gender ? `
      <div class="field">
        <span class="field-label">Gender:</span>
        <span class="field-value">${formData.gender}</span>
      </div>
      ` : ''}
      ${formData.raceEthnicity ? `
      <div class="field">
        <span class="field-label">Race/Ethnicity:</span>
        <span class="field-value">${formData.raceEthnicity}</span>
      </div>
      ` : ''}
    </div>
    ` : ''}

    <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; text-align: center; color: #6c757d; font-size: 14px;">
      <p style="margin: 0;">This application was submitted via the Ability Avenues careers page.</p>
    </div>
  </div>
</body>
</html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Ability Avenues Careers <careers@abilityavenues.com>",
      to: ["murad.ali@abilityavenues.com"],
      subject: `New Career Application: ${formData.firstName} ${formData.lastName} - ${formData.position}`,
      html: emailHtml,
    });

    console.log("Career notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-career-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
