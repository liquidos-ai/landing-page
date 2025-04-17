import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Hexagon } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="absolute top-0 left-0 right-0 p-4 md:p-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Hexagon className="w-6 h-6 md:w-8 md:h-8 text-foreground" strokeWidth={2} />
          </div>
          <div className="font-bold tracking-tighter text-lg md:text-xl">
            LiquidOS
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/about">
            <Button
              variant="ghost"
              className={`text-muted-foreground hover:text-primary font-medium text-sm md:text-base ${
                location.pathname === '/about' ? 'text-primary' : ''
              }`}
            >
              ABOUT
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}