import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'
// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // ToDo: replace by the real url
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold font-mplus',
          h2: 'text-2xl font-bold font-mplus',
          h3: 'text-xl font-bold font-mplus',
          h4: 'text-lg font-bold font-mplus',
          h5: 'font-bold font-mplus',
          h6: 'font-bold font-mplus',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
          li: 'mb-2 font-mplus',
          ul: 'list-disc list-inside',
          ol: 'list-decimal list-inside',
          blockquote: 'border-l-4 border-orange-500 pl-4',
          code: 'bg-slate-100 dark:bg-zinc-800 rounded-md p-1',
          pre: 'bg-slate-100 dark:bg-zinc-800 rounded-md p-4',
          table: 'table-auto border-collapse border border-slate-300 dark:border-zinc-700',
          th: 'border border-slate-300 dark:border-zinc-700',
          td: 'border border-slate-300 dark:border-zinc-700',
          

        }
      ]
    ]
  }
})