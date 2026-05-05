const roms = [
  {
    name: "5 in One FunPak (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/5%20in%20One%20FunPak%20%28USA%29.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1irIB6ql-dqDfTjudi9yxNv2ukEKIQp8z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aa Harimanada (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Aa%20Harimanada%20%28Japan%29.png",
    size: "221 KB",
    link1: "https://drive.google.com/file/d/1bsUsDOxeUgICcajqVcc-3QSteWtn7p2y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Addams Family, The (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Addams%20Family%2C%20The%20%28World%29.png",
    size: "179 KB",
    link1: "https://drive.google.com/file/d/1qXZcMZR20gBSMFIt1VFGjr9paI9VBYwF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures of Batman & Robin, The (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/128F_4ByLCJ1qx85-F9qFz0LqaZKWLTRK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aerial Assault (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Aerial%20Assault%20%28World%29.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1nFJKAcmIKh_-bzhngnmJNggAlp_Sa2vj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aerial Assault (World) (Rev 1)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Aerial%20Assault%20%28World%29%20%28Rev%201%29.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1LShUtIYhbfxaA1_fNwQ5hMrE-0mbSfgR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aladdin (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Aladdin%20%28USA%2C%20Europe%2C%20Brazil%29%20%28Beta%29%20%281993-12-28%29.png",
    size: "278 KB",
    link1: "https://drive.google.com/file/d/1cwgTKtX1dHdc8Sc4_Vbw9tAayqi-bCFQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aladdin (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Aladdin%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/113QHsOhohORgXNq0Ljc4R7LpsfTF6oo9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien 3 (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Alien%203%20%28USA%2C%20Europe%29.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1P-51Ez1pCJOK1ySZoMHMPkCAQ2ijCvfH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien 3 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Alien%203%20%28USA%2C%20Europe%29.png",
    size: "147 KB",
    link1: "https://drive.google.com/file/d/1dR6PkeDlrRnxz-_SUpVAdYA_-hIYjRu4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Syndrome (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Alien%20Syndrome%20%28Europe%29.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/1b7F7kAR_nSK4xETJZUbPdfEhYCUtPxJP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Syndrome (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Alien%20Syndrome%20%28Europe%29.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/15dqX4b1tEG8Ov6Jsz4aCOIm4ynC5itT3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Andre Agassi Tennis (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Andre%20Agassi%20Tennis%20%28USA%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1ypsQl-KidPR2tjmHjpeXf_FGkWqwTOUo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arcade Classics (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Arcade%20Classics%20%28USA%29.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1mmBXeiYX5iD3AUU0usrcFrDmVyUQpr9m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arch Rivals - The Arcade Game (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Arch%20Rivals%20-%20The%20Arcade%20Game%20%28USA%29.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1K9IXRgjVvklFGoFW2g_Se1hDXs2jfEBG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Archer Maclean's Dropzone (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Archer%20Maclean%27s%20Dropzone%20%28Europe%29.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1dtK5jwGMa57i7FCjSmydREKweKGee86e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arena (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Arena%20%28USA%2C%20Europe%29.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/1EM2oz2xw_Bgr164yr34M2yzqVSNRFyZw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ariel - The Little Mermaid (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ariel%20-%20The%20Little%20Mermaid%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1SW2A0HX_Gc6gRtZZ-zeuXpmgDbHbODE8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arliel - Crystal Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Arliel%20-%20Crystal%20Densetsu%20%28Japan%29.png",
    size: "179 KB",
    link1: "https://drive.google.com/file/d/1BysqAH4DYxuwvmjl5_ghXs6XepOrgZ69/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix and the Great Rescue (Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Asterix%20and%20the%20Great%20Rescue%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "307 KB",
    link1: "https://drive.google.com/file/d/1GDuXLzLsPAdqDkarIMFUhwatyzCD0V0B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix and the Great Rescue (USA, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Asterix%20and%20the%20Great%20Rescue%20%28USA%2C%20Brazil%29%20%28En%29.png",
    size: "307 KB",
    link1: "https://drive.google.com/file/d/1mWAOBEPKDzVcY55bYKqAjEVudwuOiRrw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix and the Secret Mission (Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Asterix%20and%20the%20Secret%20Mission%20%28Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "272 KB",
    link1: "https://drive.google.com/file/d/1DJ45pZhz1wFmVT1VQ4dRafEekeMFlAkl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ax Battler - A Legend of Golden Axe (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ax%20Battler%20-%20A%20Legend%20of%20Golden%20Axe%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/1DhumluO2w8xT-ovE2We800YalPDWAG3x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ax Battler - A Legend of Golden Axe(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ax%20Battler%20-%20A%20Legend%20of%20Golden%20Axe%20%28USA%2C%20Europe%2C%20Brazil%29%20%28Beta%29%20%281991-08-10%29.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/13oBdB8RXdW9taDTd6lcIyxnAExJ1TKIU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ax Battler - Golden Axe Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ax%20Battler%20-%20Golden%20Axe%20Densetsu%20%28Japan%29.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/132tmG2YQbMLe3iM8BenGGboq6lOCNHbk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ayrton Senna's Super Monaco GP II (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ayrton%20Senna%27s%20Super%20Monaco%20GP%20II%20%28Japan%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1L03K7cFC7xMNTP9JYwJ-93bxa_Nd84My/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ayrton Senna's Super Monaco GP II (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ayrton%20Senna%27s%20Super%20Monaco%20GP%20II%20%28USA%2C%20Europe%2C%20Brazil%29%20%28Beta%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1H8-Lf-_W5rw6CtdHVaXYicOC6tL67Kad/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ayrton Senna's Super Monaco GP II (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ayrton%20Senna%27s%20Super%20Monaco%20GP%20II%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1xh-mOLsKjNmmdJpcEzx5LLTb-tWn6mqf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Baku Baku (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Baku%20Baku%20%28Europe%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1a_Y1g1_NQRyQb6oHnRUwNk6ZtjH0mJoD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Baku Baku (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Baku%20Baku%20%28USA%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1ovKKVdIqnjVjzkq2yFQZM232kE_jnjC_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Baku Baku Animal - Sekai Shiikugakari Senshu-ken (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Baku%20Baku%20Animal%20-%20Sekai%20Shiikugakari%20Senshu-ken%20%28Japan%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1fjCVRwv-7bWLk0vEDnmVK0rVIWKBo6-8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie Super Model (USA) (Proto) (1994-08-25)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Barbie%20Super%20Model%20%28USA%29%20%28Proto%29%20%281994-08-25%29.png",
    size: "99 KB",
    link1: "https://drive.google.com/file/d/19bPvYy55hsy6WsLj29ZNqwCTiFv92n_D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Forever (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Batman%20Forever%20%28World%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1UuyQ5DevXgoBinjuLlRJ7rL35rxkxq2d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Returns (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Batman%20Returns%20%28World%29.png",
    size: "157 KB",
    link1: "https://drive.google.com/file/d/1goK2FqpWI6DoiO4Cs2KTJaQiZj2UELrs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batter Up (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Batter%20Up%20%28USA%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/19I_IBSbwt0tWXvuNnHh7KsWHp6RER-n2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battleship - The Classic Naval Combat Game (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Battleship%20-%20The%20Classic%20Naval%20Combat%20Game%20%28USA%29.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1nSoQd3c0eP2DNeCBlwIjXJhrOoJJV8DT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battletoads (Japan, Europe) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Battletoads%20%28Japan%2C%20Europe%29%20%28En%29.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/14Td5ExvaBfy6bAJ6xm3reYXXY7Rpfn_i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battletoads (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Battletoads%20%28USA%29.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/1aoYbGeQIORZ69VooeHsxWDnSkw-XE4sT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beavis and Butt-Head (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Beavis%20and%20Butt-Head%20%28USA%2C%20Europe%29.png",
    size: "278 KB",
    link1: "https://drive.google.com/file/d/19cv3GXiPV6hbEwq_7kFvA5P6nFbDkudG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Berenstain Bears' Camping Adventure, The (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Berenstain%20Bears%27%20Camping%20Adventure%2C%20The%20%28USA%29.png",
    size: "169 KB",
    link1: "https://drive.google.com/file/d/1zea7NoBmlzGHwHJcodCeRuXWqwkPHqKe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Berlin no Kabe (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Berlin%20no%20Kabe%20%28Japan%29.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/16mhge8vl8hd6MSO7mjG5jxukNrGA_Kv0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Sailor Moon S (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Bishoujo%20Senshi%20Sailor%20Moon%20S%20%28Japan%29.png",
    size: "262 KB",
    link1: "https://drive.google.com/file/d/1BpGvD-hN6BNEZ5dqMLpdaS-D2E0lolxb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Sailor Moon S(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Bishoujo%20Senshi%20Sailor%20Moon%20S%20%28Japan%29%20%5BT-En%20by%20Supper%5D.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/16x-aFAzqr9Wv4r82_jFfbsqshP6e_ia2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonkers Wax Up! (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Bonkers%20Wax%20Up%21%20%28USA%2C%20Europe%29.png",
    size: "295 KB",
    link1: "https://drive.google.com/file/d/1bo5dB1G9rJBwr21EQ53pvSFdKurzU076/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Bram%20Stoker%27s%20Dracula%20%28Europe%29.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1CPSKsnadmQxkmQJr-e67u42wg7HuiFrl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Bram%20Stoker%27s%20Dracula%20%28USA%29.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1TScFI0PRBpeERoZPhtwREu6kbgFU6Vdi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BreakThru! (USA) (Proto)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/16Ny0bYl3y73ylo9auB11XPylG3xGVaJD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubble Bobble (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Bubble%20Bobble%20%28USA%29.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/1LcDhigvoEstU_ZcPj6nPNjEMDrx9fUFH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bugs Bunny in Double Trouble (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Bugs%20Bunny%20in%20Double%20Trouble%20%28USA%2C%20Europe%29.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/1sGHyrSa4xqisGxLDKAQaKwF1TKNpJSH_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bust-A-Move (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Bust-A-Move%20%28USA%29.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/13oUl2oECcK6YwStLy_OxoIPVxAs41-HR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buster Ball (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Buster%20Ball%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1g2muUb6Qjif_BNOKuoWqlWQQ6gYBACMj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buster Fight (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Buster%20Fight%20%28Japan%29.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1qtnFhE3-WgV6vru_BM-mKITEZyyRURdk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "CJ Elephant Fugitive (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/CJ%20Elephant%20Fugitive%20%28USA%2C%20Europe%29.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/1rqgQ3Az293BkcdSBHcZycEQOQY3ZhZ_r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Caesars Palace (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Caesars%20Palace%20%28USA%29.png",
    size: "153 KB",
    link1: "https://drive.google.com/file/d/1zDW48y87-iyXEMcPA8PSRqWzDspliaAN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain America and the Avengers (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Captain%20America%20and%20the%20Avengers%20%28USA%29.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1FXuhi7OM2-x-Gx0g7UFzEeci8Rex9qlR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Car Licence (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Car%20Licence%20%28Japan%29.png",
    size: "108 KB",
    link1: "https://drive.google.com/file/d/1ajCvW-tvI8S6RZsJTJgLj5fdPDVnHkmk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Casino FunPak (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Casino%20FunPak%20%28USA%29.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1BKXHGxQCSx7_qRKP-ZcYbXQR9gMWOlkd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chakan (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Chakan%20%28USA%2C%20Europe%29.png",
    size: "165 KB",
    link1: "https://drive.google.com/file/d/1Bu6fHyT78LzgfotaJop0nJGl1vgYygS4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Championship Hockey (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Championship%20Hockey%20%28Europe%29.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/14Qg-ShTcuk0HavbXJ1lNz7VCa26zse0I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cheese Cat-Astrophe Starring Speedy Gonzales (USA, Europe, Brazil) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Cheese%20Cat-Astrophe%20Starring%20Speedy%20Gonzales%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "221 KB",
    link1: "https://drive.google.com/file/d/1pWl-00o0NPJBmKnieHjYqGo20Qowk8Oa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chessmaster, The (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Chessmaster%2C%20The%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/14kzmPwGK89CX4vWeRf3djbYD7hN0Ab9h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chicago Syndicate (USA, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Chicago%20Syndicate%20%28USA%2C%20Brazil%29%20%28En%29.png",
    size: "339 KB",
    link1: "https://drive.google.com/file/d/1JfWJbIYwvJjB0R2hw1JWJWjoAKPtOVKG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choplifter III (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Choplifter%20III%20%28USA%29.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1TwMDJeJDhSct_Dzmr9kwKXqJ6NzOJJeS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Chuck%20Rock%20%28World%29.png",
    size: "150 KB",
    link1: "https://drive.google.com/file/d/1v8USplEqPmI3yFtinaJwRihLvG86hGAf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock II - Son of Chuck (Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Chuck%20Rock%20II%20-%20Son%20of%20Chuck%20%28Europe%2C%20Brazil%29%20%28En%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1HAk8at3LEOoOw8pv551grbGu5Ya4Y_n1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock II - Son of Chuck (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Chuck%20Rock%20II%20-%20Son%20of%20Chuck%20%28USA%29.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1JS31W2DtvwKfJtDWihNoyDAF5yXMwKav/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cliffhanger (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Cliffhanger%20%28USA%29.png",
    size: "155 KB",
    link1: "https://drive.google.com/file/d/1bIUpKzJdCRtf68-WVPlUTJlMD8qAESrD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clutch Hitter (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Clutch%20Hitter%20%28USA%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/10ld4jmcYX9s7QTSFST-djb7eSSKzB2D6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Columns%20%28Japan%29%20%28En%29.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1w68c3s_j3sX03Kv6wCDkzH-VBDeNk_Fs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns (Japan) (En) (Rev A)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Columns%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29%20%28Rev%202%29.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1Cq0C2LYgbWzWD6ZGd8yx_rCl7ukxvT0f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Columns%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29%20%28Rev%202%29.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1JdJ2NVfRJlSG4mDsuDlrjNsDwzu6z_cN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Columns%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29%20%28Rev%202%29.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1zhA3aqjGDy1H4-Bg5KyYROIOyJ483A0X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool Spot (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Cool%20Spot%20%28Europe%29.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1vdRRmvUDFb0Iw4URrcDObUzCxdOaylRS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool Spot (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Cool%20Spot%20%28USA%29.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1aNqrJe_rcSuwLnBwL63CDKvqfa6NU0iC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cosmic Spacehead (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Cosmic%20Spacehead%20%28USA%2C%20Europe%29.png",
    size: "195 KB",
    link1: "https://drive.google.com/file/d/1GBvz_uom8U_LP1wReN-ekoemFPGjB4jw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crayon Shin-chan - Taiketsu! Kantam Panic!! (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Crayon%20Shin-chan%20-%20Taiketsu%21%20Kantam%20Panic%21%21%20%28Japan%29.png",
    size: "202 KB",
    link1: "https://drive.google.com/file/d/1bqQw6qbT_27mGggM4-BkB_Mr1akk4OJc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crazy Faces (Europe) (Proto)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1q1t7gc_Wej7qPFgzsqFRpfE73IGV058J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crystal Warriors (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Crystal%20Warriors%20%28USA%2C%20Europe%29.png",
    size: "176 KB",
    link1: "https://drive.google.com/file/d/16s9R6YxWKcxxjEprxjNI0uWnkWaS_D5X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "CutThroat Island (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/CutThroat%20Island%20%28USA%29.png",
    size: "266 KB",
    link1: "https://drive.google.com/file/d/1AziuVKD5dH6Y1OMGB2ddcBW5CaRuDZJN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daffy Duck in Hollywood (Europe, Brazil) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Daffy%20Duck%20in%20Hollywood%20%28Europe%2C%20Brazil%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1Jzzx_Y16BJSNje5sKdeeZthhgkpC7lLF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "David Robinson's Supreme Court (USA) (Auto Demo)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "121 KB",
    link1: "https://drive.google.com/file/d/1pSHg2KxKZcfe9dLhcSF7Go_o8hON1GeQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Duck Trouble Starring Donald Duck (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Deep%20Duck%20Trouble%20Starring%20Donald%20Duck%20%28USA%2C%20Europe%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/11RQEs4W8JCo6EJSwH1REHb7C_mAthSWC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Defenders of Oasis (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Defenders%20of%20Oasis%20%28USA%2C%20Europe%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1IzYiH1edMy7twT59Vgr1Zu7LLE4pCgNY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Defenders of Oasis (USA, Europe) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Defenders%20of%20Oasis%20%28USA%2C%20Europe%29%20%28Virtual%20Console%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1Klh86c7BoVgNJjE1_MK7jqiDJ3mgVkIg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Speedtrap Starring Road Runner and Wile E. Coyote (Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Desert%20Speedtrap%20Starring%20Road%20Runner%20and%20Wile%20E.%20Coyote%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "186 KB",
    link1: "https://drive.google.com/file/d/1ExmMbptlN0i3bgiV6E7UumD_QbszmbdU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Speedtrap Starring Road Runner and Wile E. Coyote (USA, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Desert%20Speedtrap%20Starring%20Road%20Runner%20and%20Wile%20E.%20Coyote%20%28USA%2C%20Brazil%29%20%28En%29.png",
    size: "186 KB",
    link1: "https://drive.google.com/file/d/1qkQSFGel3IGq4j6QyytReKHdcJ8VhgYT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Speedtrap Starring Road Runner and Wile E. Coyote(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Desert%20Speedtrap%20Starring%20Road%20Runner%20and%20Wile%20E.%20Coyote%20%28USA%2C%20Brazil%29%20%28En%29.png",
    size: "186 KB",
    link1: "https://drive.google.com/file/d/1iW7TyXWt_FnjoBP03TgpSguUiv_SuUAf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Strike (Europe) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Desert%20Strike%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "200 KB",
    link1: "https://drive.google.com/file/d/1WCLQnlh7KPY_cyDFLpVjlqpwKBVguiCF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Strike - Return to the Gulf (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Desert%20Strike%20-%20Return%20to%20the%20Gulf%20%28USA%29.png",
    size: "200 KB",
    link1: "https://drive.google.com/file/d/1FMcaoMCvHzT3liyFKLgqOwZQWaoR_ITH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Devilish (Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Devilish%20%28Europe%2C%20Brazil%29%20%28En%29.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1OwPsDqxDOulSV3hz8jk8IoaaNBMqw-0f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Devilish (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Devilish%20%28USA%29.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1L9JcHTYos145HFVok8Y6xCZTN7aGSXMu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Devilish (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Devilish%20%28USA%29.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1YJeznt9HjfCkI2VZa_lZ9c7IAtjuJM4B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinobasher Starring Bignose the Caveman (Europe) (Proto)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1X4i8g4JUqbWWHxBUVbIpt_Ezt8dAFx43/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald Duck no 4-Tsu no Hihou (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Donald%20Duck%20no%204-Tsu%20no%20Hihou%20%28Japan%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1UHdyh3dvoZDK6JbKFEGHpcmc6EZ-yj0Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald Duck no Lucky Dime (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Donald%20Duck%20no%20Lucky%20Dime%20%28Japan%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1AQH09ATXPRwHm6TiXJ8Jn9vAqzBnjOym/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald no Magical World (Japan) (En,Ja)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Donald%20no%20Magical%20World%20%28Japan%29%20%28En%2CJa%29.png",
    size: "244 KB",
    link1: "https://drive.google.com/file/d/1aOyLS5qG8nazc5kCEBpolWJsrkR89gQy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Noranosuke no Yabou (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Doraemon%20-%20Noranosuke%20no%20Yabou%20%28Japan%29.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/13pJNYcL4SxPhQBbXBKri7ZRQjfak9fEp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Waku Waku Pocket Paradise (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Doraemon%20-%20Waku%20Waku%20Pocket%20Paradise%20%28Japan%29.png",
    size: "304 KB",
    link1: "https://drive.google.com/file/d/13b9piJ9Mo9Ym3z8MrJJvMDv9WuSi-yDd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Double%20Dragon%20%28USA%2C%20Europe%29.png",
    size: "208 KB",
    link1: "https://drive.google.com/file/d/1HEZLhbLp8qfoFH8cfh8NW5pvUL7b-QOo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dr. Franken (Europe) (Demo)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/1lWvUmvItCs_bA8htX8JDwYxdgjH0T_gN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dr. Robotnik's Mean Bean Machine (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dr.%20Robotnik%27s%20Mean%20Bean%20Machine%20%28USA%2C%20Europe%29.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1_5L8Nf-Tcn5vPPXgx39_tMKbwWXD-wIU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon - The Bruce Lee Story (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dragon%20-%20The%20Bruce%20Lee%20Story%20%28Europe%29.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1RGTA29DL4hNQO28-3ujv_L7cpO0O_ld-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon - The Bruce Lee Story (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dragon%20-%20The%20Bruce%20Lee%20Story%20%28USA%29.png",
    size: "120 KB",
    link1: "https://drive.google.com/file/d/1R08ikFDNrMnf2HylqhuGQQCyRsEppPlw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Crystal (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dragon%20Crystal%20%28USA%2C%20Europe%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1vpR2Q35CxTcTbGd8tnS8F5dW_4WkF9Q4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Crystal (USA, Europe) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dragon%20Crystal%20%28USA%2C%20Europe%29%20%28Virtual%20Console%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1n-A9whoQcU63FheeIn2s-a7XpGXlYjdG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Crystal - Tsurani no Meikyuu (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dragon%20Crystal%20-%20Tsurani%20no%20Meikyuu%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1fSI_YXh_Ty7ZPtuAIWeIexY9rypN-4_E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Crystal - Tsurani no Meikyuu (Japan) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dragon%20Crystal%20-%20Tsurani%20no%20Meikyuu%20%28Japan%29%20%28Virtual%20Console%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/18gQbijlSTVWRFUJwRcs_aVrC6W2r1uKG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Crystal(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dragon%20Crystal%20%28USA%2C%20Europe%29%20%28Virtual%20Console%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/19hFuzIysPw9v1wtu4A_hfn_vxTDHNGQj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dunk Kids (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dunk%20Kids%20%28Japan%29.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/1QKiza9x-mg3w8uGhWZjZdI_pnV2VLESx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynamite Headdy (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dynamite%20Headdy%20%28USA%2C%20Europe%29%20%28Beta%29%20%281994-06-15%29.png",
    size: "176 KB",
    link1: "https://drive.google.com/file/d/1B-D4R_gZ-yAySSnRJYtg27N_LiOjYeNP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynamite Headdy (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Dynamite%20Headdy%20%28USA%2C%20Europe%29.png",
    size: "179 KB",
    link1: "https://drive.google.com/file/d/12-JLvl0LIsUtsR_EFV25LI-xwa16Teh8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Earthworm%20Jim%20%28Europe%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1-ZMLzoNdFQfVE2bPD_5LaNUw8YRxBn1L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Earthworm%20Jim%20%28USA%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1qOouy8ODuoGDwAeu9VhakosBPGHb-otd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco - The Tides of Time (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ecco%20-%20The%20Tides%20of%20Time%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1By12pnpD7NZhjlwqfcVtoi_-oRqRw1Ub/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco the Dolphin (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ecco%20The%20Dolphin%20%28Japan%29.png",
    size: "215 KB",
    link1: "https://drive.google.com/file/d/1RIHfB8o-4XXn7jKlEJPe7-RbmmWWW_R7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco the Dolphin (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ecco%20The%20Dolphin%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/1Yi9lRuUomBwTwU8XlQ6zhXz22UXQENsc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco the Dolphin II (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ecco%20the%20Dolphin%20II%20%28Japan%29.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1ij69MSQx6ULP1LZ8rWFQ8VUewjB1w_Om/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ernie Els Golf (Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ernie%20Els%20Golf%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "168 KB",
    link1: "https://drive.google.com/file/d/1m9BilCtjozutNrKiQzbY1SLEZhprv2LR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ernie Els Golf(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ernie%20Els%20Golf%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "168 KB",
    link1: "https://drive.google.com/file/d/1C4HYQISYcLc6XYvi2aUwHHgAp96xOLGb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Eternal Legend (Japan)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1H8ygFomgUA7u_Fg-kZOdO20wIwGZKrvB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Evander Holyfield's 'Real Deal' Boxing (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Evander%20Holyfield%27s%20%27Real%20Deal%27%20Boxing%20%28USA%2C%20Europe%29.png",
    size: "119 KB",
    link1: "https://drive.google.com/file/d/1ttISek-w4JWfXM8pmKAiXwLyRjYF0zW6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-15 Strike Eagle (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/F-15%20Strike%20Eagle%20%28USA%2C%20Europe%29.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1aH3u9GndFBLid_MyEEzlTsxacAQnr4PT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/F1%20%28USA%2C%20Europe%29.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/13LnQSb7S8GBBy3OT5UqZTlRpv_pMggKL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 - World Championship Edition (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/F1%20-%20World%20Championship%20Edition%20%28Europe%29.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1TqMjGoe9PzV3GK85FqUFhEJIw-GtclSK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA International Soccer (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/FIFA%20International%20Soccer%20%28Japan%29.png",
    size: "245 KB",
    link1: "https://drive.google.com/file/d/1XHqAyAJe6Ja2XrK6I_Q7OSuP8d8YpmF_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA International Soccer (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/FIFA%20International%20Soccer%20%28USA%2C%20Europe%29.png",
    size: "251 KB",
    link1: "https://drive.google.com/file/d/1QSdVzNdktb7kkStVW19fPl2iARhvgZ8J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA Soccer 96 (USA, Europe) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/FIFA%20Soccer%2096%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "284 KB",
    link1: "https://drive.google.com/file/d/1lSB-ZrBBUUL5VnV4Xtknhwmpgi5PwdbQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Faceball 2000 (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Faceball%202000%20%28Japan%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1Eso1ZB5BshM5DnN7TZKVmAOFyelTOpTA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Factory Panic (Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Factory%20Panic%20%28Europe%2C%20Brazil%29%20%28En%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1_XUtHwzTvfkOA5vwA3VQXWB58Mh1AuSn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone (Japan, Europe) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Fantasy%20Zone%20%28Japan%2C%20Europe%29%20%28En%29.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1oTLU3qig0-AUPYEqvdM3AlnHgABcg9ta/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone (USA, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Fantasy%20Zone%20%28USA%2C%20Brazil%29%20%28En%29.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1z7Vx0MhRc3Gq1LwIpA6c5Sz8RX9ANYto/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fatal Fury Special (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Fatal%20Fury%20Special%20%28Europe%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/1nk5P6zh1D447NSB2Zrvg6HoCJ87C3s6k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fatal Fury Special (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Fatal%20Fury%20Special%20%28USA%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/1OQbkhDrUBsc9pobbWakXs35atc1nMuUk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fatal Fury Special(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Fatal%20Fury%20Special%20%28USA%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/1tt7vaffKxQLqTu4uDWjno--gdNibta3L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Foreman for Real (Japan, USA) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Foreman%20for%20Real%20%28Japan%2C%20USA%29%20%28En%29.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/18qwLAoPApGcWjunmharYcnvlfEK-y02v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frank Thomas Big Hurt Baseball (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Frank%20Thomas%20Big%20Hurt%20Baseball%20%28USA%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1ZhT3j_TqzAMvQ_YLgetkoP3Wm7m3Bs9r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fray - Shugyou Hen (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Fray%20-%20Shugyou%20Hen%20%28Japan%29.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1ZybcswRpXHVFKF9UbHa6cu0tgih0QAAi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fred Couples Golf (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Fred%20Couples%20Golf%20%28Japan%29.png",
    size: "278 KB",
    link1: "https://drive.google.com/file/d/1nqumTIX17Ecku8rNO_sD711LmvVmXT-X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fred Couples Golf (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Fred%20Couples%20Golf%20%28USA%29.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/1Og3vyy9Ur5-NdvVbwWVrNVic88YsK-zC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger (USA) (Proto)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Frogger%20%28USA%29%20%28Proto%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1Rp6zkn1P3HzULEkQe1RzK51_dt288FBh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "From TV Animation Slam Dunk - Shouri e no Starting 5 (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/From%20TV%20Animation%20Slam%20Dunk%20-%20Shouri%20e%20no%20Starting%205%20%28Japan%29.png",
    size: "284 KB",
    link1: "https://drive.google.com/file/d/1BAG0B7xsrRXc887tQ_VY6CByxOHQLKNJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "G-LOC - Air Battle (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/G-LOC%20-%20Air%20Battle%20%28Japan%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1ei55M6MwYFrdp37yTyH0XlRM-oYmkcrF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "G-LOC - Air Battle (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/G-LOC%20-%20Air%20Battle%20%28Japan%29%20%28Rev%201%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1pXP1sXinV5QRX4NMS0LWyqZFv3ejKaOl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "G-LOC - Air Battle (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/G-LOC%20-%20Air%20Battle%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1AGh8APc9G3q5LngmvT5o8TpKJyS3N-9v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GG Aleste (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/GG%20Aleste%20%28Japan%29%20%28En%29.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/1pk79-umz_1keEbtx3Itg2u9fQESHfJQl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GG Aleste (Japan) (En) (Aleste Collection)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/GG%20Aleste%20%28Japan%29%20%28En%29%20%28Aleste%20Collection%29.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/15NS0XnNlGSCa0ZnuKTAgdE13i1G31eg1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GG Aleste 3 (Japan) (En) (Aleste Collection)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/GG%20Aleste%203%20%28Japan%29%20%28En%29%20%28Aleste%20Collection%29.png",
    size: "315 KB",
    link1: "https://drive.google.com/file/d/1Xsu1-mEFWD9T_qO4TcfDASL6Spvxeq2B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GG Aleste II (Japan) (En) (Aleste Collection)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/GG%20Aleste%20II%20%28Japan%29%20%28En%29%20%28Aleste%20Collection%29.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1EGHomGgNkS3GO2uXbngHoHPjtq5pOX3q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GG Portrait - Pai Chan (Japan)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "200 KB",
    link1: "https://drive.google.com/file/d/1HwklLj8SaWGOUQyWl4l7TY4X4aajMHyQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GG Portrait - Yuuki Akira (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/GG%20Portrait%20-%20Yuuki%20Akira%20%28Japan%29.png",
    size: "231 KB",
    link1: "https://drive.google.com/file/d/18u6iiKy4t0DanzErS5BQEHO57MUHmdaG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GG Shinobi, The (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/GG%20Shinobi%2C%20The%20%28Japan%29.png",
    size: "178 KB",
    link1: "https://drive.google.com/file/d/1l3BOtgnQCFN83IgQLfnnTAYSik4Yx-AZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GP Rider (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/GP%20Rider%20%28World%29%20%28Beta%29%20%281994-01-04%29.png",
    size: "147 KB",
    link1: "https://drive.google.com/file/d/1Napkfq1NO_XuT5LccY3CuEVmXlJtFthJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GP Rider (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/GP%20Rider%20%28World%29.png",
    size: "147 KB",
    link1: "https://drive.google.com/file/d/1LxLsFkPcz3lMz2wtwbJ4GJgoaoW1XGdm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaga '91 (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Galaga%20%2791%20%28Japan%29.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1wP5H6OSZuH4Js6MCcWkWVb8ErQ6Ezejy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaga 2 (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Galaga%202%20%28Europe%29.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/11UXDeTCUGEhCsH_IZKFcGRr394XOX9LR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gamble Panic (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Gamble%20Panic%20%28Japan%29.png",
    size: "220 KB",
    link1: "https://drive.google.com/file/d/1yOdOGqGELi88HsHfl67sLqUf3xTlq6C5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gambler Jiko Chuushinha (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Gambler%20Jiko%20Chuushinha%20%28Japan%29.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1ATZNMBUej7qg_rCEnxQLHXfy2rTWRaqu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare Gorby! (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ganbare%20Gorby%21%20%28Japan%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/13MvTLrgIGaWaHXO06Tlku2SV4HmZFOrP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Garfield - Caught in the Act (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Garfield%20-%20Caught%20in%20the%20Act%20%28USA%2C%20Europe%29.png",
    size: "450 KB",
    link1: "https://drive.google.com/file/d/1udrjLWQX75ywbxLEY6oo5vwXuNmVkbPH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Garou Densetsu Special (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Garou%20Densetsu%20Special%20%28Japan%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/1h2S0E8oKDLvj6LcaqJEgnPp956_GpZmb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gear Stadium (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Gear%20Stadium%20%28Japan%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1saDMUipkEy5hhpCyz3jlie1IGAXJZ4ua/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gear Stadium Heiseiban (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Gear%20Stadium%20Heiseiban%20%28Japan%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1-JmmAGPykhAF_LEYASP7QbZlRoiFlAFg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gear Works (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Gear%20Works%20%28USA%29.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1onjoK6OX9SFbZvK9rgkbdbaiStbfPMWK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gear Works(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Gear%20Works%20%28USA%29.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/10CSe0EkMCq-BI6Hmy-fDFFMYgxlknRjK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "George Foreman's KO Boxing (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/George%20Foreman%27s%20KO%20Boxing%20%28USA%2C%20Europe%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1mrwaqmdwhAf51RDfjPfC3e0xH8LyEhUR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Global Gladiators (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Global%20Gladiators%20%28Europe%29.png",
    size: "150 KB",
    link1: "https://drive.google.com/file/d/1iW5Y5JZQc_Zrb-104xmClhwVZxXDz0AU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Global Golf (USA) (1994-06-20) (Proto)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "167 KB",
    link1: "https://drive.google.com/file/d/1o9vRB7McamE7PTXmcutqL-qGBw80WPJD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gojira - Kaijuu Daishingeki (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Gojira%20-%20Kaijuu%20Daishingeki%20%28Japan%29.png",
    size: "291 KB",
    link1: "https://drive.google.com/file/d/1F8Yulfp-HARDCkOleAUPX89F_bWmRJR5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Greendog - The Beached Surfer Dude! (USA, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Greendog%20-%20The%20Beached%20Surfer%20Dude%21%20%28USA%2C%20Brazil%29%20%28En%29.png",
    size: "134 KB",
    link1: "https://drive.google.com/file/d/1HAKfnvSPZHF33ldYu5QJwcrkaLdK9hDN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Griffin (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Griffin%20%28Japan%29.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1n7aBq_m4bapHr26ezjkklQRN_6QgwX0r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gunstar Heroes (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Gunstar%20Heroes%20%28Japan%29.png",
    size: "284 KB",
    link1: "https://drive.google.com/file/d/16CwkpZ_-R61ssGAUEeUgl1Sdkpom1Hat/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Halley Wars (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Halley%20Wars%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1oc0P1loQAC8cbvzqRT5laKss5EGN--Pu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Halley Wars (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Halley%20Wars%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1jInu5ndd9P-SC7QypBHJPT1AnACdZOlG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Head Buster (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Head%20Buster%20%28Japan%29.png",
    size: "72 KB",
    link1: "https://drive.google.com/file/d/1zySlNE4huREgrLeUR7dNfHhscZKMSoYh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heavy Weight Champ (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Heavy%20Weight%20Champ%20%28Japan%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1bcUNL4ak1d1tpAILmJxk5AwfVTs7ca0T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Alone (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Home%20Alone%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1QkMVIlSzUmOdYZXXcuoNiRndAit1JAkD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Honoo no Toukyuuji - Dodge Danpei (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Honoo%20no%20Toukyuuji%20-%20Dodge%20Danpei%20%28Japan%29.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1uzdpBLuFZJhbEgsHG23Gpc0FGC6-weSZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hook (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Hook%20%28Europe%29.png",
    size: "147 KB",
    link1: "https://drive.google.com/file/d/1Y8CSjURmpKV4PTO2hLMjZGjlV9BZSMPW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hook (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Hook%20%28USA%29.png",
    size: "147 KB",
    link1: "https://drive.google.com/file/d/1ViFA5zQPQCvWVS5xtKo5om6H0VCdwyFP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hook(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Hook%20%28USA%29.png",
    size: "147 KB",
    link1: "https://drive.google.com/file/d/1nn_KKYF8kRh0DXRoLg_PfA9etnopZNJ9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hurricanes (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Hurricanes%20%28Europe%29.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/1HKlZm8RRLcPEZu3_WVmJWE_Z5sz4qSib/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hyokkori Hyoutan-jima - Hyoutan-jima no Daikoukai (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Hyokkori%20Hyoutan-jima%20-%20Hyoutan-jima%20no%20Daikoukai%20%28Japan%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1EdD-Uu3A7bMebRvniBzRuG5rZ_HraGCs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hyper Pro Yakyuu '92 (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Hyper%20Pro%20Yakyuu%20%2792%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1pJ9YrA3abT3saA4aUAE0ojrz0e-wnoKL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "In the Wake of Vampire (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/In%20the%20Wake%20of%20Vampire%20%28Japan%29%20%28En%29.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1IOKR8jqhAwtxjnWxCsnlW6rlEVX0TBdH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "In the Wake of Vampire (Japan) (En) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/In%20the%20Wake%20of%20Vampire%20%28Japan%29%20%28En%29%20%28Virtual%20Console%29.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/17KqJT0FNDAf6D7ufBdobE6J1xIbHS1V_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Incredible Crash Dummies, The (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Incredible%20Crash%20Dummies%2C%20The%20%28World%29.png",
    size: "101 KB",
    link1: "https://drive.google.com/file/d/1D7pfammvsV9Wq0ZCmJAYg4-0Gvekgas1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Incredible Hulk, The (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Incredible%20Hulk%2C%20The%20%28USA%2C%20Europe%29.png",
    size: "377 KB",
    link1: "https://drive.google.com/file/d/1O7su0xTZM8LHqnXdVLHOQI6Lu2oFXYNM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indiana Jones and the Last Crusade (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Indiana%20Jones%20and%20the%20Last%20Crusade%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1XEyE3_zR7o3cO91o8aKjbH2qEx_rCmHB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Iron Man X-O Manowar in Heavy Metal (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Iron%20Man%20X-O%20Manowar%20in%20Heavy%20Metal%20%28USA%29.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/1D3wN84Pj2Rpq_5LYNlEC467pw18sw6Vp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Itchy & Scratchy Game, The (USA, Europe)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1XzzmOzuET9WIn_Nm9CSEjfHXTwkFt2Cf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "J.League GG Pro-Striker '94 (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/J.League%20GG%20Pro-Striker%20%2794%20%28Japan%29.png",
    size: "204 KB",
    link1: "https://drive.google.com/file/d/13ESo4uKGZUL19319exgz3sTik97E1RAY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "J.League Soccer - Dream Eleven (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/J.League%20Soccer%20-%20Dream%20Eleven%20%28Japan%29.png",
    size: "225 KB",
    link1: "https://drive.google.com/file/d/1006bF4tbfoSJS3z87YF13ALOPfaq0IRZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Bond 007 - The Duel (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/James%20Bond%20007%20-%20The%20Duel%20%28Europe%29.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1irDGLcEm58W2JV804F5XFtF_mX_1QMHx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Pond 3 - Operation Starfi5h (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/James%20Pond%203%20-%20Operation%20Starfi5h%20%28Europe%29.png",
    size: "223 KB",
    link1: "https://drive.google.com/file/d/1EuKrKAWWnJjQ6t9VXy3Mz3Vc0BT89q3O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Pond II - Codename RoboCod (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/James%20Pond%20II%20-%20Codename%20RoboCod%20%28Europe%29.png",
    size: "261 KB",
    link1: "https://drive.google.com/file/d/1dPWPTTZNTC4ogV2OMJqVQC-y7nq1I6-v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Pond II - Codename RoboCod (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/James%20Pond%20II%20-%20Codename%20RoboCod%20%28USA%29.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1AMoLIT3nCzQeFF6IYCLJTWZZAhlciAWE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeopardy! (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Jeopardy%21%20%28USA%29.png",
    size: "156 KB",
    link1: "https://drive.google.com/file/d/1RjvAgka5kGdAteofwS9ITKK6nbLYNDK1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeopardy! - Sports Edition (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Jeopardy%21%20-%20Sports%20Edition%20%28USA%29.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1DlM1cc_sZC4i8HNdUEFZ3XsoPvggEzHL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe Montana Football (Japan, Brazil) (En) (Rev 1)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Joe%20Montana%20Football%20%28Japan%2C%20Brazil%29%20%28En%29%20%28Rev%201%29.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/18koT4JSZhWBPhP0uN-VOf6kowELBkYDB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe Montana Football (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Joe%20Montana%20Football%20%28USA%2C%20Europe%29.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1jd9cNcD-PQ-DNPKT9KK5cFTeGZC_rep3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Journey from Darkness - Strider Returns (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Journey%20from%20Darkness%20-%20Strider%20Returns%20%28USA%2C%20Europe%29.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1eXeBdWKwI60ahaiwxaQZWBYx_wX6lL6J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Judge Dredd (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Judge%20Dredd%20%28USA%2C%20Europe%29.png",
    size: "321 KB",
    link1: "https://drive.google.com/file/d/1fo-rkVOelRwEXOo6EOFaC68oQvKY0U4G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Junction (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Junction%20%28Japan%29%20%28En%29.png",
    size: "36 KB",
    link1: "https://drive.google.com/file/d/1nGsrbzbdxlYrbQ0DlK2a0OwkMEuu3CjO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Junction (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Junction%20%28USA%29.png",
    size: "36 KB",
    link1: "https://drive.google.com/file/d/1O5CcdMPKGhrjlPHP8WyufPErY-T8g8J9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Book, The (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Jungle%20Book%2C%20The%20%28Europe%29.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1RM6iJVz0LlpC8qO2W3lNlH8Fxu0-9017/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Book, The (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Jungle%20Book%2C%20The%20%28USA%29.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/137ObEWFFeKcaao5XAPpxvhF7mSmGiPeJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Strike (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Jungle%20Strike%20%28USA%29.png",
    size: "248 KB",
    link1: "https://drive.google.com/file/d/1vHStaLkGzJswTSFT3_6R2K1tSGt5_iol/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Strike(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Jungle%20Strike%20%28USA%29.png",
    size: "248 KB",
    link1: "https://drive.google.com/file/d/1OjR5BmJayszGoZ_sLYSL92wDKcoBXBb7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Jurassic%20Park%20%28Japan%29.png",
    size: "330 KB",
    link1: "https://drive.google.com/file/d/1bhsOOSpNS1Jd8kRm0hKi7MooFRkCKhyb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Jurassic%20Park%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1E8CWpDafDdc7Df8iGOCUGC7N-76Je31L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "KLAX (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/KLAX%20%28USA%2C%20Europe%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1raretIyzH4htNdo0y1mlUurfPcj-6SiG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kaitou Saint Tail (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Kaitou%20Saint%20Tail%20%28Japan%29.png",
    size: "267 KB",
    link1: "https://drive.google.com/file/d/1mtAE4B_XEZNELJRmaMsc9A75W4v4BwSP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawasaki Superbike Challenge (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Kawasaki%20Superbike%20Challenge%20%28Europe%29.png",
    size: "108 KB",
    link1: "https://drive.google.com/file/d/1V7gg_91_DBaAG49FwH1kQZsHgX5mdNte/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawasaki Superbike Challenge (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Kawasaki%20Superbike%20Challenge%20%28USA%29.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/1ZsYSyZvofHeFGsW5cQ7Ca1sSn-QAz46a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawasaki Superbike Challenge(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Kawasaki%20Superbike%20Challenge%20%28USA%29.png",
    size: "108 KB",
    link1: "https://drive.google.com/file/d/13c5zHP7xncSwFnLrNZjqPBkE0qW6GMlt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kenyuu Densetsu Yaiba (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Kenyuu%20Densetsu%20Yaiba%20%28Japan%29.png",
    size: "233 KB",
    link1: "https://drive.google.com/file/d/1-urydX4tx6konrUcwKRZFg3kfcSySeEq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kick & Rush (Japan)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "113 KB",
    link1: "https://drive.google.com/file/d/1YVbkRCHHs3JEIkZJlpN55NtBR_W0Fzi1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kinetic Connection (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Kinetic%20Connection%20%28Japan%29.png",
    size: "40 KB",
    link1: "https://drive.google.com/file/d/1xC6GQPreU8mgMikbjVPmHdwvUbtyuKBY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kishin Douji Zenki (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Kishin%20Douji%20Zenki%20%28Japan%29.png",
    size: "302 KB",
    link1: "https://drive.google.com/file/d/1iwxRi_991ZDMzGxN4Yoh9GfVY1LO9GVS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Krusty's Fun House (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Krusty%27s%20Fun%20House%20%28USA%2C%20Europe%29.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1oi54lZLzQNs8L5tcBC7rHD6NhaO5ZnL0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kuni-chan no Game Tengoku (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Kuni-chan%20no%20Game%20Tengoku%20%28Japan%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/19kTM96DnDtQwDwMbLZ5UoEg_kQXaoidH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kuni-chan no Game Tengoku Part 2 (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Kuni-chan%20no%20Game%20Tengoku%20Part%202%20%28Japan%29.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/1sf9iO_OdH7kQwv2JPhOOTeS67ZS4ffSo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Land of Illusion Starring Mickey Mouse (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Land%20of%20Illusion%20Starring%20Mickey%20Mouse%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/1uEFYKB7O8Dz2lBMOfzlhLbuGopPpOifG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Last Action Hero (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Last%20Action%20Hero%20%28USA%29.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1REd8-7880_epOhDremztnS0f4D9SyJSz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Illusion Starring Mickey Mouse (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Legend%20of%20Illusion%20Starring%20Mickey%20Mouse%20%28USA%2C%20Europe%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1-20NUnoiOBVzDibnPzf4IhItAp9m20OB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Lemmings%20%28World%29.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/16ctdLHCMj30k5GRDCioY5Z05XwnB4cKK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings 2 - The Tribes (Europe) (Proto) (1995-09-04)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/1LzIfYmSKnhgVLj_BJeTRbusb26ZQZAov/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Lion%20King%2C%20The%20%28Europe%29.png",
    size: "271 KB",
    link1: "https://drive.google.com/file/d/1_BF9-n-rYBv6Wj4YvqKUcHH6KR3m_S9m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Lion%20King%2C%20The%20%28Japan%29.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/14SZD43Ztao8o2iYLfKeFcBd8E2VZJ79o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The (USA, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Lion%20King%2C%20The%20%28USA%29%20%28Beta%29%20%281994-08-03%29.png",
    size: "271 KB",
    link1: "https://drive.google.com/file/d/1BokX_T9jQokbPmj2zD5BQ_C_nTMhUWjX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lost World, The - Jurassic Park (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Lost%20World%2C%20The%20-%20Jurassic%20Park%20%28USA%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1bM2FsrHU_JA3s5NSCmQFjJd_wqzLBiib/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lucky Dime Caper Starring Donald Duck, The (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Lucky%20Dime%20Caper%20Starring%20Donald%20Duck%2C%20The%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/1ZygF0x0K5NKFfIM9UOkpD2SSVQvosu-p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lunar - Sanposuru Gakuen (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Lunar%20-%20Sanposuru%20Gakuen%20%28Japan%29.png",
    size: "302 KB",
    link1: "https://drive.google.com/file/d/1TfgpvJnK6ISDDY_G89sZu1Q_2rYcXetW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MLBPA Baseball (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/MLBPA%20Baseball%20%28USA%29.png",
    size: "222 KB",
    link1: "https://drive.google.com/file/d/1Y66dqxfxLyAK6Ur5-uyxBZctSaRIVQok/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden 96 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Madden%2096%20%28USA%2C%20Europe%29.png",
    size: "257 KB",
    link1: "https://drive.google.com/file/d/15phjl-lWtwgauxxdPkB0uQ4KZPlvBtOz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 95 (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Madden%20NFL%2095%20%28USA%29.png",
    size: "263 KB",
    link1: "https://drive.google.com/file/d/1EyLiF_XnivocEj80xRVuuymGgqqR7RpN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madou Monogatari A - Dokidoki Vacation (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Madou%20Monogatari%20A%20-%20Dokidoki%20Vacation%20%28Japan%29.png",
    size: "402 KB",
    link1: "https://drive.google.com/file/d/1jf8Ag5DiMt5olOKYH5FbKKHhmvbS4ePW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madou Monogatari I - 3tsu no Madoukyuu (Japan)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "371 KB",
    link1: "https://drive.google.com/file/d/18spSjtGybV2X1xzng-OfisP0EIgZWNOo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madou Monogatari II - Arle 16-Sai (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Madou%20Monogatari%20II%20-%20Arle%2016-Sai%20%28Japan%29.png",
    size: "404 KB",
    link1: "https://drive.google.com/file/d/1LFPlfOL_4C9HnIUBPbrQMRYKYxVa9YxD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madou Monogatari III - Kyuukyoku Joou-sama (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Madou%20Monogatari%20III%20-%20Kyuukyoku%20Joou-sama%20%28Japan%29.png",
    size: "411 KB",
    link1: "https://drive.google.com/file/d/1tAuEDDePicQu09RK-ZUsHpskWTZdj_2v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madou Monogatari III - Kyuukyoku Joou-sama (Japan) (Rev A)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Madou%20Monogatari%20III%20-%20Kyuukyoku%20Joou-sama%20%28Japan%29%20%28Rev%20A%29.png",
    size: "411 KB",
    link1: "https://drive.google.com/file/d/1xyGcLxN-ltfUYx7o5vMvSSmtGAwd6rBg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Knight Rayearth (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Magic%20Knight%20Rayearth%20%28Japan%29.png",
    size: "238 KB",
    link1: "https://drive.google.com/file/d/1RUL2qTeiLAYk82XGICyymDGMI_RmQ6tK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Knight Rayearth 2 - Making of Magic Knight (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Magic%20Knight%20Rayearth%202%20-%20Making%20of%20Magic%20Knight%20%28Japan%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/16MFmBlTqJ1JhKlLOquTbKUG5fDKz0cD7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Puzzle Popils (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Magical%20Puzzle%20Popils%20%28World%29%20%28En%2CJa%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1wAHN3rvRw_xeTWwu5YdLlWGDzQqwIPEC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Taruruuto-kun (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Magical%20Taruruuto-kun%20%28Japan%29.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1rTMMSSLkROB3ZB8I8WleiYR1yUl0BdI4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Majors, The - Pro Baseball (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Majors%2C%20The%20-%20Pro%20Baseball%20%28USA%29.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1UKPHKdBMp7Nqz0goSqRe30S9kjRtmTjN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Man Overboard! (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Man%20Overboard%21%20%28Europe%29.png",
    size: "131 KB",
    link1: "https://drive.google.com/file/d/1km5w4mIDCmelDQXdO0EIT0mPYVBH8Kx9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mappy (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mappy%20%28Japan%29.png",
    size: "47 KB",
    link1: "https://drive.google.com/file/d/1Go9RTVCKOu0b69FFyYXggZ2dA6xx5wdJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marble Madness (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Marble%20Madness%20%28USA%2C%20Europe%29.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/1ksz3z_w2FTH5IJ_fsXmZqpmcNErQxrrD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marko's Magic Football (Europe) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Marko%27s%20Magic%20Football%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "193 KB",
    link1: "https://drive.google.com/file/d/1xAyMmkKewekYN3Ip6jHUSqPwXyFKueY4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marko's Magic Football(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Marko%27s%20Magic%20Football%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "193 KB",
    link1: "https://drive.google.com/file/d/1TvXotufvGjZ-F4vKn1IjjWGSXB_Fb19Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Master of Darkness (Europe) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Master%20of%20Darkness%20%28Europe%29%20%28Virtual%20Console%29.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1yoVs_fcmRSR0Ta3benzc-UN-DBaI1wlt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Master of Darkness (Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Master%20of%20Darkness%20%28Europe%2C%20Brazil%29%20%28En%29.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1WvglJ8Hal_iTBySZnKrgm9w4y8e2F1eO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mega%20Man%20%28USA%29.png",
    size: "193 KB",
    link1: "https://drive.google.com/file/d/1xdIRsqIJwEmnwkE5BxXotCrfCW7v5kGc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Megami Tensei Gaiden - Last Bible (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Megami%20Tensei%20Gaiden%20-%20Last%20Bible%20%28Japan%29.png",
    size: "294 KB",
    link1: "https://drive.google.com/file/d/1LEK5uZFhCGWrHLRXVPiNdwK1TaBK-Vj6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Megami Tensei Gaiden - Last Bible Special (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Megami%20Tensei%20Gaiden%20-%20Last%20Bible%20Special%20%28Japan%29.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/1wWuKzrLl98OjJ6vttnhtKI3N9msQJvBf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey Mouse Densetsu no Oukoku - Legend of Illusion (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mickey%20Mouse%20Densetsu%20no%20Oukoku%20-%20Legend%20of%20Illusion%20%28Japan%29.png",
    size: "260 KB",
    link1: "https://drive.google.com/file/d/1MuNbVXAnLMSCM5Fv9MoNWlCBYJ8AiEuE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey Mouse no Mahou no Crystal (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mickey%20Mouse%20no%20Mahou%20no%20Crystal%20%28Japan%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/14HOFBQBWSKrrNigHN0AhmmXZVFPJEZ5c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Ultimate Challenge (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mickey%27s%20Ultimate%20Challenge%20%28USA%29.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1OQwZx5AdN52xFOfoXBpgt9xVdFBXgI1U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Machines (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Micro%20Machines%20%28USA%2C%20Europe%29.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1foOGCLnpC9zsx6AphyvbuD3VauWRCsem/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Machines 2 - Turbo Tournament (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Micro%20Machines%202%20-%20Turbo%20Tournament%20%28Europe%29.png",
    size: "212 KB",
    link1: "https://drive.google.com/file/d/1z9AYqocNULPo0gPHK9UqVR3_2Rr6DTit/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mighty Morphin Power Rangers (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mighty%20Morphin%20Power%20Rangers%20%28USA%2C%20Europe%29.png",
    size: "319 KB",
    link1: "https://drive.google.com/file/d/1x2p5CYen2ITEUd1MsZTO0SkckzW0Tior/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mighty Morphin Power Rangers - The Movie (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mighty%20Morphin%20Power%20Rangers%20-%20The%20Movie%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/1gy2ynoNlSciWihc3TCZtBn_SWEu9kXl8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mighty Morphin Power Rangers(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mighty%20Morphin%20Power%20Rangers%20%28USA%2C%20Europe%29%20%28Beta%29%20%281994-07-16%29.png",
    size: "319 KB",
    link1: "https://drive.google.com/file/d/1mWRtD61Hm2ApuMVDfZnXP8jKMMyVaW6t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moldorian - Hikari to Yami no Sister (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Moldorian%20-%20Hikari%20to%20Yami%20no%20Sister%20%28Japan%29.png",
    size: "285 KB",
    link1: "https://drive.google.com/file/d/1gub6IWefCTjRb3hCZoZSTvTjXR3pGaOe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monster Truck Wars (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Monster%20Truck%20Wars%20%28USA%2C%20Europe%29.png",
    size: "119 KB",
    link1: "https://drive.google.com/file/d/1ymbbna58ltkidErwcYLNT6a5uQP1G6_z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monster World II - Dragon no Wana (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Monster%20World%20II%20-%20Dragon%20no%20Wana%20%28Japan%29.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1bGGkoAQmgwYwvs9sj6o4GMxTEDTf6Ri9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mortal%20Kombat%20%28USA%2C%20Europe%29.png",
    size: "371 KB",
    link1: "https://drive.google.com/file/d/1EBlj51qQ5wf7tyhaNfBuySnkLO1H84yf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat - Shinken Kourin Densetsu (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mortal%20Kombat%20-%20Shinken%20Kourin%20Densetsu%20%28Japan%29.png",
    size: "371 KB",
    link1: "https://drive.google.com/file/d/1hbyF_owvOOXjZeZ0JA3G7NwQvob5DsZ7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat 3 (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mortal%20Kombat%203%20%28Europe%29.png",
    size: "263 KB",
    link1: "https://drive.google.com/file/d/1Y9ox0h0iGLeH7iVYp1kgSOmhWfhKvEeG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat II (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mortal%20Kombat%20II%20%28World%29.png",
    size: "386 KB",
    link1: "https://drive.google.com/file/d/1Iy2BlRGadW_bCCBLOM6-XG-Dcqiuxp9h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat II(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Mortal%20Kombat%20II%20%28World%29.png",
    size: "386 KB",
    link1: "https://drive.google.com/file/d/1G0G3SLrxKRI8BX5EpCwBSunyVaweXbQ9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ms.%20Pac-Man%20%28USA%29.png",
    size: "46 KB",
    link1: "https://drive.google.com/file/d/1hcGxY5dlH0y1Z3jNI_0anf02NDEBkwtY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Action Starring David Robinson (USA, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/NBA%20Action%20Starring%20David%20Robinson%20%28USA%2C%20Brazil%29%20%28En%29.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1XTyqJ9ICYOPbGvIssWsO10MLpCK8iz0W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/NBA%20Jam%20%28USA%29%20%28Rev%201%29.png",
    size: "235 KB",
    link1: "https://drive.google.com/file/d/12mo0tBZUpwBkOQn2Srt1XKPN9qvH7LOY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam (USA) (Rev 1) (Putative Proto)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/NBA%20Jam%20%28USA%29%20%28Rev%201%29.png",
    size: "235 KB",
    link1: "https://drive.google.com/file/d/1KqAXtiF8mlAD7weSVxIAHclhBaUPqiHK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/NBA%20Jam%20%28USA%2C%20Europe%29.png",
    size: "235 KB",
    link1: "https://drive.google.com/file/d/14_OOXRwCiRLDmdXXkZsnQ8RNF0_mKEdn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam - Tournament Edition (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/NBA%20Jam%20-%20Tournament%20Edition%20%28World%29.png",
    size: "291 KB",
    link1: "https://drive.google.com/file/d/1Oj4ypSs7MHO5k-6srXlVRaZuv1CNTBij/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL '95 (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/NFL%20%2795%20%28USA%29.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/1-z1x7p6WYSGqtQQ9a_XxoKjxYOGm3Tc5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL Quarterback Club (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/NFL%20Quarterback%20Club%20%28World%29.png",
    size: "167 KB",
    link1: "https://drive.google.com/file/d/1IJYmklbGcSF0EYDCoU7viM-H730OYloH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL Quarterback Club 96 (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/NFL%20Quarterback%20Club%2096%20%28USA%29.png",
    size: "166 KB",
    link1: "https://drive.google.com/file/d/1PFk9hORDHbe6ya5GzPohWKUZlDSuaaPa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL All-Star Hockey (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/NHL%20All-Star%20Hockey%20%28USA%29.png",
    size: "164 KB",
    link1: "https://drive.google.com/file/d/1k9tsz0d-IVM2_dhfcnHsuuoq5q8N1dRt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL Hockey (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/NHL%20Hockey%20%28USA%2C%20Europe%29.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/1cV5-LZT_xSqkeSTYTnDevAtiVqzDVGl-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo Puyo (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Nazo%20Puyo%20%28Japan%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1sLa-X-Z6l4UwNThH1YWO8sALSUh6-NCl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo Puyo (Japan) (Rev A)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Nazo%20Puyo%20%28Japan%29%20%28Rev%201%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/11TXB7FSStb5q8pobiJsRgS67aFjeYRQI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo Puyo - Arle no Roux (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Nazo%20Puyo%20-%20Arle%20no%20Roux%20%28Japan%29.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1RmkATsRwDxrgHIFnImVa3uehf_UTL0-j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo Puyo 2 (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Nazo%20Puyo%202%20%28Japan%29.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/19UMtjs4zC6vNGPCvBVvbz4qEKYCbgpSV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neko Daisuki! (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Neko%20Daisuki%21%20%28Japan%29.png",
    size: "178 KB",
    link1: "https://drive.google.com/file/d/1R06nb4-_296wWT1rAy1QYKE9xMcBK45Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ninja%20Gaiden%20%28Japan%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1csfICBI795chag9tGsmwfoKdWahyZ4Ou/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ninja%20Gaiden%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/12LJswOfc8OkRkOwBCTGjFYFa3sLCZuHO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ninja%20Gaiden%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1EGqof-nJjhHM-rKU6XhFZ10h2sOcVH-e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninku (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ninku%20%28Japan%29.png",
    size: "284 KB",
    link1: "https://drive.google.com/file/d/1NW5eGzemz0cyfItozvFmdL6kZbadzUqp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninku 2 - Tenkuuryuu-e no Michi (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ninku%202%20-%20Tenkuuryuu%20e%20no%20Michi%20%28Japan%29.png",
    size: "304 KB",
    link1: "https://drive.google.com/file/d/1UT7uKvSTDRU0VpnIB5OMqupwecbkvOdm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninku Gaiden - Hiroyuki Daikatsugeki (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ninku%20Gaiden%20-%20Hiroyuki%20Daikatsugeki%20%28Japan%29.png",
    size: "234 KB",
    link1: "https://drive.google.com/file/d/1sgiIVjdFJPVHxPu3emvPWm1_2PmL-KeJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nomo Hideo no World Series Baseball (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Nomo%20Hideo%20no%20World%20Series%20Baseball%20%28Japan%29.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1UDSlRPBKaK_YMFiLrwfdpLtMKIVR5hHI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Off the Wall (USA) (Proto) (1992-06-28)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "99 KB",
    link1: "https://drive.google.com/file/d/1xbrFmBD0iLKRBiVZMWVe_0NSt-Kv22sM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ottifants, The (Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ottifants%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "110 KB",
    link1: "https://drive.google.com/file/d/1TdwQxbLFLSIsF9G5rQ_al1pWzT93tHx7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "OutRun (Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/OutRun%20%28Europe%2C%20Brazil%29%20%28En%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1et-3QGF6P1RrgCKYknxuObU6vamk2Qta/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "OutRun (Japan, Korea) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/OutRun%20%28Europe%2C%20Brazil%29%20%28En%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1Tv-2ewunkgGd8qoyZg-3OC74mWwDeNln/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA Tour 96 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/PGA%20Tour%2096%20%28USA%2C%20Europe%29.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/10XPZIVsITPrV9qEp9Lm638BvC0v9-OyN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA Tour Golf (USA) (Rev 1) (Putative Proto)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/PGA%20Tour%20Golf%20%28USA%29%20%28Rev%201%29.png",
    size: "176 KB",
    link1: "https://drive.google.com/file/d/1CFD3MOihV254fFMheAJ3xMflaWEmHkR6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA Tour Golf (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/PGA%20Tour%20Golf%20%28USA%2C%20Europe%29.png",
    size: "176 KB",
    link1: "https://drive.google.com/file/d/1rj5nKb7CR0W8xBmAxoMEJNulw1mQNV17/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA Tour Golf II (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/PGA%20Tour%20Golf%20II%20%28USA%2C%20Europe%29.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/1F__-i91HZ0zHchleWgq79KeBNELcBWVC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Attack (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pac-Attack%20%28USA%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1LPhuL-d6mZemD7Ep_u0bxTI7iA_j9AGf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Man (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pac-Man%20%28Japan%29%20%28En%29.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1QChIoFNPgdROcU9Emlbqa7oJoNfp4-_m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Man (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pac-Man%20%28USA%29.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1dTTgsga_h8iLzfNJwQV00Bq6oiJFCPxj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-in-Time (USA) (Proto)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "179 KB",
    link1: "https://drive.google.com/file/d/1hbEjwQXc3tPW3K80sIsi2XR_lIreUzJ_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Panzer Dragoon Mini (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Panzer%20Dragoon%20Mini%20%28Japan%29.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1Im680_v4VPdtsbX7_-q5r9pXeuciTnwY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Paperboy%20%28USA%2C%20Europe%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1jkx1nSwsBS58jqQeqZ8DrcnV5pGnRGUY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy 2 (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Paperboy%202%20%28USA%29.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1F6XXU45blJxY_rLbe3FcP9N4a8roW10v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pengo (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pengo%20%28Europe%29.png",
    size: "20 KB",
    link1: "https://drive.google.com/file/d/1vEoEWv6OXAUsVBw2USxu0q6m0GyMS3FO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pengo (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pengo%20%28Japan%29.png",
    size: "20 KB",
    link1: "https://drive.google.com/file/d/19H3XBJFcpGoI2gFWHUSLoUIETt_-3vBH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pet Club - Inu Daisuki! (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pet%20Club%20-%20Inu%20Daisuki%21%20%28Japan%29.png",
    size: "239 KB",
    link1: "https://drive.google.com/file/d/1erszaCBkQYgnX4z6PCETZqrzcrvd1fXS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pete Sampras Tennis (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pete%20Sampras%20Tennis%20%28USA%2C%20Europe%29.png",
    size: "91 KB",
    link1: "https://drive.google.com/file/d/1K2TgerK0wuIuiRwSyu0ncvpD9jwVLe3P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pete Sampras Tennis (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pete%20Sampras%20Tennis%20%28USA%2C%20Europe%29.png",
    size: "91 KB",
    link1: "https://drive.google.com/file/d/1eSdnc5DM5tyvcxgzz9zAnRA4TNyW3CUd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star Adventure (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Phantasy%20Star%20Adventure%20%28Japan%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/12Y8kD_mClqmKkZAE8m4w4TEA43pfQD2S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star Gaiden (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Phantasy%20Star%20Gaiden%20%28Japan%29.png",
    size: "156 KB",
    link1: "https://drive.google.com/file/d/1Gy_xeiRjrMoNJiVzLNEiJmKhoxmwSnur/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star Gaiden(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Phantasy%20Star%20Gaiden%20%28Japan%29%20%5BT-En%20by%20Dynamic-Designs%20and%20Taskforce%5D.png",
    size: "156 KB",
    link1: "https://drive.google.com/file/d/1MwwYlmzey882ABbpadYFnHj853sBAIwb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantom 2040 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Phantom%202040%20%28USA%2C%20Europe%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1RUETbSRhqY5ywIqK780c6ruHXJnRQ8a9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pinball Dreams (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pinball%20Dreams%20%28USA%29.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/187PO87u4YtRPgrWHzJVfTFkZoUtwi-dK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Jansou (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pocket%20Jansou%20%28Japan%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1UrUMFNHprK9YwIythap-bWd_5J0TMDo0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Poker Face Paul's Blackjack (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Poker%20Face%20Paul%27s%20Blackjack%20%28USA%29.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/18cb1EZKGJnMGdnkeEfha6uhAZ7Ue5mL7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Poker Face Paul's Cribbage (USA) (Proto)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1ETddC0-EVKcM8gtGWBeJPQxMqhLqoVEz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Poker Face Paul's Cribbage (USA) (Proto) (Source Code)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1lXAvGSXKD97NgJOldH_9ml1WaUMgPaDj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Poker Face Paul's Gin (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Poker%20Face%20Paul%27s%20Gin%20%28USA%29.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1ZMU2rt6RGBYXiO1_L_C4tMY6eDmonqfc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Poker Face Paul's Poker (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Poker%20Face%20Paul%27s%20Poker%20%28USA%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/12993Vuq1ORwgoCwUo75mVNTYkvea_-9S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Poker Face Paul's Solitaire (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Poker%20Face%20Paul%27s%20Solitaire%20%28USA%29.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/1ExTbtJhqtemzSM-8caidkdNuoCdN5nGD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pop Breaker (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pop%20Breaker%20%28Japan%29.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/14eeUtRNLfSe3rv8coTxYtpOFASFrunU7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Popeye no Beach Volleyball (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Popeye%20no%20Beach%20Volleyball%20%28Japan%29.png",
    size: "206 KB",
    link1: "https://drive.google.com/file/d/17tqKh8Ayg8lUVnH3FYSTLKe21v2MS8_v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Drive (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Power%20Drive%20%28Europe%29.png",
    size: "276 KB",
    link1: "https://drive.google.com/file/d/19yxG6WJtUVCMtHQmTk_El5Cfe0x5yrBv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Strike II (Japan, Europe) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Power%20Strike%20II%20%28Japan%2C%20Europe%29%20%28En%29.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1uGX0kiAJ1JHhKPjza-el3BpmR00qs_lN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Primal Rage (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Primal%20Rage%20%28USA%2C%20Europe%29.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/1s-NAEO5LNdcax1mXxCnD1SMB01NiDVYz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Yakyuu '91, The (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pro%20Yakyuu%20%2791%2C%20The%20%28Japan%29.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1sWpVWTthJhiLuRjQvLQdaeK4xk4xeFHc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Yakyuu GG League '94 (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pro%20Yakyuu%20GG%20League%20%2794%20%28Japan%29.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/1hBySyV7fZUqSgn3tHI7qZbqdGR4ByWYO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Yakyuu GG League (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Pro%20Yakyuu%20GG%20League%20%28Japan%29.png",
    size: "108 KB",
    link1: "https://drive.google.com/file/d/1iVhQuvPwZfLpLpuKOsh3r8z76fYFAlLu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psychic World (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Psychic%20World%20%28Japan%29%20%28En%29.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/18U013M3XhZOB7afDUuQJdSQZpDEJUGEM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psychic World (USA, Europe, Brazil) (En) (Rev 1)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Psychic%20World%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29%20%28Rev%201%29.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/119v68vQJJA2wHmDIgjCOIAMAhEh11Ldv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Putt & Putter (Japan, Korea) (En)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1c1hmD5XGAczFNAKxVcFyNi92VpI1MUGf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Putt & Putter (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1UZck-7LcF5RXpRaJoUxoDwnaZS6My9fp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puyo Puyo (Japan) (En,Ja)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Puyo%20Puyo%20%28Japan%29%20%28En%2CJa%29.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/1BNiHC6RGkwOOhHnsXFwYfxqOWRtN7r6g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puyo Puyo Tsuu (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Puyo%20Puyo%20Tsuu%20%28Japan%29.png",
    size: "263 KB",
    link1: "https://drive.google.com/file/d/1z8JuagKQZjjRpsX2T_vb6gojmBS-pOHa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puyo Puyo Tsuu (Japan) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Puyo%20Puyo%20Tsuu%20%28Japan%29%20%28Virtual%20Console%29.png",
    size: "263 KB",
    link1: "https://drive.google.com/file/d/1l6tr35JxK7jDZjtFt4weZAS2ijzPUIW-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle & Action - Ichidanto-R (Japan)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "315 KB",
    link1: "https://drive.google.com/file/d/1YSrtAScAXMSDt7nusuPeiIacWK0tRxiq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle & Action - Tanto-R (Japan)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "263 KB",
    link1: "https://drive.google.com/file/d/1fKYqxE86aAtl8O9b83uX150vuGPmizeY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle Bobble (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Puzzle%20Bobble%20%28Japan%29.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/11OEAyeq26PkzhZEkFCEKT3YRGdIiDQC8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest for the Shaven Yak Starring Ren Hoek & Stimpy (USA, Europe)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "294 KB",
    link1: "https://drive.google.com/file/d/1UHGZ0Sb_DjH5eNz9CfupPqU4lgfEV5u9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quiz Gear Fight!!, The (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Quiz%20Gear%20Fight%21%21%2C%20The%20%28Japan%29.png",
    size: "297 KB",
    link1: "https://drive.google.com/file/d/1IWRvVwWWl32JPVk-jQfIZRCHXOV9dD7l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R.B.I. Baseball '94 (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/R.B.I.%20Baseball%20%2794%20%28USA%29.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1-FQcWSPqIJBVcqO0stYIY6lMndBmXMJO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Revenge of Drancon (USA, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Revenge%20of%20Drancon%20%28USA%2C%20Brazil%29%20%28En%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1AlflM5z4kUKYy4vEm6a_3y0NqbRNqsml/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Riddick Bowe Boxing (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Riddick%20Bowe%20Boxing%20%28USA%29.png",
    size: "108 KB",
    link1: "https://drive.google.com/file/d/1RNqZe5bSBxAzmJN90NutdfsRuFyI-G7D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Riddick Bowe Boxing (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Riddick%20Bowe%20Boxing%20%28USA%29.png",
    size: "108 KB",
    link1: "https://drive.google.com/file/d/1V0V44OvWLK-rtbpUpY1wSytqo5xdHRXw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rise of the Robots (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Rise%20of%20the%20Robots%20%28USA%2C%20Europe%29.png",
    size: "281 KB",
    link1: "https://drive.google.com/file/d/11aQJcy0IWHWU-Iq1d0OGGn-9cC1Aeu8I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ristar (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ristar%20%28World%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/14IF7BEof2vUdM8XeaN1fborkTuTsPBDw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ristar - The Shooting Star(ES)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/18tnapmw-2pOIY4xQvbZJA6rOHdqjVjE1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Rash (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Road%20Rash%20%28Europe%29.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/1P58AGDgt0IiYLgn2shy1PxnJ2xv0N2xU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Rash (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Road%20Rash%20%28USA%29.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/1JtQgc3vkVgWjzfuFLI8e-1JRC6UPO_F-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Rash(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Road%20Rash%20%28USA%29.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/1upl2mIlrEnXBO3JaSXuzpBwMWW-4CpX6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop 3 (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/RoboCop%203%20%28World%29.png",
    size: "110 KB",
    link1: "https://drive.google.com/file/d/1AiuWRrxkqlW3P3m18vl6S2WWUpioHXSd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop Versus The Terminator (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/RoboCop%20versus%20The%20Terminator%20%28USA%2C%20Europe%29.png",
    size: "274 KB",
    link1: "https://drive.google.com/file/d/17HaOe8KtuIozysOHurzc81lC_wggBjIV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Royal Stone - Hirakareshi Toki no Tobira (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Royal%20Stone%20-%20Hirakareshi%20Toki%20no%20Tobira%20%28Japan%29.png",
    size: "376 KB",
    link1: "https://drive.google.com/file/d/13rLyrcflRysw3nIxUi3YGRNDxhIrQZ3X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ryuukyuu (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ryuukyuu%20%28Japan%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1Q8ZXq-Dkwgv1obdQj2Q0mrdHabMjxCZv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam - Winner's History (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/SD%20Gundam%20-%20Winner%27s%20History%20%28Japan%29.png",
    size: "235 KB",
    link1: "https://drive.google.com/file/d/1jiAdUwbVK5jSXnaulffDu_Xe6vT4GNS6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Samurai Shodown (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Samurai%20Shodown%20%28USA%29.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/1hwSq9aBUItPcELw6kenqx4loDVlIxDMR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Samurai Spirits (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Samurai%20Spirits%20%28Japan%29.png",
    size: "311 KB",
    link1: "https://drive.google.com/file/d/1U8Zu5aaEJAaHsmL0EwTNUlJxk3Ehc8ng/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sassou Shounen Eiyuuden - Coca-Cola Kid (Japan)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "214 KB",
    link1: "https://drive.google.com/file/d/1w1CjvJ9ctRF7cY99xVPDw9EJcbXz1nF-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Schtroumpfs Autour du Monde, Les (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1b_srV1OErCVeJeVevEPQpObShwlTbFMB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scratch Golf (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Scratch%20Golf%20%28Japan%29.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1JeDptRfdtiGH-h33LmVi7-jkNtCYSiOJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scratch Golf (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Scratch%20Golf%20%28USA%29.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1cK0m7cj-brea0rXoqBwgG2nhkEtal7K_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sega Game Pack 4 in 1 (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sega%20Game%20Pack%204%20in%201%20%28Europe%29.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1n_RMbkgkXEf7izWlqludLcdmnRS85Tkw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sensible Soccer - European Champions (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sensible%20Soccer%20-%20European%20Champions%20%28Europe%29.png",
    size: "72 KB",
    link1: "https://drive.google.com/file/d/1fivqbjOEs58gBFsJ2BPailvEjRdeml_z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadam Crusader - Harukanaru Oukoku (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shadam%20Crusader%20-%20Harukanaru%20Oukoku%20%28Japan%29.png",
    size: "400 KB",
    link1: "https://drive.google.com/file/d/1zwzviLUvHiMZELGJFb4H6HTglyCGjORi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai II (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shanghai%20II%20%28Japan%29%20%28Rev%20A%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1_ovjePZFZqME2YvmiR1gI_m1MoMYnuHp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai II (Japan) (En) (Rev A)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shanghai%20II%20%28Japan%29%20%28Rev%20A%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/15rogL9JUrd694uWCtKsalLGb94HmWfqw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shaq Fu (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shaq%20Fu%20%28USA%29.png",
    size: "276 KB",
    link1: "https://drive.google.com/file/d/1VsBaRAkWFjPG0XpZurQXwHtraghWOADh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shikinjou (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shikinjou%20%28Japan%29.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1yCjwSAkC4xXJVIoZM4XUHuE6RwlKH847/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shining Force - The Sword of Hajya (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shining%20Force%20-%20The%20Sword%20of%20Hajya%20%28USA%29.png",
    size: "369 KB",
    link1: "https://drive.google.com/file/d/1le5gC7o0x_yx6EdqtQlRspwKB6T_1EbW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shining Force - The Sword of Hajya (USA, Europe) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shining%20Force%20-%20The%20Sword%20of%20Hajya%20%28USA%2C%20Europe%29%20%28Virtual%20Console%29.png",
    size: "370 KB",
    link1: "https://drive.google.com/file/d/1WkHyQlYFiYBH3qiAZOQW54S_qVmj8eI0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shining Force Gaiden - Ensei, Jashin no Kuni e (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shining%20Force%20Gaiden%20-%20Ensei%2C%20Jashin%20no%20Kuni%20e%20%28Japan%29.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/1nrX9PCl8td2XA7pCa1mx2PZ4RQFAGOjE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shining Force Gaiden - Final Conflict (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shining%20Force%20Gaiden%20-%20Final%20Conflict%20%28Japan%29.png",
    size: "394 KB",
    link1: "https://drive.google.com/file/d/1rg6IUXSUZVMwi29ak_rWVxlcMdRrhKo6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shining Force Gaiden - Final Conflict (Japan) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shining%20Force%20Gaiden%20-%20Final%20Conflict%20%28Japan%29%20%28Virtual%20Console%29.png",
    size: "394 KB",
    link1: "https://drive.google.com/file/d/17BURJP-Si8m3c4d5ZGNB9RYamvsVcORr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shining Force Gaiden II - Jashin no Kakusei (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shining%20Force%20Gaiden%20II%20-%20Jashin%20no%20Kakusei%20%28Japan%29.png",
    size: "371 KB",
    link1: "https://drive.google.com/file/d/1nh22OBBsGlmyPsCk1GbMP3vTiiLk7VmG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinobi (World) (Rev A)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shinobi%20%28World%29%20%28Rev%20A%29.png",
    size: "178 KB",
    link1: "https://drive.google.com/file/d/1zWhi1i_luZ6R2xQKviavfc0yBHD2sjAs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinobi (World) (Rev A) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shinobi%20%28World%29%20%28Rev%20A%29%20%28Virtual%20Console%29.png",
    size: "178 KB",
    link1: "https://drive.google.com/file/d/1WnwiWU2oYBRdlXVX8yGUMrFKE9SP0I9C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinobi II - The Silent Fury (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Shinobi%20II%20-%20The%20Silent%20Fury%20%28World%29.png",
    size: "167 KB",
    link1: "https://drive.google.com/file/d/1-8UVk_dQ00BhmASSXJGKraG_WkLy4-Eg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Side Pocket (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Side%20Pocket%20%28USA%29.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1ZGdhB9EkpED1dLSI0p2wXcsz9qklkbDr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Simpsons, The - Bart vs. the Space Mutants (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Simpsons%2C%20The%20-%20Bart%20vs.%20the%20Space%20Mutants%20%28USA%2C%20Europe%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1dLhI8HilBCrACmcAYputPtQc3ryGaLOH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Simpsons, The - Bart vs. the World (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Simpsons%2C%20The%20-%20Bart%20vs.%20the%20World%20%28World%29.png",
    size: "165 KB",
    link1: "https://drive.google.com/file/d/1-zp2DuG3esNRtATq_cJOxPWdtepCy5it/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Simpsons, The - Bartman Meets Radioactive Man (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Simpsons%2C%20The%20-%20Bartman%20Meets%20Radioactive%20Man%20%28USA%29.png",
    size: "182 KB",
    link1: "https://drive.google.com/file/d/1-dH6XOYN3PlhFE72xD6LxE5IF_KEeclr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Skweek (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Skweek%20%28Japan%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1X5zCemsuCjQqU-99RORe6PrruBLtno4A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slider (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Slider%20%28USA%2C%20Europe%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/17GfC3xYxBhjRsbL7HHiR6zsIO2I9zz_f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smurfs, The (Europe) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Smurfs%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1yhKx8QiK8GEzAB1XsOUQfqbbjTEdxRb8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Solitaire FunPak (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Solitaire%20FunPak%20%28USA%29.png",
    size: "124 KB",
    link1: "https://drive.google.com/file/d/19SXHVrNDxvQEINu-VPp7r1NpUPzlsuTK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Solitaire Poker (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Solitaire%20Poker%20%28USA%2C%20Europe%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1uxgroxNmrHW8pz1nVaGlM0zl8tGBDDAW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic & Tails (Japan) (En)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "217 KB",
    link1: "https://drive.google.com/file/d/1JmcqKvjd-omLV2cc61LfDuXH1h1QOFiO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic & Tails (Japan) (En) (Sample)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "222 KB",
    link1: "https://drive.google.com/file/d/1zI1gxPZnCdCrS1zDburI0XlEefVQhn7o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic & Tails 2 (Japan) (En)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "276 KB",
    link1: "https://drive.google.com/file/d/1-fxRUJxHyjGsDyZClyXnsq-MsKTkE0_E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Blast (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20Blast%20%28World%29.png",
    size: "445 KB",
    link1: "https://drive.google.com/file/d/1D51HRfHh7l1XvRDWCOiGp14-0yUd0oO0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Chaos (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20Chaos%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/1YlPHHEiBYpNQcy2L6JG0cm6Qlkwku5FJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Drift (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20Drift%20%28Japan%29%20%28En%29.png",
    size: "179 KB",
    link1: "https://drive.google.com/file/d/1D-bNZPRylrQaXGnEao97MlBJ68tb0Wdf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Drift (Japan) (En) (Auto Demo)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20Drift%20%28Japan%29%20%28En%29%20%28Demo%29.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1b0uLIb2zm8iMtg0fnmj_aQX725dB2m-Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Drift 2 (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20Drift%202%20%28World%29.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/1qx1IrGqFiuFibvgC_2qr4edpOXU5GxON/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Labyrinth (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20Labyrinth%20%28World%29.png",
    size: "207 KB",
    link1: "https://drive.google.com/file/d/1Ilb801nS_yqOwraYfwcRK6lbgHJaerdQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Labyrinth (World) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20Labyrinth%20%28USA%2C%20Europe%29%20%28Virtual%20Console%29.png",
    size: "207 KB",
    link1: "https://drive.google.com/file/d/1QBNRc52gQrl6BDA48QuPSfr8gnNIsxHY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Spinball (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20Spinball%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "224 KB",
    link1: "https://drive.google.com/file/d/1RaribkbXkS_-lgRpBiipZS0-6wh0C6yG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog (Japan, USA) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20The%20Hedgehog%20%28Japan%2C%20USA%29%20%28En%29.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/178VO-0fBvaNijwrZd9Pz79ivaP_tLOWx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog (World) (Rev A)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20The%20Hedgehog%20%28World%29%20%28Rev%201%29%20%28Virtual%20Console%29.png",
    size: "153 KB",
    link1: "https://drive.google.com/file/d/1n4sG9T2yCPYSE0bJIPMw359sFwJHszNr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog (World) (Rev A) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20The%20Hedgehog%20%28World%29%20%28Rev%201%29%20%28Virtual%20Console%29.png",
    size: "153 KB",
    link1: "https://drive.google.com/file/d/15KddOFo_NWXu4CYp_0KEZ3lPDDXqzn56/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog - Triple Trouble (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20The%20Hedgehog%20-%20Triple%20Trouble%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/1IfqtnB9QKnp-HdNtjJG0dVTySCxHHdKd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog 2 (USA) (Auto Demo)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20The%20Hedgehog%202%20%28World%29%20%28Auto%20Demo%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1C6P2EcPym5F9Q5bJEbtONHYc8peDLUNg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog 2 (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20The%20Hedgehog%202%20%28World%29.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/191OCfdh2BPUSIUYtFzGW9cKH-v1esg_A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog 2 (World) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20The%20Hedgehog%202%20%28World%29%20%28Virtual%20Console%29.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/1XhjF8gSQHiCqXKYYhM7HvMCA1ZRG4IOG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic the Hedgehog 2(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20The%20Hedgehog%202%20%28World%29%20%28Auto%20Demo%29.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/13bMlmAWLBBC7z9nLAVFwvN15oCygEH89/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic the Hedgehog(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sonic%20The%20Hedgehog%20%28World%29%20%28Rev%201%29%20%28Virtual%20Console%29.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/10-i3lFEgIvlAYmMWjPcEaEz04INdL3WW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soukoban (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Soukoban%20%28Japan%29.png",
    size: "47 KB",
    link1: "https://drive.google.com/file/d/1X1sjWPuaLpXePQff-lBIJwXNg0sQJo2F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Space%20Harrier%20%28World%29.png",
    size: "87 KB",
    link1: "https://drive.google.com/file/d/1k0KM3vI0IBm-3TGyx767bWXjpo0Zk37r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Spider-Man%20%28USA%2C%20Europe%29.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1lH_UHCls5lFgF07q8N7OBYA4MkjsuKqr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man - Return of the Sinister Six (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Spider-Man%20-%20Return%20of%20the%20Sinister%20Six%20%28USA%2C%20Europe%29.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1C0BV5RkRHoHNzLjoRy8fY6VdPoIlWYEQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man - X-Men - Arcade's Revenge (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Spider-Man%20-%20X-Men%20-%20Arcade%27s%20Revenge%20%28USA%29.png",
    size: "217 KB",
    link1: "https://drive.google.com/file/d/1qarw6a4k1zMMOpzo_gIwwnzQGEfCongB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spirou (Europe) (Proto)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/1PpMlESb-lwhqVpZTs3_b0Z8Sse71JQQS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sports Illustrated - Championship Football & Baseball (USA)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "195 KB",
    link1: "https://drive.google.com/file/d/1yOCYGafiV_KIEq2biNOtsIvU4om0YgzY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sports Trivia (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sports%20Trivia%20%28USA%29.png",
    size: "101 KB",
    link1: "https://drive.google.com/file/d/1Mw3_ZAo9GTkNlr7foXQeDlJXX3I65jEj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sports Trivia - Championship Edition (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sports%20Trivia%20-%20Championship%20Edition%20%28USA%29.png",
    size: "211 KB",
    link1: "https://drive.google.com/file/d/19P_ooiLSUP_CRGQJ7mIsgAttaTdFlwtr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Trek - The Next Generation - The Advanced Holodeck Tutorial (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Star%20Trek%20-%20The%20Next%20Generation%20-%20The%20Advanced%20Holodeck%20Tutorial%20%28USA%29.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1LATPixM_gQGufDZOXU0Yx4IpNM7t53Sv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Trek Generations - Beyond the Nexus (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Star%20Trek%20Generations%20-%20Beyond%20the%20Nexus%20%28USA%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1ncjfu_gJJt7IZjMFMFh9w_I252KK8IsG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Star%20Wars%20%28USA%2C%20Europe%29.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/1cFEy4CLrsvx9wmYBlpnJLz7pTPeLvNGn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars (USA, Europe) (Rev 1)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Star%20Wars%20%28USA%2C%20Europe%29.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/1KxOuEuDSohgbLSXGRwKlWtLtVcbTcCje/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stargate (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Stargate%20%28World%29.png",
    size: "130 KB",
    link1: "https://drive.google.com/file/d/1mLJa0JLJTnRnWtBSTossK34XrV8-FxQy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Streets of Rage (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Streets%20of%20Rage%20%28World%29.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/122r-QNKn810N8t4HMZa1WgVAaSnSyMgR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Streets of Rage 2 (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Streets%20of%20Rage%202%20%28World%29.png",
    size: "255 KB",
    link1: "https://drive.google.com/file/d/1X1BL39xThIeA-hXFW9ndzfBejs09gTEj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Striker (Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Striker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "241 KB",
    link1: "https://drive.google.com/file/d/1NcbI1FrderfOhvsuGvhYUbc7sP1zy6m5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Battletank (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Battletank%20%28USA%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/11tlYg27smrreFKejlZZc6f7JYMRirVYZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Columns (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Columns%20%28Japan%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1qIQMAPPpTGoFT56ru6OS6c2Qj2qMVlPp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Columns (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Columns%20%28USA%2C%20Europe%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1QQHHP96mZcuinMOISJIwc4E2Wi8b0i5F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Golf (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Golf%20%28USA%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1GoW_h6fag6FlyRg8ro-9fyMyDiwUdnDq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Golf (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Golf%20%28USA%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1jrGSCmY6bggH77hozO4N7pvDqCgfjGkl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Momotarou Dentetsu III (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Momotarou%20Dentetsu%20III%20%28Japan%29.png",
    size: "379 KB",
    link1: "https://drive.google.com/file/d/1qv6Vo4IYF_R238EDVx_3tiPv866jexhQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Monaco GP (Japan, Korea) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Monaco%20GP%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1gwllZxcaUFHc_rmbcwqcB0LH5wQYauCJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Monaco GP (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Monaco%20GP%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1l5imk84nJmkmFIN5wdu-wE9u-7_d5rFb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Off Road (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Off%20Road%20%28USA%2C%20Europe%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1flZb5OVCU4snXMcZ0pRaz4ehXqDuNQqs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Smash T.V. (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Smash%20T.V.%20%28World%29.png",
    size: "87 KB",
    link1: "https://drive.google.com/file/d/13oFLvR8QFGPD_U5o820Za6fyjJuVNKtV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Space Invaders (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Space%20Invaders%20%28USA%2C%20Europe%29.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1uM6nBS0XzHyKvHR8xzibSI3tKlXHP7VV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Wars - Return of the Jedi (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Super%20Star%20Wars%20-%20Return%20of%20the%20Jedi%20%28USA%2C%20Europe%29.png",
    size: "327 KB",
    link1: "https://drive.google.com/file/d/1_7NNExkv81Z9UfeFxlSPbEXNwsulJDFI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Superman - The Man of Steel (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Superman%20-%20The%20Man%20of%20Steel%20%28Europe%29.png",
    size: "88 KB",
    link1: "https://drive.google.com/file/d/11Lu_Dn0bZfiDQ5vuyOR7kV50ogR-dRob/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Surf Ninjas (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Surf%20Ninjas%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/1rOODoZhUbesj4kICCNdf8zav6sQ_pmuQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sylvan Tale (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sylvan%20Tale%20%28Japan%29.png",
    size: "314 KB",
    link1: "https://drive.google.com/file/d/1LDuoDILf16S6LCX8DvwBLVYmHI6yASgc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sylvan Tale(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Sylvan%20Tale%20%28Japan%29%20%5BT-En%20by%20Aeon%20Genesis%5D.png",
    size: "314 KB",
    link1: "https://drive.google.com/file/d/1LOYucRFrTRA7d2ZnpgZYo7HGnmlE45p0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "T2 - The Arcade Game (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/T2%20-%20The%20Arcade%20Game%20%28Japan%29%20%28En%29.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1J2pd4WZKlg2fxpKngkRa85BLD38gEtb_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "T2 - The Arcade Game (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/T2%20-%20The%20Arcade%20Game%20%28USA%2C%20Europe%29.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1hUSAkA8Kn7i9Fo_RLELaXsnvBjLs0nTA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails Adventure (World) (En,Ja)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tails%20Adventure%20%28World%29%20%28En%2CJa%29.png",
    size: "238 KB",
    link1: "https://drive.google.com/file/d/1VBoHYaq2VQW0cmFKMjoWQ7eEtLfYEnm6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails Adventure (World) (En,Ja) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tails%20Adventure%20%28World%29%20%28En%2CJa%29%20%28Virtual%20Console%29.png",
    size: "239 KB",
    link1: "https://drive.google.com/file/d/1UYEB9bsS5Fd9JbilRRKBK2kC8FLQ4RO8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails' Skypatrol (Japan) (En)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "120 KB",
    link1: "https://drive.google.com/file/d/1TLteVrxRLgol972xXtS9Y2svE-kp3nW9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taisen Mahjong HaoPai (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Taisen%20Mahjong%20HaoPai%20%28Japan%29.png",
    size: "90 KB",
    link1: "https://drive.google.com/file/d/1h1qOZxR9ABDhmK7-GWOwH2iR55TuLy1t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taisen Mahjong HaoPai 2 (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Taisen%20Mahjong%20HaoPai%202%20%28Japan%29.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1A_U2nR6Y7JxqwXKHupde78oFlcAHXAY7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taisen-gata Daisenryaku G (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Taisen-gata%20Daisenryaku%20G%20%28Japan%29.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1JfY_bZ7QSNeVOtwRNnzbo-6a2Ck3qAOq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TaleSpin (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/TaleSpin%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/10vbyz9bqE4jl9ILBWhHgXGejBlOp31bc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tama & Friends - 3 Choume Kouen Tamalympic (Japan)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1rtFT3W9iqWsXe1lOc5b02CewAFeW-gs1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tarot no Yakata (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tarot%20no%20Yakata%20%28Japan%29.png",
    size: "91 KB",
    link1: "https://drive.google.com/file/d/1n5c1IkWMlD-WUo3FeRjnJpgfF8ATzNTD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tarzan - Lord of the Jungle (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tarzan%20-%20Lord%20of%20the%20Jungle%20%28Europe%29.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1K_2k5lbbNq1CdMK4e3P7WA5YAlliHFQc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tatakae! Pro Yakyuu Twin League (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tatakae%21%20Pro%20Yakyuu%20Twin%20League%20%28Japan%29.png",
    size: "156 KB",
    link1: "https://drive.google.com/file/d/18vR2Tv_JAbiguw-DLk3ddybAVzIMuObs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taz in Escape from Mars (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Taz%20in%20Escape%20from%20Mars%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "291 KB",
    link1: "https://drive.google.com/file/d/1H5HH1DcXNkwP6QXXtdiOwqDd_tkxelqW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taz-Mania (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Taz-Mania%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1XKFpRZZcfKDn-cfwTwJB5JVcS2VRAux-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tempo Jr. (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tempo%20Jr.%20%28World%29.png",
    size: "223 KB",
    link1: "https://drive.google.com/file/d/1FYADM6v_H3nIMQXi8FWM5k1wiSZmawuM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tengen World Cup Soccer (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tengen%20World%20Cup%20Soccer%20%28USA%2C%20Europe%29.png",
    size: "113 KB",
    link1: "https://drive.google.com/file/d/11q42913pedkSUu1pYqOJFUbG5Kc6UdwF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terminator 2 - Judgment Day (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Terminator%202%20-%20Judgment%20Day%20%28World%29.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1p2rwSJxfN0wmvQC2AA_xNnFynRzbLNFM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terminator, The (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Terminator%2C%20The%20%28USA%2C%20Europe%29.png",
    size: "124 KB",
    link1: "https://drive.google.com/file/d/14GycrRkiN_Q2snD5C_H7yc_lXpi_R8Dg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tesserae (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tesserae%20%28USA%29.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1kJoV6V4ZCsr4UFqPvqs7T-LdkQ-QuCJz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Ottifants(ES)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "110 KB",
    link1: "https://drive.google.com/file/d/1mFVdrBFuU1GbiJ8dOrQ3ZQKP1x6B1X2I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tintin in Tibet (Europe) (En,Fr,De,Es,Nl,Sv)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tintin%20in%20Tibet%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%2CSv%29.png",
    size: "318 KB",
    link1: "https://drive.google.com/file/d/1AYw_TUJ1E48fLlTtzbGfv4FyuT1L-U77/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tintin in Tibet(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tintin%20in%20Tibet%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%2CSv%29.png",
    size: "318 KB",
    link1: "https://drive.google.com/file/d/1ogt3wj-oapeH8M1LMf_W8JCcQhON3CYy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry - The Movie (Japan, Brazil) (En,Ja)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tom%20and%20Jerry%20-%20The%20Movie%20%28USA%2C%20Europe%29.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1blqFtoSZkx1bLO15BoKWBAXBxB6xGAAC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry - The Movie (USA, Europe) (En,Ja)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Tom%20and%20Jerry%20-%20The%20Movie%20%28USA%2C%20Europe%29.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1INoST-kE_yzcVf2kEIy8c06rb_9_7kjs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Torarete Tamaruka (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Torarete%20Tamaruka%20%28Japan%29.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1PCQOLJa9DSNGsS-aMwumBmXJ0fKTJ9p-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "True Lies (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/True%20Lies%20%28World%29.png",
    size: "225 KB",
    link1: "https://drive.google.com/file/d/1i20M8WsVKqZH0_qnVjvX6t9iyvP5m_c8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultimate Soccer (Japan, Europe, Brazil) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Ultimate%20Soccer%20%28Japan%2C%20Europe%2C%20Brazil%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1qJfGNguR5DS7y4iWG3jrVDYaUaRBU3hk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Urban Strike (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Urban%20Strike%20%28USA%29.png",
    size: "294 KB",
    link1: "https://drive.google.com/file/d/1LaKki8XgZxkZuo_AhvoTCRDlFA7s2tmA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Urban Strike(ES)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Urban%20Strike%20%28USA%29.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/1fbo81kg5ez2xNcCBI8RQqLNsM9u0LkzQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "VR Troopers (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/VR%20Troopers%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "334 KB",
    link1: "https://drive.google.com/file/d/1YufIfPgPU4EcG_ey1SP5PYpGYPRbOFnY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vampire - Master of Darkness (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Vampire%20-%20Master%20of%20Darkness%20%28USA%29.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1YAQUPSq0MXgAJJ6_vTBWWd58xq_sJTiC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vampire - Master of Darkness (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Vampire%20-%20Master%20of%20Darkness%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1ujznjM5Dvmu5DWzMIH_7rzteNcaGQ4M4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Virtua Fighter Animation (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Virtua%20Fighter%20Animation%20%28USA%2C%20Europe%29.png",
    size: "419 KB",
    link1: "https://drive.google.com/file/d/1DsGtPEnhRZiuTT1vYtFPNAxtQE6NgkYb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Virtua Fighter Mini (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Virtua%20Fighter%20Mini%20%28Japan%29.png",
    size: "418 KB",
    link1: "https://drive.google.com/file/d/1aZoVuklE5dRysIST8txFm3Eppmzp3jdh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Raw (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/WWF%20Raw%20%28USA%2C%20Europe%29.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1jBNhnOI2hGDErWBva2kOPGIkn7-vdu47/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wagyan Land (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Wagyan%20Land%20%28Japan%29.png",
    size: "87 KB",
    link1: "https://drive.google.com/file/d/1338PPJmNGl2B9SZ25JDcD5xc3bqk8Zq-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wheel of Fortune (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Wheel%20of%20Fortune%20%28USA%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1DWiLvslJuzvtg7dz21_2hkRY9Nwy7lGp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WildSnake (USA) (Proto)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1D_DERURNLmP0rC2D16aa8SS_Zx7iMduH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wimbledon (World)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Wimbledon%20%28World%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1D9x49mBcYG0iXSucr94kKk44p2_Rw1X9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winter Olympics (Japan) (En,Fr,De,Es,It,Pt,Sv,No)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Winter%20Olympics%20%28Japan%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%2CSv%2CNo%29.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1NVnD5FO3YZOOFIcRR_FpsArkz-UNOFbK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winter Olympics (USA, Europe) (En,Fr,De,Es,It,Pt,Sv,No)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Winter%20Olympics%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%2CSv%2CNo%29.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1Y_ODeZdALxo7oM9ECFhzhFhlMI1xB9_6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizard Pinball (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Wizard%20Pinball%20%28Europe%29.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1WEx5dN7yEyRzDlCwWKXv7eT6LS_jZjdm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wolfchild (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Wolfchild%20%28Europe%29.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1mBby6Qd8QTn5d1dWFC5FGabbBGQMKxMw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Wonder%20Boy%20%28Europe%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1wpIAli5dKrVaSW22NxKXv_mOKh4Xhmnc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Wonder%20Boy%20%28Europe%29.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1N2JHlcALGYM27-19MdS03ewGwN5oeAAn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy - The Dragon's Trap (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Wonder%20Boy%20-%20The%20Dragon%27s%20Trap%20%28Europe%29.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/19AgI1KB5npUs0Iqz8qBuCymTDxBoNfau/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Woody Pop (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Woody%20Pop%20%28Japan%29%20%28En%29.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1-bgkdcLMs_80ikGe-w4Akvbq7blBt2LY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Woody Pop (USA, Europe, Brazil) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Woody%20Pop%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%29.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1y4ia1yTfLqSqZg7YdTTtEQgTAzPVOvxA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Class Leaderboard (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/World%20Class%20Leaderboard%20%28USA%2C%20Europe%29.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/10iebx8DoWVlfnLH9Vb7zHCP-B0KjqeBC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup USA 94 (USA, Europe, Brazil) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/World%20Cup%20USA%2094%20%28USA%2C%20Europe%2C%20Brazil%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%29.png",
    size: "235 KB",
    link1: "https://drive.google.com/file/d/1h5ERojaVrBDy_NqiBH3fmNCNbsZVJBSP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Derby (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/World%20Derby%20%28Japan%29.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/1C_7etUcjTEBznNgMFjEJ9fO8cc1nOpB8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Series Baseball '95 (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/World%20Series%20Baseball%20%2795%20%28USA%29.png",
    size: "187 KB",
    link1: "https://drive.google.com/file/d/1p5zGj90_o-Fia5-5FxLYVWUOfvIa0dNk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Series Baseball (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/World%20Series%20Baseball%20%28USA%29.png",
    size: "113 KB",
    link1: "https://drive.google.com/file/d/1EEOhXRCJzTr6CYaeDXiLSUBZCVb7Cd--/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Series Baseball (USA) (Rev A)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/World%20Series%20Baseball%20%28USA%29%20%28Rev%201%29.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1uY6MxD0LZIJMcxBwSRlCcVxin0NLislQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/X-Men%20%28USA%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/17RXE0192L-lWTduJMBF45ZNAsHTKnbOo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Gamemaster's Legacy (USA, Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/X-Men%20-%20Gamemaster%27s%20Legacy%20%28USA%2C%20Europe%29.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1WVLDjfWWIaFeB8EBfUXKVwBaNyEI_0uI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Mojo World (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/X-Men%20-%20Mojo%20World%20%28USA%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/11fyX6mgsF2_NiHcRaBSlg5CaFXl9qHJE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Terminator (Europe) (v2.1) (Program) (Unl)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "4 KB",
    link1: "https://drive.google.com/file/d/1MYxiT0Xp6E84AjQRe3JaGO0VN2osWh3s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Terminator (Japan) (v2.1) (Program) (Unl)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "4 KB",
    link1: "https://drive.google.com/file/d/1pIzAWoDi3HnqcRrs0-_W_vcFlaDmrjvK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yogi Bear in Yogi Bear's Goldrush (Europe) (Proto)",
    image: "https://i.postimg.cc/Bb2fYPMx/gearlogo.png",
    size: "182 KB",
    link1: "https://drive.google.com/file/d/1mkFPqkZVtD6vMnsXWP80v3dYo8QjfM1L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yu Yu Hakusho - Horobishimono no Gyakushuu (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Yu%20Yu%20Hakusho%20-%20Horobishimono%20no%20Gyakushuu%20%28Japan%29.png",
    size: "241 KB",
    link1: "https://drive.google.com/file/d/1y4iU5itHMj0ZFd5WcMChzSe-A6vrX2ZU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yu Yu Hakusho II - Gekitou! Nanakyou no Tatakai (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Yu%20Yu%20Hakusho%20II%20-%20Gekitou%21%20Nanakyou%20no%20Tatakai%20%28Japan%29.png",
    size: "234 KB",
    link1: "https://drive.google.com/file/d/1J-kH3F8MRGistARiJD9BY806Yhv4MiGp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zan Gear (Japan)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Zan%20Gear%20%28Japan%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1jM6NpSOVtH5m5taJkft_8fxn3GEw6wgs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zool - Ninja of the 'Nth' Dimension (Europe)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Zool%20-%20Ninja%20of%20the%20%27Nth%27%20Dimension%20%28Europe%29.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1zCWUao5eG15KzURPFlaxEoGJk2jLjie1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zool - Ninja of the 'Nth' Dimension (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Zool%20-%20Ninja%20of%20the%20%27Nth%27%20Dimension%20%28USA%29.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1rsniuBVa62WnzbJPLHcc1Z9ZTecvieM8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zool no Yume Bouken (Japan) (En)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Zool%20no%20Yume%20Bouken%20%28Japan%29.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1lv5R4DlHV9wCfYggG_XiYwGWdHIm_dvU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zoop (USA)",
    image: "https://thumbnails.libretro.com/Sega%20-%20Game%20Gear/Named_Boxarts/Zoop%20%28USA%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1iqJB2ForR8vLqyZXpi202Qmhe6BwQw2L/view?usp=drivesdk",
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
