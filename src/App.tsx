import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LandingPage } from '@/pages/landing-page';
import { ResultsPage } from '@/pages/results-page';
import { ReelDetailPage } from '@/pages/reel-detail-page';
import { OpportunityDetailPage } from '@/pages/opportunity-detail-page';
import type { CountryData, Reel, Opportunity, PageState } from '@/types';
import { travelAPI } from '@/services/travel-api';
import { socialAPI } from '@/services/social-api';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

function App() {
  const [pageState, setPageState] = useState<PageState>('landing');
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(async (countryName: string) => {
    setIsLoading(true);

    try {
      // Fetch country info from travel API
      const countryInfo = await travelAPI.getCountryInfo(countryName);

      if (countryInfo) {
        // Fetch reels from social API
        const reels = await socialAPI.getReels(countryName, 8);

        // Fetch opportunities from travel API
        const opportunities = await travelAPI.getOpportunities(countryName);

        const data: CountryData = {
          info: countryInfo,
          reels,
          opportunities,
        };

        setCountryData(data);
        setPageState('results');
        toast.success(`Welcome to ${countryInfo.name}!`, {
          description: `Found ${reels.length} reels and ${opportunities.length} opportunities.`,
        });
      } else {
        toast.error('Country not found', {
          description: 'Please try a different country name.',
        });
      }
    } catch (error) {
      toast.error('Something went wrong', {
        description: 'Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleBack = useCallback(() => {
    if (pageState === 'reel-detail' || pageState === 'opportunity-detail') {
      setPageState('results');
      setSelectedReel(null);
      setSelectedOpportunity(null);
    } else {
      setPageState('landing');
      setCountryData(null);
      setSelectedReel(null);
      setSelectedOpportunity(null);
    }
  }, [pageState]);

  const handleReelClick = useCallback((reel: Reel) => {
    setSelectedReel(reel);
    setPageState('reel-detail');
  }, []);

  const handleOpportunityClick = useCallback((opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    setPageState('opportunity-detail');
  }, []);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (pageState !== 'landing') {
        handleBack();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [pageState, handleBack]);

  return (
    <>
      <AnimatePresence mode="wait">
        {pageState === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LandingPage onSearch={handleSearch} isLoading={isLoading} />
          </motion.div>
        )}

        {pageState === 'results' && countryData && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ResultsPage
              countryData={countryData}
              onBack={handleBack}
              onReelClick={handleReelClick}
              onOpportunityClick={handleOpportunityClick}
            />
          </motion.div>
        )}

        {pageState === 'reel-detail' && selectedReel && countryData && (
          <motion.div
            key="reel-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ReelDetailPage
              reel={selectedReel}
              countryName={countryData.info.name}
              onBack={handleBack}
            />
          </motion.div>
        )}

        {pageState === 'opportunity-detail' && selectedOpportunity && (
          <motion.div
            key="opportunity-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <OpportunityDetailPage
              opportunity={selectedOpportunity}
              onBack={handleBack}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'var(--card)',
            color: 'var(--card-foreground)',
            border: '1px solid var(--border)',
          },
        }}
      />
    </>
  );
}

export default App;
