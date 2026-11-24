import { mkdirSync, writeFileSync } from "node:fs";

const line = "Wait — I was just about to tell you where I hid the—";
// The line ends mid-word on purpose: the power is cut before it finishes.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
