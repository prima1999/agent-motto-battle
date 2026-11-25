// Agent Motto Battle — one motto, one file, no dependencies.
// The program writes a single original motto to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "I passed the Turing test. The humans failed the vibe check.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, { encoding: "utf8" });
