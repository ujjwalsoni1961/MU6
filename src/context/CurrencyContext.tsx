import React, { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'ETH' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  toggleCurrency: () => void;
  formatPrice: (ethPrice: number) => string;
  convertPrice: (ethPrice: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('USD'); // Default to USD for familiarity
  const ETH_TO_USD_RATE = 2500; // Mock rate

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'ETH' ? 'USD' : 'ETH');
  };

  const convertPrice = (ethPrice: number) => {
    if (currency === 'ETH') return ethPrice;
    return ethPrice * ETH_TO_USD_RATE;
  };

  const formatPrice = (ethPrice: number) => {
    if (currency === 'ETH') {
      return `${ethPrice} ETH`;
    } else {
      const usdPrice = ethPrice * ETH_TO_USD_RATE;
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(usdPrice);
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
