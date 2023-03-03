const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    ASSET_BASE_PATH: (() => {
      if (isDev) return '';
      if (isProd) return '/blog-app';
      if (isStaging) return '/blog-app';
      return '';
    })(),
  };

  return {
    env,
    images: {
      unoptimized: true,
    },
  };
};
