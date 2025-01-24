const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/portfolio", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.7 },
  { url: "/services/audio_tech", changefreq: "monthly", priority: 0.7 },
  { url: "/services/lighting", changefreq: "monthly", priority: 0.7 },
  { url: "/services/video_tech", changefreq: "monthly", priority: 0.7 },
  { url: "/services/live_stream", changefreq: "monthly", priority: 0.7 },
  { url: "/services/interview", changefreq: "monthly", priority: 0.7 },
  { url: "/services/music_tours", changefreq: "monthly", priority: 0.7 },
  { url: "/services/venue", changefreq: "monthly", priority: 0.7 },
  { url: "/services/technical", changefreq: "monthly", priority: 0.7 },
  { url: "/about", changefreq: "monthly", priority: 0.7 },
  { url: "/about/our_team", changefreq: "monthly", priority: 0.7 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

const stream = new SitemapStream({ hostname: "https://1987masters.com/" });

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    fs.writeFileSync("public/sitemap.xml", data.toString());
    console.log("Sitemap created successfully!");
  })
  .catch((err) => {
    console.error("Error generating sitemap", err);
  });
