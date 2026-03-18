import { config } from '../config/env';
import { apiClient } from './apiClient';
import { mockAuthResponse } from './mockData';

export interface AuthResponse {
  token: string;
  user: { id: string; email: string; name: string };
}

interface AuthPayload {
  email: string;
  password: string;
  name?: string;
}

export const authService = {
  async login(payload: AuthPayload): Promise<AuthResponse> {
    if (config.isDev) {
      await new Promise((r) => setTimeout(r, 500));
      return { ...mockAuthResponse, user: { ...mockAuthResponse.user, email: payload.email } };
    }
    return apiClient.post<AuthResponse>('/auth/login', payload);
  },

  async signup(payload: AuthPayload): Promise<AuthResponse> {
    if (config.isDev) {
      await new Promise((r) => setTimeout(r, 500));
      return { ...mockAuthResponse, user: { ...mockAuthResponse.user, email: payload.email, name: payload.name || '' } };
    }
    return apiClient.post<AuthResponse>('/auth/signup', payload);
  },

  logout() {
    localStorage.removeItem('auth_token');
  },

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  },

  setToken(token: string) {
    localStorage.setItem('auth_token', token);
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  },
};
