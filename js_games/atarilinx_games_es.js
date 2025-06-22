const roms = [
  {
    name: "APB - All Points Bulletin (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Sd2e9RvVcFeNhAy0MNqPuXmgydyCMTqa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Vs Predator (Prototype) (1993) [!]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1gSCFL_keKi5pE1Hgdabc7j3oy735vmAE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Awesome Golf (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1SgmlxW3P7gh3P3sf3UzD2-41fs0Zdv-H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Baseball Heroes (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1cCwBxmApFY5IcQj8y0KBJahxG1QduByk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Basketbrawl (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1s087RCEvMc5BJrSehKpLfwM_EfsN0Grn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Basketbrawl (1992) [a1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1CLKuJKgmO45nD-_s0siI1f3GQXzFvm0o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Returns (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1RCEW8X5izUGibsvZzmFi20RgtIB-pBbh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Wheels (1993)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1_Nt2bj9rywJfOTeucCz4gw6-eY0Efu-H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Wheels (1993) (Beyond Games) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1zA4N73Yo4C-iloVl1zVRqBYRTewzIsHp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battlezone 2000 (1996)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1prV_iJNKr7xG7mOVW-DK8EvthKsx1ifR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bill & Ted's Excellent Adventure (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1JRxH4gfOrI4IghX9BCSPhPnuByEgC-Wu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Block Out (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1uFN4UYpvhinMUEAqmvkI6tDJ0GD7g9oi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Block Out (1990) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/18f6faeR1HQq364P1DtgbPoyv-5kHkxj-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blue Lightning (1989)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1a2Dv9n7dmr4mDhXp0eI_TS5W6Pb30qDf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blue Lightning (1989) [a1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/11bT4RkWrHln_9qc1KWN1o67UvdJTngbZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blue Lightning Demo (1989)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1WAEQLLy_oWtYoOKQXGBQR25Is1okNg9f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blue Lightning Demo (1989) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1YjqyVoJJSHgInmzTEXFYdo77NI5iT6gX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubble Trouble (1997) (Telegames)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1kyYt_ti9rLnkTswH3fi5OUUkYkSZXoSk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Games (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1GiKSwxl54s9ERG6fd2FdTpGW60hf6RfD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Games (1991) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1hs1i0MCraFdZPnO_Wjk2oA8vMPPNzK4u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Centipede (Prototype) (1987) (Shadowsoft)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1tVaJhFGYW7MDJ2joED-_6ZCMYFYM2ZJV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Checkered Flag (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1bmFGuq0p0ZxKDwLaPm4v1Ni-ZF495tyk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chip's Challenge (1989)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1ciOT3Hc8inag2qE3GDf-z0INSIUmNCTP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chip's Challenge (1989) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1UnDSNY8g-v9tBxFef_1ZebWN6HfEXN0Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Conquest of Zow (1996)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/13afYkaSfwtanH11e8T7ejfa_s3DE_41r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crystal Mines II (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1VE3J8Ugv6PgnS7f5jUo2fodTM0GoDH6_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crystal Mines II (1990) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1hvxYqKfZF2EPasL8-3Oax7HdwRzAUEyb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Strike - Return to the Gulf (1993) (Telegames)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1yNeXeuUvpowEz-bVPG1RE78SY_LkCdR_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinolympics (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1WOB51ZBSwXSTPfASjUoPM4tagmQj4bsO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dirty Larry - Renegade Cop (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1YqNhUlvplJ_yy4C8JvpgcMjo-SUFwlSW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon (1993) (Telegames)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1u2G_WWKZ6lOXnVMfvmzTs3r0aKXrABS_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dracula - The Undead (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1RhtYSzSj9kfqtxjkNGnGgJy7vhkIMfyP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragnet (1995)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1khACD9C4OEslmOxqoCjDYjFKTYxZtNHj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Electrocop (1989)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1NI3frEOfMCFEnz3iC9ZcBcFTHd-6MaW2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Electrocop (1989) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1mya_rxUbELMhG2z9x4eLL4yUTEHkQ1Wb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "European Soccer Challenge (1993) (Telegames)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1pmz7NhVTjBTiE-3ws0bGMUZOczMP8kzC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "European Soccer Challenge (1993) (Telegames) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ykEVrO7MtS--aF_caosg194ukspMBn4B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Eye of the Beholder (Prototype) (1990) (NuFX)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1v8ZYtygjzngO7uj_of9fTiDlbhhXL2oa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fat Bobby (1997) (Telegames)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ZkP9MErpTc9WzPqtTh-cPWbFi8N_RUSj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fidelity Ultimate Chess Challenge (1991) (Telegames)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1PN7Ajw_bv1YpVb4sql8ddAUDEF_cSXaq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fidelity Ultimate Chess Challenge (1991) (Telegames) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1bZ-k_WAVey1O-BKRfEU0XilvBi8CHDbD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gates of Zendocon, The (1989)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1GZoyY06zxqPdpOyhM-NAiPG1IAKl1PD3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gates of Zendocon, The (1989) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1QBpgbzcOFosk40imZMlmfuQY6eAu-T0k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gauntlet - The Third Encounter (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1ZFinhLGgcsqwcc92xAj7ykfDPq10uTFO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gauntlet - The Third Encounter (1990) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1yiPACyOnBqjMTgvKdN7ds2LGyrizNlDD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gordo 106 - The Mutated Lab Monkey (1993)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Ce9RSVmRFSKl_xcZJQ4IsZ3VCvKlk9lL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hard Drivin' (1993)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1gnX_o3Z4TBX7kpJSIMGwNWcm_v4QMIUJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hard Drivin' (1993) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1AB4lY493Fhi-i7YVDEoOjcqvRvJWhYfN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hockey (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Vi9Lz32yglFNNS1CyXHJTFHoYfGrTl25/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hydra (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1yIawW9mzRaebrZjNvvusR7rMYokaTL7X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ishido - The Way of the Stones (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1rVx-M1WNxhFboeiFDEvwL9YkwpWIbAI_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ishido - The Way of the Stones (1991) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1zjf8jna7IQ0H7ZZ6fBoWgq0CC-9cRjUe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jimmy Conners Tennis (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1x78d2f1AHXWW7BC3HJlG4MTwFpUzbccr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joust (1993) (Williams)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1cVKQbgM72V8_MHwjygh1jLx9yrmZz28R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joust (1993) (Williams) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Q4XtmvXOjgovP3LOCx6bYJovkW4n7hNK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1PuCIA0ihc53Evy46JYud4rgKAxORxEUl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Krazy Ace Minature Golf (1997) (Telegames)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1lK_1gmGLXeISzimuW9G6KzmJZJ_9sBol/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kung Food (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1b2q8Dz0gZ_myUoCAxePSqp7hKMUxHGRR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (1993)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1SlzYf2dtYLU7_pUGnks83sqSlBw5LHw0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lexis (1999) (Songbird)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1q3iuaR50O3Jo3JpJsGBLactayWqiKsb5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lode Runner (1996) (Kurt Olsen)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "47 KB",
    link1: "https://drive.google.com/file/d/1P1wmZGmmKgWw5EiJ3UkVz0MwM64gKsQt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loopz (Prototype) (1992) (Handmade Software)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1mQlJ20jUgccz7Lt7xlW5JiAGv1-d7GsK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lynx Boot Image",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "1 KB",
    link1: "https://drive.google.com/file/d/1EtcdvL7RPpWRyVshtJVsqZGUtb03IRIj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lynx Casino (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1k3r0aykwyAkcFihva8t486PMHTWAxf9-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lynx Diagnostic Cart V0.02 (1989)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/17rN15_FmSTG3ry99Yzl7JMBdPGDNENvH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Malibu Bikini Volleyball (1993)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1-bvsrA35gQn3QUD3neZvHG-niJehFPd_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marlboro Go! (Prototype) (1993) (Digital Image)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1cFdxTzYI-RUjJGz_k3yXuY_rygjjyX1j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1Y1dUXgS2GrIZQDbJQ561lrp1Ixuqx1Rz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man (1990) [a1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1jLPiqNpChQTDl16b1BFPUaYALAhMgRZA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL Football (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1uYh_m2X4MF_7CBsEhIIIseYgezpmmuwh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/12kWmxSNyG1zGIjLCSn_DZKLhrm91oPg7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden III - The Ancient Ship of Doom (1993)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1IeJllJtyNx9h_UcXRVRhNl6odGr8CzR_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Land (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1BGTuFzNhz-2lFCxDArS8Bh1M11m4q34-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Land (1991) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/11NyCl-wrlwHP-VlVs9YGTWag1PIqxgpW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1H36zzOtT4wIFzaxwrHGQRa3klFA355FT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy (1990) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1LxXbf8Y6EDgxl0i0-DCXGN6fTf8M94LH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pinball Jam (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1cuyJcf6Pf3Tqc_DcIVfgBwU0CjGWgUdI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pit Fighter - The Ultimate Competition (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1G3zwIiXcoVsjR3-1E0YEJ9hGP1Xr8P8Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Factor (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/10gCTuSCEpn56aqCQnsKRQ-Hnc3MNzncV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Qix (1991) (Telegames)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1fFE_b5QZIPZFmyjHDekoD_yMigRwbwz9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Qix (1991) (Telegames) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1S8nbd98BsmC3K5Ep33W9XyNWcNRIpscZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raiden (1997) (Telegames)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/116AQcpjuc3DRavBuGfIzZuAkyipypdt8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampage (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1GcxKB1tVby3XDWG-lL4M3mM18NKxMHFN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampart (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1BPeaQgFJ4eOV3Sa93KQw7vEDANWEnlFY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Riot 4WD (Beta) (1994)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ljQenyUYR8uKOeFUjDJI0CZcXEZ_GmVU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoadBlasters (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1xe4E_cSt2zNVbekAYjl8yIWuO28G5EIu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robo-Squash (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/12pYfh84aIYwFegcIzWGMBLx844c7UHJ5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robo-Squash (1990) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1spEwjoF-bYlxgUgfVw1F9ZRI7pGp8MJl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robotron 2084 (1991) (Williams)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1H0EM0qw5O6NXB8QwKfW54uvbaHsGlEd2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rygar - Legendary Warrior (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1UKFeaQg7IPkbtoWHFzwbS6Kk14Y3Cigb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "S.T.U.N. Runner (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1myfORGb-sSZ-ypzqO14CkXaFuo32E7RN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scrapyard Dog (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1o62PB9varhG7mNK0lhpReqJh7MjrOf5o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow of the Beast (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Dae_Bmq0obcKwgb3GDIqdplpyr1zUmaT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1rrJOGMjOAnBz3NZksxy6kUZ0GxtP0CNv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (1990) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/16bhc5GN8nQya4JBvQAgSCFczXg6jFgXL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Steel Talons (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1c1dy9-8X8KldV8sNcx3ubmIpns9We-IE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Asteroids & Missile Command (1995)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1vYzPZmZTEbhrOF6dYBNKUr6IWFTQcORs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Asteroids & Missile Command (1995) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1wSp6gqRsXmC5E-bX2fB7jJPHm1xQO5x6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Off-Road (1996) (Telegames)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1OsWasZNjgUq-rWGmfQv0K6B7-lVKeM49/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Skweek (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1IFPCjqeXz2Obl4p8wZaSswulEVU9Yd0n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Switchblade II (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/12pPdz7oQs0kBk7IrwqbcQoPVp82eFAXW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "T-Tris (1996) by Bastian Schick",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1l7iqwgGSTIWX0e9I_elkVhuBR9pPVBnm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "T-Tris (1996) by Bastian Schick [a1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "15 KB",
    link1: "https://drive.google.com/file/d/18vINXi_v62OIEHgkMjTv9rvTFPjLt4PV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Todd's Adventure in Slime World (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1M1SQln9dHWRd1pFFwqnY_T7NVufSb90v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Todd's Adventure in Slime World (1990) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/11ep_UwIPyfJkKLjeMNu1cQxCcY8EUZf2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toki (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1b1vlxE5KeWWMTMN1cZAKvnMvnzCG5njf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tournament Cyberball 2072 (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1hyylrjQn-vNZOCXi7n44MtaMcjtf0S66/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turbo Sub (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/15obWFaCoh-Mu76jdBOQywUFbs5TsSJ38/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turbo Sub (1991) [a1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1uU0alLV3GEDRN7rBKPpbv51iOpCmZAJJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Viking Child (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1c37VB0WD8dD1Z9hJblQHym2CI2ThhktA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warbirds (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1lgie_Ro660tTf57EwgwTmXuFbfv0ZyV_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warbirds (1990) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1dxo9lhb35UnUg0pPF58I2Ukb5lf5f8Py/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Class Soccer (1992)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/12PUHKVSj-nT5yQcdBrQFyAc80zvk7k6y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenophobe (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1OUF_Su_cQJK8hdCTDEvRwPwbseL6zYqA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenophobe (1990) [a1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/11EzrYld-wKEJadagkh0vbujfNVrj7GNE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenophobe (1990) [a2]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1GLCyn58BEfgmWSumcMHMPEF8onLDVz8d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenophobe (1990) [a3]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1AgNjSYLt4RmYGuSZOMBPfsOJHZNZ3XX6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xybots (1991)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1V4YozsmfdwEgheC1xZsU-T29BOyf8IqD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zarlor Mercenary (1990)",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1VuyTXkeAPpp0kfFEITgNwM8X-R7A9cJh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zarlor Mercenary (1990) [o1]",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/10rU4CWc7WQS9i0XMzhHARhohcsn6med7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "lynxboot",
    image: "https://i.postimg.cc/WpGLM91c/Atari-Lynx-logo-svg.png",
    size: "1 KB",
    link1: "https://drive.google.com/file/d/19x_e_JSFlMn0_-JCbHoT3eqpTXjmj3xT/view?usp=drivesdk",
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