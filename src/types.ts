export interface Track {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  duration: string; // Display format "3:45"
  audioSrc: string; // Placeholder URL
  genre: string;
}

export interface NFT extends Track {
  price: number; // in ETH
  owner: string;
  description: string;
  tokenId: string;
  rarity: 'Common' | 'Rare' | 'Legendary' | 'Liquid Chrome';
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell' | 'mint' | 'deposit';
  amount: number;
  date: string;
  assetName?: string;
  hash: string;
}

export interface User {
  id: string;
  name: string;
  handle: string;
  balance: number;
  avatarUrl: string;
  walletAddress: string;
}

export enum AppView {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  STREAMING = 'STREAMING',
  MARKETPLACE = 'MARKETPLACE',
  LIBRARY = 'LIBRARY',
  GEMINI_LAB = 'GEMINI_LAB',
  WALLET = 'WALLET'
}
