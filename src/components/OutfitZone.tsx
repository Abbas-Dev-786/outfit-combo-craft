
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ClothingItem as ClothingItemType, scoreOutfit } from "@/utils/outfitScoring";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";

type OutfitZoneProps = {
  outfit: ClothingItemType[];
  setOutfit: React.Dispatch<React.SetStateAction<ClothingItemType[]>>;
};

const OutfitZone: React.FC<OutfitZoneProps> = ({ outfit, setOutfit }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "clothing",
    drop: (item: ClothingItemType) => {
      // Check if item of same type already exists (except accessories)
      if (item.type !== "accessory" && outfit.some(outfitItem => outfitItem.type === item.type)) {
        const replacedOutfit = outfit.filter(i => i.type !== item.type);
        setOutfit([...replacedOutfit, item]);
        toast(`Replaced your ${item.type}!`);
      } else {
        setOutfit(prev => [...prev, item]);
        toast(`Added ${item.name} to your outfit!`);
      }
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const removeItem = (id: string) => {
    setOutfit(outfit.filter(item => item.id !== id));
    toast("Item removed from outfit");
  };

  const { score, feedback } = scoreOutfit(outfit);

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={drop}
        className={`outfit-zone ${isOver ? "border-primary border-4" : ""}`}
      >
        <h2 className="text-lg font-semibold mb-4">Your Outfit</h2>
        {outfit.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 animate-pulse-gentle">
            <p>Drag items here to create your outfit</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {outfit.map((item) => (
              <div key={item.id} className="relative">
                <div 
                  className="clothing-item animate-scale-in" 
                  style={{ 
                    backgroundColor: item.type === "top" ? "#FFC0CB" : 
                              item.type === "bottom" ? "#E6E6FA" : 
                              item.type === "shoes" ? "#FFDAB9" : 
                              "#F5FFFA"
                  }}
                >
                  <div className="text-xs font-medium truncate">{item.name}</div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                </div>
                <button 
                  onClick={() => removeItem(item.id)} 
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Card className="p-4">
        <div className="mb-2 flex justify-between items-center">
          <h3 className="font-medium">Style Score</h3>
          <Badge variant={score > 75 ? "default" : score > 50 ? "secondary" : "outline"}>
            {score}/100
          </Badge>
        </div>
        <Progress value={score} className="mb-3" />
        <p className="text-sm text-muted-foreground">{feedback}</p>
      </Card>
    </div>
  );
};

export default OutfitZone;
