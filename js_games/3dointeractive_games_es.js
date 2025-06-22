const roms = [
    {
      name: "Alone in the Dark (1994) (Interplay) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "141.4M",
      link1: "https://archive.org/download/rr-3do/usa/Alone%20in%20the%20Dark%20%281994%29%20%28Interplay%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "AutoBahn Tokio (1995) (Matsushita) (Jp)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "57.8M",
      link1: "https://archive.org/download/rr-3do/japan/AutoBahn%20Tokio%20%281995%29%20%28Matsushita%29%20%28Jp%29.7z",
      link2: ""
    },
    {
      name: "Ballz - The Director's Cut (1995) (Panasonic) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "93.3M",
      link1: "https://archive.org/download/rr-3do/usa/Ballz%20-%20The%20Director%27s%20Cut%20%281995%29%20%28Panasonic%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Battle Chess (1993) (Interplay) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "74.7M",
      link1: "https://archive.org/download/rr-3do/usa/Battle%20Chess%20%281993%29%20%28Interplay%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "BattleSport (1995) (Studio 3DO) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "255.5M",
      link1: "https://archive.org/download/rr-3do/europe/BattleSport%20%281995%29%20%28Studio%203DO%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "BattleSport (1995) (Studio 3DO) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "255.5M",
      link1: "https://archive.org/download/rr-3do/usa/BattleSport%20%281995%29%20%28Studio%203DO%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "BladeForce (1995) (3DO Company) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "117.0M",
      link1: "https://archive.org/download/rr-3do/europe/BladeForce%20%281995%29%20%283DO%20Company%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "BladeForce (1995) (3DO Company) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "117.0M",
      link1: "https://archive.org/download/rr-3do/usa/BladeForce%20%281995%29%20%283DO%20Company%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Burning Soldier (1994) (Panasonic) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "268.7M",
      link1: "https://archive.org/download/rr-3do/europe/Burning%20Soldier%20%281994%29%20%28Panasonic%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Cannon Fodder (1994) (Virgin) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "120.3M",
      link1: "https://archive.org/download/rr-3do/europe/Cannon%20Fodder%20%281994%29%20%28Virgin%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Captain Quazar (1995) (Studio 3DO) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "296.4M",
      link1: "https://archive.org/download/rr-3do/europe/Captain%20Quazar%20%281995%29%20%28Studio%203DO%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Captain Quazar (1996) (Studio 3DO) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "296.4M",
      link1: "https://archive.org/download/rr-3do/usa/Captain%20Quazar%20%281996%29%20%28Studio%203DO%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Club 3DO - Station Invasion (1994) (Studio 3DO) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "387.5M",
      link1: "https://archive.org/download/rr-3do/usa/Club%203DO%20-%20Station%20Invasion%20%281994%29%20%28Studio%203DO%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Corpse Killer (1994) (Digital Pictures) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "458.1M",
      link1: "https://archive.org/download/rr-3do/usa/Corpse%20Killer%20%281994%29%20%28Digital%20Pictures%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Crash 'n Burn (1993) (Crystal Dynamics) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "151.6M",
      link1: "https://archive.org/download/rr-3do/usa/Crash%20%27n%20Burn%20%281993%29%20%28Crystal%20Dynamics%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Crime Patrol (1994) (American Laser Games) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "315.5M",
      link1: "https://archive.org/download/rr-3do/usa/Crime%20Patrol%20%281994%29%20%28American%20Laser%20Games%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "D (1995) (Panasonic) (Eu) (Disc 1 of 2)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "316.6M",
      link1: "https://archive.org/download/rr-3do/europe/D%20%281995%29%20%28Panasonic%29%20%28Eu%29%20%28Disc%201%20of%202%29.7z",
      link2: ""
    },
    {
      name: "D (1995) (Panasonic) (Eu) (Disc 2 of 2)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "275.8M",
      link1: "https://archive.org/download/rr-3do/europe/D%20%281995%29%20%28Panasonic%29%20%28Eu%29%20%28Disc%202%20of%202%29.7z",
      link2: ""
    },
    {
      name: "Daedalus Encounter, The (1995) (Panasonic) (US) (Disc 1 of 4) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "337.8M",
      link1: "https://archive.org/download/rr-3do/usa/Daedalus%20Encounter%2C%20The%20%281995%29%20%28Panasonic%29%20%28US%29%20%28Disc%201%20of%204%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Daedalus Encounter, The (1995) (Panasonic) (US) (Disc 2 of 4) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "304.8M",
      link1: "https://archive.org/download/rr-3do/usa/Daedalus%20Encounter%2C%20The%20%281995%29%20%28Panasonic%29%20%28US%29%20%28Disc%202%20of%204%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Daedalus Encounter, The (1995) (Panasonic) (US) (Disc 3 of 4) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "310.5M",
      link1: "https://archive.org/download/rr-3do/usa/Daedalus%20Encounter%2C%20The%20%281995%29%20%28Panasonic%29%20%28US%29%20%28Disc%203%20of%204%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Daedalus Encounter, The (1995) (Panasonic) (US) (Disc 4 of 4) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "303.4M",
      link1: "https://archive.org/download/rr-3do/usa/Daedalus%20Encounter%2C%20The%20%281995%29%20%28Panasonic%29%20%28US%29%20%28Disc%204%20of%204%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Dragon Lore - The Legend Begins (1995) (Mindscape) (Eu) (Disc 1 of 3) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "343.1M",
      link1: "https://archive.org/download/rr-3do/europe/Dragon%20Lore%20-%20The%20Legend%20Begins%20%281995%29%20%28Mindscape%29%20%28Eu%29%20%28Disc%201%20of%203%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Dragon Lore - The Legend Begins (1995) (Mindscape) (Eu) (Disc 2 of 3) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "390.4M",
      link1: "https://archive.org/download/rr-3do/europe/Dragon%20Lore%20-%20The%20Legend%20Begins%20%281995%29%20%28Mindscape%29%20%28Eu%29%20%28Disc%202%20of%203%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Dragon Lore - The Legend Begins (1995) (Mindscape) (Eu) (Disc 3 of 3) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "419.4M",
      link1: "https://archive.org/download/rr-3do/europe/Dragon%20Lore%20-%20The%20Legend%20Begins%20%281995%29%20%28Mindscape%29%20%28Eu%29%20%28Disc%203%20of%203%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Drug Wars (1995) (American Laser Games) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "335.6M",
      link1: "https://archive.org/download/rr-3do/usa/Drug%20Wars%20%281995%29%20%28American%20Laser%20Games%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Escape from Monster Manor - A Terrifying Hunt for the Undead (1993) (Electronic Arts) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "324.4M",
      link1: "https://archive.org/download/rr-3do/usa/Escape%20from%20Monster%20Manor%20-%20A%20Terrifying%20Hunt%20for%20the%20Undead%20%281993%29%20%28Electronic%20Arts%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Family Feud (1994) (Gametek) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "267.5M",
      link1: "https://archive.org/download/rr-3do/usa/Family%20Feud%20%281994%29%20%28Gametek%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "FIFA International Soccer (1994) (Electronic Arts) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "339.1M",
      link1: "https://archive.org/download/rr-3do/europe/FIFA%20International%20Soccer%20%281994%29%20%28Electronic%20Arts%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "FIFA International Soccer (1994) (Electronic Arts) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "339.1M",
      link1: "https://archive.org/download/rr-3do/usa/FIFA%20International%20Soccer%20%281994%29%20%28Electronic%20Arts%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Flying Nightmares (1995) (Domark) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "102.7M",
      link1: "https://archive.org/download/rr-3do/europe/Flying%20Nightmares%20%281995%29%20%28Domark%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Foes of Ali (1995) (Electronic Arts) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "79.5M",
      link1: "https://archive.org/download/rr-3do/usa/Foes%20of%20Ali%20%281995%29%20%28Electronic%20Arts%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Gex (1995) (Crystal Dynamics) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "87.0M",
      link1: "https://archive.org/download/rr-3do/europe/Gex%20%281995%29%20%28Crystal%20Dynamics%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Guardian War (1994) (Panasonic) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "127.5M",
      link1: "https://archive.org/download/rr-3do/usa/Guardian%20War%20%281994%29%20%28Panasonic%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Hell - A Cyberpunk Thriller (1994) (Take 2) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "249.7M",
      link1: "https://archive.org/download/rr-3do/usa/Hell%20-%20A%20Cyberpunk%20Thriller%20%281994%29%20%28Take%202%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Horde, The (1994) (Crystal Dynamics) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "497.8M",
      link1: "https://archive.org/download/rr-3do/europe/Horde%2C%20The%20%281994%29%20%28Crystal%20Dynamics%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Horde, The (1994) (Crystal Dynamics) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "497.7M",
      link1: "https://archive.org/download/rr-3do/usa/Horde%2C%20The%20%281994%29%20%28Crystal%20Dynamics%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Icebreaker (1995) (Panasonic) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "38.6M",
      link1: "https://archive.org/download/rr-3do/usa/Icebreaker%20%281995%29%20%28Panasonic%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Immercenary (1995) (Electronic Arts) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "318.4M",
      link1: "https://archive.org/download/rr-3do/europe/Immercenary%20%281995%29%20%28Electronic%20Arts%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Immercenary (1995) (Electronic Arts) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "318.4M",
      link1: "https://archive.org/download/rr-3do/usa/Immercenary%20%281995%29%20%28Electronic%20Arts%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Incredible Machine, The (1994) (Dynamix) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "222.4M",
      link1: "https://archive.org/download/rr-3do/usa/Incredible%20Machine%2C%20The%20%281994%29%20%28Dynamix%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Iron Angel of The Apocalypse (1994) (Panasonic) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "162.1M",
      link1: "https://archive.org/download/rr-3do/europe/Iron%20Angel%20of%20The%20Apocalypse%20%281994%29%20%28Panasonic%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "John Madden NFL Football (1994) (Electronic Arts) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "151.6M",
      link1: "https://archive.org/download/rr-3do/europe/John%20Madden%20NFL%20Football%20%281994%29%20%28Electronic%20Arts%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Jurassic Park Interactive (1994) (Universal) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "146.7M",
      link1: "https://archive.org/download/rr-3do/usa/Jurassic%20Park%20Interactive%20%281994%29%20%28Universal%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Kakinoki Shogi (1994) (ASCII) (Jp)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "10.1M",
      link1: "https://archive.org/download/rr-3do/japan/Kakinoki%20Shogi%20%281994%29%20%28ASCII%29%20%28Jp%29.7z",
      link2: ""
    },
    {
      name: "Killing Time (1995) (Studio 3DO) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "346.8M",
      link1: "https://archive.org/download/rr-3do/usa/Killing%20Time%20%281995%29%20%28Studio%203DO%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Kingdom - The Far Reaches (1994) (Interplay) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "282.7M",
      link1: "https://archive.org/download/rr-3do/europe/Kingdom%20-%20The%20Far%20Reaches%20%281994%29%20%28Interplay%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Lost Files of Sherlock Holmes, The (1994) (Electronic Arts) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "413.2M",
      link1: "https://archive.org/download/rr-3do/usa/Lost%20Files%20of%20Sherlock%20Holmes%2C%20The%20%281994%29%20%28Electronic%20Arts%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Mad Dog II - the Lost Gold (1994) (American Laser Games) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "303.0M",
      link1: "https://archive.org/download/rr-3do/usa/Mad%20Dog%20II%20-%20the%20Lost%20Gold%20%281994%29%20%28American%20Laser%20Games%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Mahjong Kyou Jidai - AV Gal Seifuku Hen (1994) (Micronet) (Jp)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "190.7M",
      link1: "https://archive.org/download/rr-3do/japan/Mahjong%20Kyou%20Jidai%20-%20AV%20Gal%20Seifuku%20Hen%20%281994%29%20%28Micronet%29%20%28Jp%29.7z",
      link2: ""
    },
    {
      name: "Mazer (1995) (American Laser Games) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "142.4M",
      link1: "https://archive.org/download/rr-3do/usa/Mazer%20%281995%29%20%28American%20Laser%20Games%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "MegaRace (1994) (Mindscape) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "418.6M",
      link1: "https://archive.org/download/rr-3do/usa/MegaRace%20%281994%29%20%28Mindscape%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "MegaRace (1994) (Software Toolworks) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "418.6M",
      link1: "https://archive.org/download/rr-3do/europe/MegaRace%20%281994%29%20%28Software%20Toolworks%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Microcosm (1994) (Psygnosis) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "228.1M",
      link1: "https://archive.org/download/rr-3do/usa/Microcosm%20%281994%29%20%28Psygnosis%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Myst (1994) (Panasonic) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "174.4M",
      link1: "https://archive.org/download/rr-3do/usa/Myst%20%281994%29%20%28Panasonic%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Need for Speed, The (1994) (Electronic Arts) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "298.1M",
      link1: "https://archive.org/download/rr-3do/usa/Need%20for%20Speed%2C%20The%20%281994%29%20%28Electronic%20Arts%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Novastorm (1994) (Psygnosis) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "377.8M",
      link1: "https://archive.org/download/rr-3do/usa/Novastorm%20%281994%29%20%28Psygnosis%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Off-World Interceptor (1994) (Crystal Dynamics) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "356.1M",
      link1: "https://archive.org/download/rr-3do/europe/Off-World%20Interceptor%20%281994%29%20%28Crystal%20Dynamics%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "OverDrivin' (1994) (Electronic Arts) (Jp)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "155.2M",
      link1: "https://archive.org/download/rr-3do/japan/OverDrivin%27%20%281994%29%20%28Electronic%20Arts%29%20%28Jp%29.7z",
      link2: ""
    },
    {
      name: "Panzer General (1995) (Mindscape) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "83.4M",
      link1: "https://archive.org/download/rr-3do/europe/Panzer%20General%20%281995%29%20%28Mindscape%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "PaTaank (1994) (PF.Magic) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "122.3M",
      link1: "https://archive.org/download/rr-3do/usa/PaTaank%20%281994%29%20%28PF.Magic%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Pebble Beach Golf Links (1993) (Panasonic) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "158.2M",
      link1: "https://archive.org/download/rr-3do/usa/Pebble%20Beach%20Golf%20Links%20%281993%29%20%28Panasonic%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Pebble Beach Golf Links (1994) (Panasonic) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "163.4M",
      link1: "https://archive.org/download/rr-3do/europe/Pebble%20Beach%20Golf%20Links%20%281994%29%20%28Panasonic%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Pebble Beach no Hatou (1994) (Panasonic) (Jp) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "160.0M",
      link1: "https://archive.org/download/rr-3do/japan/Pebble%20Beach%20no%20Hatou%20%281994%29%20%28Panasonic%29%20%28Jp%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "PGA Tour 96 (1995) (Electronic Arts) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "120.2M",
      link1: "https://archive.org/download/rr-3do/europe/PGA%20Tour%2096%20%281995%29%20%28Electronic%20Arts%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Phoenix 3 (1995) (Studio 3DO) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "351.5M",
      link1: "https://archive.org/download/rr-3do/europe/Phoenix%203%20%281995%29%20%28Studio%203DO%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "PO'ed (1995) (Studio 3DO) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "45.4M",
      link1: "https://archive.org/download/rr-3do/europe/PO%27ed%20%281995%29%20%28Studio%203DO%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Policenauts - Pilot Disc (1995) (Konami) (Jp)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "297.7M",
      link1: "https://archive.org/download/rr-3do/japan/Policenauts%20-%20Pilot%20Disc%20%281995%29%20%28Konami%29%20%28Jp%29.7z",
      link2: ""
    },
    {
      name: "Powers Kingdom (1994) (Panasonic) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "127.0M",
      link1: "https://archive.org/download/rr-3do/europe/Powers%20Kingdom%20%281994%29%20%28Panasonic%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Primal Rage (1995) (GoldStar) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "129.8M",
      link1: "https://archive.org/download/rr-3do/europe/Primal%20Rage%20%281995%29%20%28GoldStar%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Psychic Detective (1995) (Electronic Arts) (Eu) (Disc 1 of 3) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "439.0M",
      link1: "https://archive.org/download/rr-3do/europe/Psychic%20Detective%20%281995%29%20%28Electronic%20Arts%29%20%28Eu%29%20%28Disc%201%20of%203%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Psychic Detective (1995) (Electronic Arts) (Eu) (Disc 2 of 3) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "344.0M",
      link1: "https://archive.org/download/rr-3do/europe/Psychic%20Detective%20%281995%29%20%28Electronic%20Arts%29%20%28Eu%29%20%28Disc%202%20of%203%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Psychic Detective (1995) (Electronic Arts) (Eu) (Disc 3 of 3) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "417.8M",
      link1: "https://archive.org/download/rr-3do/europe/Psychic%20Detective%20%281995%29%20%28Electronic%20Arts%29%20%28Eu%29%20%28Disc%203%20of%203%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Psychic Detective (1995) (Electronic Arts) (US) (Disc 1 of 3) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "439.0M",
      link1: "https://archive.org/download/rr-3do/usa/Psychic%20Detective%20%281995%29%20%28Electronic%20Arts%29%20%28US%29%20%28Disc%201%20of%203%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Psychic Detective (1995) (Electronic Arts) (US) (Disc 2 of 3) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "344.0M",
      link1: "https://archive.org/download/rr-3do/usa/Psychic%20Detective%20%281995%29%20%28Electronic%20Arts%29%20%28US%29%20%28Disc%202%20of%203%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Psychic Detective (1995) (Electronic Arts) (US) (Disc 3 of 3) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "417.8M",
      link1: "https://archive.org/download/rr-3do/usa/Psychic%20Detective%20%281995%29%20%28Electronic%20Arts%29%20%28US%29%20%28Disc%203%20of%203%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Quarantine (1994) (Gametek) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "51.7M",
      link1: "https://archive.org/download/rr-3do/usa/Quarantine%20%281994%29%20%28Gametek%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Quarantine (1994) (Gametek) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "53.1M",
      link1: "https://archive.org/download/rr-3do/usa/Quarantine%20%281994%29%20%28Gametek%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Real Pinball (1994) (Panasonic) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "13.8M",
      link1: "https://archive.org/download/rr-3do/europe/Real%20Pinball%20%281994%29%20%28Panasonic%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Return Fire (1994) (Silent) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "209.7M",
      link1: "https://archive.org/download/rr-3do/europe/Return%20Fire%20%281994%29%20%28Silent%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Return Fire (1995) (Prolific) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "192.3M",
      link1: "https://archive.org/download/rr-3do/usa/Return%20Fire%20%281995%29%20%28Prolific%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Rise of the Robots (1995) (Time Warner Interactive) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "278.9M",
      link1: "https://archive.org/download/rr-3do/europe/Rise%20of%20the%20Robots%20%281995%29%20%28Time%20Warner%20Interactive%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Road Rash (1994) (Electronic Arts) (Eu) [a]",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "433.5M",
      link1: "https://archive.org/download/rr-3do/europe/Road%20Rash%20%281994%29%20%28Electronic%20Arts%29%20%28Eu%29%20%5Ba%5D.7z",
      link2: ""
    },
    {
      name: "Road Rash (1994) (Electronic Arts) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "433.5M",
      link1: "https://archive.org/download/rr-3do/europe/Road%20Rash%20%281994%29%20%28Electronic%20Arts%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Samurai Shodown (1994) (Crystal Dynamics) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "193.3M",
      link1: "https://archive.org/download/rr-3do/usa/Samurai%20Shodown%20%281994%29%20%28Crystal%20Dynamics%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Scramble Cobra (1994) (Panasonic) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "147.9M",
      link1: "https://archive.org/download/rr-3do/europe/Scramble%20Cobra%20%281994%29%20%28Panasonic%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Shanghai - Banri no Choujou (1994) (Electronic Arts Victor) (Jp)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "60.1M",
      link1: "https://archive.org/download/rr-3do/japan/Shanghai%20-%20Banri%20no%20Choujou%20%281994%29%20%28Electronic%20Arts%20Victor%29%20%28Jp%29.7z",
      link2: ""
    },
    {
      name: "Shanghai - Triple-Threat (1994) (Activision) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "60.0M",
      link1: "https://archive.org/download/rr-3do/usa/Shanghai%20-%20Triple-Threat%20%281994%29%20%28Activision%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Shanghai - Triple-Threat (1994) (Activision) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "60.0M",
      link1: "https://archive.org/download/rr-3do/usa/Shanghai%20-%20Triple-Threat%20%281994%29%20%28Activision%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Shockwave (1994) (Electronic Arts) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "316.7M",
      link1: "https://archive.org/download/rr-3do/usa/Shockwave%20%281994%29%20%28Electronic%20Arts%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Shockwave (1994) (Electronic Arts) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "269.3M",
      link1: "https://archive.org/download/rr-3do/usa/Shockwave%20%281994%29%20%28Electronic%20Arts%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Shockwave - Operation JumpGate (1994) (Electronic Arts) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "99.8M",
      link1: "https://archive.org/download/rr-3do/usa/Shockwave%20-%20Operation%20JumpGate%20%281994%29%20%28Electronic%20Arts%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Shockwave 2 - Beyond the Gate (1995) (Electronic Arts) (Eu) (Disc 1 of 2) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "310.3M",
      link1: "https://archive.org/download/rr-3do/europe/Shockwave%202%20-%20Beyond%20the%20Gate%20%281995%29%20%28Electronic%20Arts%29%20%28Eu%29%20%28Disc%201%20of%202%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Shockwave 2 - Beyond the Gate (1995) (Electronic Arts) (Eu) (Disc 2 of 2) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "313.9M",
      link1: "https://archive.org/download/rr-3do/europe/Shockwave%202%20-%20Beyond%20the%20Gate%20%281995%29%20%28Electronic%20Arts%29%20%28Eu%29%20%28Disc%202%20of%202%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Slam 'N Jam '95 (1994) (Crystal Dynamics) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "38.7M",
      link1: "https://archive.org/download/rr-3do/europe/Slam%20%27N%20Jam%20%2795%20%281994%29%20%28Crystal%20Dynamics%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Slam 'N Jam '95 (1995) (Crystal Dynamics) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "38.7M",
      link1: "https://archive.org/download/rr-3do/usa/Slam%20%27N%20Jam%20%2795%20%281995%29%20%28Crystal%20Dynamics%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Slayer (1994) (Mindscape) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "184.1M",
      link1: "https://archive.org/download/rr-3do/europe/Slayer%20%281994%29%20%28Mindscape%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Slayer (1994) (SSI) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "184.1M",
      link1: "https://archive.org/download/rr-3do/usa/Slayer%20%281994%29%20%28SSI%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Slayer (1994) (SSI) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "184.1M",
      link1: "https://archive.org/download/rr-3do/usa/Slayer%20%281994%29%20%28SSI%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Snowjob (1995) (Studio 3DO) (Eu) (Disc 1 of 2)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "269.6M",
      link1: "https://archive.org/download/rr-3do/europe/Snowjob%20%281995%29%20%28Studio%203DO%29%20%28Eu%29%20%28Disc%201%20of%202%29.7z",
      link2: ""
    },
    {
      name: "Snowjob (1995) (Studio 3DO) (Eu) (Disc 2 of 2)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "278.5M",
      link1: "https://archive.org/download/rr-3do/europe/Snowjob%20%281995%29%20%28Studio%203DO%29%20%28Eu%29%20%28Disc%202%20of%202%29.7z",
      link2: ""
    },
    {
      name: "Soccer Kid (1994) (Studio 3DO) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "317.7M",
      link1: "https://archive.org/download/rr-3do/usa/Soccer%20Kid%20%281994%29%20%28Studio%203DO%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Space Hulk - Vengeance of the Blood Angels (1995) (Electronic Arts) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "137.4M",
      link1: "https://archive.org/download/rr-3do/europe/Space%20Hulk%20-%20Vengeance%20of%20the%20Blood%20Angels%20%281995%29%20%28Electronic%20Arts%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Space Pirates (1994) (American Laser Games) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "301.8M",
      link1: "https://archive.org/download/rr-3do/usa/Space%20Pirates%20%281994%29%20%28American%20Laser%20Games%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Star Fighter (1995) (Studio 3DO) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "258.1M",
      link1: "https://archive.org/download/rr-3do/europe/Star%20Fighter%20%281995%29%20%28Studio%203DO%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Star Wars - Rebel Assault (1993) (LucasArts) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "118.7M",
      link1: "https://archive.org/download/rr-3do/usa/Star%20Wars%20-%20Rebel%20Assault%20%281993%29%20%28LucasArts%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "StarBlade (1994) (Panasonic) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "221.6M",
      link1: "https://archive.org/download/rr-3do/europe/StarBlade%20%281994%29%20%28Panasonic%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "StarBlade (1994) (Panasonic) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "224.4M",
      link1: "https://archive.org/download/rr-3do/usa/StarBlade%20%281994%29%20%28Panasonic%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Stellar 7 - Draxon's Revenge (1993) (Dynamix) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "191.8M",
      link1: "https://archive.org/download/rr-3do/usa/Stellar%207%20-%20Draxon%27s%20Revenge%20%281993%29%20%28Dynamix%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Strahl (1995) (Panasonic) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "357.2M",
      link1: "https://archive.org/download/rr-3do/usa/Strahl%20%281995%29%20%28Panasonic%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Striker - World Cup Special (1995) (Panasonic) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "143.3M",
      link1: "https://archive.org/download/rr-3do/europe/Striker%20-%20World%20Cup%20Special%20%281995%29%20%28Panasonic%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Super Real Mahjong PIV + Aishou Shindan (1994) (Naxat) (Jp)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "37.5M",
      link1: "https://archive.org/download/rr-3do/japan/Super%20Real%20Mahjong%20PIV%20%2B%20Aishou%20Shindan%20%281994%29%20%28Naxat%29%20%28Jp%29.7z",
      link2: ""
    },
    {
      name: "Super Street Fighter II Turbo (1994) (Panasonic) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "184.5M",
      link1: "https://archive.org/download/rr-3do/usa/Super%20Street%20Fighter%20II%20Turbo%20%281994%29%20%28Panasonic%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Super Wing Commander (1994) (Origin) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "243.3M",
      link1: "https://archive.org/download/rr-3do/europe/Super%20Wing%20Commander%20%281994%29%20%28Origin%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Super Wing Commander (1994) (Origin) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "234.5M",
      link1: "https://archive.org/download/rr-3do/usa/Super%20Wing%20Commander%20%281994%29%20%28Origin%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Supreme Warrior (1994) (Digital Pictures) (US) (Disc 1 of 2) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "400.8M",
      link1: "https://archive.org/download/rr-3do/usa/Supreme%20Warrior%20%281994%29%20%28Digital%20Pictures%29%20%28US%29%20%28Disc%201%20of%202%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Supreme Warrior (1994) (Digital Pictures) (US) (Disc 2 of 2) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "357.8M",
      link1: "https://archive.org/download/rr-3do/usa/Supreme%20Warrior%20%281994%29%20%28Digital%20Pictures%29%20%28US%29%20%28Disc%202%20of%202%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Syndicate (1995) (Electronic Arts) (Eu)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "47.1M",
      link1: "https://archive.org/download/rr-3do/europe/Syndicate%20%281995%29%20%28Electronic%20Arts%29%20%28Eu%29.7z",
      link2: ""
    },
    {
      name: "Syndicate (1995) (Electronic Arts) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "47.1M",
      link1: "https://archive.org/download/rr-3do/usa/Syndicate%20%281995%29%20%28Electronic%20Arts%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Theme Park (1994) (Electronic Arts) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "82.6M",
      link1: "https://archive.org/download/rr-3do/europe/Theme%20Park%20%281994%29%20%28Electronic%20Arts%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Theme Park (1994) (Electronic Arts) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "82.6M",
      link1: "https://archive.org/download/rr-3do/usa/Theme%20Park%20%281994%29%20%28Electronic%20Arts%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Total Eclipse (1993) (Crystal Dynamics) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "170.1M",
      link1: "https://archive.org/download/rr-3do/usa/Total%20Eclipse%20%281993%29%20%28Crystal%20Dynamics%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Total Eclipse (1993) (Crystal Dynamics) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "196.2M",
      link1: "https://archive.org/download/rr-3do/usa/Total%20Eclipse%20%281993%29%20%28Crystal%20Dynamics%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Total Eclipse (1994) (Crystal Dynamics) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "170.1M",
      link1: "https://archive.org/download/rr-3do/usa/Total%20Eclipse%20%281994%29%20%28Crystal%20Dynamics%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Twisted - The Game Show (1993) (Electronic Arts) (US)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "239.2M",
      link1: "https://archive.org/download/rr-3do/usa/Twisted%20-%20The%20Game%20Show%20%281993%29%20%28Electronic%20Arts%29%20%28US%29.7z",
      link2: ""
    },
    {
      name: "Virtuoso (1994) (Elite) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "221.6M",
      link1: "https://archive.org/download/rr-3do/europe/Virtuoso%20%281994%29%20%28Elite%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "VR Stalker (1994) (American Laser Games) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "54.4M",
      link1: "https://archive.org/download/rr-3do/usa/VR%20Stalker%20%281994%29%20%28American%20Laser%20Games%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Waialae Country Club (1994) (Panasonic) (US) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "193.8M",
      link1: "https://archive.org/download/rr-3do/usa/Waialae%20Country%20Club%20%281994%29%20%28Panasonic%29%20%28US%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Way of the Warrior (1994) (Interplay) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "162.6M",
      link1: "https://archive.org/download/rr-3do/europe/Way%20of%20the%20Warrior%20%281994%29%20%28Interplay%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Wing Commander III - Heart of the Tiger (1995) (Origin) (Eu-US) (Disc 1 of 4) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "514.7M",
      link1: "https://archive.org/download/rr-3do/usa/Wing%20Commander%20III%20-%20Heart%20of%20the%20Tiger%20%281995%29%20%28Origin%29%20%28Eu-US%29%20%28Disc%201%20of%204%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Wing Commander III - Heart of the Tiger (1995) (Origin) (Eu-US) (Disc 2 of 4) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "476.1M",
      link1: "https://archive.org/download/rr-3do/usa/Wing%20Commander%20III%20-%20Heart%20of%20the%20Tiger%20%281995%29%20%28Origin%29%20%28Eu-US%29%20%28Disc%202%20of%204%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Wing Commander III - Heart of the Tiger (1995) (Origin) (Eu-US) (Disc 3 of 4) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "512.5M",
      link1: "https://archive.org/download/rr-3do/usa/Wing%20Commander%20III%20-%20Heart%20of%20the%20Tiger%20%281995%29%20%28Origin%29%20%28Eu-US%29%20%28Disc%203%20of%204%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Wing Commander III - Heart of the Tiger (1995) (Origin) (Eu-US) (Disc 4 of 4) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "510.0M",
      link1: "https://archive.org/download/rr-3do/usa/Wing%20Commander%20III%20-%20Heart%20of%20the%20Tiger%20%281995%29%20%28Origin%29%20%28Eu-US%29%20%28Disc%204%20of%204%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "World Cup Golf - Hyatt Dorado Beach (1994) (U.S. Gold) (Eu) ",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "426.8M",
      link1: "https://archive.org/download/rr-3do/europe/World%20Cup%20Golf%20-%20Hyatt%20Dorado%20Beach%20%281994%29%20%28U.S.%20Gold%29%20%28Eu%29%20%5B%21%5D.7z",
      link2: ""
    },
    {
      name: "Yu Yu Hakusho (1994) (Tomy) (Jp)",
      image: "https://i.postimg.cc/ZnN7kGq8/3-DO-Logo-svg.png",
      size: "222.3M",
      link1: "https://archive.org/download/rr-3do/japan/Yu%20Yu%20Hakusho%20%281994%29%20%28Tomy%29%20%28Jp%29.7z",
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
