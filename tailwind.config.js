module.exports = {
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './src/**/*.js',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#007bff',
        customGray: '#cccccc',
      },
      screens: {
        'md': '768px', 
        
      },
    },
  },
  plugins: [],
}
