# 🎬 AI or Real — Run of Show (Futures Dream Team)

A live, phone-based crowd game, fully in the Futures brand. The big screen shows a
photo or a quote; the crowd votes **AI** or **REAL** on their phones; points for being
right *and* fast; a live leaderboard crowns a winner. Built for ~500 players.

---

## 🔗 The three links

| Who | Link |
|-----|------|
| **Big screen** (your presenting laptop) | `https://shannonlangberg.github.io/aiorreal/screen.html` |
| **Players' phones** (this is the QR on screen) | `https://shannonlangberg.github.io/aiorreal/` |
| **Question editor / admin** (you only) | `https://shannonlangberg.github.io/aiorreal/admin.html` |

Players never type a link — they scan the QR on the big screen.
The admin page passphrase is **`futures2026`**.

---

## ✍️ Editing questions (the admin page)

Open the **admin link**, enter the passphrase, and you'll see every question. The 10
starter questions are already loaded. For each one you can set:

- **Type** — Text (a quote/story) or Image (a photo)
- **Answer** — AI or REAL
- **Label** (shown on screen, e.g. "An inspirational quote"), and difficulty
- **The text** (for text rounds) or **a photo** (for image rounds — click *Choose file*, it
  uploads and saves automatically)
- **Reveal** — the fun fact shown after the answer

You can **＋ Add question**, **↑ ↓ reorder**, toggle **live** on/off, and **Delete**.
Hit **Save** on a card to store changes. Everything saves to your game in the cloud.

> The four image rounds are ready to receive real photos — just open each image round,
> upload a picture, and Save. **Refresh the big screen after editing** so it picks up changes.

Good image picks: an obvious AI fail (weird hands) for an easy one, a convincing AI face,
a *real* photo that looks fake (a fun "gotcha"), and a jaw-dropping near-perfect AI shot.

---

## ✅ Before the service (5-min setup)

1. On the presenting laptop, open the **big-screen link** and press **F11** for full-screen.
2. You'll see the branded **AI or Real?** lobby with the QR code and a live player counter.
3. Test on your own phone: scan the QR, enter a name, press **Start**, vote, then **Reveal**.
4. Press **Reset** (twice) on the control bar to clear your test → back to 0 players.
5. Keep the laptop on **stable wifi/ethernet**; phones can be on anything.

---

## 🎮 Running it live — the control bar

One primary button (or the **spacebar**) drives everything; its label tells you what's next.

| You're in… | Press | What happens |
|------------|-------|--------------|
| Lobby | **Start ▶** | Opens Round 1 — photo/quote appears, timer counts down |
| A question | **Reveal ▶** | Shows the answer + how the crowd split |
| A reveal | **Next round ▶** | Moves to the next question |
| After the last round | **Show leaderboard ▶** | Top 10 |
| Leaderboard | **Crown winner ▶** | Confetti + winner |

**Keyboard:** **→ / Space** = next · **←** = back a step (undo a misclick) · **R** = reveal ·
**L** = leaderboard · **H** = hide the control bar for a clean screen.

Other buttons: **◀** steps back one stage, **✎ Questions** opens the editor, **Reset**
(tap twice) clears everyone back to the lobby.

**Rhythm per round:** show the quote/photo, let the timer run ~15–20s while you banter
("lock it in!"), hit **Reveal**, read the punchy fact, then **Next**. ~10–14 min total.

---

## 🗝️ Answer key (starter questions)

The screen shows these automatically; here they are for your prep. Answers mix on purpose.

1. "Every sunrise…" → **AI** · 2. [image] → **AI** (hands) · 3. "Amazing grace…" → **REAL**
(John Newton, 1772) · 4. [image] → **AI** portrait · 5. "I'm an ocean of surrender…" → **AI**
· 6. [image, the trap] → **REAL** · 7. "As iron sharpens iron…" → **AI** (fake Scripture!) ·
8. "Be still, and know…" → **REAL** (Psalm 46:10) · 9. [image] → **AI** (near-perfect) ·
10. "We know what we are…" → **REAL** (Shakespeare).

---

## 🧯 If something goes sideways

- **A phone looks stuck?** Refresh the page — their score is saved, they rejoin where the game is.
- **Screen out of sync?** Refresh the big-screen page; it reconnects to the live state.
- **Advanced too far?** Press **←** to step back.
- **Whole thing acting up?** **Reset** (twice) returns everyone to the lobby.
- **Wifi swamped?** The game retries automatically; encourage phones onto mobile data.
- **Total fallback:** play it old-school — show each screen, crowd shouts AI or Real, use the key above.

---

## 🔁 Between two services

Press **Reset** (twice) before the second service — clears players and scores, same links,
same questions. Have a blast up there. 💜

*(Tech notes: hosted on GitHub Pages, data + photos in Supabase. To change the admin
passphrase, edit `ADMIN_PIN` in config.js.)*
