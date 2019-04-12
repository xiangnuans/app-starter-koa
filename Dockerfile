FROM registry.cn-hangzhou.aliyuncs.com/aliyun-node/alinode:3.12.0-alpine

RUN apk update && \
  apk add tzdata && \
  ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
  echo "Asia/Shanghai" > /etc/timezone

WORKDIR /root/

COPY . .
RUN yarn --production

EXPOSE 9023
CMD  npm start
