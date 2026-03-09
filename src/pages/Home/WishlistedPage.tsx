import { useState } from 'react';
import { Bookmark, MapPin, Star } from 'lucide-react';
import type { Product } from './DiscoveryPage';
import { AnimatePresence, motion } from 'framer-motion';
import { mockProducts } from '../../data/mockProducts';

interface SavedItemsScreenProps {
  savedItems: string[];
  onSaveItem: (itemId: string) => void;
}

export function WishlistedPage({ savedItems, onSaveItem }: SavedItemsScreenProps) {
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const savedProducts = mockProducts.filter(product => 
    savedItems.includes(product.id)
  );

  return (
    <>
      <div className="min-h-screen p-6 pt-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Bookmark className="w-6 h-6 text-amber-500" />
              <h2 className="text-3xl">Saved Items</h2>
            </div>
            <p className="text-muted-foreground">
              {savedProducts.length} {savedProducts.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>

          {/* Saved Items Grid */}
          {savedProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📌</div>
              <h3 className="text-2xl mb-2">No saved items yet</h3>
              <p className="text-muted-foreground">
                Swipe up on items you want to save for later
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProducts.map((product : any, index : any) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => setDetailProduct(product)}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="absolute top-3 right-3">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSaveItem(product.id);
                        }}
                        className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Bookmark className="w-5 h-5 text-white fill-white" />
                      </motion.button>
                    </div>

                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
                        {product.condition}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl flex-1">{product.name}</h3>
                      <p className="text-xl text-purple-600">${product.price}</p>
                    </div>

                    <div className="flex items-center gap-1 text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{product.location}</span>
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-border">
                      <img 
                        src={product.seller.avatar}
                        alt={product.seller.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm flex-1">{product.seller.name}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm">{product.seller.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {/* <AnimatePresence>
        {detailProduct && (
          <ItemDetailModal
            product={detailProduct}
            onClose={() => setDetailProduct(null)}
            isSaved={savedItems.includes(detailProduct.id)}
            onSave={() => onSaveItem(detailProduct.id)}
          />
        )}
      </AnimatePresence> */}
    </>
  );
}
