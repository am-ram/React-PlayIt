const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const port = process.env.PORT || 4545;

// path for static connection files

const path = require("path");

////////cors()

app.use(cors());

////////port open
app.listen(port, () => {
  console.log(`Server Works !!! At port ${port}`);
});

/////get request handel here get url for one video

app.get("/download", (req, res) => {
  var URL = req.query.URL;

  ytdl.getInfo(URL).then((info) => {
    const format = ytdl.filterFormats(info.formats, "audioonly");

    res.json(format[1].url);
  });
});

// server side build

// static folder

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
