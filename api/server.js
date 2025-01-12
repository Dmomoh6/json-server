const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); 
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // Defaults to Vercel's dynamic port

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
   '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router);


server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  });

module.exports = server;
