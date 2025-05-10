import { Category, NewsItem, CategoryFilter } from '../types';
import { Smartphone, Briefcase, Dumbbell, Heart, FlaskRound as Flask, Film, Vote, LayoutGrid } from 'lucide-react';

export const CATEGORIES: CategoryFilter[] = [
  { 
    id: 'all', 
    name: 'All News', 
    color: 'bg-gray-600', 
    icon: 'LayoutGrid' 
  },
  { 
    id: 'technology', 
    name: 'Technology', 
    color: 'bg-blue-500', 
    icon: 'Smartphone' 
  },
  { 
    id: 'business', 
    name: 'Business', 
    color: 'bg-green-500', 
    icon: 'Briefcase' 
  },
  { 
    id: 'sports', 
    name: 'Sports', 
    color: 'bg-orange-500', 
    icon: 'Dumbbell' 
  },
  { 
    id: 'health', 
    name: 'Health', 
    color: 'bg-red-500', 
    icon: 'Heart' 
  },
  { 
    id: 'science', 
    name: 'Science', 
    color: 'bg-purple-500', 
    icon: 'Flask' 
  },
  { 
    id: 'entertainment', 
    name: 'Entertainment', 
    color: 'bg-pink-500', 
    icon: 'Film' 
  },
  { 
    id: 'politics', 
    name: 'Politics', 
    color: 'bg-amber-500', 
    icon: 'Vote' 
  },
];

export const getCategoryIcon = (categoryId: Category) => {
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  switch(category?.icon) {
    case 'Smartphone': return Smartphone;
    case 'Briefcase': return Briefcase;
    case 'Dumbbell': return Dumbbell;
    case 'Heart': return Heart;
    case 'Flask': return Flask;
    case 'Film': return Film;
    case 'Vote': return Vote;
    default: return LayoutGrid;
  }
};

export const getCategoryColor = (categoryId: Category): string => {
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  return category?.color || 'bg-gray-600';
};

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Tech Giant Unveils Revolutionary AI Assistant',
    summary: 'The latest AI technology promises to transform how we interact with digital devices.',
    content: 'In a groundbreaking announcement today, leading tech company unveiled its newest AI assistant that promises to revolutionize the way users interact with their devices. The AI, which has been in development for over three years, can understand context, remember conversations, and learn user preferences over time.\n\n"This is not just another virtual assistant," said the CEO during the product launch. "This is the beginning of truly intuitive human-computer interaction."\n\nAnalysts predict this technology could set new standards in the industry and potentially disrupt multiple sectors including customer service, education, and healthcare.',
    author: 'Alex Chen',
    source: 'Tech Today',
    publishedAt: '2025-05-15T09:30:00Z',
    category: 'technology',
    imageUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '#',
    trending: true,
    likes: 1243,
    comments: 89,
    shares: 328
  },
  {
    id: '2',
    title: 'Global Markets Reach Record Highs Amid Economic Recovery',
    summary: 'Stock markets worldwide are experiencing unprecedented growth as economies bounce back.',
    content: 'Global financial markets reached all-time highs today as economic data continues to show strong recovery patterns across major economies. The comprehensive market index rose by 2.8% in a single day, marking the largest daily gain in over 18 months.\n\nEconomists attribute this surge to several factors including successful vaccination campaigns, reopening of international travel, and renewed consumer confidence. Corporate earnings reports also exceeded expectations across multiple sectors.\n\n"We\'re seeing the kind of broad-based recovery that suggests sustainable long-term growth," noted a leading market analyst. "This isn\'t just a technical bounce but represents real economic momentum."',
    author: 'Maya Williams',
    source: 'Financial Insight',
    publishedAt: '2025-05-15T10:15:00Z',
    category: 'business',
    imageUrl: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '#',
    trending: true,
    likes: 856,
    comments: 63,
    shares: 215
  },
  {
    id: '3',
    title: 'International Soccer Star Signs Record-Breaking Contract',
    summary: 'A historic deal reshapes the landscape of professional soccer transfers.',
    content: 'In what many are calling the transfer of the decade, international soccer sensation has signed a record-breaking contract worth an estimated $250 million over five years. The deal, which includes unprecedented performance bonuses and image rights, makes the 24-year-old the highest-paid athlete in team sports history.\n\n"This signing represents our commitment to building the strongest possible team and competing at the highest level," said the club president during the packed press conference.\n\nFans have responded enthusiastically, with season ticket sales spiking 300% in the hours following the announcement. Sports marketing experts predict the club will recoup a significant portion of the contract value through merchandise sales alone.',
    author: 'Carlos Mendez',
    source: 'Sports Network',
    publishedAt: '2025-05-15T11:45:00Z',
    category: 'sports',
    imageUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '#',
    trending: false,
    likes: 2751,
    comments: 325,
    shares: 541
  },
  {
    id: '4',
    title: 'Breakthrough in Cancer Research Shows Promise for Early Detection',
    summary: 'Scientists develop a new blood test that can detect multiple cancer types years earlier than current methods.',
    content: 'Medical researchers have announced a significant breakthrough in cancer detection technology that could transform early diagnosis protocols worldwide. The new blood test, developed after a decade of research, can detect molecular signatures of up to 50 different cancer types up to four years before conventional diagnostic methods.\n\n"The implications for survival rates are enormous," explained the lead researcher. "When cancer is detected at stage one, survival rates can be as high as 90% compared to as low as 10% for late-stage diagnosis."\n\nClinical trials involving 10,000 participants showed the test has a sensitivity of 99.3% with a false positive rate of just 0.07%. Medical authorities are fast-tracking approval processes with expectations that the test could be widely available within 18 months.',
    author: 'Dr. Sarah Johnson',
    source: 'Medical Journal',
    publishedAt: '2025-05-15T13:20:00Z',
    category: 'health',
    imageUrl: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '#',
    trending: true,
    likes: 3482,
    comments: 219,
    shares: 1287
  },
  {
    id: '5',
    title: 'Scientists Confirm Major Breakthrough in Quantum Computing',
    summary: 'A new quantum processor has achieved quantum supremacy for practical applications.',
    content: 'Quantum computing has taken a significant leap forward as scientists announced they have achieved reliable quantum operations at room temperature. The breakthrough, which eliminates the need for extreme cooling requirements that have hindered practical applications, was published today in a leading scientific journal.\n\n"This solves one of the biggest obstacles to commercializing quantum computing technology," said the project leader. "We can now focus on scaling the technology rather than the infrastructure around it."\n\nThe innovation uses a novel approach to quantum bit stability that experts say could accelerate the timeline for practical quantum computers by at least five years. Several major tech companies have already announced partnerships to develop commercial applications based on the new technology.',
    author: 'Dr. Raj Patel',
    source: 'Science Today',
    publishedAt: '2025-05-15T14:10:00Z',
    category: 'science',
    imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '#',
    trending: false,
    likes: 1872,
    comments: 146,
    shares: 793
  },
  {
    id: '6',
    title: 'Acclaimed Director Announces Groundbreaking Virtual Reality Film Series',
    summary: 'The Oscar-winning filmmaker is pushing cinematic boundaries with an immersive VR experience.',
    content: 'In a move that could redefine filmmaking, the acclaimed director has announced an ambitious virtual reality film series that will blend traditional narrative storytelling with immersive interactive elements. The project, backed by a major studio with a $200 million budget, will be released in episodes both in traditional theaters and on VR platforms.\n\n"We\'re not just adapting cinema to VR; we\'re creating a completely new art form," the director explained during the project unveiling. "Viewers won\'t just watch the story unfold—they\'ll experience it from within."\n\nThe series will feature several A-list actors who have undergone specialized performance training for the VR medium. Industry insiders are calling this the most significant evolution in storytelling since the introduction of sound to motion pictures.',
    author: 'Emma Rodriguez',
    source: 'Entertainment Weekly',
    publishedAt: '2025-05-15T16:30:00Z',
    category: 'entertainment',
    imageUrl: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '#',
    trending: true,
    likes: 2134,
    comments: 187,
    shares: 524
  },
  {
    id: '7',
    title: 'Historic Climate Agreement Reached After Marathon Negotiations',
    summary: 'World leaders commit to ambitious carbon reduction targets with unprecedented enforcement mechanisms.',
    content: 'After two weeks of intense negotiations, 194 countries have signed what experts are calling the most significant climate agreement in history. The accord includes legally binding emissions targets, substantial financial commitments for developing nations, and first-of-its-kind enforcement mechanisms with economic consequences for non-compliance.\n\n"This agreement represents a fundamental shift in how the international community addresses climate change," said the UN Secretary-General. "For the first time, we have universal commitment paired with real accountability."\n\nThe agreement aims to limit global warming to 1.5°C through a 65% reduction in carbon emissions by 2035 and carbon neutrality by 2050. A $1 trillion climate fund will help developing nations transition to renewable energy infrastructure while protecting vulnerable communities already experiencing climate impacts.',
    author: 'James Wilson',
    source: 'Global Policy',
    publishedAt: '2025-05-15T18:45:00Z',
    category: 'politics',
    imageUrl: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '#',
    trending: true,
    likes: 4219,
    comments: 678,
    shares: 1893
  },
  {
    id: '8',
    title: 'Next-Generation Smartphone Features Revolutionary Display Technology',
    summary: 'The latest flagship device introduces self-healing screen material and unprecedented battery life.',
    content: 'The tech world is buzzing with excitement as a leading manufacturer unveiled its next-generation smartphone featuring several industry-first innovations. The device introduces a revolutionary self-healing display that can repair minor scratches within hours using a specially developed polymer that responds to electrical current and heat.\n\n"We\'ve essentially eliminated the need for screen protectors," said the company\'s chief of innovation. "This technology represents years of materials science research."\n\nBeyond the display, the phone boasts a solid-state battery providing up to three days of heavy use on a single charge, maintaining 90% capacity after 1000 charge cycles. The device also features an advanced AI chip dedicated to on-device processing that enhances both privacy and performance.',
    author: 'Jason Kim',
    source: 'Tech Review',
    publishedAt: '2025-05-16T09:15:00Z',
    category: 'technology',
    imageUrl: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: '#',
    trending: true,
    likes: 3157,
    comments: 423,
    shares: 1172
  }
];

// Function to generate a random news item for real-time updates
export const generateRandomNewsItem = (): NewsItem => {
  const categories: Category[] = ['technology', 'business', 'sports', 'health', 'science', 'entertainment', 'politics'];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  const randomId = Math.floor(Math.random() * 10000).toString();
  const trending = Math.random() > 0.7;
  const likes = Math.floor(Math.random() * 5000);
  const comments = Math.floor(Math.random() * 1000);
  const shares = Math.floor(Math.random() * 2000);
  
  const titles: Record<Category, string[]> = {
    technology: [
      'New AI Model Breaks Previous Records in Language Understanding',
      'Revolutionary Chip Design Promises 10x Performance Improvement',
      'Tech Giants Collaborate on Open-Source Quantum Computing Framework'
    ],
    business: [
      'Startup Secures Record-Breaking Series A Funding Round',
      'Major Retailer Announces Sustainable Supply Chain Overhaul',
      'Global Finance Leaders Propose New Digital Currency Standards'
    ],
    sports: [
      'Underdog Team Pulls Off Stunning Championship Victory',
      'Record-Breaking Performance at International Athletics Event',
      'Star Athlete Signs Unprecedented Endorsement Deal'
    ],
    health: [
      'New Study Reveals Breakthrough in Alzheimer\'s Treatment',
      'Global Initiative Launches to Address Healthcare Worker Shortage',
      'Innovative Medical Device Receives Fast-Track Approval'
    ],
    science: [
      'Astronomers Discover Earth-like Planet in Habitable Zone',
      'Researchers Achieve Milestone in Nuclear Fusion Energy',
      'Biodiversity Survey Uncovers Previously Unknown Species'
    ],
    entertainment: [
      'Indie Film Sweeps Awards Season with Record Nominations',
      'Streaming Platform Announces Revolutionary Interactive Content',
      'Virtual Concert Draws Record-Breaking Global Audience'
    ],
    politics: [
      'Historic International Agreement Reached After Decade of Talks',
      'New Legislation Aims to Transform Digital Privacy Protections',
      'Landmark Ruling Sets Precedent for Environmental Regulations'
    ],
    all: []
  };
  
  const randomTitle = titles[randomCategory][Math.floor(Math.random() * titles[randomCategory].length)];
  
  // Mock image URLs for each category
  const categoryImages: Record<Category, string[]> = {
    technology: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    business: [
      'https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    sports: [
      'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    health: [
      'https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/139398/elephant-african-bush-elephant-safari-kenya-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    science: [
      'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    entertainment: [
      'https://images.pexels.com/photos/11071353/pexels-photo-11071353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    politics: [
      'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/164865/pexels-photo-164865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    all: []
  };
  
  const randomImage = categoryImages[randomCategory][Math.floor(Math.random() * categoryImages[randomCategory].length)];
  
  // Create a random date within the last 24 hours
  const now = new Date();
  const randomTimeAgo = Math.floor(Math.random() * 24 * 60 * 60 * 1000); // Random time in last 24 hours
  const publishDate = new Date(now.getTime() - randomTimeAgo).toISOString();
  
  return {
    id: randomId,
    title: randomTitle,
    summary: `Breaking news in the ${randomCategory} sector that's capturing attention worldwide.`,
    content: `In a significant development today, ${randomTitle.toLowerCase()}. Experts in the field are calling this a major breakthrough that could potentially reshape how we understand and interact with ${randomCategory}.\n\nMultiple sources have confirmed these findings, which come after months of speculation in the industry. "This is exactly the kind of innovation we've been waiting for," said one leading analyst.\n\nThe implications of this news extend beyond just immediate applications, potentially setting new standards for future developments in this rapidly evolving field.`,
    author: ['Alex Chen', 'Maya Williams', 'Carlos Mendez', 'Sarah Johnson', 'Emma Rodriguez'][Math.floor(Math.random() * 5)],
    source: ['Tech Today', 'Financial Insight', 'Sports Network', 'Health Weekly', 'Science Report'][Math.floor(Math.random() * 5)],
    publishedAt: publishDate,
    category: randomCategory,
    imageUrl: randomImage,
    url: '#',
    trending,
    likes,
    comments,
    shares
  };
};