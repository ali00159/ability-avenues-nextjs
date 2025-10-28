'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Share2, Send, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { cn } from "@/lib/utils";

const ReferralForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Provider Information
    providerName: "",
    providerTitle: "",
    clinicName: "",
    providerPhone: "",
    providerEmail: "",
    providerFax: "",
    bestContactMethod: "",
    // Client Information
    childFullName: "",
    childAge: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    zipCode: "",
    primaryLanguage: "",
    // Service Details
    reasonForReferral: "",
    servicesRequested: [] as string[],
    currentTherapies: [] as string[],
    otherTherapy: "",
    preferredContactPerson: "",
    // Insurance Information
    insuranceProvider: "",
    insuranceOther: "",
    // Additional Information
    notes: "",
    consentConfirmed: false,
  });

  const totalSteps = 5;

  const stepSchemas = [
    // Step 1: Provider Information
    z.object({
      providerName: z.string().trim().min(1, "Provider name is required").max(100, "Provider name must be less than 100 characters"),
      providerTitle: z.string().trim().min(1, "Provider title/role is required").max(100, "Provider title must be less than 100 characters"),
      clinicName: z.string().trim().min(1, "Clinic name is required").max(100, "Clinic name must be less than 100 characters"),
      providerPhone: z.string().trim().regex(/^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/, "Please enter a valid 10-digit phone number"),
      providerEmail: z.string().trim().email("Please enter a valid email address").max(100, "Email must be less than 100 characters"),
      providerFax: z.string().trim().regex(/^$|^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/, "Please enter a valid 10-digit fax number or leave blank"),
      bestContactMethod: z.string().min(1, "Please select best contact method"),
    }),
    // Step 2: Client Information
    z.object({
      childFullName: z.string().trim().min(1, "Child's name is required").max(100, "Name must be less than 100 characters"),
      childAge: z.string().trim().regex(/^\d+$/, "Age must be a number").refine((val) => {
        const num = parseInt(val);
        return num >= 0 && num <= 18;
      }, "Age must be between 0 and 18"),
      parentName: z.string().trim().min(1, "Parent/Guardian name is required").max(100, "Name must be less than 100 characters"),
      parentPhone: z.string().trim().regex(/^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/, "Please enter a valid 10-digit phone number"),
      parentEmail: z.string().trim().email("Please enter a valid email address").max(100, "Email must be less than 100 characters").or(z.literal("")),
      zipCode: z.string().trim().regex(/^\d{5}$/, "ZIP code must be exactly 5 digits"),
      primaryLanguage: z.string().max(50, "Language must be less than 50 characters"),
    }),
    // Step 3: Service Details
    z.object({
      reasonForReferral: z.string().trim().min(1, "Reason for referral is required").max(500, "Reason must be less than 500 characters"),
      servicesRequested: z.array(z.string()).min(1, "Please select at least one service"),
      currentTherapies: z.array(z.string()),
      otherTherapy: z.string().max(100, "Therapy description must be less than 100 characters"),
      preferredContactPerson: z.string().min(1, "Please select preferred contact person"),
    }),
    // Step 4: Insurance Information
    z.object({
      insuranceProvider: z.string().min(1, "Please select an insurance provider"),
      insuranceOther: z.string().max(100, "Insurance name must be less than 100 characters"),
    }),
    // Step 5: Additional Information
    z.object({
      notes: z.string().max(1000, "Notes must be less than 1000 characters"),
      consentConfirmed: z.boolean().refine((val) => val === true, {
        message: "You must confirm consent to submit this referral",
      }),
    }),
  ];

  const validateStep = (step: number): boolean => {
    try {
      const stepData = getStepData(step);
      stepSchemas[step - 1].parse(stepData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(`Validation Error: ${error.errors[0].message}`);
      }
      return false;
    }
  };

  const getStepData = (step: number) => {
    switch (step) {
      case 1:
        return {
          providerName: formData.providerName,
          providerTitle: formData.providerTitle,
          clinicName: formData.clinicName,
          providerPhone: formData.providerPhone,
          providerEmail: formData.providerEmail,
          providerFax: formData.providerFax,
          bestContactMethod: formData.bestContactMethod,
        };
      case 2:
        return {
          childFullName: formData.childFullName,
          childAge: formData.childAge,
          parentName: formData.parentName,
          parentPhone: formData.parentPhone,
          parentEmail: formData.parentEmail,
          zipCode: formData.zipCode,
          primaryLanguage: formData.primaryLanguage,
        };
      case 3:
        return {
          reasonForReferral: formData.reasonForReferral,
          servicesRequested: formData.servicesRequested,
          currentTherapies: formData.currentTherapies,
          otherTherapy: formData.otherTherapy,
          preferredContactPerson: formData.preferredContactPerson,
        };
      case 4:
        return {
          insuranceProvider: formData.insuranceProvider,
          insuranceOther: formData.insuranceOther,
        };
      case 5:
        return {
          notes: formData.notes,
          consentConfirmed: formData.consentConfirmed,
        };
      default:
        return {};
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      // Prepare current therapies array
      const therapies = [...formData.currentTherapies];
      if (formData.otherTherapy) {
        therapies.push(`Other: ${formData.otherTherapy}`);
      }

      // Save to database
      const { error: dbError } = await supabase.from("referral_submissions").insert({
        provider_name: formData.providerName,
        provider_title: formData.providerTitle,
        clinic_name: formData.clinicName,
        provider_phone: formData.providerPhone,
        provider_email: formData.providerEmail,
        provider_fax: formData.providerFax || null,
        best_contact_method: formData.bestContactMethod,
        child_full_name: formData.childFullName,
        child_age: formData.childAge || null,
        parent_name: formData.parentName,
        parent_phone: formData.parentPhone,
        parent_email: formData.parentEmail || null,
        zip_code: formData.zipCode,
        primary_language: formData.primaryLanguage || null,
        reason_for_referral: formData.reasonForReferral,
        services_requested: formData.servicesRequested,
        current_therapies: therapies.length > 0 ? therapies : null,
        preferred_contact_person: formData.preferredContactPerson,
        insurance_provider: formData.insuranceProvider,
        insurance_other: formData.insuranceOther || null,
        notes: formData.notes || null,
        consent_confirmed: formData.consentConfirmed,
      });

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to save referral submission");
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke("send-referral-notification", {
        body: formData,
      });

      if (emailError) {
        console.error("Email notification error:", emailError);
      }

      toast.success("Referral submitted successfully! We'll be in touch with the family soon.");

      // Reset form
      setFormData({
        providerName: "",
        providerTitle: "",
        clinicName: "",
        providerPhone: "",
        providerEmail: "",
        providerFax: "",
        bestContactMethod: "",
        childFullName: "",
        childAge: "",
        parentName: "",
        parentPhone: "",
        parentEmail: "",
        zipCode: "",
        primaryLanguage: "",
        reasonForReferral: "",
        servicesRequested: [],
        currentTherapies: [],
        otherTherapy: "",
        preferredContactPerson: "",
        insuranceProvider: "",
        insuranceOther: "",
        notes: "",
        consentConfirmed: false,
      });
      setCurrentStep(1);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit referral. Please check your information and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof typeof formData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: "servicesRequested" | "currentTherapies", value: string) => {
    setFormData((prev) => {
      const currentArray = prev[field];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Info */}
          <div className="hidden lg:block">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-3xl bg-xanthous flex items-center justify-center shadow-lg">
                <Share2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-raisin-black mb-6">
              Refer a family to Ability Avenues
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Complete this referral form to connect families with our comprehensive ABA therapy services. We will reach out to them shortly!
            </p>

            {/* Progress Indicator */}
            <div className="space-y-3">
              <div className="flex justify-between text-base font-medium text-muted-foreground mb-3">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-xanthous"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="mt-6 space-y-4 text-base">
                <div className={cn("flex items-center gap-3", currentStep === 1 && "text-xanthous font-medium")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold", 
                    currentStep > 1 ? "bg-xanthous text-white" : currentStep === 1 ? "bg-xanthous text-white" : "bg-gray-200")}>
                    {currentStep > 1 ? "✓" : "1"}
                  </div>
                  Provider Information
                </div>
                <div className={cn("flex items-center gap-3", currentStep === 2 && "text-xanthous font-medium")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                    currentStep > 2 ? "bg-xanthous text-white" : currentStep === 2 ? "bg-xanthous text-white" : "bg-gray-200")}>
                    {currentStep > 2 ? "✓" : "2"}
                  </div>
                  Client Information
                </div>
                <div className={cn("flex items-center gap-3", currentStep === 3 && "text-xanthous font-medium")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                    currentStep > 3 ? "bg-xanthous text-white" : currentStep === 3 ? "bg-xanthous text-white" : "bg-gray-200")}>
                    {currentStep > 3 ? "✓" : "3"}
                  </div>
                  Service Details
                </div>
                <div className={cn("flex items-center gap-3", currentStep === 4 && "text-xanthous font-medium")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                    currentStep > 4 ? "bg-xanthous text-white" : currentStep === 4 ? "bg-xanthous text-white" : "bg-gray-200")}>
                    {currentStep > 4 ? "✓" : "4"}
                  </div>
                  Insurance Information
                </div>
                <div className={cn("flex items-center gap-3", currentStep === 5 && "text-xanthous font-medium")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                    currentStep === 5 ? "bg-xanthous text-white" : "bg-gray-200")}>
                    5
                  </div>
                  Additional Information
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border-2 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg">
              {/* Mobile Progress Indicator */}
              <div className="lg:hidden mb-6 pb-4 border-b">
                <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
                  <span>Step {currentStep} of {totalSteps}</span>
                  <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-xanthous"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1: Provider Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-raisin-black mb-6">Provider Information</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="providerName">
                          Provider Name<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="providerName"
                          required
                          value={formData.providerName}
                          onChange={(e) => updateField("providerName", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="providerTitle">
                          Provider Title/Role<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="providerTitle"
                          required
                          placeholder="e.g., Pediatrician, Psychologist, Therapist"
                          value={formData.providerTitle}
                          onChange={(e) => updateField("providerTitle", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="clinicName">
                          Clinic or Practice Name<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="clinicName"
                          required
                          value={formData.clinicName}
                          onChange={(e) => updateField("clinicName", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="providerPhone">
                          Phone Number<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="providerPhone"
                          type="tel"
                          required
                          value={formData.providerPhone}
                          onChange={(e) => updateField("providerPhone", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="providerEmail">
                          Email Address<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="providerEmail"
                          type="email"
                          required
                          value={formData.providerEmail}
                          onChange={(e) => updateField("providerEmail", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="providerFax">Fax Number</Label>
                        <Input
                          id="providerFax"
                          type="tel"
                          value={formData.providerFax}
                          onChange={(e) => updateField("providerFax", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bestContactMethod">
                          Best Way to Contact You<span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={formData.bestContactMethod}
                          onValueChange={(value) => updateField("bestContactMethod", value)}
                          required
                        >
                          <SelectTrigger id="bestContactMethod" className="rounded-xl">
                            <SelectValue placeholder="Please Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phone">Phone</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="fax">Fax</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Client Information */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-raisin-black mb-6">Client Information</h3>

                      <div className="space-y-2">
                        <Label htmlFor="childFullName">
                          Child's First and Last Name<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="childFullName"
                          required
                          value={formData.childFullName}
                          onChange={(e) => updateField("childFullName", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="childAge">
                          Child's Age<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="childAge"
                          type="number"
                          min="0"
                          max="18"
                          step="1"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          required
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

                      <div className="space-y-2">
                        <Label htmlFor="parentName">
                          Parent or Guardian Name<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="parentName"
                          required
                          value={formData.parentName}
                          onChange={(e) => updateField("parentName", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="parentPhone">
                          Parent or Guardian Phone Number<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="parentPhone"
                          type="tel"
                          required
                          value={formData.parentPhone}
                          onChange={(e) => updateField("parentPhone", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="parentEmail">Parent or Guardian Email Address</Label>
                        <Input
                          id="parentEmail"
                          type="email"
                          value={formData.parentEmail}
                          onChange={(e) => updateField("parentEmail", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zipCode">
                          ZIP Code<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="zipCode"
                          maxLength={5}
                          required
                          placeholder="ex: 55344"
                          value={formData.zipCode}
                          onChange={(e) => updateField("zipCode", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="primaryLanguage">Primary Language Spoken at Home</Label>
                        <Input
                          id="primaryLanguage"
                          value={formData.primaryLanguage}
                          onChange={(e) => updateField("primaryLanguage", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Service Details */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-raisin-black mb-6">Service Details</h3>

                      <div className="space-y-2">
                        <Label htmlFor="reasonForReferral">
                          Reason for Referral<span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="reasonForReferral"
                          required
                          placeholder="e.g., developmental delay, communication, social skills, behavioral support"
                          value={formData.reasonForReferral}
                          onChange={(e) => updateField("reasonForReferral", e.target.value)}
                          className="rounded-xl min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>
                          Type of Services Requested (Select all that apply)<span className="text-destructive">*</span>
                        </Label>
                        <div className="space-y-2 border rounded-xl p-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="centerBased"
                              checked={formData.servicesRequested.includes("Center-Based ABA")}
                              onCheckedChange={() => toggleArrayField("servicesRequested", "Center-Based ABA")}
                            />
                            <Label htmlFor="centerBased" className="cursor-pointer font-normal">
                              Center-Based ABA
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="inHome"
                              checked={formData.servicesRequested.includes("In-Home ABA")}
                              onCheckedChange={() => toggleArrayField("servicesRequested", "In-Home ABA")}
                            />
                            <Label htmlFor="inHome" className="cursor-pointer font-normal">
                              In-Home ABA
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="parentTraining"
                              checked={formData.servicesRequested.includes("Parent Training")}
                              onCheckedChange={() => toggleArrayField("servicesRequested", "Parent Training")}
                            />
                            <Label htmlFor="parentTraining" className="cursor-pointer font-normal">
                              Parent Training
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="unsure"
                              checked={formData.servicesRequested.includes("Unsure / Recommend Evaluation")}
                              onCheckedChange={() => toggleArrayField("servicesRequested", "Unsure / Recommend Evaluation")}
                            />
                            <Label htmlFor="unsure" className="cursor-pointer font-normal">
                              Unsure / Recommend Evaluation
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Is the child currently receiving other therapies?</Label>
                        <div className="space-y-3 border rounded-xl p-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="speechTherapy"
                              checked={formData.currentTherapies.includes("Speech Therapy")}
                              onCheckedChange={() => toggleArrayField("currentTherapies", "Speech Therapy")}
                            />
                            <Label htmlFor="speechTherapy" className="cursor-pointer font-normal">
                              Speech Therapy
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="occupationalTherapy"
                              checked={formData.currentTherapies.includes("Occupational Therapy")}
                              onCheckedChange={() => toggleArrayField("currentTherapies", "Occupational Therapy")}
                            />
                            <Label htmlFor="occupationalTherapy" className="cursor-pointer font-normal">
                              Occupational Therapy
                            </Label>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="otherTherapy"
                                checked={formData.currentTherapies.includes("Other")}
                                onCheckedChange={() => toggleArrayField("currentTherapies", "Other")}
                              />
                              <Label htmlFor="otherTherapy" className="cursor-pointer font-normal">
                                Other
                              </Label>
                            </div>
                            {formData.currentTherapies.includes("Other") && (
                              <div className="pl-6">
                                <Input
                                  id="otherTherapyText"
                                  placeholder="Please specify"
                                  value={formData.otherTherapy}
                                  onChange={(e) => updateField("otherTherapy", e.target.value)}
                                  className="rounded-xl"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredContactPerson">
                          Preferred Contact Person for Scheduling<span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={formData.preferredContactPerson}
                          onValueChange={(value) => updateField("preferredContactPerson", value)}
                          required
                        >
                          <SelectTrigger id="preferredContactPerson" className="rounded-xl">
                            <SelectValue placeholder="Please Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="provider">Provider</SelectItem>
                            <SelectItem value="parent">Parent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Insurance Information */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-raisin-black mb-6">Insurance Information</h3>

                      <div className="space-y-2">
                        <Label htmlFor="insuranceProvider">
                          Current Insurance Provider<span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={formData.insuranceProvider}
                          onValueChange={(value) => updateField("insuranceProvider", value)}
                          required
                        >
                          <SelectTrigger id="insuranceProvider" className="rounded-xl">
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

                      {formData.insuranceProvider === "other" && (
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
                    </div>
                  )}

                  {/* Step 5: Additional Information */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-raisin-black mb-6">Additional Information</h3>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Notes or Special Considerations</Label>
                        <Textarea
                          id="notes"
                          placeholder="e.g., schedule limitations, communication preferences, behavioral concerns"
                          value={formData.notes}
                          onChange={(e) => updateField("notes", e.target.value)}
                          className="rounded-xl min-h-[120px]"
                        />
                      </div>

                      <div className="border rounded-xl p-4 bg-muted/30">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="consentConfirmed"
                            checked={formData.consentConfirmed}
                            onCheckedChange={(checked) => updateField("consentConfirmed", checked as boolean)}
                            className="mt-1"
                          />
                          <div>
                            <Label htmlFor="consentConfirmed" className="cursor-pointer font-semibold text-base">
                              Consent Confirmation<span className="text-destructive">*</span>
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              I confirm that I have consent from the parent/guardian to share this information for referral purposes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1 rounded-2xl py-6 text-base border-cornsilk text-raisin-black hover:bg-cornsilk/10"
                    size="lg"
                  >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Back
                  </Button>
                )}
                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 rounded-2xl py-6 text-base bg-xanthous hover:bg-xanthous/90 text-raisin-black"
                    size="lg"
                  >
                    Next
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 rounded-2xl py-6 text-base bg-xanthous hover:bg-xanthous/90 text-raisin-black disabled:opacity-50"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Referral
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReferralForm;
