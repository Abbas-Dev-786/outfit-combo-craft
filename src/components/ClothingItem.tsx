
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
      {item.image && (
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-md opacity-80 z-0">
          <img 
            src={`/placeholder.svg`} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="relative z-10 text-xs font-medium truncate">{item.name}</div>
      <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full z-10" style={{ backgroundColor: item.color }}></div>
    </div>
  );
};

export default ClothingItem;
