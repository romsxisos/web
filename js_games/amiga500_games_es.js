const roms = [
  {
    name: "4x4 Off-Road Racing (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/4x4%20Off-Road%20Racing%20%28USA%29.png",
    size: "509 KB",
    link1: "https://drive.google.com/file/d/1BAhXykmP0yK9VmjRt-EsKoItTLr7N0tC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ABC Monday Night Football (USA) (v1.1)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/ABC%20Monday%20Night%20Football%20%28USA%29%20%28v1.1%29.png",
    size: "1936 KB",
    link1: "https://drive.google.com/file/d/1p3zBEPXBZZqL9oBn-bUx4UySp923M5KC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Advanced Dungeons & Dragons - DragonStrike - DragonLance Dragon Combat Simulator (USA) (v1.0)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "1530 KB",
    link1: "https://drive.google.com/file/d/1BzwwkKlEBzODRCFiZ7ReOOxa9cFviewD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Advanced Dungeons & Dragons - Treasures of the Savage Frontier - A Savage Frontier Fantasy Role-Playing Epic, Vol.II (USA) (v1.00)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "1618 KB",
    link1: "https://drive.google.com/file/d/1wCqHO29WB4L6kWrslOEb7jQuxv0wRh_T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventure Construction Set (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Adventure%20Construction%20Set%20%28USA%29.png",
    size: "510 KB",
    link1: "https://drive.google.com/file/d/1jKM3yQoOCLGCIDRsS4o0HfYYo_Ohr76A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Afterburner (USA) (Budget - The Hit Squad)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Afterburner%20%28USA%29%20%28Budget%20-%20The%20Hit%20Squad%29.png",
    size: "827 KB",
    link1: "https://drive.google.com/file/d/1-AWafd2cwiV7JXp_gNKEAH-x6lIkgTtQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Agony (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Agony%20%28USA%29.png",
    size: "2362 KB",
    link1: "https://drive.google.com/file/d/1Ez-RGAcMMIhPhYFcrGD6NATs-PpAap2P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Air Support (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Air%20Support%20%28USA%29.png",
    size: "928 KB",
    link1: "https://drive.google.com/file/d/178sV3usiQttcHoTV8hHN5gdppz6wnBEd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Fires 2199 AD (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Alien%20Fires%202199%20AD%20%28USA%29.png",
    size: "1233 KB",
    link1: "https://drive.google.com/file/d/191Rm_tPuxqcgX-14ZDUwkAkPpdo8Hh6E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Syndrome (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Alien%20Syndrome%20%28USA%29.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/131LJKz-A5PmTcUqGxTVwVMSTgeW5D-fu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Syndrome (USA) (Budget - Mindscape)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Alien%20Syndrome%20%28USA%29%20%28Budget%20-%20Mindscape%29.png",
    size: "359 KB",
    link1: "https://drive.google.com/file/d/1XxfhM8h5jHouQL2KipEesdQ6HZG9B2Nc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Amiga Karate (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Amiga%20Karate%20%28USA%29.png",
    size: "687 KB",
    link1: "https://drive.google.com/file/d/1M7YkXlJVaYeb2rk86bo650DRR-ZWEb3o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aquaventura (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Aquaventura%20%28USA%29.png",
    size: "1492 KB",
    link1: "https://drive.google.com/file/d/1OQsvbVSTZFdXvElVdyHrZqomKEmW4vBP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Archipelagos (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Archipelagos%20%28USA%29.png",
    size: "157 KB",
    link1: "https://drive.google.com/file/d/1wUuncsQ9mAwvQkwGezJvGzLOt_Q8qtqA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Archon - The Light and the Dark (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Archon%20-%20The%20Light%20and%20the%20Dark%20%28USA%29.png",
    size: "400 KB",
    link1: "https://drive.google.com/file/d/1yfC1WDsXdLlidXtY3yeCWNTEUk-WMTrr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Archon II - Adept (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Archon%20II%20-%20Adept%20%28USA%29.png",
    size: "479 KB",
    link1: "https://drive.google.com/file/d/1ufE1-u3TbSA6pLw-SBlcIgjXArx4Xec1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arctic Fox (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Arctic%20Fox%20%28USA%29.png",
    size: "369 KB",
    link1: "https://drive.google.com/file/d/1142iqhYrRpdamTGlXm5Jql8ovoUE3p6u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arena (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Arena%20%28USA%29.png",
    size: "234 KB",
    link1: "https://drive.google.com/file/d/16W3GmJPuUOTTXxK0k1CO7XWUCZoA1eQP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arkanoid (USA) (v1.05 1988-03-31)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Arkanoid%20%28USA%29%20%28v1.05%201988-03-31%29.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/19DhzCbS_dBSixC8ozcTyLBefHMJfEqz6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arkanoid (USA) (v1.05 3.31.88) (AmigaDOS)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Arkanoid%20%28USA%29%20%28v1.05%203.31.88%29%20%28AmigaDOS%29.png",
    size: "272 KB",
    link1: "https://drive.google.com/file/d/1J3vRL0gkCVR8Nv45IvcbO7q0ZDTVC9l5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arthur - The Quest for Excalibur (USA) (r54)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Arthur%20-%20The%20Quest%20for%20Excalibur%20%28USA%29%20%28r54%29.png",
    size: "618 KB",
    link1: "https://drive.google.com/file/d/15ahClBQvR9jdFI72Z1dR3wI__2oCZWCG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Atomino (USA) (En,Fr,It)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Atomino%20%28USA%29%20%28En%2CFr%2CIt%29.png",
    size: "492 KB",
    link1: "https://drive.google.com/file/d/1CABuFX-P2k-yxBxtcP3btWEM-RsVVwNt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Back to the Future Part III (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Back%20to%20the%20Future%20Part%20III%20%28USA%29.png",
    size: "1224 KB",
    link1: "https://drive.google.com/file/d/1eqP5_PDJCFiIqFp3S5-4rpOq2bCsTQIr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bad Dudes (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Bad%20Dudes%20%28USA%29.png",
    size: "549 KB",
    link1: "https://drive.google.com/file/d/16lLIN0g_eNyYGQ7xU-l-Aez-MZxGCqWf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Balance of Power - Geopolitics in the Nuclear Age (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Balance%20of%20Power%20-%20Geopolitics%20in%20the%20Nuclear%20Age%20%28USA%29.png",
    size: "447 KB",
    link1: "https://drive.google.com/file/d/1qW3MW1aoKxM_gfGg08GZHTuk7lx_pYgP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bard's Tale, The - Tales of the Unknown (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Bard%27s%20Tale%2C%20The%20-%20Tales%20of%20the%20Unknown%20%28USA%29.png",
    size: "754 KB",
    link1: "https://drive.google.com/file/d/1xk1w8U1rKmFxfD3rju-Na-adDwCJPy5e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Command (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Battle%20Command%20%28USA%29.png",
    size: "541 KB",
    link1: "https://drive.google.com/file/d/1SrpIqKGt325ynN8MWXf2FTX3Tz7VabHP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Squadron - The Destruction of the Barrax Empire! (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Battle%20Squadron%20-%20The%20Destruction%20of%20the%20Barrax%20Empire%21%20%28USA%29.png",
    size: "857 KB",
    link1: "https://drive.google.com/file/d/1s1XN4MoMb6vo3PHTC2qWGYqeULqch8jQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BattleTech - The Crescent Hawk's Inception (USA) (v2.3)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/BattleTech%20-%20The%20Crescent%20Hawk%27s%20Inception%20%28USA%29%20%28v2.3%29.png",
    size: "525 KB",
    link1: "https://drive.google.com/file/d/1LYPmFWL5iZ0-zGK81R_OdEqJeJabG-AT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battlestorm (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Battlestorm%20%28USA%29.png",
    size: "545 KB",
    link1: "https://drive.google.com/file/d/1gsK-VfZMdgeTHsNvHYpo9XMemDWNHGRj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bermuda Project (USA)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "674 KB",
    link1: "https://drive.google.com/file/d/14Ccov-9_d1EhuOdcSKmnDGS72_LZzorI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beyond Zork - The Coconut of Quendor (USA) (r57)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Beyond%20Zork%20-%20The%20Coconut%20of%20Quendor%20%28USA%29%20%28r57%29.png",
    size: "300 KB",
    link1: "https://drive.google.com/file/d/1hxQ4sju1_wkeEL_uU_msU-F_k2q-bKQ5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bionic Commando (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Bionic%20Commando%20%28USA%29.png",
    size: "341 KB",
    link1: "https://drive.google.com/file/d/1JX4ns7BQl7ErCLVvbWF1Kx_ldPCtyEQB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blue Angels - Formation Flight Simulation (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Blue%20Angels%20-%20Formation%20Flight%20Simulation%20%28USA%29.png",
    size: "424 KB",
    link1: "https://drive.google.com/file/d/1zuQNDGbpVtyzJuOFZ4Sq9WKGlnPUEQR0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Boot, Das (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Boot%2C%20Das%20%28USA%29.png",
    size: "866 KB",
    link1: "https://drive.google.com/file/d/1sNLE1_Fnho8V_xJKlcPCbICYlV1g3wAH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brataccas (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Brataccas%20%28USA%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1hVll3EnzMnAb4A5c4EoChQ6Lr4t8JReR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Breach (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Breach%20%28USA%29.png",
    size: "487 KB",
    link1: "https://drive.google.com/file/d/1TKfoUX5xZGbPwq3FEQQaQ5LTVq8b5M1o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubble Bobble (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Bubble%20Bobble%20%28USA%29.png",
    size: "201 KB",
    link1: "https://drive.google.com/file/d/1rFmng84zTxBwrpl8UlpmiciHg0x9rwjW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buck Rogers - Countdown to Doomsday - Science Fiction Role-Playing Computer Game, Vol.I (USA) (v1.0)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Buck%20Rogers%20-%20Countdown%20to%20Doomsday%20-%20Science%20Fiction%20Role-Playing%20Computer%20Game%2C%20Vol.I%20%28USA%29%20%28v1.0%29.png",
    size: "1347 KB",
    link1: "https://drive.google.com/file/d/1CWqvrEwy30oFdZnglPcpi5kOkT8Weul8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bureaucracy (USA) (r86)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Bureaucracy%20%28USA%29%20%28r86%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/13XtSYVnKph34Y4GRLhPJxL_jpNEblhwz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Blood (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Captain%20Blood%20%28USA%29.png",
    size: "631 KB",
    link1: "https://drive.google.com/file/d/1NFaak6-1PfKEf2tqMe5Ydj7Kwb2HlGZq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carthage (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Carthage%20%28USA%29.png",
    size: "1007 KB",
    link1: "https://drive.google.com/file/d/1mwBQ4qOG2OYEjzjxPApCvM1gq0Gx8aRY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castle of Dr. Brain (USA) (v1.0)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Castle%20of%20Dr.%20Brain%20%28USA%29%20%28v1.0%29.png",
    size: "2540 KB",
    link1: "https://drive.google.com/file/d/1EUmP86i4GWMuK6kFLZT9suDPvkQkt_nk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Centurion - Defender of Rome (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Centurion%20-%20Defender%20of%20Rome%20%28USA%29.png",
    size: "1488 KB",
    link1: "https://drive.google.com/file/d/1fCHur1ksilWGtpntibKxeO-1hJ_9AHfo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chessmaster 2100 (USA) (v1.2)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Chessmaster%202100%20%28USA%29%20%28v1.2%29.png",
    size: "1004 KB",
    link1: "https://drive.google.com/file/d/1rSrhclfn-pdqH8WnzkM_pPIWAq8B5HQj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chip's Challenge (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Chip%27s%20Challenge%20%28USA%29.png",
    size: "215 KB",
    link1: "https://drive.google.com/file/d/1priQZxcdeQthAc03D47NjLvg2WcaCMCx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clue - Master Detective (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Clue%20-%20Master%20Detective%20%28USA%29.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/1_lNr0N8P8p-psA72KzOPIvKdThpZ9aFO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Computer Third Reich (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Computer%20Third%20Reich%20%28USA%29.png",
    size: "414 KB",
    link1: "https://drive.google.com/file/d/1vLmqHVUeR_FOR098eF4kKmoXCuhVRRt8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cosmic Relief (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Cosmic%20Relief%20%28USA%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1x92RLX7uZMAP8-R4zskXn3UUa6CZ03Dq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Damocles - Mercenary II (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Damocles%20-%20Mercenary%20II%20%28USA%29.png",
    size: "219 KB",
    link1: "https://drive.google.com/file/d/1K1H98QDqy6JHM5Lwq0N028_vxiAcWDEl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dark Castle (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Dark%20Castle%20%28USA%29.png",
    size: "875 KB",
    link1: "https://drive.google.com/file/d/1xraLTxFR0P6gLnfPMPZBS3_GY-GSYG8h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dark Side (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Dark%20Side%20%28USA%29.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1HKD4JLkrNQWqgCkUKTvQHZFgVZn2oBTF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Death Bringer (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Death%20Bringer%20%28USA%29.png",
    size: "681 KB",
    link1: "https://drive.google.com/file/d/1TZOCcC-8xogG3Hs3-zd3r4XbRr3E_oqb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Space (USA) (v1.00a)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Deep%20Space%20%28USA%29%20%28v1.00a%29.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/1WSCD6LT0jXRd2QKS62OlrNM3NPSDHIo6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Defender of the Crown (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Defender%20of%20the%20Crown%20%28USA%29.png",
    size: "892 KB",
    link1: "https://drive.google.com/file/d/1SCar-DqXNtwTWfmrhKAKl740v5hAyxkF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deja Vu - A Nightmare Comes True! (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Deja%20Vu%20-%20A%20Nightmare%20Comes%20True%21%20%28USA%29.png",
    size: "574 KB",
    link1: "https://drive.google.com/file/d/1bDqSGQkLKY938oFg-DoEHxtTizC9jQn1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Demon's Winter (USA) (v1.0)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Demon%27s%20Winter%20%28USA%29%20%28v1.0%29.png",
    size: "475 KB",
    link1: "https://drive.google.com/file/d/1GqMyGEmDsXtZ0jzYUVLhlVrB7t28IYIe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon II - The Revenge (USA) (v4.16ecs)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Double%20Dragon%20II%20-%20The%20Revenge%20%28USA%29%20%28v4.16ecs%29.png",
    size: "920 KB",
    link1: "https://drive.google.com/file/d/12jxECs1Xq0NjYKYEhUguM8f4YlxaXswk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dr. Doom's Revenge! (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Dr.%20Doom%27s%20Revenge%21%20%28USA%29.png",
    size: "1220 KB",
    link1: "https://drive.google.com/file/d/1iZ1ul8hVTfBRqfHUpP48Jb0ypps-6ykT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Drakkhen (USA) (v1.1)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Drakkhen%20%28USA%29%20%28v1.1%29.png",
    size: "1271 KB",
    link1: "https://drive.google.com/file/d/1-tvOs-6TKAFqVQKyIGyl9i7vylNwZjcy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ebonstar (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Ebonstar%20%28USA%29.png",
    size: "221 KB",
    link1: "https://drive.google.com/file/d/1aEaYz5Pfhq9l01By4CxtSTrqdY_FCEpt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-19 Stealth Fighter (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/F-19%20Stealth%20Fighter%20%28USA%29.png",
    size: "1009 KB",
    link1: "https://drive.google.com/file/d/19CUKJxKSwdQNSUxSthMutiekPF1IQTvO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Falcon (USA) (v1.00)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Falcon%20%28USA%29%20%28v1.00%29.png",
    size: "1165 KB",
    link1: "https://drive.google.com/file/d/1ffjrRAYlohZeox_uElm64CMpHHDfVpcO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Falcon (USA) (v1.1)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Falcon%20%28USA%29%20%28v1.1%29.png",
    size: "1123 KB",
    link1: "https://drive.google.com/file/d/1P1SDw4sRPJLiRbmY6JBC5wp5TQcyu7ML/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Falcon Mission Disk - Operation Counterstrike (USA) (Addon)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Falcon%20Mission%20Disk%20-%20Operation%20Counterstrike%20%28USA%29%20%28Addon%29.png",
    size: "491 KB",
    link1: "https://drive.google.com/file/d/12QNegFWkl6zUm7DWt_8PejVNuKcGTQr7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Federation (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Federation%20%28USA%29.png",
    size: "425 KB",
    link1: "https://drive.google.com/file/d/1gx6kCuuylgJ0pil_9RsZkGDOIyZaEauv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fighter Duel Pro (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Fighter%20Duel%20Pro%20%28USA%29.png",
    size: "1642 KB",
    link1: "https://drive.google.com/file/d/1GByXkNctTRWfp7CMFdB6cR0DelUCV9_C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FireZone (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/FireZone%20%28USA%29.png",
    size: "163 KB",
    link1: "https://drive.google.com/file/d/1RRYc0IuJ3FeoIKK_rz-gNLcqs0z3IjRz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flight Simulator II (USA) (v1.0)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Flight%20Simulator%20II%20%28USA%29%20%28v1.0%29.png",
    size: "372 KB",
    link1: "https://drive.google.com/file/d/1xve6iI9PilTMGucChfBeWISXcm7fq2lP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Four Crystals of Trazere, The (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Four%20Crystals%20of%20Trazere%2C%20The%20%28USA%29.png",
    size: "1328 KB",
    link1: "https://drive.google.com/file/d/1DZ7AdWXMlcCAgIee-4qE2llFkt09mF41/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Future Wars - Time Travellers (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Future%20Wars%20-%20Time%20Travellers%20%28USA%29.png",
    size: "1540 KB",
    link1: "https://drive.google.com/file/d/1Xihyj3RVDY878KDTVJ99S12pEIuTjp8Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GFL Championship Football (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/GFL%20Championship%20Football%20%28USA%29.png",
    size: "265 KB",
    link1: "https://drive.google.com/file/d/1XB2FbT-X4p7DrY9rDXoE6RJ4aegLielc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghostbusters II (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Ghostbusters%20II%20%28USA%29.png",
    size: "1232 KB",
    link1: "https://drive.google.com/file/d/1FslXsP4YsScbjytHsUy5kFXXU8GeV9Mi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gunship (USA) (v832.03)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Gunship%20%28USA%29%20%28v832.03%29.png",
    size: "594 KB",
    link1: "https://drive.google.com/file/d/1tzaEZcmgFGFfGFUh6TorDQarS4X_yE9f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hacker (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Hacker%20%28USA%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1CDyifyBDWkmL3EGywClUm2krdJSSXzom/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hare Raising Havoc (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Hare%20Raising%20Havoc%20%28USA%29.png",
    size: "4172 KB",
    link1: "https://drive.google.com/file/d/1C97VjKk6HsR-R3C11KFq9gn4UyHnmQSn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harrier Combat Simulator (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Harrier%20Combat%20Simulator%20%28USA%29.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/1KBv4juQ_XsJ1RdNNKrhuV7dopIQ7nccM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hollywood Hijinx (USA) (r37)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Hollywood%20Hijinx%20%28USA%29%20%28r37%29.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1_MpZOc0rkoarD45CYTpm4q_hKju05A15/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hostage - Rescue Mission (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Hostage%20-%20Rescue%20Mission%20%28USA%29.png",
    size: "498 KB",
    link1: "https://drive.google.com/file/d/18Mi60A9-rHBz3fEt9A5nm5qdkl_Ajzgh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hybris (USA) (v0.95)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Hybris%20%28USA%29%20%28v0.95%29.png",
    size: "683 KB",
    link1: "https://drive.google.com/file/d/1fd7e59rt4lnWP-z_PxI98YjjEIHn_FqE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indiana Jones and the Last Crusade - The Graphic Adventure (USA) (v1.4 10.4.89)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Indiana%20Jones%20and%20the%20Last%20Crusade%20-%20The%20Graphic%20Adventure%20%28USA%29%20%28v1.4%2010.4.89%29.png",
    size: "2056 KB",
    link1: "https://drive.google.com/file/d/1uDVwkneXSrs1GoABjkNjNRPx_0AK9PwO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Infidel (USA) (r22)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Infidel%20%28USA%29%20%28r22%29.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1n8tdm9OvoAI4SXa8bMc5PWolaPtlGIiO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jack Nicklaus' Unlimited Golf & Course Design (USA)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "1127 KB",
    link1: "https://drive.google.com/file/d/1c6hVcV-ZFjREC8n22qtlKw1WMPafcCnR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Bond - The Stealth Affair (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/James%20Bond%20-%20The%20Stealth%20Affair%20%28USA%29.png",
    size: "2304 KB",
    link1: "https://drive.google.com/file/d/1_4t6Z2v0N-CxMIjPBYyV4T5AjMIb9wq0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keef the Thief - A Boy and His Lockpick (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Keef%20the%20Thief%20-%20A%20Boy%20and%20His%20Lockpick%20%28USA%29.png",
    size: "1290 KB",
    link1: "https://drive.google.com/file/d/16D3KA3eP0N4c5WM5dlAFfY3w66_AaYrb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Khalaan (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Khalaan%20%28USA%29.png",
    size: "1218 KB",
    link1: "https://drive.google.com/file/d/1IeSQDQNi0XlLv3j9xBKISjq8nsXaEkWe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Killing Cloud, The (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Killing%20Cloud%2C%20The%20%28USA%29.png",
    size: "1049 KB",
    link1: "https://drive.google.com/file/d/1j5e4YvvwBBN5wy08KROtKEGlHDV-jLtl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kristal, The (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Kristal%2C%20The%20%28USA%29.png",
    size: "2180 KB",
    link1: "https://drive.google.com/file/d/17SjyF4YG-vBvwCiSp_HbTdEz2lQ3Vzrz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Laser Squad (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Laser%20Squad%20%28USA%29.png",
    size: "705 KB",
    link1: "https://drive.google.com/file/d/1F7rRQOC2--0RckPOuU-7X4t1kbtaEYuH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Leander (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Leander%20%28USA%29.png",
    size: "2607 KB",
    link1: "https://drive.google.com/file/d/1WeFak2MdWeNIQrsW6FQAxP5xJpoLsmyg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Faerghail (USA) (v2.0e 1990-10-17)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Legend%20of%20Faerghail%20%28USA%29%20%28v2.0e%201990-10-17%29.png",
    size: "2084 KB",
    link1: "https://drive.google.com/file/d/1lG2Am4ke-0gpzdytAGFMQwyzYOkoLm84/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Lemmings%20%28USA%29.png",
    size: "1492 KB",
    link1: "https://drive.google.com/file/d/1ozUZSU7_qiIJinu3F-fWPBBhOvQAU5nf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (USA) (Alt 1)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Lemmings%20%28USA%29%20%28Alt%201%29.png",
    size: "1431 KB",
    link1: "https://drive.google.com/file/d/1GDjz2Ao_REU-kZ3e1qt1RPrBuPiaimBI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings 2 - The Tribes (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Lemmings%202%20-%20The%20Tribes%20%28Europe%29.png",
    size: "2504 KB",
    link1: "https://drive.google.com/file/d/11XDNrzRKDFQULP4DncaVjUabhpbzi5bL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Links - The Challenge of Golf (USA) (v1.50)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Links%20-%20The%20Challenge%20of%20Golf%20%28USA%29%20%28v1.50%29.png",
    size: "1841 KB",
    link1: "https://drive.google.com/file/d/1sPoReAb-65kglirIzjmtCifPbGKcds1N/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Little Computer People (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Little%20Computer%20People%20%28USA%29.png",
    size: "265 KB",
    link1: "https://drive.google.com/file/d/13tfzuI-mYP27TsASCqZnzvD4ajNeVXme/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lords of the Rising Sun (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Lords%20of%20the%20Rising%20Sun%20%28USA%29.png",
    size: "1314 KB",
    link1: "https://drive.google.com/file/d/1a4tjv9cXKRcdnmNgypP5Sk3INDoLYLup/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lost Patrol (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Lost%20Patrol%20%28USA%29.png",
    size: "1508 KB",
    link1: "https://drive.google.com/file/d/1RUXc4VoqLg7rxXiQhN0VuU9GgLGAWgNW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lost Treasures of Infocom, The (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Lost%20Treasures%20of%20Infocom%2C%20The%20%28USA%29.png",
    size: "3961 KB",
    link1: "https://drive.google.com/file/d/1-hkEpH5hZeYs2urxTlI72IaEkDSjjaTm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lurking Horror, The (USA) (r221)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "728 KB",
    link1: "https://drive.google.com/file/d/11Xwnor_KK8DMB0TczSgJYFSSGHYUCbr0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Manhunter 2 - San Francisco (USA) (v3.06)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Manhunter%202%20-%20San%20Francisco%20%28USA%29%20%28v3.06%29.png",
    size: "2425 KB",
    link1: "https://drive.google.com/file/d/14SJMICxkJVGwem0PkBY7Ly6GXBAEtY3S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Millenium - Return to Earth (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Millenium%20-%20Return%20to%20Earth%20%28USA%29.png",
    size: "528 KB",
    link1: "https://drive.google.com/file/d/1c5pHIesHQbVwM0BsWsYAoVFfatAVRNU7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mind Forever Voyaging, A (USA) (r79)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Mind%20Forever%20Voyaging%2C%20A%20%28USA%29%20%28r79%29.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/1dn0xkFfa-DGnL6UVjurXPe0SgAun4hX9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moebius - The Orb of Celestial Harmony (USA)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/1bkjb0sBdgtyTbwqqxkvpPVdHihtlbrct/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monty Python's Flying Circus (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Monty%20Python%27s%20Flying%20Circus%20%28USA%29.png",
    size: "285 KB",
    link1: "https://drive.google.com/file/d/1Vtklql_nXPUwAr7gQbDTYzHcwao2aU8C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moonmist (USA) (r4)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Moonmist%20%28USA%29%20%28r4%29.png",
    size: "171 KB",
    link1: "https://drive.google.com/file/d/1kgiealRvPmFGGt9cQfnkQhOq9cmnoKZG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "New York Warriors (USA) (1MB)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/New%20York%20Warriors%20%28USA%29%20%281MB%29.png",
    size: "1014 KB",
    link1: "https://drive.google.com/file/d/15VE92O4NrXH_Y1QvL-r2G59xrhSe2RxK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nightdawn (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Nightdawn%20%28USA%29.png",
    size: "507 KB",
    link1: "https://drive.google.com/file/d/1L6mi7E4Wy15o4JFT4KFwIE3wfHGwNRtI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nord and Bert Couldn't Make Head or Tail of It (USA) (r19)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Nord%20and%20Bert%20Couldn%27t%20Make%20Head%20or%20Tail%20of%20It%20%28USA%29%20%28r19%29.png",
    size: "206 KB",
    link1: "https://drive.google.com/file/d/1n3lBuqwF_YiYR3HN8HmyKNal4ORPjJhp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "North & South (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/North%20and%20South%20%28Europe%29.png",
    size: "610 KB",
    link1: "https://drive.google.com/file/d/1OtGI8-teiM-b2EL_kkfifGd09eNsjuoa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nuclear War (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Nuclear%20War%20%28USA%29.png",
    size: "1164 KB",
    link1: "https://drive.google.com/file/d/1hV27v8OVBtY2sDpaNPT6S_I6NYCBbmXu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ogre (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Ogre%20%28USA%29.png",
    size: "287 KB",
    link1: "https://drive.google.com/file/d/1KUvzAJpLQNjVlSJswWTFrFGyxQdbVMud/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Oh No! More Lemmings (USA) (Addon)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Oh%20No%21%20More%20Lemmings%20%28USA%29%20%28Addon%29.png",
    size: "569 KB",
    link1: "https://drive.google.com/file/d/1JrldgHcGAL-W9Eyfn7bzXqy6grbHMbe_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Out of this World (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Out%20of%20this%20World%20%28USA%29.png",
    size: "1270 KB",
    link1: "https://drive.google.com/file/d/1wosPbsM7Z3KYsUpXRKAmoW1jDo7unME6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "OutRun (USA) (1988)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/OutRun%20%28USA%29%20%281988%29.png",
    size: "459 KB",
    link1: "https://drive.google.com/file/d/1B8xykEKZMCE7kTPZ41UlIhgALIzfHDBG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Over the Net (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Over%20the%20Net%20%28USA%29.png",
    size: "561 KB",
    link1: "https://drive.google.com/file/d/1nbIgsJCmDSD-teHUrLmAgQ9g8pV9ddRY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pinball Fantasies (USA) (AGA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Pinball%20Fantasies%20%28USA%29%20%28AGA%29.png",
    size: "1542 KB",
    link1: "https://drive.google.com/file/d/16unC4Rn8o9bZd4l4Ss49EqiLfVORYLk6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Platoon (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Platoon%20%28USA%29.png",
    size: "525 KB",
    link1: "https://drive.google.com/file/d/10_uBrrQUMwTA3cciyWAsciCKbwTulugN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Plutos (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Plutos%20%28USA%29.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1ycoqSfuAyRdTna2vc7twgbPpLRQfeyaU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Police Quest - In Pursuit of the Death Angel (USA) (v2.0B 2.22.89)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Police%20Quest%20-%20In%20Pursuit%20of%20the%20Death%20Angel%20%28USA%29%20%28v2.0B%202.22.89%29.png",
    size: "712 KB",
    link1: "https://drive.google.com/file/d/12nogH8HpuryBghany_xGptBoNADGxZwf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Police Quest 3 - The Kindred (USA) (v1.000)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Police%20Quest%203%20-%20The%20Kindred%20%28USA%29%20%28v1.000%29.png",
    size: "4092 KB",
    link1: "https://drive.google.com/file/d/1bQNESwXqeaMQ0C2SHbZT9rcOIEyIwMaD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Populous (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Populous%20%28USA%29.png",
    size: "533 KB",
    link1: "https://drive.google.com/file/d/1HGFEal7hJufH-hM7Ghek8Q5LLBlar0lb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Portal (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Portal%20%28USA%29.png",
    size: "941 KB",
    link1: "https://drive.google.com/file/d/1pPZscuI46oUDQOW8mWhG8nCU8KPSZoH5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Powerstyx (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Powerstyx%20%28USA%29.png",
    size: "538 KB",
    link1: "https://drive.google.com/file/d/1gukB5j4haFbYR0N4-J3lydQteqnqTQL8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Prince%20of%20Persia%20%28USA%29.png",
    size: "348 KB",
    link1: "https://drive.google.com/file/d/1j_t7ko-KVdIlG4kfZHNaq_4VSC3MTghL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Purple Saturn Day (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Purple%20Saturn%20Day%20%28USA%29.png",
    size: "687 KB",
    link1: "https://drive.google.com/file/d/1iPdkDV-iZL_Y4rS7f_kEs5xWRKOpYq7L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "QIX (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/QIX%20%28USA%29.png",
    size: "226 KB",
    link1: "https://drive.google.com/file/d/1UpZEYx8QALksNrF-xPRC-rVf-pQagJAc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-C Aerochopper (USA) (v1.1)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "242 KB",
    link1: "https://drive.google.com/file/d/1eVl30f6FhYkLP0-0o4e_ahAeb78UFpZ3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rambo III (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Rambo%20III%20%28USA%29.png",
    size: "576 KB",
    link1: "https://drive.google.com/file/d/1LDPprCJSIiK-bUJhNDfK1nJFFkx4vVDB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Reach for the Stars - The Conquest of the Galaxy (USA) (v3.0)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Reach%20for%20the%20Stars%20-%20The%20Conquest%20of%20the%20Galaxy%20%28USA%29%20%28v3.0%29.png",
    size: "516 KB",
    link1: "https://drive.google.com/file/d/1Cs7l5YVi6m4OlfsPaSCKKz_GN3Up9Q6p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop 3D (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/RoboCop%203D%20%28USA%29.png",
    size: "2422 KB",
    link1: "https://drive.google.com/file/d/17yEnc-8iBex3b2p7C8IF43L33vQsAbht/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rules of Engagement (USA) (v1.03 10.14.91)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Rules%20of%20Engagement%20%28USA%29%20%28v1.03%2010.14.91%29.png",
    size: "1072 KB",
    link1: "https://drive.google.com/file/d/1Rf8yBEB-w7KM9o0e2DFbujnzLNctD_mQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "S.D.I. (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/S.D.I.%20%28USA%29.png",
    size: "519 KB",
    link1: "https://drive.google.com/file/d/1G0Rhxd-nU0qHp3mdvkKxp9dyUHldKlrc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Saddam Hussein Game, The (USA)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "546 KB",
    link1: "https://drive.google.com/file/d/1z6SdcD7xgJaIXG46N_IklTwnmAIGDcWN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Seven Cities of Gold (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Seven%20Cities%20of%20Gold%20%28USA%29.png",
    size: "203 KB",
    link1: "https://drive.google.com/file/d/109Wgy85EYbztPjDVKQqHObkN9EFT-5lB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow of the Beast III (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Shadow%20of%20the%20Beast%20III%20%28USA%29.png",
    size: "2248 KB",
    link1: "https://drive.google.com/file/d/19H68DrIxJUGEWNdbb_Nkzgi64G4iDFIv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Shanghai%20%28USA%29.png",
    size: "238 KB",
    link1: "https://drive.google.com/file/d/1ygYpyPhf8APjmqKM8Ye8YWIWWB1EV8W3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinobi (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Shinobi%20%28USA%29.png",
    size: "598 KB",
    link1: "https://drive.google.com/file/d/1zT0YY-3LXJTzNtJZdp2wtwU8gYG5J6XH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Silent Service II (USA) (v1.01)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Silent%20Service%20II%20%28USA%29%20%28v1.01%29.png",
    size: "806 KB",
    link1: "https://drive.google.com/file/d/1DJKWLoAf3uQlwqbcpR-6Pkbeb8bq6bYN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Silicon Dreams (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Silicon%20Dreams%20%28USA%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1icH0UsqRJuhrnaV5a7nv_W2taaWa9uwc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimCity (USA) (v1.0)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/SimCity%20%28USA%29%20%28v1.0%29.png",
    size: "513 KB",
    link1: "https://drive.google.com/file/d/11yhkU3AgCiCVUusZCnrpyaCA1EiXR20p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimCity (USA) (v1.2)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/SimCity%20%28USA%29%20%28v1.2%29.png",
    size: "474 KB",
    link1: "https://drive.google.com/file/d/1nrJWt7RYcdZVV4g3sDIjykPdIuvYX-ZZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimCity - Architecture 1 - Future Cities (USA) (v1.00)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/SimCity%20-%20Architecture%201%20-%20Future%20Cities%20%28USA%29%20%28v1.00%29.png",
    size: "710 KB",
    link1: "https://drive.google.com/file/d/1ErUNfuk27kOQS1-KpjdnzY8lgiWlUrjp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimCity - Architecture 2 - Ancient Cities (USA) (v1.00)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/SimCity%20-%20Architecture%202%20-%20Ancient%20Cities%20%28USA%29%20%28v1.00%29.png",
    size: "529 KB",
    link1: "https://drive.google.com/file/d/1mPvqUuTO0Z_PsqYZOeWKmFXV9_O1_FBt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimCity - Terrain Editor (USA) (v1.0)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/SimCity%20-%20Terrain%20Editor%20%28USA%29%20%28v1.0%29.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/1bbKd_-DTVGWdP7I6qQg6iFFUcKE6eVNu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sinbad and the Throne of the Falcon (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Sinbad%20and%20the%20Throne%20of%20the%20Falcon%20%28USA%29.png",
    size: "1275 KB",
    link1: "https://drive.google.com/file/d/17gezo--5-79jOtiyu0DuX7HT8O66TUKo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Skyfox (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Skyfox%20%28USA%29.png",
    size: "373 KB",
    link1: "https://drive.google.com/file/d/18etic5JVf4uYttoO0X4DMWQbQfPD06vH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Skyfox (USA) (HLS)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Skyfox%20%28USA%29%20%28HLS%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1Ky83GMOqNvOxCRZD6JO8ApYFT413voMh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slaygon (USA) (v1.1)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Slaygon%20%28USA%29%20%28v1.1%29.png",
    size: "212 KB",
    link1: "https://drive.google.com/file/d/1VokVU2unYoYeIWq-OSwlQgTuK93jG8Mm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Solitaire's Journey (USA)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "941 KB",
    link1: "https://drive.google.com/file/d/1muN9UiBWqg_jyugd6irCM8gyScpVeqUU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Quest Chapter 1 - The Sarien Encounter (USA) (v1.2) (HLS)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Space%20Quest%20Chapter%201%20-%20The%20Sarien%20Encounter%20%28USA%29%20%28v1.2%29%20%28HLS%29.png",
    size: "516 KB",
    link1: "https://drive.google.com/file/d/1rJPwp9NS-ltKSFCFomra_8phRBwa93f4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Quest IV - Roger Wilco and the Time Rippers (USA) (v1.000)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Space%20Quest%20IV%20-%20Roger%20Wilco%20and%20the%20Time%20Rippers%20%28USA%29%20%28v1.000%29.png",
    size: "5442 KB",
    link1: "https://drive.google.com/file/d/1m8CJBylVVs1gnpHXUxGQvX0ZqlXN9OA5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Station Oblivion (USA)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "861 KB",
    link1: "https://drive.google.com/file/d/1Fq1VEcU3rWlqFT4VDsQL-iiKaxuecA26/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SpaceCutter (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/SpaceCutter%20%28USA%29.png",
    size: "321 KB",
    link1: "https://drive.google.com/file/d/1RW5-1FYBx79LPam9T7awWv0fXsffQIiU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spacewrecked - 14 Billion Light Years From Earth (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Spacewrecked%20-%2014%20Billion%20Light%20Years%20From%20Earth%20%28USA%29.png",
    size: "1911 KB",
    link1: "https://drive.google.com/file/d/1OHRHBxgNSKotjIHzXzbp6BXwLqpY5gqX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball (USA) (v1.05)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Speedball%20%28USA%29%20%28v1.05%29.png",
    size: "295 KB",
    link1: "https://drive.google.com/file/d/11g2CcyB1SXMM64rchPiRl_OJvEzZqy2w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball 2 - Brutal Deluxe (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Speedball%202%20-%20Brutal%20Deluxe%20%28USA%29.png",
    size: "656 KB",
    link1: "https://drive.google.com/file/d/1kYMs-MCg2qEVivnNy1ScXRtxXuO4D2ng/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spirit of Excalibur (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Spirit%20of%20Excalibur%20%28USA%29.png",
    size: "1339 KB",
    link1: "https://drive.google.com/file/d/1hNMtGpgkT6dN7tVSKHulk12iDMsVuyWT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Starcross (USA) (r17)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Starcross%20%28USA%29%20%28r17%29.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1XnlCleOnjKXVXcDYuwB0Xxv59xMdSEKM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stationfall (USA) (r107)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Stationfall%20%28USA%29%20%28r107%29.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1-utQIs-n-ykutXWNLOr-1sdJGHCBJhhE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stellar 7 (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Stellar%207%20%28USA%29.png",
    size: "1850 KB",
    link1: "https://drive.google.com/file/d/1U2EAqRE_k9GjbUU5I2OgMee7-JNqgSjs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stellar Crusade (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Stellar%20Crusade%20%28USA%29.png",
    size: "488 KB",
    link1: "https://drive.google.com/file/d/1RpCM4CEhKL8WYz1un_BBKSpxvwmieS8j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strike Aces (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Strike%20Aces%20%28USA%29.png",
    size: "843 KB",
    link1: "https://drive.google.com/file/d/1ubxlBDqLS1OmHPexHFYkFA4AIAqkHXVl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stunt Track Racer (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Stunt%20Track%20Racer%20%28USA%29.png",
    size: "466 KB",
    link1: "https://drive.google.com/file/d/1qckTWJVookocA5u7yoWyNTiFhYUR8VVp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sub Battle Simulator (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Sub%20Battle%20Simulator%20%28USA%29.png",
    size: "379 KB",
    link1: "https://drive.google.com/file/d/1A4qzTMmyR3rPoK_xaOHeqTN2cb7NIn8l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Suspect (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Suspect%20%28USA%29.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1LHzmXVW81L3ncC-H1XVultDNg2Erqq7l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Suspended (USA) (r8)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Suspended%20%28USA%29%20%28r8%29.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/15jofUCMPeNuLAFn_h3okU_sTGoq4ep8F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terran Envoy (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Terran%20Envoy%20%28USA%29.png",
    size: "708 KB",
    link1: "https://drive.google.com/file/d/1-ZndL_O9bcOs2V1Sc1A-haP2tRiWsRz1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Theme Park Mystery (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Theme%20Park%20Mystery%20%28USA%29.png",
    size: "469 KB",
    link1: "https://drive.google.com/file/d/1xNYCDFTygBKgHnbQUFt9EF9OA1m1L87v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Three Stooges, The (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Three%20Stooges%2C%20The%20%28USA%29.png",
    size: "1339 KB",
    link1: "https://drive.google.com/file/d/1UwVwxFL8uFoDkLi4D7uxe5qECheQWunS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Blade (USA) (Budget - Kixx)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Thunder%20Blade%20%28USA%29%20%28Budget%20-%20Kixx%29.png",
    size: "557 KB",
    link1: "https://drive.google.com/file/d/101HvbPrQTcg2Oe09YX50YfnDBvBGe4CL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunderhawk AH-73M (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Thunderhawk%20AH-73M%20%28USA%29.png",
    size: "1396 KB",
    link1: "https://drive.google.com/file/d/1eCqOrRgY8hrinWXUg_5sfVyypuAs6GUb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Total Eclipse (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Total%20Eclipse%20%28USA%29.png",
    size: "356 KB",
    link1: "https://drive.google.com/file/d/10O-dLEj7LQVDr9Cx_VNlRE3kijzupzRo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tower Toppler (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Tower%20Toppler%20%28USA%29.png",
    size: "265 KB",
    link1: "https://drive.google.com/file/d/1oZXYfHGeSLeOHctz7kSdfNwroyXBkXsY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turrican (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Turrican%20%28USA%29.png",
    size: "906 KB",
    link1: "https://drive.google.com/file/d/1v3ZmrtPLBdHnYAKvjQ1jkjaFTegR3oRa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Twilight Zone, The (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Twilight%20Zone%2C%20The%20%28USA%29.png",
    size: "1334 KB",
    link1: "https://drive.google.com/file/d/1EwSQIvXiNMKpauDOHRQn5Cbe02NP6tBM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Typhoon Thompson in Search for the Sea Child (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Typhoon%20Thompson%20in%20Search%20for%20the%20Sea%20Child%20%28USA%29.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1DV1EzfrZFolpUHeOoWSferwYF5sG8QxE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultima IV - Quest of the Avatar (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Ultima%20IV%20-%20Quest%20of%20the%20Avatar%20%28USA%29.png",
    size: "453 KB",
    link1: "https://drive.google.com/file/d/1DDz3GV8lYbCTE0fM_WNOQKxX2WTqUv-M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Universe 3 (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Universe%203%20%28USA%29.png",
    size: "985 KB",
    link1: "https://drive.google.com/file/d/1fIKG6Or1JAIeR8jAxtmzmmE4MnaRFVEK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unreal (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Unreal%20%28USA%29.png",
    size: "2555 KB",
    link1: "https://drive.google.com/file/d/1Dkg4Xv1qDFRCqA8Drtcsv37-ntfVCtCV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vortex (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Vortex%20%28USA%29.png",
    size: "906 KB",
    link1: "https://drive.google.com/file/d/1hqMz7Vkx5uxlqSl_cFeu-oYkkC2tyfMh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wargame Construction Set (USA)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "482 KB",
    link1: "https://drive.google.com/file/d/1KHJ-WebFKLBhThj9BZkU5zN4SEBSbKLo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warlock (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Warlock%20%28USA%29.png",
    size: "511 KB",
    link1: "https://drive.google.com/file/d/1u2SDKZ0ANEnnE5yOVTtUriOEuA9CGyKy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Windwalker (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Windwalker%20%28USA%29.png",
    size: "691 KB",
    link1: "https://drive.google.com/file/d/1KrE9XW3Mie3BzLpIZ34Rowiawu76gInG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Witness (USA) (r22)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Witness%20%28USA%29%20%28r22%29.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1w5vmZ-Xwx7kRk4ieysv6_bQvaYvtRNoz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Games (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/World%20Games%20%28USA%29.png",
    size: "479 KB",
    link1: "https://drive.google.com/file/d/1EA_19viNIYiTHtjNa5Nxva9Oql5wcCeO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zany Golf (USA)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Zany%20Golf%20%28USA%29.png",
    size: "594 KB",
    link1: "https://drive.google.com/file/d/15kB8GGwUyJkKTTWjVAXm0TDr-c2O9ICn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zork Trilogy (USA) (Zork I r88, II v48, III r17)",
    image: "https://i.postimg.cc/htNPf5yF/amiga500logo.png",
    size: "298 KB",
    link1: "https://drive.google.com/file/d/1ixAeSzVp4w2VI-eJ44OXj7UzxFYDE_UB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zork Zero - The Revenge of Megaboz (USA) (r366)",
    image: "https://thumbnails.libretro.com/Commodore%20-%20Amiga/Named_Boxarts/Zork%20Zero%20-%20The%20Revenge%20of%20Megaboz%20%28USA%29%20%28r366%29.png",
    size: "510 KB",
    link1: "https://drive.google.com/file/d/1Zx0xSYvNVOF05UW1lKT8mYMJmVdsS1WB/view?usp=drivesdk",
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
        <td><img ${window._boxartVisible ? 'src="' + rom.image + '"' : 'data-src="' + rom.image + '"'} alt="${rom.name}"></td>
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

