// js/game.js

/**
 * Interactive Training Game Controller for NucleicAcidDobble.
 */
class NADobbleGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    
    // Game state variables
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.timeLeft = 60; // 60 seconds time limit
    this.gameInterval = null;
    this.gameState = "start"; // start, playing, gameover
    
    // Cards state
    this.currentCardA = null;
    this.currentCardB = null;
    this.sharedNAId = null;
    this.deck = [];
    
    // High Score tracking
    this.highScore = parseInt(localStorage.getItem("na_dobble_highscore") || "0");
    
    // Audio Context (initialized on first interaction)
    this.audioCtx = null;
  }

  /**
   * Initializes the game by rendering the start screen.
   */
  init() {
    this.renderStartScreen();
  }

  /**
   * Safe Web Audio API sound generator.
   */
  playSound(type) {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      const now = this.audioCtx.currentTime;

      if (type === "correct") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === "incorrect") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(80, now + 0.3);
        
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === "gameover") {
        osc.type = "triangle";
        const freqs = [349.23, 261.63, 220.00, 174.61]; // F4, C4, A3, F3
        freqs.forEach((freq, idx) => {
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        });
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.65);
      }
    } catch (e) {
      console.warn("Web Audio API blocked or not supported:", e);
    }
  }

  /**
   * Helper to retrieve localized strings.
   */
  t(key) {
    const lang = window.currentLang || "cs";
    const dict = {
      cs: {
        title: "Tréninkový trenažér NA-Dobble",
        rules: "Procvičte si poznávání složek nukleových kyselin (báze, cukry, nukleosidy, nukleotidy). Na obrazovce uvidíte dvě karty. Najděte společný symbol a klikněte na něj na libovolné z karet!",
        subRules: "<strong>Pravidla:</strong> Za správnou shodu získáváte body a prodlužujete si herní čas (+3s). Za chybu čas ztrácíte (-5s) a přeruší se vám kombo série.",
        record: "Aktuální osobní rekord:",
        points: "bodů",
        startBtn: "Spustit trénink",
        scoreLabel: "Skóre",
        streakLabel: "Série (Kombo)",
        timeLabel: "Zbývající čas",
        gameOver: "Konec hry!",
        newRecord: "🎉 NOVÝ OSOBNÍ REKORD! 🎉",
        scoreResult: "Dosáhli jste celkového skóre:",
        streakResult: "Nejdelší řada bez chyby:",
        correctInRow: "správně v řadě",
        personalBest: "Osobní rekord:",
        restartBtn: "Hrát znovu"
      },
      en: {
        title: "NA-Dobble Training Center",
        rules: "Practice identifying components of nucleic acids (bases, sugars, nucleosides, nucleotides). You will see two cards. Find the matching symbol and click on it on either card!",
        subRules: "<strong>Rules:</strong> Correct matches award points and extra time (+3s). Mistakes deduct time (-5s) and break your active combo streak.",
        record: "Personal Best:",
        points: "points",
        startBtn: "Start Training",
        scoreLabel: "Score",
        streakLabel: "Streak (Combo)",
        timeLabel: "Time Left",
        gameOver: "Game Over!",
        newRecord: "🎉 NEW PERSONAL RECORD! 🎉",
        scoreResult: "You achieved a total score of:",
        streakResult: "Longest error-free streak:",
        correctInRow: "correct in a row",
        personalBest: "Personal best:",
        restartBtn: "Play Again"
      },
      de: {
        title: "NA-Dobble Trainingszentrum",
        rules: "Üben Sie die Erkennung von Nukleinsäure-Bausteinen (Basen, Zucker, Nukleoside, Nukleotide). Sie sehen zwei Karten. Finden Sie das gemeinsame Symbol und klicken Sie darauf!",
        subRules: "<strong>Regeln:</strong> Richtige Treffer geben Punkte und verlängern die Zeit (+3s). Fehler kosten Zeit (-5s) und brechen die Kombo-Serie ab.",
        record: "Persönlicher Rekord:",
        points: "Punkte",
        startBtn: "Training starten",
        scoreLabel: "Punkte",
        streakLabel: "Serie (Kombo)",
        timeLabel: "Verbleibende Zeit",
        gameOver: "Spiel vorbei!",
        newRecord: "🎉 NEUER PERSÖNLICHER REKORD! 🎉",
        scoreResult: "Sie haben folgende Gesamtpunktzahl erreicht:",
        streakResult: "Längste fehlerfreie Serie:",
        correctInRow: "richtig in Folge",
        personalBest: "Persönlicher Rekord:",
        restartBtn: "Nochmals spielen"
      },
      fr: {
        title: "Centre d'entraînement NA-Dobble",
        rules: "Entraînez-vous à identifier les composants des acides nucléiques (bases, sucres, nucléosides, nucléotides). Vous verrez deux cartes. Trouvez le symbole commun et cliquez dessus !",
        subRules: "<strong>Règles :</strong> Les bonnes réponses rapportent des points et prolongent le temps (+3s). Les erreurs font perdre du temps (-5s) et brisent le combo.",
        record: "Meilleur score personnel :",
        points: "points",
        startBtn: "Commencer l'entraînement",
        scoreLabel: "Score",
        streakLabel: "Série (Combo)",
        timeLabel: "Temps restant",
        gameOver: "Fin du jeu !",
        newRecord: "🎉 NOUVEAU RECORD PERSONNEL ! 🎉",
        scoreResult: "Vous avez obtenu un score total de :",
        streakResult: "Série sans erreur la plus longue :",
        correctInRow: "bonnes réponses consécutives",
        personalBest: "Meilleur score :",
        restartBtn: "Rejouer"
      }
    };
    return (dict[lang] || dict["en"])[key];
  }

  /**
   * Renders the initial start screen layout.
   */
  renderStartScreen() {
    this.gameState = "start";
    this.highScore = parseInt(localStorage.getItem("na_dobble_highscore") || "0");
    
    this.container.innerHTML = `
      <div class="game-start-screen">
        <div style="font-size: 4rem; margin-bottom: 0.5rem;">🧬</div>
        <h2>${this.t("title")}</h2>
        <p>${this.t("rules")}</p>
        <p>${this.t("subRules")}</p>
        
        <div style="margin: 1rem 0; font-size: 0.95rem;">
          <strong>${this.t("record")}</strong> <span style="color: var(--primary); font-weight: 800;">${this.highScore} ${this.t("points")}</span>
        </div>

        <button class="btn btn-primary" id="btn-start-game">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          ${this.t("startBtn")}
        </button>
      </div>
    `;

    document.getElementById("btn-start-game").addEventListener("click", () => {
      this.startGame();
    });
  }

  /**
   * Begins the game loop, reset stats and timer.
   */
  startGame() {
    this.gameState = "playing";
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.timeLeft = 60;
    
    // Determine active symbols according to version mode (Mini q=2 vs Full q=4)
    const isMini = window.currentVersionMode === "mini";
    const activeQ = isMini ? 2 : 4;
    const activeSymbols = isMini ? NUCLEIC_ACIDS.slice(0, 7) : NUCLEIC_ACIDS;
    
    const settingsGuaranteeDiff = document.getElementById("set-guarantee-diff-reps") ? document.getElementById("set-guarantee-diff-reps").checked : true;
    this.deck = generateDobbleDeck(activeSymbols, activeQ, settingsGuaranteeDiff, [0, 1, 2, 3, 4, 5]);
    
    // Draw playing UI
    this.container.innerHTML = `
      <div class="game-header">
        <div class="stat-box">
          <span class="stat-label">${this.t("scoreLabel")}</span>
          <span class="stat-value" id="game-score">0</span>
        </div>
        <div class="stat-box">
          <span class="stat-label">${this.t("streakLabel")}</span>
          <span class="stat-value" id="game-streak" style="color: var(--accent);">0</span>
        </div>
        <div class="stat-box">
          <span class="stat-label">${this.t("timeLabel")}</span>
          <span class="stat-value" id="game-timer" style="color: var(--danger);">60s</span>
        </div>
      </div>
      
      <div class="game-arena" id="game-arena">
        <!-- Cards will be rendered here -->
      </div>
      
      <div class="progress-bar-wrapper">
        <div class="progress-bar-fill" id="game-progress" style="transform: scaleX(1);"></div>
      </div>
    `;
    
    this.nextRound();
    
    // Start game countdown timer
    if (this.gameInterval) clearInterval(this.gameInterval);
    this.gameInterval = setInterval(() => {
      this.timeLeft -= 0.1;
      
      const timerVal = Math.max(0, Math.ceil(this.timeLeft));
      const timerEl = document.getElementById("game-timer");
      if (timerEl) timerEl.textContent = `${timerVal}s`;
      
      const progressFill = document.getElementById("game-progress");
      if (progressFill) {
        progressFill.style.transform = `scaleX(${Math.max(0, this.timeLeft / 60)})`;
      }
      
      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 100);
  }

  /**
   * Loads two random cards from the deck for the next round.
   */
  nextRound() {
    if (this.gameState !== "playing") return;

    // Pick two random distinct cards
    const idxA = Math.floor(Math.random() * this.deck.length);
    let idxB = Math.floor(Math.random() * this.deck.length);
    while (idxA === idxB) {
      idxB = Math.floor(Math.random() * this.deck.length);
    }
    
    this.currentCardA = this.deck[idxA];
    this.currentCardB = this.deck[idxB];
    
    // Determine the shared item
    const idsA = this.currentCardA.items.map(item => item.symbol.id);
    const idsB = this.currentCardB.items.map(item => item.symbol.id);
    const intersection = idsA.filter(id => idsB.includes(id));
    this.sharedNAId = intersection[0];
    
    // Render the arena cards
    const arena = document.getElementById("game-arena");
    if (!arena) return;
    
    arena.innerHTML = `
      <div class="game-card-wrapper" id="card-wrapper-a">
        ${this.buildCardHTML(this.currentCardA)}
      </div>
      <div class="game-card-wrapper" id="card-wrapper-b">
        ${this.buildCardHTML(this.currentCardB)}
      </div>
    `;
    
    // Add event listeners to card items
    arena.querySelectorAll(".card-item").forEach(itemElement => {
      itemElement.addEventListener("click", (e) => {
        const naId = parseInt(itemElement.getAttribute("data-na-id"));
        this.handleItemSelection(naId, e);
      });
    });
  }

  /**
   * Helper to build HTML string of a single Dobble card.
   */
  buildCardHTML(cardData) {
    const shapeElem = document.getElementById("set-card-shape");
    const isSquare = shapeElem ? shapeElem.value === "square" : true;
    const rotateElem = document.getElementById("set-random-rotation");
    const rotateEnabled = rotateElem ? rotateElem.checked === true : false;
    const lang = window.currentLang || "cs";
    
    let itemsHTML = "";
    
    // Position grids for 3 items (q=2) vs 5 items (q=4)
    const count = cardData.items.length;
    let positions;
    if (count === 3) {
      positions = [
        { x: 50, y: 28 },  // Top
        { x: 28, y: 70 },  // Bottom-Left
        { x: 72, y: 70 }   // Bottom-Right
      ];
    } else {
      positions = [
        { x: 50, y: 50 },  // Center
        { x: 27, y: 27 },  // Top-Left
        { x: 73, y: 27 },  // Top-Right
        { x: 27, y: 73 },  // Bottom-Left
        { x: 73, y: 73 }   // Bottom-Right
      ];
    }
    
    cardData.items.forEach((item, idx) => {
      const pos = positions[idx] || { x: 50, y: 50 };
      const na = item.symbol;
      const rep = item.repType;
      
      const rotation = rotateEnabled ? Math.floor(Math.random() * 360) : 0;
      const scale = count === 3 ? (1.0 + Math.random() * 0.2) : (0.85 + Math.random() * 0.2);
      
      let content = "";
      let classes = "card-item";
      
      if (rep === 0) {
        // Localized name
        content = `<span class="item-text">${getNAName(na, lang)}</span>`;
      } else if (rep === 1) {
        // Formula / Condensed
        const formattedFormula = na.condensed ? na.condensed.replace(/(\d+)/g, "<sub>$1</sub>") : na.formula;
        content = `<span class="item-condensed">${formattedFormula}</span>`;
      } else if (rep === 2) {
        // 3-letter / short code
        content = `<span class="item-code3">${na.code3}</span>`;
      } else if (rep === 3) {
        // 1-letter code
        content = `<span class="item-code1">${na.code1}</span>`;
      } else if (rep === 4) {
        // 2D Chemical Structure (SVG)
        classes += " item-structure";
        content = renderStructureToSVG(na.structure, "100%", "100%");
      } else if (rep === 5) {
        // 3D Model (PyMOL)
        classes += " item-structure";
        const cleanCode = na.code3.toLowerCase().replace("ψ", "pseudou");
        content = `<img src="assets/structures/${cleanCode}.png" onerror="this.style.display='none'">`;
      } else {
        // SMILES
        content = `<span class="item-smiles" style="font-size:0.55rem;word-break:break-all;line-height:1.1;display:block;max-width:65px;">${na.smiles}</span>`;
      }
      
      itemsHTML += `
        <div class="${classes}" 
             data-na-id="${na.id}" 
             style="--x: ${pos.x}%; --y: ${pos.y}%; --scale: ${scale}; --rot: ${rotation}deg;">
          ${content}
        </div>
      `;
    });
    
    return `
      <div class="dobble-card ${isSquare ? 'square' : ''}">
        ${itemsHTML}
      </div>
    `;
  }

  /**
   * Action handler when player clicks on a symbol.
   */
  handleItemSelection(clickedNaId, event) {
    if (this.gameState !== "playing") return;
    
    const correct = (clickedNaId === this.sharedNAId);
    
    if (correct) {
      this.playSound("correct");
      this.createParticles(event.clientX, event.clientY);
      
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
      
      const pointsEarned = 10 + Math.floor(this.streak / 3) * 5;
      this.score += pointsEarned;
      
      this.timeLeft = Math.min(90, this.timeLeft + 3);
      
      const wrappers = document.querySelectorAll(".game-card-wrapper");
      wrappers.forEach(w => {
        const card = w.querySelector(".dobble-card");
        if (card) card.classList.add("correct-flash");
      });
      
      const scoreEl = document.getElementById("game-score");
      const streakEl = document.getElementById("game-streak");
      if (scoreEl) scoreEl.textContent = this.score;
      if (streakEl) streakEl.textContent = this.streak;
      
      setTimeout(() => {
        this.nextRound();
      }, 350);
    } else {
      this.playSound("incorrect");
      this.timeLeft = Math.max(0, this.timeLeft - 5);
      this.streak = 0;
      
      const streakEl = document.getElementById("game-streak");
      if (streakEl) streakEl.textContent = this.streak;
      
      const wrappers = document.querySelectorAll(".game-card-wrapper");
      wrappers.forEach(w => {
        const card = w.querySelector(".dobble-card");
        if (card) {
          card.classList.add("shake-animation");
          setTimeout(() => {
            card.classList.remove("shake-animation");
          }, 400);
        }
      });
    }
  }

  /**
   * Visual particle explosion.
   */
  createParticles(x, y) {
    const particleCount = 20;
    const colors = ["#0284c7", "#06b6d4", "#3b82f6", "#10b981", "#fbbf24"];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "match-particle";
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 50 + Math.random() * 80;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      const size = 5 + Math.random() * 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = `${x - size/2}px`;
      particle.style.top = `${y - size/2}px`;
      particle.style.position = "fixed";
      particle.style.zIndex = "9999";
      
      particle.style.setProperty("--tx", `${tx}px`);
      particle.style.setProperty("--ty", `${ty}px`);
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 600);
    }
  }

  /**
   * Concludes the game, updates highscores.
   */
  endGame() {
    this.gameState = "gameover";
    if (this.gameInterval) clearInterval(this.gameInterval);
    
    this.playSound("gameover");
    
    let newRecord = false;
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem("na_dobble_highscore", this.highScore);
      newRecord = true;
    }
    
    this.container.innerHTML = `
      <div class="game-over-screen">
        <div style="font-size: 4rem; margin-bottom: 0.5rem;">🏆</div>
        <h2>${this.t("gameOver")}</h2>
        
        ${newRecord ? `<div class="high-score-announcement">${this.t("newRecord")}</div>` : ""}
        
        <div style="margin: 1.5rem 0; text-align: left; display: flex; flex-direction: column; gap: 0.75rem;">
          <p>${this.t("scoreResult")} <strong style="color: var(--primary); font-size: 1.3rem;">${this.score} ${this.t("points")}</strong></p>
          <p>${this.t("streakResult")} <strong style="color: var(--accent); font-size: 1.2rem;">${this.maxStreak} ${this.t("correctInRow")}</strong></p>
          <p>${this.t("personalBest")} <strong>${this.highScore} ${this.t("points")}</strong></p>
        </div>

        <button class="btn btn-primary" id="btn-restart-game">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>
          ${this.t("restartBtn")}
        </button>
      </div>
    `;
    
    document.getElementById("btn-restart-game").addEventListener("click", () => {
      this.startGame();
    });
  }

  /**
   * Updates the game interface when language or mode changes.
   */
  updateLang() {
    if (this.gameState === "playing") {
      const wrapperA = document.getElementById("card-wrapper-a");
      const wrapperB = document.getElementById("card-wrapper-b");
      if (wrapperA && wrapperB) {
        wrapperA.innerHTML = this.buildCardHTML(this.currentCardA);
        wrapperB.innerHTML = this.buildCardHTML(this.currentCardB);
        
        const arena = document.getElementById("game-arena");
        if (arena) {
          arena.querySelectorAll(".card-item").forEach(itemElement => {
            itemElement.addEventListener("click", (e) => {
              const naId = parseInt(itemElement.getAttribute("data-na-id"));
              this.handleItemSelection(naId, e);
            });
          });
        }
      }
    } else if (this.gameState === "start") {
      this.renderStartScreen();
    } else if (this.gameState === "gameover") {
      this.endGame();
    }
  }
}

// Global mapping
window.NADobbleGame = NADobbleGame;
