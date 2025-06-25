
const roms = [
  {
    name: "(Full Metal Powdersuits) - Raydefox",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "166.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/%28Full%20Metal%20Powdersuits%29%20-%20Raydefox.zip",
    link2: ""
  },
  {
    name: "(Full Metal Powdersuits) - Rayus",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "461.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/%28Full%20Metal%20Powdersuits%29%20-%20%20Rayus.zip",
    link2: ""
  },
  {
    name: "15 Puzzle (1991)(Sygnas)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "890.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/15%20Puzzle%20%281991%29%28Sygnas%29.zip",
    link2: ""
  },
  {
    name: "177 (1986)(Macadamia)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "267.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/177%20%281986%29%28Macadamia%29.zip",
    link2: ""
  },
  {
    name: "2096 AD (1991)(Home Data)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/2096%20AD%20%281991%29%28Home%20Data%29.zip",
    link2: ""
  },
  {
    name: "3 Danhenkei Meka Fuzzy (19xx)(Login)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "191.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/3%20Danhenkei%20Meka%20Fuzzy%20%2819xx%29%28Login%29.zip",
    link2: ""
  },
  {
    name: "3 Meekaa (1994)(Youkan Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "234.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/3%20Meekaa%20%281994%29%28Youkan%20Soft%29.zip",
    link2: ""
  },
  {
    name: "37 Degrees C Kai No Bouken (19xx)(68 Bank)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "595.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/37%20Degrees%20C%20Kai%20No%20Bouken%20%2819xx%29%2868%20Bank%29.zip",
    link2: ""
  },
  {
    name: "38 Man Kilo No Kokuu (1989)(System Sacom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/38%20Man%20Kilo%20No%20Kokuu%20%281989%29%28System%20Sacom%29.zip",
    link2: ""
  },
  {
    name: "A Ressha De Ikou II+III (1988)(Artdink)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/A%20Ressha%20De%20Ikou%20II%2BIII%20%281988%29%28Artdink%29.zip",
    link2: ""
  },
  {
    name: "A-Jax (1989)(Konami)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,008.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/A-Jax%20%281989%29%28Konami%29.zip",
    link2: ""
  },
  {
    name: "Aakushu Youen No Jidai Wo Koete (1990)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "797.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Aakushu%20Youen%20No%20Jidai%20Wo%20Koete%20%281990%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Abunai Tengoku Densetsu (1989)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "742.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Abunai%20Tengoku%20Densetsu%20%281989%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Access Heat (1995)(Fox Factory)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "273.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Access%20Heat%20%281995%29%28Fox%20Factory%29.zip",
    link2: ""
  },
  {
    name: "Active Shoot (1999)(Satou Kouji)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "564.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Active%20Shoot%20%281999%29%28Satou%20Kouji%29.zip",
    link2: ""
  },
  {
    name: "Advanced Ruumik Quiz I+II (1990)(Master Piece)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "564.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Advanced%20Ruumik%20Quiz%20I%2BII%20%281990%29%28Master%20Piece%29.zip",
    link2: ""
  },
  {
    name: "Adventure Land I+II",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Adventure%20Land%20I%2BII.zip",
    link2: ""
  },
  {
    name: "Afterburner II (1989)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "425.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Afterburner%20II%20%281989%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Aikoku Pro Uso-68K (1990)(Hazama Kuroo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "76.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Aikoku%20Pro%20Uso-68K%20%281990%29%28Hazama%20Kuroo%29.zip",
    link2: ""
  },
  {
    name: "Air Combat II Yuugekiou II (1990)(System Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "611.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Air%20Combat%20II%20Yuugekiou%20II%20%281990%29%28System%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Air Hork (1990)(PCCM)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "73.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Air%20Hork%20%281990%29%28PCCM%29.zip",
    link2: ""
  },
  {
    name: "Air Management (19xx)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Air%20Management%20%2819xx%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Akazukin Cha Cha Cha v1.04 (1995)(Sprite)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "476.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Akazukin%20Cha%20Cha%20Cha%20v1.04%20%281995%29%28Sprite%29.zip",
    link2: ""
  },
  {
    name: "Akazukin Monogatari (199x)(Tera Tera Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "307.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Akazukin%20Monogatari%20%28199x%29%28Tera%20Tera%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Akiko (1993)(Ides)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Akiko%20%281993%29%28Ides%29.zip",
    link2: ""
  },
  {
    name: "Akumajou Dracula (1993)(Konami)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Akumajou%20Dracula%20%281993%29%28Konami%29.zip",
    link2: ""
  },
  {
    name: "Alfaim (1989)(Zainsoft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "645.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Alfaim%20%281989%29%28Zainsoft%29.zip",
    link2: ""
  },
  {
    name: "Alfarne (1989)(Shilpheed Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "158.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Alfarne%20%281989%29%28Shilpheed%20Software%29.zip",
    link2: ""
  },
  {
    name: "Algarna",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "463.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Algarna.zip",
    link2: ""
  },
  {
    name: "Algarna (1991)(MNM Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "463.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Algarna%20%281991%29%28MNM%20Software%29.zip",
    link2: ""
  },
  {
    name: "Alice No Yakata I + II (19xx)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Alice%20No%20Yakata%20I%20%2B%20II%20%2819xx%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Alice No Yakata I+II (19xx)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Alice%20No%20Yakata%20I%2BII%20%2819xx%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Alien Syndrome (1992)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "595.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Alien%20Syndrome%20%281992%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Alien Tennis Chikyuu No Kiki (19xx)(Killer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "285.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Alien%20Tennis%20Chikyuu%20No%20Kiki%20%2819xx%29%28Killer%29.zip",
    link2: ""
  },
  {
    name: "Alshark",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Alshark.zip",
    link2: ""
  },
  {
    name: "Alshark (1991)(Right Stuff",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Alshark%20%281991%29%28Right%20Stuff.zip",
    link2: ""
  },
  {
    name: "Amamori Pro Uso-68K (1991)(Hazama Kuroo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "120.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Amamori%20Pro%20Uso-68K%20%281991%29%28Hazama%20Kuroo%29.zip",
    link2: ""
  },
  {
    name: "Ambivalenz (1994)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ambivalenz%20%281994%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Ame Game 0.90 (19xx)(Shin - Kisshin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "592.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ame%20Game%200.90%20%2819xx%29%28Shin%20-%20Kisshin%29.zip",
    link2: ""
  },
  {
    name: "American Heroes BF 92 Extra Version (1992)(LTT - Kuma)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "476.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/American%20Heroes%20BF%2092%20Extra%20Version%20%281992%29%28LTT%20-%20Kuma%29.zip",
    link2: ""
  },
  {
    name: "AMS2",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "407.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/AMS2.zip",
    link2: ""
  },
  {
    name: "Andromeda Seiun (19xx)(Reki)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "153.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Andromeda%20Seiun%20%2819xx%29%28Reki%29.zip",
    link2: ""
  },
  {
    name: "Angel Dive (1996)(Yamada Kikaku)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Angel%20Dive%20%281996%29%28Yamada%20Kikaku%29.zip",
    link2: ""
  },
  {
    name: "Ani Mahjongg V3 (1993)(Sogna)(Disk 1 of 4)(System)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "737.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ani%20Mahjongg%20V3%20%281993%29%28Sogna%29%28Disk%201%20of%204%29%28System%29.zip",
    link2: ""
  },
  {
    name: "Ani Mahjongg V3 (1993)(Sogna)(Disk 2 of 4)(Disk 1)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "527.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ani%20Mahjongg%20V3%20%281993%29%28Sogna%29%28Disk%202%20of%204%29%28Disk%201%29.zip",
    link2: ""
  },
  {
    name: "Ani Mahjongg V3 (1993)(Sogna)(Disk 3 of 4)(Disk 2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "739.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ani%20Mahjongg%20V3%20%281993%29%28Sogna%29%28Disk%203%20of%204%29%28Disk%202%29.zip",
    link2: ""
  },
  {
    name: "Ani Mahjongg V3 (1993)(Sogna)(Disk 4 of 4)(Disk 3)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "770.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ani%20Mahjongg%20V3%20%281993%29%28Sogna%29%28Disk%204%20of%204%29%28Disk%203%29.zip",
    link2: ""
  },
  {
    name: "Ani Mahjongg V3 (demo) (1993)(Sogna)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "710.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ani%20Mahjongg%20V3%20%28demo%29%20%281993%29%28Sogna%29.zip",
    link2: ""
  },
  {
    name: "Anmira Daihinmin (19xx)(Nippousha)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "722.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Anmira%20Daihinmin%20%2819xx%29%28Nippousha%29.zip",
    link2: ""
  },
  {
    name: "Anzu Fly! (1991)(Pussy Cat)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "797.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Anzu%20Fly%21%20%281991%29%28Pussy%20Cat%29.zip",
    link2: ""
  },
  {
    name: "Aoki Ookami To Shiroki Meshika Genchou Hishi (1993)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Aoki%20Ookami%20To%20Shiroki%20Meshika%20Genchou%20Hishi%20%281993%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Aoki Ookami To Shiroki Meshika Genghis Khan (1989)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Aoki%20Ookami%20To%20Shiroki%20Meshika%20Genghis%20Khan%20%281989%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Aquales",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Aquales.zip",
    link2: ""
  },
  {
    name: "Arcus II Silent Symphany (19xx)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Arcus%20II%20Silent%20Symphany%20%2819xx%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Arcus Odyssey (1991) (Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Arcus%20Odyssey%20%281991%29%20%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Arcus Pro 68k (1989)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Arcus%20Pro%2068k%20%281989%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Are You Happy Shiawase (1995)(68 Bank)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "596.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Are%20You%20Happy%20Shiawase%20%281995%29%2868%20Bank%29.zip",
    link2: ""
  },
  {
    name: "Argos No Senshi (1994)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "805.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Argos%20No%20Senshi%20%281994%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Arianshuu (19xx)(Haiteidoradorazu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "324.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Arianshuu%20%2819xx%29%28Haiteidoradorazu%29.zip",
    link2: ""
  },
  {
    name: "Arkanoid Revenge of Doh (1987)(Sharp - SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "247.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Arkanoid%20Revenge%20of%20Doh%20%281987%29%28Sharp%20-%20SPS%29.zip",
    link2: ""
  },
  {
    name: "Armored Trooper Votoms Dead Ash (1991)(Family Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "490.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Armored%20Trooper%20Votoms%20Dead%20Ash%20%281991%29%28Family%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Arsia No Ki (1995)(Moai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Arsia%20No%20Ki%20%281995%29%28Moai%29.zip",
    link2: ""
  },
  {
    name: "Artemis (1993)(X-Works)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "899.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Artemis%20%281993%29%28X-Works%29.zip",
    link2: ""
  },
  {
    name: "Artemis (199x)(Birdy Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Artemis%20%28199x%29%28Birdy%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Arururu (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "393.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Arururu%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Asteroid Queen (19xx)(Kuwaki Ryuji)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "141.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Asteroid%20Queen%20%2819xx%29%28Kuwaki%20Ryuji%29.zip",
    link2: ""
  },
  {
    name: "Asteroids (19xx)(Yoz)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "93.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Asteroids%20%2819xx%29%28Yoz%29.zip",
    link2: ""
  },
  {
    name: "Asuka 120 Percent Burning Fest (1994)(Family Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Asuka%20120%20Percent%20Burning%20Fest%20%281994%29%28Family%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Atomic Robo-Kid (1990)(System Sacom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "939.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Atomic%20Robo-Kid%20%281990%29%28System%20Sacom%29.zip",
    link2: ""
  },
  {
    name: "Atomic Runner Chelnov (1993)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "497.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Atomic%20Runner%20Chelnov%20%281993%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Axis (1990) (Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Axis%20%281990%29%20%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Ayachan Suupurekkusu II (19xx)(Kankyouken)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "745.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ayachan%20Suupurekkusu%20II%20%2819xx%29%28Kankyouken%29.zip",
    link2: ""
  },
  {
    name: "Ayumichan Monogatari",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ayumichan%20Monogatari%20.zip",
    link2: ""
  },
  {
    name: "B-Point (1990)(WIPL)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "439.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/B-Point%20%281990%29%28WIPL%29.zip",
    link2: ""
  },
  {
    name: "Baba Fighter II (199x)(Tsururinkun)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,022.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Baba%20Fighter%20II%20%28199x%29%28Tsururinkun%29.zip",
    link2: ""
  },
  {
    name: "Babel + No Tou",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Babel%20%2B%20No%20Tou.zip",
    link2: ""
  },
  {
    name: "Bad Road (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "99.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bad%20Road%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Bakamedesu (1993)(Surpasser Gin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "155.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bakamedesu%20%281993%29%28Surpasser%20Gin%29.zip",
    link2: ""
  },
  {
    name: "Bakudan Yuugi (1988)(X-Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "188.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bakudan%20Yuugi%20%281988%29%28X-Soft%29.zip",
    link2: ""
  },
  {
    name: "Bakudanma v1.00 (19xx)(Kyoushirou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "194.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bakudanma%20v1.00%20%2819xx%29%28Kyoushirou%29.zip",
    link2: ""
  },
  {
    name: "Bakuretsu Aniki (1995)(Catsoft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "359.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bakuretsu%20Aniki%20%281995%29%28Catsoft%29.zip",
    link2: ""
  },
  {
    name: "Balloon Fight (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "605.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Balloon%20Fight%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Baraduke (1995)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "333.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Baraduke%20%281995%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Barcelona Fighter 92 Bangaihen Sekaiichi Ha Ore Da (1992)(LTT - Kuma)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Barcelona%20Fighter%2092%20Bangaihen%20Sekaiichi%20Ha%20Ore%20Da%20%281992%29%28LTT%20-%20Kuma%29.zip",
    link2: ""
  },
  {
    name: "Bari Bari Attack 3 Erice (1990)(Studio KBO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "210.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bari%20Bari%20Attack%203%20Erice%20%281990%29%28Studio%20KBO%29.zip",
    link2: ""
  },
  {
    name: "Baruusa No Fukushuu (1991)(Zain Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Baruusa%20No%20Fukushuu%20%281991%29%28Zain%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Baseball Knuckles '94, The (1994)(DCS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "488.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Baseball%20Knuckles%20%2794%2C%20The%20%281994%29%28DCS%29.zip",
    link2: ""
  },
  {
    name: "Battle Chess (1989)(Pack-In-Video)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "856.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Battle%20Chess%20%281989%29%28Pack-In-Video%29.zip",
    link2: ""
  },
  {
    name: "Battle City (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "606.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Battle%20City%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Battle Game (1989)(Imai Takashi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "76.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Battle%20Game%20%281989%29%28Imai%20Takashi%29.zip",
    link2: ""
  },
  {
    name: "Battle Mania' (1992)(Biwahosi Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "685.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Battle%20Mania%27%20%281992%29%28Biwahosi%20Software%29.zip",
    link2: ""
  },
  {
    name: "Battle Unit I +II",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,008.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Battle%20Unit%20I%20%2BII.zip",
    link2: ""
  },
  {
    name: "Battletech (1992)(Crossmedia)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Battletech%20%281992%29%28Crossmedia%29.zip",
    link2: ""
  },
  {
    name: "Beast I+II (19xx)(Birdy Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Beast%20I%2BII%20%2819xx%29%28Birdy%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Bell's Avenue I+II (1993)(Wendy's Magazine)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bell%27s%20Avenue%20I%2BII%20%281993%29%28Wendy%27s%20Magazine%29.zip",
    link2: ""
  },
  {
    name: "Binbin Mahjongg Data Shuu (1994)(Takeru)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "312.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Binbin%20Mahjongg%20Data%20Shuu%20%281994%29%28Takeru%29.zip",
    link2: ""
  },
  {
    name: "Binbin Mahjongg Peach Angel (1994)(Takeru Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "419.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Binbin%20Mahjongg%20Peach%20Angel%20%281994%29%28Takeru%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Binbin Mahjongg Peach Angel (1994)(Takeru Soft)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "419.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Binbin%20Mahjongg%20Peach%20Angel%20%281994%29%28Takeru%20Soft%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Birdy World (1991)(Birdy Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Birdy%20World%20%281991%29%28Birdy%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Bishoujo Noriko (19xx)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "423.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bishoujo%20Noriko%20%2819xx%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Lady Fighter",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bishoujo%20Senshi%20Lady%20Fighter.zip",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Moon Fighter",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bishoujo%20Senshi%20Moon%20Fighter.zip",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Sailor V",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bishoujo%20Senshi%20Sailor%20V.zip",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Sailormoon Moon Tiara Question (1992)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "715.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bishoujo%20Senshi%20Sailormoon%20Moon%20Tiara%20Question%20%281992%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Super Moon Fighter + X",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bishoujo%20Senshi%20Super%20Moon%20Fighter%20%2B%20X.zip",
    link2: ""
  },
  {
    name: "Bishoujo Shashinkan Moving School (1988)(Hard)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "592.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bishoujo%20Shashinkan%20Moving%20School%20%281988%29%28Hard%29.zip",
    link2: ""
  },
  {
    name: "Bishoujo Skirt Mekuri Shinkei Suijaku Vol. 1_2_3",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "996.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bishoujo%20Skirt%20Mekuri%20Shinkei%20Suijaku%20Vol.%201_2_3.zip",
    link2: ""
  },
  {
    name: "Biyoyon Car Game (199x)(Eins-Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "437.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Biyoyon%20Car%20Game%20%28199x%29%28Eins-Soft%29.zip",
    link2: ""
  },
  {
    name: "Black Jack 68K II Animation Version (19xx)(KZO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "538.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Black%20Jack%2068K%20II%20Animation%20Version%20%2819xx%29%28KZO%29.zip",
    link2: ""
  },
  {
    name: "Blanka In Shura No Kuni (1997)(Haiteidoradorazu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "543.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Blanka%20In%20Shura%20No%20Kuni%20%281997%29%28Haiteidoradorazu%29.zip",
    link2: ""
  },
  {
    name: "Bleed Out Sakuretsu (1996)(Gold Cats Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "398.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bleed%20Out%20Sakuretsu%20%281996%29%28Gold%20Cats%20Project%29.zip",
    link2: ""
  },
  {
    name: "Blind Spot (1991)(Dolphin Game Studio)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "937.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Blind%20Spot%20%281991%29%28Dolphin%20Game%20Studio%29.zip",
    link2: ""
  },
  {
    name: "Blitzkrieg Toubu Sensen 1941-45",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "672.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Blitzkrieg%20Toubu%20Sensen%201941-45.zip",
    link2: ""
  },
  {
    name: "Block Stocker v2.00 (1989)(X-Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "101.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Block%20Stocker%20v2.00%20%281989%29%28X-Soft%29.zip",
    link2: ""
  },
  {
    name: "Blockout Modoki (19xx)(Bee)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "74.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Blockout%20Modoki%20%2819xx%29%28Bee%29.zip",
    link2: ""
  },
  {
    name: "Blodia (19xx)(Broderbund)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Blodia%20%2819xx%29%28Broderbund%29.zip",
    link2: ""
  },
  {
    name: "Blue Waver Special (1989)(Simokouchi M.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "75.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Blue%20Waver%20Special%20%281989%29%28Simokouchi%20M.%29.zip",
    link2: ""
  },
  {
    name: "Blue Wings 2 Blue Knights",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "514.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Blue%20Wings%202%20Blue%20Knights.zip",
    link2: ""
  },
  {
    name: "BM68 v0.20r2 (19xx)(T'cube)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/BM68%20v0.20r2%20%2819xx%29%28T%27cube%29.zip",
    link2: ""
  },
  {
    name: "Bodhidharma + Mark II",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bodhidharma%20%2B%20Mark%20II.zip",
    link2: ""
  },
  {
    name: "Bomber Man (1990)(System Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "970.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bomber%20Man%20%281990%29%28System%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Bonanza Bros (1991)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "826.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bonanza%20Bros%20%281991%29.zip",
    link2: ""
  },
  {
    name: "Bonnou 2 + Das (19xx)(Team Phantom - Midy House)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bonnou%202%20%2B%20Das%20%2819xx%29%28Team%20Phantom%20-%20Midy%20House%29.zip",
    link2: ""
  },
  {
    name: "Bonnou Muyou (1991)(Team Phantom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "396.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bonnou%20Muyou%20%281991%29%28Team%20Phantom%29.zip",
    link2: ""
  },
  {
    name: "Bonnou Yobikou I+II+III",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bonnou%20Yobikou%20I%2BII%2BIII.zip",
    link2: ""
  },
  {
    name: "Bosconian (1988)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "447.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bosconian%20%281988%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Bottoro 2 (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "65.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bottoro%202%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Boyon Boyon (1990)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "744.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Boyon%20Boyon%20%281990%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Boyoyon v3.31 (1996)(Noz)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "635.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Boyoyon%20v3.31%20%281996%29%28Noz%29.zip",
    link2: ""
  },
  {
    name: "Branmarker (1991)(DO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Branmarker%20%281991%29%28DO%29.zip",
    link2: ""
  },
  {
    name: "Break Down (1989)(Slime Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "862.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Break%20Down%20%281989%29%28Slime%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Breed (1989)(Imai Takashi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "70.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Breed%20%281989%29%28Imai%20Takashi%29.zip",
    link2: ""
  },
  {
    name: "Bretonne Lais (1990)(System Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bretonne%20Lais%20%281990%29%28System%20Soft%29.zip",
    link2: ""
  },
  {
    name: "BSystem",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "549.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/BSystem.zip",
    link2: ""
  },
  {
    name: "Bubble Bobble (1989)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "569.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Bubble%20Bobble%20%281989%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Butarian (1994)(68 Bank)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "651.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Butarian%20%281994%29%2868%20Bank%29.zip",
    link2: ""
  },
  {
    name: "Butasan (1993)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "447.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Butasan%20%281993%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Butasan Quest (1994)(Tehehe-Net)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "593.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Butasan%20Quest%20%281994%29%28Tehehe-Net%29.zip",
    link2: ""
  },
  {
    name: "Byakuya Monogatari (1989)(East Cube)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "721.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Byakuya%20Monogatari%20%281989%29%28East%20Cube%29.zip",
    link2: ""
  },
  {
    name: "C Ryokukensa V3 (1992)(Hayabusa Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/C%20Ryokukensa%20V3%20%281992%29%28Hayabusa%20Soft%29.zip",
    link2: ""
  },
  {
    name: "C-ONZ",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "404.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/C-ONZ.zip",
    link2: ""
  },
  {
    name: "Cal 2 (1991)(Birdy Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cal%202%20%281991%29%28Birdy%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Cal Eien No Bishoujotachi (19xx)(Birdy Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cal%20Eien%20No%20Bishoujotachi%20%2819xx%29%28Birdy%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Cameltry (1991)(Denpa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "686.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cameltry%20%281991%29%28Denpa%29.zip",
    link2: ""
  },
  {
    name: "Can Can Bunny ++",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "11.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Can%20Can%20Bunny%20%2B%2B.zip",
    link2: ""
  },
  {
    name: "Captain Color (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "60.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Captain%20Color%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Carat (1992)(Custom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Carat%20%281992%29%28Custom%29.zip",
    link2: ""
  },
  {
    name: "Caroll (1990)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "471.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Caroll%20%281990%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Casablanca Ni Ai Wo Satsujinsha Ha Jikuu Wo Koete (19xx)(Thinking Rabbit)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Casablanca%20Ni%20Ai%20Wo%20Satsujinsha%20Ha%20Jikuu%20Wo%20Koete%20%2819xx%29%28Thinking%20Rabbit%29.zip",
    link2: ""
  },
  {
    name: "Castles (199x)(Crossmedia)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Castles%20%28199x%29%28Crossmedia%29.zip",
    link2: ""
  },
  {
    name: "Cat's Part-1 (1993)(Cat's Pro)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cat%27s%20Part-1%20%281993%29%28Cat%27s%20Pro%29.zip",
    link2: ""
  },
  {
    name: "Caterpi (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "57.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Caterpi%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "cave",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "401.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/cave.zip",
    link2: ""
  },
  {
    name: "Cave Crowds",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cave%20Crowds.zip",
    link2: ""
  },
  {
    name: "Celcion 68000 (1992)(SPC Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "429.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Celcion%2068000%20%281992%29%28SPC%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Celia (1993)(B-Cat Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "344.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Celia%20%281993%29%28B-Cat%20Software%29.zip",
    link2: ""
  },
  {
    name: "Chacha Fighter V v1.00 (1995)(TMK)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chacha%20Fighter%20V%20v1.00%20%281995%29%28TMK%29.zip",
    link2: ""
  },
  {
    name: "Chami 68K v0.02 (1990)(M.HIJK)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "490.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chami%2068K%20v0.02%20%281990%29%28M.HIJK%29.zip",
    link2: ""
  },
  {
    name: "Chaos Angels (1996)(L. Sound)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "922.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chaos%20Angels%20%281996%29%28L.%20Sound%29.zip",
    link2: ""
  },
  {
    name: "Chaos Strikes Back (1990)(FTL)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "816.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chaos%20Strikes%20Back%20%281990%29%28FTL%29.zip",
    link2: ""
  },
  {
    name: "Chase H.Q. (1992)(Tierheit)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,006.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chase%20H.Q.%20%281992%29%28Tierheit%29.zip",
    link2: ""
  },
  {
    name: "Chijou Ikusa (1991)(Yamaco)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "313.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chijou%20Ikusa%20%281991%29%28Yamaco%29.zip",
    link2: ""
  },
  {
    name: "Chikyuugi (1989)(Yamama)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "133.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chikyuugi%20%281989%29%28Yamama%29.zip",
    link2: ""
  },
  {
    name: "Chinmoku No Kantai (1993)(Gam)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chinmoku%20No%20Kantai%20%281993%29%28Gam%29.zip",
    link2: ""
  },
  {
    name: "Chotto H Na Daihinmin (1991)(Kauda Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "305.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chotto%20H%20Na%20Daihinmin%20%281991%29%28Kauda%20Project%29.zip",
    link2: ""
  },
  {
    name: "Chotto Local Rule Na Mine Sweeper Hun De Oshimai!! (199x)(MPU)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chotto%20Local%20Rule%20Na%20Mine%20Sweeper%20Hun%20De%20Oshimai%21%21%20%28199x%29%28MPU%29.zip",
    link2: ""
  },
  {
    name: "Chou Bakudan Otoko Densetsu (1994)(Ferrow)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "264.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chou%20Bakudan%20Otoko%20Densetsu%20%281994%29%28Ferrow%29.zip",
    link2: ""
  },
  {
    name: "Choujin",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "593.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Choujin.zip",
    link2: ""
  },
  {
    name: "Chourensha 68K v1.01 (1995)(Famibe No Yosshin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "599.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chourensha%2068K%20v1.01%20%281995%29%28Famibe%20No%20Yosshin%29.zip",
    link2: ""
  },
  {
    name: "Chuka Taisen (1991)(Sharp - SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "566.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Chuka%20Taisen%20%281991%29%28Sharp%20-%20SPS%29.zip",
    link2: ""
  },
  {
    name: "Cinderella Perudue (1988)(Studio Angel)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "242.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cinderella%20Perudue%20%281988%29%28Studio%20Angel%29.zip",
    link2: ""
  },
  {
    name: "Circus Circus (19xx)(IT)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "81.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Circus%20Circus%20%2819xx%29%28IT%29.zip",
    link2: ""
  },
  {
    name: "City Connection (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "88.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/City%20Connection%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Clay Shooting (1988)(X Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "141.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Clay%20Shooting%20%281988%29%28X%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Clear Lap (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "324.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Clear%20Lap%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Cockpit, The (1988)(Compac)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "636.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cockpit%2C%20The%20%281988%29%28Compac%29.zip",
    link2: ""
  },
  {
    name: "Code Name Sailor Q (19xx)(Dark Kingdom Himitsu Kenkyuusho)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "566.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Code%20Name%20Sailor%20Q%20%2819xx%29%28Dark%20Kingdom%20Himitsu%20Kenkyuusho%29.zip",
    link2: ""
  },
  {
    name: "Code-Zero (1991)(Enix)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Code-Zero%20%281991%29%28Enix%29.zip",
    link2: ""
  },
  {
    name: "Collector D Bangaihen (199x)(DO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Collector%20D%20Bangaihen%20%28199x%29%28DO%29.zip",
    link2: ""
  },
  {
    name: "Columns",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "714.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Columns.zip",
    link2: ""
  },
  {
    name: "Command X Ray (1990)(Blast Off)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "530.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Command%20X%20Ray%20%281990%29%28Blast%20Off%29.zip",
    link2: ""
  },
  {
    name: "Continental (1992)(Technopolis)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Continental%20%281992%29%28Technopolis%29.zip",
    link2: ""
  },
  {
    name: "Cosmic Psyco (1991)(Cocktail Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cosmic%20Psyco%20%281991%29%28Cocktail%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Cosmo Gang The Puzzle + Modoki (19xx)(Kukan)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cosmo%20Gang%20The%20Puzzle%20%2B%20Modoki%20%2819xx%29%28Kukan%29.zip",
    link2: ""
  },
  {
    name: "Cotton Fantastic Night Dreams (1993)(Victor)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cotton%20Fantastic%20Night%20Dreams%20%281993%29%28Victor%29.zip",
    link2: ""
  },
  {
    name: "Cranked Arrow",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "587.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cranked%20Arrow.zip",
    link2: ""
  },
  {
    name: "Crazy Climber I & II (1993)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "720.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Crazy%20Climber%20I%20%26%20II%20%281993%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Crescent (199x)(Silky's)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Crescent%20%28199x%29%28Silky%27s%29.zip",
    link2: ""
  },
  {
    name: "Crescent Moon Girl (1989)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Crescent%20Moon%20Girl%20%281989%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Cross Fire EX (1994)(OS Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "497.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cross%20Fire%20EX%20%281994%29%28OS%20Software%29.zip",
    link2: ""
  },
  {
    name: "Crystal Tower (1990)(Master Piece)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "186.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Crystal%20Tower%20%281990%29%28Master%20Piece%29.zip",
    link2: ""
  },
  {
    name: "Cuarto",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "754.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cuarto.zip",
    link2: ""
  },
  {
    name: "Cube Gradius 3 Cube Simulation (1991)(Fukuiinchou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "280.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cube%20Gradius%203%20Cube%20Simulation%20%281991%29%28Fukuiinchou%29.zip",
    link2: ""
  },
  {
    name: "Cube Runner (1990)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "302.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cube%20Runner%20%281990%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "CY",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "609.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/CY.zip",
    link2: ""
  },
  {
    name: "Cyber Core (1991)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "529.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cyber%20Core%20%281991%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "Cyber Field (1993)(Saijou Satoshi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "284.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cyber%20Field%20%281993%29%28Saijou%20Satoshi%29.zip",
    link2: ""
  },
  {
    name: "Cyber RPG Pemo Pemo Pro-68K (1991)(Kashiya)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "760.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cyber%20RPG%20Pemo%20Pemo%20Pro-68K%20%281991%29%28Kashiya%29.zip",
    link2: ""
  },
  {
    name: "Cyberblock Metal Orange EX (1993)(Custom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cyberblock%20Metal%20Orange%20EX%20%281993%29%28Custom%29.zip",
    link2: ""
  },
  {
    name: "Cybermission (1989)(Login)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "332.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cybermission%20%281989%29%28Login%29.zip",
    link2: ""
  },
  {
    name: "Cynthia",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "504.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Cynthia.zip",
    link2: ""
  },
  {
    name: "D of Moria Data Shuu (1992)(The Jiro)[Moria data]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "64.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/D%20of%20Moria%20Data%20Shuu%20%281992%29%28The%20Jiro%29%5BMoria%20data%5D.zip",
    link2: ""
  },
  {
    name: "D-Return (1989)(Nichikonren Kikaku)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "505.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/D-Return%20%281989%29%28Nichikonren%20Kikaku%29.zip",
    link2: ""
  },
  {
    name: "Dai Fugou Gakuen v1.1 (1993)(Juushoku Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "663.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dai%20Fugou%20Gakuen%20v1.1%20%281993%29%28Juushoku%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Daikon Oroshi Pro Uso-68K (1990)(Hazama Kuroo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "75.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Daikon%20Oroshi%20Pro%20Uso-68K%20%281990%29%28Hazama%20Kuroo%29.zip",
    link2: ""
  },
  {
    name: "Daikoukai Jidai (19xx)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Daikoukai%20Jidai%20%2819xx%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Daimakaimura (1994)(Capcom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Daimakaimura%20%281994%29%28Capcom%29.zip",
    link2: ""
  },
  {
    name: "Daisenryaku II+III '90",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Daisenryaku%20II%2BIII%20%2790.zip",
    link2: ""
  },
  {
    name: "Dalk (1993)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dalk%20%281993%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Damage Fight II+ (1991)(Kazz)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "287.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Damage%20Fight%20II%2B%20%281991%29%28Kazz%29.zip",
    link2: ""
  },
  {
    name: "Dancing Express (1992)(Moai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "519.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dancing%20Express%20%281992%29%28Moai%29.zip",
    link2: ""
  },
  {
    name: "Danger Area (1989)(Art Spec)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "397.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Danger%20Area%20%281989%29%28Art%20Spec%29.zip",
    link2: ""
  },
  {
    name: "Dariball (1989)(Empty)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "358.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dariball%20%281989%29%28Empty%29.zip",
    link2: ""
  },
  {
    name: "Darius ++",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Darius%20%2B%2B.zip",
    link2: ""
  },
  {
    name: "Dark Ager",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "555.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dark%20Ager.zip",
    link2: ""
  },
  {
    name: "Dark Castle (1991)(Biwahosi Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "560.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dark%20Castle%20%281991%29%28Biwahosi%20Software%29.zip",
    link2: ""
  },
  {
    name: "Darwin's Dilemma (1990)(Inline Design)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "477.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Darwin%27s%20Dilemma%20%281990%29%28Inline%20Design%29.zip",
    link2: ""
  },
  {
    name: "Dash Yarou (1991)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "681.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dash%20Yarou%20%281991%29.zip",
    link2: ""
  },
  {
    name: "Dastard!! Ankoku No Hakai Kami (19xx)(M' Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "255.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dastard%21%21%20Ankoku%20No%20Hakai%20Kami%20%2819xx%29%28M%27%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Datenshi Kyouko Part I (19xx)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "582.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Datenshi%20Kyouko%20Part%20I%20%2819xx%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Datsugoku Game (19xx)(Deshita Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "96.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Datsugoku%20Game%20%2819xx%29%28Deshita%20Soft%29.zip",
    link2: ""
  },
  {
    name: "DC Card (1990)(Studio Undo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "383.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/DC%20Card%20%281990%29%28Studio%20Undo%29.zip",
    link2: ""
  },
  {
    name: "De Ja (1990)(Elf)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/De%20Ja%20%281990%29%28Elf%29.zip",
    link2: ""
  },
  {
    name: "Dead of the Brain (1992)(Fairytale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dead%20of%20the%20Brain%20%281992%29%28Fairytale%29.zip",
    link2: ""
  },
  {
    name: "Death Brade (1992)(Shuuwa - SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Death%20Brade%20%281992%29%28Shuuwa%20-%20SPS%29.zip",
    link2: ""
  },
  {
    name: "Death Bringer (1989)(Telnet)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Death%20Bringer%20%281989%29%28Telnet%29.zip",
    link2: ""
  },
  {
    name: "Death Fighter v2 (1992)(Battle Arts)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "304.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Death%20Fighter%20v2%20%281992%29%28Battle%20Arts%29.zip",
    link2: ""
  },
  {
    name: "Deep Scan",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "156.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Deep%20Scan.zip",
    link2: ""
  },
  {
    name: "Deep, The (1991)(Blast Off Dennou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "567.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Deep%2C%20The%20%281991%29%28Blast%20Off%20Dennou%29.zip",
    link2: ""
  },
  {
    name: "Deflektor (1989)(BPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "705.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Deflektor%20%281989%29%28BPS%29.zip",
    link2: ""
  },
  {
    name: "Deg-On (1990)(Pineapple)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "295.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Deg-On%20%281990%29%28Pineapple%29.zip",
    link2: ""
  },
  {
    name: "Delta Arm (1990)(Login)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "506.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Delta%20Arm%20%281990%29%28Login%29.zip",
    link2: ""
  },
  {
    name: "Demon Slayer I+II+III (19xx)(T&H Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Demon%20Slayer%20I%2BII%2BIII%20%2819xx%29%28T%26H%20Project%29.zip",
    link2: ""
  },
  {
    name: "Dennou Gakuen - Cybernetic Hi-School",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dennou%20Gakuen%20-%20Cybernetic%20Hi-School.zip",
    link2: ""
  },
  {
    name: "Desperado",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "866.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Desperado.zip",
    link2: ""
  },
  {
    name: "Detana! Twin Bee (1991)(Konami)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Detana%21%20Twin%20Bee%20%281991%29%28Konami%29.zip",
    link2: ""
  },
  {
    name: "Devil Chain (1990)(G-Limited)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "788.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Devil%20Chain%20%281990%29%28G-Limited%29.zip",
    link2: ""
  },
  {
    name: "Devil's a Letter of Invitation (1994)(Team K&I)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Devil%27s%20a%20Letter%20of%20Invitation%20%281994%29%28Team%20K%26I%29.zip",
    link2: ""
  },
  {
    name: "Diamond Explorer I+ II (19xx)(Michael Company)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "355.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Diamond%20Explorer%20I%2B%20II%20%2819xx%29%28Michael%20Company%29.zip",
    link2: ""
  },
  {
    name: "Die Bahnwelt (1992) by Glodia",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Die%20Bahnwelt%20%281992%29%20by%20Glodia.zip",
    link2: ""
  },
  {
    name: "Dig Dug I & II (1995)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "275.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dig%20Dug%20I%20%26%20II%20%281995%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Dino Land (1991)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "534.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dino%20Land%20%281991%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Dion (1992)(Studio Theta)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "322.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dion%20%281992%29%28Studio%20Theta%29.zip",
    link2: ""
  },
  {
    name: "Dios (1990)(Zain Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "916.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dios%20%281990%29%28Zain%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Disco Scroll (1989)(Mugen Kaisha Rana)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "448.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Disco%20Scroll%20%281989%29%28Mugen%20Kaisha%20Rana%29.zip",
    link2: ""
  },
  {
    name: "DISKX",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "498.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/DISKX.zip",
    link2: ""
  },
  {
    name: "Dive On (1993)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dive%20On%20%281993%29.zip",
    link2: ""
  },
  {
    name: "Diver, The (1994)(Craftwork)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "570.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Diver%2C%20The%20%281994%29%28Craftwork%29.zip",
    link2: ""
  },
  {
    name: "Dog Fight! (1992)(Biwahosi Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "889.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dog%20Fight%21%20%281992%29%28Biwahosi%20Software%29.zip",
    link2: ""
  },
  {
    name: "Doki Doki Amanachan (1990)(Toy Pops)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "573.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Doki%20Doki%20Amanachan%20%281990%29%28Toy%20Pops%29.zip",
    link2: ""
  },
  {
    name: "Doki Doki Card League (1990)(Great)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "657.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Doki%20Doki%20Card%20League%20%281990%29%28Great%29.zip",
    link2: ""
  },
  {
    name: "Dome (1988)(System Sacom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dome%20%281988%29%28System%20Sacom%29.zip",
    link2: ""
  },
  {
    name: "Domino Soldier Albion (198x)(Chaos)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "729.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Domino%20Soldier%20Albion%20%28198x%29%28Chaos%29.zip",
    link2: ""
  },
  {
    name: "Door Door (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "67.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Door%20Door%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Dor I+II+III+Special'93+Sakigake",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "18.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dor%20I%2BII%2BIII%2BSpecial%2793%2BSakigake.zip",
    link2: ""
  },
  {
    name: "Dori Dor Qizu (1993)(Daikokuya Dennou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "286.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dori%20Dor%20Qizu%20%281993%29%28Daikokuya%20Dennou%29.zip",
    link2: ""
  },
  {
    name: "Dorix (1998)(YoKoMuMu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "356.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dorix%20%281998%29%28YoKoMuMu%29.zip",
    link2: ""
  },
  {
    name: "Double Eagle (1989)(Artdink)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "737.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Double%20Eagle%20%281989%29%28Artdink%29.zip",
    link2: ""
  },
  {
    name: "Double Target (1990)(Proceed)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "208.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Double%20Target%20%281990%29%28Proceed%29.zip",
    link2: ""
  },
  {
    name: "Douke Shisatsujin Jiken (19xx)(Thinking Rabbit)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Douke%20Shisatsujin%20Jiken%20%2819xx%29%28Thinking%20Rabbit%29.zip",
    link2: ""
  },
  {
    name: "Doukyuusei (1992)(Elf)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Doukyuusei%20%281992%29%28Elf%29.zip",
    link2: ""
  },
  {
    name: "Downtown Nekketsu Monogatari (1990)(Sharp - SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Downtown%20Nekketsu%20Monogatari%20%281990%29%28Sharp%20-%20SPS%29.zip",
    link2: ""
  },
  {
    name: "Dr. A San Kyoudai Series Tomomichan No Dobon (199x)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "309.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dr.%20A%20San%20Kyoudai%20Series%20Tomomichan%20No%20Dobon%20%28199x%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Dr. Orima (1990)(Halman)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "83.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dr.%20Orima%20%281990%29%28Halman%29.zip",
    link2: ""
  },
  {
    name: "Dr. Stop (1992)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dr.%20Stop%20%281992%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Dracula Hakushaku (1992)(Fairy Tale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dracula%20Hakushaku%20%281992%29%28Fairy%20Tale%29.zip",
    link2: ""
  },
  {
    name: "Dragon (1989)(Log)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "442.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20%281989%29%28Log%29.zip",
    link2: ""
  },
  {
    name: "Dragon Buster (1993)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "521.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Buster%20%281993%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Dragon City (19xx)(Fairytale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20City%20%2819xx%29%28Fairytale%29.zip",
    link2: ""
  },
  {
    name: "Dragon Cross (19xx)(Masqurade)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "110.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Cross%20%2819xx%29%28Masqurade%29.zip",
    link2: ""
  },
  {
    name: "Dragon Eyes (1991)(Technopolis)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Eyes%20%281991%29%28Technopolis%29.zip",
    link2: ""
  },
  {
    name: "Dragon Knight I-IV",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "19.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Knight%20I-IV.zip",
    link2: ""
  },
  {
    name: "Dragon Province (199x)(Justice)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Province%20%28199x%29%28Justice%29.zip",
    link2: ""
  },
  {
    name: "Dragon Quest (1992)(Mitsuru Kamiyama)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "371.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Quest%20%281992%29%28Mitsuru%20Kamiyama%29.zip",
    link2: ""
  },
  {
    name: "Dragon Quest 4 (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "763.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Quest%204%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Dragon Slayer +(1992)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Slayer%20%2B%281992%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "Dragon Spirit (1988)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Spirit%20%281988%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Dragon Strike (1992)(Pony Canyon)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Strike%20%281992%29%28Pony%20Canyon%29.zip",
    link2: ""
  },
  {
    name: "Dragon Wars (1990)(Starcraft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "787.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dragon%20Wars%20%281990%29%28Starcraft%29.zip",
    link2: ""
  },
  {
    name: "Drakkhen (1991)(Epic)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Drakkhen%20%281991%29%28Epic%29.zip",
    link2: ""
  },
  {
    name: "Drinky & Smokey (1994)(Dream Staff)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "409.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Drinky%20%26%20Smokey%20%281994%29%28Dream%20Staff%29.zip",
    link2: ""
  },
  {
    name: "Duel Fighter I+II",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Duel%20Fighter%20I%2BII.zip",
    link2: ""
  },
  {
    name: "Dungeon Master (1989)(FTL)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "390.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dungeon%20Master%20%281989%29%28FTL%29.zip",
    link2: ""
  },
  {
    name: "Dungeon Seekers (1990)(Haraiso)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "407.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dungeon%20Seekers%20%281990%29%28Haraiso%29.zip",
    link2: ""
  },
  {
    name: "Dynamic Fomesion Soccer (1992)(MIX)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "218.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dynamic%20Fomesion%20Soccer%20%281992%29%28MIX%29.zip",
    link2: ""
  },
  {
    name: "Dynamite Duke (1990)(Hertz)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Dynamite%20Duke%20%281990%29%28Hertz%29.zip",
    link2: ""
  },
  {
    name: "EEL Edit Elements v2.00A (1995)(Cat Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/EEL%20Edit%20Elements%20v2.00A%20%281995%29%28Cat%20Soft%29.zip",
    link2: ""
  },
  {
    name: "EFF Erotic Fantasy Fable (1994)(T&H Projects)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "870.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/EFF%20Erotic%20Fantasy%20Fable%20%281994%29%28T%26H%20Projects%29.zip",
    link2: ""
  },
  {
    name: "Eikan Ha Kimi Ni Koukou Yakyuu Zenkokutaikai (1990)(Artdink)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Eikan%20Ha%20Kimi%20Ni%20Koukou%20Yakyuu%20Zenkokutaikai%20%281990%29%28Artdink%29.zip",
    link2: ""
  },
  {
    name: "Eiri",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "485.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Eiri.zip",
    link2: ""
  },
  {
    name: "Elf No Shoujou CG Puzzle (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "149.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Elf%20No%20Shoujou%20CG%20Puzzle%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Elle (1991)(Elf)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Elle%20%281991%29%28Elf%29.zip",
    link2: ""
  },
  {
    name: "Elrin Da! Magazine Vol. 2 Quiz Uchuu Tai Sakusen (1993)(Elrin Da!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "868.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Elrin%20Da%21%20Magazine%20Vol.%202%20Quiz%20Uchuu%20Tai%20Sakusen%20%281993%29%28Elrin%20Da%21%29.zip",
    link2: ""
  },
  {
    name: "Emerald Densetsu (1990)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "791.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Emerald%20Densetsu%20%281990%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Emerald Dragon (1990)(Glodia)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Emerald%20Dragon%20%281990%29%28Glodia%29.zip",
    link2: ""
  },
  {
    name: "Endan Genpei Souranki ~Irohanihoheto~ (1988)(Studio Angel)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "363.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Endan%20Genpei%20Souranki%20~Irohanihoheto~%20%281988%29%28Studio%20Angel%29.zip",
    link2: ""
  },
  {
    name: "Entfuhrer (19xx)(Zenryuutsuu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "284.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Entfuhrer%20%2819xx%29%28Zenryuutsuu%29.zip",
    link2: ""
  },
  {
    name: "Erion Quest (1991)(Ankoku Baitai Software House)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "769.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Erion%20Quest%20%281991%29%28Ankoku%20Baitai%20Software%20House%29.zip",
    link2: ""
  },
  {
    name: "Etoile Princess",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Etoile%20Princess.zip",
    link2: ""
  },
  {
    name: "Europe Sensen (1992)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Europe%20Sensen%20%281992%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Evil Stone + Kai (1989)(Zenryuutsuu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "298.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Evil%20Stone%20%2B%20Kai%20%281989%29%28Zenryuutsuu%29.zip",
    link2: ""
  },
  {
    name: "Excitebike (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "613.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Excitebike%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Exciting Hour Jusse Oozumou (1994)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "647.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Exciting%20Hour%20Jusse%20Oozumou%20%281994%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "eXOn (1991)(Softec)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "577.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/eXOn%20%281991%29%28Softec%29.zip",
    link2: ""
  },
  {
    name: "Exterlian (1990)(DO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Exterlian%20%281990%29%28DO%29.zip",
    link2: ""
  },
  {
    name: "Ezoris (1989)(K.W.P)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "246.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ezoris%20%281989%29%28K.W.P%29.zip",
    link2: ""
  },
  {
    name: "F-1 Fastest Lap (1991)(Michael Company)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "161.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/F-1%20Fastest%20Lap%20%281991%29%28Michael%20Company%29.zip",
    link2: ""
  },
  {
    name: "F-15 Strike Eagle II (1991)(Microprose)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "511.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/F-15%20Strike%20Eagle%20II%20%281991%29%28Microprose%29.zip",
    link2: ""
  },
  {
    name: "Fairyland Story, The (1991)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "678.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fairyland%20Story%2C%20The%20%281991%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "Fairytale Kaizoku Han (199x)(Takeru)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fairytale%20Kaizoku%20Han%20%28199x%29%28Takeru%29.zip",
    link2: ""
  },
  {
    name: "Famass (1990)(VHS - Demon's)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "237.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Famass%20%281990%29%28VHS%20-%20Demon%27s%29.zip",
    link2: ""
  },
  {
    name: "Fancy Qix (1990)(A.H.S.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "377.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fancy%20Qix%20%281990%29%28A.H.S.%29.zip",
    link2: ""
  },
  {
    name: "Fantasy Shooting (1989)(Michael Company)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "116.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fantasy%20Shooting%20%281989%29%28Michael%20Company%29.zip",
    link2: ""
  },
  {
    name: "Fantasy Zone (1989) (Sega-Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "935.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fantasy%20Zone%20%281989%29%20%28Sega-Dempa%29.zip",
    link2: ""
  },
  {
    name: "Far Side Moon Chikyuu Boueidan 2 (1990)(Artdink)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Far%20Side%20Moon%20Chikyuu%20Boueidan%202%20%281990%29%28Artdink%29.zip",
    link2: ""
  },
  {
    name: "Farewell Disk (1994)(Hayabusa Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "819.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Farewell%20Disk%20%281994%29%28Hayabusa%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Fevrie (19xx)(Jeudi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "461.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fevrie%20%2819xx%29%28Jeudi%29.zip",
    link2: ""
  },
  {
    name: "Final Fight (1992)(Capcom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Final%20Fight%20%281992%29%28Capcom%29.zip",
    link2: ""
  },
  {
    name: "Fire (19xx)(Takahashi Tokiyuki)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "92.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fire%20%2819xx%29%28Takahashi%20Tokiyuki%29.zip",
    link2: ""
  },
  {
    name: "Firia (1991)(Scuderia Phantom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "237.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Firia%20%281991%29%28Scuderia%20Phantom%29.zip",
    link2: ""
  },
  {
    name: "First Blow (199x)(Project G)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "167.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/First%20Blow%20%28199x%29%28Project%20G%29.zip",
    link2: ""
  },
  {
    name: "First Crisis Ma Jin No Toubou (1992)(Minkey Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "559.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/First%20Crisis%20Ma%20Jin%20No%20Toubou%20%281992%29%28Minkey%20Soft%29.zip",
    link2: ""
  },
  {
    name: "First Main Dish Pasta (1993)(Toukyou Kogei Daigaku Programming Kenkyuukai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "604.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/First%20Main%20Dish%20Pasta%20%281993%29%28Toukyou%20Kogei%20Daigaku%20Programming%20Kenkyuukai%29.zip",
    link2: ""
  },
  {
    name: "First Mission I+II",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "960.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/First%20Mission%20I%2BII.zip",
    link2: ""
  },
  {
    name: "First Queen II (19xx)(KSK)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/First%20Queen%20II%20%2819xx%29%28KSK%29.zip",
    link2: ""
  },
  {
    name: "Flame Wing v1.02 (1994)(Itasenpara)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "367.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Flame%20Wing%20v1.02%20%281994%29%28Itasenpara%29.zip",
    link2: ""
  },
  {
    name: "Flaming Dart (1992)(Kei-H)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "226.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Flaming%20Dart%20%281992%29%28Kei-H%29.zip",
    link2: ""
  },
  {
    name: "Flappy 2 Blue Star Fukkatsu No Hi (1989)(dB-Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "268.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Flappy%202%20Blue%20Star%20Fukkatsu%20No%20Hi%20%281989%29%28dB-Soft%29.zip",
    link2: ""
  },
  {
    name: "Flip Flop (1990)(Maitake)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "237.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Flip%20Flop%20%281990%29%28Maitake%29.zip",
    link2: ""
  },
  {
    name: "Flipull (1993)(MRO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "128.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Flipull%20%281993%29%28MRO%29.zip",
    link2: ""
  },
  {
    name: "Fly (1990)(Login)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "97.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fly%20%281990%29%28Login%29.zip",
    link2: ""
  },
  {
    name: "Fly Shooters (1991)(Pineapple)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "191.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fly%20Shooters%20%281991%29%28Pineapple%29.zip",
    link2: ""
  },
  {
    name: "flyingsquirrel",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "337.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/flyingsquirrel.zip",
    link2: ""
  },
  {
    name: "Formula X +",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Formula%20X%20%2B.zip",
    link2: ""
  },
  {
    name: "Fortress Attack",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fortress%20Attack.zip",
    link2: ""
  },
  {
    name: "Forty-One (1993)(Shin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "73.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Forty-One%20%281993%29%28Shin%29.zip",
    link2: ""
  },
  {
    name: "Four'll Fall (19xx)(Magical Knights' Connection)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "91.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Four%27ll%20Fall%20%2819xx%29%28Magical%20Knights%27%20Connection%29.zip",
    link2: ""
  },
  {
    name: "Four'll Fall (19xx)(Magical Knights' Connection)[update]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "135.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Four%27ll%20Fall%20%2819xx%29%28Magical%20Knights%27%20Connection%29%5Bupdate%5D.zip",
    link2: ""
  },
  {
    name: "Foxy 2 (1991)(Elf)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Foxy%202%20%281991%29%28Elf%29.zip",
    link2: ""
  },
  {
    name: "Frapull (19xx)(D Bou - Wing K.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "53.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Frapull%20%2819xx%29%28D%20Bou%20-%20Wing%20K.%29.zip",
    link2: ""
  },
  {
    name: "Frisky Tom (1995)(XYZ)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "210.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Frisky%20Tom%20%281995%29%28XYZ%29.zip",
    link2: ""
  },
  {
    name: "Frog (19xx)(Takahashi T.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "113.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Frog%20%2819xx%29%28Takahashi%20T.%29.zip",
    link2: ""
  },
  {
    name: "Frogger",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "681.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Frogger.zip",
    link2: ""
  },
  {
    name: "Fruits Fields (1988)(Compac)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "384.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fruits%20Fields%20%281988%29%28Compac%29.zip",
    link2: ""
  },
  {
    name: "FSS Fantasy Saga System (1990)(MNM Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "375.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/FSS%20Fantasy%20Saga%20System%20%281990%29%28MNM%20Software%29.zip",
    link2: ""
  },
  {
    name: "Full Throttle (1988)(Sharp - SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "357.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Full%20Throttle%20%281988%29%28Sharp%20-%20SPS%29.zip",
    link2: ""
  },
  {
    name: "Fushigi Densetsu (199x)(Proceed)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "141.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fushigi%20Densetsu%20%28199x%29%28Proceed%29.zip",
    link2: ""
  },
  {
    name: "Fushigi No Kabe (1988)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "909.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fushigi%20No%20Kabe%20%281988%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Fushigi No Umi No Nadia (1992)(Gainax)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Fushigi%20No%20Umi%20No%20Nadia%20%281992%29%28Gainax%29.zip",
    link2: ""
  },
  {
    name: "Future Wars (19xx)(Starcraft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Future%20Wars%20%2819xx%29%28Starcraft%29.zip",
    link2: ""
  },
  {
    name: "FZ Senki Axis (1990)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/FZ%20Senki%20Axis%20%281990%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "G.R. Gravity Responce (1992)(Tenshindou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/G.R.%20Gravity%20Responce%20%281992%29%28Tenshindou%29.zip",
    link2: ""
  },
  {
    name: "Ga-War Games (19xx)(To$hi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "329.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ga-War%20Games%20%2819xx%29%28To%24hi%29.zip",
    link2: ""
  },
  {
    name: "Gaia Fighter v2.5 (1991)(Hong Kong Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "334.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gaia%20Fighter%20v2.5%20%281991%29%28Hong%20Kong%20Project%29.zip",
    link2: ""
  },
  {
    name: "Gaiarm (1991)(Violet Heart Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "478.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gaiarm%20%281991%29%28Violet%20Heart%20Software%29.zip",
    link2: ""
  },
  {
    name: "Gakuen Bomber (1994)(Active)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gakuen%20Bomber%20%281994%29%28Active%29.zip",
    link2: ""
  },
  {
    name: "Gakuen Toshi Z (199x)(Striker)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gakuen%20Toshi%20Z%20%28199x%29%28Striker%29.zip",
    link2: ""
  },
  {
    name: "Gal Mind 2 (1992)(Coto Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "733.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gal%20Mind%202%20%281992%29%28Coto%20Software%29.zip",
    link2: ""
  },
  {
    name: "Galaga '88 (1990)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Galaga%20%2788%20%281990%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Galaga (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "605.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Galaga%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Galaxian (1996)(XYZ)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "287.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Galaxian%20%281996%29%28XYZ%29.zip",
    link2: ""
  },
  {
    name: "Galaxian 2 (1996)(68 Bank)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "518.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Galaxian%202%20%281996%29%2868%20Bank%29.zip",
    link2: ""
  },
  {
    name: "Galaxian X68K (19xx)(Gyo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "98.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Galaxian%20X68K%20%2819xx%29%28Gyo%29.zip",
    link2: ""
  },
  {
    name: "Galaxy Wars (1987)(Tiny-Tomo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "89.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Galaxy%20Wars%20%281987%29%28Tiny-Tomo%29.zip",
    link2: ""
  },
  {
    name: "Galseed (1991)(Login)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "687.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Galseed%20%281991%29%28Login%29.zip",
    link2: ""
  },
  {
    name: "Game Jang (1993)(Gam)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Game%20Jang%20%281993%29%28Gam%29.zip",
    link2: ""
  },
  {
    name: "Game.x (1990)(Kugenuma Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "91.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Game.x%20%281990%29%28Kugenuma%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Gamma Planet (1989)(Compac)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "479.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gamma%20Planet%20%281989%29%28Compac%29.zip",
    link2: ""
  },
  {
    name: "Ganbare! Paichan (1994)(Daba)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "235.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ganbare%21%20Paichan%20%281994%29%28Daba%29.zip",
    link2: ""
  },
  {
    name: "Gardis Light v2.10 (1994)(Sprite)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "481.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gardis%20Light%20v2.10%20%281994%29%28Sprite%29.zip",
    link2: ""
  },
  {
    name: "Garou Densetsu I+II+Special (1993)(Magical Company)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "19.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Garou%20Densetsu%20I%2BII%2BSpecial%20%281993%29%28Magical%20Company%29.zip",
    link2: ""
  },
  {
    name: "Gaudi Barcelona No Kaze (19xx)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gaudi%20Barcelona%20No%20Kaze%20%2819xx%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Gedou Densetsu+Retsuden",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "807.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gedou%20Densetsu%2BRetsuden.zip",
    link2: ""
  },
  {
    name: "Gekkan 5 Gou (19xx)(68 Bank)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "684.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gekkan%205%20Gou%20%2819xx%29%2868%20Bank%29.zip",
    link2: ""
  },
  {
    name: "Gemdrop (1990)(SSL - Au)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "451.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gemdrop%20%281990%29%28SSL%20-%20Au%29.zip",
    link2: ""
  },
  {
    name: "Gemini Wing (1990)(System Sacom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "639.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gemini%20Wing%20%281990%29%28System%20Sacom%29.zip",
    link2: ""
  },
  {
    name: "Genei Toshi (1991)(Microcabin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Genei%20Toshi%20%281991%29%28Microcabin%29.zip",
    link2: ""
  },
  {
    name: "Genocide I + II (1989)(Zoom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Genocide%20I%20%2B%20II%20%281989%29%28Zoom%29.zip",
    link2: ""
  },
  {
    name: "Genpei Toumaden (1988)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "637.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Genpei%20Toumaden%20%281988%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Geograph Seal (1994)(Exact)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Geograph%20Seal%20%281994%29%28Exact%29.zip",
    link2: ""
  },
  {
    name: "Get Ready (19xx)(Santasan Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "296.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Get%20Ready%20%2819xx%29%28Santasan%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Getsumen Nanchakuriku Game (19xx)(Kurimoto Kenya)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "92.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Getsumen%20Nanchakuriku%20Game%20%2819xx%29%28Kurimoto%20Kenya%29.zip",
    link2: ""
  },
  {
    name: "Giga Fight 68K (1992)(Gainen Shuppon)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "319.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Giga%20Fight%2068K%20%281992%29%28Gainen%20Shuppon%29.zip",
    link2: ""
  },
  {
    name: "Ginga Eiyuu Densetsu ++",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ginga%20Eiyuu%20Densetsu%20%2B%2B.zip",
    link2: ""
  },
  {
    name: "Girls Paradise Rakuen no Tenshi-tachi(1989)(Great)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "687.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Girls%20Paradise%20Rakuen%20no%20Tenshi-tachi%281989%29%28Great%29.zip",
    link2: ""
  },
  {
    name: "Giza! XIX (1991)(Fairytale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Giza%21%20XIX%20%281991%29%28Fairytale%29.zip",
    link2: ""
  },
  {
    name: "Glacier",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Glacier.zip",
    link2: ""
  },
  {
    name: "Go Kichikun (1988)(Gam)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "270.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Go%20Kichikun%20%281988%29%28Gam%29.zip",
    link2: ""
  },
  {
    name: "Goddess' Blazon (1995)(DCS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Goddess%27%20Blazon%20%281995%29%28DCS%29.zip",
    link2: ""
  },
  {
    name: "Gokiburi Game (1989)(NST - Onion Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "484.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gokiburi%20Game%20%281989%29%28NST%20-%20Onion%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Gorakuin (19xx)(Zenryuutsuu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "417.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gorakuin%20%2819xx%29%28Zenryuutsuu%29.zip",
    link2: ""
  },
  {
    name: "Gradius I+II (1987) (Konami-SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gradius%20I%2BII%20%281987%29%20%28Konami-SPS%29.zip",
    link2: ""
  },
  {
    name: "Gram Cats 2 (1993)(Dot Kikaku)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gram%20Cats%202%20%281993%29%28Dot%20Kikaku%29.zip",
    link2: ""
  },
  {
    name: "Granada + v2.0 (1990)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Granada%20%2B%20v2.0%20%281990%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Grandi Florum Mischeif of Iveris (1990)(Compac)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "895.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Grandi%20Florum%20Mischeif%20of%20Iveris%20%281990%29%28Compac%29.zip",
    link2: ""
  },
  {
    name: "Grobda (199x)(L. Sound)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "644.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Grobda%20%28199x%29%28L.%20Sound%29.zip",
    link2: ""
  },
  {
    name: "Grobda Modoki (199x)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "248.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Grobda%20Modoki%20%28199x%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Ground Master (19xx)(Zain Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "371.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ground%20Master%20%2819xx%29%28Zain%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Group X (1991)(Compac)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "790.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Group%20X%20%281991%29%28Compac%29.zip",
    link2: ""
  },
  {
    name: "Guardian (1993)(Trap Zero)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "298.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Guardian%20%281993%29%28Trap%20Zero%29.zip",
    link2: ""
  },
  {
    name: "Guardians (1993)(Moai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "679.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Guardians%20%281993%29%28Moai%29.zip",
    link2: ""
  },
  {
    name: "Guerriere Lyeward (1990)(Technopolis)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "622.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Guerriere%20Lyeward%20%281990%29%28Technopolis%29.zip",
    link2: ""
  },
  {
    name: "Gunship (1990)(Microprose)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "415.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gunship%20%281990%29%28Microprose%29.zip",
    link2: ""
  },
  {
    name: "Gyaos (1990)(Project Makkusu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "163.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Gyaos%20%281990%29%28Project%20Makkusu%29.zip",
    link2: ""
  },
  {
    name: "Hacchake Ayayosan Pro-68K +II+III (19xx)(Hard)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hacchake%20Ayayosan%20Pro-68K%20%2BII%2BIII%20%2819xx%29%28Hard%29.zip",
    link2: ""
  },
  {
    name: "Haita Tsuun Dash (199x)(QTQ's Workshop)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "850.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Haita%20Tsuun%20Dash%20%28199x%29%28QTQ%27s%20Workshop%29.zip",
    link2: ""
  },
  {
    name: "Hakobune Ni Notte (1991)(Moai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "573.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hakobune%20Ni%20Notte%20%281991%29%28Moai%29.zip",
    link2: ""
  },
  {
    name: "Half Mind (19xx)(Pasoket)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "423.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Half%20Mind%20%2819xx%29%28Pasoket%29.zip",
    link2: ""
  },
  {
    name: "Hana Yori Dango I+II (Active)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hana%20Yori%20Dango%20I%2BII%20%28Active%29.zip",
    link2: ""
  },
  {
    name: "Hanafuda Hourouki (1988)(Dot Kikaku)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "758.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hanafuda%20Hourouki%20%281988%29%28Dot%20Kikaku%29.zip",
    link2: ""
  },
  {
    name: "Hanafuda Koi Koi (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "138.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hanafuda%20Koi%20Koi%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Hanafuda Tengoku (1990)(Junk)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "285.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hanafuda%20Tengoku%20%281990%29%28Junk%29.zip",
    link2: ""
  },
  {
    name: "Hanaikoku Pro Uso-68K (1990)(Hazama Kuroo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "51.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hanaikoku%20Pro%20Uso-68K%20%281990%29%28Hazama%20Kuroo%29.zip",
    link2: ""
  },
  {
    name: "Hare Nochi Oosawagi (1989)(Cocktail Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "801.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hare%20Nochi%20Oosawagi%20%281989%29%28Cocktail%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Haruka Naru (New 3D Golf Simulation) - Augusta & Eight Lakes",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Haruka%20Naru%20%28New%203D%20Golf%20Simulation%29%20-%20Augusta%20%26%20Eight%20Lakes.zip",
    link2: ""
  },
  {
    name: "Hatenkou",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,013.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hatenkou.zip",
    link2: ""
  },
  {
    name: "Heart of Saphilamun (1991)(Annandule Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Heart%20of%20Saphilamun%20%281991%29%28Annandule%20Project%29.zip",
    link2: ""
  },
  {
    name: "Heavy Nova (1991)(Micronet)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "726.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Heavy%20Nova%20%281991%29%28Micronet%29.zip",
    link2: ""
  },
  {
    name: "Heiankyou Alien",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "244.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Heiankyou%20Alien.zip",
    link2: ""
  },
  {
    name: "Hellhound (1994) (Breakthrough)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hellhound%20%281994%29%20%28Breakthrough%29.zip",
    link2: ""
  },
  {
    name: "Helmet (1991)(Ma)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "57.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Helmet%20%281991%29%28Ma%29.zip",
    link2: ""
  },
  {
    name: "Hero Hero Disk 1 (19xx)(Opt. 1)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "215.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hero%20Hero%20Disk%201%20%2819xx%29%28Opt.%201%29.zip",
    link2: ""
  },
  {
    name: "Hero Hero Disk 4 Indojin No Yabou (1990)(Opt. 1)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "340.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hero%20Hero%20Disk%204%20Indojin%20No%20Yabou%20%281990%29%28Opt.%201%29.zip",
    link2: ""
  },
  {
    name: "Hero Hero Disk 6 (1992)(Opt. 1)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "788.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hero%20Hero%20Disk%206%20%281992%29%28Opt.%201%29.zip",
    link2: ""
  },
  {
    name: "Hero Hero Disk 8 (199x)(Opt. 1)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "793.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hero%20Hero%20Disk%208%20%28199x%29%28Opt.%201%29.zip",
    link2: ""
  },
  {
    name: "Hetzer (19xx)(Inoue Ken)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "90.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hetzer%20%2819xx%29%28Inoue%20Ken%29.zip",
    link2: ""
  },
  {
    name: "Hextris (199x)(Ken1)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "76.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hextris%20%28199x%29%28Ken1%29.zip",
    link2: ""
  },
  {
    name: "Hey! Say! Education Committee v0.10 (1993)(Taka-P)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "405.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hey%21%20Say%21%20Education%20Committee%20v0.10%20%281993%29%28Taka-P%29.zip",
    link2: ""
  },
  {
    name: "Hey! Say! Education Committee v0.12 (1993)(Taka-P)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "306.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hey%21%20Say%21%20Education%20Committee%20v0.12%20%281993%29%28Taka-P%29.zip",
    link2: ""
  },
  {
    name: "Hi Mega Sister (1990)(Chan Chan Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "566.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hi%20Mega%20Sister%20%281990%29%28Chan%20Chan%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Higesori Pro Uso-68K (1990)(Hazama Kuroo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "75.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Higesori%20Pro%20Uso-68K%20%281990%29%28Hazama%20Kuroo%29.zip",
    link2: ""
  },
  {
    name: "High & Low (199x)(Sacchin & Nima Company)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "140.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/High%20%26%20Low%20%28199x%29%28Sacchin%20%26%20Nima%20Company%29.zip",
    link2: ""
  },
  {
    name: "High Position (1989)(Michael Company)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "433.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/High%20Position%20%281989%29%28Michael%20Company%29.zip",
    link2: ""
  },
  {
    name: "Himitsu No Hanazono (1992)(Technopolis)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Himitsu%20No%20Hanazono%20%281992%29%28Technopolis%29.zip",
    link2: ""
  },
  {
    name: "Hiroshi I + II (19xx)(Rats)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "478.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hiroshi%20I%20%2B%20II%20%20%2819xx%29%28Rats%29.zip",
    link2: ""
  },
  {
    name: "Hishouzame Flying Shark (1991)(Kaneko)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "315.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hishouzame%20Flying%20Shark%20%281991%29%28Kaneko%29.zip",
    link2: ""
  },
  {
    name: "Hissatsu Yuusha Tsuitoshi (19xx)(Mugen Unagi Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "176.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hissatsu%20Yuusha%20Tsuitoshi%20%2819xx%29%28Mugen%20Unagi%20Team%29.zip",
    link2: ""
  },
  {
    name: "History of Elthlead (19xx)(NCS - Masaya)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "826.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/History%20of%20Elthlead%20%2819xx%29%28NCS%20-%20Masaya%29.zip",
    link2: ""
  },
  {
    name: "Hitomi Zaka (19xx)(Higashikaihotsujuku)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hitomi%20Zaka%20%2819xx%29%28Higashikaihotsujuku%29.zip",
    link2: ""
  },
  {
    name: "Hitton (2000)(TAU Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "245.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hitton%20%282000%29%28TAU%20Software%29.zip",
    link2: ""
  },
  {
    name: "Hoippuru X68K (1995)(Pastel Hope)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "263.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hoippuru%20X68K%20%281995%29%28Pastel%20Hope%29.zip",
    link2: ""
  },
  {
    name: "Hori Hori Ume Ume (199x)(Ora Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "894.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hori%20Hori%20Ume%20Ume%20%28199x%29%28Ora%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Horror of Cridewell (1990)(Annandule Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "477.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Horror%20of%20Cridewell%20%281990%29%28Annandule%20Project%29.zip",
    link2: ""
  },
  {
    name: "Hoshi No Suna Monogatari I+II",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "9.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hoshi%20No%20Suna%20Monogatari%20I%2BII.zip",
    link2: ""
  },
  {
    name: "Hot Jump v0.00 (199x)(Hayabusa Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "673.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hot%20Jump%20v0.00%20%28199x%29%28Hayabusa%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Hotel Wars (19xx)(Bothtec)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "534.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hotel%20Wars%20%2819xx%29%28Bothtec%29.zip",
    link2: ""
  },
  {
    name: "Houma Hunter Lime",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Houma%20Hunter%20Lime.zip",
    link2: ""
  },
  {
    name: "Houseki Tsukai Jewel Master (199x)(TFS - Nekono Kokoubou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "251.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Houseki%20Tsukai%20Jewel%20Master%20%28199x%29%28TFS%20-%20Nekono%20Kokoubou%29.zip",
    link2: ""
  },
  {
    name: "Hover Craft 68K (1993)(Yamaco)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "657.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hover%20Craft%2068K%20%281993%29%28Yamaco%29.zip",
    link2: ""
  },
  {
    name: "How Many Robot (1988)(Artdink)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "143.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/How%20Many%20Robot%20%281988%29%28Artdink%29.zip",
    link2: ""
  },
  {
    name: "Human 68k v3.02 with WINDVR (1993)(Sharp - Hudson)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "422.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Human%2068k%20v3.02%20with%20WINDVR%20%281993%29%28Sharp%20-%20Hudson%29.zip",
    link2: ""
  },
  {
    name: "Hydlide I+II+III (19xx)(Yokoshiba Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Hydlide%20I%2BII%2BIII%20%2819xx%29%28Yokoshiba%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Iinoyama No Oishii (1994)(Toukyou Kogei Daigaku Programming Kenkyuukai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Iinoyama%20No%20Oishii%20%281994%29%28Toukyou%20Kogei%20Daigaku%20Programming%20Kenkyuukai%29.zip",
    link2: ""
  },
  {
    name: "Ika Blade (1992)(Yax)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "107.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ika%20Blade%20%281992%29%28Yax%29.zip",
    link2: ""
  },
  {
    name: "Ikkaku Toushi Cecil (1993)(T&H Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "563.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ikkaku%20Toushi%20Cecil%20%281993%29%28T%26H%20Project%29.zip",
    link2: ""
  },
  {
    name: "IL",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/IL.zip",
    link2: ""
  },
  {
    name: "Illumina (1991)(Cocktail Soft)(Disk 1 of 3)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Illumina%20%281991%29%28Cocktail%20Soft%29%28Disk%201%20of%203%29.zip",
    link2: ""
  },
  {
    name: "Image (1992)(Software House Parsley)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Image%20%281992%29%28Software%20House%20Parsley%29.zip",
    link2: ""
  },
  {
    name: "Image Fight (1990)(Irem)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Image%20Fight%20%281990%29%28Irem%29.zip",
    link2: ""
  },
  {
    name: "Imazoman v1.00 (199x)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "599.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Imazoman%20v1.00%20%28199x%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Imitation wa Aisenai",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "701.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Imitation%20wa%20Aisenai.zip",
    link2: ""
  },
  {
    name: "Imperial Force (19xx)(System Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "952.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Imperial%20Force%20%2819xx%29%28System%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Inindou Datou Nobunaga (199x)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Inindou%20Datou%20Nobunaga%20%28199x%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Integral Arm (1992)(Yoshitaka Higashi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "304.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Integral%20Arm%20%281992%29%28Yoshitaka%20Higashi%29.zip",
    link2: ""
  },
  {
    name: "Intro Pro 68K v2.10+ (1991)(Sprite)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "804.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Intro%20Pro%2068K%20v2.10%2B%20%281991%29%28Sprite%29.zip",
    link2: ""
  },
  {
    name: "Ishidou (1989)(ASCII)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "700.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ishidou%20%281989%29%28ASCII%29.zip",
    link2: ""
  },
  {
    name: "Ishin No Arashi (1990)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "972.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ishin%20No%20Arashi%20%281990%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "J.B. Harold",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/J.B.%20Harold.zip",
    link2: ""
  },
  {
    name: "Jack Nicklaus' Golf + (19xx)(Crossmedia)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jack%20Nicklaus%27%20Golf%20%2B%20%2819xx%29%28Crossmedia%29.zip",
    link2: ""
  },
  {
    name: "Jaleck Expert-68K (1989)(SSL - Au)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "549.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jaleck%20Expert-68K%20%281989%29%28SSL%20-%20Au%29.zip",
    link2: ""
  },
  {
    name: "Jammes (1993)(Dream Staff)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "273.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jammes%20%281993%29%28Dream%20Staff%29.zip",
    link2: ""
  },
  {
    name: "Jan Jaka Jan (1992)(Elf)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jan%20Jaka%20Jan%20%281992%29%28Elf%29.zip",
    link2: ""
  },
  {
    name: "Jan Ken Club v1.2 (19xx)(Dream Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "150.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jan%20Ken%20Club%20v1.2%20%2819xx%29%28Dream%20Project%29.zip",
    link2: ""
  },
  {
    name: "Jane (1990)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "604.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jane%20%281990%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Jangou I+II (1989)(Crossmedia)(Disk 1 of 2)(Disk A)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jangou%20I%2BII%20%281989%29%28Crossmedia%29%28Disk%201%20of%202%29%28Disk%20A%29.zip",
    link2: ""
  },
  {
    name: "Janshin Quest (1994)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Janshin%20Quest%20%281994%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "Japan 2136 Nihon Gokei (1990)(Login)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "236.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Japan%202136%20Nihon%20Gokei%20%281990%29%28Login%29.zip",
    link2: ""
  },
  {
    name: "Jastis (1990)(ASM)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "311.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jastis%20%281990%29%28ASM%29.zip",
    link2: ""
  },
  {
    name: "Jeena No Taibouken (1990)(T&H Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "260.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jeena%20No%20Taibouken%20%281990%29%28T%26H%20Project%29.zip",
    link2: ""
  },
  {
    name: "Jissen Billiards (1990)(Pack-In-Video)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jissen%20Billiards%20%281990%29%28Pack-In-Video%29.zip",
    link2: ""
  },
  {
    name: "Joker I+II",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Joker%20I%2BII.zip",
    link2: ""
  },
  {
    name: "Joshua (1992)(Panther Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Joshua%20%281992%29%28Panther%20Software%29.zip",
    link2: ""
  },
  {
    name: "Jotei Senki I-IV",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "8.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jotei%20Senki%20I-IV.zip",
    link2: ""
  },
  {
    name: "Jumping Simon (19xx)(Tonarinokooringu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "191.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Jumping%20Simon%20%2819xx%29%28Tonarinokooringu%29.zip",
    link2: ""
  },
  {
    name: "Junker Pro-68K (1990)(Gold Cats Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "133.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Junker%20Pro-68K%20%281990%29%28Gold%20Cats%20Project%29.zip",
    link2: ""
  },
  {
    name: "Kachoufuugetsu Gaiden (1993)(Ray)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "366.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kachoufuugetsu%20Gaiden%20%281993%29%28Ray%29.zip",
    link2: ""
  },
  {
    name: "Kaerimichi Ha Kiken Ga Ippai (1990)(DO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kaerimichi%20Ha%20Kiken%20Ga%20Ippai%20%281990%29%28DO%29.zip",
    link2: ""
  },
  {
    name: "Kaisen Game Daa! (1990)(Project Team Interrupt)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "78.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kaisen%20Game%20Daa%21%20%281990%29%28Project%20Team%20Interrupt%29.zip",
    link2: ""
  },
  {
    name: "Kaizoku (1993)(ORB)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kaizoku%20%281993%29%28ORB%29.zip",
    link2: ""
  },
  {
    name: "Kankyou Soft Shuu (1993)(Hazama Kuroo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "726.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kankyou%20Soft%20Shuu%20%281993%29%28Hazama%20Kuroo%29.zip",
    link2: ""
  },
  {
    name: "Karei Naru Jinsei Minasan No Okage Desu (1992)(Fairy Tale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Karei%20Naru%20Jinsei%20Minasan%20No%20Okage%20Desu%20%281992%29%28Fairy%20Tale%29.zip",
    link2: ""
  },
  {
    name: "Karou Densetsu + (1993)(DCS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Karou%20Densetsu%20%2B%20%281993%29%28DCS%29.zip",
    link2: ""
  },
  {
    name: "Kateikyoushi Adventure I+II (1989)(Micro Hage Chabin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "707.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kateikyoushi%20Adventure%20I%2BII%20%281989%29%28Micro%20Hage%20Chabin%29.zip",
    link2: ""
  },
  {
    name: "Kawaharazaki Ie No Ichizoku",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kawaharazaki%20Ie%20No%20Ichizoku%20.zip",
    link2: ""
  },
  {
    name: "Kawai Sou Monogatari Kanketsuhen (1988)(Master Piece)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "486.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kawai%20Sou%20Monogatari%20Kanketsuhen%20%281988%29%28Master%20Piece%29.zip",
    link2: ""
  },
  {
    name: "Kax (1989)(Takashi Imai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "76.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kax%20%281989%29%28Takashi%20Imai%29.zip",
    link2: ""
  },
  {
    name: "Keeper (1993)(Success - ASCII)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Keeper%20%281993%29%28Success%20-%20ASCII%29.zip",
    link2: ""
  },
  {
    name: "Kera Kera Hoshi (1993)(Cocktail Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kera%20Kera%20Hoshi%20%281993%29%28Cocktail%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Kibun Ha Pastel Touch (19xx)(Great)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "990.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kibun%20Ha%20Pastel%20Touch%20%2819xx%29%28Great%29.zip",
    link2: ""
  },
  {
    name: "Kids Sap 2nd File (1992)(Great)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kids%20Sap%202nd%20File%20%281992%29%28Great%29.zip",
    link2: ""
  },
  {
    name: "Kikori No Yosaku(1991)(IJI Team",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "378.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kikori%20No%20Yosaku%281991%29%28IJI%20Team.zip",
    link2: ""
  },
  {
    name: "Kikou Shidan (1990)(Artdink)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kikou%20Shidan%20%281990%29%28Artdink%29.zip",
    link2: ""
  },
  {
    name: "Kimi Dake Ni Ai Wo (1991)(Technopolis)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kimi%20Dake%20Ni%20Ai%20Wo%20%281991%29%28Technopolis%29.zip",
    link2: ""
  },
  {
    name: "King of Chicago, The (1988)(Master Designer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "664.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/King%20of%20Chicago%2C%20The%20%281988%29%28Master%20Designer%29.zip",
    link2: ""
  },
  {
    name: "King Ou II The Kick Master (1993)(Dragon Studio)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "678.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/King%20Ou%20II%20The%20Kick%20Master%20%281993%29%28Dragon%20Studio%29.zip",
    link2: ""
  },
  {
    name: "Kisetsu Hazure No Yousei (1993)(TAU Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "185.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kisetsu%20Hazure%20No%20Yousei%20%281993%29%28TAU%20Software%29.zip",
    link2: ""
  },
  {
    name: "Kishikaisei Taiho Shichimauzo Hyoukahan (1992)(Team Phantom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "696.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kishikaisei%20Taiho%20Shichimauzo%20Hyoukahan%20%281992%29%28Team%20Phantom%29.zip",
    link2: ""
  },
  {
    name: "Kitahei 68K (1992)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kitahei%2068K%20%281992%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "Kiwame (1992)(Log)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "344.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kiwame%20%281992%29%28Log%29.zip",
    link2: ""
  },
  {
    name: "Klax (1990)(Hudson)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "336.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Klax%20%281990%29%28Hudson%29.zip",
    link2: ""
  },
  {
    name: "Klax (1990)(Project M)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "81.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Klax%20%281990%29%28Project%20M%29.zip",
    link2: ""
  },
  {
    name: "Knight Arena (1994)(Creation Team Xelf)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "932.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Knight%20Arena%20%281994%29%28Creation%20Team%20Xelf%29.zip",
    link2: ""
  },
  {
    name: "Knight Arms - The Hybrid Framer",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Knight%20Arms%20-%20The%20Hybrid%20Framer%20.zip",
    link2: ""
  },
  {
    name: "Knight Maker (1991)(Yamamoto)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "260.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Knight%20Maker%20%281991%29%28Yamamoto%29.zip",
    link2: ""
  },
  {
    name: "Kohakuiro No Yuigon Seiyou Karuta Renzokusatsujin Jiken (1988)(Riverhill Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kohakuiro%20No%20Yuigon%20Seiyou%20Karuta%20Renzokusatsujin%20Jiken%20%281988%29%28Riverhill%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Koma (19xx)(Yancha)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "76.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Koma%20%2819xx%29%28Yancha%29.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 1 of 6)(System)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "238.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%201%20of%206%29%28System%29.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 1 of 6)(System)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "236.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%201%20of%206%29%28System%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 1 of 6)(System)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "238.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%201%20of%206%29%28System%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 2 of 6)(User)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%202%20of%206%29%28User%29.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 2 of 6)(User)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%202%20of%206%29%28User%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 3 of 6)(Excite)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "224.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%203%20of%206%29%28Excite%29.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 3 of 6)(Excite)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "337.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%203%20of%206%29%28Excite%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 4 of 6)(Sasurai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%204%20of%206%29%28Sasurai%29.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 4 of 6)(Sasurai)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "224.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%204%20of%206%29%28Sasurai%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 5 of 6)(Data 1 Ane)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "353.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%205%20of%206%29%28Data%201%20Ane%29.zip",
    link2: ""
  },
  {
    name: "Konya Mo Asa Made Powerful Mahjongg 2 (1989)(dB-Soft)(Disk 6 of 6)(Data 2 Ane)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "318.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Konya%20Mo%20Asa%20Made%20Powerful%20Mahjongg%202%20%281989%29%28dB-Soft%29%28Disk%206%20of%206%29%28Data%202%20Ane%29.zip",
    link2: ""
  },
  {
    name: "Kora Kora (1990)(KK Software Device)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "223.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kora%20Kora%20%281990%29%28KK%20Software%20Device%29.zip",
    link2: ""
  },
  {
    name: "Korette Deesure Jong! (19xx)(T&H Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "332.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Korette%20Deesure%20Jong%21%20%2819xx%29%28T%26H%20Project%29.zip",
    link2: ""
  },
  {
    name: "Koube Renai Monogatari (1989)(Zain Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "936.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Koube%20Renai%20Monogatari%20%281989%29%28Zain%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Kounai Shasei (1992)(Fairytale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kounai%20Shasei%20%281992%29%28Fairytale%29.zip",
    link2: ""
  },
  {
    name: "Kouryuuki (1993)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kouryuuki%20%281993%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Kousoku Genshu (1990)(Darekasan)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "89.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kousoku%20Genshu%20%281990%29%28Darekasan%29.zip",
    link2: ""
  },
  {
    name: "Ku2 +Front Row",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ku2%20%2BFront%20Row.zip",
    link2: ""
  },
  {
    name: "Kudoki Mataoshiemasu I+ II Kind Gal's (1988)(Hard)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kudoki%20Mataoshiemasu%20I%2B%20II%20Kind%20Gal%27s%20%281988%29%28Hard%29.zip",
    link2: ""
  },
  {
    name: "Kuru Kuru Puzzle (1994)(Mint Jam)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "131.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kuru%20Kuru%20Puzzle%20%281994%29%28Mint%20Jam%29.zip",
    link2: ""
  },
  {
    name: "Kurutta Kajitsu (1992)(Fairy Tale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kurutta%20Kajitsu%20%281992%29%28Fairy%20Tale%29.zip",
    link2: ""
  },
  {
    name: "Kyarukan (1990)(Toy Pops)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "714.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kyarukan%20%281990%29%28Toy%20Pops%29.zip",
    link2: ""
  },
  {
    name: "Kyun Kyun Fruit Napple City 1 (1991)(Yuuichi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kyun%20Kyun%20Fruit%20Napple%20City%201%20%281991%29%28Yuuichi%29.zip",
    link2: ""
  },
  {
    name: "Kyuukyoku Senki Gikadiver & Otsukerumono No Tetsujin & BQ Taikenban-(1996)(TUT CClub)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "510.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kyuukyoku%20Senki%20Gikadiver%20%26%20Otsukerumono%20No%20Tetsujin%20%26%20BQ%20Taikenban-%281996%29%28TUT%20CClub%29.zip",
    link2: ""
  },
  {
    name: "Kyuukyoku Tiger (1993)(Kaneko)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "922.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Kyuukyoku%20Tiger%20%281993%29%28Kaneko%29.zip",
    link2: ""
  },
  {
    name: "L'Empereur (19xx)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/L%27Empereur%20%2819xx%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "La Princesse Croissant (1994)(Fox Factory)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "314.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/La%20Princesse%20Croissant%20%281994%29%28Fox%20Factory%29.zip",
    link2: ""
  },
  {
    name: "Lagoon (1990)(Zoom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lagoon%20%281990%29%28Zoom%29.zip",
    link2: ""
  },
  {
    name: "Lamp (1994)(Mits)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "158.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lamp%20%281994%29%28Mits%29.zip",
    link2: ""
  },
  {
    name: "Laplace No Ma (1990)(Hummingbird Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Laplace%20No%20Ma%20%281990%29%28Hummingbird%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Las Vegas, The (1987)(Nippon Dexter)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "221.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Las%20Vegas%2C%20The%20%281987%29%28Nippon%20Dexter%29.zip",
    link2: ""
  },
  {
    name: "Last Armageddon (1991)(Brain Grey)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Last%20Armageddon%20%281991%29%28Brain%20Grey%29.zip",
    link2: ""
  },
  {
    name: "Last Batallion (1991)(Sting)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,022.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Last%20Batallion%20%281991%29%28Sting%29.zip",
    link2: ""
  },
  {
    name: "Last Piece II (1990)(POP Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "644.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Last%20Piece%20II%20%281990%29%28POP%20Software%29.zip",
    link2: ""
  },
  {
    name: "Last Tempest, The (1994)(Koucha Kikaku)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "967.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Last%20Tempest%2C%20The%20%281994%29%28Koucha%20Kikaku%29.zip",
    link2: ""
  },
  {
    name: "Laydock (1997)(Hoshishiba Takayuki)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "908.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Laydock%20%281997%29%28Hoshishiba%20Takayuki%29.zip",
    link2: ""
  },
  {
    name: "Leading Company (1992)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "970.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Leading%20Company%20%281992%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Lemmings (1991)(Imagineer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "949.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lemmings%20%281991%29%28Imagineer%29.zip",
    link2: ""
  },
  {
    name: "Lenam (1989)(Hertz)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lenam%20%281989%29%28Hertz%29.zip",
    link2: ""
  },
  {
    name: "Level Point v1.0 (199x)(Erenvmvrcom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "148.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Level%20Point%20v1.0%20%28199x%29%28Erenvmvrcom%29.zip",
    link2: ""
  },
  {
    name: "Lexus 2 (199x)(SPC Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "456.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lexus%202%20%28199x%29%28SPC%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Libble Rabble",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "836.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Libble%20Rabble.zip",
    link2: ""
  },
  {
    name: "Liberty Half Grade Up (1994)(Nekoro Girl)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "857.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Liberty%20Half%20Grade%20Up%20%281994%29%28Nekoro%20Girl%29.zip",
    link2: ""
  },
  {
    name: "Libido 7 (1994)(Libido)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Libido%207%20%281994%29%28Libido%29.zip",
    link2: ""
  },
  {
    name: "Life and Death (1992)(Ving - Takeru)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Life%20and%20Death%20%281992%29%28Ving%20-%20Takeru%29.zip",
    link2: ""
  },
  {
    name: "Lightning Bacchus (1989)(NCS - Masnya)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "792.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lightning%20Bacchus%20%281989%29%28NCS%20-%20Masnya%29.zip",
    link2: ""
  },
  {
    name: "Lime Light (1989)(Hypa Soft - Apple Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "402.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lime%20Light%20%281989%29%28Hypa%20Soft%20-%20Apple%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Lipstick Adventure I+II+III (19xx)(Fairytale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lipstick%20Adventure%20I%2BII%2BIII%20%2819xx%29%28Fairytale%29.zip",
    link2: ""
  },
  {
    name: "Little Chinese + (1991)(Takeboo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Little%20Chinese%20%2B%20%281991%29%28Takeboo%29.zip",
    link2: ""
  },
  {
    name: "Lock On I+II+III",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "949.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lock%20On%20I%2BII%2BIII.zip",
    link2: ""
  },
  {
    name: "Lode Runner",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "873.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lode%20Runner.zip",
    link2: ""
  },
  {
    name: "Lodoss Tou Senki",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lodoss%20Tou%20Senki.zip",
    link2: ""
  },
  {
    name: "Long Night Maikochan No Kiken Na Yoru (1991)(Toy Pops)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "386.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Long%20Night%20Maikochan%20No%20Kiken%20Na%20Yoru%20%281991%29%28Toy%20Pops%29.zip",
    link2: ""
  },
  {
    name: "Loop Eraser (1991)(Nichikonren Kikaku)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "676.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Loop%20Eraser%20%281991%29%28Nichikonren%20Kikaku%29.zip",
    link2: ""
  },
  {
    name: "Loopz (199x)(Cygnus)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "341.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Loopz%20%28199x%29%28Cygnus%29.zip",
    link2: ""
  },
  {
    name: "Lot Lot Lot (19xx)(Nakatani Shuuyou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "229.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lot%20Lot%20Lot%20%2819xx%29%28Nakatani%20Shuuyou%29.zip",
    link2: ""
  },
  {
    name: "Lovely Horror Ochame Na Yuurei (19xx)(Zenryuutsuu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "420.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lovely%20Horror%20Ochame%20Na%20Yuurei%20%2819xx%29%28Zenryuutsuu%29.zip",
    link2: ""
  },
  {
    name: "Lua (1993)(Inter Heart)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lua%20%281993%29%28Inter%20Heart%29.zip",
    link2: ""
  },
  {
    name: "Lucky Shot (1990)(Softec)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "292.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lucky%20Shot%20%281990%29%28Softec%29.zip",
    link2: ""
  },
  {
    name: "Lumchan Comike Ni Iku (1990)(Master Piece)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "233.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lumchan%20Comike%20Ni%20Iku%20%281990%29%28Master%20Piece%29.zip",
    link2: ""
  },
  {
    name: "Lumchan No Kawai Sou Monogatari (1988)(Master Piece)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "248.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lumchan%20No%20Kawai%20Sou%20Monogatari%20%281988%29%28Master%20Piece%29.zip",
    link2: ""
  },
  {
    name: "Lunatic Fantasy v2.0 (199x)(Studio Light Cross)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "596.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lunatic%20Fantasy%20v2.0%20%28199x%29%28Studio%20Light%20Cross%29.zip",
    link2: ""
  },
  {
    name: "Luster Squash (1990)(Mugen Kaisha Rana)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "207.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Luster%20Squash%20%281990%29%28Mugen%20Kaisha%20Rana%29.zip",
    link2: ""
  },
  {
    name: "Lyrical Party (1993)(MIX)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "100.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Lyrical%20Party%20%281993%29%28MIX%29.zip",
    link2: ""
  },
  {
    name: "Macross (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "608.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Macross%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Mad Gear (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "151.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mad%20Gear%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Mad Stalker Full Metal Worth (1994)(Family Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mad%20Stalker%20Full%20Metal%20Worth%20%281994%29%28Family%20Soft%29.zip",
    link2: ""
  },
  {
    name: "MAD3",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "312.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/MAD3.zip",
    link2: ""
  },
  {
    name: "Magery No Sekai He Youkoso I-IV (19xx)(Nihon Sennou Club)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Magery%20No%20Sekai%20He%20Youkoso%20I-IV%20%2819xx%29%28Nihon%20Sennou%20Club%29.zip",
    link2: ""
  },
  {
    name: "Magical Crash (1991)(Proceed)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "495.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Magical%20Crash%20%281991%29%28Proceed%29.zip",
    link2: ""
  },
  {
    name: "Magical Shot (1991)(MNM Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "334.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Magical%20Shot%20%281991%29%28MNM%20Software%29.zip",
    link2: ""
  },
  {
    name: "Magritte (1995)(Moai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "505.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Magritte%20%281995%29%28Moai%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Clinic Zoukangou (1991)(Home Data)(Disk 1 of 2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "581.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Clinic%20Zoukangou%20%281991%29%28Home%20Data%29%28Disk%201%20of%202%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Clinic Zoukangou (1991)(Home Data)(Disk 1 of 2)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "581.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Clinic%20Zoukangou%20%281991%29%28Home%20Data%29%28Disk%201%20of%202%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Mahjongg Clinic Zoukangou (1991)(Home Data)(Disk 2 of 2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "808.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Clinic%20Zoukangou%20%281991%29%28Home%20Data%29%28Disk%202%20of%202%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Clinic Zoukangou (1991)(Home Data)(Disk 2 of 2)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "808.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Clinic%20Zoukangou%20%281991%29%28Home%20Data%29%28Disk%202%20of%202%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Mahjongg Gensou Kyoku (1992)(Active)(Disk 1 of 4)(Disk A)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "293.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Gensou%20Kyoku%20%281992%29%28Active%29%28Disk%201%20of%204%29%28Disk%20A%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Gensou Kyoku (1992)(Active)(Disk 2 of 4)(Disk B)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "933.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Gensou%20Kyoku%20%281992%29%28Active%29%28Disk%202%20of%204%29%28Disk%20B%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Gensou Kyoku (1992)(Active)(Disk 3 of 4)(Disk C)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "937.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Gensou%20Kyoku%20%281992%29%28Active%29%28Disk%203%20of%204%29%28Disk%20C%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Gensou Kyoku (1992)(Active)(Disk 4 of 4)(Disk D)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "875.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Gensou%20Kyoku%20%281992%29%28Active%29%28Disk%204%20of%204%29%28Disk%20D%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Kyou Jidai Special (1988)(Micronet)(Disk 1 of 2)(System)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "547.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Kyou%20Jidai%20Special%20%281988%29%28Micronet%29%28Disk%201%20of%202%29%28System%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Kyou Jidai Special (1988)(Micronet)(Disk 2 of 2)(Data)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "618.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Kyou%20Jidai%20Special%20%281988%29%28Micronet%29%28Disk%202%20of%202%29%28Data%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Master (1991)(Allex)(Disk 1 of 5)(Disk A)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "698.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Master%20%281991%29%28Allex%29%28Disk%201%20of%205%29%28Disk%20A%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Master (1991)(Allex)(Disk 2 of 5)(Disk B)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "913.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Master%20%281991%29%28Allex%29%28Disk%202%20of%205%29%28Disk%20B%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Master (1991)(Allex)(Disk 3 of 5)(Disk C)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "837.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Master%20%281991%29%28Allex%29%28Disk%203%20of%205%29%28Disk%20C%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Master (1991)(Allex)(Disk 4 of 5)(Disk D)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,022.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Master%20%281991%29%28Allex%29%28Disk%204%20of%205%29%28Disk%20D%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Master (1991)(Allex)(Disk 5 of 5)(Disk E)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "835.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Master%20%281991%29%28Allex%29%28Disk%205%20of%205%29%28Disk%20E%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Saikyou Musashi (1989)(Cosmos Computer)(Disk 1 of 2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "242.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Saikyou%20Musashi%20%281989%29%28Cosmos%20Computer%29%28Disk%201%20of%202%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Saikyou Musashi (1989)(Cosmos Computer)(Disk 2 of 2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "86.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Saikyou%20Musashi%20%281989%29%28Cosmos%20Computer%29%28Disk%202%20of%202%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Tengoku (1993)(MIX)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "159.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Tengoku%20%281993%29%28MIX%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Yuuenchi (1991)(Home Data)(Disk 1 of 3)(Disk A)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Yuuenchi%20%281991%29%28Home%20Data%29%28Disk%201%20of%203%29%28Disk%20A%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Yuuenchi (1991)(Home Data)(Disk 1 of 3)(Disk A)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Yuuenchi%20%281991%29%28Home%20Data%29%28Disk%201%20of%203%29%28Disk%20A%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Mahjongg Yuuenchi (1991)(Home Data)(Disk 1 of 3)(Disk A)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Yuuenchi%20%281991%29%28Home%20Data%29%28Disk%201%20of%203%29%28Disk%20A%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Mahjongg Yuuenchi (1991)(Home Data)(Disk 2 of 3)(Disk B)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,023.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Yuuenchi%20%281991%29%28Home%20Data%29%28Disk%202%20of%203%29%28Disk%20B%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Yuuenchi (1991)(Home Data)(Disk 2 of 3)(Disk B)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,021.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Yuuenchi%20%281991%29%28Home%20Data%29%28Disk%202%20of%203%29%28Disk%20B%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Mahjongg Yuuenchi (1991)(Home Data)(Disk 2 of 3)(Disk B)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,021.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Yuuenchi%20%281991%29%28Home%20Data%29%28Disk%202%20of%203%29%28Disk%20B%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Mahjongg Yuuenchi (1991)(Home Data)(Disk 3 of 3)(Disk C)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Yuuenchi%20%281991%29%28Home%20Data%29%28Disk%203%20of%203%29%28Disk%20C%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg Yuuenchi (1991)(Home Data)(Disk 3 of 3)(Disk C)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Yuuenchi%20%281991%29%28Home%20Data%29%28Disk%203%20of%203%29%28Disk%20C%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Mahjongg Yuuenchi (1991)(Home Data)(Disk 3 of 3)(Disk C)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahjongg%20Yuuenchi%20%281991%29%28Home%20Data%29%28Disk%203%20of%203%29%28Disk%20C%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Mahou Daisakusen (1994)(Electronic Arts - Victor)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahou%20Daisakusen%20%281994%29%28Electronic%20Arts%20-%20Victor%29.zip",
    link2: ""
  },
  {
    name: "Mahou No Kuni No Hoippuru turbo-X (1995)(Pastel Hope)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "333.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahou%20No%20Kuni%20No%20Hoippuru%20turbo-X%20%281995%29%28Pastel%20Hope%29.zip",
    link2: ""
  },
  {
    name: "Mahou No Senshi Physical Melon (1994)(Leone)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahou%20No%20Senshi%20Physical%20Melon%20%281994%29%28Leone%29.zip",
    link2: ""
  },
  {
    name: "Mahou No Shooter Puti'n Plin",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mahou%20No%20Shooter%20Puti%27n%20Plin.zip",
    link2: ""
  },
  {
    name: "Mai (1992)(Fairytale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mai%20%281992%29%28Fairytale%29.zip",
    link2: ""
  },
  {
    name: "Maison Ikkoku Kanketsuhen Special (1989)(Micro Cabin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Maison%20Ikkoku%20Kanketsuhen%20Special%20%281989%29%28Micro%20Cabin%29.zip",
    link2: ""
  },
  {
    name: "Majinguu (1987)(Xain Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "352.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Majinguu%20%281987%29%28Xain%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Majo Halldra No Yabou (1993)(Moai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "490.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Majo%20Halldra%20No%20Yabou%20%281993%29%28Moai%29.zip",
    link2: ""
  },
  {
    name: "Makenshi Kumiko (19xx)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "736.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Makenshi%20Kumiko%20%2819xx%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Man I Love, The (19xx)(Thinking Rabbit)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "726.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Man%20I%20Love%2C%20The%20%2819xx%29%28Thinking%20Rabbit%29.zip",
    link2: ""
  },
  {
    name: "Mappy",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "861.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mappy.zip",
    link2: ""
  },
  {
    name: "Marble Madness (1991)(Home Data)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "430.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Marble%20Madness%20%281991%29%28Home%20Data%29.zip",
    link2: ""
  },
  {
    name: "Marble Magic (1994)(Rats Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "474.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Marble%20Magic%20%281994%29%28Rats%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Marble Panic (1994)(Studio KS - Rats Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "329.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Marble%20Panic%20%281994%29%28Studio%20KS%20-%20Rats%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Marble Reverser I+II (1992)(Studio Pickles)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "392.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Marble%20Reverser%20I%2BII%20%281992%29%28Studio%20Pickles%29.zip",
    link2: ""
  },
  {
    name: "Marble Reverser v1.0 (1992)(Studio Pickles)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "100.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Marble%20Reverser%20v1.0%20%281992%29%28Studio%20Pickles%29.zip",
    link2: ""
  },
  {
    name: "Marchen Maze",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Marchen%20Maze.zip",
    link2: ""
  },
  {
    name: "Marchen Paradise (1990)(Great)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "733.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Marchen%20Paradise%20%281990%29%28Great%29.zip",
    link2: ""
  },
  {
    name: "Marine Buster (1993)(Silky's)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Marine%20Buster%20%281993%29%28Silky%27s%29.zip",
    link2: ""
  },
  {
    name: "Mario Bros. (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "608.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mario%20Bros.%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Maririn DX (1994)(Jast)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Maririn%20DX%20%281994%29%28Jast%29.zip",
    link2: ""
  },
  {
    name: "Marmalade Bomb (1995)(Pastel Koubou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "899.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Marmalade%20Bomb%20%281995%29%28Pastel%20Koubou%29.zip",
    link2: ""
  },
  {
    name: "Marss (1989)(Degauss - Mugen Kaisha Rana)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "280.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Marss%20%281989%29%28Degauss%20-%20Mugen%20Kaisha%20Rana%29.zip",
    link2: ""
  },
  {
    name: "Martial Age (1992)(Tenshindou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Martial%20Age%20%281992%29%28Tenshindou%29.zip",
    link2: ""
  },
  {
    name: "Masayochan Peeping Shot! Vol. 1 (19xx)(Onoe Network)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "913.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Masayochan%20Peeping%20Shot%21%20Vol.%201%20%2819xx%29%28Onoe%20Network%29.zip",
    link2: ""
  },
  {
    name: "Master of Monsters II (1992)(System Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Master%20of%20Monsters%20II%20%281992%29%28System%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Mayumi (1992)(Cocktail Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mayumi%20%281992%29%28Cocktail%20Soft%29.zip",
    link2: ""
  },
  {
    name: "MCHA (1991)(FNeW)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "315.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/MCHA%20%281991%29%28FNeW%29.zip",
    link2: ""
  },
  {
    name: "Me No Sakkaku Honken Program (1992)(IJI Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "560.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Me%20No%20Sakkaku%20Honken%20Program%20%281992%29%28IJI%20Team%29.zip",
    link2: ""
  },
  {
    name: "Mega Powerful Jangken Pro-68K v1.05 (1992)(Gainen Shuppon)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "500.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mega%20Powerful%20Jangken%20Pro-68K%20v1.05%20%281992%29%28Gainen%20Shuppon%29.zip",
    link2: ""
  },
  {
    name: "Megalomania (1993)(Imagineer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "922.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Megalomania%20%281993%29%28Imagineer%29.zip",
    link2: ""
  },
  {
    name: "Megami De Pon (1995)(DCS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "952.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Megami%20De%20Pon%20%281995%29%28DCS%29.zip",
    link2: ""
  },
  {
    name: "Meisaku Rouman Bunko Neji Shiki (19xx)(Zeit)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Meisaku%20Rouman%20Bunko%20Neji%20Shiki%20%2819xx%29%28Zeit%29.zip",
    link2: ""
  },
  {
    name: "Memory Broken (1989)(Fukuiinchou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "327.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Memory%20Broken%20%281989%29%28Fukuiinchou%29.zip",
    link2: ""
  },
  {
    name: "Mercury (19xx)(Maxima)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "972.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mercury%20%2819xx%29%28Maxima%29.zip",
    link2: ""
  },
  {
    name: "Metal Eye (199x)(Elf)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Metal%20Eye%20%28199x%29%28Elf%29.zip",
    link2: ""
  },
  {
    name: "Metal Sight (1989)(System Sacom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Metal%20Sight%20%281989%29%28System%20Sacom%29.zip",
    link2: ""
  },
  {
    name: "Metal Unit I+II (1994)(T&H Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Metal%20Unit%20I%2BII%20%281994%29%28T%26H%20Project%29.zip",
    link2: ""
  },
  {
    name: "Mid-Garts + Gold (1989)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mid-Garts%20%2B%20Gold%20%281989%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Mikkun Fly! (1991)(Brace)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "265.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mikkun%20Fly%21%20%281991%29%28Brace%29.zip",
    link2: ""
  },
  {
    name: "Milk Time (1991)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Milk%20Time%20%281991%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Million Shot (1993)(IJI Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "352.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Million%20Shot%20%281993%29%28IJI%20Team%29.zip",
    link2: ""
  },
  {
    name: "Minami No Hiroshi No Eigo Kyoushitsu v2.0 (1989)(Todo2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "519.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Minami%20No%20Hiroshi%20No%20Eigo%20Kyoushitsu%20v2.0%20%281989%29%28Todo2%29.zip",
    link2: ""
  },
  {
    name: "Mirage (1992)(Discovery Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mirage%20%281992%29%28Discovery%20Software%29.zip",
    link2: ""
  },
  {
    name: "Mission For Adult",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mission%20For%20Adult.zip",
    link2: ""
  },
  {
    name: "Missle Command",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "573.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Missle%20Command.zip",
    link2: ""
  },
  {
    name: "Misty 68K I-VII",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Misty%2068K%20I-VII.zip",
    link2: ""
  },
  {
    name: "Mobile Suit Gundam Classic Operation (1991)(Family Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "806.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mobile%20Suit%20Gundam%20Classic%20Operation%20%281991%29%28Family%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Mogu (1990)(Phoenix)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "460.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mogu%20%281990%29%28Phoenix%29.zip",
    link2: ""
  },
  {
    name: "Mogura Attacker (1990)(Project Makkusu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "226.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mogura%20Attacker%20%281990%29%28Project%20Makkusu%29.zip",
    link2: ""
  },
  {
    name: "Mokona In Space (1995)(68 Bank)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "590.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mokona%20In%20Space%20%281995%29%2868%20Bank%29.zip",
    link2: ""
  },
  {
    name: "Molo-Q (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "156.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Molo-Q%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Momotarou Densetsu (1988)(Hudson Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Momotarou%20Densetsu%20%281988%29%28Hudson%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Momotarou I+II+III (1989)(Todo2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Momotarou%20I%2BII%2BIII%20%281989%29%28Todo2%29.zip",
    link2: ""
  },
  {
    name: "Mon Mon Shinkei Suijaku I+II+III+Ex (1989)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mon%20Mon%20Shinkei%20Suijaku%20I%2BII%2BIII%2BEx%20%281989%29.zip",
    link2: ""
  },
  {
    name: "Money Heisei 1, 2 Nendo Han (1993)(Dream Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "245.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Money%20Heisei%201%2C%202%20Nendo%20Han%20%281993%29%28Dream%20Project%29.zip",
    link2: ""
  },
  {
    name: "Monster Panic (19xx)(IT)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "92.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Monster%20Panic%20%2819xx%29%28IT%29.zip",
    link2: ""
  },
  {
    name: "Moon Cresta & Terra Cresta (1992)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "250.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Moon%20Cresta%20%26%20Terra%20Cresta%20%281992%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Moon Light Chan Rin Shan (1993)(DO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Moon%20Light%20Chan%20Rin%20Shan%20%281993%29%28DO%29.zip",
    link2: ""
  },
  {
    name: "Moon-Crystal (1992)(Orange House)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Moon-Crystal%20%281992%29%28Orange%20House%29.zip",
    link2: ""
  },
  {
    name: "Moria v4.87 (19xx)(Kobayashi Kenichi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "202.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Moria%20v4.87%20%2819xx%29%28Kobayashi%20Kenichi%29.zip",
    link2: ""
  },
  {
    name: "Morita Shougi II (1989)(Enix)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "310.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Morita%20Shougi%20II%20%281989%29%28Enix%29.zip",
    link2: ""
  },
  {
    name: "Moritan Othello v6.1 (1986)(Morita Kazurou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "56.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Moritan%20Othello%20v6.1%20%281986%29%28Morita%20Kazurou%29.zip",
    link2: ""
  },
  {
    name: "Motos (1989)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "241.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Motos%20%281989%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Mou Ichido Aoune v1.01 (1995)(TAU Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "179.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mou%20Ichido%20Aoune%20v1.01%20%281995%29%28TAU%20Software%29.zip",
    link2: ""
  },
  {
    name: "Mr. Do! & Mr. Do! vs Unicorns (1994)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "527.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mr.%20Do%21%20%26%20Mr.%20Do%21%20vs%20Unicorns%20%281994%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Mugen Senshi Valis II (1989)(Telenet)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mugen%20Senshi%20Valis%20II%20%281989%29%28Telenet%29.zip",
    link2: ""
  },
  {
    name: "Multiword (19xx)(Sharp)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Multiword%20%2819xx%29%28Sharp%29.zip",
    link2: ""
  },
  {
    name: "My Eyes (199x)(Birdy Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/My%20Eyes%20%28199x%29%28Birdy%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Mystery House (1989)(Imai Takashi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "83.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Mystery%20House%20%281989%29%28Imai%20Takashi%29.zip",
    link2: ""
  },
  {
    name: "Nageyari Sensha Kassen (19xx)(NWK)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "248.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nageyari%20Sensha%20Kassen%20%2819xx%29%28NWK%29.zip",
    link2: ""
  },
  {
    name: "Naious (1990)(Exact)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "932.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Naious%20%281990%29%28Exact%29.zip",
    link2: ""
  },
  {
    name: "Namachuukei 68 (1991)(Konami)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "972.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Namachuukei%2068%20%281991%29%28Konami%29.zip",
    link2: ""
  },
  {
    name: "Naniwa Do Konjou Series Bangaihen Nouten Chokudake! I+II+III",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Naniwa%20Do%20Konjou%20Series%20Bangaihen%20Nouten%20Chokudake%21%20I%2BII%2BIII.zip",
    link2: ""
  },
  {
    name: "Nazo No Rooguu Shuu (19xx)(Team-ms)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "142.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nazo%20No%20Rooguu%20Shuu%20%2819xx%29%28Team-ms%29.zip",
    link2: ""
  },
  {
    name: "Nectaris (1992)(System Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "459.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nectaris%20%281992%29%28System%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Nekketsu Koukou Dodgeball Bu + Soccer Hen (1990)(Sharp - SPS",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nekketsu%20Koukou%20Dodgeball%20Bu%20%2B%20Soccer%20Hen%20%281990%29%28Sharp%20-%20SPS.zip",
    link2: ""
  },
  {
    name: "Nemesis",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nemesis.zip",
    link2: ""
  },
  {
    name: "Nervous Black Jack v2.00 (1992)(T.O.F.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "397.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nervous%20Black%20Jack%20v2.00%20%281992%29%28T.O.F.%29.zip",
    link2: ""
  },
  {
    name: "Neural Gear (1990)(Crossmedia)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "650.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Neural%20Gear%20%281990%29%28Crossmedia%29.zip",
    link2: ""
  },
  {
    name: "New Bokosuka Wars (19xx)(Salt)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "601.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/New%20Bokosuka%20Wars%20%2819xx%29%28Salt%29.zip",
    link2: ""
  },
  {
    name: "New Zealand Story, The (1989)(Sharp - SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "552.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/New%20Zealand%20Story%2C%20The%20%281989%29%28Sharp%20-%20SPS%29.zip",
    link2: ""
  },
  {
    name: "Nice Jan (19xx)(Todo2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "404.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nice%20Jan%20%2819xx%29%28Todo2%29.zip",
    link2: ""
  },
  {
    name: "Nicoll (1990)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "513.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nicoll%20%281990%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Niko Niko (1991)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "565.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Niko%20Niko%20%281991%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Ninin Battle (1990)(Takeru)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "308.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ninin%20Battle%20%281990%29%28Takeru%29.zip",
    link2: ""
  },
  {
    name: "Nise Dragon Quest V (19xx)(Pasokon Yuushi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "914.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nise%20Dragon%20Quest%20V%20%2819xx%29%28Pasokon%20Yuushi%29.zip",
    link2: ""
  },
  {
    name: "Nishisansou Tetris (1990)(NST)[take version]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "148.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nishisansou%20Tetris%20%281990%29%28NST%29%5Btake%20version%5D.zip",
    link2: ""
  },
  {
    name: "Noah (1992)(MNM Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "273.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Noah%20%281992%29%28MNM%20Software%29.zip",
    link2: ""
  },
  {
    name: "Noble Mind (1991)(Alfa System)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Noble%20Mind%20%281991%29%28Alfa%20System%29.zip",
    link2: ""
  },
  {
    name: "Nobunaga No Yabou +(1991)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nobunaga%20No%20Yabou%20%2B%281991%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Noriko Tobimasu (1989)(A.H.S.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "397.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Noriko%20Tobimasu%20%281989%29%28A.H.S.%29.zip",
    link2: ""
  },
  {
    name: "Nostalgia 1907 (1991)(Sur De' Wave)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nostalgia%201907%20%281991%29%28Sur%20De%27%20Wave%29.zip",
    link2: ""
  },
  {
    name: "Nouten Densetsu (1993)(Iron Gear)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "613.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nouten%20Densetsu%20%281993%29%28Iron%20Gear%29.zip",
    link2: ""
  },
  {
    name: "Nova (19xx)(Kazuki)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "172.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nova%20%2819xx%29%28Kazuki%29.zip",
    link2: ""
  },
  {
    name: "Nyanko Sweeper (19xx)(Mackun)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "98.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Nyanko%20Sweeper%20%2819xx%29%28Mackun%29.zip",
    link2: ""
  },
  {
    name: "Oh! Hajiki! (19xx)(Maru)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "95.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Oh%21%20Hajiki%21%20%2819xx%29%28Maru%29.zip",
    link2: ""
  },
  {
    name: "Oh! Pai (199x)(Silky's)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Oh%21%20Pai%20%28199x%29%28Silky%27s%29.zip",
    link2: ""
  },
  {
    name: "Ohootsuku Ni Kiyu (19xx)(Login)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "336.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ohootsuku%20Ni%20Kiyu%20%2819xx%29%28Login%29.zip",
    link2: ""
  },
  {
    name: "Okumanchouja (19xx)(Cosmos Computer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "254.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Okumanchouja%20%2819xx%29%28Cosmos%20Computer%29.zip",
    link2: ""
  },
  {
    name: "Olteus II (1991)(Winky Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "830.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Olteus%20II%20%281991%29%28Winky%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Ooedo Hanseiki (19xx)(Panther Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ooedo%20Hanseiki%20%2819xx%29%28Panther%20Software%29.zip",
    link2: ""
  },
  {
    name: "Orange Iro No Biyaku (1989)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "202.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Orange%20Iro%20No%20Biyaku%20%281989%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "OraShooter",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/OraShooter.zip",
    link2: ""
  },
  {
    name: "Original Games (2001)(Tau Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "629.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Original%20Games%20%282001%29%28Tau%20Software%29.zip",
    link2: ""
  },
  {
    name: "Otako Dama (1999)(Mitsuky)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Otako%20Dama%20%281999%29%28Mitsuky%29.zip",
    link2: ""
  },
  {
    name: "OTOKO100",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "520.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/OTOKO100.zip",
    link2: ""
  },
  {
    name: "Ougon No Buta (19xx)(Shoujo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "284.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ougon%20No%20Buta%20%2819xx%29%28Shoujo%29.zip",
    link2: ""
  },
  {
    name: "Ougon No Rashinban (1989)(Riverhill Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ougon%20No%20Rashinban%20%281989%29%28Riverhill%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Overtake (1992)(Zoom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Overtake%20%281992%29%28Zoom%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pac-Man.zip",
    link2: ""
  },
  {
    name: "Pachinko World (1992)(Gigc Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "418.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pachinko%20World%20%281992%29%28Gigc%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Pachisuro Divels XX",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "475.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pachisuro%20Divels%20XX%20.zip",
    link2: ""
  },
  {
    name: "Pai Koukan Kyou Kou Kan Nakoruru Hen (1994)(Nihon Sennou Club)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "905.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pai%20Koukan%20Kyou%20Kou%20Kan%20Nakoruru%20Hen%20%281994%29%28Nihon%20Sennou%20Club%29.zip",
    link2: ""
  },
  {
    name: "Parodius Da! (1991)(Konami)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Parodius%20Da%21%20%281991%29%28Konami%29.zip",
    link2: ""
  },
  {
    name: "Paroran",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "934.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Paroran.zip",
    link2: ""
  },
  {
    name: "Parsec",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "399.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Parsec.zip",
    link2: ""
  },
  {
    name: "Partial_Axiom",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "969.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Partial_Axiom.zip",
    link2: ""
  },
  {
    name: "Paruru (199x)(Maimu Koubou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "642.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Paruru%20%28199x%29%28Maimu%20Koubou%29.zip",
    link2: ""
  },
  {
    name: "Pasocomic Purple Cat I+III (1993)(Palm Tree Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pasocomic%20Purple%20Cat%20I%2BIII%20%281993%29%28Palm%20Tree%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Patariro! Game (19xx)(68 Bank)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "658.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Patariro%21%20Game%20%2819xx%29%2868%20Bank%29.zip",
    link2: ""
  },
  {
    name: "Pensan CD (1992)(Tanaka Yuu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "139.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pensan%20CD%20%281992%29%28Tanaka%20Yuu%29.zip",
    link2: ""
  },
  {
    name: "Pentaris (1990)(Phoenix)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "177.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pentaris%20%281990%29%28Phoenix%29.zip",
    link2: ""
  },
  {
    name: "Peshi Peshi Puzzle (199x)(To.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "666.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Peshi%20Peshi%20Puzzle%20%28199x%29%28To.%29.zip",
    link2: ""
  },
  {
    name: "Peshi Peshi Puzzle 2 (199x)(To.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "842.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Peshi%20Peshi%20Puzzle%202%20%28199x%29%28To.%29.zip",
    link2: ""
  },
  {
    name: "Phalanx",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Phalanx.zip",
    link2: ""
  },
  {
    name: "Phantasie III+IV",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Phantasie%20III%2BIV.zip",
    link2: ""
  },
  {
    name: "Phoneix Quiz Slime King Wo Hari Sakase (1990)(Phoenix)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "353.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Phoneix%20Quiz%20Slime%20King%20Wo%20Hari%20Sakase%20%281990%29%28Phoenix%29.zip",
    link2: ""
  },
  {
    name: "Pias (19xx)(Birdy Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pias%20%2819xx%29%28Birdy%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Pinball (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "610.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pinball%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Pinball Pinball (1990)(Softec)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "387.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pinball%20Pinball%20%281990%29%28Softec%29.zip",
    link2: ""
  },
  {
    name: "Pinky 1 (1990)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pinky%201%20%281990%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Pinky Ponky I+II+III",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pinky%20Ponky%20I%2BII%2BIII.zip",
    link2: ""
  },
  {
    name: "Pipe Dream (1989)(BPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,010.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pipe%20Dream%20%281989%29%28BPS%29.zip",
    link2: ""
  },
  {
    name: "Pipyan (1990)(MNM Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "303.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pipyan%20%281990%29%28MNM%20Software%29.zip",
    link2: ""
  },
  {
    name: "Pitapat (1992)(Victor)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pitapat%20%281992%29%28Victor%29.zip",
    link2: ""
  },
  {
    name: "Pizza Busters (19xx)(XYZ)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "123.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pizza%20Busters%20%2819xx%29%28XYZ%29.zip",
    link2: ""
  },
  {
    name: "Planet Investor v1.0 (1993)(N.Y. Spirits)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "436.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Planet%20Investor%20v1.0%20%281993%29%28N.Y.%20Spirits%29.zip",
    link2: ""
  },
  {
    name: "Plesea (1990)(SPC Tropical Plan)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "158.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Plesea%20%281990%29%28SPC%20Tropical%20Plan%29.zip",
    link2: ""
  },
  {
    name: "Poker Sisters Gold (1989)(MGR Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "563.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Poker%20Sisters%20Gold%20%281989%29%28MGR%20Software%29.zip",
    link2: ""
  },
  {
    name: "Pole To Win (1992)(MIX)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "117.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pole%20To%20Win%20%281992%29%28MIX%29.zip",
    link2: ""
  },
  {
    name: "Ponyon (1992)(Ponytail Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ponyon%20%281992%29%28Ponytail%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Pop Card (1990)(Studio Theta)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "237.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pop%20Card%20%281990%29%28Studio%20Theta%29.zip",
    link2: ""
  },
  {
    name: "Popjack (1994)(DCS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "954.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Popjack%20%281994%29%28DCS%29.zip",
    link2: ""
  },
  {
    name: "Populous I+II (Imagineer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Populous%20I%2BII%20%28Imagineer%29.zip",
    link2: ""
  },
  {
    name: "Populous Promised Land (19xx)(Imagineer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "229.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Populous%20Promised%20Land%20%2819xx%29%28Imagineer%29.zip",
    link2: ""
  },
  {
    name: "Porolith (1990)(Ko.mo.mo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "150.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Porolith%20%281990%29%28Ko.mo.mo%29.zip",
    link2: ""
  },
  {
    name: "Port Tower Monogatari (1991)(Brings Onion Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "797.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Port%20Tower%20Monogatari%20%281991%29%28Brings%20Onion%20Software%29.zip",
    link2: ""
  },
  {
    name: "Potton (1991)(Sprite)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "248.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Potton%20%281991%29%28Sprite%29.zip",
    link2: ""
  },
  {
    name: "Power League (1988)(Hudson)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "185.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Power%20League%20%281988%29%28Hudson%29.zip",
    link2: ""
  },
  {
    name: "Power Racing (1993)(Mashita Katsuaki)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "136.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Power%20Racing%20%281993%29%28Mashita%20Katsuaki%29.zip",
    link2: ""
  },
  {
    name: "Powermonger (1991)(Imagineer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "893.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Powermonger%20%281991%29%28Imagineer%29.zip",
    link2: ""
  },
  {
    name: "Premium I+II (199x)(Silky's)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Premium%20I%2BII%20%28199x%29%28Silky%27s%29.zip",
    link2: ""
  },
  {
    name: "Present I+II (1991)(Orange House)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Present%20I%2BII%20%281991%29%28Orange%20House%29.zip",
    link2: ""
  },
  {
    name: "Pretty Doll (1991)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pretty%20Doll%20%281991%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Prince & Princess (1990)(T&H Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "420.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Prince%20%26%20Princess%20%281990%29%28T%26H%20Project%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia (1991)(Broderbund)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Prince%20of%20Persia%20%281991%29%28Broderbund%29.zip",
    link2: ""
  },
  {
    name: "Princess Bingo (19xx)(User So)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "519.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Princess%20Bingo%20%2819xx%29%28User%20So%29.zip",
    link2: ""
  },
  {
    name: "Princess Ha Street Girl (19xx)(Zenryuutsuu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "481.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Princess%20Ha%20Street%20Girl%20%2819xx%29%28Zenryuutsuu%29.zip",
    link2: ""
  },
  {
    name: "Pro Soccer 68 (1991)(Anco)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "311.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pro%20Soccer%2068%20%281991%29%28Anco%29.zip",
    link2: ""
  },
  {
    name: "Pro Student G (1993)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pro%20Student%20G%20%281993%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Pro Tennis World Court (1990)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "689.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pro%20Tennis%20World%20Court%20%281990%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "Pro Yakkyuu World Stadium (1990)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "745.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Pro%20Yakkyuu%20World%20Stadium%20%281990%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "Production Manager (1989)(Compac)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "957.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Production%20Manager%20%281989%29%28Compac%29.zip",
    link2: ""
  },
  {
    name: "Professional Mahjongg Gokuu (1988)(Chatnoir)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "162.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Professional%20Mahjongg%20Gokuu%20%281988%29%28Chatnoir%29.zip",
    link2: ""
  },
  {
    name: "Profit (1994)(DSN-9)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "464.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Profit%20%281994%29%28DSN-9%29.zip",
    link2: ""
  },
  {
    name: "Project D.H.N. Vol. I+II+III (1993)(D.H.N.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Project%20D.H.N.%20Vol.%20I%2BII%2BIII%20%281993%29%28D.H.N.%29.zip",
    link2: ""
  },
  {
    name: "projectmoon",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "399.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/projectmoon.zip",
    link2: ""
  },
  {
    name: "Prostitute Maker (1993)(T&H Project)(Disk 1 of 2)(Disk A)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "901.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Prostitute%20Maker%20%281993%29%28T%26H%20Project%29%28Disk%201%20of%202%29%28Disk%20A%29.zip",
    link2: ""
  },
  {
    name: "Prostitute Maker (1993)(T&H Project)(Disk 2 of 2)(Disk B)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "601.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Prostitute%20Maker%20%281993%29%28T%26H%20Project%29%28Disk%202%20of%202%29%28Disk%20B%29.zip",
    link2: ""
  },
  {
    name: "Proth 68K (1989)(Metadyne)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "132.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Proth%2068K%20%281989%29%28Metadyne%29.zip",
    link2: ""
  },
  {
    name: "Prototype Fighter Assault Buster (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "176.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Prototype%20Fighter%20Assault%20Buster%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Psycho Harrier (1990)(Koumajutsu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "292.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Psycho%20Harrier%20%281990%29%28Koumajutsu%29.zip",
    link2: ""
  },
  {
    name: "Puchi Puchi Pro-68K (1990)(Hazama Kuroo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "133.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Puchi%20Puchi%20Pro-68K%20%281990%29%28Hazama%20Kuroo%29.zip",
    link2: ""
  },
  {
    name: "Punincess Maker (1992)(Oguchin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "772.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Punincess%20Maker%20%281992%29%28Oguchin%29.zip",
    link2: ""
  },
  {
    name: "Puppet Show (19xx)(Artist Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "346.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Puppet%20Show%20%2819xx%29%28Artist%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Puru Puru Paradise (199x)(Palm Tree Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Puru%20Puru%20Paradise%20%28199x%29%28Palm%20Tree%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Push Bon! (1994)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "305.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Push%20Bon%21%20%281994%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Puyo Puyo (1994)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "622.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Puyo%20Puyo%20%281994%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "Puzzle (1991)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "310.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Puzzle%20%281991%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Puzznick (1990)(Broderbund)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "368.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Puzznick%20%281990%29%28Broderbund%29.zip",
    link2: ""
  },
  {
    name: "Quarter Staff The Tomb of The Setmoth (1991)(Starcraft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "982.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quarter%20Staff%20The%20Tomb%20of%20The%20Setmoth%20%281991%29%28Starcraft%29.zip",
    link2: ""
  },
  {
    name: "Quarth (1990)(Konami)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "280.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quarth%20%281990%29%28Konami%29.zip",
    link2: ""
  },
  {
    name: "Queen of Duelists Gaiden Alpha+ (1994)(Agumix)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Queen%20of%20Duelists%20Gaiden%20Alpha%2B%20%281994%29%28Agumix%29.zip",
    link2: ""
  },
  {
    name: "Quest Question (1994)(Phank's)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quest%20Question%20%281994%29%28Phank%27s%29.zip",
    link2: ""
  },
  {
    name: "Questland Stories (1990)(OS Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "424.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Questland%20Stories%20%281990%29%28OS%20Software%29.zip",
    link2: ""
  },
  {
    name: "Quieazum 2 Haja No Jouken (1992)(Biwahosi Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "511.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quieazum%202%20Haja%20No%20Jouken%20%281992%29%28Biwahosi%20Software%29.zip",
    link2: ""
  },
  {
    name: "Quieazum Biwahoshi Quiz System (1991)(Biwahosi Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quieazum%20Biwahoshi%20Quiz%20System%20%281991%29%28Biwahosi%20Software%29.zip",
    link2: ""
  },
  {
    name: "Quieazum DCS (1993)(DCS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "620.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quieazum%20DCS%20%281993%29%28DCS%29.zip",
    link2: ""
  },
  {
    name: "Quintia Road (1991)(Great)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quintia%20Road%20%281991%29%28Great%29.zip",
    link2: ""
  },
  {
    name: "Quiz Bocchama Paradise (1994)(Ushi Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20Bocchama%20Paradise%20%281994%29%28Ushi%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Quiz Cult X (1992)(UOD Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "237.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20Cult%20X%20%281992%29%28UOD%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Quiz De Pon (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20De%20Pon%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Quiz Fighter Hyakumanjin No Quiz Yarou (1992)(Iron Gear)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "318.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20Fighter%20Hyakumanjin%20No%20Quiz%20Yarou%20%281992%29%28Iron%20Gear%29.zip",
    link2: ""
  },
  {
    name: "Quiz Hao (1992)(Active)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20Hao%20%281992%29%28Active%29.zip",
    link2: ""
  },
  {
    name: "Quiz Jan! (1990)(Todo2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "338.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20Jan%21%20%281990%29%28Todo2%29.zip",
    link2: ""
  },
  {
    name: "Quiz Jigoku No Tokkun (19xx)(NSC)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "543.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20Jigoku%20No%20Tokkun%20%2819xx%29%28NSC%29.zip",
    link2: ""
  },
  {
    name: "Quiz Jockey (1995)(Midy House)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "642.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20Jockey%20%281995%29%28Midy%20House%29.zip",
    link2: ""
  },
  {
    name: "Quiz Mangaka No Yabou (199x)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "160.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20Mangaka%20No%20Yabou%20%28199x%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Quiz Sniper (1990)(Masqurade)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "448.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20Sniper%20%281990%29%28Masqurade%29.zip",
    link2: ""
  },
  {
    name: "Quiz Torimonochou (1992)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "393.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Quiz%20Torimonochou%20%281992%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "R+R",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/R%2BR.zip",
    link2: ""
  },
  {
    name: "R-Type (1989)(Irem)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "371.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/R-Type%20%281989%29%28Irem%29.zip",
    link2: ""
  },
  {
    name: "R.C. Robot Construction",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/R.C.%20Robot%20Construction.zip",
    link2: ""
  },
  {
    name: "R3 Golf (19xx)(Black FTZ)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "965.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/R3%20Golf%20%2819xx%29%28Black%20FTZ%29.zip",
    link2: ""
  },
  {
    name: "Raguna (1990)(Azuma Development)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "564.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Raguna%20%281990%29%28Azuma%20Development%29.zip",
    link2: ""
  },
  {
    name: "Rally-X (1988)(IT)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "250.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Rally-X%20%281988%29%28IT%29.zip",
    link2: ""
  },
  {
    name: "Ramune Club v1.50 (1991)(Mog-Net)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "271.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ramune%20Club%20v1.50%20%281991%29%28Mog-Net%29.zip",
    link2: ""
  },
  {
    name: "Rance I+II+III(1991)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "8.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Rance%20I%2BII%2BIII%281991%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Ranmaru (1992)(Fairytale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ranmaru%20%281992%29%28Fairytale%29.zip",
    link2: ""
  },
  {
    name: "Ray Gun (1990)(Elf)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ray%20Gun%20%281990%29%28Elf%29.zip",
    link2: ""
  },
  {
    name: "Rayer Shoot",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Rayer%20Shoot.zip",
    link2: ""
  },
  {
    name: "Red Arms (1990)(Nishi Yoshitaka)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "100.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Red%20Arms%20%281990%29%28Nishi%20Yoshitaka%29.zip",
    link2: ""
  },
  {
    name: "Red Arms (199x)(Miso)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "125.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Red%20Arms%20%28199x%29%28Miso%29.zip",
    link2: ""
  },
  {
    name: "Refresh! (1990)(Iron Gear)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "884.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Refresh%21%20%281990%29%28Iron%20Gear%29.zip",
    link2: ""
  },
  {
    name: "Reichsritter (1991)(Enix)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Reichsritter%20%281991%29%28Enix%29.zip",
    link2: ""
  },
  {
    name: "Reinforcer (1990)(Zain Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Reinforcer%20%281990%29%28Zain%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Relics Ankoku Yousai (19xx)(Bothec)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "488.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Relics%20Ankoku%20Yousai%20%2819xx%29%28Bothec%29.zip",
    link2: ""
  },
  {
    name: "Reserve (1991)(MIX)(Disk 1 of 2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "635.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Reserve%20%281991%29%28MIX%29%28Disk%201%20of%202%29.zip",
    link2: ""
  },
  {
    name: "Return of Ishtar, The (1989)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "230.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Return%20of%20Ishtar%2C%20The%20%281989%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "Review Jashin Fukkastu (1991)(Orange House)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Review%20Jashin%20Fukkastu%20%281991%29%28Orange%20House%29.zip",
    link2: ""
  },
  {
    name: "Riiya Densetsu (199x)(Pasoket)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "466.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Riiya%20Densetsu%20%28199x%29%28Pasoket%29.zip",
    link2: ""
  },
  {
    name: "Ring Master I+II (19xx)(Hobby Japan)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ring%20Master%20I%2BII%20%2819xx%29%28Hobby%20Japan%29.zip",
    link2: ""
  },
  {
    name: "Rinne Tensei Reversible Game Tanba (1988)(Micronet)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "706.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Rinne%20Tensei%20Reversible%20Game%20Tanba%20%281988%29%28Micronet%29.zip",
    link2: ""
  },
  {
    name: "Ripobitan Disk Ace (1994)(Toukyou Kogei Daigaku Programming Kenkyuutai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "489.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ripobitan%20Disk%20Ace%20%281994%29%28Toukyou%20Kogei%20Daigaku%20Programming%20Kenkyuutai%29.zip",
    link2: ""
  },
  {
    name: "Rising Sun (199x)(Crossmedia)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Rising%20Sun%20%28199x%29%28Crossmedia%29.zip",
    link2: ""
  },
  {
    name: "Roll Down 2 (1990)(A Kyuu Kid's)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "169.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Roll%20Down%202%20%281990%29%28A%20Kyuu%20Kid%27s%29.zip",
    link2: ""
  },
  {
    name: "Rotate (1990)(Annandule Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "975.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Rotate%20%281990%29%28Annandule%20Project%29.zip",
    link2: ""
  },
  {
    name: "Rotation (1991)(Dolphin Game Studio)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Rotation%20%281991%29%28Dolphin%20Game%20Studio%29.zip",
    link2: ""
  },
  {
    name: "Rouge (19xx)(Birdy Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,022.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Rouge%20%2819xx%29%28Birdy%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Royal Blood (19xx)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Royal%20Blood%20%2819xx%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Rune Worth Kokui No Kikoushi (1990)(T&E Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Rune%20Worth%20Kokui%20No%20Kikoushi%20%281990%29%28T%26E%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Ryu Naki No Ryuu Yori (1991)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ryu%20Naki%20No%20Ryuu%20Yori%20%281991%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Ryuu Kyuu (1989)(Login)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "681.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ryuu%20Kyuu%20%281989%29%28Login%29.zip",
    link2: ""
  },
  {
    name: "Sabao Dama Tonda (19xx)(Opt.1)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "105.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sabao%20Dama%20Tonda%20%2819xx%29%28Opt.1%29.zip",
    link2: ""
  },
  {
    name: "Sabnack (1991)(Kogado)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "693.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sabnack%20%281991%29%28Kogado%29.zip",
    link2: ""
  },
  {
    name: "Sades (1989)(Studio KBO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "135.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sades%20%281989%29%28Studio%20KBO%29.zip",
    link2: ""
  },
  {
    name: "Sailor Moon Battler Kou To Ju Zanteihan (199x)(Ace Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sailor%20Moon%20Battler%20Kou%20To%20Ju%20Zanteihan%20%28199x%29%28Ace%20Software%29.zip",
    link2: ""
  },
  {
    name: "Sailor Moon Shibaigoya (19xx)(Big Parfait)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "849.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sailor%20Moon%20Shibaigoya%20%2819xx%29%28Big%20Parfait%29.zip",
    link2: ""
  },
  {
    name: "Sailor V Game v3.00 (1994)(Phank's)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "180.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sailor%20V%20Game%20v3.00%20%281994%29%28Phank%27s%29.zip",
    link2: ""
  },
  {
    name: "Sailormoon Chou Card Quiz Game Moon Quiz (19xx)(Sprite)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "600.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sailormoon%20Chou%20Card%20Quiz%20Game%20Moon%20Quiz%20%2819xx%29%28Sprite%29.zip",
    link2: ""
  },
  {
    name: "Sakeru No Da! (19xx)(Mugen Unagi Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "117.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sakeru%20No%20Da%21%20%2819xx%29%28Mugen%20Unagi%20Team%29.zip",
    link2: ""
  },
  {
    name: "Salamander (1988)(Sharp - SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "442.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Salamander%20%281988%29%28Sharp%20-%20SPS%29.zip",
    link2: ""
  },
  {
    name: "Same Game (1995)(Makoto)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "110.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Same%20Game%20%281995%29%28Makoto%29.zip",
    link2: ""
  },
  {
    name: "Sangokushi I+III (1988)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sangokushi%20I%2BIII%20%281988%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Santakun (199x)(Active)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "671.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Santakun%20%28199x%29%28Active%29.zip",
    link2: ""
  },
  {
    name: "Saori Bishoujotachi No Yakata (1991)(Fairytale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Saori%20Bishoujotachi%20No%20Yakata%20%281991%29%28Fairytale%29.zip",
    link2: ""
  },
  {
    name: "Saotome Gakuen Nyuugaku Annai I+II (19xx)(Zenryuutsuu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "786.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Saotome%20Gakuen%20Nyuugaku%20Annai%20I%2BII%20%2819xx%29%28Zenryuutsuu%29.zip",
    link2: ""
  },
  {
    name: "Sarumune of Tetris, The (1990)(Pineapple)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "199.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sarumune%20of%20Tetris%2C%20The%20%281990%29%28Pineapple%29.zip",
    link2: ""
  },
  {
    name: "Satellite Battle (1990)(Dual.D)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "82.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Satellite%20Battle%20%281990%29%28Dual.D%29.zip",
    link2: ""
  },
  {
    name: "Satellite, The I+II (1989)(Yamaco)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "949.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Satellite%2C%20The%20I%2BII%20%281989%29%28Yamaco%29.zip",
    link2: ""
  },
  {
    name: "Satori Shooting Practice Program",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "557.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Satori%20Shooting%20Practice%20Program.zip",
    link2: ""
  },
  {
    name: "Sazae A Isono's Family Crazy Story (1995)(68 Bank)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "560.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sazae%20A%20Isono%27s%20Family%20Crazy%20Story%20%281995%29%2868%20Bank%29.zip",
    link2: ""
  },
  {
    name: "Scarlet (1991)(Login)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "759.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Scarlet%20%281991%29%28Login%29.zip",
    link2: ""
  },
  {
    name: "Schwarzschild Kyouran No Ginga (19xx)(Kogado)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "752.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Schwarzschild%20Kyouran%20No%20Ginga%20%2819xx%29%28Kogado%29.zip",
    link2: ""
  },
  {
    name: "Scorpius (1991)(Shinseisha)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "530.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Scorpius%20%281991%29%28Shinseisha%29.zip",
    link2: ""
  },
  {
    name: "Scrap (1989)(Hypa Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "654.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Scrap%20%281989%29%28Hypa%20Soft%29.zip",
    link2: ""
  },
  {
    name: "SD Fighter (1991)(Une Une Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "451.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/SD%20Fighter%20%281991%29%28Une%20Une%20Soft%29.zip",
    link2: ""
  },
  {
    name: "SD Toki No Kagi (1989)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/SD%20Toki%20No%20Kagi%20%281989%29.zip",
    link2: ""
  },
  {
    name: "Sebasuchan (199x)(Earth & Moon)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "130.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sebasuchan%20%28199x%29%28Earth%20%26%20Moon%29.zip",
    link2: ""
  },
  {
    name: "See Through v2 (1989)(Flying Garden)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "228.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/See%20Through%20v2%20%281989%29%28Flying%20Garden%29.zip",
    link2: ""
  },
  {
    name: "See-Saw (1996)(Yama)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "219.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/See-Saw%20%281996%29%28Yama%29.zip",
    link2: ""
  },
  {
    name: "Sei Runa Gakuen Chikoku Taisen Sou No Maki (1991)(Pasoket)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "395.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sei%20Runa%20Gakuen%20Chikoku%20Taisen%20Sou%20No%20Maki%20%281991%29%28Pasoket%29.zip",
    link2: ""
  },
  {
    name: "Seifuku Kako No Ibutsu Wo Matoishi Monotachi (1992)(Pussy Cat)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "975.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Seifuku%20Kako%20No%20Ibutsu%20Wo%20Matoishi%20Monotachi%20%281992%29%28Pussy%20Cat%29.zip",
    link2: ""
  },
  {
    name: "Seiyuu Daishuugou (1990)(Buruumaunten Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "487.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Seiyuu%20Daishuugou%20%281990%29%28Buruumaunten%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Sekai De Ichiban Kimi Ga Suki! (1990)(Cocktail Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sekai%20De%20Ichiban%20Kimi%20Ga%20Suki%21%20%281990%29%28Cocktail%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Sekai Seifuku Set (1992)(Moai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "723.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sekai%20Seifuku%20Set%20%281992%29%28Moai%29.zip",
    link2: ""
  },
  {
    name: "Sekizui DX Sample (1993)(Famibe No Yosshin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "573.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sekizui%20DX%20Sample%20%281993%29%28Famibe%20No%20Yosshin%29.zip",
    link2: ""
  },
  {
    name: "Sekizui Hansha De Acchoo",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "331.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sekizui%20Hansha%20De%20Acchoo.zip",
    link2: ""
  },
  {
    name: "Senegal (1991)(Brings Onion Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "738.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Senegal%20%281991%29%28Brings%20Onion%20Software%29.zip",
    link2: ""
  },
  {
    name: "Sennin Game (19xx)(Ando)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "79.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sennin%20Game%20%2819xx%29%28Ando%29.zip",
    link2: ""
  },
  {
    name: "Senshasen (1992)(Yamaco)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "183.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Senshasen%20%281992%29%28Yamaco%29.zip",
    link2: ""
  },
  {
    name: "Senshasen III VS-Bowler (1996)(Yamaco)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "679.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Senshasen%20III%20VS-Bowler%20%281996%29%28Yamaco%29.zip",
    link2: ""
  },
  {
    name: "Senshasen v1.0 (1991)(Yamaco)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "433.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Senshasen%20v1.0%20%281991%29%28Yamaco%29.zip",
    link2: ""
  },
  {
    name: "Shanghai (1987)(System Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "218.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shanghai%20%281987%29%28System%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Shanghai Data Shuu (1988)(System Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shanghai%20Data%20Shuu%20%281988%29%28System%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Shanghai II (1989)(Hudson)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "414.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shanghai%20II%20%281989%29%28Hudson%29.zip",
    link2: ""
  },
  {
    name: "Shangrlia I+II+Special",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "10.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shangrlia%20I%2BII%2BSpecial.zip",
    link2: ""
  },
  {
    name: "SharpX68000RomCollectionByGhostware_archive.torrent",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "12.0B",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/SharpX68000RomCollectionByGhostware_archive.torrent",
    link2: ""
  },
  {
    name: "SharpX68000RomCollectionByGhostware_files.xml",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "381.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/SharpX68000RomCollectionByGhostware_files.xml",
    link2: ""
  },
  {
    name: "SharpX68000RomCollectionByGhostware_meta.sqlite",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/SharpX68000RomCollectionByGhostware_meta.sqlite",
    link2: ""
  },
  {
    name: "SharpX68000RomCollectionByGhostware_meta.xml",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/SharpX68000RomCollectionByGhostware_meta.xml",
    link2: ""
  },
  {
    name: "SharpX68000RomCollectionByGhostware_reviews.xml",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/SharpX68000RomCollectionByGhostware_reviews.xml",
    link2: ""
  },
  {
    name: "Shikato (19xx)(Rero Rero)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "80.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shikato%20%2819xx%29%28Rero%20Rero%29.zip",
    link2: ""
  },
  {
    name: "Shiken Ni Denai Maison (19xx)(Melty Club)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "356.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shiken%20Ni%20Denai%20Maison%20%2819xx%29%28Melty%20Club%29.zip",
    link2: ""
  },
  {
    name: "Shiken Ni Deru Maison Ikkoku (1990)(Ponta Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "161.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shiken%20Ni%20Deru%20Maison%20Ikkoku%20%281990%29%28Ponta%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Shiken Ni Deru Urusei Yatsura Part 1 (1989)(Ponta Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "358.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shiken%20Ni%20Deru%20Urusei%20Yatsura%20Part%201%20%281989%29%28Ponta%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Shimai Mahjongg v1.00 (1993)(Kazumi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "143.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shimai%20Mahjongg%20v1.00%20%281993%29%28Kazumi%29.zip",
    link2: ""
  },
  {
    name: "Shimai Mahjongg v1.10 (1993)(Kazumi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "145.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shimai%20Mahjongg%20v1.10%20%281993%29%28Kazumi%29.zip",
    link2: ""
  },
  {
    name: "Shimai Mahjongg v1.30 (1993)(Kazumi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "147.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shimai%20Mahjongg%20v1.30%20%281993%29%28Kazumi%29.zip",
    link2: ""
  },
  {
    name: "Shimai Mahjongg v1.40 (1994)(Kazumi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "168.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shimai%20Mahjongg%20v1.40%20%281994%29%28Kazumi%29.zip",
    link2: ""
  },
  {
    name: "Shin Baseball Knuckles (1995)(DCS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,010.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shin%20Baseball%20Knuckles%20%281995%29%28DCS%29.zip",
    link2: ""
  },
  {
    name: "Shinkeisuijaku Pro 68K (1989)(Tutankamen)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "246.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shinkeisuijaku%20Pro%2068K%20%281989%29%28Tutankamen%29.zip",
    link2: ""
  },
  {
    name: "Shoot Range (1992)(Bit2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "516.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shoot%20Range%20%281992%29%28Bit2%29.zip",
    link2: ""
  },
  {
    name: "Shougi Seiten (1992)(Home Data)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "728.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shougi%20Seiten%20%281992%29%28Home%20Data%29.zip",
    link2: ""
  },
  {
    name: "Shoujo Densetsu (1989)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "166.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shoujo%20Densetsu%20%281989%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Shouten (199x)(Software Factory T's)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "864.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shouten%20%28199x%29%28Software%20Factory%20T%27s%29.zip",
    link2: ""
  },
  {
    name: "Shuffle Puck Cafe (1989)(Broderbund)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "869.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Shuffle%20Puck%20Cafe%20%281989%29%28Broderbund%29.zip",
    link2: ""
  },
  {
    name: "Signatory (1991)(NCS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Signatory%20%281991%29%28NCS%29.zip",
    link2: ""
  },
  {
    name: "Silk Road (Sprite)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "279.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Silk%20Road%20%28Sprite%29.zip",
    link2: ""
  },
  {
    name: "Silkroad II+ Legend of Gero v2.10r (1993)(Sprite)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Silkroad%20II%2B%20Legend%20of%20Gero%20v2.10r%20%281993%29%28Sprite%29.zip",
    link2: ""
  },
  {
    name: "silsteel (1995) (p.pink.pot)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/silsteel%20%281995%29%20%28p.pink.pot%29.zip",
    link2: ""
  },
  {
    name: "Silver Ball (1989)(X-Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "491.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Silver%20Ball%20%281989%29%28X-Soft%29.zip",
    link2: ""
  },
  {
    name: "Silver Crystal (19xx)(Kunugi J.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "705.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Silver%20Crystal%20%2819xx%29%28Kunugi%20J.%29.zip",
    link2: ""
  },
  {
    name: "Sim Ant (1993)(Imagineer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "471.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sim%20Ant%20%281993%29%28Imagineer%29.zip",
    link2: ""
  },
  {
    name: "Sim City",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sim%20City.zip",
    link2: ""
  },
  {
    name: "Sim Earth (19xx)(Imagineer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "586.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sim%20Earth%20%2819xx%29%28Imagineer%29.zip",
    link2: ""
  },
  {
    name: "Sion I+II+IV",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sion%20I%2BII%2BIV.zip",
    link2: ""
  },
  {
    name: "Slime Master (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "393.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Slime%20Master%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Slimyer (1990)(Hot B)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "389.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Slimyer%20%281990%29%28Hot%20B%29.zip",
    link2: ""
  },
  {
    name: "SMSX Moon Soldier (199x)(Morimoto Uchuu Ichi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/SMSX%20Moon%20Soldier%20%28199x%29%28Morimoto%20Uchuu%20Ichi%29.zip",
    link2: ""
  },
  {
    name: "SMSX Sample 0.1 (199x)(Morimoto Uchuu Ichi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "214.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/SMSX%20Sample%200.1%20%28199x%29%28Morimoto%20Uchuu%20Ichi%29.zip",
    link2: ""
  },
  {
    name: "Snell (1991)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "525.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Snell%20%281991%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Snow Na Kibun! (1991)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "197.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Snow%20Na%20Kibun%21%20%281991%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Soft De Hard Na Monogatari I+II (1988)(System Sacom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Soft%20De%20Hard%20Na%20Monogatari%20I%2BII%20%281988%29%28System%20Sacom%29.zip",
    link2: ""
  },
  {
    name: "Sol-Feace",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sol-Feace.zip",
    link2: ""
  },
  {
    name: "Solitaire Tiny Han (1990)(Miro)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "67.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Solitaire%20Tiny%20Han%20%281990%29%28Miro%29.zip",
    link2: ""
  },
  {
    name: "Solitea (1990)(Miro)(PD)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "88.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Solitea%20%281990%29%28Miro%29%28PD%29.zip",
    link2: ""
  },
  {
    name: "Sonic Linker (1993)(May-Be Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sonic%20Linker%20%281993%29%28May-Be%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Sorcerian",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "889.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sorcerian.zip",
    link2: ""
  },
  {
    name: "Sorcerian Sugoroku (1990)(Missy.M)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "238.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sorcerian%20Sugoroku%20%281990%29%28Missy.M%29.zip",
    link2: ""
  },
  {
    name: "Sotsugyou Graduation (1993)(JHV)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sotsugyou%20Graduation%20%281993%29%28JHV%29.zip",
    link2: ""
  },
  {
    name: "Sotsugyou Shashin with Biki (1992)(Cocktail Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sotsugyou%20Shashin%20with%20Biki%20%281992%29%28Cocktail%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Souhou Blue Phoenix (1994)(Stillrise)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "645.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Souhou%20Blue%20Phoenix%20%281994%29%28Stillrise%29.zip",
    link2: ""
  },
  {
    name: "Soukoban + Perfect (1989)(Thinking Rabbit)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "693.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Soukoban%20%2B%20Perfect%20%281989%29%28Thinking%20Rabbit%29.zip",
    link2: ""
  },
  {
    name: "Soukou Hohei Butai Cannon Sight (1995)(Nihon Computer Club Renmei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "627.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Soukou%20Hohei%20Butai%20Cannon%20Sight%20%281995%29%28Nihon%20Computer%20Club%20Renmei%29.zip",
    link2: ""
  },
  {
    name: "Space Harrier (1987)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "265.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Space%20Harrier%20%281987%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Space Invaders (1989)(Tiny-Tomo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "600.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Space%20Invaders%20%281989%29%28Tiny-Tomo%29.zip",
    link2: ""
  },
  {
    name: "Space Landing S-Type Mission 2 (1989)(Cross Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "141.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Space%20Landing%20S-Type%20Mission%202%20%281989%29%28Cross%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Space Rogue (1989)(Wave Train)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Space%20Rogue%20%281989%29%28Wave%20Train%29.zip",
    link2: ""
  },
  {
    name: "Space Soldier (1992)(Studio Theta)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "677.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Space%20Soldier%20%281992%29%28Studio%20Theta%29.zip",
    link2: ""
  },
  {
    name: "Spanner-X Endless Fire",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "945.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Spanner-X%20Endless%20Fire.zip",
    link2: ""
  },
  {
    name: "Spanner_A (1989)(MP-Networks)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "326.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Spanner_A%20%281989%29%28MP-Networks%29.zip",
    link2: ""
  },
  {
    name: "Special Tenanmon (1990)(Pekin Net)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "618.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Special%20Tenanmon%20%281990%29%28Pekin%20Net%29.zip",
    link2: ""
  },
  {
    name: "Spindizzy II (1992)(Arsys)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "390.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Spindizzy%20II%20%281992%29%28Arsys%29.zip",
    link2: ""
  },
  {
    name: "Square Resort (1992)(Family Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Square%20Resort%20%281992%29%28Family%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Star Blade v1.00 (19xx)(Nami.dat)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "257.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Blade%20v1.00%20%2819xx%29%28Nami.dat%29.zip",
    link2: ""
  },
  {
    name: "Star Charge",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "940.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Charge.zip",
    link2: ""
  },
  {
    name: "Star Cruiser (1989)(Arsys)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "753.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Cruiser%20%281989%29%28Arsys%29.zip",
    link2: ""
  },
  {
    name: "Star Cruiser Sol Will 2 (1992)(Proceed)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "658.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Cruiser%20Sol%20Will%202%20%281992%29%28Proceed%29.zip",
    link2: ""
  },
  {
    name: "Star Fighter (1992)(Faw)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "607.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Fighter%20%281992%29%28Faw%29.zip",
    link2: ""
  },
  {
    name: "Star Force (1993)(Dempa)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "179.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Force%20%281993%29%28Dempa%29.zip",
    link2: ""
  },
  {
    name: "Star Luster",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Luster.zip",
    link2: ""
  },
  {
    name: "Star Mobile (1991)(MNM Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "429.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Mobile%20%281991%29%28MNM%20Software%29.zip",
    link2: ""
  },
  {
    name: "Star Pulse (1998)(Team Dangeroude)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "686.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Pulse%20%281998%29%28Team%20Dangeroude%29.zip",
    link2: ""
  },
  {
    name: "Star Trader",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "823.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Trader.zip",
    link2: ""
  },
  {
    name: "Star Trek (19xx)(To$hi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "221.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Trek%20%2819xx%29%28To%24hi%29.zip",
    link2: ""
  },
  {
    name: "Star War 1991 v2 (1991)(K.Y.A.T.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "881.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20War%201991%20v2%20%281991%29%28K.Y.A.T.%29.zip",
    link2: ""
  },
  {
    name: "Star Wars Attack On The Death Star",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Star%20Wars%20Attack%20On%20The%20Death%20Star.zip",
    link2: ""
  },
  {
    name: "Starship Rendezvous (19xx)(Scap Trust)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "938.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Starship%20Rendezvous%20%2819xx%29%28Scap%20Trust%29.zip",
    link2: ""
  },
  {
    name: "Steel Gunman (199x)(Shuuru Shuuru)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "262.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Steel%20Gunman%20%28199x%29%28Shuuru%20Shuuru%29.zip",
    link2: ""
  },
  {
    name: "Stox (1989)(Pineapple)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "390.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Stox%20%281989%29%28Pineapple%29.zip",
    link2: ""
  },
  {
    name: "Street Fighter II Champion Edition (1993)(SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Street%20Fighter%20II%20Champion%20Edition%20%281993%29%28SPS%29.zip",
    link2: ""
  },
  {
    name: "Street Haita 2 (1992)(Yamazaki)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "984.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Street%20Haita%202%20%281992%29%28Yamazaki%29.zip",
    link2: ""
  },
  {
    name: "Street Uckey II (1991)(Goro)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "535.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Street%20Uckey%20II%20%281991%29%28Goro%29.zip",
    link2: ""
  },
  {
    name: "Strider Hiryuu (1992)(Capcom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Strider%20Hiryuu%20%281992%29%28Capcom%29.zip",
    link2: ""
  },
  {
    name: "Strip Fighter II +Sutonyan Dash (1993)(Nankoku Byouyou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Strip%20Fighter%20II%20%2BSutonyan%20Dash%20%281993%29%28Nankoku%20Byouyou%29.zip",
    link2: ""
  },
  {
    name: "Stroke.x v0.20 (demo) (1991)(Etou Hiroshi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "71.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Stroke.x%20v0.20%20%28demo%29%20%281991%29%28Etou%20Hiroshi%29.zip",
    link2: ""
  },
  {
    name: "Suikoden Tenmei No Chikai (1989)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Suikoden%20Tenmei%20No%20Chikai%20%281989%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Sukaparojii (1993)(Dream Staff)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "434.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sukaparojii%20%281993%29%28Dream%20Staff%29.zip",
    link2: ""
  },
  {
    name: "Sukatan Highschool (19xx)(Team Bakabonzu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "308.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sukatan%20Highschool%20%2819xx%29%28Team%20Bakabonzu%29.zip",
    link2: ""
  },
  {
    name: "Super Artemis",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Artemis.zip",
    link2: ""
  },
  {
    name: "Super CGQ (1991)(Iron Gear)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "317.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20CGQ%20%281991%29%28Iron%20Gear%29.zip",
    link2: ""
  },
  {
    name: "Super D.P.S +",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "8.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20D.P.S%20%2B.zip",
    link2: ""
  },
  {
    name: "Super Daikaiten (1993)(Ishida Hironari)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "306.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Daikaiten%20%281993%29%28Ishida%20Hironari%29.zip",
    link2: ""
  },
  {
    name: "Super Daisenryaku 68K (1989)(System Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "489.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Daisenryaku%2068K%20%281989%29%28System%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Super First Mission (1995)(YOH)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "661.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20First%20Mission%20%281995%29%28YOH%29.zip",
    link2: ""
  },
  {
    name: "Super FiSS Fighting Sailor Soldiers (1994)(Fiss Seisaku Iinkai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "708.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20FiSS%20Fighting%20Sailor%20Soldiers%20%281994%29%28Fiss%20Seisaku%20Iinkai%29.zip",
    link2: ""
  },
  {
    name: "Super Graphic Theater (1990)(Angeldust)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "905.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Graphic%20Theater%20%281990%29%28Angeldust%29.zip",
    link2: ""
  },
  {
    name: "Super Hang-On (1989)(Sharp - SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "503.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Hang-On%20%281989%29%28Sharp%20-%20SPS%29.zip",
    link2: ""
  },
  {
    name: "Super Jack Pro 68K (1988)(G Club)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "483.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Jack%20Pro%2068K%20%281988%29%28G%20Club%29.zip",
    link2: ""
  },
  {
    name: "Super Las Vegas I+II, The (1990)(Nippon Dexter)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Las%20Vegas%20I%2BII%2C%20The%20%281990%29%28Nippon%20Dexter%29.zip",
    link2: ""
  },
  {
    name: "Super Mario Bros. (19xx)(-)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "636.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Mario%20Bros.%20%2819xx%29%28-%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Super Meikou Ponjan (1990)(P-1)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "286.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Meikou%20Ponjan%20%281990%29%28P-1%29.zip",
    link2: ""
  },
  {
    name: "Super Pakris EX (1991)(G' Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "246.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Pakris%20EX%20%281991%29%28G%27%20Software%29.zip",
    link2: ""
  },
  {
    name: "Super Shanghai Dragon's Eye (1991)(Hot B)(Disk 1 of 2)(System)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "837.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Shanghai%20Dragon%27s%20Eye%20%281991%29%28Hot%20B%29%28Disk%201%20of%202%29%28System%29.zip",
    link2: ""
  },
  {
    name: "Super Shanghai Dragon's Eye (1991)(Hot B)(Disk 2 of 2)(Data)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "918.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Shanghai%20Dragon%27s%20Eye%20%281991%29%28Hot%20B%29%28Disk%202%20of%202%29%28Data%29.zip",
    link2: ""
  },
  {
    name: "Super Shinpi No Kyoseki (19xx)(FC Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "214.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Shinpi%20No%20Kyoseki%20%2819xx%29%28FC%20Software%29.zip",
    link2: ""
  },
  {
    name: "Super Star Shooter",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "463.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Star%20Shooter.zip",
    link2: ""
  },
  {
    name: "Super Street Bomber X (19xx)(Dragon Studio)[Req Install]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Street%20Bomber%20X%20%2819xx%29%28Dragon%20Studio%29%5BReq%20Install%5D.zip",
    link2: ""
  },
  {
    name: "Super Tiny Phalanx (1995)(XYZ)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "237.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20Tiny%20Phalanx%20%281995%29%28XYZ%29.zip",
    link2: ""
  },
  {
    name: "Super X-Day X (1994)(PYX)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "460.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20X-Day%20X%20%281994%29%28PYX%29.zip",
    link2: ""
  },
  {
    name: "Super X-Day X'95 (1995)(PYX)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "860.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Super%20X-Day%20X%2795%20%281995%29%28PYX%29.zip",
    link2: ""
  },
  {
    name: "super-street-fighter-ii-the-new-challengers",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/super-street-fighter-ii-the-new-challengers.zip",
    link2: ""
  },
  {
    name: "superboundball",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/superboundball.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 1 of 6)(System)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "622.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%201%20of%206%29%28System%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 1 of 6)(System)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "669.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%201%20of%206%29%28System%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 1 of 6)(System)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "622.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%201%20of%206%29%28System%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 2 of 6)(Data)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "552.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%202%20of%206%29%28Data%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 2 of 6)(Data)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "780.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%202%20of%206%29%28Data%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 2 of 6)(Data)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "552.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%202%20of%206%29%28Data%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 3 of 6)(Shouko)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "234.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%203%20of%206%29%28Shouko%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 3 of 6)(Shouko)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "234.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%203%20of%206%29%28Shouko%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 4 of 6)(Kasumi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "398.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%204%20of%206%29%28Kasumi%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 4 of 6)(Kasumi)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "626.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%204%20of%206%29%28Kasumi%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 4 of 6)(Kasumi)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "398.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%204%20of%206%29%28Kasumi%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 5 of 6)(Miki)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "421.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%205%20of%206%29%28Miki%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 5 of 6)(Miki)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "670.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%205%20of%206%29%28Miki%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 5 of 6)(Miki)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "421.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%205%20of%206%29%28Miki%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 6 of 6)(4Nin Mahjongg)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "342.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%206%20of%206%29%284Nin%20Mahjongg%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 6 of 6)(4Nin Mahjongg)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "426.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%206%20of%206%29%284Nin%20Mahjongg%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PII & PIII (1993)(Ving)(Disk 6 of 6)(4Nin Mahjongg)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "342.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PII%20%26%20PIII%20%281993%29%28Ving%29%28Disk%206%20of%206%29%284Nin%20Mahjongg%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 1 of 9)(System)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "881.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%201%20of%209%29%28System%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 1 of 9)(System)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "875.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%201%20of%209%29%28System%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 1 of 9)(System)[a3]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "942.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%201%20of%209%29%28System%29%5Ba3%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 1 of 9)(System)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "810.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%201%20of%209%29%28System%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 2 of 9)(Data 1)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,009.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%202%20of%209%29%28Data%201%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 2 of 9)(Data 1)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%202%20of%209%29%28Data%201%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 2 of 9)(Data 1)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "989.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%202%20of%209%29%28Data%201%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 3 of 9)(Data 2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%203%20of%209%29%28Data%202%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 3 of 9)(Data 2)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%203%20of%209%29%28Data%202%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 3 of 9)(Data 2)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%203%20of%209%29%28Data%202%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 4 of 9)(Data 3)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "825.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%204%20of%209%29%28Data%203%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 4 of 9)(Data 3)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,013.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%204%20of%209%29%28Data%203%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 4 of 9)(Data 3)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "825.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%204%20of%209%29%28Data%203%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 5 of 9)(Data 4)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,008.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%205%20of%209%29%28Data%204%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 5 of 9)(Data 4)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%205%20of%209%29%28Data%204%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 5 of 9)(Data 4)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,008.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%205%20of%209%29%28Data%204%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 6 of 9)(Data 5)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "952.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%206%20of%209%29%28Data%205%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 6 of 9)(Data 5)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,012.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%206%20of%209%29%28Data%205%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 6 of 9)(Data 5)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "952.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%206%20of%209%29%28Data%205%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 7 of 9)(Data 6)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%207%20of%209%29%28Data%206%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 7 of 9)(Data 6)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%207%20of%209%29%28Data%206%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 7 of 9)(Data 6)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%207%20of%209%29%28Data%206%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 8 of 9)(Data 7)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "940.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%208%20of%209%29%28Data%207%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 8 of 9)(Data 7)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,014.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%208%20of%209%29%28Data%207%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 8 of 9)(Data 7)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "940.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%208%20of%209%29%28Data%207%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 9 of 9)(Data 8)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "987.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%209%20of%209%29%28Data%208%29.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 9 of 9)(Data 8)[a2]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%209%20of%209%29%28Data%208%29%5Ba2%5D.zip",
    link2: ""
  },
  {
    name: "Superior Mahjongg PIV (1994)(Ving)(Disk 9 of 9)(Data 8)[a]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "988.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Superior%20Mahjongg%20PIV%20%281994%29%28Ving%29%28Disk%209%20of%209%29%28Data%208%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Sweet Angel (1992)(Active)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sweet%20Angel%20%281992%29%28Active%29.zip",
    link2: ""
  },
  {
    name: "Sweet Emotion (1991)(Discovery Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sweet%20Emotion%20%281991%29%28Discovery%20Software%29.zip",
    link2: ""
  },
  {
    name: "Sword Master I+II",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "592.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Sword%20Master%20I%2BII.zip",
    link2: ""
  },
  {
    name: "SX Aoumi (1993)(Yuuki Asuka)[Req SX-Windows]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "219.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/SX%20Aoumi%20%281993%29%28Yuuki%20Asuka%29%5BReq%20SX-Windows%5D.zip",
    link2: ""
  },
  {
    name: "Syvalion (1990)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "926.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Syvalion%20%281990%29.zip",
    link2: ""
  },
  {
    name: "T-Dragon Quest",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/T-Dragon%20Quest.zip",
    link2: ""
  },
  {
    name: "Tacolis (1989)(T.A)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "142.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tacolis%20%281989%29%28T.A%29.zip",
    link2: ""
  },
  {
    name: "Taiheiyou No Arashi DX (1989)(Gam)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "761.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Taiheiyou%20No%20Arashi%20DX%20%281989%29%28Gam%29.zip",
    link2: ""
  },
  {
    name: "Taikairei Dainihon Teikoku Kaigun No Kisaki (1989)(Artdink)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Taikairei%20Dainihon%20Teikoku%20Kaigun%20No%20Kisaki%20%281989%29%28Artdink%29.zip",
    link2: ""
  },
  {
    name: "Taikairei Nankai No Shitou (1990)(Artdink)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Taikairei%20Nankai%20No%20Shitou%20%281990%29%28Artdink%29.zip",
    link2: ""
  },
  {
    name: "Taikou Risshiden (1992)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Taikou%20Risshiden%20%281992%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Tail Chaser (19xx)(Neko Mimi Shoujo Dan)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "360.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tail%20Chaser%20%2819xx%29%28Neko%20Mimi%20Shoujo%20Dan%29.zip",
    link2: ""
  },
  {
    name: "Taisen Kakutou Karatedou (1997)(Nishio Kouzou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "441.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Taisen%20Kakutou%20Karatedou%20%281997%29%28Nishio%20Kouzou%29.zip",
    link2: ""
  },
  {
    name: "Take Out (19xx)(Marionet)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "372.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Take%20Out%20%2819xx%29%28Marionet%29.zip",
    link2: ""
  },
  {
    name: "Tako Game II (19xx)(Norikun)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "82.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tako%20Game%20II%20%2819xx%29%28Norikun%29.zip",
    link2: ""
  },
  {
    name: "Tank Battalion (1989)(Pineapple)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "121.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tank%20Battalion%20%281989%29%28Pineapple%29.zip",
    link2: ""
  },
  {
    name: "Tank Battalion (199x)(L. Sound)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "614.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tank%20Battalion%20%28199x%29%28L.%20Sound%29.zip",
    link2: ""
  },
  {
    name: "Tank-6 (1991)(TEC - EPT)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "85.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tank-6%20%281991%29%28TEC%20-%20EPT%29.zip",
    link2: ""
  },
  {
    name: "Target (1991)(RKS Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "415.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Target%20%281991%29%28RKS%20Project%29.zip",
    link2: ""
  },
  {
    name: "Tatakae! Konyanko Comike 46 + 47 (1994)(Nankoku Byouyou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tatakae%21%20Konyanko%20Comike%2046%20%2B%2047%20%281994%29%28Nankoku%20Byouyou%29.zip",
    link2: ""
  },
  {
    name: "Tatakae! Konyanko EX (199x)(Nankoku Byouyou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tatakae%21%20Konyanko%20EX%20%28199x%29%28Nankoku%20Byouyou%29.zip",
    link2: ""
  },
  {
    name: "TDF (1987)(Data West)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "315.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/TDF%20%281987%29%28Data%20West%29.zip",
    link2: ""
  },
  {
    name: "Teitoku No Ketsudan (1990)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Teitoku%20No%20Ketsudan%20%281990%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Tekken Seisai (1991)(Iron Gear)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "722.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tekken%20Seisai%20%281991%29%28Iron%20Gear%29.zip",
    link2: ""
  },
  {
    name: "Tenchi Muyou (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "312.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tenchi%20Muyou%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Tenchi Muyou Puzzle De Pazurou (199x)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "541.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tenchi%20Muyou%20Puzzle%20De%20Pazurou%20%28199x%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Tenka Touitsu (1990)(System Soft - Arsys)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tenka%20Touitsu%20%281990%29%28System%20Soft%20-%20Arsys%29.zip",
    link2: ""
  },
  {
    name: "Tenkyuuhai (19xx)(Panther Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "821.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tenkyuuhai%20%2819xx%29%28Panther%20Software%29.zip",
    link2: ""
  },
  {
    name: "Tenkyuuhai Special Tougen No Utage (19xx)(Panther Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "577.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tenkyuuhai%20Special%20Tougen%20No%20Utage%20%2819xx%29%28Panther%20Software%29.zip",
    link2: ""
  },
  {
    name: "Tenshin Ranma (1992)(Elf)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tenshin%20Ranma%20%281992%29%28Elf%29.zip",
    link2: ""
  },
  {
    name: "Tenshitachi No Gogo +",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tenshitachi%20No%20Gogo%20%2B.zip",
    link2: ""
  },
  {
    name: "Terra Drive (1989)(Unique's)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "143.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Terra%20Drive%20%281989%29%28Unique%27s%29.zip",
    link2: ""
  },
  {
    name: "Teruminachan, The (1989)(Micro Hage Chabin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "340.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Teruminachan%2C%20The%20%281989%29%28Micro%20Hage%20Chabin%29.zip",
    link2: ""
  },
  {
    name: "Tesera (1992)(Technopolis)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tesera%20%281992%29%28Technopolis%29.zip",
    link2: ""
  },
  {
    name: "Tetris",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tetris.zip",
    link2: ""
  },
  {
    name: "Texceed (19xx)(GIJ Checkmate)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "149.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Texceed%20%2819xx%29%28GIJ%20Checkmate%29.zip",
    link2: ""
  },
  {
    name: "TF4G v0.3A09 (1993)(TNB Saisakusho)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "201.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/TF4G%20v0.3A09%20%281993%29%28TNB%20Saisakusho%29.zip",
    link2: ""
  },
  {
    name: "TF4G v0.6426 (1994)(TNB Saisakusho)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "365.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/TF4G%20v0.6426%20%281994%29%28TNB%20Saisakusho%29.zip",
    link2: ""
  },
  {
    name: "Thanatos (1991)(Birdy Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Thanatos%20%281991%29%28Birdy%20Soft%29.zip",
    link2: ""
  },
  {
    name: "The 4th Unit + Act 2-5",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "6.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/The%204th%20Unit%20%2B%20Act%202-5.zip",
    link2: ""
  },
  {
    name: "Thrice (1990)(MNM Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "568.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Thrice%20%281990%29%28MNM%20Software%29.zip",
    link2: ""
  },
  {
    name: "Thunder Blade (1990)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "840.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Thunder%20Blade%20%281990%29.zip",
    link2: ""
  },
  {
    name: "Thunder Force II (1988)(Technosoft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Thunder%20Force%20II%20%281988%29%28Technosoft%29.zip",
    link2: ""
  },
  {
    name: "Till The Walls Come Tumblin' Down (1989)(SSL - Au)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "716.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Till%20The%20Walls%20Come%20Tumblin%27%20Down%20%281989%29%28SSL%20-%20Au%29.zip",
    link2: ""
  },
  {
    name: "Tim Country Club 1994 (1994)(Moai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "652.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tim%20Country%20Club%201994%20%281994%29%28Moai%29.zip",
    link2: ""
  },
  {
    name: "Tim Paper Huzoku Scenario Dairyuuou Alexas (1993)(Moai)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "521.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tim%20Paper%20Huzoku%20Scenario%20Dairyuuou%20Alexas%20%281993%29%28Moai%29.zip",
    link2: ""
  },
  {
    name: "Time Lag (1996)(TAU Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "292.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Time%20Lag%20%281996%29%28TAU%20Software%29.zip",
    link2: ""
  },
  {
    name: "Time Pilot (19xx)(IT)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "91.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Time%20Pilot%20%2819xx%29%28IT%29.zip",
    link2: ""
  },
  {
    name: "Tinna The Seven Crystals (1991)(Project Team Interrupt)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "634.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tinna%20The%20Seven%20Crystals%20%281991%29%28Project%20Team%20Interrupt%29.zip",
    link2: ""
  },
  {
    name: "Tiny Columns X68000 Special (19xx)(ASM)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "808.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tiny%20Columns%20X68000%20Special%20%2819xx%29%28ASM%29.zip",
    link2: ""
  },
  {
    name: "Tiny Hopping Mappy (19xx)(Illkun 68K)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "272.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tiny%20Hopping%20Mappy%20%2819xx%29%28Illkun%2068K%29.zip",
    link2: ""
  },
  {
    name: "Tokimeki Cherry Box (19xx)(DO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "576.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tokimeki%20Cherry%20Box%20%2819xx%29%28DO%29.zip",
    link2: ""
  },
  {
    name: "Tokimeki Land Seru I+II (1992)(Todo2)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tokimeki%20Land%20Seru%20I%2BII%20%281992%29%28Todo2%29.zip",
    link2: ""
  },
  {
    name: "Tokimeki Taisen v1.01 (1997)(TMK)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tokimeki%20Taisen%20v1.01%20%281997%29%28TMK%29.zip",
    link2: ""
  },
  {
    name: "Tokkou! Kamikaze Fighter",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tokkou%21%20Kamikaze%20Fighter.zip",
    link2: ""
  },
  {
    name: "Tokkou! Kamikaze Fighter (1996)(Haiteidoradorazu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tokkou%21%20Kamikaze%20Fighter%20%281996%29%28Haiteidoradorazu%29.zip",
    link2: ""
  },
  {
    name: "Tokushu Koudou Keisatsu Sap (1991)(Great)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tokushu%20Koudou%20Keisatsu%20Sap%20%281991%29%28Great%29.zip",
    link2: ""
  },
  {
    name: "Tokusou Keiji (199x)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "252.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tokusou%20Keiji%20%28199x%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Tonkotsu Pro Roku Hachi Kei (1991)(Ichigo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "125.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tonkotsu%20Pro%20Roku%20Hachi%20Kei%20%281991%29%28Ichigo%29.zip",
    link2: ""
  },
  {
    name: "Toride Spirits Gaiden",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Toride%20Spirits%20Gaiden.zip",
    link2: ""
  },
  {
    name: "Totsugeki! Bakkon Street + II Hunting Roulette (199x)(Jast)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Totsugeki%21%20Bakkon%20Street%20%2B%20II%20Hunting%20Roulette%20%28199x%29%28Jast%29.zip",
    link2: ""
  },
  {
    name: "Toujo Densetsu (1992)(Daba)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "585.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Toujo%20Densetsu%20%281992%29%28Daba%29.zip",
    link2: ""
  },
  {
    name: "Toushin Toshi (1991)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Toushin%20Toshi%20%281991%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Tower of Druaga, The (1989)(R.G.B.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "178.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tower%20of%20Druaga%2C%20The%20%281989%29%28R.G.B.%29.zip",
    link2: ""
  },
  {
    name: "Toy Pop (1991)(R.G.B.)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "613.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Toy%20Pop%20%281991%29%28R.G.B.%29.zip",
    link2: ""
  },
  {
    name: "Triangle Hearts (1989)(Ankoku Baitai Softwares)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "341.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Triangle%20Hearts%20%281989%29%28Ankoku%20Baitai%20Softwares%29.zip",
    link2: ""
  },
  {
    name: "Tricorn Final (19xx)(Xain)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "976.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tricorn%20Final%20%2819xx%29%28Xain%29.zip",
    link2: ""
  },
  {
    name: "Trilogy Kukiyoukashinden (19xx)(Hard)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "804.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Trilogy%20Kukiyoukashinden%20%2819xx%29%28Hard%29.zip",
    link2: ""
  },
  {
    name: "Triple Yacchii (19xx)(Tiny-Tomo)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "607.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Triple%20Yacchii%20%2819xx%29%28Tiny-Tomo%29.zip",
    link2: ""
  },
  {
    name: "Tsuukai Gag Adventure Narutomaki Hichou (19xx)(Zentryuutsuu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "552.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tsuukai%20Gag%20Adventure%20Narutomaki%20Hichou%20%2819xx%29%28Zentryuutsuu%29.zip",
    link2: ""
  },
  {
    name: "Tunnels & Trolls - Crusaders of Khazan (19xx)(Starcraft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Tunnels%20%26%20Trolls%20-%20Crusaders%20of%20Khazan%20%20%2819xx%29%28Starcraft%29.zip",
    link2: ""
  },
  {
    name: "Twilight (1995)(Studio Twin'kle)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Twilight%20%281995%29%28Studio%20Twin%27kle%29.zip",
    link2: ""
  },
  {
    name: "Twilight Zone III+IV",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Twilight%20Zone%20III%2BIV.zip",
    link2: ""
  },
  {
    name: "Twin Bee (1988)(Sharp - SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "240.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Twin%20Bee%20%281988%29%28Sharp%20-%20SPS%29.zip",
    link2: ""
  },
  {
    name: "Twin Soul (1989)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "269.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Twin%20Soul%20%281989%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Twins (1989)(Mugen Kaisha Rana)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "372.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Twins%20%281989%29%28Mugen%20Kaisha%20Rana%29.zip",
    link2: ""
  },
  {
    name: "U.S. Championship Beach Volley V'ball (1989)(Sharp - SPS)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "520.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/U.S.%20Championship%20Beach%20Volley%20V%27ball%20%281989%29%28Sharp%20-%20SPS%29.zip",
    link2: ""
  },
  {
    name: "Uchuu Kaitou Funny Bee (1994)(Alice Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Uchuu%20Kaitou%20Funny%20Bee%20%281994%29%28Alice%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Uchuu Kakeru Businessman (1989)(Zenryuutsuu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "459.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Uchuu%20Kakeru%20Businessman%20%281989%29%28Zenryuutsuu%29.zip",
    link2: ""
  },
  {
    name: "Ueshita Hanten!! Upside Down v1.02a (1995)(TAU Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "144.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ueshita%20Hanten%21%21%20Upside%20Down%20v1.02a%20%281995%29%28TAU%20Software%29.zip",
    link2: ""
  },
  {
    name: "Uha Uha 2 (1992)(Mu Project)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "561.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Uha%20Uha%202%20%281992%29%28Mu%20Project%29.zip",
    link2: ""
  },
  {
    name: "Ultima IV+ V+VI",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ultima%20IV%2B%20V%2BVI.zip",
    link2: ""
  },
  {
    name: "Ultimate Magic (1990)(OS Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "448.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ultimate%20Magic%20%281990%29%28OS%20Software%29.zip",
    link2: ""
  },
  {
    name: "Undeadline",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Undeadline.zip",
    link2: ""
  },
  {
    name: "Uno (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "192.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Uno%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Ura Maison Ikkoku Kyoukosan No Kawai Sou Monogatari (1988)(Mater Piece)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "240.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Ura%20Maison%20Ikkoku%20Kyoukosan%20No%20Kawai%20Sou%20Monogatari%20%281988%29%28Mater%20Piece%29.zip",
    link2: ""
  },
  {
    name: "Urotsuki Douji (199x)(Fairy Tale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Urotsuki%20Douji%20%28199x%29%28Fairy%20Tale%29.zip",
    link2: ""
  },
  {
    name: "Urusei Yatsura Lum Kikiippatsu (1989)(Aspii)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "413.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Urusei%20Yatsura%20Lum%20Kikiippatsu%20%281989%29%28Aspii%29.zip",
    link2: ""
  },
  {
    name: "Usagi Jump (1989)(Degauss)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "302.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Usagi%20Jump%20%281989%29%28Degauss%29.zip",
    link2: ""
  },
  {
    name: "Vagrant Fighter FX (1995)(Hong Kong Project - NKTF)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Vagrant%20Fighter%20FX%20%281995%29%28Hong%20Kong%20Project%20-%20NKTF%29.zip",
    link2: ""
  },
  {
    name: "Valentine Day Panic (199x)(Kunikane Kentarou)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "410.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Valentine%20Day%20Panic%20%28199x%29%28Kunikane%20Kentarou%29.zip",
    link2: ""
  },
  {
    name: "Vampire Highschool (1993)(Inter Heart)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Vampire%20Highschool%20%281993%29%28Inter%20Heart%29.zip",
    link2: ""
  },
  {
    name: "Vaystarne (19xx)(Earth & Moon)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "279.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Vaystarne%20%2819xx%29%28Earth%20%26%20Moon%29.zip",
    link2: ""
  },
  {
    name: "Versnag Senran (1993)(Family Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.8M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Versnag%20Senran%20%281993%29%28Family%20Soft%29.zip",
    link2: ""
  },
  {
    name: "View Point (1995)(Nexus)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/View%20Point%20%281995%29%28Nexus%29.zip",
    link2: ""
  },
  {
    name: "Viper-V6 and V8 [X68000]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Viper-V6%20and%20V8%20%5BX68000%5D.zip",
    link2: ""
  },
  {
    name: "Virgin Angel (1995)(Crystal Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Virgin%20Angel%20%281995%29%28Crystal%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Virus No Dengon (199x)(Cocktail Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Virus%20No%20Dengon%20%28199x%29%28Cocktail%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Vision (1991)(MIX)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "414.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Vision%20%281991%29%28MIX%29.zip",
    link2: ""
  },
  {
    name: "Vs Klith v0.50 (1993)(K1)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "99.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Vs%20Klith%20v0.50%20%281993%29%28K1%29.zip",
    link2: ""
  },
  {
    name: "Vulquar (199x)(Cat Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1,009.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Vulquar%20%28199x%29%28Cat%20Soft%29.zip",
    link2: ""
  },
  {
    name: "W-Tank (199x)(Une2 Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "396.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/W-Tank%20%28199x%29%28Une2%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Wakao-G (1989)(Ura Nanigashi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "529.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Wakao-G%20%281989%29%28Ura%20Nanigashi%29.zip",
    link2: ""
  },
  {
    name: "Wanderers (1994)(Crystal Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "953.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Wanderers%20%281994%29%28Crystal%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Warning Type 68 (19xx)(Cosmos Computer)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "537.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Warning%20Type%2068%20%2819xx%29%28Cosmos%20Computer%29.zip",
    link2: ""
  },
  {
    name: "Water Blue (19xx)(Hypa Soft Lab)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "522.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Water%20Blue%20%2819xx%29%28Hypa%20Soft%20Lab%29.zip",
    link2: ""
  },
  {
    name: "Wild Card (19xx)(Mr. Karmu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "117.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Wild%20Card%20%2819xx%29%28Mr.%20Karmu%29.zip",
    link2: ""
  },
  {
    name: "Wind Blast (1991)(Scuderia Phantom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "335.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Wind%20Blast%20%281991%29%28Scuderia%20Phantom%29.zip",
    link2: ""
  },
  {
    name: "Wings (1989)(Broderbund)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "345.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Wings%20%281989%29%28Broderbund%29.zip",
    link2: ""
  },
  {
    name: "Winning Post (1993)(Koei)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Winning%20Post%20%281993%29%28Koei%29.zip",
    link2: ""
  },
  {
    name: "Wips II (1989)(SSL - Au)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "276.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Wips%20II%20%281989%29%28SSL%20-%20Au%29.zip",
    link2: ""
  },
  {
    name: "Words Worth (199x)(Elf)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "10.5M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Words%20Worth%20%28199x%29%28Elf%29.zip",
    link2: ""
  },
  {
    name: "World Golf III (1991)(Rhodes Office)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "683.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/World%20Golf%20III%20%281991%29%28Rhodes%20Office%29.zip",
    link2: ""
  },
  {
    name: "Worlds of Ultima The Savage Empire (1992)(Pony Canyon)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.0M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Worlds%20of%20Ultima%20The%20Savage%20Empire%20%281992%29%28Pony%20Canyon%29.zip",
    link2: ""
  },
  {
    name: "Wrecking Crew (1995)(A20)[p]",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "629.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Wrecking%20Crew%20%281995%29%28A20%29%5Bp%5D.zip",
    link2: ""
  },
  {
    name: "Wrestle Angles III + Special (199x)(Great)(Disk 11 of 11)(Disk K)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "9.6M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Wrestle%20Angles%20III%20%2B%20Special%20%28199x%29%28Great%29%28Disk%2011%20of%2011%29%28Disk%20K%29.zip",
    link2: ""
  },
  {
    name: "X-Type (1990)(Sprite)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "871.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/X-Type%20%281990%29%28Sprite%29.zip",
    link2: ""
  },
  {
    name: "X68000V4",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "260.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/X68000V4.zip",
    link2: ""
  },
  {
    name: "Xadlak",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.4M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Xadlak.zip",
    link2: ""
  },
  {
    name: "Xak (1990)(Micro Cabin)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Xak%20%281990%29%28Micro%20Cabin%29.zip",
    link2: ""
  },
  {
    name: "Xanadu (1994)(Yokoshiba Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "304.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Xanadu%20%281994%29%28Yokoshiba%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Xenon 2 Megablast (1990)(Imageworks)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Xenon%202%20Megablast%20%281990%29%28Imageworks%29.zip",
    link2: ""
  },
  {
    name: "Xevious",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Xevious.zip",
    link2: ""
  },
  {
    name: "Xna (1991)(Fairytale)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.7M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Xna%20%281991%29%28Fairytale%29.zip",
    link2: ""
  },
  {
    name: "Y's I+II+III",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "5.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Y%27s%20I%2BII%2BIII.zip",
    link2: ""
  },
  {
    name: "Y2",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Y2.zip",
    link2: ""
  },
  {
    name: "Yajiuma Pennant Race 1989 (1989)(Crossmedia Soft)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yajiuma%20Pennant%20Race%201989%20%281989%29%28Crossmedia%20Soft%29.zip",
    link2: ""
  },
  {
    name: "Yami No Ketsuzoku + Kanketsuhen (1990)(System Sacom)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yami%20No%20Ketsuzoku%20%2B%20Kanketsuhen%20%281990%29%28System%20Sacom%29.zip",
    link2: ""
  },
  {
    name: "Yaritai Houdai I+II (19xx)(Zenryuutsuu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "652.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yaritai%20Houdai%20I%2BII%20%2819xx%29%28Zenryuutsuu%29.zip",
    link2: ""
  },
  {
    name: "Yesterday (1990)(System House Oh!)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "749.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yesterday%20%281990%29%28System%20House%20Oh%21%29.zip",
    link2: ""
  },
  {
    name: "Yet Another Column (19xx)(-)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "169.1K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yet%20Another%20Column%20%2819xx%29%28-%29.zip",
    link2: ""
  },
  {
    name: "Yonkaku (19xx)(Nyagi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "336.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yonkaku%20%2819xx%29%28Nyagi%29.zip",
    link2: ""
  },
  {
    name: "Yoru No Tenshitachi (1989)(Jast)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "700.6K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yoru%20No%20Tenshitachi%20%281989%29%28Jast%29.zip",
    link2: ""
  },
  {
    name: "Youjuu Club I+II (19xx)(DO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "4.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Youjuu%20Club%20I%2BII%20%2819xx%29%28DO%29.zip",
    link2: ""
  },
  {
    name: "Youjuu Senki AD 2048 (199x)(DO)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "3.9M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Youjuu%20Senki%20AD%202048%20%28199x%29%28DO%29.zip",
    link2: ""
  },
  {
    name: "Yuugai Casino Trump No Trump (1992)(P Shoukai Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "364.0K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yuugai%20Casino%20Trump%20No%20Trump%20%281992%29%28P%20Shoukai%20Software%29.zip",
    link2: ""
  },
  {
    name: "Yuugai Chase Aa!! Namida No Shimensoka (199x)(P Shoukai Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "542.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yuugai%20Chase%20Aa%21%21%20Namida%20No%20Shimensoka%20%28199x%29%28P%20Shoukai%20Software%29.zip",
    link2: ""
  },
  {
    name: "Yuugai Gakuen II Jiritsushinkei Gouten (1993)(P Shoukai Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "620.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yuugai%20Gakuen%20II%20Jiritsushinkei%20Gouten%20%281993%29%28P%20Shoukai%20Software%29.zip",
    link2: ""
  },
  {
    name: "Yuugai Gakuen Noukasuitai Chokugeki (1992)(P Shoukai Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "307.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yuugai%20Gakuen%20Noukasuitai%20Chokugeki%20%281992%29%28P%20Shoukai%20Software%29.zip",
    link2: ""
  },
  {
    name: "Yuugai Puzzle (19xx)(P Shoukai Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "299.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yuugai%20Puzzle%20%2819xx%29%28P%20Shoukai%20Software%29.zip",
    link2: ""
  },
  {
    name: "Yuugai Wars Mamore! Akai Daichi (199x)(P Shoukai Software)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "493.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Yuugai%20Wars%20Mamore%21%20Akai%20Daichi%20%28199x%29%28P%20Shoukai%20Software%29.zip",
    link2: ""
  },
  {
    name: "Zan Kagerou No Jidai Scenario Collection Vol. 1 (19xx)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "525.4K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zan%20Kagerou%20No%20Jidai%20Scenario%20Collection%20Vol.%201%20%2819xx%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Zan Kagerou No Jidai Scenario Collection Vol. 2 (19xx)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "514.5K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zan%20Kagerou%20No%20Jidai%20Scenario%20Collection%20Vol.%202%20%2819xx%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Zan Kagerou No Toki (1989)(Wolf Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.3M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zan%20Kagerou%20No%20Toki%20%281989%29%28Wolf%20Team%29.zip",
    link2: ""
  },
  {
    name: "Zark Legend (1990)(Maxima)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "2.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zark%20Legend%20%281990%29%28Maxima%29.zip",
    link2: ""
  },
  {
    name: "Zavas (1989)(Glodia)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.1M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zavas%20%281989%29%28Glodia%29.zip",
    link2: ""
  },
  {
    name: "Zenkai Denshoku (1991)(Office Koukan)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "1.2M",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zenkai%20Denshoku%20%281991%29%28Office%20Koukan%29.zip",
    link2: ""
  },
  {
    name: "Zero Master-Striker",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "739.9K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zero%20Master-Striker.zip",
    link2: ""
  },
  {
    name: "Zero Rei (1994)(Kazuyuki Shinjuki Gumi)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "265.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zero%20Rei%20%281994%29%28Kazuyuki%20Shinjuki%20Gumi%29.zip",
    link2: ""
  },
  {
    name: "Zolgus (1989)(PCCM)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "81.3K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zolgus%20%281989%29%28PCCM%29.zip",
    link2: ""
  },
  {
    name: "Zone Terra (1994)(Quadrivium)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "475.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zone%20Terra%20%281994%29%28Quadrivium%29.zip",
    link2: ""
  },
  {
    name: "Zounds (1994)(Mugen Unagi Team)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "540.8K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zounds%20%281994%29%28Mugen%20Unagi%20Team%29.zip",
    link2: ""
  },
  {
    name: "Zoutage Hunters (1997)(Haiteidoradorazu)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "440.2K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zoutage%20Hunters%20%281997%29%28Haiteidoradorazu%29.zip",
    link2: ""
  },
  {
    name: "Zugya (1996)(Sprite)",
    image: "https://i.postimg.cc/NjQWX7Vw/6800.png",
    size: "904.7K",
    link1: "https://archive.org/download/SharpX68000RomCollectionByGhostware/Zugya%20%281996%29%28Sprite%29.zip",
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
