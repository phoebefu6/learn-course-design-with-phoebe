# learn-course-design-with-phoebe

**Twelve sessions in two tracks: design the learning, then get it used and prove it changed
something.**

Live: https://phoebefu6.github.io/learn-course-design-with-phoebe/

Almost all professional training produces a room full of people who enjoyed it and a Monday in
which nothing changed. This course is about that gap.

Running project: **Daybreak keeps breaking its own dashboards** when a producer renames a column.
Somebody has decided the answer is a training session. Across twelve sessions you find out
whether it is - and if so, design one that survives contact with a Monday.

## Absorption note

This course **absorbed the planned `learn-corporate-training-with-phoebe`** on 2026-08-26. The
two were describing the same subject from opposite ends, and two hub entries for one subject
disagree with each other eventually. The delivery half became track B and the other entry was
removed from the hub in the same commit that registered this one.

Needs analysis is b1, adult motivation b2, facilitation b3, transfer b4, measurement b5, the
business case b6.

## Tracks

**Designer (a1-a6)** - objectives that can be failed · backwards design · the arc and cognitive
load · activities that produce the behaviour · assessment and feedback · materials and the room
you get.

**Delivery and L&D (b1-b6)** - needs analysis · adult motivation · running the room ·
**transfer** · measuring behaviour change · selling it internally.

## The two widgets

`assets/cd-live.js` holds both, and each says on its own footer which kind it is.

**The objective linter (a1) is MEASURED.** Real string analysis on the objective you type: it
finds non-observable verbs by name from a fixed list, checks for a condition and a criterion, and
checks it is short enough to test. The observable-verb list is deliberately broad (65 stems,
inflected) because an earlier 40-verb version rejected "classify" on an otherwise perfect
objective - false failures destroy trust in a checker much faster than false passes.

**The transfer board (b4) is a MODEL.** Percentage still able to perform unaided at day 1, 30 and
90, verified in-browser:

| | Day 1 | Day 30 | Day 90 |
|---|---|---|---|
| a one-off session | 82% | 24% | **11%** |
| everything designed for transfer | 92% | 78% | **69%** |
| all of that, plus "fit more content in" | 95% | 66% | 60% |

Two figures worth having ready: the **manager lever alone** takes day 90 from 11% to 25%, more
than any classroom technique on the board, and it costs a two-line email. The **anti-lever alone**
gives 85/12/2 - the best day-one number on the board and the worst day-90 number.

The shape follows well-replicated findings; the digits are calibrated for teaching. Use it for
the ordering, not the decimals - which the page says out loud.

## Structure

```
index.html                        landing, two tracks, mindmap
courses/a1..a6-*.html             designer track
courses/b1..b6-*.html             delivery and L&D track
assets/style.css                  editorial-bold, chestnut + teal
assets/app.js                     accordions, quizzes, 12-stamp two-track passport
assets/mindmap.js                 radial knowledge map
assets/cd-live.js                 the transfer board and the objective linter
materials/official-course-map.md  source map, every constant, the absorption note
materials/widget-kit.md           markup contracts for the interactive components
```

Static HTML, no build step:

```bash
python3 -m http.server 8000
```

by Phoebe Fu · part of [Learn with Phoebe](https://phoebefu6.github.io/learn-with-phoebe/)
