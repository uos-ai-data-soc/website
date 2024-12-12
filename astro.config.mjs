import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import astroExpressiveCode from 'astro-expressive-code';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        astroExpressiveCode(),
        mdx(),
        sitemap(),
        starlight({
            plugins: [starlightBlog({
               
        })],
            title: 'Surrey University | AI and Data Science Society',
            description: 'Here you can find resources to help you learn AI and Data Science',
            logo: {
                src: './src/assets/AI_Logo.png',
                alt: 'Surrey University | AI and Data Science Society',
            },

        })
    ],
   
});