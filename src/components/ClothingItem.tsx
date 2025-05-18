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

  const getBgColor = () => {
    switch (item.type) {
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

  return (
    <div
      ref={drag}
      className={`clothing-item ${getBgColor()} ${
        isDragging ? "clothing-item-dragging" : ""
      }`}
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
      <div className="relative z-10 text-xs font-medium truncate bg-white/70 px-2 py-1 rounded-md shadow-sm">
        {item.name}
      </div>
      <div
        className="absolute bottom-1 right-1 w-3 h-3 rounded-full z-10 shadow-sm border border-white/50"
        style={{ backgroundColor: item.color }}
      ></div>
    </div>
  );
};

export default ClothingItem;
