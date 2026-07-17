/* ==========================================================================
   FUTURES — AI OR REAL   |   shared config (player + big screen + admin)
   Multi-format engine: 2–4 option multiple choice, tap-the-quadrant,
   audio & image media, Blitz + Sudden Death modes.
   ========================================================================== */

const SUPABASE_URL = "https://xaqtwehdbhydebysrest.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhcXR3ZWhkYmh5ZGVieXNyZXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5ODAyODgsImV4cCI6MjA5OTU1NjI4OH0.Xwlm-EgJe0U2I0IAuRSAi-8eW1DPQ-3UfIzrpCeqV1s";

const PLAYER_URL = "https://shannonlangberg.github.io/aiorreal/";
const ADMIN_PIN  = "futures2026";

const TIMER_SECONDS = 15;   // default question length; rounds can override (server scoring matches)

/* Branded placeholder for image rounds with no photo uploaded yet. */
function ph(title, sub){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1280' height='860' viewBox='0 0 1280 860'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#5d1fec'/><stop offset='1' stop-color='#26105e'/></linearGradient></defs>
    <rect width='1280' height='860' fill='url(#g)'/>
    <rect x='24' y='24' width='1232' height='812' rx='26' fill='none' stroke='rgba(255,255,255,.28)' stroke-width='3'/>
    <text x='640' y='430' font-family='Arial' font-size='58' font-weight='bold' fill='#fff' text-anchor='middle'>${title}</text>
    <text x='640' y='505' font-family='Arial' font-size='30' fill='rgba(255,255,255,.85)' text-anchor='middle'>${sub}</text>
    <text x='640' y='795' font-family='Arial' font-size='26' fill='rgba(255,255,255,.7)' text-anchor='middle'>Upload a photo in the admin page</text>
  </svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

/* --------------------------------------------------------------------------
   ROUND SHAPE
   { label, difficulty, prompt, content,
     media_type:'none'|'image'|'audio', media_url,
     interaction:'choice'|'tapgrid',
     options:[strings], answer_index:int,
     reveal, timer_seconds:int|null, mode:'normal'|'blitz'|'sudden_death' }
   tapgrid ignores `options` (quadrants Top-Left/Top-Right/Bottom-Left/Bottom-Right,
   answer_index 0..3).
   -------------------------------------------------------------------------- */
const STARTER_ROUNDS = [
  { label:"Corporate apology", difficulty:"Warm-up",
    prompt:"Did a human PR exec write this apology, or an AI chatbot?",
    content:"We look forward to optimizing our forward-facing structural integrity to better synergize with your emotional paradigms regarding this flight delay.",
    media_type:"none", interaction:"choice",
    options:["A real human","An AI chatbot"], answer_index:0,
    reveal:"Real! A stressed human actually wrote this — that corporate word-salad is painfully human." },

  { label:"Midjourney prompt", difficulty:"Easy",
    prompt:"Which prompt generated this cybernetic tuxedo cat?",
    media_type:"image", interaction:"choice",
    options:["Robot cat in a suit, studio photo","Steampunk feline butler, cinematic lighting, 8k","Cute kitten in a bowtie, cartoon","Cyberpunk cat CEO, neon, ultrarealistic"],
    answer_index:1,
    reveal:"Prompt B — 'steampunk feline butler.' The tux and cinematic lighting are the giveaway." },

  { label:"Spot the fake", difficulty:"Medium",
    prompt:"One of these skyscrapers is fake — spot the missing reflection.",
    media_type:"image", interaction:"choice",
    options:["Building A","Building B","Building C","Building D"], answer_index:2,
    reveal:"Building C — its glass has no reflection where the others do." },

  { label:"Honest Abe?", difficulty:"Medium",
    prompt:"Did Abraham Lincoln write this in an 1862 letter, or an AI?",
    content:"A house divided against itself cannot stand, but a horse divided against itself is simply a tragedy of agriculture.",
    media_type:"none", interaction:"choice",
    options:["Abraham Lincoln","An AI"], answer_index:1,
    reveal:"AI. Lincoln wrote the first half — the 'horse… tragedy of agriculture' is pure AI nonsense." },

  { label:"Macro shot", difficulty:"Medium",
    prompt:"A real macro photo of a tomato, or AI-generated?",
    media_type:"image", interaction:"choice",
    options:["A real photo","AI-generated"], answer_index:1,
    reveal:"AI — the skin sheen and seed pattern are a little too perfect." },

  { label:"Tap the glitch", difficulty:"Hard",
    prompt:"AI broke this crowd photo. Tap the quadrant with the 11-fingered hand.",
    media_type:"image", interaction:"tapgrid", options:[], answer_index:3,
    reveal:"Bottom-right — count the fingers. Eleven. AI still can't do hands." },

  { label:"Real or clone", difficulty:"Hard",
    prompt:"Real recording, or an AI voice clone? (a world leader 'admits' they eat raw onions)",
    media_type:"audio", interaction:"choice",
    options:["A real recording","An AI voice clone"], answer_index:1,
    reveal:"AI clone — the voice is smooth, but the breaths land in all the wrong places." },

  { label:"Blueprint", difficulty:"Hard",
    prompt:"A real smartphone schematic, or 100% AI? Read the labels.",
    media_type:"image", interaction:"choice",
    options:["A real schematic","100% AI"], answer_index:1,
    reveal:"100% AI — those component labels are confident gibberish that means nothing." },

  { label:"Retro recipe", difficulty:"Medium",
    prompt:"A real 1970s experimental recipe, or an AI hallucination?",
    content:"Step 4: Whisk egg whites until stiff peaks form.\nStep 5: Gently fold in two cups of industrial gravel to add texture.",
    media_type:"none", interaction:"choice",
    options:["A real cookbook","An AI hallucination"], answer_index:1,
    reveal:"AI. Please do not fold industrial gravel into your soufflé." },

  { label:"Sudden Death", difficulty:"Brutal",
    prompt:"SUDDEN DEATH — real marathon photo, or AI? Get it wrong and you're wiped for the round.",
    media_type:"image", interaction:"choice", mode:"sudden_death",
    options:["Real","AI-generated"], answer_index:1,
    reveal:"AI — watch the runners' legs and bib numbers melt together." },

  { label:"Vintage?", difficulty:"Hard",
    prompt:"A 1920s family photo — real history, or AI?",
    media_type:"image", interaction:"choice",
    options:["Real history","AI-generated"], answer_index:1,
    reveal:"AI — the 'aged grain' is faked and the faces subtly warp." },

  { label:"Who coded it", difficulty:"Hard",
    prompt:"Who wrote this Python 'matrix rain' code?",
    content:"import random\nchars = '01'\nwhile True:\n    line = ''.join(random.choice(chars) for _ in range(80))\n    print(line)",
    media_type:"none", interaction:"choice",
    options:["A human developer","Claude 3.5 Sonnet","GPT-4","A first-year student"], answer_index:1,
    reveal:"Claude 3.5 Sonnet — clean, commented, and it actually runs." },

  { label:"Imposter headshot", difficulty:"Hard",
    prompt:"One headshot is an AI imposter — spot the mismatched earrings.",
    media_type:"image", interaction:"choice",
    options:["Photo A","Photo B","Photo C","Photo D"], answer_index:0,
    reveal:"Photo A — the earrings don't match and one ear sits a little wrong." },

  { label:"Fine detail", difficulty:"Hard",
    prompt:"Razor-sharp engraving on this watch face — a real photo, or AI?",
    media_type:"image", interaction:"choice",
    options:["A real photo","AI-generated"], answer_index:0,
    reveal:"Real! That engraving is genuine craft — sharper than AI usually manages." },

  { label:"Ultra-Blitz", difficulty:"Blitz",
    prompt:"ULTRA-BLITZ — mandala art: human or AI? Quick!",
    media_type:"image", interaction:"choice", mode:"blitz", timer_seconds:6,
    options:["A human made it","AI-generated"], answer_index:1,
    reveal:"AI — flawless symmetry is the tell; hand-drawn mandalas always wobble a little." },

  /* ---- Futures / church rounds ---- */
  { label:"Worship lyric", difficulty:"Medium",
    prompt:"A worship lyric — written by a real songwriter, or by AI?",
    content:"I'm an ocean of surrender crashing on the shore of Your grace, and every wave that breaks in me is Heaven's fingerprint of space.",
    media_type:"none", interaction:"choice",
    options:["A real worship songwriter","AI-generated"], answer_index:1,
    reveal:"AI — gorgeous-sounding, but 'Heaven's fingerprint of space' means nothing. Pure word-salad." },

  { label:"Straight from Scripture", difficulty:"Medium",
    prompt:"Straight from the Bible, or AI trying to sound holy?",
    content:"Be still, and know that I am God.",
    media_type:"none", interaction:"choice",
    options:["Straight from the Bible","AI-generated"], answer_index:0,
    reveal:"Real — Psalm 46:10, about 3,000 years old. No prompt required." },

  { label:"Fake verse", difficulty:"Hard",
    prompt:"Is this an actual Bible verse, or AI faking Scripture?",
    content:"As iron sharpens iron, so a patient heart outlasts the storms that pride could never weather.",
    media_type:"none", interaction:"choice",
    options:["A real Bible verse","AI faking Scripture"], answer_index:1,
    reveal:"AI — and NOT in the Bible. It borrows a real phrase ('iron sharpens iron', Proverbs 27:17) then invents the rest. Always check AI on Scripture!" },

  { label:"Preacher or bot", difficulty:"Hard",
    prompt:"Did a preacher say this, or is it AI?",
    content:"Your setback is just the runway for the comeback God already scheduled.",
    media_type:"none", interaction:"choice",
    options:["A real preacher","AI-generated"], answer_index:1,
    reveal:"AI — it copies the rhythm of a sermon, but a chatbot wrote it. (Add a real Ps Ashley / 'Multiply or Die' quote in the admin for the real deal!)" }
];

/* Live rounds — starts as the built-in set; loadRounds() swaps in the
   admin-edited questions from Supabase if any exist. */
let ROUNDS = STARTER_ROUNDS.map((r,i)=>normalizeRound(r,i));

function normalizeRound(r,i){
  return {
    n: i+1,
    label: r.label||"", difficulty: r.difficulty||"",
    prompt: r.prompt||"", content: r.content||"",
    media_type: r.media_type||"none", media_url: r.media_url||"",
    reveal_media_url: r.reveal_media_url||"",
    interaction: r.interaction||"choice",
    options: Array.isArray(r.options) ? r.options : (r.options ? JSON.parse(r.options) : []),
    option_images: Array.isArray(r.option_images) ? r.option_images : (r.option_images ? JSON.parse(r.option_images) : []),
    answer_index: (r.answer_index==null?0:r.answer_index),
    reveal: r.reveal||"",
    timer_seconds: r.timer_seconds||null,
    mode: r.mode||"normal"
  };
}

async function loadRounds(){
  try{
    const rows = await fetch(
      SUPABASE_URL + "/rest/v1/air_rounds?active=eq.true&order=ord.asc&select=*",
      { headers: { apikey: SUPABASE_KEY, Authorization: "Bearer " + SUPABASE_KEY }, cache: "no-store" }
    ).then(r => r.ok ? r.json() : []);
    if (Array.isArray(rows) && rows.length){
      ROUNDS = rows.map((r,i)=>normalizeRound(r,i));
    }
  }catch(e){ /* keep the built-in starter set */ }
  return ROUNDS;
}

/* Resolve the image src for a round (placeholder if it's an image round with no photo). */
function roundImage(r){
  if(r.media_type==="image") return r.media_url || ph("Round " + r.n, r.label || "Image round");
  return "";
}
function roundTimer(r){ return r.timer_seconds || TIMER_SECONDS; }

/* Scoring: correct = base + speed bonus; Blitz / Sudden Death pay 1.5×. */
function scoreFor(isCorrect, msTaken, timerSeconds, mode){
  if(!isCorrect) return 0;
  const total = (timerSeconds || TIMER_SECONDS) * 1000;
  const remaining = Math.max(0, (total - (msTaken || 0)) / total);
  let pts = 500 + Math.round(500 * remaining);
  if(mode==="blitz" || mode==="sudden_death") pts = Math.round(pts * 1.5);
  return pts;
}
