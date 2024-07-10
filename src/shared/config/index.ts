const getEnvVar = (key: keyof ImportMetaEnv) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`${key} env가 없습니다.`);
  }
  return import.meta.env[key] || "";
};

export const API_URL = getEnvVar("VITE_API_URL");
