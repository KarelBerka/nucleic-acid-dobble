// js/database.js

/**
 * Detailed database of 21 Nucleic Acid components (Bases, Sugars, Nucleosides, Nucleotides, tRNA modifications).
 * The first 7 items (indices 0..6) form the Mini deck (q=2, PG(2,2)).
 * All 21 items form the Full deck (q=4, PG(2,4)).
 */
const NUCLEIC_ACIDS = [
  // ─── 0..4: Dusíkaté báze (Bases) ──────────────────────────────────────────
  {
    id: 0,
    name: "Adenin",
    engName: "Adenine",
    nameDe: "Adenin",
    nameFr: "Adénine",
    code3: "Ade",
    code1: "A",
    group: "bases",
    groupCz: "Dusíkatá báze (Purin)",
    formula: "C5H5N5",
    condensed: "6-aminopurin",
    desc: "Purinová dusíkatá báze. Páruje se s thyminem v DNA (dvěma vodíkovými vazbami) a s uracilem v RNA.",
    descEn: "Purine nucleobase. Pairs with thymine in DNA via two hydrogen bonds, and with uracil in RNA.",
    descDe: "Purin-Nukleobase. Paart sich in der DNA über zwei Wasserstoffbrücken mit Thymin und in der RNA mit Uracil.",
    descFr: "Base azotée purique. S'apparie avec la thymine dans l'ADN par deux liaisons hydrogène et avec l'uracile dans l'ARN.",
    smiles: "Nc1ncnc2[nH]cnc12",
    structure: {
      atoms: [
        { x: 25, y: 55, label: "N", type: "N" },   // 0
        { x: 25, y: 35, label: "", type: "C" },    // 1
        { x: 40, y: 25, label: "N", type: "N" },   // 2
        { x: 55, y: 35, label: "", type: "C" },    // 3
        { x: 55, y: 55, label: "", type: "C" },    // 4
        { x: 40, y: 65, label: "", type: "C" },    // 5
        { x: 40, y: 85, label: "NH₂", type: "N" }, // 6
        { x: 70, y: 65, label: "N", type: "N" },   // 7
        { x: 78, y: 45, label: "", type: "C" },    // 8
        { x: 70, y: 28, label: "NH", type: "N" }   // 9
      ],
      bonds: [
        { from: 0, to: 1, type: 2 },
        { from: 1, to: 2, type: 1 },
        { from: 2, to: 3, type: 2 },
        { from: 3, to: 4, type: 1 },
        { from: 4, to: 5, type: 2 },
        { from: 5, to: 0, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 4, to: 7, type: 1 },
        { from: 7, to: 8, type: 2 },
        { from: 8, to: 9, type: 1 },
        { from: 9, to: 3, type: 1 }
      ]
    }
  },
  {
    id: 1,
    name: "Thymin",
    engName: "Thymine",
    nameDe: "Thymin",
    nameFr: "Thymine",
    code3: "Thy",
    code1: "T",
    group: "bases",
    groupCz: "Dusíkatá báze (Pyrimidin)",
    formula: "C5H6N2O2",
    condensed: "5-methyluracil",
    desc: "Pyrimidinová dusíkatá báze specifická pro DNA. Je známá též jako 5-methyluracil.",
    descEn: "Pyrimidine nucleobase specific to DNA. Also known as 5-methyluracil.",
    descDe: "Für die DNA spezifische Pyrimidin-Nukleobase. Auch bekannt als 5-Methyluracil.",
    descFr: "Base azotée pyrimidique spécifique de l'ADN. Également connue sous le nom de 5-méthyluracile.",
    smiles: "Cc1cn[nH]c(=O)c1=O",
    structure: {
      atoms: [
        { x: 30, y: 70, label: "NH", type: "N" },  // 0
        { x: 30, y: 45, label: "", type: "C" },    // 1
        { x: 15, y: 35, label: "O", type: "O" },   // 2
        { x: 45, y: 35, label: "NH", type: "N" },  // 3
        { x: 65, y: 45, label: "", type: "C" },    // 4
        { x: 80, y: 35, label: "O", type: "O" },   // 5
        { x: 65, y: 70, label: "", type: "C" },    // 6
        { x: 82, y: 82, label: "CH₃", type: "C" }, // 7
        { x: 45, y: 80, label: "", type: "C" }     // 8
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 2 },
        { from: 1, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 },
        { from: 4, to: 5, type: 2 },
        { from: 4, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },
        { from: 6, to: 8, type: 2 },
        { from: 8, to: 0, type: 1 }
      ]
    }
  },
  {
    id: 2,
    name: "Uracil",
    engName: "Uracil",
    nameDe: "Uracil",
    nameFr: "Uracile",
    code3: "Ura",
    code1: "U",
    group: "bases",
    groupCz: "Dusíkatá báze (Pyrimidin)",
    formula: "C4H4N2O2",
    condensed: "pyrimidin-2,4-dion",
    desc: "Pyrimidinová dusíkatá báze v RNA. V DNA se běžně nevyskytuje (nahrazena thyminem).",
    descEn: "Pyrimidine nucleobase found in RNA. Replaced by thymine in DNA.",
    descDe: "Pyrimidin-Nukleobase in der RNA. Kommt in der DNA normalerweise nicht vor (durch Thymin ersetzt).",
    descFr: "Base azotée pyrimidique présente dans l'ARN. Remplacée par la thymine dans l'ADN.",
    smiles: "O=c1cc[nH]c(=O)[nH]1",
    structure: {
      atoms: [
        { x: 30, y: 70, label: "NH", type: "N" },  // 0
        { x: 30, y: 45, label: "", type: "C" },    // 1
        { x: 15, y: 35, label: "O", type: "O" },   // 2
        { x: 45, y: 35, label: "NH", type: "N" },  // 3
        { x: 65, y: 45, label: "", type: "C" },    // 4
        { x: 80, y: 35, label: "O", type: "O" },   // 5
        { x: 65, y: 70, label: "", type: "C" },    // 6
        { x: 45, y: 80, label: "", type: "C" }     // 7
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 2 },
        { from: 1, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 },
        { from: 4, to: 5, type: 2 },
        { from: 4, to: 6, type: 1 },
        { from: 6, to: 7, type: 2 },
        { from: 7, to: 0, type: 1 }
      ]
    }
  },
  {
    id: 3,
    name: "Cytosin",
    engName: "Cytosine",
    nameDe: "Cytosin",
    nameFr: "Cytosine",
    code3: "Cyt",
    code1: "C",
    group: "bases",
    groupCz: "Dusíkatá báze (Pyrimidin)",
    formula: "C4H5N3O",
    condensed: "4-aminopyrimidin-2-on",
    desc: "Pyrimidinová báze v DNA i RNA. Páruje se s guaninem třemi vodíkovými vazbami.",
    descEn: "Pyrimidine base found in both DNA and RNA. Pairs with guanine via three hydrogen bonds.",
    descDe: "Pyrimidinbase in DNA und RNA. Paart sich über drei Wasserstoffbrücken mit Guanin.",
    descFr: "Base pyrimidique présente dans l'ADN et l'ARN. S'apparie avec la guanine par trois liaisons hydrogène.",
    smiles: "Nc1ccn([H])c(=O)n1",
    structure: {
      atoms: [
        { x: 30, y: 70, label: "NH", type: "N" },  // 0
        { x: 30, y: 45, label: "", type: "C" },    // 1
        { x: 15, y: 35, label: "O", type: "O" },   // 2
        { x: 45, y: 35, label: "N", type: "N" },   // 3
        { x: 65, y: 45, label: "", type: "C" },    // 4
        { x: 80, y: 35, label: "NH₂", type: "N" }, // 5
        { x: 65, y: 70, label: "", type: "C" },    // 6
        { x: 45, y: 80, label: "", type: "C" }     // 7
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 2 },
        { from: 1, to: 3, type: 1 },
        { from: 3, to: 4, type: 2 },
        { from: 4, to: 5, type: 1 },
        { from: 4, to: 6, type: 1 },
        { from: 6, to: 7, type: 2 },
        { from: 7, to: 0, type: 1 }
      ]
    }
  },
  {
    id: 4,
    name: "Guanin",
    engName: "Guanine",
    nameDe: "Guanin",
    nameFr: "Guanine",
    code3: "Gua",
    code1: "G",
    group: "bases",
    groupCz: "Dusíkatá báze (Purin)",
    formula: "C5H5N5O",
    condensed: "2-amino-6-oxopurin",
    desc: "Purinová báze v DNA i RNA. Tvoří s cytosinen nejsilnější párování (3 H-vazby).",
    descEn: "Purine base in DNA and RNA. Forms the strongest base pairing with cytosine (3 H-bonds).",
    descDe: "Purinbase in DNA und RNA. Bildet mit Cytosin die stärkste Paarung (3 H-Brücken).",
    descFr: "Base purique dans l'ADN et l'ARN. Forme l'appariement le plus fort avec la cytosine (3 liaisons H).",
    smiles: "Nc1nc2[nH]cnc2c(=O)[nH]1",
    structure: {
      atoms: [
        { x: 25, y: 55, label: "NH", type: "N" },  // 0
        { x: 25, y: 35, label: "", type: "C" },    // 1
        { x: 10, y: 25, label: "NH₂", type: "N" }, // 2
        { x: 40, y: 25, label: "N", type: "N" },   // 3
        { x: 55, y: 35, label: "", type: "C" },    // 4
        { x: 55, y: 55, label: "", type: "C" },    // 5
        { x: 40, y: 65, label: "", type: "C" },    // 6
        { x: 40, y: 85, label: "O", type: "O" },   // 7
        { x: 70, y: 65, label: "N", type: "N" },   // 8
        { x: 78, y: 45, label: "", type: "C" },    // 9
        { x: 70, y: 28, label: "NH", type: "N" }   // 10
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 1, to: 2, type: 1 },
        { from: 1, to: 3, type: 2 },
        { from: 3, to: 4, type: 1 },
        { from: 4, to: 5, type: 2 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 7, type: 2 },
        { from: 6, to: 0, type: 1 },
        { from: 5, to: 8, type: 1 },
        { from: 8, to: 9, type: 2 },
        { from: 9, to: 10, type: 1 },
        { from: 10, to: 4, type: 1 }
      ]
    }
  },

  // ─── 5..6: Sacharidy (Sugars) ─────────────────────────────────────────────
  {
    id: 5,
    name: "D-Ribóza",
    engName: "D-Ribose",
    nameDe: "D-Ribose",
    nameFr: "D-Ribose",
    code3: "Rib",
    code1: "Rib",
    group: "sugars",
    groupCz: "Sacharid (Pentóza)",
    formula: "C5H10O5",
    condensed: "ribofuranóza",
    desc: "Aldopentóza obsažená v RNA, ATP a dalších nukleotidech. Obsahuje hydroxylové skupiny na C2' i C3'.",
    descEn: "Aldopentose constituent of RNA, ATP and coenzymes. Contains hydroxyl groups at both C2' and C3'.",
    descDe: "Aldopentose in RNA, ATP und Koenzymen. Enthält Hydroxylgruppen an C2' und C3'.",
    descFr: "Aldopentose constituant de l'ARN, de l'ATP. Contient des groupements hydroxyle en C2' et C3'.",
    smiles: "OC[C@H]1O[C@H](O)[C@H](O)[C@@H]1O",
    structure: {
      atoms: [
        { x: 65, y: 40, label: "", type: "C" },    // 0 C1'
        { x: 82, y: 32, label: "OH", type: "O" },  // 1
        { x: 55, y: 70, label: "", type: "C" },    // 2 C2'
        { x: 65, y: 88, label: "OH", type: "O" },  // 3
        { x: 30, y: 70, label: "", type: "C" },    // 4 C3'
        { x: 20, y: 88, label: "OH", type: "O" },  // 5
        { x: 20, y: 40, label: "", type: "C" },    // 6 C4'
        { x: 42, y: 25, label: "O", type: "O" },   // 7 O4'
        { x: 10, y: 20, label: "HOCH₂", type: "C" } // 8 C5'
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 0, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 },
        { from: 2, to: 4, type: 1 },
        { from: 4, to: 5, type: 1 },
        { from: 4, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 },
        { from: 7, to: 0, type: 1 },
        { from: 6, to: 8, type: 1 }
      ]
    }
  },
  {
    id: 6,
    name: "2-Deoxy-D-ribóza",
    engName: "2-Deoxy-D-ribose",
    nameDe: "2-Deoxy-D-ribose",
    nameFr: "2-Désoxy-D-ribose",
    code3: "dRib",
    code1: "dR",
    group: "sugars",
    groupCz: "Sacharid (Deoxysacharid)",
    formula: "C5H10O4",
    condensed: "2-deoxyribofuranóza",
    desc: "Cukerná složka DNA. Na uhlíku C2' chybí kyslík (obsahuje pouze vodík - H).",
    descEn: "Sugar component of DNA. Lacks an oxygen atom at the C2' position.",
    descDe: "Zuckerbaustein der DNA. Fehlt ein Sauerstoffatom am C2'-Kohlenstoff.",
    descFr: "Composant glucidique de l'ADN. Ne possède pas d'oxygène en position C2'.",
    smiles: "OC[C@H]1O[C@H](O)C[C@@H]1O",
    structure: {
      atoms: [
        { x: 65, y: 40, label: "", type: "C" },    // 0 C1'
        { x: 82, y: 32, label: "OH", type: "O" },  // 1
        { x: 55, y: 70, label: "", type: "C" },    // 2 C2' (no OH)
        { x: 30, y: 70, label: "", type: "C" },    // 3 C3'
        { x: 20, y: 88, label: "OH", type: "O" },  // 4
        { x: 20, y: 40, label: "", type: "C" },    // 5 C4'
        { x: 42, y: 25, label: "O", type: "O" },   // 6 O4'
        { x: 10, y: 20, label: "HOCH₂", type: "C" } // 7 C5'
      ],
      bonds: [
        { from: 0, to: 1, type: 1 },
        { from: 0, to: 2, type: 1 },
        { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 },
        { from: 3, to: 5, type: 1 },
        { from: 5, to: 6, type: 1 },
        { from: 6, to: 0, type: 1 },
        { from: 5, to: 7, type: 1 }
      ]
    }
  },

  // ─── 7..11: Nukleosidy (Nucleosides) ─────────────────────────────────────
  {
    id: 7,
    name: "Adenosin",
    engName: "Adenosine",
    nameDe: "Adenosin",
    nameFr: "Adénosine",
    code3: "Ado",
    code1: "A",
    group: "nucleosides",
    groupCz: "Nukleosid",
    formula: "C10H13N5O4",
    condensed: "Adenin + D-Ribóza",
    desc: "Purinový nukleosid složený z adeninu spojeného β-N9-glykosidovou vazbou s D-ribózou.",
    descEn: "Purine nucleoside composed of adenine attached to a ribose sugar molecule.",
    descDe: "Purin-Nukleosid aus Adenin, das an ein D-Ribose-Molekül gebunden ist.",
    descFr: "Nucléoside purique composé d'adénine liée à une molécule de ribose.",
    smiles: "Nc1ncnc2n(cnc12)[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O",
    structure: {
      atoms: [
        // Ribose
        { x: 45, y: 70, label: "", type: "C" },    // 0 C1'
        { x: 35, y: 90, label: "OH", type: "O" },  // 1 C2'
        { x: 20, y: 80, label: "OH", type: "O" },  // 2 C3'
        { x: 20, y: 60, label: "", type: "C" },    // 3 C4'
        { x: 32, y: 52, label: "O", type: "O" },   // 4 O4'
        { x: 10, y: 50, label: "HOCH₂", type: "C" }, // 5 C5'
        // Base (Adenine)
        { x: 60, y: 70, label: "N", type: "N" },   // 6 N9
        { x: 72, y: 80, label: "", type: "C" },    // 7 C8
        { x: 82, y: 70, label: "N", type: "N" },   // 8 N7
        { x: 78, y: 52, label: "", type: "C" },    // 9 C5
        { x: 65, y: 52, label: "", type: "C" },    // 10 C4
        { x: 85, y: 38, label: "", type: "C" },    // 11 C6
        { x: 85, y: 22, label: "NH₂", type: "N" }, // 12 N6
        { x: 72, y: 30, label: "N", type: "N" },   // 13 N1
        { x: 60, y: 38, label: "", type: "C" },    // 14 C2
        { x: 55, y: 52, label: "N", type: "N" }    // 15 N3
      ],
      bonds: [
        { from: 0, to: 4, type: 1 }, { from: 4, to: 3, type: 1 }, { from: 3, to: 0, type: 1 },
        { from: 0, to: 1, type: 1 }, { from: 3, to: 2, type: 1 }, { from: 3, to: 5, type: 1 },
        { from: 0, to: 6, type: 1 }, // Glycosidic
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 8, to: 9, type: 1 },
        { from: 9, to: 10, type: 2 }, { from: 10, to: 6, type: 1 }, { from: 9, to: 11, type: 1 },
        { from: 11, to: 12, type: 1 }, { from: 11, to: 13, type: 2 }, { from: 13, to: 14, type: 1 },
        { from: 14, to: 15, type: 2 }, { from: 15, to: 10, type: 1 }
      ]
    }
  },
  {
    id: 8,
    name: "Thymidin",
    engName: "Thymidine",
    nameDe: "Thymidin",
    nameFr: "Thymidine",
    code3: "Thd",
    code1: "dT",
    group: "nucleosides",
    groupCz: "Nukleosid",
    formula: "C10H14N2O5",
    condensed: "Thymin + 2-Deoxy-D-Ribóza",
    desc: "Deoxynukleosid složený z thyminu spojeného β-N1-glykosidovou vazbou s 2-deoxyribózou.",
    descEn: "Deoxynucleoside consisting of thymine linked to 2-deoxyribose.",
    descDe: "Desoxynukleosid aus Thymin, das an 2-Desoxyribose gebunden ist.",
    descFr: "Désoxynucléoside composé de thymine liée au 2-désoxyribose.",
    smiles: "Cc1cn([C@@H]2O[C@H](CO)[C@@H](O)C2)c(=O)[nH]c1=O",
    structure: {
      atoms: [
        // Sugar
        { x: 45, y: 70, label: "", type: "C" },    // 0 C1'
        { x: 20, y: 80, label: "OH", type: "O" },  // 1 C3'
        { x: 20, y: 60, label: "", type: "C" },    // 2 C4'
        { x: 32, y: 52, label: "O", type: "O" },   // 3 O4'
        { x: 10, y: 50, label: "HOCH₂", type: "C" }, // 4 C5'
        // Base (Thymine)
        { x: 60, y: 70, label: "N", type: "N" },   // 5 N1
        { x: 72, y: 75, label: "", type: "C" },    // 6 C2
        { x: 72, y: 90, label: "O", type: "O" },   // 7 O2
        { x: 82, y: 65, label: "NH", type: "N" },  // 8 N3
        { x: 82, y: 48, label: "", type: "C" },    // 9 C4
        { x: 92, y: 40, label: "O", type: "O" },   // 10 O4
        { x: 70, y: 42, label: "", type: "C" },    // 11 C5
        { x: 70, y: 25, label: "CH₃", type: "C" }, // 12 C5M
        { x: 60, y: 52, label: "", type: "C" }     // 13 C6
      ],
      bonds: [
        { from: 0, to: 3, type: 1 }, { from: 3, to: 2, type: 1 }, { from: 2, to: 0, type: 1 },
        { from: 2, to: 1, type: 1 }, { from: 2, to: 4, type: 1 },
        { from: 0, to: 5, type: 1 }, // Glycosidic
        { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 2 }, { from: 6, to: 8, type: 1 },
        { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 2 }, { from: 9, to: 11, type: 1 },
        { from: 11, to: 12, type: 1 }, { from: 11, to: 13, type: 2 }, { from: 13, to: 5, type: 1 }
      ]
    }
  },
  {
    id: 9,
    name: "Uridin",
    engName: "Uridine",
    nameDe: "Uridin",
    nameFr: "Uridine",
    code3: "Urd",
    code1: "U",
    group: "nucleosides",
    groupCz: "Nukleosid",
    formula: "C9H12N2O6",
    condensed: "Uracil + D-Ribóza",
    desc: "Pyrimidinový nukleosid RNA složený z uracilu a ribózy.",
    descEn: "Pyrimidine nucleoside in RNA consisting of uracil linked to ribose.",
    descDe: "Pyrimidin-Nukleosid in RNA aus Uracil und Ribose.",
    descFr: "Nucléoside pyrimidique de l'ARN composé d'uracile et de ribose.",
    smiles: "O=c1ccn([C@@H]2O[C@H](CO)[C@@H](O)[C@H]2O)c(=O)[nH]1",
    structure: {
      atoms: [
        // Sugar
        { x: 45, y: 70, label: "", type: "C" },    // 0 C1'
        { x: 35, y: 90, label: "OH", type: "O" },  // 1 C2'
        { x: 20, y: 80, label: "OH", type: "O" },  // 2 C3'
        { x: 20, y: 60, label: "", type: "C" },    // 3 C4'
        { x: 32, y: 52, label: "O", type: "O" },   // 4 O4'
        { x: 10, y: 50, label: "HOCH₂", type: "C" }, // 5 C5'
        // Base (Uracil)
        { x: 60, y: 70, label: "N", type: "N" },   // 6 N1
        { x: 72, y: 75, label: "", type: "C" },    // 7 C2
        { x: 72, y: 90, label: "O", type: "O" },   // 8 O2
        { x: 82, y: 65, label: "NH", type: "N" },  // 9 N3
        { x: 82, y: 48, label: "", type: "C" },    // 10 C4
        { x: 92, y: 40, label: "O", type: "O" },   // 11 O4
        { x: 70, y: 42, label: "", type: "C" },    // 12 C5
        { x: 60, y: 52, label: "", type: "C" }     // 13 C6
      ],
      bonds: [
        { from: 0, to: 4, type: 1 }, { from: 4, to: 3, type: 1 }, { from: 3, to: 0, type: 1 },
        { from: 0, to: 1, type: 1 }, { from: 3, to: 2, type: 1 }, { from: 3, to: 5, type: 1 },
        { from: 0, to: 6, type: 1 }, // Glycosidic
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 7, to: 9, type: 1 },
        { from: 9, to: 10, type: 1 }, { from: 10, to: 11, type: 2 }, { from: 10, to: 12, type: 1 },
        { from: 12, to: 13, type: 2 }, { from: 13, to: 6, type: 1 }
      ]
    }
  },
  {
    id: 10,
    name: "Cytidin",
    engName: "Cytidine",
    nameDe: "Cytidin",
    nameFr: "Cytidine",
    code3: "Cyd",
    code1: "C",
    group: "nucleosides",
    groupCz: "Nukleosid",
    formula: "C9H13N3O5",
    condensed: "Cytosin + D-Ribóza",
    desc: "Pyrimidinový nukleosid obsažený v RNA, tvořený cytosinen a D-ribózou.",
    descEn: "Pyrimidine nucleoside present in RNA, composed of cytosine and D-ribose.",
    descDe: "Pyrimidin-Nukleosid in RNA, bestehend aus Cytosin und D-Ribose.",
    descFr: "Nucléoside pyrimidique présent dans l'ARN, composé de cytosine et de D-ribose.",
    smiles: "Nc1ccn([C@@H]2O[C@H](CO)[C@@H](O)[C@H]2O)c(=O)n1",
    structure: {
      atoms: [
        // Sugar
        { x: 45, y: 70, label: "", type: "C" },    // 0 C1'
        { x: 35, y: 90, label: "OH", type: "O" },  // 1 C2'
        { x: 20, y: 80, label: "OH", type: "O" },  // 2 C3'
        { x: 20, y: 60, label: "", type: "C" },    // 3 C4'
        { x: 32, y: 52, label: "O", type: "O" },   // 4 O4'
        { x: 10, y: 50, label: "HOCH₂", type: "C" }, // 5 C5'
        // Base (Cytosine)
        { x: 60, y: 70, label: "N", type: "N" },   // 6 N1
        { x: 72, y: 75, label: "", type: "C" },    // 7 C2
        { x: 72, y: 90, label: "O", type: "O" },   // 8 O2
        { x: 82, y: 65, label: "N", type: "N" },   // 9 N3
        { x: 82, y: 48, label: "", type: "C" },    // 10 C4
        { x: 92, y: 40, label: "NH₂", type: "N" }, // 11 N4
        { x: 70, y: 42, label: "", type: "C" },    // 12 C5
        { x: 60, y: 52, label: "", type: "C" }     // 13 C6
      ],
      bonds: [
        { from: 0, to: 4, type: 1 }, { from: 4, to: 3, type: 1 }, { from: 3, to: 0, type: 1 },
        { from: 0, to: 1, type: 1 }, { from: 3, to: 2, type: 1 }, { from: 3, to: 5, type: 1 },
        { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 7, to: 9, type: 1 },
        { from: 9, to: 10, type: 2 }, { from: 10, to: 11, type: 1 }, { from: 10, to: 12, type: 1 },
        { from: 12, to: 13, type: 2 }, { from: 13, to: 6, type: 1 }
      ]
    }
  },
  {
    id: 11,
    name: "Guanosin",
    engName: "Guanosine",
    nameDe: "Guanosin",
    nameFr: "Guanosine",
    code3: "Guo",
    code1: "G",
    group: "nucleosides",
    groupCz: "Nukleosid",
    formula: "C10H13N5O5",
    condensed: "Guanin + D-Ribóza",
    desc: "Purinový nukleosid složený z guaninu a D-ribózy.",
    descEn: "Purine nucleoside composed of guanine attached to D-ribose.",
    descDe: "Purin-Nukleosid aus Guanin und D-Ribose.",
    descFr: "Nucléoside purique composé de guanine et de D-ribose.",
    smiles: "Nc1nc2n(cnc2c(=O)[nH]1)[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O",
    structure: {
      atoms: [
        // Sugar
        { x: 45, y: 70, label: "", type: "C" },    // 0 C1'
        { x: 35, y: 90, label: "OH", type: "O" },  // 1 C2'
        { x: 20, y: 80, label: "OH", type: "O" },  // 2 C3'
        { x: 20, y: 60, label: "", type: "C" },    // 3 C4'
        { x: 32, y: 52, label: "O", type: "O" },   // 4 O4'
        { x: 10, y: 50, label: "HOCH₂", type: "C" }, // 5 C5'
        // Base (Guanine)
        { x: 60, y: 70, label: "N", type: "N" },   // 6 N9
        { x: 72, y: 80, label: "", type: "C" },    // 7 C8
        { x: 82, y: 70, label: "N", type: "N" },   // 8 N7
        { x: 78, y: 52, label: "", type: "C" },    // 9 C5
        { x: 65, y: 52, label: "", type: "C" },    // 10 C4
        { x: 85, y: 38, label: "", type: "C" },    // 11 C6
        { x: 85, y: 22, label: "O", type: "O" },   // 12 O6
        { x: 72, y: 30, label: "NH", type: "N" },  // 13 N1
        { x: 60, y: 38, label: "", type: "C" },    // 14 C2
        { x: 48, y: 30, label: "NH₂", type: "N" }, // 15 N2
        { x: 55, y: 52, label: "N", type: "N" }    // 16 N3
      ],
      bonds: [
        { from: 0, to: 4, type: 1 }, { from: 4, to: 3, type: 1 }, { from: 3, to: 0, type: 1 },
        { from: 0, to: 1, type: 1 }, { from: 3, to: 2, type: 1 }, { from: 3, to: 5, type: 1 },
        { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 8, to: 9, type: 1 },
        { from: 9, to: 10, type: 2 }, { from: 10, to: 6, type: 1 }, { from: 9, to: 11, type: 1 },
        { from: 11, to: 12, type: 2 }, { from: 11, to: 13, type: 1 }, { from: 13, to: 14, type: 1 },
        { from: 14, to: 15, type: 1 }, { from: 14, to: 16, type: 2 }, { from: 16, to: 10, type: 1 }
      ]
    }
  },

  // ─── 12..17: Nukleotidy (Nucleotides) ───────────────────────────────────
  {
    id: 12,
    name: "AMP",
    engName: "AMP (Adenosine monophosphate)",
    nameDe: "AMP (Adenosinmonophosphat)",
    nameFr: "AMP (Adénosine monophosphate)",
    code3: "AMP",
    code1: "AMP",
    group: "nucleotides",
    groupCz: "Nukleotid (Monofosfát)",
    formula: "C10H14N5O7P",
    condensed: "Adenosin-5'-monofosfát",
    desc: "Základní purinový ribonukleotid. Klíčový meziprodukt v energetickém metabolismu celého organismu.",
    descEn: "Building block of RNA and essential energy carrier precursor.",
    descDe: "Baustein der RNA und wichtiger Vorläufer im Energiestoffwechsel.",
    descFr: "Composant de l'ARN et précurseur clé du métabolisme énergétique.",
    smiles: "Nc1ncnc2n(cnc12)[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    structure: {
      atoms: [
        { x: 10, y: 50, label: "P", type: "P" },    // 0 Phosphate
        { x: 10, y: 30, label: "O", type: "O" },   // 1 =O
        { x: 25, y: 50, label: "O", type: "O" },   // 2 bridge O
        { x: 38, y: 50, label: "", type: "C" },    // 3 C5'
        { x: 50, y: 60, label: "", type: "C" },    // 4 C4'
        { x: 62, y: 52, label: "O", type: "O" },   // 5 O4'
        { x: 72, y: 65, label: "", type: "C" },    // 6 C1'
        { x: 62, y: 80, label: "OH", type: "O" },  // 7 C2'
        { x: 48, y: 78, label: "OH", type: "O" },  // 8 C3'
        // Base Ade
        { x: 84, y: 65, label: "N", type: "N" },   // 9 N9
        { x: 92, y: 52, label: "", type: "C" },    // 10 C8
        { x: 86, y: 38, label: "N", type: "N" },   // 11 N7
        { x: 74, y: 45, label: "", type: "C" }     // 12 C5
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 0, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 4, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 4, to: 8, type: 1 },
        { from: 6, to: 9, type: 1 }, { from: 9, to: 10, type: 1 }, { from: 10, to: 11, type: 2 },
        { from: 11, to: 12, type: 1 }, { from: 12, to: 9, type: 1 }
      ]
    }
  },
  {
    id: 13,
    name: "dTMP",
    engName: "dTMP (Thymidylate)",
    nameDe: "dTMP (Thymidylat)",
    nameFr: "dTMP (Thymidylát)",
    code3: "dTMP",
    code1: "dTMP",
    group: "nucleotides",
    groupCz: "Nukleotid (Deoxynukleotid)",
    formula: "C10H15N2O8P",
    condensed: "2'-deoxythymidin-5'-monofosfát",
    desc: "Deoxynukleotidový stavební kámen DNA obsahující thymin a 2-deoxyribózu.",
    descEn: "Deoxynucleotide building block of DNA containing thymine and 2-deoxyribose.",
    descDe: "Desoxynukleotid-Baustein der DNA mit Thymin und 2-Desoxyribose.",
    descFr: "Désoxynucléoside monophosphate composant de l'ADN.",
    smiles: "Cc1cn([C@@H]2O[C@H](COP(=O)(O)O)[C@@H](O)C2)c(=O)[nH]c1=O",
    structure: {
      atoms: [
        { x: 10, y: 50, label: "P", type: "P" },    // 0 Phosphate
        { x: 10, y: 30, label: "O", type: "O" },   // 1
        { x: 25, y: 50, label: "O", type: "O" },   // 2
        { x: 38, y: 50, label: "", type: "C" },    // 3 C5'
        { x: 50, y: 60, label: "", type: "C" },    // 4 C4'
        { x: 62, y: 52, label: "O", type: "O" },   // 5 O4'
        { x: 72, y: 65, label: "", type: "C" },    // 6 C1'
        { x: 48, y: 78, label: "OH", type: "O" },  // 7 C3'
        // Base Thy
        { x: 84, y: 65, label: "N", type: "N" },   // 8 N1
        { x: 92, y: 55, label: "", type: "C" },    // 9 C2
        { x: 92, y: 40, label: "NH", type: "N" },  // 10 N3
        { x: 82, y: 32, label: "", type: "C" },    // 11 C4
        { x: 72, y: 40, label: "", type: "C" }     // 12 C5
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 0, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 4, type: 1 }, { from: 4, to: 7, type: 1 },
        { from: 6, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 },
        { from: 10, to: 11, type: 1 }, { from: 11, to: 12, type: 1 }, { from: 12, to: 8, type: 2 }
      ]
    }
  },
  {
    id: 14,
    name: "UMP",
    engName: "UMP (Uridylate)",
    nameDe: "UMP (Uridylat)",
    nameFr: "UMP (Uridylate)",
    code3: "UMP",
    code1: "UMP",
    group: "nucleotides",
    groupCz: "Nukleotid (Monofosfát)",
    formula: "C9H13N2O9P",
    condensed: "Uridin-5'-monofosfát",
    desc: "Pyrimidinový ribonukleotid obsažený v RNA a výchozí látka syntézy ostatních pyrimidinů.",
    descEn: "Pyrimidine ribonucleotide present in RNA and precursor for pyrimidine biosynthesis.",
    descDe: "Pyrimidin-Ribonukleotid der RNA und Vorstufe der Pyrimidinbiosynthese.",
    descFr: "Ribonucléotide pyrimidique de l'ARN et précurseur de la biosynthèse pyrimidique.",
    smiles: "O=c1ccn([C@@H]2O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]2O)c(=O)[nH]1",
    structure: {
      atoms: [
        { x: 10, y: 50, label: "P", type: "P" },    // 0
        { x: 10, y: 30, label: "O", type: "O" },   // 1
        { x: 25, y: 50, label: "O", type: "O" },   // 2
        { x: 38, y: 50, label: "", type: "C" },    // 3 C5'
        { x: 50, y: 60, label: "", type: "C" },    // 4 C4'
        { x: 62, y: 52, label: "O", type: "O" },   // 5 O4'
        { x: 72, y: 65, label: "", type: "C" },    // 6 C1'
        { x: 62, y: 80, label: "OH", type: "O" },  // 7 C2'
        { x: 48, y: 78, label: "OH", type: "O" },  // 8 C3'
        // Base Ura
        { x: 84, y: 65, label: "N", type: "N" },   // 9 N1
        { x: 92, y: 55, label: "", type: "C" },    // 10 C2
        { x: 92, y: 40, label: "NH", type: "N" },  // 11 N3
        { x: 82, y: 32, label: "", type: "C" }     // 12 C4
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 0, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 4, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 4, to: 8, type: 1 },
        { from: 6, to: 9, type: 1 }, { from: 9, to: 10, type: 1 }, { from: 10, to: 11, type: 1 },
        { from: 11, to: 12, type: 1 }, { from: 12, to: 9, type: 2 }
      ]
    }
  },
  {
    id: 15,
    name: "CMP",
    engName: "CMP (Cytidylate)",
    nameDe: "CMP (Cytidylat)",
    nameFr: "CMP (Cytidylate)",
    code3: "CMP",
    code1: "CMP",
    group: "nucleotides",
    groupCz: "Nukleotid (Monofosfát)",
    formula: "C9H14N3O8P",
    condensed: "Cytidin-5'-monofosfát",
    desc: "Ribonukleotid obsahující cytosinu, ribózu a fosfátovou skupinu.",
    descEn: "Ribonucleotide containing cytosine, ribose and a phosphate group.",
    descDe: "Ribonukleotid mit Cytosin, Ribose und einer Phosphatgruppe.",
    descFr: "Ribonucléotide contenant de la cytosine, du ribose et un groupe phosphate.",
    smiles: "Nc1ccn([C@@H]2O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]2O)c(=O)n1",
    structure: {
      atoms: [
        { x: 10, y: 50, label: "P", type: "P" },    // 0
        { x: 10, y: 30, label: "O", type: "O" },   // 1
        { x: 25, y: 50, label: "O", type: "O" },   // 2
        { x: 38, y: 50, label: "", type: "C" },    // 3 C5'
        { x: 50, y: 60, label: "", type: "C" },    // 4 C4'
        { x: 62, y: 52, label: "O", type: "O" },   // 5 O4'
        { x: 72, y: 65, label: "", type: "C" },    // 6 C1'
        { x: 62, y: 80, label: "OH", type: "O" },  // 7 C2'
        { x: 48, y: 78, label: "OH", type: "O" },  // 8 C3'
        // Base Cyt
        { x: 84, y: 65, label: "N", type: "N" },   // 9 N1
        { x: 92, y: 55, label: "", type: "C" },    // 10 C2
        { x: 92, y: 40, label: "N", type: "N" },   // 11 N3
        { x: 82, y: 32, label: "", type: "C" }     // 12 C4
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 0, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 4, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 4, to: 8, type: 1 },
        { from: 6, to: 9, type: 1 }, { from: 9, to: 10, type: 1 }, { from: 10, to: 11, type: 2 },
        { from: 11, to: 12, type: 1 }, { from: 12, to: 9, type: 1 }
      ]
    }
  },
  {
    id: 16,
    name: "GMP",
    engName: "GMP (Guanylate)",
    nameDe: "GMP (Guanylat)",
    nameFr: "GMP (Guanylate)",
    code3: "GMP",
    code1: "GMP",
    group: "nucleotides",
    groupCz: "Nukleotid (Monofosfát)",
    formula: "C10H14N5O8P",
    condensed: "Guanosin-5'-monofosfát",
    desc: "Purinový ribonukleotid obsažený v RNA a meziprodukt biosyntézy GTP.",
    descEn: "Purine ribonucleotide found in RNA and intermediate in GTP synthesis.",
    descDe: "Purin-Ribonukleotid der RNA und Zwischenprodukt der GTP-Synthese.",
    descFr: "Ribonucléotide purique de l'ARN et intermédiaire de la synthèse du GTP.",
    smiles: "Nc1nc2n(cnc2c(=O)[nH]1)[C@@H]3O[C@H](COP(=O)(O)O)[C@@H](O)[C@H]3O",
    structure: {
      atoms: [
        { x: 10, y: 50, label: "P", type: "P" },    // 0
        { x: 10, y: 30, label: "O", type: "O" },   // 1
        { x: 25, y: 50, label: "O", type: "O" },   // 2
        { x: 38, y: 50, label: "", type: "C" },    // 3 C5'
        { x: 50, y: 60, label: "", type: "C" },    // 4 C4'
        { x: 62, y: 52, label: "O", type: "O" },   // 5 O4'
        { x: 72, y: 65, label: "", type: "C" },    // 6 C1'
        { x: 62, y: 80, label: "OH", type: "O" },  // 7 C2'
        { x: 48, y: 78, label: "OH", type: "O" },  // 8 C3'
        // Base Gua
        { x: 84, y: 65, label: "N", type: "N" },   // 9 N9
        { x: 92, y: 52, label: "", type: "C" },    // 10 C8
        { x: 86, y: 38, label: "N", type: "N" },   // 11 N7
        { x: 74, y: 45, label: "", type: "C" }     // 12 C5
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 0, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 4, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 4, to: 8, type: 1 },
        { from: 6, to: 9, type: 1 }, { from: 9, to: 10, type: 1 }, { from: 10, to: 11, type: 2 },
        { from: 11, to: 12, type: 1 }, { from: 12, to: 9, type: 1 }
      ]
    }
  },
  {
    id: 17,
    name: "ATP",
    engName: "ATP (Adenosine triphosphate)",
    nameDe: "ATP (Adenosintriphosphat)",
    nameFr: "ATP (Adénosine triphosphate)",
    code3: "ATP",
    code1: "ATP",
    group: "nucleotides",
    groupCz: "Nukleotid (Trifosfát)",
    formula: "C10H16N5O13P3",
    condensed: "Adenosin-5'-trifosfát",
    desc: "Univerzální energetický přenašeč a platidlo buňky. Štěpením makroergických fosfátových vazeb uvolňuje energii.",
    descEn: "Universal energy currency of the cell. Releases energy upon hydrolysis of high-energy phosphate bonds.",
    descDe: "Universelle Energiewährung der Zelle. Setzt Energie bei der Hydrolyse energiereicher Phosphatbindungen frei.",
    descFr: "Monnaie énergétique universelle de la cellule. Libère de l'énergie lors de l'hydrolyse des liaisons phosphate.",
    smiles: "Nc1ncnc2n(cnc12)[C@@H]3O[C@H](COP(=O)(O)OP(=O)(O)OP(=O)(O)O)[C@@H](O)[C@H]3O",
    structure: {
      atoms: [
        { x: 5, y: 50, label: "P", type: "P" },     // 0 Pγ
        { x: 18, y: 50, label: "P", type: "P" },    // 1 Pβ
        { x: 31, y: 50, label: "P", type: "P" },    // 2 Pα
        { x: 42, y: 50, label: "O", type: "O" },   // 3 O5'
        { x: 52, y: 60, label: "", type: "C" },    // 4 C4'
        { x: 64, y: 52, label: "O", type: "O" },   // 5 O4'
        { x: 74, y: 65, label: "", type: "C" },    // 6 C1'
        { x: 64, y: 80, label: "OH", type: "O" },  // 7 C2'
        { x: 50, y: 78, label: "OH", type: "O" },  // 8 C3'
        // Base
        { x: 86, y: 65, label: "N", type: "N" },   // 9 N9
        { x: 94, y: 52, label: "", type: "C" },    // 10 C8
        { x: 88, y: 38, label: "N", type: "N" },   // 11 N7
        { x: 76, y: 45, label: "", type: "C" }     // 12 C5
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 },
        { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 },
        { from: 6, to: 4, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 4, to: 8, type: 1 },
        { from: 6, to: 9, type: 1 }, { from: 9, to: 10, type: 1 }, { from: 10, to: 11, type: 2 },
        { from: 11, to: 12, type: 1 }, { from: 12, to: 9, type: 1 }
      ]
    }
  },

  // ─── 18..20: tRNA modifikace a speciality ─────────────────────────────────
  {
    id: 18,
    name: "Pseudouridin",
    engName: "Pseudouridine",
    nameDe: "Pseudouridin",
    nameFr: "Pseudouridine",
    code3: "Ψ",
    code1: "Ψ",
    group: "trna_modified",
    groupCz: "tRNA modifikace (C-nukleosid)",
    formula: "C9H12N2O6",
    condensed: "5-ribosyluracil",
    desc: "Nejhojnější modifikovaný nukleosid v RNA (tRNA, rRNA). Vzniká C-glykosidovou vazbou mezi uracilem (C5) a ribózou (C1').",
    descEn: "Most abundant modified nucleoside in RNA. Features an unusual C-C glycosidic bond.",
    descDe: "Häufigstes modifiziertes Nukleosid in RNA. Weist eine ungewöhnliche C-C-glykosidische Bindung auf.",
    descFr: "Nucléoside modifié le plus abondant dans l'ARN. Possède une liaison glycosidique C-C inhabituelle.",
    smiles: "O=c1[nH]c(=O)c([C@@H]2O[C@H](CO)[C@@H](O)[C@H]2O)c[nH]1",
    structure: {
      atoms: [
        // Sugar
        { x: 45, y: 70, label: "", type: "C" },    // 0 C1'
        { x: 35, y: 90, label: "OH", type: "O" },  // 1 C2'
        { x: 20, y: 80, label: "OH", type: "O" },  // 2 C3'
        { x: 20, y: 60, label: "", type: "C" },    // 3 C4'
        { x: 32, y: 52, label: "O", type: "O" },   // 4 O4'
        { x: 10, y: 50, label: "HOCH₂", type: "C" }, // 5 C5'
        // Base (Uracil connected via C5!)
        { x: 60, y: 70, label: "", type: "C" },    // 6 C5
        { x: 72, y: 80, label: "NH", type: "N" },  // 7 N1
        { x: 84, y: 70, label: "", type: "C" },    // 8 C2
        { x: 92, y: 80, label: "O", type: "O" },   // 9 O2
        { x: 88, y: 52, label: "NH", type: "N" },  // 10 N3
        { x: 76, y: 45, label: "", type: "C" },    // 11 C4
        { x: 76, y: 30, label: "O", type: "O" },   // 12 O4
        { x: 62, y: 52, label: "", type: "C" }     // 13 C6
      ],
      bonds: [
        { from: 0, to: 4, type: 1 }, { from: 4, to: 3, type: 1 }, { from: 3, to: 0, type: 1 },
        { from: 0, to: 1, type: 1 }, { from: 3, to: 2, type: 1 }, { from: 3, to: 5, type: 1 },
        { from: 0, to: 6, type: 1 }, // C-C Glycosidic bond
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 2 },
        { from: 8, to: 10, type: 1 }, { from: 10, to: 11, type: 1 }, { from: 11, to: 12, type: 2 },
        { from: 11, to: 13, type: 1 }, { from: 13, to: 6, type: 2 }
      ]
    }
  },
  {
    id: 19,
    name: "Inosin",
    engName: "Inosine",
    nameDe: "Inosin",
    nameFr: "Inosine",
    code3: "Ino",
    code1: "I",
    group: "trna_modified",
    groupCz: "tRNA modifikace (Wobble báze)",
    formula: "C10H12N4O5",
    condensed: "Hypoxanthin + D-Ribóza",
    desc: "Purinový nukleosid klíčový v antikodonu tRNA. Umožňuje univerzální párování (wobble hypothesis) s A, U i C.",
    descEn: "Purine nucleoside crucial in the tRNA antikodon. Enables wobble base pairing with A, U and C.",
    descDe: "Purin-Nukleosid im tRNA-Antikodon. Ermöglicht Wobble-Paarung mit A, U und C.",
    descFr: "Nucléoside purique essentiel dans l'anticodon des ARN de transfert. Permet l'appariement bancal.",
    smiles: "O=c1nc[nH]c2n(cnc12)[C@@H]3O[C@H](CO)[C@@H](O)[C@H]3O",
    structure: {
      atoms: [
        // Sugar
        { x: 45, y: 70, label: "", type: "C" },    // 0 C1'
        { x: 35, y: 90, label: "OH", type: "O" },  // 1 C2'
        { x: 20, y: 80, label: "OH", type: "O" },  // 2 C3'
        { x: 20, y: 60, label: "", type: "C" },    // 3 C4'
        { x: 32, y: 52, label: "O", type: "O" },   // 4 O4'
        { x: 10, y: 50, label: "HOCH₂", type: "C" }, // 5 C5'
        // Base (Hypoxanthine)
        { x: 60, y: 70, label: "N", type: "N" },   // 6 N9
        { x: 72, y: 80, label: "", type: "C" },    // 7 C8
        { x: 82, y: 70, label: "N", type: "N" },   // 8 N7
        { x: 78, y: 52, label: "", type: "C" },    // 9 C5
        { x: 65, y: 52, label: "", type: "C" },    // 10 C4
        { x: 85, y: 38, label: "", type: "C" },    // 11 C6
        { x: 85, y: 22, label: "O", type: "O" },   // 12 O6
        { x: 72, y: 30, label: "NH", type: "N" },  // 13 N1
        { x: 60, y: 38, label: "", type: "C" },    // 14 C2
        { x: 55, y: 52, label: "N", type: "N" }    // 15 N3
      ],
      bonds: [
        { from: 0, to: 4, type: 1 }, { from: 4, to: 3, type: 1 }, { from: 3, to: 0, type: 1 },
        { from: 0, to: 1, type: 1 }, { from: 3, to: 2, type: 1 }, { from: 3, to: 5, type: 1 },
        { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 8, to: 9, type: 1 },
        { from: 9, to: 10, type: 2 }, { from: 10, to: 6, type: 1 }, { from: 9, to: 11, type: 1 },
        { from: 11, to: 12, type: 2 }, { from: 11, to: 13, type: 1 }, { from: 13, to: 14, type: 1 },
        { from: 14, to: 15, type: 2 }, { from: 15, to: 10, type: 1 }
      ]
    }
  },
  {
    id: 20,
    name: "Dihydrouridin",
    engName: "Dihydrouridine",
    nameDe: "Dihydrouridin",
    nameFr: "Dihydrouridine",
    code3: "Dhu",
    code1: "D",
    group: "trna_modified",
    groupCz: "tRNA modifikace (Redukovaný nukleosid)",
    formula: "C9H14N2O6",
    condensed: "5,6-dihydrouracil + D-Ribóza",
    desc: "Modifikovaný pyrimidinový nukleosid v D-smyčce tRNA. Chybějící dvojná vazba C5=C6 dává kruhu zvýšenou flexibilitu.",
    descEn: "Modified pyrimidine nucleoside found in tRNA D-loop. Lacks C5=C6 double bond for structural flexibility.",
    descDe: "Modifiziertes Pyrimidin-Nukleosid in der D-Schleife der tRNA.",
    descFr: "Nucléoside pyrimidique modifié présent dans la boucle D de l'ARNt.",
    smiles: "O=C1NCCN(C1=O)[C@@H]2O[C@H](CO)[C@@H](O)[C@H]2O",
    structure: {
      atoms: [
        // Sugar
        { x: 45, y: 70, label: "", type: "C" },    // 0 C1'
        { x: 35, y: 90, label: "OH", type: "O" },  // 1 C2'
        { x: 20, y: 80, label: "OH", type: "O" },  // 2 C3'
        { x: 20, y: 60, label: "", type: "C" },    // 3 C4'
        { x: 32, y: 52, label: "O", type: "O" },   // 4 O4'
        { x: 10, y: 50, label: "HOCH₂", type: "C" }, // 5 C5'
        // Base (5,6-dihydrouracil: single bond between C5 and C6!)
        { x: 60, y: 70, label: "N", type: "N" },   // 6 N1
        { x: 72, y: 75, label: "", type: "C" },    // 7 C2
        { x: 72, y: 90, label: "O", type: "O" },   // 8 O2
        { x: 82, y: 65, label: "NH", type: "N" },  // 9 N3
        { x: 82, y: 48, label: "", type: "C" },    // 10 C4
        { x: 92, y: 40, label: "O", type: "O" },   // 11 O4
        { x: 70, y: 42, label: "", type: "C" },    // 12 C5 (single bond to C6!)
        { x: 60, y: 52, label: "", type: "C" }     // 13 C6
      ],
      bonds: [
        { from: 0, to: 4, type: 1 }, { from: 4, to: 3, type: 1 }, { from: 3, to: 0, type: 1 },
        { from: 0, to: 1, type: 1 }, { from: 3, to: 2, type: 1 }, { from: 3, to: 5, type: 1 },
        { from: 0, to: 6, type: 1 },
        { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 7, to: 9, type: 1 },
        { from: 9, to: 10, type: 1 }, { from: 10, to: 11, type: 2 }, { from: 10, to: 12, type: 1 },
        { from: 12, to: 13, type: 1 }, // Single bond (saturated C5-C6!)
        { from: 13, to: 6, type: 1 }
      ]
    }
  }
];

// Map of atom element types to custom display properties (colors)
const ATOM_STYLES = {
  "N": { color: "#005BCB", bg: "#EBF8FF", radius: 8 },  // Cyan/Blue
  "O": { color: "#E53E3E", bg: "#FED7D7", radius: 8 },  // Red
  "P": { color: "#FF8C00", bg: "#FFEDD5", radius: 8 },  // Orange (Phosphorus)
  "S": { color: "#D69E2E", bg: "#FEFCBF", radius: 8 },  // Yellow-gold
  "H": { color: "#718096", bg: "#EDF2F7", radius: 6 },  // Gray
  "C": { color: "#2D3748", bg: "#FFFFFF", radius: 0 }   // Charcoal (bare vertices)
};

/**
 * Renders a chemical structure into an SVG string.
 * @param {Object} structure The structure object from NUCLEIC_ACIDS
 * @param {number} width Width of the SVG canvas
 * @param {number} height Height of the SVG canvas
 * @param {string} bondColor Color of the bond lines
 * @param {number} bondWidth Thickness of the bond lines
 * @returns {string} The SVG element as HTML string
 */
function renderStructureToSVG(structure, width = 140, height = 140, bondColor = "#2D3748", bondWidth = 2.5) {
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  
  structure.atoms.forEach(atom => {
    const cleanLabel = atom.label ? atom.label.replace(/[\u2080-\u2089]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x2080 + 48)) : "";
    const isAliphaticCarbon = atom.label && /^(CH\d*|H\d*C|C)$/i.test(cleanLabel);
    const hasVisibleLabel = atom.label && !isAliphaticCarbon;
    
    const padding = hasVisibleLabel ? 10 : 2;
    if (atom.x - padding < minX) minX = atom.x - padding;
    if (atom.x + padding > maxX) maxX = atom.x + padding;
    if (atom.y - padding < minY) minY = atom.y - padding;
    if (atom.y + padding > maxY) maxY = atom.y + padding;
  });

  const contentW = maxX - minX;
  const contentH = maxY - minY;
  
  const margin = 10;
  const paddedW = contentW + 2 * margin;
  const paddedH = contentH + 2 * margin;
  
  const vbX = minX - margin;
  const vbY = minY - margin;
  const vbW = paddedW;
  const vbH = paddedH;

  let svgContent = "";
  
  // Draw bonds first
  structure.bonds.forEach(bond => {
    const fromAtom = structure.atoms[bond.from];
    const toAtom = structure.atoms[bond.to];
    
    if (bond.type === 2) {
      const dx = toAtom.x - fromAtom.x;
      const dy = toAtom.y - fromAtom.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const px = -dy / len * 2;
      const py = dx / len * 2;
      
      svgContent += `
        <line x1="${fromAtom.x - px}" y1="${fromAtom.y - py}" x2="${toAtom.x - px}" y2="${toAtom.y - py}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
        <line x1="${fromAtom.x + px}" y1="${fromAtom.y + py}" x2="${toAtom.x + px}" y2="${toAtom.y + py}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
      `;
    } else {
      svgContent += `
        <line x1="${fromAtom.x}" y1="${fromAtom.y}" x2="${toAtom.x}" y2="${toAtom.y}" stroke="${bondColor}" stroke-width="${bondWidth}" stroke-linecap="round"/>
      `;
    }
  });

  // Draw atom labels
  structure.atoms.forEach(atom => {
    const cleanLabel = atom.label ? atom.label.replace(/[\u2080-\u2089]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x2080 + 48)) : "";
    const isAliphaticCarbon = atom.label && /^(CH\d*|H\d*C|C)$/i.test(cleanLabel);
    if (atom.label && !isAliphaticCarbon) {
      const style = ATOM_STYLES[atom.type] || { color: bondColor, bg: "#FFFFFF", radius: 8 };
      let labelWidth = atom.label.length * 7;
      let labelHeight = 12;
      
      svgContent += `
        <rect x="${atom.x - labelWidth/2}" y="${atom.y - labelHeight}" width="${labelWidth}" height="${labelHeight * 1.5}" fill="#FFFFFF" rx="3" ry="3"/>
      `;
      
      svgContent += `
        <text x="${atom.x}" y="${atom.y + 2}" font-family="system-ui, -apple-system, sans-serif" font-size="11px" font-weight="bold" fill="${style.color}" text-anchor="middle" dominant-baseline="middle">${atom.label}</text>
      `;
    }
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" width="${width}" height="${height}">${svgContent}</svg>`;
}

/**
 * Returns the localized name of a nucleic acid item for a given language code.
 * @param {Object} item - Item object from NUCLEIC_ACIDS
 * @param {string} lang - Language code: "cs" | "en" | "de" | "fr"
 * @returns {string}
 */
function getNAName(item, lang) {
  if (!item) return "";
  switch (lang) {
    case "cs": return item.name;
    case "de": return item.nameDe || item.engName;
    case "fr": return item.nameFr || item.engName;
    case "en":
    default:   return item.engName;
  }
}

/**
 * Helper alias for compatibility
 */
function getAAName(item, lang) {
  return getNAName(item, lang);
}
