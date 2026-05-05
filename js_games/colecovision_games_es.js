const roms = [
  {
    name: "2010 - The Graphic Action Game (1984) (Coleco)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/2010%20-%20The%20Graphic%20Action%20Game%20%28USA%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1wdshUn0ZGhO7zaJxSmRcZVP6FMEGIrOB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adam's Musicbox Demo (1987) (Coleco)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Adam%27s%20Musicbox%20Demo%20%28USA%29%20%28Demo%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1ZZhCQIT4h_OcHlJxptfo61ueud2gZc7f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alcazar - The Forgotten Fortress (1985) (Activision)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Alcazar%20-%20The%20Forgotten%20Fortress%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1Gq7kg5cCO49wJFI5c5bIZw7-YzTCBUcK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alphabet Zoo (1984) (Spinnaker)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Alphabet%20Zoo%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/11Ljj41WlOibOJbtv2C9P1uLVgZ2kwqQy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Amazing Bumpman (1986) (Telegames)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Amazing%20Bumpman%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1YcgUGvhwDfLpqpdmoE22vTylCBH2hU9N/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Artillery Duel (1983) (Xonox)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Artillery%20Duel%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1UTvLbzcjhOzu3j6B8J45t2Bbsq9wEhhD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beamrider (1983) (Activision) [!]",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Beamrider%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1do8ocGfWSaeATjbc9tYts20IErLtEdO8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blockade Runner (1984) (Interphase)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Blockade%20Runner%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/14MeqBgr7g15Wk_-33AtI2vPEcDOhS0bI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brain Strainers (1984) (Carousel)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Brain%20Strainers%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1ZscnmF4M3JiWxlqfqgqdYBEs2RDbYRBc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cabbage Patch Kids Picture Show (1984)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Cabbage%20Patch%20Kids%20-%20Picture%20Show%20%28USA%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1DnE1V-Ejd7qzd9aQ-q4UPeLWokpZes9G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Campaign '84 (1983) (Sunrise)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Campaign%20%2784%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/10wlea73HQ5ErN1iFDMW8ud6nQB7ZFshw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Centipede (1983) (Atarisoft)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Centipede%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1zIHTN24C2apATbPTYG7L2MGJeerYdXPs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Norris - Super Kicks (1983) (Xonox)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1PFCW3We9pPSLU6Y-jE9jESKXXXlA28Fl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ColecoVision Monitor Test (1982)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/ColecoVision%20Monitor%20Test%20%28USA%2C%20Europe%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1BSeASJ9ZpT9_Ldfjj90O4LWsxislgF5G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Congo Bongo (1984)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Congo%20Bongo%20%28USA%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/14uuqyfJFQsks6-FrW6IAbYM0V6CSuDxS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cosmic Crisis (1983) (Bit Corp)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Cosmic%20Crisis%20%28Europe%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1beCcsV3tJVGw29PnQcQjCKmjdEoJ6C14/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dam Busters, The (1984)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Dam%20Busters%2C%20The%20%28USA%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1S61CQMbDfRtg1Fe5QAYt7a1qocFp_BaM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dance Fantasy (1984) (Fisher-Price)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Dance%20Fantasy%20%28USA%29.png",
    size: "8 KB",
    link1: "https://drive.google.com/file/d/1JTG8qYfhNMJS4W2wBm2Zs-azVjoeJolc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Decathlon (1983) (Activision)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1u07ZjniQ_ukySSVoNNp8hD3SsjpD7ZZA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Defender (1983) (Atarisoft)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Defender%20%28USA%29%20%28BUG%20Fixed%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1r3nI6e8ghXVWiCRXfthvnLB8ROZ89UBJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Destructor (1984) (Coleco)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Destructor%20%28USA%2C%20Europe%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1Nnjcf9AyIi54D-Le-Cehn5ZGcbLQ9mXf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Jr (1982-83)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1o6w25oU-xzEneB_sVl_U8JQjkeuZFYe2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dr. Seuss's Fix-Up The Mix-Up Puzzler (1984) (Coleco)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1j7J579GhkcmFU8qY9XMPUXPnD6V4Xoxv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DragonFire (1984) (Imagic)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Dragonfire%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/110xl6hboSUwqLn0rr4-_oEDV9G-ISOFh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dukes of Hazzard, The (1984) (Warner Bros)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Dukes%20of%20Hazzard%2C%20The%20%28USA%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/15YLPsUdox07H-GYJ0aurECtYFda8ZMes/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Escape From The Mind Master (1983) (Starpath) (Prototype)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1eKTQoUSSANsuC7927kOKS1sV6OZKtUL1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Evolution (1983) (Sydney)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Evolution%20%28USA%29%20%28Unl%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1k5DLUs03eRwj0SCi5XnImWWwlV0IKE4K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fall Guy (1983) (20th Century Fox) (Prototype)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Fall%20Guy%20%28Europe%29%20%28Proto%29.png",
    size: "28 KB",
    link1: "https://drive.google.com/file/d/10hgXO7dNhDWJ2WUcmvYG2iUqSam7CMzK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fathom (1983) (Imagic)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Fathom%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/12AbTXcEaokVPboAFLdz4ZThFaeGcKiq4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Test Cartridge (19xx)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Final%20Test%20Cartridge%20%28USA%29.png",
    size: "8 KB",
    link1: "https://drive.google.com/file/d/1sDTVHYweKfALep1laIFDxFN-A-pxbSkN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flipper Slipper (1983) (Spectravideo)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Flipper%20Slipper%20%28USA%2C%20Europe%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1aWd35V_26qZXYeOCLaZOXBE9t57gl3qY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fortune Builder (1984) (Circuits and Systems)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Fortune%20Builder%20%28USA%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1qP3QNCPoZv4_sm5dLc_BALqEBezM22f1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fraction Fever (1983) (Spinnaker)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Fraction%20Fever%20%28USA%29.png",
    size: "8 KB",
    link1: "https://drive.google.com/file/d/1Ts3uvxdY9uHfouX0Iv9gK2Bhz8tDH7Gi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frantic Freddy (1983) (Spectravideo)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Frantic%20Freddy%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1Oci7VHq4Szb4hLKcddPYK5ZOxgKh_4H6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger II - ThreeDeep! (1984) (Parker Bros)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1Z3_Rvb66ia08mxP2cx2SzeQDhr3KR5Th/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gateway to Apshai (1984) (Epyx)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Gateway%20to%20Apshai%20%28USA%2C%20Europe%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1_re-jSyhjNV9rntb48RBgmCLS_ayWmQ0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gust Buster (1983) (Sunrise)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Gust%20Buster%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1xwl_FR2sxk2FyTZO1mk6Ouje12Ko5_NA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gyruss (1984) (Parker Bros)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Gyruss%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/15UgXmDD7f6Ec4DZv-MDXcSjw2fHxXUVc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "H.E.R.O. (1984) (Activision)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1BmEFXIUYtSa4Kx6JfQI8HmpW1UwtfWoY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Its Only Rock 'N' Roll (1984) (Xonox)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1fQ_-CCqHOPqXCdM-kinMtiCATnLQgcR6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Bond 007 (1984) (Parker Bros)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/James%20Bond%20007%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1QeIVtfqK7ovxEnSd0nCSxGnSnYEOzRIi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joust (1983) (Atarisoft) (Prototype)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Joust%20%28USA%29%20%28Proto%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1OL-TI5GpAYOGwnTcRudA9dNZYTPXoL5_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Juke Box (1984) (Spinnaker)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Juke%20Box%20%28USA%29.png",
    size: "8 KB",
    link1: "https://drive.google.com/file/d/16u2d9zQf-c3LZ-a6Qp-8fOT82bCguVxf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Hunt (1983) (Atarisoft)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Jungle%20Hunt%20%28USA%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1sNHzQebgELvsuc5ZE_aEIwdvQMWC28Fg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keystone Kapers (1983-84) (Activision)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Keystone%20Kapers%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1vSiUMziLWJRzcFgoCUVrEdmvlxa7ymPJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lady Bug (1982) (Universal)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Lady%20Bug%20%28USA%2C%20Europe%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1IMgfi3WcPHt4VLZUktRJFwURTIyu4TnE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Learning With Leeper (1983) (Sierravision) [!]",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Learning%20with%20Leeper%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1jVZ6zS1A3CwRQVCQ-KXgZLHaCjMCLL1H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Linking Logic (1984) (Fisher-Price)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Linking%20Logic%20%28USA%29.png",
    size: "8 KB",
    link1: "https://drive.google.com/file/d/10N4j6Srv8Vn3bpU80G3wnrdZq0cHGVNs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Logic Levels (1984) (Fisher-Price)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Logic%20Levels%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1n_B4__2zeEfuCR18veBOB7wvcchiRgE3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "M.A.S.H. (1983) (20th Century Fox) (Prototype)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/M.A.S.H%20%28Europe%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1_eWW6T5xMFQHU7qiF5-2TMy_fjbWAp8S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Matt Patrol (1984) (Atarisoft) (Prototype)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1RPDn2Qwvnihwj-tInd_1-irvM4-2dLg-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meteoric Shower (1983) (Bit Corp)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Meteoric%20Shower%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1ooPiAgD8d519fAdCKLH_F3FZ3u5H9icV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Montezuma's Revenge (1984) (Parker Bros)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Montezuma%27s%20Revenge%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1mHxUP2hdLL-aXxPhpPDPXV4vUL-HOG5M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Space Fury (Digital Press) (2001)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Ms.%20Space%20Fury%20%28USA%29%20%28Unl%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/172QvUzhfC8Ib5ydnTMxuoDCGFp-YFXm3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Omega Race (1981-83) (Midway)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Omega%20Race%20%28USA%2C%20Europe%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1e0J2eGI7VLhBIvjoGoJiuhCDgGqiko9Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "One on One Basketball (1984) (Micro Fun)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1WL7kmt38VJnlcysfti4F3rO7bDzP7pas/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pepper II (1983) (Exidy)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Pepper%20II%20%28USA%2C%20Europe%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1feJfd1Mq0GaDpxivBos7nkzY28dKSDB8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pitfall II - Lost Caverns (1983-84) (Activision)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Pitfall%20II%20-%20Lost%20Caverns%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1Yl3rq1sfajjV7lt2iI0VH2b_fkmKZ7vW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Porky's (1983) (20th Century Fox) (Prototype)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Porky%27s%20%28USA%29%20%28Proto%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1FWrTxnWL4BBTkuN9nslTjlt2mPshZH6T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Lords - Quest for Volcan (1983) (Prototype)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Power%20Lords%20-%20Quest%20for%20Volcan%20%28USA%29%20%28Proto%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1rguPCBEm9tD_evxQHUXjtMaqv9hmHKDo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Q-bert II (1984) (Parker Bros)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1rhSMKjE5zxMnvcpAjV821o1jOX82U2n_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River Raid (1982-84) (Activision) [!]",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/River%20Raid%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1ohLNGXaZhmHWzRQ2wy520aLYjvzHbKD6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roc 'N Rope (1983-84) (Konami)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Roc%20%27N%20Rope%20%28USA%2C%20Europe%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1NUwNSmY5jQdMguN95isGUj9GFEs1rCwk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocky Super-Action Boxing (1983) (Coleco)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Rocky%20-%20Super%20Action%20Boxing%20%28USA%2C%20Europe%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1pnvRWnH9HgZyTqo7-S8DLfuCQpVg2KT2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rolloverture (1983) (Sunrise)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Rolloverture%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1DHY2dbJuO_vapimOh-DR-kND55GVfnA-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sewer Sam (1984) (Interphase)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Sewer%20Sam%20%28USA%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1yEg47za8CQ34_H85B7YmyMrbgeEVohxe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sir Lancelot (1983) (Xonox) [!]",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Sir%20Lancelot%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/17QXT5AqhxV04okYbC91kF93WM0gxAmfX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Skiing (1986) (Telegames)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Skiing%20%28USA%29.png",
    size: "8 KB",
    link1: "https://drive.google.com/file/d/1ehFaxkz2e3gLL10H51hE4hiOrZT0vR6v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smurf - Paint 'n Play Workshop (1983)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Smurf%20-%20Paint%20%27n%27%20Play%20WORKSHOP%20%28USA%2C%20Europe%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1U6_UJVx0fhICU04x6Hv7VAAe3Bx3p4eS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Panic (1983) (Universal)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Space%20Panic%20%28USA%2C%20Europe%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1i0b9JZEr0_kQX_X3UzUXBdOHmAWC2i6k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spectron (1983) (Spectravideo)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Spectron%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/19bHN0tLNpXd2n8K4RipIdNQ_aBc3Y0zM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Squish 'Em Sam! (1983) (Interphase)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Squish%20%27Em%20Sam%21%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1VgYnnhFW5A4ChxyOB4bHCrmOfDQ1EYbl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars - The Arcade Game (1984) (Parker Bros)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Star%20Wars%20-%20The%20Arcade%20Game%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1fbFy9Uo7irYFAd9E0IvjzZqsEB2PfBB0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Steamroller (1984) (Activision) (Prototype)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Steamroller%20%28USA%29%20%28Proto%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/18wNghgB-kJRSrzQuAoA-RyNdYKhb5DkF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Action Controller Test Cartridge (1983) (Nuvatec)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1q-Z8bP0XGydWHZL-PBSxxsN0emQArSTu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Action Soccer (1984) (Coleco)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Super%20Action%20Soccer%20%28USA%2C%20Europe%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1cS4J9znAeAlrqeNiA95aRCXX_Jn-ejDf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super DK! (1983) (Prototype)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Super%20DK%21%20%28USA%29%20%28Proto%29%20%28Unl%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/127rXQX9R0mgzDA2fO3kby8Afs9KHmKJN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super DK! Junior (1983) (Prototype)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Super%20DK%21%20Junior%20%28USA%29%20%28Proto%29%20%28Unl%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1ffPE_Jlf4pxYhP-5EtHqACn3T-3It1B2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tank Wars (1983) (Bit Corp) [!]",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Tank%20Wars%20%28USA%29.png",
    size: "12 KB",
    link1: "https://drive.google.com/file/d/1DK9o-ut196JDuKOf-qdH3cd4cqgAqTcd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tarzan (1984) (Coleco)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Tarzan%20%28USA%2C%20Europe%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1ee39ZmrPyotm6c_G4XP1tXkpuhqL8Men/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Telly Turtle (1984) (Carousel)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Telly%20Turtle%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1ETY2McbYX-dRTv8YxuitwEjB-Gfr8_eS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Threshold (1983) (Sierravision)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Threshold%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1Ks_kovmjFLU-4YBEWvvefHpgmYZrXEYX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Pilot (1983) (Konami)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Time%20Pilot%20%28USA%2C%20Europe%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1TVwnK5ZNj54DG-yJAirLeyifcGX78qMy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tournament Tennis (1984) (Imagic) [!]",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Tournament%20Tennis%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1yU4DXiHZvheLCrLJ6e6B4BGUcik-q_PF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tunnels & Trolls Demo (1983) (Adam)",
    image: "https://i.postimg.cc/52fLG24x/COLECO-VISION-LOGO-svg.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1tmz85pCTcfTbMvPtYWoJeQWQsO_kfkbG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turbo (1982) (Sega)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Turbo%20%28USA%2C%20Europe%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1W80AKeOC66Q9uZVg2UlmkDBSBYO7Or8j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Up 'N Down (1984) (Sega)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Up%20%27N%20Down%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1Dm3JKAhfoDJMwtVs-JxzXfbdaZXISjEg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Victory (1983)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Victory%20%28USA%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1e7p76_4P16V43SgABEEzmgtBClSoCUcd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Video Hustler (1984) (Konami) (Prototype)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Video%20Hustler%20%28Europe%29%20%28Proto%29.png",
    size: "8 KB",
    link1: "https://drive.google.com/file/d/1WTXX5R1H1_mLjGEQBvG396tDjwoF-fR1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "War Games (1983-84)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/War%20Games%20%28USA%2C%20Europe%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1r6saTVNvHsBnrzu_DKL-vfk9HkzHK27B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wing War (1983) (Imagic)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Wing%20War%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1wpbzuhI3OD7f1222hCq9tagMTZMIaJBX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizard of Id's Wizmath (1984) (Sierravision)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Wizard%20of%20Id%27s%20-%20WizMath%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/13TYHMxBLpZYjWVEGni_j0w0NnmD3-lgF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Word Feud (1984) (Xonox)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Word%20Feud%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1hQsUswsdZRzmnqsK58LhM46Q_p4sbPld/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yolk's on You, The (1983) (20th Century Fox) (Prototype)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Yolk%27s%20on%20You%2C%20The%20%28Europe%29%20%28Proto%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1j7X811ItMwm_E6RAxh5cP_XWAzOX5jGZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zenji (1984) (Activision)",
    image: "https://thumbnails.libretro.com/Coleco%20-%20ColecoVision/Named_Boxarts/Zenji%20%28USA%29.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1RUw5fhD7Mynfl5kRy49yhtEELrr-QrzW/view?usp=drivesdk",
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