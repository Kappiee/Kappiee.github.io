import { definePlumeNotesConfig } from 'vuepress-theme-plume'

export const zhNotes = definePlumeNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: 'insight',
      link: '/insight/',
      sidebar: [
        {
          text: '前端学习',
          collapsed: false,
          items: [
            {
              text: 'ES6',
              dir: 'es6',
              collapsed: false,
              items: [
                '声明变量',
                '字符串与正则表达式',
                '解构',
                '函数',
                '对象',
                '符号',
                '异步处理',
                'FetchApi',
              ]
            },
            {
              text: 'Typescript',
              dir: 'typescript',
              collapsed: false,
              items: [
                '类型',
                '类型兼容性',
                '类型演算',
                '泛型',
                '位枚举',
                '类',
                'readonly修饰符',
                '访问器',
                '第三方库',
                '声明文件',
              ]
            },
            {
              text: 'ESLint',
              dir: 'eslint',
              collapsed: false,
              items: [
                '配置VsCode的ESLint格式化',
              ]
            }

          ],
        }
      ],
    },
  ],
})
