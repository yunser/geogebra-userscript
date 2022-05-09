import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'

export default defineConfig({
    plugins: [
        monkey({
            entry: './src/index.ts',
            userscript: {
                name: 'yunser-geogebra',
                namespace: 'yunser',
                version: '1.1.0',
                description: '给 GeoGebra 网页编辑器加上撤回快捷键（Ctrl + Z）。',
                license: 'MIT',
                include: [
                    'https://www.geogebra.org/*',
                ],
                // grant: '*',
            },
        }),
    ]
})
