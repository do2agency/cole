// ─────────────────────────────────────────────────────────────
// CONTENIDO DEL SITIO. Para añadir un tema, añade un bloque a TEMAS.
// ─────────────────────────────────────────────────────────────

const MATERIAS = [
  { id: "en", nombre: "English",            periodos: ["1st Term"] },
  { id: "va", nombre: "Llengua Valenciana", periodos: ["1a Avaluació"] },
  { id: "es", nombre: "Lengua",             periodos: ["1.er Trimestre"] },
  { id: "ma", nombre: "Matemáticas",        periodos: ["1.er Trimestre"], secciones: ["calc"], premio: "mezcla" },
];

// Secciones por defecto: vocab + gram. Una materia puede elegir otras con `secciones`.
const SECCIONES = [
  { id: "vocab", nombre: "Vocabulario", ico: "📖" },
  { id: "gram",  nombre: "Gramática",   ico: "🧩" },
  { id: "calc",  nombre: "Cálculo",     ico: "✖️" },
];

// tipo "conj": tiempo + pronombre → forma del verbo
// tipo "vocab": palabra → respuesta (items: [pregunta, respuesta])
// tipo "mult": tablas de multiplicar (tablas: [2, 3…], por: multiplicadores; elegir: casillas para escoger las tablas)
const POR = [2, 3, 4, 5, 6, 7, 8, 9];
const TEMAS = [
  ...[2, 3, 4, 5, 6, 7, 8, 9].map(n => ({
    id: "ma-tabla-" + n,
    materia: "ma", periodo: "1.er Trimestre", seccion: "calc",
    titulo: "La tabla del " + n,
    tipo: "mult", tablas: [n], por: POR,
  })),
  {
    id: "ma-tablas-mezcla",
    materia: "ma", periodo: "1.er Trimestre", seccion: "calc",
    titulo: "Mezcla: elige tus tablas",
    tipo: "mult", tablas: [2, 3, 4, 5, 6, 7, 8, 9], por: POR, elegir: true,
  },
  {
    id: "va-estar",
    materia: "va", periodo: "1a Avaluació", seccion: "gram",
    titulo: "El verb estar",
    tipo: "conj",
    acentos: "àèéíòóú",
    pronombres: [["jo"], ["tu"], ["ell", "ella"], ["nosaltres"], ["vosaltres"], ["ells", "elles"]],
    tiempos: [
      { id: "pres", cuando: "ara",  nombre: "Present", formas: ["estic", "estàs", "està", "estem", "esteu", "estan"] },
      { id: "pass", cuando: "ahir", nombre: "Passat",  formas: ["vaig estar", "vas estar", "va estar", "vam estar", "vau estar", "van estar"] },
      { id: "fut",  cuando: "demà", nombre: "Futur",   formas: ["estaré", "estaràs", "estarà", "estarem", "estareu", "estaran"] },
    ],
  },
];
