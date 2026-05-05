const roms = [
  {
    name: "10th Frame (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/10th%20Frame%20%28Europe%29.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/105giySSa0MWkrnArM9IoaAOV_yZ9Bcg4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "500cc Grand Prix (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/500cc%20Grand%20Prix%20%28Europe%29.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1EXzSCdDLAaIOTZJWO7pQB6UVtPI4tPMY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "5th Gear (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/5th%20Gear%20%28Europe%29.png",
    size: "211 KB",
    link1: "https://drive.google.com/file/d/1dyq0XkhI7Memb8Cs1G_xsz1OKNsdmdzc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Academy - Tau Ceti II (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Academy%20-%20Tau%20Ceti%20II%20%28Europe%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1-EJEksuM7yvtN8d6U9IU59jPYCUwFuBD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Action Fighter (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Action%20Fighter%20%28Europe%29.png",
    size: "121 KB",
    link1: "https://drive.google.com/file/d/1DEM4QROUlmTzBGRbwnBKqfVqOz2IAbI6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Action Service (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Action%20Service%20%28Europe%29.png",
    size: "294 KB",
    link1: "https://drive.google.com/file/d/1saIErD9hKOrR4BMW85FLiNUYQgOCAzmM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Addictaball (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Addictaball%20%28Europe%29.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1EfYtP2gWvhYpybxtniK5RqOZchDvdF0K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adidas Championship Tie Break (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Adidas%20Championship%20Tie%20Break%20%28Europe%29.png",
    size: "308 KB",
    link1: "https://drive.google.com/file/d/1Ha3v81vibqQv_DbSfKE8p_lWwVa6X045/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Advanced Dungeons & Dragons - Heroes of the Lance - A DragonLance Action Game (Europe)",
    image: "https://i.postimg.cc/CxbM7mVX/Atari-ST-logo-01-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1hp_dN6KwCJQrZLht_ICSwQkG7A8S6Dld/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Advanced Fruit Machine Simulator (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Advanced%20Fruit%20Machine%20Simulator%20%28Europe%29.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/1GX1fF5ggxYF2Lv9Hb21K9P6Pmkwb-nL1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Advanced Rugby Simulator (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Advanced%20Rugby%20Simulator%20%28Europe%29.png",
    size: "182 KB",
    link1: "https://drive.google.com/file/d/1vsQjG0QifLkO_ykKbZ1PLczFSBejIMFa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures of Robin Hood, The (Europe) (En,Fr,De,It)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Adventures%20of%20Robin%20Hood%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.png",
    size: "530 KB",
    link1: "https://drive.google.com/file/d/1V_EKSdQA3M_nWIkeo6okRFORcSiKfDq_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Afterburner (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Afterburner%20%28Europe%29.png",
    size: "855 KB",
    link1: "https://drive.google.com/file/d/1yM7lsEW119zJxr56aEV0yrXNpjMbuxpX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien World (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Alien%20World%20%28Europe%29.png",
    size: "476 KB",
    link1: "https://drive.google.com/file/d/19pKNe36IkhZaKeFrQylq7kAqpRgs-1_H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alternate Reality - The City (Europe) (v3.0)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Alternate%20Reality%20-%20The%20City%20%28Europe%29%20%28v3.0%29.png",
    size: "201 KB",
    link1: "https://drive.google.com/file/d/1AmG-AmwWgwVioV8tpgvlB2GF2ZIs2Xu5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Anarchy (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Anarchy%20%28Europe%29.png",
    size: "584 KB",
    link1: "https://drive.google.com/file/d/1xf6gfsloLaD_nME88YVyLIFhTkZ-tPwW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Another World (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Another%20World%20%28Europe%29.png",
    size: "987 KB",
    link1: "https://drive.google.com/file/d/17SQ4pXrXzeODe3FDf0AqFwb5BFtBq3Th/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Apprentice (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Apprentice%20%28Europe%29.png",
    size: "598 KB",
    link1: "https://drive.google.com/file/d/1eWaP47xIT-Mkl0aMO53XtEYrmIsBkUrB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Archipelagos (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Archipelagos%20%28Europe%29.png",
    size: "124 KB",
    link1: "https://drive.google.com/file/d/1CY23k10VSi_PrO2KRYSaiWU8wdA24h7K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arcticfox (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Arcticfox%20%28Europe%29.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/15vrZfZg8rzcvQQf-tflAJW7h268D0VK4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Artificial Dreams (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Artificial%20Dreams%20%28Europe%29.png",
    size: "182 KB",
    link1: "https://drive.google.com/file/d/1JI5ANQenTAawqltQLQF1dzJhCRiVvtxJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Atax (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Atax%20%28Europe%29.png",
    size: "97 KB",
    link1: "https://drive.google.com/file/d/1kgnZ5OZ7lx9j_ltrVqwDd4HD3BV1-Nzw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Atomix (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Atomix%20%28Europe%29.png",
    size: "231 KB",
    link1: "https://drive.google.com/file/d/19iKi__TdS-vIL1efsw8WrqXNrWVJWYXe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BMX Simulator (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/BMX%20Simulator%20%28Europe%29.png",
    size: "208 KB",
    link1: "https://drive.google.com/file/d/1uYGmV4pGGwFohRclYXzFb8izOfMRP94F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Backgammon Royale (Europe) (En,Fr,De) (v2.50 4 Jan 91)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Backgammon%20Royale%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28v2.50%204%20Jan%2091%29.png",
    size: "108 KB",
    link1: "https://drive.google.com/file/d/1niFxDfTN_9B4DhguOqgb2kMlu3yrBz_4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Balance of Power - The 1990 Edition (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Balance%20of%20Power%20-%20The%201990%20Edition%20%28Europe%29.png",
    size: "201 KB",
    link1: "https://drive.google.com/file/d/1rCdENk4QLBFH4Zuo_M4YP1gTIoR9JhXC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ballistix (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Ballistix%20%28Europe%29.png",
    size: "191 KB",
    link1: "https://drive.google.com/file/d/1BlcmqvXywnt3mQuAMWUXbs-FJIJ-wyUO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbarian - The Ultimate Warrior (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Barbarian%20-%20The%20Ultimate%20Warrior%20%28Europe%29.png",
    size: "183 KB",
    link1: "https://drive.google.com/file/d/1sy8gpQtoKemU1GctMWNouHL4rgtweYCc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Chess (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Battle%20Chess%20%28Europe%29.png",
    size: "543 KB",
    link1: "https://drive.google.com/file/d/1wBBQJhZw1OoNyXvUFIf-MmfOrHWbfx94/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Probe (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Battle%20Probe%20%28Europe%29.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/1N9pOWz48OrgVdgCBhyl642qmpZ5JNzef/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battlehawks 1942 (Europe) (v1.0 3.1.89)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Battlehawks%201942%20%28Europe%29%20%28v1.0%203.1.89%29.png",
    size: "352 KB",
    link1: "https://drive.google.com/file/d/1p5BQljLtnTWKraYeV5ublnDU8rDY9rka/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beach Volley (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Beach%20Volley%20%28Europe%29.png",
    size: "633 KB",
    link1: "https://drive.google.com/file/d/1gLVDCow--Q_qyoCSE5GhIfe1z4un2J4C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beastlord (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Beastlord%20%28Europe%29.png",
    size: "1244 KB",
    link1: "https://drive.google.com/file/d/193EPt0SW-5hhduOd7-SJA1wW2-JeUsTH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beyond the Ice Palace (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Beyond%20the%20Ice%20Palace%20%28Europe%29.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/1Mo-XFmy6hyuoCsn8ol58OjEwHFIidWrL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Black Tiger (Europe) (Compilation - Les Chevaliers)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Black%20Tiger%20%28Europe%29%20%28Compilation%20-%20Les%20Chevaliers%29.png",
    size: "361 KB",
    link1: "https://drive.google.com/file/d/12-LnD0MYMJ3vlzBW709irKXeNuUP3I_S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blasteroids (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Blasteroids%20%28Europe%29.png",
    size: "271 KB",
    link1: "https://drive.google.com/file/d/1VM6SDo9w9t450TpokFmLLwyp17E43oLL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blazing Thunder (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Blazing%20Thunder%20%28Europe%29.png",
    size: "461 KB",
    link1: "https://drive.google.com/file/d/1qd6o7NyzFavbPEJ5P323vDFaqcx6vmkF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blockout (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Blockout%20%28Europe%29.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1kMyg-GezlnD3vxAfMtNUBG4u831s8Y-t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blood Money (Europe) (Budget - Sizzlers)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Blood%20Money%20%28Europe%29%20%28Budget%20-%20Sizzlers%29.png",
    size: "517 KB",
    link1: "https://drive.google.com/file/d/1q26SErpmLA9IL1pOMQc09up0RqrAWgSP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bloodwych (Europe) (Data Disk - Volume 1)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Bloodwych%20%28Europe%29%20%28Data%20Disk%20-%20Volume%201%29.png",
    size: "211 KB",
    link1: "https://drive.google.com/file/d/1A7mt-l05Klz0ZcAnHdFxQtRvTvoWWuE_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blues Brothers, The (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Blues%20Brothers%2C%20The%20%28Europe%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1s4lMyPQ2upxGQ4cOqDQ_7t_Y-3pJ2fDt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bob Winner (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Bob%20Winner%20%28Europe%29.png",
    size: "356 KB",
    link1: "https://drive.google.com/file/d/1k0VgieaaknTOGw7hknwknjSHVeit8qQ0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomb Jack (Europe) (Budget - Encore)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Bomb%20Jack%20%28Europe%29%20%28Budget%20-%20Encore%29.png",
    size: "110 KB",
    link1: "https://drive.google.com/file/d/1VydR2-I3gOQoArPrvv6u_TAKXiLJVTlE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bridge Master (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Bridge%20Master%20%28Europe%29.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1rM8h2py2JzXwDbMkPzStdu1I9qqfSIyY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bridge Player 2000 with Tutor (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Bridge%20Player%202000%20with%20Tutor%20%28Europe%29.png",
    size: "110 KB",
    link1: "https://drive.google.com/file/d/11Vw3BII8XrSrvYfVIpME5S7F1urkPODn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bumpy (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Bumpy%20%28Europe%29.png",
    size: "172 KB",
    link1: "https://drive.google.com/file/d/140Xho8ZjsrJKnvRrmAMTYGG-HxRyp3z_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Burger Man (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Burger%20Man%20%28Europe%29.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1GOLtksUpARIXim0jnDbqpv5MRyjEVhBb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Blood (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Captain%20Blood%20%28Europe%29.png",
    size: "366 KB",
    link1: "https://drive.google.com/file/d/1RxXzXl6NSNMfT025KpxDRqmGyFISudRf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Fizz Meets the Blaster-Trons (Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Captain%20Fizz%20Meets%20the%20Blaster-Trons%20%28Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "105 KB",
    link1: "https://drive.google.com/file/d/17yjkZ9gLtCL83x6-CeJ4xzL4Mkn_njft/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carrier Command (Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Carrier%20Command%20%28Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "547 KB",
    link1: "https://drive.google.com/file/d/1SPRmbzV4FNfUtCYgwAY-Z4bDxtWHwmVk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cartoon Capers (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Cartoon%20Capers%20%28Europe%29.png",
    size: "892 KB",
    link1: "https://drive.google.com/file/d/14ipD4u6KSL5hBQOL7aZB8dyJ-zZG42uH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Catch 23 (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Catch%2023%20%28Europe%29.png",
    size: "242 KB",
    link1: "https://drive.google.com/file/d/1qj_3bOc8mvTIREqqCP8un-DLO5QauhCr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Championship Baseball (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Championship%20Baseball%20%28Europe%29.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/19A3as1LKwxwaGO7eAzGJWpiy14CuluzN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Championship Cricket (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Championship%20Cricket%20%28Europe%29.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/1FcXrIWgw01__8R1FrkkD9owuOPixb803/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Championship Wrestling (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Championship%20Wrestling%20%28Europe%29.png",
    size: "260 KB",
    link1: "https://drive.google.com/file/d/15Gmx3SqhyxOJNMIF2UBEkVMZDy-fDFZt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chase (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chase%20%28Europe%29.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/1IOCBFK3K9Rf8heM-sWvuzPSrjGOnu910/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chase H.Q. (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chase%20H.Q.%20%28Europe%29.png",
    size: "283 KB",
    link1: "https://drive.google.com/file/d/17a766xNMr5LGTetwFCXJPeRv6KS6LnmE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chess Player 2150 (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chess%20Player%202150%20%28Europe%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1dJq2LWNmDSEpXzhTnQQCj95XTLj7CRyV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chess Player 2150 (Europe) (Compilation - TenStar Pack)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chess%20Player%202150%20%28Europe%29%20%28Compilation%20-%20TenStar%20Pack%29.png",
    size: "168 KB",
    link1: "https://drive.google.com/file/d/1RH0c_cWJuv8t4Yfa_o_Ul2pPh2IT1kuZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chess Simulator (Europe) (En,Fr)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chess%20Simulator%20%28Europe%29%20%28En%2CFr%29.png",
    size: "213 KB",
    link1: "https://drive.google.com/file/d/1cZdypI4AjfHimGPwFuue4jxeiqHl-npG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chessmaster 2000, The (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chessmaster%202000%2C%20The%20%28Europe%29.png",
    size: "304 KB",
    link1: "https://drive.google.com/file/d/1oIJOd2kHGbKyi7vwMF2lRia2OepblDlY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chicago 30's (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chicago%2030%27s%20%28Europe%29.png",
    size: "99 KB",
    link1: "https://drive.google.com/file/d/1l3J0PBA-i7v8wcn3TYISGhdhPtCJh8dE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chip's Challenge (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chip%27s%20Challenge%20%28Europe%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/18T5OqD4p9EZpyoYjw3ZcD5j-1lfZJZpO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chrono Quest II (Europe) (Dual Sided)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chrono%20Quest%20II%20%28Europe%29%20%28Dual%20Sided%29.png",
    size: "1334 KB",
    link1: "https://drive.google.com/file/d/1Ndqbny3NxzHMXRb5o8_Swqn2Uz6Fm8GW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuckie Egg (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chuckie%20Egg%20%28Europe%29.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1GnGx1eyo3HkGNgFH8H0Y0f780KKnLcJD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuckie Egg II (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Chuckie%20Egg%20II%20%28Europe%29.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/13gBtb6V1jBPi9BgxduRabUN3pP25c2Yk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clever and Smart (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Clever%20and%20Smart%20%28Europe%29.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1OsHnrzLJKZS2cj5QTgqWczYPwDaGxdfn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cloud Kingdoms (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Cloud%20Kingdoms%20%28Europe%29.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/10cM73BVZm02KpXqzyUDcyiTelzaUjpM6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Conquests of Camelot - The Search for the Grail (Europe) (v1.019)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Conquests%20of%20Camelot%20-%20The%20Search%20for%20the%20Grail%20%28Europe%29%20%28v1.019%29.png",
    size: "2801 KB",
    link1: "https://drive.google.com/file/d/1BSukUu5A75RXIo6MBS4JwS4X5CDJLGYv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Continental Circus (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Continental%20Circus%20%28Europe%29.png",
    size: "290 KB",
    link1: "https://drive.google.com/file/d/1t8_dceVzlYiG4-1jgteRicRaPzXszd8l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Corruption (Europe) (v1.9)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Corruption%20%28Europe%29%20%28v1.9%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1SwflzlycT2SXf8DlDeV4PnHdXMkT3ZiC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crack Down (Europe) (Budget - Kixx)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Crack%20Down%20%28Europe%29%20%28Budget%20-%20Kixx%29.png",
    size: "777 KB",
    link1: "https://drive.google.com/file/d/1CvM8MN35Ppnk9eGQrIqzeLKwps6pvxJs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cricket Captain (Europe) (v1.5 1991)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Cricket%20Captain%20%28Europe%29%20%28v1.5%201991%29.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/1BFvwi6o7ypv183mv_17ynbFJVHjYYV2K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crystal Castles (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Crystal%20Castles%20%28Europe%29.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1ZqgRyQloHRcYa-KkbEXbHkn8bBtB7UJw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyberball (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Cyberball%20%28Europe%29.png",
    size: "307 KB",
    link1: "https://drive.google.com/file/d/1sIOQeMT4qaakbXT4BGJ7H0KaT1odwIri/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cybercon III (Europe) (4.6.91)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Cybercon%20III%20%28Europe%29%20%284.6.91%29.png",
    size: "214 KB",
    link1: "https://drive.google.com/file/d/1WYcQZOfelvvO8Ya80zWuvbIn3c98P4dE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dames Simulator (France)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Dames%20Simulator%20%28France%29.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1MGn3d6iKVVvqMgOdZM_5GhtGVKq9rMvx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Darius+ (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Darius%2B%20%28Europe%29.png",
    size: "394 KB",
    link1: "https://drive.google.com/file/d/1IWm-iXCwFk7w6ejYQe83x8GsgVwAxJ5H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Day of the Viper (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Day%20of%20the%20Viper%20%28Europe%29.png",
    size: "350 KB",
    link1: "https://drive.google.com/file/d/14yC3pBSm0eicNDoWVPSPWieFUqEIBGIq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deja Vu - A Nightmare Comes True! (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Deja%20Vu%20-%20A%20Nightmare%20Comes%20True%21%20%28Europe%29.png",
    size: "420 KB",
    link1: "https://drive.google.com/file/d/1-8ag3NLDHseUSxAwE1ibmZQJg2rdvQ-g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deliverance (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Deliverance%20%28Europe%29.png",
    size: "1357 KB",
    link1: "https://drive.google.com/file/d/1hFvvMhpEdb3IRwvMzZdVdgCqZpuAn3s0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Demon Blue (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Demon%20Blue%20%28Europe%29.png",
    size: "200 KB",
    link1: "https://drive.google.com/file/d/1FGw9DspUA3Mnry-L2xYFL1AkVn8kgPkM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Demoniak (Europe) (v1.0)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Demoniak%20%28Europe%29%20%28v1.0%29.png",
    size: "506 KB",
    link1: "https://drive.google.com/file/d/1-RjQN6gCmJBEt9cJEpG59sF57zFFPdjF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dick Tracy (Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Dick%20Tracy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "398 KB",
    link1: "https://drive.google.com/file/d/12MgSNk-V62pNLvpRwy4mcnRhVzhWjsMZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disc (Europe) (Budget - Action Sixteen)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Disc%20%28Europe%29%20%28Budget%20-%20Action%20Sixteen%29.png",
    size: "619 KB",
    link1: "https://drive.google.com/file/d/1P5brk6DlF01kIZxVKfEbbGiPNnfSWzIr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dizzy Dice (Europe) (Budget - Smash 16)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Dizzy%20Dice%20%28Europe%29%20%28Budget%20-%20Smash%2016%29.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/17RAiB6QiOwNYRGKAQPauoOwS6y8IQVF4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon (Europe) (Compilation - Magnum 4)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Double%20Dragon%20%28Europe%29%20%28Compilation%20-%20Magnum%204%29.png",
    size: "552 KB",
    link1: "https://drive.google.com/file/d/1Y9BVKQOkqFZkrcOp5XBMFluF5nUbowPH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon II - The Revenge (Europe) (v1.2) (Budget - 16 Blitz)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Double%20Dragon%20II%20-%20The%20Revenge%20%28Europe%29%20%28v1.2%29%20%28Budget%20-%2016%20Blitz%29.png",
    size: "801 KB",
    link1: "https://drive.google.com/file/d/123F7SW6IgGrMV13_LADqgQecCXFNybCM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Spirit (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Dragon%20Spirit%20%28Europe%29.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/1VuLENJwjii8TmJceymaAZle6LFKdxbqI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Drakkhen (Europe) (v1.1)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Drakkhen%20%28Europe%29%20%28v1.1%29.png",
    size: "1130 KB",
    link1: "https://drive.google.com/file/d/1oiuMjRkElYS7_2Ejh2yRCT8jbnMjjMq6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Driller (Europe) (En,Fr,De,It)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Driller%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.png",
    size: "456 KB",
    link1: "https://drive.google.com/file/d/1USMKT8-lLbZULXDb2y3-zCKhAhqtFOOc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynasty Wars (Europe) (Compilation - Les Chevaliers)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Dynasty%20Wars%20%28Europe%29%20%28Compilation%20-%20Les%20Chevaliers%29.png",
    size: "341 KB",
    link1: "https://drive.google.com/file/d/1_9VW1K6cTF6rlMQrCs7ZH52udTQMh7ZP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "East vs. West Berlin 1948 (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/East%20vs.%20West%20Berlin%201948%20%28Europe%29.png",
    size: "626 KB",
    link1: "https://drive.google.com/file/d/10VY5cei-qjm0-hXAJuzpckJBv8ZBUUvt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elemental (Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Elemental%20%28Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "295 KB",
    link1: "https://drive.google.com/file/d/1pO-vbXw_qqXLq-4Dm2wq8mZEMhdrZNHI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elf (Europe) (MicroValue)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Elf%20%28Europe%29%20%28MicroValue%29.png",
    size: "157 KB",
    link1: "https://drive.google.com/file/d/1Dt_iBZgmzlbq23lJUqJ8GFGM3YNLGj49/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elite (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Elite%20%28Europe%29.png",
    size: "189 KB",
    link1: "https://drive.google.com/file/d/1wsQ8Om0Izt15yolnfEarCEVXS0kW9Xpz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Enterprise (Europe)",
    image: "https://i.postimg.cc/CxbM7mVX/Atari-ST-logo-01-svg.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/1VtbiAlxTH8-rlgUs-8Pcc95zQn0O47if/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Erik (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Erik%20%28Europe%29.png",
    size: "365 KB",
    link1: "https://drive.google.com/file/d/1UCB3EjgzqNGQzjKkG9WOZVEv3m6s_DJM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Exolon (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Exolon%20%28Europe%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1I6bc16kBQIcbN5dUWdO3_NtEbdttXMIx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Eye of Horus (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Eye%20of%20Horus%20%28Europe%29.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/1CGsS3YMeOlQe2uinoZEYElA9X4FsNQuZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-19 Stealth Fighter (Europe) (v1.02)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/F-19%20Stealth%20Fighter%20%28Europe%29%20%28v1.02%29.png",
    size: "775 KB",
    link1: "https://drive.google.com/file/d/1kOGmW-QLvsUwLM1EC6keVc-BZHLmqV6z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Face-Off Ice Hockey (Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Face-Off%20Ice%20Hockey%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "374 KB",
    link1: "https://drive.google.com/file/d/1r6FqajgEfsXm60sGCbU-flcRSbQksdIl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire and Forget II - The Death Convoy (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Fire%20and%20Forget%20II%20-%20The%20Death%20Convoy%20%28Europe%29.png",
    size: "272 KB",
    link1: "https://drive.google.com/file/d/1V52h-4cukTkwMH1YU-TwjrccKBd4ML1Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flimbo's Quest (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Flimbo%27s%20Quest%20%28Europe%29.png",
    size: "527 KB",
    link1: "https://drive.google.com/file/d/117lBSm-5EMf-gXSXmKONSR0FEncxvXog/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Football Manager 2 (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Football%20Manager%202%20%28Europe%29.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1kIVG5lnBqhEQraLy5e2Kb9pQzkHF4COu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Foundation's Waste (Europe) (Budget - Klassix)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Foundation%27s%20Waste%20%28Europe%29%20%28Budget%20-%20Klassix%29.png",
    size: "182 KB",
    link1: "https://drive.google.com/file/d/1ZEIMwscM-pE4xx3WstVS4BW1ys1O_dti/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Foundation's Waste (Europe) (Coverdisk - The One - Issue 22) (Amiga + ST)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Foundation%27s%20Waste%20%28Europe%29%20%28Coverdisk%20-%20The%20One%20-%20Issue%2022%29%20%28Amiga%20%2B%20ST%29.png",
    size: "523 KB",
    link1: "https://drive.google.com/file/d/1m4nQ-DOv5kw7bghHnouEHEdaRJjvtFgP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Full Metal Planete (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Full%20Metal%20Planete%20%28Europe%29.png",
    size: "501 KB",
    link1: "https://drive.google.com/file/d/1Ps_T6UOgLPynASZ8jPIhJp3xWp_iEctW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Future Basketball (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Future%20Basketball%20%28Europe%29.png",
    size: "215 KB",
    link1: "https://drive.google.com/file/d/1XJfOlvKGk8DheZBU4vA6y5RPSxfthahH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Future Wars - Time Travellers (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Future%20Wars%20-%20Time%20Travellers%20%28Europe%29.png",
    size: "1937 KB",
    link1: "https://drive.google.com/file/d/1QL51uU8JQ12rArSuuhS5pGmKwlQVbSuY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GFL Championship Football (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/GFL%20Championship%20Football%20%28Europe%29.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1Tr-4N14_RE-Z4RENvACBTIZtUg7ATPwv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaxy Force II (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Galaxy%20Force%20II%20%28Europe%29.png",
    size: "354 KB",
    link1: "https://drive.google.com/file/d/1LBOltSOQNhV83_RQmRQYKRGAE00mY7Q8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Over II (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Game%20Over%20II%20%28Europe%29.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/1Cd_6jRyxGc1wlx3SSe8XNvXVyx3FVtqc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gazza's Super Soccer (Europe) (En,Fr,It,Gd)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Gazza%27s%20Super%20Soccer%20%28Europe%29%20%28En%2CFr%2CIt%2CGd%29.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/10IUuKHDVA8N58DEYKb19eVQg1qSsdPzK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gemini Wing (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Gemini%20Wing%20%28Europe%29.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/14A0vjWe5bMHPTyvY3cSg_gou1YLh6Fiv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Get Dexter (Europe) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Get%20Dexter%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "88 KB",
    link1: "https://drive.google.com/file/d/1yFXCSSvFfuyLJKiDuYjPEl3eYlegJdH9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghosts'n Goblins (Europe) (Compilation - Finale)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Ghosts%27n%20Goblins%20%28Europe%29%20%28Compilation%20-%20Finale%29.png",
    size: "226 KB",
    link1: "https://drive.google.com/file/d/1qFk1xrXP52Lrr8jdaN3AbXMImKFkg0CC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghouls 'n' Ghosts (Europe) (Compilation - Les Chevaliers)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Ghouls%20%27n%27%20Ghosts%20%28Europe%29%20%28Compilation%20-%20Les%20Chevaliers%29%20.png",
    size: "290 KB",
    link1: "https://drive.google.com/file/d/1Z-RCb1N6LPVIeFOrI7DAWP_bEOfjzqgl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Go-Moku + Renju (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Go-Moku%20%2B%20Renju%20%28Europe%29.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1tbKawY6iOgRD0NxgdUUWNMe-Fb8AQQY6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Goofy's Railway Express (Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Goofy%27s%20Railway%20Express%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "193 KB",
    link1: "https://drive.google.com/file/d/1JBvpkZaSq_lgYEEz-y4EgStmPL96zdfc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gravity (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Gravity%20%28Europe%29.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1u2NE_6hUuImgQs6SMsZPl14eyPWoLeqf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Growth (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Growth%20%28Europe%29.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1JiRT9D6gO8Ym8WVTPG3ktFqPGIavqaom/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Guardian Angel (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Guardian%20Angel%20%28Europe%29.png",
    size: "282 KB",
    link1: "https://drive.google.com/file/d/1q7Mj80eh13Fe_POFWzE686jVQrkMoIXz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Guild of Thieves, The (Europe) (v1.0)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Guild%20of%20Thieves%2C%20The%20%28Europe%29%20%28v1.0%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1C-yCahCXN3TAGIxr3SHn-E01ttzNhlGV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hacker II - The Doomsday Papers (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hacker%20II%20-%20The%20Doomsday%20Papers%20%28Europe%29.png",
    size: "72 KB",
    link1: "https://drive.google.com/file/d/10imjcW-hwL6rvMuefWSqE0UCcmzOvnAh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hammerfist (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hammerfist%20%28Europe%29.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1wj7Jzt2ulWm-nFIE4feuyETebLpi5GBj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hard Nova (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hard%20Nova%20%28Europe%29.png",
    size: "814 KB",
    link1: "https://drive.google.com/file/d/1ME-lkpqrRunJi1HdeNUXaTNfiAJ6vZH8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "HardBall! (Europe) (Compilation - Accolade All Time Favourites)",
    image: "https://i.postimg.cc/CxbM7mVX/Atari-ST-logo-01-svg.png",
    size: "163 KB",
    link1: "https://drive.google.com/file/d/1pLGVe9V-VsHIGZ3T0PUDyz3wUD-b2q2H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harley-Davidson - The Road to Sturgis (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Harley-Davidson%20-%20The%20Road%20to%20Sturgis%20%28Europe%29.png",
    size: "654 KB",
    link1: "https://drive.google.com/file/d/14ONUYya5RWGQTpVpfX6xEscAApMXVuWP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hellraider (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hellraider%20%28Europe%29.png",
    size: "574 KB",
    link1: "https://drive.google.com/file/d/13C7DlrKJRPZSOzGjSdpSc2qjhhGlsi9F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hi-Tec Hanna-Barbera Cartoon Character Collection, The (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hi-Tec%20Hanna-Barbera%20Cartoon%20Character%20Collection%2C%20The%20%28Europe%29.png",
    size: "556 KB",
    link1: "https://drive.google.com/file/d/1lfgwl2Qzy2vKKSW0qyOwE6M9nuyBOm2u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hill Street Blues (Europe) (En,Fr,De,Es,It) (v1.11 26.3.1991) (Budget - Buzz)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hill%20Street%20Blues%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28v1.11%2026.3.1991%29%20%28Budget%20-%20Buzz%29.png",
    size: "327 KB",
    link1: "https://drive.google.com/file/d/10aQen8IQJwbCm5VRYMDSoxcSOdvLJPdg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hostages (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hostages%20%28Europe%29.png",
    size: "406 KB",
    link1: "https://drive.google.com/file/d/19raJS5wyu4iqZMdTgU_K7Hwy1bb-3Ut7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hotshot (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hotshot%20%28Europe%29.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/1u0sXbz8s7c9Ji8ywgWqsvBXnrjYsLLUu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hound of Shadow, The (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hound%20of%20Shadow%2C%20The%20%28Europe%29.png",
    size: "809 KB",
    link1: "https://drive.google.com/file/d/1givtC7FWWmgHZ_J4B1gijLXNNSJ5aWNf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunter Killer (Europe) (v1.01) (Budget - 16 Blitz)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hunter%20Killer%20%28Europe%29%20%28v1.01%29%20%28Budget%20-%2016%20Blitz%29.png",
    size: "243 KB",
    link1: "https://drive.google.com/file/d/1LDZPyq8nykLCkhgL89_Ef0suY9_uYDkV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hyperbowl (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Hyperbowl%20%28Europe%29.png",
    size: "200 KB",
    link1: "https://drive.google.com/file/d/1mFQSjyTf3FMIg2leVzJviIN92WNaYV8F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "I, Ball (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/I%2C%20Ball%20%28Europe%29.png",
    size: "107 KB",
    link1: "https://drive.google.com/file/d/1kSPbS-guHCJenetl1Wdmj7UxvBvEUml0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ice Hockey aka Face Off (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Ice%20Hockey%20aka%20Face%20Off%20%28Europe%29.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/1qS88RFHc_swQ9K4ikwgnjukqQ77FUfn-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indiana Jones and the Temple of Doom (USA)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Indiana%20Jones%20and%20the%20Temple%20of%20Doom%20%28USA%29.png",
    size: "113 KB",
    link1: "https://drive.google.com/file/d/1ZgXr3R3zOm1IMkwJlajvurV3axNwaQeH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Ninja Rabbits (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/International%20Ninja%20Rabbits%20%28Europe%29.png",
    size: "392 KB",
    link1: "https://drive.google.com/file/d/10PEWR6_3Cg9dXkfShEF9b3GZMD-elz-N/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Truck Racing (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/International%20Truck%20Racing%20%28Europe%29.png",
    size: "307 KB",
    link1: "https://drive.google.com/file/d/1eElQA1R8UqOsjImQt5CDVam4cduZLx8L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Interphase (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Interphase%20%28Europe%29.png",
    size: "209 KB",
    link1: "https://drive.google.com/file/d/17XWgMBni41yT2Q3pZ9tlkLp6UlZCbxmQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Italy 1990 (Europe) (Compilation - The Lineker Collection)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Italy%201990%20%28Europe%29%20%28Compilation%20-%20The%20Lineker%20Collection%29.png",
    size: "292 KB",
    link1: "https://drive.google.com/file/d/1fJFA_a7rq6dMiCpaS-3AIV6D1hMHjETC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ivanhoe (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Ivanhoe%20%28Europe%29.png",
    size: "1047 KB",
    link1: "https://drive.google.com/file/d/1mvmgokcN3c3RkMpA5B5NVoISCSqgP7en/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Pond - Underwater Agent (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/James%20Pond%20-%20Underwater%20Agent%20%28Europe%29.png",
    size: "410 KB",
    link1: "https://drive.google.com/file/d/13ATkHIYAI1-J4Bqgg6_DChOrZFIGgrpF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Pond II - Codename RoboCod (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/James%20Pond%20II%20-%20Codename%20RoboCod%20%28Europe%29.png",
    size: "473 KB",
    link1: "https://drive.google.com/file/d/1r1oa2YEkk3FawR4HnnxYYvhnVM7cGRZP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jewels of Darkness (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Jewels%20of%20Darkness%20%28Europe%29.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1BffaSElrVU4BGkNxMTU0AmcQ3lSHN6Zl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kick Off 2 (Europe) (v1.4e)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Kick%20Off%202%20%28Europe%29%20%28v1.4e%29.png",
    size: "285 KB",
    link1: "https://drive.google.com/file/d/1JPHyacUPlBY0BrDEP_SG7a8n2yJ2MSQO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kick Off 2 - Return to Europe (Europe) (v2.1e)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Kick%20Off%202%20-%20Return%20to%20Europe%20%28Europe%29%20%28v2.1e%29.png",
    size: "507 KB",
    link1: "https://drive.google.com/file/d/1NHOMXYQxkTb4QFPWzTrcJx_HZ52RQAmz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kick Off 2 - The Final Whistle (Europe) (v2.1e)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Kick%20Off%202%20-%20The%20Final%20Whistle%20%28Europe%29%20%28v2.1e%29.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1tBAiJA-pfIniE36hu-LhfaEzwzmGRkWD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kick Off 2 - Winning Tactics (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Kick%20Off%202%20-%20Winning%20Tactics%20%28Europe%29.png",
    size: "97 KB",
    link1: "https://drive.google.com/file/d/18xnwFJjh4XXRty5_c1ukGTk88iPHQZ3c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Killing Cloud, The (Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Killing%20Cloud%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "944 KB",
    link1: "https://drive.google.com/file/d/1mi4WPc7sAeTtdhf7-PPn_laWN6RtgEqC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King's Quest III - To Heir is Human (Europe) (v1.02 11.18.86)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/King%27s%20Quest%20III%20-%20To%20Heir%20is%20Human%20%28Europe%29%20%28v1.02%2011.18.86%29.png",
    size: "526 KB",
    link1: "https://drive.google.com/file/d/1HkBmeM6jamBCZvIPV11eYsgzDOSIiG1g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Klax%20%28Europe%29.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1oDs5zaDUA-_nro8cmG4cA4HYDSuLcApX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Laser Squad (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Laser%20Squad%20%28Europe%29.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/1Z5yxTuLXN54sP2uRBGmRxIqw0Gj054_J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Last Ninja 3 (Europe) (Budget - Kixx)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Last%20Ninja%203%20%28Europe%29%20%28Budget%20-%20Kixx%29.png",
    size: "1095 KB",
    link1: "https://drive.google.com/file/d/1cw1hRaQwB-Qw_N4HKbIHw6jpiGgiFCbd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Leader Board (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Leader%20Board%20%28Europe%29.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1vKFbeW1b-_WPrtNOBbQ5mV7Rgr2JUqEQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Leader Board Tournament (Europe) (Compilation - Leader Board Birdie)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Leader%20Board%20Tournament%20%28Europe%29%20%28Compilation%20-%20Leader%20Board%20Birdie%29.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1rrix0aZs47Gl91a50bXJRxE19WNIkbaT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Leisure Suit Larry in - The Land of the Lounge Lizards (Europe) (v1.04 6.18.87)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Leisure%20Suit%20Larry%20in%20-%20The%20Land%20of%20the%20Lounge%20Lizards%20%28Europe%29%20%28v1.04%206.18.87%29.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/1U0RCBaFjjEIMZQHhgd7WeRo3MGVsSzAa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lethal Xcess - Wings of Death II (Europe) (Amiga + ST)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Lethal%20Xcess%20-%20Wings%20of%20Death%20II%20%28Europe%29%20%28Amiga%20%2B%20ST%29.png",
    size: "1202 KB",
    link1: "https://drive.google.com/file/d/1hewlxN7sMW1kuAUbbyrEjrEBesIB1qqY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Light Corridor, The (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Light%20Corridor%2C%20The%20%28Europe%29.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1J-dlDvvKE4q6HrMBSoHrXke8bX2d40ed/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Locomotion (Europe) (Byte Back)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Locomotion%20%28Europe%29%20%28Byte%20Back%29.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1uR49z0e83vnPF2dTZdonFnLlCM2Ek2y4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Logical (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Logical%20%28Europe%29.png",
    size: "163 KB",
    link1: "https://drive.google.com/file/d/1A9r_I_7D28ndVRC55z6vVsyAO6FhZStR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lure of the Temptress (France) (17.6.1992)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Lure%20of%20the%20Temptress%20%28France%29%20%2817.6.1992%29.png",
    size: "1742 KB",
    link1: "https://drive.google.com/file/d/1F3crwhkkZB6XhB--eFNhmxsklHA25lbE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lurking Horror, The (Europe) (r203)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Lurking%20Horror%2C%20The%20%28Europe%29%20%28r203%29.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1Qx6p7Ko1mPd1yXliUizPT_X8xaF4yL00/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mach 3 (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Mach%203%20%28Europe%29.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1TkfnZgRQ38RAWG32Pp4DONTbqfDoTJ-y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mafdet and the Book of the Dead (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Mafdet%20and%20the%20Book%20of%20the%20Dead%20%28Europe%29.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1fMSVKfID4GE3N0tglavZXGQH_vVg4QKl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Manchester United - The Official Computer Game (Europe) (En,Fr,De,Es,It,Sv)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Manchester%20United%20-%20The%20Official%20Computer%20Game%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%29.png",
    size: "894 KB",
    link1: "https://drive.google.com/file/d/1mRQg51bnbcE5TR0DK_cSqpYLedqPcmeZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Manhattan Dealers (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Manhattan%20Dealers%20%28Europe%29.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/14hEhjtvaB4_VqaISGggUz1_JrdAMQVYb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Manoir de Mortevielle, Le (France)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Manoir%20de%20Mortevielle%2C%20Le%20%28France%29.png",
    size: "494 KB",
    link1: "https://drive.google.com/file/d/1k1GlggR7djFm1sws7D3Vm5TMlaz9wyTH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Matrix Marauders (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Matrix%20Marauders%20%28Europe%29.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/19kosCqmNeRcCcuv-9ecy07_lCTN3f_OB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mean 18 (Europe) (Compilation - Accolade All Time Favourites)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Mean%2018%20%28Europe%29%20%28Compilation%20-%20Accolade%20All%20Time%20Favourites%29.png",
    size: "361 KB",
    link1: "https://drive.google.com/file/d/1Vn0xj820ebinBymo921PnYFC1L2EI9t7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Twins (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Mega%20Twins%20%28Europe%29.png",
    size: "932 KB",
    link1: "https://drive.google.com/file/d/1RkPE3_aA4bAtBKHxLlPmGwxuRwmo7Xkg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mercenary - Escape from Targ & The Second City (Europe) (Compilation - Premier Collection II)",
    image: "https://i.postimg.cc/CxbM7mVX/Atari-ST-logo-01-svg.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1fZn_2iKTvk4uR-DzzGDDUFe24L0TdNTv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metro-Cross (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Metro-Cross%20%28Europe%29.png",
    size: "46 KB",
    link1: "https://drive.google.com/file/d/1OSzvZQUjA40zSxksQhcy3HWRcKJT5Sqs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mindwheel (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Mindwheel%20%28Europe%29.png",
    size: "177 KB",
    link1: "https://drive.google.com/file/d/1xbW9RB4V-wNaIlaA9DmW95cO-TagMxfP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Missing - One Droid (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Missing%20-%20One%20Droid%20%28Europe%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1KTKDF1uAQEK64rFl_C6RgQDx1Hot8tok/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mission Genocide (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Mission%20Genocide%20%28Europe%29.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1tByrG8LAdkOQDKc3v0MRwI8g6Kcjqyq2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monster Business (Europe) (Amiga + ST)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Monster%20Business%20%28Europe%29%20%28Amiga%20%2B%20ST%29.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1bRI60tGt1WIet8wIHr5CppI1MYC5PJs2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Never Mind (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Never%20Mind%20%28Europe%29.png",
    size: "241 KB",
    link1: "https://drive.google.com/file/d/11F9MjxeV9icXc8gKM1Gu17oAi_BzAfpU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nigel Mansell's World Championship (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Nigel%20Mansell%27s%20World%20Championship%20%28Europe%29.png",
    size: "691 KB",
    link1: "https://drive.google.com/file/d/17Egd_HuwyQJWpek0gVb0oYHrixTUS2n9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Night Shift (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Night%20Shift%20%28Europe%29.png",
    size: "376 KB",
    link1: "https://drive.google.com/file/d/1zeiFnafhr-WD5xFmMPTprKupRXpTaZIA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Night Walk (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Night%20Walk%20%28Europe%29.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1ETuo0at9CL7R_Ze6K8mvIR5uFAymhWem/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Rabbits (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Ninja%20Rabbits%20%28Europe%29.png",
    size: "382 KB",
    link1: "https://drive.google.com/file/d/1BwlPrtJSW7r9B-K8n2PjY84hI4GEXWG4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Remix (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Ninja%20Remix%20%28Europe%29.png",
    size: "1564 KB",
    link1: "https://drive.google.com/file/d/1Dp9NAsXgttuhRCsLVsVP6rmAOXAontKc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nitro Boost Challenge (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Nitro%20Boost%20Challenge%20%28Europe%29.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1taCqrwCCpVP9uDSnBAclRT036LP6ZVdP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "No Excuses (Europe) (En,Fr,De,It)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/No%20Excuses%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.png",
    size: "200 KB",
    link1: "https://drive.google.com/file/d/1AzoT0oY1WxJ4kBC1MVZ0BO-0Z-8gT_oH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "North and South (Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/North%20and%20South%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "557 KB",
    link1: "https://drive.google.com/file/d/1maomt_5S0K5PrDBIU-ADPXsOsl12Ox48/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Obliterator (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Obliterator%20%28Europe%29.png",
    size: "298 KB",
    link1: "https://drive.google.com/file/d/14kHVIdNL2VDksG0kZckfjc586azNg-kR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Official Everton F.C. Intelligensia, The (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Official%20Everton%20F.C.%20Intelligensia%2C%20The%20%28Europe%29.png",
    size: "174 KB",
    link1: "https://drive.google.com/file/d/1GSk7KJUz4WlkZWucCFzx9uqbLFaZDYdi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Harrier (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Operation%20Harrier%20%28Europe%29.png",
    size: "538 KB",
    link1: "https://drive.google.com/file/d/1yfQ7xkpKYga6I4J7ernpJGoEke88gT59/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Stealth (France)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Operation%20Stealth%20%28France%29.png",
    size: "1683 KB",
    link1: "https://drive.google.com/file/d/1Xok_FVADLbpvZUB6lRGDyC1opet8jj1u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Thunderbolt (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Operation%20Thunderbolt%20%28Europe%29.png",
    size: "1865 KB",
    link1: "https://drive.google.com/file/d/18ruqRuGer4reE-c90z0J8HA0pTjaqjXd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Orbit 2000 (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Orbit%202000%20%28Europe%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/131UwBxXkc7HxJf2hOoUYMJhH3GtEGI_a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Oriental Games (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Oriental%20Games%20%28Europe%29.png",
    size: "625 KB",
    link1: "https://drive.google.com/file/d/1Mzn4a2fHHExyEhbyT-Aq7yZSlRIlhf5x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Outcast (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Outcast%20%28Europe%29.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/1CoffV10hZe0WxXSRgRVRo2JLC02Qnk5J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Overlander (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Overlander%20%28Europe%29.png",
    size: "154 KB",
    link1: "https://drive.google.com/file/d/1lhJbExGntvib3pVOSpGPhlgFD8avQbQR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Overlander (Europe) (Compilation - Finale)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Overlander%20%28Europe%29%20%28Compilation%20-%20Finale%29.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1Wibjxymtl8bJpXD6RjPhgO7tIU2U8Iqi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Oxford Softworks Go Player, The (Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Oxford%20Softworks%20Go%20Player%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1nogfrphXPKrtXvWOYTFRyb-HevqcXDuW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Mania (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Pac-Mania%20%28Europe%29.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1Klu3Eg0OGP0A6NclZ2pnghG7fLZ3EZnF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pandora (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Pandora%20%28Europe%29.png",
    size: "174 KB",
    link1: "https://drive.google.com/file/d/1iYC68Smiv3FqQN1eoiHp6euoKb5VPMv8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy (Europe) (Compilation - Finale)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Paperboy%20%28Europe%29%20%28Compilation%20-%20Finale%29.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1hxtGwCi6U79zhpiEQSZMdFUG-WxdOxQN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Passengers on the Wind 2 (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Passengers%20on%20the%20Wind%202%20%28Europe%29.png",
    size: "185 KB",
    link1: "https://drive.google.com/file/d/1ltZG6Mi8pRIaa9by2cEGyUy4RgEaTlp9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pawn, The (Europe) (v2.1)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Pawn%2C%20The%20%28Europe%29%20%28v2.1%29.png",
    size: "395 KB",
    link1: "https://drive.google.com/file/d/1O9fNTS58tf-HXxlKfqQwcmz19VdJ7CpE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pharaoh III (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Pharaoh%20III%20%28Europe%29.png",
    size: "178 KB",
    link1: "https://drive.google.com/file/d/1jkl-AMvmg40kQbYN9oRCGn4J-234WU3v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pictionary - The Game of Quick Draw (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Pictionary%20-%20The%20Game%20of%20Quick%20Draw%20%28Europe%29.png",
    size: "272 KB",
    link1: "https://drive.google.com/file/d/1OPLMGd5RKNWJKYaBbX6n0q7RYIpujdTi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pirates of the Barbary Coast (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Pirates%20of%20the%20Barbary%20Coast%20%28Europe%29.png",
    size: "188 KB",
    link1: "https://drive.google.com/file/d/1he3rppc-qiKVViALL-WsxMsP44Lfu7uI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Player Manager (Europe) (Compilation - Football Crazy Challenge)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Player%20Manager%20%28Europe%29%20%28Compilation%20-%20Football%20Crazy%20Challenge%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1KGEbVldS_gRM6kdzvymsxM4L6puQ_zzB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Police Quest - In Pursuit of the Death Angel (Europe) (v2.0G 12.3.87)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Police%20Quest%20-%20In%20Pursuit%20of%20the%20Death%20Angel%20%28Europe%29%20%28v2.0G%2012.3.87%29.png",
    size: "511 KB",
    link1: "https://drive.google.com/file/d/1A35tyrSiyUKaSW678COb8lQuETnv89IO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Populous - The Promised Lands (Europe) (Amiga + ST) (Addon)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Populous%20-%20The%20Promised%20Lands%20%28Europe%29%20%28Amiga%20%2B%20ST%29%20%28Addon%29.png",
    size: "435 KB",
    link1: "https://drive.google.com/file/d/1_17RyVrNj8JePItz2sUGNWe7Dy6f6azA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "President is Missing, The (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/President%20is%20Missing%2C%20The%20%28Europe%29.png",
    size: "311 KB",
    link1: "https://drive.google.com/file/d/1P4_Sv_ab4IRT_thhNrQKkVuHTM59jwD5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Prince%20%28Europe%29.png",
    size: "556 KB",
    link1: "https://drive.google.com/file/d/1cIkEusHhKyQ3ycLcdOE7Kz8_3F7VPUgW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prison (Europe) (En,Fr,De,It)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Prison%20%28Europe%29%20%28En%2CFr%2CDe%2CIt%29.png",
    size: "420 KB",
    link1: "https://drive.google.com/file/d/11gCrDmNB91zp8_PgpOnYtXEOEY--c_qX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Projekt Prometheus (Germany)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Projekt%20Prometheus%20%28Germany%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/17fU_nBmMdcEeJ_PcKahWKR1-3u4kcS3X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzznic (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Puzznic%20%28Europe%29.png",
    size: "657 KB",
    link1: "https://drive.google.com/file/d/1CAXB4dOFbzlAS9Uff9Xu5UuivSY-XzGl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quink (USA)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Quink%20%28USA%29.png",
    size: "124 KB",
    link1: "https://drive.google.com/file/d/1t2Cq7y1gbdsbArixqmHVxXVhxnXOyxBe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raffles (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Raffles%20%28Europe%29.png",
    size: "190 KB",
    link1: "https://drive.google.com/file/d/1CDZdb6sx1HyYULkQXG3E6oZ64roERr70/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rally Cross Challenge (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Rally%20Cross%20Challenge%20%28Europe%29.png",
    size: "287 KB",
    link1: "https://drive.google.com/file/d/1nfEzP-G57AFl7kqU31s9ruP3Za5Aejaf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Real Ghostbusters, The (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Real%20Ghostbusters%2C%20The%20%28Europe%29.png",
    size: "210 KB",
    link1: "https://drive.google.com/file/d/1BVQwcMJr-dxt0LZngj_YmKHoBO1nvGk7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Red Heat (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Red%20Heat%20%28Europe%29.png",
    size: "316 KB",
    link1: "https://drive.google.com/file/d/1T9anqh_7GVbozxOrVUjHZsy5A5cHc4Uj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Red Storm Rising (Europe) (v743.01)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Red%20Storm%20Rising%20%28Europe%29%20%28v743.01%29.png",
    size: "514 KB",
    link1: "https://drive.google.com/file/d/1_07mZJZ5ozrutMxNsfZobGZObvGFhqHG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Resolution 101 (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Resolution%20101%20%28Europe%29.png",
    size: "227 KB",
    link1: "https://drive.google.com/file/d/1j-Z2gNBd6uB5yuGSEhUGA-NUlVZXC4B-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Revenge II - Revenge of the Mutant Camels II (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Revenge%20II%20-%20Revenge%20of%20the%20Mutant%20Camels%20II%20%28Europe%29.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1A3S6Ao_b6et9KhsucI33fQirUj3I0SPP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roadwars (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Roadwars%20%28Europe%29.png",
    size: "268 KB",
    link1: "https://drive.google.com/file/d/1MDD5EslEH91PODUDseUg2iEOXWA1CvP-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/RoboCop%20%28Europe%29.png",
    size: "315 KB",
    link1: "https://drive.google.com/file/d/1U9q_hSK8csprsaWrkXoXJjRAx3ZaQkvJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rock Star Ate My Hamster (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Rock%20Star%20Ate%20My%20Hamster%20%28Europe%29.png",
    size: "227 KB",
    link1: "https://drive.google.com/file/d/1e9eOuDml9UPAKwXWC8lqPXp6KuEoohdM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rody et Mastico III (France)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Rody%20et%20Mastico%20III%20%28France%29.png",
    size: "248 KB",
    link1: "https://drive.google.com/file/d/1L3KrPK31hj3WeU4m5MDj1JN7eyxkeI8E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rotor (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Rotor%20%28Europe%29.png",
    size: "190 KB",
    link1: "https://drive.google.com/file/d/1p3Yasz4N-NiBCrteCFQiycbHunKV_xzF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SAS Combat Simulator (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/SAS%20Combat%20Simulator%20%28Europe%29.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/13aBlmpuuPGZyTsKkATmOPe9zTgiSQ28q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sargon III (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Sargon%20III%20%28Europe%29.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/1fxB8WvHDydWi7XL78LO86uIUu5e-Gbeu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Seven Gates of Jambala, The (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Seven%20Gates%20of%20Jambala%2C%20The%20%28Europe%29.png",
    size: "460 KB",
    link1: "https://drive.google.com/file/d/1DsEWTsvEDKSW0vHBAi-y7Hm9Y7F1B1-z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadowgate (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Shadowgate%20%28Europe%29.png",
    size: "503 KB",
    link1: "https://drive.google.com/file/d/1S9JloGiLmToHCT8FN1fbGTh7-8O6tST6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SideWinder (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/SideWinder%20%28Europe%29.png",
    size: "571 KB",
    link1: "https://drive.google.com/file/d/1P9wU6o5IncbiavInwMDwTpWi3rpZrsrp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Silent Service - The Submarine Simulation (Europe) (v725.02)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Silent%20Service%20-%20The%20Submarine%20Simulation%20%28Europe%29%20%28v725.02%29.png",
    size: "124 KB",
    link1: "https://drive.google.com/file/d/1-9bJQ7zfludxz2LH2hmxa57-VRj9TYer/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Silkworm (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Silkworm%20%28Europe%29.png",
    size: "119 KB",
    link1: "https://drive.google.com/file/d/1FQJBeA3WKmaO64raYF1bIvokKagbxzgr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sinbad and the Throne of the Falcon (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Sinbad%20and%20the%20Throne%20of%20the%20Falcon%20%28Europe%29.png",
    size: "609 KB",
    link1: "https://drive.google.com/file/d/1sELT-g5JimHh49CHtsgpvZYWuyzfJTWk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Space%20Harrier%20%28Europe%29.png",
    size: "443 KB",
    link1: "https://drive.google.com/file/d/1ArQn_hxxHQctviWxvRK9EFD9aT8BdGix/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (Europe) (Compilation - Finale)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Space%20Harrier%20%28Europe%29%20%28Compilation%20-%20Finale%29.png",
    size: "474 KB",
    link1: "https://drive.google.com/file/d/1Lq4JNyF3olU4lzHXXLUwyWYDnmpvFSFr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier II (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Space%20Harrier%20II%20%28Europe%29.png",
    size: "392 KB",
    link1: "https://drive.google.com/file/d/1LYzdmLtRnKJvkP4u3Jfw8nDtIolbu7JM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball (Europe) (TRIAD Volume 3)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Speedball%20%28Europe%29%20%28TRIAD%20Volume%203%29.png",
    size: "186 KB",
    link1: "https://drive.google.com/file/d/12BHgiyDmqzsihugnfMWWdvcyAYGzjr-X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spherical (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Spherical%20%28Europe%29.png",
    size: "429 KB",
    link1: "https://drive.google.com/file/d/1D0Iz0wV3aXp_RsdMKvHmKmetINXV5ox_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spidertronic (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Spidertronic%20%28Europe%29.png",
    size: "167 KB",
    link1: "https://drive.google.com/file/d/1b49fVwj5ypPeasnJ82RTEB01MJ3sTnnJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spitfire 40 (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Spitfire%2040%20%28Europe%29.png",
    size: "179 KB",
    link1: "https://drive.google.com/file/d/1qyhdMubtAxLIOOg8A-PexWo_rlrScKvs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spitting Image (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Spitting%20Image%20%28Europe%29.png",
    size: "209 KB",
    link1: "https://drive.google.com/file/d/1MoY08vSNtwvOnek4-vaE22wNHsXXp4du/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Trek - The Rebel Universe (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Star%20Trek%20-%20The%20Rebel%20Universe.png",
    size: "217 KB",
    link1: "https://drive.google.com/file/d/1nDuaiQ3jEhWQAEeZtl5HUfAMm0Tw7hwQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars - Return of the Jedi (Europe) (Compilation - The Star Wars Trilogy)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Star%20Wars%20-%20Return%20of%20the%20Jedi%20%28Europe%29%20%28Compilation%20-%20The%20Star%20Wars%20Trilogy%29.png",
    size: "214 KB",
    link1: "https://drive.google.com/file/d/1QZy-lhbuGc7QFU5YWkzl4CJ2eV4gTSYO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars - The Empire Strikes Back (Europe) (Compilation - The Star Wars Trilogy)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Star%20Wars%20-%20The%20Empire%20Strikes%20Back%20%28Europe%29%20%28Compilation%20-%20The%20Star%20Wars%20Trilogy%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1zGMuhqbZHEiyrBmAN8x2vGVfLcs-dEqB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wrek (Europe)",
    image: "https://i.postimg.cc/CxbM7mVX/Atari-ST-logo-01-svg.png",
    size: "198 KB",
    link1: "https://drive.google.com/file/d/1uN3W5jKxsc08VoJYSpS6OjC4KH9BLn7s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "StarFlight (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/StarFlight%20%28Europe%29.png",
    size: "318 KB",
    link1: "https://drive.google.com/file/d/1tNXr0YK6XsPjZn0HoA8SyexIPImW2xBD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "StarRay (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/StarRay%20%28Europe%29.png",
    size: "401 KB",
    link1: "https://drive.google.com/file/d/1lPFiUhy1Km5j1zweZcJkmWsOujjM-bjB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Starblaze (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Starblaze%20%28Europe%29.png",
    size: "175 KB",
    link1: "https://drive.google.com/file/d/1IjsrIZA-6Xgrzij6Qf-yPcISOilag2qB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Starglider (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Starglider%20%28Europe%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1Qir7QoKcPfcZvYNmIcf_tDU0tJyGtNNM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Starglider 2 (Europe) (En,Fr,De) (Amiga + ST)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Starglider%202%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28Amiga%20%2B%20ST%29.png",
    size: "772 KB",
    link1: "https://drive.google.com/file/d/11xa_jAsngxsMre4vdH_ZRJiqdYn29F_a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Starquake (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Starquake%20%28Europe%29.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/11P6Lio1ZlP192ZSVBwXHBTU2wgSisqn0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Steel (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Steel%20%28Europe%29.png",
    size: "171 KB",
    link1: "https://drive.google.com/file/d/1Oc-d8oJKi3SPVx_ws5lVw_ZiRqNWuZQo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stone Age (Europe) (Amiga + ST)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Stone%20Age%20%28Europe%29%20%28Amiga%20%2B%20ST%29.png",
    size: "805 KB",
    link1: "https://drive.google.com/file/d/1YW_a6p6vJh3-F5WFKbcmReOBfdFkPSUw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Storm Master (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Storm%20Master%20%28Europe%29.png",
    size: "705 KB",
    link1: "https://drive.google.com/file/d/1g_2SwpqnfvXc83VOj35TWHA4dqL1FBrB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider (Europe) (Compilation - Les Chevaliers)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Strider%20%28Europe%29%20%28Compilation%20-%20Les%20Chevaliers%29.png",
    size: "330 KB",
    link1: "https://drive.google.com/file/d/1zYGM1DcFeKiokQzEIiTZkj_YtX6p2fFS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strike (Europe)",
    image: "https://i.postimg.cc/CxbM7mVX/Atari-ST-logo-01-svg.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1UXZqtVmZy9YhUkh8cWHfr2JMLFx-VxyQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stryx (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Stryx%20%28Europe%29.png",
    size: "559 KB",
    link1: "https://drive.google.com/file/d/19o_ssiUVHdtwc9wCt3GywSPOuHYHmOEt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sundog - Frozen Legacy (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Sundog%20-%20Frozen%20Legacy%20%28Europe%29.png",
    size: "244 KB",
    link1: "https://drive.google.com/file/d/1eaBR4ieYwm_FQ3Ag_b9QC7MVf3PzKR0S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Swap (Europe) (Budget - Fox Hits)",
    image: "https://i.postimg.cc/CxbM7mVX/Atari-ST-logo-01-svg.png",
    size: "182 KB",
    link1: "https://drive.google.com/file/d/1BKkPP-VTQcyQ64lFJpDg6eCUrq7GQsmG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TV Sports Football (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/TV%20Sports%20Football%20%28Europe%29.png",
    size: "234 KB",
    link1: "https://drive.google.com/file/d/1sCPOGDbf1qpCdX6-7uTPw8azxnilcPh0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tai-Pan (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Tai-Pan%20%28Europe%29.png",
    size: "236 KB",
    link1: "https://drive.google.com/file/d/1-sSHK0RFzxDsrXyLubF3rkqBhVzuSOAE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tass Times in Tonetown (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Tass%20Times%20in%20Tonetown%20%28Europe%29.png",
    size: "562 KB",
    link1: "https://drive.google.com/file/d/1YIAAG59x78ijGiobPIPJwLj7_PHvfHHV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tau Ceti (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Tau%20Ceti%20%28Europe%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1nHvyexbCfWMeWjbC5BlAk9tMRyT86IhV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tennis Cup (Europe) (Budget - Action Sixteen)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Tennis%20Cup%20%28Europe%29%20%28Budget%20-%20Action%20Sixteen%29.png",
    size: "581 KB",
    link1: "https://drive.google.com/file/d/1gNtmuhfrNwLqLu1NM5sxH1ff9fX8oLc4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terramex (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Terramex%20%28Europe%29.png",
    size: "219 KB",
    link1: "https://drive.google.com/file/d/1sS1jvLb6nxtXK_DlJICEUATeiWBh0mqo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Test Drive (Europe) (Compilation - Accolade All Time Favourites)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Test%20Drive%20%28Europe%29%20%28Compilation%20-%20Accolade%20All%20Time%20Favourites%29.png",
    size: "356 KB",
    link1: "https://drive.google.com/file/d/1U1XACPnZEZQdB0KT74XY4cqxYapYEMtI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Deep (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/The%20Deep%20%28Europe%29.png",
    size: "536 KB",
    link1: "https://drive.google.com/file/d/1NeHrNgIplYpkH56UtyiCPT-H23h4jiuf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Immortal (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/The%20Immortal%20%28Europe%29.png",
    size: "734 KB",
    link1: "https://drive.google.com/file/d/1gMBJE1aAibIdk-T0pdel23R3xhWdoO36/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Theme Park Mystery (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Theme%20Park%20Mystery%20%28Europe%29.png",
    size: "475 KB",
    link1: "https://drive.google.com/file/d/1Wij04BsU8xRi1k3NZEPLtU3WjObIna2Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thrust (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Thrust%20%28Europe%29.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1jcEGnw2uPO3mBrqVcOZ7NosTYcZ2M88P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Burner (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Thunder%20Burner%20%28Europe%29.png",
    size: "586 KB",
    link1: "https://drive.google.com/file/d/1fbk7rdghGNp8TzJPCjGt06yGhOhRhDIu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ThunderCats (Europe) (Budget - Encore)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/ThunderCats%20%28Europe%29%20%28Budget%20-%20Encore%29.png",
    size: "197 KB",
    link1: "https://drive.google.com/file/d/1A2GRjoH8K3Qfr1FIT1lI2Bb5ot_-t2yY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ThunderWing (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/ThunderWing%20%28Europe%29.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1FxaU3eJdNorpu_cAgtJJqA2Nmt2fYIOb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time and Magik (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Time%20and%20Magik%20%28Europe%29.png",
    size: "687 KB",
    link1: "https://drive.google.com/file/d/1kr7wUqLlUoaNbP7E0Hab5GbVzp-RPMgt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Timeblast (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Timeblast%20%28Europe%29.png",
    size: "39 KB",
    link1: "https://drive.google.com/file/d/1qN24jaMYvBQD0nU9xdlNpccZz_uL4n7F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tintin on the Moon (Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Tintin%20on%20the%20Moon%20%28Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "435 KB",
    link1: "https://drive.google.com/file/d/1gd6RaDSepswW8iahB25qUqg2OBweQbBa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toobin' (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Toobin%27%20%28Europe%29.png",
    size: "243 KB",
    link1: "https://drive.google.com/file/d/15JCET9tIQn6Z_4SiVQ8N23VY1NGWjm9-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Cat Starring in Beverly Hills Cats (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Top%20Cat%20Starring%20in%20Beverly%20Hills%20Cats%20%28Europe%29.png",
    size: "131 KB",
    link1: "https://drive.google.com/file/d/1Rdk1JmyFFysb_yUDk7LkJVtoqvh2B6rI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tower of Babel (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Tower%20of%20Babel%20%28Europe%29.png",
    size: "187 KB",
    link1: "https://drive.google.com/file/d/1Q25RwclgaSo4cGCeQooNp0RCmy8Fl48c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trailblazer (Europe)",
    image: "https://i.postimg.cc/CxbM7mVX/Atari-ST-logo-01-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/19C86qgNq3IV-2j8tLVVISyWG7CUFVZwX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trash Heap (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Trash%20Heap%20%28Europe%29.png",
    size: "346 KB",
    link1: "https://drive.google.com/file/d/1rKdocUKqwa3HciVsdbd4CZvghKy0SAee/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trauma (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Trauma%20%28Europe%29.png",
    size: "244 KB",
    link1: "https://drive.google.com/file/d/1rmt6Qe3fKv1XHhQiWDm4iMn4Zy2h8Qs-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Treble Champions (Europe) (v1.0)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Treble%20Champions%20%28Europe%29%20%28v1.0%29.png",
    size: "174 KB",
    link1: "https://drive.google.com/file/d/1JHhscIaHG314QHrxtftxH9e88hcBF11b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trinity (Europe) (r11)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Trinity%20%28Europe%29%20%28r11%29.png",
    size: "204 KB",
    link1: "https://drive.google.com/file/d/1nJOEjDiLnSFlvZEWySiBwxGgrxz-CMCK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trivial Pursuit - A New Beginning (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Trivial%20Pursuit%20-%20A%20New%20Beginning%20%28Europe%29.png",
    size: "268 KB",
    link1: "https://drive.google.com/file/d/1q3DKgPFmLw41P62-vahxgvAxgnsx81IZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turbo GT (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Turbo%20GT%20%28Europe%29.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/19KzSp4jQrsFYNzGIPop0d1LJMYSy-BZK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turbo OutRun (Europe) (Budget - Kixx)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Turbo%20OutRun%20%28Europe%29%20%28Budget%20-%20Kixx%29.png",
    size: "478 KB",
    link1: "https://drive.google.com/file/d/1joQbczokBbStvzAa964LWLjVuEfghMhf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turrican II - The Final Fight (Europe) (Budget - Kixx)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Turrican%20II%20-%20The%20Final%20Fight%20%28Europe%29%20%28Budget%20-%20Kixx%29.png",
    size: "735 KB",
    link1: "https://drive.google.com/file/d/1izyVzxohgOfYGV1ILDYRvejYGV38KRcS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Twylyte (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Twylyte%20%28Europe%29.png",
    size: "235 KB",
    link1: "https://drive.google.com/file/d/17m2KJkRty0G45hx530jezWhS6ltMyNWp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "UMS - The Universal Military Simulator (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/UMS%20-%20The%20Universal%20Military%20Simulator%20%28Europe%29.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1uVPT96DpsP6NkvPGpOPjch9vZd7chvqA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Universe 3 (Europe) (v1.0)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Universe%203%20%28Europe%29%20%28v1.0%29.png",
    size: "504 KB",
    link1: "https://drive.google.com/file/d/18AyA80LCBNouKFZ2ASO9Ger8AYERaLoD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Untouchables, The (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Untouchables%2C%20The%20%28Europe%29.png",
    size: "490 KB",
    link1: "https://drive.google.com/file/d/17ai-S1U92GhsoqGlFRNgC5uNQMpUwqHa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vectorball (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Vectorball%20%28Europe%29.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1B54-b_a1Rfs2eDB964KNw2173avdGAZf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vindicators (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Vindicators%20%28Europe%29.png",
    size: "576 KB",
    link1: "https://drive.google.com/file/d/1B7Fd41sBqJsNy8DU4GAtl9s5svRaFd8a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Virus (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Virus%20%28Europe%29.png",
    size: "46 KB",
    link1: "https://drive.google.com/file/d/1xKURTd401PaKEt2TaVtvcq3S7EAdCF5i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wanderer 3D (Europe) (Budget - Encore)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Wanderer%203D%20%28Europe%29%20%28Budget%20-%20Encore%29.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1KDyhep72ebHOorwROhvSCkGdUc-kttDm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wanted (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Wanted%20%28Europe%29.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1MxFYvyUqVq7haHvarUOgA2tsvL1Sa0g3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "War in Middle Earth (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/War%20in%20Middle%20Earth%20%28Europe%29.png",
    size: "711 KB",
    link1: "https://drive.google.com/file/d/1tTwaBFg7hD2idCn9A86K9ORlQAh7pAjP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warhawk (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Warhawk%20%28Europe%29.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1SUlHWPJ-MWxs1SIPu02Hf48A1Szifuxw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warlock (Europe) (The Edge)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Warlock%20%28Europe%29%20%28The%20Edge%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/17SssC65ACW4240Hob-pQQHUz7w3othWL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warlock's Quest (Europe) (Budget - Pocket Soft)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Warlock%27s%20Quest%20%28Europe%29%20%28Budget%20-%20Pocket%20Soft%29.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1kDZy33zFI8nxXqrzHEGp2I3CL_MQfEUp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Where Time Stood Still (Europe) (En,De)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Where%20Time%20Stood%20Still%20%28Europe%29%20%28En%2CDe%29.png",
    size: "225 KB",
    link1: "https://drive.google.com/file/d/10tT7MzYaA8pOOaiRy0-CIa-nFR39wjuG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Whirligig (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Whirligig%20%28Europe%29.png",
    size: "101 KB",
    link1: "https://drive.google.com/file/d/1x4V4qSPorWHeyT7Q7iCtDA_0LcXkj3Nl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wild Streets (Europe) (Budget - Fox Hits)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Wild%20Streets%20%28Europe%29%20%28Budget%20-%20Fox%20Hits%29.png",
    size: "682 KB",
    link1: "https://drive.google.com/file/d/1xJiUECMPX5FfSPaNMGZrZ_KaicGdLdNV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winter Olympiad 88 (Europe) (Summer Pack)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Winter%20Olympiad%2088%20%28Europe%29%20%28Summer%20Pack%29.png",
    size: "359 KB",
    link1: "https://drive.google.com/file/d/1JxQdb002L6pWgxcH0ta7gULAkc9wiX4k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Championship Boxing Manager (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/World%20Championship%20Boxing%20Manager%20%28Europe%29.png",
    size: "594 KB",
    link1: "https://drive.google.com/file/d/1z9vPychFvhIFFXbuGgFJlL7rcgdl-uEB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Class Leader Board (Europe) (Budget - Klassix)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/World%20Class%20Leader%20Board%20%28Europe%29%20%28Budget%20-%20Klassix%29.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1SLZ0xUIJBNf-srlErWzhQcc0L9uIOiEm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wrangler (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Wrangler%20%28Europe%29.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/152CUS5u5eBFqKVBlSdGixRltU_ONAyI-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Out (Europe)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/X-Out%20%28Europe%29.png",
    size: "324 KB",
    link1: "https://drive.google.com/file/d/1rajQVIn6vRQKLXh8SzNoEYjOrc6ufCEG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenon (Europe) (Budget - 16 Blitz)",
    image: "https://thumbnails.libretro.com/Atari%20-%20ST/Named_Boxarts/Xenon%20%28Europe%29%20%28Budget%20-%2016%20Blitz%29.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1hEmj7l6eHVZBS5wjY4LHtRE8coWvEk8N/view?usp=drivesdk",
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