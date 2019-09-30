## 项目说明

### 框架及技术栈

* [JavaScript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Antd Design](https://ant.design)
* [react-redux](https://github.com/reactjs/react-redux)
* [react-router](https://github.com/ReactTraining/react-router)
* [Less](http://lesscss.cn/)
* [Sass](https://www.sass.hk/)

## 程序目录

```
.
├── config                      # 项目配置文件(打包配置等)
├── scripts                     # npm scripts 脚本
├── public                      # 项目公共资源文件(此目录下的文件不会被构建工具处理)
│   ├── index.html              # 程序主页面
│   ├── favicon.ico             # 程序logo
├── src                         # 程序源文件
│   ├── index.jsx               # 程序启动和渲染
│   ├── components              # 全局表现组件
│   ├── containers              # 全局容器组件
│   │   ├──LocaleProvider       # 多语言配置
│   ├── static                  # 静态文件(音频、图片)
│   ├── styles                  # 程序公共样式
│   ├── constants               # 常量文件
│   ├── utils                   # 全局可用工具类
│   ├── routers                 # 路由配置
│   │   ├── index.js            # 全局路由表
│   │   ├── history.js          # react-router 历史配置
│   ├── store                   # redux store的创建以及中间件
│   │   ├── index.js            # store 配置文件
│   │   ├── rootReducers.js     # 全部的Reducer
```

### 安装说明

```shell
yarn
```

### 运行说明

```shell
yarn start
```

### 打包说明

```shell
yarn build
```
