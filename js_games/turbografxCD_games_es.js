const roms = [
  {
    name: "4 in 1 Super CD - Gate of Thunder + Bonk's Adventure + Bonk's Revenge + Bomberman (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "319628 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/4%20in%201%20Super%20CD%20-%20Gate%20of%20Thunder%20%2B%20Bonk%27s%20Adventure%20%2B%20Bonk%27s%20Revenge%20%2B%20Bomberman%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Advanced V.G. (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "224406 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Advanced%20V.G.%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Ai Chou Aniki (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "353762 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Ai%20Chou%20Aniki%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Akumajou Dracula X - Chi No Rondo (English Translated With PSP Audio Patch, Rev 1.01, by Shortfilms.tk and Burnt Lasagna)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "289057 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Akumajou%20Dracula%20X%20-%20Chi%20No%20Rondo%20%28English%20Translated%20With%20PSP%20Audio%20Patch%2C%20Rev%201.01%2C%20by%20Shortfilms.tk%20and%20Burnt%20Lasagna%29.chd",
    link2: ""
  },
  {
    name: "Ane-san (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "400763 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Ane-san%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Asuka 120% Maxima - Burning Fest. Maxima (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "263454 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Asuka%20120%25%20Maxima%20-%20Burning%20Fest.%20Maxima%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Avenger (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "180758 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Avenger%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Baby Jo - The Super Hero (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "163759 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Baby%20Jo%20-%20The%20Super%20Hero%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Bakushou Yoshimoto Shinkigeki (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "281419 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Bakushou%20Yoshimoto%20Shinkigeki%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Battle Shanghai - Dragon's Eye ~ Shanghai III - Dragon's Eye (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "188650 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Battle%20Shanghai%20-%20Dragon%27s%20Eye%20~%20Shanghai%20III%20-%20Dragon%27s%20Eye%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Bazaru De Gozaru No Game De Gozaru (English Translated by Dave Shadoff, MooZ, and Diogo Ribeiro)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "163257 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Bazaru%20De%20Gozaru%20No%20Game%20De%20Gozaru%20%28English%20Translated%20by%20Dave%20Shadoff%2C%20MooZ%2C%20and%20Diogo%20Ribeiro%29.chd",
    link2: ""
  },
  {
    name: "Beyond Shadowgate (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "184134 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Beyond%20Shadowgate%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Sailor Moon (English Translated With Honorifics Patch, Rev 1.1, by Lipemco! Translations)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "206974 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Bishoujo%20Senshi%20Sailor%20Moon%20%28English%20Translated%20With%20Honorifics%20Patch%2C%20Rev%201.1%2C%20by%20Lipemco%21%20Translations%29.chd",
    link2: ""
  },
  {
    name: "Black Hole Assault (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "319480 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Black%20Hole%20Assault%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Bomberman '94 (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "2605 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Bomberman%20%2794%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Bomberman - Panic Bomber (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "381848 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Bomberman%20-%20Panic%20Bomber%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Bonanza Bros. (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "139559 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Bonanza%20Bros.%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Bonk III - Bonk's Big Adventure (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "363357 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Bonk%20III%20-%20Bonk%27s%20Big%20Adventure%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Browning (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "232199 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Browning%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "BuilderLand - The Story of Melba (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "121406 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/BuilderLand%20-%20The%20Story%20of%20Melba%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Buster Bros. (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "132849 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Buster%20Bros.%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Camp California (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "348157 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Camp%20California%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Cardangels (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "326663 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Cardangels%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Chiki Chiki Boys (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "308222 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Chiki%20Chiki%20Boys%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Chou Aniki (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "164158 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Chou%20Aniki%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Chou Jikuu Yousai Macross 2036 (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "331380 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Chou%20Jikuu%20Yousai%20Macross%202036%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Color Wars (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "105403 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Color%20Wars%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Cosmic Fantasy 2 (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "237820 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Cosmic%20Fantasy%202%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Cycho Rider (From Seiya Monogatari Taikenban - JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "35923 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Cycho%20Rider%20%28From%20Seiya%20Monogatari%20Taikenban%20-%20JP%29.chd",
    link2: ""
  },
  {
    name: "Daisenpuu Custom (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "258227 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Daisenpuu%20Custom%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Dead of the Brain 1 (English Translated, Rev 1E, by Dave Shadoff)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "192267 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Dead%20of%20the%20Brain%201%20%28English%20Translated%2C%20Rev%201E%2C%20by%20Dave%20Shadoff%29.chd",
    link2: ""
  },
  {
    name: "Dekoboko Densetsu - Hashiru Wagamanmaa (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "219472 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Dekoboko%20Densetsu%20-%20Hashiru%20Wagamanmaa%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Develo - Starter Kit - Assembler-hen (Speeder and Bend Bent - JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "78039 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Develo%20-%20Starter%20Kit%20-%20Assembler-hen%20%28Speeder%20and%20Bend%20Bent%20-%20JP%29.chd",
    link2: ""
  },
  {
    name: "Develo - Starter Kit - BASIC-hen (Sky, G-Tennis, and Meiro Game - JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "75315 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Develo%20-%20Starter%20Kit%20-%20BASIC-hen%20%28Sky%2C%20G-Tennis%2C%20and%20Meiro%20Game%20-%20JP%29.chd",
    link2: ""
  },
  {
    name: "Develo Magazine Vol. 1 (Frisbee Ken John - JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "198989 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Develo%20Magazine%20Vol.%201%20%28Frisbee%20Ken%20John%20-%20JP%29.chd",
    link2: ""
  },
  {
    name: "Doraemon - Nobita no Dorabian Night (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "55833 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Doraemon%20-%20Nobita%20no%20Dorabian%20Night%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Double Dragon II - The Revenge (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "284668 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Double%20Dragon%20II%20-%20The%20Revenge%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Down Load 2 (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "167166 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Down%20Load%202%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Dragon Slayer - The Legend of Heroes (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "379733 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Dragon%20Slayer%20-%20The%20Legend%20of%20Heroes%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Dungeon Explorer II (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "379928 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Dungeon%20Explorer%20II%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Dungeon Master - Theron's Quest (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "198994 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Dungeon%20Master%20-%20Theron%27s%20Quest%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Exile (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "233153 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Exile%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Exile - Wicked Phenomenon (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "278712 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Exile%20-%20Wicked%20Phenomenon%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "F1 Circus Special - Pole to Win (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "303764 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/F1%20Circus%20Special%20-%20Pole%20to%20Win%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Faceball (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "197841 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Faceball%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Fantastic Night Dreams - Cotton (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "290754 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Fantastic%20Night%20Dreams%20-%20Cotton%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Far East of Eden - Tengai Makyou - Ziria (English Translated, Rev 1.2, by Lipemco! Translations)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "144847 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Far%20East%20of%20Eden%20-%20Tengai%20Makyou%20-%20Ziria%20%28English%20Translated%2C%20Rev%201.2%2C%20by%20Lipemco%21%20Translations%29.chd",
    link2: ""
  },
  {
    name: "Faussete Amour (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "235355 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Faussete%20Amour%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Fighting Street (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "236252 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Fighting%20Street%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Final Zone II (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "228987 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Final%20Zone%20II%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Flash Hiders (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "313835 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Flash%20Hiders%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Force Gear (From Tokimeki Memorial - JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "261680 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Force%20Gear%20%28From%20Tokimeki%20Memorial%20-%20JP%29.chd",
    link2: ""
  },
  {
    name: "Forgotten Worlds (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "313279 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Forgotten%20Worlds%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Formation Soccer '95 Della Serie A (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "257966 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Formation%20Soccer%20%2795%20Della%20Serie%20A%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Gain Ground SX (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "150745 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Gain%20Ground%20SX%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Galaxy Deka Gayvan (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "191660 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Galaxy%20Deka%20Gayvan%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Garou Densetsu 2 - Aratanaru Tatakai (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "379514 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Garou%20Densetsu%202%20-%20Aratanaru%20Tatakai%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Garou Densetsu Special (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "459797 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Garou%20Densetsu%20Special%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Genocide (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "237077 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Genocide%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Ginga Fukei Densetsu Sapphire (JP, Rev 1)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "242982 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Ginga%20Fukei%20Densetsu%20Sapphire%20%28JP%2C%20Rev%201%29.chd",
    link2: ""
  },
  {
    name: "Ginga Ojousama Densetsu Yuna (English Translated, Rev v1.3, by Supper)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "257078 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Ginga%20Ojousama%20Densetsu%20Yuna%20%28English%20Translated%2C%20Rev%20v1.3%2C%20by%20Supper%29.chd",
    link2: ""
  },
  {
    name: "Ginga Ojousama Densetsu Yuna 2 (English Translated, Rev v1.1, by Supper)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "366825 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Ginga%20Ojousama%20Densetsu%20Yuna%202%20%28English%20Translated%2C%20Rev%20v1.1%2C%20by%20Supper%29.chd",
    link2: ""
  },
  {
    name: "God Panic - Shijou Saikyou no Gundan (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "290230 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/God%20Panic%20-%20Shijou%20Saikyou%20no%20Gundan%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Godzilla (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "213488 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Godzilla%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Goetzendiener (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "66201 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Goetzendiener%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Golden Axe (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "221043 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Golden%20Axe%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Gradius II - Gofer no Yabou (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "313587 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Gradius%20II%20-%20Gofer%20no%20Yabou%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Gyuwambler Jiko Chuushinha - Mahjong Puzzle Collection (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "189700 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Gyuwambler%20Jiko%20Chuushinha%20-%20Mahjong%20Puzzle%20Collection%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Hawk F-123 (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "235131 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Hawk%20F-123%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Hellfire S - The Another Story (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "307126 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Hellfire%20S%20-%20The%20Another%20Story%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Hihou Densetsu - Chris no Bouken (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "232415 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Hihou%20Densetsu%20-%20Chris%20no%20Bouken%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Horror Story (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "340564 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Horror%20Story%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Hu PGA Tour - PowerGolf 2 - Golfer (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "120396 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Hu%20PGA%20Tour%20-%20PowerGolf%202%20-%20Golfer%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Human Sports Festival (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "267540 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Human%20Sports%20Festival%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Hyper Dyne - SideArms Special (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "305680 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Hyper%20Dyne%20-%20SideArms%20Special%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Iga Ninden Gaiou (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "283312 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Iga%20Ninden%20Gaiou%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "ImageFight II - Operation Deepstriker (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "286007 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/ImageFight%20II%20-%20Operation%20Deepstriker%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "In Magical Adventure - Fray CD - Xak Gaiden (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "262385 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/In%20Magical%20Adventure%20-%20Fray%20CD%20-%20Xak%20Gaiden%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "It Came from the Desert (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "207380 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/It%20Came%20from%20the%20Desert%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "J. B. Harold Murder Club (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "235234 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/J.%20B.%20Harold%20Murder%20Club%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "J.League Tremendous Soccer '94 (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "337479 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/J.League%20Tremendous%20Soccer%20%2794%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Jack Nicklaus Turbo Golf (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "103891 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Jack%20Nicklaus%20Turbo%20Golf%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Jim Power in Mutant Planet (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "400350 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Jim%20Power%20in%20Mutant%20Planet%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "John Madden Duo CD Football (NA, Rev 1)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "141869 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/John%20Madden%20Duo%20CD%20Football%20%28NA%2C%20Rev%201%29.chd",
    link2: ""
  },
  {
    name: "Juuouki (JP, Rev 5)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "37948 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Juuouki%20%28JP%2C%20Rev%205%29.chd",
    link2: ""
  },
  {
    name: "Kabuki Ittouryoudan (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "276967 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Kabuki%20Ittouryoudan%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Kaizou Choujin Shubibinman 3 - Ikai no Princess (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "328412 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Kaizou%20Choujin%20Shubibinman%203%20-%20Ikai%20no%20Princess%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Kakutou Haou Densetsu - Algunos (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "132441 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Kakutou%20Haou%20Densetsu%20-%20Algunos%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Kaze Kiri - Ninja Action (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "280957 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Kaze%20Kiri%20-%20Ninja%20Action%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Kiaidan 00 (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "320541 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Kiaidan%2000%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "L-Dis (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "314509 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/L-Dis%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Last Alert (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "299704 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Last%20Alert%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Legion (JP, Rev 4)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "166512 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Legion%20%28JP%2C%20Rev%204%29.chd",
    link2: ""
  },
  {
    name: "Lemmings (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "193207 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Lemmings%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Loom (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "128972 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Loom%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Lords of Thunder (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "372252 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Lords%20of%20Thunder%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Lords of the Rising Sun (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "194917 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%204-L.zip/Lords%20of%20the%20Rising%20Sun%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Mad Stalker - Full Metal Force (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "366409 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Mad%20Stalker%20-%20Full%20Metal%20Force%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Madou Monogatari I - Honoo no Sotsuenji (English Translated by Lipemco! Translations)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "226236 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Madou%20Monogatari%20I%20-%20Honoo%20no%20Sotsuenji%20%28English%20Translated%20by%20Lipemco%21%20Translations%29.chd",
    link2: ""
  },
  {
    name: "Martial Champion (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "225937 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Martial%20Champion%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Metamor Jupiter (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "150857 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Metamor%20Jupiter%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Might and Magic (English Translated by TiCo)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "106864 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Might%20and%20Magic%20%28English%20Translated%20by%20TiCo%29.chd",
    link2: ""
  },
  {
    name: "Might and Magic III - Isles of Terra (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "129055 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Might%20and%20Magic%20III%20-%20Isles%20of%20Terra%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Minesweeper (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "180176 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Minesweeper%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Monster Lair (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "232606 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Monster%20Lair%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Motoroader MC (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "216615 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Motoroader%20MC%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Motteke Tamago (English Translated by Dave Shadoff)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "242680 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Motteke%20Tamago%20%28English%20Translated%20by%20Dave%20Shadoff%29.chd",
    link2: ""
  },
  {
    name: "Mugen Senshi Valis - The Legend of a Fantasm Soldier (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "303744 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Mugen%20Senshi%20Valis%20-%20The%20Legend%20of%20a%20Fantasm%20Soldier%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Mystic Formula (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "242818 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Mystic%20Formula%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "NEXZR (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "266716 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/NEXZR%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Nekketsu Koukou Dodgeball-bu CD - Soccer-hen (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "256401 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Nekketsu%20Koukou%20Dodgeball-bu%20CD%20-%20Soccer-hen%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Pop'n Magic (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "221660 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Pop%27n%20Magic%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Populous - The Promised Lands (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "148007 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Populous%20-%20The%20Promised%20Lands%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Prince of Persia (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "250099 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Prince%20of%20Persia%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Private Eye Dol (English Translated by Supper)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "348758 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Private%20Eye%20Dol%20%28English%20Translated%20by%20Supper%29.chd",
    link2: ""
  },
  {
    name: "Psychic Storm (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "282405 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Psychic%20Storm%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Puyo Puyo CD (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "216350 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Puyo%20Puyo%20CD%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Puyo Puyo CD Tsuu (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "313221 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Puyo%20Puyo%20CD%20Tsuu%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "R-Type Complete CD (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "254172 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/R-Type%20Complete%20CD%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "ROM ROM Stadium (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "118029 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/ROM2%20Karaoke%20Vol.%201%20-%20Suteki%20ni%20Standard%20%28Bingo%2C%20Shinkei%20Suijaku%2C%20and%20Cockroach%20-%20JP%29.chd",
    link2: ""
  },
  {
    name: "ROM2 Karaoke Vol. 1 - Suteki ni Standard (Bingo, Shinkei Suijaku, and Cockroach - JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "270077 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/ROM%20ROM%20Stadium%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Rainbow Islands - The Story of Bubble Bobble 2 (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "326294 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Rainbow%20Islands%20-%20The%20Story%20of%20Bubble%20Bobble%202%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Rally Championship (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "178679 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Rally%20Championship%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Ranma 1-2 (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "301705 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Ranma%201-2%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Ranma 1-2 - Datou, Ganso Musabetsu Kakutou-ryuu! (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "345538 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Ranma%201-2%20-%20Datou%2C%20Ganso%20Musabetsu%20Kakutou-ryuu%21%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Rayxanber II (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "232155 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Rayxanber%20II%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Rayxanber III (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "283355 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Rayxanber%20III%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Renny Blaster (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "235230 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Renny%20Blaster%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Riot Zone (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "358157 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Riot%20Zone%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Road Spirits (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "234490 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Road%20Spirits%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Ryuuko no Ken (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "275281 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Ryuuko%20no%20Ken%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Seirei Senshi Spriggan (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "318359 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Seirei%20Senshi%20Spriggan%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Shadow of the Beast (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "281358 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Shadow%20of%20the%20Beast%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Shanghai II (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "78954 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Shanghai%20II%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Shape Shifter (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "324762 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Shape%20Shifter%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Sherlock Holmes - Consulting Detective (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "408488 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Sherlock%20Holmes%20-%20Consulting%20Detective%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Sherlock Holmes - Consulting Detective - Volume 2 (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "420118 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Sherlock%20Holmes%20-%20Consulting%20Detective%20-%20Volume%202%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Shin Nihon Pro Wrestling - '94 Battlefield in Tokyo Dome (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "336964 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Shin%20Nihon%20Pro%20Wrestling%20-%20%2794%20Battlefield%20in%20Tokyo%20Dome%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "SimEarth - The Living Planet (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "171350 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/SimEarth%20-%20The%20Living%20Planet%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Space Fantasy Zone (Prototype)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "112679 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Space%20Fantasy%20Zone%20%28Prototype%29.chd",
    link2: ""
  },
  {
    name: "Space Invaders - The Original Game (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "68761 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Space%20Invaders%20-%20The%20Original%20Game%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Splash Lake (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "163645 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Splash%20Lake%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Spriggan Mark 2 - Re Terraform Project (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "331433 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Spriggan%20Mark%202%20-%20Re%20Terraform%20Project%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Star Mobile (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "254870 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Star%20Mobile%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Star Parodier (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "368875 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Star%20Parodier%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Steam-Heart's (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "380194 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Steam-Heart%27s%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Strider Hiryuu (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "248082 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Strider%20Hiryuu%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Summer Carnival '92 - Alzadick (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "154301 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Summer%20Carnival%20%2792%20-%20Alzadick%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Summer Carnival '93 - NEXZR Special (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "291838 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Summer%20Carnival%20%2793%20-%20NEXZR%20Special%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Super Air Zonk - Rockabilly-Paradise (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "321160 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Super%20Air%20Zonk%20-%20Rockabilly-Paradise%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Super Albatross (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "281943 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Super%20Albatross%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Super Daisenryaku (English Translated, Rev 0.99, by Gaijin Productions)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "55220 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Super%20Daisenryaku%20%28English%20Translated%2C%20Rev%200.99%2C%20by%20Gaijin%20Productions%29.chd",
    link2: ""
  },
  {
    name: "Super Darius (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "272318 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Super%20Darius%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Super Darius II (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "339744 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Super%20Darius%20II%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Super Raiden (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "243673 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Super%20Raiden%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Syd Mead's TerraForming (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "192260 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Syd%20Mead%27s%20TerraForming%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Sylphia (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "313033 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Sylphia%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Tecmo World Cup Super Soccer (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "199484 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Tecmo%20World%20Cup%20Super%20Soccer%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Tenchi o Kurau (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "131212 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Tenchi%20o%20Kurau%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Tengai Makyou - Deden no Kabuki-den (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "3194 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Tengai%20Makyou%20-%20Deden%20no%20Kabuki-den%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "The Addams Family (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "7672 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/The%20Addams%20Family%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "The Davis Cup Tennis (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "157076 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/The%20Davis%20Cup%20Tennis%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "The Dynastic Hero (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "308302 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/The%20Dynastic%20Hero%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "The Kick Boxing (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "54638 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/The%20Kick%20Boxing%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "The Manhole (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "228798 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/The%20Manhole%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "The Pro Yakyuu (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "83386 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/The%20Pro%20Yakyuu%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "The Pro Yakyuu Super '94 (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "195828 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/The%20Pro%20Yakyuu%20Super%20%2794%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "The Pro Yakyuu Super (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "235510 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/The%20Pro%20Yakyuu%20Super%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "The TV Show (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "329203 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/The%20TV%20Show%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Todd's Adventures in Slime World (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "140514 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Todd%27s%20Adventures%20in%20Slime%20World%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Travel Eple (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "240387 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Travel%20Eple%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Twinbee Returns (From Tokimeki Memorial - JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "263696 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Twinbee%20Returns%20%28From%20Tokimeki%20Memorial%20-%20JP%29.chd",
    link2: ""
  },
  {
    name: "Valis II (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "271701 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Valis%20II%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Valis III (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "239585 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Valis%20III%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Valis IV (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "271594 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Valis%20IV%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Vasteel (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "265545 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Vasteel%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Where in the World Is Carmen Sandiego (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "229540 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Where%20in%20the%20World%20Is%20Carmen%20Sandiego%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "World Heroes 2 (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "291631 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/World%20Heroes%202%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Wrestling Universe - Fire Pro Joshi - Dome Choujo Taisen - Zenjo Vs. JWP (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "272028 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Wrestling%20Universe%20-%20Fire%20Pro%20Joshi%20-%20Dome%20Choujo%20Taisen%20-%20Zenjo%20Vs.%20JWP%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Xak III - The Eternal Recurrence (English Translated by Nick, Paul, and Akimaru)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "251411 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Xak%20III%20-%20The%20Eternal%20Recurrence%20%28English%20Translated%20by%20Nick%2C%20Paul%2C%20and%20Akimaru%29.chd",
    link2: ""
  },
  {
    name: "Ys Book I & II (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "467224 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Ys%20Book%20I%20%26%20II%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Ys III - Wanderers from Ys (NA)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "442161 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Ys%20III%20-%20Wanderers%20from%20Ys%20%28NA%29.chd",
    link2: ""
  },
  {
    name: "Ys IV - The Dawn of Ys (English Translated, Rev 0.95 With English Dub Patch, Rev 1.1, by Burnt Lasagna)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "412894 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Ys%20IV%20-%20The%20Dawn%20of%20Ys%20%28English%20Translated%2C%20Rev%200.95%20With%20English%20Dub%20Patch%2C%20Rev%201.1%2C%20by%20Burnt%20Lasagna%29.chd",
    link2: ""
  },
  {
    name: "Yuu Yuu Hakusho - Yami Shoubu!! Ankoku Bujutsu-kai (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "352750 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Yuu%20Yuu%20Hakusho%20-%20Yami%20Shoubu%21%21%20Ankoku%20Bujutsu-kai%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Zero 4 Champ II (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "294041 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Zero%204%20Champ%20II%20%28JP%29.chd",
    link2: ""
  },
  {
    name: "Zero Wing (JP)",
    image: "https://i.postimg.cc/QMRbYhf6/Turbo-Grafx-CD-logo-color.png",
    size: "263757 KB",
    link1: "https://archive.org/download/nec-turbografx-cd-champion-collection/NEC%20TurboGrafx-CD%20Champion%20Collection%20M-Z.zip/Zero%20Wing%20%28JP%29.chd",
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

