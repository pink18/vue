### ts.config.json
ts 模块解析配置文件
~~~js
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",// 在preserve模式下生成代码中会保留JSX以供后续的转换操作使用
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",// 编译器到哪里去查找模块
    "types": [
      "webpack-env"
    ],
    "paths": {// 路径映射 依据 baseUrl查找
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [// 设置编译文件 根据路径查找
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [// 不编译哪些文件
    "node_modules"
  ]
}

