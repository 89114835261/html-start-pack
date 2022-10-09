const isProduction = process.argv.includes('--production')
const isDevelopment = !isProduction

module.exports = {
  isProduction,
  isDevelopment,

  htmlmin: {
    collapseWhitespase: isProduction, //delete spacing in production
  },

  fonter: {
    formats: ['eot'],
  },

  plumber: (notify, title) => {
    return {
      errorHandler: notify.onError((error) => ({
        title,
        message: error.message,
      })),
    }
  },

  webpack: {
    configuration: {
      mode: isProduction ? 'production' : 'development',
    },
  },

  imagemin: {
    configuration: {
      verbose: true,
    },
  },
}
