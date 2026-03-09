import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

function LocationStep({
  setFormData,
  formData,
}: {
  onNext: () => void;
  formData: any;
  setFormData: any;
}) {
  const handleSetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return (
    <div>
      <motion.div
        key="location"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <MapPin className="w-12 h-12 mx-auto mb-4 text-purple-600" />
        <h2 className="text-3xl text-center mb-2">Where are you?</h2>
        <p className="text-muted-foreground text-center mb-8">
          We'll show you items nearby
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm mb-2">City or Zip Code *</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ location: e.target.value })}
                placeholder="e.g., Brooklyn, NY or 10001"
                className="w-full pl-12 pr-4 py-3 bg-input-background rounded-2xl border border-transparent focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
              />
            </div>
          </div>

          <motion.button
            onClick={handleSetCurrentLocation}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-purple-50 text-purple-600 rounded-2xl border border-purple-200 hover:bg-purple-100 transition-colors"
          >
            📍 Use my current location
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default LocationStep;
