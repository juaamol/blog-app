export default function assetPath({ src = '' }) {
  const isHttp = src.startsWith('http://');
  const isHttps = src.startsWith('https://');
  const isRemote = isHttp || isHttps;
  const basePath = isRemote ? process.env.ASSET_BASE_PATH || '' : '';
  return `${basePath}${src}`;
}
