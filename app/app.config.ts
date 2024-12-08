import homepageConfig from '~~/homepage.config'
import type { Nav } from '~/types/nav'

export default defineAppConfig({
    ...homepageConfig,

    footer: {
        copyright: `© ${new Date().getFullYear()} Evereen`,
        message: 'Evereen | 唤青',
    },

    nav: <Nav>[
        {
            title: '',
            items: [
                { icon: 'ph:house-duotone', text: '主页', url: '/' },
                { icon: 'ph:pen-nib-duotone', text: '文章', url: '/article' },
                { icon: 'ph:globe-duotone', text: '站点', url: '/site' },
                { icon: 'ph:files-duotone', text: '日志', url: '/log' },
            ],
        },
        {
            title: '社交',
            items: [
                { icon: 'ph:github-logo-duotone', text: 'Github', url: 'https://github.com/Evereen2023', external: true },
            ],
        },
    ],

    themes: {
        light: {
            icon: 'ph:sun-duotone',
            tip: '浅色模式',
        },
        system: {
            icon: 'ph:monitor-duotone',
            tip: '跟随系统',
        },
        dark: {
            icon: 'ph:moon-duotone',
            tip: '深色模式',
        },
    },
})
