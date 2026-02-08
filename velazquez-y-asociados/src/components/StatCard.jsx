import { useEffect, useState, useRef } from 'react';

export default function StatCard({ value, label, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const target = typeof value === 'string' && value.startsWith('+') 
              ? parseInt(value.replace(/[^0-9]/g, '')) 
              : typeof value === 'string' && value.endsWith('%')
                ? parseInt(value.replace('%', ''))
                : 100;
            
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 16);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [value, duration, hasAnimated]);

  const displayValue = typeof value === 'string' && value.startsWith('+')
    ? `+${count}${suffix}`
    : typeof value === 'string' && value.endsWith('%')
      ? `${count}%`
      : count;

  return (
    <div
      ref={cardRef}
      className="group relative bg-white dark:bg-neutral-dark/30 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover-lift transition-all duration-300 hover:shadow-xl hover:border-secondary/30 overflow-hidden"
    >
      {/* Efecto de fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-secondary/5 dark:to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Efecto de borde animado */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary/20 transition-all duration-500" />
      
      <div className="relative z-10 text-center">
        <div className="text-5xl md:text-6xl font-display font-bold text-primary dark:text-white mb-4">
          {displayValue}
        </div>
        <div className="uppercase tracking-widest text-sm font-medium text-gray-600 dark:text-gray-400">
          {label}
        </div>
      </div>
      
      {/* Partículas decorativas (solo hover) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 20}%`,
              animation: `float ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}