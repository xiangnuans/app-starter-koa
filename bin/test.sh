#!/bin/sh

node -v
# 安装所有依赖
yarn install
# 代码风格审查
npm run lint
# 执行测试
npm run test
# apidoc安装
npm install apidoc
# 运行apidoc
 apidoc -i controller/ -o common/apidoc
