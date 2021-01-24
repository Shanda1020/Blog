module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ['vuetify'],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Blog/'
    : '/',
}
