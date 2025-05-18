import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClothingItem from "./ClothingItem";
import { ClothingItem as ClothingItemType } from "@/utils/outfitScoring";
// import { Shirt, Sparkles } from "lucide-react";

type WardrobeProps = {
  clothingItems: ClothingItemType[];
};

const Wardrobe: React.FC<WardrobeProps> = ({ clothingItems }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-fashion-lavender/20">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <span className="text-primary">My</span>&nbsp; Wardrobe
      </h2>

      <Tabs defaultValue="tops" className="w-full">
        <TabsList className="w-full grid grid-cols-4 mb-6">
          <TabsTrigger value="tops" className="flex items-center gap-1">
            <p className="text-xl">👕</p>
            <span className="hidden sm:inline">Tops</span>
          </TabsTrigger>
          <TabsTrigger value="bottoms" className="flex items-center gap-1">
            <p className="text-xl">👖</p>
            <span className="hidden sm:inline">Bottoms</span>
          </TabsTrigger>
          <TabsTrigger value="shoes" className="flex items-center gap-1">
            <p className="text-xl">🥾</p>
            <span className="hidden sm:inline">Shoes</span>
          </TabsTrigger>
          <TabsTrigger value="accessories" className="flex items-center gap-1">
            <p className="text-xl">🕶️</p>
            <span className="hidden sm:inline">Accessories</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tops" className="mt-0">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {clothingItems
              .filter((item) => item.type === "top")
              .map((item) => (
                <ClothingItem key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="bottoms" className="mt-0">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {clothingItems
              .filter((item) => item.type === "bottom")
              .map((item) => (
                <ClothingItem key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="shoes" className="mt-0">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {clothingItems
              .filter((item) => item.type === "shoes")
              .map((item) => (
                <ClothingItem key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="accessories" className="mt-0">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {clothingItems
              .filter((item) => item.type === "accessory")
              .map((item) => (
                <ClothingItem key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Wardrobe;
