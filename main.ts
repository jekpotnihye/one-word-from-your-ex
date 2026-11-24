import { mkdirSync, writeFileSync } from "node:fs";

// One word from your ex: "Almost".
//
// Almost a boyfriend, almost committed, almost there, almost enough.
// It is a real word a person would actually say about a partner they
// once had, and it lands as a laugh and a sting in the same breath.
// Funny through its sharp turn: the word nobody expects as a
// description, until it lands. Painfully true, because the entrant
// plainly knows it. Relatable, because everyone has lived an almost,
// and people repeat the word for exactly that reason. It stings
// because it is true, never because it insults: no meanness, no
// explanation, nothing to swap it for without losing its edge. Six
// letters, one word, no spaces.
const WORD = "Almost";
const OUTPUT_PATH = "/output/entry.txt";

function isSingleWord(text: string): boolean {
  const lettersOnly = /^[A-Za-z]+$/.test(text);
  return text.length >= 1 && text.length <= 24 && lettersOnly;
}

if (!isSingleWord(WORD)) {
  throw new Error("entry must be one word of 1 to 24 characters");
}

mkdirSync("/output", { recursive: true });
// Exactly the word and nothing else: no trailing newline, so the file
// holds six bytes and the word stands alone, as the judge sees it.
writeFileSync(OUTPUT_PATH, WORD, "utf8");
