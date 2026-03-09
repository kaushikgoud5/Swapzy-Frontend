import { FloatingBackground } from "../../components/FloatingBackground";
import { NavigationBar } from "../../components/NavigationBar";
import { AnimatePresence, motion } from "framer-motion";
import { DiscoveryPage } from "./DiscoveryPage";
import { WishlistedPage } from "./WishlistedPage";
import { ProfileCreationPage } from "./ProfileCreationPage";
import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { ChatPage } from "./ChatPage";

export type View = "landing" | "discover" | "saved" | "profile" | "chat";

function Home() {
  const [hasProfile, setHasProfile] = useState(false);
  const [currentView, setCurrentView] = useState<View>("discover");
  const [savedItems, setSavedItems] = useState<string[]>([]);

  const handleSaveItem = (itemId: string) => {
    setSavedItems((prev) => [...prev, itemId]);
  };
  return (
    <div>
      <FloatingBackground />
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />

      <div className="relative z-10 pb-20 md:pb-0">
        <AnimatePresence>
          {currentView === "discover" && (
            <motion.div
              key="discover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DiscoveryPage />
            </motion.div>
          )}
          {currentView === "saved" && (
            <motion.div
              key="saved"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WishlistedPage
                savedItems={savedItems}
                onSaveItem={handleSaveItem}
              />
            </motion.div>
          )}
          {currentView === "chat" && (
            <motion.div
              key="saved"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ChatPage />
            </motion.div>
          )}
          {currentView === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProfileCreationPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <NavigationBar currentView={currentView} onNavigate={setCurrentView} />
    </div>
  );
}

export default Home;
