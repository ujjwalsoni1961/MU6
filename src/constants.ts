import { Track, NFT, Transaction, User } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Alex Cipher',
  handle: '@cipher_audio',
  balance: 4.852,
  avatarUrl: 'https://picsum.photos/seed/userAv/200/200',
  walletAddress: '0x71C...9A21'
};

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 't1', type: 'buy', amount: 0.5, date: '2 mins ago', assetName: 'Neon Horizon #8821', hash: '0x3a...9f' },
  { id: 't2', type: 'deposit', amount: 2.0, date: '1 day ago', hash: '0x1b...2c' },
  { id: 't3', type: 'mint', amount: 0.05, date: '3 days ago', assetName: 'Genesis Drop', hash: '0x8d...11' },
  { id: 't4', type: 'sell', amount: 1.2, date: '1 week ago', assetName: 'Liquid Metal #9912', hash: '0x4e...55' },
];

export const MOCK_TRACKS: Track[] = [
  {
    id: '1',
    title: 'Neon Horizon',
    artist: 'Cyber Soul',
    coverUrl: 'https://picsum.photos/seed/neon1/600/600',
    duration: '3:42',
    audioSrc: '', 
    genre: 'Synthwave'
  },
  {
    id: '2',
    title: 'Liquid Metal',
    artist: 'Chromium X',
    coverUrl: 'https://picsum.photos/seed/metal2/600/600',
    duration: '4:15',
    audioSrc: '',
    genre: 'Industrial'
  },
  {
    id: '3',
    title: 'Digital Rain',
    artist: 'Null Pointer',
    coverUrl: 'https://picsum.photos/seed/rain3/600/600',
    duration: '2:58',
    audioSrc: '',
    genre: 'Ambient'
  },
  {
    id: '4',
    title: 'Kinetic Pulse',
    artist: 'Velocity',
    coverUrl: 'https://picsum.photos/seed/pulse4/600/600',
    duration: '3:20',
    audioSrc: '',
    genre: 'Techno'
  },
  {
    id: '5',
    title: 'Ether Drift',
    artist: 'Aura Systems',
    coverUrl: 'https://picsum.photos/seed/ether/600/600',
    duration: '3:10',
    audioSrc: '',
    genre: 'Downtempo'
  },
  {
    id: '6',
    title: 'Chrome Heart',
    artist: 'The Synthetics',
    coverUrl: 'https://picsum.photos/seed/heart/600/600',
    duration: '3:55',
    audioSrc: '',
    genre: 'Pop'
  }
];

export const MOCK_NFTS: NFT[] = [
  {
    ...MOCK_TRACKS[0],
    price: 0.5,
    owner: '0x123...abc',
    description: 'A sonic journey through the neon-lit streets of Neo-Tokyo.',
    tokenId: '#8821',
    rarity: 'Rare'
  },
  {
    ...MOCK_TRACKS[1],
    price: 1.2,
    owner: '0xMarket...',
    description: 'Pure liquid frequencies extracted from the core of the machine.',
    tokenId: '#9912',
    rarity: 'Liquid Chrome'
  },
   {
    ...MOCK_TRACKS[3],
    price: 0.15,
    owner: '0xUser...',
    description: 'High velocity beats for high velocity coding.',
    tokenId: '#1102',
    rarity: 'Common'
  }
];
