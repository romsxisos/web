const roms = [
  {
    name: "3D Asteroids (1987) (Atari) (Prototype)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1cA3540c39kRhKTYw9wm-phduBGBXCb-Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3D Asteroids (1987) (Atari) (Prototype) [a1]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1YIpxlygvJGFUjgp6AA8XhzqOEThanYEb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "7800Kern Demo (2004) (Christopher Tumber)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1Jjy2q-563hNR9E-T5a_wcIPhKBs711Il/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ace of Aces (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1wRMdzz_72otDQALRqEXrOWDTr7hVTo9b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ace of Aces (1988) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1qgQii8mgvs1ABj-jAUfulEIzZuHCKPUu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Brigade (1990) (Atari) (CC2 Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1PiJuLL-eCHsMz0d_ABrYqwiq1skDAvm6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Brigade (1990) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/18U46eFrKfqNlxCDpfxOb7hPBUv7-ixw7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Brigade (1990) (Atari) (PAL) (CC2 Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/19nmM4sLMCVpnE8uZBhJigSY5UyRMeavH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Brigade (1990) (Atari) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/12aLKev7WZzMcagKJldb_4q9Lo7ZKv-ZW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asteroids (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1eEW6-hNDcJQtrAKXiVJuiWQdPBskb-7H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ballblazer (1987) (Atari-Lucasfilm)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1bA3NwoydFEUJAc_wqh2kJs4V0x_V0HxB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ballblazer (1987) (Atari-Lucasfilm) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1MiMv7K9tvpqSj8q89NjHGVq8aH6s6o7s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barnyard Blaster (1988) (Atari) (PAL) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/15c6XHqHKjV2kdJAxoWqolecyDSb1mX-8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barnyard Blaster (1988) (Atari) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1TNVNfJS-Y7jCuSQr2qxmToBbdEoB7a7q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Basketbrawl (1990) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1zcx1ygvX88_AHCyUzQSheDrH0ZSMQX8z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Basketbrawl (1990) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1iO20eR_ezw3ImRkNwdJ4PCwC3kpGuFoS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beef Drop 7800 (Oct 30-Rev 08) (2004) (CC2 Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1K1E6ptdWwuga8imcJ-n5YA_6aMHfYLoB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Centipede (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1tBuMWLJVYT73siDkqonJZDSmyWaP-lOO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Centipede (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1EV37HYbuO2DPy9GzeGO_y35-CG1w0-6j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choplifter (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1Ei51MWl-CqvcxEuKQg3yV3krcm-jP6nr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choplifter (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/18C2RmYIS7NOQPdaa2k2vNBsgWpipUwSc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Commando (1989) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1TyO3xAkRgQhx925rpEDRQ7CtzcptPm4R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Commando (1989) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1gw66YwQM9tUZaxJ7OAv5dKbWYGXN_Pv3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crack'ed (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1sKqw7tlQP8ot4IHanodZ6RCJ27c_MNK_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crack'ed (1988) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1qtpZRLpJlXYCqq1_C3xs4ieqNj6M86mX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crossbow (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1fJIceF8sxbt0c19qohi84xLJS9UHvBv6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crossbow (1988) (Atari) (CC2 Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1gQl3iWPTtleFflPjlrFvtvu9fk-sUQgX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crossbow (1988) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1PCGbNvstBo3JwSHLkVQ7izIx2pOs_tIg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crossbow (1988) (Atari) (PAL) (CC2 Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1Ao-YiSyeq4eTDQaOe5-O40EneiHZ5dUJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dark Chambers (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1dREObxDU-RAAjsZuxULaSgqPLEeiABAF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dark Chambers (1988) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1FOIgRA9nMvUVAtZw0soYQJIzgAi8ugoD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Falcon (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1IQlelC7v1Iz5NTuJCoN6x6hPBXaslKZl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Falcon (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1qTO60raDrrff10rADdc1jGmbGlFLA55P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Falcon (2004) (Atari) (HSC Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1Rkv1JdbLF7wh0tAOiUJUG4NvulW4_MHm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Falcon (2004) (Atari) (HSC Hack) [a1]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1eOAuDx7UHkkXXctI54gwctttoR6W30oZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Diagnostic Test Cartridge (19xx) (Atari) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1RHdXl-kjVWHLjBM1Tksb9J3P9z6JSaRI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dig Dug (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/13me5qKuf5XU3mPDKU3w1M3kT05_LLBy8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dig Dug (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1pUQnXbjVs0gAQ-zy5oOGuy9oJ4RPGc0-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1JroyfpV_Hix1PQYRQhA3oH6mtcuYFGB6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong (1988) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1O8ax-wFBYi_2ofAmZDr51TzbnAfuZEVZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Jr (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1Vv6t3l6tjjJdlNcbwGAKELA9xB3LGsFz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Jr (1988) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1BKSB5fIEb02QtTT3rwFoZoVdIMyVivD0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon (1989) (Activision) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1kX3XHNPyAXytNXY1sBsWmUSCdEIdX6kD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon (1989) (Activision) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1eWs_qBeqAt0clJshTEy60PMJ6D1rKYKk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-18 Hornet (1988) (Absolute) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/196jBWOT8ZIjl2S4-_0cDGY8IX63tNZy2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-18 Hornet (1988) (Absolute) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1641q11jmh-qYFqck5OpoHOqlS4BeeiD-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fatal Run (1990) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1KcMQRD5uDhKV7Iap4FGlUTEHaOHW-yiO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fatal Run (1990) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1bpFPdhxTGwRKCJ0vdRxWMoUwv2njrvN5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fight Night (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1xRtfU409SzJdEAdGh-DhmaQlJpwHpxxo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fight Night (1988) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1Sgsel6sh31Np5xfsh8U8td3RQtv_QNkv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Food Fight (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1cTy3txYYdcipmTsq_FGSlvJzHj4eN7_1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Food Fight (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1E7GD2voN3YxlwH8-JmGazfpwQtBP_go4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaga (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1qS6ECHE3MVOD84q2mwWM82wuXCsGPvez/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaga (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1IiK-L9UBbGQA3SmWPjLvfc2KfsPCZiUf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gato (198x) (Atari) (Prototype)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1KNgShSjMNHUo6oSd_uDY9cvZQ-OMqtog/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gato (198x) (Atari) (Prototype) [a1]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1rzowdrodkj00ENZndAoRN0HhgtX-dKym/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gato (198x) (Atari) (Prototype) [a2]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1KD3GyM4l2UXm48TEqvBRLLPPy7TnBAn5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hat Trick (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1GsDzeBUSwzyGCXTRqN1o7uAYgsLkWfDj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hat Trick (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1Xh0YG32q82_bmN7r6mPkhy4qhdX48bcl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ikari Warriors (1989) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1MxVDOIebCWHXvKAf8z6OkODqYVWJ9qS3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ikari Warriors (1989) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1z2CeX5caBe-VuRv0I87L4JQpSgtR3Lod/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Impossible Mission (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1le7658vIRb-UYwbwG8yNDAKFRP9h170z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Impossible Mission (1987) (Atari) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1BQI0P2rAgqNkLluT62bGUXNti4AU_Rjj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Impossible Mission (1987) (Atari) [a1]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1qw2oi76XNDMh4pz2A9EvEga1M7IYgnvR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Impossible Mission (1987) (Atari) [f1]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1JlGCo96P5l0dM9X3gGxbjFs8cDdbZV6s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jinks (1989) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/15YGoT6a_9rR55K2ZVQmOJHHUduBav360/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jinks (1989) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1JlL1I10R_m4V8vwK38pOsIv6l-BeDIpl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joust (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1sqZT3HxHpvGWoZ-Z4tQ8yjJOqjX08Z-n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joust (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1Nh09SFSOuIeRoDQVKSOAMAaefc5rHt1j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Karateka (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1thWs9UlgmMKPW4sToiLOaSJdoYYK4VKR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Karateka (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1_Q_DcDoi2XjpHh_YOEIMEptvC-GSCACD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (1992) (Atari) (Prototype)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1iPc7GdfSlhjRxPQc0q9EilQGLJSNtURm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (1992) (Atari) (Prototype) [a1]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1RsHya7YM-s-wlu_NeueUVcChH6LBjtIF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (1992) (Atari) (Prototype) [f1]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1C5JoKBa8iAlMJv-oXT9dHnzJg_JmrUc9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (2004) (Impossible Level 1 Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1hY4kokfe7f-Yso5_76b9mZzKJO94tQ1w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (2004) (Impossible Level 2 Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1dMLQ__zHwFjD5wu0IVXxAmvd06DzORd3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (2004) (Impossible Level 3 Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1bDmJk6IrSsLykvPNHantduT1RwS_7Vue/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kung Fu Master (1989) (Absolute) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1uK-DCKvJGNYWHqAtl_ni01v_BgpvZ_Aa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kung Fu Master (1989) (Absolute) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1OaLsE_QZ8dgaz4Ug5gF9aRr01HNcnmjM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Brothers (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1pb4-D72fzmD-nUQFSXi3kLuknoK9LGMq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Brothers (1988) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1nokDrfFalDwVesHc6EvFKdiYf7lmyRGG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mat Mania Challenge (1989) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/147K08r8KkVcUX7I9wU9jqdmEJVhLB6nw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mat Mania Challenge (1989) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1tKZ64pN-vzmbZTelt2jZL2OBAleN3D44/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mean 18 Golf (1988) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1hecR6IuwdBG8_SOhT8AItysWrTGy_rt-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mean 18 Golf (1988) (Atari) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1zR6KaPHclOJnITVSBy8pYz0zG61yrcde/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meltdown (1990) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1uqdRE4001k1pNfaLP65VG4euGSCo7I7M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meltdown (1990) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1WsdxUtfbU2c-us9PRD0e-aPjB1mxZMxf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Midnight Mutants (1990) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1ADF5gSnNf06AZ5h_htNU5nkmoL4jbKkj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Midnight Mutants (1990) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1hTaH3TgTQb3bRtbjuB9gJAdz89ccEGSI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Motor Psycho (1990) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1gjJlpyukAY9Me-kGmr9i9Z2dsrRCkXwM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Motor Psycho (1990) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1uS0eR-ZGwlo1f-LnBCR88yLmwsA0PRk3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1h5aSlurLOW-zybsLZlOETbUH9rTJT95a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1Va2zjAlAFkEDNoqCwj56s5Xet_YCSHt1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Golf (1990) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1F7fIInlOpZxA5GITU2Jq9pznhDDet-Zj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Golf (1990) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1E8Z8rG2_G3R8ROJKQAKA6xjJPhqwAQwN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "One-on-One Basketball (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1z78FglmXdi233WlvEDw4GwqtQb7LDgWO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "One-on-One Basketball (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1Brhh4aPwbJMEl-apBcOdlSHARVPYm6_M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pete Rose Baseball (1989) (Absolute) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1M2DqpSAlqHXDcenj17G_GnZBGRw1XmVM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pete Rose Baseball (1989) (Absolute) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1SpeDYlDcrXBuIlraleiV34gb4li5s0Xh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pit Fighter (1992) (Atari) (Prototype)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1XYgcgjzF1_oOQJFqaBLAJHvE6kxt-Epa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pit Fighter (1992) (Atari) (Prototype) [a1]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1hJkhTQEBGXWRUWFFNxaqC8AKZzfhWmGV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pit Fighter (1992) (Atari) (Prototype) [a2]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1OUvE_hQ6gRC8w8R4PbP0F3g-uPCg68oO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Planet Smashers (1990) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1EB5idP2l329hcRMGZEMn6_lAmsWZx768/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Planet Smashers (1990) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1XFGRHcsUM1XyD0Z9ppZOcYlphCZsAmh2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pole Position II (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1sIMKX-UEI8hiaERURsrMnErjXOf5A5-3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pole Position II (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1f99XUDYHHkppBi70Efx-xn1FxxbNYinP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampage (1989) (Activision) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1H3PRA2TBvDEAkvyCt0ON_cEUnY8DZgUI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RealSports Baseball (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1BKpBjam-cYj9SktPFSZlWRxNWSNL_Rrr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rescue on Fractalus (1984) (Atari) (Prototype)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1DEWv6gdIGfa-kU78T293irCJkjKUZ0J7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rescue on Fractalus (1984) (Atari) (Prototype) (CC2 Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1-8ZBNb7CK20HMZaOW_aGNXN1WZT1nfR7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robotron 2084 (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1GPNie6FQcI64ttNt59KCZwJ3qOrNCDID/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scrapyard Dog (1990) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1qjOoKPBeuek0onvsVpREqBgSwHL0fxrg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scrapyard Dog (1990) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1xvCUKjlggdn2SEmQ5aim0PNLfvOhMyZX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sentinel (1988) (Atari) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/14-WEywWYa_jLYSR6B0MoJgn1jsvSHYQx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sentinel (1991) (Atari) (PAL) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1kvMZAG0t1i4_F33jlUmXZHz8FTY-qL0W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Summer Games (1987) (Atari) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1wTeJiAWH9dAzO-y22qSkORYS34rb6XIc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Huey UH-IX (1989) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1wGoerYNqDcfM6alFtLkKmY9Bv7IMGzdX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Huey UH-IX (1989) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1V8p88Qm3NqcRIXzcqprHQ4y7YWKsWhaN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Skateboardin' (1989) (Absolute) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1e3Bh_F-kPGhIcy6tmw1VQoavMH7J23TH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Skateboardin' (1989) (Absolute) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1Y4AU6R0bPc0ugcZ2VrZLEIyhaV-Ui7UT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Symbolic Debugger & Downloader (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1ufpQo3zLcQ9K0xpkY84wTLQxcP7wc6KK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Symbolic Debugger & Downloader (1988) (Atari) (Crypt Hack)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1Me-0wmEM6CZFKTzTgjZuLjGCr0pFWzuH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tank Command (1988) (Froggo) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1EohnxghNSUqJvWsX13sAV7cTWAsEm22z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Title Match Pro Wrestling (1989) (Absolute) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1_gINu4nvxQu63TvlHFbmGSfb8gdNoN-V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Title Match Pro Wrestling (1989) (Absolute) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/17m-E0wJn_mISWsm9svAMrlKQBreUU7TJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tomcat - The F-14 (1989) (Absolute) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1RsDsRDfZzHnyU4Ae21Rrw5Yj4xw2eiGJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tomcat - The F-14 (1989) (Absolute) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1w0LALXV4-z3W7o003xoS86QPo4ZIfL4L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Touchdown Football (1988) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1hDyxv1UjsLJiKND5elO37mD_Wy311KGM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tower Toppler (1988) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1NOQKWwDx2zbII-9ONMWmM9vkVmsC_pHs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tower Toppler (1988) (Atari) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1ci1ObFkU8LpB9li6LKVwrZJvvzbthL82/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tubes (2004) (Bruce Tomlin)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1FXuVeJNSwxlmT3ozdqDx0ikxApf3x0Xt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tubes (Nov 3) (2004) (Bruce Tomlin)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1yN1wSYe-7NoTHghBtMAQnqu6rT5TVLLu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tubes (Nov 3-Signed) (2004) (Bruce Tomlin)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1g4mblRh8QBekam-HG7GuMq6P76tkXok_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Water Ski (1988) (Froggo)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/10-QYgLPrKeE7a343FqC4V-cLayk0t5BX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winter Games (1987) (Atari) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1YJwrDnehEcp3eLVE1PPO6zo3c_SPumIZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenophobe (1989) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1pz0njO2MLwCvW-KPxuAnhYrLLU8Suizw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenophobe (1989) (Atari) [!]",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1ExX77jc5kROrezZiFxCoGRItX-1dSeeg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xevious (1987) (Atari)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1z4UKuyPAwVHAF5WvVlHvFzIAIj1gB5Po/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xevious (1987) (Atari) (PAL)",
    image: "https://i.postimg.cc/XNQB7g64/atari7800.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1p97ZSjziOCZjJxt-boF-S8lVpqE4bEDo/view?usp=drivesdk",
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