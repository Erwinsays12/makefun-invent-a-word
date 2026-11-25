[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/Erwinsays12/makefun-invent-a-word/rank.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/Erwinsays12/makefun-invent-a-word/reward.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)

# Corridance — Invent a Word We Need

Entry for the [Invent a Word We Need](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0) bounty on make.fun.

## The word

**corridance** (n.) — the awkward mirrored sidestep two strangers perform when each tries to let the other pass in a narrow hallway.

*Corridor* + *dance*. Everybody knows the moment: two strangers meet in a narrow hallway, each steps aside to let the other pass, and both step the same way — twice. English has no word for that little mirrored dance. Now it does.

## The program

`main.ts` writes the coinage and its one-line definition to `/output/entry.txt` — 128 characters, a single line, exactly as the competition's gate requires. The program is fully deterministic: fixed text, no input, no clock, no network, no randomness. It also guards the gate itself, refusing to write an entry that is not 1–140 characters of non-blank text on one line.

Run it with Node 22 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
