const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://apione.axletechmm.com",
      changeOrigin: true,
    })
  );
};
