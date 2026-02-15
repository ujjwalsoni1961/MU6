export interface Transaction {
  id: string;
  type: 'purchase' | 'royalty' | 'withdrawal' | 'listing';
  songTitle?: string;
  buyer?: string;
  seller?: string;
  price: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  fee?: number;
}

export const transactions: Transaction[] = [
  {
    id: "tx_1",
    type: "purchase",
    songTitle: "Neon Nights",
    buyer: "0x71C...976F",
    seller: "0x93E...976F",
    price: 0.05,
    date: "2023-10-25",
    status: "completed",
    fee: 0.0025
  },
  {
    id: "tx_2",
    type: "purchase",
    songTitle: "Midnight Drive",
    buyer: "0x82D...976F",
    seller: "0x93E...976F",
    price: 0.03,
    date: "2023-10-24",
    status: "completed",
    fee: 0.0015
  },
  {
    id: "tx_3",
    type: "withdrawal",
    price: 1.5,
    date: "2023-10-23",
    status: "pending",
    seller: "0x93E...976F"
  },
  {
    id: "tx_4",
    type: "listing",
    songTitle: "Ethereal Dreams",
    seller: "0x93E...976F",
    price: 0.08,
    date: "2023-10-22",
    status: "completed"
  },
  {
    id: "tx_5",
    type: "royalty",
    songTitle: "Bass Drop",
    seller: "0x93E...976F",
    price: 0.004,
    date: "2023-10-21",
    status: "completed"
  },
  {
    id: "tx_6",
    type: "purchase",
    songTitle: "Retro Future",
    buyer: "0x71C...976F",
    seller: "0x93E...976F",
    price: 0.06,
    date: "2023-10-20",
    status: "failed",
    fee: 0
  },
  {
    id: "tx_7",
    type: "purchase",
    songTitle: "Deep Blue",
    buyer: "0x82D...976F",
    seller: "0x93E...976F",
    price: 0.1,
    date: "2023-10-19",
    status: "completed",
    fee: 0.005
  },
  {
    id: "tx_8",
    type: "listing",
    songTitle: "Electric Love",
    seller: "0x93E...976F",
    price: 0.05,
    date: "2023-10-18",
    status: "completed"
  },
  {
    id: "tx_9",
    type: "purchase",
    songTitle: "Golden Hour",
    buyer: "0x71C...976F",
    seller: "0x93E...976F",
    price: 0.07,
    date: "2023-10-17",
    status: "completed",
    fee: 0.0035
  },
  {
    id: "tx_10",
    type: "withdrawal",
    price: 0.5,
    date: "2023-10-16",
    status: "completed",
    seller: "0x93E...976F"
  }
];
