export interface Reel {
  id: string;
  thumbnail: string;
  videoUrl: string;
  platform: 'instagram' | 'facebook' | 'tiktok' | 'youtube';
  likes: number;
  views: number;
  description: string;
  location: string;
  author: string;
  authorAvatar?: string;
  hashtags: string[];
  postedAt: string;
  externalUrl: string;
}

export interface Opportunity {
  id: string;
  title: string;
  type: 'work' | 'scholarship' | 'volunteer' | 'exchange' | 'internship' | 'teach';
  funding: 'free' | 'funded' | 'paid' | 'partial';
  description: string;
  fullDescription?: string;
  deadline?: string;
  startDate?: string;
  applyUrl: string;
  tags: string[];
  organization: string;
  organizationLogo?: string;
  organizationWebsite?: string;
  duration: string;
  location: string;
  requirements?: string[];
  benefits?: string[];
  salary?: string;
  languageRequirements?: string[];
  ageLimit?: string;
}

export interface CountryInfo {
  name: string;
  code: string;
  flag: string;
  capital: string;
  region: string;
  population: number;
  currency: string;
  language: string;
  description: string;
  images: string[];
}

export interface CountryData {
  info: CountryInfo;
  reels: Reel[];
  opportunities: Opportunity[];
  attractions?: Attraction[];
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
}

export interface FlightDeal {
  id: string;
  origin: string;
  destination: string;
  price: number;
  currency: string;
  airline: string;
  departureDate: string;
  returnDate?: string;
  bookingUrl: string;
}

export type PageState = 'landing' | 'results' | 'reel-detail' | 'opportunity-detail';

// Amadeus API Types
export interface AmadeusFlightOffer {
  type: string;
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  nonHomogeneous: boolean;
  oneWay: boolean;
  lastTicketingDate: string;
  numberOfBookableSeats: number;
  itineraries: {
    duration: string;
    segments: {
      departure: {
        iataCode: string;
        terminal?: string;
        at: string;
      };
      arrival: {
        iataCode: string;
        terminal?: string;
        at: string;
      };
      carrierCode: string;
      number: string;
      aircraft: {
        code: string;
      };
      operating?: {
        carrierCode: string;
      };
      duration: string;
      id: string;
      numberOfStops: number;
      blacklistedInEU: boolean;
    }[];
  }[];
  price: {
    currency: string;
    total: string;
    base: string;
    fees: {
      amount: string;
      type: string;
    }[];
    grandTotal: string;
  };
  pricingOptions: {
    fareType: string[];
    includedCheckedBagsOnly: boolean;
  };
  validatingAirlineCodes: string[];
  travelerPricings: {
    travelerId: string;
    fareOption: string;
    travelerType: string;
    price: {
      currency: string;
      total: string;
      base: string;
    };
    fareDetailsBySegment: {
      segmentId: string;
      cabin: string;
      fareBasis: string;
      class: string;
      includedCheckedBags: {
        quantity: number;
      };
    }[];
  }[];
}

export interface AmadeusHotelOffer {
  type: string;
  hotel: {
    type: string;
    hotelId: string;
    chainCode: string;
    dupeId: string;
    name: string;
    cityCode: string;
    latitude: number;
    longitude: number;
  };
  available: boolean;
  offers: {
    id: string;
    checkInDate: string;
    checkOutDate: string;
    rateCode: string;
    roomType: {
      type: string;
      estimatedCellSize: string;
      beds: number;
      bedType: string;
    };
    price: {
      currency: string;
      base: string;
      total: string;
      variations: {
        average: {
          base: string;
        };
        changes: {
          startDate: string;
          endDate: string;
          base: string;
        }[];
      };
    };
    commission?: {
      percentage: string;
    };
    boardType: string;
    cancellation?: {
      type: string;
      description: {
        text: string;
      };
    };
  }[];
  self: string;
}
