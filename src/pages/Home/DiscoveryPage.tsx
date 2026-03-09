import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import {  motion } from "framer-motion";
import { mockProducts } from "../../data/mockProducts";
import { SwipeCard } from "../../components/SwipeCard";
import { NavigationBar } from "../../components/NavigationBar";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  location: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
  };
  category: string;
  condition: string;
  description: string;
}
export function DiscoveryPage() {
  const [products, setProducts] = useState<Product[]>([...mockProducts]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedProduct, setMatchedProduct] = useState<Product | null>(null);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [savedItems, setSavedItems] = useState<string[]>([]);

  const onSaveItem = (dire: string) => {
    // Implement saving logic here
    console.log(`Saving item with id: ${dire}`);
  };

  const handleSwipe = (direction: "left" | "right" | "up") => {
    const currentProduct = products[currentIndex];

    if (direction === "right") {
      // Simulate match (30% chance)
      if (Math.random() > 0.7) {
        setMatchedProduct(currentProduct);
        setShowMatch(true);
      }
    } else if (direction === "up") {
      onSaveItem(currentProduct.id);
    }

    // Move to next card after animation
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 300);
  };

  const handleDetailView = (product: Product) => {
    setDetailProduct(product);
  };

  const currentProduct = products[currentIndex];
  const hasMoreCards = currentIndex < products.length;

  // Reset when all cards are swiped
  useEffect(() => {
    if (currentIndex >= products.length) {
      setTimeout(() => {
        setProducts([...mockProducts]);
        setCurrentIndex(0);
      }, 1000);
    }
  }, [currentIndex]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-md md:max-w-lg">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl">Discover</h2>
            </div>
            <p className="text-muted-foreground">
              {products.length - currentIndex} items nearby
            </p>
          </div>

          {/* Card Stack */}
          <div className="relative h-[600px] md:h-[650px]">
            {hasMoreCards ? (
              <>
                {/* Background cards for depth */}
                {[2, 1].map((offset) => {
                  const index = currentIndex + offset;
                  if (index >= products.length) return null;

                  return (
                    <div
                      key={products[index].id}
                      className="absolute inset-0 bg-white rounded-3xl shadow-lg"
                      style={{
                        transform: `scale(${1 - offset * 0.05}) translateY(${
                          offset * 10
                        }px)`,
                        zIndex: 10 - offset,
                        opacity: 1 - offset * 0.2,
                      }}
                    />
                  );
                })}

                {/* Current card */}
                <SwipeCard
                  key={currentProduct.id}
                  product={currentProduct}
                  onSwipe={handleSwipe}
                  onDetailView={() => handleDetailView(currentProduct)}
                  isSaved={savedItems.includes(currentProduct.id)}
                  style={{ zIndex: 20 }}
                />
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl mb-2">All caught up!</h3>
                  <p className="text-muted-foreground">Loading more items...</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Swipe Hints */}
          <div className="mt-6 flex justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                <span>←</span>
              </div>
              <span>Pass</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                <span>↑</span>
              </div>
              <span>Save</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <span>→</span>
              </div>
              <span>Like</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* <AnimatePresence>
        {showMatch && matchedProduct && (
        //   <MatchModal
        //     product={matchedProduct}
        //     onClose={() => setShowMatch(false)}
        //   />
        )}
      </AnimatePresence> */}

      {/* <AnimatePresence>
        {detailProduct && (
        //   <ItemDetailModal
        //     product={detailProduct}
        //     onClose={() => setDetailProduct(null)}
        //     isSaved={savedItems.includes(detailProduct.id)}
        //     onSave={() => onSaveItem(detailProduct.id)}
        //   />
        )}
      </AnimatePresence> */}

      {/* Keyboard Controls */}
      {/* <KeyboardControls
        onLeft={() => handleSwipe('left')}
        onRight={() => handleSwipe('right')}
        onUp={() => handleSwipe('up')}
      /> */}

      {/* Keyboard Hint */}
      {/* <KeyboardHint /> */}
      <NavigationBar></NavigationBar>
    </>
  );
}
