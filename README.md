# vueblog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### vue.config.js
```
module.exports = {
    baseURI:'/',//根路径
    outputDir:'dist',//构建输出目录
    assetsDir:'assets',//静态资源目录(js,css,img,fonts)
    lintOnSave:false,//是否开启eslint保存检测,有效值: true || false || 'error'
    devServer:{
        open:true,//是否自动弹出
        host:'localhost',
        port:8081,//端口
        https:false,
        hotOnly:false,//热更新
        proxy:{
            //配置跨域
            '/api':{
                target:"http://localhost:5000/api/",
                ws:true,//是否跨域
                changeOrigin:true,
                pathRewrite:{
                    "^/api":''
                }
            }
        }
    }
}
```

