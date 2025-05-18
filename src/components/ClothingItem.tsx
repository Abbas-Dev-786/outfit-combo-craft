
import React from "react";
import { useDrag } from "react-dnd";
import { ClothingItem as ClothingItemType } from "@/utils/outfitScoring";

type ClothingItemProps = {
  item: ClothingItemType;
};

const ClothingItem: React.FC<ClothingItemProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "clothing",
    item: { ...item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`clothing-item ${isDragging ? "clothing-item-dragging" : ""}`}
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
  );
};

export default ClothingItem;
