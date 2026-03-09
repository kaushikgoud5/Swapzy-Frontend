import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingBackground } from "../../components/FloatingBackground";
import WelcomeStep from "./steps/WelcomeStep";
import AvatarStep from "./steps/AvatarStep";
import InfoStep from "./steps/InfoStep";
import InterestsStep from "./steps/InterestsStep";
import LocationStep from "./steps/LocationStep";
import CompleteStep from "./steps/CompleteStep";
import ProgressBar from "../../components/ProgressBar";
import NavigationButtons from "../../components/NavigationButtons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../store/slices/ProfileSlice";

const STEPS = [
  { key: "welcome", component: WelcomeStep },
  { key: "avatar", component: AvatarStep },
  { key: "info", component: InfoStep },
  { key: "interests", component: InterestsStep },
  { key: "location", component: LocationStep },
  { key: "complete", component: CompleteStep },
];

export function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state: { profile: [] }) => state.profile);
  const CurrentStepComponent = STEPS[currentStep]?.component;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
      <FloatingBackground />
      <div className="relative z-10 w-full max-w-2xl">
        {STEPS[currentStep]?.key !== "welcome" &&
          STEPS[currentStep]?.key !== "complete" && (
            <ProgressBar currentStep={currentStep} totalSteps={STEPS.length} />
          )}

        <motion.div
          layout
          className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 opacity-20 -z-10 blur-xl" />

          <AnimatePresence mode="wait">
            <CurrentStepComponent
              formData={profile}
              setFormData={(data: any) => dispatch(updateProfile(data))}
              onNext={() => {
                STEPS[currentStep]?.key === "complete"
                  ? navigate("/home")
                  : setCurrentStep((prev) => prev + 1);
              }}
            ></CurrentStepComponent>
          </AnimatePresence>

          {STEPS[currentStep]?.key !== "welcome" &&
            STEPS[currentStep]?.key !== "complete" && (
              <NavigationButtons
                step={currentStep}
                canProceed={true}
                onBack={() => setCurrentStep((prev) => prev - 1)}
                onNext={() => setCurrentStep((prev) => prev + 1)}
              />
            )}
        </motion.div>
      </div>
    </div>
  );
}
