import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const interval = 20;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
      data-testid="loader"
    >
      <div className="w-full max-w-4xl px-8 relative">
        <div className="relative h-32 mb-8 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-700 rounded-full" />
          
          <div 
            className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
          
          <div 
            className="absolute bottom-0 transform -translate-x-1/2 transition-all duration-100 ease-out"
            style={{ left: `${progress}%` }}
          >
            <div className="relative animate-car-bounce">
              <svg 
                viewBox="0 0 120 50" 
                className="w-24 h-12 drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}
              >
                <defs>
                  <linearGradient id="carBody" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                  <linearGradient id="carShine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                  <linearGradient id="window" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                
                <ellipse cx="28" cy="45" rx="12" ry="12" fill="#1f2937" />
                <ellipse cx="28" cy="45" rx="8" ry="8" fill="#4b5563" />
                <ellipse cx="28" cy="45" rx="4" ry="4" fill="#9ca3af" />
                
                <ellipse cx="92" cy="45" rx="12" ry="12" fill="#1f2937" />
                <ellipse cx="92" cy="45" rx="8" ry="8" fill="#4b5563" />
                <ellipse cx="92" cy="45" rx="4" ry="4" fill="#9ca3af" />
                
                <path
                  d="M10 35 Q5 35 5 30 L5 28 Q5 25 10 25 L35 18 Q45 10 60 10 L85 10 Q100 10 105 18 L115 28 Q120 30 118 35 L118 38 Q118 40 115 40 L105 40 L105 38 Q100 35 92 35 Q84 35 79 38 L79 40 L41 40 L41 38 Q36 35 28 35 Q20 35 15 38 L15 40 L10 40 Q5 40 5 38 Z"
                  fill="url(#carBody)"
                />
                
                <path
                  d="M35 18 Q45 10 60 10 L85 10 Q100 10 105 18 L105 22 L35 22 Z"
                  fill="url(#carShine)"
                  opacity="0.3"
                />
                
                <path
                  d="M42 12 L52 12 Q55 12 55 15 L55 22 L40 22 L40 15 Q40 13 42 12 Z"
                  fill="url(#window)"
                  opacity="0.9"
                />
                <path
                  d="M60 12 L78 12 Q82 12 84 15 L86 22 L58 22 L58 15 Q58 12 60 12 Z"
                  fill="url(#window)"
                  opacity="0.9"
                />
                
                <circle cx="8" cy="30" r="3" fill="#fbbf24" opacity="0.9" />
                <circle cx="116" cy="30" r="4" fill="#ef4444" opacity="0.8" />
                
                <text x="60" y="32" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fbbf24">95</text>
                
                <ellipse cx="60" cy="6" rx="4" ry="2" fill="#ef4444" />
              </svg>
              
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-gray-400 rounded-full animate-exhaust"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        opacity: progress < 100 ? 0.6 : 0
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-between text-xs text-gray-500 font-mono">
            <span>START</span>
            <span>FINISH</span>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl text-white tracking-wider">
            LOADING<span className="text-amber-500">...</span>
          </h1>
          <p className="text-gray-400 text-lg font-mono">
            {Math.round(progress)}% Complete
          </p>
          <p className="text-sm text-gray-500 italic">
            "Speed. I am speed." - Lightning McQueen
          </p>
        </div>
        
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-1 bg-amber-500/30 rounded animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
