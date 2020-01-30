module.exports = {
    base:'/SimpleUI',
    title: 'Simple UI',
    description: '一个简单的UI组件库',
    themeConfig: {
        sidebar: [
            {
                title: '开发指南',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/get-started/',
                    '/install/'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                  '/components/button',
                  '/components/input',
                  '/components/layout',
                  '/components/container',
                  '/components/toast',
                  '/components/tabs',
                  '/components/popover',
                  '/components/collapse',
                ]
            }

        ]
    }
}
