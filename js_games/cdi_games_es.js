const roms = [
  {
    name: "3rd Degree (1993)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "253.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/3rd%20Degree%20%281993%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "7th Guest, The (1994)(Philips)(DE)(Disc 1 of 2)[!][Das Spiel][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "407.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/7th%20Guest%2C%20The%20%281994%29%28Philips%29%28DE%29%28Disc%201%20of%202%29%5B%21%5D%5BDas%20Spiel%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "7th Guest, The (1994)(Philips)(EU)(Disc 1 of 2)[!][The Game][DVC][8110033V113 50404169 02] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "410.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/7th%20Guest%2C%20The%20%281994%29%28Philips%29%28EU%29%28Disc%201%20of%202%29%5B%21%5D%5BThe%20Game%5D%5BDVC%5D%5B8110033V113%2050404169%2002%5D.zip",
    link2: ""
  },
  {
    name: "7th Guest, The (1994)(Philips)(EU)(Disc 1 of 2)[!][The Game][DVC][8111033V113 50404169 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "408.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/7th%20Guest%2C%20The%20%281994%29%28Philips%29%28EU%29%28Disc%201%20of%202%29%5B%21%5D%5BThe%20Game%5D%5BDVC%5D%5B8111033V113%2050404169%2001%5D.zip",
    link2: ""
  },
  {
    name: "7th Guest, The (1994)(Philips)(EU)(Disc 2 of 2)[!][The Music, Die Musik][CD-Audio] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "240.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/7th%20Guest%2C%20The%20%281994%29%28Philips%29%28EU%29%28Disc%202%20of%202%29%5B%21%5D%5BThe%20Music%2C%20Die%20Musik%5D%5BCD-Audio%5D.zip",
    link2: ""
  },
  {
    name: "7th Guest, The (1994)(Philips)(FR)(Disc 1 of 2)[Le Jeu][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "409.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/7th%20Guest%2C%20The%20%281994%29%28Philips%29%28FR%29%28Disc%201%20of%202%29%5BLe%20Jeu%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "A Great Day at the Races (1993)(Philips)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "332.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/A%20Great%20Day%20at%20the%20Races%20%281993%29%28Philips%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "A Great Day at the Races (1993)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "332.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/A%20Great%20Day%20at%20the%20Races%20%281993%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Alice au pays des merveilles (1992)(Philips)(FR) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "333.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Alice%20au%20pays%20des%20merveilles%20%281992%29%28Philips%29%28FR%29.zip",
    link2: ""
  },
  {
    name: "Alice in Wonderland (1992)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "359.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Alice%20in%20Wonderland%20%281992%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Alice in Wonderland (1993)(Philips)(NL) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "331.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Alice%20in%20Wonderland%20%281993%29%28Philips%29%28NL%29.zip",
    link2: ""
  },
  {
    name: "Arcade Classics (1996)(Namco - Philips)(EU)[!][compilation] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "7.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Arcade%20Classics%20%281996%29%28Namco%20-%20Philips%29%28EU%29%5B%21%5D%5Bcompilation%5D.zip",
    link2: ""
  },
  {
    name: "Archeon CD-i Quiz (1994)(Dutch Electronic Publishers)(NL)(en-nl)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "27.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Archeon%20CD-i%20Quiz%20%281994%29%28Dutch%20Electronic%20Publishers%29%28NL%29%28en-nl%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Asterix - Caesar's Challenge v3.9 (1995)(Pathe - Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "99.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Asterix%20-%20Caesar%27s%20Challenge%20v3.9%20%281995%29%28Pathe%20-%20Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Asterix - De Uitdaging Van Caesar v3.9 (1995)(Pathe - Philips)(NL)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "101.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Asterix%20-%20De%20Uitdaging%20Van%20Caesar%20v3.9%20%281995%29%28Pathe%20-%20Philips%29%28NL%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Asterix - Die Grosse Reise v3.9 (1995)(Pathe - Philips)(DE)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "101.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Asterix%20-%20Die%20Grosse%20Reise%20v3.9%20%281995%29%28Pathe%20-%20Philips%29%28DE%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Asterix - El desafio de Cesar v3.9 (1995)(Pathe - Philips)(ES)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "99.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Asterix%20-%20El%20desafio%20de%20Cesar%20v3.9%20%281995%29%28Pathe%20-%20Philips%29%28ES%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Asterix - La sfida di Cesare v3.9 (1995)(Pathe - Philips)(IT) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "101.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Asterix%20-%20La%20sfida%20di%20Cesare%20v3.9%20%281995%29%28Pathe%20-%20Philips%29%28IT%29.zip",
    link2: ""
  },
  {
    name: "Asterix - Le defi de Cesar v3.9 (1995)(Pathe - Philips)(FR) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "101.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Asterix%20-%20Le%20defi%20de%20Cesar%20v3.9%20%281995%29%28Pathe%20-%20Philips%29%28FR%29.zip",
    link2: ""
  },
  {
    name: "Atlantis - The Last Resort v1.11 (1996)(Philips)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "197.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Atlantis%20-%20The%20Last%20Resort%20v1.11%20%281996%29%28Philips%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Axis and Allies (1994)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "133.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Axis%20and%20Allies%20%281994%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "BURN-CYCLE (1994)(Philips)(ES)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "446.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/BURN-CYCLE%20%281994%29%28Philips%29%28ES%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "BURN-CYCLE (1994)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "442.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/BURN-CYCLE%20%281994%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "BURN-CYCLE (1995)(Philips)(DE)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "446.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/BURN-CYCLE%20%281995%29%28Philips%29%28DE%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "BURN-CYCLE (1995)(Philips)(IT) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "446.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/BURN-CYCLE%20%281995%29%28Philips%29%28IT%29.zip",
    link2: ""
  },
  {
    name: "Backgammon (1992)(Philips)(EU-US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "92.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Backgammon%20%281992%29%28Philips%29%28EU-US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Battleship (1991)(Philips)(EU-US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "40.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Battleship%20%281991%29%28Philips%29%28EU-US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Brain Dead 13 v1.07 (1997)(Philips)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "539.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Brain%20Dead%2013%20v1.07%20%281997%29%28Philips%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "CD Shoot (1992)(Philips)(EU)(M8)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "97.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/CD%20Shoot%20%281992%29%28Philips%29%28EU%29%28M8%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "CD Shoot (1992)(Philips)(US) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "97.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/CD%20Shoot%20%281992%29%28Philips%29%28US%29.zip",
    link2: ""
  },
  {
    name: "Caesars World of Boxing (1993)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "487.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Caesars%20World%20of%20Boxing%20%281993%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Caesars World of Boxing (1993)(Philips)(US)[18621209 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "487.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Caesars%20World%20of%20Boxing%20%281993%29%28Philips%29%28US%29%5B18621209%2001%5D.zip",
    link2: ""
  },
  {
    name: "Caesars World of Boxing (1993)(Philips)(US)[18621217 03] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "487.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Caesars%20World%20of%20Boxing%20%281993%29%28Philips%29%28US%29%5B18621217%2003%5D.zip",
    link2: ""
  },
  {
    name: "Caesars World of Gambling (1992)(Philips)(EU-US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "88.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Caesars%20World%20of%20Gambling%20%281992%29%28Philips%29%28EU-US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Centurion (1995)(Philips)(NL)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "561.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Centurion%20%281995%29%28Philips%29%28NL%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Chaos Control v1.15 (1995)(Philips)(DE)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "359.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Chaos%20Control%20v1.15%20%281995%29%28Philips%29%28DE%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Chaos Control v1.15 (1995)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "361.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Chaos%20Control%20v1.15%20%281995%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Chaos Control v1.15 (1995)(Philips)(FR)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "359.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Chaos%20Control%20v1.15%20%281995%29%28Philips%29%28FR%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Chaos Control v1.15 (1995)(Philips)(US)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "361.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Chaos%20Control%20v1.15%20%281995%29%28Philips%29%28US%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Christmas Country (1996)(Creative Media)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "22.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Christmas%20Country%20%281996%29%28Creative%20Media%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Christmas Crisis (1995)(DIMA - Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "94.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Christmas%20Crisis%20%281995%29%28DIMA%20-%20Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Clue (1994)(Philips)(US)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "543.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Clue%20%281994%29%28Philips%29%28US%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Cluedo (1994)(Philips)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "543.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Cluedo%20%281994%29%28Philips%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Cluedo - The Mysteries Continue (1995)(Philips)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "540.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Cluedo%20-%20The%20Mysteries%20Continue%20%281995%29%28Philips%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Connect Four v1 (1991)(Philips)(EU-US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "25.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Connect%20Four%20v1%20%281991%29%28Philips%29%28EU-US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Creature Shock (1996)(Philips - Virgin)(EU)(Disc 1 of 2)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "570.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Creature%20Shock%20%281996%29%28Philips%20-%20Virgin%29%28EU%29%28Disc%201%20of%202%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Creature Shock (1996)(Philips - Virgin)(EU)(Disc 2 of 2)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "572.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Creature%20Shock%20%281996%29%28Philips%20-%20Virgin%29%28EU%29%28Disc%202%20of%202%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Dark Castle (1992)(Philips)(EU-US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "35.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Dark%20Castle%20%281992%29%28Philips%29%28EU-US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Defender of the Crown (1992)(Philips)(EU-US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "121.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Defender%20of%20the%20Crown%20%281992%29%28Philips%29%28EU-US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Do you Remember the '60's (1996)(Philips)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "158.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Do%20you%20Remember%20the%20%2760%27s%20%281996%29%28Philips%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "Domino - Het oudste spel, het nieuwste medium (1997)(Haarlems Uitgeef Bedrijf)(NL)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "13.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Domino%20-%20Het%20oudste%20spel%2C%20het%20nieuwste%20medium%20%281997%29%28Haarlems%20Uitgeef%20Bedrijf%29%28NL%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Dragon's Lair (1994)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "269.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Dragon%27s%20Lair%20%281994%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Dragon's Lair (1994)(Philips)(US)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "269.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Dragon%27s%20Lair%20%281994%29%28Philips%29%28US%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Dragon's Lair II - Time Warp (1994)(Philips)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "421.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Dragon%27s%20Lair%20II%20-%20Time%20Warp%20%281994%29%28Philips%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "Dragon's Lair II - Time Warp (1994)(Philips)(US)[!][DVC][13920805 02] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "422.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Dragon%27s%20Lair%20II%20-%20Time%20Warp%20%281994%29%28Philips%29%28US%29%5B%21%5D%5BDVC%5D%5B13920805%2002%5D.zip",
    link2: ""
  },
  {
    name: "Dragon's Lair II - Time Warp (1994)(Philips)(US)[DVC][13920805 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "421.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Dragon%27s%20Lair%20II%20-%20Time%20Warp%20%281994%29%28Philips%29%28US%29%5BDVC%5D%5B13920805%2001%5D.zip",
    link2: ""
  },
  {
    name: "Drug Wars (1996)(Philips)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "306.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Drug%20Wars%20%281996%29%28Philips%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Earth Command - De toekomst van de wereld ligt in jouw handen v1.05 (1994)(Philips)(NL)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "438.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Earth%20Command%20-%20De%20toekomst%20van%20de%20wereld%20ligt%20in%20jouw%20handen%20v1.05%20%281994%29%28Philips%29%28NL%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Earth Command - Die zukunft unserer welt liegt in ihrer hand v1.05 (1994)(Philips)(DE)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "428.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Earth%20Command%20-%20Die%20zukunft%20unserer%20welt%20liegt%20in%20ihrer%20hand%20v1.05%20%281994%29%28Philips%29%28DE%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Earth Command - The Future of Our World is in Your Hands v1.05 (1994)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "424.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Earth%20Command%20-%20The%20Future%20of%20Our%20World%20is%20in%20Your%20Hands%20v1.05%20%281994%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Earth Command - The Future of Our World is in Your Hands v1.05 (1994)(Philips)(US) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "424.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Earth%20Command%20-%20The%20Future%20of%20Our%20World%20is%20in%20Your%20Hands%20v1.05%20%281994%29%28Philips%29%28US%29.zip",
    link2: ""
  },
  {
    name: "Earth Command v1.05 (1994)(Philips)(FR) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "429.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Earth%20Command%20v1.05%20%281994%29%28Philips%29%28FR%29.zip",
    link2: ""
  },
  {
    name: "Effacer - Hangman of the 25th Century (1994)(Philips)(US) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "218.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Effacer%20-%20Hangman%20of%20the%2025th%20Century%20%281994%29%28Philips%29%28US%29.zip",
    link2: ""
  },
  {
    name: "Escape from CyberCity (1992)(Philips)(EU-US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "107.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Escape%20from%20CyberCity%20%281992%29%28Philips%29%28EU-US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Family Games I (1995)(Philips)(EU)[!][compilation] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "46.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Family%20Games%20I%20%281995%29%28Philips%29%28EU%29%5B%21%5D%5Bcompilation%5D.zip",
    link2: ""
  },
  {
    name: "Family Games II - Junk Food Jive (1995)(Philips)(EU)[!][compilation] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "120.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Family%20Games%20II%20-%20Junk%20Food%20Jive%20%281995%29%28Philips%29%28EU%29%5B%21%5D%5Bcompilation%5D.zip",
    link2: ""
  },
  {
    name: "Flashback (1995)(Philips)(EU)(M7)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "78.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Flashback%20%281995%29%28Philips%29%28EU%29%28M7%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Girl's Club - The Fantasy Dating Game (1993)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "408.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Girl%27s%20Club%20-%20The%20Fantasy%20Dating%20Game%20%281993%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Go - Special Edition (2002)(Good Deal Games - Oldergames)[original version] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "216.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Go%20-%20Special%20Edition%20%282002%29%28Good%20Deal%20Games%20-%20Oldergames%29%5Boriginal%20version%5D.zip",
    link2: ""
  },
  {
    name: "Golden Oldies I (1997)(SPC Vision)(EU)[compilation] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "22.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Golden%20Oldies%20I%20%281997%29%28SPC%20Vision%29%28EU%29%5Bcompilation%5D.zip",
    link2: ""
  },
  {
    name: "Golden Oldies II (1997)(SPC Vision)(EU)[!][compilation] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "20.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Golden%20Oldies%20II%20%281997%29%28SPC%20Vision%29%28EU%29%5B%21%5D%5Bcompilation%5D.zip",
    link2: ""
  },
  {
    name: "Guignols de l'Info, Les - Le jeu! (1996)(CANAL - Philips)(FR)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "408.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Guignols%20de%20l%27Info%2C%20Les%20-%20Le%20jeu%21%20%281996%29%28CANAL%20%20-%20Philips%29%28FR%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Hieroglyph (1994)(ZYX-Music)(DE) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "3.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Hieroglyph%20%281994%29%28ZYX-Music%29%28DE%29.zip",
    link2: ""
  },
  {
    name: "Hotel Mario (1994)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "122.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Hotel%20Mario%20%281994%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Hotel Mario (1994)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "122.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Hotel%20Mario%20%281994%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Inca (1993)(Coktel Vision - Philips)(EU)(M4)[!][en-de-fr-nl][8100126 50341 698 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "186.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Inca%20%281993%29%28Coktel%20Vision%20-%20Philips%29%28EU%29%28M4%29%5B%21%5D%5Ben-de-fr-nl%5D%5B8100126%2050341%20698%2001%5D.zip",
    link2: ""
  },
  {
    name: "Inca (1993-04-21)(Coktel Vision - Philips)(EU)(M4)[en-de-fr-nl][FPD Testing - Phase 1] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "179.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Inca%20%281993-04-21%29%28Coktel%20Vision%20-%20Philips%29%28EU%29%28M4%29%5Ben-de-fr-nl%5D%5BFPD%20Testing%20-%20Phase%201%5D.zip",
    link2: ""
  },
  {
    name: "Inca (1994)(Coktel Vision - Philips)(EU)(M4)[!][en-de-fr-nl][8100126V206 50399445 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "185.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Inca%20%281994%29%28Coktel%20Vision%20-%20Philips%29%28EU%29%28M4%29%5B%21%5D%5Ben-de-fr-nl%5D%5B8100126V206%2050399445%2001%5D.zip",
    link2: ""
  },
  {
    name: "Inca (1994)(Coktel Vision - Philips)(EU)(M4)[!][es-fr-it-pt] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "182.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Inca%20%281994%29%28Coktel%20Vision%20-%20Philips%29%28EU%29%28M4%29%5B%21%5D%5Bes-fr-it-pt%5D.zip",
    link2: ""
  },
  {
    name: "International Tennis Open (1993)(Pathe - Philips)(EU-US)(en-fr)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "176.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/International%20Tennis%20Open%20%281993%29%28Pathe%20-%20Philips%29%28EU-US%29%28en-fr%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "International Tennis Open v1.01 (1994)(Pathe - Philips)(IT)(en-it)[2 players] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "171.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/International%20Tennis%20Open%20v1.01%20%281994%29%28Pathe%20-%20Philips%29%28IT%29%28en-it%29%5B2%20players%5D.zip",
    link2: ""
  },
  {
    name: "International Tennis Open v2.01 (1993)(Pathe - Philips)(ES)(en-es) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "182.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/International%20Tennis%20Open%20v2.01%20%281993%29%28Pathe%20-%20Philips%29%28ES%29%28en-es%29.zip",
    link2: ""
  },
  {
    name: "International Tennis Open v3.01 (1993)(Pathe - Philips)(DE)(en-de)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "179.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/International%20Tennis%20Open%20v3.01%20%281993%29%28Pathe%20-%20Philips%29%28DE%29%28en-de%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "International Tennis Open v3.01 (1994)(Pathe - Philips)(DE)(en-de)[2 players] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "179.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/International%20Tennis%20Open%20v3.01%20%281994%29%28Pathe%20-%20Philips%29%28DE%29%28en-de%29%5B2%20players%5D.zip",
    link2: ""
  },
  {
    name: "International Tennis Open v3.03 (1994)(Pathe - Philips)(EU)(en-fr)[!][2 players] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "181.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/International%20Tennis%20Open%20v3.03%20%281994%29%28Pathe%20-%20Philips%29%28EU%29%28en-fr%29%5B%21%5D%5B2%20players%5D.zip",
    link2: ""
  },
  {
    name: "International Tennis Open v3.03 (1994)(Philips)(US)(en-fr)[!][2 players] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "181.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/International%20Tennis%20Open%20v3.03%20%281994%29%28Philips%29%28US%29%28en-fr%29%5B%21%5D%5B2%20players%5D.zip",
    link2: ""
  },
  {
    name: "Jack Sprite vs. The Crimson Ghost (2002)(Good Deal Games - Oldergames) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "189.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Jack%20Sprite%20vs.%20The%20Crimson%20Ghost%20%282002%29%28Good%20Deal%20Games%20-%20Oldergames%29.zip",
    link2: ""
  },
  {
    name: "Jeopardy! (1994)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "172.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Jeopardy%21%20%281994%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Jigsaw - The Ultimate Electronic Challenge (1992)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "95.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Jigsaw%20-%20The%20Ultimate%20Electronic%20Challenge%20%281992%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Joker's Wild! Jr., The (1994)(Philips)(US) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "337.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Joker%27s%20Wild%21%20Jr.%2C%20The%20%281994%29%28Philips%29%28US%29.zip",
    link2: ""
  },
  {
    name: "Joker's Wild!, The (1994)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "348.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Joker%27s%20Wild%21%2C%20The%20%281994%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Kether v3.08 (1993)(Philips)(DE)(en-de) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "136.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Kether%20v3.08%20%281993%29%28Philips%29%28DE%29%28en-de%29.zip",
    link2: ""
  },
  {
    name: "Kether v3.09 (1993)(Philips)(EU)(en-fr) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "136.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Kether%20v3.09%20%281993%29%28Philips%29%28EU%29%28en-fr%29.zip",
    link2: ""
  },
  {
    name: "Kether v3.09 (1993)(Philips)(EU)(en-fr)[a] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "136.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Kether%20v3.09%20%281993%29%28Philips%29%28EU%29%28en-fr%29%5Ba%5D.zip",
    link2: ""
  },
  {
    name: "Kether v3.11 (1994)(Philips)(DE)(en-de)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "136.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Kether%20v3.11%20%281994%29%28Philips%29%28DE%29%28en-de%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Kether v3.11 (1994)(Philips)(EU)(en-fr)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "136.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Kether%20v3.11%20%281994%29%28Philips%29%28EU%29%28en-fr%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Kether v3.11 (1994)(Philips)(US)(en-fr) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "136.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Kether%20v3.11%20%281994%29%28Philips%29%28US%29%28en-fr%29.zip",
    link2: ""
  },
  {
    name: "Kether v3.12 (1994)(Philips)(NL)(en-nl) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "136.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Kether%20v3.12%20%281994%29%28Philips%29%28NL%29%28en-nl%29.zip",
    link2: ""
  },
  {
    name: "Kingdom - Shadoan (1996)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "589.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Kingdom%20-%20Shadoan%20%281996%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Kingdom - The Far Reaches (1995)(Philips)(US)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "535.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Kingdom%20-%20The%20Far%20Reaches%20%281995%29%28Philips%29%28US%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "L'Ange et le Demon (1993)(Philips)(FR) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "256.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/L%27Ange%20et%20le%20Demon%20%281993%29%28Philips%29%28FR%29.zip",
    link2: ""
  },
  {
    name: "L'Open de Palm Springs (1992)(Philips)(FR) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "120.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/L%27Open%20de%20Palm%20Springs%20%281992%29%28Philips%29%28FR%29.zip",
    link2: ""
  },
  {
    name: "Labyrinth of Crete (1995)(Philips)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "145.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Labyrinth%20of%20Crete%20%281995%29%28Philips%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Laser Lords (1992)(Philips)(US)[07420911 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "370.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Laser%20Lords%20%281992%29%28Philips%29%28US%29%5B07420911%2001%5D.zip",
    link2: ""
  },
  {
    name: "Laser Lords (1992)(Philips)(US)[3106900742 50273 097 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "370.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Laser%20Lords%20%281992%29%28Philips%29%28US%29%5B3106900742%2050273%20097%2001%5D.zip",
    link2: ""
  },
  {
    name: "Last Bounty Hunter, The (1996)(Philips)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "294.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Last%20Bounty%20Hunter%2C%20The%20%281996%29%28Philips%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "Lemmings (1994)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "33.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Lemmings%20%281994%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Lingo v1.07 (1995)(Philips)(NL)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "46.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Lingo%20v1.07%20%281995%29%28Philips%29%28NL%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Link - De Gezichten Van Het Kwaad (1993)(Philips)(NL)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "126.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Link%20-%20De%20Gezichten%20Van%20Het%20Kwaad%20%281993%29%28Philips%29%28NL%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Link - Die Fratzen des Boesen (1993)(Philips)(DE)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "126.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Link%20-%20Die%20Fratzen%20des%20Boesen%20%281993%29%28Philips%29%28DE%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Link - The Faces of Evil (1993)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "126.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Link%20-%20The%20Faces%20of%20Evil%20%281993%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Link - The Faces of Evil (1993)(Philips)(FR) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "126.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Link%20-%20The%20Faces%20of%20Evil%20%281993%29%28Philips%29%28FR%29.zip",
    link2: ""
  },
  {
    name: "Litil Divil (1994)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "141.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Litil%20Divil%20%281994%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Litil Divil (1994)(Philips)(US)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "141.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Litil%20Divil%20%281994%29%28Philips%29%28US%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Lords of the Rising Sun (1992)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "145.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Lords%20of%20the%20Rising%20Sun%20%281992%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Lost Eden (1995)(Philips)(DE)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "501.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Lost%20Eden%20%281995%29%28Philips%29%28DE%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Lost Eden (1995)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "494.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Lost%20Eden%20%281995%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Lost Eden (1995)(Philips)(NL)(M4)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "496.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Lost%20Eden%20%281995%29%28Philips%29%28NL%29%28M4%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Lost Ride, The (1998)(Philips)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "227.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Lost%20Ride%2C%20The%20%281998%29%28Philips%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Mad Dog 2 - le Tresor Perdu (1996)(Philips)(FR)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "302.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mad%20Dog%202%20-%20le%20Tresor%20Perdu%20%281996%29%28Philips%29%28FR%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Mad Dog II - the Lost Gold (1995)(Philips)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "299.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mad%20Dog%20II%20-%20the%20Lost%20Gold%20%281995%29%28Philips%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Mad Dog McCree (1994)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "260.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mad%20Dog%20McCree%20%281994%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Mad Dog McCree (1994)(Philips)(US)[DVC][05820818 N01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "260.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mad%20Dog%20McCree%20%281994%29%28Philips%29%28US%29%5BDVC%5D%5B05820818%20N01%5D.zip",
    link2: ""
  },
  {
    name: "Mad Dog McCree (1994)(Philips)(US)[DVC][05820826 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "260.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mad%20Dog%20McCree%20%281994%29%28Philips%29%28US%29%5BDVC%5D%5B05820826%2001%5D.zip",
    link2: ""
  },
  {
    name: "Magic Eraser (1994)(ZYX-Music)(DE) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "48.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Magic%20Eraser%20%281994%29%28ZYX-Music%29%28DE%29.zip",
    link2: ""
  },
  {
    name: "Making the Grade v0.90 (1994)(Philips)(EU)[pre-release][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "564.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Making%20the%20Grade%20v0.90%20%281994%29%28Philips%29%28EU%29%5Bpre-release%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Marco Polo (1995)(Philips)(EU)(Disc 1 of 2)[!][The Game] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "452.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Marco%20Polo%20%281995%29%28Philips%29%28EU%29%28Disc%201%20of%202%29%5B%21%5D%5BThe%20Game%5D.zip",
    link2: ""
  },
  {
    name: "Marco Polo (1995)(Philips)(EU)(Disc 2 of 2)[!][The Documentation] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "133.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Marco%20Polo%20%281995%29%28Philips%29%28EU%29%28Disc%202%20of%202%29%5B%21%5D%5BThe%20Documentation%5D.zip",
    link2: ""
  },
  {
    name: "Marco Polo (1995)(Philips)(FR)(Disc 1 of 2)[Le Jeu] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "425.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Marco%20Polo%20%281995%29%28Philips%29%28FR%29%28Disc%201%20of%202%29%5BLe%20Jeu%5D.zip",
    link2: ""
  },
  {
    name: "Marco Polo (1995)(Philips)(FR)(Disc 2 of 2)[La Documentation] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "136.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Marco%20Polo%20%281995%29%28Philips%29%28FR%29%28Disc%202%20of%202%29%5BLa%20Documentation%5D.zip",
    link2: ""
  },
  {
    name: "Master Labyrinth v1.06 (1995)(Pack-In-Video)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "257.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Master%20Labyrinth%20v1.06%20%281995%29%28Pack-In-Video%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Mega Maze v1.06 (1994)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "17.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mega%20Maze%20v1.06%20%281994%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Mega Maze v1.06 (1994)(Philips)(US) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "17.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mega%20Maze%20v1.06%20%281994%29%28Philips%29%28US%29.zip",
    link2: ""
  },
  {
    name: "Merlin's Apprentice v1.1 (1995)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "94.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Merlin%27s%20Apprentice%20v1.1%20%281995%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Merlin's Apprentice v1.2 (1995)(Philips)(US) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "94.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Merlin%27s%20Apprentice%20v1.2%20%281995%29%28Philips%29%28US%29.zip",
    link2: ""
  },
  {
    name: "Micro Machines (1995)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "112.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Micro%20Machines%20%281995%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Mutant Rampage - Bodyslam (1994)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "263.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mutant%20Rampage%20-%20Bodyslam%20%281994%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Mutant Rampage - Bodyslam (1994)(Philips)(US)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "263.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mutant%20Rampage%20-%20Bodyslam%20%281994%29%28Philips%29%28US%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Myst (1996)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "319.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Myst%20%281996%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Mystic Midway - Phantom Express (1993)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "172.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mystic%20Midway%20-%20Phantom%20Express%20%281993%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Mystic Midway - Rest in Pieces (1992)(Philips)(EU-US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "67.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mystic%20Midway%20-%20Rest%20in%20Pieces%20%281992%29%28Philips%29%28EU-US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Mystic Midway - Rest in Pieces (1992)(Philips)(JP) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "67.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Mystic%20Midway%20-%20Rest%20in%20Pieces%20%281992%29%28Philips%29%28JP%29.zip",
    link2: ""
  },
  {
    name: "NFL Football Trivia Challenge '94-'95 Edition (1994)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "360.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/NFL%20Football%20Trivia%20Challenge%20%2794-%2795%20Edition%20%281994%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "NFL Football Trivia Challenge (1993)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "363.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/NFL%20Football%20Trivia%20Challenge%20%281993%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "NFL Hall of Fame Football (1994)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "623.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/NFL%20Hall%20of%20Fame%20Football%20%281994%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Othello (1993)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "257.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Othello%20%281993%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Pac-Panic (1995)(Namco - Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "16.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Pac-Panic%20%281995%29%28Namco%20-%20Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Palm Springs Open, Die (1992)(Philips)(DE)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "123.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Palm%20Springs%20Open%2C%20Die%20%281992%29%28Philips%29%28DE%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Palm Springs Open, The (1991)(Philips)(EU-US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "131.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Palm%20Springs%20Open%2C%20The%20%281991%29%28Philips%29%28EU-US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Palm Springs Open, The (1991)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "131.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Palm%20Springs%20Open%2C%20The%20%281991%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Palm Springs Open, The (1992)(Philips)(IT) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "115.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Palm%20Springs%20Open%2C%20The%20%281992%29%28Philips%29%28IT%29.zip",
    link2: ""
  },
  {
    name: "Pinball (1992)(Philips)(US)[!][3106900342 50238 037 03] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "32.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Pinball%20%281992%29%28Philips%29%28US%29%5B%21%5D%5B3106900342%2050238%20037%2003%5D.zip",
    link2: ""
  },
  {
    name: "Pinball (1992)(Philips)(US)[!][3106900342 50238 037 04] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "33.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Pinball%20%281992%29%28Philips%29%28US%29%5B%21%5D%5B3106900342%2050238%20037%2004%5D.zip",
    link2: ""
  },
  {
    name: "Plunderball (2002)(Good Deal Games - Oldergames) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "142.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Plunderball%20%282002%29%28Good%20Deal%20Games%20-%20Oldergames%29.zip",
    link2: ""
  },
  {
    name: "Power Hitter (1992)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "148.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Power%20Hitter%20%281992%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Power Hitter (1993)(Philips)(US)[08120804 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "148.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Power%20Hitter%20%281993%29%28Philips%29%28US%29%5B08120804%2001%5D.zip",
    link2: ""
  },
  {
    name: "Power Hitter (1993)(Philips)(US)[08120908 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "148.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Power%20Hitter%20%281993%29%28Philips%29%28US%29%5B08120908%2001%5D.zip",
    link2: ""
  },
  {
    name: "Rise of the Robots (1995)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "112.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Rise%20of%20the%20Robots%20%281995%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Sargon Chess (1992)(Philips)(US)[!][690 030-2 50253 278 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "92.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Sargon%20Chess%20%281992%29%28Philips%29%28US%29%5B%21%5D%5B690%20030-2%2050253%20278%2001%5D.zip",
    link2: ""
  },
  {
    name: "Sargon Chess (1992)(Philips)(US)[03020320 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "92.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Sargon%20Chess%20%281992%29%28Philips%29%28US%29%5B03020320%2001%5D.zip",
    link2: ""
  },
  {
    name: "Scotland Yard - Interactif v1.04 (1994)(Philips)(FR) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "114.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Scotland%20Yard%20-%20Interactif%20v1.04%20%281994%29%28Philips%29%28FR%29.zip",
    link2: ""
  },
  {
    name: "Scotland Yard - Interactive v1.03 (1994)(Philips)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "112.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Scotland%20Yard%20-%20Interactive%20v1.03%20%281994%29%28Philips%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "Scotland Yard - Interactive v1.09 (1993)(Philips)(DE)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "118.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Scotland%20Yard%20-%20Interactive%20v1.09%20%281993%29%28Philips%29%28DE%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Secret Mission v1.03 (1996)(Philips)(DE) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "163.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Secret%20Mission%20v1.03%20%281996%29%28Philips%29%28DE%29.zip",
    link2: ""
  },
  {
    name: "Secret Mission v1.03 (1996)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "162.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Secret%20Mission%20v1.03%20%281996%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Secret Mission v1.03 (1996)(Philips)(NL) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "164.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Secret%20Mission%20v1.03%20%281996%29%28Philips%29%28NL%29.zip",
    link2: ""
  },
  {
    name: "Shaolin's Road (1995)(Philips)(EU)(en-fr) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "171.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Shaolin%27s%20Road%20%281995%29%28Philips%29%28EU%29%28en-fr%29.zip",
    link2: ""
  },
  {
    name: "Space Ace (1994)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "359.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Space%20Ace%20%281994%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Space Ace (1994)(Philips)(US)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "359.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Space%20Ace%20%281994%29%28Philips%29%28US%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Space Ranger (2002)(Good Deal Games - Oldergames) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "26.2M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Space%20Ranger%20%282002%29%28Good%20Deal%20Games%20-%20Oldergames%29.zip",
    link2: ""
  },
  {
    name: "Sport Freaks (1996)(Philips)(NL) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "18.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Sport%20Freaks%20%281996%29%28Philips%29%28NL%29.zip",
    link2: ""
  },
  {
    name: "Striker Pro (1994)(Philips)(EU)(M6)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "19.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Striker%20Pro%20%281994%29%28Philips%29%28EU%29%28M6%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Striker Pro (1994)(Philips)(US)(M6) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "19.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Striker%20Pro%20%281994%29%28Philips%29%28US%29%28M6%29.zip",
    link2: ""
  },
  {
    name: "Strip Poker Live (1995)(Green Pig Production)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "414.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Strip%20Poker%20Live%20%281995%29%28Green%20Pig%20Production%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "Strip-Poker Pro (1994)(Hot Stage)(FR)(en-fr) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "155.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Strip-Poker%20Pro%20%281994%29%28Hot%20Stage%29%28FR%29%28en-fr%29.zip",
    link2: ""
  },
  {
    name: "Tangram - The Ultimate Chinese Game (1992)(Philips)(EU)(M8)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "159.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Tangram%20-%20The%20Ultimate%20Chinese%20Game%20%281992%29%28Philips%29%28EU%29%28M8%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Tetris (1992)(Philips)(EU-US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "338.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Tetris%20%281992%29%28Philips%29%28EU-US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Tetsuo Gaiden (1997)(New Frontier)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "135.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Tetsuo%20Gaiden%20%281997%29%28New%20Frontier%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "TextTiles v1 (1992)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "61.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/TextTiles%20v1%20%281992%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Thunder in Paradise (1995)(Philips)(EU)(Disc 1 of 2)[!][The Game][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "598.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Thunder%20in%20Paradise%20%281995%29%28Philips%29%28EU%29%28Disc%201%20of%202%29%5B%21%5D%5BThe%20Game%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Thunder in Paradise (1995)(Philips)(EU)(Disc 2 of 2)[!][The Episode][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "658.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Thunder%20in%20Paradise%20%281995%29%28Philips%29%28EU%29%28Disc%202%20of%202%29%5B%21%5D%5BThe%20Episode%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Thunder in Paradise (1995)(Philips)(US)(Disc 1 of 2)[!][The Game][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "598.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Thunder%20in%20Paradise%20%281995%29%28Philips%29%28US%29%28Disc%201%20of%202%29%5B%21%5D%5BThe%20Game%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Thunder in Paradise (1995)(Philips)(US)(Disc 2 of 2)[!][The Episode][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "660.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Thunder%20in%20Paradise%20%281995%29%28Philips%29%28US%29%28Disc%202%20of%202%29%5B%21%5D%5BThe%20Episode%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Thunder in Paradise (1996)(Philips)(DE)(Disc 1 of 2)[Das Spiel][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "596.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Thunder%20in%20Paradise%20%281996%29%28Philips%29%28DE%29%28Disc%201%20of%202%29%5BDas%20Spiel%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Ultimate Noah's Ark, The (1994)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "191.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Ultimate%20Noah%27s%20Ark%2C%20The%20%281994%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Ultimate Noah's Ark, The (1994)(Philips)(US) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "191.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Ultimate%20Noah%27s%20Ark%2C%20The%20%281994%29%28Philips%29%28US%29.zip",
    link2: ""
  },
  {
    name: "Ultra CD-i Soccer (1997)(Philips)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "8.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Ultra%20CD-i%20Soccer%20%281997%29%28Philips%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Vegas Girls (1995)(Status)(EU)[adult, access code 1234] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "465.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Vegas%20Girls%20%281995%29%28Status%29%28EU%29%5Badult%2C%20access%20code%201234%5D.zip",
    link2: ""
  },
  {
    name: "Video Grand Prix Speedway (1993)(Philips)(FR) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "289.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Video%20Grand%20Prix%20Speedway%20%281993%29%28Philips%29%28FR%29.zip",
    link2: ""
  },
  {
    name: "Video Speedway - The Ultimate Racing Experience (1993)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "284.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Video%20Speedway%20-%20The%20Ultimate%20Racing%20Experience%20%281993%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Video Speedway - The Ultimate Racing Experience (1993)(Philips)(US) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "284.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Video%20Speedway%20-%20The%20Ultimate%20Racing%20Experience%20%281993%29%28Philips%29%28US%29.zip",
    link2: ""
  },
  {
    name: "Voetbal v1.04 (1994)(Philips)(NL)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "499.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Voetbal%20v1.04%20%281994%29%28Philips%29%28NL%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Voyeur ...don't get caught (1993)(Philips)(EU)[!][adult, access code 3333] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "403.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Voyeur%20...don%27t%20get%20caught%20%281993%29%28Philips%29%28EU%29%5B%21%5D%5Badult%2C%20access%20code%203333%5D.zip",
    link2: ""
  },
  {
    name: "Voyeur ...don't get caught (1993)(Philips)(US)[adult, access code 3333][11220909 01] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "403.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Voyeur%20...don%27t%20get%20caught%20%281993%29%28Philips%29%28US%29%5Badult%2C%20access%20code%203333%5D%5B11220909%2001%5D.zip",
    link2: ""
  },
  {
    name: "Voyeur ...don't get caught (1993)(Philips)(US)[adult, access code 3333][11220928 03] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "405.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Voyeur%20...don%27t%20get%20caught%20%281993%29%28Philips%29%28US%29%5Badult%2C%20access%20code%203333%5D%5B11220928%2003%5D.zip",
    link2: ""
  },
  {
    name: "Voyeur ...lass Dich nicht erwischen! (1995)(Philips)(DE)[!][adult, access code 3333] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "403.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Voyeur%20...lass%20Dich%20nicht%20erwischen%21%20%281995%29%28Philips%29%28DE%29%5B%21%5D%5Badult%2C%20access%20code%203333%5D.zip",
    link2: ""
  },
  {
    name: "Voyeur ...soyez prudent (1995)(Philips)(FR)[adult, access code 3333] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "402.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Voyeur%20...soyez%20prudent%20%281995%29%28Philips%29%28FR%29%5Badult%2C%20access%20code%203333%5D.zip",
    link2: ""
  },
  {
    name: "Wacky World of Minature Golf, The - With Eugene Levy (1993)(Philips)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "139.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Wacky%20World%20of%20Minature%20Golf%2C%20The%20-%20With%20Eugene%20Levy%20%281993%29%28Philips%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "Wacky World of Minature Golf, The - With Eugene Levy (1993)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "139.3M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Wacky%20World%20of%20Minature%20Golf%2C%20The%20-%20With%20Eugene%20Levy%20%281993%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Whack a Bubble (1997)(New Frontier)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "67.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Whack%20a%20Bubble%20%281997%29%28New%20Frontier%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "Who Shot Johnny Rock (1995)(Philips)(EU)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "280.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Who%20Shot%20Johnny%20Rock%20%281995%29%28Philips%29%28EU%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Who Shot Johnny Rock (1995)(Philips)(US)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "280.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Who%20Shot%20Johnny%20Rock%20%281995%29%28Philips%29%28US%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Wimbledon Challenge - The official Wimbledon quiz game (1993)(Philips)(EU)(M6) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "237.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Wimbledon%20Challenge%20-%20The%20official%20Wimbledon%20quiz%20game%20%281993%29%28Philips%29%28EU%29%28M6%29.zip",
    link2: ""
  },
  {
    name: "Wordplay (1994)(Philips)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "379.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Wordplay%20%281994%29%28Philips%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "World Cup Golf (1995)(Philips)(EU)[!][DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "442.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/World%20Cup%20Golf%20%281995%29%28Philips%29%28EU%29%5B%21%5D%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Zaak van Sam, De - Interactieve Detective (1997)(NOB-Interactive)(NL)[DVC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "467.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zaak%20van%20Sam%2C%20De%20-%20Interactieve%20Detective%20%281997%29%28NOB-Interactive%29%28NL%29%5BDVC%5D.zip",
    link2: ""
  },
  {
    name: "Zelda - De toverstaf van Gamelon (1993)(Philips)(NL) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "122.4M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zelda%20-%20De%20toverstaf%20van%20Gamelon%20%281993%29%28Philips%29%28NL%29.zip",
    link2: ""
  },
  {
    name: "Zelda - Der Zauberstab von Gamelon (1993)(Philips)(DE) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "122.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zelda%20-%20Der%20Zauberstab%20von%20Gamelon%20%281993%29%28Philips%29%28DE%29.zip",
    link2: ""
  },
  {
    name: "Zelda - The Wand of Gamelon (1993)(Philips)(EU)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "122.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zelda%20-%20The%20Wand%20of%20Gamelon%20%281993%29%28Philips%29%28EU%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Zelda - The Wand of Gamelon (1993)(Philips)(FR) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "122.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zelda%20-%20The%20Wand%20of%20Gamelon%20%281993%29%28Philips%29%28FR%29.zip",
    link2: ""
  },
  {
    name: "Zelda - The Wand of Gamelon (1993)(Philips)(US) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "122.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zelda%20-%20The%20Wand%20of%20Gamelon%20%281993%29%28Philips%29%28US%29.zip",
    link2: ""
  },
  {
    name: "Zelda's Adventure (1995)(Philips)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "188.8M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zelda%27s%20Adventure%20%281995%29%28Philips%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "Zenith (1997)(Philips)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "8.6M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zenith%20%281997%29%28Philips%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "Zombie Dinos de la Planete Zeltoide (1993)(Philips)(FR) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "426.7M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zombie%20Dinos%20de%20la%20Planete%20Zeltoide%20%281993%29%28Philips%29%28FR%29.zip",
    link2: ""
  },
  {
    name: "Zombie Dinos from Planet Zeltoid (1992)(Philips)(EU) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "424.9M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zombie%20Dinos%20from%20Planet%20Zeltoid%20%281992%29%28Philips%29%28EU%29.zip",
    link2: ""
  },
  {
    name: "Zombie Dinos from Planet Zeltoid (1992)(Philips)(US)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "424.0M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zombie%20Dinos%20from%20Planet%20Zeltoid%20%281992%29%28Philips%29%28US%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "Zombie Dinos van de Planeet Zeltoid (1993)(Philips)(NL) ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "426.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zombie%20Dinos%20van%20de%20Planeet%20Zeltoid%20%281993%29%28Philips%29%28NL%29.zip",
    link2: ""
  },
  {
    name: "Zombie Dinos vom Planeten Zeltoid (1994)(Philips)(DE)[!] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "427.1M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/Zombie%20Dinos%20vom%20Planeten%20Zeltoid%20%281994%29%28Philips%29%28DE%29%5B%21%5D.zip",
    link2: ""
  },
  {
    name: "affaire Morlov, L' (1996)(Titus)(EU)(en-fr)[!][The Morlov Affair][CD-i-PC] ",
    image: "https://i.postimg.cc/yx5Ycp1S/Philips-CD-i.png",
    size: "255.5M",
    link1: "https://archive.org/download/philips-cd-i_tosec-2012-07-13/Philips%20CD-i%20-%20Games%20%28TOSEC-v2012-07-13%29/affaire%20Morlov%2C%20L%27%20%281996%29%28Titus%29%28EU%29%28en-fr%29%5B%21%5D%5BThe%20Morlov%20Affair%5D%5BCD-i-PC%5D.zip",
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

