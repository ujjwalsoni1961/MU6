import React, { useState } from 'react';

interface ChartWidgetProps {
  title: string;
  type: 'bar' | 'line';
  data: number[];
  labels: string[];
}

export const ChartWidget: React.FC<ChartWidgetProps> = ({ title, type, data, labels }) => {
  const max = data.length > 0 ? Math.max(...data) * 1.1 : 100; // Add 10% headroom
  const min = 0;
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (type === 'line' && data.length > 0) {
    return (
      <div className="glass-card p-8 h-full flex flex-col">
        <h3 className="text-lg font-bold text-text-main mb-8">{title}</h3>
        
        <div className="flex-1 relative min-h-[200px] mb-6">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" className="text-secondary" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-secondary" />
              </linearGradient>
            </defs>
            
            {/* Area fill */}
            <path
              d={`
                M 0,100 
                ${data.map((val, i) => {
                  const x = (i / (data.length - 1)) * 100;
                  const y = 100 - (val / max) * 100;
                  return `L ${x},${y}`;
                }).join(' ')} 
                L 100,100 Z
              `}
              className="fill-secondary/20 transition-all duration-500"
            />
            
            {/* Line */}
            <path
              d={`
                M 0,${100 - (data[0] / max) * 100}
                ${data.map((val, i) => {
                  const x = (i / (data.length - 1)) * 100;
                  const y = 100 - (val / max) * 100;
                  return `L ${x},${y}`;
                }).join(' ')}
              `}
              fill="none"
              strokeWidth="0.5" // Relative to 100x100 viewBox, this is thin but might scale up thick. 
                                // Ideally we use vector-effect="non-scaling-stroke" but React support varies.
                                // Let's use a small number.
              vectorEffect="non-scaling-stroke"
              className="stroke-secondary transition-all duration-500"
              style={{ strokeWidth: '3px' }} 
            />
          </svg>

            {/* Data Points (HTML overlay to avoid aspect ratio distortion) */}
            <div className="absolute inset-0 pointer-events-none">
             {data.map((val, i) => {
                const x = (i / (data.length - 1)) * 100;
                const y = 100 - (val / max) * 100;
                return (
                  <div 
                    key={i}
                    className="absolute w-4 h-4 -ml-2 -mt-2 rounded-full border-2 border-secondary bg-white cursor-pointer hover:scale-125 transition-transform shadow-md pointer-events-auto flex items-center justify-center group"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Tooltip */}
                    <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-white/50 text-text-main text-xs font-bold py-2 px-4 rounded-xl shadow-glass-lg whitespace-nowrap z-10 transition-all duration-200 transform ${hoveredIndex === i ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'}`}>
                      {val}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 border-r border-b border-white/50 rotate-45"></div>
                    </div>
                  </div>
                );
             })}
            </div>
        </div>

        {/* X Axis Labels */}
        <div className="flex justify-between px-2">
          {labels.map((label, i) => (
            <span key={i} className="text-xs text-text-muted font-bold uppercase tracking-wider">{label}</span>
          ))}
        </div>
      </div>
    );
  }

  // Fallback to Bar Chart
  return (
    <div className="glass-card p-8 h-full flex flex-col">
      <h3 className="text-lg font-bold text-text-main mb-8">{title}</h3>
      
      <div className="flex-1 flex items-end justify-between gap-4 min-h-[200px]">
        {data.map((value, i) => {
          const height = `${(value / max) * 100}%`;
          return (
            <div key={i} className="flex flex-col items-center gap-3 flex-1 group h-full justify-end">
              <div className="relative w-full flex items-end justify-center h-full">
                <div 
                  style={{ height }} 
                  className={`
                    w-full max-w-[40px] rounded-t-xl transition-all duration-500 relative
                    bg-gradient-to-t from-primary/60 to-primary-light/80 group-hover:from-secondary/80 group-hover:to-secondary-light
                  `}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-white/50 text-text-main text-xs font-bold py-2 px-4 rounded-xl shadow-glass-lg transition-all transform scale-90 group-hover:scale-100 whitespace-nowrap z-10">
                    {value}
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white/90 border-r border-b border-white/50 rotate-45"></div>
                  </div>
                </div>
              </div>
              <span className="text-xs text-text-muted font-bold uppercase tracking-wider">{labels[i]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
