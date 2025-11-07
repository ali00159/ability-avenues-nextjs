import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormNotificationRequest {
  parentFirstName: string;
  parentLastName: string;
  email: string;
  phone: string;
  childFirstName: string;
  childAge: string;
  zipCode: string;
  insurance: string;
  insuranceOther?: string;
  preferredSetting: string[];
  receiveSms: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: FormNotificationRequest = await req.json();

    console.log("Processing form notification for:", formData.email);

    // Create professional HTML email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%);
                color: white;
                padding: 30px;
                border-radius: 12px 12px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f0f9ff;
                padding: 30px;
                border: 1px solid #bae6fd;
                border-top: none;
                border-radius: 0 0 12px 12px;
              }
              .section {
                background: white;
                padding: 20px;
                margin-bottom: 20px;
                border-radius: 8px;
                border: 1px solid #bae6fd;
              }
              .section h2 {
                color: #0EA5E9;
                font-size: 18px;
                margin-top: 0;
                margin-bottom: 15px;
                border-bottom: 2px solid #0EA5E9;
                padding-bottom: 8px;
              }
              .field {
                margin-bottom: 12px;
              }
              .field-label {
                font-weight: 600;
                color: #4b5563;
                display: inline-block;
                min-width: 140px;
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
              }
              .badge-yes {
                background: #dbeafe;
                color: #1e40af;
              }
              .badge-no {
                background: #fee2e2;
                color: #991b1b;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #6b7280;
                font-size: 12px;
              }
            </style>
        </head>
        <body>
          <div class="header">
            <h1>🎉 New Form Submission</h1>
            <p style="margin: 10px 0 0 0; font-size: 14px;">Ability Avenues Contact Form</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h2>👤 Parent/Guardian Information</h2>
              <div class="field">
                <span class="field-label">Name:</span>
                <span class="field-value">${formData.parentFirstName} ${formData.parentLastName}</span>
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
                <span class="field-label">Zip Code:</span>
                <span class="field-value">${formData.zipCode}</span>
              </div>
            </div>

            <div class="section">
              <h2>👶 Child Information</h2>
              <div class="field">
                <span class="field-label">Child's Name:</span>
                <span class="field-value">${formData.childFirstName || "Not provided"}</span>
              </div>
              <div class="field">
                <span class="field-label">Child's Age:</span>
                <span class="field-value">${formData.childAge || "Not provided"}</span>
              </div>
            </div>

            <div class="section">
              <h2>📋 Insurance & Preferences</h2>
              <div class="field">
                <span class="field-label">Insurance:</span>
                <span class="field-value">${formData.insurance}</span>
              </div>
              ${formData.insuranceOther ? `
              <div class="field">
                <span class="field-label">Other Insurance:</span>
                <span class="field-value">${formData.insuranceOther}</span>
              </div>
              ` : ''}
              <div class="field">
                <span class="field-label">Preferred Setting:</span>
                <span class="field-value">${formData.preferredSetting && formData.preferredSetting.length > 0 ? formData.preferredSetting.join(", ") : "Not provided"}</span>
              </div>
              <div class="field">
                <span class="field-label">SMS Updates:</span>
                <span class="badge ${formData.receiveSms ? "badge-yes" : "badge-no"}">
                  ${formData.receiveSms ? "Yes" : "No"}
                </span>
              </div>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #0EA5E9; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>⏰ Action Required:</strong> Please follow up with this inquiry as soon as possible.
              </p>
            </div>
          </div>

          <div class="footer">
            <p>This email was automatically generated from the Ability Avenues website contact form.</p>
            <p style="margin: 5px 0 0 0;">Submitted on ${new Date().toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "short",
            })}</p>
          </div>
        </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Ability Avenues <contact@abilityavenues.com>",
      to: ["info@abilityavenues.com"],
      subject: `New Contact Form Submission - ${formData.parentFirstName} ${formData.parentLastName}`,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-notification function:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
