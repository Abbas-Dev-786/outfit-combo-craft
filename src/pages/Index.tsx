
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ClothingItem } from '@/utils/outfitScoring';
import Wardrobe from '@/components/Wardrobe';
import OutfitZone from '@/components/OutfitZone';
import { clothingItems } from '@/data/clothingData';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { RefreshCcw, Sparkles } from 'lucide-react';

const Index = () => {
  const [outfit, setOutfit] = useState<ClothingItem[]>([]);

  const resetOutfit = () => {
    setOutfit([]);
    toast("Outfit cleared!");
  };

  const generateRandomOutfit = () => {
    const randomTop = clothingItems.filter(item => item.type === "top")[Math.floor(Math.random() * 5)];
    const randomBottom = clothingItems.filter(item => item.type === "bottom")[Math.floor(Math.random() * 5)];
    const randomShoes = clothingItems.filter(item => item.type === "shoes")[Math.floor(Math.random() * 5)];
    const randomAccessory = clothingItems.filter(item => item.type === "accessory")[Math.floor(Math.random() * 5)];
    
    setOutfit([randomTop, randomBottom, randomShoes, randomAccessory]);
    toast("Random outfit generated!");
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-fashion-cream">
        <header className="bg-white shadow-md">
          <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <span className="text-primary">Style</span>Mixer
              <span className="ml-2 text-sm bg-accent text-accent-foreground px-2 py-0.5 rounded-full animate-pulse-gentle">Beta</span>
            </h1>
            <p className="text-gray-500 mt-1">Mix and match clothes to create your perfect outfit</p>
          </div>
        </header>

        <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <Wardrobe clothingItems={clothingItems} />
            </div>
            
            <div className="order-1 md:order-2">
              <div className="flex justify-between mb-6">
                <Button 
                  variant="outline" 
                  onClick={resetOutfit}
                  className="shadow-sm hover:shadow transition-all"
                >
                  Clear Outfit
                </Button>
                <Button 
                  onClick={generateRandomOutfit}
                  className="shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                >
                  <RefreshCcw className="h-4 w-4" />
                  <span>Random Outfit</span>
                </Button>
              </div>
              
              <OutfitZone outfit={outfit} setOutfit={setOutfit} />
            </div>
          </div>
        </main>

        <footer className="bg-white mt-12 py-8 border-t">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center">
              © 2025 StyleMixer - Create beautiful outfits with drag and drop
              <Sparkles className="h-4 w-4 ml-2 text-yellow-500" />
            </p>
          </div>
        </footer>
      </div>
    </DndProvider>
  );
};

export default Index;
