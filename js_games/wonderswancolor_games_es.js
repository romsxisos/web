const roms = [
  {
    name: "Arc The Lad - Kijin Fukkatsu (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "3086 KB",
    link1: "https://drive.google.com/file/d/1Cc_hDQNKn-7NtCxxTWcTfuC-xL4HuJJz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dark Eyes - Battle Gate (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1311 KB",
    link1: "https://drive.google.com/file/d/1AaXO8eXKM4xFe-az_y_x9RQa2OZgDc-t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Digital Monsters - D Project (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "994 KB",
    link1: "https://drive.google.com/file/d/1u_t4xNvPNJ9kBE9UEVcyW2MQf8x0mxeR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Digital Monsters for WonderSwanColor (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1714 KB",
    link1: "https://drive.google.com/file/d/1cMo9EPYOS20Z72weBrOw-7pEFm70t3nt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Digital Monsters for WonderSwanColor (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1714 KB",
    link1: "https://drive.google.com/file/d/1KCqcEAA0gWu9HBpCUKMdBizkU7rP-tfs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Tamers - Brave Tamer (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1976 KB",
    link1: "https://drive.google.com/file/d/1q2ycE0W8Xy5ETpGSaapbTHPViwRv-gSN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Tamers - Digimon Medley (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1548 KB",
    link1: "https://drive.google.com/file/d/1TJT6HIzarPo4AgLQFxdGPMlz518dNNeH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Tamers - Digimon Medley (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1548 KB",
    link1: "https://drive.google.com/file/d/1IuQaxXQNS7-yUyVwAFwvyc0CxQrgJMSE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dokodemo Hamster 3 - O Dekake Saffron (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "388 KB",
    link1: "https://drive.google.com/file/d/1O21L0SfSFMfhRbam7OUsoz8hMJTlQlT0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragonball (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1111 KB",
    link1: "https://drive.google.com/file/d/1Q3KWEK26G4bnIUUl1oJzbOc96FU2s79c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2032 KB",
    link1: "https://drive.google.com/file/d/19DEvz-fSZOeeJktUVj_bPJQEu3PxYkQ_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy (J) [T+Eng0.91_Kalas]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2032 KB",
    link1: "https://drive.google.com/file/d/10g8Myw2axiJxEvhLbL1n-OhziDuq1nmX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy 4 (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1237 KB",
    link1: "https://drive.google.com/file/d/1RWiaFaB1RhTK5cRCEO0uqEZMF_Qjxo31/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy II (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2314 KB",
    link1: "https://drive.google.com/file/d/1hXePBpSDAIuwWskOevJwg20O_rj4T7H5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy II (J) [T+Eng010]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2312 KB",
    link1: "https://drive.google.com/file/d/1CuDj4lQ5poOn1irA08TqbfNs-eFSywVO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy II (J) [T+Eng097_RPGOne]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2309 KB",
    link1: "https://drive.google.com/file/d/1qSGnERyWM0oF3V-fGqFj_KfiI8Ndm3iK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy II (J) [T-Eng095_RPGOne]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2310 KB",
    link1: "https://drive.google.com/file/d/1gCUg8wb15hj2hNwjeKJsc5y9WkN-LbM-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Lap Special (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2172 KB",
    link1: "https://drive.google.com/file/d/1LdQpQrylYmfmR84o1lqryj5aOoju2KRj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Lap Special (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2172 KB",
    link1: "https://drive.google.com/file/d/1bKlbIV_KS91QIoy4jkt1Phkfnvf0DgKm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flash - Koibito Kun (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "529 KB",
    link1: "https://drive.google.com/file/d/1APGQYHMAAo_0XwJdrcEU6_62wLZAlTwG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flash - Koibito Kun (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "529 KB",
    link1: "https://drive.google.com/file/d/1AEYYQTc5kGsbT2GTIhnTo-hVxklN2MzG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "From TV Animation - One Piece - Niji no Shima Densetsu (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2352 KB",
    link1: "https://drive.google.com/file/d/1e-TE5Epu9YdG0CvUinw2qEtP3nW3KOkj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Front Mission (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2472 KB",
    link1: "https://drive.google.com/file/d/1sVUqrahaxzWpp5zQkTEsjRNBQhktUybe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gensou Maden Saiyuuki Retribution (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "522 KB",
    link1: "https://drive.google.com/file/d/1blaJip8wUHmGTy0_QJ_PH0l25pSQtmIw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gensou Maden Saiyuuki Retribution (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "522 KB",
    link1: "https://drive.google.com/file/d/1sbO-3sV_uQcx9pNSoqvmpl6D2tVaUAeK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "554 KB",
    link1: "https://drive.google.com/file/d/1IAiXlpkfjtHLHohwm6ArekpMHjJcoTSi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe (J) [t1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "574 KB",
    link1: "https://drive.google.com/file/d/1SS1S3QP6uud5HS4Kywh2Dc1teUoZEN39/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Guilty Gear Petit (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "672 KB",
    link1: "https://drive.google.com/file/d/1Zq23a8gilMhNtztn5Z-WwNzlBpTHYTfu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Guilty Gear Petit 2 (J) [t1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1487 KB",
    link1: "https://drive.google.com/file/d/1-L6RviUHyJ1HVVkltP2qfSVP2e42fSZV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GunPey Ex (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "377 KB",
    link1: "https://drive.google.com/file/d/1My3n-z998eEtAtMp65uAxEaNajXvlFJV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GunPey Ex (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "377 KB",
    link1: "https://drive.google.com/file/d/1NTZwj-7J2zZQhbkczXymzEqHn7xvuoIu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hanjyuku Hero - Aah Sekai yo Hanjuku Nare (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "960 KB",
    link1: "https://drive.google.com/file/d/1Dg-hukdEfpPOw-cDmcS8aUnPIDVVUpPQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hataraku Chocobo (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/1a1FPAbcjbDRQdFNVCE4HKFzPl2tnKhNi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunter X Hunter - Greed Island (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "3175 KB",
    link1: "https://drive.google.com/file/d/1Nwth7hnk6SReeHC2PASzAUtmVMwHK9-a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunter X Hunter - Michibi Kareshi Mono (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2566 KB",
    link1: "https://drive.google.com/file/d/1RkqmJQc1DMuiWs-hEl1hXYqH9LNvFkgE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunter X Hunter - Michibi Kareshi Mono (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2566 KB",
    link1: "https://drive.google.com/file/d/1AMC8MzG3qQnDa5bo4xuuw7XdRjahsMNO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunter X Hunter - Sorezore no Ketsui (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2408 KB",
    link1: "https://drive.google.com/file/d/1XjVM8wC_cEFR3_8x9UOdgjfl2cRAgEHU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunter X Hunter - Sorezore no Ketsui (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2408 KB",
    link1: "https://drive.google.com/file/d/1_eKzfSmvFOmQRt0EMZl-yCRlci6AnsrI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inu Yasha (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1157 KB",
    link1: "https://drive.google.com/file/d/1a4DsPM9oTfSIpY7iRZivCQwT8Vtw24Pr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inu Yasha Fuu'un Emaki (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1013 KB",
    link1: "https://drive.google.com/file/d/17U3-DQaTEf3ZHzwgFgTIWxo3EfPnpL-x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kidou Senshi Gundam Seed (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1404 KB",
    link1: "https://drive.google.com/file/d/1dM7wwhTm_tD6x_gS9YArU2rTXOMEGdmS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kidou Senshi Gundam Seed (J) [T+Chi_amuro]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1405 KB",
    link1: "https://drive.google.com/file/d/1GwkMSEJ2LuUnHpHLgfny6O9cE8S1ZAzs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kidou Senshi Gundam Vol.1 -Side 7- (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2179 KB",
    link1: "https://drive.google.com/file/d/1-extMFSox3pR-Z2C674d7BBsvF7dEk6I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kinniku Man Second Generations Dream Tag Match (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "678 KB",
    link1: "https://drive.google.com/file/d/1AaA8Nhfq-uFvBT_WFLM5727EnU-nKRt5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kinnikuman Nisei Choujin Seisenshi (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1983 KB",
    link1: "https://drive.google.com/file/d/1GM2PrrD4HXlFTiuYeDrwQgtFHwAi9QKR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kurupara! (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "922 KB",
    link1: "https://drive.google.com/file/d/18QafIIiCkHxEhUCA3fJ49Ho3ydZEdjnx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Last Alive (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "3360 KB",
    link1: "https://drive.google.com/file/d/1vIp9JBwRf7anjpwj-SxyX9meQ04tIFeo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Last Alive (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "3360 KB",
    link1: "https://drive.google.com/file/d/1rG5vDMzwXtYEa14hKYdGuGvXsncnC_yN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Makai Toushi Sa-Ga (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1476 KB",
    link1: "https://drive.google.com/file/d/1dXwzpwR-FzL-KC1PHfBfgNmpDqIroQiA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meitantei Conan - Yugure no Koujo (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1711 KB",
    link1: "https://drive.google.com/file/d/1TU52bMPPaTJIMEi0_Aof13Csou09tYmS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Memories of Festa (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "510 KB",
    link1: "https://drive.google.com/file/d/1Dhj6yahIGaAvl6B64zfb4ZojU5rvm6h0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mikeneko Holme's Ghost Panic (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2643 KB",
    link1: "https://drive.google.com/file/d/1tyIllRwdipQpLnB9UoZihrDSedeccFH1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mikeneko Holme's Ghost Panic (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2643 KB",
    link1: "https://drive.google.com/file/d/1iqw8xLbUTOeWtbqHaQcSevEJGCq8BGaA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mobile Suit Gundam - Volume 2 - JABURO (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "4058 KB",
    link1: "https://drive.google.com/file/d/1qPmBXlHzz_OxQ61MEDxbkymTSbUKSKa9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Driller (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1RGPdhm-D6xUhc7Q9SgaaPWryCX4ICBwy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Naruto (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2083 KB",
    link1: "https://drive.google.com/file/d/1cq-XT68CO083JXIInve56UqZ3GAuGR40/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "One Piece - Grand Battle Swan Colloseum (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "3042 KB",
    link1: "https://drive.google.com/file/d/1rlKyPuniTkFtvjwzoxji4R_vHVOt-fg0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket no Naka no Doraemon (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2369 KB",
    link1: "https://drive.google.com/file/d/1Cq1X-kfPbLJwZhT2P8Xkv_HZwaJXVIVl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket no Naka no Doraemon (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2369 KB",
    link1: "https://drive.google.com/file/d/1Sq6kAAKq3Tmkk2s1kCRYjFJXYYETaX4Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raku Jongg (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "419 KB",
    link1: "https://drive.google.com/file/d/1XPyminqAjfOwz8GDoPbQ9yI1oZ2ChN4Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raku Jongg (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "420 KB",
    link1: "https://drive.google.com/file/d/1lLGm7og0T5hAoT_hpxLGC1qrE1F799_c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rhyme Rider Kerorikan (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2110 KB",
    link1: "https://drive.google.com/file/d/1lNQ55AVeVdlCyoWSuaIYwJD_jgq31z40/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rockman EXE N1 Battle SWJ-CPCC01 (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2903 KB",
    link1: "https://drive.google.com/file/d/12jFfH2ARrUu1JuzdrPj2IvEymZsWtBfz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rockman EXE WS (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "932 KB",
    link1: "https://drive.google.com/file/d/1MxT7XzCrq9qQdue3EaIy_uH15TWP4cfl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Romancing Saga (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "958 KB",
    link1: "https://drive.google.com/file/d/19f3yGYruyW8gbYoRJMf4Y4xdmFBeJQP2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam - Operation U.C. (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "686 KB",
    link1: "https://drive.google.com/file/d/12A-WFKYzybzWEObV1o167YXOjfIioznV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam G Generation - Gather Beat 2 (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "3407 KB",
    link1: "https://drive.google.com/file/d/1BkQTS0ify8QmqX5YnHGGEnRJLhb4lXtV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Gundam G Generation - Mono-Eye Gundams (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "3821 KB",
    link1: "https://drive.google.com/file/d/1aJxZoEgyxdFeDqZ6FoTrzRUd0C6xgtMc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Saint Seiya - Ougon Densetsu Hen Perfect Edition (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "654 KB",
    link1: "https://drive.google.com/file/d/10C6VuElHsZpFvo7SHYHnbfmu2vG6LbqW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shaman King Mirai E no Ishi (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1004 KB",
    link1: "https://drive.google.com/file/d/1Z_NmGdGrtrqVirNINnxGlw2fdjet9lag/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soroban Gu (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1bRs6jaz4WhF75uHV15_RfR5eVoiyCSrW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Hearts (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1526 KB",
    link1: "https://drive.google.com/file/d/1BK4IfWesJFYHrcioqAzdw2pyZNZK8zB0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Hearts Taikenban (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1441 KB",
    link1: "https://drive.google.com/file/d/1r54yP9qAjAnG36LAdA5RLNbw73AAOqHV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Robot Taisen Compact (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1624 KB",
    link1: "https://drive.google.com/file/d/1JmGnJMWZDPrlSWzAPUtrTu8aCAY0tQiG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Robot Taisen Compact 3 (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "3596 KB",
    link1: "https://drive.google.com/file/d/1t7vsLdyxMBqfRBgvNevdUy3WIiUADe4l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terrors 2 (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "3027 KB",
    link1: "https://drive.google.com/file/d/1eM8K14guYhIgjKAK0olpJMera-gERl7v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terrors 2 (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "3027 KB",
    link1: "https://drive.google.com/file/d/1POWiN60lz-s_x6c5k2TKVV--ubvJ4qtT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonpusou (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "511 KB",
    link1: "https://drive.google.com/file/d/1xKrW1xUD_budyGmfq-jt4c_Mq3KGmFrA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonpusou (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1FMHBWaD3A_tGY1L2-tweRRC8wGzaWmII/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trump Collection 2 (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1Ts0ExeRoQuSjkrkKc8UDtc97CGxzj8Ua/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uchuu Senkan Yamato (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1868 KB",
    link1: "https://drive.google.com/file/d/17bkF5zRgl7jLF0nUhH1LkwYbee9Y0r-U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman - Hikari no Kuni no Shisha (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1321 KB",
    link1: "https://drive.google.com/file/d/11zEu_dzyUKKX5y5P692KhyHR8lEDbVKB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wild Card (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1155 KB",
    link1: "https://drive.google.com/file/d/1KYe-nULqHUt7Pod8yP7iiriCBeH-fKGf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "With You Mitsumete Itai (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1745 KB",
    link1: "https://drive.google.com/file/d/1pMDIx_Xoa1qU8HcCZ6gr3OFnDSaS3bjK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "With You Mitsumete Itai (J) [f1]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "1745 KB",
    link1: "https://drive.google.com/file/d/1So0t8d9yO0gJPIaRXT24Xc_GEkvdW-j5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X Card of Fate (TV Animation X) (J) [!]",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "2377 KB",
    link1: "https://drive.google.com/file/d/13mj0Arsr90ohxVrOBRLZVuv75QjyFlfi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "XI (Sai) Little (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "897 KB",
    link1: "https://drive.google.com/file/d/1ODH3USqgnfK2SkpzbP-6QePIwBj-wDLR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yakusoku no Chi Riviera (J)",
    image: "https://i.postimg.cc/mDq6hfsv/Wondersw-an-Color-Logo-svg.png",
    size: "4304 KB",
    link1: "https://drive.google.com/file/d/1jVlVMVYw3NsOUXqy8FJpMqFZy8L20yvV/view?usp=drivesdk",
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

