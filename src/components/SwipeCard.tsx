import { useState } from 'react';
import { Heart, X, Bookmark, MapPin, Star } from 'lucide-react';
import type { Product } from '../pages/Home/DiscoveryPage';
import { motion, useMotionValue, useTransform, type PanInfo } from 'framer-motion';

interface SwipeCardProps {
  product: Product;
  onSwipe: (direction: 'left' | 'right' | 'up') => void;
  onDetailView: () => void;
  style?: React.CSSProperties;
  isSaved: boolean;
}

export function SwipeCard({ product, onSwipe, onDetailView, style, isSaved }: SwipeCardProps) {
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | 'up' | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotate = useTransform(x, [-200, 0, 200], [-20, 0, 20]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    
    if (Math.abs(info.offset.x) > threshold) {
      setExitDirection(info.offset.x > 0 ? 'right' : 'left');
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    } else if (info.offset.y < -threshold) {
      setExitDirection('up');
      onSwipe('up');
    }
  };

  const handleButtonClick = (direction: 'left' | 'right' | 'up') => {
    setExitDirection(direction);
    onSwipe(direction);
  };

  const getExitAnimation = () => {
    if (exitDirection === 'right') {
      return { x: 500, rotate: 30, opacity: 0 };
    } else if (exitDirection === 'left') {
      return { x: -500, rotate: -30, opacity: 0 };
    } else if (exitDirection === 'up') {
      return { y: -800, opacity: 0 };
    }
    return {};
  };

  return (
    <motion.div
      className="absolute inset-0 touch-none"
      style={{ ...style, x, y, rotate, opacity }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      onDragEnd={handleDragEnd}
      animate={exitDirection ? getExitAnimation() : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="h-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Image Section */}
        <motion.div 
          className="relative h-3/5 bg-gradient-to-br from-purple-100 to-pink-100 cursor-pointer overflow-hidden"
          onClick={onDetailView}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            draggable={false}
          />
          
          {/* Swipe Indicators */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-red-500/90"
            style={{ opacity: useTransform(x, [-200, -50], [1, 0]) }}
          >
            <div className="px-6 py-3 border-4 border-white rounded-2xl rotate-12">
              <span className="text-white text-2xl">NOPE</span>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-green-500/90"
            style={{ opacity: useTransform(x, [50, 200], [0, 1]) }}
          >
            <div className="px-6 py-3 border-4 border-white rounded-2xl -rotate-12">
              <span className="text-white text-2xl">LIKE</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-amber-500/90"
            style={{ opacity: useTransform(y, [-200, -50], [1, 0]) }}
          >
            <div className="px-6 py-3 border-4 border-white rounded-2xl">
              <span className="text-white text-2xl">SAVED</span>
            </div>
          </motion.div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
              {product.condition}
            </span>
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
              {product.category}
            </span>
          </div>

          {isSaved && (
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
          )}
        </motion.div>

        {/* Info Section */}
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3 className="text-2xl mb-1">{product.name}</h3>
              <div className="flex items-center gap-1 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{product.location}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl text-purple-600">${product.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <img 
              src={product.seller.avatar}
              alt={product.seller.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">{product.seller.name}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm">{product.seller.rating}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <motion.button
              onClick={() => handleButtonClick('left')}
              className="flex-1 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center border-2 border-red-100 hover:bg-red-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-7 h-7" />
            </motion.button>
            
            <motion.button
              onClick={() => handleButtonClick('up')}
              className="flex-1 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center border-2 border-amber-100 hover:bg-amber-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bookmark className="w-7 h-7" />
            </motion.button>
            
            <motion.button
              onClick={() => handleButtonClick('right')}
              className="flex-1 h-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center border-2 border-green-100 hover:bg-green-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-7 h-7" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
