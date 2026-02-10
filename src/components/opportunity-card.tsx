'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Heart,
  Globe2,
  Building2,
  Calendar,
  Clock,
  Building,
  Users,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Opportunity } from '@/types';
import { Badge } from '@/components/ui/badge';

interface OpportunityCardProps {
  opportunity: Opportunity;
  className?: string;
}

export const OpportunityCard = ({ opportunity, className }: OpportunityCardProps) => {
  const getTypeIcon = () => {
    switch (opportunity.type) {
      case 'work': return <Briefcase className="h-5 w-5" />;
      case 'scholarship': return <GraduationCap className="h-5 w-5" />;
      case 'volunteer': return <Heart className="h-5 w-5" />;
      case 'exchange': return <Globe2 className="h-5 w-5" />;
      case 'internship': return <Building className="h-5 w-5" />;
      case 'teach': return <Users className="h-5 w-5" />;
      default: return <Globe2 className="h-5 w-5" />;
    }
  };

  const getTypeLabel = () => {
    const labels: Record<string, string> = {
      work: 'Work Program',
      scholarship: 'Scholarship',
      volunteer: 'Volunteer',
      exchange: 'Exchange',
      internship: 'Internship',
      teach: 'Teaching',
    };
    return labels[opportunity.type] || opportunity.type;
  };

  const getFundingBadgeColor = () => {
    switch (opportunity.funding) {
      case 'free': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30';
      case 'funded': return 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30';
      case 'paid': return 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30';
      case 'partial': return 'bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getFundingLabel = () => {
    const labels: Record<string, string> = {
      free: 'Free',
      funded: 'Fully Funded',
      paid: 'Paid',
      partial: 'Partial',
    };
    return labels[opportunity.funding] || opportunity.funding;
  };

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-xl glass-card',
        'hover-lift hover-glow',
        'group cursor-pointer h-full',
        'before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px]',
        'before:bg-gradient-to-r before:from-primary before:via-purple-400 before:to-pink-400',
        'before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-300',
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10" />
      </div>

      <div className="relative p-5 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn(
              'p-2 rounded-lg',
              'bg-gradient-to-br from-primary/20 to-purple-500/20',
              'text-primary group-hover:glow-primary transition-all duration-300'
            )}>
              {getTypeIcon()}
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {getTypeLabel()}
              </span>
            </div>
          </div>
          <Badge variant="outline" className={getFundingBadgeColor()}>
            {getFundingLabel()}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-foreground group-hover:text-primary transition-colors">
          {opportunity.title}
        </h3>

        {/* Organization */}
        <div className="flex items-center gap-2 mb-3 text-muted-foreground">
          <Building2 className="h-4 w-4" />
          <span className="text-sm">{opportunity.organization}</span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
          {opportunity.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {opportunity.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className={cn(
                'px-2 py-0.5 rounded-md text-xs',
                'bg-secondary text-secondary-foreground'
              )}
            >
              {tag}
            </span>
          ))}
          {opportunity.tags.length > 3 && (
            <span className="px-2 py-0.5 rounded-md text-xs bg-secondary text-secondary-foreground">
              +{opportunity.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center gap-4 mb-4 text-muted-foreground text-xs">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{opportunity.duration}</span>
          </div>
          {opportunity.deadline && (
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>Due {new Date(opportunity.deadline).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs text-muted-foreground">{opportunity.location}</span>
          <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
