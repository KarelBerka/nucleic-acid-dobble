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
        { x: 70.0, y: 21.1, label: "NH₂", type: "N" },
        { x: 64.8, y: 38.9, label: "", type: "C" },
        { x: 77.6, y: 52.2, label: "N", type: "N" },
        { x: 72.5, y: 70.0, label: "", type: "C" },
        { x: 54.6, y: 74.4, label: "N", type: "N" },
        { x: 41.8, y: 61.1, label: "", type: "C" },
        { x: 23.3, y: 61.7, label: "NH", type: "N" },
        { x: 17.0, y: 44.3, label: "", type: "C" },
        { x: 31.6, y: 33.0, label: "N", type: "N" },
        { x: 46.9, y: 43.3, label: "", type: "C" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 2 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 1, type: 2 }, { from: 9, to: 5, type: 1 }
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
    smiles: "CC1=CNC(=O)NC1=O",
    structure: {
      atoms: [
        { x: 78.2, y: 59.7, label: "CH₃", type: "C" },
        { x: 62.9, y: 56.1, label: "", type: "C" },
        { x: 52.2, y: 67.6, label: "", type: "C" },
        { x: 36.9, y: 64.0, label: "NH", type: "N" },
        { x: 32.3, y: 49.0, label: "", type: "C" },
        { x: 17.0, y: 45.4, label: "O", type: "O" },
        { x: 43.1, y: 37.5, label: "NH", type: "N" },
        { x: 58.4, y: 41.1, label: "", type: "C" },
        { x: 69.1, y: 29.6, label: "O", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 2 }, { from: 4, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 7, to: 1, type: 1 }
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
        { x: 17.0, y: 64.3, label: "O", type: "O" },
        { x: 33.5, y: 54.8, label: "", type: "C" },
        { x: 33.5, y: 35.7, label: "", type: "C" },
        { x: 50.0, y: 26.2, label: "", type: "C" },
        { x: 66.5, y: 35.7, label: "NH", type: "N" },
        { x: 66.5, y: 54.8, label: "", type: "C" },
        { x: 83.0, y: 64.3, label: "O", type: "O" },
        { x: 50.0, y: 64.3, label: "NH", type: "N" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 2 }, { from: 5, to: 7, type: 1 }, { from: 7, to: 1, type: 1 }
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
        { x: 17.0, y: 64.3, label: "NH₂", type: "N" },
        { x: 33.5, y: 54.8, label: "", type: "C" },
        { x: 33.5, y: 35.7, label: "", type: "C" },
        { x: 50.0, y: 26.2, label: "", type: "C" },
        { x: 66.5, y: 35.7, label: "NH", type: "N" },
        { x: 66.5, y: 54.8, label: "", type: "C" },
        { x: 83.0, y: 64.3, label: "O", type: "O" },
        { x: 50.0, y: 64.3, label: "N", type: "N" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 2 }, { from: 5, to: 7, type: 1 }, { from: 7, to: 1, type: 2 }
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
        { x: 83.0, y: 60.3, label: "NH₂", type: "N" },
        { x: 69.4, y: 55.3, label: "", type: "C" },
        { x: 58.3, y: 64.6, label: "N", type: "N" },
        { x: 44.7, y: 59.6, label: "", type: "C" },
        { x: 31.9, y: 66.4, label: "NH", type: "N" },
        { x: 21.5, y: 56.3, label: "", type: "C" },
        { x: 27.9, y: 43.3, label: "N", type: "N" },
        { x: 42.2, y: 45.3, label: "", type: "C" },
        { x: 53.3, y: 36.1, label: "", type: "C" },
        { x: 50.9, y: 21.8, label: "O", type: "O" },
        { x: 66.9, y: 41.0, label: "NH", type: "N" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 2 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 2 }, { from: 8, to: 10, type: 1 }, { from: 10, to: 1, type: 1 }, { from: 7, to: 3, type: 2 }
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
        { x: 83.0, y: 41.3, label: "OH", type: "O" },
        { x: 74.0, y: 52.5, label: "", type: "C" },
        { x: 59.8, y: 50.2, label: "", type: "C" },
        { x: 53.2, y: 37.4, label: "O", type: "O" },
        { x: 39.0, y: 39.7, label: "", type: "C" },
        { x: 28.9, y: 29.5, label: "OH", type: "O" },
        { x: 36.8, y: 53.9, label: "", type: "C" },
        { x: 24.0, y: 60.4, label: "OH", type: "O" },
        { x: 49.6, y: 60.4, label: "", type: "C" },
        { x: 51.8, y: 74.6, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 4, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 6, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 8, to: 2, type: 1 }
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
        { x: 18.9, y: 68.1, label: "OH", type: "O" },
        { x: 25.4, y: 52.7, label: "", type: "C" },
        { x: 41.9, y: 50.6, label: "", type: "C" },
        { x: 53.3, y: 62.8, label: "O", type: "O" },
        { x: 68.4, y: 55.8, label: "", type: "C" },
        { x: 83.0, y: 63.8, label: "OH", type: "O" },
        { x: 66.3, y: 39.2, label: "", type: "C" },
        { x: 50.0, y: 36.0, label: "", type: "C" },
        { x: 42.9, y: 20.9, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 4, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 7, to: 2, type: 1 }
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
        { x: 17.0, y: 53.6, label: "NH₂", type: "N" },
        { x: 24.7, y: 48.9, label: "", type: "C" },
        { x: 24.4, y: 39.9, label: "N", type: "N" },
        { x: 32.1, y: 35.2, label: "", type: "C" },
        { x: 40.0, y: 39.5, label: "N", type: "N" },
        { x: 40.2, y: 48.4, label: "", type: "C" },
        { x: 47.1, y: 54.3, label: "N", type: "N" },
        { x: 43.6, y: 62.6, label: "", type: "C" },
        { x: 34.7, y: 61.9, label: "N", type: "N" },
        { x: 32.6, y: 53.2, label: "", type: "C" },
        { x: 55.8, y: 52.2, label: "", type: "C" },
        { x: 59.2, y: 43.9, label: "O", type: "O" },
        { x: 68.2, y: 44.6, label: "", type: "C" },
        { x: 74.0, y: 37.7, label: "", type: "C" },
        { x: 82.9, y: 39.3, label: "OH", type: "O" },
        { x: 70.3, y: 53.3, label: "", type: "C" },
        { x: 78.6, y: 56.7, label: "OH", type: "O" },
        { x: 62.7, y: 58.0, label: "", type: "C" },
        { x: 62.0, y: 67.0, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 2 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 8, to: 9, type: 1 }, { from: 6, to: 10, type: 1 }, { from: 10, to: 11, type: 1 }, { from: 11, to: 12, type: 1 }, { from: 12, to: 13, type: 1 }, { from: 13, to: 14, type: 1 }, { from: 12, to: 15, type: 1 }, { from: 15, to: 16, type: 1 }, { from: 15, to: 17, type: 1 }, { from: 17, to: 18, type: 1 }, { from: 9, to: 1, type: 2 }, { from: 9, to: 5, type: 1 }, { from: 17, to: 10, type: 1 }
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
        { x: 72.8, y: 64.7, label: "CH₃", type: "C" },
        { x: 68.3, y: 57.1, label: "", type: "C" },
        { x: 59.4, y: 57.2, label: "", type: "C" },
        { x: 54.8, y: 49.6, label: "N", type: "N" },
        { x: 45.9, y: 49.7, label: "", type: "C" },
        { x: 40.8, y: 57.0, label: "O", type: "O" },
        { x: 32.3, y: 54.4, label: "", type: "C" },
        { x: 25.2, y: 59.7, label: "", type: "C" },
        { x: 17.0, y: 56.2, label: "OH", type: "O" },
        { x: 32.2, y: 45.5, label: "", type: "C" },
        { x: 24.9, y: 40.3, label: "OH", type: "O" },
        { x: 40.6, y: 42.6, label: "", type: "C" },
        { x: 59.1, y: 41.8, label: "", type: "C" },
        { x: 54.6, y: 34.2, label: "O", type: "O" },
        { x: 68.0, y: 41.7, label: "NH", type: "N" },
        { x: 72.6, y: 49.3, label: "", type: "C" },
        { x: 81.5, y: 49.2, label: "O", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 6, to: 9, type: 1 }, { from: 9, to: 10, type: 1 }, { from: 9, to: 11, type: 1 }, { from: 3, to: 12, type: 1 }, { from: 12, to: 13, type: 2 }, { from: 12, to: 14, type: 1 }, { from: 14, to: 15, type: 1 }, { from: 15, to: 16, type: 2 }, { from: 15, to: 1, type: 1 }, { from: 11, to: 4, type: 1 }
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
        { x: 83.0, y: 53.0, label: "O", type: "O" },
        { x: 74.1, y: 52.6, label: "", type: "C" },
        { x: 69.4, y: 60.1, label: "", type: "C" },
        { x: 60.5, y: 59.7, label: "", type: "C" },
        { x: 56.4, y: 51.8, label: "N", type: "N" },
        { x: 47.6, y: 51.4, label: "", type: "C" },
        { x: 42.0, y: 58.3, label: "O", type: "O" },
        { x: 33.7, y: 55.1, label: "", type: "C" },
        { x: 26.3, y: 60.0, label: "", type: "C" },
        { x: 18.4, y: 56.0, label: "OH", type: "O" },
        { x: 34.2, y: 46.3, label: "", type: "C" },
        { x: 27.3, y: 40.7, label: "OH", type: "O" },
        { x: 42.7, y: 43.9, label: "", type: "C" },
        { x: 45.9, y: 35.6, label: "OH", type: "O" },
        { x: 61.2, y: 44.3, label: "", type: "C" },
        { x: 57.2, y: 36.4, label: "O", type: "O" },
        { x: 70.1, y: 44.7, label: "NH", type: "N" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 7, to: 10, type: 1 }, { from: 10, to: 11, type: 1 }, { from: 10, to: 12, type: 1 }, { from: 12, to: 13, type: 1 }, { from: 4, to: 14, type: 1 }, { from: 14, to: 15, type: 2 }, { from: 14, to: 16, type: 1 }, { from: 16, to: 1, type: 1 }, { from: 12, to: 5, type: 1 }
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
        { x: 83.0, y: 53.0, label: "NH₂", type: "N" },
        { x: 74.1, y: 52.6, label: "", type: "C" },
        { x: 69.4, y: 60.1, label: "", type: "C" },
        { x: 60.5, y: 59.7, label: "", type: "C" },
        { x: 56.4, y: 51.8, label: "N", type: "N" },
        { x: 47.6, y: 51.4, label: "", type: "C" },
        { x: 42.0, y: 58.3, label: "O", type: "O" },
        { x: 33.7, y: 55.1, label: "", type: "C" },
        { x: 26.3, y: 60.0, label: "", type: "C" },
        { x: 18.4, y: 56.0, label: "OH", type: "O" },
        { x: 34.2, y: 46.3, label: "", type: "C" },
        { x: 27.3, y: 40.7, label: "OH", type: "O" },
        { x: 42.7, y: 43.9, label: "", type: "C" },
        { x: 45.9, y: 35.6, label: "OH", type: "O" },
        { x: 61.2, y: 44.3, label: "", type: "C" },
        { x: 57.2, y: 36.4, label: "O", type: "O" },
        { x: 70.1, y: 44.7, label: "N", type: "N" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 7, to: 10, type: 1 }, { from: 10, to: 11, type: 1 }, { from: 10, to: 12, type: 1 }, { from: 12, to: 13, type: 1 }, { from: 4, to: 14, type: 1 }, { from: 14, to: 15, type: 2 }, { from: 14, to: 16, type: 1 }, { from: 16, to: 1, type: 2 }, { from: 12, to: 5, type: 1 }
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
        { x: 31.1, y: 28.7, label: "NH₂", type: "N" },
        { x: 32.0, y: 37.7, label: "", type: "C" },
        { x: 40.2, y: 41.4, label: "N", type: "N" },
        { x: 41.1, y: 50.3, label: "", type: "C" },
        { x: 48.4, y: 55.6, label: "N", type: "N" },
        { x: 45.6, y: 64.2, label: "", type: "C" },
        { x: 36.6, y: 64.2, label: "N", type: "N" },
        { x: 33.8, y: 55.6, label: "", type: "C" },
        { x: 25.6, y: 51.9, label: "", type: "C" },
        { x: 18.3, y: 57.2, label: "O", type: "O" },
        { x: 24.7, y: 43.0, label: "NH", type: "N" },
        { x: 57.0, y: 52.8, label: "", type: "C" },
        { x: 59.8, y: 44.3, label: "O", type: "O" },
        { x: 68.8, y: 44.3, label: "", type: "C" },
        { x: 74.1, y: 37.0, label: "", type: "C" },
        { x: 83.0, y: 38.0, label: "OH", type: "O" },
        { x: 71.5, y: 52.9, label: "", type: "C" },
        { x: 80.1, y: 55.7, label: "OH", type: "O" },
        { x: 64.2, y: 58.1, label: "", type: "C" },
        { x: 64.2, y: 67.1, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 2 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 2 }, { from: 8, to: 10, type: 1 }, { from: 4, to: 11, type: 1 }, { from: 11, to: 12, type: 1 }, { from: 12, to: 13, type: 1 }, { from: 13, to: 14, type: 1 }, { from: 14, to: 15, type: 1 }, { from: 13, to: 16, type: 1 }, { from: 16, to: 17, type: 1 }, { from: 16, to: 18, type: 1 }, { from: 18, to: 19, type: 1 }, { from: 10, to: 1, type: 1 }, { from: 7, to: 3, type: 2 }, { from: 18, to: 11, type: 1 }
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
        { x: 17.8, y: 47.9, label: "NH₂", type: "N" },
        { x: 24.6, y: 45.7, label: "", type: "C" },
        { x: 26.1, y: 38.7, label: "N", type: "N" },
        { x: 32.9, y: 36.5, label: "", type: "C" },
        { x: 38.2, y: 41.2, label: "N", type: "N" },
        { x: 36.7, y: 48.3, label: "", type: "C" },
        { x: 40.9, y: 54.0, label: "N", type: "N" },
        { x: 36.7, y: 59.8, label: "", type: "C" },
        { x: 29.9, y: 57.6, label: "N", type: "N" },
        { x: 29.9, y: 50.5, label: "", type: "C" },
        { x: 48.1, y: 54.0, label: "", type: "C" },
        { x: 52.3, y: 48.3, label: "O", type: "O" },
        { x: 59.1, y: 50.5, label: "", type: "C" },
        { x: 64.9, y: 46.3, label: "", type: "C" },
        { x: 71.4, y: 49.2, label: "O", type: "O" },
        { x: 77.2, y: 45.0, label: "P", type: "P" },
        { x: 81.4, y: 50.8, label: "O", type: "O" },
        { x: 73.0, y: 39.2, label: "OH", type: "O" },
        { x: 83.0, y: 40.8, label: "OH", type: "O" },
        { x: 59.1, y: 57.6, label: "", type: "C" },
        { x: 64.9, y: 61.8, label: "OH", type: "O" },
        { x: 52.3, y: 59.8, label: "", type: "C" },
        { x: 50.0, y: 66.7, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 2 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 8, to: 9, type: 1 }, { from: 6, to: 10, type: 1 }, { from: 10, to: 11, type: 1 }, { from: 11, to: 12, type: 1 }, { from: 12, to: 13, type: 1 }, { from: 13, to: 14, type: 1 }, { from: 14, to: 15, type: 1 }, { from: 15, to: 16, type: 2 }, { from: 15, to: 17, type: 1 }, { from: 15, to: 18, type: 1 }, { from: 12, to: 19, type: 1 }, { from: 19, to: 20, type: 1 }, { from: 19, to: 21, type: 1 }, { from: 21, to: 22, type: 1 }, { from: 9, to: 1, type: 2 }, { from: 9, to: 5, type: 1 }, { from: 21, to: 10, type: 1 }
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
        { x: 72.8, y: 63.7, label: "CH₃", type: "C" },
        { x: 70.2, y: 57.1, label: "", type: "C" },
        { x: 63.1, y: 56.0, label: "", type: "C" },
        { x: 60.5, y: 49.4, label: "N", type: "N" },
        { x: 53.4, y: 48.3, label: "", type: "C" },
        { x: 48.4, y: 53.4, label: "O", type: "O" },
        { x: 42.0, y: 50.2, label: "", type: "C" },
        { x: 35.7, y: 53.6, label: "", type: "C" },
        { x: 29.7, y: 49.7, label: "O", type: "O" },
        { x: 23.3, y: 53.0, label: "P", type: "P" },
        { x: 20.0, y: 46.7, label: "O", type: "O" },
        { x: 26.6, y: 59.4, label: "OH", type: "O" },
        { x: 17.0, y: 56.3, label: "OH", type: "O" },
        { x: 43.1, y: 43.2, label: "", type: "C" },
        { x: 38.0, y: 38.2, label: "OH", type: "O" },
        { x: 50.1, y: 42.0, label: "", type: "C" },
        { x: 65.0, y: 43.8, label: "", type: "C" },
        { x: 62.3, y: 37.1, label: "O", type: "O" },
        { x: 72.0, y: 44.8, label: "NH", type: "N" },
        { x: 74.7, y: 51.5, label: "", type: "C" },
        { x: 81.7, y: 52.5, label: "O", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 2 }, { from: 9, to: 11, type: 1 }, { from: 9, to: 12, type: 1 }, { from: 6, to: 13, type: 1 }, { from: 13, to: 14, type: 1 }, { from: 13, to: 15, type: 1 }, { from: 3, to: 16, type: 1 }, { from: 16, to: 17, type: 2 }, { from: 16, to: 18, type: 1 }, { from: 18, to: 19, type: 1 }, { from: 19, to: 20, type: 2 }, { from: 19, to: 1, type: 1 }, { from: 15, to: 4, type: 1 }
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
        { x: 82.9, y: 55.9, label: "O", type: "O" },
        { x: 75.8, y: 54.4, label: "", type: "C" },
        { x: 70.9, y: 59.8, label: "", type: "C" },
        { x: 63.8, y: 58.3, label: "", type: "C" },
        { x: 61.6, y: 51.4, label: "N", type: "N" },
        { x: 54.5, y: 49.9, label: "", type: "C" },
        { x: 49.1, y: 54.8, label: "O", type: "O" },
        { x: 42.8, y: 51.2, label: "", type: "C" },
        { x: 36.1, y: 54.1, label: "", type: "C" },
        { x: 30.3, y: 49.9, label: "O", type: "O" },
        { x: 23.6, y: 52.9, label: "P", type: "P" },
        { x: 20.7, y: 46.2, label: "O", type: "O" },
        { x: 26.6, y: 59.5, label: "OH", type: "O" },
        { x: 17.0, y: 55.8, label: "OH", type: "O" },
        { x: 44.3, y: 44.1, label: "", type: "C" },
        { x: 39.4, y: 38.7, label: "OH", type: "O" },
        { x: 51.5, y: 43.3, label: "", type: "C" },
        { x: 55.1, y: 37.0, label: "OH", type: "O" },
        { x: 66.4, y: 46.0, label: "", type: "C" },
        { x: 64.2, y: 39.1, label: "O", type: "O" },
        { x: 73.5, y: 47.5, label: "NH", type: "N" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 }, { from: 10, to: 11, type: 2 }, { from: 10, to: 12, type: 1 }, { from: 10, to: 13, type: 1 }, { from: 7, to: 14, type: 1 }, { from: 14, to: 15, type: 1 }, { from: 14, to: 16, type: 1 }, { from: 16, to: 17, type: 1 }, { from: 4, to: 18, type: 1 }, { from: 18, to: 19, type: 2 }, { from: 18, to: 20, type: 1 }, { from: 20, to: 1, type: 1 }, { from: 16, to: 5, type: 1 }
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
        { x: 82.9, y: 55.9, label: "NH₂", type: "N" },
        { x: 75.8, y: 54.4, label: "", type: "C" },
        { x: 70.9, y: 59.8, label: "", type: "C" },
        { x: 63.8, y: 58.3, label: "", type: "C" },
        { x: 61.6, y: 51.4, label: "N", type: "N" },
        { x: 54.5, y: 49.9, label: "", type: "C" },
        { x: 49.1, y: 54.8, label: "O", type: "O" },
        { x: 42.8, y: 51.2, label: "", type: "C" },
        { x: 36.1, y: 54.1, label: "", type: "C" },
        { x: 30.3, y: 49.9, label: "O", type: "O" },
        { x: 23.6, y: 52.9, label: "P", type: "P" },
        { x: 20.7, y: 46.2, label: "O", type: "O" },
        { x: 26.6, y: 59.5, label: "OH", type: "O" },
        { x: 17.0, y: 55.8, label: "OH", type: "O" },
        { x: 44.3, y: 44.1, label: "", type: "C" },
        { x: 39.4, y: 38.7, label: "OH", type: "O" },
        { x: 51.5, y: 43.3, label: "", type: "C" },
        { x: 55.1, y: 37.0, label: "OH", type: "O" },
        { x: 66.4, y: 46.0, label: "", type: "C" },
        { x: 64.2, y: 39.1, label: "O", type: "O" },
        { x: 73.5, y: 47.5, label: "N", type: "N" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 }, { from: 10, to: 11, type: 2 }, { from: 10, to: 12, type: 1 }, { from: 10, to: 13, type: 1 }, { from: 7, to: 14, type: 1 }, { from: 14, to: 15, type: 1 }, { from: 14, to: 16, type: 1 }, { from: 16, to: 17, type: 1 }, { from: 4, to: 18, type: 1 }, { from: 18, to: 19, type: 2 }, { from: 18, to: 20, type: 1 }, { from: 20, to: 1, type: 2 }, { from: 16, to: 5, type: 1 }
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
        { x: 34.2, y: 31.1, label: "NH₂", type: "N" },
        { x: 33.1, y: 38.2, label: "", type: "C" },
        { x: 38.6, y: 42.7, label: "N", type: "N" },
        { x: 37.4, y: 49.7, label: "", type: "C" },
        { x: 41.8, y: 55.2, label: "N", type: "N" },
        { x: 37.9, y: 61.2, label: "", type: "C" },
        { x: 31.1, y: 59.3, label: "N", type: "N" },
        { x: 30.8, y: 52.2, label: "", type: "C" },
        { x: 25.3, y: 47.7, label: "", type: "C" },
        { x: 18.6, y: 50.2, label: "O", type: "O" },
        { x: 26.4, y: 40.7, label: "NH", type: "N" },
        { x: 48.9, y: 54.9, label: "", type: "C" },
        { x: 52.9, y: 49.0, label: "O", type: "O" },
        { x: 59.7, y: 50.9, label: "", type: "C" },
        { x: 65.3, y: 46.4, label: "", type: "C" },
        { x: 71.9, y: 49.0, label: "O", type: "O" },
        { x: 77.4, y: 44.6, label: "P", type: "P" },
        { x: 81.9, y: 50.2, label: "O", type: "O" },
        { x: 73.0, y: 39.1, label: "OH", type: "O" },
        { x: 83.0, y: 40.2, label: "OH", type: "O" },
        { x: 60.0, y: 58.0, label: "", type: "C" },
        { x: 66.0, y: 61.9, label: "OH", type: "O" },
        { x: 53.4, y: 60.5, label: "", type: "C" },
        { x: 51.5, y: 67.3, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 2 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 2 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 2 }, { from: 8, to: 10, type: 1 }, { from: 4, to: 11, type: 1 }, { from: 11, to: 12, type: 1 }, { from: 12, to: 13, type: 1 }, { from: 13, to: 14, type: 1 }, { from: 14, to: 15, type: 1 }, { from: 15, to: 16, type: 1 }, { from: 16, to: 17, type: 2 }, { from: 16, to: 18, type: 1 }, { from: 16, to: 19, type: 1 }, { from: 13, to: 20, type: 1 }, { from: 20, to: 21, type: 1 }, { from: 20, to: 22, type: 1 }, { from: 22, to: 23, type: 1 }, { from: 10, to: 1, type: 1 }, { from: 7, to: 3, type: 2 }, { from: 22, to: 11, type: 1 }
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
        { x: 83.0, y: 58.7, label: "NH₂", type: "N" },
        { x: 76.8, y: 58.5, label: "", type: "C" },
        { x: 73.5, y: 63.7, label: "N", type: "N" },
        { x: 67.4, y: 63.5, label: "", type: "C" },
        { x: 64.5, y: 58.0, label: "N", type: "N" },
        { x: 67.8, y: 52.8, label: "", type: "C" },
        { x: 66.1, y: 46.8, label: "N", type: "N" },
        { x: 71.2, y: 43.4, label: "", type: "C" },
        { x: 76.1, y: 47.2, label: "N", type: "N" },
        { x: 73.9, y: 53.0, label: "", type: "C" },
        { x: 60.3, y: 44.7, label: "", type: "C" },
        { x: 55.2, y: 48.1, label: "O", type: "O" },
        { x: 50.3, y: 44.3, label: "", type: "C" },
        { x: 44.4, y: 46.0, label: "", type: "C" },
        { x: 39.9, y: 41.7, label: "O", type: "O" },
        { x: 34.0, y: 43.4, label: "P", type: "P" },
        { x: 35.7, y: 49.3, label: "O", type: "O" },
        { x: 32.3, y: 37.4, label: "OH", type: "O" },
        { x: 28.1, y: 45.1, label: "O", type: "O" },
        { x: 26.6, y: 51.1, label: "P", type: "P" },
        { x: 20.6, y: 49.5, label: "O", type: "O" },
        { x: 32.5, y: 52.6, label: "OH", type: "O" },
        { x: 25.0, y: 57.0, label: "O", type: "O" },
        { x: 29.5, y: 61.3, label: "P", type: "P" },
        { x: 25.2, y: 65.8, label: "O", type: "O" },
        { x: 33.8, y: 56.9, label: "OH", type: "O" },
        { x: 33.9, y: 65.6, label: "OH", type: "O" },
        { x: 52.4, y: 38.5, label: "", type: "C" },
        { x: 49.0, y: 33.4, label: "OH", type: "O" },
        { x: 58.6, y: 38.8, label: "", type: "C" },
        { x: 62.4, y: 33.9, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 1 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 2 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 8, to: 9, type: 1 }, { from: 6, to: 10, type: 1 }, { from: 10, to: 11, type: 1 }, { from: 11, to: 12, type: 1 }, { from: 12, to: 13, type: 1 }, { from: 13, to: 14, type: 1 }, { from: 14, to: 15, type: 1 }, { from: 15, to: 16, type: 2 }, { from: 15, to: 17, type: 1 }, { from: 15, to: 18, type: 1 }, { from: 18, to: 19, type: 1 }, { from: 19, to: 20, type: 2 }, { from: 19, to: 21, type: 1 }, { from: 19, to: 22, type: 1 }, { from: 22, to: 23, type: 1 }, { from: 23, to: 24, type: 2 }, { from: 23, to: 25, type: 1 }, { from: 23, to: 26, type: 1 }, { from: 12, to: 27, type: 1 }, { from: 27, to: 28, type: 1 }, { from: 27, to: 29, type: 1 }, { from: 29, to: 30, type: 1 }, { from: 9, to: 1, type: 2 }, { from: 9, to: 5, type: 1 }, { from: 29, to: 10, type: 1 }
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
        { x: 83.0, y: 49.8, label: "O", type: "O" },
        { x: 74.2, y: 49.7, label: "", type: "C" },
        { x: 69.7, y: 57.4, label: "NH", type: "N" },
        { x: 60.9, y: 57.3, label: "", type: "C" },
        { x: 56.4, y: 65.0, label: "O", type: "O" },
        { x: 56.5, y: 49.7, label: "", type: "C" },
        { x: 47.7, y: 49.7, label: "", type: "C" },
        { x: 42.4, y: 56.8, label: "O", type: "O" },
        { x: 34.0, y: 54.0, label: "", type: "C" },
        { x: 26.9, y: 59.2, label: "", type: "C" },
        { x: 18.8, y: 55.6, label: "OH", type: "O" },
        { x: 34.1, y: 45.2, label: "", type: "C" },
        { x: 26.9, y: 40.0, label: "OH", type: "O" },
        { x: 42.5, y: 42.5, label: "", type: "C" },
        { x: 45.2, y: 34.1, label: "OH", type: "O" },
        { x: 60.9, y: 42.0, label: "", type: "C" },
        { x: 69.8, y: 42.1, label: "NH", type: "N" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 2 }, { from: 3, to: 5, type: 1 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 }, { from: 8, to: 11, type: 1 }, { from: 11, to: 12, type: 1 }, { from: 11, to: 13, type: 1 }, { from: 13, to: 14, type: 1 }, { from: 5, to: 15, type: 2 }, { from: 15, to: 16, type: 1 }, { from: 16, to: 1, type: 1 }, { from: 13, to: 6, type: 1 }
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
        { x: 17.0, y: 53.6, label: "O", type: "O" },
        { x: 24.7, y: 48.9, label: "", type: "C" },
        { x: 24.4, y: 39.9, label: "N", type: "N" },
        { x: 32.1, y: 35.2, label: "", type: "C" },
        { x: 40.0, y: 39.5, label: "NH", type: "N" },
        { x: 40.2, y: 48.4, label: "", type: "C" },
        { x: 47.1, y: 54.3, label: "N", type: "N" },
        { x: 43.6, y: 62.6, label: "", type: "C" },
        { x: 34.7, y: 61.9, label: "N", type: "N" },
        { x: 32.6, y: 53.2, label: "", type: "C" },
        { x: 55.8, y: 52.2, label: "", type: "C" },
        { x: 59.2, y: 43.9, label: "O", type: "O" },
        { x: 68.2, y: 44.6, label: "", type: "C" },
        { x: 74.0, y: 37.7, label: "", type: "C" },
        { x: 82.9, y: 39.3, label: "OH", type: "O" },
        { x: 70.3, y: 53.3, label: "", type: "C" },
        { x: 78.6, y: 56.7, label: "OH", type: "O" },
        { x: 62.7, y: 58.0, label: "", type: "C" },
        { x: 62.0, y: 67.0, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 2 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 1 }, { from: 7, to: 8, type: 2 }, { from: 8, to: 9, type: 1 }, { from: 6, to: 10, type: 1 }, { from: 10, to: 11, type: 1 }, { from: 11, to: 12, type: 1 }, { from: 12, to: 13, type: 1 }, { from: 13, to: 14, type: 1 }, { from: 12, to: 15, type: 1 }, { from: 15, to: 16, type: 1 }, { from: 15, to: 17, type: 1 }, { from: 17, to: 18, type: 1 }, { from: 9, to: 1, type: 1 }, { from: 9, to: 5, type: 2 }, { from: 17, to: 10, type: 1 }
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
        { x: 22.4, y: 59.4, label: "O", type: "O" },
        { x: 28.2, y: 52.2, label: "", type: "C" },
        { x: 24.9, y: 43.6, label: "NH", type: "N" },
        { x: 30.7, y: 36.4, label: "", type: "C" },
        { x: 39.8, y: 37.8, label: "", type: "C" },
        { x: 43.1, y: 46.4, label: "N", type: "N" },
        { x: 37.3, y: 53.6, label: "", type: "C" },
        { x: 40.7, y: 62.2, label: "O", type: "O" },
        { x: 52.3, y: 47.9, label: "", type: "C" },
        { x: 58.8, y: 41.3, label: "O", type: "O" },
        { x: 67.0, y: 45.5, label: "", type: "C" },
        { x: 75.2, y: 41.3, label: "", type: "C" },
        { x: 83.0, y: 46.3, label: "OH", type: "O" },
        { x: 65.6, y: 54.6, label: "", type: "C" },
        { x: 72.1, y: 61.1, label: "OH", type: "O" },
        { x: 56.5, y: 56.1, label: "", type: "C" },
        { x: 52.3, y: 64.3, label: "OH", type: "O" }
      ],
      bonds: [
        { from: 0, to: 1, type: 2 }, { from: 1, to: 2, type: 1 }, { from: 2, to: 3, type: 1 }, { from: 3, to: 4, type: 1 }, { from: 4, to: 5, type: 1 }, { from: 5, to: 6, type: 1 }, { from: 6, to: 7, type: 2 }, { from: 5, to: 8, type: 1 }, { from: 8, to: 9, type: 1 }, { from: 9, to: 10, type: 1 }, { from: 10, to: 11, type: 1 }, { from: 11, to: 12, type: 1 }, { from: 10, to: 13, type: 1 }, { from: 13, to: 14, type: 1 }, { from: 13, to: 15, type: 1 }, { from: 15, to: 16, type: 1 }, { from: 6, to: 1, type: 1 }, { from: 15, to: 8, type: 1 }
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
function renderStructureToSVG(structure, width = 140, height = 140, bondColor = "#000000", bondWidth = 2.0) {
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
      let color = "#000000";
      if (atom.type === "O") color = "#d32f2f"; // Wikipedia Red
      if (atom.type === "N") color = "#1976d2"; // Wikipedia Blue
      if (atom.type === "S") color = "#d97706"; // Wikipedia Gold
      if (atom.type === "P") color = "#7b1fa2"; // Wikipedia Purple

      let labelWidth = atom.label.length * 7;
      let labelHeight = 12;
      
      svgContent += `
        <rect x="${atom.x - labelWidth/2}" y="${atom.y - labelHeight}" width="${labelWidth}" height="${labelHeight * 1.5}" fill="#FFFFFF" />
      `;
      
      svgContent += `
        <text x="${atom.x}" y="${atom.y + 2}" font-family="Arial, Helvetica, sans-serif" font-size="11px" font-weight="normal" fill="${color}" text-anchor="middle" dominant-baseline="middle">${atom.label}</text>
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

/**
 * Returns sub-array of nucleic acids based on version.
 * mini: 7, full: 21
 */
function getNucleicAcidsForVersion(version) {
  if (version === "mini") return NUCLEIC_ACIDS.slice(0, 7);
  return NUCLEIC_ACIDS;
}

