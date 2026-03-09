import { motion } from "framer-motion";
import { Flame, Bookmark, User, MessageCircle } from "lucide-react";
import type { View } from "../pages/Home/Home";

export function NavigationBar({ currentView, onNavigate }: any) {
  const navItems = [
    { id: 'discover' as View, icon: Flame, label: 'Discover' },
    { id: 'chat' as View, icon: MessageCircle, label: 'Chats' },
    { id: 'saved' as View, icon: Bookmark, label: 'Saved' },
    { id: 'profile' as View, icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border md:hidden">
      <div className="flex justify-around items-center h-20 px-4">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative flex flex-col items-center justify-center flex-1 h-full"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon 
                    className={`w-6 h-6 ${isActive ? 'text-purple-600' : 'text-muted-foreground'}`}
                    fill={isActive && item.id === 'discover' ? 'currentColor' : 'none'}
                  />
                </motion.div>
                
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
              
              <span className={`text-xs mt-1 ${isActive ? 'text-purple-600' : 'text-muted-foreground'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
