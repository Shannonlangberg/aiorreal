# 🎬 AI or Die — Run of Show (Futures Dream Team)

A live, phone-based crowd game-show in the Futures brand. The big screen shows a
photo, quote, clip or question; the crowd answers on their phones; points for being
right *and* fast; a live leaderboard crowns a winner. Built for ~500 players.

---

## 🔗 The four links

| Who | Link |
|-----|------|
| **Big screen** (presenting laptop) | `https://futures-ai-or-real.netlify.app/screen.html` |
| **Players' phones** (this is the QR on screen) | `https://futures-ai-or-real.netlify.app/` |
| **Question editor / admin** (you only) | `https://futures-ai-or-real.netlify.app/admin.html` |
| **Sound FX remote** (Seth's phone) | `https://futures-ai-or-real.netlify.app/soundboard.html` |

Admin passphrase: **`futures2026`**.

**Sound FX remote:** open the link above on Seth's phone. It's a separate page with 8 big
buttons (correct sting, wrong buzzer, 10-sec countdown, drum roll, applause, winner fanfare,
party horn, sad-trombone wah-wah) — tapping one plays it on the *big screen* (not his
phone), ducking the music automatically, same as the audio-round clips. It talks to the game
over wifi with about half a second of lag, so it works from anywhere in the room, not just
next to the laptop. All of them are real recorded clips now except the 10-second countdown,
which is still a synthesized placeholder — send me a replacement and I'll swap it in, same as
the others.

---

## ⭐ NEW — question formats

The game now supports much more than "AI or Real":

- **Multiple choice** with **2, 3 or 4 answer options** and your own labels (A/B/C/D).
- **Tap-the-quadrant** image rounds — the crowd taps which quarter of the photo has the glitch.
- **Audio rounds** — you play a clip on the big screen; the crowd votes on their phones.
- **Morph reveal** — upload 3–6 photos of someone (start ridiculous, end on the real photo);
  the big screen cycles through them automatically over the timer, landing on the real one
  right as it ends, while the crowd guesses who it is. Build one in admin under Interaction →
  "Morph reveal."
- **⚡ Blitz** — a fast timer, worth **1.5× points**.
- **💀 Sudden Death** — dramatic red screen; a wrong answer greys out that player's phone for the round (they're back next round — nobody's kicked out). Also 1.5× points.

**10 questions are live** (the old "Is it AI" set is retired but not deleted — flip a round's
"live" toggle in admin if you ever want to bring one back). Rounds run on a **15-second timer**
and the screen **auto-reveals** when it hits zero, so the
pace never stalls (turn this off with the Auto-reveal button in the control bar if you'd
rather drive it yourself). Scoring is **validated on the server**, so nobody can cheat the
leaderboard — the winner is legit. Answer right and fast for the most points (500–1000). Answer
**wrong and it costs you too — the faster the wrong guess, the bigger the sting** (up to -400 for
an instant wrong answer, tapering down to -200 for a wrong guess right at the buzzer — a little
pride tax for answering with total confidence). Don't answer at all before the timer runs out and
it's a flat **-200**. So it always pays to take a guess — just maybe not to snap-answer out of
pure ego.

---

## 🖼️ MUST DO before the meeting — build the 10 rounds

All 10 rounds are currently **placeholder templates** — open **admin** and fill in each one
with a real staff photo and real prompt text (everything with `[brackets like this]` needs
replacing), then set the correct answer:

- **Rounds 1–5 — "Name That Prompt":** upload one AI-transformed staff photo per round, write
  3 prompt options (one real, two decoys), mark the real one as the answer.
- **Round 6 — "Guess the Victim":** an AI photo where the options are staff names instead of
  prompts — crowd guesses whose face is underneath.
- **Round 7 — "Two Truths and an AI Lie":** 3 prompt options that all sound plausible; only
  one actually made the photo.
- **Round 8 — "Escalating Absurdity":** the one non-standard round — same staffer, 3 photos
  from 3 different prompts (upload all 3 in the image-pick slots), crowd guesses which tile
  matches a prompt you read out.
- **Round 9 — "Is It AI, Round 2":** a callback bonus round — mix in one real, non-generated
  candid staff photo and ask AI-generated vs. real.
- **Round 10 — "Whose Idea Was It":** crowd guesses which staff member submitted a given
  prompt — options are staff names.

> After any edit, **refresh the big screen** so it picks up your changes.

---

## ✅ Before the service (5-min setup)

1. Open the **big-screen link** on the presenting laptop, press **F11** for full-screen.
2. You'll see the branded lobby with the QR + live player counter.
3. Test on your phone: scan, enter a name, press **Start**, answer, **Reveal**.
4. Press **Reset** (twice) to clear the test → back to 0 players.
5. Stable wifi/ethernet for the laptop; phones can be on anything.

---

## 🎮 Running it live — the control bar

One primary button (or **spacebar**) drives everything; its label tells you what's next.

| You're in… | Press | What happens |
|------------|-------|--------------|
| Lobby | **Start ▶** | Opens Round 1 |
| A question | **Reveal ▶** (or wait — it auto-reveals at 0:00) | Shows the answer + crowd split per option |
| A reveal | **Next round ▶** | Next question |
| After the last round | **Show leaderboard ▶** | Top 10 |
| Leaderboard | **Crown winner ▶** | Confetti + winner |

**Keyboard:** **→ / Space** = next · **←** = back a step · **R** = reveal · **L** = leaderboard ·
**H** = hide the control bar. Buttons: **◀** back · **✎ Questions** opens the editor ·
**Reset** (tap twice) clears everyone to the lobby.

For **audio rounds**, press ▶ on the audio player on the big screen so the room hears it.

**Peek the leaderboard mid-game:** press **L** (or the **Leaderboard** button) any time — even
mid-round — and it shows the current standings. Press **L** again (it now says **◀ Back to
game**) and you're dropped right back where you left off, timer and all. Handy for building
excitement partway through without losing your place.

**Running over time?** While the leaderboard is up, the primary button says **Crown winner ▶**
— press it (or Space) and the game ends right there with whoever's on top, even if you haven't
gotten through all 12 rounds. No need to play every round to get a winner.

---

## 🧯 If something goes sideways

- **Phone stuck?** Refresh — score is saved, they rejoin where the game is.
- **Screen out of sync?** Refresh the big-screen page.
- **Advanced too far?** Press **←** to step back.
- **Acting up?** **Reset** (twice) → lobby.
- **Wifi swamped?** It retries automatically; encourage phones onto mobile data.
- **Total fallback:** show each screen and have the crowd shout the answer.

---

## 🔁 Between two services

**Reset** (twice) before the second service — this is a *true* full reset: it wipes every
player, every answer and every score from the server, and the next time a phone checks in
(within ~1-2 seconds, automatically — no refresh needed) it forgets its old name and score
too, so if someone re-scans the QR they get a completely fresh join screen. Your questions
are untouched. Same links. Have a blast. 💜

*(Tech: hosted on Netlify; questions, scores + media in Supabase. Change the admin
passphrase or the Blitz timer any time — passphrase in config.js, timers per-round in admin.)*
