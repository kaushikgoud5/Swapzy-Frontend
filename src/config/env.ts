export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL as string,
  isProd: import.meta.env.VITE_ENV === 'production',
  isDev: import.meta.env.VITE_ENV !== 'production',
};
