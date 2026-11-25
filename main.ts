// Invent a Word We Need — u-deranalabs-invent-a-word-we-need-17a020e0
//
// The entry is one invented English word with a one-line definition.
// The program writes that text to /output/entry.txt, exactly as the
// competition's gate expects: UTF-8 text of 1 to 140 characters.
//
// The coinage: "corridance" — corridor + dance. Everybody knows the
// moment: two strangers meet in a narrow hallway, each steps aside
// to let the other pass, and both step the same way, twice. English
// has no word for that little mirrored dance. Now it does.
//
// The program is fully deterministic: fixed text, no input, no clock,
// no network, no randomness. It only creates the output directory
// when it does not exist yet, then writes the entry file.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "corridance (n.) — the awkward mirrored sidestep two strangers perform when each tries to let the other pass in a narrow hallway.";

const OUTPUT_PATH = "/output/entry.txt";

// Guard the gate before writing: the entry must be 1 to 140
// characters of non-blank UTF-8 text, on a single line.
const length = [...ENTRY].length;
if (length < 1 || length > 140 || ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error(`entry violates the gate: ${length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${length} characters to ${OUTPUT_PATH}`);
