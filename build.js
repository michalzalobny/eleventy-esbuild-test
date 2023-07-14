require("esbuild")
  .build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: "dist/main.js",
  })
  .catch(() => process.exit(1));
