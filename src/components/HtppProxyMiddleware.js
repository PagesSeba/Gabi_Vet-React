const { createProxyMiddleware } = require('http-proxy-middleware');
    
export default function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:3002',
      changeOrigin: true,
    })
  );
};