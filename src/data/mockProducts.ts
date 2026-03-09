import type { Product } from "../pages/Home/DiscoveryPage";

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Modern Desk Setup',
    price: 180,
    image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNrJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTYxNDU4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Brooklyn, NY',
    seller: {
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      rating: 4.8
    },
    category: 'Furniture',
    condition: 'Like New',
    description: 'Minimalist wooden desk with cable management. Perfect for small apartments. Moving out sale!'
  },
  {
    id: '2',
    name: 'Vintage Accent Chair',
    price: 95,
    image: 'https://images.unsplash.com/photo-1702018706865-e5306a8fa007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2hhaXIlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY1NTQ1NjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Austin, TX',
    seller: {
      name: 'Maya Rodriguez',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
      rating: 5.0
    },
    category: 'Furniture',
    condition: 'Good',
    description: 'Cozy vintage chair, great for reading nook. Some wear on armrests but super comfy.'
  },
  {
    id: '3',
    name: 'MacBook Pro 14"',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1729496293008-0794382070c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NjU1MDg3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'San Francisco, CA',
    seller: {
      name: 'Jordan Lee',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
      rating: 4.9
    },
    category: 'Electronics',
    condition: 'Excellent',
    description: '2021 model, M1 Pro chip, 16GB RAM. Barely used, comes with original box and charger.'
  },
  {
    id: '4',
    name: 'Monstera Plant',
    price: 35,
    image: 'https://images.unsplash.com/photo-1634513980958-2ea35f23de68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGhvbWUlMjBkZWNvcnxlbnwxfHx8fDE3NjU2MTQ1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Portland, OR',
    seller: {
      name: 'Sam Taylor',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sam',
      rating: 4.7
    },
    category: 'Home & Garden',
    condition: 'New',
    description: 'Healthy monstera deliciosa, outgrowing my apartment. Includes ceramic pot.'
  },
  {
    id: '5',
    name: 'Road Bike',
    price: 450,
    image: 'https://images.unsplash.com/photo-1763098843789-e03a632b4710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWtlJTIwYmljeWNsZXxlbnwxfHx8fDE3NjU1NTYwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Seattle, WA',
    seller: {
      name: 'Casey Morgan',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Casey',
      rating: 4.6
    },
    category: 'Sports',
    condition: 'Good',
    description: 'Trek road bike, well-maintained. Includes bike lock and lights. Moving to city without bike lanes.'
  },
  {
    id: '6',
    name: 'Bookshelf Collection',
    price: 120,
    image: 'https://images.unsplash.com/photo-1676487093282-f6a47e02848f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGYlMjBib29rc3xlbnwxfHx8fDE3NjU2MTQ1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Boston, MA',
    seller: {
      name: 'Riley Park',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riley',
      rating: 5.0
    },
    category: 'Furniture',
    condition: 'Like New',
    description: '5-tier bookshelf, easy to assemble. Solid wood, holds tons of books. Need gone by weekend!'
  },
  {
    id: '7',
    name: 'Sony Camera A7III',
    price: 850,
    image: 'https://images.unsplash.com/photo-1662367532361-ad43453c611f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGdlYXJ8ZW58MXx8fHwxNzY1NjEwNjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Los Angeles, CA',
    seller: {
      name: 'Drew Kim',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Drew',
      rating: 4.9
    },
    category: 'Electronics',
    condition: 'Excellent',
    description: 'Full-frame mirrorless camera. Low shutter count. Switching to Canon system.'
  },
  {
    id: '8',
    name: 'Modern Floor Lamp',
    price: 65,
    image: 'https://images.unsplash.com/photo-1763060722627-e06bfa20faaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1wJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzY1NjE0NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Denver, CO',
    seller: {
      name: 'Avery Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Avery',
      rating: 4.8
    },
    category: 'Home Decor',
    condition: 'Like New',
    description: 'Arc floor lamp with adjustable brightness. Perfect ambient lighting for any room.'
  }
];
