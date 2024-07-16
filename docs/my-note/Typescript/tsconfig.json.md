# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext", //最终编译的类型
    "lib": [//影响编译环境
        "esnext", //es版本-更新的版本
        "dom", //dom环境不进行报错，例如使用document
        "dom.iterable", //有些dom环境的数字没有迭代器，开启该库环境后，不进行报错
        "scripthost"
        ],
    "downlevelIteration":true,//支持迭代器
    "allowJs": true, //是否运行ts与js交互，默认为不允许
    "skipLibCheck": true,//是否跳过对声明文件的检查
    "strict": true,//是否严格检查。开启后开启所有检查
    "strictNullChecks": true,//是否检查空类型
    "strictPropertyInitialization": true,//是否检查类型初始化
    "forceConsistentCasingInFileNames": true,//是否不允许大小写不一致的文件引用，true区分大小写
    "module": "esnext",//模块化时使用哪个模块化标准。webpack->ts>js->babel->最终的结果，该选项影响ts->js的过程
    "moduleResolution": "node",//设置解析模块的模式,使用什么方式解析模块，默认寻找index文件
    "resolveJsonModule": "preserve",//是否运行解析json模块，写好的json文件是否允许在ts文件中导入
    "isolatedModules": true,//是否一个文件当成一个模块，开启后每一个文件都应该有import/export
    "noImplicitUseStrict": true,//编译结果中不包含“use Strict”
    "removeComments": true,//编译结果中移除注释
    "noEmitOnError": true,//编译错误时不生成编译结果
    "esModuleInterop": true,//是否运行commonJs的模块化标准与ES6的模块化标准来进行交互，影响编译结果，在结果中生成辅助函数。
    "allowSyntheticDefaultImports": true,//是否开启默认导入的类型检查。开启esModuleInterop即不用开启该配置
    "noEmit": true,//不生成js文件，直接放入内存，直接编译后交给下一步处理
    "jsx": "preserve",//解析jsx的方式。preserve:[<div />]->[<div />]->[.jsx]、react:[<div />]->[React.createElement("div")]->[.js]react-native:[<div />]->[<div />]->[.js]

    "strictPropertyInitialization": true,//严格检查 属性初始化，检查构造函数与属性默认值
    "typeRoots":["./types"],// 声明文件位置
    "declaration":true,//发布后生成声明文件
    
    "importHelpers": true,
    "useDefineForClassFields": true,
    "sourceMap": true,
    "baseUrl": ".",
    "types": ["webpack-env"],
    "paths": {
      "@/*": ["src/*"]
    },
    
    "typeRoots": ["node_modules/@types", "src/types"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx",
    "src/types/*.d.ts", 
    "src/types/Global.d.ts"
  ],
  "exclude": ["node_modules"]
}

```
