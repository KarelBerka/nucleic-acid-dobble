// js/dobble.js — Universal Dobble Card Deck Generator
// Supports projective planes PG(2,q) for q = 2, 3, 4, 5, 7 (prime) and q = 8 (prime power 2³)
// For prime q: uses modular arithmetic (ℤ_q)
// For q=4: uses GF(4) = GF(2²) with precomputed addition/multiplication tables
// For q=8: uses GF(8) = GF(2³) with irreducible polynomial x³+x+1

// ─── GF(4) tables (q=4, existing, for amino-acid compatibility) ───────────────
const GF4_ADD = [
  [0, 1, 2, 3],
  [1, 0, 3, 2],
  [2, 3, 0, 1],
  [3, 2, 1, 0]
];
const GF4_MUL = [
  [0, 0, 0, 0],
  [0, 1, 2, 3],
  [0, 2, 3, 1],
  [0, 3, 1, 2]
];

function gf4_add(a, b) { return GF4_ADD[a][b]; }
function gf4_mul(a, b) { return GF4_MUL[a][b]; }
function gf4_dot(v1, v2) {
  return gf4_add(gf4_add(gf4_mul(v1[0], v2[0]), gf4_mul(v1[1], v2[1])), gf4_mul(v1[2], v2[2]));
}

// ─── GF(8) = GF(2³) with irreducible polynomial p(x) = x³+x+1 ────────────────
// Elements 0..7 represented as 3-bit vectors: bit2=x², bit1=x, bit0=1
// Addition = XOR (characteristic 2)
// Multiplication: polynomial multiplication modulo p(x), mod 2 coefficients
function gf8_add(a, b) { return a ^ b; }
function gf8_mul(a, b) {
  let result = 0;
  let aa = a;
  let bb = b;
  for (let i = 0; i < 3; i++) {
    if (bb & 1) result ^= aa;
    bb >>= 1;
    const highBit = aa & 4; // x² coefficient
    aa = (aa << 1) & 7;     // shift left, keep 3 bits
    if (highBit) aa ^= 3;   // reduce: x³ ≡ x+1, so XOR with 0b011
  }
  return result;
}
function gf8_dot(v1, v2) {
  return gf8_add(gf8_add(gf8_mul(v1[0], v2[0]), gf8_mul(v1[1], v2[1])), gf8_mul(v1[2], v2[2]));
}

// ─── PG(2,q) for prime q (q = 2, 3, 5, 7) using ℤ_q ─────────────────────────
function generatePG2_prime(q) {
  // Generate q²+q+1 points in homogeneous coordinates
  const points = [];
  for (let a = 0; a < q; a++) for (let b = 0; b < q; b++) points.push([1, a, b]);
  for (let a = 0; a < q; a++) points.push([0, 1, a]);
  points.push([0, 0, 1]);

  // Lines have same structure as points
  const lines = [];
  for (let a = 0; a < q; a++) for (let b = 0; b < q; b++) lines.push([1, a, b]);
  for (let a = 0; a < q; a++) lines.push([0, 1, a]);
  lines.push([0, 0, 1]);

  // Point P lies on line L iff dot(L, P) ≡ 0 (mod q)
  const cards = lines.map(line => {
    const cardPoints = [];
    points.forEach((pt, idx) => {
      const dot = (line[0]*pt[0] + line[1]*pt[1] + line[2]*pt[2]) % q;
      if (dot === 0) cardPoints.push(idx);
    });
    return cardPoints;
  });
  return cards;
}

// ─── PG(2,4) using GF(4) ─────────────────────────────────────────────────────
function generatePG2_4() {
  const points = [];
  for (let a = 0; a < 4; a++) for (let b = 0; b < 4; b++) points.push([1, a, b]);
  for (let a = 0; a < 4; a++) points.push([0, 1, a]);
  points.push([0, 0, 1]);

  const lines = [];
  for (let a = 0; a < 4; a++) for (let b = 0; b < 4; b++) lines.push([1, a, b]);
  for (let a = 0; a < 4; a++) lines.push([0, 1, a]);
  lines.push([0, 0, 1]);

  return lines.map(line => {
    const cardPoints = [];
    points.forEach((pt, idx) => {
      if (gf4_dot(line, pt) === 0) cardPoints.push(idx);
    });
    return cardPoints;
  });
}

// ─── PG(2,8) using GF(8) = GF(2³) ────────────────────────────────────────────
function generatePG2_8() {
  const points = [];
  for (let a = 0; a < 8; a++) for (let b = 0; b < 8; b++) points.push([1, a, b]);
  for (let a = 0; a < 8; a++) points.push([0, 1, a]);
  points.push([0, 0, 1]);

  const lines = [];
  for (let a = 0; a < 8; a++) for (let b = 0; b < 8; b++) lines.push([1, a, b]);
  for (let a = 0; a < 8; a++) lines.push([0, 1, a]);
  lines.push([0, 0, 1]);

  return lines.map(line => {
    const cardPoints = [];
    points.forEach((pt, idx) => {
      if (gf8_dot(line, pt) === 0) cardPoints.push(idx);
    });
    return cardPoints;
  });
}

// ─── Verification ─────────────────────────────────────────────────────────────
function verifyDeck(cards, q) {
  const n = q * q + q + 1;
  const k = q + 1;
  if (cards.length !== n) { console.error(`Expected ${n} cards, got ${cards.length}`); return false; }
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].length !== k) { console.error(`Card ${i} has ${cards[i].length} symbols, expected ${k}`); return false; }
    for (let j = i + 1; j < cards.length; j++) {
      const inter = cards[i].filter(x => cards[j].includes(x));
      if (inter.length !== 1) { console.error(`Cards ${i} & ${j} share ${inter.length} symbols`); return false; }
    }
  }
  return true;
}

// ─── Main deck generator ──────────────────────────────────────────────────────
/**
 * Generates a decorated Dobble deck.
 * @param {Array}   symbols              Array of molecule/symbol objects (length must equal q²+q+1)
 * @param {number}  q                    Order of the projective plane (2, 3, 4, 5, 7, or 8)
 * @param {boolean} guaranteeDifferentReps  If true, the shared symbol has different rep types on any two cards
 * @param {Array}   allowedReps          Which representation type IDs are enabled
 * @returns {Array} Array of card objects: { id, items: [{symbol, repType}] }
 */
function generateDobbleDeck(symbols, q = 4, guaranteeDifferentReps = true, allowedReps = null) {
  // Select raw card generator
  let rawCards;
  if (q === 4) {
    rawCards = generatePG2_4();
  } else if (q === 8) {
    rawCards = generatePG2_8();
  } else {
    rawCards = generatePG2_prime(q);
  }

  if (!verifyDeck(rawCards, q)) {
    console.warn(`Dobble verification failed for q=${q}. Proceeding anyway.`);
  }

  const n = rawCards.length; // q²+q+1
  const k = q + 1;           // symbols per card

  // Default allowed reps: 0..6
  if (!allowedReps || allowedReps.length === 0) {
    allowedReps = [0, 1, 2, 3, 4, 5, 6];
  }

  // For each symbol, find which cards it appears on (exactly k cards)
  const occurrences = Array.from({ length: n }, () => []);
  rawCards.forEach((cardPoints, cardIdx) => {
    cardPoints.forEach(symIdx => occurrences[symIdx].push(cardIdx));
  });

  // Assign representation types to each (symbol, card) pair
  const repMapping = Array.from({ length: n }, () => ({}));
  for (let symIdx = 0; symIdx < n; symIdx++) {
    const cardIndices = occurrences[symIdx]; // exactly k cards

    if (guaranteeDifferentReps) {
      let reps = [...allowedReps];
      while (reps.length < k) reps = reps.concat(reps);
      // Fisher-Yates shuffle
      for (let i = reps.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [reps[i], reps[j]] = [reps[j], reps[i]];
      }
      cardIndices.forEach((cardIdx, pos) => { repMapping[symIdx][cardIdx] = reps[pos]; });
    } else {
      cardIndices.forEach(cardIdx => {
        repMapping[symIdx][cardIdx] = allowedReps[Math.floor(Math.random() * allowedReps.length)];
      });
    }
  }

  // Build final deck
  const deck = rawCards.map((cardPoints, cardIdx) => {
    let items = cardPoints.map(symIdx => ({
      symbol: symbols[symIdx],
      repType: repMapping[symIdx][cardIdx]
    }));
    // Shuffle items on card
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return { id: cardIdx, items };
  });

  return deck;
}
