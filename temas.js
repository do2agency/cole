// ─────────────────────────────────────────────────────────────
// CONTENIDO DEL SITIO. Para añadir un tema, añade un bloque a TEMAS.
// ─────────────────────────────────────────────────────────────

const MATERIAS = [
  { id: "en", nombre: "English",            periodos: ["1st Term"] },
  { id: "va", nombre: "Llengua Valenciana", periodos: ["1a Avaluació"] },
  { id: "es", nombre: "Lengua",             periodos: ["1.er Trimestre"] },
  { id: "ma", nombre: "Matemáticas",        periodos: ["1.er Trimestre"], secciones: ["calc"], premio: "mezcla" },
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
// tipo "mult": tablas de multiplicar (tablas: [2, 3…], por: multiplicadores; elegir: casillas para escoger las tablas)
const POR = [2, 3, 4, 5, 6, 7, 8, 9];
const TF = ["True", ["False"]], FT = ["False", ["True"]];

// Natural Science · Unit 1 (Cambridge Natural Science 3, pp. 8–17): preguntas de cada lección
const NS1 = {
  vital: ["Vital functions", [
    ["How many vital functions are there?", "three", ["two", "four", "five"]],
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
  ]],
  brain: ["The brain", [
    ["Which organ controls everything we do?", "the brain", ["the heart", "the skin", "the stomach"]],
    ["The brain is the control centre of the … system.", "nervous", ["digestive", "respiratory", "locomotor"]],
    ["Our … organs send information to our brain.", "sense", ["digestive", "reproductive", "excretory"]],
    ["Information travels to our brain through the …", "nerves", ["bones", "muscles", "joints"]],
    ["The cerebrum controls…", "voluntary actions", ["involuntary actions", "coordination and balance"]],
    ["The cerebellum controls…", "coordination and balance", ["voluntary actions", "involuntary actions"]],
    ["The brain stem controls…", "involuntary actions", ["voluntary actions", "coordination and balance"]],
    ["Which part controls voluntary actions?", "cerebrum", ["cerebellum", "brain stem"]],
    ["Which part controls coordination and balance?", "cerebellum", ["cerebrum", "brain stem"]],
    ["Which part controls involuntary actions?", "brain stem", ["cerebrum", "cerebellum"]],
  ]],
  bones: ["Bones and muscles", [
    ["The locomotor system allows us to …", "move", ["see", "hear", "smell"]],
    ["The three main parts of the locomotor system are bones, muscles and …", "joints", ["nerves", "skin", "organs"]],
    ["Bones are hard and …", "rigid", ["soft", "elastic", "smooth"]],
    ["Our bones form our …, which gives our body shape.", "skeleton", ["skin", "brain", "heart"]],
    ["Joints are where our bones … to each other.", "connect", ["talk", "move away", "grow"]],
    ["Muscles are soft and …", "elastic", ["hard", "rigid", "rough"]],
    ["How many bones do adults have?", "206", ["300", "106", "260"]],
    ["About how many bones do babies have when they are born?", "300", ["206", "100", "50"]],
    ["Muscles work by contracting and …", "expanding", ["breaking", "sleeping", "growing"]],
    ["Involuntary muscles, like the heart, work automatically.", ...TF],
    ["Voluntary muscles only work when our brain tells them to.", ...TF],
    ["Joints are places where our bones connect to each other.", ...TF],
    ["The heart is a voluntary muscle.", ...FT],
    ["Some bones join together as babies grow and become one.", ...TF],
  ]],
  hearing: ["Hearing", [
    ["Our sense of hearing allows us to distinguish between different …", "sounds", ["colours", "tastes", "smells"]],
    ["Step 1: sound waves enter the …", "outer ear", ["middle ear", "inner ear"]],
    ["Step 2: sound waves continue to the middle ear and make the … vibrate.", "eardrum", ["retina", "tongue", "nostril"]],
    ["Step 3: the vibrations make the liquid in the … move.", "inner ear", ["outer ear", "middle ear"]],
    ["Step 4: this movement sends information to the …", "brain", ["heart", "stomach", "skin"]],
    ["Step 5: who reads the information and tells us what we are listening to?", "the brain", ["the eardrum", "the outer ear", "the muscles"]],
    ["The eardrum is in the inner ear.", ...FT],
    ["Our senses allow us to interact with the world around us.", ...TF],
  ]],
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
    ["What senses if something is too close to your eye and warns you?", "eyelashes", ["eyebrow", "pupil", "iris"]],
    ["In the pinhole camera, the small hole works like the …", "pupil", ["retina", "eyebrow", "brain"]],
    ["In the pinhole camera, the wax paper works like the …", "retina", ["pupil", "eyelid", "iris"]],
    ["The pinhole camera formed an … image.", "upside-down", ["green", "invisible", "square"]],
  ]],
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
  ]],
  touch: ["Touch", [
    ["Our body is covered in …", "skin", ["hair", "bones", "muscles"]],
    ["Our skin is the organ of …", "touch", ["taste", "sight", "hearing"]],
    ["What is the largest organ in the human body?", "the skin", ["the brain", "the heart", "the eye"]],
    ["… nerves below the skin send information to the brain.", "Sensory", ["Olfactory", "Taste", "Voluntary"]],
    ["Our skin tells us if something is rough, smooth, hard or …", "soft", ["sweet", "loud", "bright"]],
    ["Our skin can tell us if something is too …, so we don't get burnt.", "hot", ["sweet", "loud", "small"]],
    ["A tree feels …", "rough", ["soft", "smooth", "salty"]],
    ["A jumper feels …", "soft", ["rough", "hard", "bitter"]],
  ]],
  lang: ["Language skills: past tense", [
    ["The lemons … sour.", "tasted", ["taste", "tastes"]],
    ["The bark of a tree … rough.", "felt", ["feel", "feels"]],
    ["We … a beautiful dog.", "saw", ["see", "seed"]],
    ["The pizzas … delicious.", "smelled", ["smell", "smells"]],
    ["My singing … horrible!", "sounded", ["sound", "sounds"]],
    ["Eye, skin, nose, hair: which is the odd one out?", "hair", ["eye", "skin", "nose"]],
  ]],
};
const TEMAS = [
  ...Object.entries(NS1).map(([k, [titulo, items]]) => ({
    id: "ns-u1-" + k,
    materia: "ns", periodo: "1st Term", seccion: "test",
    titulo: "Unit 1 · " + titulo,
    tipo: "vocab", items,
  })),
  {
    id: "ns-u1-review",
    materia: "ns", periodo: "1st Term", seccion: "test",
    titulo: "Unit 1 · Review: all the unit",
    tipo: "vocab", items: Object.values(NS1).flatMap(([, items]) => items),
  },
  {
    id: "ns-u1-words",
    materia: "ns", periodo: "1st Term", seccion: "vocab",
    titulo: "Unit 1 · The human body: words",
    tipo: "vocab",
    items: [
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
    ],
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
