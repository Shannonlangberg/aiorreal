/* ==========================================================================
   FUTURES — AI OR REAL   |   shared config for player + big screen
   ========================================================================== */

const SUPABASE_URL = "https://xaqtwehdbhydebysrest.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhcXR3ZWhkYmh5ZGVieXNyZXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5ODAyODgsImV4cCI6MjA5OTU1NjI4OH0.Xwlm-EgJe0U2I0IAuRSAi-8eW1DPQ-3UfIzrpCeqV1s";

/* The link players open (also what the QR code encodes). */
const PLAYER_URL = "https://shannonlangberg.github.io/aiorreal/";

/* Seconds each question stays open before the host reveals.
   (The host can reveal early — this just drives the countdown + speed points.) */
const TIMER_SECONDS = 20;

/* Simple branded placeholder for image rounds (swap for real photos later). */
function ph(title, sub, c1, c2){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1280' height='860' viewBox='0 0 1280 860'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs>
    <rect width='1280' height='860' fill='url(#g)'/>
    <rect x='24' y='24' width='1232' height='812' rx='26' fill='none' stroke='rgba(255,255,255,.28)' stroke-width='3'/>
    <text x='640' y='300' font-family='Arial' font-size='120' text-anchor='middle'>🖼️</text>
    <text x='640' y='430' font-family='Arial' font-size='56' font-weight='bold' fill='#fff' text-anchor='middle'>${title}</text>
    <text x='640' y='510' font-family='Arial' font-size='30' fill='rgba(255,255,255,.85)' text-anchor='middle'>${sub}</text>
    <text x='640' y='790' font-family='Arial' font-size='26' fill='rgba(255,255,255,.7)' text-anchor='middle'>PLACEHOLDER — swap for a real photo</text>
  </svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

/* --------------------------------------------------------------------------
   THE ROUNDS
   type "story" -> a piece of TEXT the crowd judges (AI-written or a real human?)
   type "image" -> a PHOTO on screen (AI-generated or a real photo?)
   answer: "ai" or "real"
   -------------------------------------------------------------------------- */
const ROUNDS = [
  {
    n: 1, type: "story", difficulty: "Warm-up", label: "An inspirational quote",
    text: "Every sunrise is a quiet reminder that the universe believes in second chances — and so should you.",
    answer: "ai",
    reveal: "AI wrote this. That soft, mug-ready glow with zero real detail is AI's signature move. If it would fit on any greeting card, a robot probably wrote it."
  },
  {
    n: 2, type: "image", difficulty: "Easy", label: "Look closely…",
    img: ph("Round 2 · Obvious AI image", "Swap in an easy AI pic — dodgy hands, warped text.", "#5d1fec", "#26105e"),
    answer: "ai",
    reveal: "AI. The giveaway is almost always the hands — count the fingers, and look where the thumb joins. AI still fumbles hands."
  },
  {
    n: 3, type: "story", difficulty: "Easy", label: "A song lyric",
    text: "Amazing grace, how sweet the sound, that saved a wretch like me. I once was lost, but now am found; was blind, but now I see.",
    answer: "real",
    reveal: "REAL — written by John Newton in 1772, a former slave-ship captain whose life was turned around. 250 years before ChatGPT existed."
  },
  {
    n: 4, type: "image", difficulty: "Medium", label: "Real person, or generated?",
    img: ph("Round 4 · AI portrait", "A convincing AI face. Answer is set to AI.", "#c45236", "#5a2416"),
    answer: "ai",
    reveal: "AI portrait. Look for the tells: an earring that melts into the hair, skin that's a little too flawless, and a background that dissolves into mush."
  },
  {
    n: 5, type: "story", difficulty: "Medium", label: "A worship lyric",
    text: "I'm an ocean of surrender crashing on the shore of Your grace, and every wave that breaks in me is Heaven's fingerprint of space.",
    answer: "ai",
    reveal: "AI. It sounds worshipful, but 'Heaven's fingerprint of space' is beautiful-sounding word-salad that means nothing. AI pattern-matches the vibe without the meaning."
  },
  {
    n: 6, type: "image", difficulty: "Medium", label: "This one's a trap…",
    img: ph("Round 6 · The trap: a REAL photo", "A real photo that looks fake. Answer is set to REAL.", "#e444b9", "#5f1a4c"),
    answer: "real",
    reveal: "REAL photo! Gotcha. Sometimes reality looks more fake than fake — weird light, strange angles and lucky timing fool us into yelling 'AI!'"
  },
  {
    n: 7, type: "story", difficulty: "Hard", label: "A proverb",
    text: "As iron sharpens iron, so a patient heart outlasts the storms that pride could never weather.",
    answer: "ai",
    reveal: "AI — and it is NOT in the Bible. It borrows a real phrase (\"iron sharpens iron\", Proverbs 27:17) then invents the rest. A great reminder: always double-check AI when it quotes Scripture."
  },
  {
    n: 8, type: "story", difficulty: "Hard", label: "Another proverb",
    text: "Be still, and know that I am God.",
    answer: "real",
    reveal: "REAL — Psalm 46:10. Roughly 3,000 years old. No prompt required."
  },
  {
    n: 9, type: "image", difficulty: "Brutal", label: "Last image — trust your gut",
    img: ph("Round 9 · Brutal, near-perfect AI", "A super-convincing AI image. Answer is set to AI.", "#ff8432", "#7a3a10"),
    answer: "ai",
    reveal: "AI — and almost flawless. Look for the tiny tells: text that turns to gibberish, jewellery that doesn't connect, or shadows falling the wrong way. If this fooled you, you're in good company."
  },
  {
    n: 10, type: "story", difficulty: "Finale", label: "Final one — a famous line",
    text: "We know what we are, but know not what we may be.",
    answer: "real",
    reveal: "REAL — William Shakespeare, Hamlet. 400 years old and still hits harder than any chatbot. Give yourselves a hand, Dream Team! 👏"
  }
];

/* Scoring: correct answers earn a base plus a speed bonus. Wrong = 0. */
function scoreFor(isCorrect, msTaken) {
  if (!isCorrect) return 0;
  const total = TIMER_SECONDS * 1000;
  const remaining = Math.max(0, (total - (msTaken || 0)) / total);
  return 500 + Math.round(500 * remaining);
}
