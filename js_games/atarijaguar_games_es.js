const roms = [
  {
    name: "Alien vs Predator (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1HDRKRz2cEvneumucBPPh8VxDcAWbBLD2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien vs Predator (Alpha)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "1597 KB",
    link1: "https://drive.google.com/file/d/10Y5wueXxh7gOijWLTMEc_4AGXkoWre4S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arkanna Demo (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1MIJFgypaAEu3xHvd6TceDl16xRg07BJM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Assassin Demo, The - Release 2 (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "983 KB",
    link1: "https://drive.google.com/file/d/1dVfw1kTe_1gcyWFh7SfbRvMxg7j_lqKn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Assassin Demo, The Part 1 (1999) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "262 KB",
    link1: "https://drive.google.com/file/d/14s5F6BgCjehiEe4FKmMo4L_-fSwySgzj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Assassin Demo, The Part 1 (for BJL) (1999) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "262 KB",
    link1: "https://drive.google.com/file/d/11wLE_eSzScuEAC5uZhEXWUHvSKXstt5B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asteroid (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "290 KB",
    link1: "https://drive.google.com/file/d/1GpyyEji64owDVWFheLs44u_R_j7D35wv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Atari Karts (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1Sblk4BiLfQDeLc6WfoXoeyODH5mckAiN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Attack of the Mutant Penguins (1996)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1J4ITzIQ6L-CulkImV5sjK_05B9O8mU8F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode0 by Badcoder (bin) (1999) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "157 KB",
    link1: "https://drive.google.com/file/d/1e0Upz6d5JNwv6Ip1l5MxzQ5zVXJgkz6v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode0 by Badcoder (cof) (1999) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "157 KB",
    link1: "https://drive.google.com/file/d/1QTx_miNjqjqanOpM7IldXVKmIFjeIM3T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode1 by Badcoder (bin) (1999) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "205 KB",
    link1: "https://drive.google.com/file/d/1JOKnB7N1YTZbfyGwOTLChwjywzgvHoxF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode1 by Badcoder (cof) (1999) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "206 KB",
    link1: "https://drive.google.com/file/d/1-kSLlSsuhMbDNm2N92rurfkZuxSf2mQO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode2 by Badcoder (bin) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "319 KB",
    link1: "https://drive.google.com/file/d/1wJV3lCIyrTWEVGC5Egjp8JgbBBMrHayw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode2 by Badcoder (cof) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "320 KB",
    link1: "https://drive.google.com/file/d/1jEvYzM81ZqsljgQsg4HmpLdHeXr52-XJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode3 by Badcoder (bin) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "459 KB",
    link1: "https://drive.google.com/file/d/1xCUP7Y02unRZRW3UwrqQgg-A4DvEu4G0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode3 by Badcoder (jag) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "459 KB",
    link1: "https://drive.google.com/file/d/1TS0cxhJOXcjeLZDK8oh9Um6x1gFRsxpw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4 (Metal) by Badcoder (bin) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1gWbTb-RE2DvEySCA4pyejeHz7sOHJ7nu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4 (Metal) by Badcoder (bin) (2000) (PD) [a1]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "396 KB",
    link1: "https://drive.google.com/file/d/1gks1uJFJMdDtRUZuhXQWB6mcMdiI9AI8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4 (Metal) by Badcoder (jag) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1UNJei8pFDHuygiFOnl9o_BX6H8dkdmwm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4 (Metal) by Badcoder (rom) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1Snqqcp0j9u_OMtuyu0Yp-mpST9ZMf1c0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4 (Modified) by Badcoder (bin) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "401 KB",
    link1: "https://drive.google.com/file/d/1Z1aNu4vHTaDVoSDn5HnNRCQbHOHJjfIp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4 (Modified) by Badcoder (jag) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "401 KB",
    link1: "https://drive.google.com/file/d/1eLaUwdUxW3_fxgTgZJHVJ__-3Lb03fZ9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4 (Modified) by Badcoder (rom) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "401 KB",
    link1: "https://drive.google.com/file/d/1nqFN1y_zWh4rHyw0beCbBbP9rsKnIxEy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4 by Badcoder (bin) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "468 KB",
    link1: "https://drive.google.com/file/d/1XhG5oMsewZ8LfGhOGrmU1js1uTCKL0Xy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4 by Badcoder (jag) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "468 KB",
    link1: "https://drive.google.com/file/d/1x_RcYkxvWNnKZfUfIoSYQpTSak9UpCrl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4C by Badcoder (bin) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/1yxEcPXv2_DJ-7ao0fkuH_pLjyOVUA03d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4C by Badcoder (jag) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/1YaSPVXAoLdiz6sTECwyMjUGSPyY7W_lF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4N by Badcoder (bin) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "430 KB",
    link1: "https://drive.google.com/file/d/1oZXfKrS_0GTUzFc7ytzhX8VPMTrzAl-S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BadCode4N by Badcoder (jag) (2000) (PD)badcde4n",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "430 KB",
    link1: "https://drive.google.com/file/d/1J4hB7NsTIpVPHHzT7IuivAsOwYr00vuK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brutal Sports Football (1994) (Telegames)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2049 KB",
    link1: "https://drive.google.com/file/d/1cQP1IeBSmO9dIcYhHJg1P78b3cAR1NsI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubsy - Fractured Furry Tails (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1ZorgAdaFxe_ShHuqv_G77J7IeuAwNr-G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "CRZ Demo (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1hsGHZ0p8VYx9Ih-vSQFYZtkKfmDpHmAO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cannon Fodder (1995) (Computer West)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1ZzZBTQKopgFyTiqUKF1oRbv3Yr9PKAEE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Checkered Flag (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1s7GWrUl6sKGC5Duy_41rjcU8-dKLvhhk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chroma-Luma Color Pick (Mouse) by Matthias Domin (1996) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "9 KB",
    link1: "https://drive.google.com/file/d/1GjEaN9nxwDjnEgZps-Z0YeZt194P_2b1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chroma-Luma Color Pick by Matthias Domin (bin) (1996) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "7 KB",
    link1: "https://drive.google.com/file/d/1PP_aGc6lsGNn0Kz2uz7d8Z_CnHaYjxqY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chroma-Luma Color Pick by Matthias Domin (jag) (1996) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "7 KB",
    link1: "https://drive.google.com/file/d/1XIlqzi8syQ120KKuCzfBwmuvf3KG02SX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chroma-Luma Color Pick by Matthias Domin (jag) (1996) (PD)[a1]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "9 KB",
    link1: "https://drive.google.com/file/d/1xufvQTtpequxX9MmJiMCVjogaloAuR10/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Club Drive (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1asr4wOxsjhDP13Oj8owdgydnhIVhXWMn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cybermorph (1993)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/15zNyorYX8qr5PknNXVKb2UQcFhdsP2hK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DEMO1 (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/116A55CsCGnnUWc2q-ppl4BwjSx0Wvf4M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DEMO1 (bin) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "283 KB",
    link1: "https://drive.google.com/file/d/1URG3kXysqQ_MopCDAwD_HGc_-Sr9evLk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DEMO1B (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "337 KB",
    link1: "https://drive.google.com/file/d/1nMEN66U4YyNwQdIiTsUU7FHrkkZeeJyD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DEMO1B (PD) [a1]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1QlkuMenPxRztZavFnSS3400m5_iAlt55/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DEMO1C (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "337 KB",
    link1: "https://drive.google.com/file/d/1J1ignsRJi3FYolMCX2bMqCUbBM5m_rLi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Defender 2000 (1996)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1MjOjQkOpSP8mezx8Y-t0fpww4BjdV5zI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doom - Evil Unleashed (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1-67iZmU-3DPto00vTcGoyBY0n0KDh4wf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon V (1995) (Williams)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1XIaY3LbO5CL3X6nOb49KgEGqQtrvOHQO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon - The Bruce Lee Story (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1U5SJKuImzMwCo0usqOZFcUpqek_xHeT4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Drumpad by Robert Jurziga (2002) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1LmGMZlQF40LwBlZiEzYDTLnlz3Fm2iv8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Drumpad2 by Robert Jurziga (2002) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/127E3rHCeIgBu3NPtTUTPD7w_xUePTkNp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Evolution - Dino Dudes (1993)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1QALAYMkXaVvshpcigF4IhXA7yCDd95pt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FORCE Design - Legion Force Jidai Intro Demo 0! (2001) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "270 KB",
    link1: "https://drive.google.com/file/d/1sbJhGVu7zeRF6ZPeFSmS77yBvt929m8u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fever Pitch Soccer (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/14pXigVopU6qYOqGPDOI74mowbEx-PUvT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fight For Your Life (1996)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/11vJQxI5113POws27gISiqGL_fTQByl7j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fight For Your Life (1996) [a1]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1JZC06fxg1gnT_5aam6KmBO8AYampGdDw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fight For Your Life (1996) [a2]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1qf9AOAQ4MJgx5c0yMTuN8UoDFq2DvBTc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flashback (1995) (U.S. Gold)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1BPlbrz8OwvosD1tiXgHPGjKP7sbZxMP-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flip Out (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1hagjl2dHEPxImpnD5_opLNOUXDTu0B3M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gorf 2000 (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1CFYqPHSAr6Ol8SZ8Py5FLbJwq7Uaa7mt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hover Strike (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/12S5ULXBkAXLM_M1UEKJ2JPvifx4g82oV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hubble Fade by Robert Jurziga (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "845 KB",
    link1: "https://drive.google.com/file/d/1_gVra1bB5VJBbN4iL2Zruwjh6UW0y8mQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hubble Nebula by Robert Jurziga (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "341 KB",
    link1: "https://drive.google.com/file/d/1bGsahzrzR-UdOXfPva8aILT84ocSlgIr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "I-War (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1vX7t9FbhH-gAFLY7hEodnJ2jlqIYL6N7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Sensible Soccer (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1SBKqKv1q1k_y6D91pxWUjwH3NKjcZ-m0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Iron Soldier (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/11_hQVAj5Cwt56-qobeEfngAk09-pRpOK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Iron Soldier (1994) [a1]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1k3a3Uucvsildr6q5DzZnk7331fRzhE5G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JDC Demo V1 (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "507 KB",
    link1: "https://drive.google.com/file/d/1G-eqXAM47mTQtUvtZuoywlhDxCWjT47m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JDC Demo V2 (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "308 KB",
    link1: "https://drive.google.com/file/d/19Jy2xrOpHFRMtHCY4TY0vmNqdzlSzD_W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JDC Demo V3 - E-JagFest Demo by Lars Hannig (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "641 KB",
    link1: "https://drive.google.com/file/d/1LNmCrubX-ctjOTq2OUFmxIXOuNwWZR7x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JDC Example by Lars Hannig (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1tIhY2F65DLY7wDWBxc-wu8zWJAPba2zD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JSSDemo (Jaguar Sound System) V1.0b (08.11.2002) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "586 KB",
    link1: "https://drive.google.com/file/d/11K4INd6uULe6-gbqTN4q284OosSyWXDO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JSSDemoII (Jaguar Sound System) V1.0b (10.11.2002) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "610 KB",
    link1: "https://drive.google.com/file/d/1UtS4pie-i5VdO6021aJvT79R2mLUruoM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JagFest Demo (2001) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "469 KB",
    link1: "https://drive.google.com/file/d/1706HdgIwcIaR3AT8boQd7eebH1LVoWbt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JagMania (Apr 18) (1998) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/19W0H7AUTa3Ys5ZOJGw24sHjE1Rg0uJsk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JagMania (Aug 31) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1PK9Z_kdvby-9Bw_79cEbvhP18R0ff7HQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JagMania (Jan 06) (2001) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "236 KB",
    link1: "https://drive.google.com/file/d/1xrfHNFzwXvM-JafBFs0LEw2Fjk5ou6ak/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JagMania (Jul 8) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1R4VqLhvNVmGGS6agS0ymmkN0uLsEPQXX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JagMania (Sep 10) (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1I7CCZEqrjKURm0KG1cPZlKUzl9JbN5aL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JagMarble (1999) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1iNB7Klh7_wHhL639WjpXDzTnON8Vjgm9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JagMarble (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1wSfh_zVQOldazPmprBz_QnMDHEKnCyTg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JagMarble (Jul 13) (1997) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1vXc_Sb0MBrwWjtHu7cgJyuEMhtzwGFSl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Server (Program Examples) - 27OBJ (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "14 KB",
    link1: "https://drive.google.com/file/d/1aPtLXduRuz57zh912kfkpvlfH5gIJEDq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Server (Program Examples) - 50HZ (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "0 KB",
    link1: "https://drive.google.com/file/d/1iwTMoJaTJf_J-jDxhJ99WRBWU2HiWJmk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Server (Program Examples) - 60HZ (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "0 KB",
    link1: "https://drive.google.com/file/d/1_innx568MKR4jQb_8Qb1Lx9zDc4l5K5m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Server (Program Examples) - INTRO (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1lV7xo9c0FLs9aD9nsfCwbpyuJxKTLje0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Server (Program Examples) - INTROMOD (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/162pK4OF52w8NLGzLUf_wzqZWxcKDzEex/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Server (Program Examples) - SCALE (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "10 KB",
    link1: "https://drive.google.com/file/d/1XF7WP4ZVK9D2giRI7iPZdEcbKY6oBeGL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Server (Program Examples) - SCALE3 (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "10 KB",
    link1: "https://drive.google.com/file/d/1ZWyV1IZI7VpvrM-hikkDUW4shbmJvX1B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Server 1.08 UPDATE - JAGOS (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2 KB",
    link1: "https://drive.google.com/file/d/1aAb7eqXC-gt0Cbjs-TeBjpBLPLtGRMzC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Server 1.08 UPDATE - KEYB (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "0 KB",
    link1: "https://drive.google.com/file/d/19nkMUSWkfle40sZfPLXz_Ne_WDz89eZU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Tetris (1995) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1MgMjibCChC6yyCwk-svQpbayNAI-faK1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joypad-TeamTap Tester by Matthias Domin (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1QEoCENpO7Z5SAQ99KJ8WnXZ6ToRDhouk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joypad-TeamTap Tester by Matthias Domin (2000) (PD) [a1]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1ykDKdD6Y7hY1pKgXlanrE1KsTCuT6nrD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joypad-TeamTap Tester by Matthias Domin (2000) (PD) [a2]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "175 KB",
    link1: "https://drive.google.com/file/d/1RBwxj_Be1_yuorxxrXbbMozLApY8x7m-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kasumi Ninja (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1JLdNwQYJEDe7LPXkqQsKBQRqC8ed6IBl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kasumi Ninja (1994) [a1]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/18AEe8SQhlpBHLnchzvVlRxd-unquXK0i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ladybug Demo (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "287 KB",
    link1: "https://drive.google.com/file/d/1YJ1EemtoZscy2sF1pgp_Qx7tUIOU9My3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ladybug Demo (rom) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "282 KB",
    link1: "https://drive.google.com/file/d/1WOKf5wDfzTW7oQFplAquyCLxN_KXEa4j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mandelbrot Demo (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "15 KB",
    link1: "https://drive.google.com/file/d/1hSVv06N3sCJ2ZvuyCwhQqcEqc1qRqNGs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Memory Dump by Matthias Domin (1999) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1-Q_AUIDePtfn6_-biye2A9yDQoAXJEx5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Missile Command 3D (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1d152wghQMVeL-52y7zMYy75Wil6rI-sa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Music Demo (2002) (ScatoLOGIC)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "1135 KB",
    link1: "https://drive.google.com/file/d/1-gX_d_GhJR1fK4ouwRwZoL-G5EoYX3Go/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam TE (1996)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1nX28TRakrwo5nvWq6-7hPSLKhH9zX9Sh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Native Demo (bin) (1997)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "1072 KB",
    link1: "https://drive.google.com/file/d/1nuiaqsUAIXAqAh_kqNysvp15J0NcjOFH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Native Demo (jag) (1997)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "1072 KB",
    link1: "https://drive.google.com/file/d/1P7e4AGNaWJ9cd7FogXz4Preuy5hFZt_s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PAULA Preview Demo 2 by Robert Jurziga (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "410 KB",
    link1: "https://drive.google.com/file/d/1NACrDgDItJEDa-Vf4acJVZK_qsrxE8Hq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PAULA Preview Demo by Robert Jurziga (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "409 KB",
    link1: "https://drive.google.com/file/d/1Itrtsedv0Jm-m90s5f7NHT6RTl6C3yrU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Painter (1996) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/146pd2KoJ20z_27JI6TegjTjU-ZZ9CtfY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Painter (bin) (1996) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1k7VG0ZsBsY4pdSICYtV5JEH2qQmKf2wo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phase Zero (2000) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1OSRQkDZOQ9qdVuvNfPWS7D1dkTxUc30J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phase Zero (2000) (PD) [a1]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1B5y9s00WDd7mSYZERcs2oMJ8WC-aV8MA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pinball Fantasies (1995) (Computer West)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1RVSFvYkQ_ZhaqWkoBbuJej06baibiEwJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pitfall - The Mayan Adventure (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1n6ndI6tFSvqEJY0m_9o2P_jKzjbpjpWc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PlaySFX V1.0 by Robert Jurziga (2003) (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "20 KB",
    link1: "https://drive.google.com/file/d/1NrsomPaZWhFAVSzvlok3D6_bC8rplHDj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Drive Rally (1995) (TWI)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1IUfhWWsfBN3NpHik8iIjHPlEU8OY_UYS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "QSOUND Demo (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "1016 KB",
    link1: "https://drive.google.com/file/d/1EPseev1KvTi2jjmCKDwsF0nU4NZnr2UT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raiden (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1DxhxzJlUQHxPdN34pWNjC9u6yTY51792/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman (1995) (UBI Soft)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1wMxYPOQHIFooS5v1ZmnMG7TiY3mOolJY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman Demo (1995) (UBI Soft)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1fTL4iAa6bWuulAWCcqtvgJQtQwapQkPk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ruiner Pinball (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1xdzoVr_vkgAvwt1NH7Tu4tykgw520dj3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SlamRacer Demo (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "1767 KB",
    link1: "https://drive.google.com/file/d/1b5h3ocnY6xHmACM-GeTxzk70ZGICB_fp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SlamRacer Intro (PD)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "473 KB",
    link1: "https://drive.google.com/file/d/1wn6MfBMyFwpqI8UjVTLoySTAVDBqW4V4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Burnout (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1RK47RzQ8dAq7zhsUF1cpdqE-JGELbFCF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Cross 3D (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1_iiRePZp9P3zVYpAxvj_lPihMv8iQV4o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Cross 3D (1995) [a1]",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1pE5MSqya0JO52vt891MC7vvklo0561f9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Syndicate (1995) (Ocean)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1yPIrYxx6Zhpt0nIDKNB-C2KRByIN8AVN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tempest 2000 (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/186xpHl01j7WmU9j63xVW3JNnYj4CywsX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Theme Park (1995) (Ocean)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1DLGU_MnmkgDNrfClB4QRos_3BXdgFcao/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trevor McFur in the Crescent Galaxy (1993)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1LEpXjpCXgYYiiNm6NPbcD2y1U123BA1j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Troy Aikman NFL Football (1995) (Williams)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1SmrzBVr7G0FjfWeka2phOUPD4legBZ6_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultra Vortek (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1Z5ghZsB395c8QwioeDFP9Vz5s12wpbcj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultra Vortek (Beta) (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1DoomZtlyEfm9a8i3oW8WNv_tTLNC79nK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Val D'Isere Skiing & Snowboarding (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1VgJbn5mbMy86sba5y0hrajMA6tKmwRic/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "White Men Can't Jump (1995)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1KXhQve7bFtOIdBpDM17jrTxtsPjwVDx1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wolfenstein 3D (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1m1K2aGUkkcGoT-TC02HyrKTYIUZiW3k1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zool 2 (1994)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1HlOpaXSK-E022PG651zFx2JZ6oWors71/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zoop! (1996)",
    image: "https://i.postimg.cc/T3Gsqm37/Atari-Jaguar-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1cBrk_d_Rk3m-ANAIkQd9Ms9ys91y1bIo/view?usp=drivesdk",
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