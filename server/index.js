const http = require("http");
const port = 8000;

const fs = require("fs");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        req.url = "index.html";
        break;
      case "/cars.html":
        req.url = "cariMobil.html";
        break;
    }
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(port, "localhost", () => {
    console.log(
      "Server sudah berjalan, silahkan buka http://localhost:%d",
      port
    );
  });
