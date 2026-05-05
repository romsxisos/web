const roms = [
  {
    name: "ActRaiser (Europe) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ActRaiser%20%28Europe%29.png",
    size: "672 KB",
    link1: "https://drive.google.com/file/d/1dqVnjitq--zgIArHYTKukxqbVpgWP1t5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Addams Family, The - Pugsley's Scavenger Hunt (Europe) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Addams%20Family%2C%20The%20-%20Pugsley%27s%20Scavenger%20Hunt%20%28Europe%29.png",
    size: "808 KB",
    link1: "https://drive.google.com/file/d/1fKYGLJdEvMwQvGdUgdOc3henqzTsbNdY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures of Batman & Robin, The (Europe) Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "1397 KB",
    link1: "https://drive.google.com/file/d/1ObLm0FUOVbPxlU_-DGz2os2oVotPckpb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures of Kid Kleets, The (USA) (En,Fr,Es) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Adventures%20of%20Kid%20Kleets%2C%20The%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "813 KB",
    link1: "https://drive.google.com/file/d/1aAqEtov7kvJWd2cI26bBMtJmCleNNI2m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero the Acro-Bat (Europe) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aero%20the%20Acro-Bat%20%28Europe%29.png",
    size: "706 KB",
    link1: "https://drive.google.com/file/d/1D_5O3D0e9ZaV-8dwkVaF6_8AjKYqSJA8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero the Acro-Bat 2 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aero%20the%20Acro-Bat%202%20%28USA%29.png",
    size: "1333 KB",
    link1: "https://drive.google.com/file/d/14wxrllqPcim7IA88U7X66MPP3oAxmF1s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien vs Predator (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Alien%20vs%20Predator%20%28USA%29.png",
    size: "590 KB",
    link1: "https://drive.google.com/file/d/1sdOKOPA4Bbry7A2J8OH46AHspQ6OoJdT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Andre Agassi Tennis (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Andre%20Agassi%20Tennis%20%28USA%29.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/1aSs0MCQL8LDmZZ_q0tLz3YosslJNwLm2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Araiguma Rascal (Japan) - Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Araiguma%20Rascal%20%28Japan%29.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1DsIuVnpBRyCc2gLVx4l5wOJRPJCji9Ps/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arcade's Greatest Hits - The Atari Collection 1 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Arcade%27s%20Greatest%20Hits%20-%20The%20Atari%20Collection%201%20%28USA%29.png",
    size: "223 KB",
    link1: "https://drive.google.com/file/d/18rSDvSlbrSDmIC2XtkuRUkRmUIYnENXh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arcana (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Arcana%20%28USA%29.png",
    size: "653 KB",
    link1: "https://drive.google.com/file/d/13j2JGWGDkYzazk3MjTlxGfjUAx8lvBms/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arkanoid (Europe) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Arkanoid%20%28Europe%29.png",
    size: "228 KB",
    link1: "https://drive.google.com/file/d/1HE4fPBERaxh2j2O0wKQcKZeyXK5pZKc5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Axelay (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Axelay%20%28USA%29.png",
    size: "783 KB",
    link1: "https://drive.google.com/file/d/1a3io_dr1rF42X55gH6pMfL0keCWzZeKT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ballz 3D - Fighting at Its Ballziest (USA) - Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ballz%203D%20-%20Fighting%20at%20Its%20Ballziest%20%28USA%29.png",
    size: "680 KB",
    link1: "https://drive.google.com/file/d/1fiFK4bfAj6irzJLnN4S9Msu-C0UvZ_zT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie Super Model (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Barbie%20Super%20Model%20%28USA%29.png",
    size: "477 KB",
    link1: "https://drive.google.com/file/d/10AmV0ZbZpRuuhsEc8WII5EmpwJcE1xZM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Blaze (USA) - Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battle%20Blaze%20%28USA%29.png",
    size: "597 KB",
    link1: "https://drive.google.com/file/d/1NNN-hNxv_UOhb4766WAhQMqLSq4Kcdxj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Soccer - Field no Hasha (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battle%20Soccer%20-%20Field%20no%20Hasha%20%28Japan%29.png",
    size: "522 KB",
    link1: "https://drive.google.com/file/d/1SZDsiuDf4yeTTzNZaVhRy4lMMo5IISZM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bill Laimbeer's Combat Basketball (USA) Fastom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "197 KB",
    link1: "https://drive.google.com/file/d/1sa5CwJUyumKSG5CdPlImvr-ZtPcFzGce/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BioMetal (Japan) - Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/BioMetal%20%28USA%29.png",
    size: "453 KB",
    link1: "https://drive.google.com/file/d/1p8-K136Ivzl8600eyfEjUs6q-w58n73C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BlaZeon - The Bio-Cyborg Challenge (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/BlaZeon%20-%20The%20Bio-Cyborg%20Challenge%20%28USA%29.png",
    size: "498 KB",
    link1: "https://drive.google.com/file/d/1SgnQJfgfa8iboOgmXhR2i6WYW2zjkZHT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonkers (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bonkers%20%28USA%29.png",
    size: "719 KB",
    link1: "https://drive.google.com/file/d/1WgrtCULWbLcje9shVDGHwWBF7tapNSzb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bram Stoker’s Dracula (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bram%20Stoker%27s%20Dracula%20%28USA%29%20%28Beta%29.png",
    size: "749 KB",
    link1: "https://drive.google.com/file/d/1skW9ww0eJLUqTIyiOeH3-kTfgOfwdYVh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cacoma Knight in Bizyland (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cacoma%20Knight%20in%20Bizyland%20%28USA%29.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/14gjF7jSvSCQofdzLJL99VubNZXzTSct5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cal Ripken Jr. Baseball (Europe) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cal%20Ripken%20Jr.%20Baseball%20%28Europe%29.png",
    size: "632 KB",
    link1: "https://drive.google.com/file/d/1Xc-47yAuXXibZ-ZcFeA65NfI_lV7iIhx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "College Slam (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/College%20Slam%20%28USA%29.png",
    size: "1647 KB",
    link1: "https://drive.google.com/file/d/1TKYJ5Qgvl28_rBZaY3dDLPdKe8jkxg4q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Combatribes, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Combatribes%2C%20The%20%28USA%29.png",
    size: "862 KB",
    link1: "https://drive.google.com/file/d/1XZixMSTm_GeXIJC__5FBTw_cCDCMD0l9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Combatribes, The (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Combatribes%2C%20The%20%28USA%29.png",
    size: "862 KB",
    link1: "https://drive.google.com/file/d/1EBscEFqAf28arql8sqf5iexInkXtXMhI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool Spot (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cool%20Spot%20%28USA%29.png",
    size: "666 KB",
    link1: "https://drive.google.com/file/d/1kKhrahqxJ6VyL55AKpkHeB1iPuXeFUck/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool World (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cool%20World%20%28USA%29.png",
    size: "668 KB",
    link1: "https://drive.google.com/file/d/1OTnp5-mmByC1LkWEbCvW7AFK9IXQgMP-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cosmo Gang - The Video (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cosmo%20Gang%20-%20The%20Video%20%28Japan%29.png",
    size: "680 KB",
    link1: "https://drive.google.com/file/d/1lyX4e9tsq7OxPfa0thkQYUO2X5A1zILK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "D-Force (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/D-Force%20%28USA%29.png",
    size: "453 KB",
    link1: "https://drive.google.com/file/d/1tDA2qf6viAeqlhXKW-j07SmMJELgDJde/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Darius Twin (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Darius%20Twin%20%28USA%29.png",
    size: "400 KB",
    link1: "https://drive.google.com/file/d/1g_XsIBdQuuu5x1ggZ0lct8a4ZCZkI7aj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon V - The Shadow Falls (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Double%20Dragon%20V%20-%20The%20Shadow%20Falls%20%28USA%29.png",
    size: "1855 KB",
    link1: "https://drive.google.com/file/d/14ImitDzMggCaiewTqXkKGs3LBgDE0aD5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.V.O. (U) – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "1183 KB",
    link1: "https://drive.google.com/file/d/15HwKsnSNc1EBqoB4O4Py3YwvvjBTD-F_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earth Defense Force (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Earth%20Defense%20Force%20%28USA%29.png",
    size: "541 KB",
    link1: "https://drive.google.com/file/d/1tZcYW0Ya7o8Shc9mV8Wt86IjWQOPZZ0b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim (J) (U) (E) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Earthworm%20Jim%20%28USA%29.png",
    size: "1919 KB",
    link1: "https://drive.google.com/file/d/1FYqKgIuzRTXWfSfYDwZ9sJeQkXCePyM8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Emmitt Smith Football (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Emmitt%20Smith%20Football%20%28USA%29.png",
    size: "618 KB",
    link1: "https://drive.google.com/file/d/1-grmyD61IwbRweYxs5PcC5h0eQDwPA7M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Exhaust Heat (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Exhaust%20Heat%20%28Europe%29.png",
    size: "496 KB",
    link1: "https://drive.google.com/file/d/1wne2811s8miCuFZYZHszkYNrnwML2XPR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-Zero (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/F-Zero%20%28USA%29.png",
    size: "285 KB",
    link1: "https://drive.google.com/file/d/1FYAJiMd4KsM49HlZlF037KJFo4-M9Cr3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Faceball 2000 (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Faceball%202000%20%28USA%29.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1N0jNCmbMGnRz8p9TK8EJps8PLUzIyK7-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight (Arcade Edition) - Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "682 KB",
    link1: "https://drive.google.com/file/d/1hsQpuOLPocHIv6-yug3J7Ydmh9Ed9XdU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "630 KB",
    link1: "https://drive.google.com/file/d/1p5mxBxFvVzyJBHfpbF4ghBr1MbNAM-wq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FireStriker (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/FireStriker%20%28USA%29.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/1_6zovrrbipvm0or5__3MUP41h0pqwtEB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Firepower 2000 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Firepower%202000%20%28USA%29.png",
    size: "475 KB",
    link1: "https://drive.google.com/file/d/13LQIFkmuRN9W7HfXEUxwXZ3iqq9wwufp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "First Samurai (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/First%20Samurai%20%28USA%29.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1wlXOyIe3jTIzTB3F9eo5rE46pd6VaVyy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "First Samurai (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/First%20Samurai%20%28USA%29.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/12poiceeG-UiYeH00a0K8scwrO0YmwEH9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flying Hero - Bugyuru no Daibouken (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Flying%20Hero%20-%20Bugyuru%20no%20Daibouken%20%28Japan%29.png",
    size: "549 KB",
    link1: "https://drive.google.com/file/d/1TrgjI4ySpZ59h0GLLbiG44o501sRXvnw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fun 'n Games (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Fun%20%27n%20Games%20%28USA%29.png",
    size: "675 KB",
    link1: "https://drive.google.com/file/d/1vUQMx2WVRqSQ0Uvn0Int2TAOrUVhZon4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GS Mikami - Joreishi wa Nice Body (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/GS%20Mikami%20-%20Joreishi%20wa%20Nice%20Body%20%28Japan%29.png",
    size: "600 KB",
    link1: "https://drive.google.com/file/d/12xcow3hxE8Y-ki6ezkdaqsUPNExNleYr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare! Daiku no Gen-san (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ganbare%21%20Daiku%20no%20Gen-san%20%28Japan%29.png",
    size: "597 KB",
    link1: "https://drive.google.com/file/d/1YWJ7eS2NwFyrUubUEEGHMiiNxPMi1SKd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gekitotsu Dangan Jidousha Kessen - Battle Mobile (Japan) (En) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Gekitotsu%20Dangan%20Jidousha%20Kessen%20-%20Battle%20Mobile%20%28Japan%29%20%28En%29.png",
    size: "547 KB",
    link1: "https://drive.google.com/file/d/12vSZ6mnbHBoarCNDI09gE5ISOh8q18J0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gradius III (USA) - Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Gradius%20III%20%28USA%29.png",
    size: "425 KB",
    link1: "https://drive.google.com/file/d/1RfTwxRpX_O9Owcbu1bziNWfOYgl-sI-4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Battle II, The - Last Fighter Twin (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Great%20Battle%20II%2C%20The%20-%20Last%20Fighter%20Twin%20%28Japan%29.png",
    size: "719 KB",
    link1: "https://drive.google.com/file/d/1zG6xr0I-GgcxwME8JhnGUr9fI1z8Xgop/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Battle III, The (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Great%20Battle%20III%2C%20The%20%28Japan%29.png",
    size: "860 KB",
    link1: "https://drive.google.com/file/d/14yLdUl5WiJbJQOO5QvCv8cxbR4quqg8B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Battle IV, The (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Great%20Battle%20IV%2C%20The%20%28Japan%29.png",
    size: "1174 KB",
    link1: "https://drive.google.com/file/d/17S3h0NFemhpAjc7EgGOTsuCO5mcXnEX7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Battle V, The (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Great%20Battle%20V%2C%20The%20%28Japan%29.png",
    size: "1088 KB",
    link1: "https://drive.google.com/file/d/1LkY18xSuwK5ZUCyQp-IsakaTlr-lk7QC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Waldo Search, The (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Great%20Waldo%20Search%2C%20The%20%28USA%29.png",
    size: "271 KB",
    link1: "https://drive.google.com/file/d/16_tV3YS025ODmikfbNj9Z4_x7nfuNqKm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gunforce (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/GunForce%20%28USA%29.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/18s7S8pOw4NCXqqLlI3mJHBFUEim66zQt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hebereke's Popoitto (Europe) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hebereke%27s%20Popoitto%20%28Europe%29.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/1JGw72tihf6o6TkpTslpNuuJ-Etf3obhA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Holy Umbrella - Dondera no Mubou!! (Japan) - Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Holy%20Umbrella%20-%20Dondera%20no%20Mubou%21%21%20%28Japan%29.png",
    size: "1618 KB",
    link1: "https://drive.google.com/file/d/1RpTZ6AIkXlbcKntvG1FLrD7Iiu1n74F0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Alone (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Home%20Alone%20%28USA%29.png",
    size: "268 KB",
    link1: "https://drive.google.com/file/d/1TOsFc1HMaDNQa5FZQjDjJZXB7XcVpRWI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hook (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hook%20%28USA%29%20%28Beta%29.png",
    size: "484 KB",
    link1: "https://drive.google.com/file/d/1r8tZowQTLKccfOwLqsTsK3-bsXPbRLLF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "HyperZone (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/HyperZone%20%28USA%29.png",
    size: "334 KB",
    link1: "https://drive.google.com/file/d/1M1EpiqVAswTIbczvfmqTZfn063Kq-wrs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ignition Factor, The (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ignition%20Factor%2C%20The%20%28USA%29.png",
    size: "619 KB",
    link1: "https://drive.google.com/file/d/18OE7FoHAd-56vGqr5AA8uY457VFe9oiO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Imperium (U) _ Kidou Soukou Dion (J) – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "537 KB",
    link1: "https://drive.google.com/file/d/17wg083DlEgfbB204xSZZOQre8nQuzz6x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "J.League '96 Dream Stadium Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/J.League%20%2796%20Dream%20Stadium%20%28Japan%29.png",
    size: "1248 KB",
    link1: "https://drive.google.com/file/d/1Eb5E6A-crCJJM_rH7m0DWW8KzSoo29pi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "J.R.R. Tolkien's The Lord of the Rings - Volume 1 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/J.R.R.%20Tolkien%27s%20The%20Lord%20of%20the%20Rings%20-%20Volume%201%20%28USA%29.png",
    size: "742 KB",
    link1: "https://drive.google.com/file/d/1t9wIq3Xg6t589obi2_xx0BYo1gzOqwSw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaleco Rally Big Run - The Supreme 4WD Challenge (Japan) (En) (Rev 1) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jaleco%20Rally%20Big%20Run%20-%20The%20Supreme%204WD%20Challenge%20%28Japan%29%20%28En%29%20%28Rev%201%29.png",
    size: "387 KB",
    link1: "https://drive.google.com/file/d/1Oe9pINE6ffXmhrK-a29wF3M_vqktZ6HL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jikkyou Oshaberi Parodius (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jikkyou%20Oshaberi%20Parodius%20%28Japan%29.png",
    size: "2559 KB",
    link1: "https://drive.google.com/file/d/1UPPSGt4TPS6957t2dS6y1qK9-ed2qdR0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe & Mac (E) – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "612 KB",
    link1: "https://drive.google.com/file/d/1uTZHBUryn9mBK9k8X6tIRku9qEWC74IU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe & Mac 2 - Lost in the Tropics (USA) Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "722 KB",
    link1: "https://drive.google.com/file/d/14uFxI2J-9ZO8WZUwULEQTbCaCuBz7Xnx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe & Mac 3 - Lost in the Tropics (Europe) (En,Fr,De) Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "733 KB",
    link1: "https://drive.google.com/file/d/1mDY1e3uq2xJHHdBsuB9f2dyobsQCvE7L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawasaki Caribbean Challenge (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kawasaki%20Caribbean%20Challenge%20%28USA%29.png",
    size: "810 KB",
    link1: "https://drive.google.com/file/d/1ftUk0ouDdES3FjnwdHRXRjJkWY3SGbcp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ken Griffey Jr.'s Winning Run (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ken%20Griffey%20Jr.%27s%20Winning%20Run%20%28USA%29.png",
    size: "2634 KB",
    link1: "https://drive.google.com/file/d/1ie1vEpRIbMPZ9PtNHQbWx9ioOvZv15Pr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby's Dream Land 3 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kirby%27s%20Dream%20Land%203%20%28USA%29.png",
    size: "2182 KB",
    link1: "https://drive.google.com/file/d/1uC-ArvjNxwS4oZMBLPwZTYqgnjW1wekP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Krusty’s Super Fun House (USA) (Rev 1) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Krusty%27s%20Super%20Fun%20House%20%28USA%29%20%28Rev%201%29.png",
    size: "319 KB",
    link1: "https://drive.google.com/file/d/1pSZKL-Zn2GcjZ1Vkp78A2ajtTVuZ2Fv8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20%28USA%29.png",
    size: "815 KB",
    link1: "https://drive.google.com/file/d/1A9qIPxsKPX11rCFOmXRxz_QVfHZrHBkz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of the Mystical Ninja, The (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20of%20the%20Mystical%20Ninja%2C%20The%20%28USA%29.png",
    size: "835 KB",
    link1: "https://drive.google.com/file/d/1CtuPLVl8aF4RM_VZFI-xBt9hWozaXyUr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (U) (Rev 1) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lemmings%20%28USA%29%20%28Rev%201%29.png",
    size: "551 KB",
    link1: "https://drive.google.com/file/d/1yBNvKzD4vy21TC8NaBN5UHyNKTluh32O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Live A Live (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Live%20A%20Live%20%28Japan%29.png",
    size: "1547 KB",
    link1: "https://drive.google.com/file/d/1UNl1y5tmwf7iUn81HmP4PmfsUZhJALAr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Pop’n (J) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Magical%20Pop%27n%20%28Japan%29.png",
    size: "1533 KB",
    link1: "https://drive.google.com/file/d/187zqsOubJEYXA-KWF7VTPM8V2mqpapKl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Paint (Japan, USA) (En) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mario%20Paint%20%28Japan%2C%20USA%29%20%28En%29.png",
    size: "453 KB",
    link1: "https://drive.google.com/file/d/1wZ7BM2EII4fhByzpM18hMzk5PlxsaCT9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marvelous - Mouhitotsu no Takara-jima (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Marvelous%20-%20Mouhitotsu%20no%20Takara-jima%20%28Japan%29.png",
    size: "1971 KB",
    link1: "https://drive.google.com/file/d/1VPUxBp0R1XMKPpyrp9tk1xqNK_mTasZb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maui Mallard in Cold Shadow (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Maui%20Mallard%20in%20Cold%20Shadow%20%28USA%29.png",
    size: "2104 KB",
    link1: "https://drive.google.com/file/d/1YGw9c7oaTdc3nIH1RR4RMysdEj_BXhAO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maui Mallard in Cold Shadow (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Maui%20Mallard%20in%20Cold%20Shadow%20%28USA%29.png",
    size: "2104 KB",
    link1: "https://drive.google.com/file/d/1cJqFE4vofSktlMHeIlULMVuElvjXqYjs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man X2 (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X2%20%28USA%29.png",
    size: "981 KB",
    link1: "https://drive.google.com/file/d/1iWPj0NWceUdOyFXXJn0_fzqi8A8sfb3P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man X3 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X3%20%28USA%29.png",
    size: "1268 KB",
    link1: "https://drive.google.com/file/d/1_1M2feJQ9wiFv6QnkWFyGQytYLjXO3mN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey Mania (Europe) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mickey%20Mania%20%28Europe%29.png",
    size: "1437 KB",
    link1: "https://drive.google.com/file/d/1Ruu7uK_hYVscymk58NtcEXKtZ9NKyYKH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey to Donald - Magical Adventure 3 (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mickey%20to%20Donald%20-%20Magical%20Adventure%203%20%28Japan%29.png",
    size: "1400 KB",
    link1: "https://drive.google.com/file/d/1evtKU8zeh2ybdQU3n5G7UT-RuEbtLGca/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mighty Morphin Power Rangers - The Fighting Edition (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mighty%20Morphin%20Power%20Rangers%20-%20The%20Fighting%20Edition%20%28USA%29.png",
    size: "918 KB",
    link1: "https://drive.google.com/file/d/1fmwUxRDTHeDPqLqyuYnuM_8BWXzCA4CZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mini Yonku Shining Scorpion - Let's & Go!! (Japan) Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "1977 KB",
    link1: "https://drive.google.com/file/d/1M7Gh4ePj2FOnOUDk0Y-fokdxIkV1NUpe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Musya – The Classic Japanese Tale of Horror (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Musya%20-%20The%20Classic%20Japanese%20Tale%20of%20Horror%20%28USA%29.png",
    size: "403 KB",
    link1: "https://drive.google.com/file/d/1qNtxxnE44qeUG1xZXkZ6NxW1ssNn1oHB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL 95 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%2095%20%28USA%29.png",
    size: "673 KB",
    link1: "https://drive.google.com/file/d/1WicGHzIR3fvWmyemQD0EerOGsI9Hg_oB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL 96 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%2096%20%28USA%29.png",
    size: "1009 KB",
    link1: "https://drive.google.com/file/d/1bZ7LRbBCTKgYrziFg7UqSSXwNyxLxXlu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL 97 (USA) (Rev 1) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%2097%20%28USA%29%20%28Rev%201%29.png",
    size: "1027 KB",
    link1: "https://drive.google.com/file/d/1QGkH6Ydzx6UbvNA6-HEye9tjUuh9_FTS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL 98 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%2098%20%28USA%29.png",
    size: "1153 KB",
    link1: "https://drive.google.com/file/d/1wMHArwNoyV5wySXRxdDpKbOYLSU3TwXg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nice de Shot (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Nice%20de%20Shot%20%28Japan%29.png",
    size: "554 KB",
    link1: "https://drive.google.com/file/d/1h2aYrLW0ZbEPMwAmJOscwDyBOi8W2oDd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninjawarriors - The New Generation (Europe) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ninjawarriors%20-%20The%20New%20Generation%20%28Europe%29.png",
    size: "896 KB",
    link1: "https://drive.google.com/file/d/1tho4a-f-rze8vu5ifAamg--0PBBhls5O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninjawarriors Again, The (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ninjawarriors%20Again%2C%20The%20%28Japan%29.png",
    size: "879 KB",
    link1: "https://drive.google.com/file/d/14xEd0NNGRK3wndQH8uHURPf6I78ZKDyJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "No Escape (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/No%20Escape%20%28USA%29.png",
    size: "1150 KB",
    link1: "https://drive.google.com/file/d/1E-HYte97CsrbtFiyK-tYNi46OGjsZiOc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Olympic Summer Games (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Olympic%20Summer%20Games%20%28USA%29.png",
    size: "858 KB",
    link1: "https://drive.google.com/file/d/1pCGLfN3-67rhhBDwyd5Eyrg5oeLmUJoL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "On The Ball (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/On%20the%20Ball%20%28USA%29.png",
    size: "404 KB",
    link1: "https://drive.google.com/file/d/19CQFoEk3StjRj9vlZEMeuiJ3HL3argtd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Europe - Path to Victory 1939-45 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Operation%20Europe%20-%20Path%20to%20Victory%201939-45%20%28USA%29.png",
    size: "649 KB",
    link1: "https://drive.google.com/file/d/15LLlhpnoBeDkZIYbanjvGrZLI3pw8kvt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Parodius_ Non-Sense Fantasy (E) – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "866 KB",
    link1: "https://drive.google.com/file/d/1gaIgS4V27nyGEEMbw5WxzdkcMMTVsw-O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Parodius_Non-Sense Fantasy (E) – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "866 KB",
    link1: "https://drive.google.com/file/d/1_gnS6LLtmp4ZgoTeQ5r2BDsOOVRaqpEK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantom 2040 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Phantom%202040%20%28USA%29.png",
    size: "1325 KB",
    link1: "https://drive.google.com/file/d/1X7-akBFSZcDvGDHrakFSbuHy3QHMf8VN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pilotwings (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pilotwings%20%28USA%29.png",
    size: "267 KB",
    link1: "https://drive.google.com/file/d/1qrhMTx3hEAHCvW9nQo7SzoaUtX0m4ba1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pinball Dreams (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pinball%20Dreams%20%28USA%29.png",
    size: "508 KB",
    link1: "https://drive.google.com/file/d/1G3IZyboWPD5HEYDZvpweDWEs3w3kqK1w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pit-Fighter (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pit-Fighter%20%28USA%29.png",
    size: "338 KB",
    link1: "https://drive.google.com/file/d/1159eQgpb0wGKUJ9_YRrhuUKj3P4ePY78/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pit-Fighter (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pit-Fighter%20%28USA%29.png",
    size: "338 KB",
    link1: "https://drive.google.com/file/d/1MMH_0HLViumMP_tRt8dvvDIBXxiPWiyx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocky & Rocky (U) – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "691 KB",
    link1: "https://drive.google.com/file/d/1Tl43-ehHprCy2I8D_km4le_bDEtl4tt-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocky & Rocky 2 (USA) – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "917 KB",
    link1: "https://drive.google.com/file/d/1mkbSimtzXhrOZFfYCalRmhvtSIAPUeDj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokonyan! - Henpokorin Adventure (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pokonyan%21%20-%20Henpokorin%20Adventure%20%28Japan%29.png",
    size: "535 KB",
    link1: "https://drive.google.com/file/d/1IR1lPAdOa6H1rBsqZPwpM7gPXJpyyCIn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Soukoban (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Power%20Soukoban%20%28Japan%29.png",
    size: "389 KB",
    link1: "https://drive.google.com/file/d/1EEmxzsunMMPJBrI4FO1oBT1aCDgvI6Lz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (U) (J) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Prince%20of%20Persia%20%28USA%29.png",
    size: "585 KB",
    link1: "https://drive.google.com/file/d/1eJZcQCtQvbWzOG_j2sunlzUjSeEdY87Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Prince%20of%20Persia%20%28USA%29.png",
    size: "585 KB",
    link1: "https://drive.google.com/file/d/1nv6uoxkD98STSi0Gqd89muabgxtnud70/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia 2 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Prince%20of%20Persia%202%20%28USA%29.png",
    size: "1176 KB",
    link1: "https://drive.google.com/file/d/1N3CiAnJSKOcQS_1vlLIAV7KOTuoVkeLH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Radical Psycho Machine Racing (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Radical%20Psycho%20Machine%20Racing%20%28USA%29.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1s4Io3gibQH_zpLxmAUfdsn0c8A-yipqN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raiden Trad (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Raiden%20Trad%20%28USA%29.png",
    size: "516 KB",
    link1: "https://drive.google.com/file/d/1a2_cyqtl9FM1UZz-hzMWa4yK8U3a3p6f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ranma 1_2 – Chounai Gekitou Hen – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "763 KB",
    link1: "https://drive.google.com/file/d/1HvSyGFEzWG9hE1hC55j5Gbo5_Bldu1ao/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ranma 1_2 – Ougi Jaanken (Japan) Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "616 KB",
    link1: "https://drive.google.com/file/d/1KdZr7vNyGRfVqkha1UgciYtTOEYet3_M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rendering Ranger R2 (J) (En) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rendering%20Ranger%20R2%20%28Japan%29%20%28En%29.png",
    size: "1371 KB",
    link1: "https://drive.google.com/file/d/1k8xX4tHeAbbBljU8xfLOwHyFDTTXURwx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rock N’ Roll Racing (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rock%20N%27%20Roll%20Racing%20%28USA%29.png",
    size: "746 KB",
    link1: "https://drive.google.com/file/d/1GjhWZhHsXwgCKafMyNaS7Ldy4z_nNzQ-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocketeer, The (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rocketeer%2C%20The%20%28USA%29.png",
    size: "613 KB",
    link1: "https://drive.google.com/file/d/17mSNuS1YaCe6ih1CJUXzJZsA26Eq38qf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD F-1 Grand Prix (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SD%20F-1%20Grand%20Prix%20%28Japan%29.png",
    size: "1271 KB",
    link1: "https://drive.google.com/file/d/1V2YXzcUZ5XNAU4lYInZCGHtX1mX7TnT_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD The Great Battle - Aratanaru Chousen (Japan) (Rev 1) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SD%20The%20Great%20Battle%20-%20Aratanaru%20Chousen%20%28Japan%29%20%28Rev%201%29.png",
    size: "633 KB",
    link1: "https://drive.google.com/file/d/1SK_i-EcN6eRiWQlS0BBky5bvpRbsS9dE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SWAT Kats - The Radical Squadron (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SWAT%20Kats%20-%20The%20Radical%20Squadron%20%28USA%29.png",
    size: "988 KB",
    link1: "https://drive.google.com/file/d/19JWkfvPvWBcW0b42zh-kI677eznzXG9C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanrio World Smash Ball! (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sanrio%20World%20Smash%20Ball%21%20%28Japan%29.png",
    size: "190 KB",
    link1: "https://drive.google.com/file/d/1V43sfRDZaW4LUq0dm-Fws29Vw_KTlWDW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret of Mana (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Secret%20of%20Mana%20%28USA%29.png",
    size: "1317 KB",
    link1: "https://drive.google.com/file/d/1Lifexd3IqH2kDQK5tX1G45tKdgLqx1yI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Seiken Densetsu 2 (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Seiken%20Densetsu%202%20%28Japan%29.png",
    size: "1333 KB",
    link1: "https://drive.google.com/file/d/1xBsIW9e8ETOD_vDFMaLeTRHIizBakFxt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sid Meier's Civilization (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sid%20Meier%27s%20Civilization%20%28USA%29.png",
    size: "943 KB",
    link1: "https://drive.google.com/file/d/1jFLxmPOpMcUJfPLxQBmPIF6PBPYGnffR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimAnt (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SimAnt%20%28USA%29%20%28Beta%29.png",
    size: "674 KB",
    link1: "https://drive.google.com/file/d/1S5bDJAoNJkyZiha4cAOUK6cEOCk5EqVa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimCity (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SimCity%20%28USA%29.png",
    size: "298 KB",
    link1: "https://drive.google.com/file/d/1217bNzXcT8CK8eQ3bScUjqDjmVNAIwCN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Simpsons, The - Bart's Nightmare (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Simpsons%2C%20The%20-%20Bart%27s%20Nightmare%20%28USA%29.png",
    size: "664 KB",
    link1: "https://drive.google.com/file/d/1jTu7KXLo6OutIOKHOyOInUUvkJP7W5lx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Simpsons, The – Bart’s Nightmare (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Simpsons%2C%20The%20-%20Bart%27s%20Nightmare%20%28USA%29.png",
    size: "664 KB",
    link1: "https://drive.google.com/file/d/1FysS1uXxafMn6Gj9w5uOP-gizhnYFA0J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Skuljagger – Revolt of The Westicans (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Skuljagger%20-%20Revolt%20of%20the%20Westicans%20%28USA%29.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/1ltI1RBQDt4t0aKC7_b0B-XJsKUg_9lo-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Skyblazer (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Skyblazer%20%28USA%29%20%28Beta%201%29.png",
    size: "585 KB",
    link1: "https://drive.google.com/file/d/1wixeVMEqglz-qUlNmNJkQSoJFUJlquZH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Blast Man (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sonic%20Blast%20Man%20%28USA%29.png",
    size: "608 KB",
    link1: "https://drive.google.com/file/d/1Otu1rHB7f_nPulUwqAPA9LYg85A48ueL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreyuke Ebisumaru Karakuri Meiro - Kieta Goemon no Nazo!! (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Soreyuke%20Ebisumaru%20Karakuri%20Meiro%20-%20Kieta%20Goemon%20no%20Nazo%21%21%20%28Japan%29.png",
    size: "732 KB",
    link1: "https://drive.google.com/file/d/1iMzBkT2JyDWONgano6zg3emqA0g_b2wT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soul Blazer – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Soul%20Blazer%20%28USA%29.png",
    size: "816 KB",
    link1: "https://drive.google.com/file/d/109ZytkN9SlMBL9hQGOoqiTIrFlGnmHjQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Invaders (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Space%20Invaders%20%28USA%29.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/11i_ABdGxEiA2RLgxgm3MWNlPUlwpkcMi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Megaforce (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Space%20Megaforce%20%28USA%29.png",
    size: "571 KB",
    link1: "https://drive.google.com/file/d/11SGBBBA4rfACuqf2jsmJKBpYzSS7OF12/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spanky's Quest (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spanky%27s%20Quest%20%28USA%29.png",
    size: "255 KB",
    link1: "https://drive.google.com/file/d/17tF6NzXp07KRQSK7OEdPHizyHwXLrN2Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spindizzy Worlds (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spindizzy%20Worlds%20%28USA%29.png",
    size: "469 KB",
    link1: "https://drive.google.com/file/d/1D8z0NUbe8wFoi0iebjUZ7GriX7AV8sEi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Starfox – 21mhz & Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "608 KB",
    link1: "https://drive.google.com/file/d/1uiGgYL25nMdPNfCooJPp6gtHmWMAlz5U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20II%20%28USA%29.png",
    size: "1293 KB",
    link1: "https://drive.google.com/file/d/1-i1e9M73XVnVlf7BgdN5VELYcyWesBOJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strike Gunner S.T.G (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Strike%20Gunner%20S.T.G%20%28USA%29.png",
    size: "406 KB",
    link1: "https://drive.google.com/file/d/1JLBV0xHoth1hdMdU9aw7yVZHmAgQsysP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stunt Race FX (USA) (Rev 1) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Stunt%20Race%20FX%20%28USA%29%20%28Rev%201%29.png",
    size: "568 KB",
    link1: "https://drive.google.com/file/d/1p0qDVVeUGsV1w4ZIwyABY4Sl1YOIXZ6g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Adventure Island (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Adventure%20Island%20%28USA%29.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/15Hsu6nw-UAeY75bNhASz1mF0ewlfbhwP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Air Diver 2 (Japan) (En) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Air%20Diver%202%20%28Japan%29%20%28En%29.png",
    size: "706 KB",
    link1: "https://drive.google.com/file/d/13cecpuC1PlqXc_q5NlzudkrAeo0OXMZ4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Aleste (J) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Aleste%20%28Europe%29.png",
    size: "1693 KB",
    link1: "https://drive.google.com/file/d/1nSO-JnXTXUv7Zd84YePfSW6TNdqHaU1n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Aleste (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Aleste%20%28Japan%29.png",
    size: "1693 KB",
    link1: "https://drive.google.com/file/d/1h9eDOb_49VJpWcYsmZbbALtz2Lo36cgd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bowling (J) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bowling%20%28USA%29.png",
    size: "217 KB",
    link1: "https://drive.google.com/file/d/1u60lILQ51sZgGhhLnWjmT9rsQfcvyGeY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bowling (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bowling%20%28USA%29.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/16TGphuuoJfzc3g31kMjykzSiL4foG05U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bowling (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bowling%20%28USA%29.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/1SBsiqhWFjdkQt3M5dXLxD4trppCW8rxz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Castlevania IV (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Castlevania%20IV%20%28USA%29.png",
    size: "827 KB",
    link1: "https://drive.google.com/file/d/1zp2_ztxXwQXoCRXe47jNpsrVKa1P_mFu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super E.D.F. (Japan) (En) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20E.D.F.%20%28Japan%29%20%28En%29.png",
    size: "524 KB",
    link1: "https://drive.google.com/file/d/1voE9jqO1h6F7NCs7KkeVYPKmQ94I4OL-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super E.D.F. (U) (J) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20E.D.F.%20%28Japan%29%20%28En%29%20%28Switch%20Online%29.png",
    size: "541 KB",
    link1: "https://drive.google.com/file/d/14TsdtR342hi6pGVeseDszlBKpWsR3725/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mad Champ (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mad%20Champ%20%28Japan%29.png",
    size: "990 KB",
    link1: "https://drive.google.com/file/d/1V7QHPQAMnzcmjujNYeCKmCHB0F0ldgIn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario All-Stars (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20All-Stars%20%28USA%29.png",
    size: "951 KB",
    link1: "https://drive.google.com/file/d/1GgCw6q2n7BAeuHsGoJymhFAL7RMIMdnx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario All-Stars + Super Mario World (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20All-Stars%20%2B%20Super%20Mario%20World%20%28USA%29.png",
    size: "1310 KB",
    link1: "https://drive.google.com/file/d/1-TaxHitmkgro3sH4Qhm22ZTCjnG6qz_e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario RPG (ALL) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20RPG%20%28Japan%29%20%28Virtual%20Console%29.png",
    size: "2622 KB",
    link1: "https://drive.google.com/file/d/14Q7NdX6kkbKEd15Ze48Fg1Eg6B5IHaYJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario World (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%20%28USA%29.png",
    size: "339 KB",
    link1: "https://drive.google.com/file/d/1QrH30RF-Dofefw20dulv-CFB6HnWCz-t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario World 2 - Yoshi's Island (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%202%20-%20Yoshi%27s%20Island%20%28USA%29.png",
    size: "1258 KB",
    link1: "https://drive.google.com/file/d/1szHDIol2_q8EyUkvNtTnDFzXbvrprp80/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Naxat Open - Golf de Shoubu da Dorabocchan (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Naxat%20Open%20-%20Golf%20de%20Shoubu%20da%20Dorabocchan%20%28Japan%29.png",
    size: "579 KB",
    link1: "https://drive.google.com/file/d/169zj5oZNZ11nt9oNBegPNXJe4BR2IQaC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Off Road (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Off%20Road%20%28USA%29.png",
    size: "225 KB",
    link1: "https://drive.google.com/file/d/1I4Dz4D01kImK8k2BLftw3iYMgela43tL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Pang (Europe) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Pang%20%28Europe%29.png",
    size: "356 KB",
    link1: "https://drive.google.com/file/d/1Q0pJNtIoBKg4nRLyvNZd5k_PSPyUobkt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Punch-Out!! (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Punch-Out%21%21%20%28USA%29.png",
    size: "1457 KB",
    link1: "https://drive.google.com/file/d/1ZTNzuZre7YIZLShRqD7PK46MEsaXxN4o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super R-Type (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20R-Type%20%28USA%29.png",
    size: "404 KB",
    link1: "https://drive.google.com/file/d/1BW_Cdyq27Dn7M6vNjiPq8blP0NBgqLKW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Tennis (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Tennis%20%28USA%29.png",
    size: "260 KB",
    link1: "https://drive.google.com/file/d/1jEIhqS1G9y7lSfjbGInW2-4rpY1Rw4_Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Tennis – World Circuit (J) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Tennis%20-%20World%20Circuit%20%28Japan%29%20%28En%29.png",
    size: "261 KB",
    link1: "https://drive.google.com/file/d/1fPGB4zzjcJwmSyQcwu8cag5VvV7K5TFd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Turrican 2 Special Edition (USA) (Strictly Limited Games) Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "2056 KB",
    link1: "https://drive.google.com/file/d/1o6Cr4Mqrrgs2XseYi2yf7Os0DWtTmQ5m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Valis IV (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Valis%20IV%20%28USA%29.png",
    size: "674 KB",
    link1: "https://drive.google.com/file/d/1VZ4gvuIbQYp4JupoRTUV3iQG8hjCB_Sr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Syndicate (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Syndicate%20%28USA%29.png",
    size: "851 KB",
    link1: "https://drive.google.com/file/d/1nw0kUl4EieeJvPUvc-NRsnkWYCZywfGp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tactical Soccer (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tactical%20Soccer%20%28Japan%29.png",
    size: "927 KB",
    link1: "https://drive.google.com/file/d/15Tu2AYqRkhGY_ku4pdphiIGzhdpDlHln/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles IV (U) – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "790 KB",
    link1: "https://drive.google.com/file/d/1_vjssRt8jJwJ-jTf6_ftJGWl5EnzwdAT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Ninjawarriors Again (J) – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "879 KB",
    link1: "https://drive.google.com/file/d/1ZK4UXD8P7wyBtrbnhsGKOdLNSsYwB-m-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Spirits (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Thunder%20Spirits%20%28USA%29.png",
    size: "637 KB",
    link1: "https://drive.google.com/file/d/1qjFcYJ42iBVubF7TBe8e7qC_8I1FuOfe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Spirits (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Thunder%20Spirits%20%28USA%29.png",
    size: "637 KB",
    link1: "https://drive.google.com/file/d/1Zu2Zizi0eRCgbCUiEoBisYeGCb00H26J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Timeslip (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Timeslip%20%28USA%29.png",
    size: "525 KB",
    link1: "https://drive.google.com/file/d/1IvDacdVI4FEHnFfwpu4-cQ_vHMP27HMZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Timeslip (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Timeslip%20%28USA%29.png",
    size: "525 KB",
    link1: "https://drive.google.com/file/d/1WkWy_mTljS8wniYmkKpnjivlD0hLsvzB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Timon & Pumbaa's Jungle Games (USA) Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "1035 KB",
    link1: "https://drive.google.com/file/d/1P90jt855INymGPRaFwGpQnEd7x7vI_5M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonosama Appare Ichiban (J) – Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "1200 KB",
    link1: "https://drive.google.com/file/d/1ZhfkFfyEcF40RSWOQYAeVLAg9HZShFAE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Top%20Gear%20%28USA%29.png",
    size: "307 KB",
    link1: "https://drive.google.com/file/d/1Zq9jT3nQyAmyG0tUHMoiqRciuxtbeQPA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toy Story (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Toy%20Story%20%28USA%29.png",
    size: "2862 KB",
    link1: "https://drive.google.com/file/d/1Xh2BY_WjjMNSGVJ2l2NTu5XS4RvpVzLA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Troddlers (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Troddlers%20%28USA%29.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1CjRWibtfjERaXSqwcWKjJZ62weBOrkpm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Troddlers (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Troddlers%20%28USA%29.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1-JVuzExjJ4V6iGemBGyAM4abgv1jHXvo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "U.N. Squadron (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/U.N.%20Squadron%20%28USA%29.png",
    size: "558 KB",
    link1: "https://drive.google.com/file/d/1ypeXQ8MFAwSmFGnw6E4s95HPK4QKcY-n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uchuu no Kishi - Tekkaman Blade (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Uchuu%20no%20Kishi%20-%20Tekkaman%20Blade%20%28Japan%29.png",
    size: "624 KB",
    link1: "https://drive.google.com/file/d/1tL-L-9IRlRHlfiRlNidM2uFRZ4v1I_MI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman (U) (J) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ultraman%20%28USA%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1riO_PEokuEsVTT7_l1x-ylIsNZhePkJS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ushio to Tora (Japan) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ushio%20to%20Tora%20%28Japan%29.png",
    size: "542 KB",
    link1: "https://drive.google.com/file/d/16RVgHuu3HCBLoQIM1zu7kCfzhzlIObyS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "War 2410 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/War%202410%20%28USA%29.png",
    size: "852 KB",
    link1: "https://drive.google.com/file/d/1vgEPK1jF-KleBe2dPTHLrkBWNZQLf0Hf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "War 3010 - The Revolution (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/War%203010%20-%20The%20Revolution%20%28USA%29.png",
    size: "444 KB",
    link1: "https://drive.google.com/file/d/1SwDne8pSahob_3bvE_8x3wVCLirOtHHA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Weaponlord (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/WeaponLord%20%28USA%29.png",
    size: "2164 KB",
    link1: "https://drive.google.com/file/d/1CY24gKrm9-PAkP0JcaxpiMmxtAEH3FX4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wild Guns (U) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wild%20Guns%20%28USA%29.png",
    size: "692 KB",
    link1: "https://drive.google.com/file/d/1dSDSvkEjKmD_osviTF6jyrMKLDeXbh3k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Williams Arcade's Greatest Hits (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Williams%20Arcade%27s%20Greatest%20Hits%20%28USA%29.png",
    size: "270 KB",
    link1: "https://drive.google.com/file/d/1f0wdQABdNwOp2EdNU3BWz7fcv2VwGGyA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wolfchild (USA) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wolfchild%20%28USA%29.png",
    size: "433 KB",
    link1: "https://drive.google.com/file/d/1gD5IRtkYTB0SkQ05Twcowx7-cJUCl9dN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Heroes 2 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/World%20Heroes%202%20%28USA%29.png",
    size: "2037 KB",
    link1: "https://drive.google.com/file/d/1Ur506IeFQ5W_rIH2QLCiRFRrNMUXtqnY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Kaliber 2097 (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/X-Kaliber%202097%20%28USA%29.png",
    size: "710 KB",
    link1: "https://drive.google.com/file/d/1UtLMueafutY0q19gNlQ97ViYz1F41-Lm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men vs. Street Fighter (World) (Unl) (Pirate) Fastrom",
    image: "https://i.postimg.cc/y8mCwpX7/fastroms-snes.jpg",
    size: "1107 KB",
    link1: "https://drive.google.com/file/d/1GvialA_FGNqcVEEFMyCPd9cmckdap2zN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xardion (USA) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Xardion%20%28USA%29.png",
    size: "640 KB",
    link1: "https://drive.google.com/file/d/12mMTBRMOdbFUiPGwyGhEDbeip6Bb3imp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zero The Kamikaze Squirrel (U) (E Rev0 1) – Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Zero%20the%20Kamikaze%20Squirrel%20%28USA%29.png",
    size: "1231 KB",
    link1: "https://drive.google.com/file/d/1CURUwHzVVgVXPQe_vwErPwQxrobK97yc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zero the Kamikaze Squirrel (Europe) (Rev 1) Fastrom",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Zero%20the%20Kamikaze%20Squirrel%20%28Europe%29%20%28Rev%201%29.png",
    size: "1231 KB",
    link1: "https://drive.google.com/file/d/1_HPEU26_LlRwwRygg9y7wTw0KsGBffJJ/view?usp=drivesdk",
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
