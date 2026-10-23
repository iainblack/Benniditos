// Regenerates src/assets/deliveryArea.ts from src/assets/ditos.kml.
// Run with `npm run generate:delivery-area` after editing the KML.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const kmlPath = `${root}src/assets/ditos.kml`;
const outPath = `${root}src/assets/deliveryArea.ts`;

const kml = readFileSync(kmlPath, "utf8");
const polygons = kml.match(/<coordinates>[\s\S]*?<\/coordinates>/g) ?? [];
if (polygons.length !== 1) {
  throw new Error(
    `Expected exactly one <coordinates> block in ${kmlPath}, found ${polygons.length}`
  );
}

const points = polygons[0]
  .replace(/<\/?coordinates>/g, "")
  .trim()
  .split(/\s+/)
  .map((tuple) => {
    // KML order is lng,lat[,alt]
    const [lng, lat] = tuple.split(",").map(Number);
    if (Number.isNaN(lat) || Number.isNaN(lng)) {
      throw new Error(`Invalid coordinate "${tuple}" in ${kmlPath}`);
    }
    return `  { lat: ${lat}, lng: ${lng} },`;
  });

writeFileSync(
  outPath,
  `// Delivery area boundary, generated from src/assets/ditos.kml.\nexport const deliveryAreaPath: google.maps.LatLngLiteral[] = [\n${points.join("\n")}\n];\n`
);
console.log(`Wrote ${points.length} points to ${outPath}`);
