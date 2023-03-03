import getConfig from 'next/config';

export default function assetPath(src: string = '') {
  const { publicRuntimeConfig } = getConfig();
  const isHttp = src.startsWith('http://');
  const isHttps = src.startsWith('https://');
  const isRemote = isHttp || isHttps;
  const basePath = isRemote ? '' : publicRuntimeConfig.basePath || '';

  return `${basePath}${src}`;
}
