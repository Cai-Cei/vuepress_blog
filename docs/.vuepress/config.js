module.exports = {
    base: '/Cai-Cei/vuepress_blog/tree/master/vuepress-starter/',
    title: 'WowCei',
    description: '随便看看!',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/icon.png' }]
      ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        lastUpdated: '更新时间',
    nav: [
        { text: '首页', link: '/' },
        {
            text: '计算机基础',
            items: [
                { text: '计算机网络', link: '/计算机基础/计算机网络/' },
                { text: '数据结构', link: '/计算机基础/数据结构/' }
            ]
        },
        {
            text: '语言基础',
            items: [
                { text: 'Python', link: '/语言基础/Python/' },
                { text: 'C++', link: '/语言基础/C++/' }
            ]
        },
        {
            text: '操作系统',
            items: [
                { text: 'Python', link: '/Python/' },
                { text: 'C++', link: '/C++/' }
            ]
        },
        { text: '靶场记录', link: '/guide/' },
        { text: '项目记录', link: '/guide/' },
        {
            text: '前往论坛',
            items: [
                { text: 'Chinese', link: 'https://baidu.com' },
                { text: 'Japanese', link: '/language/japanese/' }
            ]
        }
    ],

    searchMaxSuggestions: 10
    },
    
  }