import React, { useState } from "react";
import { useDrop } from "react-dnd";
import {
  ClothingItem as ClothingItemType,
  scoreOutfit,
} from "@/utils/outfitScoring";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { Sparkles } from "lucide-react";

type OutfitZoneProps = {
  outfit: ClothingItemType[];
  setOutfit: React.Dispatch<React.SetStateAction<ClothingItemType[]>>;
};

const OutfitZone: React.FC<OutfitZoneProps> = ({ outfit, setOutfit }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "clothing",
    drop: (item: ClothingItemType) => {
      // Check if item of same type already exists (except accessories)
      if (
        item.type !== "accessory" &&
        outfit.some((outfitItem) => outfitItem.type === item.type)
      ) {
        const replacedOutfit = outfit.filter((i) => i.type !== item.type);
        setOutfit([...replacedOutfit, item]);
        toast(`Replaced your ${item.type}!`);
      } else {
        setOutfit((prev) => [...prev, item]);
        toast(`Added ${item.name} to your outfit!`);
      }
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const removeItem = (id: string) => {
    setOutfit(outfit.filter((item) => item.id !== id));
    toast("Item removed from outfit");
  };

  const { score, feedback } = scoreOutfit(outfit);

  const getBgColor = (type: string) => {
    switch (type) {
      case "top":
        return "bg-gradient-to-br from-fashion-pink to-white";
      case "bottom":
        return "bg-gradient-to-br from-fashion-lavender to-white";
      case "shoes":
        return "bg-gradient-to-br from-fashion-peach to-white";
      default:
        return "bg-gradient-to-br from-fashion-mint to-white";
    }
  };

  const getScoreColor = () => {
    if (score > 80) return "text-green-600";
    if (score > 60) return "text-amber-600";
    return "text-gray-600";
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={drop}
        className={`outfit-zone transition-all duration-300 ${
          isOver ? "border-primary border-4 scale-[1.02]" : ""
        }`}
      >
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          Your Outfit
          {score > 80 && (
            <Sparkles className="h-4 w-4 text-yellow-500 ml-2 animate-pulse-gentle" />
          )}
        </h2>
        {outfit.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[300px] text-gray-400 animate-pulse-gentle">
            <img
              src="/placeholder.svg"
              alt="Empty outfit"
              className="w-20 h-20 opacity-30 mb-4"
            />
            <p>Drag items here to create your outfit</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center">
            {outfit.map((item) => (
              <div key={item.id} className="relative">
                <div
                  className={`clothing-item animate-scale-in ${getBgColor(
                    item.type
                  )}`}
                >
                  {item.image && (
                    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl opacity-90 z-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="text-xs font-medium truncate relative z-10 bg-white/70 px-2 py-1 rounded-md shadow-sm">
                    {item.name}
                  </div>
                  <div
                    className="absolute bottom-1 right-1 w-3 h-3 rounded-full z-10 shadow-sm border border-white/50"
                    style={{ backgroundColor: item.color }}
                  ></div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-20 shadow-md transition-all hover:scale-110"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Card className="p-4 shadow-md border border-fashion-lavender/30">
        <div className="mb-3 flex justify-between items-center">
          <h3 className="font-medium">Style Score</h3>
          <Badge
            variant={
              score > 80 ? "default" : score > 60 ? "secondary" : "outline"
            }
            className="animate-float"
          >
            {score}/100
          </Badge>
        </div>
        <Progress value={score} className="mb-4 h-2" />
        <p className={`text-sm ${getScoreColor()} font-medium`}>{feedback}</p>
      </Card>
    </div>
  );
};

export default OutfitZone;
