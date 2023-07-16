const esbuild = require("esbuild");
const glob = require("glob");
const path = require("path");
const fs = require("fs-extra");

const entryPoints = glob.sync("src/app/**/*.ts");
const outputDir = "dist/js";

// Clear the output dir
fs.emptyDirSync(outputDir);

entryPoints.forEach((entryPoint) => {
  const entryName = path.basename(entryPoint, path.extname(entryPoint));
  const outputFilePath = path.join(outputDir, `${entryName}.js`);

  esbuild
    .build({
      entryPoints: [entryPoint],
      bundle: true,
      minify: process.env.NODE_ENV === "production",
      sourcemap: process.env.NODE_ENV !== "production",
      outfile: outputFilePath,
      tsconfig: "tsconfig.json",
      platform: "node",
    })
    .catch(() => process.exit(1));
});
