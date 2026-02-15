export interface NFT {
  id: string;
  songId: string;
  songTitle: string;
  artistName: string;
  coverImage: string;
  price: number;
  editionNumber: number;
  totalEditions: number;
  owner: string;
  rarity: 'common' | 'rare' | 'legendary';
  priceHistory?: { price: number; date: string }[];
}

export const nfts: NFT[] = [
  {
    id: "nft_1",
    songId: "1",
    songTitle: "Neon Nights",
    artistName: "Cyber Soul",
    coverImage: "https://picsum.photos/seed/neon/400/400",
    price: 0.05,
    editionNumber: 1,
    totalEditions: 100,
    owner: "0x71C...976F",
    rarity: "legendary",
    priceHistory: [
      { price: 0.02, date: 'Oct 01' },
      { price: 0.03, date: 'Nov 01' },
      { price: 0.045, date: 'Dec 01' },
      { price: 0.04, date: 'Jan 01' },
      { price: 0.05, date: 'Feb 01' }
    ]
  },
  {
    id: "nft_2",
    songId: "2",
    songTitle: "Midnight Drive",
    artistName: "The Wanderers",
    coverImage: "https://picsum.photos/seed/midnight/400/400",
    price: 0.03,
    editionNumber: 12,
    totalEditions: 50,
    owner: "0x82D...976F",
    rarity: "common"
  },
  {
    id: "nft_3",
    songId: "4",
    songTitle: "Ethereal Dreams",
    artistName: "Luna",
    coverImage: "https://picsum.photos/seed/ethereal/400/400",
    price: 0.08,
    editionNumber: 5,
    totalEditions: 20,
    owner: "0x93E...976F",
    rarity: "rare"
  },
  {
    id: "nft_4",
    songId: "5",
    songTitle: "Bass Drop",
    artistName: "DJ X",
    coverImage: "https://picsum.photos/seed/bass/400/400",
    price: 0.04,
    editionNumber: 45,
    totalEditions: 200,
    owner: "0x71C...976F",
    rarity: "common"
  },
  {
    id: "nft_5",
    songId: "7",
    songTitle: "Retro Future",
    artistName: "Synth Squad",
    coverImage: "https://picsum.photos/seed/retro/400/400",
    price: 0.06,
    editionNumber: 3,
    totalEditions: 75,
    owner: "0x82D...976F",
    rarity: "rare"
  },
  {
    id: "nft_6",
    songId: "8",
    songTitle: "Deep Blue",
    artistName: "Oceanic",
    coverImage: "https://picsum.photos/seed/blue/400/400",
    price: 0.1,
    editionNumber: 1,
    totalEditions: 10,
    owner: "0x93E...976F",
    rarity: "legendary"
  },
  {
    id: "nft_7",
    songId: "10",
    songTitle: "Electric Love",
    artistName: "The Volts",
    coverImage: "https://picsum.photos/seed/electric/400/400",
    price: 0.05,
    editionNumber: 88,
    totalEditions: 150,
    owner: "0x71C...976F",
    rarity: "common"
  },
  {
    id: "nft_8",
    songId: "12",
    songTitle: "Golden Hour",
    artistName: "Sunset Collective",
    coverImage: "https://picsum.photos/seed/golden/400/400",
    price: 0.07,
    editionNumber: 22,
    totalEditions: 80,
    owner: "0x82D...976F",
    rarity: "rare"
  }
];
