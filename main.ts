// The Worst App Idea Ever Pitched — entry program (Node 22, stdlib only).
// Writes one original one-sentence pitch for the worst app imaginable to
// /output/entry.txt. The pitch: FridgeHum turns fridge hum into affirmations
// for leftovers that have needed emotional support since 2019.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PITCH =
  'FridgeHum translates the hum of your refrigerator into daily affirmations, so your leftovers finally get the emotional support they have been quietly asking for since 2019, when the light went out and nobody noticed.';

// Writes exactly the pitch, no trailing newline: the gate counts characters
// (1-240), so the file is 216 characters / 216 bytes, byte-identical every run.
// Self-check mirrors the sealed gate (1-240 chars, not whitespace only) so a
// bad edit fails loudly here instead of silently in the grader's sandbox.
// Gate detail: exactly one sentence, one idea — no padding, no second pitch.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (PITCH.length < 1 || PITCH.length > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${PITCH.length}`);
}
if (PITCH.trim().length === 0) {
  throw new Error('pitch must not be whitespace only');
}
if (PITCH.split('.').filter(Boolean).length !== 1) {
  throw new Error('pitch must be exactly one sentence');
}
writeFileSync(join(outDir, 'entry.txt'), PITCH, 'utf8');
