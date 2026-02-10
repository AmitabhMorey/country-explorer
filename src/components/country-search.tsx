'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Sparkles, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CountrySearchProps {
  onSearch: (country: string) => void;
  isLoading?: boolean;
  className?: string;
}

const popularCountries = [
  'Japan', 'Italy', 'Brazil', 'Thailand', 'France', 'Australia',
  'Spain', 'Germany', 'India', 'Canada', 'United Kingdom', 'Mexico',
  'South Korea', 'Vietnam', 'Greece', 'Portugal', 'Netherlands', 'Switzerland'
];

export const CountrySearch = ({ onSearch, isLoading = false, className }: CountrySearchProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = popularCountries.filter(country =>
        country.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      setShowSuggestions(false);
      onSearch(query.trim());
    }
  };

  const handleSuggestionClick = (country: string) => {
    setQuery(country);
    setShowSuggestions(false);
    onSearch(country);
  };

  const clearSearch = () => {
    setQuery('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className={cn('relative w-full max-w-xl', className)}>
      <form onSubmit={handleSubmit}>
        <motion.div
          className={cn(
            'relative flex items-center rounded-2xl bg-card backdrop-blur-md',
            'border-2 transition-all duration-300',
            isFocused
              ? 'border-primary/50 shadow-[0_0_30px_color-mix(in_srgb,var(--primary),transparent_70%)]'
              : 'border-border hover:border-primary/30'
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Search icon */}
          <div className="flex items-center justify-center pl-4">
            <motion.div
              animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: 'linear' }}
            >
              <Search className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              setIsFocused(true);
              if (query.length > 0) setShowSuggestions(true);
            }}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter a country name..."
            className={cn(
              'flex-1 bg-transparent px-4 py-4 text-foreground placeholder:text-muted-foreground',
              'focus:outline-none text-lg'
            )}
            disabled={isLoading}
          />

          {/* Clear button */}
          <AnimatePresence>
            {query && (
              <motion.button
                type="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={clearSearch}
                className="mr-2 p-1 rounded-full hover:bg-accent transition-colors"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={!query.trim() || isLoading}
            className={cn(
              'm-2 px-6 py-2 rounded-xl font-medium flex items-center gap-2',
              'bg-primary text-primary-foreground',
              'transition-all duration-300',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'hover:bg-primary/90 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--primary),transparent_50%)]'
            )}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="h-4 w-4" />
                </motion.div>
                <span>Exploring...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>Explore</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </form>

      {/* Suggestions dropdown */}
      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'absolute top-full left-0 right-0 mt-2 rounded-xl',
              'bg-card/95 backdrop-blur-md border border-border',
              'overflow-hidden z-50 shadow-xl'
            )}
          >
            {suggestions.map((country, index) => (
              <motion.button
                key={country}
                type="button"
                onClick={() => handleSuggestionClick(country)}
                className={cn(
                  'w-full px-4 py-3 flex items-center gap-3',
                  'hover:bg-accent transition-colors text-left',
                  index !== suggestions.length - 1 && 'border-b border-border'
                )}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-foreground">{country}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick suggestions */}
      <motion.div
        className="flex flex-wrap gap-2 mt-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-sm text-muted-foreground">Popular:</span>
        {['Japan', 'Italy', 'Brazil', 'Thailand'].map((country, index) => (
          <motion.button
            key={country}
            type="button"
            onClick={() => handleSuggestionClick(country)}
            className={cn(
              'text-sm px-3 py-1 rounded-full',
              'bg-secondary text-secondary-foreground hover:bg-secondary/80',
              'transition-all duration-200 border border-border'
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {country}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};
