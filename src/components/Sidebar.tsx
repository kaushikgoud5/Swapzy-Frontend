import { Flame, Bookmark, MessageCircle, User } from 'lucide-react';
import type { View } from '../pages/Home/Home';
import { motion } from 'framer-motion';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const navItems = [
    { id: 'discover' as View, icon: Flame, label: 'Discover' },
    { id: 'chat' as View, icon: MessageCircle, label: 'Chats' },
    { id: 'saved' as View, icon: Bookmark, label: 'Saved' },
    { id: 'profile' as View, icon: User, label: 'Profile' },
  ];

  return (
    <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-72 bg-white  flex-col z-40">
      {/* Logo */}
      <div className="p-8 ">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="relative">
            <motion.div 
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg"
              animate={{ 
                boxShadow: [
                  "0 10px 25px rgba(147, 51, 234, 0.3)",
                  "0 10px 35px rgba(236, 72, 153, 0.4)",
                  "0 10px 25px rgba(147, 51, 234, 0.3)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Flame className="w-6 h-6 text-white" fill="white" />
            </motion.div>
            <motion.div 
              className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Swapzy
            </h1>
            <p className="text-xs text-muted-foreground">Swap smarter</p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative w-full group"
              >
                <motion.div
                  className={`cursor-pointer flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600' 
                      : 'text-muted-foreground hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="relative">
                    <Icon 
                      className={`w-6 h-6 ${isActive ? 'text-purple-600' : 'text-muted-foreground'}`}
                      fill={isActive && item.id === 'discover' ? 'currentColor' : 'none'}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </div>
                  
                  <span className={`font-medium ${isActive ? 'text-purple-600' : ''}`}>
                    {item.label}
                  </span>

                  {isActive && (
                    <motion.div
                      className="ml-auto w-2 h-2 bg-purple-600 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    />
                  )}
                </motion.div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-6">
        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
          <p className="text-xs text-purple-800 font-medium mb-1">💡 Pro Tip</p>
          <p className="text-xs text-purple-700">
            Swipe up to save items for later!
          </p>
        </div>
      </div>
    </aside>
  );
}
