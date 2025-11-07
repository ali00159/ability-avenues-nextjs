import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ReferralFormData {
  providerName: string;
  providerTitle: string;
  clinicName: string;
  providerPhone: string;
  providerEmail: string;
  providerFax?: string;
  bestContactMethod: string;
  childFullName: string;
  childAge?: string;
  parentName: string;
  parentPhone: string;
  parentEmail?: string;
  zipCode: string;
  primaryLanguage?: string;
  reasonForReferral: string;
  servicesRequested: string[];
  currentTherapies: string[];
  otherTherapy?: string;
  preferredContactPerson: string;
  insuranceProvider: string;
  insuranceOther?: string;
  notes?: string;
  consentConfirmed: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ReferralFormData = await req.json();
    
    console.log("Processing referral submission:", {
      provider: formData.providerName,
      child: formData.childFullName
    });

    // Send notification email to Ability Avenues
    const emailResponse = await resend.emails.send({
      from: "Ability Avenues Referrals <referrals@abilityavenues.com>",
      to: ["info@abilityavenues.com"],
      subject: `New Referral from ${formData.providerName} - ${formData.clinicName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 700px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #F59E0B;
                color: white;
                padding: 30px;
                border-radius: 12px 12px 0 0;
                text-align: center;
              }
              .content {
                background: #fffef8;
                padding: 30px;
                border: 1px solid #fde68a;
                border-top: none;
                border-radius: 0 0 12px 12px;
              }
              .section {
                background: white;
                padding: 20px;
                margin-bottom: 20px;
                border-radius: 8px;
                border: 1px solid #fde68a;
              }
              .section h2 {
                color: #F59E0B;
                font-size: 18px;
                margin: 0 0 15px 0;
                border-bottom: 2px solid #F59E0B;
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
              .badge {
                display: inline-block;
                padding: 4px 12px;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 600;
                background: #fef3c7;
                color: #92400e;
              }
              .alert {
                background: #fef3c7;
                border-left: 4px solid #f59e0b;
                padding: 15px;
                border-radius: 8px;
                margin-top: 20px;
              }
              ul {
                margin: 10px 0;
                padding-left: 20px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🔔 New Professional Referral</h1>
              <p style="margin: 10px 0 0 0; font-size: 14px;">Ability Avenues Referral Portal</p>
            </div>
            
            <div class="content">
              <div class="section">
                <h2>👨‍⚕️ Referring Provider Information</h2>
                <div class="field">
                  <span class="field-label">Provider Name:</span>
                  <span class="field-value">${formData.providerName}</span>
                </div>
                <div class="field">
                  <span class="field-label">Title/Role:</span>
                  <span class="field-value">${formData.providerTitle}</span>
                </div>
                <div class="field">
                  <span class="field-label">Clinic/Practice:</span>
                  <span class="field-value">${formData.clinicName}</span>
                </div>
                <div class="field">
                  <span class="field-label">Phone:</span>
                  <span class="field-value">${formData.providerPhone}</span>
                </div>
                <div class="field">
                  <span class="field-label">Email:</span>
                  <span class="field-value">${formData.providerEmail}</span>
                </div>
                ${formData.providerFax ? `
                <div class="field">
                  <span class="field-label">Fax:</span>
                  <span class="field-value">${formData.providerFax}</span>
                </div>
                ` : ''}
                <div class="field">
                  <span class="field-label">Best Contact Method:</span>
                  <span class="field-value">${formData.bestContactMethod}</span>
                </div>
              </div>

              <div class="section">
                <h2>👶 Client Information</h2>
                <div class="field">
                  <span class="field-label">Child's Name:</span>
                  <span class="field-value">${formData.childFullName}</span>
                </div>
                <div class="field">
                  <span class="field-label">Child's Age:</span>
                  <span class="field-value">${formData.childAge || "Not provided"}</span>
                </div>
                <div class="field">
                  <span class="field-label">Parent/Guardian:</span>
                  <span class="field-value">${formData.parentName}</span>
                </div>
                <div class="field">
                  <span class="field-label">Parent Phone:</span>
                  <span class="field-value">${formData.parentPhone}</span>
                </div>
                ${formData.parentEmail ? `
                <div class="field">
                  <span class="field-label">Parent Email:</span>
                  <span class="field-value">${formData.parentEmail}</span>
                </div>
                ` : ''}
                <div class="field">
                  <span class="field-label">ZIP Code:</span>
                  <span class="field-value">${formData.zipCode}</span>
                </div>
                ${formData.primaryLanguage ? `
                <div class="field">
                  <span class="field-label">Primary Language:</span>
                  <span class="field-value">${formData.primaryLanguage}</span>
                </div>
                ` : ''}
              </div>

              <div class="section">
                <h2>🎯 Service Details</h2>
                <div class="field">
                  <span class="field-label">Reason for Referral:</span>
                  <div class="field-value" style="margin-top: 8px;">${formData.reasonForReferral}</div>
                </div>
                <div class="field">
                  <span class="field-label">Services Requested:</span>
                  <ul style="margin-top: 5px;">
                    ${formData.servicesRequested.map(service => `<li>${service}</li>`).join('')}
                  </ul>
                </div>
                ${formData.currentTherapies.length > 0 ? `
                <div class="field">
                  <span class="field-label">Current Therapies:</span>
                  <ul style="margin-top: 5px;">
                    ${formData.currentTherapies.map(therapy => `<li>${therapy}</li>`).join('')}
                  </ul>
                </div>
                ` : ''}
                ${formData.otherTherapy ? `
                <div class="field">
                  <span class="field-label">Other Therapy Details:</span>
                  <span class="field-value">${formData.otherTherapy}</span>
                </div>
                ` : ''}
                <div class="field">
                  <span class="field-label">Preferred Contact:</span>
                  <span class="field-value">${formData.preferredContactPerson}</span>
                </div>
              </div>

              <div class="section">
                <h2>💳 Insurance Information</h2>
                <div class="field">
                  <span class="field-label">Provider:</span>
                  <span class="field-value">${formData.insuranceProvider}</span>
                </div>
                ${formData.insuranceOther ? `
                <div class="field">
                  <span class="field-label">Other Insurance:</span>
                  <span class="field-value">${formData.insuranceOther}</span>
                </div>
                ` : ''}
              </div>

              ${formData.notes ? `
              <div class="section">
                <h2>📝 Additional Notes</h2>
                <div class="field-value">${formData.notes}</div>
              </div>
              ` : ''}

              <div class="alert">
                <p style="margin: 0; color: #92400e; font-size: 14px;">
                  <strong>✅ Consent Confirmed:</strong> Provider has confirmed they have consent from the parent/guardian to share this information.
                </p>
              </div>

              <div class="alert">
                <p style="margin: 0; color: #92400e; font-size: 14px;">
                  <strong>⏰ Action Required:</strong> Please follow up with this referral as soon as possible.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Referral notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-referral-notification function:", error);
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
