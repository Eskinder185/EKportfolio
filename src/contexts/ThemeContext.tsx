import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    backgroundSecondary: string;
    foreground: string;
    card: string;
    cardForeground: string;
    border: string;
    muted: string;
    mutedForeground: string;
    destructive: string;
    destructiveForeground: string;
  };
  gradients: {
    background: string;
    primary: string;
    accent: string;
  };
  icon: string;
}

export const themes: Theme[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Neon purple and cyan with dark backgrounds',
    colors: {
      primary: '#8b5cf6',
      secondary: '#22d3ee',
      accent: '#39FF14',
      background: '#0b0b12',
      backgroundSecondary: '#1a1a2e',
      foreground: '#ffffff',
      card: 'rgba(255, 255, 255, 0.05)',
      cardForeground: '#ffffff',
      border: 'rgba(255, 255, 255, 0.1)',
      muted: 'rgba(255, 255, 255, 0.1)',
      mutedForeground: '#a0a0a0',
      destructive: '#ef4444',
      destructiveForeground: '#ffffff',
    },
    gradients: {
      background: 'linear-gradient(135deg, #0b0b12 0%, #1a1a2e 100%)',
      primary: 'linear-gradient(135deg, #8b5cf6 0%, #22d3ee 100%)',
      accent: 'linear-gradient(135deg, #39FF14 0%, #22d3ee 100%)',
    },
    icon: '🌃',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    description: 'Deep blues and teals with wave-like gradients',
    colors: {
      primary: '#0ea5e9',
      secondary: '#06b6d4',
      accent: '#14b8a6',
      background: '#0c1821',
      backgroundSecondary: '#1e293b',
      foreground: '#f8fafc',
      card: 'rgba(248, 250, 252, 0.05)',
      cardForeground: '#f8fafc',
      border: 'rgba(248, 250, 252, 0.1)',
      muted: 'rgba(248, 250, 252, 0.1)',
      mutedForeground: '#94a3b8',
      destructive: '#ef4444',
      destructiveForeground: '#ffffff',
    },
    gradients: {
      background: 'linear-gradient(135deg, #0c1821 0%, #1e293b 50%, #0f172a 100%)',
      primary: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
      accent: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
    },
    icon: '🌊',
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Rich greens and earth tones with natural gradients',
    colors: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#84cc16',
      background: '#0f1419',
      backgroundSecondary: '#1a2e1a',
      foreground: '#f0fdf4',
      card: 'rgba(240, 253, 244, 0.05)',
      cardForeground: '#f0fdf4',
      border: 'rgba(240, 253, 244, 0.1)',
      muted: 'rgba(240, 253, 244, 0.1)',
      mutedForeground: '#86efac',
      destructive: '#ef4444',
      destructiveForeground: '#ffffff',
    },
    gradients: {
      background: 'linear-gradient(135deg, #0f1419 0%, #1a2e1a 50%, #14532d 100%)',
      primary: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      accent: 'linear-gradient(135deg, #84cc16 0%, #10b981 100%)',
    },
    icon: '🌲',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Warm oranges and purples with sunset gradients',
    colors: {
      primary: '#f97316',
      secondary: '#ec4899',
      accent: '#f59e0b',
      background: '#1c0b0b',
      backgroundSecondary: '#2d1b1b',
      foreground: '#fef3c7',
      card: 'rgba(254, 243, 199, 0.05)',
      cardForeground: '#fef3c7',
      border: 'rgba(254, 243, 199, 0.1)',
      muted: 'rgba(254, 243, 199, 0.1)',
      mutedForeground: '#fbbf24',
      destructive: '#ef4444',
      destructiveForeground: '#ffffff',
    },
    gradients: {
      background: 'linear-gradient(135deg, #1c0b0b 0%, #2d1b1b 50%, #451a03 100%)',
      primary: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
      accent: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
    },
    icon: '🌅',
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Mystical greens and purples with aurora-like effects',
    colors: {
      primary: '#a855f7',
      secondary: '#06b6d4',
      accent: '#10b981',
      background: '#0a0a0f',
      backgroundSecondary: '#1a1a2e',
      foreground: '#e0e7ff',
      card: 'rgba(224, 231, 255, 0.05)',
      cardForeground: '#e0e7ff',
      border: 'rgba(224, 231, 255, 0.1)',
      muted: 'rgba(224, 231, 255, 0.1)',
      mutedForeground: '#a5b4fc',
      destructive: '#ef4444',
      destructiveForeground: '#ffffff',
    },
    gradients: {
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #312e81 100%)',
      primary: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
      accent: 'linear-gradient(135deg, #10b981 0%, #a855f7 100%)',
    },
    icon: '🌌',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean whites and grays with subtle accents',
    colors: {
      primary: '#374151',
      secondary: '#6b7280',
      accent: '#3b82f6',
      background: '#ffffff',
      backgroundSecondary: '#f9fafb',
      foreground: '#111827',
      card: '#ffffff',
      cardForeground: '#111827',
      border: 'rgba(0, 0, 0, 0.1)',
      muted: '#f3f4f6',
      mutedForeground: '#6b7280',
      destructive: '#ef4444',
      destructiveForeground: '#ffffff',
    },
    gradients: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
      primary: 'linear-gradient(135deg, #374151 0%, #6b7280 100%)',
      accent: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    },
    icon: '⚪',
  },
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedThemeId = localStorage.getItem('theme');
    if (savedThemeId) {
      const theme = themes.find(t => t.id === savedThemeId);
      if (theme) {
        setCurrentTheme(theme);
        applyTheme(theme);
      }
    } else {
      applyTheme(currentTheme);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    
    // Apply CSS custom properties
    root.style.setProperty('--violet', theme.colors.primary);
    root.style.setProperty('--cyan', theme.colors.secondary);
    root.style.setProperty('--dark-bg', theme.colors.background);
    root.style.setProperty('--dark-bg-2', theme.colors.backgroundSecondary);
    root.style.setProperty('--dark-card', theme.colors.card);
    root.style.setProperty('--dark-border', theme.colors.border);
    
    // Apply theme-specific classes
    root.className = root.className.replace(/theme-\w+/g, '');
    root.classList.add(`theme-${theme.id}`);
    
    // Apply background gradient
    root.style.setProperty('--background', theme.gradients.background);
  };

  const setTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      applyTheme(theme);
      localStorage.setItem('theme', themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

