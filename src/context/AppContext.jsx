"use client";

import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialProducts = [
  {
    id: "1b5a",
    title: "neww",
    description: "ssasadad",
    price: "100",
    discountPrice: "20",
    rating: "20",
    stock: "10",
    category: "Phone",
    image:
      "https://images.unsplash.com/photo-1682685796965-9814afcbff55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    create_at: 1714316506132,
    color: "#000",
  },
  {
    id: "c2b5",
    title: "ndssfds",
    description: "fsfdfsd",
    price: "20",
    discountPrice: "5",
    rating: "10",
    stock: "5",
    category: "Phone",
    image:
      "https://images.unsplash.com/photo-1682685796965-9814afcbff55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    create_at: 1714382758344,
    color: "#000",
  },
  {
    id: "a2f4",
    title: "new",
    description: "neww",
    price: "10",
    discountPrice: "5",
    rating: "6",
    stock: "9",
    category: "Phone",
    image:
      "https://images.unsplash.com/photo-1682685796965-9814afcbff55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    create_at: 1716025970977,
    color: "#ef1616",
  },
  {
    id: "6e44",
    title: "mobile",
    description: "test",
    price: "98",
    discountPrice: "100",
    rating: "8",
    stock: "5",
    category: "Phone",
    image:
      "https://thumbs.dreamstime.com/b/brand-new-realistic-mobile-phone-black-smartphone-apple-iphone-vector-eps-100341904.jpg",
    create_at: 1749749724611,
    color: "#000",
  },
  {
    id: "597a",
    title: "mobile",
    description: "test 2",
    price: "100",
    discountPrice: "40",
    rating: "9",
    stock: "2",
    category: "Phone",
    image:
      "https://thumbs.dreamstime.com/b/brand-new-realistic-mobile-phone-black-smartphone-apple-iphone-vector-eps-100341904.jpg",
    create_at: 1749749724611,
    color: "#000",
  },
  {
    id: "4fbf",
    title: "notebook",
    description: "test notebook",
    price: "100",
    discountPrice: "10",
    rating: "5",
    stock: "6",
    category: "Techn",
    image:
      "https://texnomart.az/wp-content/uploads/2021/12/texnomart-Notebook-HP-250-G8-Core-i5-1035G1-tvs70eqz8km3f14olbij.jpg",
    create_at: 1749752637495,
    color: "#000000",
  },
  {
    id: "24bc",
    title: "computer",
    description: "comp test",
    price: 1000,
    discountPrice: 98,
    finalPrice: 902,
    rating: 5.5,
    stock: -1,
    category: "Techn",
    image:
      "https://thumbs.dreamstime.com/b/brand-new-realistic-mobile-phone-black-smartphone-apple-iphone-vector-eps-100341904.jpg",
    create_at: 1749823008526,
    color: "#000",
  },
  {
    id: "8f7e",
    title: "test",
    description: "test",
    price: 10,
    discountPrice: 3,
    finalPrice: 7,
    rating: 2,
    stock: 1,
    category: "Phone",
    image:
      "https://thumbs.dreamstime.com/b/brand-new-realistic-mobile-phone-black-smartphone-apple-iphone-vector-eps-100341904.jpg",
    create_at: 1749823008526,
    color: "#000",
  },
  {
    id: "6861",
    title: "test",
    description: "test",
    price: 10,
    discountPrice: 2,
    finalPrice: 8,
    rating: 5,
    stock: 1,
    category: "Phone",
    image:
      "https://texnomart.az/wp-content/uploads/2021/12/texnomart-Notebook-HP-250-G8-Core-i5-1035G1-tvs70eqz8km3f14olbij.jpg",
    create_at: 1749823008526,
    color: "#000",
  },
  {
    id: "67ee",
    title: "gfd",
    description: "test notebook",
    price: 15,
    discountPrice: 5,
    finalPrice: 10,
    rating: 2,
    stock: 4,
    category: "Phone",
    image:
      "https://texnomart.az/wp-content/uploads/2021/12/texnomart-Notebook-HP-250-G8-Core-i5-1035G1-tvs70eqz8km3f14olbij.jpg",
    create_at: 1749823008526,
    color: "#000",
  },
  {
    id: "5a1d",
    title: "IPhone 16",
    description: "Apple Ios 26",
    price: 2600,
    discountPrice: 500,
    finalPrice: 2100,
    rating: 9,
    stock: 15,
    category: "Mobile",
    image:
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg",
    create_at: 1749904798208,
    color: "#d0021b",
  },
];

const initialCustomers = [
  {
    id: 1,
    name: "Brittan Rois",
    email: "brois0@unicef.org",
    location: "Bator",
    phone: "+62 745 807 7685",
    totalSpent: 557248.44,
    totalOrders: 24011,
    joinDate: "2023-01-15",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Matthew Junifer",
    email: "mjunifer1@buzzfeed.com",
    location: "Bromma",
    phone: "+46 993 722 3008",
    totalSpent: 599864.94,
    totalOrders: 60195,
    joinDate: "2023-03-22",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Finlay Baylay",
    email: "fbaylay2@purevolume.com",
    location: "Atalaia",
    phone: "+55 232 355 3569",
    totalSpent: 171337.47,
    totalOrders: 96328,
    joinDate: "2022-11-08",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Beryle Monelli",
    email: "bmonelli3@amazonaws.com",
    location: "Martingança",
    phone: "+351 734 876 8127",
    total_spend: "$335862.78",
    total_orders: 78768,
  },
  {
    id: 5,
    name: "Ilario Shoppee",
    email: "ishoppee4@webmd.com",
    location: "Lincoln",
    phone: "+54 410 442 6083",
    total_spend: "$719845.14",
    total_orders: 26045,
  },
  {
    id: 6,
    name: "Guglielma Haking",
    email: "ghaking5@icio.us",
    location: "Sangzhou",
    phone: "+86 722 902 9706",
    total_spend: "$621446.73",
    total_orders: 90771,
  },
  {
    id: 7,
    name: "Celle Acum",
    email: "cacum6@scribd.com",
    location: "Huzhen",
    phone: "+86 805 547 3640",
    total_spend: "$640651.30",
    total_orders: 97842,
  },
  {
    id: 8,
    name: "Ailey Haig",
    email: "ahaig7@live.com",
    location: "Gizel",
    phone: "+7 623 158 0485",
    total_spend: "$473255.45",
    total_orders: 85298,
  },
  {
    id: 9,
    name: "Ebonee Robardet",
    email: "erobardet8@google.co.jp",
    location: "Uyugan",
    phone: "+63 406 595 5538",
    total_spend: "$513918.18",
    total_orders: 38959,
  },
  {
    id: 10,
    name: "Nancy Hallatt",
    email: "nhallatt9@tamu.edu",
    location: "Liuhao",
    phone: "+86 194 283 7223",
    total_spend: "$862509.17",
    total_orders: 48049,
  },
  {
    id: 11,
    name: "Savina Gardener",
    email: "sgardenera@mozilla.com",
    location: "Bosanski Brod",
    phone: "+387 494 626 9847",
    total_spend: "$385914.28",
    total_orders: 24961,
  },
  {
    id: 12,
    name: "Walliw Berard",
    email: "wberardb@state.tx.us",
    location: "Athy",
    phone: "+353 884 996 4703",
    total_spend: "$33957.23",
    total_orders: 24986,
  },
  {
    id: 13,
    name: "Bernita Moniker",
    email: "bmonikerc@g.co",
    location: "Conceição da Abóboda",
    phone: "+351 122 281 8005",
    total_spend: "$165782.42",
    total_orders: 38671,
  },
  {
    id: 14,
    name: "Devlen MacGibbon",
    email: "dmacgibbond@mashable.com",
    location: "Manjakandriana",
    phone: "+261 550 422 8564",
    total_spend: "$733558.04",
    total_orders: 5702,
  },
  {
    id: 15,
    name: "Terri O'Nion",
    email: "tonione@msn.com",
    location: "Hadžići",
    phone: "+387 213 246 0301",
    total_spend: "$327313.11",
    total_orders: 7145,
  },
  {
    id: 16,
    name: "Anselm Cavilla",
    email: "acavillaf@live.com",
    location: "Redcliff",
    phone: "+263 941 369 6625",
    total_spend: "$533334.93",
    total_orders: 33108,
  },
  {
    id: 17,
    name: "Frances Wyndham",
    email: "fwyndhamg@nbcnews.com",
    location: "Hekou",
    phone: "+86 922 171 8017",
    total_spend: "$799425.62",
    total_orders: 85286,
  },
  {
    id: 18,
    name: "Bennett Skermer",
    email: "bskermerh@reverbnation.com",
    location: "Sinop",
    phone: "+55 598 223 7882",
    total_spend: "$251319.17",
    total_orders: 45914,
  },
  {
    id: 19,
    name: "Valentine Lambertazzi",
    email: "vlambertazzii@eepurl.com",
    location: "Kolodenka",
    phone: "+380 633 380 2502",
    total_spend: "$640365.13",
    total_orders: 83235,
  },
  {
    id: 20,
    name: "Tremayne Tolchar",
    email: "ttolcharj@auda.org.au",
    location: "Guofu",
    phone: "+86 445 679 1332",
    total_spend: "$917855.01",
    total_orders: 51836,
  },
  {
    id: 21,
    name: "Estevan Jahncke",
    email: "ejahnckek@ox.ac.uk",
    location: "Benešov nad Ploučnicí",
    phone: "+420 856 496 9100",
    total_spend: "$583555.97",
    total_orders: 9523,
  },
  {
    id: 22,
    name: "Inness Ranyelld",
    email: "iranyelldl@i2i.jp",
    location: "Camperdown",
    phone: "+27 913 964 5397",
    total_spend: "$410344.53",
    total_orders: 96017,
  },
  {
    id: 23,
    name: "Ann Boise",
    email: "aboisem@nhs.uk",
    location: "Esuk Oron",
    phone: "+234 958 752 1521",
    total_spend: "$341368.58",
    total_orders: 83833,
  },
  {
    id: 24,
    name: "Reynard Goodacre",
    email: "rgoodacren@opera.com",
    location: "Isoka",
    phone: "+260 860 266 9740",
    total_spend: "$362313.38",
    total_orders: 15703,
  },
  {
    id: 25,
    name: "Corrie Guerro",
    email: "cguerroo@ca.gov",
    location: "Qingxi",
    phone: "+86 699 529 4527",
    total_spend: "$155933.66",
    total_orders: 67669,
  },
  {
    id: 26,
    name: "Orelee Fonteyne",
    email: "ofonteynep@baidu.com",
    location: "Shanshi",
    phone: "+86 910 656 7153",
    total_spend: "$990947.36",
    total_orders: 7629,
  },
  {
    id: 27,
    name: "Lil Lakeman",
    email: "llakemanq@weather.com",
    location: "Juḩr ad Dīk",
    phone: "+970 799 528 5168",
    total_spend: "$765395.19",
    total_orders: 41097,
  },
  {
    id: 28,
    name: "Teddie Mapstone",
    email: "tmapstoner@guardian.co.uk",
    location: "Tunoshna",
    phone: "+7 872 475 3601",
    total_spend: "$279921.83",
    total_orders: 43948,
  },
  {
    id: 29,
    name: "Paolo Bonds",
    email: "pbondss@washingtonpost.com",
    location: "Youchou",
    phone: "+86 863 508 4897",
    total_spend: "$718700.08",
    total_orders: 43674,
  },
  {
    id: 30,
    name: "Kayla Gallafant",
    email: "kgallafantt@technorati.com",
    location: "Bir al Abd",
    phone: "+20 755 903 3395",
    total_spend: "$959211.70",
    total_orders: 37331,
  },
  {
    id: 31,
    name: "Maisie Mikalski",
    email: "mmikalskiu@alexa.com",
    location: "Mailsi",
    phone: "+92 366 853 6414",
    total_spend: "$820911.51",
    total_orders: 18534,
  },
  {
    id: 32,
    name: "Xymenes Duggon",
    email: "xduggonv@seattletimes.com",
    location: "Heredia",
    phone: "+506 818 346 5321",
    total_spend: "$272870.81",
    total_orders: 37539,
  },
  {
    id: 33,
    name: "Jakie Colles",
    email: "jcollesw@ifeng.com",
    location: "Upernavik",
    phone: "+299 126 679 5677",
    total_spend: "$407794.43",
    total_orders: 96742,
  },
  {
    id: 34,
    name: "Lew Colton",
    email: "lcoltonx@wikimedia.org",
    location: "Toba",
    phone: "+381 522 893 7829",
    total_spend: "$43343.95",
    total_orders: 74692,
  },
  {
    id: 35,
    name: "Theodora Barstow",
    email: "tbarstowy@pcworld.com",
    location: "Ciseda",
    phone: "+62 673 109 7943",
    total_spend: "$661910.51",
    total_orders: 77309,
  },
  {
    id: 36,
    name: "Ulric Kneller",
    email: "uknellerz@nbcnews.com",
    location: "Ústí nad Orlicí",
    phone: "+420 264 829 9892",
    total_spend: "$376602.48",
    total_orders: 79235,
  },
  {
    id: 37,
    name: "Ellwood Bearward",
    email: "ebearward10@reference.com",
    location: "Nueva Requena",
    phone: "+51 171 197 4985",
    total_spend: "$356873.13",
    total_orders: 78996,
  },
  {
    id: 38,
    name: "Shalna Voss",
    email: "svoss11@buzzfeed.com",
    location: "Şanā",
    phone: "+967 264 158 8142",
    total_spend: "$380768.49",
    total_orders: 13036,
  },
  {
    id: 39,
    name: "Holly Iacovacci",
    email: "hiacovacci12@vk.com",
    location: "Ibaraki",
    phone: "+81 667 109 6968",
    total_spend: "$68643.77",
    total_orders: 9334,
  },
  {
    id: 40,
    name: "Nicolle Haggis",
    email: "nhaggis13@huffingtonpost.com",
    location: "Kuruman",
    phone: "+27 607 540 0504",
    total_spend: "$292977.86",
    total_orders: 44276,
  },
  {
    id: 41,
    name: "Janetta Stanett",
    email: "jstanett14@wiley.com",
    location: "Memphis",
    phone: "+1 901 510 8058",
    total_spend: "$624477.22",
    total_orders: 50590,
  },
  {
    id: 42,
    name: "Welch Goodin",
    email: "wgoodin15@examiner.com",
    location: "Metsavan",
    phone: "+374 984 762 7075",
    total_spend: "$44240.56",
    total_orders: 23993,
  },
  {
    id: 43,
    name: "Dominga De Bell",
    email: "dde16@usatoday.com",
    location: "Vysotsk",
    phone: "+7 139 494 7185",
    total_spend: "$253636.61",
    total_orders: 75048,
  },
  {
    id: 44,
    name: "Elga Twamley",
    email: "etwamley17@nps.gov",
    location: "Nishishinminato",
    phone: "+81 421 209 0703",
    total_spend: "$8420.45",
    total_orders: 50193,
  },
  {
    id: 45,
    name: "Annamaria Tuison",
    email: "atuison18@cpanel.net",
    location: "Solidaridad",
    phone: "+52 551 840 1861",
    total_spend: "$8790.60",
    total_orders: 67402,
  },
  {
    id: 46,
    name: "Rutter Hatrick",
    email: "rhatrick19@mayoclinic.com",
    location: "Domampot",
    phone: "+63 134 141 4104",
    total_spend: "$563471.50",
    total_orders: 90685,
  },
  {
    id: 47,
    name: "Teddy Crannage",
    email: "tcrannage1a@uiuc.edu",
    location: "Putrajawa",
    phone: "+62 347 309 9849",
    total_spend: "$830225.28",
    total_orders: 18308,
  },
  {
    id: 48,
    name: "Gaspard Hannabus",
    email: "ghannabus1b@wiley.com",
    location: "Carvalhal",
    phone: "+351 746 761 5629",
    total_spend: "$333295.77",
    total_orders: 93658,
  },
  {
    id: 49,
    name: "Kanya Arnolds",
    email: "karnolds1c@sbwire.com",
    location: "Dolní Černilov",
    phone: "+420 569 892 7749",
    total_spend: "$9356.87",
    total_orders: 25454,
  },
  {
    id: 50,
    name: "Codi Nazer",
    email: "cnazer1d@rediff.com",
    location: "Alexandria",
    phone: "+1 703 933 3296",
    total_spend: "$881050.42",
    total_orders: 65533,
  },
  {
    id: 51,
    name: "Stacy Acom",
    email: "sacom1e@addtoany.com",
    location: "Marondera",
    phone: "+263 724 289 3246",
    total_spend: "$140708.36",
    total_orders: 27138,
  },
  {
    id: 52,
    name: "Cory Blondin",
    email: "cblondin1f@fema.gov",
    location: "Chaykovskaya",
    phone: "+7 724 810 8399",
    total_spend: "$115222.15",
    total_orders: 85693,
  },
  {
    id: 53,
    name: "Weston Shorland",
    email: "wshorland1g@histats.com",
    location: "Shanyang",
    phone: "+86 515 873 6275",
    total_spend: "$190855.19",
    total_orders: 64141,
  },
  {
    id: 54,
    name: "Tammara Mannering",
    email: "tmannering1h@etsy.com",
    location: "Colima",
    phone: "+506 985 540 3341",
    total_spend: "$403919.34",
    total_orders: 24038,
  },
  {
    id: 55,
    name: "Javier Agglio",
    email: "jagglio1i@slideshare.net",
    location: "Yinji",
    phone: "+86 659 330 5270",
    total_spend: "$120274.22",
    total_orders: 82050,
  },
  {
    id: 56,
    name: "Rosalia Schoales",
    email: "rschoales1j@parallels.com",
    location: "Jiancheng",
    phone: "+86 272 227 4958",
    total_spend: "$712884.86",
    total_orders: 82839,
  },
  {
    id: 57,
    name: "Carla Firsby",
    email: "cfirsby1k@xrea.com",
    location: "Artur Nogueira",
    phone: "+55 238 356 2094",
    total_spend: "$965901.20",
    total_orders: 16879,
  },
  {
    id: 58,
    name: "Taite Oakenford",
    email: "toakenford1l@sun.com",
    location: "La Francia",
    phone: "+54 425 742 5491",
    total_spend: "$408901.92",
    total_orders: 35823,
  },
  {
    id: 59,
    name: "Robinet Rounds",
    email: "rrounds1m@arizona.edu",
    location: "Sé",
    phone: "+351 554 677 9118",
    total_spend: "$794096.97",
    total_orders: 67929,
  },
  {
    id: 60,
    name: "Christalle Ciraldo",
    email: "cciraldo1n@google.com",
    location: "Šentvid pri Stični",
    phone: "+386 906 510 2232",
    total_spend: "$265441.66",
    total_orders: 2684,
  },
  {
    id: 61,
    name: "Valaree Stocker",
    email: "vstocker1o@census.gov",
    location: "Shazi",
    phone: "+86 922 785 8999",
    total_spend: "$129853.99",
    total_orders: 49514,
  },
  {
    id: 62,
    name: "Consuelo Sutcliff",
    email: "csutcliff1p@gmpg.org",
    location: "Kargasok",
    phone: "+7 513 592 9428",
    total_spend: "$854447.52",
    total_orders: 96664,
  },
  {
    id: 63,
    name: "Nike Lincke",
    email: "nlincke1q@china.com.cn",
    location: "Tegalbuleud",
    phone: "+62 383 930 3878",
    total_spend: "$978252.13",
    total_orders: 67231,
  },
  {
    id: 64,
    name: "Shep Quilligan",
    email: "squilligan1r@cnn.com",
    location: "Nakhon Luang",
    phone: "+66 794 209 8355",
    total_spend: "$205510.28",
    total_orders: 499,
  },
  {
    id: 65,
    name: "Wallie Erwin",
    email: "werwin1s@delicious.com",
    location: "Edsbyn",
    phone: "+46 581 583 0609",
    total_spend: "$410995.35",
    total_orders: 74623,
  },
  {
    id: 66,
    name: "Zechariah Attwood",
    email: "zattwood1t@nifty.com",
    location: "Shibushi",
    phone: "+81 401 511 4244",
    total_spend: "$63707.16",
    total_orders: 86419,
  },
  {
    id: 67,
    name: "Stevana Tebald",
    email: "stebald1u@house.gov",
    location: "Yelyzavethradka",
    phone: "+380 408 617 1812",
    total_spend: "$833541.06",
    total_orders: 83677,
  },
  {
    id: 68,
    name: "Palm BURWIN",
    email: "pburwin1v@ameblo.jp",
    location: "Kertasari",
    phone: "+62 421 758 8843",
    total_spend: "$331030.06",
    total_orders: 99939,
  },
  {
    id: 69,
    name: "Sharl Purdey",
    email: "spurdey1w@arstechnica.com",
    location: "Hīsh",
    phone: "+963 365 813 0051",
    total_spend: "$720913.09",
    total_orders: 5869,
  },
  {
    id: 70,
    name: "Aloin Pembry",
    email: "apembry1x@google.ru",
    location: "Yangji",
    phone: "+86 339 318 7176",
    total_spend: "$227153.85",
    total_orders: 31960,
  },
  {
    id: 71,
    name: "Karoline Daud",
    email: "kdaud1y@ted.com",
    location: "Palhoça",
    phone: "+55 517 473 6728",
    total_spend: "$852723.94",
    total_orders: 79377,
  },
  {
    id: 72,
    name: "Mortie Futter",
    email: "mfutter1z@yellowbook.com",
    location: "Blachownia",
    phone: "+48 173 298 9740",
    total_spend: "$509731.71",
    total_orders: 37061,
  },
  {
    id: 73,
    name: "Schuyler Hinkens",
    email: "shinkens20@shareasale.com",
    location: "Río Hondo",
    phone: "+502 657 950 5432",
    total_spend: "$220360.77",
    total_orders: 9905,
  },
  {
    id: 74,
    name: "Jozef McMurty",
    email: "jmcmurty21@fotki.com",
    location: "Dalududalu",
    phone: "+62 491 202 8200",
    total_spend: "$887874.81",
    total_orders: 33691,
  },
  {
    id: 75,
    name: "Nara McGunley",
    email: "nmcgunley22@qq.com",
    location: "Alicante/Alacant",
    phone: "+34 792 752 4796",
    total_spend: "$276972.46",
    total_orders: 87254,
  },
  {
    id: 76,
    name: "Marleah Timson",
    email: "mtimson23@nature.com",
    location: "Paniówki",
    phone: "+48 211 545 0147",
    total_spend: "$234963.55",
    total_orders: 64181,
  },
  {
    id: 77,
    name: "Ketty Blucher",
    email: "kblucher24@booking.com",
    location: "Xiangyanglu",
    phone: "+86 548 699 1455",
    total_spend: "$84086.90",
    total_orders: 68525,
  },
  {
    id: 78,
    name: "Murray Arndtsen",
    email: "marndtsen25@wp.com",
    location: "Shizuoka-shi",
    phone: "+81 586 415 9966",
    total_spend: "$954698.49",
    total_orders: 95142,
  },
  {
    id: 79,
    name: "Benson Boothby",
    email: "bboothby26@simplemachines.org",
    location: "Los Cóndores",
    phone: "+54 161 829 2347",
    total_spend: "$966525.39",
    total_orders: 75052,
  },
  {
    id: 80,
    name: "Shaylah Gerrit",
    email: "sgerrit27@sitemeter.com",
    location: "Paingar",
    phone: "+86 573 121 9461",
    total_spend: "$609097.00",
    total_orders: 55581,
  },
  {
    id: 81,
    name: "Betteann Hawyes",
    email: "bhawyes28@un.org",
    location: "Cihua",
    phone: "+86 545 455 0770",
    total_spend: "$8958.92",
    total_orders: 58310,
  },
  {
    id: 82,
    name: "Reynolds Slemming",
    email: "rslemming29@bloglines.com",
    location: "Dawu Chengguanzhen",
    phone: "+86 740 215 8983",
    total_spend: "$764434.83",
    total_orders: 5454,
  },
  {
    id: 83,
    name: "Arlen Abernethy",
    email: "aabernethy2a@google.nl",
    location: "Abbeville",
    phone: "+33 155 902 8183",
    total_spend: "$771130.66",
    total_orders: 23440,
  },
  {
    id: 84,
    name: "Bernardine Eade",
    email: "beade2b@columbia.edu",
    location: "Plato",
    phone: "+57 498 368 3733",
    total_spend: "$339268.83",
    total_orders: 17501,
  },
  {
    id: 85,
    name: "Ian Causley",
    email: "icausley2c@virginia.edu",
    location: "Acton Vale",
    phone: "+1 992 294 1907",
    total_spend: "$995374.27",
    total_orders: 25553,
  },
  {
    id: 86,
    name: "Abagail Garth",
    email: "agarth2d@wiley.com",
    location: "Melfi",
    phone: "+235 627 502 0870",
    total_spend: "$830054.12",
    total_orders: 56715,
  },
  {
    id: 87,
    name: "Tome Sessuns",
    email: "tsessuns2e@desdev.cn",
    location: "General Alvear",
    phone: "+54 890 389 9195",
    total_spend: "$568999.17",
    total_orders: 52444,
  },
  {
    id: 88,
    name: "Sly Godbold",
    email: "sgodbold2f@miitbeian.gov.cn",
    location: "Arvayheer",
    phone: "+976 574 510 5888",
    total_spend: "$915158.93",
    total_orders: 55259,
  },
  {
    id: 89,
    name: "Lane Wheatcroft",
    email: "lwheatcroft2g@netlog.com",
    location: "Terpsithéa",
    phone: "+30 802 453 1790",
    total_spend: "$170027.54",
    total_orders: 63611,
  },
  {
    id: 90,
    name: "Bard Scutchin",
    email: "bscutchin2h@usatoday.com",
    location: "Ganxi",
    phone: "+86 823 166 6095",
    total_spend: "$679196.04",
    total_orders: 93350,
  },
  {
    id: 91,
    name: "Alister Batten",
    email: "abatten2i@google.com.au",
    location: "Petaling Jaya",
    phone: "+60 560 404 2745",
    total_spend: "$10542.24",
    total_orders: 7586,
  },
  {
    id: 92,
    name: "Blanche Emery",
    email: "bemery2j@loc.gov",
    location: "Pau",
    phone: "+33 814 263 4404",
    total_spend: "$479717.40",
    total_orders: 49842,
  },
  {
    id: 93,
    name: "Kyla Bertomieu",
    email: "kbertomieu2k@biglobe.ne.jp",
    location: "Tabwakea Village",
    phone: "+686 287 696 5776",
    total_spend: "$536886.07",
    total_orders: 59480,
  },
  {
    id: 94,
    name: "Hugh Livick",
    email: "hlivick2l@wiley.com",
    location: "Phù Mỹ",
    phone: "+84 585 419 2646",
    total_spend: "$447424.97",
    total_orders: 2668,
  },
  {
    id: 95,
    name: "Emera Daintry",
    email: "edaintry2m@ustream.tv",
    location: "Sámara",
    phone: "+506 371 708 7960",
    total_spend: "$850767.23",
    total_orders: 56769,
  },
  {
    id: 96,
    name: "Arnuad Dinneen",
    email: "adinneen2n@sitemeter.com",
    location: "Llacanora",
    phone: "+51 722 599 3677",
    total_spend: "$361343.72",
    total_orders: 87255,
  },
  {
    id: 97,
    name: "Krystalle Whittlesea",
    email: "kwhittlesea2o@list-manage.com",
    location: "Bantardawa",
    phone: "+62 122 286 5695",
    total_spend: "$376281.52",
    total_orders: 25818,
  },
  {
    id: 98,
    name: "Jessie Yeudall",
    email: "jyeudall2p@wikimedia.org",
    location: "Jargalant",
    phone: "+976 154 383 3816",
    total_spend: "$592993.68",
    total_orders: 39010,
  },
  {
    id: 99,
    name: "Carlin Baden",
    email: "cbaden2q@shop-pro.jp",
    location: "Santa Fe",
    phone: "+63 702 332 2827",
    total_spend: "$434732.89",
    total_orders: 49922,
  },
  {
    id: 100,
    name: "Abagael McVrone",
    email: "amcvrone2r@ihg.com",
    location: "Dongfeng",
    phone: "+86 630 450 6014",
    total_spend: "$920279.19",
    total_orders: 32514,
  },
];

const initialState = {
  currentPage: "dashboard",
  theme: "light",
  accentColor: "blue",
  products: initialProducts,
  customers: initialCustomers,
  basket: [],
  notifications: [
    {
      id: 1,
      message: "New order received from John Doe",
      time: "2 min ago",
      read: false,
      type: "order",
    },
    {
      id: 2,
      message: "Product stock running low: iPhone 14 Pro",
      time: "1 hour ago",
      read: false,
      type: "warning",
    },
    {
      id: 3,
      message: "Customer inquiry from Jane Smith",
      time: "3 hours ago",
      read: true,
      type: "message",
    },
    {
      id: 4,
      message: "Monthly sales report is ready",
      time: "1 day ago",
      read: true,
      type: "info",
    },
  ],
  recentActions: [
    { id: 1, action: "Added new product: iPhone 14 Pro", time: "5 min ago" },
    { id: 2, action: "Updated customer: John Doe", time: "15 min ago" },
    { id: 3, action: "Processed order #1234", time: "30 min ago" },
  ],
  stats: {
    totalSales: 1995,
    dailyVisits: 2001,
    totalIncome: 2632,
    totalOrders: 1711,
    totalProducts: initialProducts.length,
  },
};

function appReducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };

    case "SET_THEME":
      return { ...state, theme: action.payload };

    case "SET_ACCENT_COLOR":
      return { ...state, accentColor: action.payload };

    case "ADD_PRODUCT": {
      const newProduct = {
        ...action.payload,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      return {
        ...state,
        products: [...state.products, newProduct],
        stats: { ...state.stats, totalProducts: state.stats.totalProducts + 1 },
        recentActions: [
          {
            id: Date.now(),
            action: `Added new product: ${newProduct.name}`,
            time: "Just now",
          },
          ...state.recentActions.slice(0, 4),
        ],
      };
    }

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, ...action.payload }
            : product
        ),
        recentActions: [
          {
            id: Date.now(),
            action: `Updated product: ${action.payload.name}`,
            time: "Just now",
          },
          ...state.recentActions.slice(0, 4),
        ],
      };
    case "DELETE_PRODUCT": {
      const productToDelete = state.products.find(
        (p) => p.id === action.payload
      );
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        basket: state.basket.filter((item) => item.id !== action.payload),
        stats: { ...state.stats, totalProducts: state.stats.totalProducts - 1 },
        recentActions: [
          {
            id: Date.now(),
            action: `Deleted product: ${productToDelete?.name}`,
            time: "Just now",
          },
          ...state.recentActions.slice(0, 4),
        ],
      };
    }
    case "ADD_TO_BASKET": {
      const existingItem = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, quantity: 1 }],
      };
    }

    case "UPDATE_BASKET_QUANTITY":
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "MARK_NOTIFICATION_READ":
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.payload
            ? { ...notification, read: true }
            : notification
        ),
      };

    case "MARK_ALL_NOTIFICATIONS_READ":
      return {
        ...state,
        notifications: state.notifications.map((notification) => ({
          ...notification,
          read: true,
        })),
      };
    case "UPDATE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.map((customer) =>
          customer.id === action.payload.id
            ? { ...customer, ...action.payload }
            : customer
        ),
        recentActions: [
          {
            id: Date.now(),
            action: `Updated customer: ${action.payload.name}`,
            time: "Just now",
          },
          ...state.recentActions.slice(0, 4),
        ],
      };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
