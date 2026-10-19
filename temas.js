// ─────────────────────────────────────────────────────────────
// CONTENIDO DEL SITIO. Para añadir un tema, añade un bloque a TEMAS.
// ─────────────────────────────────────────────────────────────

const MATERIAS = [
  { id: "en", nombre: "English",            periodos: ["1st Term"] },
  { id: "va", nombre: "Llengua Valenciana", periodos: ["1a Avaluació"] },
  { id: "es", nombre: "Lengua",             periodos: ["1.er Trimestre"] },
  { id: "ma", nombre: "Matemáticas",        periodos: ["1.er Trimestre"], secciones: ["calc", "test"], premio: "mezcla" },
  { id: "ns", nombre: "Natural Science",    periodos: ["1st Term"], secciones: ["vocab", "test"], premio: "mezcla" },
];

// Secciones por defecto: vocab + gram. Una materia puede elegir otras con `secciones`.
const SECCIONES = [
  { id: "vocab", nombre: "Vocabulario", ico: "📖" },
  { id: "gram",  nombre: "Gramática",   ico: "🧩" },
  { id: "calc",  nombre: "Cálculo",     ico: "✖️" },
  { id: "test",  nombre: "Tests",       ico: "📝" },
];

// tipo "conj": tiempo + pronombre → forma del verbo
// tipo "vocab": palabra → respuesta (items: [pregunta, respuesta]); en los tests, items: [pregunta, respuesta, [opciones falsas]]
// tipo "reloj": un reloj con agujas → la hora en palabras (horas: [1…12], tipos: o'clock, quarter past, half past, quarter to)
// tipo "mult": tablas de multiplicar (tablas: [2, 3…], por: multiplicadores; elegir: casillas para escoger las tablas)
const POR = [2, 3, 4, 5, 6, 7, 8, 9];
const TF = ["True", ["False"]], FT = ["False", ["True"]];

// Matemáticas · cuaderno de clase: perímetro y área, circunferencia, números ordinales
const RECT = [[5, 3], [4, 2], [6, 2], [7, 2], [3, 3], [6, 5], [8, 3], [9, 2]];
const ORD = [
  ["1.º", "primero"], ["2.º", "segundo"], ["3.º", "tercero"], ["4.º", "cuarto"], ["5.º", "quinto"],
  ["6.º", "sexto"], ["7.º", "séptimo"], ["8.º", "octavo"], ["9.º", "noveno"], ["10.º", "décimo"],
  ["11.º", "undécimo / decimoprimero"], ["12.º", "duodécimo / decimosegundo"],
  ["13.º", "decimotercero / décimo tercero"], ["14.º", "decimocuarto / décimo cuarto"],
  ["15.º", "decimoquinto / décimo quinto"], ["16.º", "decimosexto / décimo sexto"],
  ["17.º", "decimoséptimo / décimo séptimo"], ["18.º", "decimoctavo / décimo octavo"],
  ["19.º", "decimonoveno / décimo noveno"], ["20.º", "vigésimo"], ["30.º", "trigésimo"],
  ["40.º", "cuadragésimo"], ["50.º", "quincuagésimo"], ["60.º", "sexagésimo"], ["70.º", "septuagésimo"],
  ["80.º", "octogésimo"], ["90.º", "nonagésimo"], ["100.º", "centésimo"],
];

// Natural Science · Unit 1: palabras del vocabulario
const NS1_WORDS = [
    ["the organ that controls everything we do", "brain"],
    ["they take information to and from the brain", "nerves"],
    ["the part of the brain that controls voluntary actions", "cerebrum"],
    ["the part of the brain that controls coordination and balance", "cerebellum"],
    ["the part of the brain that controls involuntary actions", "brain stem"],
    ["hard and rigid; they form our skeleton", "bones"],
    ["soft and elastic; they help us move", "muscles"],
    ["where our bones connect to each other", "joints"],
    ["all our bones together; it gives our body shape", "skeleton"],
    ["it vibrates in the middle ear", "eardrum"],
    ["the upside-down image forms here, at the back of the eye", "retina"],
    ["they protect the eye from dust and sweat", "eyelashes"],
    ["two holes in the nose where air enters", "nostrils"],
    ["the nerve that detects smells", "olfactory nerve"],
    ["tiny parts of the tongue that identify tastes", "taste buds"],
    ["the organ of touch and the largest organ of the body", "skin"],
    ["nerves below the skin that send information to the brain", "sensory nerves"],
    ["a part of the body that does an important job in a body system", "organ"],
];

// Tras un fallo: página del libro y esquema (figuras.js) de cada palabra
const NS1_WORDS_AYUDA = { pag: {}, fig: {} };
[[8, "vital", "organ"], [9, "brain", "brain|nerves|cerebrum|cerebellum|brain stem"], [10, "bones", "bones|muscles|joints|skeleton"],
 [11, "ear", "eardrum"], [12, "eye", "retina|eyelashes"], [14, "nose", "nostrils|olfactory nerve|taste buds"], [15, "skin", "skin|sensory nerves"]]
  .forEach(([pag, fig, ws]) => ws.split("|").forEach(w => { NS1_WORDS_AYUDA.pag[w] = pag; NS1_WORDS_AYUDA.fig[w] = fig; }));

// Natural Science · Unit 1 (Cambridge Natural Science 3, pp. 8–17): preguntas de cada lección
const NS1 = {
  vital: ["Vital functions", [
    ["How many vital functions are there?", "three", ["two", "four", "five"], "There are <b>three</b> vital functions: nutrition, interaction and reproduction."],
    ["All living things reproduce, interact and get energy and … from the environment.", "nutrients", ["organs", "bones", "nerves"]],
    ["Vital functions are … for life.", "necessary", ["dangerous", "bad", "boring"]],
    ["Human beings have groups of organs called …", "body systems", ["vital functions", "nerves", "joints"]],
    ["Body systems are made up of groups of …", "organs", ["bones", "nutrients", "functions"]],
    ["An organ is a part of the body that does an important job in a …", "body system", ["vital function", "skeleton", "sense"]],
    ["The nervous system allows humans to … with their environment.", "interact", ["reproduce", "breathe", "eat"]],
    ["The digestive system belongs to…", "nutrition", ["interaction", "reproduction"]],
    ["The respiratory system belongs to…", "nutrition", ["interaction", "reproduction"]],
    ["The circulatory system belongs to…", "nutrition", ["interaction", "reproduction"]],
    ["The excretory system belongs to…", "nutrition", ["interaction", "reproduction"]],
    ["The locomotor system belongs to…", "interaction", ["nutrition", "reproduction"]],
    ["The nervous system belongs to…", "interaction", ["nutrition", "reproduction"]],
    ["The male and female reproductive systems belong to…", "reproduction", ["nutrition", "interaction"]],
  ], { pag: 8, fig: "vital" }],
  brain: ["The brain", [
    ["Which organ controls everything we do?", "the brain", ["the heart", "the skin", "the stomach"], "<b>The brain</b> is the organ which controls everything we do."],
    ["The brain is the control centre of the … system.", "nervous", ["digestive", "respiratory", "locomotor"]],
    ["Our … organs send information to our brain.", "sense", ["digestive", "reproductive", "excretory"]],
    ["Information travels to our brain through the …", "nerves", ["bones", "muscles", "joints"]],
    ["The cerebrum controls…", "voluntary actions", ["involuntary actions", "coordination and balance"]],
    ["The cerebellum controls…", "coordination and balance", ["voluntary actions", "involuntary actions"]],
    ["The brain stem controls…", "involuntary actions", ["voluntary actions", "coordination and balance"]],
    ["Which part controls voluntary actions?", "cerebrum", ["cerebellum", "brain stem"], "The <b>cerebrum</b> controls voluntary actions."],
    ["Which part controls coordination and balance?", "cerebellum", ["cerebrum", "brain stem"], "The <b>cerebellum</b> controls coordination and balance."],
    ["Which part controls involuntary actions?", "brain stem", ["cerebrum", "cerebellum"], "The <b>brain stem</b> controls involuntary actions."],
  ], { pag: 9, fig: "brain" }],
  bones: ["Bones and muscles", [
    ["The locomotor system allows us to …", "move", ["see", "hear", "smell"]],
    ["The three main parts of the locomotor system are bones, muscles and …", "joints", ["nerves", "skin", "organs"]],
    ["Bones are hard and …", "rigid", ["soft", "elastic", "smooth"]],
    ["Our bones form our …, which gives our body shape.", "skeleton", ["skin", "brain", "heart"]],
    ["Joints are where our bones … to each other.", "connect", ["talk", "move away", "grow"]],
    ["Muscles are soft and …", "elastic", ["hard", "rigid", "rough"]],
    ["How many bones do adults have?", "206", ["300", "106", "260"], "Adults have <b>206</b> bones in their body."],
    ["About how many bones do babies have when they are born?", "300", ["206", "100", "50"], "Babies have about <b>300</b> bones when they are born. Some of these bones later join together."],
    ["Muscles work by contracting and …", "expanding", ["breaking", "sleeping", "growing"]],
    ["Involuntary muscles, like the heart, work automatically.", ...TF],
    ["Voluntary muscles only work when our brain tells them to.", ...TF],
    ["Joints are places where our bones connect to each other.", ...TF],
    ["The heart is a voluntary muscle.", ...FT, "<b>False.</b> The heart is an <b>involuntary</b> muscle: it works automatically."],
    ["Some bones join together as babies grow and become one.", ...TF],
  ], { pag: 10, fig: "bones" }],
  hearing: ["Hearing", [
    ["Our sense of hearing allows us to distinguish between different …", "sounds", ["colours", "tastes", "smells"]],
    ["Step 1: sound waves enter the …", "outer ear", ["middle ear", "inner ear"]],
    ["Step 2: sound waves continue to the middle ear and make the … vibrate.", "eardrum", ["retina", "tongue", "nostril"]],
    ["Step 3: the vibrations make the liquid in the … move.", "inner ear", ["outer ear", "middle ear"]],
    ["Step 4: this movement sends information to the …", "brain", ["heart", "stomach", "skin"]],
    ["Step 5: who reads the information and tells us what we are listening to?", "the brain", ["the eardrum", "the outer ear", "the muscles"], "Step 5: <b>the brain</b> reads the information and tells us what we are listening to."],
    ["The eardrum is in the inner ear.", ...FT, "<b>False.</b> The eardrum is in the <b>middle ear</b>."],
    ["Our senses allow us to interact with the world around us.", ...TF],
  ], { pag: 11, fig: "ear" }],
  sight: ["Sight", [
    ["Our sense of sight allows us to perceive shapes, size, movement, distance and …", "colour", ["taste", "smell", "sound"]],
    ["Step 1 of seeing:", "Light reflects off an object.", ["The light enters the eye.", "An image is formed on the retina.", "Information is sent to the brain."]],
    ["Step 2 of seeing:", "The light enters the eye.", ["Light reflects off an object.", "An image is formed on the retina.", "The brain reads the information."]],
    ["Step 3 of seeing:", "An image is formed on the retina.", ["The light enters the eye.", "Information is sent to the brain.", "The brain reads the information."]],
    ["Step 4 of seeing:", "Information is sent to the brain.", ["An image is formed on the retina.", "The brain reads the information.", "Light reflects off an object."]],
    ["Step 5 of seeing:", "The brain reads the information.", ["Information is sent to the brain.", "The light enters the eye.", "An image is formed on the retina."]],
    ["The light forms an upside-down image on the …", "retina", ["eyebrow", "eyelid", "eardrum"]],
    ["The image that forms on the back of the eye is …", "upside-down", ["green", "very small", "round"]],
    ["Eyelashes protect the eye from dust and …", "sweat", ["light", "sound", "food"]],
    ["What senses if something is too close to your eye and warns you?", "eyelashes", ["eyebrow", "pupil", "iris"], "The <b>eyelashes</b> sense if something is too close to your eye and warn you."],
  ], { pag: 12, fig: "eye" }],
  taste: ["Taste and smell", [
    ["Our senses of smell and taste are …", "connected", ["different organs", "voluntary", "the same"]],
    ["Air enters the nose through two holes called the …", "nostrils", ["taste buds", "eardrums", "pupils"]],
    ["The … nerve detects smells and sends the information to the brain.", "olfactory", ["sensory", "taste", "eye"]],
    ["Tiny … on the tongue identify different tastes.", "taste buds", ["nostrils", "nerves", "bones"]],
    ["There are four main tastes: sweet, salty, bitter and …", "sour", ["spicy", "hot", "soft"]],
    ["Taste information is sent to the brain via the …", "nerves", ["muscles", "bones", "nostrils"]],
    ["Olfactory nerve:", "detects smells", ["detects tastes", "where air enters the nose", "send information to the brain"]],
    ["Taste bud:", "detects tastes", ["detects smells", "where air enters the nose", "send information to the brain"]],
    ["Nostril:", "where air enters the nose", ["detects smells", "detects tastes", "send information to the brain"]],
    ["Nerves:", "send information to the brain", ["detects smells", "detects tastes", "where air enters the nose"]],
  ], { pag: 14, fig: "nose" }],
  touch: ["Touch", [
    ["Our body is covered in …", "skin", ["hair", "bones", "muscles"]],
    ["Our skin is the organ of …", "touch", ["taste", "sight", "hearing"]],
    ["What is the largest organ in the human body?", "the skin", ["the brain", "the heart", "the eye"], "<b>The skin</b> is the largest organ in the human body."],
    ["… nerves below the skin send information to the brain.", "Sensory", ["Olfactory", "Taste", "Voluntary"]],
    ["Our skin tells us if something is rough, smooth, hard or …", "soft", ["sweet", "loud", "bright"]],
    ["Our skin can tell us if something is too …, so we don't get burnt.", "hot", ["sweet", "loud", "small"]],
    ["A tree feels …", "rough", ["soft", "smooth", "salty"]],
    ["A jumper feels …", "soft", ["rough", "hard", "bitter"]],
  ], { pag: 15, fig: "skin" }],
  lang: ["Language skills: past tense", [
    ["The lemons … sour.", "tasted", ["taste", "tastes"]],
    ["The bark of a tree … rough.", "felt", ["feel", "feels"]],
    ["We … a beautiful dog.", "saw", ["see", "seed"]],
    ["The pizzas … delicious.", "smelt", ["smeled", "smells"]],
    ["My singing … horrible!", "sounded", ["sound", "sounds"]],
    ["Eye, skin, nose, hair: which is the odd one out?", "hair", ["eye", "skin", "nose"], { pag: 17, exp: "<b>Hair</b> is the odd one out: the eye, the skin and the nose are sense organs." }],
  ], { pag: 16, fig: "past" }],
};
const TEMAS = [
  {
    id: "en-voc-1-2",
    materia: "en", periodo: "1st Term", seccion: "vocab",
    titulo: "Vocabulary 1.2",
    tipo: "vocab",
    items: [
      ["A … is a show that you can watch on television. It might be about animals, cooking, or adventures.", "programme", ["tip", "midday", "friendly"]],
      ["… are small pieces of advice that can help you do something better.", "Tips", ["Programmes", "Friends", "Middays"]],
      ["A … person is kind, nice, and enjoys talking or playing with other people.", "friendly", ["brilliant", "midday", "programme"]],
      ["… is the middle of the day, when the time is 12 o'clock.", "Midday", ["Midnight", "Morning", "Evening"]],
      ["My sister is very … . She always helps me when I have a problem.", "helpful", ["tips", "midday", "programme"]],
      ["I have a dog and a cat. My dog, … is called Max, loves playing in the garden.", "who", ["where", "when", "what"]],
      ["Fiona is … at gymnastics. She always wins every competition.", "brilliant", ["midday", "tips", "programme"]],
      ["School starts at eight, so we must leave the house at a … past seven.", "quarter", ["half", "midday", "minute"]],
      ["My favourite TV … is about cooking.", "programme", ["tip", "midday", "friendly"]],
      ["We have lunch at … , when it is 12 o'clock.", "midday", ["programme", "tips", "helpful"]],
      ["My teacher gave me some … to read faster.", "tips", ["programmes", "middays", "friendly"]],
      ["The new boy is very … . He says hello to everyone.", "friendly", ["midday", "tips", "programme"]],
    ],
  },
  {
    id: "en-wh",
    materia: "en", periodo: "1st Term", seccion: "gram",
    titulo: "WH- question words",
    tipo: "vocab",
    items: [
      ["… is your best friend? — My best friend is Leo.", "Who", ["Where", "When", "Why"]],
      ["… is that animal? — It's a fox.", "What", ["Who", "When", "Why"]],
      ["… is the park? — It's next to the school.", "Where", ["Who", "Why", "Which"]],
      ["… is your birthday? — It's in May.", "When", ["Who", "Where", "Why"]],
      ["… are you laughing? — Because the film is funny.", "Why", ["Who", "Where", "Which"]],
      ["… cookie do you want? — The chocolate one.", "Which", ["Who", "Where", "When"]],
      ["… do you ride a bike? — I push the pedals with my feet.", "How", ["Who", "Which", "What"]],
      ["… is your new friend? — Her name is Ana.", "Who", ["Where", "When", "Why"]],
      ["… is your favourite sport? — Football.", "What", ["Who", "Where", "When"]],
      ["… do you live? — In a big flat near the beach.", "Where", ["Who", "Why", "Which"]],
      ["… are we going on holiday? — In August.", "When", ["Who", "Which", "What"]],
      ["… were you absent yesterday? — Because I was ill.", "Why", ["Who", "Where", "Which"]],
      ["… long does it take to get to your house? — Ten minutes.", "How", ["Who", "Why", "Where"]],
      ["We use WHO to ask about …", "people", ["places", "time", "reasons"]],
      ["We use WHAT to ask about …", "things or actions", ["people", "places", "time"]],
      ["We use WHERE to ask about …", "places", ["people", "time", "choices"]],
      ["We use WHEN to ask about …", "time", ["places", "reasons", "people"]],
      ["We use WHY to ask for …", "reasons", ["time", "places", "choices"]],
      ["We use WHICH to ask about …", "choices", ["people", "reasons", "time"]],
      ["We use HOW to ask about …", "manner or process", ["people", "places", "choices"]],
    ],
  },
  {
    id: "en-time",
    materia: "en", periodo: "1st Term", seccion: "vocab",
    titulo: "Telling the time",
    tipo: "reloj", horas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    id: "ma-perimetro-area",
    materia: "ma", periodo: "1.er Trimestre", seccion: "test",
    titulo: "Perímetro y área",
    tipo: "vocab",
    items: [
      ["El perímetro es…", "la suma de sus lados", ["el espacio de dentro", "el lado más largo", "la mitad del área"]],
      ["El área es…", "el espacio de dentro", ["la suma de sus lados", "el lado más corto", "el borde de la figura"]],
      ...RECT.flatMap(([l, a]) => {
        const p = 2 * (l + a), ar = l * a;
        // Opciones falsas: confundir perímetro y área, sumar solo dos lados…
        const falsas = (ok, xs, u = "") => [...new Set(xs)].filter(x => x !== ok && x > 0).slice(0, 3).map(x => x + u);
        return [
          [`Un rectángulo de ${l} × ${a} cuadraditos. ¿Cuál es su perímetro?`, String(p), falsas(p, [ar, l + a, p + 2, p - 2])],
          [`Un rectángulo de ${l} × ${a} cuadraditos. ¿Cuál es su área?`, ar + " cuadraditos", falsas(ar, [p, l + a, ar + a, ar + 1], " cuadraditos")],
        ];
      }),
    ],
  },
  {
    id: "ma-circunferencia",
    materia: "ma", periodo: "1.er Trimestre", seccion: "test",
    titulo: "Círculo y circunferencia",
    tipo: "vocab", acentos: "áéíóú",
    items: [
      ["La línea que rodea la figura (el borde) es la…", "circunferencia", ["círculo", "radio", "diámetro"]],
      ["Toda la superficie de dentro de la circunferencia es el…", "círculo", ["radio", "diámetro", "centro"]],
      ["El punto que está justo en el medio se llama…", "centro", ["radio", "diámetro", "borde"]],
      ["La línea que va del centro a la circunferencia es el…", "radio", ["diámetro", "centro", "círculo"]],
      ["La línea que pasa por el centro y une dos puntos de la circunferencia es el…", "diámetro", ["radio", "centro", "perímetro"]],
      ["El diámetro mide…", "el doble que el radio", ["la mitad que el radio", "igual que el radio", "el triple que el radio"]],
      ["Si el radio mide 3 cm, el diámetro mide…", "6 cm", ["3 cm", "9 cm", "1 cm"]],
      ["Si el radio mide 5 cm, el diámetro mide…", "10 cm", ["5 cm", "15 cm", "25 cm"]],
      ["Si el diámetro mide 8 cm, el radio mide…", "4 cm", ["8 cm", "16 cm", "2 cm"]],
      ["Si el diámetro mide 12 cm, el radio mide…", "6 cm", ["12 cm", "24 cm", "3 cm"]],
    ],
  },
  {
    id: "ma-ordinales",
    materia: "ma", periodo: "1.er Trimestre", seccion: "test",
    titulo: "Los números ordinales",
    tipo: "vocab", acentos: "áéíóú",
    items: [
      ...ORD.map(([n, o]) => [n, o]),
      ["Los números ordinales tienen género…", "masculino y femenino", ["solo masculino", "solo femenino"]],
      ["1.ª (femenino)", "primera", ["primero", "primer", "primeras"]],
      ["3.ª (femenino)", "tercera", ["tercero", "tercer", "tercia"]],
      ["Si se escriben juntos, la decena…", "pierde la tilde", ["mantiene la tilde", "lleva dos tildes"]],
      ["Si se escriben separados, la unidad y la decena…", "mantienen la tilde", ["pierden la tilde", "van sin espacio"]],
      ["17.º escrito junto:", "decimoséptimo", ["décimoséptimo", "decimoseptimo", "décimoseptimo"]],
      ["17.º escrito separado:", "décimo séptimo", ["decimo séptimo", "décimo septimo", "decimo septimo"]],
      ["16.º escrito junto:", "decimosexto", ["décimosexto", "décimo sexto", "decimo sexto"]],
      ["16.º escrito separado:", "décimo sexto", ["decimo sexto", "décimosexto", "decimosexto"]],
      ["19.º escrito junto:", "decimonoveno", ["décimonoveno", "décimo noveno", "decimo noveno"]],
      ["19.º escrito separado:", "décimo noveno", ["decimo noveno", "décimonoveno", "decimonoveno"]],
    ],
  },
  ...Object.entries(NS1).map(([k, [titulo, items, ayuda]]) => ({
    id: "ns-u1-" + k,
    materia: "ns", periodo: "1st Term", seccion: "test",
    titulo: "Unit 1 · " + titulo,
    tipo: "vocab", items, ayuda,
  })),
  {
    id: "ns-u1-review",
    materia: "ns", periodo: "1st Term", seccion: "test",
    titulo: "Unit 1 · Mezcla: elige tus temas",
    // grupos: cada tema es una casilla; se puede jugar todo o solo algunos (1–2, 2–3…)
    tipo: "vocab", elegir: true, grupos: [...Object.values(NS1), ["Words", NS1_WORDS, NS1_WORDS_AYUDA]],
    items: [...Object.values(NS1), ["Words", NS1_WORDS, NS1_WORDS_AYUDA]].flatMap(([, items]) => items),
  },
  {
    id: "ns-u1-words",
    materia: "ns", periodo: "1st Term", seccion: "vocab",
    titulo: "Unit 1 · The human body: words",
    tipo: "vocab",
    items: NS1_WORDS, ayuda: NS1_WORDS_AYUDA,
  },
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
