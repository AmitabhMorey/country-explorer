'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Building2,
  ExternalLink,
  CheckCircle2,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Globe2,
  Building
} from 'lucide-react';
import { AuroraBackground } from '@/components/aurora-background';
import type { Opportunity } from '@/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThemeToggleButton } from '@/components/ui/skiper-ui/skiper26';

interface OpportunityDetailPageProps {
  opportunity: Opportunity;
  onBack: () => void;
}

export const OpportunityDetailPage = ({ opportunity, onBack }: OpportunityDetailPageProps) => {
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
      volunteer: 'Volunteer Program',
      exchange: 'Exchange Program',
      internship: 'Internship',
      teach: 'Teaching Position',
    };
    return labels[opportunity.type] || opportunity.type;
  };

  const getFundingBadgeColor = () => {
    switch (opportunity.funding) {
      case 'free': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'funded': return 'bg-primary/20 text-primary border-primary/30';
      case 'paid': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'partial': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getFundingLabel = () => {
    const labels: Record<string, string> = {
      free: 'Free Program',
      funded: 'Fully Funded',
      paid: 'Paid Position',
      partial: 'Partially Funded',
    };
    return labels[opportunity.funding] || opportunity.funding;
  };

  return (
    <AuroraBackground className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        className="w-full px-6 py-4 flex items-center justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={onBack}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg',
            'text-muted-foreground hover:text-foreground hover:bg-accent',
            'transition-all duration-200'
          )}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Opportunities</span>
        </motion.button>

        <div className="flex items-center gap-4">
          <Badge variant="outline" className={getFundingBadgeColor()}>
            {getFundingLabel()}
          </Badge>
          <ThemeToggleButton />
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="px-6 py-8 max-w-4xl mx-auto">
        {/* Header */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Type & Organization */}
          <div className="flex items-center gap-3 mb-4">
            <div className={cn(
              'p-2 rounded-lg',
              'bg-gradient-to-br from-primary/20 to-purple-500/20',
              'text-primary'
            )}>
              {getTypeIcon()}
            </div>
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                {getTypeLabel()}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{opportunity.title}</h1>

          {/* Organization */}
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Building2 className="h-5 w-5" />
            <span className="text-lg">{opportunity.organization}</span>
            {opportunity.organizationWebsite && (
              <a
                href={opportunity.organizationWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-2"
              >
                Visit Website
              </a>
            )}
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{opportunity.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{opportunity.duration}</span>
            </div>
            {opportunity.deadline && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</span>
              </div>
            )}
            {opportunity.salary && (
              <div className="flex items-center gap-2 text-emerald-400">
                <DollarSign className="h-4 w-4" />
                <span>{opportunity.salary}</span>
              </div>
            )}
          </div>
        </motion.section>

        {/* Description */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-xl font-semibold mb-4">About This Program</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {opportunity.fullDescription || opportunity.description}
            </p>
          </div>
        </motion.section>

        {/* Requirements & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {opportunity.requirements && opportunity.requirements.length > 0 && (
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card rounded-xl p-6 border border-border h-full">
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {opportunity.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          )}

          {opportunity.benefits && opportunity.benefits.length > 0 && (
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-card rounded-xl p-6 border border-border h-full">
                <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                <ul className="space-y-3">
                  {opportunity.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          )}
        </div>

        {/* Tags */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2">
            {opportunity.tags.map((tag, i) => (
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="flex-1"
            asChild
          >
            <a
              href={opportunity.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              Apply Now
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onBack}
          >
            View More Opportunities
          </Button>
        </motion.section>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Please verify all details on the official website before applying.
          We are not responsible for changes made by the program organizers.
        </motion.p>
      </main>
    </AuroraBackground>
  );
};
