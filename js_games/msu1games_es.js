const roms = [
  {
    name: "ActRaiser (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "185.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/ActRaiser%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "ActRaiser 2 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "108.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/ActRaiser%202%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Aladdin (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "570.7M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Aladdin%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Alien 3 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "178.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Alien%203%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Assault Suits Valken (Japan) (MSU1) [T-En by Aeon Genesis v1.00] [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "182.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Assault%20Suits%20Valken%20%28Japan%29%20%28MSU1%29%20%5BT-En%20by%20Aeon%20Genesis%20v1.00%5D%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "Axelay (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "402.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Axelay%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "BS F-Zero Grand Prix 2 (Japan) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "221.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/BS%20F-Zero%20Grand%20Prix%202%20%28Japan%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "BS Legend of Zelda - Ancient Stone Tablets - Chapter 1, The (Japan) (MSU1) [T-En] [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "740.7M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/BS%20Legend%20of%20Zelda%20-%20Ancient%20Stone%20Tablets%20-%20Chapter%201%2C%20The%20%28Japan%29%20%28MSU1%29%20%5BT-En%5D%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "BS Legend of Zelda - Ancient Stone Tablets - Chapter 2, The (Japan) (MSU1) [T-En] [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "747.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/BS%20Legend%20of%20Zelda%20-%20Ancient%20Stone%20Tablets%20-%20Chapter%202%2C%20The%20%28Japan%29%20%28MSU1%29%20%5BT-En%5D%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "BS Legend of Zelda - Ancient Stone Tablets - Chapter 3, The (Japan) (MSU1) [T-En] [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "757.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/BS%20Legend%20of%20Zelda%20-%20Ancient%20Stone%20Tablets%20-%20Chapter%203%2C%20The%20%28Japan%29%20%28MSU1%29%20%5BT-En%5D%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "BS Legend of Zelda - Ancient Stone Tablets - Chapter 4, The (Japan) (MSU1) [T-En] [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "754.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/BS%20Legend%20of%20Zelda%20-%20Ancient%20Stone%20Tablets%20-%20Chapter%204%2C%20The%20%28Japan%29%20%28MSU1%29%20%5BT-En%5D%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "BS Legend of Zelda - Fourth Quest (Japan) (MSU1) [T-En] [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "88.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/BS%20Legend%20of%20Zelda%20-%20Fourth%20Quest%20%28Japan%29%20%28MSU1%29%20%5BT-En%5D%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "BS Legend of Zelda - Third Quest (Japan) (MSU1) [T-En] [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "88.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/BS%20Legend%20of%20Zelda%20-%20Third%20Quest%20%28Japan%29%20%28MSU1%29%20%5BT-En%5D%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "BS Legend of Zelda Map 1, The (Japan) (MSU1) [T-En] [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "2.2G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/BS%20Legend%20of%20Zelda%20Map%201%2C%20The%20%28Japan%29%20%28MSU1%29%20%5BT-En%5D%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "BS Legend of Zelda Map 2, The (Japan) (MSU1) [T-En] [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "2.2G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/BS%20Legend%20of%20Zelda%20Map%202%2C%20The%20%28Japan%29%20%28MSU1%29%20%5BT-En%5D%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "Batman Returns (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "794.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Batman%20Returns%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Battletoads in Battlemaniacs (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "298.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Battletoads%20in%20Battlemaniacs%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Battletoads-Double Dragon (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "150.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Battletoads-Double%20Dragon%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Beavis and Butt-Head (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "702.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Beavis%20and%20Butt-Head%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "555.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Bram%20Stoker%27s%20Dracula%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Bubsy in Claws Encounters of the Furred Kind (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "596.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Bubsy%20in%20Claws%20Encounters%20of%20the%20Furred%20Kind%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Captain America and the Avengers (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "197.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Captain%20America%20and%20the%20Avengers%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Captain Commando (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "226.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Captain%20Commando%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Castlevania - Dracula X (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "178.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Castlevania%20-%20Dracula%20X%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Choujikuu Yousai Macross - Scrambled Valkyrie (Japan) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "201.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Choujikuu%20Yousai%20Macross%20-%20Scrambled%20Valkyrie%20%28Japan%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Chrono Trigger (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "774.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Chrono%20Trigger%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Conker's High Rule Tail (Unl) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.4G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Conker%27s%20High%20Rule%20Tail%20%28Unl%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Contra III - The Alien Wars (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "77.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Contra%20III%20-%20The%20Alien%20Wars%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Darius Twin (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "130.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Darius%20Twin%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Death and Return of Superman, The (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "278.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Death%20and%20Return%20of%20Superman%2C%20The%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Demon's Crest (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "289.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Demon%27s%20Crest%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Donkey Kong Country (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "421.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Donkey%20Kong%20Country%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Donkey Kong Country 2 - Diddy's Kong Quest (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "679.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Donkey%20Kong%20Country%202%20-%20Diddy%27s%20Kong%20Quest%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Donkey Kong Country 3 - Dixie Kong's Double Trouble! (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "795.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Donkey%20Kong%20Country%203%20-%20Dixie%20Kong%27s%20Double%20Trouble%21%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "E.V.O. - Search for Eden (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "475.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/E.V.O.%20-%20Search%20for%20Eden%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Earth Defense Force (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "213.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Earth%20Defense%20Force%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "EarthBound (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.1G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/EarthBound%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Earthworm Jim (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "199.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Earthworm%20Jim%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Earthworm Jim 2 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "292.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Earthworm%20Jim%202%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "F-Zero (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "267.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/F-Zero%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Fatal Fury (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "110.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Fatal%20Fury%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Fighter's History (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "147.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Fighter%27s%20History%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Fighter's History - Mizoguchi Kikiippatsu!! (Japan) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "167.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Fighter%27s%20History%20-%20Mizoguchi%20Kikiippatsu%21%21%20%28Japan%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy IV (Japan) (Rev 1) [T-En by J2e Translations v3.21] (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.2G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Final%20Fantasy%20IV%20%28Japan%29%20%28Rev%201%29%20%5BT-En%20by%20J2e%20Translations%20v3.21%5D%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy VI (USA) (MSU1) [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.3G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Final%20Fantasy%20VI%20%28USA%29%20%28MSU1%29%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "Final Fight (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "170.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Final%20Fight%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Final Fight 2 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "220.7M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Final%20Fight%202%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Final Fight 3 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "538.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Final%20Fight%203%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Final Fight Guy (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "170.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Final%20Fight%20Guy%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Flashback (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "130.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Flashback%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Gradius III (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "148.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Gradius%20III%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Hagane - The Final Conflict (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "305.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Hagane%20-%20The%20Final%20Conflict%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Home Alone (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "194.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Home%20Alone%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Hong Kong 97 (Unl) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "26.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Hong%20Kong%2097%20%28Unl%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Hook (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "478.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Hook%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Hyper Street Kart (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.0G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Hyper%20Street%20Kart%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Illusion of Gaia (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "793.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Illusion%20of%20Gaia%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Indiana Jones' Greatest Adventures (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.9G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Indiana%20Jones%27%20Greatest%20Adventures%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Jikkyou Oshaberi Parodius (Japan) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "238.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Jikkyou%20Oshaberi%20Parodius%20%28Japan%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Joe and Mac (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "544.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Joe%20and%20Mac%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Jurassic Park (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "130.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Jurassic%20Park%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Justice League Task Force (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "389.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Justice%20League%20Task%20Force%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Killer Instinct (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "169.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Killer%20Instinct%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Kirby Super Star (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "586.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Kirby%20Super%20Star%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Kirby's Dream Land 3 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "361.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Kirby%27s%20Dream%20Land%203%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Knights of the Round (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "91.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Knights%20of%20the%20Round%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - A Link to the Past (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "533.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Legend%20of%20Zelda%2C%20The%20-%20A%20Link%20to%20the%20Past%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - A Link to the Past DX (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "305.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Legend%20of%20Zelda%2C%20The%20-%20A%20Link%20to%20the%20Past%20DX%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Parallel Worlds (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "334.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Legend%20of%20Zelda%2C%20The%20-%20Parallel%20Worlds%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Legend of the Mystical Ninja, The (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.2G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Legend%20of%20the%20Mystical%20Ninja%2C%20The%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Lemmings (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "508.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Lemmings%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Lion King, The (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "593.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Lion%20King%2C%20The%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Lufia II - Rise of the Sinistrals (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "628.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Lufia%20II%20-%20Rise%20of%20the%20Sinistrals%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Lufia and the Fortress of Doom (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "247.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Lufia%20and%20the%20Fortress%20of%20Doom%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Magic Sword (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "79.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Magic%20Sword%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Magical Quest Starring Mickey Mouse, The (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "208.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Magical%20Quest%20Starring%20Mickey%20Mouse%2C%20The%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Mask, The (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "272.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Mask%2C%20The%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Maui Mallard in Cold Shadow (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "163.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Maui%20Mallard%20in%20Cold%20Shadow%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Mega Man 7 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "218.7M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Mega%20Man%207%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Mega Man X (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "398.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Mega%20Man%20X%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Mega Man X2 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "311.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Mega%20Man%20X2%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Mega Man X3 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "252.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Mega%20Man%20X3%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Mickey Mania - The Timeless Adventures of Mickey Mouse (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "361.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Mickey%20Mania%20-%20The%20Timeless%20Adventures%20of%20Mickey%20Mouse%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Mortal Kombat (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "50.7M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Mortal%20Kombat%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Mortal Kombat 3 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "62.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Mortal%20Kombat%203%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Mortal Kombat II (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "82.7M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Mortal%20Kombat%20II%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Mother 2 - Giygas Strikes Back (USA) (MSU1) [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.1G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Mother%202%20-%20Giygas%20Strikes%20Back%20%28USA%29%20%28MSU1%29%20%5Bn%5D.zip",
    link2: ""
  },
  {
    name: "Ninja Gaiden Trilogy (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "543.7M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Ninja%20Gaiden%20Trilogy%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Out of this World (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "406.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Out%20of%20this%20World%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Pilotwings (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "45.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Pilotwings%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Pitfall - The Mayan Adventure (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "413.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Pitfall%20-%20The%20Mayan%20Adventure%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Power Moves (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "233.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Power%20Moves%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "221.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Prince%20of%20Persia%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "R-Type III (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "265.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/R-Type%20III%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Rendering Ranger R2 (Japan) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "198.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Rendering%20Ranger%20R2%20%28Japan%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Saturday Night Slam Masters (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "204.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Saturday%20Night%20Slam%20Masters%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Secret of Evermore (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "753.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Secret%20of%20Evermore%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Secret of Mana (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.2G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Secret%20of%20Mana%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Seiken Densetsu 3 (Japan) (MSU1) [T-En] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.3G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Seiken%20Densetsu%203%20%28Japan%29%20%28MSU1%29%20%5BT-En%5D.zip",
    link2: ""
  },
  {
    name: "Shaq-Fu (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "337.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Shaq-Fu%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Sim City (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "385.7M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Sim%20City%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Simpsons, The - Bart's Nightmare (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "272.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Simpsons%2C%20The%20-%20Bart%27s%20Nightmare%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Soul Blazer (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "338.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Soul%20Blazer%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "277.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Spider-Man%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Star Fox (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "989.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Star%20Fox%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Street Fighter Alpha 2 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "348.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Street%20Fighter%20Alpha%202%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Street Fighter II (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "505.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Street%20Fighter%20II%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Street Fighter II Turbo (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "506.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Street%20Fighter%20II%20Turbo%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Sunset Riders (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "70.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Sunset%20Riders%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Adventure Island (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "291.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Adventure%20Island%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Castlevania IV (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "738.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Castlevania%20IV%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Double Dragon (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "142.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Double%20Dragon%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Genjin 2 (Japan) (MSU1) [T-En by Gaijin Productions v1.00] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "219.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Genjin%202%20%28Japan%29%20%28MSU1%29%20%5BT-En%20by%20Gaijin%20Productions%20v1.00%5D.zip",
    link2: ""
  },
  {
    name: "Super Ghouls'n Ghosts (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "367.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Ghouls%27n%20Ghosts%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Mario All-Stars (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "507.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Mario%20All-Stars%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Mario Kart (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "465.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Mario%20Kart%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Mario RPG - Legend of the Seven Stars (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "930.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Mario%20RPG%20-%20Legend%20of%20the%20Seven%20Stars%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Mario World (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "295.7M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Mario%20World%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Mario World 2 - Yoshi's Island (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "408.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Mario%20World%202%20-%20Yoshi%27s%20Island%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Metroid (Japan, USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "476.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Metroid%20%28Japan%2C%20USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Off Road (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "422.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Off%20Road%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Punch-Out!! (USA) (MSU1) [Hack by Kurrono v3] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "218.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Punch-Out%21%21%20%28USA%29%20%28MSU1%29%20%5BHack%20by%20Kurrono%20v3%5D.zip",
    link2: ""
  },
  {
    name: "Super R-Type (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "444.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20R-Type%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Road Blaster (Unl) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "500.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Road%20Blaster%20%28Unl%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Scope 6 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "429.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Scope%206%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Spongebob Kart (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "411.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Spongebob%20Kart%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Star Wars (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "170.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Star%20Wars%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Star Wars - Return of the Jedi (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "219.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Star%20Wars%20-%20Return%20of%20the%20Jedi%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Star Wars - The Empire Strikes Back (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "224.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Star%20Wars%20-%20The%20Empire%20Strikes%20Back%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Street Fighter II (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "426.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Street%20Fighter%20II%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Tennis (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "180.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Tennis%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Super Turrican (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "401.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Super%20Turrican%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles IV - Turtles in Time (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "253.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Teenage%20Mutant%20Ninja%20Turtles%20IV%20-%20Turtles%20in%20Time%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Terranigma (Europe) (MSU1) [f NTSC] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "678.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Terranigma%20%28Europe%29%20%28MSU1%29%20%5Bf%20NTSC%5D.zip",
    link2: ""
  },
  {
    name: "Tetris and Dr. Mario (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "233.1M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Tetris%20and%20Dr.%20Mario%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Top Gear (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "160.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Top%20Gear%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Top Gear 2 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "174.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Top%20Gear%202%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Top Gear 3000 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "208.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Top%20Gear%203000%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Toy Story (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "254.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Toy%20Story%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Trials of Mana (World) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "1.3G",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Trials%20of%20Mana%20%28World%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "U.N. Squadron (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "487.7M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/U.N.%20Squadron%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Mortal Kombat 3 (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "62.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Ultimate%20Mortal%20Kombat%203%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Ultraman (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "719.5M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Ultraman%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Unholy Night - The Darkness Hunter (Unl) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "162.0M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Unholy%20Night%20-%20The%20Darkness%20Hunter%20%28Unl%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Wild Guns (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "122.8M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Wild%20Guns%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Wolfchild (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "227.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Wolfchild%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Wolfenstein 3-D (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "249.6M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Wolfenstein%203-D%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Xardion (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "274.3M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Xardion%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Ys III - Wanderers from Ys (USA) (MSU1) ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "637.4M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Ys%20III%20-%20Wanderers%20from%20Ys%20%28USA%29%20%28MSU1%29.zip",
    link2: ""
  },
  {
    name: "Ys IV - Mask of the Sun (Japan) (MSU1) [T-En by Aeon Genesis v2.10] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "433.2M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Ys%20IV%20-%20Mask%20of%20the%20Sun%20%28Japan%29%20%28MSU1%29%20%5BT-En%20by%20Aeon%20Genesis%20v2.10%5D.zip",
    link2: ""
  },
  {
    name: "Ys V - Kefin, Lost Kingdom of Sand (Japan) (MSU1) [T-En by Aeon Genesis v1.00] [n] ",
    image: "https://i.postimg.cc/SQYQw0f0/msu1.png",
    size: "680.9M",
    link1: "https://archive.org/download/EmuROMHacks/MSU1/Ys%20V%20-%20Kefin%2C%20Lost%20Kingdom%20of%20Sand%20%28Japan%29%20%28MSU1%29%20%5BT-En%20by%20Aeon%20Genesis%20v1.00%5D%20%5Bn%5D.zip",
    link2: ""
  }
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
