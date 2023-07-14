const sass = require("node-sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const CleanCSS = require("clean-css");
const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src", "styles");
const outDir = path.join(__dirname, "dist", "css");

fs.readdir(srcDir, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (path.extname(file) === ".scss") {
      const srcFile = path.join(srcDir, file);
      const outFile = path.join(outDir, file.replace(".scss", ".css"));

      sass.render({ file: srcFile }, (err, result) => {
        if (err) throw err;

        postcss([autoprefixer])
          .process(result.css, { from: srcFile, to: outFile })
          .then((result) => {
            const output = new CleanCSS({}).minify(result.css);

            // Create the output directory if it does not exist
            fs.mkdirSync(path.dirname(outFile), { recursive: true });

            fs.writeFile(outFile, output.styles, (err) => {
              if (err) throw err;
            });
          });
      });
    }
  });
});
