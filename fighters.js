// ============================================================
// DRAGONS — Fighter Roster Data
// Records start at 0-0; fill in as bouts are produced.
// Edit text between quotes; keep quotes and commas intact.
// ============================================================

const FIGHTERS = [
  {
    "id": "ruby-tan",
    "name": "Ruby Tan",
    "alias": "Little Red Dot",
    "nationality": "Singapore",
    "flag": "🇸🇬",
    "hometown": "Toa Payoh",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#d83a2e",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "ruby-tan.png",
    "gallery": [
      "ruby-tan-1.png",
      "ruby-tan-2.png",
      "ruby-tan-3.png"
    ],
    "bio": {
      "origin": "Ruby grew up above her family's coffeeshop in Toa Payoh, doing her homework to the hiss of the kopi machine. She found the gym at fourteen, mostly to escape the heat and the noise, and stayed because hitting pads was the only thing that made the world go quiet. She came up through Singapore's late-night gym circuit, drilling combinations long after the lights cut out.",
      "style": "She fights tall for a strawweight, counters off the back foot, and waits for the opening she knows is coming. Patient, precise, and sharp the moment she finds her range.",
      "personal": "Disciplined to a fault and quietly funny once you get past the focus. She refuels on kaya toast and kopi-o after every session and swears the soft-boiled eggs are part of her recovery. Keeps a tidy flat, a messy gym bag, and a long memory for anyone who underestimates her.",
      "rival": "Shares a city and a chip on her shoulder with Cheryl Ong — the two came up in rival eastside and central gyms, and the local press has been trying to book them against each other for a year.",
      "goal": "Wants to prove a Singaporean can headline the circuit, not just fill the card. The dream is a belt with the island's name spoken first."
    },
    "quotes": [
      "\"Patience is a weapon. Most people just never learn to hold it.\"",
      "\"I remember every name that wrote me off. All of them.\""
    ],
    "stats": {
      "age": "21",
      "height": "165 cm (5'5\")",
      "weight": "52 kg (115 lb)",
      "reach": "165 cm (65 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "cheryl-ong",
    "name": "Cheryl Ong",
    "alias": "Lionheart",
    "nationality": "Singapore",
    "flag": "🇸🇬",
    "hometown": "Bedok",
    "baseStyle": "Kickboxing",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#d83a2e",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "cheryl-ong.png",
    "gallery": [
      "cheryl-ong-1.png",
      "cheryl-ong-2.png",
      "cheryl-ong-3.png"
    ],
    "bio": {
      "origin": "Raised in a Bedok rental flat by a hawker mother who worked doubles, Cheryl learned early that nothing arrives unless you take it. She started in a void-deck wrestling club, then walked into a proper MMA gym at sixteen and refused to leave. Built her game on pure forward pressure because she never had the luxury of waiting.",
      "style": "She closes distance fast and makes every exchange a test of will, mixing takedowns with heavy hands. The crowd back home knows her as the one who refuses to take a backward step.",
      "personal": "Loud, warm, and stubborn, with a laugh you hear across the gym. Obsessed with chilli crab and char kway teow, and will fight you over whether the East Coast version is superior. Trains with her late mother's photo taped inside her locker.",
      "rival": "Has open, needling beef with Pei Yee — Cheryl thinks she's overrated. The feeling, by all accounts, is mutual.",
      "goal": "Fights to lift her family out of the rental flat for good, and to be the first name people think of when they say Singaporean MMA."
    },
    "quotes": [
      "\"I don't take steps back. Never learned how.\"",
      "\"You want to beat me? You'll have to do it going forward, because I am.\""
    ],
    "stats": {
      "age": "20",
      "height": "168 cm (5'6\")",
      "weight": "53 kg (116 lb)",
      "reach": "165 cm (65 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "jasmine-rahma",
    "name": "Jasmine Rahma",
    "alias": "Redline",
    "nationality": "Singapore",
    "flag": "🇸🇬",
    "hometown": "Geylang",
    "baseStyle": "Muay Thai",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#d83a2e",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "jasmine-rahma.png",
    "gallery": [
      "jasmine-rahma-1.png",
      "jasmine-rahma-2.png",
      "jasmine-rahma-3.png"
    ],
    "bio": {
      "origin": "Jasmine grew up in Geylang, one of Singapore's grittiest neighbourhoods, the daughter of a Malay hawker family who never imagined a fighter in the house. She walked into a Muay Thai gym at sixteen to lose weight and walked out with a purpose. The only Malay fighter on a Chinese-dominated Singaporean roster, she carries that distinction like armour.",
      "style": "A Muay Thai stylist with sharp elbows and a relentless clinch game built on natural strength and a low centre of gravity. She pressures forward, cuts angles, and makes opponents fight her fight — close, dirty, and exhausting. The Redline name is for how far she pushes, and how far past comfortable she drags everyone else.",
      "personal": "Fierce, direct, and unapologetically loud. She code-switches between Malay and English mid-sentence and treats every slight as fuel. Lives on her mother's nasi padang and a competitive streak that runs deeper than the sport. The first one to call out disrespect and the last one to let it go.",
      "rival": "Sees herself as the outsider within Singapore's contingent — the Malay kid in a Chinese-dominated scene — and channels that chip into every bout. Eyes Ruby Tan as the standard-bearer she intends to replace.",
      "goal": "Fights to prove Geylang produces champions, and to be the first Malay name Singaporeans think of when they think of fighting."
    },
    "quotes": [
      "\"Aku dilahirkan untuk langgar garisan.\" (I'm born to cross the line.)",
      "\"They see Geylang. I see home. There's a difference.\""
    ],
    "stats": {
      "age": "21",
      "height": "168 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "168 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "mandy-koh",
    "name": "Mandy Koh",
    "alias": "Cotton Candy",
    "nationality": "Singapore",
    "flag": "🇸🇬",
    "hometown": "Jurong",
    "baseStyle": "Boxing",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#d83a2e",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "mandy-koh.png",
    "gallery": [
      "mandy-koh-1.png",
      "mandy-koh-2.png",
      "mandy-koh-3.png"
    ],
    "bio": {
      "origin": "Mandy came out of Jurong, the kid sister in a family of four brothers who learned to scrap before she learned to back down. She followed one of her brothers into a boxing gym at thirteen and discovered she was the only Koh with real timing. The brothers gave up. She didn't.",
      "style": "Deceptively sweet-faced and all venom once the bell goes, she swarms behind fast hands and cuts angles her opponents don't see coming. A boxer who fights shorter than her reach and makes everyone pay for assuming she's soft. Her looks have fooled exactly one opponent each.",
      "personal": "Bubbly, chatty, and impossible to rattle, she earned the name Cotton Candy for the pink in her hair and the sugar she runs on. Inhales bubble tea by the litre and keeps a plushie in her gym bag she swears is non-negotiable. The locker room's mood-lifter.",
      "rival": "Looks up to the established Singaporeans with open admiration that needles them — she keeps telling Ruby Tan and Cheryl Ong she'll take their spot, grinning the whole time, which neither finds as charming as she does.",
      "goal": "Wants to prove the cheerful one can be the most dangerous on the card, and to headline a hometown show with her brothers in the front row."
    },
    "quotes": [
      "\"Everyone underestimates the smiley one. Once.\"",
      "\"I'm gonna take Ruby's spot. Tell her I said it nicely!\""
    ],
    "stats": {
      "age": "21",
      "height": "166 cm (5'5\")",
      "weight": "52 kg (115 lb)",
      "reach": "166 cm (65 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "jessica-wong",
    "name": "Jessica Wong",
    "alias": "Die Die",
    "nationality": "Singapore",
    "flag": "🇸🇬",
    "hometown": "Ang Mo Kio",
    "baseStyle": "Muay Thai",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#d83a2e",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "jessica-goh.png",
    "gallery": [
      "jessica-goh-1.png",
      "jessica-goh-2.png",
      "jessica-goh-3.png",
      "jessica-goh-4.png"
    ],
    "bio": {
      "origin": "Jessica grew up in a strict household in Ang Mo Kio, the daughter of a doctor who expected a doctor in return. She took up Muay Thai in secret during junior college, fell in love with the discipline of it, and chose the ring over medical school in a decision her family is still negotiating.",
      "style": "Clean, economical, and textbook to a fault, she fights like she's being graded. Sharp teeps, tidy combinations, nothing wasted. They call her Clean Cut for the precision and the composure.",
      "personal": "Reserved and exacting, she colour-codes her gear and treats every camp like an exam. Breaks her own rules only for chicken rice, which she insists is a recovery food. Speaks little, watches everything.",
      "rival": "Runs cool toward the roster's brawlers and finds Mandy Koh's chaos faintly offensive, setting up a quiet order-versus-disorder tension between the two Singaporeans.",
      "goal": "Fights to prove she made the right call walking away from medicine, and to win clean enough that even her parents can't argue with the result."
    },
    "quotes": [
      "\"My parents wanted a surgeon. They got someone who works clean anyway.\"",
      "\"There's a right way to do everything. I do it the right way.\""
    ],
    "stats": {
      "age": "21",
      "height": "168 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "168 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "amanda-lee",
    "name": "Amanda Lee",
    "alias": "Dollhouse",
    "nationality": "Singapore",
    "flag": "🇸🇬",
    "hometown": "Woodlands",
    "baseStyle": "Boxing",
    "ruleset": "Street Fighting",
    "division": "Strawweight",
    "color": "#d83a2e",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "amanda-lee.png",
    "gallery": [
      "amanda-lee-1.png",
      "amanda-lee-2.png",
      "amanda-lee-3.png",
      "amanda-lee-4.png"
    ],
    "bio": {
      "origin": "The youngest fighter on the roster, Amanda came up boxing in a no-frills gym in Woodlands after a rough stretch in school left her looking for somewhere to put the anger. A trainer who saw something in her stubbornness kept her coming back. She turned a chip on her shoulder into a left hook.",
      "style": "Boxing-based but happy to throw the rulebook out under street-fight rules, she's a pressure brawler who keeps coming. Small, young, and absolutely unbothered by who's across from her.",
      "personal": "Quiet menace with a baby face — the Dollhouse name started as a joke about her looks and stuck once people saw what she did with them. Plays mobile games between rounds of warmups and pretends she isn't nervous.",
      "rival": "Too new to have made enemies, but her refusal to show respect in face-offs has already annoyed a few of the veterans who think she needs to earn it first.",
      "goal": "Fights to outrun where she came from, and to be the youngest name the circuit ever puts in a main event."
    },
    "quotes": [
      "\"I'm not here to be liked. I'm here to leave.\"",
      "\"Baby face, bad intentions. Both real.\""
    ],
    "stats": {
      "age": "20",
      "height": "167 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "167 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "alina-bek",
    "name": "Alina Bek",
    "alias": "Mighty Falcon",
    "nationality": "Kazakhstan",
    "flag": "🇰🇿",
    "hometown": "Almaty",
    "baseStyle": "Sambo",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#3a7bc8",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "alina-bek.png",
    "gallery": [
      "alina-bek-1.png",
      "alina-bek-2.png"
    ],
    "bio": {
      "origin": "Alina learned to fight on the open plains outside Almaty, where her grandfather trained eagles and taught her that patience and timing win more than speed. She wrestled boys at the village school until they stopped volunteering, then took the long bus into the city to find a real gym.",
      "style": "Rangy and cold-eyed, she moves with her full body and answers in straight lines. Calm under pressure, faster than she looks.",
      "personal": "Spare with words, dry with humour, and fiercely homesick. Carries a small falcon feather in her wraps for luck and eats beshbarmak before every long trip. Speaks four languages and chooses to use none of them in the cage.",
      "rival": "Keeps to herself and lets her record speak, though an offhand comment about 'soft city fighters' early on raised a few eyebrows in the locker room.",
      "goal": "Fights to put Kazakhstan on a map most fans can't find, and to send every purse home to the family farm."
    },
    "quotes": [
      "\"Менің атам бүркіт баптады. Мен шыдамдылықты содан үйрендім.\" (My grandfather trained eagles. That is where I learned patience.)",
      "\"I speak four languages. In the cage I use none of them.\""
    ],
    "stats": {
      "age": "22",
      "height": "175 cm (5'9\")",
      "weight": "53.5 kg (118 lb)",
      "reach": "178 cm (70 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "ainur-nazar",
    "name": "Ainur Nazarbayeva",
    "alias": "Golden Fleece",
    "nationality": "Kazakhstan",
    "flag": "🇰🇿",
    "hometown": "Shymkent",
    "baseStyle": "Kazakh Kuresh",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#3a7bc8",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "ainur-nazar.png",
    "gallery": [
      "ainur-nazar-1.png",
      "ainur-nazar-2.png",
      "ainur-nazar-3.png",
      "ainur-nazar-4.png"
    ],
    "bio": {
      "origin": "Ainur grew up in the markets of Shymkent, the daughter of a man who competed in Kazakh Kuresh at every village festival. She was wrestling before she was ten — belt grabs on concrete, throws with no mat. The instinct was always there; the structure came when a coach formalised what the market had already built and channelled it into MMA.",
      "style": "She closes distance fast and drags the fight into the clinch where her Kazakh Kuresh grip work takes over. Belt-grab throws, off-balance takedowns, and a ground-and-pound that arrives before opponents have processed the trip. The rough edges are still there — she just has a tradition behind them now.",
      "personal": "Fierce and loyal, with a loud laugh and a short fuse outside the cage. Lives on horse-meat sausage her family sends and refuses to apologise for the smell in the gym fridge. Wears a gold thread bracelet her grandmother tied on her and never removes it.",
      "rival": "Has a needling rapport with her compatriot Alina Bek — Ainur thinks Alina's cold precision is overrated and that the steppe's real fighters come up scrapping, like she did.",
      "goal": "Fights to drag her whole family up with her, and to prove the market kid can stand with the medal winners."
    },
    "quotes": [
      "\"Базарда өскен бала қорқуды білмейді.\" (A kid raised in the market does not know fear.)",
      "\"Alina is cold. Cold breaks. I do not.\""
    ],
    "stats": {
      "age": "21",
      "height": "170 cm (5'7\")",
      "weight": "52 kg (115 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "safiya-aronov",
    "name": "Safiya Aronov",
    "alias": "Snow Leopard",
    "nationality": "Kazakhstan",
    "flag": "🇰🇿",
    "hometown": "Almaty Region",
    "baseStyle": "Kickboxing",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#3a7bc8",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "safiya-aronov.png",
    "gallery": [
      "safiya-aronov-1.png",
      "safiya-aronov-2.png",
      "safiya-aronov-3.png",
      "safiya-aronov-4.png"
    ],
    "bio": {
      "origin": "Safiya came from a mountain village near the Kyrgyz border, the quiet one who learned to fight from older cousins and a stubborn streak. She made the long move to the city alone at seventeen, slept in the gym she trained at, and earned her spot the hardest way there is.",
      "style": "Patient and powerful, she works behind a long jab and lets opponents burn themselves out chasing her before she steps in. Her combinations are unhurried and land heavy — a kickboxer who fights like she has all the time in the world, until she doesn't.",
      "personal": "Calm, watchful, and self-contained, she speaks softly and means everything she says. Drinks endless cups of black tea and keeps a photo of her village taped inside her locker. The kind of quiet that makes people behave.",
      "rival": "Stays out of the Ainur–Alina noise between the Kazakh fighters, regarding both as too busy talking, which is its own kind of provocation in a three-way standoff.",
      "goal": "Fights to build a home her parents never had, and to show the mountain villages produce fighters the cities should fear."
    },
    "quotes": [
      "\"Тауда өскендер қаладан қорықпайды.\" (Those raised in the mountains do not fear the city.)",
      "\"Let them talk. I will be there at the end.\""
    ],
    "stats": {
      "age": "21",
      "height": "170 cm (5'7\")",
      "weight": "52 kg (115 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "saki-mori",
    "name": "Saki Mori",
    "alias": "Divine Wind",
    "nationality": "Japan",
    "flag": "🇯🇵",
    "hometown": "Osaka",
    "baseStyle": "Karate",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c0263a",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "saki-mori.png",
    "gallery": [
      "saki-mori-1.png",
      "saki-mori-2.png",
      "saki-mori-3.png"
    ],
    "bio": {
      "origin": "Saki grew up in a working-class corner of Osaka, the youngest of four and the only one who fought back when the neighbourhood kids picked on the family. A retired kickboxer who ran the local gym saw her temper and taught her to aim it. She kept her bob blunt so nothing gets in her eyes, and never looked back.",
      "style": "A relentless pressure fighter who lives on volume and head movement, walking opponents toward the ropes round after round. She treats every exchange like a puzzle to solve.",
      "personal": "Polite to the point of formality outside the ring, ferocious inside it. Lives on convenience-store onigiri and a vending-machine coffee superstition she refuses to explain. Studies tape obsessively and bows to opponents she's just dismantled.",
      "rival": "Holds quiet professional respect for Yuna Seo and treats their potential bout as the one that actually matters — a Japan–Korea striking duel both fighters pretend they aren't thinking about.",
      "goal": "Wants to honour the coach who gave her a direction, and to be remembered as the most technical striker the circuit ever produced."
    },
    "quotes": [
      "\"礼を尽くして、そして倒す。\" (Show full respect — then defeat them.)",
      "\"My coach gave me a direction. I owe him a masterpiece.\""
    ],
    "stats": {
      "age": "21",
      "height": "165 cm (5'5\")",
      "weight": "52 kg (115 lb)",
      "reach": "165 cm (65 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "kaeda-mizuno",
    "name": "Kaede Mizuno",
    "alias": "Silken Blade",
    "nationality": "Japan",
    "flag": "🇯🇵",
    "hometown": "Nagoya",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c0263a",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "kaeda-mizuno.png",
    "gallery": [
      "kaeda-mizuno-1.png",
      "kaeda-mizuno-2.png",
      "kaeda-mizuno-3.png",
      "kaeda-mizuno-4.png",
      "kaeda-mizuno-5.png"
    ],
    "bio": {
      "origin": "Kaede trained at a famed kickboxing gym in Nagoya from the age of ten, a prodigy groomed for the sport who never knew another life. She turned professional young and carries the polish of a fighter who has done ten thousand clean rounds before most of the roster threw their first.",
      "style": "Elegant, fluid, and razor-precise, she fights like calligraphy — every strike deliberate, nothing rushed. The Silken Blade name fits the way her violence looks effortless.",
      "personal": "Graceful and a little shy, she practises tea ceremony to steady her nerves and folds origami in the locker room before fights. Devoted to her grandmother's miso and to a strict, almost monastic routine.",
      "rival": "Holds polite, distant respect for her compatriot Saki Mori, though their contrasting styles — Saki's pressure against Kaede's precision — make an all-Japanese bout the fans keep asking for.",
      "goal": "Fights to honour the gym that raised her, and to prove that beauty and brutality are the same discipline done right."
    },
    "quotes": [
      "\"美しさと残酷さは、正しく行えば同じものです。\" (Beauty and brutality are the same thing done right.)",
      "\"I have thrown ten thousand clean rounds. You have not.\""
    ],
    "stats": {
      "age": "19",
      "height": "167 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "167 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "honoka-sato",
    "name": "Honoka Sato",
    "alias": "Katana",
    "nationality": "Japan",
    "flag": "🇯🇵",
    "hometown": "Tokyo",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c0263a",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "honoka-sato.png",
    "gallery": [
      "honoka-sato-1.png",
      "honoka-sato-2.png",
      "honoka-sato-3.png",
      "honoka-sato-4.png",
      "honoka-sato-5.png"
    ],
    "bio": {
      "origin": "Honoka came up in a tough Tokyo kickboxing gym, a shy kid who found that the ring was the one place she could be loud. She turned professional quietly and built a record on relentless, unglamorous pressure.",
      "style": "A high-output volume striker, she walks opponents down and buries them under combinations, trusting her conditioning to outlast anyone. Workmanlike and exhausting to face.",
      "personal": "Soft-spoken and polite outside the ring, transformed inside it. Runs on convenience-store onigiri and a strict, almost superstitious routine. Bows to opponents she's just overwhelmed.",
      "rival": "Came up admiring Saki Mori and now finds herself measured against both Saki and Kaede Mizuno — the newest entry in Japan's deepening striking rivalry, eager to prove she belongs in that conversation.",
      "goal": "Fights to turn the quiet kid into a name people respect, and to stand among Japan's best on the circuit."
    },
    "quotes": [
      "\"静かな子が一番怖い。\" (The quiet one is the scariest.)",
      "\"I don't stop coming. Ever.\""
    ],
    "stats": {
      "age": "20",
      "height": "166 cm (5'5\")",
      "weight": "54 kg (119 lb)",
      "reach": "166 cm (65 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "nong-pim",
    "name": "Nong Pim",
    "alias": "Mae Nam",
    "nationality": "Thailand",
    "flag": "🇹🇭",
    "hometown": "Surin",
    "baseStyle": "Muay Thai",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#d4a528",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "nong-pim.png",
    "gallery": [
      "nong-pim-1.png",
      "nong-pim-2.png",
      "nong-pim-3.png"
    ],
    "bio": {
      "origin": "Pim took her first fight at nine, in a ring strung up at a temple fair in Surin, for an envelope of cash that fed her family that week. She trained in the stadium tradition before crossing into mixed rules, carrying a lifetime of rounds in her body before she ever turned twenty.",
      "style": "Clinch-deadly and endlessly conditioned, she thrives in close, turning the clinch into a slow grind that wears opponents down. When the knee lands, the round usually ends.",
      "personal": "Gentle and devout outside the ring, she wais her opponents and means it. Misses her mother's som tam so badly she makes her own, too spicy for anyone else in the gym. Wears a faded mongkon from her first trainer as a reminder of where the road started.",
      "rival": "Has nothing personal with anyone on the roster yet — she lets her clinch do the talking and figures the rivalries will find her soon enough.",
      "goal": "Fights to build a gym back home where kids fight for trophies instead of envelopes, so no nine-year-old has to carry what she did."
    },
    "quotes": [
      "\"ฉันสู้ตั้งแต่เก้าขวบ เพื่อข้าวมื้อหนึ่ง\" (I fought from age nine, for a single meal.)",
      "\"No child should carry what I carried. I fight to change that.\""
    ],
    "stats": {
      "age": "20",
      "height": "168 cm (5'6\")",
      "weight": "52 kg (115 lb)",
      "reach": "163 cm (64 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "kanyarat-srisuk",
    "name": "Kanyarat Srisuk",
    "alias": "Phaya Suea",
    "nationality": "Thailand",
    "flag": "🇹🇭",
    "hometown": "Chiang Mai",
    "baseStyle": "Muay Thai",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#d4a528",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "kanyarat-srisuk.png",
    "gallery": [
      "kanyarat-srisuk-1.png",
      "kanyarat-srisuk-2.png",
      "kanyarat-srisuk-3.png",
      "kanyarat-srisuk-4.png",
      "kanyarat-srisuk-5.png"
    ],
    "bio": {
      "origin": "Kanyarat came up in a Muay Thai camp outside Chiang Mai, the daughter of a former fighter who put her in the ring as soon as she could stand. She has known nothing but the art her whole life and wears its traditions with a pride that runs deeper than sport.",
      "style": "A pure Muay Thai stylist, she fights long and patient, picking opponents apart with teeps and elbows before the clinch closes the show. Serene until she isn't.",
      "personal": "Devout and gracious, she performs the wai khru before every bout and means every motion of it. Grows her own chillies for her som tam and rates a gym by its mango sticky rice. The Lotus name comes from her stillness under fire.",
      "rival": "Shares the Thai tradition with Nong Pim but sees Pim's crossover into mixed rules as drifting from the art, a quiet philosophical split between the two Thais about what the fight is for.",
      "goal": "Fights to carry Muay Thai's honour onto a global stage, and to win in a way that would make her father's old camp proud."
    },
    "quotes": [
      "\"มวยไทยคือเกียรติ ไม่ใช่แค่กีฬา\" (Muay Thai is honour, not just sport.)",
      "\"I am calm until I am not. Then it is already over.\""
    ],
    "stats": {
      "age": "20",
      "height": "170 cm (5'7\")",
      "weight": "52 kg (115 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "jhut-chirathivat",
    "name": "Jhut Chirathivat",
    "alias": "Washboard",
    "nationality": "Thailand",
    "flag": "🇹🇭",
    "hometown": "Bangkok",
    "baseStyle": "Muay Thai",
    "ruleset": "Muay Thai",
    "division": "Strawweight",
    "color": "#d4a528",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "jhut-chirathivat.png",
    "gallery": [
      "jhut-chirathivat-1.png",
      "jhut-chirathivat-2.png",
      "jhut-chirathivat-3.png",
      "jhut-chirathivat-4.png",
      "jhut-chirathivat-5.png"
    ],
    "bio": {
      "origin": "Jhut came off the Bangkok stadium circuit, a Muay Thai fighter from a fighting family with American roots — her father trained in California before returning to Thailand. She grew up between two worlds, absorbing American aggression into Thai technique, and crossed into mixed rules chasing bigger purses and harder tests. She brings a lifetime of stadium rounds and a streak of Western chaos into every bout.",
      "style": "Clinch-dominant and ferociously conditioned, she turns close range into a slow execution with knees and elbows, then mixes in modern grappling. Patient, brutal, built for deep water.",
      "personal": "Devout and gracious, she wais her opponents and means it, then dismantles them. Misses her family's boat-noodle stall and the noise of the Bangkok gyms. Wears a worn mongkon from her first trainer.",
      "rival": "Sees the circuit's other Thais — Nong Pim and the purist Kanyarat Srisuk — as both kin and competition, a three-way over who truly represents Thai fighting in the mixed-rules era.",
      "goal": "Fights to lift her family out of the stall-and-stadium grind, and to prove the Thai clinch beats everything the rest of the world brings."
    },
    "quotes": [
      "\"ผมไหว้คุณก่อน แล้วค่อยจัดการ\" (I wai you first. Then I go to work.)",
      "\"The clinch is where the world drowns.\""
    ],
    "stats": {
      "age": "21",
      "height": "173 cm (5'8\")",
      "weight": "54 kg (119 lb)",
      "reach": "173 cm (68 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "emma-zandberg",
    "name": "Emma Zandberg",
    "alias": "Judgement",
    "nationality": "Thailand",
    "flag": "🇹🇭",
    "hometown": "Amsterdam",
    "baseStyle": "Muay Thai",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#d4a528",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "emma-zandberg.png",
    "gallery": [
      "emma-zandberg-1.png",
      "emma-zandberg-2.png",
      "emma-zandberg-3.png",
      "emma-zandberg-4.png",
      "emma-zandberg-5.png"
    ],
    "bio": {
      "origin": "Born in Amsterdam to a Dutch father and Thai mother, Emma split her childhood between the Netherlands and Thailand, learning Muay Thai during long summers at her mother's family gym near Chiang Mai. She carries a Dutch passport and a Thai heart, and chose the circuit to prove the fusion is stronger than either half alone.",
      "style": "Tall and technical, she boxes at range with a Dutch kickboxer's combinations, then turns brutal in the clinch with her Thai roots. The most complete striker among the newcomers.",
      "personal": "Easygoing and worldly, she switches between three languages mid-sentence and misses stroopwafels and her mother's khao soi in equal measure. Calm to the point of unsettling before a fight.",
      "rival": "Her Dutch-Thai Muay Thai stirs quiet friction with the circuit's purist Thai fighters — Kanyarat Srisuk especially views Emma's hybrid style as a dilution of the art, a clash of tradition versus fusion.",
      "goal": "Fights to honour both halves of where she's from, and to prove the fused style beats the purists at their own game."
    },
    "quotes": [
      "\"Twee landen, één stijl.\" (Two countries, one style.)",
      "\"The purists can keep their tradition. I'll keep winning.\""
    ],
    "stats": {
      "age": "21",
      "height": "170 cm (5'7\")",
      "weight": "53 kg (117 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "yuna-seo",
    "name": "Yuna Seo",
    "alias": "White Tigress",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Busan",
    "baseStyle": "Taekwondo",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "yuna-seo.png",
    "gallery": [
      "yuna-seo-1.png",
      "yuna-seo-2.png",
      "yuna-seo-3.png"
    ],
    "bio": {
      "origin": "Yuna came out of a national taekwondo program in Busan, a medal prospect who walked away from the Olympic track when the amateur circuit stopped paying and the structure stopped fitting. She brought a lead leg nobody has quite solved into the harder, looser world of the circuit.",
      "style": "Tall and sniping, she controls distance like a metronome and picks her moments with eerie calm. Composed, clinical, and always a step ahead on range.",
      "personal": "Precise and image-conscious, she treats fighting like performance and arrives at every venue dressed like she owns it. Runs on bibimbap and black coffee and an iron pre-fight playlist. Coldly charming in interviews, genuinely warm only with the few she trusts.",
      "rival": "Circles Saki Mori as the measuring stick she most wants to break — a Japan–Korea striking duel both fighters quietly think about.",
      "goal": "Wants the kind of fame the medals never gave her, and to be the face the circuit puts on its posters."
    },
    "quotes": [
      "\"메달은 날 유명하게 만들어주지 않았어. 이게 할 거야.\" (The medals never made me famous. This will.)",
      "\"Saki is the one I want. We both know it.\""
    ],
    "stats": {
      "age": "21",
      "height": "175 cm (5'9\")",
      "weight": "53 kg (117 lb)",
      "reach": "175 cm (69 in)",
      "stance": "Switch",
      "debut": "2026"
    }
  },
  {
    "id": "jia-park",
    "name": "Jia Park",
    "alias": "Universal",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Incheon",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "jia-park.png",
    "gallery": [
      "jia-park-1.png",
      "jia-park-2.png",
      "jia-park-3.png",
      "jia-park-4.png"
    ],
    "bio": {
      "origin": "Jia grew up in Incheon splitting time between a kickboxing gym and a dance studio, and never fully chose between them. The footwork that makes her dangerous came from both. She turned to fighting full-time when she realised the cage gave her nerves somewhere to go.",
      "style": "Versatile and rhythmic, she flows between ranges and angles, as comfortable countering as leading. The Universal name is for a game with no obvious holes.",
      "personal": "Upbeat and expressive, she choreographs her own walkouts and treats fight week like a performance. Runs on tteokbokki and pop playlists and films everything for fans back home. Warmer than the average fighter, sharper than she looks.",
      "rival": "Friendly with her compatriots Yuna Seo and Hana Jung but quietly ambitious to surpass both, making the Korean contingent a three-way of smiles and unspoken pecking order.",
      "goal": "Fights to turn the circuit into a stage, and to prove the all-rounder beats the specialist when it counts."
    },
    "quotes": [
      "\"난 무대를 위해 싸워. 케이지가 내 무대야.\" (I fight for the stage. The cage is mine.)",
      "\"All-rounder beats specialist. Watch.\""
    ],
    "stats": {
      "age": "21",
      "height": "175 cm (5'9\")",
      "weight": "53 kg (117 lb)",
      "reach": "175 cm (69 in)",
      "stance": "Switch",
      "debut": "2026"
    }
  },
  {
    "id": "hana-jung",
    "name": "Hana Jung",
    "alias": "Seolla",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Seoul",
    "baseStyle": "Ssireum",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "hana-jung.png",
    "gallery": [
      "hana-jung-1.png",
      "hana-jung-2.png",
      "hana-jung-3.png"
    ],
    "bio": {
      "origin": "Hana grew up watching her grandfather compete in ssireum tournaments on the Han River banks, a childhood spent learning that the belt grab is not a beginning — it is the whole conversation. She trained through university, twice regional champion in the amateur circuit, before deciding that MMA was the only arena large enough for what ssireum had built in her.",
      "style": "She fights from the clinch inward, neutralising distance before opponents have registered the contact. Her throws are clean and economical — no telegraphing, no wind-up, just a pivot and sudden floor. Opponents who expect a grappler's patience get a finisher's timing instead.",
      "personal": "Introverted and watchful, she journals after every session and barely speaks before a fight. Lives on convenience-store gimbap and herbal tea, and disappears into the mountains alone between camps. Her calm reads as arrogance to people who don't know her; it's actually focus.",
      "rival": "Keeps a respectful distance from her louder compatriot Yuna Seo, privately certain that a ssireum game built on closing distance would dismantle Yuna's Taekwondo the moment they clinch — a contrast of Korean traditions the fans have already started debating.",
      "goal": "Wants to prove that ssireum belongs in a modern cage, not as a curiosity but as a finishing system — and that her grandfather's sport can produce a champion."
    },
    "quotes": [
      "\"할아버지가 가르쳐줬어 — 잡으면 끝이야.\" (My grandfather taught me — once you grip, it's over.)",
      "\"Yuna performs. I throw people.\""
    ],
    "stats": {
      "age": "22",
      "height": "173 cm (5'8\")",
      "weight": "52.5 kg (116 lb)",
      "reach": "173 cm (68 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "li-wei",
    "name": "Li Wei Xin",
    "alias": "Jade Fist",
    "nationality": "China",
    "flag": "🇨🇳",
    "hometown": "Chengdu",
    "baseStyle": "Sanda",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1f9e6b",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "li-wei.png",
    "gallery": [
      "li-wei-1.png",
      "li-wei-2.png",
      "li-wei-3.png",
      "li-wei-4.png"
    ],
    "bio": {
      "origin": "Li Wei rose through the mainland Sanda circuit in Chengdu, a sports-school product drilled in discipline from childhood who blended that foundation with crisp boxing once she went professional. She came up on sharp footwork and a finishing instinct that the rigid amateur system never quite contained.",
      "style": "Sanda-trained and explosive, she blends crisp boxing with sweeping kicks that come from unexpected angles. Aggressive, precise, and built to pressure.",
      "personal": "Driven and meticulous, she keeps a training log going back eight years and treats rest days as a personal insult. Craves her grandmother's mapo tofu and video-calls home after every win. Reserved with strangers, fiercely loyal once you're in.",
      "rival": "Regards the circuit's freer, scrappier fighters — Mei-Lin Kuo especially — as undisciplined, a stance loaded with more than a little cross-strait edge.",
      "goal": "Wants to prove the Sanda system produces the world's most complete strikers, and to carry that flag further than anyone before her."
    },
    "quotes": [
      "\"散打培养出最全面的格斗者。我来证明。\" (Sanda produces the most complete fighters. I will prove it.)",
      "\"Discipline beats chaos. Every time.\""
    ],
    "stats": {
      "age": "20",
      "height": "167 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "167 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "ying-ying",
    "name": "Ying Ying Li",
    "alias": "Porcelain",
    "nationality": "China",
    "flag": "🇨🇳",
    "hometown": "Shanghai",
    "baseStyle": "Wing Chun",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1f9e6b",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "ying-ying.png",
    "gallery": [
      "ying-ying-1.png",
      "ying-ying-2.png",
      "ying-ying-3.png",
      "ying-ying-4.png"
    ],
    "bio": {
      "origin": "Ying Ying came up in the Shanghai sport-school system, a disciplined product of state athletics who chose the harder, freer world of the circuit over a safe coaching post. She drilled kickboxing fundamentals until they were reflex, then went looking for opponents who'd actually hit back.",
      "style": "Centered and relentless, she fights from a square Wing Chun stance, hands forward on the centerline, trapping and deflecting before unleashing rapid chain punches up the middle. She closes distance by smothering attacks rather than dodging them, turning every exchange into her range — chest-to-chest, where her hands are fastest and her control is absolute.",
      "personal": "Reserved and meticulous, she keeps a spotless training log and treats every detail as solvable. Lives on her grandmother's congee and a quiet competitive streak she hides behind good manners. Warm only once you're past the formality.",
      "rival": "Eyes her louder compatriots Li Wei and Shīhán Chen as the measure of who really represents China on the circuit — a three-way of national pride conducted mostly in cold silence.",
      "goal": "Fights to prove the system produced more than a technician, and to carry China's flag deeper into the circuit than anyone before her."
    },
    "quotes": [
      "\"体系造就了我，但没有定义我。\" (The system made me, but it didn't define me.)",
      "\"Let them shout. I'll let my jab answer.\""
    ],
    "stats": {
      "age": "22",
      "height": "173 cm (5'8\")",
      "weight": "55 kg (121 lb)",
      "reach": "173 cm (68 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "shihan-chen",
    "name": "Shīhán Chen",
    "alias": "Firecracker",
    "nationality": "China",
    "flag": "🇨🇳",
    "hometown": "Beijing",
    "baseStyle": "Boxing",
    "ruleset": "Street Fighting",
    "division": "Strawweight",
    "color": "#1f9e6b",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "shīhán-chen.png",
    "gallery": [
      "shīhán-chen-1.png",
      "shīhán-chen-2.png",
      "shīhán-chen-3.png",
      "shīhán-chen-4.png"
    ],
    "bio": {
      "origin": "Shīhán grew up in a Chongqing wushu academy, a sanda standout who turned professional young and brought a flashy, aggressive edge the rigid amateur world couldn't hold. She fights with something to prove and rarely hides it.",
      "style": "Explosive and unorthodox, she blends sanda sweeps and spinning attacks with sharp hands, attacking from angles opponents don't expect. High risk, high finish rate.",
      "personal": "Brash, funny, and chronically online, she narrates her own highlight reels and dyes a streak of colour to match her fight kit. Lives on hotpot and adrenaline. Hides real nerves behind the swagger.",
      "rival": "Trades open barbs with the more reserved Ying Ying Li over who speaks for Chinese fighting, and circles Li Wei as the established name she most wants to dethrone.",
      "goal": "Fights to be the loudest, most-watched name on the circuit, and to prove the academy kid the system called undisciplined was right all along."
    },
    "quotes": [
      "\"他们说我太张扬。看好了。\" (They said I'm too flashy. Watch this.)",
      "\"Ying Ying boxes. I finish.\""
    ],
    "stats": {
      "age": "19",
      "height": "170 cm (5'7\")",
      "weight": "54 kg (119 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "vanessa-chow",
    "name": "Vanessa Chow",
    "alias": "Kowloon KO",
    "nationality": "Hong Kong",
    "flag": "🇭🇰",
    "hometown": "Sham Shui Po",
    "baseStyle": "Judo",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#d84a8c",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "vanessa-chow.png",
    "gallery": [
      "vanessa-chow-1.png",
      "vanessa-chow-2.png",
      "vanessa-chow-3.png"
    ],
    "bio": {
      "origin": "Vanessa learned to fight in the cramped gyms above Kowloon's markets, a restless kid from a Sham Shui Po housing estate who skipped cram school to spar. She fights bright and fast, all flurries and angles, the most kinetic striker on the roster.",
      "style": "A Judo player disguised as a striker, she lures opponents into exchanges then grabs and throws. Her hip throws and foot sweeps land before opponents realise the distance has changed, and once they hit the canvas she pins with suffocating top pressure. Flash on the outside, grind underneath.",
      "personal": "Fast-talking, sharp-dressed, and perpetually online, she treats the city's neon as her personal aesthetic. Lives on milk tea and pineapple buns from the same cha chaan teng she's gone to since she was eight. Hides real nerves behind constant motion and jokes.",
      "rival": "Hasn't picked a real fight outside the cage yet, though her constant online noise has started to irritate the quieter fighters on the roster.",
      "goal": "Fights to give her city something loud to cheer for, and secretly to outlast the doubt that she's all flash and no finish."
    },
    "quotes": [
      "\"My city is loud. So am I.\"",
      "\"Flash and finish. People forget I have both.\""
    ],
    "stats": {
      "age": "21",
      "height": "171 cm (5'7\")",
      "weight": "55 kg (121 lb)",
      "reach": "171 cm (67 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "mei-lin-kuo",
    "name": "Mei-Lin Kuo",
    "alias": "Formosa Storm",
    "nationality": "Taiwan",
    "flag": "🇹🇼",
    "hometown": "Kaohsiung",
    "baseStyle": "Shuai Jiao",
    "ruleset": "Street Fight",
    "division": "Strawweight",
    "color": "#6b4ad8",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "mei-lin-kuo.png",
    "gallery": [
      "mei-lin-kuo-1.png",
      "mei-lin-kuo-2.png",
      "mei-lin-kuo-3.png"
    ],
    "bio": {
      "origin": "Mei-Lin came up scrapping outside the structured gyms of Kaohsiung, a night-market kid who turned raw aggression into something controlled only after a string of bad decisions nearly ended her. She fights in bursts that overwhelm, then resets and does it again — unorthodox, relentless, impossible to prepare for cleanly.",
      "style": "A Shuai Jiao specialist who fights in the clinch, using jacket grips, trips, and sweeps to dump opponents to the canvas before they know what happened. Deceptively strong for her frame, she turns every tie-up into a throw attempt and makes standing fighters fight her fight — on the ground, off-balance, and out of answers.",
      "personal": "Brash and superstitious, she eats stinky tofu the night before every fight and rides a beat-up scooter she refuses to replace. Hides a soft streak under the swagger — she sends most of her winnings to the night-market aunties who fed her when she had nothing.",
      "rival": "Bristles at Li Wei's 'undisciplined' jabs and turns every mention of the China fighter into a challenge, giving their potential bout a charge that goes well beyond styles.",
      "goal": "Fights to prove the kids the system wrote off can beat the ones it polished, and to put Taiwan's scrappiest gym on the map."
    },
    "quotes": [
      "\"他們放棄的孩子，能打贏他們栽培的。\" (The kids they gave up on can beat the ones they polished.)",
      "\"Li Wei calls me undisciplined. I call her predictable.\""
    ],
    "stats": {
      "age": "21",
      "height": "167 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "167 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "nadia-hakim",
    "name": "Nadia Hakim",
    "alias": "Harimau",
    "nationality": "Malaysia",
    "flag": "🇲🇾",
    "hometown": "Kuala Lumpur",
    "baseStyle": "Silat",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#4ac86b",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "nadia-hakim.png",
    "gallery": [
      "nadia-hakim-1.png",
      "nadia-hakim-2.png",
      "nadia-hakim-3.png"
    ],
    "bio": {
      "origin": "Nadia made her name in the Kuala Lumpur gym scene, a quiet engineering graduate who discovered silat as a child and boxing as an adult and fused the patience of one with the precision of the other. She picks apart bigger punchers with footwork and a jab that always arrives on schedule.",
      "style": "A Silat specialist whose game runs deeper than the striking — she uses Silat's devastating sweeps, joint locks, and takedowns to put opponents on the ground where the art's grappling roots take over. Surgical on the feet and suffocating on the mat, she fights the complete Silat game that most opponents have never trained to defend.",
      "personal": "Soft-spoken and devout, she keeps a strict routine and breaks her training fasts with nasi lemak she rates with the seriousness of a critic. Reads engineering journals between camps. The roster's calmest presence, which somehow makes her more unsettling.",
      "rival": "Respects technique above all and has little to say about anyone yet — though her unshakeable calm tends to get under the skin of the roster's more emotional fighters.",
      "goal": "Fights to show that a measured, thinking fighter can outlast every hothead in the division, and to build a coaching academy back home."
    },
    "quotes": [
      "\"Pukulan yang difikirkan mengalahkan pukulan yang terburu-buru.\" (A considered strike beats a hurried one.)",
      "\"I am the calmest person in the room. That should worry you.\""
    ],
    "stats": {
      "age": "19",
      "height": "167 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "167 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "pei-yee",
    "name": "Pei Yee Lim",
    "alias": "Tempest",
    "nationality": "Malaysia",
    "flag": "🇲🇾",
    "hometown": "Penang",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#4ac86b",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "pei-yee.png",
    "gallery": [
      "pei-yee-1.png",
      "pei-yee-2.png",
      "pei-yee-3.png",
      "pei-yee-4.png",
      "pei-yee-5.png"
    ],
    "bio": {
      "origin": "Pei Yee came up in Penang, a hawker's daughter who found kickboxing through a community gym and a coach who fought for her training fees. She built her game on relentless work, the first one in and the last one out of every session.",
      "style": "A high-volume storm of strikes — the Tempest name is earned honestly. She buries opponents under output and conditioning, trusting that nobody can match her pace for the full fight.",
      "personal": "Driven and warm, she sends most of her purse home and still works weekends at the family stall between camps. Powered by char koay teow and an almost frightening work ethic. Humble out of the ring, merciless in it.",
      "rival": "Shares Malaysia's banner with Nadia Hakim but represents the opposite approach — Pei Yee's volume against Nadia's surgical calm, a contrast both acknowledge with respect rather than venom.",
      "goal": "Fights to build her family a real home and a real future, and to prove the hawker kid outworks everyone the system handed an easier road."
    },
    "quotes": [
      "\"Saya masuk paling awal, balik paling lewat.\" (First one in, last one out.)",
      "\"You cannot match my pace. Nobody can, for a full fight.\""
    ],
    "stats": {
      "age": "20",
      "height": "173 cm (5'8\")",
      "weight": "53 kg (117 lb)",
      "reach": "173 cm (68 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "jenny-kwok",
    "name": "Jenny Kwok",
    "alias": "Black Pinked",
    "nationality": "Malaysia",
    "flag": "🇲🇾",
    "hometown": "Kuala Lumpur",
    "baseStyle": "Muay Thai",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#4ac86b",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "jenny-kwok.png",
    "gallery": [
      "jenny-kwok-1.png",
      "jenny-kwok-2.png",
      "jenny-kwok-3.png"
    ],
    "bio": {
      "origin": "Jenny grew up in Kuala Lumpur on a diet of K-pop and Muay Thai, training at a gym near her school and idolising the fighters she watched online. She turned a teenage obsession into a profession through sheer refusal to be told she was too small or too soft.",
      "style": "Stylish and sharp, she blends crisp Muay Thai with a showman's timing, landing clean and letting you know it. The Black Pinked name is half joke, half brand, and entirely hers.",
      "personal": "Bright, social, and image-savvy, she runs her own highlight reels and dyes a pink streak to match her gloves. Lives on nasi lemak and iced milo and an unapologetic love of pop culture. Friendlier online than across the cage.",
      "rival": "Buzzes around the Malaysian trio with ambition, openly gunning for Pei Yee's and Nadia's standing, more eager to climb than to feud.",
      "goal": "Fights to turn herself into a name people follow, and to prove a girl who learned from screens can beat the ones who learned the hard way."
    },
    "quotes": [
      "\"Saya belajar dari skrin, dan saya akan kalahkan yang belajar susah payah.\" (I learned from screens, and I'll beat the ones who learned the hard way.)",
      "\"Style and substance. Why choose?\""
    ],
    "stats": {
      "age": "20",
      "height": "165 cm (5'5\")",
      "weight": "52 kg (115 lb)",
      "reach": "165 cm (65 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "maya-lin",
    "name": "Maya Lin",
    "alias": "Switchblade",
    "nationality": "USA",
    "flag": "🇺🇸",
    "hometown": "Los Angeles",
    "baseStyle": "Kickboxing",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#002868",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "maya-lin.png",
    "gallery": [
      "maya-lin-1.png",
      "maya-lin-2.png",
      "maya-lin-3.png"
    ],
    "bio": {
      "origin": "Maya grew up in Los Angeles, a Chinese-American kid who found kickboxing at a strip-mall gym after a childhood of being the smallest and the loudest. She fought through the US amateur circuit and crossed the Pacific chasing the deeper talent and bigger stage the circuit offered.",
      "style": "Switch-stance and slick, she changes looks mid-fight and trusts her speed to win exchanges. The Switchblade name is for how fast she opens up and how much it hurts.",
      "personal": "Brash, funny, and California-confident, she trash-talks with a grin and backs most of it up. Misses In-N-Out more than she'll admit and brings West Coast swagger to a roster that mostly fights quiet. Loud, but never lost.",
      "rival": "Sees herself as the outsider who has to prove she belongs and picks fights with the roster's stars to do it, making her the import everyone wants to humble.",
      "goal": "Fights to show the diaspora kid can hang with anyone, and to plant a flag for Asian-American fighters on a stage that doesn't usually look for them."
    },
    "quotes": [
      "\"Diaspora kid, full export. I belong here.\"",
      "\"I talk a lot. I back most of it up — the rest I'm working on.\""
    ],
    "stats": {
      "age": "21",
      "height": "170 cm (5'7\")",
      "weight": "52 kg (115 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "chayanne-locklear",
    "name": "Chayanne Locklear",
    "alias": "Mother Spirit",
    "nationality": "USA",
    "flag": "🇺🇸",
    "hometown": "Los Angeles",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#002868",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "chayanne-locklear.png",
    "gallery": [
      "chayanne-locklear-1.png",
      "chayanne-locklear-2.png",
      "chayanne-locklear-3.png"
    ],
    "bio": {
      "origin": "Chayanne grew up between Los Angeles and her family's Lumbee community in North Carolina, boxing at a community gym that became her second home. She carries her heritage with pride and a chip on her shoulder about being underestimated twice over.",
      "style": "A sharp, mobile boxer with heavy hands, she controls range with footwork and lands the one clean shot that changes fights. Disciplined, patient, dangerous.",
      "personal": "Grounded and quietly funny, she wears beadwork from home under her wraps and sends winnings back to her community's youth programs. Fierce about representation, generous with everyone but her opponents.",
      "rival": "Bonds with fellow American Maya Lin over being outsiders on a pan-Asian circuit, but the two are quietly competitive over who carries the 'import' banner best — a friendly rivalry with an edge.",
      "goal": "Fights to put Native American athletes on a stage that never looks for them, and to prove she belongs among the world's best strikers."
    },
    "quotes": [
      "\"They underestimate me twice. I only need to win once.\"",
      "\"I fight for every kid back home who never saw someone like them up there.\""
    ],
    "stats": {
      "age": "20",
      "height": "170 cm (5'7\")",
      "weight": "52 kg (115 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "tala-cholena",
    "name": "Tala Cholena",
    "alias": "Thundercloud",
    "nationality": "USA",
    "flag": "🇺🇸",
    "hometown": "Los Angeles",
    "baseStyle": "Folkstyle Wrestling",
    "ruleset": "Street Fight",
    "division": "Strawweight",
    "color": "#002868",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "tala-cholena.png",
    "gallery": [
      "tala-cholena-1.png",
      "tala-cholena-2.png",
      "tala-cholena-3.png",
      "tala-cholena-4.png",
      "tala-cholena-5.png"
    ],
    "bio": {
      "origin": "Tala came up scrapping in and around Los Angeles, a wrestler first who turned to no-rules fighting when the structured world bored her. Proud of her Choctaw roots and her refusal to fit anyone's mold, she found a home in the circuit's street-fight ruleset.",
      "style": "A grappler-brawler who drags opponents into chaos, mixing takedowns with wild, relentless pressure. Unorthodox, durable, impossible to prepare for cleanly.",
      "personal": "Brash and warm in equal measure, she rides a beat-up truck and superstitiously wears the same braided cord every fight. Loyal to a fault, loud about where she comes from, soft only with the people who knew her before.",
      "rival": "Clashes in style and temperament with the circuit's disciplined technicians, and shares a wary mutual respect with fellow American Chayanne Locklear — same flag, opposite approaches.",
      "goal": "Fights to prove the kid nobody could coach can beat the ones who were, and to carry her Choctaw pride onto the biggest stage she can reach."
    },
    "quotes": [
      "\"You can't coach what I do. Nobody could.\"",
      "\"Choctaw blood, and I'm not here to be polite.\""
    ],
    "stats": {
      "age": "21",
      "height": "168 cm (5'6\")",
      "weight": "54 kg (119 lb)",
      "reach": "168 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "mihn-anh",
    "name": "Trần Minh Anh",
    "alias": "Apache",
    "nationality": "Vietnam",
    "flag": "🇻🇳",
    "hometown": "Hà Nội",
    "baseStyle": "Vovinam",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#DA251D",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "mihn-anh.png",
    "gallery": [
      "mihn-anh-1.png",
      "mihn-anh-2.png",
      "mihn-anh-3.png",
      "mihn-anh-4.png",
      "mihn-anh-5.png"
    ],
    "bio": {
      "origin": "Minh Anh came up in Hanoi, trained in Vovinam from childhood before adapting her national martial art into modern competition. She carries the distinct flavour of a style most opponents have never faced, and uses their unfamiliarity like a weapon.",
      "style": "Unorthodox and angular, her Vovinam roots produce attacks from positions other fighters don't expect — scissoring kicks, sudden levels. The Apache name is for how she strikes and vanishes.",
      "personal": "Composed and proud, she represents her art with a seriousness that borders on reverence. Lives on her mother's pho and a discipline instilled young. Reserved with strangers, fiercely expressive once the fight begins.",
      "rival": "Too new and too unfamiliar to have drawn a feud yet, but her exotic style has the roster's strikers quietly wary of being the first to test her.",
      "goal": "Fights to put Vietnamese martial arts on a stage they've never had, and to prove Vovinam belongs among the world's fighting styles."
    },
    "quotes": [
      "\"Vovinam xứng đáng có một sân khấu thế giới.\" (Vovinam deserves a world stage.)",
      "\"You have never fought my style. That is the point.\""
    ],
    "stats": {
      "age": "20",
      "height": "165 cm (5'5\")",
      "weight": "52 kg (115 lb)",
      "reach": "168 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "rainie-yang",
    "name": "Rainie Yang",
    "alias": "Bàoyǔ",
    "nationality": "China",
    "flag": "🇨🇳",
    "hometown": "Shanghai",
    "baseStyle": "Judo",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#1f9e6b",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "rainie-yang.png",
    "gallery": [
      "rainie-yang-1.png",
      "rainie-yang-2.png",
      "rainie-yang-3.png"
    ],
    "bio": {
      "origin": "Rainie grew up in Shanghai's international quarter, the daughter of a businessman who sent her to a Judo academy in Tokyo at fifteen. She came back two years later with a black belt, a heavier frame than anyone expected, and a quiet certainty that she could throw anyone in any room.",
      "style": "A powerful Judo player built around grips, throws, and relentless top pressure. Heavier-set than most of the roster, she uses her weight as a weapon — once she gets a hold, opponents go where she decides. Deceptively fast off the grip, devastating once the fight hits the ground.",
      "personal": "Warm and disarmingly friendly until the grip fight starts. Lives on her grandmother's xiaolongbao and trains with a discipline that surprises people who see the soft face first. Keeps a journal of every throw she's ever landed in competition.",
      "rival": "Has open beef with Mandy Koh — the two clashed at a regional event before the circuit, and the grudge followed them in. Mandy's chaos offends Rainie's structure; Rainie's composure infuriates Mandy's instincts.",
      "goal": "Fights to prove the girl they sent away came back stronger than everyone who stayed, and to show Judo belongs on any stage."
    },
    "quotes": [
      "\"柔道不是力量。是时机。\" (Judo is not strength. It is timing.)",
      "\"Mandy talks. I throw.\""
    ],
    "stats": {
      "age": "19",
      "height": "168 cm (5'6\")",
      "weight": "54 kg (119 lb)",
      "reach": "168 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "emi-sato-wright",
    "name": "Emi Sato-Wright",
    "alias": "Half-Blood",
    "nationality": "Japan",
    "flag": "🇯🇵",
    "hometown": "Okinawa",
    "baseStyle": "Karate",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c0263a",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "emi-sato-wright.png",
    "gallery": [
      "emi-sato-wright-1.png",
      "emi-sato-wright-2.png",
      "emi-sato-wright-3.png"
    ],
    "bio": {
      "origin": "Born in Okinawa to a Japanese father and American mother — the birthplace of Karate — Emi grew up caught between two cultures and found her footing in the dojo. She trained traditional Okinawan Karate from childhood, the only half-American kid in a school that wasn't sure she belonged. She's been proving them wrong since.",
      "style": "A sharp, disciplined Karate striker who fights from a bladed stance with fast straight punches and precise kicks. Her timing is immaculate — she reads openings others don't see and punishes them with single clean shots. Textbook technique delivered with quiet fury.",
      "personal": "Reserved and intense, she carries the weight of never fully belonging in either culture. Speaks Japanese and English fluently, thinks in both, fights in neither — her Karate is its own language. Eats her mother's burgers and her father's onigiri without irony.",
      "rival": "Eyes Emma Zandberg as the mirror match — another half-Asian fighter trying to prove the fusion works. The two circle each other with mutual recognition and unspoken competition over who carries the 'between worlds' banner better.",
      "goal": "Fights to defy every expectation her birthright created, and to prove Okinawan Karate hits as hard as anything the circuit's ever seen."
    },
    "quotes": [
      "\"二つの国。一つの拳。\" (Two countries. One fist.)",
      "\"They said I was half. I fight whole.\""
    ],
    "stats": {
      "age": "20",
      "height": "168 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "168 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "sam-kessler",
    "name": "Sam Kessler",
    "alias": "Copperhead",
    "nationality": "USA",
    "flag": "🇺🇸",
    "hometown": "Philadelphia",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#002868",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "sam-kessler.png",
    "gallery": [
      "sam-kessler-1.png",
      "sam-kessler-2.png",
      "sam-kessler-3.png"
    ],
    "bio": {
      "origin": "Sam came up in a Philadelphia boxing gym, red hair and a redder temper, the kind of kid who picked fights in the schoolyard and graduated to the ring when a coach told her she'd end up in jail if she didn't. She crossed the Pacific chasing harder competition and a circuit that wouldn't bore her.",
      "style": "A pure boxer with heavy hands and a Philly shell defense — she slips, rolls, and counters with sharp hooks and uppercuts from a tight guard. No kicks, no grappling, just hands. When she sits down on a punch, people fall down.",
      "personal": "Loud, direct, and completely unapologetic. Red hair she refuses to tie back, a mouth that runs before and after fights, and a left hook that earns the right to talk. Misses cheesesteaks and talks trash in a Philly accent nobody on the roster understands.",
      "rival": "Eyes Emi Sato-Wright as the next fight — sees the disciplined Karate stylist as everything she isn't and wants to prove raw Philly boxing beats dojo precision. The two Americans on opposite ends of the discipline spectrum.",
      "goal": "Fights to prove the American kid with no martial arts pedigree can hang with anyone, and that boxing is still the sweetest science in any ring."
    },
    "quotes": [
      "\"I don't do techniques. I do damage.\"",
      "\"Philly taught me one thing — don't go down.\""
    ],
    "stats": {
      "age": "20",
      "height": "170 cm (5'7\")",
      "weight": "54 kg (119 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "mai-hoang",
    "name": "Mai Hoàng",
    "alias": "Saigon Rose",
    "nationality": "Vietnam",
    "flag": "🇻🇳",
    "hometown": "Ho Chi Minh City",
    "baseStyle": "Street Fighting",
    "ruleset": "Street Fight",
    "division": "Strawweight",
    "color": "#DA251D",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "mai-hoang.png",
    "gallery": [
      "mai-hoang-1.png",
      "mai-hoang-2.png",
      "mai-hoang-3.png"
    ],
    "bio": {
      "origin": "Lily grew up in the back alleys of Ho Chi Minh City's District 4, the roughest stretch in a rough city. No gym, no coach — she learned to fight the way the neighbourhood taught everyone, and she was better at it than most of the boys. She found the circuit through word of mouth and showed up with nothing but nerve.",
      "style": "Raw, aggressive, and completely uncoached — she brawls with whatever works. Headbutts, elbows from bad positions, tackling opponents into walls. No stance, no guard, just forward pressure and a pain threshold that unsettles everyone she faces.",
      "personal": "Loud, warm, and impossible to intimidate. Lives on street-vendor bún bò Huế and treats every fight like a neighbourhood scrap she happens to be winning. Generous with her time, ruthless with her fists. The locker room's loudest laugh.",
      "rival": "Shares Vietnam's flag with Trần Minh Anh but couldn't be more different — Minh Anh's disciplined Vovinam against Lily's street chaos. Same country, opposite fighting philosophies.",
      "goal": "Fights to prove the alley kid doesn't need a system, and to send enough money home that her family never sees District 4 again."
    },
    "quotes": [
      "\"Tao không cần võ đường. Đường phố dạy tao đủ rồi.\" (I don't need a dojo. The streets taught me enough.)",
      "\"Hit me. I dare you. I hit back harder.\""
    ],
    "stats": {
      "age": "21",
      "height": "168 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "168 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "rin-takahashi",
    "name": "Rin Takahashi",
    "alias": "Ikken",
    "nationality": "Japan",
    "flag": "🇯🇵",
    "hometown": "Okinawa",
    "baseStyle": "Karate",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c0263a",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "rin-takahashi.png",
    "gallery": [
      "rin-takahashi-1.png",
      "rin-takahashi-2.png",
      "rin-takahashi-3.png"
    ],
    "bio": {
      "origin": "Rin trained at a traditional Shotokan dojo in Okinawa from the age of six, the youngest student her sensei ever accepted. She grew up on kata and kumite, won national junior championships, and turned to full-contact competition when point fighting stopped feeling real.",
      "style": "A pure Karate stylist — bladed stance, explosive in-and-out movement, sharp straight punches and precise front kicks. She times single devastating counters from outside and makes opponents miss in the space she just occupied. Clinical and fast.",
      "personal": "Quiet and fiercely private, she bows before and after everything and speaks only when she has something worth saying. Lives on her mother's soba and trains alone more often than not. The dojo is her church.",
      "rival": "Measures herself against the growing Japanese contingent — Saki's pressure, Kaede's elegance, Honoka's volume — and sees Emi Sato-Wright's half-Japanese Karate as both kinship and a claim she quietly disputes.",
      "goal": "Fights to carry Okinawan Karate forward without diluting it, and to prove the old forms still produce the sharpest fighters."
    },
    "quotes": [
      "\"一撃必殺。\" (One strike, certain kill.)",
      "\"I don't throw ten punches. I throw the right one.\""
    ],
    "stats": {
      "age": "20",
      "height": "164 cm (5'5\")",
      "weight": "52 kg (115 lb)",
      "reach": "164 cm (65 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "mio-hayashi",
    "name": "Mio Hayashi",
    "alias": "Kaminari",
    "nationality": "Japan",
    "flag": "🇯🇵",
    "hometown": "Osaka",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c0263a",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "mio-hayashi.png",
    "gallery": [
      "mio-hayashi-1.png",
      "mio-hayashi-2.png",
      "mio-hayashi-3.png"
    ],
    "bio": {
      "origin": "Mio came up boxing in Osaka's Namba district, a left-hander who turned her natural southpaw stance into a career. She fought amateur in Japan's women's boxing circuit before the DRAGONS roster caught her eye — the chance to test her hands against strikers from every discipline, not just other boxers.",
      "style": "A tricky southpaw with sharp angles and a left cross that lands from blind spots. She uses the southpaw advantage relentlessly — her lead right hand jabs from an angle orthodox fighters aren't used to, and her power left comes from a position they can't see. Frustrating to fight and dangerous to ignore.",
      "personal": "Cheerful and Osakan to the core — fast-talking, funny, and incapable of being serious for more than ten seconds. Lives on takoyaki and a refusal to let anyone get comfortable around her. The mood-lifter who punches hardest when you're laughing.",
      "rival": "Sees herself as Japan's dark horse — less talked-about than Saki, Kaede, or Honoka, and planning to pass them all while they watch each other. The one nobody's preparing for.",
      "goal": "Fights to prove the southpaw boxer can out-angle every stance and every style, and to put Osaka on the circuit map alongside Tokyo."
    },
    "quotes": [
      "\"大阪の左利きを舐めんなよ。\" (Don't underestimate Osaka's left-hander.)",
      "\"You're watching my right. That's the point.\""
    ],
    "stats": {
      "age": "21",
      "height": "165 cm (5'5\")",
      "weight": "52 kg (115 lb)",
      "reach": "165 cm (65 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "alex-moran",
    "name": "Alex Moran",
    "alias": "Wildcard",
    "nationality": "USA",
    "flag": "🇺🇸",
    "hometown": "Detroit",
    "baseStyle": "Street Fighting",
    "ruleset": "Street Fight",
    "division": "Strawweight",
    "color": "#002868",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "alex-moran.png",
    "gallery": [
      "alex-moran-1.png",
      "alex-moran-2.png",
      "alex-moran-3.png"
    ],
    "bio": {
      "origin": "Alex grew up on Detroit's east side, fighting since middle school, never in a gym. She found underground fight circuits in Michigan basements before the DRAGONS roster found her — someone filmed one of her wins, it went viral, and the invitation came the same week. No training camp, no system, just a phone call and a plane ticket.",
      "style": "Unpredictable and relentless — she switches between swarming and stalking without warning, throws from weird angles, and fights dirty when clean doesn't work. No formal technique, just an engine that never stops and a pain tolerance that makes coaches uncomfortable.",
      "personal": "Wiry, intense, and hard to read. Quiet in groups, electric alone. Runs every morning regardless of where she is, eats whatever's closest, and trusts exactly no one until they've proven themselves. Carries Detroit like a chip and a shield.",
      "rival": "Drawn to the roster's other street fighters — Mai Hoàng and Tala Cholena — with the wary respect of people who came up the same way. Among the Americans, she's the one who most obviously doesn't belong in a professional circuit, which is exactly why she's dangerous.",
      "goal": "Fights to prove the viral girl wasn't a fluke, and that the street teaches things no gym ever will."
    },
    "quotes": [
      "\"Detroit doesn't make fighters. It makes survivors.\"",
      "\"No gameplan. Just go.\""
    ],
    "stats": {
      "age": "20",
      "height": "170 cm (5'7\")",
      "weight": "54 kg (119 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "isla-kamolwan",
    "name": "Isla Kamolwan",
    "alias": "Unfazed",
    "nationality": "Thailand",
    "flag": "🇹🇭",
    "hometown": "London",
    "baseStyle": "Muay Thai",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#d4a528",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "isla-kamolwan.png",
    "gallery": [
      "isla-kamolwan-1.png",
      "isla-kamolwan-2.png",
      "isla-kamolwan-3.png"
    ],
    "bio": {
      "origin": "Born in London to a British father and Thai mother, Isla spent school holidays at her uncle's Muay Thai camp in Phuket and full terms at a comprehensive school in South London. She fought her first amateur bout at sixteen in a Thai stadium, and her first professional bout at nineteen in a London warehouse. Two countries made her; neither one fully claims her.",
      "style": "Technical British boxing footwork fused with Thai elbows, knees, and clinch work. She moves like a Western fighter and strikes like a Thai one — a hybrid that frustrates purists from both traditions and beats them from angles they don't train for.",
      "personal": "Dry-witted and self-contained, she code-switches between London slang and Thai without thinking about it. Misses English rain and Thai heat equally. Keeps a worn photo of her uncle's camp in her gear bag and fights with a mongkon he gave her.",
      "rival": "Emma Zandberg is the obvious parallel — another European-Thai hybrid — and the two recognise each other as the only fighters on the roster who understand what it's like to belong to two places and neither. Mutual respect with competitive tension.",
      "goal": "Fights to prove the hybrid doesn't have to pick a side, and that London and Phuket produce something together that neither produces alone."
    },
    "quotes": [
      "\"Half London, half Phuket. Full problem.\"",
      "\"The purists hate what they can't categorise. Good.\""
    ],
    "stats": {
      "age": "21",
      "height": "170 cm (5'7\")",
      "weight": "54 kg (119 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "amihan-reyes",
    "name": "Amihan Reyes",
    "alias": "Hurricane",
    "nationality": "Philippines",
    "flag": "🇵🇭",
    "hometown": "Manila",
    "baseStyle": "Panantukan",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#7B2D8E",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "amihan-reyes.png",
    "gallery": [
      "amihan-reyes-1.png",
      "amihan-reyes-2.png",
      "amihan-reyes-3.png"
    ],
    "bio": {
      "origin": "Amihan trained at a respected Panantukan academy in Quezon City, the daughter of a former national team coach who drilled Filipino martial arts into her before she could read. She carries her father's technical legacy with pride and fights with the precision of someone who was never allowed to be sloppy.",
      "style": "A Panantukan specialist — fast, flowing chains of elbows, hammer fists, and backhand strikes that blitz opponents from unexpected angles. Every strike flows into the next without resetting, creating a storm of close-range violence that looks chaotic but is architecturally precise. The Hurricane name is literal.",
      "personal": "Disciplined, gracious, and quietly devout. She crosses herself before every fight and sends most of her purse home. Clean-cut in a way that makes her devastating hands even more surprising. Lives on her mother's adobo and treats the gym like a second home.",
      "rival": "Her compatriot Reyna Bautista is the natural foil — Amihan's trained precision against Reyna's street chaos, same flag, opposite souls. The two Filipinas orbit each other with the tension of a fight everyone wants to see.",
      "goal": "Fights to honour her father's legacy and to put Filipino martial arts on a global stage alongside Muay Thai and Karate."
    },
    "quotes": [
      "\"Ang laban ay sining. (The fight is art.)\"",
      "\"Every punch my father taught me. Every win is his.\""
    ],
    "stats": {
      "age": "22",
      "height": "170 cm (5'7\")",
      "weight": "54 kg (119 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "thazin-aye",
    "name": "Thazin Aye",
    "alias": "Iron Crown",
    "nationality": "Myanmar",
    "flag": "🇲🇲",
    "hometown": "Yangon",
    "baseStyle": "Lethwei",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c86b2e",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "thazin-aye.png",
    "gallery": [
      "thazin-aye-1.png",
      "thazin-aye-2.png",
      "thazin-aye-3.png",
      "thazin-aye-4.png",
      "thazin-aye-5.png"
    ],
    "bio": {
      "origin": "Thazin came up in Yangon's Lethwei underground, the bareknuckle boxing tradition that makes Muay Thai look gentle. She fought without gloves from fifteen, in rings where headbutts were legal and the only way to win was to make the other person stop. The circuit gave her wraps and rules; she gave it something it hadn't seen before.",
      "style": "A Lethwei brawler who fights with a forward pressure and brutality that shocks opponents used to gloved combat. Headbutt setups disguised as clinch entries, bareknuckle-conditioned fists that hit harder than wrapped hands should, and an iron chin built in rings where protection didn't exist. The Iron Crown name is for the headbutt she's no longer allowed to throw — and the ones she gets away with.",
      "personal": "Stoic and watchful, she speaks little and observes everything. Wears thanaka paste on her cheeks before fights as a connection to home. Misses Yangon's tea shops and the rawness of the Lethwei pits. Kind to anyone who earns it, terrifying to anyone who hasn't.",
      "rival": "Eyes the Thai fighters — Kanyarat, Jhut, Nong Pim — with the respect and resentment of a neighbouring tradition that never gets the same recognition. Lethwei vs Muay Thai is a centuries-old argument, and Thazin intends to settle it.",
      "goal": "Fights to prove Lethwei is the most brutal striking art in the world, and that Myanmar's fighters deserve the spotlight Thailand's have always held."
    },
    "quotes": [
      "\"လက်ဝှေ့သမားတွေ လက်အိတ်မလိုဘူး။\" (Lethwei fighters don't need gloves.)",
      "\"The headbutt is illegal here. Everything else I brought is not.\""
    ],
    "stats": {
      "age": "21",
      "height": "168 cm (5'6\")",
      "weight": "54 kg (119 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "reyna-bautista",
    "name": "Reyna Bautista",
    "alias": "Siga",
    "nationality": "Philippines",
    "flag": "🇵🇭",
    "hometown": "Tondo, Manila",
    "baseStyle": "Street Fighting",
    "ruleset": "Street Fight",
    "division": "Strawweight",
    "color": "#7B2D8E",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "reyna-bautista.png",
    "gallery": [
      "reyna-bautista-1.png",
      "reyna-bautista-2.png",
      "reyna-bautista-3.png",
      "reyna-bautista-4.png",
      "reyna-bautista-5.png"
    ],
    "bio": {
      "origin": "Reyna came up in Tondo, Manila's toughest barangay, where fighting wasn't a sport — it was how you kept what was yours. No gym, no coach, no system. She fought in backyards and side streets and earned her reputation one scrap at a time. The circuit found her through a viral video of a backyard knockout and offered her a way out. She took it without hesitation.",
      "style": "Pure chaos — no stance, no guard, no technique anyone would recognise from a textbook. She swarms with wild hooks, tackles opponents into walls, elbows from bad positions, and fights through damage that would stop trained fighters. Uncoachable and unpredictable. What she lacks in form she replaces with fury and a refusal to stay down.",
      "personal": "Loud, warm, and covered in tattoos — one for every fighter she's beaten. Wears street clothes to the ring because she never owned fight gear. Ripped denim, loose hair, white hand wraps. The anti-athlete on a roster full of trained killers. Lives on street-vendor adobo and the loyalty of the neighbourhood she came from.",
      "rival": "Her compatriot Amihan Reyes is the natural nemesis — Amihan's Panantukan precision against Reyna's street chaos. Same flag, same city, opposite worlds. Amihan was coached from birth; Reyna was forged by Tondo. The Philippines' own civil war.",
      "goal": "Fights to prove Tondo's kid doesn't need anyone's system, and to add one more tattoo for every girl who thought technique beats will."
    },
    "quotes": [
      "\"Walang coach. Walang gym. Puro diskarte.\" (No coach. No gym. Pure hustle.)",
      "\"I add a tattoo for every girl I beat. Want to be next?\""
    ],
    "stats": {
      "age": "21",
      "height": "165 cm (5'5\")",
      "weight": "52 kg (115 lb)",
      "reach": "165 cm (65 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "ayu-prasetya",
    "name": "Ayu Prasetya",
    "alias": "Komodo",
    "nationality": "Indonesia",
    "flag": "🇮🇩",
    "hometown": "Jakarta",
    "baseStyle": "Pencak Silat",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#c75a3a",
    "record": {
      "w": 0,
      "l": 0,
      "ko": 0
    },
    "image": "ayu-prasetya.png",
    "gallery": [
      "ayu-prasetya-1.png",
      "ayu-prasetya-2.png",
      "ayu-prasetya-3.png"
    ],
    "bio": {
      "origin": "Ayu came up through Jakarta's Pencak Silat competition circuit, the national martial art of Indonesia, earning gold at the Southeast Asian Games before crossing into full-contact fighting. She carries the fluid, devastating striking and grappling of Silat with the composure of someone who has represented her country since she was fourteen.",
      "style": "A Pencak Silat specialist whose game is built on sweeps, throws, and explosive strikes from angles nobody trains for. She flows between grappling and striking without resetting — one motion becomes the next, defence becomes offence, a fall becomes a takedown. The Komodo name is for the patience before the lunge and the devastation after it.",
      "personal": "Calm, measured, and fiercely patriotic. She wears the Indonesian flag on her wraps and treats every bout as a national showcase. Lives on her grandmother's rendang and trains with the obsessive detail of someone who knows the world doesn't watch Indonesian martial arts unless she makes them. Warm to friends, terrifying to opponents.",
      "rival": "Eyes Nadia Hakim and her Malaysian Silat as the natural comparison — two Southeast Asian Silat fighters from neighbouring countries with centuries of shared martial tradition and mutual suspicion. Indonesia vs Malaysia, the oldest Silat rivalry in the world.",
      "goal": "Fights to put Indonesian Pencak Silat on the global stage alongside Muay Thai and Karate, and to prove the archipelago's martial art belongs at the top of every combat ranking."
    },
    "quotes": [
      "\"Silat lahir di Nusantara. Dunia harus tahu.\" (Silat was born in the archipelago. The world needs to know.)",
      "\"The Komodo waits. Then it doesn't.\""
    ],
    "stats": {
      "age": "21",
      "height": "172 cm (5'8\")",
      "weight": "53 kg (117 lb)",
      "reach": "172 cm (68 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  }
];

if (typeof module !== "undefined") { module.exports = FIGHTERS; }
