const express = require("express");
const router = express.Router();
const app = express();
const renderer = require("vue-server-renderer").createRenderer();
const createApp = require("./main");

router.get("/", (req, res) => {
  const vm = createApp(req);
  renderer.renderToString(vm, (err, html) => {
    if (err) {
      res.status(500).end("Internal Server Error");
      return;
    }
    res.end(`
            <!DOCTYPE html>
            <html lang="en">
              <head><meta charset="UTF-8"><title>Hello</title></head>
              <body>${html}</body>
            </html>
          `);
  });
});

app.use(router);
app.listen(3000, () => {
  console.log(3000);
});
