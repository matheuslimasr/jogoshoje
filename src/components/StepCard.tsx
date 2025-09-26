import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  isHighlighted?: boolean;
}

const StepCard = ({ stepNumber, title, description, details, icon: Icon, isHighlighted = false }: StepCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-500 hover:scale-105 ${
      isHighlighted ? 'ring-2 ring-primary shadow-glow' : 'hover:shadow-card'
    }`}>
      <CardContent className="p-8">
        {/* Step Number */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
          <span className="text-lg font-bold text-primary-foreground">{stepNumber}</span>
        </div>
        
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-card-foreground">{title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
          
          {/* Details */}
          <div className="space-y-2">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-card-foreground/80">{detail}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50"></div>
      </CardContent>
    </Card>
  );
};

export default StepCard;