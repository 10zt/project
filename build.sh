#!/bin/sh
if [ "$1" = "build" ];then
    mkdir /home/changsheng/project/project67558/project
    cp -a /home/changsheng/project/project67558/server/. /home/changsheng/project/project67558/project/
    cd /home/changsheng/project/project67558/project
    rm -rf /home/changsheng/project/project67558/server
    echo "执行成功"
fi
