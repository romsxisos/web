const roms = [
  {
    name: "007 - Agent Under Fire (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/007%20-%20Agent%20Under%20Fire%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "007 - Agent Under Fire (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/007%20-%20Agent%20Under%20Fire%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "007 - Agent Under Fire (USA) (Beta) (2002-01-25)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/007%20-%20Agent%20Under%20Fire%20%28USA%29%20%28Beta%29%20%282002-01-25%29.zip",
    link2: ""
  },
  {
    name: "007 - Agent Under Fire (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/007%20-%20Agent%20Under%20Fire%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "007 - Everything or Nothing (Europe) (En,It,Nl,Sv)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/007%20-%20Everything%20or%20Nothing%20%28Europe%29%20%28En%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "007 - Everything or Nothing (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/007%20-%20Everything%20or%20Nothing%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "007 - From Russia with Love (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/007%20-%20From%20Russia%20with%20Love%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "007 - From Russia with Love (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/007%20-%20From%20Russia%20with%20Love%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "007 - Nightfire (Europe) (En,It,Nl,Sv)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/007%20-%20Nightfire%20%28Europe%29%20%28En%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "007 - Nightfire (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/007%20-%20Nightfire%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "1080 Avalanche (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "854.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/1080%20Avalanche%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "1080 Avalanche (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "852.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/1080%20Avalanche%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "18 Wheeler - American Pro Trucker (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "149.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/18%20Wheeler%20-%20American%20Pro%20Trucker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "18 Wheeler - American Pro Trucker (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "149.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/18%20Wheeler%20-%20American%20Pro%20Trucker%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "2002 FIFA World Cup (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "904.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/2002%20FIFA%20World%20Cup%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "2002 FIFA World Cup (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "904.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/2002%20FIFA%20World%20Cup%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "2002 FIFA World Cup (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "988.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/2002%20FIFA%20World%20Cup%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "4x4 Evo 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "238.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/4x4%20Evo%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Ace Golf (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ace%20Golf%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Action Replay for GameCube (Europe) (En,Fr,De,Es,It,Pt) (Unl) (v1.14b)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20for%20GameCube%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29%20%28Unl%29%20%28v1.14b%29.zip",
    link2: ""
  },
  {
    name: "Action Replay for GameCube (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20for%20GameCube%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Action Replay for GameCube (Europe) (Unl) (v1.0E)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "858.5 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20for%20GameCube%20%28Europe%29%20%28Unl%29%20%28v1.0E%29.zip",
    link2: ""
  },
  {
    name: "Action Replay for GameCube (USA) (En,Fr,De,Es,It,Pt) (Unl) (v1.08)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "998.4 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20for%20GameCube%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29%20%28Unl%29%20%28v1.08%29.zip",
    link2: ""
  },
  {
    name: "Action Replay for GameCube (USA) (Unl) (v1.06)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "935.3 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20for%20GameCube%20%28USA%29%20%28Unl%29%20%28v1.06%29.zip",
    link2: ""
  },
  {
    name: "Action Replay for GameCube (USA) (Unl) (v1.12)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20for%20GameCube%20%28USA%29%20%28Unl%29%20%28v1.12%29.zip",
    link2: ""
  },
  {
    name: "Action Replay for GameCube (USA) (Unl) (v1.20)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20for%20GameCube%20%28USA%29%20%28Unl%29%20%28v1.20%29.zip",
    link2: ""
  },
  {
    name: "Action Replay Max (USA) (En,Fr,De,Es,It,Pt) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20Max%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Action Replay Ultimate Codes for Use with Enter the Matrix (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "515.9 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20Ultimate%20Codes%20for%20Use%20with%20Enter%20the%20Matrix%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Action Replay Ultimate Codes for Use with Final Fantasy - Crystal Chronicles (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "777.1 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20Ultimate%20Codes%20for%20Use%20with%20Final%20Fantasy%20-%20Crystal%20Chronicles%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Action Replay Ultimate Codes for Use with Soul Calibur II (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "934.1 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20Ultimate%20Codes%20for%20Use%20with%20Soul%20Calibur%20II%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Action Replay Ultimate Codes for Use with The Legend of Zelda - Twilight Princess (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "864.1 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20Ultimate%20Codes%20for%20Use%20with%20The%20Legend%20of%20Zelda%20-%20Twilight%20Princess%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Action Replay Ultimate Codes for Use with Wario World (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "361.8 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20Ultimate%20Codes%20for%20Use%20with%20Wario%20World%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Action Replay Ultimate Codes Greatest Hits - Best Buy Achievers Weekend 2004 (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20Ultimate%20Codes%20Greatest%20Hits%20-%20Best%20Buy%20Achievers%20Weekend%202004%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Action Replay Ultimate Codes Max Pack (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "782.9 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Action%20Replay%20Ultimate%20Codes%20Max%20Pack%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Advance Game Port (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Advance%20Game%20Port%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Advance Game Port (USA) (Unl) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Advance%20Game%20Port%20%28USA%29%20%28Unl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Advance Game Port (USA, Europe) (Unl) (Rev 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "4.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Advance%20Game%20Port%20%28USA%2C%20Europe%29%20%28Unl%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Advance Game Port (USA, Europe) (Unl) (Rev 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "4.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Advance%20Game%20Port%20%28USA%2C%20Europe%29%20%28Unl%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Aggressive Inline (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "677.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Aggressive%20Inline%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Aggressive Inline (Europe) (En,Fr,De,Es) (Beta) (2002-07-29)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "677.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Aggressive%20Inline%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29%20%28Beta%29%20%282002-07-29%29.zip",
    link2: ""
  },
  {
    name: "Aggressive Inline (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "668.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Aggressive%20Inline%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Aging Disc DOL-USA (Japan) (Rev 7)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Aging%20Disc%20DOL-USA%20%28Japan%29%20%28Rev%207%29.zip",
    link2: ""
  },
  {
    name: "Alien Hominid (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "190.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Alien%20Hominid%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "All-Star Baseball 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "440.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/All-Star%20Baseball%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "All-Star Baseball 2003 featuring Derek Jeter (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "853.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/All-Star%20Baseball%202003%20featuring%20Derek%20Jeter%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "All-Star Baseball 2004 featuring Derek Jeter (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/All-Star%20Baseball%202004%20featuring%20Derek%20Jeter%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Amazing Island (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "779.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Amazing%20Island%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "American Chopper 2 - Full Throttle (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "866.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/American%20Chopper%202%20-%20Full%20Throttle%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Animal Crossing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "78.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Animal%20Crossing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Animal Crossing (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "18.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Animal%20Crossing%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Animaniacs - The Great Edgar Hunt (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "968.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Animaniacs%20-%20The%20Great%20Edgar%20Hunt%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Animaniacs - The Great Edgar Hunt (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "968.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Animaniacs%20-%20The%20Great%20Edgar%20Hunt%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Ant Bully, The (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "379.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ant%20Bully%2C%20The%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Aquaman - Battle for Atlantis (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "371.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Aquaman%20-%20Battle%20for%20Atlantis%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Army Men - Air Combat - The Elite Missions (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "761.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Army%20Men%20-%20Air%20Combat%20-%20The%20Elite%20Missions%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Army Men - RTS (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "375.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Army%20Men%20-%20RTS%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Army Men - Sarge's War (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Army%20Men%20-%20Sarge%27s%20War%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Asterix & Obelix XXL (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "576.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Asterix%20%26%20Obelix%20XXL%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "ATV - Quad Power Racing 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "463.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/ATV%20-%20Quad%20Power%20Racing%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "ATV - Quad Power Racing 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "407.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/ATV%20-%20Quad%20Power%20Racing%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Auto Modellista (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "709.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Auto%20Modellista%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Backyard Baseball (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "486.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Backyard%20Baseball%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Backyard Football (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "779.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Backyard%20Football%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Backyard Sports - Baseball 2007 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "416.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Backyard%20Sports%20-%20Baseball%202007%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bad Boys - Miami Takedown (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bad%20Boys%20-%20Miami%20Takedown%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bad Boys II (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "975.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bad%20Boys%20II%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Baldur's Gate - Dark Alliance (Europe) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "801.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Baldur%27s%20Gate%20-%20Dark%20Alliance%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Baldur's Gate - Dark Alliance (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "801.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Baldur%27s%20Gate%20-%20Dark%20Alliance%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Baten Kaitos - Eternal Wings and the Lost Ocean (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Baten%20Kaitos%20-%20Eternal%20Wings%20and%20the%20Lost%20Ocean%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Baten Kaitos - Eternal Wings and the Lost Ocean (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Baten%20Kaitos%20-%20Eternal%20Wings%20and%20the%20Lost%20Ocean%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Baten Kaitos - Eternal Wings and the Lost Ocean (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Baten%20Kaitos%20-%20Eternal%20Wings%20and%20the%20Lost%20Ocean%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Baten Kaitos - Eternal Wings and the Lost Ocean (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Baten%20Kaitos%20-%20Eternal%20Wings%20and%20the%20Lost%20Ocean%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Baten Kaitos Origins (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Baten%20Kaitos%20Origins%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Baten Kaitos Origins (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Baten%20Kaitos%20Origins%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Batman - Dark Tomorrow (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Batman%20-%20Dark%20Tomorrow%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Batman - Dark Tomorrow (USA) (Beta) (2002-08-25)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Batman%20-%20Dark%20Tomorrow%20%28USA%29%20%28Beta%29%20%282002-08-25%29.zip",
    link2: ""
  },
  {
    name: "Batman - Dark Tomorrow (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Batman%20-%20Dark%20Tomorrow%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Batman - Rise of Sin Tzu (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Batman%20-%20Rise%20of%20Sin%20Tzu%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Batman - Rise of Sin Tzu (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Batman%20-%20Rise%20of%20Sin%20Tzu%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Batman - Vengeance (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "635.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Batman%20-%20Vengeance%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Batman - Vengeance (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "629.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Batman%20-%20Vengeance%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Batman Begins (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "851.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Batman%20Begins%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Batman Begins (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "851.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Batman%20Begins%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Battalion Wars (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "742.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Battalion%20Wars%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Battalion Wars (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "678.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Battalion%20Wars%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Beach Spikers - Virtua Beach Volleyball (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "149.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Beach%20Spikers%20-%20Virtua%20Beach%20Volleyball%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Beach Spikers - Virtua Beach Volleyball (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "131.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Beach%20Spikers%20-%20Virtua%20Beach%20Volleyball%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Beyblade VForce - Super Tournament Battle (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "198.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Beyblade%20VForce%20-%20Super%20Tournament%20Battle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Beyblade VForce - Super Tournament Battle (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "124.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Beyblade%20VForce%20-%20Super%20Tournament%20Battle%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Beyond Good & Evil (Europe) (De,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Beyond%20Good%20%26%20Evil%20%28Europe%29%20%28De%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Beyond Good & Evil (Europe) (En,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Beyond%20Good%20%26%20Evil%20%28Europe%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Beyond Good & Evil (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Beyond%20Good%20%26%20Evil%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Beyond Good & Evil (USA) (En,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Beyond%20Good%20%26%20Evil%20%28USA%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Big Air Freestyle (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "706.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Big%20Air%20Freestyle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Big Air Freestyle (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "834.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Big%20Air%20Freestyle%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Big Mutha Truckers (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "528.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Big%20Mutha%20Truckers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Big Mutha Truckers (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "487.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Big%20Mutha%20Truckers%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Billy Hatcher and the Giant Egg (Europe) (Demo)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "344.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Billy%20Hatcher%20and%20the%20Giant%20Egg%20%28Europe%29%20%28Demo%29.zip",
    link2: ""
  },
  {
    name: "Billy Hatcher and the Giant Egg (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "837.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Billy%20Hatcher%20and%20the%20Giant%20Egg%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Billy Hatcher and the Giant Egg (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "761.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Billy%20Hatcher%20and%20the%20Giant%20Egg%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bionicle (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "584.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bionicle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Bionicle (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "584.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bionicle%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bionicle Heroes (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "675.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bionicle%20Heroes%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Black & Bruised (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Black%20%26%20Bruised%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Black & Bruised (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "871.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Black%20%26%20Bruised%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Blood Omen 2 - The Legacy of Kain Series (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Blood%20Omen%202%20-%20The%20Legacy%20of%20Kain%20Series%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Blood Omen 2 - The Legacy of Kain Series (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Blood%20Omen%202%20-%20The%20Legacy%20of%20Kain%20Series%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "BloodRayne (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "878.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/BloodRayne%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "BloodRayne (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "968.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/BloodRayne%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bloody Roar - Primal Fury (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "518.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bloody%20Roar%20-%20Primal%20Fury%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Bloody Roar - Primal Fury (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "517.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bloody%20Roar%20-%20Primal%20Fury%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bloody Roar - Primal Fury (USA) (Beta) (2002-01-08)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "439.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bloody%20Roar%20-%20Primal%20Fury%20%28USA%29%20%28Beta%29%20%282002-01-08%29.zip",
    link2: ""
  },
  {
    name: "Blowout (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "173.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Blowout%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "BMX XXX (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1001.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/BMX%20XXX%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "BMX XXX (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "999.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/BMX%20XXX%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bomberman Generation (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "740.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bomberman%20Generation%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Bomberman Generation (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "642.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bomberman%20Generation%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bomberman Generation (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "642.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bomberman%20Generation%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Bomberman Jetters (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "780.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bomberman%20Jetters%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bonus Powersaves (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "2.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bonus%20Powersaves%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Bratz - Forever Diamondz (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "746.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bratz%20-%20Forever%20Diamondz%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Bratz - Forever Diamondz (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "733.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bratz%20-%20Forever%20Diamondz%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bratz - Rock Angelz (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "889.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bratz%20-%20Rock%20Angelz%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Bratz - Rock Angelz (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "824.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bratz%20-%20Rock%20Angelz%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Buffy the Vampire Slayer - Chaos Bleeds (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Buffy%20the%20Vampire%20Slayer%20-%20Chaos%20Bleeds%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Buffy the Vampire Slayer - Chaos Bleeds (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1020.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Buffy%20the%20Vampire%20Slayer%20-%20Chaos%20Bleeds%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Burnout (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "565.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Burnout%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Burnout (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "565.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Burnout%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Burnout (USA) (Beta) (2002-03-06)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "592.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Burnout%20%28USA%29%20%28Beta%29%20%282002-03-06%29.zip",
    link2: ""
  },
  {
    name: "Burnout 2 - Point of Impact (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "857.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Burnout%202%20-%20Point%20of%20Impact%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Burnout 2 - Point of Impact (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "858.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Burnout%202%20-%20Point%20of%20Impact%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Bust-A-Move 3000 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "61.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Bust-A-Move%203000%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Butt-Ugly Martians - Zoom or Doom! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Butt-Ugly%20Martians%20-%20Zoom%20or%20Doom%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cabela's Big Game Hunter 2005 Adventures (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "589.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cabela%27s%20Big%20Game%20Hunter%202005%20Adventures%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Cabela's Dangerous Hunts 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "885.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cabela%27s%20Dangerous%20Hunts%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Cabela's Outdoor Adventures (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cabela%27s%20Outdoor%20Adventures%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty - Finest Hour (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Call%20of%20Duty%20-%20Finest%20Hour%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty - Finest Hour (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Call%20of%20Duty%20-%20Finest%20Hour%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty 2 - Big Red One (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "846.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Call%20of%20Duty%202%20-%20Big%20Red%20One%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty 2 - Big Red One (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "864.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Call%20of%20Duty%202%20-%20Big%20Red%20One%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Capcom vs. SNK 2 EO (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "226.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Capcom%20vs.%20SNK%202%20EO%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Capcom vs. SNK 2 EO - Millionaire Fighting 2001 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "226.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Capcom%20vs.%20SNK%202%20EO%20-%20Millionaire%20Fighting%202001%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Carmen Sandiego - The Secret of the Stolen Drums (Europe) (De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "833.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Carmen%20Sandiego%20-%20The%20Secret%20of%20the%20Stolen%20Drums%20%28Europe%29%20%28De%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Carmen Sandiego - The Secret of the Stolen Drums (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "862.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Carmen%20Sandiego%20-%20The%20Secret%20of%20the%20Stolen%20Drums%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Carmen Sandiego - The Secret of the Stolen Drums (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "698.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Carmen%20Sandiego%20-%20The%20Secret%20of%20the%20Stolen%20Drums%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Casper - Spirit Dimensions (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "183.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Casper%20-%20Spirit%20Dimensions%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Casper - Spirit Dimensions (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "185.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Casper%20-%20Spirit%20Dimensions%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Castleween (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "429.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Castleween%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Catwoman (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Catwoman%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Catwoman (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Catwoman%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Cel Damage (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "347.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cel%20Damage%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Cel Damage (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "347.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cel%20Damage%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Chaos Field (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "393.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Chaos%20Field%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Charlie and the Chocolate Factory (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1011.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Charlie%20and%20the%20Chocolate%20Factory%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Charlie and the Chocolate Factory (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "999.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Charlie%20and%20the%20Chocolate%20Factory%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Charlie's Angels (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Charlie%27s%20Angels%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Charlie's Angels (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Charlie%27s%20Angels%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Chibi-Robo! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "470.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Chibi-Robo%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Chibi-Robo! (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "324.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Chibi-Robo%21%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Chronicles of Narnia, The - The Lion, the Witch and the Wardrobe (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Chronicles%20of%20Narnia%2C%20The%20-%20The%20Lion%2C%20the%20Witch%20and%20the%20Wardrobe%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Chronicles of Narnia, The - The Lion, the Witch and the Wardrobe (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1003.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Chronicles%20of%20Narnia%2C%20The%20-%20The%20Lion%2C%20the%20Witch%20and%20the%20Wardrobe%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "City Racer (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "674.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/City%20Racer%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Cocoto Funfair (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "366.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cocoto%20Funfair%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cocoto Kart Racer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "353.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cocoto%20Kart%20Racer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cocoto Platform Jumper (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "320.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cocoto%20Platform%20Jumper%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Codename - Kids Next Door - Operation - V.I.D.E.O.G.A.M.E. (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Codename%20-%20Kids%20Next%20Door%20-%20Operation%20-%20V.I.D.E.O.G.A.M.E.%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Codename - Kids Next Door - Operation - V.I.D.E.O.G.A.M.E. (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Codename%20-%20Kids%20Next%20Door%20-%20Operation%20-%20V.I.D.E.O.G.A.M.E.%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Conan (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1004.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Conan%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Conan (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Conan%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Conflict - Desert Storm (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "860.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Conflict%20-%20Desert%20Storm%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Conflict - Desert Storm (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "867.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Conflict%20-%20Desert%20Storm%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Conflict - Desert Storm (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "867.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Conflict%20-%20Desert%20Storm%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Conflict - Desert Storm II (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Conflict%20-%20Desert%20Storm%20II%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Conflict - Desert Storm II - Back to Baghdad (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "999.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Conflict%20-%20Desert%20Storm%20II%20-%20Back%20to%20Baghdad%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Crash Bandicoot - The Wrath of Cortex (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "467.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Crash%20Bandicoot%20-%20The%20Wrath%20of%20Cortex%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Crash Bandicoot - The Wrath of Cortex (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "493.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Crash%20Bandicoot%20-%20The%20Wrath%20of%20Cortex%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Crash Bandicoot - The Wrath of Cortex (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "451.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Crash%20Bandicoot%20-%20The%20Wrath%20of%20Cortex%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Crash Nitro Kart (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Crash%20Nitro%20Kart%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Crash Nitro Kart (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Crash%20Nitro%20Kart%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Crash Tag Team Racing (Europe, Australia)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Crash%20Tag%20Team%20Racing%20%28Europe%2C%20Australia%29.zip",
    link2: ""
  },
  {
    name: "Crash Tag Team Racing (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Crash%20Tag%20Team%20Racing%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Crazy Taxi (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "100.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Crazy%20Taxi%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Crazy Taxi (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "89.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Crazy%20Taxi%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 01 (20) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "443.2 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2001%20%2820%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 02 (21) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "610.1 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2002%20%2821%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 03 (22) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "317.9 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2003%20%2822%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 04 (23) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "829.2 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2004%20%2823%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 05 (24) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "742.2 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2005%20%2824%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 06 (25) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "743.1 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2006%20%2825%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 07 (26) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2007%20%2826%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 08 (27) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2008%20%2827%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 09 (28) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2009%20%2828%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 10 (29) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2010%20%2829%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 11 (30) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2011%20%2830%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 12 (31) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2012%20%2831%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 13 (32) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "542.8 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2013%20%2832%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 14 (33) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "703.2 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2014%20%2833%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 15 (34) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "533.0 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2015%20%2834%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 16 (35) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "632.1 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2016%20%2835%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 17 (36) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "636.6 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2017%20%2836%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 18 (37) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "686.8 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2018%20%2837%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 19 (38) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "441.4 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2019%20%2838%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 20 (39) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "530.7 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2020%20%2839%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cube CD 20 (40) (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "467.1 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cube%20CD%2020%20%2840%29%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Cubivore - Survival of the Fittest (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "38.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cubivore%20-%20Survival%20of%20the%20Fittest%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Cubix Robots for Everyone - Showdown (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "664.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Cubix%20Robots%20for%20Everyone%20-%20Showdown%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Curious George (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "951.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Curious%20George%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Custom Robo (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "755.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Custom%20Robo%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Dakar 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "793.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dakar%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dakar 2 - The World's Ultimate Rally (USA) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "901.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dakar%202%20-%20The%20World%27s%20Ultimate%20Rally%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dance Dance Revolution - Mario Mix (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "246.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dance%20Dance%20Revolution%20-%20Mario%20Mix%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Dancing Stage Mario Mix (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "298.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dancing%20Stage%20Mario%20Mix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dark Summit (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1017.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dark%20Summit%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Dark Summit (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "775.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dark%20Summit%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Darkened Skye (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1022.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Darkened%20Skye%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Darkened Skye (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1009.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Darkened%20Skye%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Dave Mirra Freestyle BMX 2 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "472.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dave%20Mirra%20Freestyle%20BMX%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Dave Mirra Freestyle BMX 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "472.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dave%20Mirra%20Freestyle%20BMX%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Dead to Rights (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dead%20to%20Rights%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dead to Rights (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dead%20to%20Rights%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Def Jam - Fight for NY (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "968.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Def%20Jam%20-%20Fight%20for%20NY%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Def Jam - Fight for NY (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "994.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Def%20Jam%20-%20Fight%20for%20NY%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Def Jam - Vendetta (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "967.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Def%20Jam%20-%20Vendetta%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Def Jam - Vendetta (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Def%20Jam%20-%20Vendetta%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Defender (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "983.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Defender%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Defender - For All Mankind (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Defender%20-%20For%20All%20Mankind%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Die Hard - Vendetta (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Die%20Hard%20-%20Vendetta%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Die Hard - Vendetta (Europe) (Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Die%20Hard%20-%20Vendetta%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Die Hard - Vendetta (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Die%20Hard%20-%20Vendetta%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Digimon Rumble Arena 2 (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "889.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Digimon%20Rumble%20Arena%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Digimon Rumble Arena 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "889.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Digimon%20Rumble%20Arena%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Digimon World 4 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "544.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Digimon%20World%204%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Dinotopia - The Sunstone Odyssey (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "513.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dinotopia%20-%20The%20Sunstone%20Odyssey%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney Sports - Basketball (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "567.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%20Sports%20-%20Basketball%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney Sports - Basketball (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "295.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%20Sports%20-%20Basketball%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney Sports - Football (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "527.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%20Sports%20-%20Football%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney Sports - Football (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "362.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%20Sports%20-%20Football%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney Sports - Skateboarding (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "366.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%20Sports%20-%20Skateboarding%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney Sports - Skateboarding (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "321.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%20Sports%20-%20Skateboarding%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney Sports - Soccer (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "232.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%20Sports%20-%20Soccer%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney's Chicken Little (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Chicken%20Little%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Disney's Chicken Little (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Chicken%20Little%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney's Donald Duck - Goin' Quackers (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "788.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Donald%20Duck%20-%20Goin%27%20Quackers%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Disney's Donald Duck - Quack Attack (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "875.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Donald%20Duck%20-%20Quack%20Attack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney's Donald Duck PK (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1003.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Donald%20Duck%20PK%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney's Extreme Skate Adventure (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Extreme%20Skate%20Adventure%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Disney's Extreme Skate Adventure (Europe) (Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Extreme%20Skate%20Adventure%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney's Extreme Skate Adventure (Europe) (Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Extreme%20Skate%20Adventure%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Disney's Extreme Skate Adventure (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Extreme%20Skate%20Adventure%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney's Hide & Sneak (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "377.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Hide%20%26%20Sneak%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Disney's Hide & Sneak (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "216.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Hide%20%26%20Sneak%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Disney's Magical Mirror Starring Mickey Mouse (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "235.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Magical%20Mirror%20Starring%20Mickey%20Mouse%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney's Magical Mirror Starring Mickey Mouse (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "224.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Magical%20Mirror%20Starring%20Mickey%20Mouse%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney's Party (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "320.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney's Party (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "102.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Party%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney's Piglet's Big Game (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Piglet%27s%20Big%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Disney's Piglet's Big Game (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Piglet%27s%20Big%20Game%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney's PK - Out of the Shadows (USA) (En,Fr,De,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "937.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20PK%20-%20Out%20of%20the%20Shadows%20%28USA%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney's Tarzan - Freeride (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Tarzan%20-%20Freeride%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney's Tarzan - Untamed (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "668.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Tarzan%20-%20Untamed%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Disney's The Haunted Mansion (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "779.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20The%20Haunted%20Mansion%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney's Winnie the Pooh's Rumbly Tumbly Adventure (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "594.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Winnie%20the%20Pooh%27s%20Rumbly%20Tumbly%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Disney's Winnie the Pooh's Rumbly Tumbly Adventure (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "606.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney%27s%20Winnie%20the%20Pooh%27s%20Rumbly%20Tumbly%20Adventure%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar Cars (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "919.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20Cars%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar Cars (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "951.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20Cars%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar Finding Nemo (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "689.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20Finding%20Nemo%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar Finding Nemo (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "772.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20Finding%20Nemo%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar Finding Nemo (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "714.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20Finding%20Nemo%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar Monsters, Inc. - Scream Arena (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20Monsters%2C%20Inc.%20-%20Scream%20Arena%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar Monsters, Inc. - Scream Arena (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "588.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20Monsters%2C%20Inc.%20-%20Scream%20Arena%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar Ratatouille (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "733.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20Ratatouille%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar The Incredibles (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20The%20Incredibles%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar The Incredibles (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20The%20Incredibles%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar The Incredibles - Rise of the Underminer (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20The%20Incredibles%20-%20Rise%20of%20the%20Underminer%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar The Incredibles - Rise of the Underminer (Europe) (Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "787.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20The%20Incredibles%20-%20Rise%20of%20the%20Underminer%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Disney-Pixar The Incredibles - Rise of the Underminer (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Disney-Pixar%20The%20Incredibles%20-%20Rise%20of%20the%20Underminer%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Donkey Kong Jungle Beat (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "550.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Donkey%20Kong%20Jungle%20Beat%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Donkey Kong Jungle Beat (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "549.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Donkey%20Kong%20Jungle%20Beat%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Donkey Konga (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "235.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Donkey%20Konga%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Donkey Konga (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "241.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Donkey%20Konga%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Donkey Konga 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "210.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Donkey%20Konga%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Donkey Konga 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "196.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Donkey%20Konga%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Doshin the Giant (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "552.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Doshin%20the%20Giant%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dr. Muto (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dr.%20Muto%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Budokai (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "748.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dragon%20Ball%20Z%20-%20Budokai%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Budokai (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "771.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dragon%20Ball%20Z%20-%20Budokai%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Budokai 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "720.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dragon%20Ball%20Z%20-%20Budokai%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Budokai 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "740.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dragon%20Ball%20Z%20-%20Budokai%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Sagas (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "899.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dragon%20Ball%20Z%20-%20Sagas%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Dragon's Lair 3D - Return to the Lair (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "996.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dragon%27s%20Lair%203D%20-%20Return%20to%20the%20Lair%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Dragon's Lair 3D - Special Edition (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "506.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Dragon%27s%20Lair%203D%20-%20Special%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks & Aardman Flushed Away (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "735.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20%26%20Aardman%20Flushed%20Away%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks & Aardman Flushed Away (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "590.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20%26%20Aardman%20Flushed%20Away%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Madagascar (Europe) (Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "575.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Madagascar%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Madagascar (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "459.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Madagascar%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Over the Hedge (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1009.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Over%20the%20Hedge%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Over the Hedge (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "995.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Over%20the%20Hedge%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Shark Tale (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "878.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Shark%20Tale%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Shark Tale (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "887.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Shark%20Tale%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Shrek - Smash n' Crash Racing (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "607.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Shrek%20-%20Smash%20n%27%20Crash%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Shrek - Smash n' Crash Racing (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "605.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Shrek%20-%20Smash%20n%27%20Crash%20Racing%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Shrek - SuperSlam (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "727.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Shrek%20-%20SuperSlam%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Shrek - SuperSlam (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "727.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Shrek%20-%20SuperSlam%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "DreamWorks Shrek - SuperSlam (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "727.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/DreamWorks%20Shrek%20-%20SuperSlam%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Driven (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "725.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Driven%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Driven (USA) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "770.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Driven%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Driven (USA) (En,Fr,De,Es,It) (Beta)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "735.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Driven%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Drome Racers (Europe) (En,Fr,De,Es,It,Nl,Sv,Da)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "823.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Drome%20Racers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Drome Racers (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "618.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Drome%20Racers%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Ed, Edd n Eddy - The Mis-Edventures (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "484.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ed%2C%20Edd%20n%20Eddy%20-%20The%20Mis-Edventures%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Egg Mania - Eggstreme Madness (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "244.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Egg%20Mania%20-%20Eggstreme%20Madness%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Eggo Mania (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "244.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Eggo%20Mania%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Enter the Matrix (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Enter%20the%20Matrix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Enter the Matrix (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Enter%20the%20Matrix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Enter the Matrix (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Enter%20the%20Matrix%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Enter the Matrix (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Enter%20the%20Matrix%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "ESPN International Winter Sports (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "479.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/ESPN%20International%20Winter%20Sports%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "ESPN International Winter Sports 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "479.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/ESPN%20International%20Winter%20Sports%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "ESPN MLS ExtraTime 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "960.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/ESPN%20MLS%20ExtraTime%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "ESPN MLS ExtraTime 2002 (USA) (Beta) (2002-01-31)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "947.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/ESPN%20MLS%20ExtraTime%202002%20%28USA%29%20%28Beta%29%20%282002-01-31%29.zip",
    link2: ""
  },
  {
    name: "Eternal Darkness - Sanity's Requiem (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Eternal%20Darkness%20-%20Sanity%27s%20Requiem%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Eternal Darkness - Sanity's Requiem (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Eternal%20Darkness%20-%20Sanity%27s%20Requiem%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Evolution Skateboarding (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "616.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Evolution%20Skateboarding%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Evolution Skateboarding (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "651.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Evolution%20Skateboarding%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Evolution Snowboarding (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Evolution%20Snowboarding%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Evolution Snowboarding (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Evolution%20Snowboarding%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Evolution Worlds (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "997.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Evolution%20Worlds%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Evolution Worlds (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "929.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Evolution%20Worlds%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "F-Zero GX (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/F-Zero%20GX%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "F-Zero GX (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/F-Zero%20GX%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "F1 2002 (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "253.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/F1%202002%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "F1 2002 (USA) (En,Fr,De,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "253.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/F1%202002%20%28USA%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "F1 Career Challenge (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "732.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/F1%20Career%20Challenge%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fairly OddParents, The - Breakin' da Rules (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1023.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Fairly%20OddParents%2C%20The%20-%20Breakin%27%20da%20Rules%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Fairly OddParents, The - Shadow Showdown (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "785.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Fairly%20OddParents%2C%20The%20-%20Shadow%20Showdown%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Fantastic 4 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Fantastic%204%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Fantastic 4 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Fantastic%204%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "FIFA 06 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%2006%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "FIFA 07 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%2007%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "FIFA Football 2003 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1022.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Football%202003%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "FIFA Football 2004 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "767.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Football%202004%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "FIFA Football 2005 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "783.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Football%202005%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "FIFA Soccer 06 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Soccer%2006%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "FIFA Soccer 07 (USA) (En,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Soccer%2007%20%28USA%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "FIFA Soccer 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "825.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Soccer%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "FIFA Soccer 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Soccer%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "FIFA Soccer 2004 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "795.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Soccer%202004%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "FIFA Soccer 2005 (USA) (En,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "831.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Soccer%202005%20%28USA%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "FIFA Street (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "666.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Street%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "FIFA Street (USA) (En,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "699.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Street%20%28USA%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "FIFA Street 2 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Street%202%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "FIFA Street 2 (USA) (En,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20Street%202%20%28USA%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "FIFA World Cup Germany 2006 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "962.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20World%20Cup%20Germany%202006%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "FIFA World Cup Germany 2006 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "965.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FIFA%20World%20Cup%20Germany%202006%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Fight Night Round 2 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Fight%20Night%20Round%202%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Fight Night Round 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "950.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Fight%20Night%20Round%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy Crystal Chronicles (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "644.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Final%20Fantasy%20Crystal%20Chronicles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy Crystal Chronicles (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "751.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Final%20Fantasy%20Crystal%20Chronicles%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Fire Emblem - Path of Radiance (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Fire%20Emblem%20-%20Path%20of%20Radiance%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fire Emblem - Path of Radiance (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Fire%20Emblem%20-%20Path%20of%20Radiance%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "FireBlade (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "509.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FireBlade%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "FireBlade (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "751.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FireBlade%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Freaky Flyers (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Freaky%20Flyers%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Freaky Flyers (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Freaky%20Flyers%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Freedom Fighters (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Freedom%20Fighters%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Freedom Fighters (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Freedom%20Fighters%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Freekstyle (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "631.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Freekstyle%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Freekstyle (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "347.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Freekstyle%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "FreeLoader for GameCube (Europe) (Unl) (GameCube + Wii)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "765.2 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FreeLoader%20for%20GameCube%20%28Europe%29%20%28Unl%29%20%28GameCube%20%2B%20Wii%29.zip",
    link2: ""
  },
  {
    name: "FreeLoader for GameCube (USA, Europe) (Unl) (v1.06b)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "239.0 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FreeLoader%20for%20GameCube%20%28USA%2C%20Europe%29%20%28Unl%29%20%28v1.06b%29.zip",
    link2: ""
  },
  {
    name: "FreeLoader for GameCube (USA, Europe) (Unl) (v1.06b)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "239.0 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/FreeLoader%20for%20GameCube%20%28USA%2C%20Europe%29%20%28Unl%29%20%28v1.06b%29.zip",
    link2: ""
  },
  {
    name: "Freestyle Metal X (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "967.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Freestyle%20Metal%20X%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Freestyle Street Soccer (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Freestyle%20Street%20Soccer%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Frogger - Ancient Shadow (USA) (En,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "364.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Frogger%20-%20Ancient%20Shadow%20%28USA%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Frogger Beyond (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "679.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Frogger%20Beyond%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Frogger Beyond (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "819.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Frogger%20Beyond%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Frogger's Adventures - The Rescue (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "574.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Frogger%27s%20Adventures%20-%20The%20Rescue%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Future Tactics - The Uprising (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "261.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Future%20Tactics%20-%20The%20Uprising%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Future Tactics - The Uprising (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "196.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Future%20Tactics%20-%20The%20Uprising%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Gadget Racers (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "41.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Gadget%20Racers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Galleon (USA) (Proto)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "974.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Galleon%20%28USA%29%20%28Proto%29.zip",
    link2: ""
  },
  {
    name: "Game Boy Player Start-Up Disc (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Game%20Boy%20Player%20Start-Up%20Disc%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Game Boy Player Start-Up Disc (Europe) (En,Fr,De,Es,It,Nl) (Rev 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Game%20Boy%20Player%20Start-Up%20Disc%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Game Boy Player Start-Up Disc (USA) (Rev 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "4.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Game%20Boy%20Player%20Start-Up%20Disc%20%28USA%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Game Boy Player Start-Up Disc (USA) (Rev 3)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "4.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Game%20Boy%20Player%20Start-Up%20Disc%20%28USA%29%20%28Rev%203%29.zip",
    link2: ""
  },
  {
    name: "Gauntlet - Dark Legacy (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "879.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Gauntlet%20-%20Dark%20Legacy%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Gauntlet - Dark Legacy (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "879.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Gauntlet%20-%20Dark%20Legacy%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Gauntlet - Dark Legacy (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "879.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Gauntlet%20-%20Dark%20Legacy%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Geist (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "722.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Geist%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Geist (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "676.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Geist%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Gladius (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Gladius%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Gladius (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1022.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Gladius%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Go! Go! Hypergrind (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "997.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Go%21%20Go%21%20Hypergrind%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Goblin Commander - Unleash the Horde (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "356.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Goblin%20Commander%20-%20Unleash%20the%20Horde%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Goblin Commander - Unleash the Horde (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "354.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Goblin%20Commander%20-%20Unleash%20the%20Horde%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Godzilla - Destroy All Monsters Melee (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "710.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Godzilla%20-%20Destroy%20All%20Monsters%20Melee%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Godzilla - Destroy All Monsters Melee (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "710.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Godzilla%20-%20Destroy%20All%20Monsters%20Melee%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "GoldenEye - Rogue Agent (Europe) (En,It,Nl,Sv) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/GoldenEye%20-%20Rogue%20Agent%20%28Europe%29%20%28En%2CIt%2CNl%2CSv%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "GoldenEye - Rogue Agent (Europe) (En,It,Nl,Sv) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "934.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/GoldenEye%20-%20Rogue%20Agent%20%28Europe%29%20%28En%2CIt%2CNl%2CSv%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "GoldenEye - Rogue Agent (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "911.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/GoldenEye%20-%20Rogue%20Agent%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "GoldenEye - Rogue Agent (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "892.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/GoldenEye%20-%20Rogue%20Agent%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Gotcha Force (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "708.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Gotcha%20Force%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Gotcha Force (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "556.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Gotcha%20Force%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Grim Adventures of Billy & Mandy, The (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "445.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Grim%20Adventures%20of%20Billy%20%26%20Mandy%2C%20The%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Grooverider - Slot Car Thunder (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "124.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Grooverider%20-%20Slot%20Car%20Thunder%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Gun (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "940.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Gun%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Gun (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "940.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Gun%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Happy Feet (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Happy%20Feet%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter - Quidditch World Cup (Europe) (En,Nl,Sv)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "631.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20-%20Quidditch%20World%20Cup%20%28Europe%29%20%28En%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter - Quidditch World Cup (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "747.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20-%20Quidditch%20World%20Cup%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter - Quidditch World Cup (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "721.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20-%20Quidditch%20World%20Cup%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Chamber of Secrets (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "818.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Chamber%20of%20Secrets%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Chamber of Secrets (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "818.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Chamber%20of%20Secrets%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Chamber of Secrets (Europe) (Es,It,Pt)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "829.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Chamber%20of%20Secrets%20%28Europe%29%20%28Es%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Chamber of Secrets (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "823.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Chamber%20of%20Secrets%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Goblet of Fire (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "786.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Goblet%20of%20Fire%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Goblet of Fire (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "786.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Goblet%20of%20Fire%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Philosopher's Stone (Europe) (En,Nl) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "921.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Philosopher%27s%20Stone%20%28Europe%29%20%28En%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Philosopher's Stone (Europe) (En,Sv) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "918.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Philosopher%27s%20Stone%20%28Europe%29%20%28En%2CSv%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Philosopher's Stone (Europe) (Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "920.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Philosopher%27s%20Stone%20%28Europe%29%20%28Es%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Philosopher's Stone (Europe) (Fr,De) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "919.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Philosopher%27s%20Stone%20%28Europe%29%20%28Fr%2CDe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Prisoner of Azkaban (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1012.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Prisoner%20of%20Azkaban%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Prisoner of Azkaban (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1012.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Prisoner%20of%20Azkaban%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Sorcerer's Stone (USA) (En,Es) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "903.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harry%20Potter%20and%20the%20Sorcerer%27s%20Stone%20%28USA%29%20%28En%2CEs%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon - A Wonderful Life (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "361.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harvest%20Moon%20-%20A%20Wonderful%20Life%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon - A Wonderful Life (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "365.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harvest%20Moon%20-%20A%20Wonderful%20Life%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon - Another Wonderful Life (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "367.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harvest%20Moon%20-%20Another%20Wonderful%20Life%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon - Magical Melody (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "70.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Harvest%20Moon%20-%20Magical%20Melody%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Hello Kitty - Roller Rescue (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "938.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hello%20Kitty%20-%20Roller%20Rescue%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hello Kitty - Roller Rescue (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "896.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hello%20Kitty%20-%20Roller%20Rescue%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Hitman 2 - Silent Assassin (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "751.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hitman%202%20-%20Silent%20Assassin%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hitman 2 - Silent Assassin (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "751.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hitman%202%20-%20Silent%20Assassin%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Hobbit, The - The Prelude to the Lord of the Rings (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "949.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hobbit%2C%20The%20-%20The%20Prelude%20to%20the%20Lord%20of%20the%20Rings%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hobbit, The - The Prelude to the Lord of the Rings (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "949.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hobbit%2C%20The%20-%20The%20Prelude%20to%20the%20Lord%20of%20the%20Rings%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Home Run King (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "644.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Home%20Run%20King%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Hontai Kensa Disc DOL-USA (Japan) (Rev 5)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "10.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hontai%20Kensa%20Disc%20DOL-USA%20%28Japan%29%20%28Rev%205%29.zip",
    link2: ""
  },
  {
    name: "Hot Wheels - Velocity X (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "573.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hot%20Wheels%20-%20Velocity%20X%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hot Wheels - Velocity X (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "573.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hot%20Wheels%20-%20Velocity%20X%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Hot Wheels - World Race (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "381.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hot%20Wheels%20-%20World%20Race%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hot Wheels - World Race (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "302.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hot%20Wheels%20-%20World%20Race%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Hulk (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hulk%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hulk (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hulk%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Hunter - The Reckoning (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "873.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hunter%20-%20The%20Reckoning%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Hunter - The Reckoning (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "782.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Hunter%20-%20The%20Reckoning%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "I-Ninja (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "798.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/I-Ninja%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Ice Age 2 - The Meltdown (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ice%20Age%202%20-%20The%20Meltdown%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Ice Age 2 - The Meltdown (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "844.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ice%20Age%202%20-%20The%20Meltdown%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Ikaruga (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "134.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ikaruga%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Ikaruga (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "134.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ikaruga%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Incredible Hulk, The - Ultimate Destruction (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Incredible%20Hulk%2C%20The%20-%20Ultimate%20Destruction%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Incredible Hulk, The - Ultimate Destruction (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Incredible%20Hulk%2C%20The%20-%20Ultimate%20Destruction%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Intellivision Lives! (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "493.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Intellivision%20Lives%21%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc - August 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1018.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20-%20August%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc - January 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "843.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20-%20January%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc - July 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1009.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20-%20July%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc - June 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20-%20June%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc - March 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "896.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20-%20March%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc - October 2001 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20-%20October%202001%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 10 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2010%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 11 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2011%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 12 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2012%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 13 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2013%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 14 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2014%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 15 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2015%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 16 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "802.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2016%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 17 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2017%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 18 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2018%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 19 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2019%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 20 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2020%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 21 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2021%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 22 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2022%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 23 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "867.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2023%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 24 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2024%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 25 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "963.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2025%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 26 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2026%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 27 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "680.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2027%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 28 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "752.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2028%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 29 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "954.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2029%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 30 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2030%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 31 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1015.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2031%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 32 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "856.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2032%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 33 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2033%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 34 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "796.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2034%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 35 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "782.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%2035%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 7 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%207%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 8 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%208%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disc Version 9 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1003.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disc%20Version%209%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - April 2003 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "626.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20April%202003%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - April 2005 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "853.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20April%202005%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - April 2006 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "857.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20April%202006%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - December 2002 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20December%202002%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - February 2003 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "962.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20February%202003%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - February 2005 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "857.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20February%202005%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - July 2004 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "769.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20July%202004%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - June 2003 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "592.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20June%202003%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - March 2002 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20March%202002%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - March 2004 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "672.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20March%202004%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - May 2002 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "881.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20May%202002%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - May 2004 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20May%202004%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - May 2005 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "953.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20May%202005%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - November 2002 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "787.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20November%202002%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - November 2003 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "949.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20November%202003%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - November 2004 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20November%202004%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - October 2005 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20October%202005%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - September 2002 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "516.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20September%202002%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Interactive Multi-Game Demo Disk - September 2003 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1021.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Interactive%20Multi-Game%20Demo%20Disk%20-%20September%202003%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "International Superstar Soccer 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "688.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/International%20Superstar%20Soccer%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "International Superstar Soccer 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1023.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/International%20Superstar%20Soccer%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Italian Job, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "746.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Italian%20Job%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Italian Job, The (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "306.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Italian%20Job%2C%20The%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Jeremy McGrath Supercross World (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "369.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Jeremy%20McGrath%20Supercross%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jeremy McGrath Supercross World (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "323.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Jeremy%20McGrath%20Supercross%20World%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Judge Dredd - Dredd vs. Death (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "816.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Judge%20Dredd%20-%20Dredd%20vs.%20Death%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Judge Dredd - Dredd vs. Death (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "803.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Judge%20Dredd%20-%20Dredd%20vs.%20Death%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Kao the Kangaroo - Round 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "351.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Kao%20the%20Kangaroo%20-%20Round%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kao the Kangaroo - Round 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "284.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Kao%20the%20Kangaroo%20-%20Round%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Karaoke Revolution Party (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "678.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Karaoke%20Revolution%20Party%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Kelly Slater's Pro Surfer (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "864.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Kelly%20Slater%27s%20Pro%20Surfer%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Kelly Slater's Pro Surfer (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "864.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Kelly%20Slater%27s%20Pro%20Surfer%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Kelly Slater's Pro Surfer (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "864.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Kelly%20Slater%27s%20Pro%20Surfer%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Killer7 (Europe) (En,Fr,De) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "911.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Killer7%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Killer7 (Europe) (En,Fr,De) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "592.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Killer7%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Killer7 (USA) (Disc 1) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "903.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Killer7%20%28USA%29%20%28Disc%201%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Killer7 (USA) (Disc 2) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "584.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Killer7%20%28USA%29%20%28Disc%202%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "King Arthur (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/King%20Arthur%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "King Arthur (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/King%20Arthur%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Kirby Air Ride (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "529.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Kirby%20Air%20Ride%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kirby Air Ride (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "579.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Kirby%20Air%20Ride%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Knights of the Temple - Infernal Crusade (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Knights%20of%20the%20Temple%20-%20Infernal%20Crusade%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Knights of the Temple - Infernal Crusade (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Knights%20of%20the%20Temple%20-%20Infernal%20Crusade%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Knockout Kings 2003 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "595.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Knockout%20Kings%202003%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Knockout Kings 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "608.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Knockout%20Kings%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Lara Croft Tomb Raider - Legend (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lara%20Croft%20Tomb%20Raider%20-%20Legend%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Lara Croft Tomb Raider - Legend (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lara%20Croft%20Tomb%20Raider%20-%20Legend%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Largo Winch - Empire Under Threat (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "672.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Largo%20Winch%20-%20Empire%20Under%20Threat%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Spyro, The - A New Beginning (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Spyro%2C%20The%20-%20A%20New%20Beginning%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Legend of Spyro, The - A New Beginning (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Spyro%2C%20The%20-%20A%20New%20Beginning%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Collector's Edition (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "872.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Zelda%2C%20The%20-%20Collector%27s%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Collector's Edition (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "875.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Zelda%2C%20The%20-%20Collector%27s%20Edition%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Four Swords Adventures (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "410.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Zelda%2C%20The%20-%20Four%20Swords%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Four Swords Adventures (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "223.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Zelda%2C%20The%20-%20Four%20Swords%20Adventures%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Ocarina of Time & Master Quest (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "867.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Zelda%2C%20The%20-%20Ocarina%20of%20Time%20%26%20Master%20Quest%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Ocarina of Time & Master Quest (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "870.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Zelda%2C%20The%20-%20Ocarina%20of%20Time%20%26%20Master%20Quest%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - The Wind Waker (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "829.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Zelda%2C%20The%20-%20The%20Wind%20Waker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - The Wind Waker (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "823.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Zelda%2C%20The%20-%20The%20Wind%20Waker%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Twilight Princess (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "888.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Zelda%2C%20The%20-%20Twilight%20Princess%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Twilight Princess (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "887.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legend%20of%20Zelda%2C%20The%20-%20Twilight%20Princess%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Legends of Wrestling (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "572.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legends%20of%20Wrestling%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Legends of Wrestling (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "572.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legends%20of%20Wrestling%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Legends of Wrestling II (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legends%20of%20Wrestling%20II%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Legends of Wrestling II (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Legends%20of%20Wrestling%20II%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "LEGO Star Wars - The Video Game (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "559.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/LEGO%20Star%20Wars%20-%20The%20Video%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "LEGO Star Wars - The Video Game (Europe) (Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "559.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/LEGO%20Star%20Wars%20-%20The%20Video%20Game%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "LEGO Star Wars - The Video Game (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "559.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/LEGO%20Star%20Wars%20-%20The%20Video%20Game%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "LEGO Star Wars II - The Original Trilogy (Europe) (En,Fr,De,Da)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "852.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/LEGO%20Star%20Wars%20II%20-%20The%20Original%20Trilogy%20%28Europe%29%20%28En%2CFr%2CDe%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Star Wars II - The Original Trilogy (Europe) (En,Fr,De,Da) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "852.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/LEGO%20Star%20Wars%20II%20-%20The%20Original%20Trilogy%20%28Europe%29%20%28En%2CFr%2CDe%2CDa%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "LEGO Star Wars II - The Original Trilogy (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "852.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/LEGO%20Star%20Wars%20II%20-%20The%20Original%20Trilogy%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Lemony Snicket's A Series of Unfortunate Events (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "939.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lemony%20Snicket%27s%20A%20Series%20of%20Unfortunate%20Events%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Lemony Snicket's A Series of Unfortunate Events (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lemony%20Snicket%27s%20A%20Series%20of%20Unfortunate%20Events%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Looney Tunes - Back in Action (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Looney%20Tunes%20-%20Back%20in%20Action%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Looney Tunes - Back in Action (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "856.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Looney%20Tunes%20-%20Back%20in%20Action%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Looney Tunes - Back in Action (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "856.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Looney%20Tunes%20-%20Back%20in%20Action%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Lord of the Rings, The - The Return of the King (Europe) (En,Nl,Sv)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Return%20of%20the%20King%20%28Europe%29%20%28En%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Lord of the Rings, The - The Return of the King (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Return%20of%20the%20King%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Lord of the Rings, The - The Third Age (Europe) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Third%20Age%20%28Europe%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Lord of the Rings, The - The Third Age (Europe) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Third%20Age%20%28Europe%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Lord of the Rings, The - The Third Age (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Third%20Age%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Lord of the Rings, The - The Third Age (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Third%20Age%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Lord of the Rings, The - The Two Towers (Europe) (En,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Two%20Towers%20%28Europe%29%20%28En%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Lord of the Rings, The - The Two Towers (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Two%20Towers%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Lost Kingdoms (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "570.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lost%20Kingdoms%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Lost Kingdoms (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "427.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lost%20Kingdoms%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Lost Kingdoms II (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "940.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lost%20Kingdoms%20II%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Lost Kingdoms II (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "769.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lost%20Kingdoms%20II%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Lotus Challenge (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "404.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Lotus%20Challenge%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Luigi's Mansion (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "228.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Luigi%27s%20Mansion%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Luigi's Mansion (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "228.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Luigi%27s%20Mansion%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Luigi's Mansion (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "150.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Luigi%27s%20Mansion%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 06 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1013.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%2006%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 06 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1013.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%2006%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 07 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "979.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%2007%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 08 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "999.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%2008%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "501.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 2003 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%202003%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 2004 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%202004%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 2004 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%202004%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 2004 (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%202004%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 2005 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "993.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%202005%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 2005 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "993.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Madden%20NFL%202005%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Major League Baseball 2K6 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Major%20League%20Baseball%202K6%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mario Golf - Toadstool Tour (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Golf%20-%20Toadstool%20Tour%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Golf - Toadstool Tour (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Golf%20-%20Toadstool%20Tour%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mario Kart - Double Dash!! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "463.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Kart%20-%20Double%20Dash%21%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Kart - Double Dash!! (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "377.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Kart%20-%20Double%20Dash%21%21%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mario Kart - Double Dash!! (USA) (Bonus Disc)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Kart%20-%20Double%20Dash%21%21%20%28USA%29%20%28Bonus%20Disc%29.zip",
    link2: ""
  },
  {
    name: "Mario Kart - Double Dash!! (USA) (Debug) (2004-07-05)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "378.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Kart%20-%20Double%20Dash%21%21%20%28USA%29%20%28Debug%29%20%282004-07-05%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 4 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "454.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%204%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 4 (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "454.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%204%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 4 (Europe) (En,Fr,De,Es,It) (Rev 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "454.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%204%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 4 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "446.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%204%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 4 (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "446.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%204%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 5 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "785.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%205%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 5 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "860.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%205%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 6 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "629.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%206%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 6 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "627.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%206%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 7 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "492.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%207%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Party 7 (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "478.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Party%207%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mario Power Tennis (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "590.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Power%20Tennis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Power Tennis (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "556.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Power%20Tennis%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mario Power Tennis (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "556.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Power%20Tennis%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mario Smash Football (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "402.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Smash%20Football%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Superstar Baseball (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "531.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Superstar%20Baseball%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mario Superstar Baseball (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "529.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mario%20Superstar%20Baseball%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mark Davis Pro Bass Challenge (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "77.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mark%20Davis%20Pro%20Bass%20Challenge%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Marvel Nemesis - Rise of the Imperfects (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "876.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Marvel%20Nemesis%20-%20Rise%20of%20the%20Imperfects%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Marvel Nemesis - Rise of the Imperfects (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "925.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Marvel%20Nemesis%20-%20Rise%20of%20the%20Imperfects%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mary-Kate and Ashley - Sweet 16 - Licensed to Drive (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "382.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mary-Kate%20and%20Ashley%20-%20Sweet%2016%20-%20Licensed%20to%20Drive%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mary-Kate and Ashley - Sweet 16 - Licensed to Drive (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "382.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mary-Kate%20and%20Ashley%20-%20Sweet%2016%20-%20Licensed%20to%20Drive%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mat Hoffman's Pro BMX 2 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mat%20Hoffman%27s%20Pro%20BMX%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mat Hoffman's Pro BMX 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mat%20Hoffman%27s%20Pro%20BMX%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Max Drive (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "450.3 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Max%20Drive%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Max Drive Pro (USA, Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "414.3 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Max%20Drive%20Pro%20%28USA%2C%20Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Max Drive Pro (USA, Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "414.3 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Max%20Drive%20Pro%20%28USA%2C%20Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "MaxPlay (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "6.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/MaxPlay%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "MaxPlay Volume 01 (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "6.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/MaxPlay%20Volume%2001%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "MC Groovz Dance Craze (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "377.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/MC%20Groovz%20Dance%20Craze%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "MC Groovz Dance Craze (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "374.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/MC%20Groovz%20Dance%20Craze%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Medabots Infinity (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "261.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medabots%20Infinity%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Medabots Infinity (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "261.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medabots%20Infinity%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Medabots Infinity (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "261.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medabots%20Infinity%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Medal of Honor - European Assault (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medal%20of%20Honor%20-%20European%20Assault%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Medal of Honor - European Assault (Germany)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "933.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medal%20of%20Honor%20-%20European%20Assault%20%28Germany%29.zip",
    link2: ""
  },
  {
    name: "Medal of Honor - European Assault (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "967.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medal%20of%20Honor%20-%20European%20Assault%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Medal of Honor - European Assault (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "967.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medal%20of%20Honor%20-%20European%20Assault%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Medal of Honor - Frontline (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "940.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medal%20of%20Honor%20-%20Frontline%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Medal of Honor - Frontline (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "946.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medal%20of%20Honor%20-%20Frontline%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Medal of Honor - Rising Sun (Europe) (En,Es,It,Nl,Sv) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "812.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medal%20of%20Honor%20-%20Rising%20Sun%20%28Europe%29%20%28En%2CEs%2CIt%2CNl%2CSv%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Medal of Honor - Rising Sun (Europe) (En,Es,It,Nl,Sv) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "751.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medal%20of%20Honor%20-%20Rising%20Sun%20%28Europe%29%20%28En%2CEs%2CIt%2CNl%2CSv%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Medal of Honor - Rising Sun (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "828.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medal%20of%20Honor%20-%20Rising%20Sun%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Medal of Honor - Rising Sun (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "764.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Medal%20of%20Honor%20-%20Rising%20Sun%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Mega Man Anniversary Collection (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mega%20Man%20Anniversary%20Collection%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mega Man Network Transmission (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "404.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mega%20Man%20Network%20Transmission%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mega Man Network Transmission (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "452.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mega%20Man%20Network%20Transmission%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mega Man X - Command Mission (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "742.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mega%20Man%20X%20-%20Command%20Mission%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Mega Man X - Command Mission (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "720.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mega%20Man%20X%20-%20Command%20Mission%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mega Man X Collection (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "658.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mega%20Man%20X%20Collection%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Men in Black II - Alien Escape (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Men%20in%20Black%20II%20-%20Alien%20Escape%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Men in Black II - Alien Escape (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1007.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Men%20in%20Black%20II%20-%20Alien%20Escape%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Metal Arms - Glitch in the System (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metal%20Arms%20-%20Glitch%20in%20the%20System%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Metal Arms - Glitch in the System (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metal%20Arms%20-%20Glitch%20in%20the%20System%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Metal Gear Solid - The Twin Snakes (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metal%20Gear%20Solid%20-%20The%20Twin%20Snakes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Metal Gear Solid - The Twin Snakes (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metal%20Gear%20Solid%20-%20The%20Twin%20Snakes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Metal Gear Solid - The Twin Snakes (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metal%20Gear%20Solid%20-%20The%20Twin%20Snakes%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Metal Gear Solid - The Twin Snakes (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metal%20Gear%20Solid%20-%20The%20Twin%20Snakes%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metroid%20Prime%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metroid%20Prime%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metroid%20Prime%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime (USA) (Rev 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metroid%20Prime%20%28USA%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime 2 - Echoes (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metroid%20Prime%202%20-%20Echoes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime 2 - Echoes (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metroid%20Prime%202%20-%20Echoes%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime 2 - Echoes (USA) (Bonus Disc)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Metroid%20Prime%202%20-%20Echoes%20%28USA%29%20%28Bonus%20Disc%29.zip",
    link2: ""
  },
  {
    name: "Micro Machines (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "438.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Micro%20Machines%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Midway Arcade Treasures (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "887.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Midway%20Arcade%20Treasures%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Midway Arcade Treasures 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Midway%20Arcade%20Treasures%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Midway Arcade Treasures 3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "969.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Midway%20Arcade%20Treasures%203%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Minority Report - Everybody Runs (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Minority%20Report%20-%20Everybody%20Runs%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Minority Report - Everybody Runs (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Minority%20Report%20-%20Everybody%20Runs%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mission - Impossible - Operation Surma (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mission%20-%20Impossible%20-%20Operation%20Surma%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mission - Impossible - Operation Surma (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mission%20-%20Impossible%20-%20Operation%20Surma%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "MLB SlugFest 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/MLB%20SlugFest%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "MLB SlugFest 2004 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1018.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/MLB%20SlugFest%202004%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Monopoly Party (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "649.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Monopoly%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Monopoly Party (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "649.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Monopoly%20Party%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Monster 4x4 - Masters of Metal (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Monster%204x4%20-%20Masters%20of%20Metal%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Monster House (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "375.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Monster%20House%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Monster House (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "568.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Monster%20House%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Monster House (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "416.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Monster%20House%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Monster Jam - Maximum Destruction (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "368.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Monster%20Jam%20-%20Maximum%20Destruction%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Monster Jam - Maximum Destruction (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "367.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Monster%20Jam%20-%20Maximum%20Destruction%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mortal Kombat - Deadly Alliance (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mortal%20Kombat%20-%20Deadly%20Alliance%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mortal Kombat - Deadly Alliance (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mortal%20Kombat%20-%20Deadly%20Alliance%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mortal Kombat - Deadly Alliance (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mortal%20Kombat%20-%20Deadly%20Alliance%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mortal Kombat - Deception (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "983.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mortal%20Kombat%20-%20Deception%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Muppets - Party Cruise (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "864.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Muppets%20-%20Party%20Cruise%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "MVP Baseball 2004 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/MVP%20Baseball%202004%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "MVP Baseball 2005 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/MVP%20Baseball%202005%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "MX SuperFly (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "880.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/MX%20SuperFly%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "MX SuperFly (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "924.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/MX%20SuperFly%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Mystic Heroes (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "656.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mystic%20Heroes%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mystic Heroes (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "631.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Mystic%20Heroes%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Namco Museum (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "487.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Namco%20Museum%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Namco Museum (USA) (Beta)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "488.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Namco%20Museum%20%28USA%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Namco Museum 50th Anniversary (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "232.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Namco%20Museum%2050th%20Anniversary%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Namco Museum 50th Anniversary (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "218.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Namco%20Museum%2050th%20Anniversary%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Naruto - Clash of Ninja (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "267.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Naruto%20-%20Clash%20of%20Ninja%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Naruto - Clash of Ninja - European Version (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "494.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Naruto%20-%20Clash%20of%20Ninja%20-%20European%20Version%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Naruto - Clash of Ninja 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "524.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Naruto%20-%20Clash%20of%20Ninja%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Naruto - Clash of Ninja 2 (USA) (Demo)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "524.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Naruto%20-%20Clash%20of%20Ninja%202%20%28USA%29%20%28Demo%29.zip",
    link2: ""
  },
  {
    name: "NASCAR - Dirt to Daytona (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1006.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NASCAR%20-%20Dirt%20to%20Daytona%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NASCAR 2005 - Chase for the Cup (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "744.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NASCAR%202005%20-%20Chase%20for%20the%20Cup%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NASCAR Thunder 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "942.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NASCAR%20Thunder%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NBA 2K2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "766.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%202K2%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NBA 2K3 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "776.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%202K3%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "NBA 2K3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "775.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%202K3%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NBA Courtside 2002 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "642.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Courtside%202002%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "NBA Courtside 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "642.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Courtside%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NBA Live 06 (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "986.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Live%2006%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "NBA Live 06 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "949.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Live%2006%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NBA Live 2003 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "672.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Live%202003%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "NBA Live 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "698.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Live%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NBA Live 2004 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "897.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Live%202004%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "NBA Live 2004 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "945.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Live%202004%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NBA Live 2005 (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "950.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Live%202005%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "NBA Live 2005 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "954.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Live%202005%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NBA Street (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "262.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Street%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NBA Street V3 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "919.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Street%20V3%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "NBA Street V3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "938.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Street%20V3%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NBA Street Vol. 2 (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "757.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Street%20Vol.%202%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "NBA Street Vol. 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "757.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NBA%20Street%20Vol.%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NCAA College Basketball 2K3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NCAA%20College%20Basketball%202K3%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NCAA College Football 2K3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "794.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NCAA%20College%20Football%202K3%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NCAA Football 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NCAA%20Football%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NCAA Football 2004 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NCAA%20Football%202004%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NCAA Football 2005 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NCAA%20Football%202005%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Carbon (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1009.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Need%20for%20Speed%20-%20Carbon%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Carbon (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Need%20for%20Speed%20-%20Carbon%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Hot Pursuit 2 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "765.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Need%20for%20Speed%20-%20Hot%20Pursuit%202%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Hot Pursuit 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "762.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Need%20for%20Speed%20-%20Hot%20Pursuit%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Most Wanted (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "986.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Need%20for%20Speed%20-%20Most%20Wanted%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Most Wanted (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "990.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Need%20for%20Speed%20-%20Most%20Wanted%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Underground (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "813.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Need%20for%20Speed%20-%20Underground%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Underground (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "808.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Need%20for%20Speed%20-%20Underground%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Underground 2 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "966.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Need%20for%20Speed%20-%20Underground%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Underground 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "965.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Need%20for%20Speed%20-%20Underground%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Neighbours from Hell (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "508.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Neighbours%20from%20Hell%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "NFL 2K3 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NFL%202K3%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "NFL 2K3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NFL%202K3%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NFL Blitz 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NFL%20Blitz%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NFL Blitz 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "921.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NFL%20Blitz%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NFL Blitz Pro (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "681.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NFL%20Blitz%20Pro%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NFL QB Club 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "352.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NFL%20QB%20Club%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NFL Street (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "609.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NFL%20Street%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "NFL Street (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "609.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NFL%20Street%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NFL Street 2 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "694.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NFL%20Street%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "NFL Street 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "704.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NFL%20Street%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NHL 06 (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%2006%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "NHL 06 (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1012.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%2006%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "NHL 2003 (Europe) (En,Fr,De,Sv,Fi,Cs)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%202003%20%28Europe%29%20%28En%2CFr%2CDe%2CSv%2CFi%2CCs%29.zip",
    link2: ""
  },
  {
    name: "NHL 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NHL 2004 (Europe) (En,Fr,De,Sv,Fi)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "883.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%202004%20%28Europe%29%20%28En%2CFr%2CDe%2CSv%2CFi%29.zip",
    link2: ""
  },
  {
    name: "NHL 2004 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "897.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%202004%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NHL 2005 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%202005%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "NHL 2005 (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%202005%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "NHL 2K3 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%202K3%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "NHL 2K3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%202K3%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NHL Hitz 2002 (Europe) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "647.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%20Hitz%202002%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "NHL Hitz 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "647.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%20Hitz%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NHL Hitz 2003 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "955.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%20Hitz%202003%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "NHL Hitz 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "969.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%20Hitz%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "NHL Hitz Pro (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "944.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/NHL%20Hitz%20Pro%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nick Jr. Dora the Explorer - Journey to the Purple Planet (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "445.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nick%20Jr.%20Dora%20the%20Explorer%20-%20Journey%20to%20the%20Purple%20Planet%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Nick Jr. Dora the Explorer - Journey to the Purple Planet (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "316.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nick%20Jr.%20Dora%20the%20Explorer%20-%20Journey%20to%20the%20Purple%20Planet%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Avatar - The Last Airbender (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "685.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Avatar%20-%20The%20Last%20Airbender%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Avatar - The Legend of Aang (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "949.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Avatar%20-%20The%20Legend%20of%20Aang%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Barnyard (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "759.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Barnyard%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Barnyard (Europe) (Fr,Es,It,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "992.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Barnyard%20%28Europe%29%20%28Fr%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Barnyard (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "740.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Barnyard%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Jimmy Neutron - Boy Genius (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "804.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Jimmy%20Neutron%20-%20Boy%20Genius%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Jimmy Neutron - Boy Genius (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "804.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Jimmy%20Neutron%20-%20Boy%20Genius%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Jimmy Neutron - Boy Genius - Attack of the Twonkies (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "753.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Jimmy%20Neutron%20-%20Boy%20Genius%20-%20Attack%20of%20the%20Twonkies%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Jimmy Neutron - Boy Genius - Attack of the Twonkies (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "741.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Jimmy%20Neutron%20-%20Boy%20Genius%20-%20Attack%20of%20the%20Twonkies%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Party Blast (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "562.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Party%20Blast%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Party Blast (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "562.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Party%20Blast%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Rocket Power - Beach Bandits (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "457.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Rocket%20Power%20-%20Beach%20Bandits%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Rocket Power - Beach Bandits (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "470.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Rocket%20Power%20-%20Beach%20Bandits%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Rugrats - Royal Ransom (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "993.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Rugrats%20-%20Royal%20Ransom%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Rugrats - Royal Ransom (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "994.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Rugrats%20-%20Royal%20Ransom%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - Battle for Bikini Bottom (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "828.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20Battle%20for%20Bikini%20Bottom%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - Battle for Bikini Bottom (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "828.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20Battle%20for%20Bikini%20Bottom%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - Battle for Bikini Bottom (USA) (Beta) (2003-10-01)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "749.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20Battle%20for%20Bikini%20Bottom%20%28USA%29%20%28Beta%29%20%282003-10-01%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - Creature from the Krusty Krab (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "691.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20Creature%20from%20the%20Krusty%20Krab%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - Creature from the Krusty Krab (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "735.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20Creature%20from%20the%20Krusty%20Krab%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - Lights, Camera, Pants! (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "693.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20Lights%2C%20Camera%2C%20Pants%21%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - Lights, Camera, Pants! (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "749.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20Lights%2C%20Camera%2C%20Pants%21%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - Revenge of the Flying Dutchman (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "465.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20Revenge%20of%20the%20Flying%20Dutchman%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - Revenge of the Flying Dutchman (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "465.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20Revenge%20of%20the%20Flying%20Dutchman%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - The Movie (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "583.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20The%20Movie%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - The Movie (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "654.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20The%20Movie%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants - The Movie (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "656.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20-%20The%20Movie%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon SpongeBob SquarePants and Friends Unite! (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20SpongeBob%20SquarePants%20and%20Friends%20Unite%21%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Tak - The Great Juju Challenge (Europe) (En,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Tak%20-%20The%20Great%20Juju%20Challenge%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Tak - The Great Juju Challenge (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Tak%20-%20The%20Great%20Juju%20Challenge%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Tak 2 - The Staff of Dreams (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Tak%202%20-%20The%20Staff%20of%20Dreams%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Tak 2 - The Staff of Dreams (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20Tak%202%20-%20The%20Staff%20of%20Dreams%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon The Adventures of Jimmy Neutron - Boy Genius - Jet Fusion (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "745.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20The%20Adventures%20of%20Jimmy%20Neutron%20-%20Boy%20Genius%20-%20Jet%20Fusion%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon The Adventures of Jimmy Neutron - Boy Genius - Jet Fusion (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "840.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nickelodeon%20The%20Adventures%20of%20Jimmy%20Neutron%20-%20Boy%20Genius%20-%20Jet%20Fusion%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nicktoons - Battle for Volcano Island (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "819.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nicktoons%20-%20Battle%20for%20Volcano%20Island%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nicktoons Unite! (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "497.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nicktoons%20Unite%21%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nintendo GameCube Preview Disc - May 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nintendo%20GameCube%20Preview%20Disc%20-%20May%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Nintendo GameCube Service Disc Version 1.0-03 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "94.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Nintendo%20GameCube%20Service%20Disc%20Version%201.0-03%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Odama (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "137.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Odama%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Odama (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "90.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Odama%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Open Season (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1001.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Open%20Season%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Open Season (Europe) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "898.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Open%20Season%20%28Europe%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Open Season (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "896.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Open%20Season%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Outlaw Golf (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "942.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Outlaw%20Golf%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Outlaw Golf (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "862.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Outlaw%20Golf%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "P.N. 03 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "638.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/P.N.%2003%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "P.N. 03 (Europe) (En,Fr,De,Es,It) (Demo)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "159.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/P.N.%2003%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29.zip",
    link2: ""
  },
  {
    name: "P.N. 03 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "636.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/P.N.%2003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man Fever (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1019.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pac-Man%20Fever%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man Vs. (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "50.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pac-Man%20Vs.%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man Vs. (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "48.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pac-Man%20Vs.%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man World 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "813.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pac-Man%20World%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man World 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "798.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pac-Man%20World%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man World 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1000.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pac-Man%20World%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man World 3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "998.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pac-Man%20World%203%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man World Rally (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "388.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pac-Man%20World%20Rally%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Paper Mario - The Thousand-Year Door (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "318.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Paper%20Mario%20-%20The%20Thousand-Year%20Door%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Paper Mario - The Thousand-Year Door (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "318.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Paper%20Mario%20-%20The%20Thousand-Year%20Door%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Paper Mario - The Thousand-Year Door (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "314.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Paper%20Mario%20-%20The%20Thousand-Year%20Door%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Peter Jackson's King Kong - The Official Game of the Movie (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Peter%20Jackson%27s%20King%20Kong%20-%20The%20Official%20Game%20of%20the%20Movie%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Peter Jackson's King Kong - The Official Game of the Movie (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Peter%20Jackson%27s%20King%20Kong%20-%20The%20Official%20Game%20of%20the%20Movie%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Phantasy Star Online Episode I & II (Europe) (En,Ja,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Phantasy%20Star%20Online%20Episode%20I%20%26%20II%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Phantasy Star Online Episode I & II (Europe) (En,Ja,Fr,De,Es) (Beta)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Phantasy%20Star%20Online%20Episode%20I%20%26%20II%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Phantasy Star Online Episode I & II (USA) (En,Ja,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Phantasy%20Star%20Online%20Episode%20I%20%26%20II%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Phantasy Star Online Episode I & II (USA) (En,Ja,Fr,De,Es) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Phantasy%20Star%20Online%20Episode%20I%20%26%20II%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Phantasy Star Online Episode I & II Plus (USA) (En,Ja,Fr,De,Es) (Rev 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Phantasy%20Star%20Online%20Episode%20I%20%26%20II%20Plus%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Phantasy Star Online Episode III - C.A.R.D. Revolution (Europe) (En,Ja,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Phantasy%20Star%20Online%20Episode%20III%20-%20C.A.R.D.%20Revolution%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Phantasy Star Online Episode III - C.A.R.D. Revolution (USA) (En,Ja)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Phantasy%20Star%20Online%20Episode%20III%20-%20C.A.R.D.%20Revolution%20%28USA%29%20%28En%2CJa%29.zip",
    link2: ""
  },
  {
    name: "Pikmin (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "539.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pikmin%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pikmin (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "529.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pikmin%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pikmin (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "529.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pikmin%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Pikmin 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "875.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pikmin%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pikmin 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "867.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pikmin%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pinball Hall of Fame - The Gottlieb Collection (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "312.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pinball%20Hall%20of%20Fame%20-%20The%20Gottlieb%20Collection%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pitfall - The Lost Expedition (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "698.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pitfall%20-%20The%20Lost%20Expedition%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Pitfall - The Lost Expedition (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "738.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pitfall%20-%20The%20Lost%20Expedition%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Box - Ruby & Sapphire (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "63.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pokemon%20Box%20-%20Ruby%20%26%20Sapphire%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Box - Ruby & Sapphire (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "26.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pokemon%20Box%20-%20Ruby%20%26%20Sapphire%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Channel (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1021.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pokemon%20Channel%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Channel (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "879.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pokemon%20Channel%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Colosseum (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "590.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pokemon%20Colosseum%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Colosseum (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "549.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pokemon%20Colosseum%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Colosseum (USA) (Bonus Disc)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "518.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pokemon%20Colosseum%20%28USA%29%20%28Bonus%20Disc%29.zip",
    link2: ""
  },
  {
    name: "Pokemon XD - Gale of Darkness (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "938.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pokemon%20XD%20-%20Gale%20of%20Darkness%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon XD - Gale of Darkness (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "915.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pokemon%20XD%20-%20Gale%20of%20Darkness%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Polar Express, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "899.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Polar%20Express%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Polar Express, The (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "812.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Polar%20Express%2C%20The%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Pool Paradise (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "200.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pool%20Paradise%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pool Paradise (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "200.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pool%20Paradise%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Power Link Game Enhancer Disc (Europe) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "515.9 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Power%20Link%20Game%20Enhancer%20Disc%20%28Europe%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Power Rangers - Dino Thunder (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "409.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Power%20Rangers%20-%20Dino%20Thunder%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Power Rangers - Dino Thunder (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "390.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Power%20Rangers%20-%20Dino%20Thunder%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Powerpuff Girls, The - Relish Rampage - Pickled Edition (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "817.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Powerpuff%20Girls%2C%20The%20-%20Relish%20Rampage%20-%20Pickled%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Powerpuff Girls, The - Relish Rampage - Pickled Edition (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Powerpuff%20Girls%2C%20The%20-%20Relish%20Rampage%20-%20Pickled%20Edition%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia - The Sands of Time (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "940.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Prince%20of%20Persia%20-%20The%20Sands%20of%20Time%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia - The Sands of Time (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Prince%20of%20Persia%20-%20The%20Sands%20of%20Time%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia - The Sands of Time (USA) (En,Fr,Es) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Prince%20of%20Persia%20-%20The%20Sands%20of%20Time%20%28USA%29%20%28En%2CFr%2CEs%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia - The Two Thrones (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Prince%20of%20Persia%20-%20The%20Two%20Thrones%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia - The Two Thrones (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "907.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Prince%20of%20Persia%20-%20The%20Two%20Thrones%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia - Warrior Within (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Prince%20of%20Persia%20-%20Warrior%20Within%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia - Warrior Within (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Prince%20of%20Persia%20-%20Warrior%20Within%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Pro Rally 2002 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "539.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pro%20Rally%202002%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pro Rally 2002 (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "536.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pro%20Rally%202002%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Pro Rally 2002 (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "536.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pro%20Rally%202002%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Pro Tennis WTA Tour (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "311.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Pro%20Tennis%20WTA%20Tour%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Puyo Pop Fever (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "356.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Puyo%20Pop%20Fever%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Puyo Pop Fever (USA) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "356.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Puyo%20Pop%20Fever%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "R-Racing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/R-Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "R-Racing Evolution (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/R-Racing%20Evolution%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Rally Championship (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "434.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rally%20Championship%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Rally Championship (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "434.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rally%20Championship%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Rampage - Total Destruction (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "351.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rampage%20-%20Total%20Destruction%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Rave Master (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "314.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rave%20Master%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Rayman 3 - Hoodlum Havoc (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rayman%203%20-%20Hoodlum%20Havoc%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rayman 3 - Hoodlum Havoc (USA) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rayman%203%20-%20Hoodlum%20Havoc%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rayman Arena (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "925.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rayman%20Arena%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Red Faction II (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "914.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Red%20Faction%20II%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Red Faction II (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "914.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Red%20Faction%20II%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "RedCard (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/RedCard%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "RedCard 20-03 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/RedCard%2020-03%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Reign of Fire (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "739.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Reign%20of%20Fire%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Reign of Fire (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "739.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Reign%20of%20Fire%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "988.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "875.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1007.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil - Code - Veronica X (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "699.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20-%20Code%20-%20Veronica%20X%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil - Code - Veronica X (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "889.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20-%20Code%20-%20Veronica%20X%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil - Code - Veronica X (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "834.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20-%20Code%20-%20Veronica%20X%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil - Code - Veronica X (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "999.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20-%20Code%20-%20Veronica%20X%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil 3 - Nemesis (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "794.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%203%20-%20Nemesis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil 3 - Nemesis (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "756.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%203%20-%20Nemesis%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil 4 (Europe) (En,Fr,De,Es,It) (Bonus Disc)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%204%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Bonus%20Disc%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil 4 (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%204%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil 4 (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%204%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil 4 (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%204%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil 4 (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "995.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%204%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil 4 (USA) (Preview Disc)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "495.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%204%20%28USA%29%20%28Preview%20Disc%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil Zero (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20Zero%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil Zero (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20Zero%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil Zero (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20Zero%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil Zero (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Resident%20Evil%20Zero%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Ribbit King (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "992.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ribbit%20King%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ribbit King (USA) (En,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ribbit%20King%20%28USA%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Ribbit King Plus! (USA) (Bonus Disc)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ribbit%20King%20Plus%21%20%28USA%29%20%28Bonus%20Disc%29.zip",
    link2: ""
  },
  {
    name: "Road Trip - The Arcade Edition (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "34.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Road%20Trip%20-%20The%20Arcade%20Edition%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "RoadKill (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/RoadKill%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Robotech - Battlecry (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "669.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Robotech%20-%20Battlecry%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Robotech - Battlecry (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Robotech%20-%20Battlecry%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Robots (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1020.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Robots%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Robots (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "753.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Robots%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Rocky (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rocky%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rocky (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "775.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rocky%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Rogue Ops (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rogue%20Ops%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Rogue Ops (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rogue%20Ops%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Rune (USA) (Beta) (2003-03-04)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "496.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Rune%20%28USA%29%20%28Beta%29%20%282003-03-04%29.zip",
    link2: ""
  },
  {
    name: "Samurai Jack - The Shadow of Aku (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "465.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Samurai%20Jack%20-%20The%20Shadow%20of%20Aku%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Samurai Jack - The Shadow of Aku (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "438.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Samurai%20Jack%20-%20The%20Shadow%20of%20Aku%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Scaler (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "856.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Scaler%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! Mystery Mayhem (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "805.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Scooby-Doo%21%20Mystery%20Mayhem%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! Mystery Mayhem (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "869.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Scooby-Doo%21%20Mystery%20Mayhem%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! Night of 100 Frights (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "750.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Scooby-Doo%21%20Night%20of%20100%20Frights%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! Night of 100 Frights (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "823.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Scooby-Doo%21%20Night%20of%20100%20Frights%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! Night of 100 Frights (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "818.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Scooby-Doo%21%20Night%20of%20100%20Frights%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! Unmasked (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "741.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Scooby-Doo%21%20Unmasked%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! Unmasked (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "529.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Scooby-Doo%21%20Unmasked%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Scorpion King, The - Rise of the Akkadian (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "620.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Scorpion%20King%2C%20The%20-%20Rise%20of%20the%20Akkadian%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Scorpion King, The - Rise of the Akkadian (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "571.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Scorpion%20King%2C%20The%20-%20Rise%20of%20the%20Akkadian%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "SeaWorld Adventure Parks - Shamu's Deep Sea Adventures (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "580.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SeaWorld%20Adventure%20Parks%20-%20Shamu%27s%20Deep%20Sea%20Adventures%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "SeaWorld Adventure Parks - Shamu's Deep Sea Adventures (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "626.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SeaWorld%20Adventure%20Parks%20-%20Shamu%27s%20Deep%20Sea%20Adventures%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Second Sight (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "952.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Second%20Sight%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Second Sight (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "952.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Second%20Sight%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Sega Soccer Slam (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "924.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sega%20Soccer%20Slam%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Sega Soccer Slam (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "423.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sega%20Soccer%20Slam%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Serious Sam - Next Encounter (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "904.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Serious%20Sam%20-%20Next%20Encounter%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Serious Sam - Next Encounter (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "904.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Serious%20Sam%20-%20Next%20Encounter%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Shadow the Hedgehog (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shadow%20the%20Hedgehog%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Shadow the Hedgehog (USA) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shadow%20the%20Hedgehog%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Shonen Jump's One Piece - Grand Adventure (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "993.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shonen%20Jump%27s%20One%20Piece%20-%20Grand%20Adventure%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Shonen Jump's One Piece - Grand Battle (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "774.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shonen%20Jump%27s%20One%20Piece%20-%20Grand%20Battle%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Shonen Jump's One Piece - Pirates' Carnival (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "586.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shonen%20Jump%27s%20One%20Piece%20-%20Pirates%27%20Carnival%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Shrek 2 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "686.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shrek%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Shrek 2 (Europe) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "686.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shrek%202%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Shrek 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "950.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shrek%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Shrek Extra Large (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "968.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shrek%20Extra%20Large%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Shrek Extra Large (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "277.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shrek%20Extra%20Large%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Shrek Super Party (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "498.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shrek%20Super%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Shrek Super Party (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "499.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Shrek%20Super%20Party%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Simpsons, The - Hit & Run (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Simpsons%2C%20The%20-%20Hit%20%26%20Run%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Simpsons, The - Hit & Run (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "659.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Simpsons%2C%20The%20-%20Hit%20%26%20Run%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Simpsons, The - Road Rage (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "620.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Simpsons%2C%20The%20-%20Road%20Rage%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Simpsons, The - Road Rage (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "563.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Simpsons%2C%20The%20-%20Road%20Rage%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Sims 2, The (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "838.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sims%202%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Sims 2, The (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "837.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sims%202%2C%20The%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Sims 2, The - Pets (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "626.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sims%202%2C%20The%20-%20Pets%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Sims 2, The - Pets (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "626.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sims%202%2C%20The%20-%20Pets%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Sims, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "348.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sims%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sims, The (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "347.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sims%2C%20The%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Sims, The - Bustin' Out (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sims%2C%20The%20-%20Bustin%27%20Out%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Sims, The - Bustin' Out (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sims%2C%20The%20-%20Bustin%27%20Out%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Skies of Arcadia Legends (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Skies%20of%20Arcadia%20Legends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Skies of Arcadia Legends (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Skies%20of%20Arcadia%20Legends%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Smashing Drive (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "103.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Smashing%20Drive%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Smuggler's Run - Warzones (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "926.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Smuggler%27s%20Run%20-%20Warzones%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Smuggler's Run - Warzones (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Smuggler%27s%20Run%20-%20Warzones%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Sonic Adventure 2 - Battle (Europe) (En,Ja,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Adventure%202%20-%20Battle%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Sonic Adventure 2 - Battle (USA) (En,Ja,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Adventure%202%20-%20Battle%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Sonic Adventure DX - Director's Cut (Europe) (En,Ja,Fr,De,Es) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Adventure%20DX%20-%20Director%27s%20Cut%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Sonic Adventure DX - Director's Cut (USA) (En,Ja,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Adventure%20DX%20-%20Director%27s%20Cut%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Sonic Gems Collection (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Gems%20Collection%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Gems Collection (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Gems%20Collection%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Sonic Heroes (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "960.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Heroes%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Heroes (USA) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "955.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Heroes%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Mega Collection (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "787.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Mega%20Collection%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Mega Collection (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "790.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Mega%20Collection%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Sonic Riders (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Riders%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Riders (USA) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sonic%20Riders%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Soulcalibur II (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "745.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Soulcalibur%20II%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Soulcalibur II (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "744.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Soulcalibur%20II%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Soulcalibur II (USA) (Demo)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "87.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Soulcalibur%20II%20%28USA%29%20%28Demo%29.zip",
    link2: ""
  },
  {
    name: "Space Raiders (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "538.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Space%20Raiders%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Spartan - Total Warrior (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "970.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spartan%20-%20Total%20Warrior%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Spartan - Total Warrior (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "926.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spartan%20-%20Total%20Warrior%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Spawn - Armageddon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "823.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spawn%20-%20Armageddon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Spawn - Armageddon (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "646.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spawn%20-%20Armageddon%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Speed Challenge - Jacques Villeneuve's Racing Vision (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "377.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Speed%20Challenge%20-%20Jacques%20Villeneuve%27s%20Racing%20Vision%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Speed Kings (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "249.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Speed%20Kings%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Speed Kings (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "249.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Speed%20Kings%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Sphinx and the Cursed Mummy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "580.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sphinx%20and%20the%20Cursed%20Mummy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sphinx and the Cursed Mummy (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "573.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sphinx%20and%20the%20Cursed%20Mummy%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "863.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spider-Man%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man (Europe) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "862.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spider-Man%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "863.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spider-Man%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "863.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spider-Man%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man 2 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spider-Man%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spider-Man%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Spirits & Spells (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "428.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spirits%20%26%20Spells%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "SpyHunter (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "617.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SpyHunter%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "SpyHunter (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "617.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SpyHunter%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Spyro - A Hero's Tail (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spyro%20-%20A%20Hero%27s%20Tail%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Spyro - A Hero's Tail (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "460.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spyro%20-%20A%20Hero%27s%20Tail%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Spyro - Enter the Dragonfly (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "706.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spyro%20-%20Enter%20the%20Dragonfly%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Spyro - Enter the Dragonfly (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "346.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Spyro%20-%20Enter%20the%20Dragonfly%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "SRS - Street Racing Syndicate (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SRS%20-%20Street%20Racing%20Syndicate%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "SRS - Street Racing Syndicate (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "968.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SRS%20-%20Street%20Racing%20Syndicate%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "SRS - Street Racing Syndicate (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SRS%20-%20Street%20Racing%20Syndicate%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "SSX 3 (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SSX%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "SSX 3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "994.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SSX%203%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "SSX on Tour (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1014.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SSX%20on%20Tour%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "SSX on Tour (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SSX%20on%20Tour%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "SSX on Tour (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "980.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SSX%20on%20Tour%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "SSX Tricky (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "916.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SSX%20Tricky%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "SSX Tricky (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "763.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SSX%20Tricky%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Star Fox - Assault (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Fox%20-%20Assault%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Star Fox - Assault (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Fox%20-%20Assault%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Star Fox Adventures (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "501.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Fox%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Star Fox Adventures (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "501.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Fox%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Star Fox Adventures (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "503.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Fox%20Adventures%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Star Fox Adventures (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "504.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Fox%20Adventures%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Bounty Hunter (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20Bounty%20Hunter%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Bounty Hunter (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20Bounty%20Hunter%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Jedi Knight II - Jedi Outcast (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20Jedi%20Knight%20II%20-%20Jedi%20Outcast%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Jedi Knight II - Jedi Outcast (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20Jedi%20Knight%20II%20-%20Jedi%20Outcast%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Rogue Squadron II - Rogue Leader (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20Rogue%20Squadron%20II%20-%20Rogue%20Leader%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Rogue Squadron II - Rogue Leader (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20Rogue%20Squadron%20II%20-%20Rogue%20Leader%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Rogue Squadron III - Rebel Strike (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20Rogue%20Squadron%20III%20-%20Rebel%20Strike%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Rogue Squadron III - Rebel Strike (Europe) (En,Fr,De,Es,It) (Demo)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "518.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20Rogue%20Squadron%20III%20-%20Rebel%20Strike%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Rogue Squadron III - Rebel Strike (USA) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20Rogue%20Squadron%20III%20-%20Rebel%20Strike%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Rogue Squadron III - Rebel Strike (USA) (Limited Edition Preview Disc)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "706.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20Rogue%20Squadron%20III%20-%20Rebel%20Strike%20%28USA%29%20%28Limited%20Edition%20Preview%20Disc%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - The Clone Wars (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20The%20Clone%20Wars%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - The Clone Wars (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Star%20Wars%20-%20The%20Clone%20Wars%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Starsky & Hutch (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "782.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Starsky%20%26%20Hutch%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Starsky & Hutch (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "744.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Starsky%20%26%20Hutch%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Street Hoops (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Street%20Hoops%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Strike Force Bowling (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "143.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Strike%20Force%20Bowling%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Sum of All Fears, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "438.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sum%20of%20All%20Fears%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sum of All Fears, The (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "438.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Sum%20of%20All%20Fears%2C%20The%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Summoner - A Goddess Reborn (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "949.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Summoner%20-%20A%20Goddess%20Reborn%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Summoner - A Goddess Reborn (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "992.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Summoner%20-%20A%20Goddess%20Reborn%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Super Bubble Pop (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "181.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Bubble%20Pop%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Super Bust-A-Move All Stars (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "62.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Bust-A-Move%20All%20Stars%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Mario Strikers (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "402.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Mario%20Strikers%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Super Mario Sunshine (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1002.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Mario%20Sunshine%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Mario Sunshine (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "998.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Mario%20Sunshine%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Super Monkey Ball (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "332.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Monkey%20Ball%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Monkey Ball (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "276.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Monkey%20Ball%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Super Monkey Ball 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "735.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Monkey%20Ball%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Monkey Ball 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "616.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Monkey%20Ball%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Super Monkey Ball Adventure (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "435.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Monkey%20Ball%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Monkey Ball Adventure (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "435.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Monkey%20Ball%20Adventure%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Super Smash Bros. Melee (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "811.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Smash%20Bros.%20Melee%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Smash Bros. Melee (USA) (En,Ja)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Smash%20Bros.%20Melee%20%28USA%29%20%28En%2CJa%29.zip",
    link2: ""
  },
  {
    name: "Super Smash Bros. Melee (USA) (En,Ja) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Smash%20Bros.%20Melee%20%28USA%29%20%28En%2CJa%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Super Smash Bros. Melee (USA) (En,Ja) (Rev 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Super%20Smash%20Bros.%20Melee%20%28USA%29%20%28En%2CJa%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Superman - Shadow of Apokolips (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Superman%20-%20Shadow%20of%20Apokolips%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Superman - Shadow of Apokolips (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Superman%20-%20Shadow%20of%20Apokolips%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Surf's Up (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Surf%27s%20Up%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Swingerz Golf (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Swingerz%20Golf%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "SX Superstar (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "511.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SX%20Superstar%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "SX Superstar (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "511.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/SX%20Superstar%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tak and the Power of Juju (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tak%20and%20the%20Power%20of%20Juju%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tak and the Power of Juju (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tak%20and%20the%20Power%20of%20Juju%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tales of Symphonia (Europe) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "955.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tales%20of%20Symphonia%20%28Europe%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Tales of Symphonia (Europe) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1009.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tales%20of%20Symphonia%20%28Europe%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Tales of Symphonia (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "995.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tales%20of%20Symphonia%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Tales of Symphonia (USA) (Disc 1) (Beta) (2004-03-30)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "992.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tales%20of%20Symphonia%20%28USA%29%20%28Disc%201%29%20%28Beta%29%20%282004-03-30%29.zip",
    link2: ""
  },
  {
    name: "Tales of Symphonia (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1012.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tales%20of%20Symphonia%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Tales of Symphonia (USA) (Disc 2) (Beta) (2004-03-30)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1009.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tales%20of%20Symphonia%20%28USA%29%20%28Disc%202%29%20%28Beta%29%20%282004-03-30%29.zip",
    link2: ""
  },
  {
    name: "Taz - Wanted (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "364.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Taz%20-%20Wanted%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Taz - Wanted (USA) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "363.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Taz%20-%20Wanted%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Teen Titans (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "544.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Teen%20Titans%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "888.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Teenage%20Mutant%20Ninja%20Turtles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1023.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Teenage%20Mutant%20Ninja%20Turtles%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles 2 - Battle Nexus (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "692.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Teenage%20Mutant%20Ninja%20Turtles%202%20-%20Battle%20Nexus%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles 2 - Battle Nexus (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "790.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Teenage%20Mutant%20Ninja%20Turtles%202%20-%20Battle%20Nexus%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles 2 - Battle Nexus (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "695.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Teenage%20Mutant%20Ninja%20Turtles%202%20-%20Battle%20Nexus%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles 2 - Battle Nexus (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "789.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Teenage%20Mutant%20Ninja%20Turtles%202%20-%20Battle%20Nexus%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles 3 - Mutant Nightmare (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "800.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Teenage%20Mutant%20Ninja%20Turtles%203%20-%20Mutant%20Nightmare%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles 3 - Mutant Nightmare (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "757.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Teenage%20Mutant%20Ninja%20Turtles%203%20-%20Mutant%20Nightmare%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Terminator 3 - The Redemption (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Terminator%203%20-%20The%20Redemption%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Terminator 3 - The Redemption (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "971.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Terminator%203%20-%20The%20Redemption%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tetris Worlds (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tetris%20Worlds%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Tetris Worlds (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "854.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tetris%20Worlds%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tetris Worlds (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "923.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tetris%20Worlds%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 06 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%2006%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 06 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%2006%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2003 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "970.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202003%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2003 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "970.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202003%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2004 (Europe) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "990.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202004%20%28Europe%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2004 (Europe) (Disc 1) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "981.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202004%20%28Europe%29%20%28Disc%201%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2004 (Europe) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "965.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202004%20%28Europe%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2004 (Europe) (Disc 2) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "953.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202004%20%28Europe%29%20%28Disc%202%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2004 (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "985.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202004%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2004 (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "957.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202004%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2005 (Europe) (En,Fr,De) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "950.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202005%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2005 (Europe) (En,Fr,De) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "967.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202005%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2005 (USA) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "932.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202005%20%28USA%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2005 (USA) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "947.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tiger%20Woods%20PGA%20Tour%202005%20%28USA%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "TimeSplitters - Future Perfect (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "997.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TimeSplitters%20-%20Future%20Perfect%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "TimeSplitters - Future Perfect (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "997.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TimeSplitters%20-%20Future%20Perfect%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "TimeSplitters 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "969.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TimeSplitters%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "TimeSplitters 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "969.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TimeSplitters%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "TMNT (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TMNT%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "TMNT (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1005.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TMNT%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "TMNT - Mutant Melee (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "456.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TMNT%20-%20Mutant%20Melee%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tom and Jerry in War of the Whiskers (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "145.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20and%20Jerry%20in%20War%20of%20the%20Whiskers%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Ghost Recon (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "847.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Ghost%20Recon%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Ghost Recon (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "847.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Ghost%20Recon%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Ghost Recon 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1023.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Ghost%20Recon%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Ghost Recon 2 (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1023.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Ghost%20Recon%202%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Rainbow Six - Lockdown (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Rainbow%20Six%20-%20Lockdown%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Rainbow Six - Lockdown (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Rainbow%20Six%20-%20Lockdown%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Rainbow Six 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Rainbow%20Six%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Rainbow Six 3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Rainbow%20Six%203%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell (Europe) (En,Fr,De,Es,It) (Demo)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "42.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Chaos Theory (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "927.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Chaos%20Theory%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Chaos Theory (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Chaos%20Theory%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Chaos Theory (USA) (En,Fr,Es) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "870.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Chaos%20Theory%20%28USA%29%20%28En%2CFr%2CEs%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Chaos Theory (USA) (En,Fr,Es) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "975.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Chaos%20Theory%20%28USA%29%20%28En%2CFr%2CEs%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Double Agent (Europe) (En,Fr,De,Es,It) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Double%20Agent%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Double Agent (Europe) (En,Fr,De,Es,It) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Double%20Agent%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Double Agent (USA) (En,Fr,Es) (Disc 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Double%20Agent%20%28USA%29%20%28En%2CFr%2CEs%29%20%28Disc%201%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Double Agent (USA) (En,Fr,Es) (Disc 2)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Double%20Agent%20%28USA%29%20%28En%2CFr%2CEs%29%20%28Disc%202%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Pandora Tomorrow (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "826.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Pandora%20Tomorrow%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Pandora Tomorrow (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Pandora%20Tomorrow%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Pandora Tomorrow (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "850.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Pandora%20Tomorrow%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Tonka - Rescue Patrol (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "168.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tonka%20-%20Rescue%20Patrol%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's American Wasteland (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1011.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tony%20Hawk%27s%20American%20Wasteland%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's American Wasteland (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1011.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tony%20Hawk%27s%20American%20Wasteland%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Pro Skater 3 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tony%20Hawk%27s%20Pro%20Skater%203%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Pro Skater 3 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tony%20Hawk%27s%20Pro%20Skater%203%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Pro Skater 4 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tony%20Hawk%27s%20Pro%20Skater%204%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Pro Skater 4 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tony%20Hawk%27s%20Pro%20Skater%204%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Underground (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tony%20Hawk%27s%20Underground%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Underground (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tony%20Hawk%27s%20Underground%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Underground 2 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tony%20Hawk%27s%20Underground%202%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Underground 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tony%20Hawk%27s%20Underground%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Top Angler - Real Bass Fishing (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "53.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Top%20Angler%20-%20Real%20Bass%20Fishing%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Top Angler - Real Bass Fishing (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "53.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Top%20Angler%20-%20Real%20Bass%20Fishing%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Top Gun - Combat Zones (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "636.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Top%20Gun%20-%20Combat%20Zones%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Top Gun - Combat Zones (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "636.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Top%20Gun%20-%20Combat%20Zones%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "TransWorld Surf - Next Wave (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TransWorld%20Surf%20-%20Next%20Wave%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Trigger Man (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "109.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Trigger%20Man%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "True Crime - New York City (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "909.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/True%20Crime%20-%20New%20York%20City%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "True Crime - New York City (Europe) (Fr,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "909.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/True%20Crime%20-%20New%20York%20City%20%28Europe%29%20%28Fr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "True Crime - New York City (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "909.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/True%20Crime%20-%20New%20York%20City%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "True Crime - Streets of LA (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1008.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/True%20Crime%20-%20Streets%20of%20LA%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "True Crime - Streets of LA (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1008.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/True%20Crime%20-%20Streets%20of%20LA%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Tube Slider - The Championship of Future Formula (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "440.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Tube%20Slider%20-%20The%20Championship%20of%20Future%20Formula%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Turok - Evolution (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "870.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Turok%20-%20Evolution%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Turok - Evolution (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "722.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Turok%20-%20Evolution%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "TY the Tasmanian Tiger (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "998.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TY%20the%20Tasmanian%20Tiger%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "TY the Tasmanian Tiger (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "974.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TY%20the%20Tasmanian%20Tiger%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "TY the Tasmanian Tiger - Night of the Quinkan (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "916.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TY%20the%20Tasmanian%20Tiger%20-%20Night%20of%20the%20Quinkan%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "TY the Tasmanian Tiger 2 - Bush Rescue (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1015.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TY%20the%20Tasmanian%20Tiger%202%20-%20Bush%20Rescue%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "TY the Tasmanian Tiger 2 - Bush Rescue (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1021.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/TY%20the%20Tasmanian%20Tiger%202%20-%20Bush%20Rescue%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "UEFA Champions League 2004-2005 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "742.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/UEFA%20Champions%20League%202004-2005%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "UFC - Throwdown (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "740.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/UFC%20-%20Throwdown%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "UFC - Throwdown (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "875.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/UFC%20-%20Throwdown%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Codes for Use with Animal Crossing (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "879.3 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ultimate%20Codes%20for%20Use%20with%20Animal%20Crossing%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Codes for Use with Metroid Prime (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "773.9 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ultimate%20Codes%20for%20Use%20with%20Metroid%20Prime%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Codes for Use with The Legend of Zelda - The Wind Waker (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "938.0 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ultimate%20Codes%20for%20Use%20with%20The%20Legend%20of%20Zelda%20-%20The%20Wind%20Waker%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Codes for Use with Tom Clancy's Splinter Cell (USA) (Unl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "519.0 KiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ultimate%20Codes%20for%20Use%20with%20Tom%20Clancy%27s%20Splinter%20Cell%20%28USA%29%20%28Unl%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Muscle - Legends vs. New Generation (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "582.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ultimate%20Muscle%20-%20Legends%20vs.%20New%20Generation%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Spider-Man (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "865.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ultimate%20Spider-Man%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Spider-Man (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "893.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Ultimate%20Spider-Man%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Universal Studios Theme Park Adventure (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "520.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Universal%20Studios%20Theme%20Park%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Universal Studios Theme Park Adventure (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "521.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Universal%20Studios%20Theme%20Park%20Adventure%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Urban Freestyle Soccer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Urban%20Freestyle%20Soccer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Urbz, The - Sims in the City (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "990.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Urbz%2C%20The%20-%20Sims%20in%20the%20City%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Urbz, The - Sims in the City (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "990.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Urbz%2C%20The%20-%20Sims%20in%20the%20City%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "V-Rally 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "844.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/V-Rally%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Vexx (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "894.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Vexx%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Vexx (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "894.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Vexx%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Viewtiful Joe (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "865.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Viewtiful%20Joe%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Viewtiful Joe (Europe) (Promo)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "131.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Viewtiful%20Joe%20%28Europe%29%20%28Promo%29.zip",
    link2: ""
  },
  {
    name: "Viewtiful Joe (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "893.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Viewtiful%20Joe%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Viewtiful Joe - Red Hot Rumble (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Viewtiful%20Joe%20-%20Red%20Hot%20Rumble%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Viewtiful Joe - Red Hot Rumble (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "688.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Viewtiful%20Joe%20-%20Red%20Hot%20Rumble%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Viewtiful Joe 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "982.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Viewtiful%20Joe%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Viewtiful Joe 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "639.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Viewtiful%20Joe%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Virtua Quest (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Virtua%20Quest%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Virtua Striker 2002 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "370.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Virtua%20Striker%202002%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Virtua Striker 3 Ver. 2002 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "404.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Virtua%20Striker%203%20Ver.%202002%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Wallace & Gromit in Project Zoo (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "742.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Wallace%20%26%20Gromit%20in%20Project%20Zoo%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Wallace & Gromit in Project Zoo (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "718.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Wallace%20%26%20Gromit%20in%20Project%20Zoo%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Walt Disney Pictures Presents Meet the Robinsons (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1018.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Walt%20Disney%20Pictures%20Presents%20Meet%20the%20Robinsons%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Wario World (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "188.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Wario%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Wario World (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "188.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Wario%20World%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "WarioWare, Inc. - Mega Party Game$! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "491.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WarioWare%2C%20Inc.%20-%20Mega%20Party%20Game%24%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "WarioWare, Inc. - Mega Party Game$! (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "621.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WarioWare%2C%20Inc.%20-%20Mega%20Party%20Game%24%21%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Wave Race - Blue Storm (Europe, Australia)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Wave%20Race%20-%20Blue%20Storm%20%28Europe%2C%20Australia%29.zip",
    link2: ""
  },
  {
    name: "Wave Race - Blue Storm (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.0 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Wave%20Race%20-%20Blue%20Storm%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Whirl Tour (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "641.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Whirl%20Tour%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Whirl Tour (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "641.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Whirl%20Tour%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Whirl Tour (USA) (Beta) (2002-09-14)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "641.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Whirl%20Tour%20%28USA%29%20%28Beta%29%20%282002-09-14%29.zip",
    link2: ""
  },
  {
    name: "World Racing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "429.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/World%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "World Series of Poker (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "986.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/World%20Series%20of%20Poker%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Worms 3D (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "724.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Worms%203D%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Worms 3D (USA) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "689.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Worms%203D%20%28USA%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Worms Blast (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "342.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Worms%20Blast%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Worms Blast (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "342.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Worms%20Blast%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Wreckless - The Yakuza Missions (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "474.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Wreckless%20-%20The%20Yakuza%20Missions%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Wreckless - The Yakuza Missions (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "430.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Wreckless%20-%20The%20Yakuza%20Missions%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "WTA Tour Tennis (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "312.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WTA%20Tour%20Tennis%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "WWE Crush Hour (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "901.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20Crush%20Hour%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "WWE Crush Hour (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "897.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20Crush%20Hour%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "WWE Day of Reckoning (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "972.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20Day%20of%20Reckoning%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "WWE Day of Reckoning (Europe) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "973.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20Day%20of%20Reckoning%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "WWE Day of Reckoning (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "972.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20Day%20of%20Reckoning%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "WWE Day of Reckoning (USA) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "973.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20Day%20of%20Reckoning%20%28USA%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "WWE Day of Reckoning 2 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "928.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20Day%20of%20Reckoning%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "WWE Day of Reckoning 2 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "928.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20Day%20of%20Reckoning%202%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "WWE WrestleMania X8 (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "856.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20WrestleMania%20X8%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "WWE WrestleMania X8 (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "866.8 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20WrestleMania%20X8%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "WWE WrestleMania XIX (Europe, Australia)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20WrestleMania%20XIX%20%28Europe%2C%20Australia%29.zip",
    link2: ""
  },
  {
    name: "WWE WrestleMania XIX (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/WWE%20WrestleMania%20XIX%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "X-Men - Next Dimension (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "789.5 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%20-%20Next%20Dimension%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "X-Men - Next Dimension (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "809.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%20-%20Next%20Dimension%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "X-Men - The Official Game (Europe) (En,Fr)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%20-%20The%20Official%20Game%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "X-Men - The Official Game (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%20-%20The%20Official%20Game%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "X-Men 2 - Wolverine's Revenge (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%202%20-%20Wolverine%27s%20Revenge%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "X-Men 2 - Wolverine's Revenge (Europe) (Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%202%20-%20Wolverine%27s%20Revenge%20%28Europe%29%20%28Fr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "X-Men Legends (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%20Legends%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "X-Men Legends (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%20Legends%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "X-Men Legends (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%20Legends%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "X-Men Legends II - Rise of Apocalypse (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%20Legends%20II%20-%20Rise%20of%20Apocalypse%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "X-Men Legends II - Rise of Apocalypse (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.3 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X-Men%20Legends%20II%20-%20Rise%20of%20Apocalypse%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "X2 - Wolverine's Revenge (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/X2%20-%20Wolverine%27s%20Revenge%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "XGIII - Extreme G Racing (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "361.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/XGIII%20-%20Extreme%20G%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "XGIII - Extreme G Racing (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "312.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/XGIII%20-%20Extreme%20G%20Racing%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "XGRA - Extreme G Racing Association (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "813.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/XGRA%20-%20Extreme%20G%20Racing%20Association%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "XGRA - Extreme G Racing Association (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "819.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/XGRA%20-%20Extreme%20G%20Racing%20Association%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "XIII (Europe)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "949.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/XIII%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "XIII (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.2 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/XIII%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "XIII (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "1.1 GiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/XIII%20%28USA%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! The Falsebound Kingdom (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "288.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Yu-Gi-Oh%21%20The%20Falsebound%20Kingdom%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! The Falsebound Kingdom (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "419.2 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Yu-Gi-Oh%21%20The%20Falsebound%20Kingdom%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Zapper (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "692.4 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Zapper%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Zapper (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "692.6 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Zapper%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Zatch Bell! Mamodo Battles (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "323.9 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Zatch%20Bell%21%20Mamodo%20Battles%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Zatch Bell! Mamodo Fury (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "378.0 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Zatch%20Bell%21%20Mamodo%20Fury%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "Zoids - Battle Legends (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "331.3 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/Zoids%20-%20Battle%20Legends%20%28USA%29.zip",
    link2: ""
  },
  {
    name: "ZooCube (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "686.1 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/ZooCube%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "ZooCube (USA)",
    image: "https://i.postimg.cc/7LkzRt7C/Nintendo-Game-Cube-logo.png",
    size: "734.7 MiB",
    link1: "https://myrient.erista.me/files/Redump/Nintendo%20-%20GameCube%20-%20NKit%20RVZ%20%5Bzstd-19-128k%5D/ZooCube%20%28USA%29.zip",
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