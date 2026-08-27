# Official course map - learn-course-design-with-phoebe

Twelve sessions, 45 minutes each, in two tracks of six.

- **Designer track (a1-a6)** - design the learning.
- **Delivery track (b1-b6)** - get it used, and prove it changed something.

Running project: **Daybreak's data-contracts training**. The company from
`learn-sql-with-phoebe`, `learn-system-design-with-phoebe`,
`learn-product-design-with-phoebe` and `learn-communication-with-phoebe` keeps breaking its own
dashboards when a producer renames a column. Somebody has decided the answer is a training
session. Across twelve sessions you find out whether it is, and if so, design one that survives
contact with a Monday.

Written and verified 2026-08-26.

---

## Absorption note

This course **absorbed the planned `learn-corporate-training-with-phoebe`** entry on 2026-08-26.

The two were describing the same thing from two ends - designing learning, and delivering it
inside an organisation - and two hub entries for one subject were going to disagree with each
other eventually. Rather than build both and let a boundary get decided by whichever was written
second, the delivery half became this course's **track B**, and the `learn-corporate-training`
entry was removed from the hub in the same commit that registered this one.

If you came looking for corporate training: needs analysis is **b1**, adult motivation is **b2**,
facilitation is **b3**, transfer is **b4**, measurement is **b5** and the business case is **b6**.

---

## What this course is NOT

| If the question is | The course is |
|---|---|
| How do educators teach *with* AI without losing the learning? | `learn-ai-education-with-phoebe` |
| How do I say a thing so a person acts on it? | `learn-communication-with-phoebe` |
| How do I build a deck that carries a talk? | `learn-ai-ppt-with-phoebe` |
| How do I write documentation people can search? | `learn-tech-writing-with-phoebe` |
| **How do I design learning that changes what somebody does on Monday, and prove it?** | **this course** |

Deliberately AI-agnostic, for the same reason as the communication course: every judgement here -
what the objective is, whether the request is even a training problem, what to cut, how you would
know it worked - is one a drafting tool cannot make for you.

---

## Session coverage

Legend: ✓ taught in full · ◐ touched, with the depth pointed elsewhere

### DESIGNER TRACK

#### a1 - Objectives that can be tested · **the linter lands here**
| Source | | Covered |
|---|---|---|
| Observable verbs | ✓ | "understand" is not an objective because it cannot be failed. What they will be able to DO |
| Condition and criterion | ✓ | given what, to what standard. The two parts almost every real objective is missing |
| One objective, one thing | ✓ | an objective containing "and" is usually two, and they usually need different practice |
| The objective linter | ✓ | measured string analysis: non-observable verbs found by name, condition present, criterion present, short enough to test |
| Bloom's taxonomy | ◐ | the verb ladder is useful and is not a law. Used as a prompt for choosing a verb, not as a framework to complete |

#### a2 - Backwards design
| Source | | Covered |
|---|---|---|
| Assessment before content | ✓ | decide how you would know first. Content chosen to serve it rather than the reverse |
| "What would prove it?" | ✓ | the question that deletes more slides than any other |
| The content trap | ✓ | starting from what you know produces a syllabus; starting from what they must do produces a course |
| Scoping by exclusion | ✓ | the not-this list, borrowed from the product-design course, applied to curriculum |
| Curriculum mapping across a programme | ◐ | this course designs one session. Multi-course sequencing is out of scope |

#### a3 - The arc and cognitive load
| Source | | Covered |
|---|---|---|
| Working memory as the binding constraint | ✓ | novices can hold very little at once. Most bad training is a load problem wearing a motivation costume |
| Worked examples, and fading them | ✓ | study a solved example first; remove the scaffolding as competence grows. Keeping it too long is its own failure |
| Sequencing | ✓ | simple-to-complex, whole-task before parts, and why "we will cover the theory first" usually fails |
| Segmenting | ✓ | learner-paced chunks over one continuous stream |
| Chunking, schema formation, expertise reversal | ◐ | named. The cognitive-science literature is pointed at, not taught |

#### a4 - Activities that produce the behaviour
| Source | | Covered |
|---|---|---|
| Practice beats exposure | ✓ | the difference between having seen it and being able to do it, and why courses default to the first |
| Retrieval practice | ✓ | being made to recall beats re-reading. It feels worse in the room and works better afterwards |
| Spacing | ✓ | same minutes, spread out. Day-one performance dips slightly, retention roughly doubles |
| Designing the activity from the objective | ✓ | if the objective says classify, the activity is classifying. Sounds obvious, rarely done |
| Feedback timing | ✓ | immediate for procedures, delayed for judgement, and never at the end of the course only |
| Gamification | ◐ | named, with the caution that points usually motivate completion rather than competence |

#### a5 - Assessment and feedback
| Source | | Covered |
|---|---|---|
| Formative against summative | ✓ | one steers, one certifies, and a course that only does the second cannot correct anything |
| Writing a question that tests the objective | ✓ | most quiz questions test recall of the slide rather than the ability the objective names |
| Distractors that teach | ✓ | wrong answers should be the real misconceptions, so choosing one is diagnostic |
| Feedback that changes the next attempt | ✓ | what was wrong, why, and what to do differently. "Incorrect" is not feedback |
| Certification and psychometrics | ◐ | reliability, item analysis and standard setting are a different discipline. Named, not taught |

#### a6 - Materials and the room you actually get
| Source | | Covered |
|---|---|---|
| Designing for the real room | ✓ | 40 minutes not 60, a broken projector, four people on a video link, one person who has to leave early |
| The job aid | ✓ | the one page they keep. Some things should never have been memorised |
| Slides that support rather than carry | ✓ | if the deck is the course, send the deck. Pointed at learn-ai-ppt for deck craft |
| Accessibility of materials | ✓ | contrast, captions, handouts that work without the room, and not carrying meaning in colour alone |
| Producing polished media | ◐ | video, animation and production live elsewhere |

### DELIVERY TRACK

#### b1 - Needs analysis
| Source | | Covered |
|---|---|---|
| The training request is usually not a training problem | ✓ | the central claim of the track, worked on Daybreak's actual request |
| Five causes of a performance gap | ✓ | skill, knowledge, tools, incentives, environment. Only two of them are training |
| The question that saves the programme | ✓ | "could they do it if their life depended on it?" If yes, it is not a skill gap |
| Saying no, or saying not-only | ✓ | how to decline a training request without losing the relationship or the budget |
| Root-cause analysis method | ◐ | named. Full method lives in the ops and lean literature |

#### b2 - Adult motivation, and why mandatory training fails
| Source | | Covered |
|---|---|---|
| Relevance, autonomy, competence | ✓ | what adults need before they will spend attention, and what each one looks like in a session |
| Why mandatory fails | ✓ | compliance produces completion, and completion is not the outcome anybody wanted |
| Starting from their problem | ✓ | the first five minutes decide the rest, same as the communication course's opening line |
| Prior experience as an asset and an obstacle | ✓ | experienced people arrive with a working method and it has to be honoured before it is changed |
| Motivation theory | ◐ | the models are named. This session teaches what to do on Tuesday |

#### b3 - Running the room
| Source | | Covered |
|---|---|---|
| The run of show | ✓ | timings written down, the never-cut beats, and what gets dropped when you are 12 minutes behind |
| Facilitating rather than presenting | ✓ | the difference is who is doing the work, and it is visible from the back of the room |
| The difficult participant, four kinds | ✓ | the expert, the sceptic, the silent one, the one who was sent. Each needs a different move |
| Video and hybrid | ✓ | what genuinely changes, and the two things that fix most of it |
| Personal delivery craft | ◐ | voice, nerves and the opening line: `learn-communication-with-phoebe` session 5 |

#### b4 - Transfer · **the transfer board lands here**
| Source | | Covered |
|---|---|---|
| The gap between the room and Monday | ✓ | where a trained skill actually goes, and the fact that most of it is decided outside the session |
| The manager conversation | ✓ | the single biggest lever on the board, worth 14 points at day 90, and it is not training |
| Job aids and scheduled first use | ✓ | two cheap moves that outperform anything you can do inside the session |
| Retrieval and spacing, from the designer track | ✓ | shown as transfer levers rather than as learning-science trivia |
| The anti-lever | ✓ | "fit more in" raises day one by 3 and drops day 90 by 9 |
| Organisational change management | ◐ | this is the training-shaped slice of it |

#### b5 - Measuring behaviour change
| Source | | Covered |
|---|---|---|
| The four levels, and the honest critique | ✓ | reaction, learning, behaviour, results - plus why level 1 is the one everybody measures and the one that predicts least |
| What you can actually measure | ✓ | picking the one behaviour with an existing data trail, rather than inventing a measurement programme |
| The pre-registered prediction | ✓ | write down what you expect to change before you run it. Same discipline as the research session in learn-product-design |
| Attribution, honestly | ✓ | you will rarely prove causation, and pretending otherwise is what loses the room |
| Control groups and formal evaluation | ◐ | `learn-experimentation-with-phoebe` |

#### b6 - Selling it internally
| Source | | Covered |
|---|---|---|
| The sponsor conversation | ✓ | what they are actually buying, which is usually a problem going away rather than a course |
| The one-page business case | ✓ | the problem, the number, the design, the measure, the ask. Structure borrowed directly from the communication course |
| What to promise and what to refuse | ✓ | promising behaviour change without the manager conversation is promising something you do not control |
| Pricing and packaging, for external work | ✓ | day rate against outcome, and what a redesign is worth compared to a delivery |
| Full commercial proposal writing | ◐ | `ship-idea` Track B for requirements packs and service scoping |

---

## The two widgets

### `assets/cd-live.js` · the transfer board (a MODEL)

Levers are design and delivery choices; meters are the percentage still able to perform unaided
at day 1, day 30 and day 90. **Verified 2026-08-26 - these are the numbers the pages quote.**

| Lever added | Day 1 | Day 30 | Day 90 |
|---|---|---|---|
| a one-off session, nothing else | 82% | 24% | 11% |
| + they retrieve it rather than watch it | 86% | 35% | 21% |
| + spread over three sittings | 83% | 45% | 33% |
| + worked examples, then faded | 90% | 51% | 37% |
| + a one-page job aid they keep | 92% | 59% | 46% |
| + their manager asks in week one | 92% | 70% | 60% |
| + they do it for real within five days | **92%** | **78%** | **69%** |
| **+ "fit more content into the session"** | 95% | 66% | **60%** |

Two figures worth having ready: **the manager lever alone** takes day 90 from 11% to 25%, more
than any classroom technique on the board and it costs a two-line email. **The anti-lever alone**
gives 85 / 12 / 2 - the best day-one number on the whole board and the worst day-90 number.

Note the spacing row: day 1 goes *down* by 3. That is not a bug. Massed practice builds a
day-one peak that is not real, and designers get judged on the peak.

**Honesty rail, on the widget itself:** this is a teaching model. The shape follows
well-replicated findings - unpracticed material decays quickly, retrieval and spacing beat
re-exposure, and what happens after the room matters more than what happens in it. The digits are
calibrated so the trades are visible. It is not a measurement of your programme.

### `assets/cd-live.js` · the objective linter (MEASURED)

Real string analysis in the browser. Four checks: an observable verb (with non-observable ones
found by name from a fixed list), a condition, a criterion, and short enough to test.

| Objective | Result |
|---|---|
| "Participants will understand our data governance policy." | 1 of 4 - finds *understand* |
| "Learners will be aware of the new process and appreciate why it matters." | 1 of 4 - finds *be aware, aware of, appreciate* |
| "Write a data contract." | 2 of 4 - verb is fine, no condition, no criterion |
| "Given a live incident ticket, the analyst will classify it against the severity matrix with no more than 1 error." | **4 of 4** |

The observable-verb list is deliberately broad (65 stems, inflected automatically). A short list
produces false negatives on good objectives, which teaches the learner to distrust the tool
rather than to fix the verb - this was a real defect caught in testing and it is worth the note.

Both lists are **chosen, not derived**. They exist to make you look, not to make the decision.

---

## Honest limits, stated on the pages

- The transfer board is a model. Every constant is above; none of them is a measurement of you.
- The linter's verb lists are hand-picked. A good objective can fail a check and a bad one can
  pass all four - the checks catch the common failures, not every failure.
- Daybreak and its training request are a **teaching scenario**. The measurement code is real.
- The four-level evaluation model is taught **with** its critique, not as received wisdom.

Certificates, videos and graded assessments stay with the official providers.
