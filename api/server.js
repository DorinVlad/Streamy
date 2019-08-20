const path = require("path");
const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: "../client/build"
});
const PORT = process.env.PORT || 4000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(cors());
server.use(middlewares);

if (process.env.NODE_ENV === "production") {
  // Add custom routes before JSON Server router
  server.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    );
  });
}

// Use default router
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is listening on port ${PORT}`);
});
