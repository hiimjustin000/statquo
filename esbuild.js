const fs = require("fs");
const path = require("path");
const { buildSync: esbuild } = require("esbuild");

/** @type {import("esbuild").BuildOptions} */
const options = {
    entryPoints: fs
        .readdirSync(path.join(__dirname, "src"))
        .filter(f => f.endsWith(".ts"))
        .map(f => "src/" + f),
    target: "es2021",
    bundle: false,
    loader: { ".ts": "ts" },
    sourcemap: "linked",
    charset: "utf8"
};

esbuild({
    ...options,
    outdir: "cjs",
    format: "cjs"
});

esbuild({
    ...options,
    outdir: "esm",
    format: "esm"
});

/** @type {import("esbuild").BuildOptions} */
const bundleOptions = {
    entryPoints: ["src/index.ts"],
    target: "es2021",
    bundle: true,
    loader: { ".ts": "ts" },
    format: "iife",
    globalName: "statquo",
    sourcemap: false,
    charset: "utf8"
};

esbuild({
    ...bundleOptions,
    minify: false,
    outfile: "dist/statquo.js"
});

esbuild({
    ...bundleOptions,
    minify: true,
    outfile: "dist/statquo.min.js"
});
