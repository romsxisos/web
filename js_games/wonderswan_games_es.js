const roms = [
  {
    name: "Anchor Field Z (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/13qzz2mDHB4sISEErttTJ87F3P8vJptzs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Anchor Field Z (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1RNRHX-GVcrmZL_ZHVx6VEBMrko4F78zu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Armored Unit (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1__6fgTPcNeCFQiyf0F_fo2c24T__OZee/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Armored Unit (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1Nx-QNbb0Tpagtfn-U6OjdYgb6xySatb5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bakusou Dekatora Densetsu (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1fSYXwJ-JBnvfXWkAAq1B5BLqH21ypB-F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beat Mania (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "16384 KB",
    link1: "https://drive.google.com/file/d/1sUgHVjwvrYn7bwrSF79Prmvf-eNZBAiB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blue Wing Blitz (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1wDZag-tYN2doUVw2VHdOzn45NfaWfyBw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bokan Densetsu Buta Mo O Daterya Doronbou (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1fZO0nuQbct07SGu-zd_5gU_4UQ23D6I3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buffers Evolution (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1Ni-83Z4SyA5k0EaK3ElEDExt7BGzTc_m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buffers Evolution (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1K4TUY9Wk4-wBWM5SSCZBFx4unVBva7Z_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Card Captor Sakura - Sakura to Fushigi na Clow Card (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1Vw_cwlFdo_LKCDB-3mWJRsNBOXF_LQTQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chaos Gear - Michibi Kareshi Mono (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1RFUmGfU4xmKBsqppMWcK9dCC4bLzTq14/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cho Denki Card Battle Yofu Makai Kikuchi Shugo (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1CuLBj73pdXi7Xgd1xuKnM4Xh9ULQpFL8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chocobo no Fushigi na Dungeon (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1itiu30FEprD-mzB-7tMwYxop7X2Q_Tnb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chou Aniki - Otoko no Tamafuda (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1ywISTDAxjwWg0yZFt8TQkbgQ15qJQFQ-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choujikuu Yousai Macross - True Love Song (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/106Ln_d3PWNkoaGu6HfiMHkyPFvmS3OP4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clock Tower (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1YcwjaYqfPHcTDSNadiO469AF8G-MhH7K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crazy Climber (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/13LJNsRnb55ZfCfJcLZ9eQ6_rWjkaaSVJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "D's Garage 21 Koubo Game - Tane wo Maku Tori (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1cX-6ART3VOPtNfu6lpj0Fml5LVH9o3VF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "D's Garage 21 Koubo Game - Tane wo Maku Tori (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/12VlpXPeDi5VHtcL2mkz8YmTQsUVjI-OJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Densha de Go! (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1HKOpB0jkJGz4HoIfGVKExDlcTPsgIO9j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Densha de Go! 2 (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/15JgWEgZ_n7rV-I4_itTl2CQMEzaeC0MJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Adventure - Anode Tamer (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1gRxpFQhaNR_EMIVYX8_Wdl3JCVPiDQUE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Adventure - Cathode Tamer (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1sOMGLp4S8B9W2Q1IH5OX1EW5kp93VFfZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Adventure 02 - D1 Tamers (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1tHuK5PGasu2Htjv3Tqg6MwT3e6jw-KwT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Adventure 02 - Tag Tamers (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1nqz43SPP_aiuCqxnz9McU0wpMR45OXAd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Digital Monsters (A) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1eQ-9i8bie8FRtVFOmtgA_tNNsueUIruF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Digital Monsters (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1rPSjaORWRkJKOOG2ewVBwLmI2ZgoGjag/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Digital Monsters - Anode & Cathode Tamer - Veedramon Version (A) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1h8S5I6WSy0dBk8r6sCxGQlYWFlf5J8Rq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Tamers - Battle Spirit (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1JsWRv6YUKkh2GH37I918rpuStoNRABF9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digital Partner (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1llMPPZTL6T9jsWxCw4a1SgFKvU68MV1Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dokodemo Hamster (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1pbD_VOG-8dg4EAvq3PnxN_X69QXZ8lGB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Engacho! (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1w70UFGAu39Z145EOYrDzPSxO76NU8_4_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Engacho! (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1SVnDZXN11J4DVfub-XpdivB9_3AnS6uG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fever Sankyo - Koushiki Pachinko Simulation (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1hXUSkn6SMw6eE6FvOswpSnkcY0R6DAVb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fever Sankyo - Koushiki Pachinko Simulation (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/12VTdU14y4OMfgo3X2VCRZzIQwZ3LKZ8u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Lap 2000 (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/19CshG6PVCo6t-Cmo0GBqH_DsdRlwzWV3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Lap 2000 (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1Y5eM23Zpxtv2_eWpoqcPbIy5EcD_E3kO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire Pro Wrestling (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1AMzS37HCx6urk_VlTayhoIS1vhYBHtMV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fishing Freaks - Bass Rise (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1STpenP_1uobU2OwqIBJzN5hlwradSGrc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "From TV Animation - One Piece - Mezase Kaizoku Ou (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/120L4kT3P4CfcpjIgSY1fu024kfxCE4j6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "From TV Animation - One Piece - Mezase Kaizoku Ou (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1Xs-uy3TtYnWAQLpZMskh8To3Ss5SRPES/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganso Jajamaru Kun (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1bi0pkGH19qYJNuLTOWBXSmv0qS8tK2lS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Glocal Hexcite (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/19NTAzQOtvYpr_yo5iUgwRFEo8VtlmVTr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gomoku Narabe & Reversi Touryuumon (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1PaKmy3KlKU77CKi8oNUchOrtlBFya_P7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gorakuoh TANGO! (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1cJLLAYtiwZr6l8APTKKzY36lyP85rMNT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gorakuoh TANGO! (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1SCHKR88SCN2iHndnURusIw9uh-3BLBpg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GunPey (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/14yGjJo1b2uiEjQzmK-J_oR30SgX5QFtc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GunPey (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1C1US4HnY2qh4Zv-N2Yb3tO2A9rC2Qg-q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hanafuda Shiyou Yo (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1hst5bb1grh4Kgho9PhHYiks5Kzj_umP_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harobots (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1rDHZLhdkRkF9veYPlyaEJoEZOhbsvfDz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunter X Hunter - Ichi O Tsugu Mono (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/17xAKRVC8dcjkadnNzEsWDJVijOVci-9w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunter X Hunter - Ichi O Tsugu Mono (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1SdLVAhlXlIJwnHjtqFLfGaW-AgH0J-il/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Itou Jun Ni Uzumaki Noroi Simulation (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1mYewhOOWf1MLUaz1XvxWv_LXoYdrWhmV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Itou Jun Ni Uzumaki Noroi Simulation (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1WnnKC6ZDF5-5jEGCZ9ugiYyIqGBDxQWv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kakuto Ryori Densetsu Bistro Recipe - Wonder Battle Hen (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1eP5b7T_mFc1CgAfGHY0jxFIQfnrH3f1O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kaze no Klonoa - Moonlight Museum (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1WjXMVa_RFcRD16AOHqj5vs1cnvzy1Pgo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kaze no Klonoa - Moonlight Museum (J) [M][t1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1MTQ3EjWJUKVs8A30f5JZzEfdwvHrWYx5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keiba Yosou Shien Shinkaron (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1k3k58vYsb5CeTcYaP_zuH7jQkcYlkg_7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kiss Yori... - Seaside Serenade (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1brik0Ikp6sxUIP_b5S6NOK7RxjMUS7iH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kyoso Uma Ikusei Simulation Keiba (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/12CoCJzuvnL8HjpWKz4A40ieIfigbjfMX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Langrisser Millenium WS - The Last Century (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1ljdrXRMrAN5YQjNad-onykob4IEJQ3Zn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "LastStand (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1qwIQy-x0-K5TLk5LkY6XtNaBF3EWJ089/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lode Runner (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1CK7v3yiNWUZqgo7Z4PSpnfuS9m4R39Ao/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Drop (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1ScK1S_KFS8dOwJvtdncOwKScMfekUpIW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Touryuumon (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1Nq3L2cPtPLv7uDU7HJtH6R4tHfguVIV0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Makaimura (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1SkxravOk4TYOWnIrSZgvAg_Tijc9yrCA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Makaimura (J) [M][t1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1QKl9D80zVCDFg4t5TubbYWjXMjfHj902/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot - Perfect Edition Kabuto Version (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1dLUkO4A2SU6Ven3JFkK2tUkjAt-MeuoS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot - Perfect Edition Kuwagata Version (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/17Uk-2VeG1ge__0XkSXqpGoznoO8KWpyA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meitantei Conan - Majutsushi no Chousenjou! (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1HXxJsxRwb3anUuDz3BAUnBB4O7hSX4p4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meitantei Conan - Nishi no Meitantei Saidai no Kiki! (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1XKe7Y3hE5dIdxOkQ61PTE9yyPmAioNOu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meta Communication Therapy nee Kiite! (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/17hrHEd0gyfYNHdoAaSLlS43V__p1iBHY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mingle Magnet (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1VAKXNovnwj1ZqHyZlNhVIQtueiqfUDEc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mobile Suit Gundam MSVS (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1urgDqe3poC8HqescprEtOQ4INZBmlVhw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moero !! Pro Yakyu Rookies (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1O20FnOQbt5mbY-6BVP5QNhVBKYm54avG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Morita Shogi (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1fJ4tVnIUT-HpyVFsGhAi135gSqAdCI4K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo Ou Pocket (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1O2tUaKxeezf91yljE8PVWJppetcsLicd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo Ou Pocket (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1rAEEXTIw45brcVNVEiTGKBYkmG4VDUj3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neon Genesis Evangelion Shito Ikusei (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/14OGTfk5arWt4UJxevbYixjtgtObBKPRu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nice On (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1St27gWFLqUeTK92swtWlcCH0qU8EZrdi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nice On (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1Hy19et8t_bwVuNc1J9ZBTfmPMFP8liM7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nobunaga no Yabo (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1NgHiH0LWZ-r_s5_Og0KeAX2D_baNOYPt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ouchan no Oekaki Logic (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1iOH3QMVLuAM8ose1uJbWclLLe1drTv5Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ouchan no Oekaki Logic (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1pq3C85GY9gMGNmkgAm6NA_XYNfHoybV7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Fighter (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/15NGUOHOlp0Z2lfq4coPNn_ulvDJzm1pk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Mahjong Kiwame (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1GSZCvX6Rm3qI0LRgQA-zavqsslacP_Tq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puyo Puyo Tsu (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1GrWMsZ4XlAn7dT8eWRtqeg7tVIHt9blc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle Bobble (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1_mEz2bxaxm1uD9ExhbAlpSxu2HP1e37d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle Bobble (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1VkbS8bFja8rKG4qz9B481q_d6LF9kglR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rainbow Islands - Putty's Party (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1nIeyfzc4tV9HZayMvYGg5kr4HlZAnUZj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rekishi Simulation Sangokushi II (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1S78XacdHoNEOV_8TaDdGxuEyhbpZY56v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ring Infinity (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1kGYdQd222Lv9fSHcGWyAI2YB2btiwzrg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ring Infinity (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1mcCV0V0bJSBdR45Wbps5qPE1S7iA-EFO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robot Works (A) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1FcmvdYDhBj6kzWf8rfgemtzZGjZvyZEc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robot Works (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1u4buIDA9qYCCLXp1QO0Hmeg6bJjXP7Oq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rockman & Forte - Mirai Kara no Chousen Sha (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1TKCZlOLtJ_gEmWtpZ0k7LRRUQA7zAZFU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam - Emotional Jam (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/16Yc37C42SLEiSibslptGYghbP_a6cCex/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam Eiyuuden - Eiyuuden Kishi Densetsu (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1qXW1q4P4B-7X4rEYX9GDVur7EJnJ7DEI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam Eiyuuden - Eiyuuden Musha Densetsu (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1aW6qQe2sqfOeohijqXtHzKnd2RXpTGog/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam G Generation - Gather Beat (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/18_OC3sdfNRw19wriCF9QjxmgmPpVoPGD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam Gashapon Senki - Episode 1 (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/15dD7AHg6FYx_XuSguNL9_3eAXzorBQOq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sangokushi (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1yJGVfyGT0HF4VgGXKvIxH7pN06Az2SzX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Senkaiden - TV Animation Senkaiden Houshin Engi Yori (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1PWlt4rxp-UVqwMa5k3r1hBMhRoBMwYuL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Senkaiden Ni - TV Animation Senkaiden Houshin Engi Yori (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1jfp6jf_dAG8m27Cr5sNSK_wf6GSNL-lY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sennou Millenium (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/12kdE9cLMF2MQhUaKtTWXaZdxuglqhCZU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sennou Millenium (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1m2izjm26qI3y7p2MGtN9DCIAjfJY3Gcz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai Pocket (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1Z6QP6L3tyOtiDeKhrzAB0dccztTRlEzm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Nihon Pro Wrestling Toukon Retsuden (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1n8MdjYt7OKVXqLZl5kYbsAV_u_rYkcmQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Nihon Pro Wrestling Toukon Retsuden (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1BMmzyZWGc_u_CCGpWdo7SLtJ421CBSjY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shogi Touryuumon (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1mEGODjT6jggIw4IoHjnJj47Pdd_CAmjX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Side Pocket (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1u-Ao2E5BKbP9DES9qmwnRUzvk4sdSQL3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slither Link (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1VJ2S9bx7MrIlpJEoFzqmzyT9Rf_LMFNu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slither Link (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1YkYErGEww5rA-55PLqPAHaBnbw7RqOr4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soccer Yarou! - Challenge the World (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1Xx1tktOL6DsrXTQCdFAYt4IWc5DE1i1C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soccer Yarou! - Challenge the World (J) [M][a1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1RR27sfUj7uChAeR7ZvB5xs1fcx7SUvQr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sotsugyou (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1bGPyzDUwsApjjiKmbY6mNyFkp186A_1-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Invaders (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1MezJrMImQIeSX5XPKTmj1UbagVVWp475/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Robot Taisen Compact (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1i4F6G94d9sBsAUTRyO3ObVxfUGV4Jd3B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Robot Taisen Compact 2 - Dai Ichibu - Chijou Gekidou Hen (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1zsA5Shilffllj7BocZ5S9lar4CwncpiY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Robot Taisen Compact 2 - Dai Nibu - Uchuu Gekishin Hen (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1wAATZnDB0iKGm8MoDt__d9E7C6agBxCK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Robot Taisen Compact 2 - Dai Sanbu - Ginga Kessen Hen (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1naLdDQOkFET8wjgLGeQrcvzvHS6qao_A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tanjou - Debut (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/10GselQlG2MIa3u20g424mHH4itCUP6Fi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tare Pan no Gunpei (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/16CqFQik9xoNanoAmQfIaRtiafLlcIAxa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tare Pan no Gunpei (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/17KhpIHSDoby6ZwFiD8U7kY3yj4f97X3y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tare Pan no Gunpei (J) [M][f2]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1RIppd0b_L9iwP92ZtRNNpQN6-0LzkW0R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tekken Card Challenge (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1KDQBDtnmuujv4bh2TlxFD0awlghHdiG4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terrors (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1CN9fGX04tAe7D5IKVR9l86Of_bArwwMa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetsujin 28 Gou (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1-bh6O_ZubvQFCF05CxpIVYOyUyZ7BFCW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetsujin 28 Gou (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1Cj1DfOvfOU6hJiTJwO84lS4oXBG8dOLY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetsuman (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1D15H6YUlWi2S1a6hrMoaa2ZgUN-jE7s-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tokyo Majin Gakuen Fuju Fuuroku (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "8192 KB",
    link1: "https://drive.google.com/file/d/1RZ_RJkZKU1nR_UiunpnyubN1ri-kcepy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trump Collection Bottom Up Teki Trump Seikatsu (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1e7nQU78uqb-p2XA-TZBQZnheU7tmoPkF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turntablist - DJ Battle (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/133mMU1ue4xJ4xlpFVP4Lu1Few9xWuaaK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turntablist - DJ Battle (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1otTn9pW_NErcirw9cLa3nZCP5o7QhaHp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Umizuri Ni Ikou (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1k7KUkuxs1XxgfGVfh4szUfUnfpKE_6VI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uzumaki - Denshi Kaiki Hen (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1MJUObk2b2EUBIyLZZIexDVdOihVYUrHg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uzumaki - Denshi Kaiki Hen (J) [M][f1]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1SNOCRhMgBXfVpD12iOwUZ-hsqd9wbxON/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vaitz Blade (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/1NYxuV5IvQv2SLy9H2DSuJwBQm3UXrFL8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wasabi Produce - Street Dancer (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/13VPfM9BhTXjbm6FjQs225a0G7Ef4Ib52/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizardry - Scenario 1 - Kyounou no Shiren Jou (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1cfizTwdPYE0I_wAz5QyIWgBBpXL5bE42/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Classic (J) [M][!]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "4096 KB",
    link1: "https://drive.google.com/file/d/17yNGayk16ReI3OeCDrXdLgkNqTIARYb3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Stadium '99 (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1_G4JU1BFKJUzBeNXmh0deLWyt1R__2wc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Stadium (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1V4FjkTQab82Qdg-lRq8q74uLK47AfP2i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WonderSwan Handy Sonar (J) [M]",
    image: "https://i.postimg.cc/gcQf2Rcx/Wonder-Sw-an-logo-svg.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1LrhwyuDDAzVwkAsmG1XJoGujQ-hO_Sf_/view?usp=drivesdk",
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

