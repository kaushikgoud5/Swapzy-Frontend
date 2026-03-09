import { Heart, X, Bookmark, Zap, Shield, Users, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { FloatingBackground } from '../components/FloatingBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


export function LandingPage() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isSwipeDemo, setIsSwipeDemo] = useState(false);
  
  const cardVariants = {
    initial: { scale: 0.8, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    hover: { scale: 1.05, rotate: 2 },
    swipeRight: { x: 300, rotate: 15, opacity: 0 },
    swipeLeft: { x: -300, rotate: -15, opacity: 0 }
  };

  const navigate = useNavigate();

  const demoCards = [
    { title: 'Vintage Desk', price: '$120', location: 'Brooklyn, NY', gradient: 'from-amber-100 to-pink-100' },
    { title: 'Gaming Chair', price: '$85', location: 'Manhattan, NY', gradient: 'from-blue-100 to-purple-100' },
    { title: 'Study Lamp', price: '$35', location: 'Queens, NY', gradient: 'from-green-100 to-teal-100' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwipeDemo(true);
      setTimeout(() => {
        setCurrentCard((prev) => (prev + 1) % demoCards.length);
        setIsSwipeDemo(false);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200">
              <p className="text-sm text-purple-700">Made for students & young professionals</p>
            </div>
            
            <motion.h1 
              className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Swipe. Match. Trade.
            </motion.h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              The fastest way to buy and sell stuff when you're always on the move.
            </p>

            <motion.button
              onClick={() => {navigate("login")}}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Animated Card Preview with Swipe Demo */}
          <motion.div
            className="mt-20 relative max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            <div className="relative h-[500px]">
              {/* Background Cards */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl shadow-lg"
                style={{ transform: 'rotate(-6deg) scale(0.9)', zIndex: 1 }}
                animate={{ rotate: [-6, -4, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl shadow-lg"
                style={{ transform: 'rotate(4deg) scale(0.95)', zIndex: 2 }}
                animate={{ rotate: [4, 6, 4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main Card with Auto-Swipe Demo */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard}
                  className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
                  initial={{ scale: 0.9, opacity: 0, rotateY: -90 }}
                  animate={isSwipeDemo ? 
                    { x: 300, rotate: 15, opacity: 0 } : 
                    { scale: 1, opacity: 1, rotateY: 0, x: 0, rotate: 0 }
                  }
                  exit={{ scale: 0.9, opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02, rotate: 1 }}
                >
                  <div className={`h-3/5 bg-gradient-to-br ${demoCards[currentCard].gradient} relative overflow-hidden`}>
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <motion.h3 
                        className="text-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {demoCards[currentCard].title}
                      </motion.h3>
                      <motion.span 
                        className="text-xl text-purple-600 font-bold"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {demoCards[currentCard].price}
                      </motion.span>
                    </div>
                    <motion.p 
                      className="text-sm text-muted-foreground mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {demoCards[currentCard].location} • 2 miles away
                    </motion.p>
                    
                    <div className="flex gap-3">
                      <motion.button
                        className="flex-1 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center relative overflow-hidden"
                        whileHover={{ scale: 1.05, backgroundColor: '#fef2f2' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <X className="w-6 h-6" />
                        </motion.div>
                      </motion.button>
                      <motion.button
                        className="flex-1 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center"
                        whileHover={{ scale: 1.05, backgroundColor: '#fffbeb' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Bookmark className="w-6 h-6" />
                        </motion.div>
                      </motion.button>
                      <motion.button
                        className="flex-1 h-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center"
                        whileHover={{ scale: 1.05, backgroundColor: '#f0fdf4' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.8, repeat: Infinity }}
                        >
                          <Heart className="w-6 h-6" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Swipe Indicator */}
              <motion.div
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-purple-500"
                animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">How it works</h2>
            <p className="text-xl text-muted-foreground">Four simple steps to your next find</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Swipe', description: 'Browse items nearby with simple gestures', color: 'from-purple-500 to-purple-600' },
              { icon: Heart, title: 'Match', description: 'Like items you want to buy or sell', color: 'from-pink-500 to-pink-600' },
              { icon: Users, title: 'Chat', description: 'Connect instantly with sellers', color: 'from-blue-500 to-blue-600' },
              { icon: Shield, title: 'Exchange', description: 'Meet safely and complete the trade', color: 'from-green-500 to-green-600' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ 
                    boxShadow: [
                      '0 10px 25px rgba(0,0,0,0.1)',
                      '0 15px 35px rgba(0,0,0,0.15)',
                      '0 10px 25px rgba(0,0,0,0.1)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%', skewX: -15 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    animate={index === 0 ? { x: [-2, 2, -2] } : 
                            index === 1 ? { scale: [1, 1.1, 1] } :
                            index === 2 ? { rotate: [0, 5, -5, 0] } :
                            { y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <step.icon className="w-8 h-8 text-white relative z-10" />
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="text-xl mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Why students love it</h2>
            <p className="text-xl text-muted-foreground">Built for your lifestyle</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lightning Fast',
                description: 'No endless scrolling through grids. Swipe, decide, done.',
                gradient: 'from-yellow-100 to-amber-100',
                border: 'border-yellow-200'
              },
              {
                title: 'Mobile First',
                description: 'Designed for how you actually use your phone.',
                gradient: 'from-purple-100 to-pink-100',
                border: 'border-purple-200'
              },
              {
                title: 'Student-Friendly',
                description: 'Perfect for dorm rooms, apartments, and frequent moves.',
                gradient: 'from-blue-100 to-purple-100',
                border: 'border-blue-200'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} border ${feature.border} relative overflow-hidden group cursor-pointer`}
              >
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating icon */}
                <motion.div
                  className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {index === 0 && <Zap className="w-12 h-12" />}
                  {index === 1 && <Sparkles className="w-12 h-12" />}
                  {index === 2 && <TrendingUp className="w-12 h-12" />}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl mb-3 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.1 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Ready to start swiping?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students buying and selling smarter
            </p>
            <motion.button
              onClick={()=>{navigate("home")}}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full inline-flex items-center gap-2 shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Pulsing effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <span className="relative z-10">Try it now</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
