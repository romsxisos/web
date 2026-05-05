const roms = [
  {
    name: "Adian no Tsue (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Adian%20no%20Tsue%20%28Japan%29.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1dzSQ1346LXpBU-dUGCu8_F6nwCB4iyBm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ai Senshi Nicol (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ai%20Senshi%20Nicol%20%28Japan%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1Pib9p8hoJOHQmERFOj_k0lAByaMjZJ3x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ai Senshi Nicol (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ai%20Senshi%20Nicol%20%28Japan%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1vaMJOZGxdnQecOI8w1PmufBiicQ9ShI0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ai Senshi Nicol (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ai%20Senshi%20Nicol%20%28Japan%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1eNcgoTQ4fm6rvEZOMlql7-jrdNP-wptI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Air Fortress (Japan) (Proto)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1oFjw9eBhQmA4HD7CSY_c_JUKP-NLxcs0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aki to Tsukasa no Fushigi no Kabe (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Aki%20to%20Tsukasa%20no%20Fushigi%20no%20Kabe%20%28Japan%29%20%28Unl%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1TNImSI8oRAQGXpW9ZvI5CAAMJOPjOj4W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Akumajou Dracula (Japan) (v1.2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Akumajou%20Dracula%20%28Japan%29%20%28Rev%201%29%20%5Bb%5D.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1jQQ09RBlnJmRMgBQ__Kf2l0UkdxECmY9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Akumajou Dracula English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1PeZnYy78RHa9zXhlffjBY_zOIziInqV_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Akuu Senki Raijin (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Akuu%20Senki%20Raijin%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/17GN4grZM2NJBwxX0khHMnZSA3LihCmUW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aliens - Alien 2 (ESP) (Proto)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Aliens%20-%20Alien%202%20%28Japan%29%20%28Proto%29%20%5Bb%5D.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1PnWElGLWPvBqnD9l9q5yqee49-dUVzvt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aliens - Alien 2 (Japan) (Proto)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Aliens%20-%20Alien%202%20%28Japan%29%20%28Proto%29%20%5Bb%5D.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1CuFk58K_R51frFN-M0RIAxQHtWji6uEZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All Night Nippon Super Mario Bros. English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1KR-d2WJf3KqOK12w212ZyrLD1_lrCPaC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All Night Nippon Super Mario Brothers (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/All%20Night%20Nippon%20Super%20Mario%20Brothers%20%28Japan%29%20%28Promotion%20Card%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1PpJTLKjKtqPaRoegYkHd3s_4-avytjGy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All Night Nippon Super Mario Brothers (Japan) (Promotion Card)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/All%20Night%20Nippon%20Super%20Mario%20Brothers%20%28Japan%29%20%28Promotion%20Card%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1IhkSw7cmLs7wNXj1m2p3hTwnRdaz8Qc6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ao no Senritsu (1987)(Gakken)(J)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1wMVElXaRkIqrbpkpW97CwT4xQMwDAqbE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Apple Town Monogatari - Little Computer People (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Apple%20Town%20Monogatari%20-%20Little%20Computer%20People%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1JtoJD-Y1jTe3yfbgBjMtukjo3-zmlNVP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Armana no Kiseki (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Armana%20no%20Kiseki%20%28Japan%29.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1PqO2TAsdIbFu-bHz577--tfcADmJ_S--/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Armana no Kiseki (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Armana%20no%20Kiseki%20%28Japan%29.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1hFlCJKinKrFPj77ONStMA8UupvJ1yw8q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Armana no Kiseki T+Eng v1 DvD Translations",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1BdqcRzE2ZAqSVbGkyeVCPd5es95Q2Lsh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aspic - Majaou no Noroi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Aspic%20-%20Majaou%20no%20Noroi%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1cpVKQMg6JUJ7rkh1PtbOl3Mm2iiiQygE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Backgammon (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Backgammon%20%28Japan%29.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1trAb2g0MFyyGFwuYUGxpJiL1AnCLPa2M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bakutoushi Patton-kun (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bakutoushi%20Patton-kun%20%28Japan%29.png",
    size: "44 KB",
    link1: "https://drive.google.com/file/d/1FOmUl6J88_ugHsmngSZT-sy6kzv7HfqQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Baseball (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Baseball%20%28Japan%29.png",
    size: "17 KB",
    link1: "https://drive.google.com/file/d/1NNMXlHikadPb8av64U9noK43-pO66BdW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Big Challenge! Dogfight Spirit (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Big%20Challenge%21%20Dogfight%20Spirit%20%28Japan%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1EYCZQxD5OX0oQdEqb9lFh3J-wZvJU21M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Big Challenge! Go! Go! Bowling (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Big%20Challenge%21%20Go%21%20Go%21%20Bowling%20%28Japan%29.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/1NLSaOPPrctrNySzrGxj122d9lIqEnQhF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Big Challenge! Gun Fighter (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Big%20Challenge%21%20Gun%20Fighter%20%28Japan%29.png",
    size: "43 KB",
    link1: "https://drive.google.com/file/d/1z9VgM6Uqiyp1Z1TTtua-aK2c4rARLUAn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Big Challenge! Juudou Senshuken (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Big%20Challenge%21%20Juudou%20Senshuken%20%28Japan%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1TndDhmdy3QEnQoT43LRHl000DEjaRTLs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Big Challenge! Juudou Senshuken (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Big%20Challenge%21%20Juudou%20Senshuken%20%28Japan%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1FyY2JKynzj2yv6T13d8at-jMMgnnkK1x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bio Miracle Bokutte Upa (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bio%20Miracle%20Bokutte%20Upa%20%28Japan%29.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/1Kjv0EGGPxzE9zatWZAYB1JsxRPbJan5i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Alien Battle (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Alien%20Battle%20%28Japan%29%20%28Unl%29.png",
    size: "36 KB",
    link1: "https://drive.google.com/file/d/1YrZaoHr1e9GPyCT3uU_MLlTERpWdonej/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Control (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Control%20%28Japan%29%20%28Unl%29.png",
    size: "27 KB",
    link1: "https://drive.google.com/file/d/1a8pB-l83D_vghLaCDCeHfqSQ0pSTJ35E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Hanafuda Club Vol.1 - Oichokabu Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Hanafuda%20Club%20Vol.1%20-%20Oichokabu%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "47 KB",
    link1: "https://drive.google.com/file/d/1LOQzlf5KdMnWvKr1oKxHliv8PGAjQQfi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Hanafuda Club Vol.2 - Koikoi Bakappana Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Hanafuda%20Club%20Vol.2%20-%20Koikoi%20Bakappana%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1LvUhkMi56mzTkIWvk9hzZMCPiK8_xLTn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Kachinuki Renju - Gomoku Narabe (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Kachinuki%20Renju%20-%20Gomoku%20Narabe%20%28Japan%29%20%28Unl%29.png",
    size: "40 KB",
    link1: "https://drive.google.com/file/d/1fcjiO2dlbncyVKQsj0JScKbMgoLa-u3-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Mahjong Club (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Mahjong%20Club%20%28Japan%29%20%28Unl%29.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1lZNGoQKL2EcqkLiBmdPyM7S_pyxRWNLL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo SF Alien Battle (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "36 KB",
    link1: "https://drive.google.com/file/d/1LS3wyXlIsTCWVW1nXllCHhkUgCFEJFNd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Sexy Derby (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Sexy%20Derby%20%28Japan%29%20%28Unl%29.png",
    size: "29 KB",
    link1: "https://drive.google.com/file/d/13QknQ335QkLsn_n_J0EAN6KkwcoKk8L7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Sexy Derby (Japan) (Unl)  (~Pretty Girl's Sexy Derby)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Sexy%20Derby%20%28Japan%29%20%28Unl%29.png",
    size: "30 KB",
    link1: "https://drive.google.com/file/d/1fF4L72cl_16BUl1ZAhHy11sepGmotD4K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Sexy Puzzle (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Sexy%20Puzzle%20%28Japan%29%20%28Unl%29.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1xOOOnErY3UINTAmNKh8D6sPFluU0ASnK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Sexy Slot (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Sexy%20Slot%20%28Japan%29%20%28Unl%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1D2cLXxqa1BWgkZ_WRXDgVgVug5N3hVXq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Shashinkan - Moving School (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Shashinkan%20-%20Moving%20School%20%28Japan%29%20%28Unl%29.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1ilmZb_zCFewX57TtsFh-K_2wca3D9Nec/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Shashinkan - Studio Cut (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bishoujo%20Shashinkan%20-%20Studio%20Cut%20%28Japan%29%20%28Unl%29.png",
    size: "30 KB",
    link1: "https://drive.google.com/file/d/1J6FUryMAIk_OGLncaK4bHiuO4-0M9wP5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bodycon Quest I - Abakareshi Musume Tachi (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bodycon%20Quest%20I%20-%20Abakareshi%20Musume%20Tachi%20%28Japan%29%20%28Disk%201%29%20%28Unl%29.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/11vIS6YfXRDR2qDXfq4XnVuVJ-w6bCkfI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bodycon Quest I - Abakareshi Musumetachi T+Eng v1 DvD Translations",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1knICNZGVHKaMr1YBSp5rp3E2377f0n_Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomber Man (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bomber%20Man%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/15-Xiw2jVqFirn5zv_i058inV7oTdtTCS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Breeder (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Breeder%20%28Japan%29%20%5Bb%5D.png",
    size: "31 KB",
    link1: "https://drive.google.com/file/d/1Pqd7OoR90_JXZI3-Zkz3mPm_ws_YfSAC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Breeder English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "31 KB",
    link1: "https://drive.google.com/file/d/1BxQWAmliNPvMySIQbMX6gn8_Cg3UXSkw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubble Bobble (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Bubble%20Bobble%20%28Japan%29.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1--y7ip3F9HabPU_wL8LZMqWQ6TSPnMK4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BurgerTime (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/BurgerTime%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "15 KB",
    link1: "https://drive.google.com/file/d/1sGPeQvTsM7f4DQLegveV_zNkuwrexWQt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Casino de Pink (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Casino%20de%20Pink%20%28Japan%29%20%28Unl%29%20%5Bb%5D.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/19FRfwyFqMUsGM7gPNCShvBXZwInhxjqy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chitei Tairiku Ordola (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Chitei%20Tairiku%20Ordola%20%28Japan%29.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1KEPVaoOFcvPKAUEVy__mMBgIsRzkQ_P5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chitei Tairiku Orudoora (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1IQehrXgghv12vbN7pX97nCm9na6UW2Gg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "City Connection (1989)(Hangsing)(J)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "28 KB",
    link1: "https://drive.google.com/file/d/1EfLPweiBp-JWVnOTTnZv-PIWjtGiH1yr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cleopatra no Mahou English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1vsq9MSYhfJp6A5_rMJFANWs0I6wruZOd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clu Clu Land (Japan) (En) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Clu%20Clu%20Land%20%28Japan%29%20%28En%29%20%28Disk%20Writer%29.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1kYbpvLf5VDkAWC5W8Duq9K3Vy4nj6CzM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cocona World (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Cocona%20World%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1u4JgJyjBHIJkLbI4x9iwz8o_CtDj7WiK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Comic Sakka Series Touma Senki #1 - Mashoujo Gakuen Evil (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Comic%20Sakka%20Series%20Touma%20Senki%20%231%20-%20Mashoujo%20Gakuen%20Evil%20%28Japan%29%20%28Unl%29.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/1ESwc6VKkuWeE-7d1gNcVI-5jsBi8KoEt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Comic Sakka Series Touma Senki #2 - Mermaid no Gyakushuu (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Comic%20Sakka%20Series%20Touma%20Senki%20%232%20-%20Mermaid%20no%20Gyakushuu%20%28Japan%29%20%28Unl%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1LRsGNNyHiPlba0gDzWvp-CQm3H8iNjcF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Comic Sakka Series Touma Senki #3 - Ryuujin Sensei Kikiippatsu (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Comic%20Sakka%20Series%20Touma%20Senki%20%233%20-%20Ryuujin%20Sensei%20Kikiippatsu%20%28Japan%29%20%28Unl%29.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1Z7pYZ_uMCStN-WGE3t-KidD9h_nU_pMt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Comic Sakka Series Touma Senki #4 - Tenkuu Ryuumaou Fukkatsu (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Comic%20Sakka%20Series%20Touma%20Senki%20%234%20-%20Tenkuu%20Ryuumaou%20Fukkatsu%20%28Japan%29%20%28Unl%29.png",
    size: "31 KB",
    link1: "https://drive.google.com/file/d/14DW-3bouQY-SYXGJqWWh6bTDUykuU46-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Comic Sakka Series Touma Senki #5 - Youjuu Rudo no Chousen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Comic%20Sakka%20Series%20Touma%20Senki%20%235%20-%20Youjuu%20Rudo%20no%20Chousen%20%28Japan%29%20%28Unl%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1Ywv2GNMwHyu7lkWwODYBdHITnJa7Q_mP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dandy English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1pRkfe1AgYfRqicq4w87FQbE-nJaVTw16/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Date de Blackjack (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Date%20de%20Blackjack%20%28Japan%29%20%28Unl%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1y3QKMeOBtrXoGPs9cMSw0_OMKjaljG4d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dead Zone English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/176-WFwg5jg_pWdAguqo5uyzvoIfMdrgH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Dungeon - Madou Senki (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/14H12jH6USB81YC8pPhmv7lXyIwOUThEp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Dungeon - Madou Senki (Japan)  (~Deep Dungeon - The Heretic War)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1VICWRa-pfmIlxtml8wR6h9BFQpaFG7d2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Dungeon II - Yuushi no Monshou (Japan) (v1.1)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1XbWGX51FJmKiBhnQz4FJIYcUFA0jar5e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Dungeon Yuushi no Monshou (English Patched)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1W2tFsXESx4QjdBs1VJDr0tTNRS0r9aWJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dig Dug (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Dig%20Dug%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1vXTV9TKLSPkmKlt3MFbLjl8DAaPzuTVq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dig Dug II (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Dig%20Dug%20II%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "26 KB",
    link1: "https://drive.google.com/file/d/1UvoF3EuAfEOLmD4yJCCAP6vmiZu-SGVk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dirty Pair - Project Eden (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Dirty%20Pair%20-%20Project%20Eden%20%28Japan%29%20%28Rev%201%29%20%28Disk%20Writer%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1Pxz485gfe-t0IKt1SmV35zRknsaDt4ik/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dirty Pair - Project Eden (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Dirty%20Pair%20-%20Project%20Eden%20%28Japan%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1QnnhEr9flhOXkwx4a-m5NAcQmWTOmn5E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dirty Pair - Project Eden (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Dirty%20Pair%20-%20Project%20Eden%20%28Japan%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1YVpUezWUi3zDGTP8Ievbaq_Qrq0whLuC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disk Hacker - Version 1.3 (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "2 KB",
    link1: "https://drive.google.com/file/d/1Ec08Iifc_Z9TkzN_TETmmMWImlWqKIoh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disk Hacker II - Copy Plus 3 (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "11 KB",
    link1: "https://drive.google.com/file/d/1KiaTdhor5-WsjDP8MJ_jLuEpbPseB02w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disk Keeper (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "2 KB",
    link1: "https://drive.google.com/file/d/1xN3nSCe6cKvQJkAdRE03QJdBQt3ucKJC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Donkey%20Kong%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1ZQrRT-XczM4NN3A-XbwyudwhQKy5XN-8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Jr. (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Donkey%20Kong%20Jr.%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "17 KB",
    link1: "https://drive.google.com/file/d/1P4I6qjU42rUpyapH4bZJRmFPyPMr6jfv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doremikko (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Doremikko%20%28Japan%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1r-3XIkze1UTwlXbIOknE__4g2PbAU9vU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dot E Creator Contest (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "14 KB",
    link1: "https://drive.google.com/file/d/1Vs1Wmy_3Y96kxAw4dOZlf3xCozOBVJi5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dr. Chaos - Jigoku no Tobira (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Dr.%20Chaos%20-%20Jigoku%20no%20Tobira%20%28Japan%29.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/1JDXjSWifTnjB9bIr_IgaVmHaCSrLPzoR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dr. Chaos - Jigoku no Tobira (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Dr.%20Chaos%20-%20Jigoku%20no%20Tobira%20%28Japan%29.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/1QvnXVDjSrx2e0G-_ZsdEe6RGQZAkW5Xx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dracula II - Noroi no Fuuin (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Dracula%20II%20-%20Noroi%20no%20Fuuin%20%28Japan%29.png",
    size: "72 KB",
    link1: "https://drive.google.com/file/d/1Zm8ELymFAz0HRx0-gQchn3ACqMtbh1bQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Druid - Kyoufu no Tobira (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Druid%20-%20Kyoufu%20no%20Tobira%20%28Japan%29.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1bf5ZfIiHG8GsyTsMAzHn53Xxc6F3jo6I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Egger Land (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Egger%20Land%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1L4MAN4l97GQpkOm0HjY72oP301Zrkv95/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Egger Land - Souzou e no Tabidachi (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Egger%20Land%20-%20Souzou%20e%20no%20Tabidachi%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "40 KB",
    link1: "https://drive.google.com/file/d/1fyazIsr5EqhDIzCsXRN2xKRIN_046cg9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Eggerland (1987)(Hal Laboratory)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1h3Ft7wTfbSNM9X-6jDNk6boI_oq9ClZR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Electrician (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Electrician%20%28Japan%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1LYwJO7_IBaH8B3PpKcu1m--Sd1bOCLr5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Electrician (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Electrician%20%28Japan%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/13NI1WuZ4ec8N0VzZUEYy9LFD_eywjhVV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Emi-chan no Moero Yakyuuken! (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Emi-chan%20no%20Moero%20Yakyuuken%21%20%28Japan%29%20%28Unl%29.png",
    size: "20 KB",
    link1: "https://drive.google.com/file/d/1Jm7Ac0o1JI8-EhBJxZh8z96-TsZ9OEte/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Esper Dream (Japan) (v1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Esper%20Dream%20%28Japan%29%20%28Rev%201%29%20%283DS%20Virtual%20Console%29.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/15UPrFOlgmOHG0fekBR0Nq3DqcwZrbQLa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Esper Dream (Japan) (v1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Esper%20Dream%20%28Japan%29%20%28Rev%201%29%20%283DS%20Virtual%20Console%29.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1KWnn__cKsPR51UDS32WZk5dx4ribS_hk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Exciting Baseball (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Exciting%20Baseball%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1aOTGWrPRiLz-NYeA81BPPgDe6SNibqaP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Exciting Basket (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Exciting%20Basket%20%28Japan%29.png",
    size: "47 KB",
    link1: "https://drive.google.com/file/d/1CMs3LLAa_g94CxDurIDJmV7g9bX1Ckgi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Exciting Billiard (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Exciting%20Billiard%20%28Japan%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/18PX7z5q88Ue_8yqtb08Uw57KihMvqll_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Exciting Soccer - Konami Cup (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Exciting%20Soccer%20-%20Konami%20Cup%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/17mL8OJV6rpJqpMoJlYAz-p6NwGj5khix/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Exciting Soccer - Konami Cup (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Exciting%20Soccer%20-%20Konami%20Cup%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/13ueEVs3Uajf5V1xvPizAxSBBNzEQS_hF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FMC Disk Card Checker Ver 1.3 (Japan) (Rev 2) (Developer Card)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "6 KB",
    link1: "https://drive.google.com/file/d/1n0uNUz1XdL2Uj3RUUUjHgKOdamNaey7M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FMC Disk Card Checker Ver 1.3 (Japan) (v1.2) (Developer Card)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "6 KB",
    link1: "https://drive.google.com/file/d/19VzR-wqCryVVQNpgsmZ7XXl_B5AEYLez/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fairy Pinball - Yousei Tachi no Pinball (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Fairy%20Pinball%20-%20Yousei%20Tachi%20no%20Pinball%20%28Japan%29%20%28Unl%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1JkQEykf73gMzVG9PEuFUhnV0LboAEkcI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fairytale (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Fairytale%20%28Japan%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1TuHRZnD_Vfu7JkDTvzBZwEJeqjPjUoYw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Falsion (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Falsion%20%28Japan%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1Q-mmIwaJ1nGZRltBakQGqrSE8c0vscGF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Falsion (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Falsion%20%28Japan%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1SSs1bUgnZ34_a_pd_0tqNU5cT8_IFsUm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Grand Prix - F1 Race - English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1F6IbuZDI5TA2bl_gZEZKHFZiyjwGe_8u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Grand Prix II - 3D Hot Rally (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famicom%20Grand%20Prix%20II%20-%203D%20Hot%20Rally%20%28Japan%29%20%28DV%205%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1Q6Dxbx-9_aw0DycUNOrqVuY9g7rYhOMT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Grand Prix II - 3D Hot Rally (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famicom%20Grand%20Prix%20II%20-%203D%20Hot%20Rally%20%28Japan%29%20%28DV%205%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1PzQ8NAooIZYSomjcTxYmWrAHRew3uq14/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Grand Prix II - 3D Hot Rally English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1yOtoGbmTSVQeiHXPPc2d6VZY9HH5o8_e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Mukashibanashi - Shin Onigashima - Kouhen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famicom%20Mukashibanashi%20-%20Shin%20Onigashima%20-%20Kouhen%20%28Japan%29.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1lAMb9vcILcY-S00yiZFTJR-yv1XjGxx6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Mukashibanashi - Shin Onigashima - Zenpen (Japan) (DV 2) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famicom%20Mukashibanashi%20-%20Shin%20Onigashima%20-%20Zenpen%20%28Japan%29%20%28DV%201%29%20%5Bb%5D.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1SEaV_OlUK3RcghTVrwUa3NrqTqSAIFdD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Mukashibanashi - Yuuyuuki - Kouhen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famicom%20Mukashibanashi%20-%20Yuuyuuki%20-%20Kouhen%20%28Japan%29.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1I4m0RNyu6ZePuPvTG6C9kTRxoqLFercx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Mukashibanashi - Yuuyuuki - Zenpen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famicom%20Mukashibanashi%20-%20Yuuyuuki%20-%20Zenpen%20%28Japan%29.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1dDqrivH18KvYuD8r6ot453X2RIUGbyK2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Tantei Kurabu - Kieta Koukeisha (1988)(Nintendo)(J)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1ex7njGCLrIozcLVr_lhGJ1Z5lhWldb9p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Tantei Kurabu Part II - Ushiro ni Tatsu Shoujo (1989)(Nintendo)(J)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "134 KB",
    link1: "https://drive.google.com/file/d/1GfeO5MHefJySv7LjdZ3swLXn1EwLYP80/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Composer (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Family%20Composer%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/1-3XO4enBGKKptluvOmefa-y5hqRaev85/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Computer Golf Japan Course (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1Ow6PF0SHWvuxoVH5SaqYMbxOPQYmPnIH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Computer Golf Special Course (Japan) (Prize Card)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1Ee9cOed1V6UcV14Xr9nfQPMHGmAsoklX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Computer Golf Tournament - Japan Course (Japan) (Prize Card)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1qlvj5KeowSyjKgca3ltZGlhI67CpfhPB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Computer Golf U.S. Course (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1DQbhGnTL_9D6aiOS-pA2uA9wRTDuxcGH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Computer Othello (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1-qSa0INH8db6TtWJm0kUhnHJfWR1dgZb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famimaga Disk Vol. 1 - Hong Kong (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famimaga%20Disk%20Vol.%201%20-%20Hong%20Kong%20%28Japan%29.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/103uZVwwrRaYMDi9N6HqT6X6L1KE-kgCf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famimaga Disk Vol. 2 - Panic Space (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famimaga%20Disk%20Vol.%202%20-%20Panic%20Space%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "28 KB",
    link1: "https://drive.google.com/file/d/11QTkl9my6l8kVriOwuV9FRAQ8GWKjlG-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famimaga Disk Vol. 3 - All 1 (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famimaga%20Disk%20Vol.%203%20-%20All%201%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "26 KB",
    link1: "https://drive.google.com/file/d/1Tz77q3MB4WxJ9lvBLi2_0v7JFNv2aDPi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famimaga Disk Vol. 4 - Clox (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famimaga%20Disk%20Vol.%204%20-%20Clox%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "27 KB",
    link1: "https://drive.google.com/file/d/12dDi6BBeXixqjpJwKcEhFhWdP2TipXrM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famimaga Disk Vol. 5 - Puyo Puyo (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famimaga%20Disk%20Vol.%205%20-%20Puyo%20Puyo%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1089n8DEvc198AuekrJOs6ie5fa8K0sGB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famimaga Disk Vol. 6 - Janken Disk Jou (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Famimaga%20Disk%20Vol.%206%20-%20Janken%20Disk%20Jou%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1o4jygnpN00wi2qfnFDr0S0eO7RZu_Iq0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Command - Akai Yousai (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Final%20Command%20-%20Akai%20Yousai%20%28Japan%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1m5GXrSTvSy7C29-P4x1v8wr9-kAz0QBE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Commando - Akai Yousai (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1P2pMAFxZiV5OsTEdnN0BIhr4p8HVlszK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire Bam (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Fire%20Bam%20%28Japan%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1WyF8oBCeXSVhxnzKy4Dpi8depElRcQng/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire Rock (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Fire%20Rock%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/11IYZQvANMwqLKBCicpj8In2y9d3SDjsz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong - Bishoujo Connection",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1waIKm5mBzLQ9SHgudNUi7o-1VKs6dKUw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong - Dai H Taikai",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/16jNqXc4xWYoMjkRCWnplmqklq2tMcopX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong - Daitan H na Hirusagari",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "36 KB",
    link1: "https://drive.google.com/file/d/1GLVTITJ-3HLKxwny5uqY-iKBtztVWA7z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong - Tokimeki Gals",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1lWu-imknMTL4zrgwphtluqhibPMxMsS2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong - Tottemo H na Gogo",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/13uKC65QPvdQJ5QWMHZzLe8WUhUq6AD8E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong - Yonin no Tenshi Tachi",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1pGJHiHuLEBpSm1HjUzSg9ZF7ppdTzd6y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong - Yonin to Dai H Taikai",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1YflQc1-fuDTiEJNNIF19KNqsJNTPHKvu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong 1 Disk #1 - Dai H Taikai (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1Uz6bXQ3zUUZuyEgBbRLwXPQiws127847/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong 2 Disk #2 - Tokimeki Gals (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1A96FaZEe8j_yzjZrG36j8EvpQ2Z7PNSy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong 2 Disk #3 - Yonin to Dai H Taikai (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1jqshVjrU_rCiCob171J8FWsnufthLVdQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong 3 Disk #4 - Yonin no Tenshi Tachi (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1WN6HoMqyR8RtgPGnirRgeARD50BOMsHz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong 3 Disk #5 - Tottemo H na Gogo (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/1J1zZJ9D6rCy8AA5K_TalpdZ3de0hk4tL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong 4 Disk #6 - Bishoujo Connection (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1LqlVG5jHHpiGym7udKUR2--7OFZm-Ygm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fruits Mahjong 4 Disk #7 - Daitan H na Hirusagari (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "36 KB",
    link1: "https://drive.google.com/file/d/17mK6qCkHJscor0j1qfMeFofA1d4FeXAU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fuuun Shourin Ken (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Fuuun%20Shourin%20Ken%20%28Japan%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1MJng0DrU03BVFc9Z9vfUU1EIx-Z859SJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fuuun Shourin Ken - Ankoku no Maou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Fuuun%20Shourin%20Ken%20-%20Ankoku%20no%20Maou%20%28Japan%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1QqtF-vf_P5DaoZ1mUsW4p3OAeoE1Ml2D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaga (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Galaga%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1_Q8-OOTVQstJZ9_HfjIw6OTpe_UIsYKY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaxian (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Galaxian%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "11 KB",
    link1: "https://drive.google.com/file/d/1QF6nTDUUCOyHSX2LijpH3-3yfHb4kuu9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaxian (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Galaxian%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "11 KB",
    link1: "https://drive.google.com/file/d/1Swchy9ZJwdzQnieKq8qmO9vfwLdg-Abd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gall Force - Eternal Story (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Gall%20Force%20-%20Eternal%20Story%20%28Japan%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1XpShCh7yON7OnV3rkwsimojZ2pDJk9po/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Tengoku (19xx)(Sofel)(J)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "47 KB",
    link1: "https://drive.google.com/file/d/1GWMKh7-WxJnHFnUCkm4A8q17J4ElKdfY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game no Tatsujin - Money Wars (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Game%20no%20Tatsujin%20-%20Money%20Wars%20%28Japan%29%20%28Unl%29.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/1suvv5fhssZnKMiUMSIQUmvymVes76223/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "German Tanteidan MarinGumi - Maruhi Jigomar Sousa File (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/German%20Tanteidan%20MarinGumi%20-%20Maruhi%20Jigomar%20Sousa%20File%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1xj0gsiDqCoOKV18dORcUzNfljcAzjuWq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ginga Denshou - Galaxy Odyssey (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ginga%20Denshou%20-%20Galaxy%20Odyssey%20%28Japan%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1a1pL8LREyxbE2-frsODtWT0xDPVyMvIO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GingaDenshouEnglish",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1OVdYaPtmBIZ6V6PLqrXxux8TTb16zPHd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gokuraku Yuugi - Game Tengoku (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Gokuraku%20Yuugi%20-%20Game%20Tengoku%20%28Japan%29.png",
    size: "47 KB",
    link1: "https://drive.google.com/file/d/1tchYnt5nuxCGPpOKgg2htuTqNOa8gCza/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Golf%20%28Japan%29%20%28Rev%201%29.png",
    size: "17 KB",
    link1: "https://drive.google.com/file/d/1toHryB_PwO5UryatjctQgCuttjewLrWH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf (Japan) (v1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Golf%20%28Japan%29%20%28Rev%201%29.png",
    size: "17 KB",
    link1: "https://drive.google.com/file/d/1L62ULkRMOYbQErQ9KwHKwnivPG6xJF-K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf - Japan Course (Japan) (Prize Card)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Golf%20-%20Japan%20Course%20%28Japan%29%20%28Prize%20Card%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1vIfE4Y9zZXkQSNfOLbMIohK8mcq6FeJE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf - Special Course (Japan) (Prize Card)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Golf%20-%20Special%20Course%20%28Japan%29%20%28Prize%20Card%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1OHODaeyUw0XNjc7mBsy8ZVoKx0owYMGH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf - US Course (Japan) (DV 2) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Golf%20-%20US%20Course%20%28Japan%29%20%28DV%202%29%20%28Disk%20Writer%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1oMnawieGZ2WU7pkvhQYNaPGDZe1lBLoi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf, The - Bishoujo Classic (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Golf%2C%20The%20-%20Bishoujo%20Classic%20%28Japan%29%20%28Unl%29.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1_swWEt8m_j1iTVLm5A2quUiOUfqHgcCG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Goonies (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Goonies%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1Ft0Or1NPs3eRvq6kVZg8J4niXkkUj6Vc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Graphic Editor Hokusai - Ver 1.2 (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/133n2Ae3IMmn-ZLT-SWh3hRFRbFmUWfg9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Green Beret (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Green%20Beret%20%28Japan%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1QGcSi-TgmCeHAwdcoXTqOKwjs5OJsNDh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Green Beret (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Green%20Beret%20%28Japan%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1eNZV-tcCCIARpU_pKte7sLZuXMOBxNfH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gun.Smoke (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Gun.Smoke%20%28Japan%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1NY3rQXluC_M4cCA4AQhJJxTHxP_7Fv9Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gyruss English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/16PZLz_eKu9sdD6wFjr_OL0cGHv92Zvly/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Halley Wars (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Halley%20Wars%20%28Japan%29.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1ai0jJQ_XKMnJCngonsYW2O4X9PWhRrWc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hao-kun no Fushigi na Tabi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Hao-kun%20no%20Fushigi%20na%20Tabi%20%28Japan%29.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1VIsv1O8eQF8LvzVs8gGFlLbb9sCeEjtz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hao-kun no Fushigi na Tabi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Hao-kun%20no%20Fushigi%20na%20Tabi%20%28Japan%29.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1phmF9ZNdd67zvMMQO-12gAD96OydNIiw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hayama Reiko no Date de Blackjack (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Hayama%20Reiko%20no%20Date%20de%20Blackjack%20%28Japan%29%20%28Unl%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1mmjyExu5pa30DWqAevR-zLxrzU4NcgQX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hikari Shinwa - Palthena no Kagami (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Hikari%20Shinwa%20-%20Palthena%20no%20Kagami%20%28Japan%29%20%28Rev%201%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1NBROMiem2B8cVNF421gCVdJ4GwuBfnAa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hikari Shinwa - Palthena no Kagami (Japan) (v1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Hikari%20Shinwa%20-%20Palthena%20no%20Kagami%20%28Japan%29%20%28Rev%201%29%20%28Virtual%20Console%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1Amm6WOWwzvSVmX1zK_b44LHB62mTe1oi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hikaru Genji - Roller Panic (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Hikaru%20Genji%20-%20Roller%20Panic%20%28Japan%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1MlW34KcPQS3Blm3c-ko_AessRCUZ6CT8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "I Am a Teacher - Super Mario no Sweater (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/I%20Am%20a%20Teacher%20-%20Super%20Mario%20no%20Sweater%20%28Japan%29.png",
    size: "31 KB",
    link1: "https://drive.google.com/file/d/12EePCsd8jFOSUbmomt14fH_A9sENQFwO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "I Am a Teacher - Teami no Kiso (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/I%20Am%20a%20Teacher%20-%20Teami%20no%20Kiso%20%28Japan%29.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1rNEbXcKeNYj3TyL1LRQjTmXWWlr4x0WA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ice Climber (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ice%20Climber%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "27 KB",
    link1: "https://drive.google.com/file/d/1QIUPTVQeIzxfHD8hI6Zm7zQKZtg98gy4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ice Climber (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ice%20Climber%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "27 KB",
    link1: "https://drive.google.com/file/d/1EDOPbFtKvo6DIatTwt-gQ1S6d5t_mIAs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ice Hockey (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ice%20Hockey%20%28Japan%29.png",
    size: "27 KB",
    link1: "https://drive.google.com/file/d/1z89Qp04vYUZvGjCsZaFoFKnqC5aRcgxo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Idol Hotline - Nakayama Miho no Tokimeki High School (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Idol%20Hotline%20-%20Nakayama%20Miho%20no%20Tokimeki%20High%20School%20%28Japan%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/19lhi8G98Bu4ZUdeanC167kLulBq3GSlP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Idol Hotline - Nakayama Miho no Tokimeki High School (Japan) (DV 10)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Idol%20Hotline%20-%20Nakayama%20Miho%20no%20Tokimeki%20High%20School%20%28Japan%29%20%28DV%2010%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1ZMQRhAVhI47DlswL2dvImIgL-JDt9SoG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Igo - Kyuu Roban Taikyoku (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Igo%20-%20Kyuu%20Roban%20Taikyoku%20%28Japan%29.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/11QXOZSELs-xZu4N5-6y9JyixBV0vJ24S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ishido English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1mGKo7Db17_yKl4nzq1sv_t5IfGQ6NG0g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaaman Tanteidan - Matonarikumi (1988)(Bandai)(J)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/18N6Z59v2LRZanE5PNOkC1nG6Ov0H71-Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jikai Shounen Met Mag (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Jikai%20Shounen%20Met%20Mag%20%28Japan%29.png",
    size: "43 KB",
    link1: "https://drive.google.com/file/d/1QIlt4fSZvfPsxwAeQrI7Gu1dzHmDW3Jg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jikai Shounen Met Mag (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Jikai%20Shounen%20Met%20Mag%20%28Japan%29.png",
    size: "43 KB",
    link1: "https://drive.google.com/file/d/1FVgGKAWn2hS2X9MLNXr8IrbM4OW8iA4n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jingorou (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1hIyIiBe4eBsT8hC8HDrXeZ9J_bYA-F-Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kalin no Tsurugi",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kalin%20no%20Tsurugi%20%28Japan%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1YaAfJtwczZyDXYXY--BcKIPPclaxW3wr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kalin no Tsurugi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kalin%20no%20Tsurugi%20%28Japan%29.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1tDp_4mGlqJBiG9KZn5PepqfNN2DGFAcV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kamen Rider Black - Taiketsu Shadow Moon (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kamen%20Rider%20Black%20-%20Taiketsu%20Shadow%20Moon%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1QRoMWvgBTfPoWPc648itURwb6YnDkaLH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kamen Rider Black - Taiketsu Shadow Moon (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kamen%20Rider%20Black%20-%20Taiketsu%20Shadow%20Moon%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1j0Fg_UN_x0mtEY5Ram65kqN1shwe2y1r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Karate Champ (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Karate%20Champ%20%28Japan%29.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1IxpPzwqgy-4mkCH8bMLcsLvGuNz70Wr4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kattobi! Douji (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kattobi%21%20Douji%20%28Japan%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1JmRP_X0TRA_1ttyD4JAMqdLoU-GBPnPD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kick Challenger - Air Foot - Yasai no Kuni no Ashi Senshi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kick%20Challenger%20-%20Air%20Foot%20-%20Yasai%20no%20Kuni%20no%20Ashi%20Senshi%20%28Japan%29.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/19-ApuUF6RVwBblYZZReyQJN74ulVpKwy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kick Challenger Air Foot - Yasai no Kuni no Ashi Senshi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kick%20Challenger%20-%20Air%20Foot%20-%20Yasai%20no%20Kuni%20no%20Ashi%20Senshi%20%28Japan%29.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1tGHkM3md8PTwxbZow73dV1LbcfFtWhFY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kick and Run (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kick%20and%20Run%20%28Japan%29.png",
    size: "42 KB",
    link1: "https://drive.google.com/file/d/1LAgtmpCfvRdELWyyyDGbVvTIuRucsvRD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kieta Princess (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kieta%20Princess%20%28Japan%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1kqN_sexvphQpqGoP6R0E3xfWvMMNz_tY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kiki Kaikai - Dotou Hen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kiki%20Kaikai%20-%20Dotou%20Hen%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/12ghH140A0yVRXgN-iLxaEm5vzgk8VPzP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kind Gal's (Japan) (Disk 1) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kind%20Gal%27s%20%28Japan%29%20%28Disk%201%29%20%28Unl%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/10OSFT0-R_lWMf-SLxhRSMEwLyCXVjd_X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kind Gal's (Japan) (Disk 2) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kind%20Gal%27s%20%28Japan%29%20%28Disk%202%29%20%28Unl%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1rMq0dbAM0Q8NpcECFL0xXG541y2j24iv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kind Gal's (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kind%20Gal%27s%20%28Japan%29%20%28Disk%201%29%20%28Unl%29.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1H1uH2XuvXFhJ5D89hkiMCensVoQcLNfF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kineko - Kinetic Connection - The Monitor Puzzle",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1UEPKez8R_S8PjtWlMoAL4oPGE59X0-LE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kinnikuman - Kinnikusei Oui Soudatsusen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kinnikuman%20-%20Kinnikusei%20Oui%20Soudatsusen%20%28Japan%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1Y4ZFuPZqboG0B2Ok_TY22_egYLapQsf5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knight Lore - Majou no Ookami Otoko (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Knight%20Lore%20-%20Majou%20no%20Ookami%20Otoko%20%28Japan%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1QSfQwLg0ddBn0O1jHwqPgLTBulYUniDP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knight Lore English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1igJDhMxwd6HOF1aZlai1UIF1hwBuYVoL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knight Move (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Knight%20Move%20%28Japan%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1hF3Vt53Qu2M_mZI2RTJ7CMj9DA9gaiTQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knight Move (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Knight%20Move%20%28Japan%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1xiVEf3E9TL10C-7c774JXwM8j5hj1rMt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kobayashi Hitomi Shocking Tennis (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kobayashi%20Hitomi%20Shocking%20Tennis%20%28Japan%29%20%28Unl%29.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/1903Y9gzZ6YeJSLb5KuP2SiC0TrKy2j2S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kobayashi Hitomi no Hold Up (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kobayashi%20Hitomi%20no%20Hold%20Up%20%28Japan%29%20%28Unl%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1KCJTWho8lAF9eVpuCDsVronVsEZxsTwZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Konamic Ice Hockey (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Konamic%20Ice%20Hockey%20%28Japan%29.png",
    size: "47 KB",
    link1: "https://drive.google.com/file/d/1oi9KOVlvq-8oHjsBMW55Bib-2M3Rapb4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Konamic Tennis (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Konamic%20Tennis%20%28Japan%29.png",
    size: "47 KB",
    link1: "https://drive.google.com/file/d/1VqwIfkbHdt8Xp0ObJz1kHpm-icWOw580/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Koneko Monogatari - The Adventures of Chatran (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Koneko%20Monogatari%20-%20The%20Adventures%20of%20Chatran%20%28Japan%29.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/1q2V_xExAUobGgzXtwgA8URFB7r-36cua/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Koneko Monogatari - The Adventures of Chatran (Japan) (Sample)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Koneko%20Monogatari%20-%20The%20Adventures%20of%20Chatran%20%28Japan%29%20%28Sample%29.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/1TENdvRc5bNCRhn9eubidAtrppSNvijIp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kosodate Gokko (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "10 KB",
    link1: "https://drive.google.com/file/d/1bA1SAvwGfPnCG9isKIKzkzCVB_OJ3Xxg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Link no Bouken - The Legend of Zelda 2 (ESP-Noishe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Link%20no%20Bouken%20-%20The%20Legend%20of%20Zelda%202%20%28Japan%29%20%28Rev%201%29%20%28Collector%27s%20Edition%29.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1QXWVgMsdEVtGbXyR-MPS3tVJvYvJeBFU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Link no Bouken - The Legend of Zelda 2 (ESP-jackic)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Link%20no%20Bouken%20-%20The%20Legend%20of%20Zelda%202%20%28Japan%29%20%28Rev%201%29%20%28Collector%27s%20Edition%29.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1QTSUv9_hSRw3AbYxQSB-YADVXdRnOdJ_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Link no Bouken - The Legend of Zelda 2 (English v2.33)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Link%20no%20Bouken%20-%20The%20Legend%20of%20Zelda%202%20%28Japan%29%20%28Rev%201%29%20%28Collector%27s%20Edition%29.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1LLWNQglNgU7maMfzu7T7m1AxOiK8uUuO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Link no Bouken - The Legend of Zelda 2 (Japan) (v1.0)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Link%20no%20Bouken%20-%20The%20Legend%20of%20Zelda%202%20%28Japan%29%20%28Rev%201%29%20%28Collector%27s%20Edition%29.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1FN2wRwxmjTHwWoqYt7lM-JRwZeNisTTI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Link no Bouken - The Legend of Zelda 2 (Japan) (v1.0) English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1Fjgz4oZk6eUzLSA0mVNCq3sgHJoQy9zH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Link no Bouken - The Legend of Zelda 2 (Japan) (v1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Link%20no%20Bouken%20-%20The%20Legend%20of%20Zelda%202%20%28Japan%29%20%28Rev%201%29%20%28Collector%27s%20Edition%29.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1ia2jdR-ZW2ORgnMXd7BcbnupJ76ndZCI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lipstick #.1 - Lolita Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Lipstick%20%231%20-%20Lolita%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "29 KB",
    link1: "https://drive.google.com/file/d/1_PFiCSJ0ikTyU_pE6lWOPtiArF2VPL16/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lipstick #.2 - Joshi Gakusei Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Lipstick%20%232%20-%20Joshi%20Gakusei%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1b8_QT8wv9a16424VZXb9i5CD2wDDyReG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lipstick #.3 - OL Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Lipstick%20%233%20-%20OL%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "28 KB",
    link1: "https://drive.google.com/file/d/1uwmYcngq2OtqyIk5Pl_P8lmXRY-bx938/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lipstick #.4 - Hakui no Tenshi Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Lipstick%20%234%20-%20Hakui%20no%20Tenshi%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1OqROPax51jkyQfvozsXX7PAEy5mFuq7o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lipstick #.5 - Stewardess Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Lipstick%20%235%20-%20Stewardess%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1WQw9vBxQ2OEk32lpoUf7KCXAOyee--QR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lipstick #1 - Lolita Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Lipstick%20%231%20-%20Lolita%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "29 KB",
    link1: "https://drive.google.com/file/d/1juVDA71aSh0YgTRpe-5_qORjfvV6tpnB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lipstick #2 - Joshi Gakusei Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Lipstick%20%232%20-%20Joshi%20Gakusei%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1Gz-610tcB1yTLbxNJfo5A560-9XdJj8U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lipstick #3 - OL Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Lipstick%20%233%20-%20OL%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1_OOktXXWZiig7yNwkE2ZTtHZ_UnGnxpR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lipstick #4 - Hakui no Tenshi Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Lipstick%20%234%20-%20Hakui%20no%20Tenshi%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1IK8YU8SETgdyBHnYtjTfLDnoS7YATIel/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lipstick #5 - Stewardess Hen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Lipstick%20%235%20-%20Stewardess%20Hen%20%28Japan%29%20%28Unl%29.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1spU9J1Mlxw4ZLQLlpk2nbIoX0-6Su5RW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lutter T+Eng v1.0 Mute",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1F9obeB62zezGIaVgMG-6XMvsDUzFRBBg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maerchen Veil (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Maerchen%20Veil%20%28Japan%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1hT5GCOyLYh0ATKUwYqzUe4FV03YGn8CA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magma Project - Hacker (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Magma%20Project%20-%20Hacker%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1A9rZuwEy1Kv4x-9jZxVK_-ZyM6S80cOP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Mahjong%20%28Japan%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1Dh0VzL6sDu8QkzxBA3ZKMxWCoUIKebkf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Goraku - Bishoujo Meijinsen (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Mahjong%20Goraku%20-%20Bishoujo%20Meijinsen%20%28Japan%29%20%28Unl%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1zvw8tLhKcrTiikBSs4_sE2MkrCHrGba5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Kazoku (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Mahjong%20Kazoku%20%28Japan%29.png",
    size: "43 KB",
    link1: "https://drive.google.com/file/d/1nAtIw1XRmP7QX6I-8Z3qv4KscBiVyZZW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Matou no Houkai - The Hero of Babel (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Matou%20no%20Houkai%20-%20The%20Hero%20of%20Babel%20%28Japan%29.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1zTWtGDDkvKmOmN7gepUXAVfmS4-WTUiv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meikyuu Jiin Dababa (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Meikyuu%20Jiin%20Dababa%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1QbsZwbHQkHcL5Jd1J9De1tjgfQuRsLwd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meikyuu Jiin Dababa (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Meikyuu%20Jiin%20Dababa%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1vhppz9gMXTLtQ5BbPx-jsIBllF70V7dF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meikyuu Jiin Dababa English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1tZg3F_fux5oOyoWmXPwdw2VhmI3jC9ct/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metroid (ESP) (v1.2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Metroid%20%28Japan%29%20%28Rev%201%29.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1Qdt50UO7df_IC1qctpxLP4T3L72Fs-Cj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metroid (Japan) (v1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Metroid%20%28Japan%29%20%28Rev%201%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1qzLon-H9Xq1M6ek7ooKAqTFNjjL3DDXr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metroid (Japan) (v1.2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Metroid%20%28Japan%29%20%28Rev%201%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1Qj-gNaWR7jGZJkl1n_IGDZTi4GJJ5F81/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metroid (Japan) (v1.2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Metroid%20%28Japan%29%20%28Rev%201%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1rV8xbR-W3v19dp9j2axjaFeEAOD-nXJ-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metroid v1.02 (1986)(Nintendo)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1wwXqbGI2nqMxAB8PNIdDqlS2-X5nOyEX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Michael English Daibouken (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Michael%20English%20Daibouken%20%28Japan%29.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1qeo5NJPjScf5mnzSbXNjaU7NmXhfLebL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Michael English Daibouken (Japan) (Sample)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Michael%20English%20Daibouken%20%28Japan%29%20%28Sample%29.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/11oFcBOsCU8yrTV8lvDdP5-f-8J7Uc-n7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moero TwinBee - Cinnamon Hakase wo Sukue! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Moero%20TwinBee%20-%20Cinnamon%20Hakase%20wo%20Sukue%21%20%28Japan%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1jVToLQX25kCwUJRCqrzh2OGGaeDGIDjY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moero Yakyuuken (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1Y1f20I6VEqrqwFQOO51qPSe9aVtT-Tfi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monitor Puzzle Kineko, The - Kinetic Connection (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Monitor%20Puzzle%20Kineko%2C%20The%20-%20Kinetic%20Connection%20%28Japan%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1F3UwwOA7fbxLz6-MkqZjh92kuzAVg8DM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monitor Puzzle Kineko, The - Kinetic Connection II (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Monitor%20Puzzle%20Kineko%2C%20The%20-%20Kinetic%20Connection%20II%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "46 KB",
    link1: "https://drive.google.com/file/d/1K99eQDdXIdttzyNGahYZyt-MoDoHtgOt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monty on the Run - Monty no Doki Doki Dai Dassou (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Monty%20on%20the%20Run%20-%20Monty%20no%20Doki%20Doki%20Dai%20Dassou%20%28Japan%29.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1QrX5iJpa9Oxb09oONrWPINMsYnM10wtr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monty on the Run - Monty no Doki Doki Dai Dassou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Monty%20on%20the%20Run%20-%20Monty%20no%20Doki%20Doki%20Dai%20Dassou%20%28Japan%29.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1hZjEd1G5CU2TGgdrw6uQ50wT-CrJUt2A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monty on the Run - Monty no Doki Doki Dai Dassou (Japan) (Eng 1.0 by Stardust)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Monty%20on%20the%20Run%20-%20Monty%20no%20Doki%20Doki%20Dai%20Dassou%20%28Japan%29.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/16nXn-9miD8ral8vYsU_9sWMNTQkS_3i7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moonball Magic (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Moonball%20Magic%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/1esx8cUsvVkBSM0MKKZUelHHWbCg53guu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Namida no Soukoban Special (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Namida%20no%20Soukoban%20Special%20%28Japan%29.png",
    size: "27 KB",
    link1: "https://drive.google.com/file/d/1pVRgaIY1DWIYFk0bxnZ4URGs3KARsdVM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Namida no Soukoban Special (Japan)  (~Boxxle - Warehouse Evening of Tears)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Namida%20no%20Soukoban%20Special%20%28Japan%29.png",
    size: "27 KB",
    link1: "https://drive.google.com/file/d/1ej_YBSG3cuEFX8LWUnqRBvAliVegFGiM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nankin no Adventure (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Nankin%20no%20Adventure%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1OkUMJOWKO1Q8QJY6R--OMz3T3243AtWy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo no Kabe - Block Kuzushi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Nazo%20no%20Kabe%20-%20Block%20Kuzushi%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1F6et_YswOSHbCaPg27oMqFGQGY3DvCTk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo no Murasame Jou (Japan)  (~Riddle of Murasame Castle)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1KpaIYa5hUKpHTO3J2CHpQnnWgIvay9NF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo no Murasamejou (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Nazo%20no%20Murasamejou%20%28World%29%20%28Ja%29%20%283DS%20Virtual%20Console%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1QtDoeVJOqh4lFsbcbQ9r71MR0NcSxb-3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo no Murasamejou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Nazo%20no%20Murasamejou%20%28Japan%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1rcfXG3fhAJtHOIYJto8SKraiLM3bkIEB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazoler Land - Dainigou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Nazoler%20Land%20-%20Dainigou%20%28Japan%29.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1cwgXepKcYgG_HF3H3XXvagKSL5xPzwD5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazoler Land - Daisangou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Nazoler%20Land%20-%20Daisangou%20%28Japan%29.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1v7NcWaxaAsGsIoC2B-xrgt0GmHH24ytv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazoler Land - Soukangou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Nazoler%20Land%20-%20Soukangou%20%28Japan%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1gJpYrE8WVYtIorWJiSOBuGELzpXo2b3F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazoler Land Special!! - Quiz Ou wo Sagase (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Nazoler%20Land%20Special%21%21%20-%20Quiz%20Ou%20wo%20Sagase%20%28Japan%29.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1WenzLc38VFLxEflvoec71wzs3IYBWbx6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazoraa Land Dai 2 Gou (Japan) (Nazo Magazine Disk)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1amUT7BSpCeAf-hPduQ5gR5SX9bUoMPXq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazoraa Land Dai 3 Gou (Japan) (Nazo Magazine Disk)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1PPeoqkPBWiqZMP_tVmW-PqKEyF9eI2WZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazoraa Land Soukan Gou (Japan) (Nazo Magazine Disk)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1DzkcfP69XAbhOZ_JZcF7tl_jKqFcIlMi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazoraa Land Zoukan Gou - Quiz Ou wo Sagase! (Japan) (Nazo Magazine Disk)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1Ks-9m_9_IrzdUlQE07MvL0HKW1h0-FzL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neunzehn (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "44 KB",
    link1: "https://drive.google.com/file/d/1GYKf9hU6wmGlLPCKlN17g2xnzn9D0jkV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neunzehn - English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1bx6P37vePpJWW-PCEki4Pepw16_KDJIQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Omoikkiri Tanteidan Haado Gumi - Matenrou no Chousenjou (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1_RzrSqGGiNmB7VwFu79g3_ycUVfesxF4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Omoikkiri Tanteidan HaadoGumi - Matenrou no Chousenjou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Omoikkiri%20Tanteidan%20HaadoGumi%20-%20Matenrou%20no%20Chousenjou%20%28Japan%29.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1sgkT8APtJBOtmy4uXNwQIK7Htf-kR_mu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Othello (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Othello%20%28Japan%29%20%28DV%202%29.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1UL6CPOg03LfMPAKDYIWLCPCqeSuBN0wl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Otocky (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Otocky%20%28Japan%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1-dRGndflwNo5BVKjp94ivyWEHYyyPVi1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Man (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Pac-Man%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "12 KB",
    link1: "https://drive.google.com/file/d/1ylAle-ev0SmpElWqQBPHdHSsq3_vxqQA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pachicom (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Pachicom%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1K1P4va4Ry8bjTyopKSNxHqgVifY0dHhh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pachinko Grand Prix (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Pachinko%20Grand%20Prix%20%28Japan%29.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1pwn3xGI60y4lZ_UwPRmWcUAYdX0IxlYI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Patlabor The Mobile Police - Dai 2 Shoutai Shutsudou Seyo! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Patlabor%20-%20The%20Mobile%20Police%20-%20Dai%202%20Shoutai%20Shutsudou%20Seyo%21%20%28Japan%29%20%5Bb%5D.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1jIXUrRVoyAAnJvAgO49xX-Akrwaz9Koh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Patlabor The Mobile Police - Dai 2 Shoutai Shutsudou Seyo! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Patlabor%20-%20The%20Mobile%20Police%20-%20Dai%202%20Shoutai%20Shutsudou%20Seyo%21%20%28Japan%29%20%5Bb%5D.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1Ccw2bSEQvQlGAaz75dT94v-2bjGlYKkK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pinball (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Pinball%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1jqMyRcrRTK2tq5jGghqejAtKyWWz1WDG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Golfer Saru - Kage no Tournament (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Pro%20Golfer%20Saru%20-%20Kage%20no%20Tournament%20%28Japan%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1YoTo2yya8W937neWahFr2TiAH0bNuhUe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Wres (Japan) (En)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Pro%20Wres%20%28Japan%29%20%28En%29.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1rTrSMOM2vvz-5OPBR8sKBUQiu-YU49_G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ProWres - Famicom Wrestling Association (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1w3mVPCKS0kzzAInCdYCDN3XvxaszIRBt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Professional Mahjong Gokuu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Professional%20Mahjong%20Gokuu%20%28Japan%29.png",
    size: "29 KB",
    link1: "https://drive.google.com/file/d/1blMKPJMUiQC7eJTpNhsj-ov8Y4TsMFAh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pulsar no Hikari - Space Wars Simulation (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Pulsar%20no%20Hikari%20-%20Space%20Wars%20Simulation%20%28Japan%29.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1FnvIa2-bbA1SkLoemG-VO_yo3gqyHt5w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Putt Putt Golf (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Putt%20Putt%20Golf%20%28Japan%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1sB7eyT0cz2J3wNEmk-C_G8R5KuXmphz-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle Boys (English Rev A)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Puzzle%20Boys%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/1yxSkn0z0qP9enxiN0jVlhkLGz64ZUjDP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quick Hunter (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Quick%20Hunter%20%28Japan%29%20%28Unl%29.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1-2eJ7hcy6EQqIUTYExcZDwOWV_3xug64/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quick Hunter - Parameter Disk Vol.1 (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Quick%20Hunter%20-%20Parameter%20Disk%20Vol.1%20%28Japan%29%20%28Unl%29.png",
    size: "2 KB",
    link1: "https://drive.google.com/file/d/1cd7WvhHmud9elSg3Zki19xQ-t94ER53r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Radical Bomber!! Jirai-kun (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Radical%20Bomber%21%21%20Jirai-kun%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "46 KB",
    link1: "https://drive.google.com/file/d/1QmpFUj6PCsZski9nbxtj9bRssVG6fGFV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Reflect World (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Reflect%20World%20%28Japan%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1EVobwN2mvKZJkkbTyZpRD4WbwPp0XW9s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Relics - Ankoku Yousai (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Relics%20-%20Ankoku%20Yousai%20%28Japan%29.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1Ocxz5rw43kYL4ANKZck9-CUjfczZDE7f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Replicart (1988)(Taito Corp.)(J)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Replicart%20%28Japan%29.png",
    size: "44 KB",
    link1: "https://drive.google.com/file/d/1deE2sl-eT4e_xDSg2RHz8XmR7-tbEIC-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Risa no Yousei Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Risa%20no%20Yousei%20Densetsu%20%28Japan%29.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1XDtawkUgzjrzwS8CRvB3ukcp-dLHypFc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roger Rabbit (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Roger%20Rabbit%20%28Japan%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1QvanC0iE28cb4rfTni7k4A7fgWNAfCWC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roger Rabbit (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Roger%20Rabbit%20%28Japan%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1g2i479pUeij23KlSRr9iGY1stb_BrSc7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam World - Gachapon Senshi - Scramble Wars (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/SD%20Gundam%20World%20-%20Gachapon%20Senshi%20-%20Scramble%20Wars%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1QyfrlwtzateDEZ6nb7x-aJVoL7Omq9Nu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam World - Gachapon Senshi - Scramble Wars (English patched)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/SD%20Gundam%20World%20-%20Gachapon%20Senshi%20-%20Scramble%20Wars%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1kOlzVyuu1fYFXbeLDx0OpSJSl1pEo_V0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam World - Gachapon Senshi - Scramble Wars - Map Collection (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/SD%20Gundam%20World%20-%20Gachapon%20Senshi%20-%20Scramble%20Wars%20-%20Map%20Collection%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1U0hiCaKGzwjapoU2d0JQyue3If6AkFBq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sailor Fuku Bishoujo Zukan Vol. 1 (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "37 KB",
    link1: "https://drive.google.com/file/d/1h9VwWvVUiqsTY8ubiI9SIlYJEhtdYj-G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sailor Fuku Bishoujo Zukan Vol. 2 (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1x185-ywzXUqYgYcTWRM7C1k_REU7zVRP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sailor Fuku Bishoujo Zukan Vol. 3 (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1XtpvfwMZ8E7K6KZ3g25MV7RH32vv_2lK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sailor Fuku Bishoujo Zukan Vol. 4 (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/12VnR5eQfEj0WNh-57CspsTZpqL-xOB7s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sailor Fuku Bishoujo Zukan Vol. 5 (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1VI4PZ39C6L-ysu2QqzAGU332rRrc4BT7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sailor Fuku Bishoujo Zukan Vol. 6 (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "44 KB",
    link1: "https://drive.google.com/file/d/1jkG7sxh-uH2SvR_cu69_0P7jMxlofkwX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Samurai Sword (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Samurai%20Sword%20%28Japan%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1VVeJw1kemJi3pbYntYAbnh9SJDHgtyEO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Samurai Sword (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Samurai%20Sword%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/12I4Sc0gYcD4Bg4pznYSFhfF5GLVLl_0b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Santa Claus no Takarabako (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Santa%20Claus%20no%20Takarabako%20%28Japan%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1hma-32CsjsGrcZh5fOzEMfaDZFLrtEgJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Santa Claus no Takarabako (Japan)  (~Santa Claus's Toybox)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Santa%20Claus%20no%20Takarabako%20%28Japan%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1Aqbwl8CYdkfXFS3awcMYYKFt3y6xeeGu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Section-Z (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Section-Z%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1mnZ48ok77MIankw6fhs8VfortHsG1AP_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Seiken Psychocalibur - Majuu no Mori Densetsu (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Seiken%20Psychocalibur%20-%20Majuu%20no%20Mori%20Densetsu%20%28Japan%29.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1R04r1zJW082c7Vg4kMzXfKDaDGOqGxnn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Seiken Psychocalibur - Majuu no Mori Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Seiken%20Psychocalibur%20-%20Majuu%20no%20Mori%20Densetsu%20%28Japan%29.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1TzTSLELBEC6qymLN-QYjjb_Snu8EsKCs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Seiken Psychocalibur - Majuu no Mori Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Seiken%20Psychocalibur%20-%20Majuu%20no%20Mori%20Densetsu%20%28Japan%29.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1JHSi0D23QW6IhHlg4acUeC-orKjcdQ-u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sexy Invaders (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Sexy%20Invaders%20%28Japan%29%20%28Unl%29.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/1jBHd1HxET-PabqT2VyGSkHCWk0tnwi6-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sexy Yakyuuken Adventure II - Gal's Dungeon Part II (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Sexy%20Yakyuuken%20Adventure%20II%20-%20Gal%27s%20Dungeon%20Part%20II%20%28Japan%29%20%28Unl%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1if8ieLFSxtPTGQsTTMDT8sTwnT3Li2JY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (Japan) (Proto)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "7 KB",
    link1: "https://drive.google.com/file/d/1yYgJh0A7FuIcVfKO1aRZOIVAaxj9UkU_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai II (Japan) (Proto) (Dragon Layout)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "6 KB",
    link1: "https://drive.google.com/file/d/1qCxYd7yPWNLR9gchZcGIYDkPCD_-ouQk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai II (Japan) (Proto) (Scorpion Layout)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "6 KB",
    link1: "https://drive.google.com/file/d/1a2TuTEgMG1XNUk1OTCwg1TJuovaEsWRN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Silviana - Ai Ippai no Boukensya (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/17XHl5UkltH5KD8BNspychxDYYytaL270/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Silviana - Ai Ippai no Boukensya (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1oqr4Z2OTgrE5559ZQ843JwYCeZEeSIji/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smash Ping Pong (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Smash%20Ping%20Pong%20%28Japan%29.png",
    size: "26 KB",
    link1: "https://drive.google.com/file/d/1yS36aabZVDTSBX3JMo1bEDzhij1m0UdU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smash Ping Pong (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Smash%20Ping%20Pong%20%28Japan%29.png",
    size: "26 KB",
    link1: "https://drive.google.com/file/d/1AEqm6PmIK6GpX8v9uv46c0zJ_gCeJMG-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soccer (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Soccer%20%28Japan%29.png",
    size: "26 KB",
    link1: "https://drive.google.com/file/d/1NAzx9yOdtCCgZ2nPICj_i4inmTgcpmeV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Solomon no Kagi (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Solomon%20no%20Kagi%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1znMyAXHRwj4W1XR_QyX5rDUN2ZChpkor/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Souseiki Fammy - ROM-QD for 256K+64K (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "27 KB",
    link1: "https://drive.google.com/file/d/1l53RdYTNnu9QOV2QCCHe6rsKgBe6rDLc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Suishou no Dragon (Japan)  (~Crystal Dragon)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Suishou%20no%20Dragon%20%28Japan%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1T98Y2_191TaFmt7FZs6otuJS0gNgj85X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Boy Allan (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Super%20Boy%20Allan%20%28Japan%29.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1o-Ovn-HjYUJ2soqLX8_xfBxPk3ZclSgz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Lode Runner (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Super%20Lode%20Runner%20%28Japan%29.png",
    size: "43 KB",
    link1: "https://drive.google.com/file/d/1DviPj2kA4gf7sp_VAutiVA38q-V6KrJl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Lode Runner (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Super%20Lode%20Runner%20%28Japan%29.png",
    size: "44 KB",
    link1: "https://drive.google.com/file/d/1hoQ_Fu5qYZV6jQ9TBQ8_3u7bRDx1jXzz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Lode Runner II (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Super%20Lode%20Runner%20II%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1CKayyKqz0wxLkoUZBgU2xFmR7ZGnnOKA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Lode Runner II (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Super%20Lode%20Runner%20II%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1zJNEXChAmFVjr_GqzBY3n7pjCy6NUwpK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Brothers (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Super%20Mario%20Brothers%20%28Japan%29.png",
    size: "31 KB",
    link1: "https://drive.google.com/file/d/1R0CK0ATO5LWN91DT-KIhY5aENt8eEiPi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Brothers (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Super%20Mario%20Brothers%20%28Japan%29.png",
    size: "31 KB",
    link1: "https://drive.google.com/file/d/1MN7eGel0CDoO20M91iKTJRmo5-WFVWuD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Brothers 2 (ESP)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1R0GwLAlm7WVTrPXIo4tAgCQGd92OfYtP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Brothers 2 (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1eeKhqBI1lAoF58l_0zJHxOWJTlm1sxUD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Brothers 2 (Japan) (En)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1W6NFJNDp_LGZdfCAXeOxLUKpbxnjmFd-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tama & Friends - Sanchoume Daibouken (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "43 KB",
    link1: "https://drive.google.com/file/d/1QoCsPXzG17dS7KCSLzq976OWbDGA3gbR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tanigawa Kouji no Shougi Shinan II - Meijin e no Michi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Tanigawa%20Kouji%20no%20Shougi%20Shinan%20II%20-%20Meijin%20e%20no%20Michi%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/134bltT_9ZM9RHm4k1dzyfswP8GsKzgpQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tanigawa Kouji no Shougi Shinan II - Meijin heno Michi (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1oU18PkT64j_SdIl8sbPnU0xAJx_amuBf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tantei Jinguuji Saburou - Kiken na Futari - Kouhen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Tantei%20Jinguuji%20Saburou%20-%20Kiken%20na%20Futari%20-%20Kouhen%20%28Japan%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1_FQHoaJ0Sp4c9F3XacmI3SziQIKvgsbe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tantei Jinguuji Saburou - Kiken na Futari - Zenpen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Tantei%20Jinguuji%20Saburou%20-%20Kiken%20na%20Futari%20-%20Zenpen%20%28Japan%29.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1cRPD-1XFh5SMLTF2FfjN722kfdowFDZJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tantei Jinguuji Saburou - Shinjuku Chuuou Kouen Satsujin Jiken (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Tantei%20Jinguuji%20Saburou%20-%20Shinjuku%20Chuuou%20Kouen%20Satsujin%20Jiken%20%28Japan%29.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1bL1D1EbP0T3hSFIEEp9tSHGfSRPWKsep/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tarot Uranai (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Tarot%20Uranai%20%28Japan%29.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1XdP3k1_mPQzOnu9w_EclGGCVEeZtyX2h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tennis (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Tennis%20%28Japan%29.png",
    size: "17 KB",
    link1: "https://drive.google.com/file/d/1wHJJ5c8ygkuW9iJ_A2zh3KgEgwRqG7T1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tenshi Tachi no Houkago (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Tenshi%20Tachi%20no%20Houkago%20%28Japan%29%20%28Disk%201%29%20%28Unl%29.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1bqYB1vNRaLFMqgq--Yk4cCrXMfLo1rVR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tenshitachi no Houkago (Japan) (Disk 1) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1JELQBldmw9DzwQQsNSyztxNbYyOStWWW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tenshitachi no Houkago (Japan) (Disk 2) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1OH_KKX2Tz02v3SsR-yBX55a2zDPYDhyU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Twist - Rekishi no Katasumi de (Japan)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1eX9ear_N8k7MOH9yoOP48tUhwzhh6Rq4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Twist - Rekishi no Katasumi de... - Kouhen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Time%20Twist%20-%20Rekishi%20no%20Katasumi%20de...%20-%20Kouhen%20%28Japan%29.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1GNG_8G9pHHR1dF8sj1VdnoTG67rhzF2x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Twist - Rekishi no Katasumi de... - Zenpen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Time%20Twist%20-%20Rekishi%20no%20Katasumi%20de...%20-%20Zenpen%20%28Japan%29.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1PEnsrLSy5BhKpU64Lc4e2cZPA8OLvzGY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Titanic Mystery - Ao no Senritsu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Titanic%20Mystery%20-%20Ao%20no%20Senritsu%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1cP0fgcbtZLqwHRNFDLjIfBLXFKhHUYTI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tobidase Daisakusen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Tobidase%20Daisakusen%20%28Japan%29.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1lfVSOGUA9yp3G7xYAzCZ-a1o4AvbO_pM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonkachi Editor (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "14 KB",
    link1: "https://drive.google.com/file/d/1VCrQSlOIjnQoXBWxVyeMMYRraFyXTTqJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonkachi_Mario",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "30 KB",
    link1: "https://drive.google.com/file/d/1K8XBJZ8JDfbz47bU1Ij8UrA2KyABvqij/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tooyama no Kinsan Space Chou - Mr. Gold (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Tooyama%20no%20Kinsan%20Space%20Chou%20-%20Mr.%20Gold%20%28Japan%29.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1kZ94oz1YXY_a_Zy4zr9nCi9Wg2vJd7Fe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Topple Zip (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Topple%20Zip%20%28Japan%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1zwIZdR-OxPs-JkIoRwTMrGwLAosdUmI8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Transformers - The Headmasters (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Transformers%20-%20The%20Headmasters%20%28Japan%29.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1CidNZfY5lqRjctumcwNBZHJNSCPvY20u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Transformers - The Headmasters (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Transformers%20-%20The%20Headmasters%20%28Japan%29%20%5Bb%5D.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1XzDx2jdP1uLUdCDoZlGr9v_DPSLXCnBf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TwinBee (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/TwinBee%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "30 KB",
    link1: "https://drive.google.com/file/d/1kWCXs9KOVP1VqIEzMxaCqef_C-AZDiuX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman - Kaijuu Teikoku no Gyakushuu (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ultraman%20-%20Kaijuu%20Teikoku%20no%20Gyakushuu%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1N7JaZ1lxW5kw7xSbzdk6BAuxY4J2gkjm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman 2 - Shutsugeki Katoku Tai (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ultraman%202%20-%20Shutsugeki%20Katoku%20Tai%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/13sh_EJZg_xPWFHHurRDblWrVfAQPfyA1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman 2 - Shutsugeki Katokutai (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ultraman%202%20-%20Shutsugeki%20Katokutai%20%28Japan%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1bACfpLqbTF0MeE-O1PJEpu0C2DjYzjGJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman Club - Chikyuu Dakkan Sakusen (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ultraman%20Club%20-%20Chikyuu%20Dakkan%20Sakusen%20%28Japan%29%20%28Rev%201%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1KNjLlFrA2MY2sVexyxRadyYFTt8s-eFB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman Club - Chikyuu Dakkan Sakusen (Japan) (v1.0)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ultraman%20Club%20-%20Chikyuu%20Dakkan%20Sakusen%20%28Japan%29%20%28Rev%201%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1GCWqq6hVvH04El1o6s-HnLR-VV2-6Pan/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman Club - Chikyuu Dakkan Sakusen (Japan) (v1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Ultraman%20Club%20-%20Chikyuu%20Dakkan%20Sakusen%20%28Japan%29%20%28Rev%201%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1VvhhGv3Ee5AD8Vjitec7IJcnfoiAbvlm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Volleyball (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Volleyball%20%28Japan%29.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1II8CdwhNeaci-JQJlXRv87RPkrLrswfb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vs. Excitebike (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Vs.%20Excitebike%20%28Japan%29%20%28En%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1R3Up4u2Ai8bpDbjLYNUy5WzF6mPeIamS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vs. Excitebike (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Vs.%20Excitebike%20%28Japan%29%20%28En%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1RevwXW0YAXeZcmr4c2IryaS2pmhleUJY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vs. Excitebike (Japan) (En)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Vs.%20Excitebike%20%28Japan%29%20%28En%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1bQ9EI5krC1pTCPdhAG8-uMSlPO0dClzK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wakusei Aton Gaiden (Japan) (National Tax Agency Demo)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Wakusei%20Aton%20Gaiden%20%28Japan%29%20%28National%20Tax%20Agency%20Demo%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1ScQAJqEf8BzaHksHkPcip7baT5oqy3fe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wardner no Mori (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Wardner%20no%20Mori%20%28Japan%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1a06UNx8rwEdERKrKGEiQBGpIbTTwG8Fk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winter Games (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Winter%20Games%20%28Japan%29.png",
    size: "46 KB",
    link1: "https://drive.google.com/file/d/1R6Wm4jI3enwtD_F-woJTjkZnTag9yx0j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wrecking Crew (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Wrecking%20Crew%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "26 KB",
    link1: "https://drive.google.com/file/d/1K0Bd9sOKkfxGVpBg4VxjrCyqWNp9ptxa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xevious (Japan) (Disk Writer)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Xevious%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/1DBWwyoXFIdUOgnlcz1GkfUjyJUbr5vKA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yakyuuken Part II - Gal's Dungeon (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "43 KB",
    link1: "https://drive.google.com/file/d/1qsNISSv8ZOSPV_Bszh5oqxddRfHy0ggy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yakyuuken Part II - Gal's Dungeon (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "43 KB",
    link1: "https://drive.google.com/file/d/1f-4pmKzN6ZzgFHooIWTZuzoRpa2B4Bqq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Youkai Yashiki (Japan)  (~Ghost Manor)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Youkai%20Yashiki%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1CmL0NKqcNER4RYZzE-GqxTbPp7h-V1Xr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yume Koujou Doki Doki Panic (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Yume%20Koujou%20-%20Doki%20Doki%20Panic%20%28Japan%29%20%28DV%201%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1R5dQ4Hmrsc91k1qhBsqhkU-4_E_42fqm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yume Koujou Doki Doki Panic (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Yume%20Koujou%20-%20Doki%20Doki%20Panic%20%28Japan%29%20%28DV%201%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1u56MUC9hPXKs99QKnCiTXWLm5LCt2HM2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yume Koujou Doki Doki Panic (Japan)  (~Dream World Doki Doki Panic!)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Yume%20Koujou%20-%20Doki%20Doki%20Panic%20%28Japan%29%20%28DV%201%29.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/18SNA7RQjJ6P6jv2ctcu1O0PGwVq2Qa7d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yuu Maze (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Yuu%20Maze%20%28Japan%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1p3TO41yqS8ExApzDfhY3M0Q5NmS3oERd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yuushi no Monshou - Deep Dungeon (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Yuushi%20no%20Monshou%20-%20Deep%20Dungeon%20%28Japan%29.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1Emnsycfj3zeD1at6LOUhvUJuacMCGhtw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zanac (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Zanac%20%28Japan%29.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/1R6qEp9eteQazpiIoA14U3EnQJeZf0UEb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zanac (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Zanac%20%28Japan%29.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/1rN76YRjDE0QgCfmMmtds53H1rdng8dE2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zatsugaku Olympic Quiz - Watanabe Wataru Hen (Japan) (Unl)",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1o1TqSFNIxSE3ffRCjztEU-oeCJ8Of6kT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zatsugaku Olympic Quiz Part II (Japan) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Zatsugaku%20Olympic%20Quiz%20Part%20II%20%28Japan%29%20%28Unl%29.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/11dmQnruCuNrYEH1G-yl1TXpNuQN888xP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda no Densetsu - The Hyrule Fantasy (Japan) (Beta)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Zelda%20no%20Densetsu%20-%20The%20Hyrule%20Fantasy%20%28Japan%29%20%28Beta%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1jaayT-MKT9UT2uT2xkU0MdSJH1udkt_m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda no Densetsu - The Hyrule Fantasy (Japan) (v1.0)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Zelda%20no%20Densetsu%20-%20The%20Hyrule%20Fantasy%20%28Japan%29%20%28Beta%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1_u8zzWsUlXY3VN8MTz7mjvckLxosFIT_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda no Densetsu - The Hyrule Fantasy (Japan) (v1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Zelda%20no%20Densetsu%20-%20The%20Hyrule%20Fantasy%20%28Japan%29%20%28Beta%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1YnKFEmk1g3KqrpXhV132sVxOmost30rS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda no Densetsu - The Hyrule Fantasy 1.1 English",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1diM06fSO0tpxfgTNsKVM_7U4bcT21kjy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "disksys",
    image: "https://i.postimg.cc/G2tSQGVS/famicom.png",
    size: "6 KB",
    link1: "https://drive.google.com/file/d/1EALx5EIJO1fVZGYr35clyEAu9EnGexuk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "kaettekita mario bros. (t+en_mrrichard999)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Family%20Computer%20Disk%20System/Named_Boxarts/Kaettekita%20Mario%20Bros.%20%28Japan%29%20%28Disk%20Writer%29.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1-SoCVJBInpNYwitthEGYsYDjBmW2V-PH/view?usp=drivesdk",
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

