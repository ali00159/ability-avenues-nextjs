'use client';

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string | React.ReactNode;
  }[];
  contactInfo?: {
    title: string;
    description: string;
    buttonText: string;
    onContact?: () => void;
  };
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 w-full bg-gradient-to-b from-transparent via-muted/50 to-transparent",
          className
        )}
        {...props}
      >
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              {title}
            </h2>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Contact Section */}
          {contactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-5xl mx-auto mt-16 p-6 md:p-12 lg:p-16 rounded-3xl text-center bg-cornsilk"
            >
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-raisin-black mb-4 md:mb-6">
                {contactInfo.title}
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-raisin-black/70 mb-6 md:mb-10 max-w-3xl mx-auto">
                {contactInfo.description}
              </p>
              <Button 
                size="lg" 
                onClick={contactInfo.onContact}
                className="bg-raisin-black text-cornsilk hover:bg-raisin-black/90 gap-2 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                {contactInfo.buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string | React.ReactNode;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { question, answer, index } = props;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-lg",
        "transition-all duration-200 ease-in-out",
        "border-[1.5px] border-border/50",
        isOpen
          ? "bg-gradient-to-br from-background via-muted/50 to-background"
          : "hover:bg-muted/50"
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 md:px-6 py-4 md:py-6 h-auto justify-start items-start hover:bg-transparent gap-2 md:gap-3 whitespace-normal"
      >
        <h3
          className={cn(
            "text-base md:text-xl font-medium transition-colors duration-200 text-left break-words hyphens-auto flex-1 min-w-0 pr-3 sm:pr-4",
            "text-foreground/70",
            isOpen && "text-foreground"
          )}
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0 min-w-[1.5rem] self-center ml-auto",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-4 md:px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm md:text-base text-muted-foreground leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
