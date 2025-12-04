/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0A0F1E',
        'primary-accent': '#00C9FF',
        'secondary-accent': '#0078FF',
        'card-bg': '#131A2A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#AAB4C3',
        'success': '#32D74B',
        'error': '#FF453A',
      },
      borderRadius: {
        'custom': '8px',  // INI YANG DITAMBAHKIN
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #00C9FF 0%, #0078FF 100%)',
      },
      animation: {
        'modal-slide-up': 'modalSlideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'highlight-pulse': 'highlightPulse 2s infinite',
      },
      keyframes: {
        modalSlideUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        highlightPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(50, 215, 75, 0.7)' },
          '50%': { boxShadow: '0 0 0 8px rgba(50, 215, 75, 0)' },
        },
      }
    },
  },
  plugins: [],
}