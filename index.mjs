import htmlToImage from "node-html-to-image";
import { readFileSync } from "fs";
import { setWallpaper } from "wallpaper";
import cron from "node-cron";

const html = readFileSync("./index.html", (err) => {
  if (err) {
    throw err;
  }
  return console.log(html);
});

cron.schedule("* * * * *", () => {
  htmlToImage({
    output: "image.png",
    html: html.toString()
  }).then(() => {
    console.log("Image created");
    setWallpaper("./image.png").then((err) => {
        console.log("Wallpaper set succesfully");
    })
    })
});

