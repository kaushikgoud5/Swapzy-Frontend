import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  avatar: string;
  name: string;
  bio: string;
  interests: string[];
  location: string;
  isComplete: boolean;
}

const initialState: ProfileState = {
  avatar: '',
  name: '',
  bio: '',
  interests: [],
  location: '',
  isComplete: false
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      return { ...state, ...action.payload };
    },
    completeProfile: (state) => {
      state.isComplete = true;
    }
  }
});
export const profileValidators = {
  avatar: (profile: ProfileState) => !!profile.avatar,
  info: (profile: ProfileState) => profile.name?.trim() !== "",
  interests: (profile: ProfileState) => profile.interests?.length >= 3,
  location: (profile: ProfileState) => profile.location?.trim() !== "",
};


export const { updateProfile, completeProfile } = profileSlice.actions;
export default profileSlice.reducer;