import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Vacuum's Best Excuse — one line, written by this program.
// Deterministic: no input, no network, no randomness, no clock.
// Output is exactly one line (the excuse plus a trailing newline),
// 87 characters, well within the 140-character gate.
const LINE =
  "I didn't miss that spot \u2014 the dust bunny unionised, and I'm not crossing a picket line.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
