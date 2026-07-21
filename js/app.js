// js/app.js — NucleicAcidDobble Application Logic

// ─── Global State & Language Management ─────────────────────────────────────
const _VALID_LANGS = ["cs", "en", "de", "fr"];
const _urlLang = new URLSearchParams(window.location.search).get("lang");
const _storedLang = localStorage.getItem("na_dobble_lang");
const _resolvedLang = _VALID_LANGS.includes(_urlLang) ? _urlLang : (_VALID_LANGS.includes(_storedLang) ? _storedLang : "cs");

if (_urlLang && _resolvedLang) {
  localStorage.setItem("na_dobble_lang", _resolvedLang);
  const cleanUrl = window.location.pathname;
  window.history.replaceState({}, "", cleanUrl);
}
window.currentLang = _resolvedLang;

// Active Version Mode: "mini" (q=2, 7 symbols, 7 cards) or "full" (q=4, 21 symbols, 21 cards)
window.currentVersionMode = localStorage.getItem("na_dobble_version") || "full";

// Translation dictionary for DOM elements
const TRANSLATIONS = {
  cs: {
    tab_home: "Úvod",
    tab_encyclopedia: "Encyklopedie",
    tab_game: "Tréninková Hra",
    tab_generator: "Generátor Karet",
    portal_back: "← BioDobble Portal",
    mode_mini: "Mini (q=2, 7 symbolů)",
    mode_full: "Plná (q=4, 21 symbolů)",
    hero_title: "NA-Dobble s nukleovými kyselinami",
    hero_desc: "Vítejte v interaktivním generátoru a trenažéru Dobble zaměřeném na <strong>nukleové kyseliny</strong>. Hra spojuje <strong>významy</strong>: strukturní vzorce, české a anglické názvy, vzorce a zkratky dusíkatých bází, cukrů, nukleosidů, nukleotidů i modifikací v tRNA.",
    hero_btn_play: "Hrát Hru",
    hero_btn_print: "Tisknout Karty",
    how_title: "Jak hra funguje?",
    feat_math_title: "Matematické principy PG(2,q)",
    feat_math_desc: "Využívá projektivní rovinu nad konečnými tělesy. V <strong>Mini verzi (q=2)</strong> má balíček 7 karet se 3 symboly. V <strong>Plné verzi (q=4)</strong> obsahuje přesně 21 karet s 5 symboly. Dvě karty mají <strong>vždy právě 1 společný prvek</strong>.",
    feat_meaning_title: "Párování podle významu",
    feat_meaning_desc: "Společný symbol má na kartách odlišnou formu (např. strukturní vzorec báze na jedné a zkratka nukleotidu či český název na druhé). Zjištění shody vyžaduje znalost biochemie!",
    feat_print_title: "Export pro tisk",
    feat_print_desc: "Přizpůsobte si tvar karet (kulaté / čtvercové), rotaci symbolů, počet karet na stránku A4 a vytiskněte si připravenou výukovou sadu.",
    search_placeholder: "Hledat podle názvu, vzorce nebo zkratky...",
    filter_all: "Všechny",
    filter_bases: "Dusíkaté báze",
    filter_sugars: "Cukry (Pentózy)",
    filter_nucleosides: "Nukleosidy",
    filter_nucleotides: "Nukleotidy",
    filter_trna_modified: "tRNA speciality",
    print_settings_title: "Nastavení tiskovin",
    version_label: "Verze balíčku",
    card_shape_label: "Tvar karet",
    shape_circle: "Kulaté (Tradiční Dobble)",
    shape_square: "Čtvercové (Snazší stříhání)",
    print_layout_label: "Počet karet na stránku (A4)",
    layout_6: "6 karet (Velké - 95 mm)",
    layout_4: "4 karty (Obří - 100 mm)",
    layout_8: "8 karet (Střední - 71 mm)",
    layout_12: "12 karet (Malé - 66 mm)",
    rotate_symbols_label: "Náhodně otáčet symboly",
    rotate_symbols_sub: "Zvyšuje obtížnost rotací textů a vzorců.",
    guarantee_diff_label: "Vždy odlišné reprezentace",
    guarantee_diff_sub: "Zaručí, že společný prvek má na obou kartách jinou formu.",
    active_reps_label: "Aktivní reprezentace",
    active_reps_sub: "Vyberte alespoň 1 typ zobrazení symbolu.",
    rep_name: "Název (podle jazyka)",
    rep_alt_name: "Vzorec / Popis",
    rep_code3: "3písmenný / Krátký kód",
    rep_code1: "Jednopísmenný kód",
    rep_structure2d: "2D Chemický vzorec",
    rep_smiles: "SMILES řetězec",
    rep_group: "Kategorie / Skupina",
    show_cheat_label: "Zobrazit tahák (řešení)",
    show_cheat_sub: "Vytiskne drobný seznam prvků do rohu karty.",
    btn_print: "Tisknout sadu karet",
    preview_title: "Náhled karet",
    btn_regenerate: "Přegenerovat sady",
    footer_text: "<p>&copy; 2026 NA-Dobble. Součást <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Autor: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/nucleic-acid-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  en: {
    tab_home: "Home",
    tab_encyclopedia: "Encyclopedia",
    tab_game: "Training Game",
    tab_generator: "Card Generator",
    portal_back: "← BioDobble Portal",
    mode_mini: "Mini (q=2, 7 symbols)",
    mode_full: "Full (q=4, 21 symbols)",
    hero_title: "NA-Dobble with Nucleic Acids",
    hero_desc: "Welcome to the interactive card generator and training simulator for Dobble focused on <strong>nucleic acids</strong>. Matches symbols by <strong>meaning</strong>: 2D structures, English and Czech names, formulas, and abbreviations of bases, sugars, nucleosides, nucleotides, and tRNA modifications.",
    hero_btn_play: "Play Game",
    hero_btn_print: "Print Cards",
    how_title: "How it works?",
    feat_math_title: "Mathematical Foundations PG(2,q)",
    feat_math_desc: "Uses projective planes over finite fields. <strong>Mini version (q=2)</strong> has 7 cards with 3 symbols. <strong>Full version (q=4)</strong> has 21 cards with 5 symbols. Any two cards share <strong>exactly one matching symbol</strong>.",
    feat_meaning_title: "Semantic Match (Meaning)",
    feat_meaning_desc: "The matching item between two cards is shown in different formats (e.g. chemical structure vs name or code). Finding the match requires knowledge of biochemistry!",
    feat_print_title: "Printable PDF Export",
    feat_print_desc: "Customize card shape (circular / square), symbol rotation, layout options, cheat sheets, and print directly on A4 paper.",
    search_placeholder: "Search by name, formula, or code...",
    filter_all: "All",
    filter_bases: "Nitrogenous Bases",
    filter_sugars: "Sugars (Pentoses)",
    filter_nucleosides: "Nucleosides",
    filter_nucleotides: "Nucleotides",
    filter_trna_modified: "tRNA Modifications",
    print_settings_title: "Print Settings",
    version_label: "Deck Version",
    card_shape_label: "Card Shape",
    shape_circle: "Circular (Classic Dobble)",
    shape_square: "Square (Easier to cut)",
    print_layout_label: "Cards per page (A4)",
    layout_6: "6 cards (Large - 95 mm)",
    layout_4: "4 cards (Giant - 100 mm)",
    layout_8: "8 cards (Medium - 71 mm)",
    layout_12: "12 cards (Small - 66 mm)",
    rotate_symbols_label: "Randomly rotate symbols",
    rotate_symbols_sub: "Increases difficulty by rotating texts and structures.",
    guarantee_diff_label: "Always different representations",
    guarantee_diff_sub: "Guarantees matching symbol appears in different formats on the two cards.",
    active_reps_label: "Active Representations",
    active_reps_sub: "Select at least 1 representation format.",
    rep_name: "Name (by language)",
    rep_alt_name: "Formula / Description",
    rep_code3: "3-letter / Short Code",
    rep_code1: "1-letter Code",
    rep_structure2d: "2D Chemical Structure",
    rep_smiles: "SMILES String",
    rep_group: "Category / Group",
    show_cheat_label: "Show cheat sheet (solutions)",
    show_cheat_sub: "Prints tiny solution list on each card.",
    btn_print: "Print Card Deck",
    preview_title: "Card Preview",
    btn_regenerate: "Regenerate Decks",
    footer_text: "<p>&copy; 2026 NA-Dobble. Part of <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Author: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/nucleic-acid-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  de: {
    tab_home: "Startseite",
    tab_encyclopedia: "Enzyklopädie",
    tab_game: "Trainingsspiel",
    tab_generator: "Kartengenerator",
    portal_back: "← BioDobble Portal",
    mode_mini: "Mini (q=2, 7 Symbole)",
    mode_full: "Voll (q=4, 21 Symbole)",
    hero_title: "NA-Dobble mit Nukleinsäuren",
    hero_desc: "Willkommen beim interaktiven Kartengenerator und Trainingssimulator für Dobble mit Fokus auf <strong>Nukleinsäuren</strong>. Vergleicht Symbole nach <strong>Bedeutung</strong>: 2D-Strukturen, Namen, Formeln und Codes von Basen, Zuckern, Nukleosiden, Nukleotiden und tRNA-Modifikationen.",
    hero_btn_play: "Spiel starten",
    hero_btn_print: "Karten drucken",
    how_title: "Wie funktioniert das Spiel?",
    feat_math_title: "Mathematische Grundlagen PG(2,q)",
    feat_math_desc: "Basiert auf projektiven Ebenen. Die <strong>Mini-Version (q=2)</strong> hat 7 Karten mit 3 Symbolen. Die <strong>Volle Version (q=4)</strong> hat 21 Karten mit 5 Symbolen. Zwei Karten haben <strong>genau 1 gemeinsames Symbol</strong>.",
    feat_meaning_title: "Semantischer Abgleich",
    feat_meaning_desc: "Das gemeinsame Symbol wird auf den zwei Karten in unterschiedlichen Formaten dargestellt (z. B. Strukturformel vs. Name oder Code).",
    feat_print_title: "Druckbarer Export",
    feat_print_desc: "Passen Sie Kartenform, Symbolrotation und Seitenlayout an und drucken Sie direkt auf A4-Papier.",
    search_placeholder: "Nach Name, Formel oder Code suchen...",
    filter_all: "Alle",
    filter_bases: "Stickstoffbasen",
    filter_sugars: "Zucker (Pentosen)",
    filter_nucleosides: "Nukleoside",
    filter_nucleotides: "Nukleotide",
    filter_trna_modified: "tRNA-Modifikationen",
    print_settings_title: "Druckeinstellungen",
    version_label: "Deck-Version",
    card_shape_label: "Kartenform",
    shape_circle: "Rund (Klassisch)",
    shape_square: "Quadratisch (Leichter zu schneiden)",
    print_layout_label: "Karten pro Seite (A4)",
    layout_6: "6 Karten (Groß – 95 mm)",
    layout_4: "4 Karten (Riesig – 100 mm)",
    layout_8: "8 Karten (Mittel – 71 mm)",
    layout_12: "12 Karten (Klein – 66 mm)",
    rotate_symbols_label: "Symbole zufällig rotieren",
    rotate_symbols_sub: "Erhöht die Schwierigkeit durch Drehen von Texten.",
    guarantee_diff_label: "Immer unterschiedliche Darstellungen",
    guarantee_diff_sub: "Stellt sicher, dass das gemeinsame Symbol auf beiden Karten in unterschiedlicher Form erscheint.",
    active_reps_label: "Aktive Darstellungen",
    active_reps_sub: "Wählen Sie mindestens 1 Darstellungstyp.",
    rep_name: "Name (nach Sprache)",
    rep_alt_name: "Formel / Beschreibung",
    rep_code3: "3-Buchstaben / Kurzkodex",
    rep_code1: "1-Buchstaben-Code",
    rep_structure2d: "2D-Strukturformel",
    rep_smiles: "SMILES-Zeichenkette",
    rep_group: "Kategorie / Gruppe",
    show_cheat_label: "Spickzettel anzeigen",
    show_cheat_sub: "Druckt kleine Lösungsliste auf jede Karte.",
    btn_print: "Kartensatz drucken",
    preview_title: "Kartenvorschau",
    btn_regenerate: "Decks neu generieren",
    footer_text: "<p>&copy; 2026 NA-Dobble. Teil von <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Autor: <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/nucleic-acid-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  },
  fr: {
    tab_home: "Accueil",
    tab_encyclopedia: "Encyclopédie",
    tab_game: "Jeu d'entraînement",
    tab_generator: "Générateur de cartes",
    portal_back: "← BioDobble Portal",
    mode_mini: "Mini (q=2, 7 symboles)",
    mode_full: "Complet (q=4, 21 symboles)",
    hero_title: "NA-Dobble avec les acides nucléiques",
    hero_desc: "Bienvenue dans le générateur de cartes et simulateur d'entraînement Dobble sur les <strong>acides nucléiques</strong>. Associe les symboles par <strong>signification</strong> : structures 2D, noms, formules et codes des bases, sucres, nucléosides, nucléotides et modifications d'ARNt.",
    hero_btn_play: "Jouer",
    hero_btn_print: "Imprimer les cartes",
    how_title: "Comment fonctionne le jeu ?",
    feat_math_title: "Principes mathématiques PG(2,q)",
    feat_math_desc: "Basé sur les plans projectifs. La <strong>version Mini (q=2)</strong> contient 7 cartes avec 3 symboles. La <strong>version Complète (q=4)</strong> contient 21 cartes avec 5 symboles. Deux cartes partagent <strong>exactement un symbole commun</strong>.",
    feat_meaning_title: "Correspondance sémantique",
    feat_meaning_desc: "Le symbole commun est représenté sous des formes différentes (ex. structure chimique vs nom ou code).",
    feat_print_title: "Export imprimable",
    feat_print_desc: "Personnalisez la forme des cartes, la rotation et la mise en page puis imprimez sur papier A4.",
    search_placeholder: "Rechercher par nom, formule ou code...",
    filter_all: "Tous",
    filter_bases: "Bases azotées",
    filter_sugars: "Sucres (Pentoses)",
    filter_nucleosides: "Nucléosides",
    filter_nucleotides: "Nucléotides",
    filter_trna_modified: "Modifications d'ARNt",
    print_settings_title: "Paramètres d'impression",
    version_label: "Version du paquet",
    card_shape_label: "Forme des cartes",
    shape_circle: "Rondes (Dobble classique)",
    shape_square: "Carrées (Facile à découper)",
    print_layout_label: "Cartes par page (A4)",
    layout_6: "6 cartes (Grandes - 95 mm)",
    layout_4: "4 cartes (Géantes - 100 mm)",
    layout_8: "8 cartes (Moyennes - 71 mm)",
    layout_12: "12 cartes (Petites - 66 mm)",
    rotate_symbols_label: "Pivoter les symboles",
    rotate_symbols_sub: "Augmente la difficulté en faisant pivoter les textes.",
    guarantee_diff_label: "Représentations toujours différentes",
    guarantee_diff_sub: "Garantit que le symbole commun apparaît sous des formes différentes sur les deux cartes.",
    active_reps_label: "Représentations actives",
    active_reps_sub: "Sélectionnez au moins 1 type de représentation.",
    rep_name: "Nom (selon la langue)",
    rep_alt_name: "Formule / Description",
    rep_code3: "Code à 3 lettres / Court",
    rep_code1: "Code à 1 lettre",
    rep_structure2d: "Structure 2D",
    rep_smiles: "Chaîne SMILES",
    rep_group: "Catégorie / Groupe",
    show_cheat_label: "Afficher l'aide-mémoire",
    show_cheat_sub: "Imprime la liste des solutions au coin de la carte.",
    btn_print: "Imprimer le jeu",
    preview_title: "Aperçu des cartes",
    btn_regenerate: "Régénérer le paquet",
    footer_text: "<p>&copy; 2026 NA-Dobble. Fait partie de <a href=\"https://karelberka.github.io/bio-dobble/\" style=\"color: var(--primary); font-weight: 700;\">BioDobble Portal</a>. Auteur : <a href=\"https://karelberka.github.io\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">Karel Berka</a>. <a href=\"https://github.com/KarelBerka/nucleic-acid-dobble\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--primary); font-weight: 700; text-decoration: none;\">GitHub</a>.</p>"
  }
};

// ─── Application Controller ──────────────────────────────────────────────────
let gameObject = null;
let currentFilter = "all";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  // Apply initial theme
  initTheme();
  
  // Apply initial language
  applyLanguage(window.currentLang);

  // Initialize Game Instance
  gameObject = new NADobbleGame("game-container");
  gameObject.init();

  // Setup Event Listeners
  setupNavigation();
  setupVersionSwitcher();
  setupLanguageToggle();
  setupThemeToggle();
  setupEncyclopedia();
  setupGenerator();
});

// ─── Theme Management ────────────────────────────────────────────────────────
function initTheme() {
  const savedTheme = localStorage.getItem("na_dobble_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// ─── Language Management ─────────────────────────────────────────────────────
function setupLanguageToggle() {
  const langSelect = document.getElementById("lang-toggle");
  if (!langSelect) return;
  langSelect.value = window.currentLang;
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    if (_VALID_LANGS.includes(lang)) {
      window.currentLang = lang;
      localStorage.setItem("na_dobble_lang", lang);
      applyLanguage(lang);
      
      // Update Game text if running
      if (gameObject) gameObject.updateLang();
      
      // Update Encyclopedia and Generator
      renderEncyclopedia();
      renderGeneratorPreview();
    }
  });
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (dict[key]) {
      if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
}

// ─── Navigation ─────────────────────────────────────────────────────────────
function setupNavigation() {
  const tabBtns = document.querySelectorAll(".nav-tabs .tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll(".nav-tabs .tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });
  
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.toggle("active", content.id === tabId);
  });
  
  if (tabId === "generator-tab") {
    renderGeneratorPreview();
  }
}

// ─── Version Mode Switcher (Mini q=2 vs Full q=4) ────────────────────────────
function setupVersionSwitcher() {
  const btnMini = document.getElementById("version-btn-mini");
  const btnFull = document.getElementById("version-btn-full");
  const selVersion = document.getElementById("set-version-mode");

  function updateMode(mode) {
    window.currentVersionMode = mode;
    localStorage.setItem("na_dobble_version", mode);

    if (btnMini) btnMini.classList.toggle("active", mode === "mini");
    if (btnFull) btnFull.classList.toggle("active", mode === "full");
    if (selVersion) selVersion.value = mode;

    // Refresh components
    renderEncyclopedia();
    if (document.getElementById("generator-tab").classList.contains("active")) {
      renderGeneratorPreview();
    }
    if (gameObject) {
      gameObject.renderStartScreen();
    }
  }

  if (btnMini) btnMini.addEventListener("click", () => updateMode("mini"));
  if (btnFull) btnFull.addEventListener("click", () => updateMode("full"));
  if (selVersion) selVersion.addEventListener("change", (e) => updateMode(e.target.value));

  // Initialize UI buttons state
  updateMode(window.currentVersionMode);
}

// ─── Encyclopedia Functionality ─────────────────────────────────────────────
function setupEncyclopedia() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderEncyclopedia();
    });
  }

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderEncyclopedia();
    });
  });

  renderEncyclopedia();
}

function renderEncyclopedia() {
  const grid = document.getElementById("na-grid");
  if (!grid) return;

  const lang = window.currentLang || "cs";
  const isMini = window.currentVersionMode === "mini";
  const availableItems = isMini ? NUCLEIC_ACIDS.slice(0, 7) : NUCLEIC_ACIDS;

  const filtered = availableItems.filter(item => {
    const matchesFilter = (currentFilter === "all" || item.group === currentFilter);
    const nameStr = getNAName(item, lang).toLowerCase();
    const codeStr = (item.code3 + " " + item.code1 + " " + item.formula + " " + item.condensed).toLowerCase();
    const matchesSearch = !searchQuery || nameStr.includes(searchQuery) || codeStr.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = filtered.map(item => `
    <div class="na-card">
      <div class="na-header">
        <div class="na-title">
          <span class="na-cz-name">${getNAName(item, lang)}</span>
          <span class="na-eng-name">${item.engName}</span>
        </div>
        <span class="na-badge badge-${item.group}">${item.groupCz}</span>
      </div>
      
      <div class="na-codes">
        <span class="na-code3">${item.code3}</span>
        <span class="na-code1">${item.code1}</span>
      </div>

      <div class="na-structure-container" style="display: flex; gap: 1rem; justify-content: center; align-items: center; background: rgba(255,255,255,0.7); padding: 0.5rem; border-radius: 8px; border: 1px dashed var(--border-color); margin-bottom: 0.75rem;">
        <div class="na-structure-preview" title="2D Structure" style="flex: 1; display: flex; align-items: center; justify-content: center;">
          ${renderStructureToSVG(item.structure, "100%", "100%")}
        </div>
        <div class="na-structure-preview" title="3D Model (PyMOL)" style="width: 80px; height: 80px; display: flex; align-items: center; justify-content: center;">
          <img src="assets/structures/${item.code3.toLowerCase().replace('ψ','pseudou')}.png" style="width: 100%; height: 100%; object-fit: contain;" onerror="this.style.display='none'">
        </div>
      </div>
      
      <div class="na-formula"><strong>Formula:</strong> ${item.formula} (${item.condensed})</div>
      <div class="na-desc">${item["desc" + (lang === "cs" ? "" : lang.charAt(0).toUpperCase() + lang.slice(1))] || item.desc}</div>
    </div>
  `).join("");
}

// ─── Card Generator & Printable Export ────────────────────────────────────────
function setupGenerator() {
  const shapeSelect = document.getElementById("set-card-shape");
  const layoutSelect = document.getElementById("set-page-layout");
  const rotateCheck = document.getElementById("set-random-rotation");
  const guaranteeCheck = document.getElementById("set-guarantee-diff-reps");
  const cheatCheck = document.getElementById("set-show-cheat");
  const btnPrint = document.getElementById("btn-print-deck");
  const btnRegen = document.getElementById("btn-regenerate-deck");

  if (shapeSelect) shapeSelect.addEventListener("change", renderGeneratorPreview);
  if (layoutSelect) layoutSelect.addEventListener("change", renderGeneratorPreview);
  if (rotateCheck) rotateCheck.addEventListener("change", renderGeneratorPreview);
  if (guaranteeCheck) guaranteeCheck.addEventListener("change", renderGeneratorPreview);
  if (cheatCheck) cheatCheck.addEventListener("change", renderGeneratorPreview);
  
  document.querySelectorAll(".rep-checkbox input").forEach(cb => {
    cb.addEventListener("change", renderGeneratorPreview);
  });

  if (btnPrint) {
    btnPrint.addEventListener("click", () => {
      window.print();
    });
  }

  if (btnRegen) {
    btnRegen.addEventListener("click", renderGeneratorPreview);
  }
}

function renderGeneratorPreview() {
  const container = document.getElementById("cards-preview-container");
  if (!container) return;

  const isMini = window.currentVersionMode === "mini";
  const activeQ = isMini ? 2 : 4;
  const activeSymbols = isMini ? NUCLEIC_ACIDS.slice(0, 7) : NUCLEIC_ACIDS;

  const isSquare = document.getElementById("set-card-shape") ? document.getElementById("set-card-shape").value === "square" : false;
  const pageLayout = document.getElementById("set-page-layout") ? document.getElementById("set-page-layout").value : "6";
  const rotateEnabled = document.getElementById("set-random-rotation") ? document.getElementById("set-random-rotation").checked : true;
  const guaranteeDiff = document.getElementById("set-guarantee-diff-reps") ? document.getElementById("set-guarantee-diff-reps").checked : true;
  const showCheat = document.getElementById("set-show-cheat") ? document.getElementById("set-show-cheat").checked : false;

  // Active Rep Types
  const allowedReps = [];
  document.querySelectorAll(".rep-checkbox input").forEach(cb => {
    if (cb.checked) allowedReps.push(parseInt(cb.value));
  });
  if (allowedReps.length === 0) allowedReps.push(0);

  // Generate Dobble Deck using universal algorithm
  const deck = generateDobbleDeck(activeSymbols, activeQ, guaranteeDiff, allowedReps);

  const lang = window.currentLang || "cs";
  const cardsGrid = document.createElement("div");
  cardsGrid.className = "cards-grid";
  cardsGrid.setAttribute("data-layout", pageLayout);

  deck.forEach((card, cardIdx) => {
    const cardEl = document.createElement("div");
    cardEl.className = `dobble-card ${isSquare ? 'square' : ''}`;

    const count = card.items.length;
    let positions;
    if (count === 3) {
      positions = [
        { x: 50, y: 28 },
        { x: 28, y: 70 },
        { x: 72, y: 70 }
      ];
    } else {
      positions = [
        { x: 50, y: 50 },
        { x: 27, y: 27 },
        { x: 73, y: 27 },
        { x: 27, y: 73 },
        { x: 73, y: 73 }
      ];
    }

    let itemsHTML = "";
    const cheatSymbols = [];

    card.items.forEach((item, idx) => {
      const pos = positions[idx] || { x: 50, y: 50 };
      const na = item.symbol;
      const rep = item.repType;
      
      cheatSymbols.push(na.code3);

      const rotation = rotateEnabled ? Math.floor(Math.random() * 360) : 0;
      const scale = count === 3 ? (1.0 + Math.random() * 0.2) : (0.85 + Math.random() * 0.2);

      let content = "";
      let classes = "card-item";

      if (rep === 0) {
        content = `<span class="item-text">${getNAName(na, lang)}</span>`;
      } else if (rep === 1) {
        const formattedFormula = na.condensed ? na.condensed.replace(/(\d+)/g, "<sub>$1</sub>") : na.formula;
        content = `<span class="item-condensed">${formattedFormula}</span>`;
      } else if (rep === 2) {
        content = `<span class="item-code3">${na.code3}</span>`;
      } else if (rep === 3) {
        content = `<span class="item-code1">${na.code1}</span>`;
      } else if (rep === 4) {
        classes += " item-structure";
        content = renderStructureToSVG(na.structure, "100%", "100%");
      } else if (rep === 5) {
        classes += " item-structure";
        const cleanCode = na.code3.toLowerCase().replace("ψ", "pseudou");
        content = `<img src="assets/structures/${cleanCode}.png" onerror="this.style.display='none'">`;
      } else {
        content = `<span class="item-smiles" style="font-size:0.55rem;word-break:break-all;line-height:1.1;display:block;max-width:65px;">${na.smiles}</span>`;
      }

      itemsHTML += `
        <div class="${classes}" style="--x: ${pos.x}%; --y: ${pos.y}%; --scale: ${scale}; --rot: ${rotation}deg;">
          ${content}
        </div>
      `;
    });

    if (showCheat) {
      itemsHTML += `<div class="card-label">#${cardIdx + 1}: ${cheatSymbols.join(", ")}</div>`;
    }

    cardEl.innerHTML = itemsHTML;
    cardsGrid.appendChild(cardEl);
  });

  container.innerHTML = "";
  container.appendChild(cardsGrid);
}

// Global functions attached to window for inline HTML handlers
window.switchTab = switchTab;
