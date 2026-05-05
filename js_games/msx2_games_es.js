const roms = [
  {
    name: "1942 (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/1942%20%28Japan%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1XVI3KjMnIy1BYq29vXjqnBitYtrPTKJw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "A Ressha de Ikou MSX (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/A%20Ressha%20de%20Ikou%20MSX%20%28Japan%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1oPUFnHw81eLNsCT9HhNNjgud51UpORmk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "AcroJet (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/AcroJet%20%28Japan%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1-JTmSjlCn0KSOyCgJ6SJZ7wKVLzAw9dz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aleste (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Aleste%20%28Japan%29.png",
    size: "113 KB",
    link1: "https://drive.google.com/file/d/1P-qIyP5x342X5WakUGSQKBHtT6lxnwuE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alges no Yoku (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Alges%20no%20Yoku%20%28Japan%29.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1PBBEdF6Z7JPZXi1MH71Y3UOexqXaNQfc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "American Soccer (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/American%20Soccer%20%28Japan%29.png",
    size: "28 KB",
    link1: "https://drive.google.com/file/d/147GqraBvf6mz7np-NpY0i9RAZwdQt2ix/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aoki Ookami to Shiroki Mejika - Genchou Hishi (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Aoki%20Ookami%20to%20Shiroki%20Mejika%20-%20Genchou%20Hishi%20%28Japan%29.png",
    size: "635 KB",
    link1: "https://drive.google.com/file/d/1yAv6s8uDmMbEbpYF5zONbN-LI4rrzqpn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aoki Ookami to Shiroki Mejika - Genghis Khan (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Aoki%20Ookami%20to%20Shiroki%20Mejika%20-%20Genghis%20Khan%20%28Japan%29.png",
    size: "337 KB",
    link1: "https://drive.google.com/file/d/1zgahuNcMuPSZGAynTVusxX1IoIjXB1KZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arctic - Active Rail Playing (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Arctic%20-%20Active%20Rail%20Playing%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1_-JlAwnOgyT6pEyXDN1vaWZ2kJjEAyM1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arkanoid II - Revenge of Doh (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Arkanoid%20II%20-%20Revenge%20of%20Doh%20%28Japan%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1y_OQYLOY8jZnJ_OSqR5398Im7pBM-Lnd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "AshGuine - Densetsu no Seisenshi (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/AshGuine%20-%20Densetsu%20no%20Seisenshi%20%28Japan%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1D5ivx38uuB7xTwjF1gpX3ou4Rxmk4BbI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "AshGuine Story II - Kokuu no Gajou (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/AshGuine%20Story%20II%20-%20Kokuu%20no%20Gajou%20%28Japan%29.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1kx9_QEqIA_tJijP-tn35Twu3pVrJ0f-U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "AshGuine Story III - Fukushuu no Honoo (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/AshGuine%20Story%20III%20-%20Fukushuu%20no%20Honoo%20%28Japan%29.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1mb3T7UG7C_F1shhaxOpoSaPszILF_Zpf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubble Bobble (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Bubble%20Bobble%20%28Japan%29.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/19vf4ypjeNxhJqaztatb8vtA-Mw9sh4_2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cheese 2 (Japan) (Program)",
    image: "https://i.postimg.cc/vBWY6t0f/MSX2-logo.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1XgFzYLozesxBjKEvwZrkOp3pX0Nhw8DN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cockpit, The (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Cockpit%2C%20The%20%28Japan%29.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1YBHninFU9R3kVIhtOzwFfqzeXresx7XY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Contra (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Contra%20%28Japan%29.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/19hrxO5NjoZ5eU_WzoCcKBtzP5UXAB_LC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crimson (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Crimson%20%28Japan%29.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1DU2DGgFHmlXWfk0sZLMCPrXNhHZEOvWF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daikoukai Jidai (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Daikoukai%20Jidai%20%28Japan%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/13FYsxEE8nA7egMFP8zAklQCpMgwYQCkc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daisenryaku MSX2 (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Daisenryaku%20MSX2%20%28Japan%29.png",
    size: "42 KB",
    link1: "https://drive.google.com/file/d/1AWxvZAfWHHp3ieevmag66JwQd5tsnEu1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Darwin 4078 (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Darwin%204078%20%28Japan%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1QYia1pxwOcaPioMUFOVQLlHhC57qwLsE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Forest (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Deep%20Forest%20%28Japan%29.png",
    size: "46 KB",
    link1: "https://drive.google.com/file/d/18WzJ_FMNYFZcVD1849SqhYbhA7CG_c6B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dires - Giger Loop (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Dires%20-%20Giger%20Loop%20%28Japan%29.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1nDlkvr6kI9S2egrVQDMRdRJVGyLNHx9m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Vision (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Double%20Vision%20%28Japan%29.png",
    size: "196 KB",
    link1: "https://drive.google.com/file/d/1F5O1K7-IwwZ57ptr1PGUE9gDaTVGMo5L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Buster (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Dragon%20Buster%20%28Japan%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1ipZ-_wtjsSLscEN1I4wwe8Aammmzl79_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Dragon%20Quest%20%28Japan%29.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1gaNB54-zr_aO6nMnnVd7ZqScFTrnf3VR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest II (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Dragon%20Quest%20II%20%28Japan%29.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1JYnJLHKckdBNO8kmSJK4P-5w83CqCPGF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Slayer IV - Drasle Family (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Dragon%20Slayer%20IV%20-%20Drasle%20Family%20%28Japan%29.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1DaEFA9GzmENt9xu25EfNBh7KRoXPQDyB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Slayer Jr. - Romancia (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Dragon%20Slayer%20Jr.%20-%20Romancia%20%28Japan%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1c4vOK37ZexwWqdLECf7ieXCBrVvw32C4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Druid (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Druid%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1gIdoaIwhjTvn1v3cLdsE4GkU_CJU_JVI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynamite Bowl (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Dynamite%20Bowl%20%28Japan%29.png",
    size: "44 KB",
    link1: "https://drive.google.com/file/d/1uiMK6l6gI7g9G6tvqykmrtTnI-UTBmT-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Eidolon, The (Europe)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Eidolon%2C%20The%20%28Europe%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1LcUbuzJSdyuaA3LWtRA1Yi8nwS9OzSwB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elthlead (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Elthlead%20%28Japan%29.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1oZiEzDOA-kWz7_20xyDTaPRcjL3nWlLW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Empereur, L' (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Empereur%2C%20L%27%20%28Japan%29.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/1JtEAC-ftEy3DGdLVIJpkPsV1xRoPaWoA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Europe Sensen (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Europe%20Sensen%20%28Japan%29.png",
    size: "516 KB",
    link1: "https://drive.google.com/file/d/14dmiW88cHQEOH_OsFlk-19YfY0ncySxS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-15 Strike Eagle (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/F-15%20Strike%20Eagle%20%28Japan%29.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/1K4l_w-KWC47meQF_IOuLOUeCNMjmvLF9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicle Parodic (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Famicle%20Parodic%20%28Japan%29.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1bjWFQfD7vTnaBkjYKhSs6FAmQjY7Kqh0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Billiards (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Family%20Billiards%20%28Japan%29.png",
    size: "27 KB",
    link1: "https://drive.google.com/file/d/17SFirCJ-7eMF-E5cp-9oxYsW2E3IAOUk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Boxing - MSX Title Match (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Family%20Boxing%20-%20MSX%20Title%20Match%20%28Japan%29.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1lYWk7IS9rexo_KC0Zf10OZ8t-g-AwELu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone II - The Tears of Opa-Opa (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Fantasy%20Zone%20II%20-%20The%20Tears%20of%20Opa-Opa%20%28Japan%29.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/1SRm_PAGWVMsobXaWug47b1iw8zaAkNM_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Mystery Murder Club - Satsujin Club (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Final%20Mystery%20Murder%20Club%20-%20Satsujin%20Club%20%28Japan%29.png",
    size: "445 KB",
    link1: "https://drive.google.com/file/d/1E96W8U7uGvMj5fYpkQ8f_661-j2nBeod/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire Ball (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Fire%20Ball%20%28Japan%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1qb9wkGFqrTelIAwscoWAsuIUVweWsBMD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fleet Commander II - Koukon no Kaiiki (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Fleet%20Commander%20II%20-%20Koukon%20no%20Kaiiki%20%28Japan%29.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1D-0vHNrgUhOZzbK0eg1E-7sXSNSYsVCJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakuen Monogatari - High School Story (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Gakuen%20Monogatari%20-%20High%20School%20Story%20%28Japan%29.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1x6k2QZTVW3BktfGFmAncfRKIUQVkV4vi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gambler Jiko Chuushinha 2 - Jishou! Kyougou Janshi Hen (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Gambler%20Jiko%20Chuushinha%202%20-%20Jishou%21%20Kyougou%20Janshi%20Hen%20%28Japan%29.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1-tHY6X0v0h8ry1_9loLpTFp8cdM9c9DC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare Goemon! - Karakuri Douchuu (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Ganbare%20Goemon%21%20-%20Karakuri%20Douchuu%20%28Japan%29%20%28Wii%20U%20Virtual%20Console%29.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1brCnBQtiFjKiMTgTZDezwgZZ3c-9KhgD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Garakuta (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Garakuta%20%28Japan%29.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1vb2hwA1n5dZG7sDbuiPyDl5ctMftRvJF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Garyuu Ou (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Garyuu%20Ou%20%28Japan%29.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1dH-ryLPFGhWTTpUOLZndmJVwLNyMimrJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gekitotsu Pennant Race - Pro Yakyuu, The (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Gekitotsu%20Pennant%20Race%20-%20Pro%20Yakyuu%2C%20The%20%28Japan%29.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1TXsBw4gpDYvJCacstUmXQ_yewufv1TJI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gekitotsu Pennant Race 2 (Japan) (English Menu)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Gekitotsu%20Pennant%20Race%202%20%28Japan%29%20%28English%20Menu%29.png",
    size: "88 KB",
    link1: "https://drive.google.com/file/d/1HDltdU9PqByrH_JZBWIuxKNJLY0EwruE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Girly Block (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Girly%20Block%20%28Japan%29.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1Y1rT3AAZu4X4naAaIyxW9QWbxNna54pu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hacker (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Hacker%20%28Japan%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1Ve43uEwmNgdNahq6RvOvOQfU440Y9fTX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hai no Majutsushi (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Hai%20no%20Majutsushi%20%28Japan%29.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1zMZaIH8rGVZ8P8UdBD076YH7ns6nkkQJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hal Note (Japan) (Program)",
    image: "https://i.postimg.cc/vBWY6t0f/MSX2-logo.png",
    size: "474 KB",
    link1: "https://drive.google.com/file/d/1HNJjSSQMvWzb7ViJmJKTp3UhMtoyX4x4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Han Seimei Senki Andorogynus (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Han%20Seimei%20Senki%20Andorogynus%20%28Japan%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1ACgM_TUWmdtEtLgyNmpNzUB-47ldq6pQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hard Ball (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Hard%20Ball%20%28Japan%29.png",
    size: "42 KB",
    link1: "https://drive.google.com/file/d/1Biiamf3-gXn1Lc1r5ZeEKMAv6fk2hXpO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heroes of the Lance (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Heroes%20of%20the%20Lance%20%28Japan%29.png",
    size: "289 KB",
    link1: "https://drive.google.com/file/d/1dtqZoyIjXCYVknga5CjPhOVTWrM9WLID/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Higemaru Makai Shima - Nanatsu no Shima Daibouken (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Higemaru%20Makai%20Shima%20-%20Nanatsu%20no%20Shima%20Daibouken%20%28Japan%29.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1yeefK9R3UuLgWEolpFt9wr27X6xxUinQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "High School! Kimengumi (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/High%20School%21%20Kimengumi%20%28Japan%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1LmGE1zF_X-YR1n-KDbMfUyhvdzamxi_0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hinotori - Houou Hen (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Hinotori%20-%20Houou%20Hen%20%28Japan%29.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/1zOwTlsfqlf5ksOLwACflWisq73CnKi6A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hole in One Special (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Hole%20in%20One%20Special%20%28Japan%29.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1tQBfgZE3wb4NhVNzigal9rxRzJeUsEBs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hydlide 3 - The Space Memories (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Hydlide%203%20-%20The%20Space%20Memories%20%28Japan%29.png",
    size: "244 KB",
    link1: "https://drive.google.com/file/d/1mnpB8SkGuZFU37DmzZkijfJ7EWjVAeNs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ide Yousuke Meijin no Jissen Mahjong (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Ide%20Yousuke%20Meijin%20no%20Jissen%20Mahjong%20%28Japan%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/13rOH-amlHiWLX_1M5RfzAGQZEwjDsvwS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ikari (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Ikari%20%28Japan%29.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/17Vg0N2G7Au0EYKUjPAnO8YUx3JhJ0fMI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inemuriryuu Asada Tetsuya no A-kyuu Mahjong (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Inemuriryuu%20Asada%20Tetsuya%20no%20A-kyuu%20Mahjong%20%28Japan%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1BB6w0qP7xtBZX4t8pbzdfJiQwkzH27fn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inindou - Datou Nobunaga (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Inindou%20-%20Datou%20Nobunaga%20%28Japan%29.png",
    size: "486 KB",
    link1: "https://drive.google.com/file/d/1FzuTXBNs4mLHz5iG9DLkI1N2XvDCEAFG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ishin no Arashi (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Ishin%20no%20Arashi%20%28Japan%29.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/1AIdDRXOfeXa9aWDG04VEri38c4i_J-yS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jansei (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Jansei%20%28Japan%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1eDb8KPZTL4ZF5ImXuMEclPeU1kFJLg6i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Japanese MSX-Write II (Japan) (Program)",
    image: "https://i.postimg.cc/vBWY6t0f/MSX2-logo.png",
    size: "311 KB",
    link1: "https://drive.google.com/file/d/1GhfjqMrvYPWKfAJX0cyfnfP6U3Mkcjxv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kempelen Chess (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Kempelen%20Chess%20%28Japan%29.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1OgxFJWPGO2Unr2atxV3pTDKj26sUEZ-f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kiki Kaikai (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Kiki%20Kaikai%20%28Japan%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1IDbDhcs1WD8AIi0OOLBphsT6cvOcaRDd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King Kong 2 - Yomigaeru Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/King%20Kong%202%20-%20Yomigaeru%20Densetsu%20%28Japan%29.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1AFw809OSZbnGwcc9nftU1ecUmpI5nDCI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kisei (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Kisei%20%28Japan%29.png",
    size: "43 KB",
    link1: "https://drive.google.com/file/d/1jRxl6pbZ4J9G80g4FScGK6jauVbhXs-a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kitahei (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Kitahei%20%28Japan%29.png",
    size: "31 KB",
    link1: "https://drive.google.com/file/d/1dAJ1rHOSiNtOpL6h2HlA2CZ1tFf3f6U5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Koronis Rift (Europe)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Koronis%20Rift%20%28Europe%29.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1eZgtA8dl6ChgczHebHv2ieFSvS2q0Oi9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Labyrinth (Japan)",
    image: "https://i.postimg.cc/vBWY6t0f/MSX2-logo.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1FzFaJB1XEjYBBehL0hJGAKjL-iCMuANL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lupin Sansei - Babylon no Ougon Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Lupin%20Sansei%20-%20Babylon%20no%20Ougon%20Densetsu%20%28Japan%29.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1VqSWgkXjKCw5Q0oItdK1sBAYF0AS7SMx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lupin Sansei - Cagliostro no Shiro (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Lupin%20Sansei%20-%20Cagliostro%20no%20Shiro%20%28Japan%29.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/1l53PUs7fkXqb0-nFIMNy8ErDSK7drkIP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mad Rider (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Mad%20Rider%20%28Japan%29.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1z-PugIv1LyXDCHf21Xe57zOE7ikavLIF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maison Ikkoku - Kanketsu Hen - Sayonara, Soshite... (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Maison%20Ikkoku%20-%20Kanketsu%20Hen%20-%20Sayonara%2C%20Soshite...%20%28Japan%29.png",
    size: "415 KB",
    link1: "https://drive.google.com/file/d/1zwRaIvN0Tq8dK1LaCu9KO3yZs0XnOO5q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maison Ikkoku - Omoide no Photograph (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Maison%20Ikkoku%20-%20Omoide%20no%20Photograph%20%28Japan%29.png",
    size: "207 KB",
    link1: "https://drive.google.com/file/d/10HwAra2LqzYIoOPaTzYRitb-fT6QIz-M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Malaya no Hibou (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Malaya%20no%20Hibou%20%28Japan%29.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1S67Rf0xn0ihMEYaJ-IIYanQzvTYwbJTM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Gear (Europe)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Metal%20Gear%20%28Europe%29.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1qc9PXwUGeLJHpNpiCUtaBIlX6mG-QoUI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Gear 2 - Solid Snake (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Metal%20Gear%202%20-%20Solid%20Snake%20%28Japan%29.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/1Ag4fH6Ml_WRcd-YGbHl5FfFHZPQFuDi4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Gear 2 - Solid Snake (Japan) (Demo)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Metal%20Gear%202%20-%20Solid%20Snake%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1CcWENwtqBYO6zfoMjdXvLLy71N9Mwtmh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mirai (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Mirai%20%28Japan%29.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1XhXiRYbGlNSUVHMYCHU76tsmBGlVbGef/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mississippi Satsujinjiken (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Mississippi%20Satsujinjiken%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1fMDXsQfY50e9F4dOBTh_HI-739GjNf4D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moero!! Nettou Yakyuu '88 (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Moero%21%21%20Nettou%20Yakyuu%20%2788%20%28Japan%29.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1FhpennlTCvNr0vkVHGk0d0IJudSuIUbi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monmon Kaibutsu (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Monmon%20Kaibutsu%20%28Japan%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1S40sg7SfYs7o1AJF4clAwa_SGpOjgxVe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nekketsu Juudou (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Nekketsu%20Juudou%20%28Japan%29.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/1j51YdZaUb0WMNVjKih8VY6pgalbreSFR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja-kun - Asura no Shou (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Ninja-kun%20-%20Asura%20no%20Shou%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1b0kVcYZcldDjnKCyd1YLf7P0Okka5L_m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nobunaga no Yabou - Bushou Fuuun Roku (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Nobunaga%20no%20Yabou%20-%20Bushou%20Fuuun%20Roku%20%28Japan%29.png",
    size: "598 KB",
    link1: "https://drive.google.com/file/d/1a_-2cxwQsf6Xi9grJykCnPA7la7IBc7H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nobunaga no Yabou - Sengoku Gunyuuden (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Nobunaga%20no%20Yabou%20-%20Sengoku%20Gunyuuden%20%28Japan%29.png",
    size: "309 KB",
    link1: "https://drive.google.com/file/d/1Mkt6h1d2TJHd5o3GGNLkAqw6kbfQTOMz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nobunaga no Yabou - Zenkoku Ban (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Nobunaga%20no%20Yabou%20-%20Zenkoku%20Ban%20%28Japan%29.png",
    size: "234 KB",
    link1: "https://drive.google.com/file/d/1MBX1-4L5Z9zVros1KK2OnMZERQXdOzCG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ogre (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Ogre%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1op_6s4_2ARzvBdVYJsuhXP3EvUl_aqxq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ouke no Tani - El Giza no Fuuin (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Ouke%20no%20Tani%20-%20El%20Giza%20no%20Fuuin%20%28Japan%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1qBvHvKNKrh5jjBMfRfKL5Xj4wa36OfhJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Out Run (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Out%20Run%20%28Japan%29.png",
    size: "99 KB",
    link1: "https://drive.google.com/file/d/1VvT7Jas9Imfd18y2jkq5pfcAVE0XL3bp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Mania (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Pac-Mania%20%28Japan%29.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1WxqzNY8IDRds4du78KN5YcKraSZquR-k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pachi Pro Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Pachi%20Pro%20Densetsu%20%28Japan%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1Nbilqm4DEn2qWxQMo4ZtwFopaqv68ChG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Penguin-kun Wars 2 (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Penguin-kun%20Wars%202%20%28Japan%29.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1__MDdVtXKpBnh_leli_-HfsVTH5Zv417/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Predator (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Predator%20%28Japan%29.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/1UAVv5g7DCK6O9hnZbCOUcmDSmzbvprEz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Yakyuu Family Stadium - Pennant Race (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Pro%20Yakyuu%20Family%20Stadium%20-%20Pennant%20Race%20%28Japan%29.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/142JZ2XA8RzzVGipwEX5m4VZx-ZebWZ_Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Yakyuu Fan - Telenet Stadium (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Pro%20Yakyuu%20Fan%20-%20Telenet%20Stadium%20%28Japan%29.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/1asrjpAkuuII2qZkILBCJwHcMKYOONnfW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Professional Mahjong Gokuu (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Professional%20Mahjong%20Gokuu%20%28Japan%29.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1WCa45Lit9aK82Yydal_zackjpPyUZBnS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Project A2 - Shijousaidai no Hyouteki (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Project%20A2%20-%20Shijousaidai%20no%20Hyouteki%20%28Japan%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1Eo_Jcx6I2F9HMZJIxT39_4OdVeHMvkzS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quarth (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Quarth%20%28Japan%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1A15xVEvvhj1sJYQbilfurH3xFvi6bQWy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quarth (Japan) (Demo)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Quarth%20%28Japan%29%20%28Wii%20U%20Virtual%20Console%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1CovqTCdkihR4RZ-zxRqgPHKh8KuCcxjs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quinpl (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Quinpl%20%28Japan%29.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1cf8_ob4182eX94SX5fkGVGC1c7sFNcNL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rastan Saga (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Rastan%20Saga%20%28Japan%29.png",
    size: "107 KB",
    link1: "https://drive.google.com/file/d/1M-DgwMVfymQOu1LrlBZJuy3fkwdhmewt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Relics (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Relics%20%28Japan%29.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1TkvTIJVdLYhAW9MSR_bY7KsdFaYpyqy6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Replicart (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Replicart%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1KRfAaps34UEVD9iOX6tUAG_bCFuRFyDz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Return of Ishtar, The (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Return%20of%20Ishtar%2C%20The%20%28Japan%29.png",
    size: "91 KB",
    link1: "https://drive.google.com/file/d/10kJWiAiQZZEZxE6jd5AQp-Vu56oLYNp_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Return of Jelda (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Return%20of%20Jelda%20%28Japan%29.png",
    size: "36 KB",
    link1: "https://drive.google.com/file/d/1MaPKORxnlDw3WwJYjvL0Td3TRhIXYIgL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rick to Mick no Daibouken (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Rick%20to%20Mick%20no%20Daibouken%20%28Japan%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/12M2_gg-fSDCeYTJKgThRrgLZD_XrjVIl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Royal Blood (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Royal%20Blood%20%28Japan%29.png",
    size: "514 KB",
    link1: "https://drive.google.com/file/d/1zAUh7Pa6pHF_JmH67mDYi5LyD_jfZLWM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sangokushi (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Sangokushi%20%28Japan%29.png",
    size: "242 KB",
    link1: "https://drive.google.com/file/d/17k_ATcCXc-I3CvuEH2SneWdZbPojV0TT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sangokushi II (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Sangokushi%20II%20%28Japan%29.png",
    size: "565 KB",
    link1: "https://drive.google.com/file/d/1z8DkZQQQiIKH6YKxmOpgjhsPf6DuNPgK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scramble Formation (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Scramble%20Formation%20%28Japan%29.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1UnxHc0i6UO_3shlO-2kiwV9xnMFU-6Jb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Seikima II Special - Akuma no Gyakushuu (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Seikima%20II%20Special%20-%20Akuma%20no%20Gyakushuu%20%28Japan%29.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1pR6qCKFaTuRTAfGSVFnJ9fvctefvgXLi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Shanghai%20%28Japan%29.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/1WPDGDEWBbkU_5Kqi1AsrxsT34FYp5rNB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shiryou Sensen - War of the Dead (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Shiryou%20Sensen%20-%20War%20of%20the%20Dead%20%28Japan%29.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1iR-pjil-Qv37AP9nYx4IsmOezZ_OBZjg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Manbow (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Space%20Manbow%20%28Japan%29.png",
    size: "156 KB",
    link1: "https://drive.google.com/file/d/1JvEzdHs7-j_1DRDf3xXxpabzlH3mQ69S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Virgin (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Star%20Virgin%20%28Japan%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1dZrvz51zOpCEH2Thjgd0j7TmBeup-Ouv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strategic Mars (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Strategic%20Mars%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/19dTIEVlLUoqN29agjVfhTmj1ea9GjUEb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Suikoden - Tenmei no Chikai (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Suikoden%20-%20Tenmei%20no%20Chikai%20%28Japan%29.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/1vxHl5ecTbcpkkoI2Z9_4v8gaf8dADntc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Daisenryaku (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Super%20Daisenryaku%20%28Japan%29.png",
    size: "110 KB",
    link1: "https://drive.google.com/file/d/1eSE7F4qW8jQvgPr7RQFQ6yZ6-axRz4fe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Load Runner (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Super%20Load%20Runner%20%28Japan%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1LS1oFcu7GI5WPbZjkk5a1mm4lRzYNBGT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Rambo Special (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Super%20Rambo%20Special%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/19rs2H097zw-hrFvvpvOFuPsB0dXbudI8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Runner (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Super%20Runner%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1FRYCyeUFSCwaatbbn5CuxhHBtT_LnuaQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Tritorn (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Super%20Tritorn%20%28Japan%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/12Qki1srB9UaYrKeuFLDmMrRQXbufLSaq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Synthe Saurus (Japan) (Program)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Synthe%20Saurus%20%28Japan%29%20%28Program%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/14Q_r3fusGvseUtsL3exb0RabKFIOyhx3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taiyou no Shinden - Asteka II (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Taiyou%20no%20Shinden%20-%20Asteka%20II%20%28Japan%29.png",
    size: "163 KB",
    link1: "https://drive.google.com/file/d/1eJMDT5Y2rTcfmSN9ABKIIzeTmOGgh4UY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tanikawa Hiroshi no Shougi Shinan 2 (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Tanikawa%20Hiroshi%20no%20Shougi%20Shinan%202%20%28Japan%29.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1-f83CuYBJdzYv-02vt4QzyEaxc_47ir6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teitoku no Ketsudan (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Teitoku%20no%20Ketsudan%20%28Japan%29.png",
    size: "463 KB",
    link1: "https://drive.google.com/file/d/1_9P3nMUL_brMQWYxg52c5RtG8UKTCwas/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tengoku Yoitoko (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Tengoku%20Yoitoko%20%28Japan%29.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/15aTa5SEvKW2VipANyGNHQTWXMDv4B04a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetris (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Tetris%20%28Japan%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/158ZlcfBcZb9wyV3i5xMM5Nmenwtl7el3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Topple Zip (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Topple%20Zip%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1u_z5W1zH0kzAprSUaGDrZvHYKBzDbmzw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Treasure of Usas, The (Japan, Europe)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Treasure%20of%20Usas%2C%20The%20%28Japan%2C%20Europe%29.png",
    size: "94 KB",
    link1: "https://drive.google.com/file/d/1-p5sAivrznwsEWn4x9v7pg2lQy4GYwzG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tsurikichi Sanpei - Blue Marine Hen (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Tsurikichi%20Sanpei%20-%20Blue%20Marine%20Hen%20%28Japan%29.png",
    size: "44 KB",
    link1: "https://drive.google.com/file/d/1fYiibYkWhXhd2NUbQWrnsErYssWRuZ3I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tsurikichi Sanpei - Tsuri Sennin Hen (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Tsurikichi%20Sanpei%20-%20Tsuri%20Sennin%20Hen%20%28Japan%29.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/12GcGUQu5-D1kAlK3sD1yPIayfQrSSfLr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultima Exodus (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Ultima%20Exodus%20%28Japan%29.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1Ps_IW_Hg1pm-8ZLRuZM7xz13kDstLVL3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Urusei Yatsura - Koi no Survival Birthday (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Urusei%20Yatsura%20-%20Koi%20no%20Survival%20Birthday%20%28Japan%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1ySVhR01PfL0frHO2vie8zhBzoDMb4dZW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vampire Killer (Japan, Europe)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Vampire%20Killer%20%28Japan%2C%20Europe%29.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1x4vXspF0-EIuU0nlJ9xQiCd1_OQlnj3P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Victorious Nine II - Koukou Yakyuu Hen (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Victorious%20Nine%20II%20-%20Koukou%20Yakyuu%20Hen%20%28Japan%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1KVbtmkAsF6t1QMJMpUcukl0Vjp2OcZZa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizardry (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Wizardry%20%28Japan%29.png",
    size: "172 KB",
    link1: "https://drive.google.com/file/d/1GfK-FXRtkAZFnI6zwIl8ihGAFsFbbZ2U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Woody Poco (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Woody%20Poco%20%28Japan%29.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1fvd7WvJdGzzQAwONPY9hNT1WD8kEerTF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xevious - Fardraut Saga (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Xevious%20-%20Fardraut%20Saga%20%28Japan%29.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1ohIWuw8EDpwpdb_r3M00-X5hDYQxe_q8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yaksa (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Yaksa%20%28Japan%29.png",
    size: "134 KB",
    link1: "https://drive.google.com/file/d/13rcKazns7BGvXF1UJIXKvEo_kDaOoBYN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yamamura Misa Suspense - Kyoto Ryuu no Tera Satsujinjiken (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Yamamura%20Misa%20Suspense%20-%20Kyoto%20Ryuu%20no%20Tera%20Satsujinjiken%20%28Japan%29.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1LmBQS3ODwO-JxnQcwTdD_RWDceifb6Rm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yuurei-kun (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Yuurei-kun%20%28Japan%29.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1zJ7Lxzfco8Kmc_38CLS3Cv_4LJkuvzeS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zanac Ex (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Zanac%20Ex%20%28Japan%29.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1MbTilfSrQto86O4fKQL68Xs-X5NbAGR3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zoids - Chuuou Tairiku no Tatakai (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Zoids%20-%20Chuuou%20Tairiku%20no%20Tatakai%20%28Japan%29.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/15tpi180UMNovuRihBUaSAr9Ep73At6dg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zombie Hunter (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Zombie%20Hunter%20%28Japan%29.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1Ye05LfGBPJRi3-flBrNh1AThD2ndXSw7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zukkoke Yajikita Onmitsu Douchuu (Japan)",
    image: "https://thumbnails.libretro.com/Microsoft%20-%20MSX2/Named_Boxarts/Zukkoke%20Yajikita%20Onmitsu%20Douchuu%20%28Japan%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1LFvECdG5hnf6pjf8aoRJAgCaVPCLajwg/view?usp=drivesdk",
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

