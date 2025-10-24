'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Baby, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentLastName: "",
    email: "",
    phone: "",
    childFirstName: "",
    childAge: "",
    zipCode: "",
    insurance: "",
    insuranceOther: "",
    receiveSms: false,
  });

  const formSchema = z.object({
    parentFirstName: z.string().trim().min(1, "Parent/Guardian first name is required").max(100, "Name must be less than 100 characters"),
    parentLastName: z.string().trim().min(1, "Parent/Guardian last name is required").max(100, "Name must be less than 100 characters"),
    email: z.string().trim().email("Please enter a valid email address").max(100, "Email must be less than 100 characters"),
    phone: z.string().trim().regex(/^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/, "Please enter a valid 10-digit phone number"),
    zipCode: z.string().trim().regex(/^\d{5}$/, "ZIP code must be exactly 5 digits"),
    insurance: z.string().min(1, "Please select an insurance provider"),
    childAge: z.string().trim().regex(/^\d+$/, "Age must be a number").refine((val) => {
      const num = parseInt(val);
      return num >= 0 && num <= 18;
    }, "Age must be between 0 and 18").optional().or(z.literal("")),
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      formSchema.parse({
        parentFirstName: formData.parentFirstName,
        parentLastName: formData.parentLastName,
        email: formData.email,
        phone: formData.phone,
        zipCode: formData.zipCode,
        insurance: formData.insurance,
      });

      // Save to database
      const { error: dbError } = await supabase
        .from('form_submissions')
        .insert({
          parent_name: `${formData.parentFirstName} ${formData.parentLastName}`,
          child_name: formData.childFirstName,
          email: formData.email,
          phone: formData.phone,
          insurance: formData.insurance,
          insurance_other: formData.insuranceOther || null,
          sms_updates: formData.receiveSms,
        });

      if (dbError) {
        console.error('Database error:', dbError);
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-form-notification', {
        body: formData,
      });

      if (emailError) {
        console.error('Email notification error:', emailError);
      }

      toast.success("Form submitted successfully! We'll be in touch soon.");
      
      // Reset form
      setFormData({
        parentFirstName: "",
        parentLastName: "",
        email: "",
        phone: "",
        childFirstName: "",
        childAge: "",
        zipCode: "",
        insurance: "",
        insuranceOther: "",
        receiveSms: false,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      if (error instanceof z.ZodError) {
        toast.error(`Validation Error: ${error.errors[0].message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof typeof formData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-secondary to-yellow-green flex items-center justify-center shadow-lg">
                <Baby className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-raisin-black mb-6">
              Help your child thrive with ABA therapy.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete our online interest form to get matched with a center. We will be in touch soon!
            </p>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} noValidate className="bg-card border-2 rounded-3xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Parent Name */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentFirstName">
                      Parent/Guardian First Name<span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="parentFirstName"
                      required
                      value={formData.parentFirstName}
                      onChange={(e) => updateField("parentFirstName", e.target.value)}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentLastName">
                      Parent/Guardian Last Name<span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="parentLastName"
                      required
                      value={formData.parentLastName}
                      onChange={(e) => updateField("parentLastName", e.target.value)}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="rounded-xl"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone number<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="rounded-xl"
                  />
                </div>

                {/* Child Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="childFirstName">Your Child&apos;s First Name</Label>
                    <Input
                      id="childFirstName"
                      value={formData.childFirstName}
                      onChange={(e) => updateField("childFirstName", e.target.value)}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childAge">Child&apos;s Age</Label>
                    <Input
                      id="childAge"
                      type="number"
                      min="0"
                      max="18"
                      step="1"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      placeholder="e.g., 5"
                      value={formData.childAge}
                      onChange={(e) => updateField("childAge", e.target.value)}
                      onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        input.value = input.value.replace(/[^0-9]/g, '');
                      }}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* Zip Code */}
                <div className="space-y-2">
                  <Label htmlFor="zipCode">
                    Zip code<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="zipCode"
                    placeholder="ex: 73301"
                    maxLength={5}
                    required
                    value={formData.zipCode}
                    onChange={(e) => updateField("zipCode", e.target.value)}
                    className="rounded-xl"
                  />
                </div>

                {/* Insurance Selection */}
                <div className="space-y-2">
                  <Label htmlFor="insurance">
                    Insurance<span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.insurance} onValueChange={(value) => updateField("insurance", value)} required>
                    <SelectTrigger id="insurance" className="rounded-xl">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ucare">UCare</SelectItem>
                      <SelectItem value="bcbs">Blue Cross Blue Shield</SelectItem>
                      <SelectItem value="ma-mn">Minnesota Medicaid (Medical Assistance)</SelectItem>
                      <SelectItem value="healthpartners">HealthPartners</SelectItem>
                      <SelectItem value="medica">Medica</SelectItem>
                      <SelectItem value="unitedhealth">UnitedHealthcare</SelectItem>
                      <SelectItem value="aetna">Aetna</SelectItem>
                      <SelectItem value="cigna">Cigna</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.insurance === "other" && (
                  <div className="space-y-2">
                    <Label htmlFor="insuranceOther">Please Specify Insurance Provider</Label>
                    <Input
                      id="insuranceOther"
                      value={formData.insuranceOther}
                      onChange={(e) => updateField("insuranceOther", e.target.value)}
                      className="rounded-xl"
                    />
                  </div>
                )}

                {/* SMS Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="receiveSms"
                    checked={formData.receiveSms}
                    onCheckedChange={(checked) => updateField("receiveSms", checked as boolean)}
                  />
                  <Label htmlFor="receiveSms" className="cursor-pointer font-normal">
                    Receive SMS Text Messages
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl py-6 text-lg font-semibold bg-yellow-green hover:bg-yellow-green/90 text-white"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
