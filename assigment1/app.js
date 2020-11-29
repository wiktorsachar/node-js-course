const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>MAIN PAGE</title><head>");
    res.write("<p>Hello!</p>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">ADD USER</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>USERS</title><head>");
    res.write("<ul><li>moczymorda1998</li><li>siwy_ruchacz</li></ul>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});
server.listen(3000);
