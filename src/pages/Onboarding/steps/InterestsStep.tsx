import { motion } from "framer-motion";
import {
  Heart,
  Check,
  Armchair,
  Smartphone,
  Shirt,
  Book,
  Music,
  Gamepad2,
  Coffee,
  Bike,
} from "lucide-react";

const interestOptions = [
  {
    id: "furniture",
    label: "Furniture",
    icon: Armchair,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: "electronics",
    label: "Electronics",
    icon: Smartphone,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "fashion",
    label: "Fashion",
    icon: Shirt,
    gradient: "from-pink-500 to-pink-600",
  },
  {
    id: "books",
    label: "Books",
    icon: Book,
    gradient: "from-amber-500 to-amber-600",
  },
  {
    id: "music",
    label: "Music",
    icon: Music,
    gradient: "from-green-500 to-green-600",
  },
  {
    id: "gaming",
    label: "Gaming",
    icon: Gamepad2,
    gradient: "from-red-500 to-red-600",
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    icon: Coffee,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: "sports",
    label: "Sports",
    icon: Bike,
    gradient: "from-cyan-500 to-cyan-600",
  },
];

function InterestsStep({
  setFormData,
  formData,
}: {
  onNext: () => void;
  formData: any;
  setFormData: any;
}) {
const toggleInterest = (id: string) => {
  const currentInterests = formData?.interests || [];
  const newInterests = currentInterests.includes(id)
    ? currentInterests.filter((i: any) => i !== id)
    : [...currentInterests, id];
  
  setFormData({ interests: newInterests });
};


  return (
    <div>
      <motion.div
        key="interests"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <Heart className="w-12 h-12 mx-auto mb-4 text-purple-600" />
        <h2 className="text-3xl text-center mb-2">What are you into?</h2>
        <p className="text-muted-foreground text-center mb-8">
          Select at least 3 interests to personalize your feed
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {interestOptions?.map((interest, index) => (
            <motion.button
              key={interest.id}
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleInterest(interest.id)}
              className={`relative p-4 rounded-2xl border-2 transition-all ${
                formData?.interests?.includes(interest.id)
                  ? "border-purple-600 shadow-lg"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br ${interest.gradient} rounded-xl flex items-center justify-center`}
              >
                <interest.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm">{interest.label}</p>

              {formData?.interests?.includes(interest.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center"
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          {formData?.interests?.length}/{interestOptions?.length} selected
        </p>
      </motion.div>
    </div>
  );
}

export default InterestsStep;
