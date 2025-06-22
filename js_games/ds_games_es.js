const roms = [
  {
    name: "007 - Quantum of Solace (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/007%20-%20Quantum%20of%20Solace%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "007 - Quantum of Solace (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/007%20-%20Quantum%20of%20Solace%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "100 Classic Book Collection (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/100%20Classic%20Book%20Collection%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "100 Classic Games (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/100%20Classic%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "100 Classic Games (Europe) (En,Fr,De,Es,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/100%20Classic%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "1000 Cooking Recipes from Elle a Table (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/1000%20Cooking%20Recipes%20from%20Elle%20a%20Table%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "1001 Crosswords (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/1001%20Crosswords%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "1001 Touch Games (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/1001%20Touch%20Games%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "1001 Touch Games (Europe) (En,Fr,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/1001%20Touch%20Games%20%28Europe%29%20%28En%2CFr%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "101 Dino Pets (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/101%20Dino%20Pets%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "101 in 1 Explosive Megamix (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/101%20in%201%20Explosive%20Megamix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "101 in 1 Sports Megamix (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/101%20in%201%20Sports%20Megamix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "11 Card Games (Europe) (En,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/11%20Card%20Games%20%28Europe%29%20%28En%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "12 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/12%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "18 Card Games (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/18%20Card%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "2 Games in 1 - Jewel Master - Cradle of Egypt + Mahjongg - Ancient Egypt (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20Games%20in%201%20-%20Jewel%20Master%20-%20Cradle%20of%20Egypt%20%2B%20Mahjongg%20-%20Ancient%20Egypt%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "2 Games on 1 Card - Monster Trucks Mayhem & ATV - Thunder Ridge Riders (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20Games%20on%201%20Card%20-%20Monster%20Trucks%20Mayhem%20%26%20ATV%20-%20Thunder%20Ridge%20Riders%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "2 in 1 - Mahjong + Mahjong Around the World (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20in%201%20-%20Mahjong%20%2B%20Mahjong%20Around%20the%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "2 in 1 - Music for Kids + Englisch Macht Spass - Eine Reise nach London! (Europe) (En,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20in%201%20-%20Music%20for%20Kids%20%2B%20Englisch%20Macht%20Spass%20-%20Eine%20Reise%20nach%20London%21%20%28Europe%29%20%28En%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "2 in 1 - My Little Baby + My Boyfriend (Europe) (En,Fr,De,Es,It,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20in%201%20-%20My%20Little%20Baby%20%2B%20My%20Boyfriend%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "2 in 1 - My Pet Hotel + My Vet Practice - In the Country (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20in%201%20-%20My%20Pet%20Hotel%20%2B%20My%20Vet%20Practice%20-%20In%20the%20Country%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "2 in 1 - My Pet Hotel 2 + My Vet Practice - In the Country (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20in%201%20-%20My%20Pet%20Hotel%202%20%2B%20My%20Vet%20Practice%20-%20In%20the%20Country%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "2 in 1 - My Pet School + Best Friends - My Horse (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20in%201%20-%20My%20Pet%20School%20%2B%20Best%20Friends%20-%20My%20Horse%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "2 in 1 - My Riding Stables + My Riding Stables - Life with Horses (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20in%201%20-%20My%20Riding%20Stables%20%2B%20My%20Riding%20Stables%20-%20Life%20with%20Horses%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "2 in 1 - My Riding Stables + My Western Horse (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20in%201%20-%20My%20Riding%20Stables%20%2B%20My%20Western%20Horse%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "2 in 1 - My Vet Practice + My Pet Hotel 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2%20in%201%20-%20My%20Vet%20Practice%20%2B%20My%20Pet%20Hotel%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "2006 FIFA World Cup - Germany 2006 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/2006%20FIFA%20World%20Cup%20-%20Germany%202006%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "3 Game Pack! - Cradle of Rome + Cradle of Athena + Cradle of Egypt (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/3%20Game%20Pack%21%20-%20Cradle%20of%20Rome%20%2B%20Cradle%20of%20Athena%20%2B%20Cradle%20of%20Egypt%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "3 Game Pack! - Cradle of Rome + Cradle of Athena + Cradle of Egypt (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/3%20Game%20Pack%21%20-%20Cradle%20of%20Rome%20%2B%20Cradle%20of%20Athena%20%2B%20Cradle%20of%20Egypt%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "3 Game Pack! - Uno & Skip-Bo & Uno Free Fall (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/3%20Game%20Pack%21%20-%20Uno%20%26%20Skip-Bo%20%26%20Uno%20Free%20Fall%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "3 in 1 - Animals (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/3%20in%201%20-%20Animals%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "3 in 1 - Horses (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/3%20in%201%20-%20Horses%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "3 in 1 - My Horse + My Vet Practice + My Vet Practice in the Country (Europe) (Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/3%20in%201%20-%20My%20Horse%20%2B%20My%20Vet%20Practice%20%2B%20My%20Vet%20Practice%20in%20the%20Country%20%28Europe%29%20%28Fr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "3 in 1 - My Riding Stables + My Pet School + My Western Horse (Europe) (Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/3%20in%201%20-%20My%20Riding%20Stables%20%2B%20My%20Pet%20School%20%2B%20My%20Western%20Horse%20%28Europe%29%20%28Fr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "3 in 1 - My Riding Stables - Life with Horses + My Pet Hotel 2 & + My Pet School (Europe) (Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/3%20in%201%20-%20My%20Riding%20Stables%20-%20Life%20with%20Horses%20%2B%20My%20Pet%20Hotel%202%20%26%20%2B%20My%20Pet%20School%20%28Europe%29%20%28Fr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "3 in 1 - My Vet Practice & Riding Star & My Vet Practice in Australia (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/3%20in%201%20-%20My%20Vet%20Practice%20%26%20Riding%20Star%20%26%20My%20Vet%20Practice%20in%20Australia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "3 in 1 - Solitaire, Mahjong & Tangram (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/3%20in%201%20-%20Solitaire%2C%20Mahjong%20%26%20Tangram%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "4 Elements (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/4%20Elements%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "4 Elements (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/4%20Elements%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "4 Elements (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/4%20Elements%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "4 Game Fun Pack - Monopoly + Boggle + Yahtzee + Battleship (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/4%20Game%20Fun%20Pack%20-%20Monopoly%20%2B%20Boggle%20%2B%20Yahtzee%20%2B%20Battleship%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "42 All-Time Classics (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/42%20All-Time%20Classics%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "42 All-Time Classics (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/42%20All-Time%20Classics%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "50 Classic Games (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/50%20Classic%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "7 Wonders - Treasures of Seven (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/7%20Wonders%20-%20Treasures%20of%20Seven%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "7 Wonders II (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/7%20Wonders%20II%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "7 Wonders II (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/7%20Wonders%20II%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "7 Wonders of the Ancient World (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/7%20Wonders%20of%20the%20Ancient%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "8BallAllstars (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/8BallAllstars%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ace Attorney Investigations - Miles Edgeworth (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ace%20Attorney%20Investigations%20-%20Miles%20Edgeworth%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Actionloop (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Actionloop%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Active Health with Carol Vorderman (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Active%20Health%20with%20Carol%20Vorderman%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Actua Pool (Europe) (En,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Actua%20Pool%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Addy - Do You Speak English (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Addy%20-%20Do%20You%20Speak%20English%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Advance Wars - Dark Conflict (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Advance%20Wars%20-%20Dark%20Conflict%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Advance Wars - Dual Strike (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Advance%20Wars%20-%20Dual%20Strike%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Adventures of Pinocchio (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Adventures%20of%20Pinocchio%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Agatha Christie - The ABC Murders (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Agatha%20Christie%20-%20The%20ABC%20Murders%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Agatha Christie - The ABC Murders (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Agatha%20Christie%20-%20The%20ABC%20Murders%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Age of Empires - Mythologies (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Age%20of%20Empires%20-%20Mythologies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Age of Empires - The Age of Kings (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Age%20of%20Empires%20-%20The%20Age%20of%20Kings%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Age of Empires - The Age of Kings (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Age%20of%20Empires%20-%20The%20Age%20of%20Kings%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Alex Rider - Stormbreaker (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "107.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Alex%20Rider%20-%20Stormbreaker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Alice in Wonderland (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Alice%20in%20Wonderland%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Aliens - Infestation (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Aliens%20-%20Infestation%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Aliens in the Attic (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Aliens%20in%20the%20Attic%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "All Star Cheerleader (Europe) (En,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/All%20Star%20Cheerleader%20%28Europe%29%20%28En%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "All Star Cheerleader (Europe) (Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/All%20Star%20Cheerleader%20%28Europe%29%20%28Sv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Allied Ace Pilots (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Allied%20Ace%20Pilots%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Alpha and Omega (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Alpha%20and%20Omega%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Alvin and the Chipmunks (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Alvin%20and%20the%20Chipmunks%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Alvin and the Chipmunks - Chipwrecked (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Alvin%20and%20the%20Chipmunks%20-%20Chipwrecked%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Alvin and the Chipmunks - Chipwrecked (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Alvin%20and%20the%20Chipmunks%20-%20Chipwrecked%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Alvin and the Chipmunks - The Squeakquel (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Alvin%20and%20the%20Chipmunks%20-%20The%20Squeakquel%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Aly & AJ Adventure, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Aly%20%26%20AJ%20Adventure%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Amazing Adventures - The Forgotten Ruins (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Amazing%20Adventures%20-%20The%20Forgotten%20Ruins%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Amazing Spider-Man, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Amazing%20Spider-Man%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "America's Next Top Model (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/America%27s%20Next%20Top%20Model%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "America's Next Top Model (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/America%27s%20Next%20Top%20Model%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "America's Next Top Model (Europe) (En,Fr,Es,It,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/America%27s%20Next%20Top%20Model%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "American Dragon - Jake Long (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/American%20Dragon%20-%20Jake%20Long%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "AMF Bowling Pinbusters! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/AMF%20Bowling%20Pinbusters%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "An M. Night Shyamalan Film - The Last Airbender (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/An%20M.%20Night%20Shyamalan%20Film%20-%20The%20Last%20Airbender%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Ancient Spirits - Columbus' Legacy (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ancient%20Spirits%20-%20Columbus%27%20Legacy%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Angel Cat Sugar (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Angel%20Cat%20Sugar%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Angel Cat Sugar (Europe) (Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Angel%20Cat%20Sugar%20%28Europe%29%20%28Sv%2CNo%2CDa%2CFi%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Animal Crossing - Wild World (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Crossing%20-%20Wild%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Animal Crossing - Wild World (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Crossing%20-%20Wild%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Animal Crossing - Wild World - Broadcast Version (Europe) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Crossing%20-%20Wild%20World%20-%20Broadcast%20Version%20%28Europe%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Animal Genius (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Genius%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Animal Kororo (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Kororo%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Animal Life - Africa (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "51.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Life%20-%20Africa%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Animal Life - Australia (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Life%20-%20Australia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Animal Life - Dinosaurs (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Life%20-%20Dinosaurs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Animal Life - Eurasia (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Life%20-%20Eurasia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Animal Life - North America (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Life%20-%20North%20America%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Animal Paradise (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Paradise%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Animal Planet - Emergency Vets (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Planet%20-%20Emergency%20Vets%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Animal Planet - Vet Life (Europe) (En,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20Planet%20-%20Vet%20Life%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Animal World - Big Cats (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20World%20-%20Big%20Cats%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Animal World - Dinosaurs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animal%20World%20-%20Dinosaurs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Animaniacs - Lights, Camera, Action! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animaniacs%20-%20Lights%2C%20Camera%2C%20Action%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Animaniacs - Lights, Camera, Action! (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Animaniacs%20-%20Lights%2C%20Camera%2C%20Action%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Ankh - Curse of the Scarab King (Europe) (En,Es,It,Nl,Pl,Ru)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ankh%20-%20Curse%20of%20the%20Scarab%20King%20%28Europe%29%20%28En%2CEs%2CIt%2CNl%2CPl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Anky's Ruiterschool (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Anky%27s%20Ruiterschool%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Anno - Create a New World (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "92.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Anno%20-%20Create%20a%20New%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Anno 1701 - Dawn of Discovery (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Anno%201701%20-%20Dawn%20of%20Discovery%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Another Code - Two Memories (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Another%20Code%20-%20Two%20Memories%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ant Nation (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ant%20Nation%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Apassionata (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Apassionata%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Apollo Justice - Ace Attorney (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Apollo%20Justice%20-%20Ace%20Attorney%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Apollo Justice - Ace Attorney (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Apollo%20Justice%20-%20Ace%20Attorney%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Apollo Justice - Ace Attorney (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Apollo%20Justice%20-%20Ace%20Attorney%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Aprende Con Pokemon - Aventura Entre Las Teclas (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Aprende%20Con%20Pokemon%20-%20Aventura%20Entre%20Las%20Teclas%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Aqua Panic! (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Aqua%20Panic%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Aquarium by DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Aquarium%20by%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Arceus Distribution 2010 (Europe) (En,Fr,De,Es,It) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Arceus%20Distribution%202010%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "Arctic Tale (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Arctic%20Tale%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Are You Smarter than a 10 Year Old - The Official Nintendo DS Game (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Are%20You%20Smarter%20than%20a%2010%20Year%20Old%20-%20The%20Official%20Nintendo%20DS%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Arkanoid DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Arkanoid%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Army Men - Soldiers of Misfortune (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Army%20Men%20-%20Soldiers%20of%20Misfortune%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Around the World in 80 Days (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Around%20the%20World%20in%2080%20Days%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Around the World in 80 Days (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Around%20the%20World%20in%2080%20Days%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Around the World in 80 Days (Europe) (En,Fr,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Around%20the%20World%20in%2080%20Days%20%28Europe%29%20%28En%2CFr%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Art Academy (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Art%20Academy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Art of Murder - FBI Top Secret (Europe) (Fr,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Art%20of%20Murder%20-%20FBI%20Top%20Secret%20%28Europe%29%20%28Fr%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Art Puzzle - Das Kunstmagazin - Echter Puzzlespass fuer Unterwegs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Art%20Puzzle%20-%20Das%20Kunstmagazin%20-%20Echter%20Puzzlespass%20fuer%20Unterwegs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Arthur and the Minimoys (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Arthur%20and%20the%20Minimoys%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Arthur and the Revenge of Maltazard (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Arthur%20and%20the%20Revenge%20of%20Maltazard%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Asphalt - Urban GT (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Asphalt%20-%20Urban%20GT%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Asphalt - Urban GT 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Asphalt%20-%20Urban%20GT%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Assassin's Creed - Altair's Chronicles (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Assassin%27s%20Creed%20-%20Altair%27s%20Chronicles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Assassin's Creed II - Discovery (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Assassin%27s%20Creed%20II%20-%20Discovery%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Asterix & Obelix XXL 2 - Mission Wifix (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Asterix%20%26%20Obelix%20XXL%202%20-%20Mission%20Wifix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Asterix - Brain Trainer (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Asterix%20-%20Brain%20Trainer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Asterix - These Romans Are Crazy! (Europe) (En,Fr,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Asterix%20-%20These%20Romans%20Are%20Crazy%21%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Asterix at the Olympic Games (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Asterix%20at%20the%20Olympic%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Astro Boy - The Video Game (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Astro%20Boy%20-%20The%20Video%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Astrology (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Astrology%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Atari Greatest Hits - Volume 1 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Atari%20Greatest%20Hits%20-%20Volume%201%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Atlantic Quest (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Atlantic%20Quest%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Atlantic Quest + Galactic Quest (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Atlantic%20Quest%20%2B%20Galactic%20Quest%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "ATV Quad Frenzy (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/ATV%20Quad%20Frenzy%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "ATV Quad Kings (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "89.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/ATV%20Quad%20Kings%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Auto Escuela - Aprueba Conmigo (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Auto%20Escuela%20-%20Aprueba%20Conmigo%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Autoescuela Trainer (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Autoescuela%20Trainer%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Avalon Code (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Avalon%20Code%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Avatar - The Legend of Aang (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Avatar%20-%20The%20Legend%20of%20Aang%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Avatar - The Legend of Aang - Into the Inferno (Europe) (En,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Avatar%20-%20The%20Legend%20of%20Aang%20-%20Into%20the%20Inferno%20%28Europe%29%20%28En%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Avatar - The Legend of Aang - The Burning Earth (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Avatar%20-%20The%20Legend%20of%20Aang%20-%20The%20Burning%20Earth%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Avatar - The Legend of Aang - The Burning Earth (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Avatar%20-%20The%20Legend%20of%20Aang%20-%20The%20Burning%20Earth%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Away - Shuffle Dungeon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Away%20-%20Shuffle%20Dungeon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "B Team - Metal Cartoon Squad (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/B%20Team%20-%20Metal%20Cartoon%20Squad%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "B-17 - Fortress in the Sky (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/B-17%20-%20Fortress%20in%20the%20Sky%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "B-17 - Fortress in the Sky (Europe) (En,Fr,Es,It) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/B-17%20-%20Fortress%20in%20the%20Sky%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Baby Fashion Star (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Baby%20Fashion%20Star%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Baby Life (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Baby%20Life%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Baby Pals (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Baby%20Pals%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Babysitting Mania (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Babysitting%20Mania%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Back at the Barnyard - Barnyard Games (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "101.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Back%20at%20the%20Barnyard%20-%20Barnyard%20Games%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Backyardigans, The (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "101.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Backyardigans%2C%20The%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Bakugan - Battle Brawlers (Europe) (En,Fr,De,Es,It,Nl,Sv) (B6RP)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bakugan%20-%20Battle%20Brawlers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29%20%28B6RP%29.zip",
    link2: ""
  },
  {
    name: "Bakugan - Battle Brawlers (Europe) (En,Fr,De,Es,It,Nl,Sv) (Toys'R'Us)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bakugan%20-%20Battle%20Brawlers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29%20%28Toys%27R%27Us%29.zip",
    link2: ""
  },
  {
    name: "Bakugan - Battle Brawlers - Battle Trainer (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bakugan%20-%20Battle%20Brawlers%20-%20Battle%20Trainer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Bakugan - Defenders of the Core (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bakugan%20-%20Defenders%20of%20the%20Core%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Bakugan - Rise of the Resistance (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bakugan%20-%20Rise%20of%20the%20Resistance%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Bakushow - Challenge Your Friends! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bakushow%20-%20Challenge%20Your%20Friends%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ballerina (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "173.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ballerina%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Balls of Fury (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Balls%20of%20Fury%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Band Hero (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Band%20Hero%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bandz Mania (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bandz%20Mania%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Bangai-O Spirits (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bangai-O%20Spirits%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Barbie - Dreamhouse Party (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20-%20Dreamhouse%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Barbie - Groom and Glam Pups (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20-%20Groom%20and%20Glam%20Pups%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Barbie - Jet, Set & Style! (Europe) (De,Es,It) (Beta) (VMZP) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20-%20Jet%2C%20Set%20%26%20Style%21%20%28Europe%29%20%28De%2CEs%2CIt%29%20%28Beta%29%20%28VMZP%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Barbie - Jet, Set & Style! (Europe) (De,Es,It) (VMZP) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20-%20Jet%2C%20Set%20%26%20Style%21%20%28Europe%29%20%28De%2CEs%2CIt%29%20%28VMZP%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Barbie - Jet, Set & Style! (Europe) (De,Es,It) (VMZX) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20-%20Jet%2C%20Set%20%26%20Style%21%20%28Europe%29%20%28De%2CEs%2CIt%29%20%28VMZX%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Barbie - Jet, Set & Style! (Europe) (En,Fr,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "77.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20-%20Jet%2C%20Set%20%26%20Style%21%20%28Europe%29%20%28En%2CFr%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Barbie - Jet, Set & Style! (Europe) (En,Fr,Nl) (VMZY) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "77.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20-%20Jet%2C%20Set%20%26%20Style%21%20%28Europe%29%20%28En%2CFr%2CNl%29%20%28VMZY%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Barbie and the Three Musketeers (Europe) (De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "81.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20and%20the%20Three%20Musketeers%20%28Europe%29%20%28De%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Barbie and the Three Musketeers (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "85.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20and%20the%20Three%20Musketeers%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Barbie and the Three Musketeers (Europe) (Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "85.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20and%20the%20Three%20Musketeers%20%28Europe%29%20%28Es%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Barbie as the Island Princess (Europe) (Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "82.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20as%20the%20Island%20Princess%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Barbie Fashion Show - An Eye for Style (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20Fashion%20Show%20-%20An%20Eye%20for%20Style%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Barbie Fashion Show - An Eye for Style (Europe) (Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20Fashion%20Show%20-%20An%20Eye%20for%20Style%20%28Europe%29%20%28Es%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Barbie Horse Adventures - Riding Camp (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20Horse%20Adventures%20-%20Riding%20Camp%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Barbie in the 12 Dancing Princesses (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barbie%20in%20the%2012%20Dancing%20Princesses%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Barnyard Blast - Swine of the Night (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Barnyard%20Blast%20-%20Swine%20of%20the%20Night%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Batman - Arkham Asylum (Europe) (Proto)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Batman%20-%20Arkham%20Asylum%20%28Europe%29%20%28Proto%29.zip",
    link2: ""
  },
  {
    name: "Batman - The Brave and the Bold - The Videogame (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Batman%20-%20The%20Brave%20and%20the%20Bold%20-%20The%20Videogame%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Battles of Prince of Persia (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Battles%20of%20Prince%20of%20Persia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Battleship (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Battleship%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Beat City (Europe) (En,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Beat%20City%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Beat the Intro (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Beat%20the%20Intro%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Beauty Academy (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Beauty%20Academy%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Beauty Salon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Beauty%20Salon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Bee Movie Game (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bee%20Movie%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Bee Movie Game (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bee%20Movie%20Game%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Beetle Junior DS (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Beetle%20Junior%20DS%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Beetle King (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Beetle%20King%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Bejeweled 3 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bejeweled%203%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Bejeweled Twist (Europe) (En,Fr,De,Es,It,Nl) (VBTP) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bejeweled%20Twist%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28VBTP%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Bejeweled Twist (Europe) (En,Fr,De,Es,It,Nl) (VBTX) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bejeweled%20Twist%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28VBTX%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Bella Sara (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bella%20Sara%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ben 10 - Alien Force (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ben%2010%20-%20Alien%20Force%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ben 10 - Alien Force - Vilgax Attacks (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ben%2010%20-%20Alien%20Force%20-%20Vilgax%20Attacks%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ben 10 - Galactic Racing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ben%2010%20-%20Galactic%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ben 10 - Omniverse (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ben%2010%20-%20Omniverse%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ben 10 - Protector of Earth (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ben%2010%20-%20Protector%20of%20Earth%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Ben 10 - Protector of Earth (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ben%2010%20-%20Protector%20of%20Earth%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ben 10 - Triple Pack (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ben%2010%20-%20Triple%20Pack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ben 10 - Ultimate Alien - Cosmic Destruction (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ben%2010%20-%20Ultimate%20Alien%20-%20Cosmic%20Destruction%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Benoit Sokal Last King of Africa (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Benoit%20Sokal%20Last%20King%20of%20Africa%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Berlitz - My English Coach (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Berlitz%20-%20My%20English%20Coach%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bermuda Triangle (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bermuda%20Triangle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Best Friends - Mijn Paard (Europe) (En,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Best%20Friends%20-%20Mijn%20Paard%20%28Europe%29%20%28En%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Best of Arcade Games DS (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Best%20of%20Arcade%20Games%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Best of Board Games DS (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Best%20of%20Board%20Games%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Best of Card Games DS (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Best%20of%20Card%20Games%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Best of Tests DS (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "61.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Best%20of%20Tests%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Betty Boop's Double Shift (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Betty%20Boop%27s%20Double%20Shift%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Beyblade - Metal Masters - Nightmare Rex (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Beyblade%20-%20Metal%20Masters%20-%20Nightmare%20Rex%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Beyblade Metal Fusion - Cyber Pegasus (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Beyblade%20Metal%20Fusion%20-%20Cyber%20Pegasus%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "BFF TV (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/BFF%20TV%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bibi & Tina - Die Grosse Schnitzeljagd (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bibi%20%26%20Tina%20-%20Die%20Grosse%20Schnitzeljagd%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Big Bang Mini (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Big%20Bang%20Mini%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Big Brain Academy (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Big%20Brain%20Academy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Big Brain Academy (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Big%20Brain%20Academy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Big Catch - Bass Fishing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Big%20Catch%20-%20Bass%20Fishing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Big Deal, The (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Big%20Deal%2C%20The%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Big Mutha Truckers (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Big%20Mutha%20Truckers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Big Word Puzzle Book (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Big%20Word%20Puzzle%20Book%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bigfoot - Collision Course (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bigfoot%20-%20Collision%20Course%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Biggest Loser USA, The (Europe) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "97.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Biggest%20Loser%20USA%2C%20The%20%28Europe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Biker Mice from Mars (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "86.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Biker%20Mice%20from%20Mars%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Billiard Action (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "89.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Billiard%20Action%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Bionicle Heroes (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bionicle%20Heroes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Bleach - Dark Souls (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "64.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bleach%20-%20Dark%20Souls%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bleach - The 3rd Phantom (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bleach%20-%20The%203rd%20Phantom%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Bleach - The Blade of Fate (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bleach%20-%20The%20Blade%20of%20Fate%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Blood Bowl (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Blood%20Bowl%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Blue Dragon - Awakened Shadow (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Blue%20Dragon%20-%20Awakened%20Shadow%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Blue Dragon Plus (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Blue%20Dragon%20Plus%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Blumen & Muster Puzzle - Echter Puzzlespass fuer Unterwegs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Blumen%20%26%20Muster%20Puzzle%20-%20Echter%20Puzzlespass%20fuer%20Unterwegs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bob Esponja - Atrapados en el Congelador (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bob%20Esponja%20-%20Atrapados%20en%20el%20Congelador%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Bob the Builder - Festival of Fun (Europe) (En,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bob%20the%20Builder%20-%20Festival%20of%20Fun%20%28Europe%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Bob the Builder - Festival of Fun (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bob%20the%20Builder%20-%20Festival%20of%20Fun%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Bob the Builder - Festival of Fun (Europe) (En,Pt,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bob%20the%20Builder%20-%20Festival%20of%20Fun%20%28Europe%29%20%28En%2CPt%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Boing! Docomodake DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Boing%21%20Docomodake%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bolt (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bolt%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Bolt (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "74.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bolt%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Bomberman (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bomberman%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bomberman 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bomberman%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bomberman Land Touch! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bomberman%20Land%20Touch%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bomberman Land Touch! 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bomberman%20Land%20Touch%21%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bomberman Story DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bomberman%20Story%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Boogie (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Boogie%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Bookworm (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bookworm%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Boulder Dash - Rocks! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Boulder%20Dash%20-%20Rocks%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Brain Assist (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Brain%20Assist%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Brain Buster - Puzzle Pak (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Brain%20Buster%20-%20Puzzle%20Pak%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Brain Challenge (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Brain%20Challenge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Bratz - 4 Real (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bratz%20-%204%20Real%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Bratz - 4 Real (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bratz%20-%204%20Real%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bratz - 4 Real (Europe) (Sv,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bratz%20-%204%20Real%20%28Europe%29%20%28Sv%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Bratz - Forever Diamondz (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bratz%20-%20Forever%20Diamondz%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Bratz - Girlz Really Rock (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bratz%20-%20Girlz%20Really%20Rock%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Bratz - Super Babyz (Europe) (De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bratz%20-%20Super%20Babyz%20%28Europe%29%20%28De%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Bratz - Super Babyz (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bratz%20-%20Super%20Babyz%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Bratz Kidz - Party (Europe) (En,Fr,De,Es,It,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "52.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bratz%20Kidz%20-%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Bratz Ponyz (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bratz%20Ponyz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Bratz Ponyz 2 (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bratz%20Ponyz%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Brave (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Brave%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Brave (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Brave%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Brick 'em All DS (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Brick%20%27em%20All%20DS%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Bridge Training (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bridge%20Training%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Broken Sword - Shadow of the Templars - The Director's Cut (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Broken%20Sword%20-%20Shadow%20of%20the%20Templars%20-%20The%20Director%27s%20Cut%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Brothers in Arms DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Brothers%20in%20Arms%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bubble Bobble - Double Shot (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bubble%20Bobble%20-%20Double%20Shot%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bubble Bobble Revolution (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bubble%20Bobble%20Revolution%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Bubble Guppies (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bubble%20Guppies%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Buffy the Vampire Slayer - Sacrifice (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Buffy%20the%20Vampire%20Slayer%20-%20Sacrifice%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Build-A-Bear Workshop - Welcome to Hugsville (Europe) (En,Fr,Es,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Build-A-Bear%20Workshop%20-%20Welcome%20to%20Hugsville%20%28Europe%29%20%28En%2CFr%2CEs%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Build-A-Bear Workshop - Where Best Friends Are Made (Europe) (En,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Build-A-Bear%20Workshop%20-%20Where%20Best%20Friends%20Are%20Made%20%28Europe%29%20%28En%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Build-a-Lot (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Build-a-Lot%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Bunnyz (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bunnyz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Burnout Legends (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Burnout%20Legends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Bust-A-Move DS (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Bust-A-Move%20DS%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Busy Scissors (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Busy%20Scissors%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "C.O.P. - The Recruit (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/C.O.P.%20-%20The%20Recruit%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cake Mania (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cake%20Mania%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cake Mania 2 - Jill's Next Adventure! (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "52.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cake%20Mania%202%20-%20Jill%27s%20Next%20Adventure%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Call of Atlantis (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Call%20of%20Atlantis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Call of Atlantis (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Call%20of%20Atlantis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty - Black Ops (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Call%20of%20Duty%20-%20Black%20Ops%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty - Modern Warfare - Mobilized (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Call%20of%20Duty%20-%20Modern%20Warfare%20-%20Mobilized%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty - Modern Warfare 3 - Defiance (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Call%20of%20Duty%20-%20Modern%20Warfare%203%20-%20Defiance%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty - World at War (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Call%20of%20Duty%20-%20World%20at%20War%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Call of Duty 4 - Modern Warfare (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Call%20of%20Duty%204%20-%20Modern%20Warfare%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Camp Rock - The Final Jam (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Camp%20Rock%20-%20The%20Final%20Jam%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Camp Rock - The Final Jam (Europe) (En,Sv,No,Da) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Camp%20Rock%20-%20The%20Final%20Jam%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Captain America - Super Soldier (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Captain%20America%20-%20Super%20Soldier%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Captain Morgane and the Golden Turtle (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Captain%20Morgane%20and%20the%20Golden%20Turtle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Captain Sabertooth and the Trials by Fire (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Captain%20Sabertooth%20and%20the%20Trials%20by%20Fire%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Captain Tsubasa - New Kick Off (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Captain%20Tsubasa%20-%20New%20Kick%20Off%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Carcassonne (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Carcassonne%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Card Games - The Classics (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Card%20Games%20-%20The%20Classics%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Carnival Games (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Carnival%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Cars (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Cars (Europe) (Es,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%20%28Europe%29%20%28Es%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Cars (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "52.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Cars - La Copa Internacional de Mate (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "53.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%20-%20La%20Copa%20Internacional%20de%20Mate%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Cars - Mater-National Championship (Europe) (En,Sv,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%20-%20Mater-National%20Championship%20%28Europe%29%20%28En%2CSv%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Cars - Mater-National Championship (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "52.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%20-%20Mater-National%20Championship%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Cars - Race-O-Rama (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%20-%20Race-O-Rama%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cars - Race-O-Rama (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%20-%20Race-O-Rama%20%28Europe%29%20%28Fr%2CDe%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Cars 2 (Europe) (En,Es) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%202%20%28Europe%29%20%28En%2CEs%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Cars 2 (Europe) (En,Sv,Fi) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%202%20%28Europe%29%20%28En%2CSv%2CFi%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Cars 2 (Europe) (Fr,De,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%202%20%28Europe%29%20%28Fr%2CDe%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Cars 2 (Europe) (Fr,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%202%20%28Europe%29%20%28Fr%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Cars 2 (Europe) (Sv,No,Da) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cars%202%20%28Europe%29%20%28Sv%2CNo%2CDa%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Cartoon Network Racing (Europe) (En,Fr,De,Es,It,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cartoon%20Network%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Casper's Scare School - Classroom Capers (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Casper%27s%20Scare%20School%20-%20Classroom%20Capers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Casper's Scare School - Spooky Sports Day (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Casper%27s%20Scare%20School%20-%20Spooky%20Sports%20Day%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Castlevania - Dawn of Sorrow (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Castlevania%20-%20Dawn%20of%20Sorrow%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Castlevania - Order of Ecclesia (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Castlevania%20-%20Order%20of%20Ecclesia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Castlevania - Portrait of Ruin (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Castlevania%20-%20Portrait%20of%20Ruin%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Casual Classics (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Casual%20Classics%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Casual Classics (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Casual%20Classics%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Casual Mania (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Casual%20Mania%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Catan (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Catan%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Cate West - The Vanishing Files (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cate%20West%20-%20The%20Vanishing%20Files%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cats & Dogs - The Revenge of Kitty Galore - The Videogame (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cats%20%26%20Dogs%20-%20The%20Revenge%20of%20Kitty%20Galore%20-%20The%20Videogame%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Catz (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Catz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Catz 2 (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Catz%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Cavallo & Pony - La Scuola di Equitazione (Europe) (Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cavallo%20%26%20Pony%20-%20La%20Scuola%20di%20Equitazione%20%28Europe%29%20%28Fr%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Celebi Distribution 2011 (Europe) (En,Fr,De,Es,It) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Celebi%20Distribution%202011%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "Chainz Galaxy (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chainz%20Galaxy%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Challenge Me - Brain Puzzles (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Challenge%20Me%20-%20Brain%20Puzzles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Challenge Me - Brain Puzzles 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Challenge%20Me%20-%20Brain%20Puzzles%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Challenge Me - Maths Workout (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Challenge%20Me%20-%20Maths%20Workout%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Challenge Me - Word Puzzles (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Challenge%20Me%20-%20Word%20Puzzles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Challenge Me Kids - Brain Games (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Challenge%20Me%20Kids%20-%20Brain%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Charlotte's Web (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Charlotte%27s%20Web%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Charm Girls Club - My Fashion Mall (Europe) (En,Fr,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Charm%20Girls%20Club%20-%20My%20Fashion%20Mall%20%28Europe%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Charm Girls Club - My Fashion Show (Europe) (En,Fr,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Charm%20Girls%20Club%20-%20My%20Fashion%20Show%20%28Europe%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Charm Girls Club - My Perfect Prom (Europe) (En,Fr,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Charm%20Girls%20Club%20-%20My%20Perfect%20Prom%20%28Europe%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Chase, The - Felix Meets Felicity (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chase%2C%20The%20-%20Felix%20Meets%20Felicity%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Chess (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chess%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Chess for Kids (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chess%20for%20Kids%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Chessmaster - The Art of Learning (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "53.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chessmaster%20-%20The%20Art%20of%20Learning%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Chicken Attack DS (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "53.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chicken%20Attack%20DS%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Chicken Blaster (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chicken%20Blaster%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Chicken Little - Ace in Action (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chicken%20Little%20-%20Ace%20in%20Action%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Chicken Shoot (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chicken%20Shoot%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Children of Mana (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Children%20of%20Mana%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Christiane Stengers Gedaechtnis-Coach (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Christiane%20Stengers%20Gedaechtnis-Coach%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Christmas Carol, A (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Christmas%20Carol%2C%20A%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Christmas Carol, A (Europe) (Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Christmas%20Carol%2C%20A%20%28Europe%29%20%28Fr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Chronicles of Mystery - Curse of the Ancient Temple (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "60.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chronicles%20of%20Mystery%20-%20Curse%20of%20the%20Ancient%20Temple%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Chronicles of Mystery - Curse of the Ancient Temple (Europe) (En,Fr,De,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chronicles%20of%20Mystery%20-%20Curse%20of%20the%20Ancient%20Temple%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Chronicles of Mystery - The Secret Tree of Life (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chronicles%20of%20Mystery%20-%20The%20Secret%20Tree%20of%20Life%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Chronicles of Narnia, The - Prince Caspian (Europe) (En,De,It,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chronicles%20of%20Narnia%2C%20The%20-%20Prince%20Caspian%20%28Europe%29%20%28En%2CDe%2CIt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Chronicles of Narnia, The - Prince Caspian (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chronicles%20of%20Narnia%2C%20The%20-%20Prince%20Caspian%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Chronicles of Narnia, The - The Lion, the Witch and the Wardrobe (Europe) (En,De,Sv,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chronicles%20of%20Narnia%2C%20The%20-%20The%20Lion%2C%20the%20Witch%20and%20the%20Wardrobe%20%28Europe%29%20%28En%2CDe%2CSv%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Chronicles of Narnia, The - The Lion, the Witch and the Wardrobe (Europe) (En,Fr,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chronicles%20of%20Narnia%2C%20The%20-%20The%20Lion%2C%20the%20Witch%20and%20the%20Wardrobe%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Chrono Trigger (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chrono%20Trigger%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Chronos Twin (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chronos%20Twin%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Chrysler Classic Racing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Chrysler%20Classic%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "City Life DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/City%20Life%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Classic Games - The Premium Selection (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Classic%20Games%20-%20The%20Premium%20Selection%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Classic Games - The Premium Selection (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Classic%20Games%20-%20The%20Premium%20Selection%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Classic Word Games (Europe) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Classic%20Word%20Games%20%28Europe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Clever Kids - Creepy Crawlies (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Clever%20Kids%20-%20Creepy%20Crawlies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Clever Kids - Dino Land (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Clever%20Kids%20-%20Dino%20Land%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Clever Kids - Farmyard Fun (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Clever%20Kids%20-%20Farmyard%20Fun%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Clever Kids - Pirates (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Clever%20Kids%20-%20Pirates%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Clever Kids - Pony World (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Clever%20Kids%20-%20Pony%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Clique, The - Queen Teen (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Clique%2C%20The%20-%20Queen%20Teen%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cloudy with a Chance of Meatballs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cloudy%20with%20a%20Chance%20of%20Meatballs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cloudy with a Chance of Meatballs 2 (Europe) (En,Fr,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cloudy%20with%20a%20Chance%20of%20Meatballs%202%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Club Penguin - Cuerpo de Pinguinos de Elite (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Club%20Penguin%20-%20Cuerpo%20de%20Pinguinos%20de%20Elite%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Club Penguin - Elite Penguin Force (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Club%20Penguin%20-%20Elite%20Penguin%20Force%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Club Penguin - EPF - Herbert's Revenge (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Club%20Penguin%20-%20EPF%20-%20Herbert%27s%20Revenge%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Clueless Fashion (Europe) (Proto)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Clueless%20Fashion%20%28Europe%29%20%28Proto%29.zip",
    link2: ""
  },
  {
    name: "CNAE Aprende con Nosotros - Driver's Ed (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/CNAE%20Aprende%20con%20Nosotros%20-%20Driver%27s%20Ed%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Cocina Conmigo! - Que Preparamos Hoy (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cocina%20Conmigo%21%20-%20Que%20Preparamos%20Hoy%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Cocina Conmigo! - Que Preparamos Hoy (Spain) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cocina%20Conmigo%21%20-%20Que%20Preparamos%20Hoy%20%28Spain%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Cocoto - Kart Racer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cocoto%20-%20Kart%20Racer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cocoto - Kart Racer (Europe) (En,Fr,De,Es,It) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cocoto%20-%20Kart%20Racer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Cocoto Racers (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cocoto%20Racers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Code Lyoko (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Code%20Lyoko%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Code Lyoko - Fall of X.A.N.A. (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Code%20Lyoko%20-%20Fall%20of%20X.A.N.A.%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Colin McRae - DiRT 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Colin%20McRae%20-%20DiRT%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Color Cross (Europe) (Beta 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Color%20Cross%20%28Europe%29%20%28Beta%201%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Color Cross (Europe) (Beta 2)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Color%20Cross%20%28Europe%29%20%28Beta%202%29.zip",
    link2: ""
  },
  {
    name: "Colour Cross (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "209.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Colour%20Cross%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Combat of Giants - Dinosaurs (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "209.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Combat%20of%20Giants%20-%20Dinosaurs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Combat of Giants - Dragons (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "209.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Combat%20of%20Giants%20-%20Dragons%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Combat of Giants - Mutant Insects (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Combat%20of%20Giants%20-%20Mutant%20Insects%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Combo Pack - Madagascar 3 - Europe's Most Wanted + Croods, The - Prehistoric Party! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Combo%20Pack%20-%20Madagascar%203%20-%20Europe%27s%20Most%20Wanted%20%2B%20Croods%2C%20The%20-%20Prehistoric%20Party%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Command and Destroy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Command%20and%20Destroy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Contact (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Contact%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Contact (Europe) (En,Fr,De,Es,It) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Contact%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Contra 4 (Europe) (Proto)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Contra%204%20%28Europe%29%20%28Proto%29.zip",
    link2: ""
  },
  {
    name: "Cookie & Cream (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cookie%20%26%20Cream%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cookie Shop - Crea la Tienda de tus Suenos (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cookie%20Shop%20-%20Crea%20la%20Tienda%20de%20tus%20Suenos%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Cookie Shop - Create Your Dream Shop (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cookie%20Shop%20-%20Create%20Your%20Dream%20Shop%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Cooking Guide - Can't Decide What to Eat (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Guide%20-%20Can%27t%20Decide%20What%20to%20Eat%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Cooking Guide - Can't Decide What to Eat (Europe) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Guide%20-%20Can%27t%20Decide%20What%20to%20Eat%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Cooking Guide - Can't Decide What to Eat (Europe) (Rev 2)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Guide%20-%20Can%27t%20Decide%20What%20to%20Eat%20%28Europe%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Cooking Mama (Europe) (De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Mama%20%28Europe%29%20%28De%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cooking Mama (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Mama%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cooking Mama 2 - Dinner with Friends (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Mama%202%20-%20Dinner%20with%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cooking Mama 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Mama%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cooking Mama 3 (Europe) (En,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Mama%203%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Cooking Mama World - Combo Pack - Volume 1 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Mama%20World%20-%20Combo%20Pack%20-%20Volume%201%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cooking Mama World - Combo Pack - Volume 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Mama%20World%20-%20Combo%20Pack%20-%20Volume%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cooking Mama World - Hobbies & Fun (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "76.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Mama%20World%20-%20Hobbies%20%26%20Fun%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cooking Mama World - Outdoor Adventures (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cooking%20Mama%20World%20-%20Outdoor%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Coraline (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Coraline%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cornelsen Trainer - Mathe - Klasse 5 (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cornelsen%20Trainer%20-%20Mathe%20-%20Klasse%205%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Cornelsen Trainer - Mathe - Klasse 5 + 6 (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cornelsen%20Trainer%20-%20Mathe%20-%20Klasse%205%20%2B%206%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Cornelsen Trainer - Mathe - Klasse 6 (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cornelsen%20Trainer%20-%20Mathe%20-%20Klasse%206%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Cory in the House (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cory%20in%20the%20House%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Cosmetic Paradise (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cosmetic%20Paradise%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Countdown - The Game (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Countdown%20-%20The%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Cradle of Rome 2 (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cradle%20of%20Rome%202%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Crash - Mind over Mutant (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crash%20-%20Mind%20over%20Mutant%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Crash Boom Bang! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crash%20Boom%20Bang%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Crash of the Titans (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crash%20of%20the%20Titans%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Crayola Treasure Adventures (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crayola%20Treasure%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Crazy Chicken Carnival (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crazy%20Chicken%20Carnival%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Crazy Circus (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crazy%20Circus%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Crazy Circus (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crazy%20Circus%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Crazy Frog Collectables - Art School (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crazy%20Frog%20Collectables%20-%20Art%20School%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Crazy Frog Racer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crazy%20Frog%20Racer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Crazy Machines (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "101.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crazy%20Machines%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Crazy Machines (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crazy%20Machines%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Crazy Machines 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crazy%20Machines%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Crazy Pig (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crazy%20Pig%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Crazy School Games (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crazy%20School%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Crime Lab - Body of Evidence (Europe) (En,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crime%20Lab%20-%20Body%20of%20Evidence%20%28Europe%29%20%28En%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Crime Scene (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Crime%20Scene%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Croods, The - Prehistoric Party! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Croods%2C%20The%20-%20Prehistoric%20Party%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "CrossworDS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/CrossworDS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Cruise Line Tycoon (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Cruise%20Line%20Tycoon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "CSI - Crime Scene Investigation - Dark Motives (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/CSI%20-%20Crime%20Scene%20Investigation%20-%20Dark%20Motives%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "CSI - Crime Scene Investigation - Deadly Intent - The Hidden Cases (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "59.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/CSI%20-%20Crime%20Scene%20Investigation%20-%20Deadly%20Intent%20-%20The%20Hidden%20Cases%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "CSI - Crime Scene Investigation - Unsolved! (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/CSI%20-%20Crime%20Scene%20Investigation%20-%20Unsolved%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Custom Robo Arena (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Custom%20Robo%20Arena%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "D&CO (Europe) (Fr) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/D%26CO%20%28Europe%29%20%28Fr%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Dance Floor (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dance%20Floor%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Dance! - It's Your Stage (Europe) (En,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dance%21%20-%20It%27s%20Your%20Stage%20%28Europe%29%20%28En%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Dancing on Ice (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dancing%20on%20Ice%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Danny Phantom - Urban Jungle (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Danny%20Phantom%20-%20Urban%20Jungle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Darkrai Distribution 2011 (Europe) (En,Fr,De,Es,It) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Darkrai%20Distribution%202011%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "de Blob 2 (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/de%20Blob%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Dead'n'Furious (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dead%27n%27Furious%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Deal or No Deal - The Banker Is Back! (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Deal%20or%20No%20Deal%20-%20The%20Banker%20Is%20Back%21%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Deal or No Deal - The Official Nintendo DS Game (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Deal%20or%20No%20Deal%20-%20The%20Official%20Nintendo%20DS%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Death Jr. and the Science Fair of Doom (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Death%20Jr.%20and%20the%20Science%20Fair%20of%20Doom%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Deep Labyrinth (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Deep%20Labyrinth%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Deep Sea Aquarium by DS (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Deep%20Sea%20Aquarium%20by%20DS%20%28Europe%29%20%28En%2CFr%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Defendin' DePenguin (Europe) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Defendin%27%20DePenguin%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Deine Reitschule (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Deine%20Reitschule%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Dementium - The Ward (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dementium%20-%20The%20Ward%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dementium II (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dementium%20II%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Despicable Me - Minion Mayhem (Europe) (En,Fr,De,Es,It,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Despicable%20Me%20-%20Minion%20Mayhem%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Despicable Me - Minion Mayhem (Europe) (En,Fr,De,Es,It,Sv,No,Da,Fi) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Despicable%20Me%20-%20Minion%20Mayhem%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%2CFi%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Devilish (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Devilish%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Di-Gata Defenders (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Di-Gata%20Defenders%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Diabolik - The Original Sin (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Diabolik%20-%20The%20Original%20Sin%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Diddl in the Cheesecakeland - Diddl en Diddland (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Diddl%20in%20the%20Cheesecakeland%20-%20Diddl%20en%20Diddland%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Diddl Puzzle - Echter Puzzlespass fuer Unterwegs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "53.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Diddl%20Puzzle%20-%20Echter%20Puzzlespass%20fuer%20Unterwegs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Diddy Kong Racing DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Diddy%20Kong%20Racing%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Diego's Build and Rescue (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Diego%27s%20Build%20and%20Rescue%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dig Dug - Digging Strike (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dig%20Dug%20-%20Digging%20Strike%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Diner Dash (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Diner%20Dash%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dino Master - Dig, Discover, Duel (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dino%20Master%20-%20Dig%2C%20Discover%2C%20Duel%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dinosaur King (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dinosaur%20King%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disgaea DS (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disgaea%20DS%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Disney Big Hero 6 - Battle in the Bay (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Big%20Hero%206%20-%20Battle%20in%20the%20Bay%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Disney Big Hero 6 - Battle in the Bay (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Big%20Hero%206%20-%20Battle%20in%20the%20Bay%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Disney Friends (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Friends%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Disney Frozen - Olaf's Quest (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Frozen%20-%20Olaf%27s%20Quest%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Disney Frozen - Olaf's Quest (Europe) (En,Fr,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Frozen%20-%20Olaf%27s%20Quest%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Disney Planes (Europe) (En,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Planes%20%28Europe%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Disney Planes (Europe) (En,Sv,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Planes%20%28Europe%29%20%28En%2CSv%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Disney Planes (Europe) (Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Planes%20%28Europe%29%20%28Fr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney Planes (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Planes%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Disney Planes (Europe) (Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Planes%20%28Europe%29%20%28Sv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Disney Princess - Enchanting Storybooks (Europe) (De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Princess%20-%20Enchanting%20Storybooks%20%28Europe%29%20%28De%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Disney Princess - Enchanting Storybooks (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Princess%20-%20Enchanting%20Storybooks%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Disney Princess - Magical Jewels (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Princess%20-%20Magical%20Jewels%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Disney Violetta - Rhythm & Music (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Disney%20Violetta%20-%20Rhythm%20%26%20Music%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Diva Girls - Diva Ballerina (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Diva%20Girls%20-%20Diva%20Ballerina%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Diva Girls - Diva Dancers (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Diva%20Girls%20-%20Diva%20Dancers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Diva Girls - Making the Music (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Diva%20Girls%20-%20Making%20the%20Music%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Diva Girls - Princess on Ice 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Diva%20Girls%20-%20Princess%20on%20Ice%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "DJ Star (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/DJ%20Star%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Doctor Who - Evacuation Earth (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Doctor%20Who%20-%20Evacuation%20Earth%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Dodge Racing - Charger vs Challenger (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dodge%20Racing%20-%20Charger%20vs%20Challenger%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dogz (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dogz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dogz 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dogz%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dolphin Island (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dolphin%20Island%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dolphin Island - Underwater Adventures (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dolphin%20Island%20-%20Underwater%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Dolphin Trainer (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dolphin%20Trainer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Don King Boxing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Don%20King%20Boxing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Donkey Kong - Jungle Climber (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Donkey%20Kong%20-%20Jungle%20Climber%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Donkey Xote (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Donkey%20Xote%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Doodle Hex (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Doodle%20Hex%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dora & Friends' - Fantastic Flight (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20%26%20Friends%27%20-%20Fantastic%20Flight%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Dora & Friends' - Pet Shelter (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20%26%20Friends%27%20-%20Pet%20Shelter%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dora the Explorer - Dora Puppy (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20the%20Explorer%20-%20Dora%20Puppy%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Dora the Explorer - Dora Puppy (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20the%20Explorer%20-%20Dora%20Puppy%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dora the Explorer - Dora Puppy (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20the%20Explorer%20-%20Dora%20Puppy%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dora the Explorer - Dora Saves the Mermaids (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20the%20Explorer%20-%20Dora%20Saves%20the%20Mermaids%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Dora the Explorer - Dora Saves the Mermaids (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20the%20Explorer%20-%20Dora%20Saves%20the%20Mermaids%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dora the Explorer - Dora Saves the Mermaids (Europe) (Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20the%20Explorer%20-%20Dora%20Saves%20the%20Mermaids%20%28Europe%29%20%28Sv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Dora the Explorer - Dora Saves the Snow Princess (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20the%20Explorer%20-%20Dora%20Saves%20the%20Snow%20Princess%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Dora the Explorer - Dora Saves the Snow Princess (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20the%20Explorer%20-%20Dora%20Saves%20the%20Snow%20Princess%20%28Europe%29%20%28En%2CFr%2CNl%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Dora the Explorer - Dora Saves the Snow Princess (Europe) (Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%20the%20Explorer%20-%20Dora%20Saves%20the%20Snow%20Princess%20%28Europe%29%20%28Sv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Dora's Big Birthday Adventure (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%27s%20Big%20Birthday%20Adventure%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dora's Big Birthday Adventure (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%27s%20Big%20Birthday%20Adventure%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dora's Cooking Club (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%27s%20Cooking%20Club%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dora's Cooking Club (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dora%27s%20Cooking%20Club%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Double Pack - Cradle of Rome + Cradle of Egypt (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Double%20Pack%20-%20Cradle%20of%20Rome%20%2B%20Cradle%20of%20Egypt%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Double Sequence - The Q-Virus Invasion (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Double%20Sequence%20-%20The%20Q-Virus%20Invasion%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dr Kawashima's Brain Training - How Old Is Your Brain (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dr%20Kawashima%27s%20Brain%20Training%20-%20How%20Old%20Is%20Your%20Brain%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dr Kawashima's Brain Training - How Old Is Your Brain (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dr%20Kawashima%27s%20Brain%20Training%20-%20How%20Old%20Is%20Your%20Brain%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Dr Kawashima's Brain Training - How Old Is Your Brain - Sudoku Download 2 (Europe) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "58.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dr%20Kawashima%27s%20Brain%20Training%20-%20How%20Old%20Is%20Your%20Brain%20-%20Sudoku%20Download%202%20%28Europe%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Dr Reiner Knizia's Brainbenders (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dr%20Reiner%20Knizia%27s%20Brainbenders%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dr. Seuss - How the Grinch Stole Christmas! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dr.%20Seuss%20-%20How%20the%20Grinch%20Stole%20Christmas%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Drachenspass mit Hexe Lilli (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Drachenspass%20mit%20Hexe%20Lilli%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Draglade (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Draglade%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Ball - Origins (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Ball%20-%20Origins%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Ball - Origins 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "60.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Ball%20-%20Origins%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Attack of the Saiyans (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "76.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Ball%20Z%20-%20Attack%20of%20the%20Saiyans%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Goku Densetsu (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "174.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Ball%20Z%20-%20Goku%20Densetsu%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Supersonic Warriors 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Ball%20Z%20-%20Supersonic%20Warriors%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Booster (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Booster%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Hunters (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "72.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Hunters%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Master (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "87.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Master%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Dragon Quest - The Chapters of the Chosen (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Quest%20-%20The%20Chapters%20of%20the%20Chosen%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Quest - The Hand of the Heavenly Bride (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Quest%20-%20The%20Hand%20of%20the%20Heavenly%20Bride%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Quest IX - Sentinels of the Starry Skies (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Quest%20IX%20-%20Sentinels%20of%20the%20Starry%20Skies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Quest Monsters - Joker (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "52.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Quest%20Monsters%20-%20Joker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Quest Monsters - Joker 2 (Europe) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Quest%20Monsters%20-%20Joker%202%20%28Europe%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Dragon Quest Monsters - Joker 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Quest%20Monsters%20-%20Joker%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragon Quest VI - Realms of Reverie (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragon%20Quest%20VI%20-%20Realms%20of%20Reverie%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dragonology (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dragonology%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Drama Queens (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Drama%20Queens%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Drawn to Life (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Drawn%20to%20Life%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Drawn to Life - Collection (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Drawn%20to%20Life%20-%20Collection%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Drawn to Life - Edicion Bob Esponja (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Drawn%20to%20Life%20-%20Edicion%20Bob%20Esponja%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Drawn to Life - SpongeBob SquarePants Edition (Europe) (En,Fr,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Drawn%20to%20Life%20-%20SpongeBob%20SquarePants%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Drawn to Life - SpongeBob SquarePants Edition (Europe) (En,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Drawn%20to%20Life%20-%20SpongeBob%20SquarePants%20Edition%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Drawn to Life - The Next Chapter (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Drawn%20to%20Life%20-%20The%20Next%20Chapter%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Dream Day - Wedding Destinations (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "75.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dream%20Day%20-%20Wedding%20Destinations%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Dream Pinball 3D (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dream%20Pinball%203D%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Driver Dan's Story Train (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Driver%20Dan%27s%20Story%20Train%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Driver License Trainer Espana (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Driver%20License%20Trainer%20Espana%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Drivers' Ed Portable (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Drivers%27%20Ed%20Portable%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Driving Theory Training (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Driving%20Theory%20Training%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Driving Theory Training (Europe) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Driving%20Theory%20Training%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Dropcast (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dropcast%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "DS Download Europe - Meteos & Polarium (Europe) (En,Fr,De,Es,It) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/DS%20Download%20Europe%20-%20Meteos%20%26%20Polarium%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "DS Download Station - Volume 1 (Europe) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/DS%20Download%20Station%20-%20Volume%201%20%28Europe%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "DS Download Station - Volume 2 (Europe) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/DS%20Download%20Station%20-%20Volume%202%20%28Europe%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "DS Download Station - Volume 3 (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/DS%20Download%20Station%20-%20Volume%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "DS Download Station - Volume 4 (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/DS%20Download%20Station%20-%20Volume%204%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "DS Download Station - Volume 5 (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/DS%20Download%20Station%20-%20Volume%205%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "DS Download Station - Volume 6 (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/DS%20Download%20Station%20-%20Volume%206%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "DS Download Station - Volume 7 (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/DS%20Download%20Station%20-%20Volume%207%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "DS Download Station - Volume 8 (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/DS%20Download%20Station%20-%20Volume%208%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Ducati Moto (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ducati%20Moto%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Duke Nukem - Critical Mass (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "100.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Duke%20Nukem%20-%20Critical%20Mass%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dungeon Explorer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dungeon%20Explorer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dungeon Maker (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dungeon%20Maker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dungeon Raiders (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dungeon%20Raiders%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Dynasty Warriors DS - Fighter's Battle (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Dynasty%20Warriors%20DS%20-%20Fighter%27s%20Battle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "EA Playground (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/EA%20Playground%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Easy Learning - Discover Our World (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Easy%20Learning%20-%20Discover%20Our%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Easy Piano (Europe) (Beta) (2009-07-22)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Easy%20Piano%20%28Europe%29%20%28Beta%29%20%282009-07-22%29.zip",
    link2: ""
  },
  {
    name: "Easy Piano - Learn, Play & Compose (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Easy%20Piano%20-%20Learn%2C%20Play%20%26%20Compose%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ecolis - Save the Forest (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ecolis%20-%20Save%20the%20Forest%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ed's Farm (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ed%27s%20Farm%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ed, Edd n Eddy - Scam of the Century (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ed%2C%20Edd%20n%20Eddy%20-%20Scam%20of%20the%20Century%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Eggheads (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Eggheads%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Electroplankton (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Electroplankton%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Eledees - The Adventures of Kai and Zero (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Eledees%20-%20The%20Adventures%20of%20Kai%20and%20Zero%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Element Girls - Love, Fashion & Friends (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Element%20Girls%20-%20Love%2C%20Fashion%20%26%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Element Girls - Style Your Life! (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Element%20Girls%20-%20Style%20Your%20Life%21%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Elements of Destruction (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Elements%20of%20Destruction%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Elite Beat Agents (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "63.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Elite%20Beat%20Agents%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Elite Beat Agents (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "61.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Elite%20Beat%20Agents%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Elite Forces - Unit 77 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "62.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Elite%20Forces%20-%20Unit%2077%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ellen Whitaker's Horse Life (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "95.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ellen%20Whitaker%27s%20Horse%20Life%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Elvenland (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Elvenland%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Emergency (Europe) (En,Fr,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emergency%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Emily - My Animal Shelter (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emily%20-%20My%20Animal%20Shelter%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Emily - My Dog Paradise (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emily%20-%20My%20Dog%20Paradise%20%28Europe%29%20%28En%2CFr%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Emily - My Personal Diary (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emily%20-%20My%20Personal%20Diary%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Emily Archer - The Curse of King Tut's Tomb (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emily%20Archer%20-%20The%20Curse%20of%20King%20Tut%27s%20Tomb%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Emily Archer - The Curse of King Tut's Tomb (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emily%20Archer%20-%20The%20Curse%20of%20King%20Tut%27s%20Tomb%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Emily Archer - The Curse of King Tut's Tomb (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emily%20Archer%20-%20The%20Curse%20of%20King%20Tut%27s%20Tomb%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Emily the Strange - Strangerous (Europe) (En,De) (VESP) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emily%20the%20Strange%20-%20Strangerous%20%28Europe%29%20%28En%2CDe%29%20%28VESP%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Emily the Strange - Strangerous (Europe) (En,Fr) (VESV) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emily%20the%20Strange%20-%20Strangerous%20%28Europe%29%20%28En%2CFr%29%20%28VESV%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Emily the Strange - Strangerous (Europe) (En,Fr) (VESX) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emily%20the%20Strange%20-%20Strangerous%20%28Europe%29%20%28En%2CFr%29%20%28VESX%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Emma at the Farm (Europe) (En,De,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emma%20at%20the%20Farm%20%28Europe%29%20%28En%2CDe%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Emma at the Farm (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emma%20at%20the%20Farm%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Emma in the Mountains (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Emma%20in%20the%20Mountains%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Enchanted (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Enchanted%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Enchanted Folk and the School of Wizardry (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Enchanted%20Folk%20and%20the%20School%20of%20Wizardry%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Englisch Buddy (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Englisch%20Buddy%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "English Buddy (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/English%20Buddy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "English Training - Have Fun Improving Your Skills (Europe) (Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/English%20Training%20-%20Have%20Fun%20Improving%20Your%20Skills%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Equestrian Training (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Equestrian%20Training%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Eragon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Eragon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Escape the Museum (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Escape%20the%20Museum%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Escape the Museum (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Escape%20the%20Museum%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Essential Sudoku DS (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Essential%20Sudoku%20DS%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Etrian Odyssey (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Etrian%20Odyssey%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Everything's Rosie (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Everything%27s%20Rosie%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Evolution GT (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Evolution%20GT%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Exit DS (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Exit%20DS%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "F-24 - Stealth Fighter (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/F-24%20-%20Stealth%20Fighter%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fabulous Finds (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fabulous%20Finds%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Family Fortunes (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Family%20Fortunes%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Family Park Tycoon (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Family%20Park%20Tycoon%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Famous - The Road to Glory! (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Famous%20-%20The%20Road%20to%20Glory%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Fantastic Four - Rise of the Silver Surfer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fantastic%20Four%20-%20Rise%20of%20the%20Silver%20Surfer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fantasy Aquarium by DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "51.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fantasy%20Aquarium%20by%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Farm Frenzy - Animal Country (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Farm%20Frenzy%20-%20Animal%20Country%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Farm Frenzy 3 (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Farm%20Frenzy%203%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Farm Life - Manage Your Own Farm (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Farm%20Life%20-%20Manage%20Your%20Own%20Farm%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Fashion Designer - High Fashion (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fashion%20Designer%20-%20High%20Fashion%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fashion Designer - Style Icon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fashion%20Designer%20-%20Style%20Icon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fashion Dogz (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "92.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fashion%20Dogz%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Fashion Tycoon (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "83.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fashion%20Tycoon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Fast Food Panic (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fast%20Food%20Panic%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fee Lili-Rose 2, La - Mon Monde Merveilleux (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "66.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fee%20Lili-Rose%202%2C%20La%20-%20Mon%20Monde%20Merveilleux%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fee Lili-Rose, La - La Magie des Fees (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "100.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fee%20Lili-Rose%2C%20La%20-%20La%20Magie%20des%20Fees%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Ferrari Challenge - Trofeo Pirelli - European Series (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "68.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ferrari%20Challenge%20-%20Trofeo%20Pirelli%20-%20European%20Series%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "FIFA 06 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "62.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/FIFA%2006%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "FIFA 07 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/FIFA%2007%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "FIFA 08 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/FIFA%2008%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "FIFA 08 (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/FIFA%2008%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "FIFA 09 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/FIFA%2009%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "FIFA 10 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/FIFA%2010%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "FIFA 11 (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/FIFA%2011%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "FIFA Street 2 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/FIFA%20Street%202%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "FIFA Street 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/FIFA%20Street%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "FIFA Street 3 (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/FIFA%20Street%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Fifi and the Flowertots (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fifi%20and%20the%20Flowertots%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Fifi and the Flowertots - Fifi's Garden Party (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fifi%20and%20the%20Flowertots%20-%20Fifi%27s%20Garden%20Party%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy - The 4 Heroes of Light (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Final%20Fantasy%20-%20The%204%20Heroes%20of%20Light%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy Crystal Chronicles - Echoes of Time (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Final%20Fantasy%20Crystal%20Chronicles%20-%20Echoes%20of%20Time%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy Crystal Chronicles - Ring of Fates (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Final%20Fantasy%20Crystal%20Chronicles%20-%20Ring%20of%20Fates%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy Fables - Chocobo Tales (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Final%20Fantasy%20Fables%20-%20Chocobo%20Tales%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy III (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Final%20Fantasy%20III%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy IV (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Final%20Fantasy%20IV%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy Tactics A2 - Grimoire of the Rift (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Final%20Fantasy%20Tactics%20A2%20-%20Grimoire%20of%20the%20Rift%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Final Fantasy XII - Revenant Wings (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Final%20Fantasy%20XII%20-%20Revenant%20Wings%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Finde die Unterschiede - Foto Frenzy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Finde%20die%20Unterschiede%20-%20Foto%20Frenzy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Finding Nemo - Escape to the Big Blue (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Finding%20Nemo%20-%20Escape%20to%20the%20Big%20Blue%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Finding Nemo - Escape to the Big Blue (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Finding%20Nemo%20-%20Escape%20to%20the%20Big%20Blue%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Finding Nemo - Escape to the Big Blue (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Finding%20Nemo%20-%20Escape%20to%20the%20Big%20Blue%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Finding Nemo - Escape to the Big Blue - Special Edition (Europe) (En,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Finding%20Nemo%20-%20Escape%20to%20the%20Big%20Blue%20-%20Special%20Edition%20%28Europe%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Finding Nemo - Escape to the Big Blue - Special Edition (Europe) (Fr,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Finding%20Nemo%20-%20Escape%20to%20the%20Big%20Blue%20-%20Special%20Edition%20%28Europe%29%20%28Fr%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Fire Emblem - Shadow Dragon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fire%20Emblem%20-%20Shadow%20Dragon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fireman Sam (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fireman%20Sam%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Fireman Sam - Action Stations (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fireman%20Sam%20-%20Action%20Stations%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Fish Tycoon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fish%20Tycoon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fishdom (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fishdom%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Fishdom (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fishdom%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Fix It (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fix%20It%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Fizz (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fizz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Flaaklypa Grand Prix (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flaaklypa%20Grand%20Prix%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Flipper Critters (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flipper%20Critters%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Flips 6 Book Pack - Cathy Cassidy (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flips%206%20Book%20Pack%20-%20Cathy%20Cassidy%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Flips 6 Book Pack - Enid Blyton - Faraway Tree Stories (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flips%206%20Book%20Pack%20-%20Enid%20Blyton%20-%20Faraway%20Tree%20Stories%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Flips 6 Book Pack - Eoin Colfer - Artemis Fowl (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flips%206%20Book%20Pack%20-%20Eoin%20Colfer%20-%20Artemis%20Fowl%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Flips 6 Book Pack - Mr Gum by Andy Stanton (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flips%206%20Book%20Pack%20-%20Mr%20Gum%20by%20Andy%20Stanton%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Flips 6 Book Pack - Rick Riordan - Percy Jackson (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flips%206%20Book%20Pack%20-%20Rick%20Riordan%20-%20Percy%20Jackson%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Flips 8 Book Pack - Enid Blyton - The Adventure Series (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flips%208%20Book%20Pack%20-%20Enid%20Blyton%20-%20The%20Adventure%20Series%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Flips 8 Book Pack - Too Ghoul for School (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flips%208%20Book%20Pack%20-%20Too%20Ghoul%20for%20School%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Flower, Sun and Rain - Murder and Mystery in Paradise (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flower%2C%20Sun%20and%20Rain%20-%20Murder%20and%20Mystery%20in%20Paradise%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Flunkerne - Paa Maanen (Europe) (No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flunkerne%20-%20Paa%20Maanen%20%28Europe%29%20%28No%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Flunkerne - Superskurke (Europe) (No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "59.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flunkerne%20-%20Superskurke%20%28Europe%29%20%28No%2CDa%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Flushed Away (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "59.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flushed%20Away%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Flushed Away (Europe) (De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "59.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flushed%20Away%20%28Europe%29%20%28De%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Flushed Away (Europe) (Fr,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Flushed%20Away%20%28Europe%29%20%28Fr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Football Academy - Build and Prove Your Football Knowledge (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Football%20Academy%20-%20Build%20and%20Prove%20Your%20Football%20Knowledge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Football Director DS (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Football%20Director%20DS%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Ford Racing 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ford%20Racing%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fossil League - Dino Tournament Championship (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fossil%20League%20-%20Dino%20Tournament%20Championship%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Foster's Home for Imaginary Friends - Imagination Invaders (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Foster%27s%20Home%20for%20Imaginary%20Friends%20-%20Imagination%20Invaders%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Franklin's Great Adventures (Europe) (En,Fr,De,Es,It,Nl,Pt,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Franklin%27s%20Great%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Franzoesisch Buddy (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Franzoesisch%20Buddy%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Freddi Fish - ABC under the Sea (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Freddi%20Fish%20-%20ABC%20under%20the%20Sea%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Freddie Flintoff's Power Play Cricket (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Freddie%20Flintoff%27s%20Power%20Play%20Cricket%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Freedom Wings (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Freedom%20Wings%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Freshly-Picked - Tingle's Rosy Rupeeland (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Freshly-Picked%20-%20Tingle%27s%20Rosy%20Rupeeland%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fritz (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fritz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Frogger - Helmet Chaos (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Frogger%20-%20Helmet%20Chaos%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "From the Abyss (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/From%20the%20Abyss%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Fullmetal Alchemist - Dual Sympathy (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Fullmetal%20Alchemist%20-%20Dual%20Sympathy%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "G-Force (Europe) (De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/G-Force%20%28Europe%29%20%28De%2CIt%29.zip",
    link2: ""
  },
  {
    name: "G-Force (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/G-Force%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "G-Force (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/G-Force%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "G.I. Joe - The Rise of Cobra (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "65.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/G.I.%20Joe%20-%20The%20Rise%20of%20Cobra%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Gakken Europe 4-kakokugo Zanmai DS (Japan)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Gakken%20Europe%204-kakokugo%20Zanmai%20DS%20%28Japan%29.zip",
    link2: ""
  },
  {
    name: "Galactic Taz Ball (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Galactic%20Taz%20Ball%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Galactik Football (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Galactik%20Football%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Galaxy Racers (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "82.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Galaxy%20Racers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Game & Watch Collection (USA, Europe) (Club Nintendo)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Game%20%26%20Watch%20Collection%20%28USA%2C%20Europe%29%20%28Club%20Nintendo%29.zip",
    link2: ""
  },
  {
    name: "Game Hits (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Game%20Hits%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Gardening Guide - How to Get Green Fingers (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Gardening%20Guide%20-%20How%20to%20Get%20Green%20Fingers%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Gardening Mama (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Gardening%20Mama%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Gardening Mama (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "78.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Gardening%20Mama%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Gardenscapes (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Gardenscapes%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Garfield 2 (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Garfield%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Garfield Gets Real (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Garfield%20Gets%20Real%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Garfield's Fun Fest (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Garfield%27s%20Fun%20Fest%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Garfield's Nightmare (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Garfield%27s%20Nightmare%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Gauntlet (Europe) (En,Fr,De,Es,It) (Proto)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Gauntlet%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Proto%29.zip",
    link2: ""
  },
  {
    name: "General Knowledge for Dummies (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/General%20Knowledge%20for%20Dummies%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "General Knowledge for Dummies (Europe) (En,Fr,De) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/General%20Knowledge%20for%20Dummies%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Generator Rex - Agent of Providence (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Generator%20Rex%20-%20Agent%20of%20Providence%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Genio de las Palabras, El (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Genio%20de%20las%20Palabras%2C%20El%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "GEO Puzzle - Wunder Natur - Echter Puzzlespass fuer Unterwegs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/GEO%20Puzzle%20-%20Wunder%20Natur%20-%20Echter%20Puzzlespass%20fuer%20Unterwegs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Geomaster (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Geomaster%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Geometry Wars - Galaxies (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Geometry%20Wars%20-%20Galaxies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "George of the Jungle (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/George%20of%20the%20Jungle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ghost Trick - Phantom Detective (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ghost%20Trick%20-%20Phantom%20Detective%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ghostbusters - The Video Game (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ghostbusters%20-%20The%20Video%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Giana Sisters DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "64.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Giana%20Sisters%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Girls Life - Fashion Addict (Europe) (Beta 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "168.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Girls%20Life%20-%20Fashion%20Addict%20%28Europe%29%20%28Beta%201%29.zip",
    link2: ""
  },
  {
    name: "Girls Life - Fashion Addict (Europe) (Beta 2)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Girls%20Life%20-%20Fashion%20Addict%20%28Europe%29%20%28Beta%202%29.zip",
    link2: ""
  },
  {
    name: "Girls Life - Fashion Addict (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Girls%20Life%20-%20Fashion%20Addict%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Girls Life - Jewellery Style (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Girls%20Life%20-%20Jewellery%20Style%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Girls Life - Makeover (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Girls%20Life%20-%20Makeover%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Girls Only (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Girls%20Only%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Glory Days 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "68.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Glory%20Days%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Go West! - A Lucky Luke Adventure (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Go%20West%21%20-%20A%20Lucky%20Luke%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Go! Go! Cosmo Cops! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Go%21%20Go%21%20Cosmo%20Cops%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Go, Diego, Go! - Great Dinosaur Rescue (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "90.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Go%2C%20Diego%2C%20Go%21%20-%20Great%20Dinosaur%20Rescue%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Go, Diego, Go! - Safari Rescue (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Go%2C%20Diego%2C%20Go%21%20-%20Safari%20Rescue%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Go, Diego, Go! - Safari Rescue (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Go%2C%20Diego%2C%20Go%21%20-%20Safari%20Rescue%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Go, Diego, Go! - Safari Rescue (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Go%2C%20Diego%2C%20Go%21%20-%20Safari%20Rescue%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Godzilla Unleashed (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Godzilla%20Unleashed%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Gogo's Crazy Bones (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Gogo%27s%20Crazy%20Bones%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Golden Balls (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Golden%20Balls%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Golden Compass, The - The Official Videogame (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Golden%20Compass%2C%20The%20-%20The%20Official%20Videogame%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Golden Compass, The - The Official Videogame (Europe) (En,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "103.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Golden%20Compass%2C%20The%20-%20The%20Official%20Videogame%20%28Europe%29%20%28En%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Golden Nugget Casino DS (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Golden%20Nugget%20Casino%20DS%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Golden Sun - Dark Dawn (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "109.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Golden%20Sun%20-%20Dark%20Dawn%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Golden Sun - Dark Dawn (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "107.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Golden%20Sun%20-%20Dark%20Dawn%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Goldene Amulett des Pharao, Das (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "99.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Goldene%20Amulett%20des%20Pharao%2C%20Das%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "GoldenEye - Rogue Agent (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/GoldenEye%20-%20Rogue%20Agent%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "GoldenEye 007 (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/GoldenEye%20007%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Goosebumps HorrorLand (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Goosebumps%20HorrorLand%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Gormiti - The Lords of Nature! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Gormiti%20-%20The%20Lords%20of%20Nature%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Grand Galop (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Grand%20Galop%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Grand Theft Auto - Chinatown Wars (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Grand%20Theft%20Auto%20-%20Chinatown%20Wars%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Grease - The Official Video Game (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Grease%20-%20The%20Official%20Video%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Green Lantern - Rise of the Manhunters (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Green%20Lantern%20-%20Rise%20of%20the%20Manhunters%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Greg Hastings' Tournament Paintball Max'd (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Greg%20Hastings%27%20Tournament%20Paintball%20Max%27d%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Grey's Anatomy - The Video Game (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Grey%27s%20Anatomy%20-%20The%20Video%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "GripsKids - Mathematik (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/GripsKids%20-%20Mathematik%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Groovy Chick - My Fashion World (Europe) (En,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Groovy%20Chick%20-%20My%20Fashion%20World%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Guild DS, The (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Guild%20DS%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Guilty Gear - Dust Strikers (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Guilty%20Gear%20-%20Dust%20Strikers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Guinness World Records - The Videogame (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Guinness%20World%20Records%20-%20The%20Videogame%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Guitar Hero - On Tour (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Guitar%20Hero%20-%20On%20Tour%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Guitar Hero - On Tour (Europe) (Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Guitar%20Hero%20-%20On%20Tour%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Guitar Hero - On Tour - Decades (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "81.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Guitar%20Hero%20-%20On%20Tour%20-%20Decades%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Guitar Hero - On Tour - Decades (Europe) (Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Guitar%20Hero%20-%20On%20Tour%20-%20Decades%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Guitar Hero - On Tour - Modern Hits (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Guitar%20Hero%20-%20On%20Tour%20-%20Modern%20Hits%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Guitar Rock Tour (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Guitar%20Rock%20Tour%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Gunpey DS - Music x Puzzle (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Gunpey%20DS%20-%20Music%20x%20Puzzle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Guru Guru (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Guru%20Guru%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hamsterz 2 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hamsterz%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hamsterz 2 (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hamsterz%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Hamsterz 2 (Europe) (En,Fr,De,Es,It,Nl) (Rev 2)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hamsterz%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Hamsterz Life (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hamsterz%20Life%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hannah Montana (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "61.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hannah%20Montana%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hannah Montana - Music Jam (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hannah%20Montana%20-%20Music%20Jam%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hannah Montana - Music Jam (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hannah%20Montana%20-%20Music%20Jam%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Hannah Montana - The Movie (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hannah%20Montana%20-%20The%20Movie%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hannah Montana - The Movie (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hannah%20Montana%20-%20The%20Movie%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hannah Montana - The Movie (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hannah%20Montana%20-%20The%20Movie%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Happy Bakery (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Happy%20Bakery%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Happy Feet (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Happy%20Feet%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Happy Feet 2 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Happy%20Feet%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Happy Hippo's World Tour (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Happy%20Hippo%27s%20World%20Tour%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Happy Party with Hello Kitty & Friends! (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Happy%20Party%20with%20Hello%20Kitty%20%26%20Friends%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hardy Boys, The - Treasure on the Tracks (Europe) (En,Fr,De,Ru)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hardy%20Boys%2C%20The%20-%20Treasure%20on%20the%20Tracks%20%28Europe%29%20%28En%2CFr%2CDe%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Harlem Globetrotters - World Tour (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harlem%20Globetrotters%20-%20World%20Tour%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Deathly Hallows - Part 1 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harry%20Potter%20and%20the%20Deathly%20Hallows%20-%20Part%201%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Deathly Hallows - Part 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harry%20Potter%20and%20the%20Deathly%20Hallows%20-%20Part%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Goblet of Fire (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harry%20Potter%20and%20the%20Goblet%20of%20Fire%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Half-Blood Prince (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harry%20Potter%20and%20the%20Half-Blood%20Prince%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Harry Potter and the Order of the Phoenix (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harry%20Potter%20and%20the%20Order%20of%20the%20Phoenix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Harvest Fishing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harvest%20Fishing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon - Frantic Farming (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harvest%20Moon%20-%20Frantic%20Farming%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon - Frantic Farming (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "56.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harvest%20Moon%20-%20Frantic%20Farming%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon - The Tale of Two Towns (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harvest%20Moon%20-%20The%20Tale%20of%20Two%20Towns%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harvest%20Moon%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon DS (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harvest%20Moon%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon DS - Grand Bazaar (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harvest%20Moon%20DS%20-%20Grand%20Bazaar%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon DS - Island of Happiness (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harvest%20Moon%20DS%20-%20Island%20of%20Happiness%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Harvest Moon DS - Sunshine Islands (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Harvest%20Moon%20DS%20-%20Sunshine%20Islands%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hasbro Family Game Night (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hasbro%20Family%20Game%20Night%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Have Fun with Crosswords (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Have%20Fun%20with%20Crosswords%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hell's Kitchen - The Game (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hell%27s%20Kitchen%20-%20The%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hello Baby! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hello%20Baby%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hello Kitty - Big City Dreams (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hello%20Kitty%20-%20Big%20City%20Dreams%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Hello Kitty - Big City Dreams (Europe) (En,Fr,De,Es,It,Nl,Pt) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hello%20Kitty%20-%20Big%20City%20Dreams%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Hello Kitty - Big City Dreams (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hello%20Kitty%20-%20Big%20City%20Dreams%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Hello Kitty - Birthday Adventures (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hello%20Kitty%20-%20Birthday%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hello Kitty - Daily (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hello%20Kitty%20-%20Daily%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hello Kitty - Daily (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hello%20Kitty%20-%20Daily%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Hello, Pocoyo! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hello%2C%20Pocoyo%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Henry Hatsworth in the Puzzling Adventure (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Henry%20Hatsworth%20in%20the%20Puzzling%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Heracles - Battle with the Gods (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Heracles%20-%20Battle%20with%20the%20Gods%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Herbie - Rescue Rally (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Herbie%20-%20Rescue%20Rally%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Heroes of Hellas 2 - Olympia (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Heroes%20of%20Hellas%202%20-%20Olympia%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Heroes of Mana (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Heroes%20of%20Mana%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hi Hi Puffy AmiYumi - The Genie & the Amp (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hi%20Hi%20Puffy%20AmiYumi%20-%20The%20Genie%20%26%20the%20Amp%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hi! Hamtaro - Ham-Ham Challenge (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hi%21%20Hamtaro%20-%20Ham-Ham%20Challenge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hidden Expedition - Titanic (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Expedition%20-%20Titanic%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hidden Mysteries - Buckingham Palace (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Mysteries%20-%20Buckingham%20Palace%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hidden Mysteries - Buckingham Palace (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Mysteries%20-%20Buckingham%20Palace%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hidden Mysteries - Salem Secrets (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Mysteries%20-%20Salem%20Secrets%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hidden Mysteries - Titanic (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Mysteries%20-%20Titanic%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hidden Mysteries - Titanic (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Mysteries%20-%20Titanic%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hidden Mysteries - Titanic - Secrets of the Fateful Voyage (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Mysteries%20-%20Titanic%20-%20Secrets%20of%20the%20Fateful%20Voyage%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hidden Mysteries - Vampire Secrets (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Mysteries%20-%20Vampire%20Secrets%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hidden Mysteries - Vampire Secrets (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Mysteries%20-%20Vampire%20Secrets%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hidden Object Show (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Object%20Show%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hidden Objects - The Big Journey (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Objects%20-%20The%20Big%20Journey%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Hidden Objects - The Big Journey (Europe) (En,Fr,De,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Objects%20-%20The%20Big%20Journey%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Hidden Objects - The Big Journey (Europe) (En,Fr,De,Nl) (Rev 2)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Objects%20-%20The%20Big%20Journey%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Hidden Objects - The Big Journey (Europe) (En,Fr,De,Nl) (Rev 3)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hidden%20Objects%20-%20The%20Big%20Journey%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29%20%28Rev%203%29.zip",
    link2: ""
  },
  {
    name: "High School Musical - Makin' the Cut! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/High%20School%20Musical%20-%20Makin%27%20the%20Cut%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "High School Musical 2 - Work This Out! (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "87.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/High%20School%20Musical%202%20-%20Work%20This%20Out%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "High School Musical 3 - Senior Year (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/High%20School%20Musical%203%20-%20Senior%20Year%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "History - Great Empires - Rome (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/History%20-%20Great%20Empires%20-%20Rome%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Holly Hobbie & Friends (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Holly%20Hobbie%20%26%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hollywood Files - Deadly Intrigues (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hollywood%20Files%20-%20Deadly%20Intrigues%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Honeycomb Beat (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Honeycomb%20Beat%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hop - The Movie (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hop%20-%20The%20Movie%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Horrible Histories - Ruthless Romans (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Horrible%20Histories%20-%20Ruthless%20Romans%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Horrid Henry - Missions of Mischief (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Horrid%20Henry%20-%20Missions%20of%20Mischief%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Horrid Henry - Missions of Mischief (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Horrid%20Henry%20-%20Missions%20of%20Mischief%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Horrid Henry's Horrid Adventure (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Horrid%20Henry%27s%20Horrid%20Adventure%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Horse & Foal - My Riding Stables (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Horse%20%26%20Foal%20-%20My%20Riding%20Stables%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Horse & Foal - My Riding Stables (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Horse%20%26%20Foal%20-%20My%20Riding%20Stables%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Horse & Foal - My Riding Stables (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Horse%20%26%20Foal%20-%20My%20Riding%20Stables%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Horseland (Europe) (En,De,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Horseland%20%28Europe%29%20%28En%2CDe%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Horseland (Europe) (Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Horseland%20%28Europe%29%20%28Fr%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Hoshigami (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hoshigami%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hospital Giant (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hospital%20Giant%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hot Wheels - Battle Force 5 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hot%20Wheels%20-%20Battle%20Force%205%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Hot Wheels - Beat That! (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hot%20Wheels%20-%20Beat%20That%21%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Hot Wheels - Beat That! (Europe) (Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hot%20Wheels%20-%20Beat%20That%21%20%28Europe%29%20%28Fr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hot Wheels - Track Attack (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hot%20Wheels%20-%20Track%20Attack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Hotel Dusk - Room 215 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hotel%20Dusk%20-%20Room%20215%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hotel for Dogs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hotel%20for%20Dogs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Hotel Giant DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hotel%20Giant%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hotel Transylvania (Europe) (En,Fr,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hotel%20Transylvania%20%28Europe%29%20%28En%2CFr%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Hotel Transylvania (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hotel%20Transylvania%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "House M.D. - The Official Game (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/House%20M.D.%20-%20The%20Official%20Game%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "How to Pass Your Driving Test (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/How%20to%20Pass%20Your%20Driving%20Test%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "How to Train Your Dragon (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/How%20to%20Train%20Your%20Dragon%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "How to Train Your Dragon (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/How%20to%20Train%20Your%20Dragon%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hugo - Magic in the Trollwoods (Europe) (Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hugo%20-%20Magic%20in%20the%20Trollwoods%20%28Europe%29%20%28Sv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Hugo - Trollakademin 1 - Den Forsvunna Jatten (Europe) (Sv,No)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hugo%20-%20Trollakademin%201%20-%20Den%20Forsvunna%20Jatten%20%28Europe%29%20%28Sv%2CNo%29.zip",
    link2: ""
  },
  {
    name: "Hugo - Trollakademin 2 - Jakten pa Kristallkartan (Europe) (Sv,No)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hugo%20-%20Trollakademin%202%20-%20Jakten%20pa%20Kristallkartan%20%28Europe%29%20%28Sv%2CNo%29.zip",
    link2: ""
  },
  {
    name: "Hugo - Zauberei im Trollwald (Europe) (En,De,Es,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hugo%20-%20Zauberei%20im%20Trollwald%20%28Europe%29%20%28En%2CDe%2CEs%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Hugo - Zauberei im Trollwald (Europe) (En,De,Es,Pt) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hugo%20-%20Zauberei%20im%20Trollwald%20%28Europe%29%20%28En%2CDe%2CEs%2CPt%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Humans, The - Meet the Ancestors! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Humans%2C%20The%20-%20Meet%20the%20Ancestors%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hurry Up Hedgehog! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hurry%20Up%20Hedgehog%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Hysteria Hospital - Emergency Ward (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Hysteria%20Hospital%20-%20Emergency%20Ward%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "I Am an... Air Traffic Controller by DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Am%20an...%20Air%20Traffic%20Controller%20by%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "I Did It Mum! - Boy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Did%20It%20Mum%21%20-%20Boy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "I Did It Mum! - Girl (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Did%20It%20Mum%21%20-%20Girl%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "I Did It Mum! - Picture Book (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Did%20It%20Mum%21%20-%20Picture%20Book%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "I Did It Mum! 2 - Boy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Did%20It%20Mum%21%202%20-%20Boy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "I Did It Mum! 2 - Girl (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Did%20It%20Mum%21%202%20-%20Girl%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "I Love Beauty - Hollywood Makeover (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Love%20Beauty%20-%20Hollywood%20Makeover%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "I Love Dogs - My Cute Puppies (Europe) (Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "76.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Love%20Dogs%20-%20My%20Cute%20Puppies%20%28Europe%29%20%28Sv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "I Love Horses (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Love%20Horses%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "I Love Horses (Europe) (En,Fr,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Love%20Horses%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "I Love Horses (Europe) (En,Fr,Es,It,Nl) (Rev 1) (YWDZ)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Love%20Horses%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%2CNl%29%20%28Rev%201%29%20%28YWDZ%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "I Love Horses (Europe) (En,Fr,Es,It,Nl) (YWDZ)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Love%20Horses%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%2CNl%29%20%28YWDZ%29.zip",
    link2: ""
  },
  {
    name: "I Spy - Fun House (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Spy%20-%20Fun%20House%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "I Spy - Fun House (Europe) (En,Fr,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Spy%20-%20Fun%20House%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "I Spy - Fun House (Europe) (En,Ru) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%20Spy%20-%20Fun%20House%20%28Europe%29%20%28En%2CRu%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "I'm a Celebrity - Get Me Out of Here! (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/I%27m%20a%20Celebrity%20-%20Get%20Me%20Out%20of%20Here%21%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "iCarly (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "76.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/iCarly%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "iCarly - Groovy Foodie! (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "76.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/iCarly%20-%20Groovy%20Foodie%21%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "iCarly 2 - iJoin the Click! (Europe) (En,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/iCarly%202%20-%20iJoin%20the%20Click%21%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Ice Age 2 - The Meltdown (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ice%20Age%202%20-%20The%20Meltdown%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Ice Age 3 - Dawn of the Dinosaurs (Europe) (De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ice%20Age%203%20-%20Dawn%20of%20the%20Dinosaurs%20%28Europe%29%20%28De%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Ice Age 3 - Dawn of the Dinosaurs (Europe) (En,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ice%20Age%203%20-%20Dawn%20of%20the%20Dinosaurs%20%28Europe%29%20%28En%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Ice Age 3 - Dawn of the Dinosaurs (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ice%20Age%203%20-%20Dawn%20of%20the%20Dinosaurs%20%28Europe%29%20%28Fr%2CNl%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Ice Age 4 - Continental Drift - Arctic Games (Europe) (De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ice%20Age%204%20-%20Continental%20Drift%20-%20Arctic%20Games%20%28Europe%29%20%28De%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Ice Age 4 - Continental Drift - Arctic Games (Europe) (En,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ice%20Age%204%20-%20Continental%20Drift%20-%20Arctic%20Games%20%28Europe%29%20%28En%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Ice Age 4 - Continental Drift - Arctic Games (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ice%20Age%204%20-%20Continental%20Drift%20-%20Arctic%20Games%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Ico Soccer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ico%20Soccer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Igor - The Game (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Igor%20-%20The%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "IL-2 Sturmovik - Birds of Prey (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "72.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/IL-2%20Sturmovik%20-%20Birds%20of%20Prey%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Artist (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Artist%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Babies (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Babies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Baby Club (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Baby%20Club%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Ballet Dancer (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Ballet%20Dancer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Beauty Stylist (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Beauty%20Stylist%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Champion Rider (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Champion%20Rider%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Champion Rider (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Champion%20Rider%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Detective Adventures (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Detective%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Doctor (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Doctor%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Dream Resort (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Dream%20Resort%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Dream Weddings (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "149.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Dream%20Weddings%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Fashion Designer (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "197.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Fashion%20Designer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Fashion Model (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "197.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Fashion%20Model%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Fashion Model (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Fashion%20Model%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Fashion Paradise (Europe) (En,Fr,De,Es,It,Pt) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Fashion%20Paradise%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Figure Skater (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Figure%20Skater%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Girl Band (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Girl%20Band%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Girl Band (Europe) (En,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Girl%20Band%20%28Europe%29%20%28En%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Gymnast (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "110.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Gymnast%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Happy Cooking (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Happy%20Cooking%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Happy Cooking (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Happy%20Cooking%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Happy Cooking (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Happy%20Cooking%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Interior Designer (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Interior%20Designer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Journalist (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Journalist%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Modern Dancer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Modern%20Dancer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Movie Star (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Movie%20Star%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - My Boutique (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20My%20Boutique%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Imagine - My Restaurant (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20My%20Restaurant%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Party Planner (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "74.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Party%20Planner%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Pet Vet (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Pet%20Vet%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Rescue Vet (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Rescue%20Vet%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Teacher (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "60.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Teacher%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Teacher - School Trip (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Teacher%20-%20School%20Trip%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Imagine - Wildlife Keeper (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Imagine%20-%20Wildlife%20Keeper%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Impossible Mission (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Impossible%20Mission%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Inazuma Eleven (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Inazuma%20Eleven%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Inazuma Eleven (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Inazuma%20Eleven%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Inazuma Eleven 2 - Blizzard (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Inazuma%20Eleven%202%20-%20Blizzard%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Inazuma Eleven 2 - Firestorm (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Inazuma%20Eleven%202%20-%20Firestorm%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Inazuma Eleven 2 - Tormenta de Fuego (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Inazuma%20Eleven%202%20-%20Tormenta%20de%20Fuego%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Inazuma Eleven 2 - Ventisca Eterna (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Inazuma%20Eleven%202%20-%20Ventisca%20Eterna%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Incredible Hulk, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Incredible%20Hulk%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Incredibles, The - Rise of the Underminer (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Incredibles%2C%20The%20-%20Rise%20of%20the%20Underminer%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Incredibles, The - Rise of the Underminer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Incredibles%2C%20The%20-%20Rise%20of%20the%20Underminer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Indiana Jones and the Staff of Kings (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Indiana%20Jones%20and%20the%20Staff%20of%20Kings%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Indoor Sports Club (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Indoor%20Sports%20Club%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Infinite Space (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Infinite%20Space%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Inkheart (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Inkheart%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Internado, El - Laguna Negra (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Internado%2C%20El%20-%20Laguna%20Negra%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "International Athletics (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/International%20Athletics%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Iron Man (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Iron%20Man%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Iron Man 2 - The Video Game (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Iron%20Man%202%20-%20The%20Video%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ivy the Kiwi (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ivy%20the%20Kiwi%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Izuna - The Legend of the Ninja (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Izuna%20-%20The%20Legend%20of%20the%20Ninja%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "J'Apprends l'Anglais CP-CM1 (Europe) (Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/J%27Apprends%20l%27Anglais%20CP-CM1%20%28Europe%29%20%28Fr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "J4G - A Girl's World (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/J4G%20-%20A%20Girl%27s%20World%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Jackass - The Game DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jackass%20-%20The%20Game%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jacqueline Wilson's Tracy Beaker - The Game (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jacqueline%20Wilson%27s%20Tracy%20Beaker%20-%20The%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Jam Sessions - Sing & Play Guitar (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jam%20Sessions%20-%20Sing%20%26%20Play%20Guitar%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jam with the Band (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jam%20with%20the%20Band%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jambo! Safari - Animal Rescue (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jambo%21%20Safari%20-%20Animal%20Rescue%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "James Cameron's Avatar - The Game (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/James%20Cameron%27s%20Avatar%20-%20The%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "James Patterson Women's Murder Club - Games of Passion (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/James%20Patterson%20Women%27s%20Murder%20Club%20-%20Games%20of%20Passion%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "James Pond - Codename Robocod (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/James%20Pond%20-%20Codename%20Robocod%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Je Decouvre les Echecs (Europe) (Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Je%20Decouvre%20les%20Echecs%20%28Europe%29%20%28Fr%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Jelly Belly - Ballistic Beans! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jelly%20Belly%20-%20Ballistic%20Beans%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jenga - World Tour (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jenga%20-%20World%20Tour%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jetix Puzzle Buzzle (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jetix%20Puzzle%20Buzzle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Jewel Adventures (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Adventures%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Adventures (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Land (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Land%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Legends - Tree of Life (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Legends%20-%20Tree%20of%20Life%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Legends - Tree of Life (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Legends%20-%20Tree%20of%20Life%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jewel Link - Arctic Quest (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Link%20-%20Arctic%20Quest%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Link - Atlantic Quest (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Link%20-%20Atlantic%20Quest%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Link - Atlantic Quest (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Link%20-%20Atlantic%20Quest%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Link - Galactic Quest (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Link%20-%20Galactic%20Quest%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Link - Legends of Atlantis (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Link%20-%20Legends%20of%20Atlantis%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jewel Link - Safari Quest (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Link%20-%20Safari%20Quest%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Link - Safari Quest (Europe) (Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Link%20-%20Safari%20Quest%20%28Europe%29%20%28Fr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Link Chronicles - Legend of Athena (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Link%20Chronicles%20-%20Legend%20of%20Athena%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jewel Link Double Pack (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Link%20Double%20Pack%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Link Mysteries - Mountains of Madness (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Link%20Mysteries%20-%20Mountains%20of%20Madness%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jewel Master - Atlantis (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Master%20-%20Atlantis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Master - Cradle of Athena (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Master%20-%20Cradle%20of%20Athena%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Master - Cradle of Egypt (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Master%20-%20Cradle%20of%20Egypt%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Master - Cradle of Egypt (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Master%20-%20Cradle%20of%20Egypt%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jewel Master - Cradle of Egypt 2 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Master%20-%20Cradle%20of%20Egypt%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Master - Cradle of Egypt 2 (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Master%20-%20Cradle%20of%20Egypt%202%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jewel Master - Cradle of Persia (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Master%20-%20Cradle%20of%20Persia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Master - Cradle of Persia (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Master%20-%20Cradle%20of%20Persia%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jewel Master - Cradle of Rome (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Master%20-%20Cradle%20of%20Rome%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Master - Cradle of Rome 2 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Master%20-%20Cradle%20of%20Rome%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Match (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "78.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Match%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Match (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Match%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Match 2 (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Match%202%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Match 3 (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Match%203%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest - Expeditions (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20-%20Expeditions%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest - Expeditions (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20-%20Expeditions%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest - Mysteries (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20-%20Mysteries%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest - Mysteries - Curse of the Emerald Tear (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20-%20Mysteries%20-%20Curse%20of%20the%20Emerald%20Tear%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest - Mysteries - Curse of the Emerald Tear (Europe) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20-%20Mysteries%20-%20Curse%20of%20the%20Emerald%20Tear%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest - Solitaire - Solitaire with a Twist! (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20-%20Solitaire%20-%20Solitaire%20with%20a%20Twist%21%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest - Solitaire Trio (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20-%20Solitaire%20Trio%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest - Solitaire Trio (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20-%20Solitaire%20Trio%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest - Solitaire Trio (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20-%20Solitaire%20Trio%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest 5 - The Sleepless Star (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%205%20-%20The%20Sleepless%20Star%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest IV - Heritage (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20IV%20-%20Heritage%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Quest Mysteries 2 - Trail of the Midnight Heart (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Quest%20Mysteries%202%20-%20Trail%20of%20the%20Midnight%20Heart%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewel Time Deluxe (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewel%20Time%20Deluxe%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jewels of the Ages (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewels%20of%20the%20Ages%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jewels of the Tropical Lost Island (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jewels%20of%20the%20Tropical%20Lost%20Island%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jigapix - Love is (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jigapix%20-%20Love%20is%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Jigapix - Pets (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jigapix%20-%20Pets%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Jigapix - Wild World (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "183.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jigapix%20-%20Wild%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Jigapix - Wonderful World (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "51.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jigapix%20-%20Wonderful%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Joan Jade and the Gates of Xibalba (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Joan%20Jade%20and%20the%20Gates%20of%20Xibalba%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Johnny Bravo in the Hukka-Mega-Mighty-Ultra-Extreme Date-O-Rama! (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Johnny%20Bravo%20in%20the%20Hukka-Mega-Mighty-Ultra-Extreme%20Date-O-Rama%21%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jojo's Fashion Show (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jojo%27s%20Fashion%20Show%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Jonas (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jonas%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Jonas (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jonas%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Josefine - Magi i Eventyrland (Europe) (Sv,No)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Josefine%20-%20Magi%20i%20Eventyrland%20%28Europe%29%20%28Sv%2CNo%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Journey to the Center of the Earth (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Journey%20to%20the%20Center%20of%20the%20Earth%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Juiced 2 - Hot Import Nights (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Juiced%202%20-%20Hot%20Import%20Nights%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Jungle School (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "217.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Jungle%20School%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Junior Brain Trainer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "200.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Junior%20Brain%20Trainer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Junior Brain Trainer (Europe) (Fr,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Junior%20Brain%20Trainer%20%28Europe%29%20%28Fr%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Junior Brain Trainer - Maths Edition (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Junior%20Brain%20Trainer%20-%20Maths%20Edition%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Junior Brain Trainer 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Junior%20Brain%20Trainer%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Junior Classic Books (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Junior%20Classic%20Books%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Junior Classic Games (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "65.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Junior%20Classic%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Junior Classic Games (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Junior%20Classic%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Junior Mystery Stories (Europe) (En)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Junior%20Mystery%20Stories%20%28Europe%29%20%28En%29.zip",
    link2: ""
  },
  {
    name: "Junior Mystery Stories (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Junior%20Mystery%20Stories%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Junior Mystery Stories (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Junior%20Mystery%20Stories%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Just Sing! (Europe) (En,Fr,De,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Just%20Sing%21%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Just Sing! (Europe) (En,Fr,De,Nl) (Rev 1) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Just%20Sing%21%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29%20%28Rev%201%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Just Sing! - Vol. 2 (Europe) (En,Fr,De) (VJVP) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Just%20Sing%21%20-%20Vol.%202%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28VJVP%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Just Sing! - Vol. 2 (Europe) (En,Fr,De) (VJVV) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Just%20Sing%21%20-%20Vol.%202%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28VJVV%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Just Sing! - Vol. 3 (Europe) (En,Fr,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Just%20Sing%21%20-%20Vol.%203%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Justice League Heroes (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Justice%20League%20Heroes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kakuromaniacs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kakuromaniacs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kalle Kunskap - 4-7 Aar (Europe) (Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kalle%20Kunskap%20-%204-7%20Aar%20%28Europe%29%20%28Sv%2CNo%2CDa%2CFi%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Kalle Kunskap Matematik 4-8 ar (Europe) (Sv,No)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kalle%20Kunskap%20Matematik%204-8%20ar%20%28Europe%29%20%28Sv%2CNo%29.zip",
    link2: ""
  },
  {
    name: "Kameleon (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kameleon%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Karrablast-shelmet Distribution 2011 (Europe) (En,Fr,De,Es,It) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "97.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Karrablast-shelmet%20Distribution%202011%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "Keldeo Distribution 2012 (USA, Europe) (En,Fr,De,Es,It) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "97.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Keldeo%20Distribution%202012%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "Kid Paddle - Blorks Invasion (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "97.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kid%20Paddle%20-%20Blorks%20Invasion%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Kilari - Deviens une Star (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "97.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kilari%20-%20Deviens%20une%20Star%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kilari - Na-san, Mon Meilleur Ami (Europe) (Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "97.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kilari%20-%20Na-san%2C%20Mon%20Meilleur%20Ami%20%28Europe%29%20%28Fr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kim Possible - Global Gemini (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "97.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kim%20Possible%20-%20Global%20Gemini%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kim Possible - Kimmunicator (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "90.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kim%20Possible%20-%20Kimmunicator%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kingdom Hearts - 358-2 Days (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "106.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kingdom%20Hearts%20-%20358-2%20Days%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kingdom Hearts - Re-coded (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "115.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kingdom%20Hearts%20-%20Re-coded%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kira Kira Pop Princess (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "115.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kira%20Kira%20Pop%20Princess%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kirby - Mouse Attack (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "106.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kirby%20-%20Mouse%20Attack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kirby - Power Paintbrush (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "52.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kirby%20-%20Power%20Paintbrush%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kirby Mass Attack (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "51.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kirby%20Mass%20Attack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kirby Super Star Ultra (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "94.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kirby%20Super%20Star%20Ultra%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kirikou and the Wild Beasts (Europe) (En,Fr,De,Es,It) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "112.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kirikou%20and%20the%20Wild%20Beasts%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Kirikou et les Betes Sauvages (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "69.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kirikou%20et%20les%20Betes%20Sauvages%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Knerten Gets Married (Europe) (En,De,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "69.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Knerten%20Gets%20Married%20%28Europe%29%20%28En%2CDe%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Knock 'Em Downs - World's Fair (Europe) (En,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "106.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Knock%20%27Em%20Downs%20-%20World%27s%20Fair%20%28Europe%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Know How - Spielend um die Ecke denken (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "195.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Know%20How%20-%20Spielend%20um%20die%20Ecke%20denken%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Know How 2 (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "52.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Know%20How%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Konami Arcade Classics (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Konami%20Arcade%20Classics%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Korg DS-10 Synthesizer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "109.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Korg%20DS-10%20Synthesizer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Kung Fu Panda (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "113.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kung%20Fu%20Panda%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Kung Fu Panda (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kung%20Fu%20Panda%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Kung Fu Panda - Legendary Warriors (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kung%20Fu%20Panda%20-%20Legendary%20Warriors%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Kung Fu Panda 2 (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kung%20Fu%20Panda%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Kung Zhu (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kung%20Zhu%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Kung Zhu (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Kung%20Zhu%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Labyrinth (Europe) (En,Fr,De) (Ravensburger)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Labyrinth%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28Ravensburger%29.zip",
    link2: ""
  },
  {
    name: "Labyrinth (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Labyrinth%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Labyrinth (Europe) (En,Fr,De,It) (Rev 1) (Ravensburger)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Labyrinth%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29%20%28Rev%201%29%20%28Ravensburger%29.zip",
    link2: ""
  },
  {
    name: "Labyrinth (Europe) (Fr,Nl) (Ravensburger)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "56.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Labyrinth%20%28Europe%29%20%28Fr%2CNl%29%20%28Ravensburger%29.zip",
    link2: ""
  },
  {
    name: "Lalaloopsy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "112.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lalaloopsy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Lanfeust of Troy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lanfeust%20of%20Troy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Langenscheidt Basic-Woerterbuch Englisch (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "91.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Langenscheidt%20Basic-Woerterbuch%20Englisch%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Langenscheidt VokabelStar Englisch fuer Einsteiger (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Langenscheidt%20VokabelStar%20Englisch%20fuer%20Einsteiger%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Lara Croft Tomb Raider - Legend (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lara%20Croft%20Tomb%20Raider%20-%20Legend%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Last Window - The Secret of Cape West (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Last%20Window%20-%20The%20Secret%20of%20Cape%20West%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Learn to Play Chess with Fritz & Chesster (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Learn%20to%20Play%20Chess%20with%20Fritz%20%26%20Chesster%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Learn with Pokemon - Typing Adventure (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Learn%20with%20Pokemon%20-%20Typing%20Adventure%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Learning Maths (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Learning%20Maths%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Left Brain, Right Brain 2 (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "56.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Left%20Brain%2C%20Right%20Brain%202%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Left or Right - Ambidextrous Challenge (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Left%20or%20Right%20-%20Ambidextrous%20Challenge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Kage 2, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20Kage%202%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Kay (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20Kay%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Spyro, The - A New Beginning (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20Spyro%2C%20The%20-%20A%20New%20Beginning%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Legend of Spyro, The - Dawn of the Dragon (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "71.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20Spyro%2C%20The%20-%20Dawn%20of%20the%20Dragon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Legend of Spyro, The - The Eternal Night (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "71.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20Spyro%2C%20The%20-%20The%20Eternal%20Night%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Legend of the Guardians - The Owls of Ga'Hoole (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20the%20Guardians%20-%20The%20Owls%20of%20Ga%27Hoole%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Phantom Hourglass (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20Zelda%2C%20The%20-%20Phantom%20Hourglass%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Phantom Hourglass (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20Zelda%2C%20The%20-%20Phantom%20Hourglass%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Spirit Tracks (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20Zelda%2C%20The%20-%20Spirit%20Tracks%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Spirit Tracks (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20Zelda%2C%20The%20-%20Spirit%20Tracks%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Spirit Tracks (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Legend%20of%20Zelda%2C%20The%20-%20Spirit%20Tracks%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "LEGO Batman - The Videogame (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Batman%20-%20The%20Videogame%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Batman 2 - DC Super Heroes (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Batman%202%20-%20DC%20Super%20Heroes%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "LEGO Batman 2 - DC Super Heroes (Europe) (En,De) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Batman%202%20-%20DC%20Super%20Heroes%20%28Europe%29%20%28En%2CDe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "LEGO Batman 2 - DC Super Heroes (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Batman%202%20-%20DC%20Super%20Heroes%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "LEGO Batman 2 - DC Super Heroes (Europe) (En,Fr) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Batman%202%20-%20DC%20Super%20Heroes%20%28Europe%29%20%28En%2CFr%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "LEGO Batman 2 - DC Super Heroes (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Batman%202%20-%20DC%20Super%20Heroes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Batman 2 - DC Super Heroes (Europe) (En,Fr,De,Es,It,Nl,Da) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Batman%202%20-%20DC%20Super%20Heroes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "LEGO Battles (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Battles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Friends (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Harry Potter - Years 1-4 (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Harry%20Potter%20-%20Years%201-4%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Harry Potter - Years 1-4 (Europe) (En,Fr,De,Es,It,Da) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Harry%20Potter%20-%20Years%201-4%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "LEGO Harry Potter - Years 5-7 (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Harry%20Potter%20-%20Years%205-7%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Indiana Jones - The Original Adventures (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Indiana%20Jones%20-%20The%20Original%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Indiana Jones 2 - The Adventure Continues (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Indiana%20Jones%202%20-%20The%20Adventure%20Continues%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Legends of Chima - Laval's Journey (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Legends%20of%20Chima%20-%20Laval%27s%20Journey%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Marvel Super Heroes - Universe in Peril (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Marvel%20Super%20Heroes%20-%20Universe%20in%20Peril%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Ninjago - The Videogame (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "86.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Ninjago%20-%20The%20Videogame%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Ninjago - The Videogame (Europe) (En,Fr,De,Es,It,Nl,Da) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Ninjago%20-%20The%20Videogame%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "LEGO Pirates of the Caribbean - The Video Game (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Pirates%20of%20the%20Caribbean%20-%20The%20Video%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Rock Band (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Rock%20Band%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Star Wars - The Complete Saga (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "56.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Star%20Wars%20-%20The%20Complete%20Saga%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Star Wars II - The Original Trilogy (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Star%20Wars%20II%20-%20The%20Original%20Trilogy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO Star Wars III - The Clone Wars (Europe) (En,Fr,De,Es,It,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20Star%20Wars%20III%20-%20The%20Clone%20Wars%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO The Lord of the Rings (Europe) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20The%20Lord%20of%20the%20Rings%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "LEGO The Lord of the Rings (Spain) (En,Fr,De,Es,It,Nl,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LEGO%20The%20Lord%20of%20the%20Rings%20%28Spain%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Grundschule - Deutsch - Der Rechtschreibtrainer (Europe) (De,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Grundschule%20-%20Deutsch%20-%20Der%20Rechtschreibtrainer%20%28Europe%29%20%28De%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Grundschule - Deutsch - Klasse 1+2 (Europe) (De,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Grundschule%20-%20Deutsch%20-%20Klasse%201%2B2%20%28Europe%29%20%28De%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Grundschule - Deutsch - Klasse 1-4 (Europe) (De,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Grundschule%20-%20Deutsch%20-%20Klasse%201-4%20%28Europe%29%20%28De%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Grundschule - Deutsch - Klasse 1-4 (Europe) (De,Tr) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Grundschule%20-%20Deutsch%20-%20Klasse%201-4%20%28Europe%29%20%28De%2CTr%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Grundschule - Deutsch - Klasse 3+4 (Europe) (De,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Grundschule%20-%20Deutsch%20-%20Klasse%203%2B4%20%28Europe%29%20%28De%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Grundschule - Englisch - Der Vokabeltrainer (Europe) (Fr,De,Es,It,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Grundschule%20-%20Englisch%20-%20Der%20Vokabeltrainer%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Grundschule - Englisch - Klasse 1-4 (Spain) (Es,Ru) (Proto)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Grundschule%20-%20Englisch%20-%20Klasse%201-4%20%28Spain%29%20%28Es%2CRu%29%20%28Proto%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Grundschule - Konzentration - Der Aufmerksamkeitstrainer (Europe) (En,De,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Grundschule%20-%20Konzentration%20-%20Der%20Aufmerksamkeitstrainer%20%28Europe%29%20%28En%2CDe%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Grundschule - Mathematik Intensiv - Klasse 1-4 (Europe) (En,Fr,De,Es,It,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Grundschule%20-%20Mathematik%20Intensiv%20-%20Klasse%201-4%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Vorschule - Capt'n Sharky (Europe) (De,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Vorschule%20-%20Capt%27n%20Sharky%20%28Europe%29%20%28De%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Lernerfolg Vorschule - Prinzessin Lillifee (Europe) (De,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lernerfolg%20Vorschule%20-%20Prinzessin%20Lillifee%20%28Europe%29%20%28De%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Let's Draw! (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Draw%21%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Let's Draw! (Europe) (Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Draw%21%20%28Europe%29%20%28Fr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Let's Draw! (Europe) (Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Draw%21%20%28Europe%29%20%28Sv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Let's Play Fashion Designer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Play%20Fashion%20Designer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Let's Play Firemen (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Play%20Firemen%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Let's Play Flight Attendant (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "68.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Play%20Flight%20Attendant%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Let's Play Journalists (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "53.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Play%20Journalists%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Let's Play Mums (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Play%20Mums%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Let's Play Pet Hospitals (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Play%20Pet%20Hospitals%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Let's Play Schools (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Play%20Schools%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Let's Play Shops (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Play%20Shops%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Let's Yoga! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Let%27s%20Yoga%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Liberty Pass Distribution (Europe) (En,Ja) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Liberty%20Pass%20Distribution%20%28Europe%29%20%28En%2CJa%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "LifeSigns - Hospital Affairs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LifeSigns%20-%20Hospital%20Affairs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Linda Hyde - Vampire Mansion (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Linda%20Hyde%20-%20Vampire%20Mansion%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Line Rider - Freestyle (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Line%20Rider%20-%20Freestyle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Lionel Trains - On Track (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lionel%20Trains%20-%20On%20Track%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Little Bears (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Little%20Bears%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Little Charley Bear - Toybox of Fun (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Little%20Charley%20Bear%20-%20Toybox%20of%20Fun%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Little Mermaid, The - Ariel's Undersea Adventure (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "77.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Little%20Mermaid%2C%20The%20-%20Ariel%27s%20Undersea%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Littlest Pet Shop - Beach Friends (Europe) (En,Fr,De,Es,Nl,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "84.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Littlest%20Pet%20Shop%20-%20Beach%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Littlest Pet Shop - City Friends (Europe) (En,Fr,De,Es,Nl,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Littlest%20Pet%20Shop%20-%20City%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Littlest Pet Shop - Country Friends (Europe) (En,Fr,De,Es,Nl,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "84.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Littlest%20Pet%20Shop%20-%20Country%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Littlest Pet Shop - Garden (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi,Pl,Cs)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "70.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Littlest%20Pet%20Shop%20-%20Garden%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%2CPl%2CCs%29.zip",
    link2: ""
  },
  {
    name: "Littlest Pet Shop - Jungle (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi,Pl,Cs)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Littlest%20Pet%20Shop%20-%20Jungle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%2CPl%2CCs%29.zip",
    link2: ""
  },
  {
    name: "Littlest Pet Shop - Spring (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Littlest%20Pet%20Shop%20-%20Spring%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Littlest Pet Shop - Winter (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi,Pl,Cs)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Littlest%20Pet%20Shop%20-%20Winter%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%2CPl%2CCs%29.zip",
    link2: ""
  },
  {
    name: "Littlest Pet Shop 3 - Biggest Stars - Blue Team (Europe) (En,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Littlest%20Pet%20Shop%203%20-%20Biggest%20Stars%20-%20Blue%20Team%20%28Europe%29%20%28En%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Littlest Pet Shop 3 - Biggest Stars - Pink Team (Europe) (En,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Littlest%20Pet%20Shop%203%20-%20Biggest%20Stars%20-%20Pink%20Team%20%28Europe%29%20%28En%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Littlest Pet Shop 3 - Biggest Stars - Purple Team (Europe) (En,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Littlest%20Pet%20Shop%203%20-%20Biggest%20Stars%20-%20Purple%20Team%20%28Europe%29%20%28En%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Lock's Quest (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lock%27s%20Quest%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Lock's Quest (Europe) (En,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lock%27s%20Quest%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Logic Cubes (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Logic%20Cubes%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Logic Island (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Logic%20Island%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Logic Machines (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Logic%20Machines%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Lola & Virginia (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lola%20%26%20Virginia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Looney Tunes - Cartoon Concerto (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Looney%20Tunes%20-%20Cartoon%20Concerto%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Looney Tunes - Duck Amuck (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Looney%20Tunes%20-%20Duck%20Amuck%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Lord of the Rings, The - Aragorn's Quest (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lord%20of%20the%20Rings%2C%20The%20-%20Aragorn%27s%20Quest%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Lord of the Rings, The - Conquest (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lord%20of%20the%20Rings%2C%20The%20-%20Conquest%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Lost Identities (Europe) (En,De) (VLIP) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lost%20Identities%20%28Europe%29%20%28En%2CDe%29%20%28VLIP%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Lost Identities (Europe) (En,De) (VLIV) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lost%20Identities%20%28Europe%29%20%28En%2CDe%29%20%28VLIV%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Lost in Blue (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lost%20in%20Blue%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Lost in Blue 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lost%20in%20Blue%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Lost in Blue 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lost%20in%20Blue%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Lost Treasures of Alexandria, The (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lost%20Treasures%20of%20Alexandria%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "LostMagic (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/LostMagic%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Love Is... in Bloom - The Flower Shop Garden (Europe) (En,Fr,De,Es,It,Nl,Ru)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Love%20Is...%20in%20Bloom%20-%20The%20Flower%20Shop%20Garden%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Lovely Lisa (Europe) (En,Fr,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lovely%20Lisa%20%28Europe%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Loving Life with Hello Kitty & Friends (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Loving%20Life%20with%20Hello%20Kitty%20%26%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Lucky Luke - The Daltons (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lucky%20Luke%20-%20The%20Daltons%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Luminous Arc (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Luminous%20Arc%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Luminous Arc 2 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Luminous%20Arc%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Lunar - Genesis (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lunar%20-%20Genesis%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Lunar Knights (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lunar%20Knights%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Lunnis (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lunnis%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Lux-Pain (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Lux-Pain%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Luxor - Pharaoh's Challenge (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Luxor%20-%20Pharaoh%27s%20Challenge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "M&M's - Break 'em (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/M%26M%27s%20-%20Break%20%27em%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Madagascar (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Madagascar%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Madagascar (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "63.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Madagascar%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Madagascar 2 (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Madagascar%202%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Madagascar 3 - Europe's Most Wanted (Europe) (En,Fr,De,Es,It,Nl,Ru)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Madagascar%203%20-%20Europe%27s%20Most%20Wanted%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Madagascar Kartz (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Madagascar%20Kartz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 06 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Madden%20NFL%2006%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 07 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Madden%20NFL%2007%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 08 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Madden%20NFL%2008%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Madden NFL 09 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "62.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Madden%20NFL%2009%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Maestro! - Jump in Music (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Maestro%21%20-%20Jump%20in%20Music%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Magic Encyclopedia 3 - Illusions (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Magic%20Encyclopedia%203%20-%20Illusions%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Magic Encyclopedia II - Moonlight (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "96.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Magic%20Encyclopedia%20II%20-%20Moonlight%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Magic Made Fun - Perform Tricks That Will Amaze Your Friends! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "86.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Magic%20Made%20Fun%20-%20Perform%20Tricks%20That%20Will%20Amaze%20Your%20Friends%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Magic Roundabout, The (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Magic%20Roundabout%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Magical Michael Pang (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Magical%20Michael%20Pang%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Magical Starsign (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Magical%20Starsign%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Magical Unicorn, The (Europe) (Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Magical%20Unicorn%2C%20The%20%28Europe%29%20%28Fr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mah Jong Quest - Expeditions (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mah%20Jong%20Quest%20-%20Expeditions%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mah Jong Quest - Expeditions (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mah%20Jong%20Quest%20-%20Expeditions%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mah-Jong 300 (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mah-Jong%20300%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mahjong (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mahjong%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mahjong - Eine Reise um die Welt (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mahjong%20-%20Eine%20Reise%20um%20die%20Welt%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mahjong Mysteries - Ancient Athena (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mahjong%20Mysteries%20-%20Ancient%20Athena%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mahjong Mysteries - Ancient Athena (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mahjong%20Mysteries%20-%20Ancient%20Athena%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mahjong Mysteries - Ancient Egypt (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mahjong%20Mysteries%20-%20Ancient%20Egypt%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mahjong Mysteries - Ancient Egypt (Europe) (En,Fr,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mahjong%20Mysteries%20-%20Ancient%20Egypt%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg - Ancient Egypt (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mahjongg%20-%20Ancient%20Egypt%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg - Ancient Mayas (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mahjongg%20-%20Ancient%20Mayas%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg - Ancient Mayas (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mahjongg%20-%20Ancient%20Mayas%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mahjongg DS (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mahjongg%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mais Ou Se Cache Carmen Sandiego - Mystere au Bout du Monde (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mais%20Ou%20Se%20Cache%20Carmen%20Sandiego%20-%20Mystere%20au%20Bout%20du%20Monde%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Maja (Europe) (Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Maja%20%28Europe%29%20%28Fr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Make 10 - A Journey of Numbers (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Make%2010%20-%20A%20Journey%20of%20Numbers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "March of the Penguins (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/March%20of%20the%20Penguins%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Margot's Bepuzzled! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Margot%27s%20Bepuzzled%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Margot's Word Brain (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Margot%27s%20Word%20Brain%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Marie-Antoinette and the American War of Independence - Episode 1 - The Brotherhood of the Wolf (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Marie-Antoinette%20and%20the%20American%20War%20of%20Independence%20-%20Episode%201%20-%20The%20Brotherhood%20of%20the%20Wolf%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Marie-Antoinette and the Disciples of Loki (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Marie-Antoinette%20and%20the%20Disciples%20of%20Loki%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Mario & Luigi - Bowser's Inside Story (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20%26%20Luigi%20-%20Bowser%27s%20Inside%20Story%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario & Luigi - Bowser's Inside Story (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20%26%20Luigi%20-%20Bowser%27s%20Inside%20Story%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Mario & Luigi - Partners in Time (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20%26%20Luigi%20-%20Partners%20in%20Time%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario & Luigi - Partners in Time (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20%26%20Luigi%20-%20Partners%20in%20Time%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Mario & Sonic at the Olympic Games (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20%26%20Sonic%20at%20the%20Olympic%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario & Sonic at the Olympic Winter Games (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20%26%20Sonic%20at%20the%20Olympic%20Winter%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Kart DS (Europe) (Demo) (Kiosk, Multiplayer)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20Kart%20DS%20%28Europe%29%20%28Demo%29%20%28Kiosk%2C%20Multiplayer%29.zip",
    link2: ""
  },
  {
    name: "Mario Kart DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20Kart%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Party DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20Party%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario Party DS (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20Party%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mario Slam Basketball (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20Slam%20Basketball%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Mario Slam Basketball (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20Slam%20Basketball%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mario vs. Donkey Kong - Mini-Land Mayhem! (Europe) (Demo) (Kiosk) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20vs.%20Donkey%20Kong%20-%20Mini-Land%20Mayhem%21%20%28Europe%29%20%28Demo%29%20%28Kiosk%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Mario vs. Donkey Kong - Mini-Land Mayhem! (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20vs.%20Donkey%20Kong%20-%20Mini-Land%20Mayhem%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Mario vs. Donkey Kong 2 - March of the Minis (Europe) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20vs.%20Donkey%20Kong%202%20-%20March%20of%20the%20Minis%20%28Europe%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Mario vs. Donkey Kong 2 - March of the Minis (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mario%20vs.%20Donkey%20Kong%202%20-%20March%20of%20the%20Minis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Martin Mystery (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Martin%20Mystery%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Martin Mystery (Europe) (En,Fr,De,Es,It) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Martin%20Mystery%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Marvel - Ultimate Alliance 2 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Marvel%20-%20Ultimate%20Alliance%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Marvel Nemesis - Rise of the Imperfects (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Marvel%20Nemesis%20-%20Rise%20of%20the%20Imperfects%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Marvel Super Hero Squad (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Marvel%20Super%20Hero%20Squad%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Marvel Super Hero Squad (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Marvel%20Super%20Hero%20Squad%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Marvel Super Hero Squad - The Infinity Gauntlet (Europe) (De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Marvel%20Super%20Hero%20Squad%20-%20The%20Infinity%20Gauntlet%20%28Europe%29%20%28De%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Marvel Super Hero Squad - The Infinity Gauntlet (Europe) (En,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Marvel%20Super%20Hero%20Squad%20-%20The%20Infinity%20Gauntlet%20%28Europe%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Marvel Super Hero Squad - The Infinity Gauntlet (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Marvel%20Super%20Hero%20Squad%20-%20The%20Infinity%20Gauntlet%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Marvel Trading Card Game (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Marvel%20Trading%20Card%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mary King's Riding School (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mary%20King%27s%20Riding%20School%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Master All Classics (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Master%20All%20Classics%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Match 3 Madness (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Match%203%20Madness%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Matchstick Puzzle by DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Matchstick%20Puzzle%20by%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mathe Buddy - 5. Klasse (Europe) (Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mathe%20Buddy%20-%205.%20Klasse%20%28Europe%29%20%28Fr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mathe Buddy - 6. Klasse (Europe) (Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mathe%20Buddy%20-%206.%20Klasse%20%28Europe%29%20%28Fr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Maths Made Simple (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Maths%20Made%20Simple%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Maths Play - Have Fun with Numbers! (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Maths%20Play%20-%20Have%20Fun%20with%20Numbers%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Maus DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Maus%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Max & the Magic Marker (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Max%20%26%20the%20Magic%20Marker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "May's Mysteries - The Secret of Dragonville (Europe) (B8HP)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/May%27s%20Mysteries%20-%20The%20Secret%20of%20Dragonville%20%28Europe%29%20%28B8HP%29.zip",
    link2: ""
  },
  {
    name: "May's Mysteries - The Secret of Dragonville (Europe) (B8HX)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/May%27s%20Mysteries%20-%20The%20Secret%20of%20Dragonville%20%28Europe%29%20%28B8HX%29.zip",
    link2: ""
  },
  {
    name: "Maya (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Maya%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mazes of Fate DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mazes%20of%20Fate%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mechanic Master (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mechanic%20Master%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mechanic Master 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mechanic%20Master%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "MechAssault - Phantom War (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MechAssault%20-%20Phantom%20War%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Meet the Robinsons (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Meet%20the%20Robinsons%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mega Man Battle Network 5 - Double Team DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Man%20Battle%20Network%205%20-%20Double%20Team%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mega Man Star Force - Dragon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Man%20Star%20Force%20-%20Dragon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mega Man Star Force - Leo (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Man%20Star%20Force%20-%20Leo%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mega Man Star Force - Pegasus (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Man%20Star%20Force%20-%20Pegasus%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mega Man Star Force 2 - Zerker x Ninja (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Man%20Star%20Force%202%20-%20Zerker%20x%20Ninja%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mega Man Star Force 2 - Zerker x Saurian (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Man%20Star%20Force%202%20-%20Zerker%20x%20Saurian%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mega Man Zero Collection (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Man%20Zero%20Collection%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mega Man ZX (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Man%20ZX%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mega Man ZX - Advent (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Man%20ZX%20-%20Advent%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mega Mindy (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Mindy%20%28Europe%29%20%28Fr%2CNl%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Mega Mindy (Europe) (Fr,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Mindy%20%28Europe%29%20%28Fr%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mega Mindy (Europe) (Fr,Nl) (Rev 2)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mega%20Mindy%20%28Europe%29%20%28Fr%2CNl%29%20%28Rev%202%29.zip",
    link2: ""
  },
  {
    name: "Megamind - The Blue Defender (Europe) (En,Fr,De,Es,It,Nl,Sv,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Megamind%20-%20The%20Blue%20Defender%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Mein Eigener Tierbaby-Zoo (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mein%20Eigener%20Tierbaby-Zoo%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Meine Tierarztpraxis - SOS am Ozean (Europe) (En,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Meine%20Tierarztpraxis%20-%20SOS%20am%20Ozean%20%28Europe%29%20%28En%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Meloetta Distribution 2013 (USA, Europe) (En,Fr,De,Es,It) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Meloetta%20Distribution%202013%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "Mensch Aergere Dich Nicht - Das Beliebte Original (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mensch%20Aergere%20Dich%20Nicht%20-%20Das%20Beliebte%20Original%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Merlin - A Servant of Two Masters (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Merlin%20-%20A%20Servant%20of%20Two%20Masters%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Metal Slug 7 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Metal%20Slug%207%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Meteos (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Meteos%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Meteos - Disney Magic (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Meteos%20-%20Disney%20Magic%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime - Hunters (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Metroid%20Prime%20-%20Hunters%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime - Hunters (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Metroid%20Prime%20-%20Hunters%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime - Hunters - First Hunt (Europe) (En,Fr,De,Es,It) (Demo) (Not for Resale)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Metroid%20Prime%20-%20Hunters%20-%20First%20Hunt%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Not%20for%20Resale%29.zip",
    link2: ""
  },
  {
    name: "Metroid Prime Pinball (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Metroid%20Prime%20Pinball%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Metropolis Crime$ (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Metropolis%20Crime%24%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mi Escuela de Equitacion (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mi%20Escuela%20de%20Equitacion%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Mi Experto en Aleman - Mejora Tu Vocabulario Aleman (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mi%20Experto%20en%20Aleman%20-%20Mejora%20Tu%20Vocabulario%20Aleman%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Mi Experto en Cocina - Comida Saludable (Spain) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mi%20Experto%20en%20Cocina%20-%20Comida%20Saludable%20%28Spain%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Mi Experto en Frances - Mejora Tu Vocabulario Frances (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mi%20Experto%20en%20Frances%20-%20Mejora%20Tu%20Vocabulario%20Frances%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Mi Experto en Ingles - Mejora Tu Vocabulario Ingles (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mi%20Experto%20en%20Ingles%20-%20Mejora%20Tu%20Vocabulario%20Ingles%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Mi Experto en Vocabulario (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mi%20Experto%20en%20Vocabulario%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Miami Crisis (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "77.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Miami%20Crisis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Miami Nights - Singles in the City (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Miami%20Nights%20-%20Singles%20in%20the%20City%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Michael Jackson - The Experience (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "88.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Michael%20Jackson%20-%20The%20Experience%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Micro Machines V4 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Micro%20Machines%20V4%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Midnight Mysteries - The Edgar Allan Poe Conspiracy (Europe) (En,Fr,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Midnight%20Mysteries%20-%20The%20Edgar%20Allan%20Poe%20Conspiracy%20%28Europe%29%20%28En%2CFr%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Midnight Mysteries - The Edgar Allan Poe Conspiracy (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Midnight%20Mysteries%20-%20The%20Edgar%20Allan%20Poe%20Conspiracy%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Midnight Play! Pack (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Midnight%20Play%21%20Pack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Miffy's World (Europe) (En,Fr,Es,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Miffy%27s%20World%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Miffy's World (Europe) (En,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Miffy%27s%20World%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Might & Magic - Clash of Heroes (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Might%20%26%20Magic%20-%20Clash%20of%20Heroes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mijn Droomjob - Verpleegster (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mijn%20Droomjob%20-%20Verpleegster%20%28Europe%29%20%28Fr%2CNl%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Military History - Commander - Europe at War (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Military%20History%20-%20Commander%20-%20Europe%20at%20War%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mind Quiz - Your Brain Coach (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mind%20Quiz%20-%20Your%20Brain%20Coach%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mind Your Language - Apprends le Francais! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mind%20Your%20Language%20-%20Apprends%20le%20Francais%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mind Your Language - Aprende Espanol! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mind%20Your%20Language%20-%20Aprende%20Espanol%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mind Your Language - Learn English! (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mind%20Your%20Language%20-%20Learn%20English%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Mind Your Language - Learn Japanese! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mind%20Your%20Language%20-%20Learn%20Japanese%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mind Your Language - Lern Deutsch! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mind%20Your%20Language%20-%20Lern%20Deutsch%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Mind. Body. Soul. - Blend-It (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mind.%20Body.%20Soul.%20-%20Blend-It%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mind. Body. Soul. - Nutrition Matters (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mind.%20Body.%20Soul.%20-%20Nutrition%20Matters%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mind. Body. Soul. - Spellbound 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mind.%20Body.%20Soul.%20-%20Spellbound%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "MinDStorm - Train Your Brain (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MinDStorm%20-%20Train%20Your%20Brain%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "MinDStorm 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MinDStorm%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mini Ninjas (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mini%20Ninjas%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Miss Spider's Sunny Patch Friends - Harvest Time Hop and Fly (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Miss%20Spider%27s%20Sunny%20Patch%20Friends%20-%20Harvest%20Time%20Hop%20and%20Fly%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Miss Spider's Sunny Patch Friends - Harvest Time Hop and Fly (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Miss%20Spider%27s%20Sunny%20Patch%20Friends%20-%20Harvest%20Time%20Hop%20and%20Fly%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Monde de Titeuf, Le (Europe) (En,Fr,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monde%20de%20Titeuf%2C%20Le%20%28Europe%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Monopoly (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monopoly%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Monster Bomber (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20Bomber%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Monster High - 13 Wishes (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20High%20-%2013%20Wishes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Monster High - Ghoul Spirit (Europe) (En,Fr,De,Es,It,Nl) (Little Orbit) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20High%20-%20Ghoul%20Spirit%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Little%20Orbit%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Monster High - Ghoul Spirit (Europe) (En,Fr,De,Es,It,Nl) (THQ) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20High%20-%20Ghoul%20Spirit%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28THQ%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Monster High - Skultimate Roller Maze (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20High%20-%20Skultimate%20Roller%20Maze%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Monster House (Europe) (En,Fr,De,Es,It,Sv,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20House%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Monster Jam (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20Jam%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Monster Jam (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20Jam%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Monster Jam - Path of Destruction (Europe) (En,Fr,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20Jam%20-%20Path%20of%20Destruction%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Monster Jam - Urban Assault (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20Jam%20-%20Urban%20Assault%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Monster Lab (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20Lab%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Monster Puzzle (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20Puzzle%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Monster Trucks DS (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monster%20Trucks%20DS%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Monsters vs Aliens (Europe) (En,Fr,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monsters%20vs%20Aliens%20%28Europe%29%20%28En%2CFr%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Monsters vs Aliens (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Monsters%20vs%20Aliens%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Moon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Moon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Moorhuhn - Jewel of Darkness (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Moorhuhn%20-%20Jewel%20of%20Darkness%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Moorhuhn - Star Karts (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "69.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Moorhuhn%20-%20Star%20Karts%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Moorhuhn Adventure - The Pharaoh's Treasure (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Moorhuhn%20Adventure%20-%20The%20Pharaoh%27s%20Treasure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Moorhuhn DS (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Moorhuhn%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Moorhuhn Jump'n Run - Atlantis (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Moorhuhn%20Jump%27n%20Run%20-%20Atlantis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "More Brain Training from Dr Kawashima - How Old Is Your Brain (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/More%20Brain%20Training%20from%20Dr%20Kawashima%20-%20How%20Old%20Is%20Your%20Brain%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "More Brain Training from Dr Kawashima - How Old Is Your Brain (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/More%20Brain%20Training%20from%20Dr%20Kawashima%20-%20How%20Old%20Is%20Your%20Brain%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "More TouchMaster (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/More%20TouchMaster%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Moshi Monsters - Katsuma Unleashed (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Moshi%20Monsters%20-%20Katsuma%20Unleashed%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Moshi Monsters - Moshling Zoo (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Moshi%20Monsters%20-%20Moshling%20Zoo%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Moshi Monsters - Moshlings Theme Park (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Moshi%20Monsters%20-%20Moshlings%20Theme%20Park%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Moto Racer DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Moto%20Racer%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mr Bean (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mr%20Bean%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Mr. Driller - Drill Spirits (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mr.%20Driller%20-%20Drill%20Spirits%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mr. Slime Jr. (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mr.%20Slime%20Jr.%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "MTV Fan Attack (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MTV%20Fan%20Attack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "MTV Fan Attack (Europe) (En,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MTV%20Fan%20Attack%20%28Europe%29%20%28En%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Mummi og de Mystiske Hylene (Europe) (Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mummi%20og%20de%20Mystiske%20Hylene%20%28Europe%29%20%28Sv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Mummi og den Store Hoestfesten (Europe) (Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mummi%20og%20den%20Store%20Hoestfesten%20%28Europe%29%20%28Sv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Mummy, The - Tomb of the Dragon Emperor (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mummy%2C%20The%20-%20Tomb%20of%20the%20Dragon%20Emperor%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Murder in Venice (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Murder%20in%20Venice%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Murder on the Titanic (Europe) (En,Fr,De,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Murder%20on%20the%20Titanic%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Mushroom Men - Rise of the Fungi (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mushroom%20Men%20-%20Rise%20of%20the%20Fungi%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Music - Music for Everyone (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Music%20-%20Music%20for%20Everyone%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Music for Kids (Europe) (En,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Music%20for%20Kids%20%28Europe%29%20%28En%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Music Monstars - The Ultimate Music Machine (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Music%20Monstars%20-%20The%20Ultimate%20Music%20Machine%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Music Star - I Wanna Be a Popstar (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Music%20Star%20-%20I%20Wanna%20Be%20a%20Popstar%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "MX vs ATV Reflex (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MX%20vs%20ATV%20Reflex%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "MX vs. ATV Untamed (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MX%20vs.%20ATV%20Untamed%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "My Animal Centre (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Animal%20Centre%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "My Animal Centre - Baby Animals (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Animal%20Centre%20-%20Baby%20Animals%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Animal Centre in Africa (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Animal%20Centre%20in%20Africa%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Animal Centre in Africa (Europe) (Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Animal%20Centre%20in%20Africa%20%28Europe%29%20%28Sv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "My Animal Centre in Australia (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Animal%20Centre%20in%20Australia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "My Baby - Boy (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Baby%20-%20Boy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "My Baby - Girl (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Baby%20-%20Girl%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "My Baby 2 - Boy & Girl (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Baby%202%20-%20Boy%20%26%20Girl%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "My Baby 3 & Friends (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Baby%203%20%26%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "My Best Friends - Cats & Dogs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Best%20Friends%20-%20Cats%20%26%20Dogs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Boyfriend (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Boyfriend%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Chinese Coach - Learn to Speak Chinese (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Chinese%20Coach%20-%20Learn%20to%20Speak%20Chinese%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Cooking Coach - Prepare Healthy Recipes (Europe) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Cooking%20Coach%20-%20Prepare%20Healthy%20Recipes%20%28Europe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "My Dangerous Pet - Spider (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Dangerous%20Pet%20-%20Spider%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "My Dog Coach - Understand Your Dog with Cesar Millan (Europe) (En,Fr,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Dog%20Coach%20-%20Understand%20Your%20Dog%20with%20Cesar%20Millan%20%28Europe%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "My Dogs Paradise (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Dogs%20Paradise%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "My Dress-Up (Europe) (En,Fr,De,Es,It,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Dress-Up%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "My English Coach (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20English%20Coach%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "My Farm Around the World (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Farm%20Around%20the%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "My French Coach - Level 1 - Learn to Speak French (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20French%20Coach%20-%20Level%201%20-%20Learn%20to%20Speak%20French%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "My French Coach - Level 2 - Improve Your French (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20French%20Coach%20-%20Level%202%20-%20Improve%20Your%20French%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "My Friends (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Frogger - Toy Trials (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Frogger%20-%20Toy%20Trials%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Happy Kitchen (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Happy%20Kitchen%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Health Coach - Manage Your Weight (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Health%20Coach%20-%20Manage%20Your%20Weight%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "My Health Coach - Manage Your Weight (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Health%20Coach%20-%20Manage%20Your%20Weight%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "My Health Coach - Stop Smoking with Allen Carr (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Health%20Coach%20-%20Stop%20Smoking%20with%20Allen%20Carr%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "My Horse & Me (Europe) (En,Fr,De,Es,It,Nl,Sv,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Horse%20%26%20Me%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CDa%29.zip",
    link2: ""
  },
  {
    name: "My Horse & Me (Europe) (En,Fr,De,Es,It,Nl,Sv,Da) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "93.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Horse%20%26%20Me%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CDa%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "My Horse & Me 2 (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "104.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Horse%20%26%20Me%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "My Horse Club (Europe) (En,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Horse%20Club%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "My Japanese Coach - Learn to Speak Japanese (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Japanese%20Coach%20-%20Learn%20to%20Speak%20Japanese%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "My Little Baby (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Little%20Baby%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "My Little Baby (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Little%20Baby%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "My Little Baby (Europe) (En,Fr,De,Es,It,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Little%20Baby%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "My Little Flufties (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "86.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Little%20Flufties%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Make-Up (Europe) (En,Fr,De,Es,It,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Make-Up%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "My Own Pet Shelter (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Own%20Pet%20Shelter%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "My Paris Fashion House (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Paris%20Fashion%20House%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "My Pet Beauty Salon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Beauty%20Salon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Pet Dolphin (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Dolphin%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Pet Dolphin (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Dolphin%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "My Pet Dolphin 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Dolphin%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Pet Hotel 2 (Europe) (En,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Hotel%202%20%28Europe%29%20%28En%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Pet Hotel 2 (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Hotel%202%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "My Pet Hotel 2 (Europe) (Fr,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Hotel%202%20%28Europe%29%20%28Fr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "My Pet Kitten (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Kitten%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Pet Parrot (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Parrot%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Pet Pony (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Pony%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Pet Puppy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Puppy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Pet School (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20School%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Pet Shop (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "53.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Shop%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Pet Zoo Vet (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Pet%20Zoo%20Vet%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Puppy Shop (Europe) (En,Fr,De,Es,It,Nl,Sv,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Puppy%20Shop%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CDa%29.zip",
    link2: ""
  },
  {
    name: "My Secret Diary (Europe) (En,Fr,De,Es,It,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Secret%20Diary%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "My Secret World by Imagine (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Secret%20World%20by%20Imagine%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "My Spanish Coach - Level 1 (Europe) (En,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Spanish%20Coach%20-%20Level%201%20%28Europe%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "My Spanish Coach - Level 2 - Improve Your Spanish (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Spanish%20Coach%20-%20Level%202%20-%20Improve%20Your%20Spanish%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "My Vet Practice - In Australia (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Vet%20Practice%20-%20In%20Australia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "My Vet Practice - In the Country (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "69.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Vet%20Practice%20-%20In%20the%20Country%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "My Word Coach - Develop Your Vocabulary (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "60.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/My%20Word%20Coach%20-%20Develop%20Your%20Vocabulary%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "MySims (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MySims%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "MySims - Agents (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MySims%20-%20Agents%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "MySims - Kingdom (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,Pl,Cs,Hu)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MySims%20-%20Kingdom%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CPl%2CCs%2CHu%29.zip",
    link2: ""
  },
  {
    name: "MySims - Kingdom (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,Pl,Cs,Hu) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MySims%20-%20Kingdom%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CPl%2CCs%2CHu%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "MySims - Party (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MySims%20-%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "MySims - Racing (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MySims%20-%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "MySims - SkyHeroes (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/MySims%20-%20SkyHeroes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Myst (Europe) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Myst%20%28Europe%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Myst (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Myst%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Mysterious Adventures in the Caribbean (Europe) (En,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mysterious%20Adventures%20in%20the%20Caribbean%20%28Europe%29%20%28En%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mysterious Adventures in the Caribbean (Europe) (En,Fr,De,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "56.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mysterious%20Adventures%20in%20the%20Caribbean%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mysterious Case of Dr. Jekyll & Mr. Hyde, The (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "56.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mysterious%20Case%20of%20Dr.%20Jekyll%20%26%20Mr.%20Hyde%2C%20The%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mysterious Case of Dr. Jekyll & Mr. Hyde, The (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mysterious%20Case%20of%20Dr.%20Jekyll%20%26%20Mr.%20Hyde%2C%20The%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Mysterious Case of Dr. Jekyll & Mr. Hyde, The (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mysterious%20Case%20of%20Dr.%20Jekyll%20%26%20Mr.%20Hyde%2C%20The%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mystery Case Files - MillionHeir (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Case%20Files%20-%20MillionHeir%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mystery Case Files - Prime Suspects (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Case%20Files%20-%20Prime%20Suspects%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mystery Case Files - Ravenhearst (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Case%20Files%20-%20Ravenhearst%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mystery Detective (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Detective%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mystery Dungeon - Shiren the Wanderer (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Dungeon%20-%20Shiren%20the%20Wanderer%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mystery Mansion (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Mansion%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Mystery Stories (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Stories%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mystery Stories (Europe) (En,Fr,De,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Stories%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mystery Stories - Curse of the Ancient Spirits (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Stories%20-%20Curse%20of%20the%20Ancient%20Spirits%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Mystery Stories - Mountains of Madness (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Stories%20-%20Mountains%20of%20Madness%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mystery Tales - Time Travel (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Tales%20-%20Time%20Travel%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Mystery Tales - Time Travel (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Tales%20-%20Time%20Travel%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Mystery Tales 2 - The Spirit Mask (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Mystery%20Tales%202%20-%20The%20Spirit%20Mask%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Nacho Libre (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nacho%20Libre%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Nadia - Megafun Land (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nadia%20-%20Megafun%20Land%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Nadia's World (Europe) (En,Fr,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nadia%27s%20World%20%28Europe%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Naked Brothers Band, The - The Video Game (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Naked%20Brothers%20Band%2C%20The%20-%20The%20Video%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Namco Museum DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Namco%20Museum%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nancy Drew - The Deadly Secret of Olde World Park (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nancy%20Drew%20-%20The%20Deadly%20Secret%20of%20Olde%20World%20Park%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nancy Drew - The Model Mysteries (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nancy%20Drew%20-%20The%20Model%20Mysteries%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nancy Drew - The Mystery of the Clue Bender Society (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "106.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nancy%20Drew%20-%20The%20Mystery%20of%20the%20Clue%20Bender%20Society%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Nandas Island (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "52.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nandas%20Island%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nanostray (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nanostray%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Nanostray 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nanostray%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Naraba's World - Labyrinth of Light (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Naraba%27s%20World%20-%20Labyrinth%20of%20Light%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Naraba's World - The Mysterious Palace (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "62.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Naraba%27s%20World%20-%20The%20Mysterious%20Palace%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Naruto - Ninja Council - European Version (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "89.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Naruto%20-%20Ninja%20Council%20-%20European%20Version%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Naruto - Ninja Council 2 - European Version (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Naruto%20-%20Ninja%20Council%202%20-%20European%20Version%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Naruto - Ninja Destiny - European Version (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Naruto%20-%20Ninja%20Destiny%20-%20European%20Version%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Naruto - Ninja Destiny II - European Version (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Naruto%20-%20Ninja%20Destiny%20II%20-%20European%20Version%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Naruto Shippuden - Naruto vs Sasuke (Europe) (Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Naruto%20Shippuden%20-%20Naruto%20vs%20Sasuke%20%28Europe%29%20%28Fr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Naruto Shippuden - Ninja Council 3 - European Version (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Naruto%20Shippuden%20-%20Ninja%20Council%203%20-%20European%20Version%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Natalie Brooks - Mystery at Hillcrest High (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Natalie%20Brooks%20-%20Mystery%20at%20Hillcrest%20High%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Natalie Brooks - The Treasures of the Lost Kingdom (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Natalie%20Brooks%20-%20The%20Treasures%20of%20the%20Lost%20Kingdom%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Most Wanted (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Need%20for%20Speed%20-%20Most%20Wanted%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Nitro (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Need%20for%20Speed%20-%20Nitro%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - ProStreet (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Need%20for%20Speed%20-%20ProStreet%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - ProStreet (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Need%20for%20Speed%20-%20ProStreet%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Undercover (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Need%20for%20Speed%20-%20Undercover%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed - Underground 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Need%20for%20Speed%20-%20Underground%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Need for Speed Carbon - Own the City (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "61.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Need%20for%20Speed%20Carbon%20-%20Own%20the%20City%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Neighbours from Hell (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Neighbours%20from%20Hell%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Neopets Puzzle Adventure (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Neopets%20Puzzle%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Nervous Brickdown (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nervous%20Brickdown%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Neves (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Neves%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "New Carnival - Funfair Games (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/New%20Carnival%20-%20Funfair%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "New International Track & Field (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/New%20International%20Track%20%26%20Field%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "New Super Mario Bros. (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/New%20Super%20Mario%20Bros.%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "New Super Mario Bros. (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/New%20Super%20Mario%20Bros.%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "New Super Mario Bros. (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk, Y78P)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/New%20Super%20Mario%20Bros.%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%2C%20Y78P%29.zip",
    link2: ""
  },
  {
    name: "New Touch Party Game (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/New%20Touch%20Party%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "New York Times Crosswords, The (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/New%20York%20Times%20Crosswords%2C%20The%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "New Zealand Story Revolution (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/New%20Zealand%20Story%20Revolution%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ni Hao, Kai-Lan - New Year's Celebration (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ni%20Hao%2C%20Kai-Lan%20-%20New%20Year%27s%20Celebration%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Dora and Friends' - Fantastic Flight (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nickelodeon%20Dora%20and%20Friends%27%20-%20Fantastic%20Flight%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Nickelodeon Team - Umizoomi (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nickelodeon%20Team%20-%20Umizoomi%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nicktoons - Attack of the Toybots (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nicktoons%20-%20Attack%20of%20the%20Toybots%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Nicktoons - Attack of the Toybots (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nicktoons%20-%20Attack%20of%20the%20Toybots%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Night at the Museum 2 - The Video Game (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Night%20at%20the%20Museum%202%20-%20The%20Video%20Game%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Ninja Captains (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ninja%20Captains%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ninja Gaiden - Dragon Sword (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ninja%20Gaiden%20-%20Dragon%20Sword%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ninja Reflex (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ninja%20Reflex%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ninjatown (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ninjatown%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nintendo DS Browser (USA, Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendo%20DS%20Browser%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nintendo Presents - Crossword Collection (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendo%20Presents%20-%20Crossword%20Collection%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Nintendo Presents - Style Boutique (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendo%20Presents%20-%20Style%20Boutique%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Nintendo Presents - Style Boutique (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendo%20Presents%20-%20Style%20Boutique%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Nintendo Touch Golf - Birdie Challenge (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendo%20Touch%20Golf%20-%20Birdie%20Challenge%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nintendo Zone Wireless Distribution Box DS Card (USA, Europe) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendo%20Zone%20Wireless%20Distribution%20Box%20DS%20Card%20%28USA%2C%20Europe%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Nintendogs (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendogs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Nintendogs (USA, Europe) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendogs%20%28USA%2C%20Europe%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Nintendogs - Chihuahua & Friends (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendogs%20-%20Chihuahua%20%26%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nintendogs - Dachshund & Friends (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendogs%20-%20Dachshund%20%26%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nintendogs - Dalmatian & Friends (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendogs%20-%20Dalmatian%20%26%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Nintendogs - Download-Relay Version (Europe) (Demo) (Wi-Fi Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendogs%20-%20Download-Relay%20Version%20%28Europe%29%20%28Demo%29%20%28Wi-Fi%20Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Nintendogs - Jack Russell Relay Mode (Europe) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendogs%20-%20Jack%20Russell%20Relay%20Mode%20%28Europe%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Nintendogs - Labrador & Friends (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Nintendogs%20-%20Labrador%20%26%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Noddy in Toyland (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Noddy%20in%20Toyland%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Noddy in Toyland (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Noddy%20in%20Toyland%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "OK! - First for Celebrity News - Puzzle Stars (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/OK%21%20-%20First%20for%20Celebrity%20News%20-%20Puzzle%20Stars%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Okamiden (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Okamiden%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Oktoberfest - The Official Game (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Oktoberfest%20-%20The%20Official%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Oli Octopus (Europe) (Proto)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Oli%20Octopus%20%28Europe%29%20%28Proto%29.zip",
    link2: ""
  },
  {
    name: "One Piece - Gigant Battle! (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/One%20Piece%20-%20Gigant%20Battle%21%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Open Season (Europe) (En,Fr,De,Es,It,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Open%20Season%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Open Season (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Open%20Season%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Operation - Vietnam (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Operation%20-%20Vietnam%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Orcs & Elves (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Orcs%20%26%20Elves%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Original Frisbee Disc Sports - Ultimate & Golf (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Original%20Frisbee%20Disc%20Sports%20-%20Ultimate%20%26%20Golf%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Original Frisbee Disc Sports - Ultimate & Golf (Europe) (En,Fr,De,Es,It) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Original%20Frisbee%20Disc%20Sports%20-%20Ultimate%20%26%20Golf%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Original Rummikub, The - Brings People Together (Europe) (En,Fr,De,Es,It,Nl) (DTP Entertainment AG)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Original%20Rummikub%2C%20The%20-%20Brings%20People%20Together%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28DTP%20Entertainment%20AG%29.zip",
    link2: ""
  },
  {
    name: "Original Rummikub, The - Brings People Together (Europe) (En,Fr,De,Es,It,Nl) (Games Factory Online)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Original%20Rummikub%2C%20The%20-%20Brings%20People%20Together%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Games%20Factory%20Online%29.zip",
    link2: ""
  },
  {
    name: "Oscar der Ballonfahrer - Tierische Abenteuer (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Oscar%20der%20Ballonfahrer%20-%20Tierische%20Abenteuer%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Over the Hedge (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Over%20the%20Hedge%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Over the Hedge - Hammy Goes Nuts! (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Over%20the%20Hedge%20-%20Hammy%20Goes%20Nuts%21%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Over the Hedge - Hammy Goes Nuts! (Europe) (Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Over%20the%20Hedge%20-%20Hammy%20Goes%20Nuts%21%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Overlord Minions (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Overlord%20Minions%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Overlord Minions (Europe) (En,Fr,De,Es,It) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Overlord%20Minions%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Pac'n Roll (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pac%27n%20Roll%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pac-Man World 3 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pac-Man%20World%203%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Pac-Pix (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pac-Pix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pac-Pix (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pac-Pix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Paint by DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Paint%20by%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Paint by DS - Classic Masterpieces (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Paint%20by%20DS%20-%20Classic%20Masterpieces%20%28Europe%29%20%28En%2CFr%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Paint by DS - Military Vehicles (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Paint%20by%20DS%20-%20Military%20Vehicles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Panzer Tactics DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Panzer%20Tactics%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Party Carnival (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Party%20Carnival%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Pass the Pigs - Let the Good Swines Roll! (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pass%20the%20Pigs%20-%20Let%20the%20Good%20Swines%20Roll%21%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Pass Your Driving Theory Test - 2010 Edition (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pass%20Your%20Driving%20Theory%20Test%20-%202010%20Edition%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Pawly Pets - My Pet Hotel (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "95.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pawly%20Pets%20-%20My%20Pet%20Hotel%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Pawly Pets - My Vet Practice (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pawly%20Pets%20-%20My%20Vet%20Practice%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Pawly Pets - My Vet Practice (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pawly%20Pets%20-%20My%20Vet%20Practice%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pawly Pets - My Vet Practice (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pawly%20Pets%20-%20My%20Vet%20Practice%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "PDC World Championship Darts - The Official Video Game (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/PDC%20World%20Championship%20Darts%20-%20The%20Official%20Video%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Penguins of Madagascar, The (Europe) (De,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Penguins%20of%20Madagascar%2C%20The%20%28Europe%29%20%28De%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Penguins of Madagascar, The (Europe) (En,Fr) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Penguins%20of%20Madagascar%2C%20The%20%28Europe%29%20%28En%2CFr%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Penguins of Madagascar, The (Europe) (Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Penguins%20of%20Madagascar%2C%20The%20%28Europe%29%20%28Es%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Penguins of Madagascar, The - Dr. Blowhole Returns Again! (Europe) (De,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Penguins%20of%20Madagascar%2C%20The%20-%20Dr.%20Blowhole%20Returns%20Again%21%20%28Europe%29%20%28De%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Penguins of Madagascar, The - Dr. Blowhole Returns Again! (Europe) (En,Fr) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Penguins%20of%20Madagascar%2C%20The%20-%20Dr.%20Blowhole%20Returns%20Again%21%20%28Europe%29%20%28En%2CFr%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Penguins of Madagascar, The - Dr. Blowhole Returns Again! (Europe) (Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Penguins%20of%20Madagascar%2C%20The%20-%20Dr.%20Blowhole%20Returns%20Again%21%20%28Europe%29%20%28Es%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Peppa Pig - Fun and Games (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Peppa%20Pig%20-%20Fun%20and%20Games%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Peppa Pig - The Game (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Peppa%20Pig%20-%20The%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Peppa Pig - Theme Park Fun (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Peppa%20Pig%20-%20Theme%20Park%20Fun%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Percy Jackson & the Lightning Thief (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Percy%20Jackson%20%26%20the%20Lightning%20Thief%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Personal Trainer DS for Men (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Personal%20Trainer%20DS%20for%20Men%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Personal Trainer DS for Women (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Personal%20Trainer%20DS%20for%20Women%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Personal Yoga Training - Learn in 15 Minutes a Day (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Personal%20Yoga%20Training%20-%20Learn%20in%2015%20Minutes%20a%20Day%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pet Alien (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pet%20Alien%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Peter Jackson's King Kong - The Official Game of the Movie (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Peter%20Jackson%27s%20King%20Kong%20-%20The%20Official%20Game%20of%20the%20Movie%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Peter Pan's Playground (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Peter%20Pan%27s%20Playground%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Petz - Dog Superstar (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20Dog%20Superstar%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Petz - Fantasy (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20Fantasy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Petz - Fashion Stars (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20Fashion%20Stars%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Petz - Hamster Superstar (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20Hamster%20Superstar%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Petz - My Baby Panda (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20My%20Baby%20Panda%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Petz - My Horse Family (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20My%20Horse%20Family%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Petz - My Kitten Family (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20My%20Kitten%20Family%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Petz - My Monkey Family (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20My%20Monkey%20Family%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Petz - My Puppy Family (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20My%20Puppy%20Family%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Petz - My Puppy Family (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20My%20Puppy%20Family%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Petz - Nursery (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20Nursery%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Petz - Playschool (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20Playschool%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Petz - Pony Club (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Petz%20-%20Pony%20Club%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pferd & Pony - Die Reitakademie (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pferd%20%26%20Pony%20-%20Die%20Reitakademie%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Pferd & Pony - Die Reitakademie - Das Entscheidende Turnier (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pferd%20%26%20Pony%20-%20Die%20Reitakademie%20-%20Das%20Entscheidende%20Turnier%20%28Europe%29%20%28En%2CDe%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Pferd & Pony - Mein Gestuet (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pferd%20%26%20Pony%20-%20Mein%20Gestuet%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Pferd & Pony - Mein Gestuet - Ein Leben fuer die Pferde (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pferd%20%26%20Pony%20-%20Mein%20Gestuet%20-%20Ein%20Leben%20fuer%20die%20Pferde%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pferdefreunde Puzzle - Echter Puzzlespass fuer Unterwegs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pferdefreunde%20Puzzle%20-%20Echter%20Puzzlespass%20fuer%20Unterwegs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Phantasy Star 0 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phantasy%20Star%200%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Phil Taylor's Power Play Darts (Europe) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phil%20Taylor%27s%20Power%20Play%20Darts%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Phineas and Ferb (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phineas%20and%20Ferb%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Phineas and Ferb - 2 Disney Games (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phineas%20and%20Ferb%20-%202%20Disney%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Phineas and Ferb - Across the 2nd Dimension (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phineas%20and%20Ferb%20-%20Across%20the%202nd%20Dimension%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Phineas and Ferb - Across the 2nd Dimension (Europe) (En,Sv,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phineas%20and%20Ferb%20-%20Across%20the%202nd%20Dimension%20%28Europe%29%20%28En%2CSv%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Phineas and Ferb - Quest for Cool Stuff (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phineas%20and%20Ferb%20-%20Quest%20for%20Cool%20Stuff%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Phineas and Ferb - Ride Again (Europe) (En,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phineas%20and%20Ferb%20-%20Ride%20Again%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Phoenix Wright - Ace Attorney (Europe) (De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phoenix%20Wright%20-%20Ace%20Attorney%20%28Europe%29%20%28De%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Phoenix Wright - Ace Attorney (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phoenix%20Wright%20-%20Ace%20Attorney%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Phoenix Wright - Ace Attorney - Justice for All (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phoenix%20Wright%20-%20Ace%20Attorney%20-%20Justice%20for%20All%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Phoenix Wright - Ace Attorney - Justice for All (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "105.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phoenix%20Wright%20-%20Ace%20Attorney%20-%20Justice%20for%20All%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Phoenix Wright - Ace Attorney - Trials and Tribulations (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "146.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phoenix%20Wright%20-%20Ace%20Attorney%20-%20Trials%20and%20Tribulations%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Phoenix Wright - Ace Attorney - Trials and Tribulations (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phoenix%20Wright%20-%20Ace%20Attorney%20-%20Trials%20and%20Tribulations%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Phoenix Wright - Ace Attorney - Trials and Tribulations (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "57.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Phoenix%20Wright%20-%20Ace%20Attorney%20-%20Trials%20and%20Tribulations%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Pic Pic (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pic%20Pic%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Picross 3D (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Picross%203D%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Picross 3D (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "57.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Picross%203D%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Picross DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "105.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Picross%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pictionary (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "146.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pictionary%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "PictoImage - Sketch and Guess on Your DS! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "71.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/PictoImage%20-%20Sketch%20and%20Guess%20on%20Your%20DS%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Picture Puzzle Collection (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Picture%20Puzzle%20Collection%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Pimp My Ride - Street Racing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pimp%20My%20Ride%20-%20Street%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pinball Deluxe (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pinball%20Deluxe%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pipe Mania (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pipe%20Mania%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Pippa Funnell (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pippa%20Funnell%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Pippa Funnell (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pippa%20Funnell%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Pippa Funnell 2 - Farm Adventures (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "62.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pippa%20Funnell%202%20-%20Farm%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Pippi Longstocking (Europe) (En,Fr,De,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pippi%20Longstocking%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Pirates - Boarding! (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pirates%20-%20Boarding%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Pirates - Boarding! (Europe) (En,It,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pirates%20-%20Boarding%21%20%28Europe%29%20%28En%2CIt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Pirates - Duels on the High Seas (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pirates%20-%20Duels%20on%20the%20High%20Seas%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pirates of the Caribbean - At World's End (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "95.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pirates%20of%20the%20Caribbean%20-%20At%20World%27s%20End%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Pirates of the Caribbean - Dead Man's Chest (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pirates%20of%20the%20Caribbean%20-%20Dead%20Man%27s%20Chest%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Planet 51 - The Game (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Planet%2051%20-%20The%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Planet Rescue - Animal Emergency (Europe) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Planet%20Rescue%20-%20Animal%20Emergency%20%28Europe%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Planet Rescue - Animal Emergency (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Planet%20Rescue%20-%20Animal%20Emergency%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Planet Rescue - Endangered Island (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Planet%20Rescue%20-%20Endangered%20Island%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Planet Rescue - Ocean Patrol (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Planet%20Rescue%20-%20Ocean%20Patrol%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Plants vs. Zombies (Europe) (En,Fr,De,Es,It,Nl) (MSL)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Plants%20vs.%20Zombies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28MSL%29.zip",
    link2: ""
  },
  {
    name: "Plants vs. Zombies (Europe) (En,Fr,De,Es,It,Nl) (Rondomedia)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Plants%20vs.%20Zombies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rondomedia%29.zip",
    link2: ""
  },
  {
    name: "Platinum Sudoku (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Platinum%20Sudoku%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Play Gardens (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Play%20Gardens%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Playmobil Interactive - Knight - Hero of the Kingdom (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Playmobil%20Interactive%20-%20Knight%20-%20Hero%20of%20the%20Kingdom%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Playmobil Interactive - Knight - Hero of the Kingdom (Europe) (En,It,Sv,No,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Playmobil%20Interactive%20-%20Knight%20-%20Hero%20of%20the%20Kingdom%20%28Europe%29%20%28En%2CIt%2CSv%2CNo%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Playmobil Interactive - Top Agents (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Playmobil%20Interactive%20-%20Top%20Agents%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pocket Book - My Personal Diary (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pocket%20Book%20-%20My%20Personal%20Diary%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Pocoyo Racing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pocoyo%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pogo Island (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pogo%20Island%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Point Blank DS (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Point%20Blank%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Black Version (USA, Europe) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Black%20Version%20%28USA%2C%20Europe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Black Version 2 (USA, Europe) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "100.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Black%20Version%202%20%28USA%2C%20Europe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Diamond Version (Europe) (Rev 5)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Diamond%20Version%20%28Europe%29%20%28Rev%205%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Edicion Blanca (Spain) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Edicion%20Blanca%20%28Spain%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Edicion Blanca 2 (Spain) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Edicion%20Blanca%202%20%28Spain%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Edicion Diamante (Spain) (Rev 5)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Edicion%20Diamante%20%28Spain%29%20%28Rev%205%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Edicion Negra (Spain) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Edicion%20Negra%20%28Spain%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Edicion Negra 2 (Spain) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Edicion%20Negra%202%20%28Spain%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Edicion Oro HeartGold (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "51.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Edicion%20Oro%20HeartGold%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Edicion Perla (Spain) (Rev 5)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Edicion%20Perla%20%28Spain%29%20%28Rev%205%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Edicion Plata SoulSilver (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Edicion%20Plata%20SoulSilver%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Edicion Platino (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Edicion%20Platino%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - HeartGold Version (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20HeartGold%20Version%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Pearl Version (Europe) (Rev 5)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Pearl%20Version%20%28Europe%29%20%28Rev%205%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - Platinum Version (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20Platinum%20Version%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - SoulSilver Version (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20SoulSilver%20Version%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - White Version (USA, Europe) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20White%20Version%20%28USA%2C%20Europe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Pokemon - White Version 2 (USA, Europe) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20-%20White%20Version%202%20%28USA%2C%20Europe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Conquest (Europe) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Conquest%20%28Europe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Dash (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Dash%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Link! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Link%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Mystery Dungeon - Blue Rescue Team (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Mystery%20Dungeon%20-%20Blue%20Rescue%20Team%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Mystery Dungeon - Blue Rescue Team (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Mystery%20Dungeon%20-%20Blue%20Rescue%20Team%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Mystery Dungeon - Explorers of Darkness (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Mystery%20Dungeon%20-%20Explorers%20of%20Darkness%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Mystery Dungeon - Explorers of Sky (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Mystery%20Dungeon%20-%20Explorers%20of%20Sky%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Mystery Dungeon - Explorers of Sky (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Mystery%20Dungeon%20-%20Explorers%20of%20Sky%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Mystery Dungeon - Explorers of Time (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "60.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Mystery%20Dungeon%20-%20Explorers%20of%20Time%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Mystery Dungeon - Explorers of Time + Pokemon Mystery Dungeon - Explorers of Darkness (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "93.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Mystery%20Dungeon%20-%20Explorers%20of%20Time%20%2B%20Pokemon%20Mystery%20Dungeon%20-%20Explorers%20of%20Darkness%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Ranger (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Ranger%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Ranger (Europe) (En,Fr,De,Es,It,Nl) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "62.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Ranger%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Ranger - Guardian Signs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "204.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Ranger%20-%20Guardian%20Signs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Ranger - Shadows of Almia (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "86.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Ranger%20-%20Shadows%20of%20Almia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pokemon Ranger - Shadows of Almia (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "196.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pokemon%20Ranger%20-%20Shadows%20of%20Almia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Poker Training (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Poker%20Training%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Polar Rampage (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Polar%20Rampage%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Polarium (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Polarium%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "PONS Englisch - Vokabel Buddy (Europe) (Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/PONS%20Englisch%20-%20Vokabel%20Buddy%20%28Europe%29%20%28Fr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pony Friends (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pony%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Pony Friends (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pony%20Friends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Pony Friends 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pony%20Friends%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pony Life (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pony%20Life%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Pony Luv (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pony%20Luv%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Pop Town (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pop%20Town%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Poptropica Adventures (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Poptropica%20Adventures%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Populous DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Populous%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Postman Pat (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Postman%20Pat%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Postman Pat - Special Delivery Service (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Postman%20Pat%20-%20Special%20Delivery%20Service%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Power Play Pool (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Power%20Play%20Pool%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Power Rangers - Samurai (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Power%20Rangers%20-%20Samurai%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Power Rangers - Super Legends (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Power%20Rangers%20-%20Super%20Legends%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Powershot Pinball Constructor (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Powershot%20Pinball%20Constructor%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Practise English! (Europe) (Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Practise%20English%21%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Prey the Stars - Gabu Gabu Planet (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Prey%20the%20Stars%20-%20Gabu%20Gabu%20Planet%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia - The Fallen King (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Prince%20of%20Persia%20-%20The%20Fallen%20King%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Prince of Persia - The Forgotten Sands (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Prince%20of%20Persia%20-%20The%20Forgotten%20Sands%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Princess and the Frog, The (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20and%20the%20Frog%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Princess and the Frog, The (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20and%20the%20Frog%2C%20The%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Princess Debut - The Royal Ball (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20Debut%20-%20The%20Royal%20Ball%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Princess in Love (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20in%20Love%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Princess Isabella - Witch's Curse (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20Isabella%20-%20Witch%27s%20Curse%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Princess Isabella - Witch's Curse (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20Isabella%20-%20Witch%27s%20Curse%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Princess Lillifee - My Wonderful World (Europe) (Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20Lillifee%20-%20My%20Wonderful%20World%20%28Europe%29%20%28Fr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Princess Melody (Europe) (En,Fr,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20Melody%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Princess Natasha - Student, Secret Agent, Princess (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20Natasha%20-%20Student%2C%20Secret%20Agent%2C%20Princess%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Princess on Ice (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20on%20Ice%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Princess on Ice (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Princess%20on%20Ice%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Prinses Lillifee (Europe) (Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Prinses%20Lillifee%20%28Europe%29%20%28Fr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Prinzessin Lillifee - Meine Liebsten Freunde (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Prinzessin%20Lillifee%20-%20Meine%20Liebsten%20Freunde%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Prinzessin Lillifee Puzzle - Echter Puzzlespass fuer Unterwegs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Prinzessin%20Lillifee%20Puzzle%20-%20Echter%20Puzzlespass%20fuer%20Unterwegs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Prism - Light the Way (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Prism%20-%20Light%20the%20Way%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pro Evolution Soccer 2008 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pro%20Evolution%20Soccer%202008%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Pro Evolution Soccer 6 (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pro%20Evolution%20Soccer%206%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Profesor Layton y el Futuro Perdido, El (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Profesor%20Layton%20y%20el%20Futuro%20Perdido%2C%20El%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Profesor Layton y la Caja de Pandora, El (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Profesor%20Layton%20y%20la%20Caja%20de%20Pandora%2C%20El%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Profesor Layton y la Llamada del Espectro, El (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Profesor%20Layton%20y%20la%20Llamada%20del%20Espectro%2C%20El%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Professor Brainmaniac (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Brainmaniac%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Professor Heinz Wolff's Gravity (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Heinz%20Wolff%27s%20Gravity%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Professor Kageyama's Maths Training - The Hundred Cell Calculation Method (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Kageyama%27s%20Maths%20Training%20-%20The%20Hundred%20Cell%20Calculation%20Method%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Professor Kageyama's Maths Training - The Hundred Cell Calculation Method (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Kageyama%27s%20Maths%20Training%20-%20The%20Hundred%20Cell%20Calculation%20Method%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Professor Layton and Pandora's Box (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Layton%20and%20Pandora%27s%20Box%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Professor Layton and Pandora's Box (Europe) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Layton%20and%20Pandora%27s%20Box%20%28Europe%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Professor Layton and the Curious Village (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "88.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Layton%20and%20the%20Curious%20Village%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Professor Layton and the Curious Village (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Layton%20and%20the%20Curious%20Village%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Professor Layton and the Lost Future (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Layton%20and%20the%20Lost%20Future%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Professor Layton and the Spectre's Call (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Layton%20and%20the%20Spectre%27s%20Call%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Professor Layton and the Spectre's Call (Europe) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%20Layton%20and%20the%20Spectre%27s%20Call%20%28Europe%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Professor's Brain Trainer, The - Logic (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%27s%20Brain%20Trainer%2C%20The%20-%20Logic%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Professor's Brain Trainer, The - Memory (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Professor%27s%20Brain%20Trainer%2C%20The%20-%20Memory%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Project Rub (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Project%20Rub%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Project Rub (Europe) (En,Ja,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Project%20Rub%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Pucca - Power Up (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Pucca%20-%20Power%20Up%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Puppy Luv - Spa and Resort (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puppy%20Luv%20-%20Spa%20and%20Resort%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Puppy Luv - Spa and Resort (Europe) (Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puppy%20Luv%20-%20Spa%20and%20Resort%20%28Europe%29%20%28Fr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Purr Pals (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Purr%20Pals%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Purr Pals (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Purr%20Pals%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Puss in Boots (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puss%20in%20Boots%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Puyo Pop Fever (Europe) (En,Ja)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puyo%20Pop%20Fever%20%28Europe%29%20%28En%2CJa%29.zip",
    link2: ""
  },
  {
    name: "Puzzle Bobble Galaxy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzle%20Bobble%20Galaxy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Puzzle Chronicles (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "104.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzle%20Chronicles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Puzzle Kingdoms (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzle%20Kingdoms%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Puzzle League DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzle%20League%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Puzzle League DS (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzle%20League%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Puzzle Quest - Challenge of the Warlords (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "71.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzle%20Quest%20-%20Challenge%20of%20the%20Warlords%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Puzzle Quest - Challenge of the Warlords (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzle%20Quest%20-%20Challenge%20of%20the%20Warlords%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Puzzle Quest - Galactrix (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "136.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzle%20Quest%20-%20Galactrix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Puzzle Quest 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzle%20Quest%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Puzzler Brain Games (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "136.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzler%20Brain%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Puzzler Collection (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzler%20Collection%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Puzzler Collection (Europe) (Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzler%20Collection%20%28Europe%29%20%28Fr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Puzzler World (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzler%20World%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Puzzler World (Europe) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzler%20World%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Puzzler World 2011 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzler%20World%202011%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Puzzler World 2012 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzler%20World%202012%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Puzzler World 2013 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Puzzler%20World%202013%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Quest Trio, The (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Quest%20Trio%2C%20The%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Quest Trio, The - Jewels, Cards and Tiles (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Quest%20Trio%2C%20The%20-%20Jewels%2C%20Cards%20and%20Tiles%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Quest Trio, The - Jewels, Cards and Tiles (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "203.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Quest%20Trio%2C%20The%20-%20Jewels%2C%20Cards%20and%20Tiles%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Raa Raa the Noisy Lion (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Raa%20Raa%20the%20Noisy%20Lion%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Rabbids Go Home (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rabbids%20Go%20Home%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Race Driver - Create & Race (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Race%20Driver%20-%20Create%20%26%20Race%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Race Driver - Grid (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "95.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Race%20Driver%20-%20Grid%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rafa Nadal Tennis (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rafa%20Nadal%20Tennis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rainbow Islands Revolution (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rainbow%20Islands%20Revolution%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Ram Racing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ram%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rango (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "114.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rango%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ratatouille (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "94.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ratatouille%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Ratatouille (Europe) (Es,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "94.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ratatouille%20%28Europe%29%20%28Es%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Ratatouille (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "69.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ratatouille%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Ratatouille (Europe) (It,El)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "76.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ratatouille%20%28Europe%29%20%28It%2CEl%29.zip",
    link2: ""
  },
  {
    name: "Ratatouille - Food Frenzy (Europe) (En,Fr,De,Es,It,El)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "76.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ratatouille%20-%20Food%20Frenzy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CEl%29.zip",
    link2: ""
  },
  {
    name: "Rayman - Raving Rabbids (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rayman%20-%20Raving%20Rabbids%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Rayman - Raving Rabbids - TV Party (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rayman%20-%20Raving%20Rabbids%20-%20TV%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Rayman - Raving Rabbids 2 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rayman%20-%20Raving%20Rabbids%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Rayman DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rayman%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Reader Rabbit - Math 4-8 yrs (Europe) (Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Reader%20Rabbit%20-%20Math%204-8%20yrs%20%28Europe%29%20%28Sv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Real Adventures - Pet Vet (Europe) (De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Adventures%20-%20Pet%20Vet%20%28Europe%29%20%28De%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Real Adventures - Pet Vet (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Adventures%20-%20Pet%20Vet%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Real Adventures - Pet Vet (Europe) (En,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Adventures%20-%20Pet%20Vet%20%28Europe%29%20%28En%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Real Adventures - Wild Horses - The Quest for the Golden Horse (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Adventures%20-%20Wild%20Horses%20-%20The%20Quest%20for%20the%20Golden%20Horse%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Real Adventures - Wild Horses - The Quest for the Golden Horse (Europe) (En,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Adventures%20-%20Wild%20Horses%20-%20The%20Quest%20for%20the%20Golden%20Horse%20%28Europe%29%20%28En%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Real Crimes - Jack the Ripper (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Crimes%20-%20Jack%20the%20Ripper%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Real Crimes - Jack the Ripper (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Crimes%20-%20Jack%20the%20Ripper%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Real Crimes - Jack the Ripper (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Crimes%20-%20Jack%20the%20Ripper%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Real Crimes - The Unicorn Killer (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Crimes%20-%20The%20Unicorn%20Killer%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Real Football 2008 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Football%202008%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Real Football 2009 (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "119.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Football%202009%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Real Stories - Best Friends - Mon Poulain, Mon Cheval (Europe) (En,Fr,De,It,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Stories%20-%20Best%20Friends%20-%20Mon%20Poulain%2C%20Mon%20Cheval%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Real Stories - Fashion Shop (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Stories%20-%20Fashion%20Shop%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Real Stories - Mijn Babycreche (Europe) (En,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "60.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Stories%20-%20Mijn%20Babycreche%20%28Europe%29%20%28En%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Real Stories - Passion 4 Fashion (Europe) (En,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Real%20Stories%20-%20Passion%204%20Fashion%20%28Europe%29%20%28En%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Red Bull BC One (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Red%20Bull%20BC%20One%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Resident Evil - Deadly Silence (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Resident%20Evil%20-%20Deadly%20Silence%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Restaurant Tycoon (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Restaurant%20Tycoon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Retro Arcade Toppers (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Retro%20Arcade%20Toppers%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Retro Atari Classics (USA, Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Retro%20Atari%20Classics%20%28USA%2C%20Europe%29.zip",
    link2: ""
  },
  {
    name: "Rhapsody - A Musical Adventure (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rhapsody%20-%20A%20Musical%20Adventure%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Rhythm 'n Notes (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rhythm%20%27n%20Notes%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rhythm Paradise (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rhythm%20Paradise%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rhythm Paradise (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rhythm%20Paradise%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Rhythm Paradise (Europe) (En,Fr,De) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rhythm%20Paradise%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Ridge Racer DS (USA, Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ridge%20Racer%20DS%20%28USA%2C%20Europe%29.zip",
    link2: ""
  },
  {
    name: "Riding Star 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Riding%20Star%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rijexamen Training - Code de la Route (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rijexamen%20Training%20-%20Code%20de%20la%20Route%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Ringling Bros. and Barnum & Bailey - It's My Circus - Elephant Friend (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ringling%20Bros.%20and%20Barnum%20%26%20Bailey%20-%20It%27s%20My%20Circus%20-%20Elephant%20Friend%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rio (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "68.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rio%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Rise of the Guardians (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rise%20of%20the%20Guardians%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Road to Vegas (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Road%20to%20Vegas%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Roary the Racing Car (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Roary%20the%20Racing%20Car%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Robots (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Robots%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rock Band 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "64.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rock%20Band%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rock Revolution (Europe) (En,Fr,De,Es,It,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rock%20Revolution%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Rollercoaster Park (Europe) (En,Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rollercoaster%20Park%20%28Europe%29%20%28En%2CFr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Rooms - The Main Building (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rooms%20-%20The%20Main%20Building%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rub Rabbits!, The (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rub%20Rabbits%21%2C%20The%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rubik's Puzzle World (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rubik%27s%20Puzzle%20World%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rule of Speed (Europe) (Proto 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rule%20of%20Speed%20%28Europe%29%20%28Proto%201%29.zip",
    link2: ""
  },
  {
    name: "Rule of Speed (Europe) (Proto 2)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rule%20of%20Speed%20%28Europe%29%20%28Proto%202%29.zip",
    link2: ""
  },
  {
    name: "Runaway - A Twist of Fate (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Runaway%20-%20A%20Twist%20of%20Fate%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Runaway - The Dream of the Turtle (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "56.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Runaway%20-%20The%20Dream%20of%20the%20Turtle%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Runaway - The Dream of the Turtle (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Runaway%20-%20The%20Dream%20of%20the%20Turtle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Rune Factory - A Fantasy Harvest Moon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "104.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rune%20Factory%20-%20A%20Fantasy%20Harvest%20Moon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Rune Factory 2 - A Fantasy Harvest Moon (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rune%20Factory%202%20-%20A%20Fantasy%20Harvest%20Moon%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Rune Factory 3 - A Fantasy Harvest Moon (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Rune%20Factory%203%20-%20A%20Fantasy%20Harvest%20Moon%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Russel Grant's Astrology (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Russel%20Grant%27s%20Astrology%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Safari Adventures - Africa (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Safari%20Adventures%20-%20Africa%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Safecracker - The Ultimate Puzzle Adventure (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Safecracker%20-%20The%20Ultimate%20Puzzle%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sam Power - Firefighter (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sam%20Power%20-%20Firefighter%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Sam Power - Footballer (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sam%20Power%20-%20Footballer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Sam Power - Handyman (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sam%20Power%20-%20Handyman%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Sam Power - Policeman (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sam%20Power%20-%20Policeman%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Samantha Swift and the Hidden Roses of Athena (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Samantha%20Swift%20and%20the%20Hidden%20Roses%20of%20Athena%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Samantha Swift and the Hidden Roses of Athena (Europe) (En,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Samantha%20Swift%20and%20the%20Hidden%20Roses%20of%20Athena%20%28Europe%29%20%28En%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Sarah - Die Hueterin des Einhorns (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sarah%20-%20Die%20Hueterin%20des%20Einhorns%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "SBK - Snowboard Kids (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SBK%20-%20Snowboard%20Kids%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Scene It Twilight (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scene%20It%20Twilight%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Schatz der Delfine, Der (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Schatz%20der%20Delfine%2C%20Der%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Science Papa (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Science%20Papa%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! - First Frights (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scooby-Doo%21%20-%20First%20Frights%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! - Unmasked (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scooby-Doo%21%20-%20Unmasked%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! - Who's Watching Who (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scooby-Doo%21%20-%20Who%27s%20Watching%20Who%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! - Who's Watching Who (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "103.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scooby-Doo%21%20-%20Who%27s%20Watching%20Who%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Scooby-Doo! and the Spooky Swamp (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scooby-Doo%21%20and%20the%20Spooky%20Swamp%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Scotland Yard - Hunting Mister X (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scotland%20Yard%20-%20Hunting%20Mister%20X%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Scotland Yard - Hunting Mister X (Europe) (En,De,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scotland%20Yard%20-%20Hunting%20Mister%20X%20%28Europe%29%20%28En%2CDe%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Scrabble Interactive - 2007 Edition (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scrabble%20Interactive%20-%202007%20Edition%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Scrabble Interactive - 2009 Edition (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "66.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scrabble%20Interactive%20-%202009%20Edition%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Scribblenauts (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scribblenauts%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Scribblenauts (Europe) (En,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scribblenauts%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Scurge - Hive (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Scurge%20-%20Hive%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sea Monsters - A Prehistoric Adventure (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sea%20Monsters%20-%20A%20Prehistoric%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sea Park Tycoon (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sea%20Park%20Tycoon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Sea Park Tycoon (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sea%20Park%20Tycoon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Secret Files - Tunguska (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Secret%20Files%20-%20Tunguska%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Secret Files 2 - Puritas Cordis (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Secret%20Files%202%20-%20Puritas%20Cordis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Secret Flirts - Make Everyone Fall For You! (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Secret%20Flirts%20-%20Make%20Everyone%20Fall%20For%20You%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Secret Saturdays, The - Beasts of the 5th Sun (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Secret%20Saturdays%2C%20The%20-%20Beasts%20of%20the%205th%20Sun%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Secrets of the Titanic 1912-2012 (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Secrets%20of%20the%20Titanic%201912-2012%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Secrets of the Titanic 1912-2012 (Europe) (En,Fr) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Secrets%20of%20the%20Titanic%201912-2012%20%28Europe%29%20%28En%2CFr%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "SEGA Casino (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SEGA%20Casino%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "SEGA Presents - Touch Darts (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "80.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SEGA%20Presents%20-%20Touch%20Darts%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "SEGA Superstars Tennis (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SEGA%20Superstars%20Tennis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sesame Street - Ready, Set, Grover! (Europe) (Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sesame%20Street%20-%20Ready%2C%20Set%2C%20Grover%21%20%28Europe%29%20%28Es%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Settlement Colossus (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Settlement%20Colossus%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Settlers, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Settlers%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Settlers, The (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Settlers%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Shamu's Deep Sea Adventures (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shamu%27s%20Deep%20Sea%20Adventures%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Shaun the Sheep (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shaun%20the%20Sheep%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Shaun the Sheep - Off His Head (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shaun%20the%20Sheep%20-%20Off%20His%20Head%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Shaun White Snowboarding (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shaun%20White%20Snowboarding%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Shaymin Distribution 2009 (Europe) (En,Fr,De,Es,It) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shaymin%20Distribution%202009%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "Sherlock Holmes DS - The Mystery of the Mummy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sherlock%20Holmes%20DS%20-%20The%20Mystery%20of%20the%20Mummy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sherlock Holmes DS and the Mystery of Osborne House (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sherlock%20Holmes%20DS%20and%20the%20Mystery%20of%20Osborne%20House%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Shin chan - Aventuras de Cine! (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shin%20chan%20-%20Aventuras%20de%20Cine%21%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Shin chan contra los Plastas! (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shin%20chan%20contra%20los%20Plastas%21%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Shin chan Flipa en Colores! (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shin%20chan%20Flipa%20en%20Colores%21%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Shin Megami Tensei - Devil Survivor 2 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shin%20Megami%20Tensei%20-%20Devil%20Survivor%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Shining Stars - Super Starcade (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "69.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shining%20Stars%20-%20Super%20Starcade%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Shiny Dialga-Palkia-Giratina Distribution 2013 (Europe) (En,Fr,De,It) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "69.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shiny%20Dialga-Palkia-Giratina%20Distribution%202013%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "Shiny Dialga-Palkia-Giratina Distribution 2013 (Europe) (En,Fr,Es,It) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shiny%20Dialga-Palkia-Giratina%20Distribution%202013%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "Showtime Championship Boxing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "52.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Showtime%20Championship%20Boxing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Shrek - Forever After (Europe) (De,Es) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shrek%20-%20Forever%20After%20%28Europe%29%20%28De%2CEs%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Shrek - Forever After (Europe) (En,Fr) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shrek%20-%20Forever%20After%20%28Europe%29%20%28En%2CFr%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Shrek - Forever After (Europe) (Nl,Sv) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shrek%20-%20Forever%20After%20%28Europe%29%20%28Nl%2CSv%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Shrek - Ogritos y Drasnos (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shrek%20-%20Ogritos%20y%20Drasnos%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Shrek - Smash n' Crash Racing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shrek%20-%20Smash%20n%27%20Crash%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Shrek - Super Slam (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shrek%20-%20Super%20Slam%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Shrek Tercero (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shrek%20Tercero%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Shrek the Third (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shrek%20the%20Third%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Shrek's Carnival Craze - Party Games (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Shrek%27s%20Carnival%20Craze%20-%20Party%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Sid Meier's Civilization Revolution (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sid%20Meier%27s%20Civilization%20Revolution%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sight Training - Enjoy Exercising and Relaxing Your Eyes (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sight%20Training%20-%20Enjoy%20Exercising%20and%20Relaxing%20Your%20Eyes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sight Training - Enjoy Exercising and Relaxing Your Eyes (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sight%20Training%20-%20Enjoy%20Exercising%20and%20Relaxing%20Your%20Eyes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Sightseeing Puzzle - Echter Puzzlespass fuer Unterwegs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sightseeing%20Puzzle%20-%20Echter%20Puzzlespass%20fuer%20Unterwegs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "SimAnimals (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SimAnimals%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "SimAnimals - Africa (Europe) (En,Ja,Fr,De,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SimAnimals%20-%20Africa%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "SimCity - Creator (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SimCity%20-%20Creator%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "SimCity DS (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SimCity%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Simpson, Los - El Videojuego (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Simpson%2C%20Los%20-%20El%20Videojuego%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Simpsons Game, The (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Simpsons%20Game%2C%20The%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Sims 2, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sims%202%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sims 2, The - Apartment Pets (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sims%202%2C%20The%20-%20Apartment%20Pets%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Sims 2, The - Castaway (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sims%202%2C%20The%20-%20Castaway%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Sims 2, The - Pets (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sims%202%2C%20The%20-%20Pets%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Sims 3, The (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sims%203%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Skate It (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Skate%20It%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "SmileyWorld - Island Challenge (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SmileyWorld%20-%20Island%20Challenge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Smurfs 2, The (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Smurfs%202%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Smurfs Collection, The (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Smurfs%20Collection%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Smurfs, The (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Smurfs%2C%20The%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "SNK vs. Capcom - Card Fighters DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SNK%20vs.%20Capcom%20-%20Card%20Fighters%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Snood 2 - On Vacation (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Snood%202%20-%20On%20Vacation%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "So Blonde - Back to the Island (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/So%20Blonde%20-%20Back%20to%20the%20Island%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sokoban DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sokoban%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Solatorobo - Red the Hunter (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Solatorobo%20-%20Red%20the%20Hunter%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Solitaire (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Solitaire%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Solitaire DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Solitaire%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Solitaire Mahjong - Ancient China Adventure (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Solitaire%20Mahjong%20-%20Ancient%20China%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic & SEGA All-Stars Racing (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sonic%20%26%20SEGA%20All-Stars%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Chronicles - The Dark Brotherhood (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sonic%20Chronicles%20-%20The%20Dark%20Brotherhood%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Classic Collection (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "175.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sonic%20Classic%20Collection%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Sonic Colours (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "80.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sonic%20Colours%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Rush (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sonic%20Rush%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Rush Adventure (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "87.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sonic%20Rush%20Adventure%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sonic Rush Adventure (Europe) (En,Ja,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sonic%20Rush%20Adventure%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Sonny with a Chance (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sonny%20with%20a%20Chance%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Sorcerer's Apprentice, The (Europe) (En,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sorcerer%27s%20Apprentice%2C%20The%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Soul Bubbles (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Soul%20Bubbles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Space Camp (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Space%20Camp%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Space Chimps (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Space%20Chimps%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Space Invaders Extreme (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Space%20Invaders%20Extreme%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Space Invaders Extreme 2 (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Space%20Invaders%20Extreme%202%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Space Invaders Revolution (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Space%20Invaders%20Revolution%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Spanish Buddy (Europe) (Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spanish%20Buddy%20%28Europe%29%20%28Fr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Spectral Force - Genesis (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spectral%20Force%20-%20Genesis%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Spectrobes (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spectrobes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Spectrobes - Beyond the Portals (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spectrobes%20-%20Beyond%20the%20Portals%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Spectrobes - Beyond the Portals (Europe) (En,Fr,De,Es,It,Nl) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spectrobes%20-%20Beyond%20the%20Portals%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Speed Racer - The Videogame (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Speed%20Racer%20-%20The%20Videogame%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Spellbound (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spellbound%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man - Amigo o Enemigo (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%20-%20Amigo%20o%20Enemigo%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man - Battle for New York (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%20-%20Battle%20for%20New%20York%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man - Battle for New York (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%20-%20Battle%20for%20New%20York%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man - Edge of Time (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%20-%20Edge%20of%20Time%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man - Friend or Foe (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%20-%20Friend%20or%20Foe%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man - Shattered Dimensions (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "205.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%20-%20Shattered%20Dimensions%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man - Web of Shadows (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%20-%20Web%20of%20Shadows%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man - Web of Shadows (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%20-%20Web%20of%20Shadows%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man 2 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%202%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Spider-Man 3 (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spider-Man%203%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Spiderwick Chronicles, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spiderwick%20Chronicles%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob - SpongeBob's Truth or Square (Europe) (En,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%20-%20SpongeBob%27s%20Truth%20or%20Square%20%28Europe%29%20%28En%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob and Friends - Battle for Volcano Island (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%20and%20Friends%20-%20Battle%20for%20Volcano%20Island%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob SquarePants - Creature from the Krusty Krab (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%20SquarePants%20-%20Creature%20from%20the%20Krusty%20Krab%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob SquarePants - Frantic Fry Cook (Europe) (En,Fr,De,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%20SquarePants%20-%20Frantic%20Fry%20Cook%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob SquarePants - Plankton's Robotic Revenge (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%20SquarePants%20-%20Plankton%27s%20Robotic%20Revenge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob SquarePants - The Yellow Avenger (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%20SquarePants%20-%20The%20Yellow%20Avenger%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob SquarePants - The Yellow Avenger (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%20SquarePants%20-%20The%20Yellow%20Avenger%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob SquarePants and Friends Unite! (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%20SquarePants%20and%20Friends%20Unite%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob SquarePants Featuring Nicktoons - Globs of Doom (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%20SquarePants%20Featuring%20Nicktoons%20-%20Globs%20of%20Doom%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob's Atlantis SquarePantis (Europe) (De,El)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%27s%20Atlantis%20SquarePantis%20%28Europe%29%20%28De%2CEl%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob's Atlantis SquarePantis (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%27s%20Atlantis%20SquarePantis%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob's Atlantis SquarePantis (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%27s%20Atlantis%20SquarePantis%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob's Boating Bash (Europe) (En,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%27s%20Boating%20Bash%20%28Europe%29%20%28En%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob's Boating Bash (Europe) (En,Es) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "55.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%27s%20Boating%20Bash%20%28Europe%29%20%28En%2CEs%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "SpongeBob's Surf & Skate - Roadtrip (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/SpongeBob%27s%20Surf%20%26%20Skate%20-%20Roadtrip%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Spore Creatures (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spore%20Creatures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Spore Hero Arena (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spore%20Hero%20Arena%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Sports Collection (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sports%20Collection%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sports Island DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sports%20Island%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sprung - The Dating Game (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sprung%20-%20The%20Dating%20Game%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Spyro - Shadow Legacy (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Spyro%20-%20Shadow%20Legacy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Squeeballs Party (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Squeeballs%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Squinkies - Surprize Inside (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Squinkies%20-%20Surprize%20Inside%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Star Fox Command (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Fox%20Command%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Star Life (Europe) (Proto)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Life%20%28Europe%29%20%28Proto%29.zip",
    link2: ""
  },
  {
    name: "Star Trek - Tactical Assault (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Trek%20-%20Tactical%20Assault%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Battlefront - Elite Squadron (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Wars%20-%20Battlefront%20-%20Elite%20Squadron%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Battlefront - Elite Squadron (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Wars%20-%20Battlefront%20-%20Elite%20Squadron%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Episode III - Revenge of the Sith (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Wars%20-%20Episode%20III%20-%20Revenge%20of%20the%20Sith%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - Lethal Alliance (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Wars%20-%20Lethal%20Alliance%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - The Clone Wars - Jedi Alliance (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Wars%20-%20The%20Clone%20Wars%20-%20Jedi%20Alliance%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - The Clone Wars - Republic Heroes (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Wars%20-%20The%20Clone%20Wars%20-%20Republic%20Heroes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - The Force Unleashed (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Wars%20-%20The%20Force%20Unleashed%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Star Wars - The Force Unleashed II (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Star%20Wars%20-%20The%20Force%20Unleashed%20II%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Starz (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Starz%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Steel Horizon (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Steel%20Horizon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sternentaenzer - Das Geheimnisvolle Pferd (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sternentaenzer%20-%20Das%20Geheimnisvolle%20Pferd%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Stratego - Next Edition (Europe) (En,Fr,De,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Stratego%20-%20Next%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Strawberry Shortcake - Strawberryland Games (Europe) (En,Fr,De,Es,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Strawberry%20Shortcake%20-%20Strawberryland%20Games%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Strawberry Shortcake - The Four Seasons Cake (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Strawberry%20Shortcake%20-%20The%20Four%20Seasons%20Cake%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Street Football (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Street%20Football%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Street Football II (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "56.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Street%20Football%20II%20%28Europe%29%20%28En%2CFr%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Subbuteo (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "56.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Subbuteo%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Successfully Learning English (Europe) (En,Fr,De,Es,It,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Successfully%20Learning%20English%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Successfully Learning English - Year 2+3 (Europe) (En,Fr,De,Es,It,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Successfully%20Learning%20English%20-%20Year%202%2B3%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Successfully Learning English - Year 4+5 (Europe) (En,Fr,De,Es,It,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Successfully%20Learning%20English%20-%20Year%204%2B5%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Successfully Learning Mathematics (Europe) (En,Fr,De,Es,It,Ru)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Successfully%20Learning%20Mathematics%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CRu%29.zip",
    link2: ""
  },
  {
    name: "Successfully Learning Mathematics (Europe) (En,Fr,De,Es,It,Ru,Tr) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Successfully%20Learning%20Mathematics%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CRu%2CTr%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Successfully Learning Mathematics (Europe) (En,Fr,De,Es,It,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Successfully%20Learning%20Mathematics%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Successfully Learning Mathematics - Year 2+3 (Europe) (En,Fr,De,Es,It,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Successfully%20Learning%20Mathematics%20-%20Year%202%2B3%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Successfully Learning Mathematics - Year 4+5 (Europe) (En,Fr,De,Es,It,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Successfully%20Learning%20Mathematics%20-%20Year%204%2B5%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Sudoku Ball Detective (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sudoku%20Ball%20Detective%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Sudoku Master (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sudoku%20Master%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Sudokumaniacs (Europe) (En,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sudokumaniacs%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sudokuro (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sudokuro%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Suikoden - Tierkreis (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Suikoden%20-%20Tierkreis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Suite Life of Zack & Cody, The - Circle of Spies (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Suite%20Life%20of%20Zack%20%26%20Cody%2C%20The%20-%20Circle%20of%20Spies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Sun, The - Crossword Challenge (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sun%2C%20The%20-%20Crossword%20Challenge%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Sun, The - Crossword Challenge (Europe) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sun%2C%20The%20-%20Crossword%20Challenge%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Super Black Bass Fishing (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Super%20Black%20Bass%20Fishing%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Super Fruit Fall (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "79.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Super%20Fruit%20Fall%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Fun Chess (Europe) (En,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Super%20Fun%20Chess%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Super Fun Sudoku (Europe) (En,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Super%20Fun%20Sudoku%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Mario 64 DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Super%20Mario%2064%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Monkey Ball - Touch & Roll (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Super%20Monkey%20Ball%20-%20Touch%20%26%20Roll%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Princess Peach (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Super%20Princess%20Peach%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Super Scribblenauts (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Super%20Scribblenauts%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Super Scribblenauts (Europe) (En,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Super%20Scribblenauts%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Super Star Kartz (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Super%20Star%20Kartz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Superman Returns (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Superman%20Returns%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Supermodel Makeover by Lauren Luke (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Supermodel%20Makeover%20by%20Lauren%20Luke%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Supervivientes (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "93.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Supervivientes%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Surf's Up (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Surf%27s%20Up%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Surf's Up (Europe) (En,Fr,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Surf%27s%20Up%20%28Europe%29%20%28En%2CFr%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Sushi Academy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sushi%20Academy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Sweet 16 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Sweet%2016%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Syberia (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Syberia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tabaluga - Gruenland in Gefahr (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "84.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tabaluga%20-%20Gruenland%20in%20Gefahr%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Tak - The Great Juju Challenge (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tak%20-%20The%20Great%20Juju%20Challenge%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tak - The Great Juju Challenge (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tak%20-%20The%20Great%20Juju%20Challenge%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Take a Break's Puzzle Bonanza (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Take%20a%20Break%27s%20Puzzle%20Bonanza%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Take a Break's Puzzle Master (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Take%20a%20Break%27s%20Puzzle%20Master%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tale of Despereaux, The (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tale%20of%20Despereaux%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tales to Enjoy! - Little Red Riding Hood (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tales%20to%20Enjoy%21%20-%20Little%20Red%20Riding%20Hood%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tales to Enjoy! - Puss in Boots (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tales%20to%20Enjoy%21%20-%20Puss%20in%20Boots%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tales to Enjoy! - The Three Little Pigs (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tales%20to%20Enjoy%21%20-%20The%20Three%20Little%20Pigs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tales to Enjoy! - The Ugly Duckling (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tales%20to%20Enjoy%21%20-%20The%20Ugly%20Duckling%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tamagotchi Connexion - Corner Shop (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tamagotchi%20Connexion%20-%20Corner%20Shop%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tamagotchi Connexion - Corner Shop 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tamagotchi%20Connexion%20-%20Corner%20Shop%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tamagotchi Connexion - Corner Shop 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tamagotchi%20Connexion%20-%20Corner%20Shop%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tangled (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "94.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tangled%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tangled (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "94.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tangled%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Tangram Mania (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "51.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tangram%20Mania%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tank Battles (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tank%20Battles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tao's Adventure - Curse of the Demon Seal (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "58.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tao%27s%20Adventure%20-%20Curse%20of%20the%20Demon%20Seal%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tecktonik - World Tour (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "54.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tecktonik%20-%20World%20Tour%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles - Arcade Attack (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Teenage%20Mutant%20Ninja%20Turtles%20-%20Arcade%20Attack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles 3 - Mutant Nightmare (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Teenage%20Mutant%20Ninja%20Turtles%203%20-%20Mutant%20Nightmare%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Teenage Zombies - Invasion of the Alien Brain Thingys (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Teenage%20Zombies%20-%20Invasion%20of%20the%20Alien%20Brain%20Thingys%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Telly Addicts (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Telly%20Addicts%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tenchu - Dark Secret (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tenchu%20-%20Dark%20Secret%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tenchu - Dark Secret (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tenchu%20-%20Dark%20Secret%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Tennis Elbow (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tennis%20Elbow%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Tennis Masters (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tennis%20Masters%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tetris DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tetris%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tetris Party Deluxe (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tetris%20Party%20Deluxe%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Texas Hold 'em Poker DS (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Texas%20Hold%20%27em%20Poker%20DS%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Texas Hold 'em Poker Pack (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Texas%20Hold%20%27em%20Poker%20Pack%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Theme Park (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Theme%20Park%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Think - Kids - Speel Je Slim! (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Think%20-%20Kids%20-%20Speel%20Je%20Slim%21%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Think - Train Your Brain - Logic Trainer (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Think%20-%20Train%20Your%20Brain%20-%20Logic%20Trainer%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Think - Train Your Brain - Logic Trainer (Europe) (En,Fr,De,Es,It,Sv,No,Da) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Think%20-%20Train%20Your%20Brain%20-%20Logic%20Trainer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Think - Train Your Senses (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Think%20-%20Train%20Your%20Senses%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Think - Train Your Senses (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Think%20-%20Train%20Your%20Senses%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Think - Training fuer den Kopf - Kids - Spiel Dich Schlau! (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Think%20-%20Training%20fuer%20den%20Kopf%20-%20Kids%20-%20Spiel%20Dich%20Schlau%21%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Think Again (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Think%20Again%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Thomas & Friends - Hero of the Rails (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Thomas%20%26%20Friends%20-%20Hero%20of%20the%20Rails%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Thomas & Friends - Hero of the Rails (Europe) (Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Thomas%20%26%20Friends%20-%20Hero%20of%20the%20Rails%20%28Europe%29%20%28Sv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Thor - God of Thunder (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Thor%20-%20God%20of%20Thunder%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Thrillville - Off the Rails (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Thrillville%20-%20Off%20the%20Rails%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "ThunderCats (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/ThunderCats%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "ThunderCats (Europe) (En,Fr,De,Es,It) (Beta) (2012-05-14)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/ThunderCats%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Beta%29%20%282012-05-14%29.zip",
    link2: ""
  },
  {
    name: "Tierbabys Puzzle - Echter Puzzlespass fuer Unterwegs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tierbabys%20Puzzle%20-%20Echter%20Puzzlespass%20fuer%20Unterwegs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tierliebe Gross Geschrieben (Europe) (De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tierliebe%20Gross%20Geschrieben%20%28Europe%29%20%28De%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour (USA, Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tiger%20Woods%20PGA%20Tour%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour (USA, Europe) (En,Fr,De) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tiger%20Woods%20PGA%20Tour%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 08 (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tiger%20Woods%20PGA%20Tour%2008%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Tigerz (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tigerz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tigre, El - The Adventures of Manny Rivera (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tigre%2C%20El%20-%20The%20Adventures%20of%20Manny%20Rivera%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tim Stockdale's Riding Star (Europe) (En,Fr,De,Es,It,Sv,No,Da) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "112.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tim%20Stockdale%27s%20Riding%20Star%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Time Hollow (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Time%20Hollow%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Times, The - Crossword Challenge (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Times%2C%20The%20-%20Crossword%20Challenge%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Timmy Time (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Timmy%20Time%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Timmy Time (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Timmy%20Time%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "TINCan! Escape (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "75.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/TINCan%21%20Escape%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tinker Bell (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "87.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tinker%20Bell%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tinker Bell (Europe) (En,Fr,De,Es,It,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "87.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tinker%20Bell%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Tinker Bell + Tinker Bell and the Lost Treasure (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "87.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tinker%20Bell%20%2B%20Tinker%20Bell%20and%20the%20Lost%20Treasure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tinker Bell and the Great Fairy Rescue (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tinker%20Bell%20and%20the%20Great%20Fairy%20Rescue%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tinker Bell and the Great Fairy Rescue (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tinker%20Bell%20and%20the%20Great%20Fairy%20Rescue%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tinker Bell and the Great Fairy Rescue (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tinker%20Bell%20and%20the%20Great%20Fairy%20Rescue%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Tinker Bell and the Lost Treasure (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tinker%20Bell%20and%20the%20Lost%20Treasure%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tinker Bell and the Lost Treasure (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "51.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tinker%20Bell%20and%20the%20Lost%20Treasure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tinker Bell and the Lost Treasure (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tinker%20Bell%20and%20the%20Lost%20Treasure%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Titanic Mystery (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Titanic%20Mystery%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Titanic Mystery (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Titanic%20Mystery%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "TMNT - Teenage Mutant Ninja Turtles (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/TMNT%20-%20Teenage%20Mutant%20Ninja%20Turtles%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "To-Fu Collection (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/To-Fu%20Collection%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tom and Jerry Tales (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tom%20and%20Jerry%20Tales%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's EndWar (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tom%20Clancy%27s%20EndWar%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tom Clancy's Splinter Cell - Chaos Theory (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tom%20Clancy%27s%20Splinter%20Cell%20-%20Chaos%20Theory%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tomb Raider - Underworld (Europe) (En,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tomb%20Raider%20-%20Underworld%20%28Europe%29%20%28En%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tomb Raider - Underworld (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tomb%20Raider%20-%20Underworld%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's American Sk8land (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tony%20Hawk%27s%20American%20Sk8land%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Downhill Jam (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "47.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tony%20Hawk%27s%20Downhill%20Jam%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Motion (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tony%20Hawk%27s%20Motion%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tony Hawk's Proving Ground (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "53.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tony%20Hawk%27s%20Proving%20Ground%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Toon-Doku - Sudoku with Pictures! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Toon-Doku%20-%20Sudoku%20with%20Pictures%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tootuff - Megafun Land (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tootuff%20-%20Megafun%20Land%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Tootuff - Mission Nadia (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tootuff%20-%20Mission%20Nadia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Top Gun (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Top%20Gun%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Top Model Academy (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Top%20Model%20Academy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Top Spin 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Top%20Spin%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Top Spin 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Top%20Spin%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Top Trumps - Doctor Who (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Top%20Trumps%20-%20Doctor%20Who%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Top Trumps - Dogs & Dinosaurs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "18.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Top%20Trumps%20-%20Dogs%20%26%20Dinosaurs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Top Trumps - Horror & Predators (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Top%20Trumps%20-%20Horror%20%26%20Predators%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Tornado (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "53.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tornado%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Totally Spies! - My Secret Diary (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Totally%20Spies%21%20-%20My%20Secret%20Diary%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29%20%5Bb%5D.zip",
    link2: ""
  },
  {
    name: "Totally Spies! 2 - Undercover (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Totally%20Spies%21%202%20-%20Undercover%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Totally Spies! 3 - Secret Agents (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Totally%20Spies%21%203%20-%20Secret%20Agents%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Totally Spies! 4 - Around the World (Europe) (En,Fr,Es,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Totally%20Spies%21%204%20-%20Around%20the%20World%20%28Europe%29%20%28En%2CFr%2CEs%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Touch 'N' Play Collection (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Touch%20%27N%27%20Play%20Collection%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "TouchMaster (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/TouchMaster%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "TouchMaster 3 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/TouchMaster%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "TouchMaster 4 - Connect (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/TouchMaster%204%20-%20Connect%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "TouchMaster 4 - Connect (Europe) (En,Fr,De,Es,It) (Rev 1) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "100.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/TouchMaster%204%20-%20Connect%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Toy Shop Tycoon (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Toy%20Shop%20Tycoon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Toy Story 3 (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Toy%20Story%203%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Toy Story 3 (Europe) (En,Sv,No,Da,Fi) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Toy%20Story%203%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%2CFi%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "TrackMania DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/TrackMania%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "TrackMania Turbo (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/TrackMania%20Turbo%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Autobots (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Autobots%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Autobots (Spain) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "53.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Autobots%20%28Spain%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Dark of the Moon - Autobots (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "84.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Dark%20of%20the%20Moon%20-%20Autobots%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Dark of the Moon - Decepticons (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "101.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Dark%20of%20the%20Moon%20-%20Decepticons%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Decepticons (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "50.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Decepticons%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Decepticons (Europe) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Decepticons%20%28Europe%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Decepticons (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Decepticons%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Decepticons (Spain) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Decepticons%20%28Spain%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Revenge of the Fallen - Autobots Version (Europe) (De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Revenge%20of%20the%20Fallen%20-%20Autobots%20Version%20%28Europe%29%20%28De%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Revenge of the Fallen - Autobots Version (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Revenge%20of%20the%20Fallen%20-%20Autobots%20Version%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Revenge of the Fallen - Decepticons Version (Europe) (De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "29.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Revenge%20of%20the%20Fallen%20-%20Decepticons%20Version%20%28Europe%29%20%28De%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Revenge of the Fallen - Decepticons Version (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Revenge%20of%20the%20Fallen%20-%20Decepticons%20Version%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Transformers - Ultimate Autobots Edition (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20Ultimate%20Autobots%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers - War for Cybertron - Autobots (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20War%20for%20Cybertron%20-%20Autobots%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Transformers - War for Cybertron - Autobots (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20War%20for%20Cybertron%20-%20Autobots%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers - War for Cybertron - Decepticons (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20War%20for%20Cybertron%20-%20Decepticons%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Transformers - War for Cybertron - Decepticons (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20-%20War%20for%20Cybertron%20-%20Decepticons%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers Animated - The Game (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20Animated%20-%20The%20Game%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers Prime - The Game (Europe) (De,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20Prime%20-%20The%20Game%20%28Europe%29%20%28De%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Transformers Prime - The Game (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20Prime%20-%20The%20Game%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Transformers Prime - The Game (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Transformers%20Prime%20-%20The%20Game%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Trash Pack, The (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Trash%20Pack%2C%20The%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Trauma Center - Under the Knife (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Trauma%20Center%20-%20Under%20the%20Knife%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Travel Coach - Europe 1 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Travel%20Coach%20-%20Europe%201%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Travel Coach - Europe 2 (Europe) (En,De,Nl,El,Tr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Travel%20Coach%20-%20Europe%202%20%28Europe%29%20%28En%2CDe%2CNl%2CEl%2CTr%29.zip",
    link2: ""
  },
  {
    name: "Travel Coach - Europe 3 (Europe) (En,De,Pl,Ru,Cs)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Travel%20Coach%20-%20Europe%203%20%28Europe%29%20%28En%2CDe%2CPl%2CRu%2CCs%29.zip",
    link2: ""
  },
  {
    name: "Travel Games for Dummies (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Travel%20Games%20for%20Dummies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Treasure Master (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Treasure%20Master%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Treasures of Montezuma 2, The (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Treasures%20of%20Montezuma%202%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Treasures of Montezuma, The (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Treasures%20of%20Montezuma%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Trioncube (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Trioncube%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "TRON - Evolution (Europe) (En,Fr,De,Es,It,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/TRON%20-%20Evolution%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "TRON - Evolution (Europe) (En,Sv,No,Da) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/TRON%20-%20Evolution%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Tropical Lost Island (Europe) (En,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tropical%20Lost%20Island%20%28Europe%29%20%28En%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Tropical Lost Island (Europe) (En,Fr,De,Nl) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tropical%20Lost%20Island%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Tsumiki - The Infernal Tower (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tsumiki%20-%20The%20Infernal%20Tower%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Turbo - Super Stunt Squad (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "92.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Turbo%20-%20Super%20Stunt%20Squad%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Turn It Around (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Turn%20It%20Around%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Tus Amigos de Disney (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Tus%20Amigos%20de%20Disney%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Band (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ultimate%20Band%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Band (Europe) (En,Fr,De,Es,It,Nl) (Beta)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ultimate%20Band%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28Beta%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Mortal Kombat (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ultimate%20Mortal%20Kombat%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Spider-Man (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "45.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ultimate%20Spider-Man%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Ultimate Spider-Man (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ultimate%20Spider-Man%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Undercover - Dual Motives (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "32.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Undercover%20-%20Dual%20Motives%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Underwater Puzzle - Echter Puzzlespass fuer Unterwegs (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Underwater%20Puzzle%20-%20Echter%20Puzzlespass%20fuer%20Unterwegs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Uno 52 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Uno%2052%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Unsolved Crimes (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Unsolved%20Crimes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Up (Europe) (Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Up%20%28Europe%29%20%28Fr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Up (Europe) (Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "21.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Up%20%28Europe%29%20%28Sv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Up (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Up%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Urbz, The - Sims in the City (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Urbz%2C%20The%20-%20Sims%20in%20the%20City%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Valentines Day (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Valentines%20Day%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Valkyrie Profile - Covenant of the Plume (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Valkyrie%20Profile%20-%20Covenant%20of%20the%20Plume%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Vampire Moon - The Mystery of the Hidden Sun (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "20.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Vampire%20Moon%20-%20The%20Mystery%20of%20the%20Hidden%20Sun%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Vecinos Invasores (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "15.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Vecinos%20Invasores%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "Vegas Casino High 5! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "72.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Vegas%20Casino%20High%205%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Vicky the Viking - Part 2 (Europe) (En,Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Vicky%20the%20Viking%20-%20Part%202%20%28Europe%29%20%28En%2CFr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Victorious - Hollywood Arts Debut (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "35.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Victorious%20-%20Hollywood%20Arts%20Debut%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Victorious - Taking the Lead (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "28.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Victorious%20-%20Taking%20the%20Lead%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Vie d'Emma, La - Super Star (Europe) (En,Fr,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Vie%20d%27Emma%2C%20La%20-%20Super%20Star%20%28Europe%29%20%28En%2CFr%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Viewtiful Joe - Double Trouble! (Spain)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Viewtiful%20Joe%20-%20Double%20Trouble%21%20%28Spain%29.zip",
    link2: ""
  },
  {
    name: "VIP News (Europe) (En,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "49.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/VIP%20News%20%28Europe%29%20%28En%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "VIPs - Very Important Pets (Europe) (En,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/VIPs%20-%20Very%20Important%20Pets%20%28Europe%29%20%28En%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Virtual Villagers - Erschaffe dein Paradies! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Virtual%20Villagers%20-%20Erschaffe%20dein%20Paradies%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Visual Logic Training (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Visual%20Logic%20Training%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Viva Pinata - Pocket Paradise (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Viva%20Pinata%20-%20Pocket%20Paradise%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "VocabStar English Advanced (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/VocabStar%20English%20Advanced%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Wacky Races - Crash & Dash (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wacky%20Races%20-%20Crash%20%26%20Dash%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Walk with Me! (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Walk%20with%20Me%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "WALL-E (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WALL-E%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "WALL-E (Europe) (En,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WALL-E%20%28Europe%29%20%28En%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "WALL-E (Europe) (Es,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WALL-E%20%28Europe%29%20%28Es%2CPt%29.zip",
    link2: ""
  },
  {
    name: "WALL-E (Europe) (Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WALL-E%20%28Europe%29%20%28Fr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "WALL-E (Europe) (It,El)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "24.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WALL-E%20%28Europe%29%20%28It%2CEl%29.zip",
    link2: ""
  },
  {
    name: "Wappy Dog (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wappy%20Dog%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Warhammer 40,000 - Squad Command (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Warhammer%2040%2C000%20-%20Squad%20Command%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Warhammer 40,000 - Squad Command (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Warhammer%2040%2C000%20-%20Squad%20Command%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Warhammer 40,000 - Squad Command (Europe) (Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Warhammer%2040%2C000%20-%20Squad%20Command%20%28Europe%29%20%28Es%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Wario - Master of Disguise (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wario%20-%20Master%20of%20Disguise%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Wario - Master of Disguise (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wario%20-%20Master%20of%20Disguise%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "WarioWare - Do It Yourself (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WarioWare%20-%20Do%20It%20Yourself%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "WarioWare - Touched! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "33.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WarioWare%20-%20Touched%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "WarioWare - Touched! (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "39.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WarioWare%20-%20Touched%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Was Ist Was - Abenteuer Erde (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Was%20Ist%20Was%20-%20Abenteuer%20Erde%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Was Ist Was - Versunkene Schaetze - Das Abenteuerspiel (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Was%20Ist%20Was%20-%20Versunkene%20Schaetze%20-%20Das%20Abenteuerspiel%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Water Horse, The - Legend of the Deep (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da,Fi)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Water%20Horse%2C%20The%20-%20Legend%20of%20the%20Deep%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.zip",
    link2: ""
  },
  {
    name: "Wedding Planner - Dream Weddings Guaranteed (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "68.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wedding%20Planner%20-%20Dream%20Weddings%20Guaranteed%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Wendy - Das Pferdehospital (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "174.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wendy%20-%20Das%20Pferdehospital%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "What's Cooking - Jamie Oliver (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "177.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/What%27s%20Cooking%20-%20Jamie%20Oliver%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Where the Wild Things Are (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "92.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Where%20the%20Wild%20Things%20Are%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Whitaker Family Presents, The - Horse Life (Europe) (En,Fr,De,Es,It,Nl,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "53.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Whitaker%20Family%20Presents%2C%20The%20-%20Horse%20Life%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Who Wants to Be a Millionaire - 1st Edition (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "64.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Who%20Wants%20to%20Be%20a%20Millionaire%20-%201st%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Who Wants to Be a Millionaire - 2nd Edition (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Who%20Wants%20to%20Be%20a%20Millionaire%20-%202nd%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Wickie und die Starken Maenner (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wickie%20und%20die%20Starken%20Maenner%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Wiffle Ball (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wiffle%20Ball%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Wilden Huehner und die Jagd nach dem Rubinherz, Die (Europe) (En,De,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "16.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wilden%20Huehner%20und%20die%20Jagd%20nach%20dem%20Rubinherz%2C%20Die%20%28Europe%29%20%28En%2CDe%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Willkommen in der Steinzeit - Ueberleben Ist Alles! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Willkommen%20in%20der%20Steinzeit%20-%20Ueberleben%20Ist%20Alles%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Willy Vandersteen Suske en Wiske - De Texas Rakkers (Europe) (Fr,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "9.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Willy%20Vandersteen%20Suske%20en%20Wiske%20-%20De%20Texas%20Rakkers%20%28Europe%29%20%28Fr%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Winter in Blue Mountain (Europe) (En,De,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "5.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Winter%20in%20Blue%20Mountain%20%28Europe%29%20%28En%2CDe%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Winter Sports 2009 - The Next Challenge (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Winter%20Sports%202009%20-%20The%20Next%20Challenge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Winx Club - Believix in You! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Winx%20Club%20-%20Believix%20in%20You%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Winx Club - Magical Fairy Party (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "17.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Winx%20Club%20-%20Magical%20Fairy%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Winx Club - Mission Enchantix (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Winx%20Club%20-%20Mission%20Enchantix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Winx Club - Quest for the Codex (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "7.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Winx%20Club%20-%20Quest%20for%20the%20Codex%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Winx Club - Rockstars (Europe) (En,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Winx%20Club%20-%20Rockstars%20%28Europe%29%20%28En%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Winx Club - Saving Alfea (Europe) (En,Fr,De,Es,It,Pt)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "4.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Winx%20Club%20-%20Saving%20Alfea%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.zip",
    link2: ""
  },
  {
    name: "Winx Club - Secret Diary 2009 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Winx%20Club%20-%20Secret%20Diary%202009%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Winx Club - Your Magic Universe (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "8.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Winx%20Club%20-%20Your%20Magic%20Universe%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "WireWay (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WireWay%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Witches & Vampires - Ghost Pirates of Ashburry (Europe) (En,De) (VWVP) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "6.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Witches%20%26%20Vampires%20-%20Ghost%20Pirates%20of%20Ashburry%20%28Europe%29%20%28En%2CDe%29%20%28VWVP%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Witches & Vampires - Ghost Pirates of Ashburry (Europe) (En,De) (VWVV) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Witches%20%26%20Vampires%20-%20Ghost%20Pirates%20of%20Ashburry%20%28Europe%29%20%28En%2CDe%29%20%28VWVV%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Witches & Vampires - The Secrets of Ashburry (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Witches%20%26%20Vampires%20-%20The%20Secrets%20of%20Ashburry%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Wizards of Waverly Place (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "31.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wizards%20of%20Waverly%20Place%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Wizards of Waverly Place - Spellbound (Europe) (En,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wizards%20of%20Waverly%20Place%20-%20Spellbound%20%28Europe%29%20%28En%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Wo auf der Welt Ist Carmen Sandiego - Das Geheimnis am Ende der Welt (Europe) (De,Es)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wo%20auf%20der%20Welt%20Ist%20Carmen%20Sandiego%20-%20Das%20Geheimnis%20am%20Ende%20der%20Welt%20%28Europe%29%20%28De%2CEs%29.zip",
    link2: ""
  },
  {
    name: "Wonder Pets! - Save the Animals! (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "83.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wonder%20Pets%21%20-%20Save%20the%20Animals%21%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Wonder World - Amusement Park (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wonder%20World%20-%20Amusement%20Park%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Woodleys, The - Summer Sports (Europe) (En,Fr,De,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "72.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Woodleys%2C%20The%20-%20Summer%20Sports%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Word Academy (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "89.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Word%20Academy%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "WordJong (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WordJong%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Wordmaster (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wordmaster%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "World Championship Poker - Deluxe Series (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "22.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/World%20Championship%20Poker%20-%20Deluxe%20Series%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "World Championship Sports - Summer (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "73.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/World%20Championship%20Sports%20-%20Summer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "World Cup of Pool (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/World%20Cup%20of%20Pool%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "World Ends with You, The (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/World%20Ends%20with%20You%2C%20The%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "World of Zoo (Europe) (En,Fr,De,Es,It,Nl,Sv,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "1.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/World%20of%20Zoo%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CDa%29.zip",
    link2: ""
  },
  {
    name: "World Series of Poker 2008 - The Official Video Game - Battle for the Bracelets (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/World%20Series%20of%20Poker%202008%20-%20The%20Official%20Video%20Game%20-%20Battle%20for%20the%20Bracelets%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "World Snooker Championship - Season 2007-08 (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/World%20Snooker%20Championship%20-%20Season%202007-08%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Worms - Open Warfare (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Worms%20-%20Open%20Warfare%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Worms - Open Warfare 2 (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Worms%20-%20Open%20Warfare%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Wreck-It Ralph (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "188.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Wreck-It%20Ralph%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "WWE SmackDown vs Raw 2008 Featuring ECW (Europe) (En,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "188.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WWE%20SmackDown%20vs%20Raw%202008%20Featuring%20ECW%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "WWE SmackDown vs Raw 2009 Featuring ECW (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "11.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WWE%20SmackDown%20vs%20Raw%202009%20Featuring%20ECW%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "WWE SmackDown vs Raw 2010 Featuring ECW (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/WWE%20SmackDown%20vs%20Raw%202010%20Featuring%20ECW%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "X-Men - Destiny (Europe) (En,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "14.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/X-Men%20-%20Destiny%20%28Europe%29%20%28En%2CDe%29.zip",
    link2: ""
  },
  {
    name: "X-Men - The Official Game (Europe) (En,Fr,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "99.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/X-Men%20-%20The%20Official%20Game%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "X-Men Origins - Wolverine (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/X-Men%20Origins%20-%20Wolverine%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "XG Blast! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/XG%20Blast%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Xia-Xia (Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "2.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Xia-Xia%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Xiaolin Showdown (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "149.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Xiaolin%20Showdown%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yamaha Supercross (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "197.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yamaha%20Supercross%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yeti Quest - Crazy Penguins (Europe) (Fr,De,Nl)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "197.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yeti%20Quest%20-%20Crazy%20Penguins%20%28Europe%29%20%28Fr%2CDe%2CNl%29.zip",
    link2: ""
  },
  {
    name: "Yogi Bear - The Video Game (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yogi%20Bear%20-%20The%20Video%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yoshi Touch & Go (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "113.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yoshi%20Touch%20%26%20Go%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yoshi Touch & Go (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "34.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yoshi%20Touch%20%26%20Go%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Yoshi's Island DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "38.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yoshi%27s%20Island%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yoshi's Island DS (Europe) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "43.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yoshi%27s%20Island%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Demo%29%20%28Kiosk%29.zip",
    link2: ""
  },
  {
    name: "Yoshi's Island DS (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yoshi%27s%20Island%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Youda Farmer (Europe) (En,Fr,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Youda%20Farmer%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Youda Farmer (Europe) (En,Fr,De) (Rev 1) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Youda%20Farmer%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28Rev%201%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Youda Farmer (Europe) (Fr,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "69.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Youda%20Farmer%20%28Europe%29%20%28Fr%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Youda Farmer (Europe) (Fr,Nl) (Rev 1) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Youda%20Farmer%20%28Europe%29%20%28Fr%2CNl%29%20%28Rev%201%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Youda Legend - The Curse of the Amsterdam Diamond (Europe) (En,Fr,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "12.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Youda%20Legend%20-%20The%20Curse%20of%20the%20Amsterdam%20Diamond%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Youda Legend - The Curse of the Amsterdam Diamond (Europe) (Fr,Nl) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Youda%20Legend%20-%20The%20Curse%20of%20the%20Amsterdam%20Diamond%20%28Europe%29%20%28Fr%2CNl%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Youda Legend - The Golden Bird of Paradise (Europe) (En,Fr,De) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "105.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Youda%20Legend%20-%20The%20Golden%20Bird%20of%20Paradise%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "Youda Safari (Europe) (En,Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "146.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Youda%20Safari%20%28Europe%29%20%28En%2CFr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Ys Strategy (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Ys%20Strategy%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! - Nightmare Troubadour (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "105.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yu-Gi-Oh%21%20-%20Nightmare%20Troubadour%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! - World Championship 2007 (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "147.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yu-Gi-Oh%21%20-%20World%20Championship%202007%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! 5D's - Stardust Accelerator - World Championship 2009 (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "57.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yu-Gi-Oh%21%205D%27s%20-%20Stardust%20Accelerator%20-%20World%20Championship%202009%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! 5D's - World Championship 2010 - Reverse of Arcadia (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "26.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yu-Gi-Oh%21%205D%27s%20-%20World%20Championship%202010%20-%20Reverse%20of%20Arcadia%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! 5D's - World Championship 2011 - Over the Nexus (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "57.8 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yu-Gi-Oh%21%205D%27s%20-%20World%20Championship%202011%20-%20Over%20the%20Nexus%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! GX - Card Almanac (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "48.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yu-Gi-Oh%21%20GX%20-%20Card%20Almanac%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! GX - Spirit Caller (Europe) (En,Ja,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "3.5 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yu-Gi-Oh%21%20GX%20-%20Spirit%20Caller%20%28Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Yummy Yummy Cooking Jam (Europe) (Proto)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "200.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Yummy%20Yummy%20Cooking%20Jam%20%28Europe%29%20%28Proto%29.zip",
    link2: ""
  },
  {
    name: "Zarah - Das Schloss des Gwoor (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "92.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zarah%20-%20Das%20Schloss%20des%20Gwoor%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Zendoku (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "194.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zendoku%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Zenses - Ocean (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "72.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zenses%20-%20Ocean%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Zenses - Rainforest (Europe) (En,Fr,De,Es,It,Sv,No,Da)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "40.3 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zenses%20-%20Rainforest%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%2CNo%2CDa%29.zip",
    link2: ""
  },
  {
    name: "Zhu Zhu Pets (Europe)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "30.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zhu%20Zhu%20Pets%20%28Europe%29.zip",
    link2: ""
  },
  {
    name: "Zhu Zhu Pets (Europe) (En,Fr,De,Es,It) (Rev 1)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "25.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zhu%20Zhu%20Pets%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rev%201%29.zip",
    link2: ""
  },
  {
    name: "Zhu Zhu Pets - Quest for Zhu (Europe) (En,Fr,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "19.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zhu%20Zhu%20Pets%20-%20Quest%20for%20Zhu%20%28Europe%29%20%28En%2CFr%2CSv%29.zip",
    link2: ""
  },
  {
    name: "ZhuZhu Babies (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "105.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/ZhuZhu%20Babies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "ZhuZhu Pets Featuring The Wild Bunch (Europe) (En,Fr,De,Es,It) (NDSi Enhanced)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "46.7 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/ZhuZhu%20Pets%20Featuring%20The%20Wild%20Bunch%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28NDSi%20Enhanced%29.zip",
    link2: ""
  },
  {
    name: "ZhuZhu Princess (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "41.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/ZhuZhu%20Princess%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "ZhuZhu Puppies (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "37.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/ZhuZhu%20Puppies%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
    link2: ""
  },
  {
    name: "Zoo Hospital (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "10.9 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zoo%20Hospital%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Zoo Keeper (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zoo%20Keeper%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Zoo Quest - Puzzle Fun! (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi,Hu)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "44.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zoo%20Quest%20-%20Puzzle%20Fun%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%2CHu%29.zip",
    link2: ""
  },
  {
    name: "Zoo Tycoon 2 DS (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zoo%20Tycoon%202%20DS%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Zoo Tycoon DS (Europe) (En,Fr)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "42.0 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zoo%20Tycoon%20DS%20%28Europe%29%20%28En%2CFr%29.zip",
    link2: ""
  },
  {
    name: "Zoo Tycoon DS (Europe) (Fr,De)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "36.6 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zoo%20Tycoon%20DS%20%28Europe%29%20%28Fr%2CDe%29.zip",
    link2: ""
  },
  {
    name: "Zoobles! Spring to Life! (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "51.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zoobles%21%20Spring%20to%20Life%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Zoroark Distribution 2011 (Europe) (En,Fr,De,Es,It) (Wi-Fi Kiosk) (Save Data)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "13.2 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zoroark%20Distribution%202011%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Wi-Fi%20Kiosk%29%20%28Save%20Data%29.zip",
    link2: ""
  },
  {
    name: "Zorro - Quest for Justice (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "23.4 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zorro%20-%20Quest%20for%20Justice%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.zip",
    link2: ""
  },
  {
    name: "Zubo (Europe) (En,Fr,De,Es,It,Nl,Sv)",
    image: "https://i.postimg.cc/QxW4Mc2j/Nintendo-DS-Logo-600x315.png",
    size: "27.1 MiB",
    link1: "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20%28Decrypted%29/Zubo%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.zip",
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

