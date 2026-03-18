import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Auth } from "../pages/Auth";
import { LandingPage } from "../pages/LandingPage";
import { OnboardingPage } from "../pages/Onboarding/OnboardingPage";
import Home from "../pages/Home/Home";
import { authService } from "../services/authService";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return authService.isAuthenticated() ? <>{children}</> : <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><OnboardingPage /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
