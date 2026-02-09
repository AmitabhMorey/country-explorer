import type { Reel } from '@/types';

// Real travel content creators and hashtags by country
const countryContentMap: Record<string, {
  creators: string[];
  hashtags: string[];
  locations: string[];
}> = {
  japan: {
    creators: ['@japantravel', '@tokyowalker', '@kyotogram', '@japanwireless', '@gaijinpot'],
    hashtags: ['#japantravel', '#tokyo', '#kyoto', '#japan_vacation', '#explorejapan', '#japantrip'],
    locations: ['Tokyo', 'Kyoto', 'Osaka', 'Mount Fuji', 'Hokkaido'],
  },
  italy: {
    creators: ['@italy.vacations', '@romeitaly', '@veniceitaly', '@italy_hidden_gems', '@dolcevita'],
    hashtags: ['#italytravel', '#rome', '#venice', '#amalficoast', '#italy_vacations', '#dolcevita'],
    locations: ['Rome', 'Venice', 'Florence', 'Amalfi Coast', 'Milan'],
  },
  brazil: {
    creators: ['@braziltravel', '@riodejaneiro', '@visitbrazil', '@brazilgram', '@brazilian.adventure'],
    hashtags: ['#brazil', '#riodejaneiro', '#saopaulo', '#visitbrazil', '#braziltravel', '#amazon'],
    locations: ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Amazon Rainforest', 'Iguaçu Falls'],
  },
  france: {
    creators: ['@france.vacations', '@parisjetaime', '@visitfrance', '@frenchriviera', '@loirevalley'],
    hashtags: ['#france', '#paris', '#frenchriviera', '#visitfrance', '#france_vacations', '#provence'],
    locations: ['Paris', 'Nice', 'Lyon', 'Provence', 'French Riviera'],
  },
  australia: {
    creators: ['@australia', '@sydney', '@visitmelbourne', '@greatbarrierreef', '@outbackaustralia'],
    hashtags: ['#australia', '#sydney', '#melbourne', '#greatbarrierreef', '#visitAustralia', '#outback'],
    locations: ['Sydney', 'Melbourne', 'Gold Coast', 'Great Barrier Reef', 'Uluru'],
  },
  thailand: {
    creators: ['@thailand', '@bangkok', '@phuket', '@chiangmai', '@thailandtravel'],
    hashtags: ['#thailand', '#bangkok', '#phuket', '#chiangmai', '#thailandtravel', '#amazingthailand'],
    locations: ['Bangkok', 'Phuket', 'Chiang Mai', 'Krabi', 'Ayutthaya'],
  },
  spain: {
    creators: ['@spain', '@barcelona', '@madrid', '@visitspain', '@spain_vacations'],
    hashtags: ['#spain', '#barcelona', '#madrid', '#visitspain', '#spaintravel', '#costadelsol'],
    locations: ['Barcelona', 'Madrid', 'Seville', 'Valencia', 'Costa del Sol'],
  },
  germany: {
    creators: ['@germanytourism', '@berlin', '@munich', '@visitgermany', '@germanytravel'],
    hashtags: ['#germany', '#berlin', '#munich', '#visitgermany', '#germanytravel', '#oktoberfest'],
    locations: ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Black Forest'],
  },
  india: {
    creators: ['@incredibleindia', '@delhi', '@mumbai', '@rajasthan', '@keralatourism'],
    hashtags: ['#india', '#incredibleindia', '#delhi', '#mumbai', '#rajasthan', '#kerala'],
    locations: ['Delhi', 'Mumbai', 'Jaipur', 'Kerala', 'Goa'],
  },
  canada: {
    creators: ['@canada', '@toronto', '@vancouver', '@banff', '@explorecanada'],
    hashtags: ['#canada', '#toronto', '#vancouver', '#banff', '#explorecanada', '#canadianrockies'],
    locations: ['Toronto', 'Vancouver', 'Montreal', 'Banff', 'Quebec City'],
  },
};

// Real Unsplash images for each country
const countryImages: Record<string, string[]> = {
  japan: [
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=400&h=600&fit=crop',
  ],
  italy: [
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=400&h=600&fit=crop',
  ],
  brazil: [
    'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1593995863951-57c27f47b429?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1575881875475-31023242e3f9?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1565807662803-de5b02d1d2f2?w=400&h=600&fit=crop',
  ],
  france: [
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1520939817895-060bdaf4de1e?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1549144511-f099e773c147?w=400&h=600&fit=crop',
  ],
  australia: [
    'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1524293568345-75d62c3664f7?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1598948485421-33a16539d3f1?w=400&h=600&fit=crop',
  ],
  thailand: [
    'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop',
  ],
  spain: [
    'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518182170546-0766bc6f9213?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511527661048-bbc404a4284c?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=400&h=600&fit=crop',
  ],
  germany: [
    'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1546726747-421c6d69c929?w=400&h=600&fit=crop',
  ],
  india: [
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1561361058-4b0475d3d6d1?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576487503230-b6dc3ad12eea?w=400&h=600&fit=crop',
  ],
  canada: [
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1561134643-66376771383e?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=400&h=600&fit=crop',
  ],
};

// Generic images for unknown countries
const genericImages = [
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=600&fit=crop',
];

// Caption templates
const captionTemplates = [
  'Exploring the beauty of {location}! {hashtag}',
  'Can\'t get enough of this view {hashtag}',
  'Hidden gems in {location} you need to visit {hashtag}',
  'Living my best life in {location} {hashtag}',
  'The magic of {location} is real {hashtag}',
  'Wanderlust satisfied in {location} {hashtag}',
  'Sunset vibes in {location} {hashtag}',
  'Adventure awaits in {location} {hashtag}',
];

class SocialMediaService {
  // Generate reels for a country
  async getReels(countryName: string, limit: number = 8): Promise<Reel[]> {
    const normalizedName = countryName.toLowerCase().trim();
    const content = countryContentMap[normalizedName] || {
      creators: ['@traveler', '@wanderlust', '@explorer', '@adventure', '@globetrotter'],
      hashtags: [`#${normalizedName}travel`, '#travel', '#wanderlust', '#explore', '#adventure'],
      locations: [countryName.charAt(0).toUpperCase() + countryName.slice(1)],
    };

    const images = countryImages[normalizedName] || genericImages;
    const reels: Reel[] = [];

    for (let i = 0; i < limit; i++) {
      const creator = content.creators[i % content.creators.length];
      const location = content.locations[i % content.locations.length];
      const hashtag = content.hashtags.slice(0, 3).join(' ');
      const captionTemplate = captionTemplates[i % captionTemplates.length];
      
      reels.push({
        id: `${normalizedName}-reel-${i}`,
        thumbnail: images[i % images.length],
        videoUrl: this.generateVideoUrl(normalizedName, i),
        platform: i % 3 === 0 ? 'instagram' : i % 3 === 1 ? 'tiktok' : 'youtube',
        likes: this.generateRandomLikes(),
        views: this.generateRandomViews(),
        description: captionTemplate.replace('{location}', location).replace('{hashtag}', hashtag),
        location,
        author: creator,
        hashtags: content.hashtags.slice(0, 5),
        postedAt: this.generateRandomDate(),
        externalUrl: this.generateExternalUrl(normalizedName, i),
      });
    }

    return reels;
  }

  // Generate search URLs for real content
  private generateExternalUrl(country: string, index: number): string {
    const platforms = [
      `https://www.instagram.com/explore/tags/${country}travel/`,
      `https://www.tiktok.com/tag/${country}travel`,
      `https://www.youtube.com/results?search_query=${country}+travel+vlog`,
    ];
    return platforms[index % platforms.length];
  }

  private generateVideoUrl(country: string, index: number): string {
    // Return search URLs since we can't embed actual videos
    return this.generateExternalUrl(country, index);
  }

  private generateRandomLikes(): number {
    return Math.floor(Math.random() * 90000) + 10000;
  }

  private generateRandomViews(): number {
    return Math.floor(Math.random() * 900000) + 100000;
  }

  private generateRandomDate(): string {
    const days = Math.floor(Math.random() * 30);
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString();
  }

  // Get trending hashtags for a country
  async getTrendingHashtags(countryName: string): Promise<string[]> {
    const normalizedName = countryName.toLowerCase().trim();
    const content = countryContentMap[normalizedName];
    
    if (content) {
      return content.hashtags;
    }

    return [
      `#${normalizedName}travel`,
      `#visit${normalizedName}`,
      `#${normalizedName}trip`,
      '#travel',
      '#wanderlust',
      '#explore',
    ];
  }

  // Get real social media search links
  getSocialSearchLinks(countryName: string): { platform: string; url: string }[] {
    const encoded = encodeURIComponent(countryName);
    return [
      {
        platform: 'Instagram',
        url: `https://www.instagram.com/explore/tags/${encoded}travel/`,
      },
      {
        platform: 'TikTok',
        url: `https://www.tiktok.com/tag/${encoded}travel`,
      },
      {
        platform: 'YouTube',
        url: `https://www.youtube.com/results?search_query=${encoded}+travel+vlog`,
      },
      {
        platform: 'Facebook',
        url: `https://www.facebook.com/search/videos?q=${encoded}+travel`,
      },
    ];
  }
}

export const socialAPI = new SocialMediaService();
