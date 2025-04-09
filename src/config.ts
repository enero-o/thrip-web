const isProd = false;
const TOKEN_STORAGE_KEY = isProd ? "PROD-inj" : "EREROE";

const config = {
  TOKEN_STORAGE_KEY,
  BASE_URL: import.meta.env.VITE_GATEWAY_URL,
  BUGSNAG_KEY: import.meta.env.VITE_BUGSNAG_KEY,
  isProd,
  APP_KEY: import.meta.env.VITE_APP_KEY,
  CONTENTFUL_SPACE_ID: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
};

export default config;
