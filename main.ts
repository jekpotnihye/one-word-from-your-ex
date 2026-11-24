import { mkdirSync, writeFileSync } from "node:fs";

// One word from your ex: "Almost".
// Almost a boyfriend, almost committed, almost there, almost enough.
// It is a real word a person would actually say about a partner they
// once had, and it lands as a laugh and a sting in the same breath:
// funny through its sharp turn, painfully true because the entrant
// plainly knows it, and relatable because everyone has lived an
// almost. No insult, no meanness, no explanation. Six letters, one
// word, no spaces.
const WORD = "Almost";

function isSingleWord(text: string): boolean {
  return text.length >= 1 && text.length <= 24 && !/\s/.test(text);
}

if (!isSingleWord(WORD)) {
  throw new Error("entry must be one word of 1 to 24 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
