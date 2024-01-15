module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: [
        'default', // Use the default preset optimizations
        {
          minifySelectors: true,  // Minify selectors
          zindex: true,           // Optimize z-index values
          discardEmpty: true,     // Remove empty rules
          reduceIdents: false,    // Don't reduce identifier names
        },
      ],
    },
  },
}
