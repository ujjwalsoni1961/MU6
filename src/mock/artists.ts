export interface Artist {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  totalSongs: number;
  totalNFTsSold: number;
  totalEarnings: number;
  verified: boolean;
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "Cyber Soul",
    avatar: "https://picsum.photos/seed/artist1/200/200",
    bio: "Creating the future of sound, one beat at a time. Electronic music producer based in Neo Tokyo.",
    followers: 12500,
    totalSongs: 24,
    totalNFTsSold: 450,
    totalEarnings: 25.4,
    verified: true
  },
  {
    id: "2",
    name: "The Wanderers",
    avatar: "https://picsum.photos/seed/artist2/200/200",
    bio: "Indie rock band exploring the cosmos through melody.",
    followers: 8900,
    totalSongs: 15,
    totalNFTsSold: 120,
    totalEarnings: 5.2,
    verified: true
  },
  {
    id: "3",
    name: "Luna",
    avatar: "https://picsum.photos/seed/artist3/200/200",
    bio: "Ethereal vocals and ambient soundscapes.",
    followers: 3200,
    totalSongs: 8,
    totalNFTsSold: 50,
    totalEarnings: 2.1,
    verified: false
  },
  {
    id: "4",
    name: "DJ X",
    avatar: "https://picsum.photos/seed/artist4/200/200",
    bio: "Bass music that shakes the ground.",
    followers: 45000,
    totalSongs: 56,
    totalNFTsSold: 1200,
    totalEarnings: 89.5,
    verified: true
  },
  {
    id: "5",
    name: "Sarah Jenkins",
    avatar: "https://picsum.photos/seed/artist5/200/200",
    bio: "Singer-songwriter with a guitar and a dream.",
    followers: 22000,
    totalSongs: 30,
    totalNFTsSold: 0,
    totalEarnings: 0,
    verified: true
  },
  {
    id: "6",
    name: "Synth Squad",
    avatar: "https://picsum.photos/seed/artist6/200/200",
    bio: "Retro-futuristic synthwave collective.",
    followers: 9800,
    totalSongs: 12,
    totalNFTsSold: 300,
    totalEarnings: 15.8,
    verified: false
  }
];
