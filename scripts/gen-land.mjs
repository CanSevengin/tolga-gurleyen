// Dünya kara noktalarını bir kez üretir (lib/land.json). Çalıştırma: node scripts/gen-land.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { feature } from "topojson-client";
import { geoContains } from "d3-geo";

const topo = JSON.parse(readFileSync("node_modules/world-atlas/land-110m.json", "utf8"));
const land = feature(topo, topo.objects.land);
const out = [];
const step = 1.45; // derece
for (let lat = -58; lat <= 80; lat += step) {
  const lonStep = step / Math.max(0.18, Math.cos((lat * Math.PI) / 180));
  for (let lon = -180; lon < 180; lon += lonStep) {
    if (geoContains(land, [lon, lat])) out.push(Math.round(lat * 10), Math.round(lon * 10));
  }
}
writeFileSync("lib/land.json", JSON.stringify(out));
console.log("points:", out.length / 2);
