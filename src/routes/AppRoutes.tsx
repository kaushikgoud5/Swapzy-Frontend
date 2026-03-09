import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../pages/Auth";
import { LandingPage } from "../pages/LandingPage";
import {  OnboardingPage } from "../pages/Onboarding/OnboardingPage";

import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/profile" element={<OnboardingPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;