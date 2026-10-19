// Esquemas sencillos (SVG) que salen tras un fallo en Natural Science. Dibujos propios, no copiados del libro.
// Clases: ln (línea), fl/f2/f3 (rellenos), ac (flecha roja), t (texto centrado), s (texto pequeño).
const FLECHA = id => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ah" d="M0,0 L10,5 L0,10 Z"/></marker></defs>`;
const FIGURAS = {
  vital: `<svg class="fig" viewBox="0 0 340 200" role="img" aria-label="The three vital functions">
    <text class="t h" x="170" y="20">The three vital functions</text>
    <rect class="fl" x="8" y="34" width="104" height="150" rx="12"/>
    <text class="t h" x="60" y="58">Nutrition</text>
    <text class="t s" x="60" y="86">digestive</text><text class="t s" x="60" y="108">respiratory</text>
    <text class="t s" x="60" y="130">circulatory</text><text class="t s" x="60" y="152">excretory</text>
    <rect class="f3" x="118" y="34" width="104" height="150" rx="12"/>
    <text class="t h" x="170" y="58">Interaction</text>
    <text class="t s" x="170" y="86">locomotor</text><text class="t s" x="170" y="108">nervous</text>
    <rect class="f2" x="228" y="34" width="104" height="150" rx="12"/>
    <text class="t h" x="280" y="58">Reproduction</text>
    <text class="t s" x="280" y="86">male</text><text class="t s" x="280" y="104">reproductive</text>
    <text class="t s" x="280" y="130">female</text><text class="t s" x="280" y="148">reproductive</text>
    <text class="t s" x="170" y="198">… systems</text></svg>`,

  brain: `<svg class="fig" viewBox="0 0 350 210" role="img" aria-label="Parts of the brain">
    <path class="ln" d="M100,205 L100,175 C62,175 48,165 45,145 L33,137 L45,127 C40,100 47,62 80,42 C115,22 165,30 182,66 C195,94 190,122 175,142 L172,205"/>
    <ellipse class="fl" cx="115" cy="82" rx="55" ry="36"/>
    <path class="f3" d="M120,112 L134,114 L132,195 L122,195 Z"/>
    <ellipse class="f2" cx="152" cy="124" rx="20" ry="12"/>
    <path class="ln" d="M160,70 L195,55 M170,125 L195,122 M133,168 L195,180"/>
    <text class="h" x="199" y="52">cerebrum</text><text class="s" x="199" y="68">voluntary actions</text>
    <text class="h" x="199" y="119">cerebellum</text><text class="s" x="199" y="135">coordination and balance</text>
    <text class="h" x="199" y="177">brain stem</text><text class="s" x="199" y="193">involuntary actions</text></svg>`,

  bones: `<svg class="fig" viewBox="0 0 320 205" role="img" aria-label="Bones, muscles and joints">
    <path class="hueso" d="M40,70 L150,120 L270,70"/><path class="hueso2" d="M40,70 L150,120 L270,70"/>
    <ellipse class="f2" cx="102" cy="79" rx="48" ry="15" transform="rotate(24.4 102 79)"/>
    <circle class="fl" cx="150" cy="120" r="12"/>
    <path class="ln" d="M70,38 L95,64 M216,100 L226,135 M140,130 L112,152"/>
    <text class="h" x="14" y="30">muscle: soft and elastic</text>
    <text class="h" x="176" y="150">bone: hard and rigid</text>
    <text class="h" x="14" y="166">joint: bones connect here</text>
    <text class="t s" x="160" y="196">Adults: 206 bones · Babies: about 300 bones</text></svg>`,

  ear: `<svg class="fig" viewBox="0 0 340 220" role="img" aria-label="How we hear">${FLECHA("fe")}
    <path class="fl" d="M30,40 C70,20 85,70 70,95 C62,110 70,125 60,150 C50,175 25,165 30,140 C35,120 20,90 30,40 Z"/>
    <path class="ln" d="M68,92 L148,92 M68,112 L148,112"/>
    <path class="ac" marker-end="url(#fe)" d="M74,102 L138,102"/>
    <ellipse class="f3" cx="152" cy="102" rx="4" ry="14"/>
    <polyline class="ln" points="157,100 174,90 190,104 206,96"/>
    <path class="f3" d="M213,105 a22,22 0 1,1 44,0 a18,18 0 1,1 -36,0 a12,12 0 1,1 24,0 a6,6 0 1,1 -12,0"/>
    <path class="ln" d="M222,84 C214,60 240,52 242,82 M236,84 C238,62 262,62 252,90"/>
    <path class="ac" marker-end="url(#fe)" d="M258,108 C280,104 292,90 300,72"/>
    <text class="h" x="272" y="58">brain</text>
    <circle class="nm" cx="100" cy="78" r="9"/><text class="t n" x="100" y="82">1</text>
    <circle class="nm" cx="152" cy="72" r="9"/><text class="t n" x="152" y="76">2</text>
    <circle class="nm" cx="235" cy="132" r="9"/><text class="t n" x="235" y="136">3</text>
    <circle class="nm" cx="290" cy="108" r="9"/><text class="t n" x="290" y="112">4</text>
    <circle class="nm" cx="322" cy="54" r="9"/><text class="t n" x="322" y="58">5</text>
    <path class="ln" d="M150,118 L160,140"/><text class="s" x="146" y="152">eardrum</text>
    <path class="ln" d="M24,162 L24,168 L147,168 L147,162 M151,162 L151,168 L209,168 L209,162 M213,162 L213,168 L262,168 L262,162"/>
    <text class="t s" x="86" y="184">outer ear</text><text class="t s" x="180" y="184">middle ear</text><text class="t s" x="240" y="184">inner ear</text>
    <text class="t s" x="170" y="204">1 sound waves · 2 eardrum vibrates · 3 liquid moves</text>
    <text class="t s" x="170" y="218">4 information to the brain · 5 the brain reads it</text></svg>`,

  eye: `<svg class="fig" viewBox="0 0 340 215" role="img" aria-label="How we see">${FLECHA("fo")}
    <path class="ln" d="M40,120 L40,95"/><path class="fl" d="M24,95 L56,95 L40,60 Z"/>
    <path class="rayo" d="M40,62 L152,100 L240,130 M40,120 L152,100 L240,84"/>
    <circle class="ln" cx="200" cy="100" r="50"/>
    <path class="ret" d="M234,64 A50,50 0 0 1 234,136"/>
    <ellipse class="ojo" cx="152" cy="100" rx="4" ry="12"/>
    <path class="ln" d="M238,84 L238,94"/><path class="fl" d="M230,94 L246,94 L238,126 Z"/>
    <path class="ln" d="M166,62 L158,50 M159,69 L149,59 M154,77 L143,70"/>
    <path class="ac" marker-end="url(#fo)" d="M252,100 L296,100"/><text class="h" x="300" y="104">brain</text>
    <text class="s" x="108" y="44">eyelashes</text>
    <path class="ln" d="M150,114 L140,150"/><text class="s" x="118" y="164">pupil</text>
    <path class="ln" d="M244,134 L236,156"/><text class="h" x="200" y="170">retina</text><text class="s" x="200" y="184">upside-down image</text>
    <text class="t s" x="170" y="208">object → light → pupil → retina → brain</text></svg>`,

  nose: `<svg class="fig" viewBox="0 0 340 205" role="img" aria-label="Smell and taste">${FLECHA("fn")}
    <text class="h" x="10" y="20">SMELL</text>
    <path class="ln" d="M60,30 C60,60 30,95 25,110 C22,120 30,124 42,122 L72,122"/>
    <ellipse class="ojo" cx="48" cy="118" rx="8" ry="4"/>
    <path class="ac" marker-end="url(#fn)" d="M14,156 L40,128"/>
    <path class="nv" d="M64,104 C80,84 100,62 116,50"/>
    <ellipse class="fl" cx="136" cy="40" rx="26" ry="16"/><text class="t s" x="136" y="44">brain</text>
    <text class="s" x="50" y="146">nostrils</text>
    <text class="s" x="88" y="96">olfactory</text><text class="s" x="88" y="110">nerve</text>
    <text class="h" x="184" y="20">TASTE</text>
    <path class="f2" d="M200,150 C200,100 240,80 260,80 C280,80 320,100 320,150 Z"/>
    <g class="bud"><circle cx="230" cy="125" r="5"/><circle cx="250" cy="108" r="5"/><circle cx="272" cy="108" r="5"/><circle cx="292" cy="125" r="5"/><circle cx="246" cy="136" r="5"/><circle cx="278" cy="136" r="5"/><circle cx="262" cy="122" r="5"/></g>
    <path class="nv" d="M262,84 C262,70 270,60 280,52"/>
    <ellipse class="fl" cx="294" cy="40" rx="26" ry="16"/><text class="t s" x="294" y="44">brain</text>
    <text class="s" x="214" y="66">nerves</text>
    <path class="ln" d="M226,130 L214,166"/><text class="s" x="184" y="178">taste buds</text>
    <text class="t s" x="170" y="198">4 main tastes: sweet · salty · bitter · sour</text></svg>`,

  skin: `<svg class="fig" viewBox="0 0 340 210" role="img" aria-label="The skin and touch">${FLECHA("fs")}
    <rect class="fl" x="20" y="60" width="200" height="20"/>
    <rect class="f2" x="20" y="80" width="200" height="80"/>
    <path class="pelo" d="M90,150 L80,22"/><ellipse class="ojo" cx="90" cy="148" rx="6" ry="8"/>
    <path class="nv" d="M40,92 C70,112 100,82 130,102 C160,122 190,97 220,117"/>
    <path class="nv" d="M50,128 C90,140 140,118 220,130"/>
    <path class="ac" marker-end="url(#fs)" d="M224,122 L270,122"/><text class="h" x="276" y="126">brain</text>
    <text class="h" x="120" y="30">skin = organ of touch</text>
    <text class="s" x="120" y="46">the largest organ of the body</text>
    <path class="ln" d="M150,112 L170,170"/><text class="h" x="130" y="184">sensory nerves</text>
    <text class="t s" x="170" y="206">rough · smooth · hard · soft · too hot!</text></svg>`,

  past: `<svg class="fig" viewBox="0 0 300 190" role="img" aria-label="Past tense">
    <text class="t h" x="80" y="22">now</text><text class="t h" x="220" y="22">past</text>
    <path class="ln" d="M20,32 L280,32"/>
    <text class="t s" x="80" y="56">taste</text><text class="t" x="150" y="56">→</text><text class="t h" x="220" y="56">tasted</text>
    <text class="t s" x="80" y="82">feel</text><text class="t" x="150" y="82">→</text><text class="t h" x="220" y="82">felt</text>
    <text class="t s" x="80" y="108">see</text><text class="t" x="150" y="108">→</text><text class="t h" x="220" y="108">saw</text>
    <text class="t s" x="80" y="134">smell</text><text class="t" x="150" y="134">→</text><text class="t h" x="220" y="134">smelt</text>
    <text class="t s" x="80" y="160">sound</text><text class="t" x="150" y="160">→</text><text class="t h" x="220" y="160">sounded</text>
    <text class="t s" x="150" y="184">sense organs: eye, ear, nose, tongue, skin</text></svg>`,
};
