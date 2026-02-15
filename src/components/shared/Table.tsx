import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  mobileCardRender?: (item: T) => React.ReactNode;
}

export function Table<T extends { id: string | number }>({ 
  data, columns, onRowClick, mobileCardRender 
}: TableProps<T>) {
  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-hidden glass-card rounded-3xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/20 bg-white/10">
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-5 text-xs font-bold text-text-muted uppercase tracking-wider">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-text-main transition-colors">
                    {col.header}
                    {col.sortable && <ChevronDown size={14} />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {data.map((item) => (
              <tr 
                key={item.id} 
                onClick={() => onRowClick?.(item)}
                className="hover:bg-white/30 transition-all duration-200 cursor-pointer group"
              >
                {columns.map((col) => (
                  <td key={`${item.id}-${col.key}`} className="px-6 py-4 text-sm text-text-main first:font-medium">
                    {col.render ? col.render(item) : (item as any)[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {data.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onRowClick?.(item)}
            className="glass-card p-5 active:scale-[0.98] transition-transform"
          >
            {mobileCardRender ? mobileCardRender(item) : (
              <div className="space-y-3">
                {columns.slice(0, 3).map((col) => (
                  <div key={col.key} className="flex justify-between items-center border-b border-white/10 last:border-0 pb-2 last:pb-0">
                    <span className="text-xs font-bold text-text-muted uppercase">{col.header}</span>
                    <span className="text-sm text-text-main font-medium">
                      {col.render ? col.render(item) : (item as any)[col.key]}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
