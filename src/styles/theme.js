export const lightTheme = {
  // Background colors
  bg: {
    primary: '#FFFFFF',
    secondary: '#FAF9F8',
    tertiary: '#F5F3F1',
    card: '#FFFFFF',
    hover: '#FBF9F7',
  },

  // Text colors
  text: {
    primary: '#1A1A1A',
    secondary: '#4A4A4A',
    tertiary: '#6B6B6B',
    accent: '#390517',
    light: '#8A8A8A',
  },

  // Accent colors - elegant burgundy and champagne gold
  accent: {
    primary: '#390517', // Deep burgundy
    secondary: '#C9A961', // Champagne gold
    primaryLight: '#5A0824',
    primaryDark: '#220310',
    secondaryLight: '#D4B976',
    secondaryDark: '#A88B4D',
  },

  // Border and divider colors
  border: {
    primary: '#E8E5E2',
    secondary: '#F2F0ED',
    accent: '#390517',
  },

  // Shadow
  shadow: {
    small: '0 1px 3px rgba(57, 5, 23, 0.08)',
    medium: '0 4px 12px rgba(57, 5, 23, 0.12)',
    large: '0 10px 40px rgba(57, 5, 23, 0.15)',
    accent: '0 4px 20px rgba(57, 5, 23, 0.2)',
    hover: '0 8px 30px rgba(57, 5, 23, 0.18)',
  },
};

export const darkTheme = {
  // Background colors
  bg: {
    primary: '#0A0A0A',
    secondary: '#1A1A1A',
    tertiary: '#2A2A2A',
    card: '#141414',
    hover: '#1F1F1F',
  },

  // Text colors
  text: {
    primary: '#F5F5F5',
    secondary: '#D1D1D1',
    tertiary: '#A3A3A3',
    accent: '#E8A5B8',
    light: '#8A8A8A',
  },

  // Accent colors - elegant rose and gold for dark mode
  accent: {
    primary: '#C4667D', // Rose
    secondary: '#E5C78F', // Light gold
    primaryLight: '#D48599',
    primaryDark: '#A34D64',
    secondaryLight: '#EDD7A8',
    secondaryDark: '#CCB076',
  },

  // Border and divider colors
  border: {
    primary: '#2A2A2A',
    secondary: '#3A3A3A',
    accent: '#C4667D',
  },

  // Shadow
  shadow: {
    small: '0 1px 3px rgba(0, 0, 0, 0.4)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.5)',
    large: '0 10px 40px rgba(0, 0, 0, 0.6)',
    accent: '0 4px 20px rgba(196, 102, 125, 0.25)',
    hover: '0 8px 30px rgba(0, 0, 0, 0.5)',
  },
};

export const sharedTheme = {
  // Typography
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"Fira Code", monospace',
  },

  // Font sizes
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },

  // Spacing
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },

  // Breakpoints
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
    wide: '1536px',
  },

  // Transitions
  transition: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },

  // Border radius
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
};
