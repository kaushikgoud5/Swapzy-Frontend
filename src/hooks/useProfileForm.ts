import { useState } from "react";
import { avatarOptions } from "../data/avatarOptions";

export const useProfileForm = () => {
  const [formData, setFormData] = useState({
    avatar: avatarOptions[0],
    name: "",
    email: "",
    bio: "",
    location: "",
    interests: [],
  });

  const validators = {
    avatar: () => !!formData.avatar,
    info: () => formData.name?.trim() !== "",
    interests: () => formData?.interests?.length >= 3,
    location: () => formData?.location?.trim() !== "",
    name : () => formData?.name?.trim() !== ""
  };
  return {
    formData,
    setFormData,
    validators,
  };
};
