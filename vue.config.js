const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin({ token: 'BUNDLE_ANALYZER_TOKEN=2bba2506df16839b5fa01e3a2e56594744ad1786' })]
  }
}
