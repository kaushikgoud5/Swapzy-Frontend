import { motion } from 'framer-motion';
import { User, Settings, Heart, Bookmark, MessageCircle, Star, MapPin, Edit2 } from 'lucide-react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export function ProfileCreationPage() {
  const stats = [
    { label: 'Items Sold', value: '12', icon: Heart },
    { label: 'Items Saved', value: '8', icon: Bookmark },
    { label: 'Messages', value: '24', icon: MessageCircle },
  ];
  useEffect(()=>{
    console.log(profile.name)
  })

  const profile: any = useSelector((state:any) => state.profile);
  return (
    <div className="min-h-screen p-6 pt-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">Profile</h2>
          <motion.button
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 mb-6"
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                <Edit2 className=" cursor-pointer w-4 h-4 text-purple-600" />
              </button>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl mb-1">{profile.name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="text-lg">4.9</span>
                <span className="text-sm text-muted-foreground ml-1">(47 reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">
           {profile.bio}
          </p>

          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white/80 rounded-full text-sm">Verified Seller</span>
            <span className="px-3 py-1 bg-white/80 rounded-full text-sm">Member since 2023</span>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6"
        >
          <h3 className="text-xl mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Sold', item: 'Vintage Desk', time: '2 hours ago', color: 'green' },
              { action: 'Matched', item: 'Reading Chair', time: '5 hours ago', color: 'purple' },
              { action: 'Saved', item: 'MacBook Pro', time: '1 day ago', color: 'amber' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-secondary/30 rounded-2xl">
                <div className={`w-10 h-10 bg-${activity.color}-100 rounded-full flex items-center justify-center`}>
                  {activity.action === 'Sold' && <Heart className={`w-5 h-5 text-${activity.color}-600`} />}
                  {activity.action === 'Matched' && <Star className={`w-5 h-5 text-${activity.color}-600`} />}
                  {activity.action === 'Saved' && <Bookmark className={`w-5 h-5 text-${activity.color}-600`} />}
                </div>
                <div className="flex-1">
                  <p>
                    <span className="font-medium">{activity.action}</span> {activity.item}
                  </p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.button
          className="w-full mt-6 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Edit Profile
        </motion.button>
      </div>
    </div>
  );
}
