import { ClothingItem } from "@/utils/outfitScoring";

import WhiteShirt from "@/assets/images/white-shirt.webp";
import BlackBlouse from "@/assets/images/black-blouse.jpg";
import BlueSweater from "@/assets/images/blue-sweater.webp";
import RedCardigan from "@/assets/images/red-cardigan.webp";
import GreenTank from "@/assets/images/green-tank.webp";

import BlueJeans from "@/assets/images/blue-jeans.webp";
import BlackPant from "@/assets/images/black-pants.webp";
import BeigeSkirt from "@/assets/images/beige-skirt.webp";
import GreyShort from "@/assets/images/grey-shorts.jpeg";
import YogaPants from "@/assets/images/yoga-pants.jpg";

import WhiteSneaker from "@/assets/images/white-sneaker.jpg";
import BlackHeel from "@/assets/images/black-heel.webp";
import BrownBoots from "@/assets/images/brown-boots.webp";
import RunningShoes from "@/assets/images/running-shoes.jpg";
import Sandal from "@/assets/images/sandals.jpg";

import GoldNecklace from "@/assets/images/gold-necklance.webp";
import SilverWatch from "@/assets/images/silver-watch.jpg";
import Sunglass from "@/assets/images/sunglass.webp";
import Beanie from "@/assets/images/beanie.webp";
import Headband from "@/assets/images/headband.jpeg";

export const clothingItems: ClothingItem[] = [
  // Tops
  {
    id: "top1",
    name: "White T-Shirt",
    type: "top",
    color: "#FFFFFF",
    style: "casual",
    image: WhiteShirt,
  },
  {
    id: "top2",
    name: "Black Blouse",
    type: "top",
    color: "#000000",
    style: "formal",
    image: BlackBlouse,
  },
  {
    id: "top3",
    name: "Blue Sweater",
    type: "top",
    color: "#1E90FF",
    style: "casual",
    image: BlueSweater,
  },
  {
    id: "top4",
    name: "Red Cardigan",
    type: "top",
    color: "#FF0000",
    style: "casual",
    image: RedCardigan,
  },
  {
    id: "top5",
    name: "Green Tank",
    type: "top",
    color: "#00FF00",
    style: "sporty",
    image: GreenTank,
  },

  // Bottoms
  {
    id: "bottom1",
    name: "Blue Jeans",
    type: "bottom",
    color: "#0000FF",
    style: "casual",
    image: BlueJeans,
  },
  {
    id: "bottom2",
    name: "Black Pants",
    type: "bottom",
    color: "#000000",
    style: "formal",
    image: BlackPant,
  },
  {
    id: "bottom3",
    name: "Beige Skirt",
    type: "bottom",
    color: "#F5F5DC",
    style: "formal",
    image: BeigeSkirt,
  },
  {
    id: "bottom4",
    name: "Grey Shorts",
    type: "bottom",
    color: "#808080",
    style: "casual",
    image: GreyShort,
  },
  {
    id: "bottom5",
    name: "Yoga Pants",
    type: "bottom",
    color: "#000000",
    style: "sporty",
    image: YogaPants,
  },

  // Shoes
  {
    id: "shoes1",
    name: "White Sneakers",
    type: "shoes",
    color: "#FFFFFF",
    style: "casual",
    image: WhiteSneaker,
  },
  {
    id: "shoes2",
    name: "Black Heels",
    type: "shoes",
    color: "#000000",
    style: "formal",
    image: BlackHeel,
  },
  {
    id: "shoes3",
    name: "Brown Boots",
    type: "shoes",
    color: "#A52A2A",
    style: "casual",
    image: BrownBoots,
  },
  {
    id: "shoes4",
    name: "Running Shoes",
    type: "shoes",
    color: "#FF1493",
    style: "sporty",
    image: RunningShoes,
  },
  {
    id: "shoes5",
    name: "Sandals",
    type: "shoes",
    color: "#F5DEB3",
    style: "casual",
    image: Sandal,
  },

  // Accessories
  {
    id: "acc1",
    name: "Gold Necklace",
    type: "accessory",
    color: "#FFD700",
    style: "formal",
    image: GoldNecklace,
  },
  {
    id: "acc2",
    name: "Silver Watch",
    type: "accessory",
    color: "#C0C0C0",
    style: "formal",
    image: SilverWatch,
  },
  {
    id: "acc3",
    name: "Sunglasses",
    type: "accessory",
    color: "#000000",
    style: "casual",
    image: Sunglass,
  },
  {
    id: "acc4",
    name: "Beanie",
    type: "accessory",
    color: "#800080",
    style: "casual",
    image: Beanie,
  },
  {
    id: "acc5",
    name: "Headband",
    type: "accessory",
    color: "#FF69B4",
    style: "sporty",
    image: Headband,
  },
];
