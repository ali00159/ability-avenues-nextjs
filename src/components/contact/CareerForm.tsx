'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Briefcase, Send, ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { cn } from "@/lib/utils";

const CareerForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zipCode: "",
    over18Confirmed: false,
    // Position Details
    position: "",
    daysAvailable: [] as string[],
    timesAvailable: [] as string[],
    employmentType: "",
    // Additional Information
    howHeardAbout: "",
    gender: "",
    raceEthnicity: "",
    // Legal
    infoAccurateConfirmed: false,
  });

  const totalSteps = 4;

  const stepSchemas = [
    // Step 1: Personal Information
    z.object({
      firstName: z.string().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
      lastName: z.string().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
      phone: z.string().regex(/^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/, "Please enter a valid 10-digit phone number"),
      email: z.string().email("Please enter a valid email address").max(100, "Email must be less than 100 characters"),
      zipCode: z.string().regex(/^\d{5}$/, "ZIP code must be exactly 5 digits"),
      over18Confirmed: z.boolean().refine((val) => val === true, {
        message: "You must confirm you are over 18",
      }),
    }),
    // Step 2: Position Details
    z.object({
      position: z.string().min(1, "Please select a position"),
      daysAvailable: z.array(z.string()).min(1, "Please select at least one day"),
      timesAvailable: z.array(z.string()).min(1, "Please select at least one time"),
      employmentType: z.string().min(1, "Please select employment type"),
    }),
    // Step 3: Resume Upload
    z.object({
      resumeFile: z.any().refine((val) => val !== null, {
        message: "Resume is required",
      }),
    }),
    // Step 4: Additional Information & Legal
    z.object({
      infoAccurateConfirmed: z.boolean().refine((val) => val === true, {
        message: "You must confirm the information is accurate",
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
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          zipCode: formData.zipCode,
          over18Confirmed: formData.over18Confirmed,
        };
      case 2:
        return {
          position: formData.position,
          daysAvailable: formData.daysAvailable,
          timesAvailable: formData.timesAvailable,
          employmentType: formData.employmentType,
        };
      case 3:
        return {
          resumeFile: resumeFile,
        };
      case 4:
        return {
          infoAccurateConfirmed: formData.infoAccurateConfirmed,
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        toast.error("Validation Error: Please upload a PDF or Word document");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Validation Error: File size must be less than 5MB");
        return;
      }
      setResumeFile(file);
      toast.success("Resume uploaded successfully");
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    if (!resumeFile) {
      toast.error("Validation Error: Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload resume to storage
      const fileExt = resumeFile.name.split(".").pop();
      const fileName = `${Date.now()}-${formData.firstName}-${formData.lastName}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from("resumes")
        .upload(filePath, resumeFile);

      if (uploadError) {
        console.error("Upload error:", uploadError);
        throw new Error("Failed to upload resume");
      }

      // Save to database
      const { error: dbError } = await supabase.from("career_applications").insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        zip_code: formData.zipCode,
        over_18_confirmed: formData.over18Confirmed,
        position: formData.position,
        days_available: formData.daysAvailable,
        times_available: formData.timesAvailable,
        employment_type: formData.employmentType,
        resume_url: filePath,
        resume_filename: resumeFile.name,
        how_heard_about: formData.howHeardAbout || null,
        gender: formData.gender || null,
        race_ethnicity: formData.raceEthnicity || null,
        info_accurate_confirmed: formData.infoAccurateConfirmed,
      });

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to save application");
      }

      console.log("Career Form Data:", formData);
      // Send email notification with resume
      const { error: emailError } = await supabase.functions.invoke("send-career-notification", {
        body: {
          ...formData,
          resumePath: filePath,
          resumeFilename: resumeFile.name,
        },
      });

      if (emailError) {
        console.error("Email notification error:", emailError);
      }

      toast.success("Application submitted successfully! We'll be in touch soon.");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        zipCode: "",
        over18Confirmed: false,
        position: "",
        daysAvailable: [],
        timesAvailable: [],
        employmentType: "",
        howHeardAbout: "",
        gender: "",
        raceEthnicity: "",
        infoAccurateConfirmed: false,
      });
      setResumeFile(null);
      setCurrentStep(1);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit application. Please check your information and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof typeof formData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: "daysAvailable" | "timesAvailable", value: string) => {
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
              <div className="w-20 h-20 rounded-3xl bg-pacific-cyan flex items-center justify-center shadow-lg">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-raisin-black mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Complete this application to start your journey with Ability Avenues. We're excited to learn more about you!
            </p>

            {/* Progress Indicator */}
            <div className="space-y-3">
              <div className="flex justify-between text-base font-medium text-muted-foreground mb-3">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-pacific-cyan"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="mt-6 space-y-4 text-base">
                <div className={cn("flex items-center gap-3", currentStep === 1 && "text-pacific-cyan font-medium")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold", 
                    currentStep > 1 ? "bg-pacific-cyan text-white" : currentStep === 1 ? "bg-pacific-cyan text-white" : "bg-gray-200")}>
                    {currentStep > 1 ? "✓" : "1"}
                  </div>
                  Personal Information
                </div>
                <div className={cn("flex items-center gap-3", currentStep === 2 && "text-pacific-cyan font-medium")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                    currentStep > 2 ? "bg-pacific-cyan text-white" : currentStep === 2 ? "bg-pacific-cyan text-white" : "bg-gray-200")}>
                    {currentStep > 2 ? "✓" : "2"}
                  </div>
                  Position Details
                </div>
                <div className={cn("flex items-center gap-3", currentStep === 3 && "text-pacific-cyan font-medium")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                    currentStep > 3 ? "bg-pacific-cyan text-white" : currentStep === 3 ? "bg-pacific-cyan text-white" : "bg-gray-200")}>
                    {currentStep > 3 ? "✓" : "3"}
                  </div>
                  Resume Upload
                </div>
                <div className={cn("flex items-center gap-3", currentStep === 4 && "text-pacific-cyan font-medium")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                    currentStep === 4 ? "bg-pacific-cyan text-white" : "bg-gray-200")}>
                    4
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
                    className="h-full bg-pacific-cyan"
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
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-raisin-black mb-6">Personal Information</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">
                            First Name<span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => updateField("firstName", e.target.value)}
                            className="rounded-xl"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName">
                            Last Name<span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) => updateField("lastName", e.target.value)}
                            className="rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone Number<span className="text-destructive">*</span>
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

                      <div className="space-y-2">
                        <Label htmlFor="zipCode">
                          ZIP Code<span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="zipCode"
                          type="text"
                          maxLength={5}
                          placeholder="ex: 73301"
                          required
                          value={formData.zipCode}
                          onChange={(e) => updateField("zipCode", e.target.value)}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="over18"
                          checked={formData.over18Confirmed}
                          onCheckedChange={(checked) => updateField("over18Confirmed", checked)}
                        />
                        <Label htmlFor="over18" className="cursor-pointer">
                          I confirm I am over 18 years old<span className="text-destructive">*</span>
                        </Label>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Position Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-raisin-black mb-6">Position Details</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="position">
                          Position Applying For<span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={formData.position}
                          onValueChange={(value) => updateField("position", value)}
                        >
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Behavior Technician (BT)">Behavior Technician (BT)</SelectItem>
                            <SelectItem value="Board Certified Behavior Analyst (BCBA)">Board Certified Behavior Analyst (BCBA)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <Label>Days Available<span className="text-destructive">*</span></Label>
                        <div className="space-y-2">
                          {["Weekdays", "Weekends"].map((day) => (
                            <div key={day} className="flex items-center space-x-2">
                              <Checkbox
                                id={`day-${day}`}
                                checked={formData.daysAvailable.includes(day)}
                                onCheckedChange={() => toggleArrayField("daysAvailable", day)}
                              />
                              <Label htmlFor={`day-${day}`} className="cursor-pointer">
                                {day}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label>Times Available<span className="text-destructive">*</span></Label>
                        <div className="space-y-2">
                          {["Mornings", "Afternoons", "Evenings"].map((time) => (
                            <div key={time} className="flex items-center space-x-2">
                              <Checkbox
                                id={`time-${time}`}
                                checked={formData.timesAvailable.includes(time)}
                                onCheckedChange={() => toggleArrayField("timesAvailable", time)}
                              />
                              <Label htmlFor={`time-${time}`} className="cursor-pointer">
                                {time}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label>Employment Type<span className="text-destructive">*</span></Label>
                        <RadioGroup
                          value={formData.employmentType}
                          onValueChange={(value) => updateField("employmentType", value)}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Full-Time" id="full-time" />
                            <Label htmlFor="full-time" className="cursor-pointer">Full-Time</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Part-Time" id="part-time" />
                            <Label htmlFor="part-time" className="cursor-pointer">Part-Time</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Resume Upload */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-raisin-black mb-6">Resume Upload</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="resume">
                          Upload Resume<span className="text-destructive">*</span>
                        </Label>
                        <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-pacific-cyan transition-colors">
                          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                          <Input
                            id="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <Label htmlFor="resume" className="cursor-pointer">
                            <span className="text-pacific-cyan font-semibold">Click to upload</span>
                            <span className="text-muted-foreground"> or drag and drop</span>
                          </Label>
                          <p className="text-sm text-muted-foreground mt-2">
                            PDF, DOC, DOCX (max. 5MB)
                          </p>
                          {resumeFile && (
                            <p className="mt-4 text-sm font-medium text-pacific-cyan">
                              ✓ {resumeFile.name}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Additional Information & Legal */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-raisin-black mb-6">Additional Information</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="howHeardAbout">How did you hear about us?</Label>
                        <Select
                          value={formData.howHeardAbout}
                          onValueChange={(value) => updateField("howHeardAbout", value)}
                        >
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Indeed">Indeed</SelectItem>
                            <SelectItem value="Company Website">Company Website</SelectItem>
                            <SelectItem value="Referral">Referral</SelectItem>
                            <SelectItem value="Social Media">Social Media</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-4 p-4 bg-muted/50 rounded-xl">
                        <p className="text-sm font-medium">Equal Opportunity and Legal Compliance (Optional)</p>
                        
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Select
                            value={formData.gender}
                            onValueChange={(value) => updateField("gender", value)}
                          >
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Female">Female</SelectItem>
                              <SelectItem value="Male">Male</SelectItem>
                              <SelectItem value="Non-binary">Non-binary</SelectItem>
                              <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="raceEthnicity">Race/Ethnicity</Label>
                          <Select
                            value={formData.raceEthnicity}
                            onValueChange={(value) => updateField("raceEthnicity", value)}
                          >
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="White">White</SelectItem>
                              <SelectItem value="Black or African American">Black or African American</SelectItem>
                              <SelectItem value="Hispanic or Latino">Hispanic or Latino</SelectItem>
                              <SelectItem value="Asian">Asian</SelectItem>
                              <SelectItem value="Native American or Alaska Native">Native American or Alaska Native</SelectItem>
                              <SelectItem value="Native Hawaiian or Pacific Islander">Native Hawaiian or Pacific Islander</SelectItem>
                              <SelectItem value="Two or more races">Two or more races</SelectItem>
                              <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="p-4 bg-muted/30 rounded-xl text-sm text-muted-foreground">
                        <p className="font-medium mb-2">Legal Statement</p>
                        <p>
                          Ability Avenues is an equal opportunity employer. Employment decisions are made without regard to race, color, religion, sex, national origin, age, disability, or any other protected status. All employment is at-will.
                        </p>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="infoAccurate"
                          checked={formData.infoAccurateConfirmed}
                          onCheckedChange={(checked) => updateField("infoAccurateConfirmed", checked)}
                        />
                        <Label htmlFor="infoAccurate" className="cursor-pointer">
                          I confirm that the information provided is accurate and I understand that employment at Ability Avenues is at-will.<span className="text-destructive">*</span>
                        </Label>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-4 mt-8">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBack}
                        className="flex-1 rounded-xl"
                      >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                    )}
                    {currentStep < totalSteps ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 rounded-xl bg-pacific-cyan hover:bg-pacific-cyan/90"
                      >
                        Next
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex-1 rounded-xl bg-pacific-cyan hover:bg-pacific-cyan/90"
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Submit Application
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;
