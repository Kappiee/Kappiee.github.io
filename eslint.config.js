import { defineConfig } from "eslint-define-config";
import js from "@eslint/js";
import ts from "typescript-eslint";
// import vue from "eslint-plugin-vue";
import markdown from "eslint-plugin-markdown"; // 导入 markdown 插件

export default defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  // ...vue.configs["flat/essential"],
  ...markdown.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,vue,md}"],
    languageOptions: { ecmaVersion: "latest" },
    rules: {
      //大括号内侧必须有空格
      "object-curly-spacing": ["error", "always"],
      //数组的方括号内侧必须有空格
      "array-bracket-spacing": ["error", "always"],
      //计算属性名的括号内侧必须有空格
      "computed-property-spacing": ["error", "always"],
      //括号内侧必须有空格
      "space-in-parens": ["error", "always"],
      // 块状语句（如函数体、循环体等）前必须有空格
      "space-before-blocks": ["error", "always"],
      // 强制注释后有一个空格
      "spaced-comment": ["error", "always", { markers: ["/"] }],
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
]);
