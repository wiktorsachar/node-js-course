const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>mAIN PAGE</title><head>");
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
    res.write("<head><title>CREATE USER</title><head>");
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    return req.on("end", () => {
      console.log(body.split("=")[1]);
      return res.end();
    });
  }
  res.write("<html><p>...other page</p></html>");
  res.end();
});
server.listen(3000);
