/**
 * Example Theme Configurations
 * 
 * This file demonstrates various ways to configure themes for the Dreame Vacuum Card.
 * Copy any of these examples to your Home Assistant configuration.
 */

import type { HassConfig } from '../types/homeassistant';

/**
 * Example 1: Light Theme (Default)
 */
export const lightThemeConfig: HassConfig = {
  entity: 'vacuum.dreame_vacuum',
  type: 'custom:dreame-vacuum-map-card',
  theme: 'light',
};

/**
 * Example 2: Dark Theme
 */
export const darkThemeConfig: HassConfig = {
  entity: 'vacuum.dreame_vacuum',
  type: 'custom:dreame-vacuum-map-card',
  theme: 'dark',
};

/**
 * Example 3: Custom Theme - Minimal Override
 * Extend dark theme with custom accent color
 */
export const customAccentConfig: HassConfig = {
  entity: 'vacuum.dreame_vacuum',
  type: 'custom:dreame-vacuum-map-card',
  theme: 'custom',
  custom_theme: {
    base: 'dark',
    accentColor: '#ff6b6b',
    accentColorHover: '#ff5252',
    accentBg: 'rgba(255, 107, 107, 0.2)',
    accentBgHover: 'rgba(255, 107, 107, 0.3)',
  },
};

/**
 * Example 4: Custom Theme - Ocean Blue
 * A cool ocean-inspired theme
 */
export const oceanThemeConfig: HassConfig = {
  entity: 'vacuum.dreame_vacuum',
  type: 'custom:dreame-vacuum-map-card',
  theme: 'custom',
  custom_theme: {
    base: 'dark',
    cardBg: '#0a1929',
    surfaceBg: '#132f4c',
    surfaceSecondary: '#1a3a52',
    surfaceTertiary: '#244860',
    textPrimary: '#e3f2fd',
    accentColor: '#29b6f6',
    accentColorHover: '#03a9f4',
    accentBg: 'rgba(41, 182, 246, 0.2)',
    toggleActiveBorder: '#29b6f6',
    toggleActive: 'rgba(41, 182, 246, 0.3)',
  },
};

/**
 * Example 5: Custom Theme - Warm Sunset
 * A warm, inviting theme with orange accents
 */
export const sunsetThemeConfig: HassConfig = {
  entity: 'vacuum.dreame_vacuum',
  type: 'custom:dreame-vacuum-map-card',
  theme: 'custom',
  custom_theme: {
    base: 'light',
    cardBg: '#fff8e1',
    surfaceBg: '#ffffff',
    surfaceSecondary: '#ffecb3',
    surfaceTertiary: '#ffe082',
    accentColor: '#ff6f00',
    accentColorHover: '#e65100',
    accentBg: '#ffe0b2',
    accentBgHover: '#ffcc80',
    toggleActive: '#ff8f00',
    toggleActiveBorder: '#ff6f00',
  },
};

/**
 * Example 6: Custom Theme - Forest Green
 * A nature-inspired green theme
 */
export const forestThemeConfig: HassConfig = {
  entity: 'vacuum.dreame_vacuum',
  type: 'custom:dreame-vacuum-map-card',
  theme: 'custom',
  custom_theme: {
    base: 'light',
    cardBg: '#f1f8e9',
    surfaceBg: '#ffffff',
    surfaceSecondary: '#dcedc8',
    surfaceTertiary: '#c5e1a5',
    textPrimary: '#1b5e20',
    accentColor: '#2e7d32',
    accentColorHover: '#1b5e20',
    accentBg: '#c8e6c9',
    accentBgHover: '#a5d6a7',
    toggleActive: '#43a047',
    toggleActiveBorder: '#2e7d32',
  },
};

/**
 * Example 7: Custom Theme - High Contrast
 * Maximum contrast for accessibility
 */
export const highContrastConfig: HassConfig = {
  entity: 'vacuum.dreame_vacuum',
  type: 'custom:dreame-vacuum-map-card',
  theme: 'custom',
  custom_theme: {
    base: 'light',
    cardBg: '#ffffff',
    surfaceBg: '#ffffff',
    surfaceSecondary: '#f0f0f0',
    surfaceTertiary: '#e0e0e0',
    textPrimary: '#000000',
    textSecondary: '#333333',
    textTertiary: '#666666',
    accentColor: '#0000ff',
    accentColorHover: '#0000cc',
    borderColor: '#000000',
    cardShadow: 'rgba(0, 0, 0, 0.3)',
  },
};

/**
 * Example 8: Custom Theme - Cyberpunk
 * Neon colors with dark background
 */
export const cyberpunkConfig: HassConfig = {
  entity: 'vacuum.dreame_vacuum',
  type: 'custom:dreame-vacuum-map-card',
  theme: 'custom',
  custom_theme: {
    base: 'dark',
    cardBg: '#0d0221',
    surfaceBg: '#190037',
    surfaceSecondary: '#240046',
    surfaceTertiary: '#3c096c',
    textPrimary: '#e0aaff',
    accentColor: '#ff006e',
    accentColorHover: '#d90062',
    accentBg: 'rgba(255, 0, 110, 0.2)',
    toggleActive: '#7209b7',
    toggleActiveBorder: '#ff006e',
    toggleActiveShadowColor: 'rgba(255, 0, 110, 0.5)',
  },
};

/**
 * Example 9: Home Assistant Default (Blue)
 * Match Home Assistant's default color scheme
 */
export const haDefaultConfig: HassConfig = {
  entity: 'vacuum.dreame_vacuum',
  type: 'custom:dreame-vacuum-map-card',
  theme: 'custom',
  custom_theme: {
    base: 'light',
    accentColor: '#03a9f4',
    accentColorHover: '#0288d1',
    accentBg: '#e1f5fe',
    accentBgHover: '#b3e5fc',
    toggleActive: '#03a9f4',
    toggleActiveBorder: '#0288d1',
  },
};

/**
 * Example 10: Monochrome
 * Black and white only
 */
export const monochromeConfig: HassConfig = {
  entity: 'vacuum.dreame_vacuum',
  type: 'custom:dreame-vacuum-map-card',
  theme: 'custom',
  custom_theme: {
    base: 'light',
    cardBg: '#ffffff',
    surfaceBg: '#f5f5f5',
    surfaceSecondary: '#e0e0e0',
    surfaceTertiary: '#cccccc',
    textPrimary: '#000000',
    textSecondary: '#666666',
    textTertiary: '#999999',
    accentColor: '#000000',
    accentColorHover: '#333333',
    accentBg: '#e0e0e0',
    accentBgHover: '#cccccc',
    toggleActive: '#666666',
    toggleActiveBorder: '#000000',
  },
};
