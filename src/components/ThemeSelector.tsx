import React, { useState } from 'react';
import { useTheme, Theme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Palette, Check } from 'lucide-react';

interface ThemePreviewProps {
  theme: Theme;
  isSelected: boolean;
  onClick: () => void;
}

const ThemePreview: React.FC<ThemePreviewProps> = ({ theme, isSelected, onClick }) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
        isSelected ? 'ring-2 ring-[var(--violet)]' : 'hover:ring-1 hover:ring-white/20'
      }`}
      onClick={onClick}
    >
      <CardContent className="p-3">
        <div className="space-y-2">
          {/* Theme preview gradient */}
          <div 
            className="h-16 rounded-lg relative overflow-hidden"
            style={{ background: theme.gradients.background }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
            <div className="absolute top-2 left-2 w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.secondary }} />
            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full" style={{ backgroundColor: theme.colors.accent }} />
            {isSelected && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                  <Check className="w-4 h-4 text-black" />
                </div>
              </div>
            )}
          </div>
          
          {/* Theme info */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-lg">{theme.icon}</span>
              <span className="font-medium text-sm" style={{ color: theme.colors.foreground }}>
                {theme.name}
              </span>
            </div>
            <p className="text-xs opacity-70" style={{ color: theme.colors.mutedForeground }}>
              {theme.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative hover:bg-white/10 hover:scale-105 transition-all duration-200"
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--violet)] to-[var(--cyan)] opacity-0 hover:opacity-20 transition-opacity duration-200" />
        <Palette className="h-5 w-5" />
      </Button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Theme Selector Panel */}
          <div className="absolute right-0 top-full mt-2 w-80 p-4 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg z-50">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="font-semibold text-lg" style={{ color: 'var(--foreground)' }}>
                  Choose Theme
                </h3>
                <p className="text-sm opacity-70" style={{ color: 'var(--muted-foreground)' }}>
                  Select your preferred color scheme
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {themes.map((theme) => (
                  <ThemePreview
                    key={theme.id}
                    theme={theme}
                    isSelected={currentTheme.id === theme.id}
                    onClick={() => {
                      setTheme(theme.id);
                      setIsOpen(false);
                    }}
                  />
                ))}
              </div>
              
              <div className="pt-2 border-t border-[var(--border)]">
                <div className="flex items-center justify-between text-xs opacity-70" style={{ color: 'var(--muted-foreground)' }}>
                  <span>Current: {currentTheme.name}</span>
                  <span>{currentTheme.icon}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSelector;
