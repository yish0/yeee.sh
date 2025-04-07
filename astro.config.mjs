// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  adapter: netlify(),

  // 빌드 성능 최적화 설정
  vite: {
    build: {
      // 청크 크기 경고 임계값 증가
      chunkSizeWarningLimit: 1000,
      // 병렬 빌드 활성화
      cssCodeSplit: true,
      // 소스맵 비활성화 (프로덕션 빌드에서 속도 향상)
      sourcemap: false,
    },
    // 의존성 최적화
    optimizeDeps: {
      // 사전 번들링할 의존성 포함
      include: ['astro-icon', '@astrojs/mdx'],
    },
    // 파일 시스템 캐시 활성화
    cacheDir: './.vite_cache',
  },
});
