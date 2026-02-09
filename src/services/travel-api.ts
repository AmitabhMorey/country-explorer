import type { CountryInfo, Opportunity } from '@/types';

// Amadeus API Configuration (for future use)
// const AMADEUS_API_KEY = import.meta.env.VITE_AMADEUS_API_KEY || 'test_key';
// const AMADEUS_API_SECRET = import.meta.env.VITE_AMADEUS_API_SECRET || 'test_secret';
// const AMADEUS_BASE_URL = 'https://api.amadeus.com/v2';

// Country data mapping
const countryDataMap: Record<string, CountryInfo> = {
  japan: {
    name: 'Japan',
    code: 'JP',
    flag: '🇯🇵',
    capital: 'Tokyo',
    region: 'Asia',
    population: 125800000,
    currency: 'Japanese Yen (¥)',
    language: 'Japanese',
    description: 'Land of the Rising Sun - where ancient traditions meet cutting-edge technology. Experience the perfect blend of historic temples, futuristic cities, and breathtaking natural landscapes.',
    images: [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
    ],
  },
  italy: {
    name: 'Italy',
    code: 'IT',
    flag: '🇮🇹',
    capital: 'Rome',
    region: 'Europe',
    population: 59000000,
    currency: 'Euro (€)',
    language: 'Italian',
    description: 'Home to unparalleled art, history, and the world\'s finest cuisine. From the canals of Venice to the ruins of Rome, every corner tells a story.',
    images: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800',
      'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=800',
    ],
  },
  brazil: {
    name: 'Brazil',
    code: 'BR',
    flag: '🇧🇷',
    capital: 'Brasília',
    region: 'South America',
    population: 214300000,
    currency: 'Brazilian Real (R$)',
    language: 'Portuguese',
    description: 'Vibrant culture, stunning beaches, and the heart of the Amazon rainforest. Experience carnival, football, and natural wonders.',
    images: [
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800',
      'https://images.unsplash.com/photo-1593995863951-57c27f47b429?w=800',
      'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800',
    ],
  },
  france: {
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    capital: 'Paris',
    region: 'Europe',
    population: 67390000,
    currency: 'Euro (€)',
    language: 'French',
    description: 'The epitome of art, fashion, gastronomy, and romance. From Parisian cafes to lavender fields in Provence.',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
      'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800',
    ],
  },
  australia: {
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    capital: 'Canberra',
    region: 'Oceania',
    population: 25690000,
    currency: 'Australian Dollar (A$)',
    language: 'English',
    description: 'Adventure awaits in the Land Down Under with unique wildlife, stunning beaches, and the Outback.',
    images: [
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800',
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
      'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=800',
    ],
  },
  thailand: {
    name: 'Thailand',
    code: 'TH',
    flag: '🇹🇭',
    capital: 'Bangkok',
    region: 'Asia',
    population: 69950000,
    currency: 'Thai Baht (฿)',
    language: 'Thai',
    description: 'The Land of Smiles - tropical paradise with rich Buddhist heritage, stunning islands, and world-famous street food.',
    images: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800',
      'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800',
    ],
  },
  spain: {
    name: 'Spain',
    code: 'ES',
    flag: '🇪🇸',
    capital: 'Madrid',
    region: 'Europe',
    population: 47350000,
    currency: 'Euro (€)',
    language: 'Spanish',
    description: 'Passionate culture, stunning architecture, vibrant nightlife, and world-renowned cuisine.',
    images: [
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800',
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
      'https://images.unsplash.com/photo-1518182170546-0766bc6f9213?w=800',
    ],
  },
  germany: {
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    capital: 'Berlin',
    region: 'Europe',
    population: 83200000,
    currency: 'Euro (€)',
    language: 'German',
    description: 'Precision engineering, rich history, fairytale castles, and Oktoberfest celebrations.',
    images: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
      'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800',
      'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=800',
    ],
  },
  india: {
    name: 'India',
    code: 'IN',
    flag: '🇮🇳',
    capital: 'New Delhi',
    region: 'Asia',
    population: 1380000000,
    currency: 'Indian Rupee (₹)',
    language: 'Hindi, English',
    description: 'A kaleidoscope of cultures, colors, and spiritual experiences. From the Taj Mahal to Kerala backwaters.',
    images: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
    ],
  },
  canada: {
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    capital: 'Ottawa',
    region: 'North America',
    population: 38000000,
    currency: 'Canadian Dollar (C$)',
    language: 'English, French',
    description: 'Vast wilderness, multicultural cities, friendly locals, and stunning natural landscapes.',
    images: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800',
      'https://images.unsplash.com/photo-1561134643-66376771383e?w=800',
    ],
  },
};

// Real travel opportunities data with actual links
const opportunitiesData: Record<string, Opportunity[]> = {
  japan: [
    {
      id: 'japan-1',
      title: 'JET Programme - Assistant Language Teacher',
      type: 'teach',
      funding: 'paid',
      description: 'Teach English in Japanese public schools while experiencing authentic Japanese culture.',
      fullDescription: 'The JET Programme is one of the most prestigious English teaching programs in Japan. As an Assistant Language Teacher (ALT), you will work in public schools across Japan, helping Japanese students learn English while immersing yourself in Japanese culture. The program provides competitive salary, airfare, and comprehensive support.',
      deadline: '2026-01-10',
      startDate: '2026-07-01',
      applyUrl: 'https://jetprogramme.org/en/',
      tags: ['Teaching', 'English', 'Cultural Exchange', 'Government Program'],
      organization: 'Japanese Government (CLAIR)',
      organizationWebsite: 'https://jetprogramme.org',
      duration: '1-5 years',
      location: 'Various locations across Japan',
      requirements: [
        'Bachelor\'s degree by departure date',
        'Native English speaker',
        'Interest in Japanese culture',
        'Strong communication skills'
      ],
      benefits: [
        '¥3,360,000 - ¥3,960,000 annual salary',
        'Round-trip airfare covered',
        'Health insurance',
        'Paid vacation',
        'Housing assistance'
      ],
      salary: '¥280,000 - ¥330,000 per month',
    },
    {
      id: 'japan-2',
      title: 'Working Holiday Visa Program',
      type: 'work',
      funding: 'paid',
      description: 'Work and travel in Japan for up to one year with the Working Holiday Visa.',
      fullDescription: 'The Working Holiday Visa allows young people from participating countries to stay in Japan for up to 12 months, working to supplement their travel funds. This is a great way to experience Japan while earning money through various jobs including hospitality, teaching, and seasonal work.',
      deadline: 'Rolling basis',
      startDate: 'Flexible',
      applyUrl: 'https://www.mofa.go.jp/j_info/visit/w_holiday/',
      tags: ['Work & Travel', 'Visa Program', 'Flexible'],
      organization: 'Japan Ministry of Foreign Affairs',
      organizationWebsite: 'https://www.mofa.go.jp',
      duration: 'Up to 12 months',
      location: 'Nationwide',
      requirements: [
        'Age 18-30 (varies by country)',
        'Citizen of participating country',
        'Sufficient funds for initial stay',
        'Return ticket or funds to purchase one'
      ],
      benefits: [
        'Freedom to work various jobs',
        'No sponsorship required',
        'Multiple entry visa',
        'Cultural immersion experience'
      ],
    },
    {
      id: 'japan-3',
      title: 'MEXT Scholarship - Undergraduate',
      type: 'scholarship',
      funding: 'funded',
      description: 'Fully funded scholarship for international students to study at Japanese universities.',
      fullDescription: 'The Ministry of Education, Culture, Sports, Science and Technology (MEXT) offers scholarships for international students wishing to study at Japanese universities. This comprehensive scholarship covers tuition, monthly stipend, and airfare.',
      deadline: '2026-05-31',
      startDate: '2027-04-01',
      applyUrl: 'https://www.mext.go.jp/a_menu/koutou/ryugaku/',
      tags: ['Scholarship', 'University', 'Full Funding', 'Government'],
      organization: 'MEXT (Japanese Government)',
      organizationWebsite: 'https://www.mext.go.jp',
      duration: '4-6 years (degree program)',
      location: 'Various universities in Japan',
      requirements: [
        'High school graduate or equivalent',
        'Born on or after April 2, 2001',
        'Willing to learn Japanese',
        'Academic excellence'
      ],
      benefits: [
        'Full tuition coverage',
        '¥117,000-¥120,000 monthly stipend',
        'Round-trip airfare',
        'Japanese language training'
      ],
    },
  ],
  italy: [
    {
      id: 'italy-1',
      title: 'Teach English with TEFL in Italy',
      type: 'teach',
      funding: 'paid',
      description: 'Teach English in Italian schools and language academies across the country.',
      fullDescription: 'Italy has a high demand for English teachers. With a TEFL certificate, you can teach in private language schools, public schools, or offer private lessons. Major cities like Rome, Milan, and Florence have the most opportunities.',
      deadline: 'Rolling basis',
      startDate: 'Flexible',
      applyUrl: 'https://www.tefl.org/tefl-jobs/italy/',
      tags: ['Teaching', 'TEFL', 'English', 'Europe'],
      organization: 'Various Language Schools',
      organizationWebsite: 'https://www.tefl.org',
      duration: '6-12 months',
      location: 'Rome, Milan, Florence, Naples',
      requirements: [
        'TEFL/TESOL certification (120+ hours)',
        'Bachelor\'s degree preferred',
        'Native or near-native English',
        'EU citizenship or work visa'
      ],
      benefits: [
        '€1,000-€2,000 monthly salary',
        'Experience Italian culture',
        'Possibility of contract extension',
        'Free Italian lessons often included'
      ],
      salary: '€1,000 - €2,000 per month',
    },
    {
      id: 'italy-2',
      title: 'WWOOF Italy - Organic Farming',
      type: 'volunteer',
      funding: 'free',
      description: 'Work on organic farms in exchange for room and board. Experience rural Italy!',
      fullDescription: 'WWOOF (World Wide Opportunities on Organic Farms) connects volunteers with organic farmers in Italy. In exchange for 4-6 hours of work per day, you receive accommodation and meals. This is an excellent way to experience Italian countryside, learn about organic farming, and practice Italian.',
      deadline: 'Rolling basis',
      startDate: 'Flexible',
      applyUrl: 'https://wwoof.it/',
      tags: ['Volunteer', 'Organic Farming', 'Cultural Exchange', 'Free Stay'],
      organization: 'WWOOF Italy',
      organizationWebsite: 'https://wwoof.it',
      duration: '2 weeks - 6 months',
      location: 'Rural locations across Italy',
      requirements: [
        'WWOOF membership (€35/year)',
        'Willingness to work 4-6 hours daily',
        'Interest in organic farming',
        'Basic Italian helpful but not required'
      ],
      benefits: [
        'Free accommodation',
        'Meals provided',
        'Learn organic farming',
        'Experience authentic Italian life'
      ],
    },
    {
      id: 'italy-3',
      title: 'Erasmus+ Study Exchange',
      type: 'exchange',
      funding: 'funded',
      description: 'Study at Italian universities as part of the EU Erasmus+ exchange program.',
      fullDescription: 'Erasmus+ is the EU\'s program to support education, training, youth and sport in Europe. As an exchange student, you can study at partner Italian universities for 3-12 months while receiving a monthly grant to cover living expenses.',
      deadline: 'Varies by home university',
      startDate: 'September 2026 or February 2027',
      applyUrl: 'https://erasmus-plus.ec.europa.eu/',
      tags: ['Student Exchange', 'EU Program', 'University', 'Grant'],
      organization: 'European Union',
      organizationWebsite: 'https://erasmus-plus.ec.europa.eu',
      duration: '3-12 months',
      location: 'Partner universities in Italy',
      requirements: [
        'Enrolled at a participating university',
        'Completed at least one year of study',
        'Good academic standing',
        'EU citizen or eligible non-EU student'
      ],
      benefits: [
        '€330-€600 monthly grant',
        'Tuition fee waiver at host university',
        'Academic credits transfer',
        'Travel allowance'
      ],
    },
  ],
  // Add more countries as needed
};

// Default opportunities for countries not in the list
const defaultOpportunities: Opportunity[] = [
  {
    id: 'default-1',
    title: 'Workaway - Work & Travel Program',
    type: 'work',
    funding: 'free',
    description: 'Work in exchange for accommodation and meals. Connect with hosts worldwide.',
    fullDescription: 'Workaway connects travelers with hosts who need help with various projects. In exchange for 4-5 hours of work per day, you get free accommodation and often meals. Opportunities include farming, hospitality, teaching, childcare, and more.',
    deadline: 'Rolling basis',
    startDate: 'Flexible',
    applyUrl: 'https://www.workaway.info/',
    tags: ['Work Exchange', 'Free Accommodation', 'Cultural Exchange'],
    organization: 'Workaway',
    organizationWebsite: 'https://www.workaway.info',
    duration: '1 week - 6 months',
    location: 'Various locations',
    requirements: [
      'Workaway membership ($49/year)',
      'Willingness to work 4-5 hours daily',
      'Open-minded attitude',
      'Travel insurance recommended'
    ],
    benefits: [
      'Free accommodation',
      'Meals often included',
      'Cultural immersion',
      'Make local connections'
    ],
  },
  {
    id: 'default-2',
    title: 'Worldpackers - Volunteer Abroad',
    type: 'volunteer',
    funding: 'free',
    description: 'Volunteer in exchange for accommodation. Join a community of travelers making a positive impact.',
    fullDescription: 'Worldpackers is a community-based platform connecting travelers with hosts who need help. Volunteer at hostels, NGOs, farms, schools, and more. In exchange for your skills and time, receive free accommodation and unique experiences.',
    deadline: 'Rolling basis',
    startDate: 'Flexible',
    applyUrl: 'https://www.worldpackers.com/',
    tags: ['Volunteer', 'Free Stay', 'Community', 'Social Impact'],
    organization: 'Worldpackers',
    organizationWebsite: 'https://www.worldpackers.com',
    duration: '1 week - 6 months',
    location: 'Worldwide',
    requirements: [
      'Worldpackers membership ($49/year)',
      'Skills to offer hosts',
      'Commitment to agreed schedule',
      'Travel insurance'
    ],
    benefits: [
      'Free accommodation',
      'WP Insurance (trip protection)',
      'Community support',
      'Skills development'
    ],
  },
  {
    id: 'default-3',
    title: 'AIESEC Global Talent Internship',
    type: 'internship',
    funding: 'paid',
    description: 'Professional internships abroad with AIESEC, the world\'s largest youth-run organization.',
    fullDescription: 'AIESEC offers professional internships in various fields including marketing, IT, business development, and engineering. Gain international work experience while developing leadership skills and building a global network.',
    deadline: 'Rolling basis',
    startDate: 'Flexible',
    applyUrl: 'https://aiesec.org/',
    tags: ['Internship', 'Professional', 'Youth', 'Leadership'],
    organization: 'AIESEC',
    organizationWebsite: 'https://aiesec.org',
    duration: '6 weeks - 18 months',
    location: '126 countries worldwide',
    requirements: [
      'Age 18-30',
      'University student or recent graduate',
      'English proficiency',
      'Relevant skills for the position'
    ],
    benefits: [
      'Salary to cover living expenses',
      'Professional development',
      'Global network',
      'Leadership training'
    ],
  },
];

class TravelAPIService {
  // For future Amadeus API integration
  // private accessToken: string | null = null;
  // private tokenExpiry: number = 0;

  // Get country information
  async getCountryInfo(countryName: string): Promise<CountryInfo | null> {
    const normalizedName = countryName.toLowerCase().trim();
    
    // Check if we have data for this country
    if (countryDataMap[normalizedName]) {
      return countryDataMap[normalizedName];
    }

    // Try to find by partial match
    for (const [key, data] of Object.entries(countryDataMap)) {
      if (key.includes(normalizedName) || normalizedName.includes(key)) {
        return data;
      }
    }

    // Return generic data if not found
    return {
      name: countryName.charAt(0).toUpperCase() + countryName.slice(1),
      code: 'XX',
      flag: '🌍',
      capital: 'Unknown',
      region: 'Unknown',
      population: 0,
      currency: 'Unknown',
      language: 'Unknown',
      description: `Explore the beauty and opportunities in ${countryName}. A wonderful destination waiting to be discovered.`,
      images: [
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      ],
    };
  }

  // Get opportunities for a country
  async getOpportunities(countryName: string): Promise<Opportunity[]> {
    const normalizedName = countryName.toLowerCase().trim();
    
    if (opportunitiesData[normalizedName]) {
      return opportunitiesData[normalizedName];
    }

    // Return default opportunities with country name customized
    return defaultOpportunities.map(opp => ({
      ...opp,
      id: `${normalizedName}-${opp.id}`,
      description: opp.description,
      fullDescription: opp.fullDescription?.replace('various locations', countryName),
    }));
  }

  // Get flight deals (mock implementation - would use Amadeus API in production)
  async getFlightDeals(origin: string, destination: string): Promise<any[]> {
    // This would call the Amadeus Flight Offers Search API
    // For now, return mock data
    return [
      {
        id: 'flight-1',
        origin,
        destination,
        price: 650,
        currency: 'USD',
        airline: 'Sample Airlines',
        departureDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        bookingUrl: `https://www.google.com/travel/flights?q=Flights%20from%20${origin}%20to%20${destination}`,
      },
    ];
  }

  // Get hotel deals (mock implementation - would use Amadeus API in production)
  async getHotelDeals(_cityCode: string): Promise<any[]> {
    // This would call the Amadeus Hotel Search API
    return [];
  }
}

export const travelAPI = new TravelAPIService();
