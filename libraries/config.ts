export const configEnv = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  appBaseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL,
  nodeEnv: process.env.NEXT_PUBLIC_NODE_ENV,
  stage: process.env.NEXT_PUBLIC_STAGE,
  version: process.env.NEXT_PUBLIC_VERSION,
  restApiUrlCsr: '/api',
  restApiUrlSsr: process.env.NEXT_PUBLIC_REST_API_URL,
  tokenExpired: Number(process.env.NEXT_PUBLIC_TOKEN_EXPIRED) || 0,
  service: {
    admin: process.env.NEXT_PUBLIC_SERVICE_ADMIN_PATH || '',
  },
  keyToken: process.env.NEXT_PUBLIC_CREDENTIAL_TOKEN,
  keyProfile: process.env.NEXT_PUBLIC_CREDENTIAL_PROFILE,
  otpExpired: Number(process.env.NEXT_PUBLIC_OTP_EXPIRED || 90),
  maxUploadSize: Number(process.env.NEXT_PUBLIC_MAX_UPLOAD_SIZE) || 2,
  mapStyle: process.env.NEXT_PUBLIC_MAP_STYLE,
  mapAccesToken: process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN,
};
