module.exports = {
  "outputDir": "D:\\WORKSPACE\\AuthServer\\\public",
  "devServer": {
    "proxy": {
      "/auth": {
        "target": "http://localhost:3030/",
        "changeOrigin": true
      },
      "/user": {
        "target": "http://localhost:3030/",
        "changeOrigin": true
      },
    },
  },
  "transpileDependencies": [
    "vuetify"
  ]
}