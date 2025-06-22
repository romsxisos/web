const roms = [
  {
    name: "Border Down v2.000[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "203.4M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Border%20Down%20v2.000%20%282003%29%28G.rev%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Capcom vs. SNK - Millennium Fight 2000 Pro v1.002[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "139.5M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Capcom%20vs.%20SNK%20-%20Millennium%20Fight%202000%20Pro%20v1.002%20%282001%29%28Capcom%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Capcom vs. SNK 2 - Millionaire Fighting 2001 v1.000[!][AKA Capcom vs. SNK 2 - Mark of the Millennium 2001][GDL-0008]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "171.1M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Capcom%20vs.%20SNK%202%20-%20Millionaire%20Fighting%202001%20v1.000%20%282001%29%28Capcom%29%28JP%29%28en%29%5B%21%5D%5BAKA%20Capcom%20vs.%20SNK%202%20-%20Mark%20of%20the%20Millennium%202001%5D%5BGDL-0008%5D.7z",
    link2: ""
  },
  {
    name: "Capcom vs. SNK 2 - Millionaire Fighting 2001 v2.000[!][AKA Capcom vs. SNK 2 - Mark of the Millennium 2001][GDL-0007A]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "171.4M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Capcom%20vs.%20SNK%202%20-%20Millionaire%20Fighting%202001%20v2.000%20%282001%29%28Capcom%29%28JP%29%28en%29%5B%21%5D%5BAKA%20Capcom%20vs.%20SNK%202%20-%20Mark%20of%20the%20Millennium%202001%5D%5BGDL-0007A%5D.7z",
    link2: ""
  },
  {
    name: "Chaos Field v1.004[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "150.2M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Chaos%20Field%20v1.004%20%282004%29%28Able%20-%20Milestone%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Confidential Mission v1.050[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "132.1M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Confidential%20Mission%20v1.050%20%282000%29%28Sega%29%28JP%29%28en%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Dynamic Golf v2.002[!][AKA Virtua Golf]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "73.5M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Dynamic%20Golf%20v2.002%20%282001%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BAKA%20Virtua%20Golf%5D.7z",
    link2: ""
  },
  {
    name: "Guilty Gear XX - The Midnight Carnival - #Reload v1.001[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "286.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Guilty%20Gear%20XX%20-%20The%20Midnight%20Carnival%20-%20%23Reload%20v1.001%20%282003%29%28Sammy%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Guilty Gear XX - The Midnight Carnival - #Reload v2.000[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "285.5M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Guilty%20Gear%20XX%20-%20The%20Midnight%20Carnival%20-%20%23Reload%20v2.000%20%282003%29%28Sammy%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Guilty Gear XX - The Midnight Carnival v1.001[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "280.6M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Guilty%20Gear%20XX%20-%20The%20Midnight%20Carnival%20v1.001%20%282002%29%28Sammy%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Guilty Gear XX Accent Core v1.002[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "286.6M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Guilty%20Gear%20XX%20Accent%20Core%20v1.002%20%282006%29%28Arc%20System%20Works%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Guilty Gear XX Slash - The Midnight Carnival v2.000[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "277.9M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Guilty%20Gear%20XX%20Slash%20-%20The%20Midnight%20Carnival%20v2.000%20%282005%29%28Arc%20System%20Works%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Ikaruga v1.002[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "44.5M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Ikaruga%20v1.002%20%282001%29%28Treasure%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Jingi Storm - The Arcade v1.001[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "157.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Jingi%20Storm%20-%20The%20Arcade%20v1.001%20%282006%29%28Atrativa%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Keyboard, La v1.004[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "36.8M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Keyboard%2C%20La%20v1.004%20%282001%29%28Sega%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Kidou Senshi Gundam - Renpou vs. Zeon DX v1.000[!][AKA Mobile Suit Gundam - The Earth Federation vs. the Principality of Zeon Deluxe]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "165.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Kidou%20Senshi%20Gundam%20-%20Renpou%20vs.%20Zeon%20DX%20v1.000%20%282001%29%28Capcom%29%28JP%29%28en%29%5B%21%5D%5BAKA%20Mobile%20Suit%20Gundam%20-%20The%20Earth%20Federation%20vs.%20the%20Principality%20of%20Zeon%20Deluxe%5D.7z",
    link2: ""
  },
  {
    name: "Kidou Senshi Gundam - Renpou vs. Zeon v1.000[!][AKA Mobile Suit Gundam - The Earth Federation vs. the Principality of Zeon]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "144.4M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Kidou%20Senshi%20Gundam%20-%20Renpou%20vs.%20Zeon%20v1.000%20%282001%29%28Capcom%29%28JP%29%28en%29%5B%21%5D%5BAKA%20Mobile%20Suit%20Gundam%20-%20The%20Earth%20Federation%20vs.%20the%20Principality%20of%20Zeon%5D.7z",
    link2: ""
  },
  {
    name: "Kuru Kuru Chameleon v1.001[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "39.6M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Kuru%20Kuru%20Chameleon%20v1.001%20%282006%29%28Star-Fish%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Maze of the Kings, The v1.001[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "126.1M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Maze%20of%20the%20Kings%2C%20The%20v1.001%20%282002%29%28Sega%29%28JP%29%28en%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Melty Blood - Act Cadenza Ver. A v4.000[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "215.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Melty%20Blood%20-%20Act%20Cadenza%20Ver.%20A%20v4.000%20%282005%29%28Ecole%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Melty Blood - Act Cadenza Version B v1.003[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "195.8M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Melty%20Blood%20-%20Act%20Cadenza%20Version%20B%20v1.003%20%282006%29%28Ecole%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Melty Blood - Act Cadenza Version B2 v2.000[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "198.8M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Melty%20Blood%20-%20Act%20Cadenza%20Version%20B2%20v2.000%20%282007%29%28Ecole%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Monkey Ball v1.008[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "91.5M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Monkey%20Ball%20v1.008%20%282001%29%28Sega%29%28JP%29%28en%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Musapey no Chocomarker v2.000[!][AKA Musapey's Chocomarker]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "75.5M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Musapey%20no%20Chocomarker%20v2.000%20%282002%29%28Ecole%29%28JP%29%5B%21%5D%5BAKA%20Musapey%27s%20Chocomarker%5D.7z",
    link2: ""
  },
  {
    name: "Power Smash 2 v2.000[!][AKA Virtua Tennis 2]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "125.4M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Power%20Smash%202%20v2.000%20%282001%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BAKA%20Virtua%20Tennis%202%5D.7z",
    link2: ""
  },
  {
    name: "Power Smash v1.001[!][AKA Virtua Tennis]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "55.8M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Power%20Smash%20v1.001%20%282001%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BAKA%20Virtua%20Tennis%5D.7z",
    link2: ""
  },
  {
    name: "Psyvariar 2 - The Will to Fabricate v1.002[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "152.2M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Psyvariar%202%20-%20The%20Will%20to%20Fabricate%20v1.002%20%282003%29%28Success%29%28JP%29%28en%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Puyo Puyo Fever v1.004[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "168.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Puyo%20Puyo%20Fever%20v1.004%20%282003%29%28Sega%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Quiz Keitai Q Mode v1.003[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "130.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Quiz%20Keitai%20Q%20Mode%20v1.003%20%282002%29%28Amedio%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Radirgy v1.001[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "142.7M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Radirgy%20v1.001%20%282005%29%28Milestone%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Radirgy v2.000[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "142.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Radirgy%20v2.000%20%282005%29%28Milestone%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Senko no Ronde New Ver. v2.001[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "244.2M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Senko%20no%20Ronde%20New%20Ver.%20v2.001%20%282005%29%28G.rev%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Senko no Ronde SP v1.000[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "233.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Senko%20no%20Ronde%20SP%20v1.000%20%282006%29%28G.rev%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Shikigami no Shiro II v1.000[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "107.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Shikigami%20no%20Shiro%20II%20v1.000%20%282003%29%28Alfa%20System%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Slashout v1.000[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "145.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Slashout%20v1.000%20%282000%29%28Sega%29%28JP%29%28en%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Spikers Battle v1.002[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "145.1M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Spikers%20Battle%20v1.002%20%282001%29%28Sega%29%28JP%29%28en-ja%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Sports Jam v1.005[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "124.6M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Sports%20Jam%20v1.005%20%282000%29%28Sega%29%28JP%29%28en%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Street Fighter Zero 3 Upper v1.001[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "92.6M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Street%20Fighter%20Zero%203%20Upper%20v1.001%20%282001%29%28Capcom%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Super Major League v1.001[!][AKA World Series Baseball]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "162.3M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Super%20Major%20League%20v1.001%20%282001%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BAKA%20World%20Series%20Baseball%5D.7z",
    link2: ""
  },
  {
    name: "Super Shanghai 2005 v1.001[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "63.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Super%20Shanghai%202005%20v1.001%20%282005%29%28Star-Fish%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Super Shanghai 2005 v2.001[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "63.6M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Super%20Shanghai%202005%20v2.001%20%282005%29%28Star-Fish%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Takoron v1.002[!][AKA Noukone Puzzle Takoron]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "56.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Takoron%20v1.002%20%282006%29%28Compile%20Heart%29%28JP%29%5B%21%5D%5BAKA%20Noukone%20Puzzle%20Takoron%5D.7z",
    link2: ""
  },
  {
    name: "Tetris Kiwamemichi v1.003[!]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "65.4M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Tetris%20Kiwamemichi%20v1.003%20%282004%29%28Success%29%28JP%29%5B%21%5D.7z",
    link2: ""
  },
  {
    name: "Usagi - Yasei no Touhai - Yamashiro Mahjong-hen v1.002[!][AKA Usagi YM-Hen]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "115.7M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Usagi%20-%20Yasei%20no%20Touhai%20-%20Yamashiro%20Mahjong-hen%20v1.002%20%282003%29%28Warashi%29%28JP%29%5B%21%5D%5BAKA%20Usagi%20YM-Hen%5D.7z",
    link2: ""
  },
  {
    name: "Virtua Athlete v1.003[!][AKA Virtua Athletics]",
    image: "https://i.postimg.cc/Yq8KTVB6/Sega-NAOMI-logo.png",
    size: "69.1M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi/Sega/NAOMI/Games/Virtua%20Athlete%20v1.003%20%282001%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BAKA%20Virtua%20Athletics%5D.7z",
    link2: ""
  },
];

const romBody = document.getElementById("romBody");
  const searchInput = document.getElementById("searchInput");

  function renderTable(data) {
    romBody.innerHTML = "";
    data.forEach(rom => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><img src="${rom.image}" alt="${rom.name}"></td>
        <td>${rom.name}</td>
        <td>${rom.link1 ? `<a href="${rom.link1}" target="_blank">Opción #1</a>` : '-'}</td>
        <td>${rom.link2 ? `<a href="${rom.link2}" target="_blank">Opción #2</a>` : '-'}</td>
        <td>${rom.size}</td>
      `;
      romBody.appendChild(tr);
    });
  }

  function filterByLetter(letter) {
    if (letter === 'ALL') {
      renderTable(roms);
    } else {
      const filtered = roms.filter(rom => rom.name.trim().toUpperCase().startsWith(letter));
      renderTable(filtered);
    }
  }

  function filterByNumber() {
    const filtered = roms.filter(rom => /^\d/.test(rom.name.trim()));
    renderTable(filtered);
  }

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = roms.filter(rom => rom.name.toLowerCase().includes(searchTerm));
    renderTable(filtered);
  });

  renderTable(roms);