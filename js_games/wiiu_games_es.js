const roms = [
  {
    name: "007 Legends (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "9.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/007%20Legends%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Adventure Time - Explore the Dungeon Because I Don't Know! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Adventure%20Time%20-%20Explore%20the%20Dungeon%20Because%20I%20Don%27t%20Know%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Adventure Time - Finn & Jake Investigations (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Adventure%20Time%20-%20Finn%20%26%20Jake%20Investigations%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Amazing Spider-Man 2, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Amazing%20Spider-Man%202%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Amazing Spider-Man, The - Ultimate Edition (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "9.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Amazing%20Spider-Man%2C%20The%20-%20Ultimate%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Angry Birds Star Wars (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Angry%20Birds%20Star%20Wars%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Angry Birds Trilogy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Angry%20Birds%20Trilogy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Animal Crossing - Amiibo Festival (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Animal%20Crossing%20-%20Amiibo%20Festival%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Art Academy - Atelier (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Art%20Academy%20-%20Atelier%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Assassin's Creed III (Europe) (En,Fr,De,Es,It,Nl,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "17.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Assassin%27s%20Creed%20III%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Assassin's Creed IV - Black Flag (Europe) (En,Fr,De,Es,It,Nl,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "14.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Assassin%27s%20Creed%20IV%20-%20Black%20Flag%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Baila Latino (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Baila%20Latino%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Barbie & Her Sisters - Puppy Rescue (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Barbie%20%26%20Her%20Sisters%20-%20Puppy%20Rescue%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Barbie Dreamhouse Party (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Barbie%20Dreamhouse%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Batman - Arkham City - Armoured Edition (Europe) (En,Fr,De,Es,It,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "18.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Batman%20-%20Arkham%20City%20-%20Armoured%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Batman - Arkham Origins (Europe) (En,Fr,De,Es,It,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "15.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Batman%20-%20Arkham%20Origins%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Bayonetta (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "13.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Bayonetta%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bayonetta 2 (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "15.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Bayonetta%202%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ben 10 - Omniverse (Europe) (En,Fr,De,Es,It,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Ben%2010%20-%20Omniverse%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Ben 10 - Omniverse 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Ben%2010%20-%20Omniverse%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Book of Unwritten Tales 2, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "9.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Book%20of%20Unwritten%20Tales%202%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cabela's Dangerous Hunts 2013 (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Cabela%27s%20Dangerous%20Hunts%202013%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty - Black Ops II (Europe) (En,Fr)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "19.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Call%20of%20Duty%20-%20Black%20Ops%20II%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty - Black Ops II (Europe) (Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "19.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Call%20of%20Duty%20-%20Black%20Ops%20II%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty - Ghosts (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "17.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Call%20of%20Duty%20-%20Ghosts%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty - Ghosts (Europe) (Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "17.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Call%20of%20Duty%20-%20Ghosts%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Captain Toad - Treasure Tracker (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Captain%20Toad%20-%20Treasure%20Tracker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Captain Toad - Treasure Tracker (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Captain%20Toad%20-%20Treasure%20Tracker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Cocoto Magic Circus 2 (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "458.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Cocoto%20Magic%20Circus%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Darksiders - Warmastered Edition (Europe) (En,Fr,De,Es,It,Pt,Zh,Pl,Ru,Cs)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "12.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Darksiders%20-%20Warmastered%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%2CZh%2CPl%2CRu%2CCs%29.zip",
    link2: ""
  },
  {
    name: "Darksiders II (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "9.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Darksiders%20II%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Demo Update 02-2015 - Smash Bros + Mario Party 10 - 9599F2B3 (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "11.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Demo%20Update%2002-2015%20-%20Smash%20Bros%20%2B%20Mario%20Party%2010%20-%209599F2B3%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Deus Ex - Human Revolution - Director's Cut (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "16.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Deus%20Ex%20-%20Human%20Revolution%20-%20Director%27s%20Cut%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Devil's Third (Europe) (En,Fr)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "14.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Devil%27s%20Third%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Disney Epic Mickey 2 - The Power of Two (Europe) (En,Es)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "7.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Disney%20Epic%20Mickey%202%20-%20The%20Power%20of%20Two%20%28Europe%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Disney Epic Mickey 2 - The Power of Two (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Disney%20Epic%20Mickey%202%20-%20The%20Power%20of%20Two%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Disney Infinity (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "11.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Disney%20Infinity%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Disney Infinity 2.0 - Play Without Limits (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "12.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Disney%20Infinity%202.0%20-%20Play%20Without%20Limits%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Disney Infinity 2.0 - Play Without Limits (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "12.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Disney%20Infinity%202.0%20-%20Play%20Without%20Limits%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Disney Infinity 3.0 - Play Without Limits (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "12.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Disney%20Infinity%203.0%20-%20Play%20Without%20Limits%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Disney Phineas and Ferb - Quest for Cool Stuff (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Disney%20Phineas%20and%20Ferb%20-%20Quest%20for%20Cool%20Stuff%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney Planes (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Disney%20Planes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Disney Planes - Fire & Rescue (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Disney%20Planes%20-%20Fire%20%26%20Rescue%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar Cars 3 - Driven to Win (Europe) (En,Fr,De,Es,It,Nl,Pl,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Disney-Pixar%20Cars%203%20-%20Driven%20to%20Win%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Donkey Kong Country - Tropical Freeze (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "11.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Donkey%20Kong%20Country%20-%20Tropical%20Freeze%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Donkey Kong Country - Tropical Freeze (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "11.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Donkey%20Kong%20Country%20-%20Tropical%20Freeze%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks How to Train Your Dragon 2 (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/DreamWorks%20How%20to%20Train%20Your%20Dragon%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Kung Fu Panda - Showdown of Legendary Legends (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/DreamWorks%20Kung%20Fu%20Panda%20-%20Showdown%20of%20Legendary%20Legends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Penguins of Madagascar (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/DreamWorks%20Penguins%20of%20Madagascar%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Rise of the Guardians (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/DreamWorks%20Rise%20of%20the%20Guardians%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks The Croods - Prehistoric Party! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/DreamWorks%20The%20Croods%20-%20Prehistoric%20Party%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Turbo - Super Stunt Squad (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/DreamWorks%20Turbo%20-%20Super%20Stunt%20Squad%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "FIFA 13 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/FIFA%2013%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Family Party - 30 Great Games - Obstacle Arcade (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "999.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Family%20Party%20-%2030%20Great%20Games%20-%20Obstacle%20Arcade%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fast & Furious - Showdown (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Fast%20%26%20Furious%20-%20Showdown%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fast Racing Neo (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Fast%20Racing%20Neo%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Finding Teddy II - Definitive Edition (Europe) (En,Fr,De,Es,It,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Finding%20Teddy%20II%20-%20Definitive%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Fit Music for Wii U (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "11.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Fit%20Music%20for%20Wii%20U%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Funky Barn (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "564.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Funky%20Barn%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Game & Wario (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Game%20%26%20Wario%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Game Party Champions (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Game%20Party%20Champions%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Guitar Hero Live (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "18.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Guitar%20Hero%20Live%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hello Kitty Kruisers (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Hello%20Kitty%20Kruisers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hot Wheels - World's Best Driver (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Hot%20Wheels%20-%20World%27s%20Best%20Driver%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hunter's Trophy 2 - Europa (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Hunter%27s%20Trophy%202%20-%20Europa%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hyrule Warriors (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "7.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Hyrule%20Warriors%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hyrule Warriors (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Hyrule%20Warriors%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Injustice - Gods Among Us (Europe) (En,Fr,De,Es,It,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Injustice%20-%20Gods%20Among%20Us%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Jett Tailfin (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Jett%20Tailfin%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Just Dance - Disney Party 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Just%20Dance%20-%20Disney%20Party%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Just Dance 2014 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "13.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Just%20Dance%202014%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Just Dance 2015 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "11.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Just%20Dance%202015%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Just Dance 2016 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "16.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Just%20Dance%202016%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Just Dance 2017 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "14.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Just%20Dance%202017%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Just Dance 2018 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "15.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Just%20Dance%202018%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Just Dance 2019 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "16.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Just%20Dance%202019%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Just Dance 4 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "15.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Just%20Dance%204%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Just Dance Kids 2014 (Europe) (En,Fr,Es)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Just%20Dance%20Kids%202014%20%28Europe%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Kirby and the Rainbow Paintbrush (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Kirby%20and%20the%20Rainbow%20Paintbrush%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "LEGO Batman 2 - DC Super Heroes (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20Batman%202%20-%20DC%20Super%20Heroes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "LEGO Batman 3 - Beyond Gotham (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20Batman%203%20-%20Beyond%20Gotham%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO City Undercover (Europe) (En,Fr,De,Es,It,Nl,Pt,Da,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "19.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20City%20Undercover%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CDa%2CRu%29.zip",
    link2: ""
  },
  {
    name: "LEGO City Undercover (Europe) (En,Fr,De,Es,It,Nl,Pt,Da,Ru) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "19.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20City%20Undercover%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CDa%2CRu%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "LEGO Dimensions (Europe) (En,Fr,De,Nl,Da) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "13.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20Dimensions%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%2CDa%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "LEGO Jurassic World (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "7.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20Jurassic%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Marvel Avengers (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20Marvel%20Avengers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Marvel Super Heroes (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20Marvel%20Super%20Heroes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Movie, The - Videogame (Europe) (En,Fr,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "7.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20Movie%2C%20The%20-%20Videogame%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Movie, The - Videogame (Europe) (En,Fr,Es,It,Nl,Da) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20Movie%2C%20The%20-%20Videogame%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%2CNl%2CDa%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "LEGO Star Wars - The Force Awakens (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20Star%20Wars%20-%20The%20Force%20Awakens%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO The Hobbit (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/LEGO%20The%20Hobbit%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Legend of Kay - Anniversary (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Legend%20of%20Kay%20-%20Anniversary%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Breath of the Wild (Europe) (En,Fr,De,Es,It,Nl,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "13.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Legend%20of%20Zelda%2C%20The%20-%20Breath%20of%20the%20Wild%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - The Wind Waker HD (Europe, Australia) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Legend%20of%20Zelda%2C%20The%20-%20The%20Wind%20Waker%20HD%20%28Europe%2C%20Australia%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Twilight Princess HD (Europe, Australia) (En,Fr,De,Es,It) (Rev 2)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Legend%20of%20Zelda%2C%20The%20-%20Twilight%20Princess%20HD%20%28Europe%2C%20Australia%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Luv Me Buddies - Wonderland (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Luv%20Me%20Buddies%20-%20Wonderland%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario & Sonic at the Rio 2016 Olympic Games (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Mario%20%26%20Sonic%20at%20the%20Rio%202016%20Olympic%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mario & Sonic at the Sochi 2014 Olympic Winter Games (Europe) (En,Fr,De,Es,It,Nl,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "9.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Mario%20%26%20Sonic%20at%20the%20Sochi%202014%20Olympic%20Winter%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Mario Kart 8 (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Mario%20Kart%208%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Mario Kart 8 (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Mario%20Kart%208%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mario Kart 8 (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru) (Rev 3)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Mario%20Kart%208%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29%20%28Rev%203%29.zip",
    link2: ""
  },
  {
    name: "Mario Kart 8 (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru) (Rev 4)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Mario%20Kart%208%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29%20%28Rev%204%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 10 (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Mario%20Party%2010%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Mario Tennis - Ultra Smash (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Mario%20Tennis%20-%20Ultra%20Smash%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Marvel Avengers - Battle for Earth (Europe) (En,Fr,De,Es,It,Nl,Pl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Marvel%20Avengers%20-%20Battle%20for%20Earth%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPl%29.zip",
    link2: ""
  },
  {
    name: "Mass Effect 3 - Special Edition (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "20.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Mass%20Effect%203%20-%20Special%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mighty No. 9 (Europe) (En,Ja,Fr,De,Es,It,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Mighty%20No.%209%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Minecraft - Story Mode - A Telltale Games Series - The Complete Adventure (Europe) (En,Fr,De,Es,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Minecraft%20-%20Story%20Mode%20-%20A%20Telltale%20Games%20Series%20-%20The%20Complete%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Minecraft - Wii U Edition (Europe) (En,Ja,Fr,De,Es,It,Nl,Pt,Zh,Ko,Ru) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Minecraft%20-%20Wii%20U%20Edition%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CZh%2CKo%2CRu%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Monster High - 13 Wishes (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Monster%20High%20-%2013%20Wishes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Monster High - New Ghoul in School (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Monster%20High%20-%20New%20Ghoul%20in%20School%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Monster Hunter 3 Ultimate (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Monster%20Hunter%203%20Ultimate%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "NBA 2K13 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "19.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/NBA%202K13%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Most Wanted U - A Criterion Game (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Need%20for%20Speed%20-%20Most%20Wanted%20U%20-%20A%20Criterion%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "New Super Luigi U (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/New%20Super%20Luigi%20U%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "New Super Mario Bros. U (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/New%20Super%20Mario%20Bros.%20U%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "New Super Mario Bros. U + New Super Luigi U (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "14.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/New%20Super%20Mario%20Bros.%20U%20%2B%20New%20Super%20Luigi%20U%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - Plankton's Robotic Revenge (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Nickelodeon%20SpongeBob%20SquarePants%20-%20Plankton%27s%20Robotic%20Revenge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Ninja Gaiden 3 - Razor's Edge (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Ninja%20Gaiden%203%20-%20Razor%27s%20Edge%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nintendo Land (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Nintendo%20Land%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "One Piece - Unlimited World Red (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "12.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/One%20Piece%20-%20Unlimited%20World%20Red%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man and the Ghostly Adventures (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Pac-Man%20and%20the%20Ghostly%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man and the Ghostly Adventures 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Pac-Man%20and%20the%20Ghostly%20Adventures%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Paper Mario - Color Splash (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "9.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Paper%20Mario%20-%20Color%20Splash%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Pikmin 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Pikmin%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokken Tournament (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "4.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Pokken%20Tournament%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Project Zero - Maiden of Black Water (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "15.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Project%20Zero%20-%20Maiden%20of%20Black%20Water%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Rabbids Land (Europe) (En,Fr,De,Es,It,Nl,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "7.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Rabbids%20Land%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Rayman Legends (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "7.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Rayman%20Legends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil - Revelations (Europe) (En,Ja,Fr,De,Es,It,Nl,Pt,Pl,Ru) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "13.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Resident%20Evil%20-%20Revelations%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CPl%2CRu%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Rodea the Sky Soldier (Europe) (En,Ja,Fr,De)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Rodea%20the%20Sky%20Soldier%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Scribblenauts Unlimited (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Scribblenauts%20Unlimited%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Scribblenauts Unlimited (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Scribblenauts%20Unlimited%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Shmup Collection (Europe)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Shmup%20Collection%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Shovel Knight (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Shovel%20Knight%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "SiNG Party (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "11.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/SiNG%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Skylanders - Giants (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "10.9 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Skylanders%20-%20Giants%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Skylanders - Imaginators (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "20.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Skylanders%20-%20Imaginators%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Skylanders - SuperChargers (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "16.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Skylanders%20-%20SuperChargers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Skylanders - Swap Force (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "15.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Skylanders%20-%20Swap%20Force%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Skylanders - Trap Team (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "15.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Skylanders%20-%20Trap%20Team%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Smurfs 2, The (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Smurfs%202%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Sniper Elite V2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Sniper%20Elite%20V2%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Snoopy's Grand Adventure (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Snoopy%27s%20Grand%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Sonic & All-Stars Racing Transformed (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Sonic%20%26%20All-Stars%20Racing%20Transformed%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Boom - Rise of Lyric (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "9.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Sonic%20Boom%20-%20Rise%20of%20Lyric%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Lost World (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "7.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Sonic%20Lost%20World%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Splatoon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "3.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Splatoon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sports Connection (Europe) (En,Fr,De,Es,It,Nl,Ru,Ca)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Sports%20Connection%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CRu%2CCa%29.zip",
    link2: ""
  },
  {
    name: "Star Fox Guard (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Star%20Fox%20Guard%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Star Fox Zero (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Star%20Fox%20Zero%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "SteamWorld Collection (Europe) (En,Ja,Fr,De,Es,It,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/SteamWorld%20Collection%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Super Mario 3D World (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Super%20Mario%203D%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Super Mario Maker (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Super%20Mario%20Maker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Super Smash Bros. for Wii U (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "14.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Super%20Smash%20Bros.%20for%20Wii%20U%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Super Smash Bros. for Wii U (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru) (Rev 4)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "16.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Super%20Smash%20Bros.%20for%20Wii%20U%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29%20%28Rev%204%29.zip",
    link2: ""
  },
  {
    name: "Tank! Tank! Tank! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Tank%21%20Tank%21%20Tank%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tekken Tag Tournament 2 - Wii U Edition (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "15.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Tekken%20Tag%20Tournament%202%20-%20Wii%20U%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Terraria (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.5 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Terraria%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Teslagrad (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Teslagrad%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tokyo Mirage Sessions FE (Europe)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "14.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Tokyo%20Mirage%20Sessions%20FE%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Blacklist (Europe) (En,Fr,De,Es,It,Nl,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "16.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Blacklist%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Rise of the Dark Spark (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.8 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Transformers%20-%20Rise%20of%20the%20Dark%20Spark%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers Prime - The Game (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Transformers%20Prime%20-%20The%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Walking Dead, The - Survival Instinct (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "15.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Walking%20Dead%2C%20The%20-%20Survival%20Instinct%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Warriors Orochi 3 Hyper (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "15.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Warriors%20Orochi%203%20Hyper%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Watch_Dogs (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "20.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Watch_Dogs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Wii Fit U (Europe) (En,Fr,De,Es,It) (Rev 2)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.6 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Wii%20Fit%20U%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Wii Party U (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "6.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Wii%20Party%20U%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Wii Sports Club (Europe) (En,Fr,De,Es,It,Nl,Pt,Ru) (Rev 1)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "1.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Wii%20Sports%20Club%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CRu%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Wonderful 101, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "11.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Wonderful%20101%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Xenoblade Chronicles X (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "20.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Xenoblade%20Chronicles%20X%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yoshi's Woolly World (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "8.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Yoshi%27s%20Woolly%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Your Shape - Fitness Evolved 2013 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "2.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Your%20Shape%20-%20Fitness%20Evolved%202013%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "ZombiU (Europe) (En,Fr,De,Es,It,Nl,Ru)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "5.7 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/ZombiU%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Zumba Fitness - World Party (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/HktFDQFC/WiiU-svg.png",
    size: "13.4 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20Wii%20U%20-%20WUX/Zumba%20Fitness%20-%20World%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
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