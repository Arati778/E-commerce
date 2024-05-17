import p1_img from "./background.avif";
import p2_img from "./lMen’sRegularShirt.webp";
import p3_img from "./men-shirt.avif";
import p4_img from "./men-t-shirt.jpg";
import p5_img from "./men-t-shirt2.jpg";
import p6_img from "./menregular--shirt.webp";
import p7_img from "./menT-shirt.webp";
import p8_img from "./wine-premium-georgette women-kurta.jpg";
import p9_img from "./women-blue.avif";
import p10_img from "./women-top.avif";
import p11_img from "./women-shorts.webp";
import p12_img from "./women-top2.webp";
import p13_img from "./women-top3.webp";
import p14_img from "./women.avif";
import p16_img from "./baby-boy-shirt.webp";
import p17_img from "./baby-boy-tshirt.jpg";
import p18_img from "./baby-girl-tshirt.jpg";
import p19_img from "./boy-shirt.jpg";
import p20_img from "./kid-clothing.webp";
import p21_img from "./kid-dress.webp";
import p22_img from "./kid-scrit-tshirt.jpg";
import p23_img from "./kid-wear.webp";
import p24_img from "./men-colcton.webp";
import p25_img from "./images.jpg";
import p15_img from "./WomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.avif";

let all_product = [
  // {
  //   id: 1,
  //   name: "women blue kurta",
  //   category: "women",
  //   image: p1_img,
  //   new_price: 480,
  //   old_price: 630,
  // },
  {
    id: 2,
    name: "Wedani Floral Print V-Neck Top For Women",
    category: "women",
    image: p8_img,
    new_price: 480,
    old_price: 630,
  },
  {
    id: 3,
    name: "Indie Picks Women Floral Print V-Neck Top For Women",
    category: "women",
    image: p9_img,
    new_price: 480,
    old_price: 630,
  },
  {
    id: 4,
    name: "Uiriuy Women's Girls' & Button Front Crop Shirt",
    category: "women",
    image: p10_img,
    new_price: 480,
    old_price: 630,
  },
  {
    id: 5,
    name: "Style Quotient Women Navy Ethnic Print Polyester Peplum Smart Casual Top",
    category: "women",
    image: p11_img,
    new_price: 1280,
    old_price: 1430,
  },
  {
    id: 6,
    name: "Kasya Floral Printed Flared Top For Women",
    category: "women",
    image: p12_img,
    new_price: 780,
    old_price: 930,
  },
  {
    id: 7,
    name: "Mast & Harbour Women Floral Opaque Printed Casual Shirt",
    category: "women",
    image: p13_img,
    new_price: 630,
    old_price: 790,
  },
  {
    id: 8,
    name: "Miss Olive Women's Top",
    category: "women",
    image: p14_img,
    new_price: 820,
    old_price: 910,
  },
  {
    id: 9,
    name: "RIGO Cotton Maxi Full Sleeve Top for Women",
    category: "women",
    image: p15_img,
    new_price: 680,
    old_price: 830,
  },
  {
    id: 10,
    name: "Men’s Clothing Suitable for Every Occasion",
    category: "men",
    image: p7_img,
    new_price: 1210,
    old_price: 1330,
  },
  {
    id: 11,
    name: "women blue kurtaElevate your style for formal events shirt",
    category: "men",
    image: p6_img,
    new_price: 680.5,
    old_price: 430.2,
  },
  {
    id: 12,
    name: "Symbol Premium Men’s Easy Care Casual t-shirt",
    category: "men",
    image: p5_img,
    new_price: 480,
    old_price: 630,
  },
  {
    id: 13,
    name: "Brand Symbol Men Polo Shirt",
    category: "men",
    image: p4_img,
    new_price: 760.9,
    old_price: 930,
  },
  {
    id: 14,
    name: "Amazon Brand Symbol Men’s Regular Fit Formal Shirt",
    category: "men",
    image: p3_img,
    new_price: 580,
    old_price: 740.3,
  },
  {
    id: 15,
    name: "The Ultimate Guide to Men's Clothing for Every OccasionRead more at",
    category: "men",
    image: p2_img,
    new_price: 880,
    old_price: 1030,
  },
  {
    id: 16,
    name: "The Ultimate Guide to Men's Clothing for Every OccasionRead more at",
    category: "kid",
    image: p21_img,
    new_price: 480,
    old_price: 630,
  },
  {
    id: 17,
    name: "baby occasional t-shirt",
    category: "kid",
    image: p16_img,
    new_price: 640,
    old_price: 830,
  },
  {
    id: 18,
    name: "The Ultimate baby cloth",
    category: "kid",
    image: p17_img,
    new_price: 480,
    old_price: 530,
  },
  {
    id: 19,
    name: "baby wear t-shirt",
    category: "kid",
    image: p18_img,
    new_price: 870,
    old_price: 930,
  },
  {
    id: 20,
    name: "genuine image Generic Clothes Outfits Set Top+Belt Kids Shorts Toddler Girls T-shirt",
    category: "kid",
    image: p19_img,
    new_price: 650,
    old_price: 860,
  },
  {
    id: 21,
    name: "Fashion design, high quality baby dress",
    category: "kid",
    image: p20_img,
    new_price: 880,
    old_price: 1030,
  },
  {
    id: 22,
    name: "baby wear easy trap when it comes to kids clothes",
    category: "kid",
    image: p22_img,
    new_price: 680,
    old_price: 830,
  },
  {
    id: 23,
    name: "Hosiery Baba Suit for Kids",
    category: "kid",
    image: p23_img,
    new_price: 480,
    old_price: 730,
  },
  {
    id: 24,
    name: "Men’s Clothing Suitable for Every Occasion",
    category: "men",
    image: p24_img,
    new_price: 1210,
    old_price: 1330,
  },
  {
    id: 24,
    name: "Men’s traditional t-shirt for everyday wear, Clothing Suitable for Every Occasion",
    category: "men",
    image: p25_img,
    new_price: 1210,
    old_price: 1330,
  },
];

export default all_product;
