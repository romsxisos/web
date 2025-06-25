const roms = [
  {
    name: "Alien vs Predator",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "85.6M",
    link1: "https://archive.org/download/mugen_1999/Alien%20vs%20Predator.zip",
    link2: ""
  },
  {
    name: "Bleach",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "910.0M",
    link1: "https://archive.org/download/mugen_1999/Bleach.7z",
    link2: ""
  },
  {
    name: "Bleach",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "342.1M",
    link1: "https://archive.org/download/mugen_1999/Bleach.zip",
    link2: ""
  },
  {
    name: "Bleach - Shinigami Daiko",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "339.2M",
    link1: "https://archive.org/download/mugen_1999/Bleach%20-%20Shinigami%20Daiko.zip",
    link2: ""
  },
  {
    name: "Bleach JUS Edition",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "617.9M",
    link1: "https://archive.org/download/mugen_1999/Bleach%20JUS%20Edition.zip",
    link2: ""
  },
  {
    name: "Capcom VS SNK 2",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.1G",
    link1: "https://archive.org/download/mugen_1999/Capcom%20VS%20SNK%202.7z",
    link2: ""
  },
  {
    name: "Capcom vs The World",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "600.7M",
    link1: "https://archive.org/download/mugen_1999/Capcom%20vs%20The%20World.zip",
    link2: ""
  },
  {
    name: "Comic Fighters",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.0G",
    link1: "https://archive.org/download/mugen_1999/Comic%20Fighters.zip",
    link2: ""
  },
  {
    name: "D.O.N. Battle Stadium",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "620.7M",
    link1: "https://archive.org/download/mugen_1999/D.O.N.%20Battle%20Stadium.zip",
    link2: ""
  },
  {
    name: "DB 2007",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "281.5M",
    link1: "https://archive.org/download/mugen_1999/DB%202007.zip",
    link2: ""
  },
  {
    name: "DBGT",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "487.1M",
    link1: "https://archive.org/download/mugen_1999/DBGT.zip",
    link2: ""
  },
  {
    name: "DBZ Budokai",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "377.9M",
    link1: "https://archive.org/download/mugen_1999/DBZ%20Budokai.zip",
    link2: ""
  },
  {
    name: "DBZ Butoden",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "128.4M",
    link1: "https://archive.org/download/mugen_1999/DBZ%20Butoden.zip",
    link2: ""
  },
  {
    name: "DBZ SB Legends",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "61.5M",
    link1: "https://archive.org/download/mugen_1999/DBZ%20SB%20Legends.zip",
    link2: ""
  },
  {
    name: "DBZ vs Bleach",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "397.2M",
    link1: "https://archive.org/download/mugen_1999/DBZ%20vs%20Bleach.zip",
    link2: ""
  },
  {
    name: "DBZ vs Naruto",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "399.7M",
    link1: "https://archive.org/download/mugen_1999/DBZ%20vs%20Naruto.zip",
    link2: ""
  },
  {
    name: "DC vs Marvel",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.8G",
    link1: "https://archive.org/download/mugen_1999/DC%20vs%20Marvel.zip",
    link2: ""
  },
  {
    name: "DCMF",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "808.8M",
    link1: "https://archive.org/download/mugen_1999/DCMF.zip",
    link2: ""
  },
  {
    name: "DIGIMON",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "197.6M",
    link1: "https://archive.org/download/mugen_1999/DIGIMON.zip",
    link2: ""
  },
  {
    name: "Dragon Ball 2005",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "114.7M",
    link1: "https://archive.org/download/mugen_1999/Dragon%20Ball%202005.zip",
    link2: ""
  },
  {
    name: "Dragon Ball AF Edition",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "369.9M",
    link1: "https://archive.org/download/mugen_1999/Dragon%20Ball%20AF%20Edition.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Mugen Edition 2005",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "112.0M",
    link1: "https://archive.org/download/mugen_1999/Dragon%20Ball%20Mugen%20Edition%202005.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Origins Mugen",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "103.0M",
    link1: "https://archive.org/download/mugen_1999/Dragon%20Ball%20Origins%20Mugen.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Tournament",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "658.1M",
    link1: "https://archive.org/download/mugen_1999/Dragon%20Ball%20Tournament.zip",
    link2: ""
  },
  {
    name: "Dragon Ball vs Naruto",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "900.4M",
    link1: "https://archive.org/download/mugen_1999/Dragon%20Ball%20vs%20Naruto.zip",
    link2: ""
  },
  {
    name: "Dragon Ball vs One Piece",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "259.0M",
    link1: "https://archive.org/download/mugen_1999/Dragon%20Ball%20vs%20One%20Piece.zip",
    link2: ""
  },
  {
    name: "Dragon Ball x Naruto Storm Budokai",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "511.0M",
    link1: "https://archive.org/download/mugen_1999/Dragon%20Ball%20x%20Naruto%20Storm%20Budokai.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Z World In Chaos",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "525.7M",
    link1: "https://archive.org/download/mugen_1999/Dragon%20Ball%20Z%20World%20In%20Chaos.zip",
    link2: ""
  },
  {
    name: "DragonBall vs Street Fighter",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "373.2M",
    link1: "https://archive.org/download/mugen_1999/DragonBall%20vs%20Street%20Fighter.zip",
    link2: ""
  },
  {
    name: "Fatal Fury Special",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "126.1M",
    link1: "https://archive.org/download/mugen_1999/Fatal%20Fury%20Special.zip",
    link2: ""
  },
  {
    name: "Fighter History",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "404.9M",
    link1: "https://archive.org/download/mugen_1999/Fighter%20History.zip",
    link2: ""
  },
  {
    name: "Guilty Gear Mugen",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "786.8M",
    link1: "https://archive.org/download/mugen_1999/Guilty%20Gear%20Mugen.zip",
    link2: ""
  },
  {
    name: "Hakuto No Ken",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "268.2M",
    link1: "https://archive.org/download/mugen_1999/Hakuto%20No%20Ken.zip",
    link2: ""
  },
  {
    name: "Hokuto No Ken",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.0G",
    link1: "https://archive.org/download/mugen_1999/Hokuto%20No%20Ken.zip",
    link2: ""
  },
  {
    name: "Jump Shin Ultimate Galaxy Stars X3",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "172.7M",
    link1: "https://archive.org/download/mugen_1999/Jump%20Shin%20Ultimate%20Galaxy%20Stars%20X3.zip",
    link2: ""
  },
  {
    name: "Jump Stars Ultimate Battle",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "111.3M",
    link1: "https://archive.org/download/mugen_1999/Jump%20Stars%20Ultimate%20Battle.zip",
    link2: ""
  },
  {
    name: "JUMP SuperStars SmashBros",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "376.5M",
    link1: "https://archive.org/download/mugen_1999/JUMP%20SuperStars%20SmashBros.zip",
    link2: ""
  },
  {
    name: "Jump Tamashii Stars X2",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "86.2M",
    link1: "https://archive.org/download/mugen_1999/Jump%20Tamashii%20Stars%20X2.zip",
    link2: ""
  },
  {
    name: "Jump Ultimate Stars",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "766.8M",
    link1: "https://archive.org/download/mugen_1999/Jump%20Ultimate%20Stars.zip",
    link2: ""
  },
  {
    name: "King of Fighter 98",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "123.1M",
    link1: "https://archive.org/download/mugen_1999/King%20of%20Fighter%2098.zip",
    link2: ""
  },
  {
    name: "King of Fighter Forever 2008",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "602.0M",
    link1: "https://archive.org/download/mugen_1999/King%20of%20Fighter%20Forever%202008.zip",
    link2: ""
  },
  {
    name: "KOF",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "626.5M",
    link1: "https://archive.org/download/mugen_1999/KOF.zip",
    link2: ""
  },
  {
    name: "Kof '94 Remix MUGEN",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "94.7M",
    link1: "https://archive.org/download/mugen_1999/Kof%20%2794%20Remix%20MUGEN.zip",
    link2: ""
  },
  {
    name: "KOF 93",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "66.5M",
    link1: "https://archive.org/download/mugen_1999/KOF%2093.zip",
    link2: ""
  },
  {
    name: "KOF 94R",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "193.9M",
    link1: "https://archive.org/download/mugen_1999/KOF%2094R.zip",
    link2: ""
  },
  {
    name: "KOF 98b",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "225.4M",
    link1: "https://archive.org/download/mugen_1999/KOF%2098b.zip",
    link2: ""
  },
  {
    name: "KOF Classic",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "174.4M",
    link1: "https://archive.org/download/mugen_1999/KOF%20Classic.zip",
    link2: ""
  },
  {
    name: "KOF Extra",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.1G",
    link1: "https://archive.org/download/mugen_1999/KOF%20Extra.zip",
    link2: ""
  },
  {
    name: "KOF Hallucination",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "723.1M",
    link1: "https://archive.org/download/mugen_1999/KOF%20Hallucination.zip",
    link2: ""
  },
  {
    name: "KOF Max",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "694.8M",
    link1: "https://archive.org/download/mugen_1999/KOF%20Max.zip",
    link2: ""
  },
  {
    name: "KOF Memorial",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "513.1M",
    link1: "https://archive.org/download/mugen_1999/KOF%20Memorial.7z",
    link2: ""
  },
  {
    name: "KOF Memorial SE",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "691.4M",
    link1: "https://archive.org/download/mugen_1999/KOF%20Memorial%20SE.zip",
    link2: ""
  },
  {
    name: "KOF Mugen Edition 2018",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "786.2M",
    link1: "https://archive.org/download/mugen_1999/KOF%20Mugen%20Edition%202018.zip",
    link2: ""
  },
  {
    name: "KOF SNK",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "420.4M",
    link1: "https://archive.org/download/mugen_1999/KOF%20SNK.zip",
    link2: ""
  },
  {
    name: "KOF Special",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "965.7M",
    link1: "https://archive.org/download/mugen_1999/KOF%20Special.zip",
    link2: ""
  },
  {
    name: "KOF Supernova",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "910.7M",
    link1: "https://archive.org/download/mugen_1999/KOF%20Supernova.zip",
    link2: ""
  },
  {
    name: "KOF ZII",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.2G",
    link1: "https://archive.org/download/mugen_1999/KOF%20ZII.zip",
    link2: ""
  },
  {
    name: "KOF Zillion",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "948.9M",
    link1: "https://archive.org/download/mugen_1999/KOF%20Zillion.7z",
    link2: ""
  },
  {
    name: "KOFCS",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "149.2M",
    link1: "https://archive.org/download/mugen_1999/KOFCS.zip",
    link2: ""
  },
  {
    name: "KOFR",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.5G",
    link1: "https://archive.org/download/mugen_1999/KOFR.zip",
    link2: ""
  },
  {
    name: "KOFS",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "2.3G",
    link1: "https://archive.org/download/mugen_1999/KOFS.zip",
    link2: ""
  },
  {
    name: "KOFXIII Mugen",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "583.9M",
    link1: "https://archive.org/download/mugen_1999/KOFXIII%20Mugen.zip",
    link2: ""
  },
  {
    name: "KOFZ Ultimate",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "715.1M",
    link1: "https://archive.org/download/mugen_1999/KOFZ%20Ultimate.zip",
    link2: ""
  },
  {
    name: "Marvel Super Heroes",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "224.2M",
    link1: "https://archive.org/download/mugen_1999/Marvel%20Super%20Heroes.zip",
    link2: ""
  },
  {
    name: "Marvel Vs Capcom Remake",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "958.8M",
    link1: "https://archive.org/download/mugen_1999/Marvel%20Vs%20Capcom%20Remake.zip",
    link2: ""
  },
  {
    name: "MSHVSF",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "560.7M",
    link1: "https://archive.org/download/mugen_1999/MSHVSF.zip",
    link2: ""
  },
  {
    name: "MSW Steel Warriors",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "35.9M",
    link1: "https://archive.org/download/mugen_1999/MSW%20Steel%20Warriors.zip",
    link2: ""
  },
  {
    name: "Mugen All Stars Battle Royale",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "437.0M",
    link1: "https://archive.org/download/mugen_1999/Mugen%20All%20Stars%20Battle%20Royale.zip",
    link2: ""
  },
  {
    name: "Mugen Warzone",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.2G",
    link1: "https://archive.org/download/mugen_1999/Mugen%20Warzone.zip",
    link2: ""
  },
  {
    name: "MVC Deluxe",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "899.9M",
    link1: "https://archive.org/download/mugen_1999/MVC%20Deluxe.zip",
    link2: ""
  },
  {
    name: "Naruto Battle Arena 2",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "52.2M",
    link1: "https://archive.org/download/mugen_1999/Naruto%20Battle%20Arena%202.zip",
    link2: ""
  },
  {
    name: "Naruto Ultimate Ninja Heroes",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.7G",
    link1: "https://archive.org/download/mugen_1999/Naruto%20Ultimate%20Ninja%20Heroes.zip",
    link2: ""
  },
  {
    name: "NeoGeo Battle",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "264.2M",
    link1: "https://archive.org/download/mugen_1999/NeoGeo%20Battle.zip",
    link2: ""
  },
  {
    name: "NR 5",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "461.3M",
    link1: "https://archive.org/download/mugen_1999/NR%205.zip",
    link2: ""
  },
  {
    name: "Pocket fighters",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "157.0M",
    link1: "https://archive.org/download/mugen_1999/Pocket%20fighters.zip",
    link2: ""
  },
  {
    name: "Pocket Mugen",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "86.9M",
    link1: "https://archive.org/download/mugen_1999/Pocket%20Mugen.zip",
    link2: ""
  },
  {
    name: "QOH",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "114.1M",
    link1: "https://archive.org/download/mugen_1999/QOH.zip",
    link2: ""
  },
  {
    name: "Rage of Dragon",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "160.5M",
    link1: "https://archive.org/download/mugen_1999/Rage%20of%20Dragon.zip",
    link2: ""
  },
  {
    name: "Ranma vs Inuyasha",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "168.0M",
    link1: "https://archive.org/download/mugen_1999/Ranma%20vs%20Inuyasha.zip",
    link2: ""
  },
  {
    name: "Rurouni Kenshin",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "663.3M",
    link1: "https://archive.org/download/mugen_1999/Rurouni%20Kenshin.zip",
    link2: ""
  },
  {
    name: "Saint Seiya",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "206.5M",
    link1: "https://archive.org/download/mugen_1999/Saint%20Seiya.zip",
    link2: ""
  },
  {
    name: "SFA 3",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "833.1M",
    link1: "https://archive.org/download/mugen_1999/SFA%203.zip",
    link2: ""
  },
  {
    name: "SFAZ",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "336.4M",
    link1: "https://archive.org/download/mugen_1999/SFAZ.zip",
    link2: ""
  },
  {
    name: "SFS 2",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "289.1M",
    link1: "https://archive.org/download/mugen_1999/SFS%202.zip",
    link2: ""
  },
  {
    name: "SFSE",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "370.6M",
    link1: "https://archive.org/download/mugen_1999/SFSE.zip",
    link2: ""
  },
  {
    name: "Smash Bros Mugen",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "489.8M",
    link1: "https://archive.org/download/mugen_1999/Smash%20Bros%20Mugen.zip",
    link2: ""
  },
  {
    name: "SNK vs Capcom",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "252.5M",
    link1: "https://archive.org/download/mugen_1999/SNK%20vs%20Capcom.zip",
    link2: ""
  },
  {
    name: "SNK vs CAPCOM Chaos",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "401.7M",
    link1: "https://archive.org/download/mugen_1999/SNK%20vs%20CAPCOM%20Chaos.zip",
    link2: ""
  },
  {
    name: "SNK VS Capcom Special",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "401.1M",
    link1: "https://archive.org/download/mugen_1999/SNK%20VS%20Capcom%20Special.zip",
    link2: ""
  },
  {
    name: "SSF2 Turbo",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.0G",
    link1: "https://archive.org/download/mugen_1999/SSF2%20Turbo.zip",
    link2: ""
  },
  {
    name: "SSSW",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.4G",
    link1: "https://archive.org/download/mugen_1999/SSSW.zip",
    link2: ""
  },
  {
    name: "Star Wars Mugen",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "6.8M",
    link1: "https://archive.org/download/mugen_1999/Star%20Wars%20Mugen.zip",
    link2: ""
  },
  {
    name: "Street Fighter",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "256.9M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter.zip",
    link2: ""
  },
  {
    name: "Street Fighter 2008 - The Balance 1.1",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "679.0M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%202008%20-%20The%20Balance%201.1.zip",
    link2: ""
  },
  {
    name: "Street Fighter 2008 - The Balance Edition",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "515.9M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%202008%20-%20The%20Balance%20Edition.zip",
    link2: ""
  },
  {
    name: "Street Fighter 2009 - The Balance Edition",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "583.5M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%202009%20-%20The%20Balance%20Edition.zip",
    link2: ""
  },
  {
    name: "Street Fighter 2009 - The Balance Edition 1.1",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "587.8M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%202009%20-%20The%20Balance%20Edition%201.1.zip",
    link2: ""
  },
  {
    name: "Street Fighter 3",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "525.5M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%203.zip",
    link2: ""
  },
  {
    name: "Street Fighter Classics Mashup",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "576.1M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%20Classics%20Mashup.zip",
    link2: ""
  },
  {
    name: "Street Fighter EX",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "318.8M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%20EX.zip",
    link2: ""
  },
  {
    name: "Street Fighter I",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "23.7M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%20I.zip",
    link2: ""
  },
  {
    name: "Street Fighter Legend HR",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "288.2M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%20Legend%20HR.zip",
    link2: ""
  },
  {
    name: "Street Fighter Turbo 2",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "510.6M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%20Turbo%202.7z",
    link2: ""
  },
  {
    name: "Street Fighter Vs History",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "188.2M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%20Vs%20History.zip",
    link2: ""
  },
  {
    name: "Street Fighter Warriors of Fate",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "770.9M",
    link1: "https://archive.org/download/mugen_1999/Street%20Fighter%20Warriors%20of%20Fate.zip",
    link2: ""
  },
  {
    name: "Super Heroes M.U.G.E.N",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "940.4M",
    link1: "https://archive.org/download/mugen_1999/Super%20Heroes%20M.U.G.E.N.zip",
    link2: ""
  },
  {
    name: "Super Street Fighter II - The New Challengers Mugen Edition",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "182.4M",
    link1: "https://archive.org/download/mugen_1999/Super%20Street%20Fighter%20II%20-%20The%20New%20Challengers%20Mugen%20Edition.zip",
    link2: ""
  },
  {
    name: "Super Street Fighter II Ultimate",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "655.1M",
    link1: "https://archive.org/download/mugen_1999/Super%20Street%20Fighter%20II%20Ultimate.zip",
    link2: ""
  },
  {
    name: "Super Street Fighter II X Grand Master Challenge",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "342.9M",
    link1: "https://archive.org/download/mugen_1999/Super%20Street%20Fighter%20II%20X%20Grand%20Master%20Challenge.zip",
    link2: ""
  },
  {
    name: "Super Street Fighter IV",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "513.4M",
    link1: "https://archive.org/download/mugen_1999/Super%20Street%20Fighter%20IV.zip",
    link2: ""
  },
  {
    name: "Tekken III",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "480.5M",
    link1: "https://archive.org/download/mugen_1999/Tekken%20III.zip",
    link2: ""
  },
  {
    name: "Top Fighters",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "45.5M",
    link1: "https://archive.org/download/mugen_1999/Top%20Fighters.zip",
    link2: ""
  },
  {
    name: "Ultra Street Fighter IV Mugen Edition",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "1.7G",
    link1: "https://archive.org/download/mugen_1999/Ultra%20Street%20Fighter%20IV%20Mugen%20Edition.zip",
    link2: ""
  },
  {
    name: "UMK III",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "345.8M",
    link1: "https://archive.org/download/mugen_1999/UMK%20III.zip",
    link2: ""
  },
  {
    name: "Vai Seiya",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "373.4M",
    link1: "https://archive.org/download/mugen_1999/Vai%20Seiya.zip",
    link2: ""
  },
  {
    name: "World Warrior X",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "201.6M",
    link1: "https://archive.org/download/mugen_1999/World%20Warrior%20X.zip",
    link2: ""
  },
  {
    name: "Yu Yu Hakusho",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "251.4M",
    link1: "https://archive.org/download/mugen_1999/Yu%20Yu%20Hakusho.zip",
    link2: ""
  },
  {
    name: "Zatch Bell",
    image: "https://i.postimg.cc/fR51fSnS/MUGEN-logo.gif",
    size: "65.5M",
    link1: "https://archive.org/download/mugen_1999/Zatch%20Bell.zip",
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