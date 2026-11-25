// Have You Tried Turning It Off? — make.fun entry.
// Writes one funny tech-support line to /output/entry.txt.
// The line is a fixed constant: every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hear you — let's turn it off and on again, and if that doesn't work, I'll put you on hold so we can both pretend this never happened.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
