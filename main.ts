// Have You Tried Turning It Off? — make.fun entry.
// Writes one funny tech-support line to /output/entry.txt.
// The line is a fixed constant: every run produces byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I hear you — let's turn it off and on again, and if that doesn't work, I'll put you on hold so we can both pretend this never happened.";

// Gate: the competition allows 1–199 chars, one line, no blank line.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-199`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE || LINE.length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Post-write check: what landed on disk must be byte-identical to the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt on disk does not match the entry line");
}
