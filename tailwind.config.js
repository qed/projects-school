export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        canvas: '#FAF7F0',
        surface: '#FFFFFF',
        raised: '#F2ECE0',
        line: '#E3DCCC',
        ink: '#15140F',
        graphite: '#4B473D',
        muted: '#7B766A',
        accent: '#AB3F22',
        accentSoft: '#F7E8E1',
        night: '#15140F',
        nightLine: '#332F26',
        gold: '#D9A62B',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '1180px',
      },
    },
  },
}
