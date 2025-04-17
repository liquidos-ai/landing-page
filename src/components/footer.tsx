import React from 'react';
import { Hexagon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/10 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Hexagon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
          <span className="text-sm text-muted-foreground">LiquidOS</span>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} LiquidOS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}