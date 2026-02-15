import React from 'react';
import { Gem, DollarSign } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';

interface PriceTagProps {
  price: number;
}

export const PriceTag: React.FC<PriceTagProps> = ({ price }) => {
  const { currency, formatPrice } = useCurrency();

  return (
    <div className="flex items-center gap-1.5 bg-secondary/10 px-3 py-1.5 rounded-xl text-secondary text-xs font-bold border border-secondary/20 shadow-sm backdrop-blur-sm">
      {currency === 'ETH' ? (
        <Gem size={14} className="text-secondary" />
      ) : (
        <DollarSign size={14} className="text-secondary" />
      )}
      <span>{formatPrice(price)}</span>
    </div>
  );
};
