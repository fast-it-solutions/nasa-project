const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello World!" }));
});
