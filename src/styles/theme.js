export const lightTheme = {
  // Background colors
  bg: {
    primary: '#F8FAFC',
    secondary: '#F1F5F9',
    tertiary: '#E2E8F0',
    card: '#FFFFFF',
    hover: '#EEF2F6',
    accent: '#EFF6FF',
  },

  // Text colors
  text: {
    primary: '#0F172A',
    secondary: '#475569',
    tertiary: '#52637A',
    accent: '#1D4ED8',
    light: '#52637A',
    onAccent: '#FFFFFF',
  },

  // Blue is reserved for actions and selected states; slate supports neutral details.
  accent: {
    primary: '#1D4ED8',
    secondary: '#475569',
    primaryLight: '#2563EB',
    primaryDark: '#1E40AF',
    secondaryLight: '#64748B',
    secondaryDark: '#334155',
  },

  // Border and divider colors
  border: {
    primary: '#CBD5E1',
    secondary: '#E2E8F0',
    accent: '#1D4ED8',
  },

  // Shadow
  shadow: {
    small: '0 1px 3px rgba(15, 23, 42, 0.04)',
    medium: '0 4px 12px rgba(15, 23, 42, 0.06)',
    large: '0 10px 30px rgba(15, 23, 42, 0.10)',
    accent: '0 4px 16px rgba(15, 23, 42, 0.08)',
    hover: '0 8px 24px rgba(15, 23, 42, 0.08)',
  },
};

export const darkTheme = {
  // Background colors
  bg: {
    primary: '#0F172A',
    secondary: '#111C30',
    tertiary: '#25334B',
    card: '#182338',
    hover: '#21314B',
    accent: '#172E50',
  },

  // Text colors
  text: {
    primary: '#F1F5F9',
    secondary: '#CBD5E1',
    tertiary: '#94A3B8',
    accent: '#93C5FD',
    light: '#94A3B8',
    onAccent: '#FFFFFF',
  },

  // Keep button fills deep blue and use a lighter blue for readable links.
  accent: {
    primary: '#1D4ED8',
    secondary: '#94A3B8',
    primaryLight: '#60A5FA',
    primaryDark: '#1E40AF',
    secondaryLight: '#CBD5E1',
    secondaryDark: '#64748B',
  },

  // Border and divider colors
  border: {
    primary: '#334155',
    secondary: '#25334B',
    accent: '#93C5FD',
  },

  // Shadow
  shadow: {
    small: '0 1px 3px rgba(0, 0, 0, 0.15)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.20)',
    large: '0 10px 30px rgba(0, 0, 0, 0.30)',
    accent: '0 4px 16px rgba(0, 0, 0, 0.20)',
    hover: '0 8px 24px rgba(0, 0, 0, 0.25)',
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
