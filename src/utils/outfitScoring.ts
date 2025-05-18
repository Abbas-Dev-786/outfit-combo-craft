
export type ClothingItem = {
  id: string;
  name: string;
  type: "top" | "bottom" | "shoes" | "accessory";
  color: string;
  style: string;
  image: string;
};

export type OutfitScore = {
  score: number;
  feedback: string;
};

// Simple scoring algorithm based on color and style matching
export const scoreOutfit = (items: ClothingItem[]): OutfitScore => {
  // Return early if not enough items for a basic outfit
  if (items.length < 3) {
    return {
      score: 0,
      feedback: "Add more items to complete your outfit",
    };
  }

  let score = 0;
  let feedbackPoints: string[] = [];

  // Check if we have basic outfit components (top, bottom, shoes)
  const hasTop = items.some(item => item.type === "top");
  const hasBottom = items.some(item => item.type === "bottom");
  const hasShoes = items.some(item => item.type === "shoes");

  if (hasTop && hasBottom && hasShoes) {
    score += 50; // Base score for a complete outfit
    feedbackPoints.push("Complete outfit! ✅");
  } else {
    const missing = [];
    if (!hasTop) missing.push("top");
    if (!hasBottom) missing.push("bottom");
    if (!hasShoes) missing.push("shoes");
    feedbackPoints.push(`Missing: ${missing.join(", ")}`);
  }

  // Check for color coordination
  const colors = items.map(item => item.color);
  const uniqueColors = new Set(colors);

  if (uniqueColors.size <= 3) {
    score += 20;
    feedbackPoints.push("Good color coordination! 🎨");
  } else if (uniqueColors.size <= 4) {
    score += 10;
    feedbackPoints.push("Try to use fewer colors for a more cohesive look");
  }

  // Check for consistent style
  const styles = items.map(item => item.style);
  const uniqueStyles = new Set(styles);

  if (uniqueStyles.size === 1) {
    score += 30;
    feedbackPoints.push("Perfect style matching! 👗");
  } else if (uniqueStyles.size <= 2) {
    score += 15;
    feedbackPoints.push("Nice style mixing");
  }

  // Accessory bonus
  const accessories = items.filter(item => item.type === "accessory");
  if (accessories.length === 1) {
    score += 10;
    feedbackPoints.push("Accessory adds a nice touch! ✨");
  } else if (accessories.length > 1) {
    score += 15;
    feedbackPoints.push("Great accessorizing! 💍");
  }

  // Cap score at 100
  score = Math.min(score, 100);

  return {
    score,
    feedback: feedbackPoints.join(" • "),
  };
};
