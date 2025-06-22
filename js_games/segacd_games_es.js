const roms = [
  {
    name: "A-Rank Thunder - Tanjou-hen (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "218.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/A-Rank%20Thunder%20-%20Tanjou-hen%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "A-X-101 (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "242.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/A-X-101%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "AH3 - Thunderstrike (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "250.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/AH3%20-%20Thunderstrike%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "AX-101 (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "236.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/AX-101%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Adventures of Batman and Robin, The (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "193.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Adventures%20of%20Batman%20and%20Robin%2C%20The%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Adventures of Batman and Robin, The (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "193.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Adventures%20of%20Batman%20and%20Robin%2C%20The%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Adventures of Willy Beamish, The (USA) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "115.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Adventures%20of%20Willy%20Beamish%2C%20The%20%28USA%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Adventures of Willy Beamish, The (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "115.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Adventures%20of%20Willy%20Beamish%2C%20The%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "After Armageddon Gaiden - Majuu Toushouden Eclipse (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "311.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/After%20Armageddon%20Gaiden%20-%20Majuu%20Toushouden%20Eclipse%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "After Burner III (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "200.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/After%20Burner%20III%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "After Burner III (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "256.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/After%20Burner%20III%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "After Burner III (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "200.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/After%20Burner%20III%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Aisle Lord (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "130.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Aisle%20Lord%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Alshark (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "294.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Alshark%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Amazing Spider-Man vs. The Kingpin, The (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "295.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Amazing%20Spider-Man%20vs.%20The%20Kingpin%2C%20The%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Amazing Spider-Man vs. The Kingpin, The (USA) (Rev 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "296.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Amazing%20Spider-Man%20vs.%20The%20Kingpin%2C%20The%20%28USA%29%20%28Rev%201%29.chd",
    link2: ""
  },
  {
    name: "Amazing Spider-Man vs. The Kingpin, The (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "296.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Amazing%20Spider-Man%20vs.%20The%20Kingpin%2C%20The%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Android Assault - The Revenge of Bari-Arm (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "215.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Android%20Assault%20-%20The%20Revenge%20of%20Bari-Arm%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Animals!, The (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "302.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Animals%21%2C%20The%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Animals!, The (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "302.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Animals%21%2C%20The%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Annett Futatabi (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "341.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Annett%20Futatabi%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Aoki Ookami to Shiroki Mejika - Genchou Hishi (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "285.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Aoki%20Ookami%20to%20Shiroki%20Mejika%20-%20Genchou%20Hishi%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Arcus I, II, III (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "249.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Arcus%20I%2C%20II%2C%20III%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Arslan Senki (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "208.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Arslan%20Senki%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "BC Racers (Europe) (Demo) (Green Disc)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "25.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/BC%20Racers%20%28Europe%29%20%28Demo%29%20%28Green%20Disc%29.chd",
    link2: ""
  },
  {
    name: "BC Racers (Europe) (Demo) (Yellow Disc)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "16.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/BC%20Racers%20%28Europe%29%20%28Demo%29%20%28Yellow%20Disc%29.chd",
    link2: ""
  },
  {
    name: "BC Racers (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "201.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/BC%20Racers%20%28Europe%29%20%28En%2CFr%2CDe%29.chd",
    link2: ""
  },
  {
    name: "BC Racers (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "201.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/BC%20Racers%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Bakuden - The Unbalanced Zone (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "157.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Bakuden%20-%20The%20Unbalanced%20Zone%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Bari-Arm (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "215.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Bari-Arm%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Batman Returns (Europe) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "296.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Batman%20Returns%20%28Europe%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Batman Returns (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "296.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Batman%20Returns%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Batman Returns (USA) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "296.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Batman%20Returns%20%28USA%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Batman Returns (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "296.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Batman%20Returns%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Battle Fantasy (Japan) (Rev A)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "302.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Battle%20Fantasy%20%28Japan%29%20%28Rev%20A%29.chd",
    link2: ""
  },
  {
    name: "Battle Frenzy (USA) (Unl)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "318.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Battle%20Frenzy%20%28USA%29%20%28Unl%29.chd",
    link2: ""
  },
  {
    name: "BattleTech - Gray Death Legion (USA) (Unl)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "40.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/BattleTech%20-%20Gray%20Death%20Legion%20%28USA%29%20%28Unl%29.chd",
    link2: ""
  },
  {
    name: "Battlecorps (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "40.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Battlecorps%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Battlecorps (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "280.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Battlecorps%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.chd",
    link2: ""
  },
  {
    name: "Battlecorps (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "283.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Battlecorps%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Battlecorps (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "276.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Battlecorps%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Beast II (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "185.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Beast%20II%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Beast II (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "181.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Beast%20II%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Bill Walsh College Football (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "141.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Bill%20Walsh%20College%20Football%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Bill Walsh College Football (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "141.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Bill%20Walsh%20College%20Football%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Black Hole Assault (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "323.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Black%20Hole%20Assault%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Blackhole Assault (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "315.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Blackhole%20Assault%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Blackhole Assault (USA) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "315.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Blackhole%20Assault%20%28USA%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Blackhole Assault (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "315.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Blackhole%20Assault%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Bloodshot ~ Battle Frenzy (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "318.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Bloodshot%20~%20Battle%20Frenzy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.chd",
    link2: ""
  },
  {
    name: "Bouncers (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "157.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Bouncers%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (USA) (Alt 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Bram%20Stoker%27s%20Dracula%20%28USA%29%20%28Alt%201%29.chd",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (USA) (Alt 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Bram%20Stoker%27s%20Dracula%20%28USA%29%20%28Alt%202%29.chd",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (USA) (Version 2.0)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Bram%20Stoker%27s%20Dracula%20%28USA%29%20%28Version%202.0%29.chd",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Bram%20Stoker%27s%20Dracula%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Brutal - Paws of Fury (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "185.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Brutal%20-%20Paws%20of%20Fury%20%28Europe%29%20%28En%2CFr%2CDe%29.chd",
    link2: ""
  },
  {
    name: "Brutal - Paws of Fury (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "185.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Brutal%20-%20Paws%20of%20Fury%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Bug Blasters - The Exterminators (USA) (Unl) (Rerelease)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "409.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Bug%20Blasters%20-%20The%20Exterminators%20%28USA%29%20%28Unl%29%20%28Rerelease%29.chd",
    link2: ""
  },
  {
    name: "Burai - Yatsudama no Yuushi Densetsu (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "143.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Burai%20-%20Yatsudama%20no%20Yuushi%20Densetsu%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Burning Fists - Force Striker (USA) (Unl)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "303.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Burning%20Fists%20-%20Force%20Striker%20%28USA%29%20%28Unl%29.chd",
    link2: ""
  },
  {
    name: "CD Sonic The Hedgehog (Japan) (Beta 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "70.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/CD%20Sonic%20The%20Hedgehog%20%28Japan%29%20%28Beta%201%29.chd",
    link2: ""
  },
  {
    name: "CD Sonic The Hedgehog (Japan) (Beta 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "293.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/CD%20Sonic%20The%20Hedgehog%20%28Japan%29%20%28Beta%202%29.chd",
    link2: ""
  },
  {
    name: "CD Sonic The Hedgehog (Japan) (Beta 3)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "311.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/CD%20Sonic%20The%20Hedgehog%20%28Japan%29%20%28Beta%203%29.chd",
    link2: ""
  },
  {
    name: "Cadillacs and Dinosaurs - The Second Cataclysm (USA, Brazil) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "427.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Cadillacs%20and%20Dinosaurs%20-%20The%20Second%20Cataclysm%20%28USA%2C%20Brazil%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Captain Tsubasa (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "66.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Captain%20Tsubasa%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Championship Soccer '94 (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "125.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Championship%20Soccer%20%2794%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Chuck Rock (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "175.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Chuck%20Rock%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Chuck Rock (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "175.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Chuck%20Rock%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Chuck Rock II - Son of Chuck (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "230.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Chuck%20Rock%20II%20-%20Son%20of%20Chuck%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Chuck Rock II - Son of Chuck (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "230.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Chuck%20Rock%20II%20-%20Son%20of%20Chuck%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Citizen X (USA) (Unl)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "150.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Citizen%20X%20%28USA%29%20%28Unl%29.chd",
    link2: ""
  },
  {
    name: "Cliffhanger (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "183.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Cliffhanger%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Cobra Command (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "57.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Cobra%20Command%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Cobra Command (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "57.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Cobra%20Command%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Colors of Modern Rock, The (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "107.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Colors%20of%20Modern%20Rock%2C%20The%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Compton's Interactive Encyclopedia (USA) (Version 2.00S)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "90.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Compton%27s%20Interactive%20Encyclopedia%20%28USA%29%20%28Version%202.00S%29.chd",
    link2: ""
  },
  {
    name: "Compton's Interactive Encyclopedia (USA) (Version 2.01R)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "175.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Compton%27s%20Interactive%20Encyclopedia%20%28USA%29%20%28Version%202.01R%29.chd",
    link2: ""
  },
  {
    name: "Compton's Interactive Encyclopedia (USA) (Version 2.01S)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "88.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Compton%27s%20Interactive%20Encyclopedia%20%28USA%29%20%28Version%202.01S%29.chd",
    link2: ""
  },
  {
    name: "Compton's Interactive Encyclopedia (USA) (Version 2.10) (RE2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "174.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Compton%27s%20Interactive%20Encyclopedia%20%28USA%29%20%28Version%202.10%29%20%28RE2%29.chd",
    link2: ""
  },
  {
    name: "Corpse Killer (Europe) (Mega-CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "451.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Corpse%20Killer%20%28Europe%29%20%28Mega-CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Corpse Killer (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "414.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Corpse%20Killer%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Corpse Killer (USA) (Sega CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "451.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Corpse%20Killer%20%28USA%29%20%28Sega%20CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Corpse Killer (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "414.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Corpse%20Killer%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Cosmic Fantasy Stories (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "202.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Cosmic%20Fantasy%20Stories%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Crime Patrol (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "181.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Crime%20Patrol%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Cyborg 009 (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "229.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Cyborg%20009%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Daihoushinden (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "120.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Daihoushinden%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Dark Wizard (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "174.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Dark%20Wizard%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Dark Wizard - Yomigaerishi Yami no Madoushi (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "189.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Dark%20Wizard%20-%20Yomigaerishi%20Yami%20no%20Madoushi%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Death Bringer (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "64.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Death%20Bringer%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Demolition Man (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "216.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Demolition%20Man%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Dennin Aleste - Nobunaga and His Ninja Force (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "324.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Dennin%20Aleste%20-%20Nobunaga%20and%20His%20Ninja%20Force%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Detonator Orgun (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "101.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Detonator%20Orgun%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Devastator (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "258.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Devastator%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Double Switch (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "413.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Double%20Switch%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Double Switch (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "408.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Double%20Switch%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Double Switch (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "413.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Double%20Switch%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Dracula Unleashed (Europe) (Disc 1) (Made in E.U.)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "309.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Dracula%20Unleashed%20%28Europe%29%20%28Disc%201%29%20%28Made%20in%20E.U.%29.chd",
    link2: ""
  },
  {
    name: "Dracula Unleashed (Europe) (Disc 1) (Made in Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "309.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Dracula%20Unleashed%20%28Europe%29%20%28Disc%201%29%20%28Made%20in%20Japan%29.chd",
    link2: ""
  },
  {
    name: "Dracula Unleashed (Europe) (Disc 2) (Made in E.U.)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "345.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Dracula%20Unleashed%20%28Europe%29%20%28Disc%202%29%20%28Made%20in%20E.U.%29.chd",
    link2: ""
  },
  {
    name: "Dracula Unleashed (Europe) (Disc 2) (Made in Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "345.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Dracula%20Unleashed%20%28Europe%29%20%28Disc%202%29%20%28Made%20in%20Japan%29.chd",
    link2: ""
  },
  {
    name: "Dracula Unleashed (USA) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "309.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Dracula%20Unleashed%20%28USA%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Dracula Unleashed (USA) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "345.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Dracula%20Unleashed%20%28USA%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Dragon's Lair (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "143.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Dragon%27s%20Lair%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Dragon's Lair (Japan) (En,Ja,Fr,De,It)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "143.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Dragon%27s%20Lair%20%28Japan%29%20%28En%2CJa%2CFr%2CDe%2CIt%29.chd",
    link2: ""
  },
  {
    name: "Dragon's Lair (USA) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "5.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Dragon%27s%20Lair%20%28USA%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Dragon's Lair (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "93.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Dragon%27s%20Lair%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Dune (Europe) (En,Fr,De,Es,It,Ar)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "190.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Dune%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CAr%29.chd",
    link2: ""
  },
  {
    name: "Dune (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "190.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Dune%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Dungeon Explorer (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "270.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Dungeon%20Explorer%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Dungeon Explorer (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "270.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Dungeon%20Explorer%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Dungeon Master II - Skullkeep (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "89.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Dungeon%20Master%20II%20-%20Skullkeep%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Dungeon Master II - Skullkeep (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "82.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Dungeon%20Master%20II%20-%20Skullkeep%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Dungeon Master II - Skullkeep (USA) (RE3)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "89.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Dungeon%20Master%20II%20-%20Skullkeep%20%28USA%29%20%28RE3%29.chd",
    link2: ""
  },
  {
    name: "Dynamic Country Club (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "108.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Dynamic%20Country%20Club%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "ESPN Baseball Tonight (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "132.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/ESPN%20Baseball%20Tonight%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "ESPN Baseball Tonight (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "132.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/ESPN%20Baseball%20Tonight%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "ESPN NBA Hangtime '95 (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "252.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/ESPN%20NBA%20Hangtime%20%2795%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "ESPN National Hockey Night (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "211.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/ESPN%20National%20Hockey%20Night%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "ESPN Sunday Night NFL (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "170.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/ESPN%20Sunday%20Night%20NFL%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Earnest Evans (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "349.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Earnest%20Evans%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Earthworm Jim - Special Edition (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "193.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Earthworm%20Jim%20-%20Special%20Edition%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Earthworm Jim - Special Edition (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "199.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Earthworm%20Jim%20-%20Special%20Edition%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Ecco - The Tides of Time (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "372.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Ecco%20-%20The%20Tides%20of%20Time%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.chd",
    link2: ""
  },
  {
    name: "Ecco - The Tides of Time (USA) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "372.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Ecco%20-%20The%20Tides%20of%20Time%20%28USA%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Ecco - The Tides of Time (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "371.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Ecco%20-%20The%20Tides%20of%20Time%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Ecco the Dolphin (Australia)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "271.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Ecco%20the%20Dolphin%20%28Australia%29.chd",
    link2: ""
  },
  {
    name: "Ecco the Dolphin (Europe) (Rerelease)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "271.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Ecco%20the%20Dolphin%20%28Europe%29%20%28Rerelease%29.chd",
    link2: ""
  },
  {
    name: "Ecco the Dolphin (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "271.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Ecco%20the%20Dolphin%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Ecco the Dolphin (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "281.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Ecco%20the%20Dolphin%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Ecco the Dolphin CD (Japan) (Disc 1) (Ecco the Dolphin)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "281.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Ecco%20the%20Dolphin%20CD%20%28Japan%29%20%28Disc%201%29%20%28Ecco%20the%20Dolphin%29.chd",
    link2: ""
  },
  {
    name: "Ecco the Dolphin CD (Japan) (Disc 2) (Ecco the Dolphin II)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "372.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Ecco%20the%20Dolphin%20CD%20%28Japan%29%20%28Disc%202%29%20%28Ecco%20the%20Dolphin%20II%29.chd",
    link2: ""
  },
  {
    name: "Egawa Suguru no Super League CD (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "48.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Egawa%20Suguru%20no%20Super%20League%20CD%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Eternal Champions - Challenge from the Dark Side (Europe) (Beta)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Eternal%20Champions%20-%20Challenge%20from%20the%20Dark%20Side%20%28Europe%29%20%28Beta%29.chd",
    link2: ""
  },
  {
    name: "Eternal Champions - Challenge from the Dark Side (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Eternal%20Champions%20-%20Challenge%20from%20the%20Dark%20Side%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Eternal Champions - Challenge from the Dark Side (USA) (Beta)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Eternal%20Champions%20-%20Challenge%20from%20the%20Dark%20Side%20%28USA%29%20%28Beta%29.chd",
    link2: ""
  },
  {
    name: "Eternal Champions - Challenge from the Dark Side (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Eternal%20Champions%20-%20Challenge%20from%20the%20Dark%20Side%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Eternal Champions - Challenge from the Dark Side (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Eternal%20Champions%20-%20Challenge%20from%20the%20Dark%20Side%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Eye of the Beholder (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "220.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Eye%20of%20the%20Beholder%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Eye of the Beholder (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "220.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Eye%20of%20the%20Beholder%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Eye of the Beholder (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "220.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Eye%20of%20the%20Beholder%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "F1 Circus CD (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "215.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/F1%20Circus%20CD%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "FIFA International Soccer (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "302.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/FIFA%20International%20Soccer%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "FIFA International Soccer - Championship Edition (Europe) (Demo) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "104.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/FIFA%20International%20Soccer%20-%20Championship%20Edition%20%28Europe%29%20%28Demo%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "FIFA International Soccer - Championship Edition (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "104.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/FIFA%20International%20Soccer%20-%20Championship%20Edition%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "FIFA International Soccer - Championship Edition (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "302.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/FIFA%20International%20Soccer%20-%20Championship%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.chd",
    link2: ""
  },
  {
    name: "Fahrenheit (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "375.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Fahrenheit%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Fahrenheit (France)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "349.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Fahrenheit%20%28France%29.chd",
    link2: ""
  },
  {
    name: "Fahrenheit (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "360.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Fahrenheit%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Fahrenheit (USA) (Disc 1) (Key Disc) (Sega CD)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "375.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Fahrenheit%20%28USA%29%20%28Disc%201%29%20%28Key%20Disc%29%20%28Sega%20CD%29.chd",
    link2: ""
  },
  {
    name: "Fahrenheit (USA) (Disc 2) (32X CD)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "370.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Fahrenheit%20%28USA%29%20%28Disc%202%29%20%2832X%20CD%29.chd",
    link2: ""
  },
  {
    name: "Fatal Fury Special (Europe) (Beta)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "298.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Fatal%20Fury%20Special%20%28Europe%29%20%28Beta%29.chd",
    link2: ""
  },
  {
    name: "Fatal Fury Special (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "48.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Fatal%20Fury%20Special%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Fatal Fury Special (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "301.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Fatal%20Fury%20Special%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Fatal Fury Special (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "303.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Fatal%20Fury%20Special%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Final Fight CD (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "245.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Final%20Fight%20CD%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Final Fight CD (Japan) (Rev A)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "253.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Final%20Fight%20CD%20%28Japan%29%20%28Rev%20A%29.chd",
    link2: ""
  },
  {
    name: "Final Fight CD (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "253.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Final%20Fight%20CD%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Final Fight CD (USA) (Alt 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "245.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Final%20Fight%20CD%20%28USA%29%20%28Alt%201%29.chd",
    link2: ""
  },
  {
    name: "Final Fight CD (USA) (Alt 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "245.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Final%20Fight%20CD%20%28USA%29%20%28Alt%202%29.chd",
    link2: ""
  },
  {
    name: "Final Fight CD (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "245.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Final%20Fight%20CD%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Flashback (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "56.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Flashback%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Flashback - The Quest for Identity (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "262.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Flashback%20-%20The%20Quest%20for%20Identity%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Flink (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "279.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Flink%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Flink (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "279.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Flink%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Formula One World Championship - Beyond the Limit (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "383.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Formula%20One%20World%20Championship%20-%20Beyond%20the%20Limit%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Formula One World Championship - Beyond the Limit (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "384.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Formula%20One%20World%20Championship%20-%20Beyond%20the%20Limit%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Fresh Cleaner (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "30.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Fresh%20Cleaner%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Game no Kandume Vol. 1 (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "194.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Game%20no%20Kandume%20Vol.%201%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Game no Kandume Vol. 2 (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "234.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Game%20no%20Kandume%20Vol.%202%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Garou Densetsu Special (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "298.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Garou%20Densetsu%20Special%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Gen'ei Toshi - Illusion City (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "190.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Gen%27ei%20Toshi%20-%20Illusion%20City%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Ground Zero Texas (Europe) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "274.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Ground%20Zero%20Texas%20%28Europe%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Ground Zero Texas (Europe) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "266.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Ground%20Zero%20Texas%20%28Europe%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Ground Zero Texas (USA) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "274.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Ground%20Zero%20Texas%20%28USA%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Ground Zero Texas (USA) (Disc 2) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Ground%20Zero%20Texas%20%28USA%29%20%28Disc%202%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Ground Zero Texas (USA) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Ground%20Zero%20Texas%20%28USA%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Gyuwambler Jiko Chuushinha 2 - Gekitou! Tokyo Mahjongland Hen (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "278.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Gyuwambler%20Jiko%20Chuushinha%202%20-%20Gekitou%21%20Tokyo%20Mahjongland%20Hen%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Heart of the Alien - Out of This World Parts I and II (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "176.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Heart%20of%20the%20Alien%20-%20Out%20of%20This%20World%20Parts%20I%20and%20II%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Heavenly Symphony - Formula One World Championship 1993 (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "386.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Heavenly%20Symphony%20-%20Formula%20One%20World%20Championship%201993%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Heavenly Symphony - Formula One World Championship 1993 (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "387.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Heavenly%20Symphony%20-%20Formula%20One%20World%20Championship%201993%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Heavy Nova (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "272.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Heavy%20Nova%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Heimdall (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "107.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Heimdall%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Heimdall (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "100.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Heimdall%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Hook (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "161.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Hook%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Hook (USA) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "161.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Hook%20%28USA%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Hook (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "161.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Hook%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "IIIrd World War, The (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "172.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/IIIrd%20World%20War%2C%20The%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Iron Helix (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "240.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Iron%20Helix%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Ishii Hisaichi no Daiseikai (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "1.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Ishii%20Hisaichi%20no%20Daiseikai%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Jaguar XJ220 (Europe) (En,Ja)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "254.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Jaguar%20XJ220%20%28Europe%29%20%28En%2CJa%29.chd",
    link2: ""
  },
  {
    name: "Jaguar XJ220 (Japan) (En,Ja)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "254.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Jaguar%20XJ220%20%28Japan%29%20%28En%2CJa%29.chd",
    link2: ""
  },
  {
    name: "Jaguar XJ220 (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "254.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Jaguar%20XJ220%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Jangou World Cup (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "259.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Jangou%20World%20Cup%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Jeopardy! (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "60.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Jeopardy%21%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Joe Montana's NFL Football (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "135.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Joe%20Montana%27s%20NFL%20Football%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Jurassic Park (Europe) (Rerelease)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "236.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Jurassic%20Park%20%28Europe%29%20%28Rerelease%29.chd",
    link2: ""
  },
  {
    name: "Jurassic Park (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "236.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Jurassic%20Park%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Jurassic Park (France)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "238.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Jurassic%20Park%20%28France%29.chd",
    link2: ""
  },
  {
    name: "Jurassic Park (Germany)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "238.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Jurassic%20Park%20%28Germany%29.chd",
    link2: ""
  },
  {
    name: "Jurassic Park (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "240.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Jurassic%20Park%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Jurassic Park (Spain)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "238.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Jurassic%20Park%20%28Spain%29.chd",
    link2: ""
  },
  {
    name: "Jurassic Park (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "236.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Jurassic%20Park%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Kamen Rider ZO (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "188.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Kamen%20Rider%20ZO%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Keio Flying Squadron (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "312.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Keio%20Flying%20Squadron%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Keio Flying Squadron (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "312.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Keio%20Flying%20Squadron%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Keio Flying Squadron (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "312.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Keio%20Flying%20Squadron%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Keiou Yuugekitai (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "170.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Keiou%20Yuugekitai%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Keiou Yuugekitai (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "323.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Keiou%20Yuugekitai%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Kids on Site (Europe) (RE-1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "333.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Kids%20on%20Site%20%28Europe%29%20%28RE-1%29.chd",
    link2: ""
  },
  {
    name: "Kids on Site (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "333.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Kids%20on%20Site%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Lawnmower Man, The (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "27.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Lawnmower%20Man%2C%20The%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Lawnmower Man, The (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "187.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Lawnmower%20Man%2C%20The%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Lawnmower Man, The (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "187.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Lawnmower%20Man%2C%20The%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Lethal Enforcers (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "391.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Lethal%20Enforcers%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Lethal Enforcers (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "391.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Lethal%20Enforcers%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Lethal Enforcers (USA) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "391.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Lethal%20Enforcers%20%28USA%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Lethal Enforcers (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "391.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Lethal%20Enforcers%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Lethal Enforcers II - Gun Fighters (Europe) (Beta)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "349.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Lethal%20Enforcers%20II%20-%20Gun%20Fighters%20%28Europe%29%20%28Beta%29.chd",
    link2: ""
  },
  {
    name: "Lethal Enforcers II - Gun Fighters (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "177.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Lethal%20Enforcers%20II%20-%20Gun%20Fighters%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Lethal Enforcers II - Gun Fighters (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "349.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Lethal%20Enforcers%20II%20-%20Gun%20Fighters%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Lethal Enforcers II - Gun Fighters (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "349.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Lethal%20Enforcers%20II%20-%20Gun%20Fighters%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Lethal Enforcers II - The Western (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "349.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Lethal%20Enforcers%20II%20-%20The%20Western%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Links - The Challenge of Golf (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "181.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Links%20-%20The%20Challenge%20of%20Golf%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Loadstar - The Legend of Tully Bodine (USA, Brazil)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "406.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Loadstar%20-%20The%20Legend%20of%20Tully%20Bodine%20%28USA%2C%20Brazil%29.chd",
    link2: ""
  },
  {
    name: "Lords of Thunder (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "352.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Lords%20of%20Thunder%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Lords of Thunder (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "352.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Lords%20of%20Thunder%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Lunar - Eternal Blue (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "11.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Lunar%20-%20Eternal%20Blue%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Lunar - Eternal Blue (Japan) (Rev A)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "159.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Lunar%20-%20Eternal%20Blue%20%28Japan%29%20%28Rev%20A%29.chd",
    link2: ""
  },
  {
    name: "Lunar - Eternal Blue (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "159.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Lunar%20-%20Eternal%20Blue%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Lunar - Eternal Blue (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "196.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Lunar%20-%20Eternal%20Blue%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Lunar - The Silver Star (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "229.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Lunar%20-%20The%20Silver%20Star%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Lunar - The Silver Star (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "237.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Lunar%20-%20The%20Silver%20Star%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Lunar - The Silver Star (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "237.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Lunar%20-%20The%20Silver%20Star%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Mad Dog II - The Lost Gold (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "179.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Mad%20Dog%20II%20-%20The%20Lost%20Gold%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Mad Dog McCree (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "107.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Mad%20Dog%20McCree%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Mahou no Shoujo - Silky Lip (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "183.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Mahou%20no%20Shoujo%20-%20Silky%20Lip%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Make My Video - INXS (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "299.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Make%20My%20Video%20-%20INXS%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Make My Video - INXS (USA) (Beta)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "287.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Make%20My%20Video%20-%20INXS%20%28USA%29%20%28Beta%29.chd",
    link2: ""
  },
  {
    name: "Make My Video - INXS (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "297.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Make%20My%20Video%20-%20INXS%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Make My Video - Kris Kross (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "233.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Make%20My%20Video%20-%20Kris%20Kross%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Make My Video - Kris Kross (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "233.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Make%20My%20Video%20-%20Kris%20Kross%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Make My Video - Marky Mark and the Funky Bunch (USA) (Beta)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "329.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Make%20My%20Video%20-%20Marky%20Mark%20and%20the%20Funky%20Bunch%20%28USA%29%20%28Beta%29.chd",
    link2: ""
  },
  {
    name: "Make My Video - Marky Mark and the Funky Bunch (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "329.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Make%20My%20Video%20-%20Marky%20Mark%20and%20the%20Funky%20Bunch%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Mansion of Hidden Souls (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "203.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Mansion%20of%20Hidden%20Souls%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Marko (USA) (Unl)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "175.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Marko%20%28USA%29%20%28Unl%29.chd",
    link2: ""
  },
  {
    name: "Marko's Magic Football (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "162.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Marko%27s%20Magic%20Football%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.chd",
    link2: ""
  },
  {
    name: "Mary Shelley's Frankenstein (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "152.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Mary%20Shelley%27s%20Frankenstein%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Masked Rider, The - Kamen Rider ZO (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "183.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Masked%20Rider%2C%20The%20-%20Kamen%20Rider%20ZO%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Mega Schwarzschild (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "272.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Mega%20Schwarzschild%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "MegaRace (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "347.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/MegaRace%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Mickey Mania (Europe) (Demo) (Mega Power, Sega Pro)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "236.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Mickey%20Mania%20%28Europe%29%20%28Demo%29%20%28Mega%20Power%2C%20Sega%20Pro%29.chd",
    link2: ""
  },
  {
    name: "Mickey Mania (Europe) (Demo) (Mega Sega)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "236.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Mickey%20Mania%20%28Europe%29%20%28Demo%29%20%28Mega%20Sega%29.chd",
    link2: ""
  },
  {
    name: "Mickey Mania (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "236.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Mickey%20Mania%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Mickey Mania - The Timeless Adventures of Mickey Mouse (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "236.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Mickey%20Mania%20-%20The%20Timeless%20Adventures%20of%20Mickey%20Mouse%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Microcosm (Europe) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "283.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Microcosm%20%28Europe%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Microcosm (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "283.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Microcosm%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Microcosm (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "283.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Microcosm%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Microcosm (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "283.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Microcosm%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Microcosm (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "283.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Microcosm%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Midnight Raiders (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "352.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Midnight%20Raiders%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Midnight Raiders (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "352.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Midnight%20Raiders%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Might and Magic III - Isles of Terra (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "299.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Might%20and%20Magic%20III%20-%20Isles%20of%20Terra%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Mighty Mighty Missile (USA) (Unl)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "210.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Mighty%20Mighty%20Missile%20%28USA%29%20%28Unl%29.chd",
    link2: ""
  },
  {
    name: "Mighty Morphin Power Rangers (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "302.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Mighty%20Morphin%20Power%20Rangers%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Mighty Morphin Power Rangers (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "302.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Mighty%20Morphin%20Power%20Rangers%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Mortal Kombat (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "192.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Mortal%20Kombat%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Mortal Kombat (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "192.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Mortal%20Kombat%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Mortal Kombat Kanzenban (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "192.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Mortal%20Kombat%20Kanzenban%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "My Paint (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "210.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/My%20Paint%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "NBA Jam (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "225.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/NBA%20Jam%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "NBA Jam (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "225.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/NBA%20Jam%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "NBA Jam (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "225.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/NBA%20Jam%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "NFL Football Trivia Challenge (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "236.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/NFL%20Football%20Trivia%20Challenge%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "NFL's Greatest - San Francisco vs. Dallas 1978-1993 (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "277.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/NFL%27s%20Greatest%20-%20San%20Francisco%20vs.%20Dallas%201978-1993%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "NHL '94 (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "216.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/NHL%20%2794%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "NHL Hockey '94 (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "216.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/NHL%20Hockey%20%2794%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Night Striker (Japan, Korea)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "259.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Night%20Striker%20%28Japan%2C%20Korea%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (Europe) (Disc 1) (Mega-CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "400.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Night%20Trap%20%28Europe%29%20%28Disc%201%29%20%28Mega-CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (Europe) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "264.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Night%20Trap%20%28Europe%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (Europe) (Disc 2) (Mega-CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "333.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Night%20Trap%20%28Europe%29%20%28Disc%202%29%20%28Mega-CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (Europe) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "222.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Night%20Trap%20%28Europe%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (France) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "264.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Night%20Trap%20%28France%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (France) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "222.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Night%20Trap%20%28France%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Night%20Trap%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (Japan) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "265.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Night%20Trap%20%28Japan%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (Japan) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "224.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Night%20Trap%20%28Japan%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (USA) (Disc 1) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "264.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Night%20Trap%20%28USA%29%20%28Disc%201%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (USA) (Disc 1) (Rerelease) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "263.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Night%20Trap%20%28USA%29%20%28Disc%201%29%20%28Rerelease%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (USA) (Disc 1) (Rerelease)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "263.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Night%20Trap%20%28USA%29%20%28Disc%201%29%20%28Rerelease%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (USA) (Disc 1) (Sega CD 32X) (RE-1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "400.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Night%20Trap%20%28USA%29%20%28Disc%201%29%20%28Sega%20CD%2032X%29%20%28RE-1%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (USA) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "264.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Night%20Trap%20%28USA%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (USA) (Disc 2) (Rerelease) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "222.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Night%20Trap%20%28USA%29%20%28Disc%202%29%20%28Rerelease%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (USA) (Disc 2) (Rerelease)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "222.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Night%20Trap%20%28USA%29%20%28Disc%202%29%20%28Rerelease%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (USA) (Disc 2) (Sega CD 32X) (RE-1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "333.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Night%20Trap%20%28USA%29%20%28Disc%202%29%20%28Sega%20CD%2032X%29%20%28RE-1%29.chd",
    link2: ""
  },
  {
    name: "Night Trap (USA) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "222.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Night%20Trap%20%28USA%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Ninja Warriors, The (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "273.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Ninja%20Warriors%2C%20The%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Nobunaga no Yabou - Haouden (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "204.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Nobunaga%20no%20Yabou%20-%20Haouden%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Nostalgia 1907 (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "82.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Nostalgia%201907%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Note! Color Mechanica (USA) (Unl) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "374.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Note%21%20Color%20Mechanica%20%28USA%29%20%28Unl%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Note! Color Mechanica (USA) (Unl)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "374.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Note%21%20Color%20Mechanica%20%28USA%29%20%28Unl%29.chd",
    link2: ""
  },
  {
    name: "Novastorm (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "253.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Novastorm%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Novastorm (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "268.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Novastorm%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Novastorm (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "268.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Novastorm%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Panic! (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "210.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Panic%21%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Pier Solar and the Great Architects - The Definitive Original Soundtrack (Europe) (Disc 4) (Enhanced Soundtrack Disc)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "498.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Pier%20Solar%20and%20the%20Great%20Architects%20-%20The%20Definitive%20Original%20Soundtrack%20%28Europe%29%20%28Disc%204%29%20%28Enhanced%20Soundtrack%20Disc%29.chd",
    link2: ""
  },
  {
    name: "Pier Solar and the Great Architects Enhanced Soundtrack Disc (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "330.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Pier%20Solar%20and%20the%20Great%20Architects%20Enhanced%20Soundtrack%20Disc%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Pitfall - The Mayan Adventure (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "71.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Pitfall%20-%20The%20Mayan%20Adventure%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Pitfall - The Mayan Adventure (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "247.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Pitfall%20-%20The%20Mayan%20Adventure%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Pitfall - The Mayan Adventure (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "247.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Pitfall%20-%20The%20Mayan%20Adventure%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Popful Mail (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "202.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Popful%20Mail%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "PopfulMail (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "133.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/PopfulMail%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "PopfulMail (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "132.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/PopfulMail%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Power Factory (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "253.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Power%20Factory%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Power Factory (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "252.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Power%20Factory%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Power Monger (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "145.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Power%20Monger%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "PowerMonger (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "145.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/PowerMonger%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Prince of Persia (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "157.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Prince%20of%20Persia%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Prince of Persia (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "162.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Prince%20of%20Persia%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Prince of Persia (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "157.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Prince%20of%20Persia%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Prize Fighter (Europe) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "259.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Prize%20Fighter%20%28Europe%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Prize Fighter (Europe) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "301.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Prize%20Fighter%20%28Europe%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Prize Fighter (Japan) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "251.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Prize%20Fighter%20%28Japan%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Prize Fighter (Japan) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "294.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Prize%20Fighter%20%28Japan%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Prize Fighter (USA) (Disc 1) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "259.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Prize%20Fighter%20%28USA%29%20%28Disc%201%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Prize Fighter (USA) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "259.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Prize%20Fighter%20%28USA%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Prize Fighter (USA) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "295.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Prize%20Fighter%20%28USA%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Pro Yakyuu Super League CD (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "73.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Pro%20Yakyuu%20Super%20League%20CD%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Psychic Detective Series Vol. 3 - Aya (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Psychic%20Detective%20Series%20Vol.%203%20-%20Aya%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Psychic Detective Series Vol. 3 - Aya (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "117.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Psychic%20Detective%20Series%20Vol.%203%20-%20Aya%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Psychic Detective Series Vol. 4 - Orgel (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "136.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Psychic%20Detective%20Series%20Vol.%204%20-%20Orgel%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Psygnosis Christmas Sampler (Europe) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "187.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Psygnosis%20Christmas%20Sampler%20%28Europe%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Psygnosis Christmas Sampler (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "187.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Psygnosis%20Christmas%20Sampler%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Puggsy (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "269.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Puggsy%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Puggsy (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "269.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Puggsy%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Quiz Scramble Special (Japan) (Rev B)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "72.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Quiz%20Scramble%20Special%20%28Japan%29%20%28Rev%20B%29.chd",
    link2: ""
  },
  {
    name: "Quiz Tonosama no Yabou (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "114.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Quiz%20Tonosama%20no%20Yabou%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "RDF - Global Conflict (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "183.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/RDF%20-%20Global%20Conflict%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Racing Aces (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "150.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Racing%20Aces%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Radical Rex (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "170.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Radical%20Rex%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Ranma 1-2 - Byakuranaika (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "213.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Ranma%201-2%20-%20Byakuranaika%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Record of Lodoss War (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "77.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Record%20of%20Lodoss%20War%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Record of Lodoss War (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "186.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Record%20of%20Lodoss%20War%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Revenge of the Ninja (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "134.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Revenge%20of%20the%20Ninja%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Revengers of Vengeance (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "299.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Revengers%20of%20Vengeance%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Rise of the Dragon (USA) (Rerelease) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "94.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Rise%20of%20the%20Dragon%20%28USA%29%20%28Rerelease%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Rise of the Dragon (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "95.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Rise%20of%20the%20Dragon%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Rise of the Dragon - A Blade Hunter Mystery (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "110.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Rise%20of%20the%20Dragon%20-%20A%20Blade%20Hunter%20Mystery%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Road Avenger (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "137.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Road%20Avenger%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Road Avenger (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "137.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Road%20Avenger%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Road Blaster FX (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "137.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Road%20Blaster%20FX%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Road Rash (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "328.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Road%20Rash%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Robo Aleste (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "319.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Robo%20Aleste%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Robo Aleste (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "319.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Robo%20Aleste%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Samurai Shodown (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "359.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Samurai%20Shodown%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Samurai Shodown (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "243.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Samurai%20Shodown%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Samurai Shodown (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "243.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Samurai%20Shodown%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Sangokushi III (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "312.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Sangokushi%20III%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Secret of Monkey Island, The (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "193.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Secret%20of%20Monkey%20Island%2C%20The%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Secret of Monkey Island, The (USA) (Limited Run Games)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "190.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Secret%20of%20Monkey%20Island%2C%20The%20%28USA%29%20%28Limited%20Run%20Games%29.chd",
    link2: ""
  },
  {
    name: "Secret of Monkey Island, The (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "190.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Secret%20of%20Monkey%20Island%2C%20The%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Sega CD Demo (Japan) (Proto)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "20.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Sega%20CD%20Demo%20%28Japan%29%20%28Proto%29.chd",
    link2: ""
  },
  {
    name: "Sega Classic Arcade Collection - Limited Edition (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "80.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Sega%20Classic%20Arcade%20Collection%20-%20Limited%20Edition%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Sega Classics Arcade Collection (USA) (4-in-1) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "80.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sega%20Classics%20Arcade%20Collection%20%28USA%29%20%284-in-1%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Sega Classics Arcade Collection (USA) (4-in-1) (RE2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "76.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sega%20Classics%20Arcade%20Collection%20%28USA%29%20%284-in-1%29%20%28RE2%29.chd",
    link2: ""
  },
  {
    name: "Sega Classics Arcade Collection (USA) (5-in-1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "76.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sega%20Classics%20Arcade%20Collection%20%28USA%29%20%285-in-1%29.chd",
    link2: ""
  },
  {
    name: "Sega Classics Arcade Collection - Limited Edition (Europe) (Rev A) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "76.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sega%20Classics%20Arcade%20Collection%20-%20Limited%20Edition%20%28Europe%29%20%28Rev%20A%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Sega Classics Arcade Collection - Limited Edition (Europe) (Rev A)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "76.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sega%20Classics%20Arcade%20Collection%20-%20Limited%20Edition%20%28Europe%29%20%28Rev%20A%29.chd",
    link2: ""
  },
  {
    name: "Seima Densetsu 3x3 Eyes (Japan, Korea)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "213.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Seima%20Densetsu%203x3%20Eyes%20%28Japan%2C%20Korea%29.chd",
    link2: ""
  },
  {
    name: "Seirei Shinseiki - Fhey Area (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "322.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Seirei%20Shinseiki%20-%20Fhey%20Area%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Sengoku Denshou (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "160.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Sengoku%20Denshou%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Sensible Soccer (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "125.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sensible%20Soccer%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Sensible Soccer (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "110.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sensible%20Soccer%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Sewer Shark (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "248.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sewer%20Shark%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Sewer Shark (USA) (Not for Resale) (Alt 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "248.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sewer%20Shark%20%28USA%29%20%28Not%20for%20Resale%29%20%28Alt%201%29.chd",
    link2: ""
  },
  {
    name: "Sewer Shark (USA) (Not for Resale) (Alt 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "248.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sewer%20Shark%20%28USA%29%20%28Not%20for%20Resale%29%20%28Alt%202%29.chd",
    link2: ""
  },
  {
    name: "Sewer Shark (USA) (Not for Resale)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "248.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sewer%20Shark%20%28USA%29%20%28Not%20for%20Resale%29.chd",
    link2: ""
  },
  {
    name: "Sewer Shark (USA) (Rev 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "247.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sewer%20Shark%20%28USA%29%20%28Rev%201%29.chd",
    link2: ""
  },
  {
    name: "Sewer Shark (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "247.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sewer%20Shark%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Shadow of the Beast II (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "181.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Shadow%20of%20the%20Beast%20II%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Shadow of the Beast II - Juushin no Jubaku (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "235.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Shadow%20of%20the%20Beast%20II%20-%20Juushin%20no%20Jubaku%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Shadowrun (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "157.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Shadowrun%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Sherlock Holmes - Consulting Detective (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "306.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sherlock%20Holmes%20-%20Consulting%20Detective%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Sherlock Holmes - Consulting Detective (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "308.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sherlock%20Holmes%20-%20Consulting%20Detective%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Sherlock Holmes - Consulting Detective Vol. II (Europe) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "239.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sherlock%20Holmes%20-%20Consulting%20Detective%20Vol.%20II%20%28Europe%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Sherlock Holmes - Consulting Detective Vol. II (Europe) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "144.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sherlock%20Holmes%20-%20Consulting%20Detective%20Vol.%20II%20%28Europe%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Sherlock Holmes - Consulting Detective Vol. II (USA) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "239.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sherlock%20Holmes%20-%20Consulting%20Detective%20Vol.%20II%20%28USA%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Sherlock Holmes - Consulting Detective Vol. II (USA) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "144.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sherlock%20Holmes%20-%20Consulting%20Detective%20Vol.%20II%20%28USA%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Shin Megami Tensei (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "205.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Shin%20Megami%20Tensei%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Shining Force CD (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "232.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Shining%20Force%20CD%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Shining Force CD (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "233.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Shining%20Force%20CD%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Shining Force CD (USA) (3R)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "232.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Shining%20Force%20CD%20%28USA%29%20%283R%29.chd",
    link2: ""
  },
  {
    name: "Shining Force CD (USA) (5R, 6R)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "232.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Shining%20Force%20CD%20%28USA%29%20%285R%2C%206R%29.chd",
    link2: ""
  },
  {
    name: "Silpheed (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "222.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Silpheed%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Silpheed (Japan) (Demo) (Fixed Dump)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "110.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Silpheed%20%28Japan%29%20%28Demo%29%20%28Fixed%20Dump%29.chd",
    link2: ""
  },
  {
    name: "Silpheed (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "173.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Silpheed%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Silpheed (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "224.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Silpheed%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Silpheed (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "224.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Silpheed%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "SimEarth (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "120.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/SimEarth%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Sing!! Sega Game Music Presented by B. B. Queens (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "261.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Sing%21%21%20Sega%20Game%20Music%20Presented%20by%20B.%20B.%20Queens%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (Europe) (Disc 1) (Fingers) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "317.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Slam%20City%20with%20Scottie%20Pippen%20%28Europe%29%20%28Disc%201%29%20%28Fingers%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (Europe) (Disc 1) (Fingers) (Mega-CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "432.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Slam%20City%20with%20Scottie%20Pippen%20%28Europe%29%20%28Disc%201%29%20%28Fingers%29%20%28Mega-CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (Europe) (Disc 1) (Fingers)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "398.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Slam%20City%20with%20Scottie%20Pippen%20%28Europe%29%20%28Disc%201%29%20%28Fingers%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (Europe) (Disc 2) (Juice) (Mega-CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "422.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Slam%20City%20with%20Scottie%20Pippen%20%28Europe%29%20%28Disc%202%29%20%28Juice%29%20%28Mega-CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (Europe) (Disc 2) (Juice)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "386.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Slam%20City%20with%20Scottie%20Pippen%20%28Europe%29%20%28Disc%202%29%20%28Juice%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (Europe) (Disc 3) (Mad Dog) (Mega-CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "423.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Slam%20City%20with%20Scottie%20Pippen%20%28Europe%29%20%28Disc%203%29%20%28Mad%20Dog%29%20%28Mega-CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (Europe) (Disc 3) (Mad Dog)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "384.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Slam%20City%20with%20Scottie%20Pippen%20%28Europe%29%20%28Disc%203%29%20%28Mad%20Dog%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (Europe) (Disc 4) (Smash) (Mega-CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "400.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Slam%20City%20with%20Scottie%20Pippen%20%28Europe%29%20%28Disc%204%29%20%28Smash%29%20%28Mega-CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (Europe) (Disc 4) (Smash)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "366.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Slam%20City%20with%20Scottie%20Pippen%20%28Europe%29%20%28Disc%204%29%20%28Smash%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA) (Disc 1) (Fingers) (Sega CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "432.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%29%20%28Disc%201%29%20%28Fingers%29%20%28Sega%20CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA) (Disc 1) (Fingers)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "398.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%29%20%28Disc%201%29%20%28Fingers%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA) (Disc 2) (Juice) (Sega CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "422.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%29%20%28Disc%202%29%20%28Juice%29%20%28Sega%20CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA) (Disc 3) (Mad Dog) (Sega CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "423.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%29%20%28Disc%203%29%20%28Mad%20Dog%29%20%28Sega%20CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA) (Disc 3) (Mad Dog)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "384.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%29%20%28Disc%203%29%20%28Mad%20Dog%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA) (Disc 4) (Smash) (RE-1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "366.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%29%20%28Disc%204%29%20%28Smash%29%20%28RE-1%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA) (Disc 4) (Smash) (Sega CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "400.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%29%20%28Disc%204%29%20%28Smash%29%20%28Sega%20CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA, Brazil) (Disc 1) (Fingers) (RE-1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "398.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%2C%20Brazil%29%20%28Disc%201%29%20%28Fingers%29%20%28RE-1%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA, Brazil) (Disc 2) (Juice) (RE-1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "386.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%2C%20Brazil%29%20%28Disc%202%29%20%28Juice%29%20%28RE-1%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA, Brazil) (Disc 3) (Mad Dog) (RE-1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "384.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%2C%20Brazil%29%20%28Disc%203%29%20%28Mad%20Dog%29%20%28RE-1%29.chd",
    link2: ""
  },
  {
    name: "Slam City with Scottie Pippen (USA, Brazil) (Disc 4) (Smash)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "366.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Slam%20City%20with%20Scottie%20Pippen%20%28USA%2C%20Brazil%29%20%28Disc%204%29%20%28Smash%29.chd",
    link2: ""
  },
  {
    name: "Smurfs, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "160.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Smurfs%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.chd",
    link2: ""
  },
  {
    name: "Snatcher (Europe) (Beta)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "319.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Snatcher%20%28Europe%29%20%28Beta%29.chd",
    link2: ""
  },
  {
    name: "Snatcher (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "319.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Snatcher%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Snatcher (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "319.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Snatcher%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Software Toolworks' Star Wars Chess, The (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "101.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Software%20Toolworks%27%20Star%20Wars%20Chess%2C%20The%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Software Toolworks' Star Wars Chess, The (USA) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "101.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Software%20Toolworks%27%20Star%20Wars%20Chess%2C%20The%20%28USA%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Software Toolworks' Star Wars Chess, The (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "101.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Software%20Toolworks%27%20Star%20Wars%20Chess%2C%20The%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Sol-Feace (Europe) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "295.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sol-Feace%20%28Europe%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Sol-Feace (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "295.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sol-Feace%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Sol-Feace (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "336.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Sol-Feace%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Sol-Feace (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "293.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sol-Feace%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Sol-Feace (USA) (RE2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "293.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sol-Feace%20%28USA%29%20%28RE2%29.chd",
    link2: ""
  },
  {
    name: "Sonic CD (Europe) (Beta 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "323.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sonic%20CD%20%28Europe%29%20%28Beta%201%29.chd",
    link2: ""
  },
  {
    name: "Sonic CD (Europe) (Beta 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "323.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sonic%20CD%20%28Europe%29%20%28Beta%202%29.chd",
    link2: ""
  },
  {
    name: "Sonic CD (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "323.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Sonic%20CD%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Sonic CD (USA) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "321.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sonic%20CD%20%28USA%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Sonic CD (USA) (Beta)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "318.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sonic%20CD%20%28USA%29%20%28Beta%29.chd",
    link2: ""
  },
  {
    name: "Sonic CD (USA) (RE125) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "321.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sonic%20CD%20%28USA%29%20%28RE125%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Sonic CD (USA) (RE125)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "321.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sonic%20CD%20%28USA%29%20%28RE125%29.chd",
    link2: ""
  },
  {
    name: "Sonic CD (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "321.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sonic%20CD%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Sonic MegaMix (USA) (Unl)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "7.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Sonic%20MegaMix%20%28USA%29%20%28Unl%29.chd",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog CD (Japan) (Beta 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "324.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Sonic%20The%20Hedgehog%20CD%20%28Japan%29%20%28Beta%201%29.chd",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog CD (Japan) (Beta 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "323.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Sonic%20The%20Hedgehog%20CD%20%28Japan%29%20%28Beta%202%29.chd",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog CD (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "323.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Sonic%20The%20Hedgehog%20CD%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog CD (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "323.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Sonic%20The%20Hedgehog%20CD%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "SoulStar & Battlecorps (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "93.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/SoulStar%20%26%20Battlecorps%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "SoulStar (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "56.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/SoulStar%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "SoulStar (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "329.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/SoulStar%20%28Europe%29%20%28En%2CFr%2CDe%29.chd",
    link2: ""
  },
  {
    name: "SoulStar (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "318.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/SoulStar%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "SoulStar (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "329.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/SoulStar%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Space Ace (USA) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "3.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Space%20Ace%20%28USA%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Space Ace (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "154.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Space%20Ace%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Space Adventure, The - Cobra - The Legendary Bandit (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "108.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Space%20Adventure%2C%20The%20-%20Cobra%20-%20The%20Legendary%20Bandit%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Space Adventure, The - Cobra - The Legendary Bandit (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "108.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Space%20Adventure%2C%20The%20-%20Cobra%20-%20The%20Legendary%20Bandit%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Star Wars - Rebel Assault (Europe) (Demo) (Mega Power)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "42.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Star%20Wars%20-%20Rebel%20Assault%20%28Europe%29%20%28Demo%29%20%28Mega%20Power%29.chd",
    link2: ""
  },
  {
    name: "Star Wars - Rebel Assault (Europe) (Demo) (Sega Pro)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "39.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Star%20Wars%20-%20Rebel%20Assault%20%28Europe%29%20%28Demo%29%20%28Sega%20Pro%29.chd",
    link2: ""
  },
  {
    name: "Star Wars - Rebel Assault (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "194.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Star%20Wars%20-%20Rebel%20Assault%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Star Wars - Rebel Assault (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "194.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Star%20Wars%20-%20Rebel%20Assault%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Star Wars - Rebel Assault (USA) (Limited Run Games)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "194.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Star%20Wars%20-%20Rebel%20Assault%20%28USA%29%20%28Limited%20Run%20Games%29.chd",
    link2: ""
  },
  {
    name: "Star Wars - Rebel Assault (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "194.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Star%20Wars%20-%20Rebel%20Assault%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Starblade (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "113.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Starblade%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Starblade (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "112.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Starblade%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Starblade (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "112.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Starblade%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Stellar-Fire (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "250.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Stellar-Fire%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Super Strike Trilogy (USA) (Unl)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "199.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Super%20Strike%20Trilogy%20%28USA%29%20%28Unl%29.chd",
    link2: ""
  },
  {
    name: "Supreme Warrior (Europe) (Disc 1) (Mega-CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "353.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Supreme%20Warrior%20%28Europe%29%20%28Disc%201%29%20%28Mega-CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Supreme Warrior (Europe) (Disc 1)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "332.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Supreme%20Warrior%20%28Europe%29%20%28Disc%201%29.chd",
    link2: ""
  },
  {
    name: "Supreme Warrior (Europe) (Disc 2) (Mega-CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "348.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Supreme%20Warrior%20%28Europe%29%20%28Disc%202%29%20%28Mega-CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Supreme Warrior (Europe) (Disc 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "324.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Supreme%20Warrior%20%28Europe%29%20%28Disc%202%29.chd",
    link2: ""
  },
  {
    name: "Supreme Warrior (USA) (Disc 1) (Fire & Earth) (Sega CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "353.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Supreme%20Warrior%20%28USA%29%20%28Disc%201%29%20%28Fire%20%26%20Earth%29%20%28Sega%20CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Supreme Warrior (USA) (Disc 1) (Fire & Earth)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "332.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Supreme%20Warrior%20%28USA%29%20%28Disc%201%29%20%28Fire%20%26%20Earth%29.chd",
    link2: ""
  },
  {
    name: "Supreme Warrior (USA) (Disc 2) (Wind & Fang Tu) (Sega CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "348.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Supreme%20Warrior%20%28USA%29%20%28Disc%202%29%20%28Wind%20%26%20Fang%20Tu%29%20%28Sega%20CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Supreme Warrior (USA) (Disc 2) (Wind & Fang Tu)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "324.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Supreme%20Warrior%20%28USA%29%20%28Disc%202%29%20%28Wind%20%26%20Fang%20Tu%29.chd",
    link2: ""
  },
  {
    name: "Surgical Strike (Brazil) (Sega CD 32X)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "333.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Surgical%20Strike%20%28Brazil%29%20%28Sega%20CD%2032X%29.chd",
    link2: ""
  },
  {
    name: "Surgical Strike (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "309.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Surgical%20Strike%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Surgical Strike (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "310.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Surgical%20Strike%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Surgical Strike (USA) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "309.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Surgical%20Strike%20%28USA%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Surgical Strike (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "309.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Surgical%20Strike%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Switch (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "210.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Switch%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Syndicate (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "167.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Syndicate%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Tenbu Mega CD Special (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "245.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Tenbu%20Mega%20CD%20Special%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Tenkafubu - Eiyuutachi no Houkou (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "257.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Tenkafubu%20-%20Eiyuutachi%20no%20Houkou%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Terminator, The (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "242.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Terminator%2C%20The%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Terminator, The (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "240.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Terminator%2C%20The%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Theme Park (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "40.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Theme%20Park%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Third World War (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "214.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Third%20World%20War%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Thunder Storm FX (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "60.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Thunder%20Storm%20FX%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Thunderhawk (Europe) (Demo) (Mega Power, Sega Pro)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "62.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Thunderhawk%20%28Europe%29%20%28Demo%29%20%28Mega%20Power%2C%20Sega%20Pro%29.chd",
    link2: ""
  },
  {
    name: "Thunderhawk (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "67.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Thunderhawk%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Thunderhawk (Europe) (En,Fr,De,Es) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "250.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Thunderhawk%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "Thunderhawk (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "59.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Thunderhawk%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Thunderhawk (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "234.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Thunderhawk%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Time Gal (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "61.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Time%20Gal%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Time Gal (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "66.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Time%20Gal%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Time Gal (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "61.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Time%20Gal%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "TimeCop (Europe) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "9.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/TimeCop%20%28Europe%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Tomcat Alley (Australia)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "376.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Tomcat%20Alley%20%28Australia%29.chd",
    link2: ""
  },
  {
    name: "Tomcat Alley (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "376.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Tomcat%20Alley%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Tomcat Alley (France)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "347.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Tomcat%20Alley%20%28France%29.chd",
    link2: ""
  },
  {
    name: "Tomcat Alley (Germany)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "347.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Tomcat%20Alley%20%28Germany%29.chd",
    link2: ""
  },
  {
    name: "Tomcat Alley (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "346.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Tomcat%20Alley%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Tomcat Alley (Spain)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "347.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Tomcat%20Alley%20%28Spain%29.chd",
    link2: ""
  },
  {
    name: "Tomcat Alley (USA) (Alt)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "376.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Tomcat%20Alley%20%28USA%29%20%28Alt%29.chd",
    link2: ""
  },
  {
    name: "Tomcat Alley (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "377.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Tomcat%20Alley%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Trivial Pursuit (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "225.8 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Trivial%20Pursuit%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Ultraverse Prime (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "253.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Ultraverse%20Prime%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Urusei Yatsura - Dear My Friends (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "17.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Urusei%20Yatsura%20-%20Dear%20My%20Friends%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Urusei Yatsura - Dear My Friends (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "131.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Urusei%20Yatsura%20-%20Dear%20My%20Friends%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Vay (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "223.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Vay%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Vay - Ryuusei no Yoroi (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "186.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Vay%20-%20Ryuusei%20no%20Yoroi%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "WWF - Rage in the Cage (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "65.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/WWF%20-%20Rage%20in%20the%20Cage%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "WWF - Rage in the Cage (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "65.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/WWF%20-%20Rage%20in%20the%20Cage%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "WWF Mania Tour - WWF - Rage in the Cage (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "65.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/WWF%20Mania%20Tour%20-%20WWF%20-%20Rage%20in%20the%20Cage%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Wakusei Woodstock - Funky Horror Band (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "109.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Wakusei%20Woodstock%20-%20Funky%20Horror%20Band%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Warau Salesman (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "72.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Warau%20Salesman%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "What is X'Eye Multi Entertainment System (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "50.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/What%20is%20X%27Eye%20Multi%20Entertainment%20System%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Wheel of Fortune (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "70.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Wheel%20of%20Fortune%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Who Shot Johnny Rock (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "161.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Who%20Shot%20Johnny%20Rock%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Wild Woody (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "299.7 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Wild%20Woody%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Wing Commander (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "207.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Wing%20Commander%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Wing Commander (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "208.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Wing%20Commander%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Winning Post (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "57.5 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Winning%20Post%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "WireHead (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "393.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/WireHead%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Wolfchild (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "222.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Wolfchild%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Wolfchild (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "222.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Wolfchild%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Wolfchild (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "222.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Wolfchild%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Wonder Dog (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "294.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Wonder%20Dog%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "Wonder Dog (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "291.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Wonder%20Dog%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Wonder Dog (USA) (RE)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "294.1 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/Wonder%20Dog%20%28USA%29%20%28RE%29.chd",
    link2: ""
  },
  {
    name: "WonderMega Collection (Japan) (Rev 2)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "308.0 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/WonderMega%20Collection%20%28Japan%29%20%28Rev%202%29.chd",
    link2: ""
  },
  {
    name: "World Cup USA '94 (Europe)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "366.2 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/World%20Cup%20USA%20%2794%20%28Europe%29.chd",
    link2: ""
  },
  {
    name: "World Cup USA '94 (USA)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "366.3 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-SegaCD-NTSC/World%20Cup%20USA%20%2794%20%28USA%29.chd",
    link2: ""
  },
  {
    name: "Yumemi Mystery Mansion (Australia)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "203.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Yumemi%20Mystery%20Mansion%20%28Australia%29.chd",
    link2: ""
  },
  {
    name: "Yumemi Mystery Mansion (Europe) (Made in EU)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "203.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-PAL/Yumemi%20Mystery%20Mansion%20%28Europe%29%20%28Made%20in%20EU%29.chd",
    link2: ""
  },
  {
    name: "Yumemi Mystery Mansion (Europe) (Made in Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "203.6 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Yumemi%20Mystery%20Mansion%20%28Europe%29%20%28Made%20in%20Japan%29.chd",
    link2: ""
  },
  {
    name: "Yumemi Yakata no Monogatari (Japan) (Demo)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "220.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Yumemi%20Yakata%20no%20Monogatari%20%28Japan%29%20%28Demo%29.chd",
    link2: ""
  },
  {
    name: "Yumemi Yakata no Monogatari (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "220.4 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Yumemi%20Yakata%20no%20Monogatari%20%28Japan%29.chd",
    link2: ""
  },
  {
    name: "Yumimi Mix (Japan)",
    image: "https://i.postimg.cc/hGR4pFNt/Sega-CD-Logo-USA.png",
    size: "114.9 MiB",
    link1: "https://myrient.erista.me/files/Internet%20Archive/chadmaster/chd_segacd/CHD-MegaCD-NTSCJ/Yumimi%20Mix%20%28Japan%29.chd",
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