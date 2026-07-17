# 🎬 AI or Real — Run of Show (Futures Dream Team)

A live, phone-based crowd game-show in the Futures brand. The big screen shows a
photo, quote, clip or question; the crowd answers on their phones; points for being
right *and* fast; a live leaderboard crowns a winner. Built for ~500 players.

---

## 🔗 The three links

| Who | Link |
|-----|------|
| **Big screen** (presenting laptop) | `https://shannonlangberg.github.io/aiorreal/screen.html` |
| **Players' phones** (this is the QR on screen) | `https://shannonlangberg.github.io/aiorreal/` |
| **Question editor / admin** (you only) | `https://shannonlangberg.github.io/aiorreal/admin.html` |

Admin passphrase: **`futures2026`**.

---

## ⭐ NEW — question formats

The game now supports much more than "AI or Real":

- **Multiple choice** with **2, 3 or 4 answer options** and your own labels (A/B/C/D).
- **Tap-the-quadrant** image rounds — the crowd taps which quarter of the photo has the glitch.
- **Audio rounds** — you play a clip on the big screen; the crowd votes on their phones.
- **⚡ Blitz** — a fast timer, worth **1.5× points**.
- **💀 Sudden Death** — dramatic red screen; a wrong answer greys out that player's phone for the round (they're back next round — nobody's kicked out). Also 1.5× points.

**12 questions are live** (7 more are benched in admin — flip their "live" toggle to swap).
Rounds run on a **15-second timer** and the screen **auto-reveals** when it hits zero, so the
pace never stalls (turn this off with the Auto-reveal button in the control bar if you'd
rather drive it yourself). Scoring is **validated on the server**, so nobody can cheat the
leaderboard — the winner is legit.

---

## 🖼️ MUST DO before the event — add your media

Several rounds are ready but need their photo/audio. Open **admin**, open each round, and
upload the file (it saves automatically). Rounds waiting for media:

- **Photos:** Midjourney cat, skyscrapers, tomato, tap-the-glitch crowd, blueprint,
  marathon (Sudden Death), 1920s family, headshots, watch face, mandala (Blitz).
- **Audio:** the "voice clone" round (round 7).

A couple of rounds (Midjourney prompt, "who coded it") have placeholder wrong-answers —
tweak those option texts to taste. And the **preacher round** is currently an AI-written
line; to add a *real* Ps Ashley / *Multiply or Die* quote, hit **＋ Add question** in admin,
paste the quote, set the answer to "A real preacher." (I couldn't source a verified quote —
the book only released today — so I didn't want to guess one.)

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

*(Tech: hosted on GitHub Pages; questions, scores + media in Supabase. Change the admin
passphrase or the Blitz timer any time — passphrase in config.js, timers per-round in admin.)*
