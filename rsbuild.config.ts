import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  plugins: [pluginReact(), pluginSass(), pluginSvgr()],
  html: {
    title: 'Hyper',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Hyper Audience — запустите мобильную рекламу с любым таргетингом' },
      { name: 'keywords', content: 'Hyper Audience, аналитика, аудитория, платформа, маркетинг' },
    ],
  },
});
