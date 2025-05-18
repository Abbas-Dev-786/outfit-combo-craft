
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClothingItem from "./ClothingItem";
import { ClothingItem as ClothingItemType } from "@/utils/outfitScoring";

type WardrobeProps = {
  clothingItems: ClothingItemType[];
};

const Wardrobe: React.FC<WardrobeProps> = ({ clothingItems }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Wardrobe</h2>
      
      <Tabs defaultValue="tops">
        <TabsList className="w-full justify-start mb-4">
          <TabsTrigger value="tops">Tops</TabsTrigger>
          <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
          <TabsTrigger value="shoes">Shoes</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tops" className="mt-0">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {clothingItems
              .filter((item) => item.type === "top")
              .map((item) => (
                <ClothingItem key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="bottoms" className="mt-0">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {clothingItems
              .filter((item) => item.type === "bottom")
              .map((item) => (
                <ClothingItem key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="shoes" className="mt-0">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {clothingItems
              .filter((item) => item.type === "shoes")
              .map((item) => (
                <ClothingItem key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="accessories" className="mt-0">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
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
