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
      "rival": "Has open, needling beef with Ruby Tan — Cheryl thinks Ruby's patient style is 'boring' and says so to anyone with a microphone. The feeling, by all accounts, is mutual.",
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
    "alias": "Yakuza",
    "nationality": "Japan",
    "flag": "🇯🇵",
    "hometown": "Osaka",
    "baseStyle": "Karate",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c0263a",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "saki-mori.png",
    "gallery": [
      "saki-mori-1.png",
      "saki-mori-2.png",
      "saki-mori-3.png",
      "saki-mori-4.png",
      "saki-mori-5.png"
    ],
    "bio": {
      "origin": "Saki grew up in Namba, Osaka — the working-class warren behind the bright signs, where the Yamaguchi-gumi's shadow was as normal as the vending machines. Her father ran a small pachinko parlour that paid tribute to the local kumicho. She was seventeen when a retired fighter associated with the organisation pulled her out of a street altercation and put her in a gym instead, recognising something in the way she fought back. She trained under his instruction for four years, paid off the debt with wins, and arrived at the circuit owing nobody anything. She does not discuss where she came from. The people who know her from those years don't discuss it either.",
      "style": "A relentless pressure fighter who advances in straight lines and makes every exchange feel personal. She treats combinations like debts being collected — methodical, accumulative, and not finished until the account is settled. Her Karate base gives her the timing to close distance through hands, and she uses it to walk opponents backward until they run out of ring.",
      "personal": "Polite to the point of formality outside the ring — she bows, she uses correct honorifics, she thanks coaches and corners. Inside the ring, the formality is replaced by something else entirely. Has a vending-machine coffee superstition she refuses to explain. Studies tape obsessively, keeps her hair blunt so nothing gets in her eyes, and has not been back to Namba since the night she left it.",
      "rival": "Holds quiet professional respect for Yuna Seo and treats their potential bout as the one that actually matters — a Japan–Korea striking duel that both fighters pretend they aren't thinking about. Inside the organisation she trained with, they called her the best fighter they'd ever produced. She has never repeated this.",
      "goal": "Fights to honour the coach who pulled her out of the street and gave her a direction, and to be the last person standing in a room full of people who had every advantage she didn't."
    },
    "quotes": [
      "\"礼を尽くして、そして倒す。\" (Show full respect — then defeat them.)",
      "\"Osaka doesn't make gentle people. It makes people who know how to be gentle.\""
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
    "hometown": "Biratori, Hokkaido",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c0263a",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "honoka-sato.png",
    "gallery": [
      "honoka-sato-1.png",
      "honoka-sato-2.png",
      "honoka-sato-3.png",
      "honoka-sato-4.png",
      "honoka-sato-5.png"
    ],
    "bio": {
      "origin": "Honoka is Ainu — the Indigenous people of Hokkaido, whose language and culture Japan spent a century trying to erase. She grew up in Biratori, one of the last strongholds of Ainu tradition, a shy kid caught between a heritage the state only formally recognised in 2019 and a mainstream culture that had no place for it. She found a kickboxing gym in Sapporo that didn't care where she came from, and discovered the ring was the one place she could be loud. She turned professional quietly and built a record on relentless, unglamorous pressure.",
      "style": "A high-output volume striker, she walks opponents down and buries them under combinations, trusting her conditioning to outlast anyone. Workmanlike and exhausting to face — the kind of fighter who wins the third round every time because she never stopped coming in the first two.",
      "personal": "Soft-spoken and polite outside the ring, transformed inside it. Wears a matanpushi — an embroidered Ainu headband — to the ring, the traditional patterns her grandmother taught her to stitch. Runs on convenience-store onigiri and a strict, almost superstitious routine. Bows to opponents she's just overwhelmed. Quietly carries a culture most of Japan forgot it contains.",
      "rival": "Came up admiring Saki Mori and now finds herself measured against both Saki and Kaede Mizuno — the newest entry in Japan's deepening striking rivalry. Feels a distant kinship with the circuit's Indigenous fighters — Chayanne, Tala, Leilani — who represent nations their flags don't name.",
      "goal": "Fights to turn the quiet Ainu kid into a name people respect, and to make an erased people visible on a stage Japan is watching."
    },
    "quotes": [
      "\"静かな子が一番怖い。\" (The quiet one is the scariest.)",
      "\"They tried to erase us. I'm still here, and I don't stop coming.\""
    ],
    "stats": {
      "age": "18",
      "height": "167 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "167 cm (66 in)",
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
      "l": 1,
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
      "w": 1,
      "l": 0,
      "ko": 1
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
    "id": "lily-tang",
    "name": "Lily Tang",
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
    "image": "lily-tang.png",
    "gallery": [
      "lily-tang-1.png",
      "lily-tang-2.png",
      "lily-tang-3.png"
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
  },
  {
    "id": "soleil-aguilar",
    "name": "Soleil Aguilar",
    "alias": "Agila",
    "nationality": "Philippines",
    "flag": "🇵🇭",
    "hometown": "Seoul",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#7B2D8E",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "soleil-aguilar.png",
    "gallery": [
      "soleil-aguilar-1.png",
      "soleil-aguilar-2.png",
      "soleil-aguilar-3.png",
      "soleil-aguilar-4.png",
      "soleil-aguilar-5.png"
    ],
    "bio": {
      "origin": "Soleil was born in Quezon City to a Filipino mother and a Korean father who had studied in Paris before settling in Seoul — which explains the name, and the three passports, and the fact that she competed in the Korean amateur boxing circuit under a name nobody expected from a Korean flag. She crossed back to Manila at nineteen with a record and a plan, and arrived at the circuit carrying the Philippine eagle as her alias because it was the only symbol that needed no translation.",
      "style": "A composed southpaw boxer with range intelligence beyond her age. She sets up the left cross with a right jab that lands from an angle orthodox fighters aren't trained to respect, and she knows exactly when to sit down on a shot versus when to stay light. Controlled, efficient, calculating — she fights like she's already three rounds ahead.",
      "personal": "Deliberate and polished, she is the one on the roster who already thinks about legacy. Keeps a training journal, studies fight tape of everyone above her, and speaks Tagalog, Korean, and French in whichever register the room requires. Lives on Seoul's 24-hour ox bone soup and refuses to eat the night before a fight. Warm when she decides to be, which is rarer than it looks.",
      "rival": "Amihan Reyes wears the same flag with more tradition and more faith behind it — Soleil respects that and wants to surpass it. She also tracks Yuna Seo and Jia Park from across the Korea divide, fighters she competed alongside as an amateur in Seoul and intends to overtake on a bigger stage.",
      "goal": "Fights to build a name big enough that neither country can ignore it, and to prove the eagle flies higher than any flag it carries."
    },
    "quotes": [
      "\"Dalawang bansa, isang pangalan.\" (Two countries, one name.)",
      "\"The eagle doesn't explain where it came from. It's already above you.\""
    ],
    "stats": {
      "age": "22",
      "height": "168 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "168 cm (66 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "celeste-de-souza",
    "name": "Celeste De Souza",
    "alias": "Rosario",
    "nationality": "Singapore",
    "flag": "🇸🇬",
    "hometown": "Katong",
    "baseStyle": "Karate",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#d83a2e",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "celeste-de-souza.png",
    "gallery": [
      "celeste-de-souza-1.png",
      "celeste-de-souza-2.png",
      "celeste-de-souza-3.png",
      "celeste-de-souza-4.png",
      "celeste-de-souza-5.png"
    ],
    "bio": {
      "origin": "Celeste grew up in Katong in a Eurasian family four generations deep on the island — the kind of family that knew which kopitiam was triad-affiliated before it was torn down, and whose uncles never explained what they did on weekends. She came up in the orbit of one of Katong's old secret society chapters without ever joining: running errands at twelve, watching disputes settled at fourteen, deciding at sixteen that the gym was the only part of that world she wanted to keep. She found Kyokushin Karate through a coach connected to the same circles who saw something worth redirecting. He was right. The Rosario name is what the old Katong network called her — a Catholic girl who could handle herself, which in that world was both a compliment and a warning.",
      "style": "A full-contact Karate striker who fights from a switch stance, changing her lead hand to disrupt timing and disguising the angle of her power shots. She punches with Kyokushin compactness and kicks with decade-drilled precision. The street instincts from Katong's backchannels show up in her ring generalship — she controls space like someone who has always needed to know where the exits are.",
      "personal": "Self-possessed and socially fluent, she moves through every room in the circuit without effort — the locker room, the sponsor dinner, the weigh-in crowd. Speaks three languages without marking the switch. Eats at hawker centres by choice and knows every old-school Katong laksa spot. The composure is genuine. So is the part underneath it that came from somewhere most fighters on the roster have never been.",
      "rival": "Drawn into orbit around Jessica Wong — two Singaporeans who fight clean for opposite reasons, Jessica from precision and Celeste from something older. Also tracking Amanda Lee as the Singapore boxing measuring stick.",
      "goal": "Fights because the gym took her out of something she was heading toward and she has never found a better reason to stay. And to prove that Katong produces more than shophouses and Peranakan museums."
    },
    "quotes": [
      "\"They called me Rosario. Catholic girl, Katong network, can handle herself. I kept all three.\"",
      "\"I switch stances because one angle is never the whole picture. Katong taught me that.\""
    ],
    "stats": {
      "age": "23",
      "height": "170 cm (5'7\")",
      "weight": "54 kg (119 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Switch",
      "debut": "2026"
    }
  },
  {
    "id": "chae-rin-oh",
    "name": "Chae-Rin Oh",
    "alias": "Dokkaebi",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Seoul (Mapo-gu)",
    "baseStyle": "Muay Thai",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "chae-rin-oh.png",
    "gallery": [
      "chae-rin-oh-1.png",
      "chae-rin-oh-2.png",
      "chae-rin-oh-3.png",
      "chae-rin-oh-4.png",
      "chae-rin-oh-5.png"
    ],
    "bio": {
      "origin": "Chae-Rin grew up in Mapo-gu, the Hongdae side of Seoul — university bars, street food carts, the Line 2 subway at midnight. Her mother ran a tteokbokki stall in Mangwon Market and Chae-Rin worked it after school until a Muay Thai gym opened three blocks away when she was fifteen and gave her somewhere better to put the energy. She trained on a sliding-scale membership her mother negotiated with the coach personally. She has been paying it back ever since.",
      "style": "A southpaw Muay Thai striker with forward pressure and a left kick that arrives before opponents have finished calculating the range. She fights close and stays close, using the clinch not to slow the fight down but to accelerate it — short elbows, quick knees, constant forward weight. The Dokkaebi name is for the chaos she generates in the pocket: unpredictable, relentless, impossible to contain once she gets in.",
      "personal": "Genuinely fierce in a way that has nothing to do with performance — she does not have a ring persona because she does not need one. Off the clock she is easy-going to the point of appearing disengaged, rides the subway in sweats with tteokbokki from her mother's stall, and has no particular opinion about the circuit's politics. In the ring, the switch flips completely. The people who know her outside the gym find it startling every time.",
      "rival": "Has no manufactured grudges but has quietly noted that Ara Vandenberg and she both fight Muay Thai under the Korean flag — and only one of them grew up eating street food in Mapo. The comparison annoys her in the specific way that only true things can.",
      "goal": "Fights to pay her mother back for the membership negotiation and for everything else, and because stopping has never once occurred to her as an option."
    },
    "quotes": [
      "\"마포에서 자라면 싸우는 법을 따로 배울 필요가 없어.\" (Growing up in Mapo, you don't need to be taught how to fight.)",
      "\"I don't have a face for the ring. This is just my face.\""
    ],
    "stats": {
      "age": "20",
      "height": "164 cm (5'5\")",
      "weight": "51 kg (112 lb)",
      "reach": "164 cm (65 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "lena-fong",
    "name": "Lena Fong",
    "alias": "Northern Lights",
    "nationality": "Canada",
    "flag": "🇨🇦",
    "hometown": "Vancouver",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c41e3a",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "lena-fong.png",
    "gallery": [
      "lena-fong-1.png",
      "lena-fong-2.png",
      "lena-fong-3.png",
      "lena-fong-4.png",
      "lena-fong-5.png"
    ],
    "bio": {
      "origin": "Lena grew up in Richmond, BC — Vancouver's most Chinese suburb — the daughter of Cantonese parents who came over in the nineties and built something sensible: a restaurant, a mortgage, two kids with clear futures. Lena's future was less clear. She found kickboxing at nineteen through a gym above a bubble tea shop on No. 3 Road, competed in the Canadian amateur circuit for two years, then followed a coach's recommendation to Singapore for a six-month training stint that has now lasted three years. She has not fully explained this to her parents.",
      "style": "A fluid switch-stance kickboxer who uses the stance change as her primary weapon rather than a stylistic habit — she reads the opponent's adjustment lag and attacks the moment they're recalibrating. Sharp right teep, heavy left kick, and combinations that arrive from angles that only make sense once you track the footwork. She fights like someone who has thought about it more than is strictly necessary.",
      "personal": "Thoughtful and a little restless, she has the particular quality of someone who is interesting to talk to and difficult to fully know. Reads on rest days, eats kaya toast at the same hawker centre in Tanjong Pagar every morning, and has developed genuine opinions about the differences between Singapore and Vancouver that she will share unprompted. Misses the cold in a way she cannot explain to anyone who has not lived in it. The gym is the one place where the restlessness stops.",
      "rival": "Drawn toward Celeste De Souza by the obvious parallel — two fighters more Singaporean than their passports suggest. The comparison is friendly on the surface and quietly competitive underneath.",
      "goal": "Fights to find out whether this is who she is or just something she is doing, and has not yet reached a conclusion. The wins feel like evidence. The losses feel like the same."
    },
    "quotes": [
      "\"Vancouver has everything. I came here anyway. Make of that what you will.\"",
      "\"I switch because one angle is never the whole answer.\""
    ],
    "stats": {
      "age": "21",
      "height": "169 cm (5'7\")",
      "weight": "53 kg (117 lb)",
      "reach": "169 cm (67 in)",
      "stance": "Switch",
      "debut": "2026"
    }
  },
  {
    "id": "linh-nguyen",
    "name": "Linh Nguyễn",
    "alias": "Monsoon",
    "nationality": "Vietnam",
    "flag": "🇻🇳",
    "hometown": "Đà Nẵng",
    "baseStyle": "Muay Thai",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#DA251D",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "linh-nguyen.png",
    "gallery": [
      "linh-nguyen-1.png",
      "linh-nguyen-2.png",
      "linh-nguyen-3.png",
      "linh-nguyen-4.png",
      "linh-nguyen-5.png"
    ],
    "bio": {
      "origin": "Linh grew up in Đà Nẵng, Vietnam's central coast city, the daughter of a fisherman who took her to a Muay Thai gym at eight because he said she fought like she already knew how. She trained through school on a coast that floods every October and clears by December — the rhythm of patience and release that the Monsoon name came from. She competed in the Vietnamese national kickboxing circuit before a coach in Bangkok arranged a year of stadium training that turned competence into something else.",
      "style": "A southpaw Muay Thai fighter who builds pressure in layers — she starts at range with a long left teep that controls distance, adds body kicks that compound across rounds, then turns the clinch on in the third when the damage is already done. She doesn't finish early because she doesn't need to. The Monsoon name is accurate: the damage builds before you register it, and by the time it arrives in full, the decision has already been made.",
      "personal": "Self-contained and deliberate, she trains without music and rarely speaks during sessions. Off the clock she is warmer than she appears, loyal to the people from the coast who still watch every fight from a livestream with bad buffering. Eats her father's mắm tôm on everything and considers it non-negotiable. Has no social media and no particular interest in acquiring any.",
      "rival": "Respects Trần Minh Anh's dedication to Vietnamese martial art but fights Muay Thai without apology. Mai Hoàng's chaos is the flag's loudest voice; Linh is the quietest. Three Vietnamese fighters, three frequencies.",
      "goal": "Fights to prove the central coast produces something the north and south haven't seen yet, and to give her father a reason to show up on the dock the next morning talking."
    },
    "quotes": [
      "\"Mưa miền Trung không hỏi trước khi đến.\" (The central rain doesn't ask before it comes.)",
      "\"I don't finish early. I finish when it's done.\""
    ],
    "stats": {
      "age": "22",
      "height": "167 cm (5'6\")",
      "weight": "52 kg (115 lb)",
      "reach": "167 cm (66 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "mei-xiu-fang",
    "name": "Mei Xiu Fang",
    "alias": "Jiu Long",
    "nationality": "China",
    "flag": "🇨🇳",
    "hometown": "Guangzhou",
    "baseStyle": "Wushu",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1f9e6b",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "mei-xiu-fang.png",
    "gallery": [
      "mei-xiu-fang-1.png",
      "mei-xiu-fang-2.png",
      "mei-xiu-fang-3.png",
      "mei-xiu-fang-4.png",
      "mei-xiu-fang-5.png"
    ],
    "bio": {
      "origin": "Mei Xiu trained in competitive Wushu at a Guangzhou provincial academy from age eight — the performance pipeline that produces athletes who can do things with their bodies that other fighters simply cannot. She won regional titles in changquan and nanquan before a coach redirected her toward full-contact competition, where the acrobatics became weapons and the weapons became something the circuit hadn't seen before. She arrived with no amateur kickboxing record and no reputation. She didn't need either.",
      "style": "A Wushu southpaw whose movement vocabulary is wider than anyone she has faced. She closes distance in ways that look wrong — spinning entries, low-line feints, sudden level changes that come from a decade of forms training — and punishes the confusion with a left cross that arrives faster than the footwork suggested it would.",
      "personal": "Spare and self-contained, she does not give interviews and does not explain herself. Trains alone in the early morning, runs the Pearl River waterfront at dusk, and eats at the same dim sum place in Yuexiu every evening without variation. Speaks when she has something to say, which is rarely.",
      "rival": "Watches the internal China argument between Li Wei, Ying Ying, and Shīhán with detachment — three fighters from the north and east, squabbling over a flag she considers hers by default.",
      "goal": "Fights because the academy built her for competition and competition is what she does. Has not yet needed a reason beyond that."
    },
    "quotes": [
      "\"广州出来的，不需要解释。\" (From Guangzhou, no explanation needed.)",
      "\"You watched me warm up and thought you were ready. That's on you.\""
    ],
    "stats": {
      "age": "21",
      "height": "169 cm (5'7\")",
      "weight": "53 kg (117 lb)",
      "reach": "169 cm (67 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "nari-rattana",
    "name": "Nari Rattana",
    "alias": "Hornbill",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Gwangju",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "nari-rattana.png",
    "gallery": [
      "nari-rattana-1.png",
      "nari-rattana-2.png",
      "nari-rattana-3.png",
      "nari-rattana-4.png",
      "nari-rattana-5.png"
    ],
    "bio": {
      "origin": "Nari was born in Gwangju to a Korean father and a Thai mother who met in Bangkok and followed him home. She grew up bilingual in a city that had no boxing gym worth mentioning until her father built one — a converted storage unit in Buk-gu that became a real gym the slow way, by producing fighters who won. Nari was the first one. She has been the best one ever since.",
      "style": "A sharp, high-output boxer who works behind a fast jab and throws combinations in short, precise bursts that land cleaner than they look. She cuts angles instinctively and finds the body early, wearing opponents down before the head shots arrive. The Hornbill name is for the way she strikes: with the beak, targeted and structural, picking the body apart with intent rather than volume.",
      "personal": "Openly warm — the fighter most likely to hug her opponent's corner after the final bell and mean it — with a competitive streak she barely bothers to conceal. Runs on her mother's pad kra pao and her father's doenjang jjigae and has opinions about both that she will share at length. Laughs easily, trains obsessively, last person in the gym every night without exception.",
      "rival": "Feels a quiet kinship with Ara Vandenberg — another Korean fighter carrying a different face — but their styles are opposite enough that the kinship has an edge. Also on a slow-burn collision course with Soleil Aguilar, whose Filipino-Korean boxing draws the same comparisons Nari gets tired of explaining.",
      "goal": "Fights to validate her father's gym and everything he bet on it, and to give her mother a reason to make the trip from Bangkok to watch."
    },
    "quotes": [
      "\"아버지가 체육관을 지었어. 나는 이유를 만들어.\" (My father built the gym. I make the reason for it.)",
      "\"I hug you after. Before, I'm trying to take your head off. Both are sincere.\""
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
    "id": "ara-vandenberg",
    "name": "Ara Vandenberg",
    "alias": "Ghost",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Jeju",
    "baseStyle": "Muay Thai",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "ara-vandenberg.png",
    "gallery": [
      "ara-vandenberg-1.png",
      "ara-vandenberg-2.png",
      "ara-vandenberg-3.png",
      "ara-vandenberg-4.png",
      "ara-vandenberg-5.png"
    ],
    "bio": {
      "origin": "Ara was born in Jeju to a Korean mother and a Dutch father who left when she was four — which is how she explains the hair when people ask, which they always do. She grew up on the island's windward coast, moved to Seoul at sixteen, and found Muay Thai at a gym in Mapo that didn't look twice at her. She trained four years in Seoul before spending a year in Chiang Mai refining what she had. The circuit found her on the way back.",
      "style": "A Muay Thai southpaw with a long, deceptive teep and a left cross that arrives from angles orthodox fighters consistently miscalculate. She fights at an unhurried pace that lulls opponents into thinking she's passive, then closes with elbows and knees in the clinch before they've registered the distance change. The Ghost name is for how she moves through a guard — present, then suddenly past it.",
      "personal": "Unbothered and self-contained, she has spent her entire life being the person who doesn't fit the picture, and has stopped explaining it. Speaks Korean natively and Dutch badly and finds both equally funny to admit. Lives on Jeju black pork and cold instant coffee. Impossible to rattle. Occasionally difficult to find.",
      "rival": "Draws quiet interest from Emma Zandberg — another half-Dutch fighter who chose an Asian flag, a parallel both are aware of and neither mentions. Also tracked by Yuna Seo, who finds a Korean Muay Thai southpaw more interesting than she's willing to say.",
      "goal": "Fights to see how far the girl who didn't fit goes when the room finally has to reckon with her. Hasn't decided what comes after that."
    },
    "quotes": [
      "\"나는 여기 속해. 그냥 네가 기대하던 모습이 아닐 뿐이야.\" (I belong here. Just not in the shape you expected.)",
      "\"Yes, it's natural. No, I won't explain it. Can we fight now?\""
    ],
    "stats": {
      "age": "22",
      "height": "171 cm (5'7\")",
      "weight": "53 kg (117 lb)",
      "reach": "171 cm (67 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "seo-yeon-kim",
    "name": "Seo-Yeon Kim",
    "alias": "Lacquer",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Daegu",
    "baseStyle": "Tang Soo Do",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "seo-yeon-kim.png",
    "gallery": [
      "seo-yeon-kim-1.png",
      "seo-yeon-kim-2.png",
      "seo-yeon-kim-3.png",
      "seo-yeon-kim-4.png",
      "seo-yeon-kim-5.png"
    ],
    "bio": {
      "origin": "Seo-Yeon grew up in Daegu in a family that treated Tang Soo Do as heritage rather than hobby — her grandfather practised it, her father taught it, and she resented all of it until she was good enough to appreciate what she'd been given. She competed through the Korean Tang Soo Do federation from age ten, won more than she mentions, and arrived at the circuit having quietly outgrown every amateur room she'd ever been in.",
      "style": "A Tang Soo Do striker with long, whipping kicks that land before opponents have calculated the range, and sharp closed-fist techniques that her opponents consistently underestimate until they feel them. Her combinations are beautiful in the way a trap is beautiful — elegant up close, damaging on contact. She fights without urgency and without wasted motion.",
      "personal": "Dry-witted and composed, she is the fighter on the roster most likely to compliment your technique while dismantling it. Dresses well, speaks carefully, and finds most pre-fight theatrics mildly embarrassing. Lives on Daegu's spicy braised short ribs and excellent coffee. Knows exactly how good she is. Finds it gauche to say so.",
      "rival": "Watches Yuna Seo with the particular interest of someone who understands the Tang Soo Do versus Taekwondo lineage argument intimately — the older art versus the Olympic descendant, sixty years of Korean martial politics. Privately finds Jia Park's theatrics unnecessary.",
      "goal": "Fights to make Tang Soo Do visible again on a stage that forgot it existed, and to prove the art that came before Taekwondo still produces sharper fighters than the one that replaced it."
    },
    "quotes": [
      "\"당수도는 사라지지 않았다. 그저 조용해졌을 뿐.\" (Tang Soo Do didn't disappear. It just got quiet.)",
      "\"I don't need you to know my name before the fight. You'll know it after.\""
    ],
    "stats": {
      "age": "23",
      "height": "172 cm (5'8\")",
      "weight": "54 kg (119 lb)",
      "reach": "172 cm (68 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "yeon-ji-moon",
    "name": "Yeon-Ji Moon",
    "alias": "Still Water",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Seoul (Hongdae)",
    "baseStyle": "Muay Thai",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "yeon-ji-moon.png",
    "gallery": [
      "yeon-ji-moon-1.png",
      "yeon-ji-moon-2.png",
      "yeon-ji-moon-3.png",
      "yeon-ji-moon-4.png",
      "yeon-ji-moon-5.png"
    ],
    "bio": {
      "origin": "Yeon-Ji grew up in the Hongdae district of Seoul — Line 2, tteokbokki stalls, 24-hour convenience stores. Her mother's store sat three blocks from a Muay Thai gym that opened when she was sixteen, and she walked through the door mostly because she had nowhere else to be. She had talent nobody expected, including her. She competed in domestic circuits for three years before the invitation found her on a Tuesday night shift.",
      "style": "A Muay Thai southpaw who fights in short, deliberate bursts and relies on timing rather than volume. She sits in mid-range, draws the extension, and punishes the return with body kicks that compound over rounds. Direct, unpretentious, efficient — she has no signature technique because every technique is equally dangerous when the moment is right.",
      "personal": "Low-key and direct, she treats the circuit as something she showed up to and intends to do properly. Works shifts at her mother's convenience store between camps and doesn't consider this unusual. Eats whatever is in the store. Sleeps well. No social media. No strong opinion about that.",
      "rival": "Exists in quiet parallel with Chae-Rin Oh — two young Korean Muay Thai southpaws from the same side of Seoul. The comparison is inevitable. Neither has said anything about it yet.",
      "goal": "Fights because the invitation came and she said yes, and because the gym is the first room she has been in where the size of the effort matches the size of the result."
    },
    "quotes": [
      "\"초대장이 왔고 나는 그냥 왔어.\" (The invitation came and I just came.)",
      "\"I work the store Tuesday nights. The circuit fills in the rest.\""
    ],
    "stats": {
      "age": "20",
      "height": "165 cm (5'5\")",
      "weight": "52 kg (115 lb)",
      "reach": "165 cm (65 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "sora-kim",
    "name": "Sora Kim",
    "alias": "Hafu",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Seoul (Itaewon)",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "sora-kim.png",
    "gallery": [
      "sora-kim-1.png",
      "sora-kim-2.png",
      "sora-kim-3.png",
      "sora-kim-4.png",
      "sora-kim-5.png"
    ],
    "bio": {
      "origin": "Sora was born in Itaewon to a Korean father and a Japanese mother who had met at a language school in Osaka and followed the marriage to Seoul. She grew up in the district where nobody looks twice at mixed families, which meant she spent her first eighteen years in the one Korean neighbourhood that made sense to her and the rest of her time explaining herself to everywhere else. She found kickboxing through a gym her father frequented and stayed because it was the first room where her background was irrelevant. What mattered was whether she could move.",
      "style": "A compact, high-output Orthodox kickboxer who combines tight Korean footwork with a punching economy absorbed from a Japanese striking coach at seventeen. She works in volume bursts and resets fast, never staying in the pocket long enough to get comfortable. The dragon on her shorts is a deliberate choice: both cultures claim the animal and so does she.",
      "personal": "Privately guarded and publicly self-possessed. Speaks Korean and Japanese without accent, switches between them in the same sentence, and will correct assumptions about either side. Runs on Itaewon street food and Han River sunset walks. The gym is the one place where no one asks.",
      "rival": "Watches Emi Sato-Wright from the opposite angle — a Japanese-American navigating Japan, while Sora is Korean-Japanese navigating Korea. Two fighters of divided heritage, different flags, a comparison neither has started but both are aware is coming. Also circling Seo-Yeon Kim, whose Tang Soo Do traditionalism represents exactly the kind of Korean identity that has never fully claimed Sora.",
      "goal": "Fights to prove the hafu belongs in the ring and on the card and in the record books, under whatever flag the crowd is surprised to see her carry."
    },
    "quotes": [
      "\"하프라고 불렸어. 지금은 내 이름이야.\" (They called me hafu. Now it's my name.)",
      "\"Both flags. Neither apology.\""
    ],
    "stats": {
      "age": "22",
      "height": "170 cm (5'7\")",
      "weight": "53 kg (117 lb)",
      "reach": "170 cm (67 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "dewi-sukarno",
    "name": "Dewi Sukarno",
    "alias": "Kintamani",
    "nationality": "Indonesia",
    "flag": "🇮🇩",
    "hometown": "Denpasar",
    "baseStyle": "Muay Thai",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c75a3a",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "dewi-sukarno.png",
    "gallery": [
      "dewi-sukarno-1.png",
      "dewi-sukarno-2.png",
      "dewi-sukarno-3.png",
      "dewi-sukarno-4.png",
      "dewi-sukarno-5.png"
    ],
    "bio": {
      "origin": "Dewi grew up in Denpasar in a family of temple dancers — her mother performed legong, her grandmother before her. She found Muay Thai at sixteen through a gym run by a Thai coach who had retired to Bali, and trained in the compound of a pura in Ubud where the owner let fighters use the courtyard at dawn. The spiritual discipline of the dance and the physical discipline of the gym were not, in her understanding, separate things.",
      "style": "A southpaw Muay Thai striker with unhurried, deliberate rhythm — she sets the pace and refuses to be pulled from it. Long teep, patient range work, and a left kick that builds in power across rounds rather than arriving all at once. She fights the way Bali moves: in cycles, with ceremony, toward an ending that was decided before it began.",
      "personal": "Grounded and interior, she performs a brief offering ritual before every training session — a small canang sari left at the gym entrance, flowers and incense, a minute of stillness. Nobody in her gym questions it anymore. Speaks Balinese, Indonesian, and enough Thai to train in both languages. Lives on lawar and jaja bali and considers eating badly a form of disrespect to the body she is asking to fight.",
      "rival": "Ayu Prasetya is the other Indonesian flag — Jakarta's Pencak Silat precision versus Bali's Muay Thai. Two islands, two martial philosophies, one nation. Neither has been publicly hostile. The tension is structural and neither needs to name it.",
      "goal": "Fights to prove that what Bali built — a culture of discipline, of offering, of doing the hard thing with grace — produces fighters as well as it produces dancers. And to make the offering worthwhile."
    },
    "quotes": [
      "\"Bali mengajarkan saya bahwa segala sesuatu dilakukan dengan tujuan atau tidak sama sekali.\" (Bali taught me that everything is done with intention or not at all.)",
      "\"I leave flowers at the door. Then I go to work.\""
    ],
    "stats": {
      "age": "21",
      "height": "168 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "168 cm (66 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "pema-choden",
    "name": "Pema Choden",
    "alias": "Druk",
    "nationality": "Bhutan",
    "flag": "🇧🇹",
    "hometown": "Thimphu",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#e8a020",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "pema-choden.png",
    "gallery": [
      "pema-choden-1.png",
      "pema-choden-2.png",
      "pema-choden-3.png",
      "pema-choden-4.png",
      "pema-choden-5.png"
    ],
    "bio": {
      "origin": "Pema grew up in Thimphu, in a country that measures itself by happiness rather than output, and found boxing through a small gym that a returning diaspora coach opened near the city's central archery ground. She was the only girl who kept coming back. In a nation with no professional fight circuit to speak of, she trained on borrowed equipment and video tape, sparred against men because there was no one else, and arrived at DRAGONS as the first Bhutanese fighter most of the roster had ever met.",
      "style": "A composed southpaw boxer who fights with startling economy — no wasted motion, no emotional tells, a left hand that arrives on a straight line the moment an opponent overcommits. She has the patience of someone raised in a Buddhist framework: she does not chase, she does not panic, she waits for the opening the opponent hands her and takes exactly that and nothing more.",
      "personal": "Genuinely serene in a way that unsettles opponents who expect hostility. Bows to the four directions before a bout — an offering, not a performance. Speaks Dzongkha and careful English, lives on ema datshi (chili and cheese) she insists the circuit's caterers cannot replicate, and treats winning and losing as the same event observed from different sides. The calm is not a strategy. It is simply how she was raised.",
      "rival": "Recognises something familiar in Dewi Sukarno — another fighter who carries a spiritual practice into a violent sport and sees no contradiction. The two have an unspoken understanding that sets them apart from the roster's louder personalities.",
      "goal": "Fights to put Bhutan on a map that has never included it, and to prove that a fighter can arrive without anger and leave without regret — and still win."
    },
    "quotes": [
      "\"དྲུག་ཡུལ། མེ་ཏོག་གི་ཡུལ་མིན། འབྲུག་གི་ཡུལ།\" (Land of the Thunder Dragon. Not a land of flowers — a land of dragons.)",
      "\"I don't fight angry. Anger is just another opening.\""
    ],
    "stats": {
      "age": "22",
      "height": "167 cm (5'6\")",
      "weight": "53 kg (117 lb)",
      "reach": "168 cm (66 in)",
      "stance": "Southpaw",
      "debut": "2026"
    }
  },
  {
    "id": "sunita-gurung",
    "name": "Sunita Gurung",
    "alias": "Khukuri",
    "nationality": "Nepal",
    "flag": "🇳🇵",
    "hometown": "Kathmandu",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#9b1b30",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "sunita-gurung.png",
    "gallery": [
      "sunita-gurung-1.png",
      "sunita-gurung-2.png",
      "sunita-gurung-3.png",
      "sunita-gurung-4.png",
      "sunita-gurung-5.png"
    ],
    "bio": {
      "origin": "Sunita carries the Gurung surname of Nepal's hill people — the community the British and Indian armies have recruited Gurkhas from for two centuries. Her grandfather served; her father did not qualify and never forgave himself for it. She grew up in Kathmandu on the family's stories of the khukuri and the motto behind it, found kickboxing at a gym in Thamel that catered mostly to trekkers passing through, and turned the fearlessness she'd been raised on into a fighting style. She trained at altitude. Everyone she fights is fighting at sea level.",
      "style": "A relentless forward-pressure kickboxer with a conditioning base that comes from growing up thin-aired and mountain-hard. She walks opponents down without pause, absorbing to advance, and throws in tight vicious combinations that reflect the khukuri's logic: close the distance, commit fully, do not draw the blade to threaten. Her cardio does not break. That is the whole fight, and opponents know it by the third round.",
      "personal": "Quietly, absolutely fearless — not reckless, but genuinely without the hesitation most fighters carry. Wears a small khukuri pendant her grandfather gave her and touches it before every bout. Lives on dal bhat twice a day without variation and considers this a complete nutritional philosophy. Speaks softly, means everything she says, and has the Gurkha creed tattooed in Nepali down her ribs: better to die than live a coward.",
      "rival": "Sees Ainur Nazarbayeva as the closest thing on the roster to a mirror — another fighter from a hard place who walks forward at the same pace whether winning or losing. Neither has said much to the other. Both are aware the fight would be a war.",
      "goal": "Fights to redeem the qualification her father failed and to carry the Gurkha name onto a stage where nobody expected Nepal to show up at all."
    },
    "quotes": [
      "\"काँतर भएर बाँच्नु भन्दा मर्नु राम्रो।\" (Better to die than live a coward.)",
      "\"You don't draw the khukuri to scare someone. You draw it to finish.\""
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
    "id": "leilani-kahale",
    "name": "Leilani Kahale",
    "alias": "Nalu",
    "nationality": "USA",
    "flag": "🇺🇸",
    "hometown": "Hilo, Hawaii",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#002868",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "leilani-kahale.png",
    "gallery": [
      "leilani-kahale-1.png",
      "leilani-kahale-2.png",
      "leilani-kahale-3.png",
      "leilani-kahale-4.png",
      "leilani-kahale-5.png"
    ],
    "bio": {
      "origin": "Leilani is Native Hawaiian — Kanaka Maoli — raised on the Big Island in Hilo, where the rain never fully stops and the ocean sets the schedule. She grew up paddling outrigger and surfing before she could properly walk, and came to fighting through a Kapolei gym that blended kickboxing with the grappling instincts of lua, the old Hawaiian warrior art her uncle half-remembered and taught her anyway. She fights under the American flag with the Hawaiian sovereignty question sitting unspoken behind everything, the way it does for a lot of Kanaka Maoli.",
      "style": "A rangy, rhythmic kickboxer who fights the way the ocean moves — patient swells, then sudden force. She times her opponents' rhythm and breaks it with kicks that arrive on the half-beat, and her balance is uncanny, drawn from a lifetime on boards and boats. The Nalu name means wave, and it is literal: she gathers, she builds, she lands with the weight of something that was rolling toward you the whole time.",
      "personal": "Warm, grounded, and deeply rooted in place — she talks about the island the way other fighters talk about their coaches. Brings poi and dried aku everywhere and shares it with people who don't ask. Opens every camp by facing the water, wherever the nearest water is. Carries the ancestral weight of a colonized people lightly in conversation and heavily in the ring. Says mahalo and means it.",
      "rival": "Feels an easy kinship with Chayanne Locklear and Tala Cholena — the roster's other Indigenous fighters, Lumbee and Choctaw, who understand exactly what it means to represent a nation that the flag on your shorts does not name. The three of them are a quiet bloc.",
      "goal": "Fights to carry Kanaka Maoli onto a stage that has only ever seen Hawaii as a vacation, and to honour an ocean and an ancestry that the United States absorbed but never erased."
    },
    "quotes": [
      "\"He nalu au. ʻAʻole hiki iā ʻoe ke kāpae i ke kai.\" (I am a wave. You cannot stop the ocean.)",
      "\"The flag says USA. My blood says something older.\""
    ],
    "stats": {
      "age": "21",
      "height": "170 cm (5'7\")",
      "weight": "54 kg (119 lb)",
      "reach": "171 cm (67 in)",
      "stance": "Switch",
      "debut": "2026"
    }
  },
  {
    "id": "darya-hosseini",
    "name": "Darya Hosseini",
    "alias": "Pahlavan",
    "nationality": "Iran",
    "flag": "🇮🇷",
    "hometown": "Tehran",
    "baseStyle": "Wrestling",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#0e8c8c",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "darya-hosseini.png",
    "gallery": [
      "darya-hosseini-1.png",
      "darya-hosseini-2.png",
      "darya-hosseini-3.png",
      "darya-hosseini-4.png",
      "darya-hosseini-5.png"
    ],
    "bio": {
      "origin": "Darya grew up in Tehran in the shadow of a national obsession — wrestling is Iran's sport, its pride, its oldest continuous tradition — and learned it the way Iranian boys are expected to and Iranian girls are quietly discouraged from. She trained in a zurkhaneh, the traditional 'house of strength,' where the Pahlavani rituals of the old heroic wrestlers are still practised to drums and recited poetry. She crossed into full MMA to have somewhere to actually compete, and arrived at the circuit carrying a tradition most of the roster has never heard of.",
      "style": "A dominant wrestling-based fighter who closes distance behind a high guard, gets underhooks, and puts opponents on the ground where her control is suffocating. She grinds rather than flurries — positional, patient, inevitable. The Pahlavani training shows in her base and her balance: she is extraordinarily hard to move and extraordinarily good at moving others.",
      "personal": "Carries herself with the javanmardi code the zurkhaneh drilled into her — chivalry, humility, restraint, strength held in reserve. Helps opponents up. Refuses to talk trash and finds the practice genuinely confusing. Recites Ferdowsi under her breath as a warm-up. Lives on ash reshteh and tahdig and misses Tehran constantly. The gentleness is real and so is the crushing top game.",
      "rival": "Regards Alina Bek and Safiya Aronov — the Kazakh Sambo and MMA fighters — as the grapplers whose respect she actually wants, the only ones on the roster who understand what it means to fight from the mat in a striker's world.",
      "goal": "Fights to carry Pahlavani wrestling onto a global stage and to prove that the oldest tradition in the sport still produces its most complete fighters — and that an Iranian woman had every right to inherit it."
    },
    "quotes": [
      "\"پهلوان کسی است که خود را می‌بازد، نه حریف را.\" (A pahlavan conquers themselves, not their opponent.)",
      "\"I will help you up after. On the ground, I give you nothing.\""
    ],
    "stats": {
      "age": "21",
      "height": "168 cm (5'6\")",
      "weight": "54 kg (119 lb)",
      "reach": "167 cm (66 in)",
      "stance": "Orthodox",
      "debut": "2026"
    }
  },
  {
    "id": "daeun-choi",
    "name": "Daeun Choi",
    "alias": "Sanbok",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Busan (Gamcheon)",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "daeun-choi.png",
    "gallery": ["daeun-choi-1.png","daeun-choi-2.png","daeun-choi-3.png","daeun-choi-4.png","daeun-choi-5.png"],
    "bio": {
      "origin": "Daeun grew up on the sanbok-doro — the hillside roads above Gamcheon, where the houses were built by refugees who had nowhere else to go and the stairs are the only way up. She was a Taekwondo prospect at fourteen, good enough that the Busan federation noticed her, and gone by seventeen after an incident nobody involved will describe on record. No academy would take her after that. She found an unsanctioned ring in a Nampo-dong basement instead, fought there for money, and kept the Taekwondo she'd been taught while abandoning everything the federation had wrapped around it.",
      "style": "A Taekwondo-rooted kickboxer who kept the kicks and discarded the rulebook. Her head kick is genuinely elite — federation-grade, the thing they wanted to build a career on — but she throws it behind heavy hands and closes distance the way you learn in a basement, not a dojang. Orthodox, direct, and completely uninterested in scoring points. She fights to end it.",
      "personal": "Blunt to the point of rudeness, with no interest in the parts of the sport that happen outside the ring. Runs the Gamcheon stairs for conditioning because it's free and it works. Eats at the same Nampo-dong stall her mother worked at for twenty years. Doesn't do interviews well, doesn't pretend to, and finds the circuit's polish faintly ridiculous. Loyal to about four people and indifferent to everyone else.",
      "rival": "Yuna Seo is the same city and the opposite life — the Busan the tourism board photographs versus the Busan on the hill. They came through the same Taekwondo system; one of them was promoted and one was discarded. Daeun has never publicly commented on Yuna. Everyone who knows both of them understands that means something.",
      "goal": "Fights to make the federation that erased her at seventeen watch her on a stage they don't control, and to put Gamcheon on a card that has only ever seen the postcard version of her city."
    },
    "quotes": [
      "\"산복도로에서 자랐어. 계단 말고는 올라갈 방법이 없었어.\" (I grew up on the sanbok roads. There was no way up but the stairs.)",
      "\"They taught me the kick. They didn't teach me to stop.\""
    ],
    "stats": { "age": "21", "height": "169 cm (5'7\")", "weight": "53 kg (117 lb)", "reach": "169 cm (67 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "sarah-yoon",
    "name": "Sarah Yoon",
    "alias": "Magpie",
    "nationality": "Australia",
    "flag": "🇦🇺",
    "hometown": "Sydney",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#00843d",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "sarah-yoon.png",
    "gallery": ["sarah-yoon-1.png","sarah-yoon-2.png","sarah-yoon-3.png","sarah-yoon-4.png","sarah-yoon-5.png"],
    "bio": {
      "origin": "Sarah was born in Gangneung, on South Korea's east coast, and left at six when her parents took a business visa to Sydney and never went back. She grew up in Strathfield among the largest Korean community in Australia, spent her adolescence between Korean school on Saturdays and Bondi on Sundays, and found boxing at a gym in Marrickville that took her seriously before anyone else did. She has been back to Gangneung twice. She still calls it home in a way she cannot fully justify.",
      "style": "A relaxed southpaw boxer with a deceptive economy — she stays loose, hands low, chatting with her corner between rounds, and then lands a left hand that arrives from nowhere and changes the fight. Opponents consistently read her calm as passivity and pay for it. Sharp counters, excellent distance, and a punch selection that comes from a coach who taught her to hit once and hit properly.",
      "personal": "Easygoing to a degree the rest of the roster finds slightly suspicious — genuinely relaxed, genuinely funny, and genuinely uninterested in the psychological warfare most fighters run. Speaks Korean with a Gangneung accent that Seoul fighters find hilarious and Australian English with the vowels fully committed. Lives on her mother's kimchi jjigae and a flat white she is annoyingly particular about. The warmth is real. So is the left hand.",
      "rival": "Draws the obvious comparison to Lena Fong — two Western-passport fighters of Asian descent circling Asian rings, both perfectly comfortable and both quietly aware the other exists. Also finds herself measured against the Korean bloc, who cannot decide whether she counts as one of theirs. She has no strong opinion on the matter, which they find more irritating than an answer.",
      "goal": "Fights because it turned out she was very good at it and nothing else has ever felt that clear. Would like Gangneung to know her name, and Sydney to keep pronouncing it right."
    },
    "quotes": [
      "\"강릉에서 태어났고, 시드니에서 자랐어. 둘 다 진짜야.\" (Born in Gangneung, raised in Sydney. Both are real.)",
      "\"Everyone reads the smile wrong. That's fine. That's the point.\""
    ],
    "stats": { "age": "21", "height": "170 cm (5'7\")", "weight": "53 kg (117 lb)", "reach": "171 cm (67 in)", "stance": "Southpaw", "debut": "2026" }
  },
  {
    "id": "talia-faleolo",
    "name": "Talia Faleolo",
    "alias": "Westie",
    "nationality": "Australia",
    "flag": "🇦🇺",
    "hometown": "Mount Druitt, Sydney",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#00843d",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "talia-faleolo.png",
    "gallery": ["talia-faleolo-1.png","talia-faleolo-2.png","talia-faleolo-3.png","talia-faleolo-4.png","talia-faleolo-5.png"],
    "bio": {
      "origin": "Talia is Mount Druitt — Samoan father, Lebanese-Australian mother, five siblings, and a house where three languages were shouted across the same kitchen. Her father's family came from Savai'i in the seventies and put down roots in the west when the west was where you could afford to. She got into a PCYC gym at thirteen because her mother wanted her tired, and stayed because it turned out she was the best one there by a distance nobody could ignore. She has never trained east of Parramatta and does not intend to start.",
      "style": "An aggressive, high-volume orthodox kickboxer who fights on the front foot and talks the entire time. She throws in long combinations that start with the hands and finish with a kick nobody saw coming, and her pace never drops because her conditioning was built running Blacktown streets in the summer. Chaotic to face and genuinely fun to watch — she is the fighter the crowd picks up whether they meant to or not.",
      "personal": "Loud, funny, and completely unfiltered — she has no interest in the composed-professional act and finds fighters who perform humility mildly hilarious. Talks in the ring, talks at the weigh-in, talks after. Deeply family-run: her siblings travel to fights, her mother has opinions about her corner, her father says almost nothing and she checks for him anyway. Eats her grandmother's palusami and her mother's kibbeh and will fight you about which is better.",
      "rival": "The obvious one is Sarah Yoon — two Australians, opposite coasts of the same city, opposite everything. Sarah is calm and eastern-suburbs polished; Talia is western Sydney with the volume up. Talia thinks it would be the easiest sell on the card. Sarah has not responded, which Talia interprets as agreement.",
      "goal": "Fights to put Mount Druitt on a card that has never once mentioned it, and because her father drove her to a gym in Blacktown four nights a week for six years without ever asking her to explain why."
    },
    "quotes": [
      "\"They call us westies like it's an insult. Mate, it's on my shorts.\"",
      "\"O le tele o sua, o le tele lea o le taumafa.\" (The more the soup, the more the feast.)"
    ],
    "stats": { "age": "20", "height": "168 cm (5'6\")", "weight": "53 kg (117 lb)", "reach": "169 cm (66 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "avani-rao",
    "name": "Avani Rao",
    "alias": "Indra",
    "nationality": "India",
    "flag": "🇮🇳",
    "hometown": "Bangalore",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#FF9933",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "avani-rao.png",
    "gallery": ["avani-rao-1.png","avani-rao-2.png","avani-rao-3.png","avani-rao-4.png","avani-rao-5.png"],
    "bio": {
      "origin": "Avani grew up in Bangalore to an Indian father and a Eurasian mother, in a house that ran on three languages and never fully agreed on which one came first. She started in Wushu at a club near Cubbon Park because a cousin was already going, moved to Muay Thai in her teens when the acrobatics stopped satisfying her, and found boxing last — the discipline that finally organised everything else she'd learned into something that could actually win a fight. No single art produced her. She built herself out of the parts that worked.",
      "style": "A technical striker whose combinations don't repeat — she reads distance and angle in real time and reaches for whichever tool fits, a Wushu-fast entry into a boxing combination finished with a Muay Thai teep to reset range. Fast, disciplined, and always thinking two exchanges ahead. Her one honest weakness is that the fight IQ occasionally outruns the discipline to protect herself, and she takes on more damage than the scorecards suggest she should.",
      "personal": "Calm, introspective, and quietly precise about everything — the mala bracelet never comes off, worn down to a shine from a habit she's had since she was twelve, and she runs the beads between rounds the way other fighters pace. Disciplined in training to a degree the rest of the roster finds slightly monastic. Keeps a lower back tattoo she's never explained and doesn't intend to. Speaks English, Hindi, and Kannada, and switches between them mid-sentence without noticing she's done it.",
      "rival": "The roster hasn't decided who she belongs against yet — she trained in three disciplines that put her in nobody's natural bracket, and the Matchmaker has been unusually quiet about her file. She's watched the China trio's internal argument over who represents what with real interest, recognising a version of her own unresolved question.",
      "goal": "Fights to put an Indian name on a card that has never had one, and to prove that a fighter built from three borrowed traditions can still hit harder than someone who only ever trained in one."
    },
    "quotes": [
      "\"Three styles trained, one fist thrown — that's the only lineage that matters.\"",
      "\"I didn't inherit a style. I built one.\""
    ],
    "stats": { "age": "22", "height": "167 cm (5'6\")", "weight": "54 kg (119 lb)", "reach": "167 cm (66 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "dao-kongfai",
    "name": "Dao",
    "alias": "Kongfai",
    "nationality": "Laos",
    "flag": "🇱🇦",
    "hometown": "Vientiane",
    "baseStyle": "Muay Lao",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1a3e8c",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "dao-kongfai.png",
    "gallery": ["dao-kongfai-1.png","dao-kongfai-2.png","dao-kongfai-3.png","dao-kongfai-4.png","dao-kongfai-5.png"],
    "bio": {
      "origin": "Dao grew up a few streets back from the Mekong in Vientiane, close enough that the smell of the river was just the smell of home. Muay Lao is not a sport with academies on every corner the way its Thai cousin is — she learned it the way most Lao fighters still do, through an uncle who'd fought on temple-fair cards and a training group that met on packed dirt behind a noodle stall after the lunch rush cleared out. The circuit's scouts nearly missed her entirely. Laos rarely produces fighters anyone outside the country hears about, and she has never once treated that as a disadvantage.",
      "style": "A clinch-first fighter who wants the fight close and ugly from the opening exchange — Muay Lao's elbow-and-knee grammar, thrown from tighter range and with less of the ceremonial distance Muay Thai keeps. She fights like the clinch is home and the open range is just the walk there. Economical, relentless at close quarters, and comfortable absorbing to land — she is not chasing a highlight, she is chasing the moment her opponent stops wanting to be that close to her.",
      "personal": "Unhurried outside the ring in a way that reads almost domestic — she still does her own market shopping in Vientiane when she's home, still cooks for whoever's around, still stops for iced coffee at the same stall between sessions and says almost nothing while she drinks it. The calm is not performance. She has one setting for daily life and a completely different one for the clinch, and the gap between the two is the most interesting thing about her to anyone who's spent real time with her.",
      "rival": "The roster's other Southeast Asian strikers — Kanyarat and Nong Pim among the Thai contingent especially — represent the tradition Muay Lao is constantly measured against and constantly overlooked next to. Dao has said, once, that she's tired of being introduced as 'basically Muay Thai.' She has not said it twice. She intends to make the point with elbows instead.",
      "goal": "Fights to put Laos — a country the circuit's own marketing has never once mentioned — on a card built to showcase everyone else's traditions, and to make Muay Lao a name people learn instead of a footnote they skip."
    },
    "quotes": [
      "\"They keep calling it Thai boxing's cousin. I am not somebody's cousin.\"",
      "\"I don't need the room. I just need you close enough to reach.\""
    ],
    "stats": { "age": "21", "height": "165 cm (5'5\")", "weight": "52 kg (115 lb)", "reach": "164 cm (65 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "tseyang-dolma",
    "name": "Tseyang Dolma",
    "alias": "The Highland Dragon",
    "nationality": "Tibet",
    "flag": "🏴",
    "hometown": "Lhasa",
    "baseStyle": "Amdo MMA",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#6e8c15",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "tseyang-dolma.png",
    "gallery": ["tseyang-dolma-1.png","tseyang-dolma-2.png","tseyang-dolma-3.png","tseyang-dolma-4.png","tseyang-dolma-5.png"],
    "bio": {
      "origin": "Tseyang was raised in Lhasa by a Tibetan father and a mother from Hong Kong, in a household that kept Losar and Lunar New Year with equal seriousness and never treated the two halves of her as a contradiction. She grew up on the Bökh wrestling her father's family had practiced for generations, learned at altitude on packed earth before she ever set foot in an actual gym, and added striking later — imported, borrowed, bolted onto a wrestling base that was never going anywhere. She still trains at altitude by choice. She has never once treated her conditioning as an accident of geography; she treats it as an inheritance.",
      "style": "Amdo MMA — traditional Tibetan wrestling stance and clinch-entry married to a striking arsenal built for closing that gap fast. She wants underhooks and top position, and she is patient enough to wait an entire exchange for the takedown that gets her there. Ground-and-pound finisher once she's on top; disciplined and unhurried in getting there. Her cardio at sea level borders on unfair — nobody the circuit has flown in from lower altitude has yet managed to slow her down in a third round.",
      "personal": "Devout in a way that is simply part of her day rather than a performance of it — morning prayer at the local monastery before training, butter tea with family most evenings, the Tibetan language and its script kept close even as English and Cantonese move through the same house. Studies constantly, reads whenever there's a gap in the schedule, and carries herself like someone who has never needed to raise her voice to be taken seriously. The circuit's louder personalities find her stillness unreadable. She has never minded being underestimated on that basis.",
      "rival": "Watches Rainie Yang and Vanessa Chow — China and Hong Kong's judo entries — with the specific interest of someone who knows exactly how a grappling-first fighter gets discounted by a striking-heavy card. Has not fought either. Suspects the Matchmaker is saving it.",
      "goal": "Fights to bring Bökh — a wrestling tradition most of the circuit's audience has never heard named — onto a card built almost entirely on borrowed Southeast and East Asian striking arts, and to make Tibet a line on the roster instead of a footnote inside someone else's nationality field."
    },
    "quotes": [
      "\"You can out-strike me. You cannot out-breathe me.\"",
      "\"I fight for my land. I fight for my people. I fight to be free.\""
    ],
    "stats": { "age": "19", "height": "168 cm (5'6\")", "weight": "52 kg (115 lb)", "reach": "166 cm (65 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "manawa",
    "name": "Manawa",
    "alias": "Sky Maiden",
    "nationality": "New Zealand",
    "flag": "🇳🇿",
    "hometown": "Wellington",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#164a8c",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "manawa.png",
    "gallery": ["manawa-1.png","manawa-2.png","manawa-3.png","manawa-4.png","manawa-5.png"],
    "bio": {
      "origin": "Manawa grew up between a small West Coast town and Wellington, Māori on her mother's side and Pākehā on her father's, in a household where whakapapa was spoken about plainly and often rather than treated as an occasion. She started boxing at twelve at a converted RSA hall because her older cousin trained there, and stayed because New Zealand boxing has a real, unglamorous pedigree behind it — hard gyms, harder sparring, no shortcuts. She still goes home to the coast between camps, still knows the black sand beaches better than any ring she's fought in.",
      "style": "A classical boxer first — tight guard, sharp jab, footwork built on angles rather than pure aggression. She controls range the old-fashioned way and waits for the opponent to make the mistake rather than manufacturing chaos to force one. Patient, composed, and technically several levels above most of the volume-forward strikers she's matched against. Her counter right hand is the shot her coaches built an entire camp around.",
      "personal": "Understated and dryly funny, with an ease in her own skin that reads as quiet confidence rather than performance. Comfortable barefoot on a beach or in front of a camera, equally comfortable saying nothing for an hour. Carries her Māori heritage without making it a talking point — it simply is who she is, present in how she trains, how she eats, how she moves through both a big city and a small coastal town without changing who she is in either. Finishes a long day the same way most of the country does: fish and chips, eaten out of the paper, no ceremony required.",
      "rival": "Talia Faleolo is the obvious comparison — both Pacific-heritage fighters representing countries the circuit's marketing has treated as afterthoughts next to its East and Southeast Asian core. Manawa has said she'd fight Talia anywhere, any time, no build-up needed. Talia has said the same. Neither has explained why it hasn't happened yet.",
      "goal": "Fights to put New Zealand — and specifically a Māori fighter representing it — on a card that has never once included either, and to prove that a boxer with no gimmick and no highlight-reel flash can still out-think anyone the circuit puts in front of her."
    },
    "quotes": [
      "\"I don't need to be loud. I need to be right, and I need to be right longer than you.\"",
      "\"Kia kaha. Stay strong — that's not a slogan where I'm from. That's just Tuesday.\""
    ],
    "stats": { "age": "23", "height": "170 cm (5'7\")", "weight": "53 kg (117 lb)", "reach": "172 cm (68 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "sok-channary",
    "name": "Sok Channary",
    "alias": "Moon-Faced",
    "nationality": "Cambodia",
    "flag": "🇰🇭",
    "hometown": "Phnom Penh",
    "baseStyle": "Kun Khmer",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#aa42bf",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "sok-channary.png",
    "gallery": ["sok-channary-1.png","sok-channary-2.png","sok-channary-3.png","sok-channary-4.png","sok-channary-5.png"],
    "bio": {
      "origin": "Channary grew up in Phnom Penh, in a family that had fought for the country's fighting tradition to survive at all — Kun Khmer was nearly erased within living memory, and every gym that teaches it now does so as an act of restoration as much as sport. Her grandfather trained in secret before it was safe to train openly; her mother trained the moment it was. Channary started as a small child in a Phnom Penh gym that still hangs a photograph of her grandfather on the wall, and has never once needed reminding what the art cost to keep alive.",
      "style": "Kun Khmer in its purest form — elbows and knees thrown with an economy and violence that Muay Thai's more ceremonial pace doesn't ask for, and a clinch game built to end exchanges quickly rather than control them at length. Aggressive forward pressure married to real technical precision; she is not wild, she is efficient, and efficient hurts more. Opponents who expect a slower, more ritualized striking pace are consistently unprepared for how early she wants the fight to get violent.",
      "personal": "Quiet and watchful outside the ring, with a stillness that reads as devotion rather than shyness — she lights incense at the local pagoda before fights, keeps the offering simple, and treats the ritual as private rather than performative. Shops the wet markets herself, prefers cooking at home to eating out, and carries herself with the unhurried calm of someone raised around a tradition that survived by being patient. The nickname — Moon-Faced, an old Khmer compliment for calm, luminous features — was her grandmother's before it was hers.",
      "rival": "Watches the Thai contingent — Nong Pim and Kanyarat especially — with the specific edge of someone representing a striking art that spent decades being read as a regional variant of its more famous neighbor. Has never said this aloud in the ring. Has made the point with elbows instead, which she considers the more honest venue for it.",
      "goal": "Fights to put Kun Khmer — a tradition her own country nearly lost — on a card that already features Muay Thai, Lethwei, and Muay Lao, and to make sure Cambodia is remembered as a fighting nation in its own right, not a footnote in someone else's."
    },
    "quotes": [
      "\"They ask me if it's just Thai boxing with a different name. I ask them to step closer and find out.\"",
      "\"My grandfather trained where no one could see him. I fight where everyone can.\""
    ],
    "stats": { "age": "22", "height": "165 cm (5'5\")", "weight": "52 kg (115 lb)", "reach": "164 cm (65 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "risa-villanueva",
    "name": "Risa Villanueva",
    "alias": "Kuya's Girl",
    "nationality": "Japan",
    "flag": "🇯🇵",
    "hometown": "Tokyo",
    "baseStyle": "Panantukan",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#c0263a",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "risa-villanueva.png",
    "gallery": ["risa-villanueva-1.png","risa-villanueva-2.png","risa-villanueva-3.png","risa-villanueva-4.png","risa-villanueva-5.png"],
    "bio": {
      "origin": "Risa was born in Tokyo to a Japanese father and a Filipino mother, and grew up in a household split evenly between two languages and two entirely different rhythms of life. Panantukan came from her mother's older brother — a kuya who'd learned it growing up outside Manila and taught it to her the way it's traditionally passed down, hand to hand, in a parking lot rather than a formal gym. She trained with him every visit to the Philippines and every trip he made to Tokyo, and never once trained the art anywhere else. It is, as far as she's concerned, still his to have taught her.",
      "style": "Panantukan's dirty-boxing philosophy translated into the ring — open-hand strikes, rapid combinations, and an unpredictability that trips up opponents trained against cleaner, more codified striking arts. She fights like the rules are a suggestion she's only partially agreed to. Fast hands, unconventional angles, and a willingness to turn a clean exchange messy the moment it stops working in her favor.",
      "personal": "Quietly observant, more at ease people-watching from a Tokyo café window than holding court in one. Still does her own convenience-store runs, still walks the same park route most mornings, unremarkable and unbothered in a city that mostly leaves her alone. Speaks Japanese and Tagalog with the same ease, code-switches without noticing, and treats both halves of where she's from as simply true rather than something to explain or defend.",
      "rival": "The Philippines contingent — Amihan Reyes, Reyna Bautista, Soleil Aguilar — have all, at different points, half-jokingly claimed her as one of theirs. She has not corrected them. She has also not confirmed it. The ambiguity amuses her more than it should.",
      "goal": "Fights to keep her uncle's Panantukan alive somewhere more visible than a parking lot, and to prove a style learned informally, outside any federation or lineage the circuit recognizes, can still out-hand anyone the circuit puts in front of her."
    },
    "quotes": [
      "\"My uncle taught me in a parking lot. Nobody in this ring has trained anywhere that honest.\"",
      "\"I'm not half of anything. I'm all of both.\""
    ],
    "stats": { "age": "22", "height": "164 cm (5'4\")", "weight": "51 kg (112 lb)", "reach": "162 cm (64 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "pak-jonghwa",
    "name": "Pak Jong-hwa",
    "alias": "The Quiet Flame",
    "nationality": "North Korea",
    "flag": "🇰🇵",
    "hometown": "Pyongyang",
    "baseStyle": "Taekwondo",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#7a1428",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "pak-jonghwa.png",
    "gallery": ["pak-jonghwa-1.png","pak-jonghwa-2.png","pak-jonghwa-3.png","pak-jonghwa-4.png","pak-jonghwa-5.png"],
    "bio": {
      "origin": "Jong-hwa grew up in Pyongyang and started Taekwondo the way most serious athletes there do — early, formally, and with real state infrastructure behind her. Taekwondo is one of the few sports where her country has always been able to compete on the world stage, and she was raised inside that expectation without ever finding it heavy. She does not talk about how DRAGONS scouts found her. She showed up. She competes. She intends to keep winning.",
      "style": "Taekwondo in its most complete form — fast, high kicks thrown with real snap and textbook precision, footwork built on constant lateral movement to create the angle for the next strike. She is disciplined about range in a way few strikers on the roster match, rarely caught flat-footed, rarely out of position. Her sparring partners describe her as quiet until the bell, and then suddenly everywhere at once.",
      "personal": "Reserved almost to the point of disappearing in a crowd — she runs her own errands, cooks for herself, eats alone at the same noodle counter often enough that the owner starts her order before she asks. She does not perform warmth for an audience, but it is there in smaller moments: how carefully she picks vegetables at the market, how she laughs, briefly and by surprise, at something no one else catches. Fighting is the one place she stops being quiet.",
      "rival": "The South Korean contingent — Hana Jung, Jia Park, and the rest of the circuit's largest national bloc — represent both her closest linguistic kin and her most complicated measuring stick. Nothing has been said between them yet, in either direction. Everyone assumes something eventually will be.",
      "goal": "Fights to bring her country the kind of pride it rarely gets handed to it by the rest of the world, and to prove that the discipline she was raised inside can produce a fighter nobody on this circuit is prepared for."
    },
    "quotes": [
      "\"I have always known how to be quiet. I am learning how to be loud.\"",
      "\"Whatever you have heard about where I am from, I am still just a woman who wants to win.\""
    ],
    "stats": { "age": "21", "height": "166 cm (5'5\")", "weight": "52 kg (115 lb)", "reach": "165 cm (65 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "tuyaa-petrova",
    "name": "Tuyaa Petrova",
    "alias": "The Wild Ass",
    "nationality": "Mongolia",
    "flag": "🇲🇳",
    "hometown": "Ulaanbaatar",
    "baseStyle": "Bökh",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#2abf1c",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "tuyaa-petrova.png",
    "gallery": ["tuyaa-petrova-1.png","tuyaa-petrova-2.png","tuyaa-petrova-3.png","tuyaa-petrova-4.png","tuyaa-petrova-5.png"],
    "bio": {
      "origin": "Tuyaa was born on the steppe outside Ulaanbaatar to a Mongolian mother and a Russian father, and spent her early childhood the way her mother's family always had — on horseback, in a ger, moving with the herds between seasons. Bökh was not something she was taught so much as something she grew up inside of; every Naadam festival meant watching grown men wrestle in the traditional jacket and boots, and she was throwing cousins twice her size by the time she was ten. The move to Ulaanbaatar came later, for school and for a gym that could turn what she already had into something a cage could use.",
      "style": "A Bökh base grafted directly onto modern ground-and-pound — the traditional wrestling's emphasis on balance, grip-fighting, and off-balancing an opponent before the takedown translates almost seamlessly into MMA, and she has never needed to unlearn any of it. Once she's on top, she is heavy, patient, and extremely difficult to buck off. Her nickname is not subtle and neither is her cardio — she was built to outlast, on a steppe that does not forgive anyone who can't.",
      "personal": "Unbothered and dryly funny, with the kind of self-possession that comes from growing up somewhere with very few people and a great deal of open space. Still rides when she's home, still knows how to pour milk tea properly, still does her own shopping without any interest in being recognized. She picked her own nickname. Nobody talked her out of it, mostly because nobody could.",
      "rival": "Watches the roster's other wrestling-based fighters — Ainur Nazar and Tseyang Dolma especially — with genuine professional curiosity rather than hostility. Three different wrestling traditions, three different steppes and highlands, all converging on the same cage. She has said she'd like to find out who actually has the better base. Nobody has taken her up on it yet.",
      "goal": "Fights to put Mongolia — and Bökh specifically — on a card built almost entirely around striking arts, and to prove that a wrestling tradition older than most of the circuit's national borders still has something to teach anyone who thinks grappling is the slow way to win."
    },
    "quotes": [
      "\"Call me The Wild Ass all you want. Nobody's ever caught one of those either.\"",
      "\"I don't need to hit you hard. I need to hit the ground with you on the bottom.\""
    ],
    "stats": { "age": "23", "height": "168 cm (5'6\")", "weight": "56 kg (123 lb)", "reach": "167 cm (66 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "zoya-volkova",
    "name": "Zoya Volkova",
    "alias": "The Long Winter",
    "nationality": "Russia",
    "flag": "🇷🇺",
    "hometown": "Vladivostok",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#371cbf",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "zoya-volkova.png",
    "gallery": ["zoya-volkova-1.png","zoya-volkova-2.png","zoya-volkova-3.png","zoya-volkova-4.png","zoya-volkova-5.png"],
    "bio": {
      "origin": "Zoya grew up in Vladivostok, a naval city closer to Tokyo and Seoul than to Moscow, where the Pacific fog sits over the harbor for weeks at a time and the ships never really stop moving. She started kickboxing at a gym near the port because it was open late and warm, which mattered more in February than any grand ambition did. What kept her there was simpler than ambition too — she was good at it, and being good at something in a city that hard to leave counted for a great deal.",
      "style": "Heavy hands, a low guard she trusts more than most coaches would like, and a willingness to eat a shot to land two of her own. She fights like someone who has already decided the fight will take a while and has made peace with that. Durable, patient, and dangerous specifically in the rounds where other fighters start looking for the exit.",
      "personal": "Unshowy and self-sufficient in a way that reads as coldness until you've actually spent time with her — she does her own shopping at the wet market by the harbor, prefers a quiet corner table and a plate of pelmeni to anywhere loud, and has never once needed anyone to walk her home. Vladivostok winters are long, and something in how she carries herself suggests she has made her peace with waiting them out, year after year, without complaint.",
      "rival": "Kazakhstan's contingent — Alina Bek, Ainur Nazar, Safiya Aronov — are the roster's other fighters carrying the old Soviet sporting infrastructure somewhere in their background, and Zoya has said she feels closer to them than to anyone else on the card despite the different flags. Whether that becomes an alliance or a rivalry has not yet been decided by anyone, including her.",
      "goal": "Fights to give a Pacific port city more attention than the Russian sporting establishment has ever given it, and to prove that patience — unglamorous, unhurried patience — beats speed over a long enough fight."
    },
    "quotes": [
      "\"Everyone wants to end it fast. I have never been in a hurry.\"",
      "\"The winter here does not care how tough you think you are. Neither do I.\""
    ],
    "stats": { "age": "24", "height": "169 cm (5'7\")", "weight": "54 kg (119 lb)", "reach": "170 cm (67 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "haruka-endo",
    "name": "Haruka Endo",
    "alias": "Distant Strength",
    "nationality": "Japan",
    "flag": "🇯🇵",
    "hometown": "Kyoto",
    "baseStyle": "Judo",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#c0263a",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "haruka-endo.png",
    "gallery": ["haruka-endo-1.png","haruka-endo-2.png","haruka-endo-3.png","haruka-endo-4.png","haruka-endo-5.png"],
    "bio": {
      "origin": "Haruka grew up in Kyoto, in a city built around the idea that tradition is worth protecting exactly as it was handed down. Her family's dojo has taught Judo for three generations, in the same converted machiya near the eastern hills, and she was on the mat before she can remember first setting foot on it. Judo in Kyoto carries a different weight than Judo anywhere else in the country — it is not a sport so much as an inheritance, and she has never once treated it as anything less.",
      "style": "Patient to the point of unnerving — she does not chase the takedown, she waits for the opponent to give it to her, reading grips and weight distribution with a stillness most strikers mistake for hesitation. Once the fight goes to the ground, the waiting is over. Excellent positional control, a strong ground-and-pound once mounted, and an almost total refusal to rush a fight that isn't ready to be finished yet.",
      "personal": "Composed, deliberate, and quietly funny once she trusts the room — she still trains at her family's dojo between fights, still bows to the mat out of habit rather than performance, still prefers a slow morning and an empty street to anywhere crowded. Kyoto's pace has shaped her more than she probably realizes. She does not do anything quickly that doesn't need to be done quickly.",
      "rival": "The roster's other grapplers — Vanessa Chow and Rainie Yang particularly — represent the comparison she's most curious about, since Judo built on Kodokan lineage and Judo adapted for a modern cage are not always the same conversation. She has said she'd like to find out which approach actually holds up. Nobody has scheduled it yet.",
      "goal": "Fights to prove that patience is not the same thing as passivity, and to carry a family dojo's three generations of Judo onto a stage far larger than the one it was ever built for."
    },
    "quotes": [
      "\"You are welcome to hit me as many times as you like on the way to the ground. I only need to win once we get there.\"",
      "\"Strength that arrives immediately is rarely strength that lasts.\""
    ],
    "stats": { "age": "24", "height": "165 cm (5'5\")", "weight": "52 kg (115 lb)", "reach": "163 cm (64 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "rojbin-aslan",
    "name": "Rojbin Aslan",
    "alias": "Sees the Day",
    "nationality": "Turkey",
    "flag": "🇹🇷",
    "hometown": "Van",
    "baseStyle": "Yağlı Güreş",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#e05a1a",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "rojbin-aslan.png",
    "gallery": ["rojbin-aslan-1.png","rojbin-aslan-2.png","rojbin-aslan-3.png","rojbin-aslan-4.png","rojbin-aslan-5.png"],
    "bio": {
      "origin": "Rojbin grew up in Van, in the far east of the country, close enough to the lake that summer meant the water and winter meant snow that did not apologize for staying. Yağlı Güreş — oiled wrestling, one of the oldest continuously practiced combat sports anywhere — is usually spoken of as western Turkey's tradition, but Van has its own wrestling culture just as old and considerably less documented. She learned it from an uncle who wrestled at local festivals long before she was born, on grass rather than the leather trousers and formal kispet of the western circuit, which suited her fine. She was never especially interested in doing things the recognized way.",
      "style": "A clinch-and-throw wrestler adapted for a cage rather than an oiled field — grip-fighting, off-balancing, and takedowns that owe more to Yağlı Güreş's underhook-heavy grappling than to any Western freestyle system. She is comfortable fighting dirty-close, uncomfortable at range, and extremely difficult to shake once she has a grip. Her ground game is a work in progress. Her clinch is not.",
      "personal": "Watchful, unhurried, and quietly formidable in a way that has nothing to do with the ring — she still shops the market stalls near home when she's back in Van, still drinks her çay slow and black at a corner table, still cooks breakfast the long way rather than the fast way. She does not explain herself to people who haven't earned it. Everyone who has says the same thing: she is far warmer than she looks from across a room.",
      "rival": "Watches the roster's other wrestling-based fighters — Ainur Nazar, Tseyang Dolma, Tuyaa Petrova — with real interest, curious where an oiled-wrestling base actually sits next to Kuresh, Amdo, and Bökh. She has said, more than once, that she'd like the circuit to eventually find out. Nobody has organized it yet.",
      "goal": "Fights to put Van — and a wrestling tradition the country's own western circuit rarely acknowledges — on a card that has never once mentioned either, and to prove a technique built for grass and oil translates just fine to a cage floor."
    },
    "quotes": [
      "\"Where I am from, wrestling does not need leather trousers to be real.\"",
      "\"Get close enough and I will show you what four generations of grip-fighting actually feels like.\""
    ],
    "stats": { "age": "23", "height": "168 cm (5'6\")", "weight": "56 kg (123 lb)", "reach": "167 cm (66 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "nare-demir",
    "name": "Nare Demir",
    "alias": "Fire and Pomegranate",
    "nationality": "Turkey",
    "flag": "🇹🇷",
    "hometown": "Istanbul",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#e05a1a",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "nare-demir.png",
    "gallery": ["nare-demir-1.png","nare-demir-2.png","nare-demir-3.png","nare-demir-4.png","nare-demir-5.png"],
    "bio": {
      "origin": "Nare grew up in Istanbul, in one of the city's old Armenian neighborhoods, in a household where both languages were spoken and both histories were held — carefully, the way families do when a history is complicated enough to require care. Her family has lived in the city for generations, longer than most of the buildings on their street. She started boxing at fifteen at a gym two streets from home, mostly because her cousin went and she didn't want to be left out, and stayed because she turned out to be better at it than either of them expected.",
      "style": "Classical boxing, pressure-forward, comfortable working behind a jab until the opening for the right hand actually appears. She is not flashy and has never needed to be — her power is real, her chin is better than it has any right to be, and she treats a twelve-round fight the same way she'd treat a two-round one: settle in, keep working, let the other woman make the first mistake.",
      "personal": "Warm in a way that takes a moment to notice, because the first thing most people register is the stillness — she moves through the city unhurried, drinks her çay slow, cooks the long way rather than the fast way. Carries both halves of where she's from without treating either as a performance; the Armenian side of her family and the Turkish side of the city she grew up in are both simply true, and she has never needed anyone else's permission to hold them at the same time.",
      "rival": "Watches Rojbin Aslan — the roster's other Turkish entry, wrestling rather than boxing, eastern rather than Istanbul — with more curiosity than rivalry. Two very different versions of the same flag. Neither has said much about it directly. Both know the comparison is coming eventually.",
      "goal": "Fights to represent a city, and a community inside that city, that rarely gets to define itself on its own terms — and to prove that a boxer built on patience and pressure can out-work anyone the circuit puts in front of her."
    },
    "quotes": [
      "\"I don't need the first round. I need the last one.\"",
      "\"Both halves of me learned to be patient a long time before I ever put on gloves.\""
    ],
    "stats": { "age": "24", "height": "167 cm (5'6\")", "weight": "53 kg (117 lb)", "reach": "168 cm (66 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "natia-beridze",
    "name": "Natia Beridze",
    "alias": "Lightbringer",
    "nationality": "Georgia",
    "flag": "🇬🇪",
    "hometown": "Tbilisi",
    "baseStyle": "Chidaoba",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#8bbf42",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "natia-beridze.png",
    "gallery": ["natia-beridze-1.png","natia-beridze-2.png","natia-beridze-3.png","natia-beridze-4.png","natia-beridze-5.png"],
    "bio": {
      "origin": "Natia grew up in Tbilisi's old town, in the shadow of the Narikala fortress, in a city that has been fought over and rebuilt more times than most countries have existed. Chidaoba — Georgian folk wrestling, practiced in the traditional chokha jackets at festivals that predate written record — was not a hobby in her family so much as an inheritance passed down the same way the recipes were. She wrestled boys twice her size at village festivals before she ever set foot in a formal gym, and lost more than she won for years before that stopped being true.",
      "style": "Jacket-grip wrestling adapted for a cage that doesn't offer a jacket to grip — she compensates with an underhook game and a relentless top-control instinct that Chidaoba's throw-and-pin tradition built into her before she ever trained anywhere modern. Patient in the clinch, dangerous once she's established position, and comfortable grinding out a decision if the finish isn't there. She does not panic when a fight gets ugly. Ugly is where she was raised to win.",
      "personal": "Watchful and warm in roughly equal measure — she still buys bread fresh most mornings, still knows which market stall has the best churchkhela, still takes her coffee slow on a balcony overlooking the same streets she grew up running through. Tbilisi shaped her more than any single training camp has. She carries the city's long, complicated history lightly, the way people do when it's simply where they're from rather than something to explain.",
      "rival": "The roster's other wrestling-based fighters — Ainur Nazar, Tseyang Dolma, Tuyaa Petrova, Rojbin Aslan — have become, without anyone officially organizing it, an informal fraternity she considers herself part of. Five different grappling traditions, five different flags, one shared instinct. She has said she'd fight any of them happily and lose no sleep over the result either way.",
      "goal": "Fights to put Georgia — a country the circuit's marketing has never once acknowledged — on a card built almost entirely around East and Southeast Asian traditions, and to prove that Chidaoba's centuries of village-festival wrestling translate to a modern cage without losing what made it dangerous in the first place."
    },
    "quotes": [
      "\"My country has been invaded more times than I can count. We are still here. So am I.\"",
      "\"Give me the clinch. I will find a way to win from there that you did not train for.\""
    ],
    "stats": { "age": "23", "height": "167 cm (5'6\")", "weight": "54 kg (119 lb)", "reach": "166 cm (65 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "sitora-rakhimova",
    "name": "Sitora Rakhimova",
    "alias": "Star and Fate",
    "nationality": "Tajikistan",
    "flag": "🇹🇯",
    "hometown": "Dushanbe",
    "baseStyle": "Boxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#8c5723",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "sitora-rakhimova.png",
    "gallery": ["sitora-rakhimova-1.png","sitora-rakhimova-2.png","sitora-rakhimova-3.png","sitora-rakhimova-4.png","sitora-rakhimova-5.png"],
    "bio": {
      "origin": "Sitora grew up in Dushanbe, in the shadow of the Pamir foothills, in a country most of the circuit's audience would struggle to place on a map. Boxing arrived in Tajikistan through Soviet-era sporting infrastructure and never really left — state gyms, disciplined coaching, and a culture that took the sport seriously long after the union that built the gyms was gone. She started at eleven, mostly because the gym was walking distance and her older brother trained there, and stayed because she turned out to have hands nobody expected from someone that size.",
      "style": "Sharp, fast, and unwilling to sit still — she boxes off her back foot until the opening actually appears, then closes distance in a single committed burst rather than a slow walk-down. Her jab sets up everything; her right hand ends fights that go long enough to reach it. Not the most durable chin on the roster, but rarely needs to prove that, because she is rarely still standing directly in front of anyone when the return shot comes.",
      "personal": "Composed and a little private, carrying herself with the quiet certainty of someone who was never once the biggest fighter in the gym and stopped needing to be. Keeps a small circle, trusts it completely, and has no interest in performing a bigger personality than the one she actually has. Dushanbe is home in the plain, unglamorous sense of the word — not a backdrop, just where she's from.",
      "rival": "Nare Demir and Rojbin Aslan, the roster's two Turkish-flag entries, sit in an odd adjacent category for her — close enough in region and history that she feels a kinship with both, distant enough that neither is quite the same story as hers. She has said she'd like to fight either of them eventually. Neither has been scheduled.",
      "goal": "Fights to put Tajikistan on a card that has never once mentioned it, and to prove that a boxer built in a gym most of the world has never heard of can still out-hand anyone the circuit puts in front of her."
    },
    "quotes": [
      "\"Nobody has heard of where I am from. They will hear of me.\"",
      "\"My name means star and fate. I intend to earn both halves of it.\""
    ],
    "stats": { "age": "22", "height": "165 cm (5'5\")", "weight": "51 kg (112 lb)", "reach": "164 cm (65 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "shirin-yusupova",
    "name": "Shirin Yusupova",
    "alias": "Sweetheart",
    "nationality": "Uzbekistan",
    "flag": "🇺🇿",
    "hometown": "Tashkent",
    "baseStyle": "Kurash",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#56bfad",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "shirin-yusupova.png",
    "gallery": ["shirin-yusupova-1.png","shirin-yusupova-2.png","shirin-yusupova-3.png","shirin-yusupova-4.png","shirin-yusupova-5.png"],
    "bio": {
      "origin": "Shirin grew up in Tashkent, where Kurash — the ancient jacket-wrestling tradition that Uzbekistan formalized into an Olympic-recognized sport — is taught in school gym classes the way other countries teach basketball. She started young, built a frame heavier and stronger than most of the circuit's lighter strikers, and never had much interest in leaning it out for the sake of looking a certain way. The build does the work. She has never once apologized for it.",
      "style": "Grip-first, jacket-wrestling instincts translated onto bare skin — she fights for the collar tie and the underhook the way Kurash trained her to fight for the belt and sleeve, and once she has that grip an opponent's night gets considerably harder. Bigger, stronger, and more comfortable in a clinch than almost anyone she's faced. She does not need a highlight-reel finish. She needs forty-five seconds of control and the fight tends to end itself.",
      "personal": "Warm, direct, and entirely unbothered by her own reputation for being the strongest handshake on the roster — the nickname started as a joke about the gap between how gentle she is outside the gym and how little that gentleness survives contact with an actual opponent. Cooks for whoever's around, laughs easily, and has never once tried to make herself smaller to fit anyone's idea of what a fighter should look like.",
      "rival": "Aygül Bayramova, Turkmenistan's own wrestling-forward entry, is the comparison everyone on the roster keeps bringing up unprompted — two Central Asian grapplers, similar builds, neighboring countries, styles that would collide in genuinely interesting ways. Neither has objected to the framing. Neither has been booked yet either.",
      "goal": "Fights to put Uzbekistan and Kurash — a sport most of the circuit's audience has never heard of, let alone watched — in front of people who are about to learn exactly how effective a jacket-wrestling base can be without the jacket."
    },
    "quotes": [
      "\"They call me Sweetheart until the clinch starts. Ask anyone who's been in it with me.\"",
      "\"I did not build this frame to apologize for it.\""
    ],
    "stats": { "age": "24", "height": "170 cm (5'7\")", "weight": "61 kg (134 lb)", "reach": "169 cm (67 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "aygul-bayramova",
    "name": "Aygül Bayramova",
    "alias": "Moon Rose",
    "nationality": "Turkmenistan",
    "flag": "🇹🇲",
    "hometown": "Ashgabat",
    "baseStyle": "Göreş",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#a54a68",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "aygul-bayramova.png",
    "gallery": ["aygul-bayramova-1.png","aygul-bayramova-2.png","aygul-bayramova-3.png","aygul-bayramova-4.png","aygul-bayramova-5.png"],
    "bio": {
      "origin": "Aygul grew up in Ashgabat, a city built almost entirely of white marble and largely unknown to anyone who hasn't been there, in a family that took Göreş — Turkmen folk wrestling — as seriously as any sport the country produces. She is built heavier and stronger than most of the circuit's roster and has never seen a reason to train that away. Wrestling in Turkmenistan rewards exactly the frame she was born with. She spent her adolescence being told she was built right for once, and it stuck.",
      "style": "Heavy hands married to an even heavier base — she is difficult to move, harder to take down, and comfortable turning any exchange into a physical contest of who wants it more. Not the fastest fighter on the roster and has never needed to be. Wears opponents down through sheer physical insistence, round after round, until the fight becomes a question of whose body gives out first.",
      "personal": "Blunt, warm, and entirely without pretense — she says what she means, trains harder than almost anyone watching gives her credit for, and has no patience for the idea that a fighter needs to look a particular way to be taken seriously. Proud of where she's from in a straightforward, uncomplicated way. Ashgabat rarely gets mentioned by anyone outside it. She intends to be the reason that changes.",
      "rival": "Shirin Yusupova, Uzbekistan's Kurash specialist, is the matchup the whole roster keeps circling — neighboring countries, comparable builds, two different wrestling traditions that have never once been tested against each other in a cage. Aygul has said she'd take that fight tomorrow if the circuit offered it.",
      "goal": "Fights to put Turkmenistan — one of the least-covered countries on the entire circuit's map — somewhere people are actually paying attention, and to prove that strength built the old way still wins against strength built in a modern gym."
    },
    "quotes": [
      "\"Nobody trains this build away where I am from. Nobody wants to.\"",
      "\"Come find out how heavy heavy actually is.\""
    ],
    "stats": { "age": "25", "height": "171 cm (5'7\")", "weight": "63 kg (139 lb)", "reach": "170 cm (67 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "aruuke-jeenbekova",
    "name": "Aruuke Jeenbekova",
    "alias": "Wildfire",
    "nationality": "Kyrgyzstan",
    "flag": "🇰🇬",
    "hometown": "Bishkek",
    "baseStyle": "Kyrgyz Kuresh",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#3f728c",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "aruuke-jeenbekova.png",
    "gallery": ["aruuke-jeenbekova-1.png","aruuke-jeenbekova-2.png","aruuke-jeenbekova-3.png","aruuke-jeenbekova-4.png","aruuke-jeenbekova-5.png"],
    "bio": {
      "origin": "Aruuke grew up in Bishkek with the Tian Shan mountains visible from nearly every street in the city, in a family that took Kyrgyz Kuresh as seriously as the country itself does — wrestling festivals here are not a niche interest, they are a national institution. Auburn hair in a country where it draws a second look everywhere she goes has made her memorable since childhood, long before anyone knew what she could do on a mat. She wrestled boys at every village festival her family attended and stopped losing to them earlier than anyone expected.",
      "style": "Explosive and aggressive in exactly the way her nickname promises — fast entries, committed takedowns, and a scrambling top game that punishes any hesitation. She does not wait for the perfect opening the way some of the roster's more patient grapplers do; she creates one through sheer forward pressure and finishes the exchange before her opponent has fully processed what happened. High-output, high-risk, and dangerous specifically because she rarely slows down long enough to be read.",
      "personal": "As warm as she is intense, with a temper that runs hot and burns out fast rather than smoldering — she laughs loudly, argues passionately about nothing important, and has never once been accused of hiding how she feels about anything. Fiercely proud of Bishkek and the mountains around it. Impossible to miss in a crowd, and has made peace with that a long time ago.",
      "rival": "Shirin Yusupova and Aygul Bayramova, the roster's other two Central Asian wrestlers, represent both close kinship and the obvious next question — three neighboring wrestling traditions, three distinct styles of aggression, all circling the same weight class. Aruuke has said, loudly and often, that she'd fight either of them first if the circuit let her pick.",
      "goal": "Fights to put Kyrgyzstan — the smallest and least-discussed of the circuit's Central Asian entries — somewhere impossible to overlook, and to prove that speed and aggression beat patience often enough to matter."
    },
    "quotes": [
      "\"They see the hair before they see anything else. Then the fight starts.\"",
      "\"I do not wait for the opening. I make one.\""
    ],
    "stats": { "age": "22", "height": "166 cm (5'5\")", "weight": "53 kg (117 lb)", "reach": "165 cm (65 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "shira-cohen",
    "name": "Shira Cohen",
    "alias": "Selah",
    "nationality": "Israel",
    "flag": "🇮🇱",
    "hometown": "Tel Aviv",
    "baseStyle": "Krav Maga",
    "ruleset": "MMA",
    "division": "Strawweight",
    "color": "#458c3f",
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "shira-cohen.png",
    "gallery": ["shira-cohen-1.png","shira-cohen-2.png","shira-cohen-3.png","shira-cohen-4.png","shira-cohen-5.png"],
    "bio": {
      "origin": "Shira grew up in Tel Aviv, in a city that never really stops moving, and started Krav Maga the way most Israelis eventually do — through mandatory service, though she kept training long after her service ended because she'd found something in it she wasn't ready to put down. Krav Maga was never built for competition; it was built for the worst five seconds of someone's life, all efficiency and no ceremony. Adapting it into something that could win a scored fight rather than just end a street encounter took her longer than she expected, and she is still, by her own account, not finished adapting it.",
      "style": "Brutally efficient and entirely unconcerned with looking good doing it — no wasted motion, no flourish, every strike aimed at ending the exchange as fast as possible rather than building toward one. She fights like someone who was trained to assume the worst about how much time she has. Dangerous at close range, comfortable turning a clinch violent, and allergic to a fight that goes long for no reason.",
      "personal": "Direct to the point of bluntness, with a dry sense of humor that catches people off guard given how serious she seems on first impression. Named for song and rarely without music in her ears between sessions — the nickname started as a joke about the gap between how she sounds when she talks and how she moves when she fights, and it stuck because it was true. Loves Tel Aviv specifically, unreservedly, the way people do about a city they've never wanted to leave.",
      "rival": "The roster has no obvious comparison for her yet — Krav Maga's practical, no-wasted-motion philosophy doesn't map neatly onto any other style currently on the card. She has said she finds that more interesting than frustrating. Nobody has to be her mirror. She'd rather be the first of something than the echo of anything else.",
      "goal": "Fights to bring a style built for survival into a sport built for spectacle, and to prove efficiency wins as often as flash does, if not more."
    },
    "quotes": [
      "\"Krav Maga was never meant to look good. It was meant to work. I intend to make it do both.\"",
      "\"I don't need three rounds. I need the shortest path to the end of one.\""
    ],
    "stats": { "age": "24", "height": "166 cm (5'5\")", "weight": "53 kg (117 lb)", "reach": "165 cm (65 in)", "stance": "Orthodox", "debut": "2026" }
  },
  {
    "id": "sua-kang",
    "name": "Sua Kang",
    "alias": "Live Wire",
    "nationality": "South Korea",
    "flag": "🇰🇷",
    "hometown": "Seoul",
    "baseStyle": "Kickboxing",
    "ruleset": "Kickboxing",
    "division": "Strawweight",
    "color": "#1fb6c9",
    "credit": { "label": "Guest Fighter:", "name": "@_sua_kang_ai", "url": "https://www.instagram.com/_sua_kang_ai/" },
    "record": { "w": 0, "l": 0, "ko": 0 },
    "image": "sua-kang.png",
    "gallery": ["sua-kang-1.png","sua-kang-2.png","sua-kang-3.png","sua-kang-4.png","sua-kang-5.png"],
    "bio": {
      "origin": "Sua spent her twenties as an intelligence analyst in Seoul, the kind of job that looks like spreadsheets until it very suddenly doesn't. A field assignment went wrong — badly, publicly wrong, in a way she still won't discuss in detail — and she was held and hurt by the people she'd been sent to watch, longer than anyone above her wanted to admit out loud. What came out the other side of that was not the analyst who went in. She rebuilt herself in a gym the way some people rebuild themselves in therapy: methodically, obsessively, because the alternative was staying broken. The people responsible were eventually made to answer for it. She has never said how, and nobody who knows her well enough to guess has ever repeated it.",
      "style": "Fast, acrobatic, and built to break an opponent down round by round rather than end things in one clean shot — spinning attacks, unpredictable angles, and a pace that never lets up long enough for anyone to find their rhythm against her. She reads an opponent's output in real time and matches pressure exactly where it hurts most, so a fight against her feels like it costs more with every passing minute. Opponents rarely lose to one big moment. They lose to all the smaller ones she never stopped taking.",
      "personal": "Playful, magnetic, and impossible to read when she wants to be — she hikes alone on her days off, swims early before the city wakes up, plays a genuinely competitive game of tennis, and has a well-earned reputation for teasing every man who tries too hard at a club and immediately loses interest the moment he stops being fun to tease. The lightness is real. It sits directly on top of something considerably harder that she does not show most people, and does not owe anyone a look at.",
      "rival": "Rin Takahashi is the fight the circuit has been building toward — Sua's speed and chaos against Rin's precision and stillness, an analyst's read-and-react instinct against a lifetime of Karate discipline. Neither has said much publicly. Both know exactly what DRAGONS 7 is going to ask of them.",
      "goal": "Fights because stillness stopped being safe for her a long time ago, and because getting stronger, however far it goes, has never once felt like enough."
    },
    "quotes": [
      "\"I used to read people for a living. Now I just take what I read from them.\"",
      "\"You get one big moment against most fighters. Against me you need thirty small ones. Good luck finding them.\""
    ],
    "stats": { "age": "28", "height": "173 cm (5'8\")", "weight": "56 kg (123 lb)", "reach": "172 cm (68 in)", "stance": "Orthodox", "debut": "2026" }
  }
];

if (typeof module !== "undefined") { module.exports = FIGHTERS; }
